import { readdirSync, readFileSync } from "node:fs"

const TITLE_RE = /# (.*)/
const TIME_RE = /\- 时间[:：]\s*(\d{4}-\d{1,2}-\d{1,2})(.*)/
const ST_RE = /\bst(\d{4})\b(.*)\.md/
const CF_RE = /\bc(\d{4})\b(.*)\.md/

const DOCS_PATH = {
  'smalltalk': '/daily/smalltalk',
  'conference': '/daily/conference',
}

const DOCS_RE = {
  'smalltalk': ST_RE,
  'conference': CF_RE,
}

const DOCS_TITLE = {
  'smalltalk': TITLE_RE,
  'conference': TIME_RE
}

type TSideBarType = 'smalltalk' | 'conference'
type TSidebarItem = { text: string; link: string }
export const generateSidebarItems = (type: TSideBarType): TSidebarItem[] => { 
  const path = `docs${DOCS_PATH[type]}/`

  const fileNames = readdirSync(path)
    ?.filter(fileName => DOCS_RE[type].test(fileName))
  
  const items = fileNames?.map(fileName => { 
    const fileContent = readFileSync(path + fileName, 'utf8')
    const title = fileContent.match(DOCS_TITLE[type])?.[1]
    return { 
      text: title,
      link: `${DOCS_PATH[type]}/${fileName.replace(/\.md$/, '')}`
    } as TSidebarItem
  })

  return items
}