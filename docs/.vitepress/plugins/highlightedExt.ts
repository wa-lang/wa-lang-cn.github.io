import { resolve } from 'path'
import { getHighlighter } from 'shiki'

const WA_LANG_CONF = {
  id: 'wa',
  scopeName: 'source.wa',
  path: resolve(__dirname, '../../public/lang/wa.tmLanguage.json'),
}

export default async function highlightedExt() {
  const highlighter = await getHighlighter({})
  highlighter.loadLanguage(WA_LANG_CONF)
  return (str: string, lang: string) => highlighter.codeToHtml(str, { lang })
}
