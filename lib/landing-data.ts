export const SITE = {
  name: 'KAIZEN LAB',
  tagline: '現場改善 × データ見える化 × DX',
  email: 'kaizen.lab.info@gmail.com',
  description:
    '製造業・物流現場向けに、Excel業務・不良分析・人員配置・日報集計などをDX化し、現場改善まで支援します。',
  heroExperience:
    '製造現場での改善・ライン管理・不良対応の経験をもとに、現場で実際に使われる仕組みを作ります。'
} as const

export const NAV_LINKS = [
  { href: '#capabilities', label: 'できること' },
  { href: '#demos', label: 'デモ' },
  { href: '#pricing', label: '料金' },
  { href: '#about', label: '自己紹介' },
  { href: '#contact', label: '相談する' }
] as const

export const FIELD_EXPERIENCE = {
  title: '現場を知っているから、使われる仕組みを作れます',
  body: '製造現場で6年間、現場改善・ライン管理・不良対応・人員配置などを担当してきました。単なるシステム開発ではなく、現場で運用できるか、改善につながるかを重視してご提案します。',
  skills: [
    '現場改善',
    'ライン管理',
    '不良対応',
    '人員配置',
    'Excel業務改善'
  ] as const
} as const

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

export const OUTCOMES = [
  {
    title: 'Excel集計時間の削減',
    description: '手入力・転記・集計の手間を減らし、確認作業に時間を使えます。'
  },
  {
    title: '不良原因の見える化',
    description: 'データから傾向を把握し、品質改善の打ち手を検討しやすくなります。'
  },
  {
    title: 'トラブル履歴の共有',
    description: '過去の対応を蓄積し、同様のトラブル時に素早く参照できます。'
  },
  {
    title: '人員配置判断の標準化',
    description: 'スキル・稼働状況を共有し、配置の判断基準を揃えられます。'
  },
  {
    title: '属人化の改善',
    description: '担当者に依存していた業務を仕組み化し、引き継ぎもスムーズに。'
  },
  {
    title: '改善ポイントの明確化',
    description: 'データからムダやボトルネックを特定し、改善の優先順位を決めやすく。'
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
    description:
      'スキル・配置状況を見える化し、欠勤時や人員不足時の判断を支援します。'
  },
  {
    title: 'QC7つ道具 自動グラフ化',
    description:
      '品質データをアップロードするだけで、パレート図などを作成し、不良原因の把握を支援します。'
  },
  {
    title: '日報集計・AI要約',
    description: '日報を集計し、異常・改善点・傾向を整理します。'
  },
  {
    title: 'トラブル履歴管理',
    description: '過去のトラブルと対策を蓄積し、再発防止につなげます。'
  },
  {
    title: '在庫管理の簡易DX化',
    description: '入出庫や在庫状況を見える化し、確認・転記作業を減らします。'
  },
  {
    title: 'Excel / スプレッドシート自動化',
    description: '手入力・転記・集計作業を自動化し、作業時間を削減します。'
  }
] as const

export const DEMOS = [
  {
    title: '人員配置システム',
    description:
      '作業者ごとのスキル・配置状況を管理し、生産ラインの人員判断を支援します。',
    useCase: 'ライン配置、欠勤対応、スキル管理',
    url: 'https://demo-staff-schedule.onrender.com/dashboard',
    accent: 'cyan' as const
  },
  {
    title: 'QC7つ道具',
    description:
      '品質データをアップロードし、不良内容をグラフで見える化します。',
    useCase: '不良分析、品質改善、報告資料作成',
    url: 'https://demo-qc7-tools.onrender.com/',
    accent: 'green' as const
  }
] as const

export const PRICING = [
  {
    title: '小規模なExcel・スプレッドシート自動化',
    price: '30,000円〜'
  },
  {
    title: 'ダッシュボード・見える化ツール作成',
    price: '50,000円〜'
  },
  {
    title: '現場向け簡易システム開発',
    price: '80,000円〜'
  },
  {
    title: '継続改善・運用サポート',
    price: '要相談'
  }
] as const

export const PRICING_NOTE =
  '内容や規模により変動します。まずは現在の業務内容をお伺いした上で、最適な形をご提案します。'

export const REASSURANCE = [
  'Excelしか使っていない状態でも大丈夫です。',
  '何をシステム化すればいいか分からない段階でもご相談いただけます。',
  'まずは現在の業務フローをお聞きし、小さく改善できる部分からご提案します。'
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

export const CTA = {
  title: 'まずは小さな改善からご相談ください',
  body: 'Excel管理の効率化、データ集計、不良分析、人員配置、トラブル履歴管理など、現場に合わせた改善方法をご提案します。何から始めればよいか分からない場合でも大丈夫です。'
} as const
