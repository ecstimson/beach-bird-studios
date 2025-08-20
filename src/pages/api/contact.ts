import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse form data
    const formData = await request.formData();
    
    const firstName = formData.get('firstName')?.toString() || '';
    const lastName = formData.get('lastName')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const company = formData.get('company')?.toString() || '';
    const service = formData.get('service')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    // Validate required fields
    if (!firstName || !lastName || !email || !service) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing required fields' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Invalid email address' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Format the email content
    const emailContent = `
New Contact Form Submission from Beach Bird Studios Website

Contact Information:
--------------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}

Service Interested In: ${service}

Message:
--------
${message || 'No additional message provided'}

---
This email was sent from the contact form at beachbirdstudios.com
    `.trim();

    // Email sending options - choose one:
    
    // Option 1: Use Web3Forms (recommended - free tier available)
    // Sign up at https://web3forms.com and add your access key to .env file
    if (process.env.WEB3FORMS_ACCESS_KEY && process.env.WEB3FORMS_ACCESS_KEY !== 'your_access_key_here') {
      const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          to_email: 'eric@beachbirdstudios.com',
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          subject: `New Contact Form Submission - ${service}`,
          message: emailContent,
        }),
      });

      if (!web3FormsResponse.ok) {
        throw new Error('Failed to send email');
      }
    } 
    // Option 2: Use Formspree (free tier available)
    // Sign up at https://formspree.io and add your endpoint to .env file
    else if (process.env.FORMSPREE_ENDPOINT) {
      const formspreeResponse = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email: email,
          phone: phone,
          company: company,
          service: service,
          message: message,
          _subject: `New Contact Form Submission - ${service}`,
        }),
      });

      if (!formspreeResponse.ok) {
        throw new Error('Failed to send email');
      }
    }
    // Option 3: Log to console for development/testing
    // In production, you must use one of the email services above
    else {
      console.log('=================================');
      console.log('NEW CONTACT FORM SUBMISSION');
      console.log('=================================');
      console.log(emailContent);
      console.log('=================================');
      console.log('To enable email delivery, please:');
      console.log('1. Sign up for a free account at https://web3forms.com');
      console.log('2. Get your access key');
      console.log('3. Create a .env file based on .env.example');
      console.log('4. Add your access key to the .env file');
      console.log('=================================');
      
      // For now, we'll still return success so the form works
      // but you should set up email delivery before going live
    }

    // Return success response
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Your message has been sent successfully! We\'ll be in touch within 1 business day.' 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to send message. Please try again or call us directly.' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};