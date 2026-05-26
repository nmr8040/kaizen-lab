export const SITE = {
  name: 'KAIZEN LAB',
  tagline: '現場改善 × データ見える化 × DX',
  email: 'kaizen.lab.info@gmail.com',
  description:
    '製造業・物流現場向けに、Excel業務・不良分析・人員配置・日報集計などをDX化し、現場改善まで支援します。'
} as const

export const NAV_LINKS = [
  { href: '#capabilities', label: 'できること' },
  { href: '#demos', label: 'デモ' },
  { href: '#about', label: '自己紹介' },
  { href: '#contact', label: '相談する' }
] as const

export const PROBLEMS = [
  {
    title: 'Excel管理が複雑',
    description: '集計や転記に時間がかかり、更新漏れやミスが起きやすい。'
  },
  {
    title: 'データがバラバラ',
    description: '現場・品質・人員の情報が分散し、全体像が見えない。'
  },
  {
    title: '不良・トラブルが追えない',
    description: '原因分析や履歴検索が属人化し、再発防止につながらない。'
  },
  {
    title: '人員配置が属人化',
    description: 'スキルや稼働状況が共有されず、生産効率の改善が進まない。'
  }
] as const

export const SOLUTIONS = [
  {
    step: '01',
    title: 'データ整理',
    description: '散在するExcel・現場データを整理し、扱いやすい形に整えます。'
  },
  {
    step: '02',
    title: '見える化',
    description: 'ダッシュボードやグラフで、現場の状況を一目で把握できるようにします。'
  },
  {
    step: '03',
    title: '分析',
    description: '不良・工数・人員配置など、改善につながるポイントを可視化します。'
  },
  {
    step: '04',
    title: '改善提案',
    description: '現場の実態に合わせた改善策を提案し、定着までサポートします。'
  }
] as const

export const CAPABILITIES = [
  {
    title: '人員配置システム',
    description: 'スキル・配置状況を管理し、ラインごとの人員不足を可視化。'
  },
  {
    title: 'QC7つ道具 自動グラフ化',
    description: '品質データをアップロードし、パレート図などで原因を分析。'
  },
  {
    title: '日報集計・AI要約',
    description: '日報の入力・集計・可視化を効率化し、傾向を把握。'
  },
  {
    title: 'トラブル履歴管理',
    description: '設備トラブルや対応履歴を記録・検索しやすく管理。'
  },
  {
    title: '在庫管理の簡易DX化',
    description: 'シンプルな在庫・入出庫管理をデジタル化。'
  },
  {
    title: 'Excel / スプレッドシート自動化',
    description: '集計・転記・レポート作成の手作業を自動化。'
  }
] as const

export const DEMOS = [
  {
    title: '人員配置システム',
    description:
      '作業者ごとのスキル・配置状況を管理し、生産効率の改善を支援します。',
    url: 'https://demo-staff-schedule.onrender.com/dashboard',
    accent: 'cyan' as const
  },
  {
    title: 'QC7つ道具',
    description:
      '品質データをアップロードし、不良原因の見える化を支援します。',
    url: 'https://demo-qc7-tools.onrender.com/',
    accent: 'green' as const
  }
] as const

export const FLOW_STEPS = [
  {
    step: '①',
    title: '現場のお悩みをヒアリング',
    description: '無料で現状の課題・データの持ち方・改善の優先度を整理します。'
  },
  {
    step: '②',
    title: 'データ整理・見える化',
    description: 'Excelや現場データを整理し、ムダやボトルネックを可視化します。'
  },
  {
    step: '③',
    title: '改善施策の提案・サポート',
    description: '現場に合った改善案を提案し、運用定着まで伴走します。'
  }
] as const

export const ABOUT_TEXT =
  '製造現場で6年間、現場改善・ライン管理・不良対応などを担当。その経験を活かし、中小製造業・物流現場向けに、現場で実際に使えるDX支援を行っています。'
