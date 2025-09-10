import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('API Payment success data:', body);
    
    const url = new URL('/success', request.url);
    Object.keys(body).forEach(key => {
      url.searchParams.set(key, body[key]);
    });
    
    return NextResponse.redirect(url);
  } catch (error) {
    console.error('API Payment success error:', error);
    return NextResponse.redirect(new URL('/success', request.url));
  }
}

export async function GET(request: NextRequest) {
  console.log('API GET /payment/success');
  return NextResponse.redirect(new URL('/success', request.url));
}
