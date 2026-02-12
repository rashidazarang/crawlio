import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Crawlio — Download any website. Browse it offline.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo mark */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 64 64"
          fill="none"
          style={{ marginBottom: 32 }}
        >
          <path
            d="M48 12a28 28 0 1 0 0 40"
            stroke="#a5f3fc"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="20" cy="24" r="3" fill="#a5f3fc" />
          <circle cx="32" cy="16" r="2.5" fill="#a5f3fc" opacity="0.7" />
          <circle cx="20" cy="40" r="2.5" fill="#a5f3fc" opacity="0.7" />
          <circle cx="32" cy="48" r="2" fill="#a5f3fc" opacity="0.5" />
          <line x1="20" y1="24" x2="32" y2="16" stroke="#a5f3fc" strokeWidth="1.5" opacity="0.4" />
          <line x1="20" y1="24" x2="20" y2="40" stroke="#a5f3fc" strokeWidth="1.5" opacity="0.4" />
          <line x1="20" y1="40" x2="32" y2="48" stroke="#a5f3fc" strokeWidth="1.5" opacity="0.4" />
          <circle cx="26" cy="32" r="4" fill="#a5f3fc" opacity="0.9" />
        </svg>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#f5f5f5',
            letterSpacing: '-0.03em',
            marginBottom: 16,
          }}
        >
          Crawlio
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#a3a3a3',
            letterSpacing: '-0.01em',
          }}
        >
          Download any website. Browse it offline.
        </div>
      </div>
    ),
    { ...size }
  )
}
