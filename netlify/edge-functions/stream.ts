// Netlify Edge Function (Deno) — proxies the upstream Icecast feed
// so the HTTPS frontend can play HTTP-only audio without mixed-content
// or expired-certificate errors.
//
// Edge Functions support streaming responses indefinitely, unlike the
// regular Netlify Functions which buffer the full response and time out
// after ~10 seconds for live audio.

const UPSTREAM = 'http://fm102.uz:8000/autoradio'

export default async (_request: Request) => {
  const upstream = await fetch(UPSTREAM, { redirect: 'follow' })

  if (!upstream.ok || !upstream.body) {
    return new Response(
      JSON.stringify({ error: 'upstream unavailable', status: upstream.status }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const headers = new Headers()
  headers.set('Content-Type', upstream.headers.get('content-type') || 'audio/mpeg')
  headers.set('Cache-Control', 'no-store, no-cache, must-revalidate')
  headers.set('Access-Control-Allow-Origin', '*')
  headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS')
  headers.set('X-Accel-Buffering', 'no')

  return new Response(upstream.body, { status: 200, headers })
}

export const config = {
  path: '/api/stream',
}
