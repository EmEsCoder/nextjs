import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {

    const token = request.cookies.get('token')
    if(!token) {

      return NextResponse.redirect(new URL('/', request.url))
    }
}
 
export const config = {
  matcher: '/posts',
}