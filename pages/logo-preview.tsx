import Head from 'next/head'
import Link from 'next/link'

import { KaizenLogo } from '@/components/landing/KaizenLogo'
import {
  ACTIVE_LOGO_VARIANT,
  LOGO_VARIANTS,
  type LogoVariant
} from '@/lib/logo-config'

export default function LogoPreviewPage() {
  return (
    <div className='logo-preview'>
      <Head>
        <title>ロゴ候補 | KAIZEN LAB</title>
        <meta name='robots' content='noindex' />
      </Head>

      <header className='logo-preview__header'>
        <Link href='/' className='logo-preview__back'>
          ← サイトに戻る
        </Link>
        <h1>KAIZEN LAB ロゴ候補</h1>
        <p>
          現在は公式ロゴ画像（<code>/logo-kaizen-lab.png</code>）をサイトで使用中です。
          以下は以前のSVG候補です。
        </p>
      </header>

      <div className='logo-preview__grid'>
        {LOGO_VARIANTS.map((v) => (
          <LogoCard key={v.id} variant={v.id} name={v.name} concept={v.concept} active={v.id === ACTIVE_LOGO_VARIANT} />
        ))}
      </div>

      <section className='logo-preview__sizes'>
        <h2>サイズ比較（arrow パターン）</h2>
        <div className='logo-preview__size-row'>
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <div key={s} className='logo-preview__size-item'>
              <KaizenLogo variant='arrow' size={s} />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='logo-preview__context'>
        <h2>ヘッダーでの見え方</h2>
        <div className='logo-preview__mock-header'>
          {LOGO_VARIANTS.map((v) => (
            <div key={v.id} className='logo-preview__mock-row'>
              <KaizenLogo variant={v.id} size='sm' />
              <span>KAIZEN LAB</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function LogoCard({
  variant,
  name,
  concept,
  active
}: {
  variant: LogoVariant
  name: string
  concept: string
  active: boolean
}) {
  return (
    <article className={`logo-card ${active ? 'logo-card--active' : ''}`}>
      {active && <span className='logo-card__badge'>採用中</span>}
      <div className='logo-card__mark'>
        <KaizenLogo variant={variant} size='lg' />
      </div>
      <div className='logo-card__on-white'>
        <KaizenLogo variant={variant} size='md' />
      </div>
      <h3>{name}</h3>
      <p>{concept}</p>
      <code>variant=&quot;{variant}&quot;</code>
    </article>
  )
}
