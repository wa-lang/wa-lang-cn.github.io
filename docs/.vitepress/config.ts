import { defineConfig } from 'vitepress'
import { apiConf } from '../docsConf/api'
import { communityConf } from '../docsConf/community'
import { conferenceConf } from '../docsConf/conference'
import { smalltalkConf } from '../docsConf/smalltalk'
import HighlightedExt from './plugins/highlightedExt'

export default async () => defineConfig({
  lang: 'zh-CN',
  title: 'Wa',
  description: '针对 WASM 平台设计的通用编程语言',
  appearance: true,

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/wa-lang/wa-lang.github.io/edit/main/docs/:path',
      text: '为此页提供修改建议'
    },

    // TODO：上线后进行爬取
    // algolia: {
    //   appId: '70KN18OOKV',
    //   apiKey: '8e276c9c1e442e23ad6f922e8ffbb90e',
    //   indexName: 'dev_wa',
    // },

    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '日常', link: '/daily/', activeMatch: '/daily/' },
      { text: 'API', link: '/api/', activeMatch: '/api/' },
      { text: '版本日志', link: '/changelog/', activeMatch: '/changelog/' },
      { text: 'Play', link: 'https://wa-lang.org/playground/' },
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/wayuyan' },
      { icon: 'github', link: 'https://github.com/wa-lang/wa/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '项目目标', link: '/guide/goals' },
          ]
        },
        {
          text: '社区',
          items: communityConf
        }
      ],
      '/daily/': [
        {
          text: '碎碎念',
          collapsible: true,
          items: [
            ...smalltalkConf,
            { text: '爱好者的碎碎念 栏目投稿规则', link: '/daily/smalltalk/submission_rules' },
          ]
        },
        {
          text: '开发组会议',
          collapsible: true,
          items: conferenceConf
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: apiConf
        }
      ],
      '/changelog/': [
        {
          text: '历史版本',
          items: []
        }
      ],
    }
  },

  markdown: {
    highlight: await HighlightedExt()
  },
  
})