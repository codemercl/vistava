import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(`Middleware: ${request.method} ${request.nextUrl.pathname}`);
  
  if (request.nextUrl.pathname === '/success' && request.method === 'POST') {
    console.log('Redirecting POST /success to GET /success');
    return NextResponse.redirect(new URL('/success', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/success', '/api/payment/success']
};
