import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || "";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Proteggiamo solo le rotte sotto /admin, ma escludiamo esplicitamente /auth-admin/login
  if (pathname.startsWith('/auth-admin') && !pathname.startsWith('/auth-admin/login')) {

    // Controlliamo la presenza del token nel cookie o nell'header Authorization
    const cookieToken = request.cookies.get('admin_token')?.value;
    const authHeader = request.headers.get('authorization');
    const bearerToken = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    const token = cookieToken || bearerToken;

    if (!token) {
      return NextResponse.redirect(new URL('/auth-admin/login', request.url));
    }

    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      // Validiamo il JWT
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (_error) {
      // Se il token non è valido o scaduto, redirect al login
      return NextResponse.redirect(new URL('/auth-admin/login', request.url));
    }
  }

  return NextResponse.next();
}

// Configurazione per limitare l'esecuzione del middleware
export const config = {
  matcher: ['/auth-admin/:path*'],
};