import fs from 'fs'
import path from 'path'
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
      { text: '开始', link: '/guide/', activeMatch: '/guide/' },
      { text: '文档', link: '/reference/', activeMatch: '/reference/' },
      { text: '案例', link: '/examples/', activeMatch: '/examples/' },
      { text: '碎碎念', link: '/smalltalk/', activeMatch: '/smalltalk/' },
      { text: '社区', link: '/community/', activeMatch: '/community/' },
      { text: 'Play', link: 'https://wa-lang.org/playground/' },
    ],

    socialLinks: [
      { icon: {
          svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1668434078511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2734" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2735"></path></svg>'
        },
        link: 'https://gitee.com/wa-lang/wa'
      },
      { icon: 'github', link: 'https://github.com/wa-lang/wa/' },
      { icon: 'twitter', link: 'https://twitter.com/wayuyan' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '项目目标', link: '/guide/goals' },
            { text: '历史版本', link: '/guide/changelog' },
          ]
        }
      ],
      '/reference/': [
        {
          text: '文档',
          items: [
            { text: '快速入门', link: '/reference/' },
            { text: '语言规范', link: '/reference/spec' },
          ]
        }
      ],
      '/examples/': [
        {
          text: '案例',
          items: [
            { text: '小游戏', link: '/examples/' },
		  ]
        }
      ],
      '/smalltalk/': [
        {
          text: '碎碎念',
          collapsible: true,
          items: [
            { text: '栏目投稿规则', link: '/smalltalk/' },
            ...generateSidebarItems('smalltalk'),
          ]
        }
      ],
      '/community/': [
        {
          text: '社区',
          items: [
            { text: '凹语言社区', link: '/community/' },
            { text: '如何贡献代码', link: '/community/contribute' },
            { text: '凹语言贡献者协议', link: '/community/wca' },
            { text: '版权信息', link: '/community/license' }
          ]
        },
        {
          text: '开发组会议',
          collapsible: true,
          items: [
            { text: '开发组会议安排', link: '/community/conference/' },
            ...generateSidebarItems('conference'),
          ]
        }
      ],
    },

    footer: {
      copyright: '版权 ©️ 凹语言开发组 2018，保留权利'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
  ],

  markdown: {
    highlight: await HighlightedExt()
  },
  
})