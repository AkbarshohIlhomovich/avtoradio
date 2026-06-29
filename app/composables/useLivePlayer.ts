// Shared Avtoradio live-stream player state.
// One Audio instance per browser session, reactive flags shared across
// every component that calls useLivePlayer().

const STREAM_URLS = [
  'http://fm102.uz:8000/autoradio',
  'https://fm102.uz:8443/autoradio',
]

const playing = ref(false)
const loading = ref(false)

let audio: HTMLAudioElement | null = null
let userIntent: 'play' | 'pause' = 'pause'
let streamIndex = 0

function ensureAudio() {
  if (audio || typeof window === 'undefined') return
  audio = new Audio()
  audio.preload = 'none'
  audio.crossOrigin = 'anonymous'
  audio.volume = 0.9
  audio.addEventListener('playing', () => { loading.value = false; playing.value = true })
  audio.addEventListener('pause',   () => { if (userIntent === 'pause') { playing.value = false; loading.value = false } })
  audio.addEventListener('waiting', () => { if (userIntent === 'play')  loading.value = true })
  audio.addEventListener('error',   () => {
    if (userIntent !== 'play') return
    playing.value = false
    if (streamIndex < STREAM_URLS.length - 1) tryNextStream()
    else loading.value = false
  })
}

function tryNextStream() {
  if (!audio) return
  streamIndex += 1
  audio.src = `${STREAM_URLS[streamIndex]}?t=${Date.now()}`
  audio.play().catch(() => { loading.value = false; playing.value = false })
}

async function toggle() {
  ensureAudio()
  if (!audio) return

  if (playing.value || loading.value) {
    userIntent = 'pause'
    audio.pause()
    audio.removeAttribute('src')
    audio.load()
    playing.value = false
    loading.value = false
    return
  }

  userIntent = 'play'
  loading.value = true
  streamIndex = 0
  audio.src = `${STREAM_URLS[streamIndex]}?t=${Date.now()}`
  try {
    await audio.play()
  } catch {
    loading.value = false
  }
}

export function useLivePlayer() {
  return {
    playing: readonly(playing),
    loading: readonly(loading),
    toggle,
  }
}
