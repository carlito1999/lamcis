# EmailJS Setup Instructions for Lamcis Contact Form

## Overview
The contact form now supports email notifications using EmailJS service. When someone submits a contact form, you'll receive an email notification automatically.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup wizard to connect your email account
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Subject:
```
Νέο Μήνυμα από την Ιστοσελίδα Lamcis - {{from_name}}
```

### Template Body:
```
Έχετε λάβει ένα νέο μήνυμα από την ιστοσελίδα σας:

Όνομα: {{from_name}}
Email: {{from_email}}
Ημερομηνία: {{timestamp}}

Μήνυμα:
{{message}}

---
Αυτό το email στάλθηκε αυτόματα από την φόρμα επικοινωνίας της ιστοσελίδας Lamcis.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_abcdefghijk`)

## Step 5: Update Your Website
1. Open `contact.html` file
2. Find this section in the JavaScript:
```javascript
const EMAILJS_CONFIG = {
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
    serviceId: 'YOUR_EMAILJS_SERVICE_ID',
    templateId: 'YOUR_EMAILJS_TEMPLATE_ID'
};
```

3. Replace the values with your actual credentials:
```javascript
const EMAILJS_CONFIG = {
    publicKey: 'user_abcdefghijk',       // Your Public Key
    serviceId: 'service_abc123',         // Your Service ID
    templateId: 'template_xyz789'        // Your Template ID
};
```

4. Also update the recipient email if needed:
```javascript
to_email: 'lefteristsegkos2@gmail.com'  // Email address for receiving notifications
```

## Step 6: Test the Setup
1. Save all changes to `contact.html`
2. Open your website in a browser
3. Fill out the contact form with test data
4. Submit the form
5. Check your email inbox for the notification

## Important Notes

### Free Plan Limits
- EmailJS free plan allows **200 emails per month**
- Perfect for small business contact forms
- Upgrade if you need more

### Security
- Your EmailJS credentials are visible in the client-side code
- This is normal and expected for EmailJS
- The service has built-in rate limiting and abuse protection

### Troubleshooting
If emails aren't being sent:
1. Check the browser console for error messages
2. Verify all credentials are correct
3. Make sure your email service is properly connected
4. Check your spam/junk folder

### Backup
- Messages are still saved locally in the browser
- You can access them via the admin panel (`admin.html`)
- EmailJS is an additional notification system

## Template Variables Available
You can customize your email template using these variables:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{message}}` - Customer's message
- `{{timestamp}}` - When the message was sent
- `{{to_email}}` - Your email (recipient)

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- If you need help with setup, the console in your browser will show any errors
- Test thoroughly before going live!

---
*Setup completed successfully! You'll now receive email notifications for all contact form submissions.*