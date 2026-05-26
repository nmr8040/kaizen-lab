type BrandLogoProps = {
  /** header: ナビ用 / about: 自己紹介セクション用 */
  variant?: 'header' | 'about'
  className?: string
}

const LOGO_SRC = '/logo-kaizen-lab.png'

export function BrandLogo({ variant = 'header', className = '' }: BrandLogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt='KAIZEN LAB カイゼンラボ'
      className={`lp-brand-logo lp-brand-logo--${variant} ${className}`.trim()}
      width={variant === 'header' ? 168 : 300}
      height={variant === 'header' ? 55 : 99}
      decoding='async'
    />
  )
}
