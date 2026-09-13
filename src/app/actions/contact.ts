'use server';

interface SendContactEmailParams {
  name: string;
  email: string;
  message: string;
}

interface ActionResponse {
  success: boolean;
  message: string;
}

export async function sendContactEmail(params: SendContactEmailParams): Promise<ActionResponse> {
  const { name, email, message } = params;

  // Basic validation
  if (!name || !name.trim()) {
    return { success: false, message: 'Please provide your name.' };
  }
  if (!email || !email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
    return { success: false, message: 'Please provide a valid email address.' };
  }
  if (!message || !message.trim()) {
    return { success: false, message: 'Please enter a message.' };
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      message: 'Email service is not configured. Please contact diya.chanda03@gmail.com directly.',
    };
  }

  try {
    const payload: Record<string, any> = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name.trim(),
        from_email: email.trim(),
        message: message.trim(),
        to_email: 'diya.chanda03@gmail.com',
      },
    };

    if (privateKey) {
      payload.accessToken = privateKey;
    }

    const siteUrl = process.env.SITE_URL || 'https://www.diyachanda.tech';

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': siteUrl,
        'Referer': `${siteUrl}/`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('EmailJS Server Action error:', errorText);
      return {
        success: false,
        message: 'Could not send message via EmailJS. Please email diya.chanda03@gmail.com directly.',
      };
    }

    return {
      success: true,
      message: 'Message delivered! I will review your inquiry and get back to you shortly.',
    };
  } catch (err) {
    console.error('Server Action execution error:', err);
    return {
      success: false,
      message: 'An unexpected transmission error occurred. Please contact diya.chanda03@gmail.com.',
    };
  }
}
