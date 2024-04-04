import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    '/',
    '/booking',
    '/contact',
    '/howitworks',
    '/pricing',
    '/privacypolicy',
    '/termsofservice',
    '/signin',
    '/signup',
    '/api/items/', // TEMP: Allow unauthenticated access to this API route
    '/api/items/getAll', // TEMP: Allow unauthenticated access to this API route
    '/api/user/', // TEMP: Allow unauthenticated access to this API route
    '/api/user/addUser', // TEMP: Allow unauthenticated access to this API route
  ],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: [],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
