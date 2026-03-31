import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);
    
    // In a real app, you would save to database here
    console.log('API: Contact form submission received:', validatedData);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      message: 'Cảm ơn bạn đã liên hệ! Boss sẽ trả lời tin nhắn của bạn sớm nhất.',
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Đã có lỗi xảy ra trên máy chủ.' },
      { status: 500 }
    );
  }
}
