/** 公式ロゴ画像（public/logo-kaizen-lab.png）を使用中 */
export const BRAND_LOGO_PATH = '/logo-kaizen-lab.png' as const

/**
 * SVGロゴ候補（/logo-preview で比較・画像ロゴ未使用時のみ）
 * arrow | hexagon | chart | dashboard | line
 */
export const ACTIVE_LOGO_VARIANT = 'arrow' as const

export type LogoVariant =
  | 'arrow'
  | 'hexagon'
  | 'chart'
  | 'dashboard'
  | 'line'

export const LOGO_VARIANTS: {
  id: LogoVariant
  name: string
  concept: string
}[] = [
  {
    id: 'arrow',
    name: 'K + 上昇矢印',
    concept: '改善・成長。カイゼンの「向上」を矢印で表現'
  },
  {
    id: 'hexagon',
    name: 'K + 六角形',
    concept: '工場・産業・安定感。SaaS的な幾何学フレーム'
  },
  {
    id: 'chart',
    name: 'K + グラフ',
    concept: 'データ見える化・分析。バーチャートを組み合わせ'
  },
  {
    id: 'dashboard',
    name: 'K + ダッシュボード',
    concept: '現場DX・可視化。UIグリッドでSaaS感'
  },
  {
    id: 'line',
    name: 'K + ライン',
    concept: '製造ライン・物流。水平ラインと改善トレンド'
  }
]
