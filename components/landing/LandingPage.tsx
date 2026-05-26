import Head from 'next/head'
import * as React from 'react'

import {
  ABOUT_TEXT,
  CAPABILITIES,
  DEMOS,
  FLOW_STEPS,
  NAV_LINKS,
  PROBLEMS,
  SITE,
  SOLUTIONS
} from '@/lib/landing-data'

function IconChart() {
  return (
    <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#0ea5e9' strokeWidth='2'>
      <path d='M3 20h18M7 16v-4M12 16V8M17 16v-6' />
    </svg>
  )
}
function IconLink() {
  return (
    <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#0ea5e9' strokeWidth='2'>
      <path d='M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71' />
      <path d='M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71' />
    </svg>
  )
}
function IconAlert() {
  return (
    <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#0ea5e9' strokeWidth='2'>
      <path d='M12 9v4M12 17h.01' />
      <path d='M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z' />
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#0ea5e9' strokeWidth='2'>
      <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' />
    </svg>
  )
}
const PROBLEM_ICONS = [IconChart, IconLink, IconAlert, IconUsers]

function HeroDashboard() {
  return (
    <div className='lp-hero__dashboard' aria-hidden>
      <div className='lp-dash-mock'>
        <div className='lp-dash-mock__bar'>
          <span className='lp-dash-mock__dot' />
          <span className='lp-dash-mock__dot' />
          <span className='lp-dash-mock__dot' />
        </div>
        <div className='lp-dash-mock__metrics'>
          <div className='lp-dash-mock__metric'>
            <span>89%</span>
            <small>稼働率</small>
          </div>
          <div className='lp-dash-mock__metric'>
            <span>12</span>
            <small>改善件数</small>
          </div>
          <div className='lp-dash-mock__metric'>
            <span>▼23%</span>
            <small>ムダ削減</small>
          </div>
        </div>
        <div className='lp-dash-mock__chart'>
          <span style={{ height: '45%' }} />
          <span style={{ height: '70%' }} />
          <span style={{ height: '55%' }} />
          <span style={{ height: '90%' }} />
          <span style={{ height: '60%' }} />
          <span style={{ height: '75%' }} />
        </div>
      </div>
    </div>
  )
}

function DemoPreview({ accent }: { accent: 'cyan' | 'green' }) {
  return (
    <div className={`lp-demo-card__preview lp-demo-card__preview--${accent}`}>
      <div className='lp-demo-preview-ui'>
        <div className='lp-demo-preview-ui__row'>
          <div
            className={`lp-demo-preview-ui__chip ${accent === 'cyan' ? 'lp-demo-preview-ui__chip--highlight' : 'lp-demo-preview-ui__chip--green'}`}
          />
          <div className='lp-demo-preview-ui__chip' />
          <div className='lp-demo-preview-ui__chip' />
        </div>
        <div className='lp-demo-preview-ui__lines'>
          <div className='lp-demo-preview-ui__line' />
          <div className='lp-demo-preview-ui__line' />
          <div className='lp-demo-preview-ui__line' />
        </div>
      </div>
    </div>
  )
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className='lp'>
      <Head>
        <title>{SITE.name} | 製造業・物流現場向け DX支援</title>
        <meta name='description' content={SITE.description} />
        <meta property='og:title' content={`${SITE.name} | 現場のムダを、データで見える化。`} />
        <meta property='og:description' content={SITE.description} />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <header className={`lp-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className='lp-header__inner'>
          <a href='#' className='lp-logo' onClick={closeMenu}>
            <span className='lp-logo__icon'>K</span>
            {SITE.name}
          </a>
          <button
            type='button'
            className='lp-menu-btn'
            aria-label='メニュー'
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              {menuOpen ? (
                <path d='M6 6l12 12M6 18L18 6' />
              ) : (
                <>
                  <path d='M4 7h16M4 12h16M4 17h16' />
                </>
              )}
            </svg>
          </button>
          <nav className={`lp-nav ${menuOpen ? 'is-open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='lp-nav__link'
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a href='#contact' className='lp-nav__cta' onClick={closeMenu}>
              相談する
            </a>
          </nav>
        </div>
      </header>

      <section className='lp-hero'>
        <div className='lp-hero__bg'>
          <div className='lp-hero__grid' />
          <div className='lp-hero__glow' />
        </div>
        <HeroDashboard />
        <div className='lp-hero__inner'>
          <div className='lp-hero__badge'>{SITE.tagline}</div>
          <h1 className='lp-hero__title'>
            現場のムダを、<em>データで見える化。</em>
          </h1>
          <p className='lp-hero__sub'>{SITE.description}</p>
          <div className='lp-hero__actions'>
            <a href='#demos' className='lp-btn lp-btn--primary'>
              デモを見る
            </a>
            <a href='#contact' className='lp-btn lp-btn--outline'>
              無料相談する
            </a>
          </div>
        </div>
      </section>

      <section className='lp-section lp-section--alt' id='problems'>
        <div className='lp-container'>
          <span className='lp-section__label'>課題</span>
          <h2 className='lp-section__title'>こんなお悩みありませんか？</h2>
          <p className='lp-section__lead'>
            製造・物流現場でよくある課題を、データとDXの力で解決します。
          </p>
          <div className='lp-problems'>
            {PROBLEMS.map((item, i) => {
              const Icon = PROBLEM_ICONS[i]!
              return (
              <article key={item.title} className='lp-problem-card'>
                <div className='lp-problem-card__icon'><Icon /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            )})}
          </div>
        </div>
      </section>

      <section className='lp-section'>
        <div className='lp-container'>
          <span className='lp-section__label'>解決策</span>
          <h2 className='lp-section__title'>現場で使えるDXで、改善を仕組み化</h2>
          <p className='lp-section__lead'>
            データ整理から改善提案まで、一貫した支援で現場の変化を実現します。
          </p>
          <div className='lp-solutions'>
            {SOLUTIONS.map((item) => (
              <article key={item.title} className='lp-solution-card'>
                <div className='lp-solution-card__step'>{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='lp-section lp-section--alt' id='capabilities'>
        <div className='lp-container'>
          <span className='lp-section__label'>サービス</span>
          <h2 className='lp-section__title'>できること</h2>
          <p className='lp-section__lead'>
            現場の実務に即したツール開発・データ整備・見える化を提供します。
          </p>
          <div className='lp-capabilities'>
            {CAPABILITIES.map((item) => (
              <article key={item.title} className='lp-cap-card'>
                <div className='lp-cap-card__icon'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#1e4a8c' strokeWidth='2'>
                    <rect x='3' y='3' width='18' height='18' rx='2' />
                    <path d='M3 9h18M9 21V9' />
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='lp-section' id='demos'>
        <div className='lp-container'>
          <span className='lp-section__label'>デモ</span>
          <h2 className='lp-section__title'>デモサイト</h2>
          <p className='lp-section__lead'>
            実際に操作できるデモで、現場での使い方をイメージできます。
          </p>
          <div className='lp-demos'>
            {DEMOS.map((demo) => (
              <article key={demo.title} className='lp-demo-card'>
                <DemoPreview accent={demo.accent} />
                <div className='lp-demo-card__body'>
                  <h3>{demo.title}</h3>
                  <p>{demo.description}</p>
                  <a
                    href={demo.url}
                    className='lp-btn lp-btn--accent'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    デモを見る →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='lp-section lp-section--alt' id='about'>
        <div className='lp-container'>
          <span className='lp-section__label'>プロフィール</span>
          <h2 className='lp-section__title'>自己紹介</h2>
          <div className='lp-about'>
            <div className='lp-about__visual'>
              <span className='lp-about__initial'>K</span>
            </div>
            <div>
              <p className='lp-about__text'>{ABOUT_TEXT}</p>
              <div className='lp-about__tags'>
                <span className='lp-about__tag'>現場改善</span>
                <span className='lp-about__tag'>データ見える化</span>
                <span className='lp-about__tag'>中小製造業</span>
                <span className='lp-about__tag'>物流現場</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='lp-section'>
        <div className='lp-container'>
          <span className='lp-section__label'>流れ</span>
          <h2 className='lp-section__title'>ご利用の流れ</h2>
          <p className='lp-section__lead'>
            まずはお気軽にご相談ください。現場に合わせた進め方をご提案します。
          </p>
          <div className='lp-flow'>
            {FLOW_STEPS.map((step) => (
              <article key={step.title} className='lp-flow-step'>
                <div className='lp-flow-step__num'>{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='lp-cta' id='contact'>
        <div className='lp-cta__inner'>
          <h2>まずは小さな改善からご相談ください</h2>
          <p>
            Excel管理の効率化、データ集計、不良分析、人員配置など、現場に合わせた改善方法をご提案します。
          </p>
          <a
            href={`mailto:${SITE.email}?subject=【KAIZEN LAB】無料相談のお問い合わせ`}
            className='lp-btn lp-btn--primary'
          >
            メールで相談する
          </a>
          <p style={{ marginTop: 20, fontSize: '0.875rem', opacity: 0.7 }}>
            {SITE.email}
          </p>
        </div>
      </section>

      <footer className='lp-footer'>
        <p>
          © {new Date().getFullYear()} {SITE.name} — 製造業・物流現場向け DX支援
        </p>
      </footer>
    </div>
  )
}
