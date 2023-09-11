import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
    publicRoutes: [
        '/api/(.*)',
    ],
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

// debug: true,
// jwksCacheTtlInMs: 60 * 60 * 1000,
// clockSkewInMs: 5 * 60 * 1000,