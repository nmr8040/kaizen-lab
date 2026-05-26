import type { LogoVariant } from '@/lib/logo-config'

type KaizenLogoProps = {
  variant: LogoVariant
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SIZES = { sm: 36, md: 48, lg: 80 } as const

function Grad({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1='0%' y1='100%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor='#061428' />
        <stop offset='45%' stopColor='#1e4a8c' />
        <stop offset='100%' stopColor='#0ea5e9' />
      </linearGradient>
      <linearGradient id={`${id}-accent`} x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor='#38bdf8' />
        <stop offset='100%' stopColor='#10b981' />
      </linearGradient>
    </defs>
  )
}

/** A: K + 上昇矢印 — 改善・カイゼン */
function LogoArrow({ gid }: { gid: string }) {
  return (
    <svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden>
      <Grad id={gid} />
      <rect width='48' height='48' rx='10' fill={`url(#${gid})`} />
      {/* K の縦・上腕 */}
      <path
        d='M14 14v20M14 24h8'
        stroke='#fff'
        strokeWidth='3.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* K の下腕 → 上昇矢印 */}
      <path
        d='M22 24 L32 16 L32 22'
        stroke='#fff'
        strokeWidth='3.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M28 28 L36 20 M36 20 L36 26'
        stroke={`url(#${gid}-accent)`}
        strokeWidth='2.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

/** B: K + 六角形 — 工場・産業 */
function LogoHexagon({ gid }: { gid: string }) {
  return (
    <svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden>
      <Grad id={gid} />
      <rect width='48' height='48' rx='10' fill={`url(#${gid})`} />
      <path
        d='M24 11 L33.5 16.5 V27.5 L24 33 L14.5 27.5 V16.5 Z'
        stroke='rgba(255,255,255,0.35)'
        strokeWidth='1.5'
        fill='none'
      />
      <path
        d='M17 15v18M17 24h6M23 24l8-9M23 24l6 9'
        stroke='#fff'
        strokeWidth='2.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='33' cy='15' r='2' fill={`url(#${gid}-accent)`} />
    </svg>
  )
}

/** C: K + グラフ — データ分析 */
function LogoChart({ gid }: { gid: string }) {
  return (
    <svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden>
      <Grad id={gid} />
      <rect width='48' height='48' rx='10' fill={`url(#${gid})`} />
      <path
        d='M13 14v18M13 23h7M20 23l7-7'
        stroke='#fff'
        strokeWidth='2.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect x='27' y='28' width='4' height='8' rx='1' fill='rgba(255,255,255,0.5)' />
      <rect x='33' y='24' width='4' height='12' rx='1' fill='rgba(255,255,255,0.7)' />
      <rect x='39' y='20' width='4' height='16' rx='1' fill={`url(#${gid}-accent)`} />
      <path
        d='M27 20 L33 17 L39 14'
        stroke={`url(#${gid}-accent)`}
        strokeWidth='1.8'
        strokeLinecap='round'
        opacity='0.9'
      />
    </svg>
  )
}

/** D: K + ダッシュボードUI */
function LogoDashboard({ gid }: { gid: string }) {
  return (
    <svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden>
      <Grad id={gid} />
      <rect width='48' height='48' rx='10' fill={`url(#${gid})`} />
      <path
        d='M12 14v16M12 22h6'
        stroke='#fff'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <path
        d='M18 22 L24 16'
        stroke='#fff'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <rect
        x='26'
        y='14'
        width='14'
        height='14'
        rx='3'
        stroke='rgba(255,255,255,0.4)'
        strokeWidth='1.2'
        fill='rgba(255,255,255,0.08)'
      />
      <rect x='28' y='16' width='4' height='4' rx='1' fill={`url(#${gid}-accent)`} />
      <rect x='34' y='16' width='4' height='4' rx='1' fill='rgba(255,255,255,0.5)' />
      <rect x='28' y='22' width='10' height='2' rx='1' fill='rgba(255,255,255,0.35)' />
      <rect x='28' y='25' width='7' height='2' rx='1' fill='rgba(255,255,255,0.25)' />
    </svg>
  )
}

/** E: K + 製造ライン */
function LogoLine({ gid }: { gid: string }) {
  return (
    <svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden>
      <Grad id={gid} />
      <rect width='48' height='48' rx='10' fill={`url(#${gid})`} />
      <path
        d='M14 14v18M14 23h7M21 23l7-6'
        stroke='#fff'
        strokeWidth='2.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='10'
        y1='34'
        x2='38'
        y2='34'
        stroke='rgba(255,255,255,0.35)'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <line
        x1='14'
        y1='38'
        x2='34'
        y2='38'
        stroke='rgba(255,255,255,0.2)'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <circle cx='16' cy='34' r='2.5' fill={`url(#${gid}-accent)`} />
      <circle cx='24' cy='34' r='2.5' fill='rgba(255,255,255,0.6)' />
      <circle cx='32' cy='34' r='2.5' fill='rgba(255,255,255,0.4)' />
      <path
        d='M28 12 L34 8 L34 13'
        stroke={`url(#${gid}-accent)`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const LOGO_MAP = {
  arrow: LogoArrow,
  hexagon: LogoHexagon,
  chart: LogoChart,
  dashboard: LogoDashboard,
  line: LogoLine
} as const

export function KaizenLogo({
  variant,
  size = 'sm',
  className = ''
}: KaizenLogoProps) {
  const px = SIZES[size]
  const gid = `kl-${variant}-${size}`
  const Logo = LOGO_MAP[variant]

  return (
    <span
      className={`kaizen-logo kaizen-logo--${size} ${className}`.trim()}
      style={{ width: px, height: px }}
      role='img'
      aria-label='KAIZEN LAB'
    >
      <Logo gid={gid} />
    </span>
  )
}
