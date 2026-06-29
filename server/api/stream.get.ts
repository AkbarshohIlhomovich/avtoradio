// HTTPS → HTTP Icecast proxy.
//
// fm102.uz Icecast server only ships HTTP (https has expired cert).
// Browsers on our HTTPS frontend refuse the upstream directly, so we
// pipe the bytes through this serverless endpoint.

const UPSTREAM = 'http://fm102.uz:8000/autoradio'

export default defineEventHandler(async (event) => {
  const upstream = await fetch(UPSTREAM, { redirect: 'follow' })

  if (!upstream.ok || !upstream.body) {
    setResponseStatus(event, 502)
    return { error: 'upstream not available', status: upstream.status }
  }

  setHeaders(event, {
    'Content-Type': upstream.headers.get('content-type') || 'audio/mpeg',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD',
    'X-Accel-Buffering': 'no',
  })

  return sendStream(event, upstream.body as unknown as ReadableStream)
})
