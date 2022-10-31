import { defineConfig } from 'vitepress'
import { generateSidebarItems } from './helper/sidebarItems'
import HighlightedExt from './plugins/highlightedExt'

export default async () => defineConfig({
  lang: 'zh-CN',
  title: '凹语言',
  description: '针对 WASM 平台设计的通用编程语言',
  appearance: true,

  themeConfig: {
    logo: '/favicon.svg',

    editLink: {
      pattern: 'https://github.com/wa-lang/wa-lang.github.io/edit/master/docs/:path',
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
          items: [
            { text: '如何贡献代码', link: '/guide/contribute' },
            { text: '凹语言贡献者协议', link: '/guide/wca' },
            { text: '版权信息', link: '/guide/license' }
          ]
        }
      ],
      '/daily/': [
        {
          text: '碎碎念',
          collapsible: true,
          items: [
            { text: '爱好者的碎碎念 栏目投稿规则', link: '/daily/smalltalk/submission_rules' },
            { text: '凹语言 由来和寓意', link: '/daily/' },
            ...generateSidebarItems('smalltalk'),
          ]
        },
        {
          text: '开发组会议',
          collapsible: true,
          items: [
            { text: '会议安排', link: '/daily/conference/' },
            ...generateSidebarItems('conference'),
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            { text: '快速入门', link: '/api/' },
            { text: '语言规范', link: '/api/spec' },
          ]
        }
      ],
      '/changelog/': [
        {
          text: '历史版本',
          items: []
        }
      ],
    },

    footer: {
      copyright: '版权 ©️ 凹语言开发组 2018，保留权利'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],

  markdown: {
    highlight: await HighlightedExt()
  },
  
})