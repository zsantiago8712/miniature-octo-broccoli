import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    const cors_origin = process.env.CORS_ORIGIN || "http://localhost:3001";

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
        return new NextResponse(null, {
            status: 200,
            headers: {
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': cors_origin,
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-trpc-source',
            },
        });
    }

    const res = NextResponse.next()

    res.headers.set('Access-Control-Allow-Credentials', "true")
    res.headers.set('Access-Control-Allow-Origin', cors_origin)
    res.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    res.headers.set(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, x-trpc-source'
    )

    return res
}

export const config = {
    matcher: ['/trpc/:path*', '/api/:path*'],
}
