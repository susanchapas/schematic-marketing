import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Validate message length
    if (data.message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Send an email notification
    // 2. Store in database
    // 3. Integrate with CRM
    // 4. Send to webhook (Slack, Discord, etc.)

    // For now, log the submission (replace with actual implementation)
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      company: data.company || 'Not provided',
      projectType: data.projectType || 'Not specified',
      budget: data.budget || 'Not specified',
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
