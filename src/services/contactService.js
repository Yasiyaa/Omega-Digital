/**
 * Omega Innovation - Contact & Inquiry Dispatch Service
 * 
 * Routes inquiries directly to hello@omegai.com.au via Web3Forms
 * and prepares full service metadata, client parameters, and autoresponder context.
 */

export const SERVICES_OPTIONS = [
  {
    value: 'branding',
    label: 'Brand Systems & Corporate Identity',
    description: 'Custom marks, complete stationery suite, staff ID badges, sales collateral & brand manual.'
  },
  {
    value: 'corporate-web',
    label: 'Corporate Website Platform',
    description: 'Sub-second responsive platform with 1-Year complimentary cloud hosting & managed domain.'
  },
  {
    value: 'web-apps',
    label: 'Web Applications & Business Systems',
    description: 'Bespoke central backends, production tracking, supply chain portals & automation pipelines.'
  },
  {
    value: 'end-to-end',
    label: 'Full Digital Transformation (Branding + Web + Apps)',
    description: 'Complete cross-disciplinary ecosystem: corporate identity + digital headquarters + operational systems.'
  }
];

export const TIMELINES_OPTIONS = [
  { value: 'urgent', label: 'Urgent (Within 3 – 4 Weeks)' },
  { value: 'standard', label: 'Standard (1 – 2 Months)' },
  { value: 'strategic', label: 'Strategic / Ongoing Engagement' }
];

export function getServiceLabel(serviceKey) {
  const match = SERVICES_OPTIONS.find((s) => s.value === serviceKey);
  return match ? `${match.label} — [${match.description}]` : (serviceKey || 'General Consultation');
}

export function getServiceShortTitle(serviceKey) {
  const match = SERVICES_OPTIONS.find((s) => s.value === serviceKey);
  return match ? match.label : (serviceKey || 'General Consultation');
}

export function getTimelineLabel(timelineKey) {
  const match = TIMELINES_OPTIONS.find((t) => t.value === timelineKey);
  return match ? match.label : (timelineKey || 'Standard (1 – 2 Months)');
}

/**
 * Dispatches an inquiry payload to hello@omegai.com.au
 * 
 * @param {Object} data 
 * @param {string} data.fullName
 * @param {string} data.email
 * @param {string} data.service
 * @param {string} data.timeline
 * @param {string} data.message
 * @param {string} [data.botcheck]
 * @returns {Promise<{success: boolean, serviceTitle: string, timelineTitle: string, email: string, fullName: string, error?: string, isDemo?: boolean}>}
 */
export async function submitInquiry(data) {
  // Primary key delivers to hello@omegai.com.au
  const primaryKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '9526fe88-7127-41bd-9b39-8a2e4d12931d';
  // Optional secondary key delivers directly to omegai.com.au@gmail.com
  const gmailKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_GMAIL;

  const serviceLabel = getServiceLabel(data.service);
  const serviceTitle = getServiceShortTitle(data.service);
  const timelineTitle = getTimelineLabel(data.timeline);
  const clientName = data.fullName.trim();
  const clientEmail = data.email.trim();
  const clientMessage = (data.message && data.message.trim()) ? data.message.trim() : 'No specific operational notes attached.';

  // Construct Web3Forms payload with explicit required services labeling
  const payload = {
    access_key: primaryKey,
    subject: `[New Client Inquiry] ${serviceTitle} — ${clientName}`,
    from_name: 'Omega Innovation Inquiry Portal',
    name: clientName,
    email: clientEmail,
    replyto: clientEmail,
    // Explicit, clearly formatted fields displayed in the notification email
    'REQUIRED SERVICES': serviceLabel,
    'DELIVERY TIMELINE': timelineTitle,
    'CLIENT FULL NAME': clientName,
    'CLIENT WORK EMAIL': clientEmail,
    'REQUIREMENTS & OPERATIONAL SCOPE': clientMessage,
    'SUBMISSION TIMESTAMP': new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' }) + ' (Melbourne / AEST)',
    botcheck: data.botcheck || ''
  };

  try {
    const primaryPromise = fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    // If secondary Gmail key is provided, dispatch copy to omegai.com.au@gmail.com concurrently
    if (gmailKey && gmailKey !== primaryKey) {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ ...payload, access_key: gmailKey })
      }).catch((e) => console.warn('[Gmail Dispatch Warning]:', e));
    }

    const response = await primaryPromise;

    let result = null;
    try {
      result = await response.json();
    } catch {
      // In case an HTML or non-JSON status page is returned
    }

    if (response.ok && result && result.success) {
      return {
        success: true,
        serviceTitle,
        serviceLabel,
        timelineTitle,
        email: clientEmail,
        fullName: clientName
      };
    } else {
      const errMsg = (result && result.message) ? result.message : `Transmission failed (Status: ${response.status}). Please reach out to hello@omegai.com.au directly.`;
      return {
        success: false,
        error: errMsg
      };
    }
  } catch (err) {
    console.error('[Omega Innovation Contact Dispatch Error]:', err);
    return {
      success: false,
      error: 'Network connectivity error. Please verify your connection or email hello@omegai.com.au directly.'
    };
  }
}
