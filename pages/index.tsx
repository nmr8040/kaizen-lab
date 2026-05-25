import type { GetServerSideProps } from 'next'

import type { PageProps } from '@/lib/types'
import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

// Notion API はビルド時に失敗しやすいため、リクエスト時に取得する（SSR）
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props }
  } catch (err) {
    console.error('page error', domain, err)
    throw err
  }
}

export default function NotionDomainPage(props: PageProps) {
  return <NotionPage {...props} />
}
