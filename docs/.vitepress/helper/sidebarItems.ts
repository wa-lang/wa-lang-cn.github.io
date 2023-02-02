import { readFileSync, readdirSync } from 'node:fs'

const TITLE_RE = /# (.*)/
const TIME_RE = /\- 时间[:：]\s*(\d{4}-\d{1,2}-\d{1,2})(.*)/
const NUMBER_RE = /\- 提案编号[:：]\s*(\d+)号/
const ST_RE = /\bst(\d{4})\b(.*)\.md/
const CF_RE = /\bc(\d{4})\b(.*)\.md/
const P_RE = /\bp(\d{4})\b(.*)\.md/

const DOCS_PATH = {
  smalltalk: '/smalltalk',
  conference: '/community/conference',
  proposal: '/community/proposal',
}

const DOCS_RE = {
  smalltalk: ST_RE,
  conference: CF_RE,
  proposal: P_RE,
}

const DOCS_TITLE = {
  smalltalk: TITLE_RE,
  conference: TIME_RE,
  proposal: NUMBER_RE,
}

const DOCS_TITLE_FORMAT = {
  smalltalk: (title: string) => title,
  conference: (title: string) => title,
  proposal: (title: string) => `${title}号提案`,
}

type TSideBarType = 'smalltalk' | 'conference' | 'proposal'
interface TSidebarItem { text: string; link: string }
export const generateSidebarItems = (type: TSideBarType): TSidebarItem[] => {
  const path = `docs${DOCS_PATH[type]}/`

  const fileNames = readdirSync(path)
    ?.filter(fileName => DOCS_RE[type].test(fileName))

  const items = fileNames?.map((fileName) => {
    const fileContent = readFileSync(path + fileName, 'utf8')
    const title = DOCS_TITLE_FORMAT[type](fileContent.match(DOCS_TITLE[type])?.[1] || '')
    return {
      text: title,
      link: `${DOCS_PATH[type]}/${fileName.replace(/\.md$/, '')}`,
    } as TSidebarItem
  })

  return items
}
