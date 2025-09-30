// EmailJS Configuration for Lamcis Contact Form
// IMPORTANT: The Service ID must match exactly what's in your EmailJS dashboard!

const EMAILJS_CREDENTIALS = {
    // Your Public Key (this looks correct)
    publicKey: '93yI5SnYiD2pY1LjB',
    
    // ⚠️ THIS SERVICE ID IS WRONG! Check your EmailJS dashboard for the correct one
    serviceId: 'service_s8duv87',  // ← This needs to be the EXACT Service ID from your dashboard
    
    // Template ID (this looks correct)
    templateId: 'template_xgtyfk7'
};

// Debugging help
console.log('🔍 Current Service ID:', EMAILJS_CREDENTIALS.serviceId);
console.log('❌ If you see "service not found", go to EmailJS Dashboard → Email Services');
console.log('📋 Copy the EXACT Service ID and replace it in this file');

// Check if config looks valid
if (EMAILJS_CREDENTIALS.serviceId.includes('jnd1177')) {
    console.warn('⚠️ WARNING: This Service ID may not exist. Please verify in EmailJS dashboard!');
}