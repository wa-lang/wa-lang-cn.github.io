export const ICONS = {
  gitee: `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1668434078511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2734" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2735"></path></svg>`,
  oschina: `<svg t="1669908932648" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1600" width="200" height="200"><path d="M518.4 691.2c-99.2 0-182.4-64-185.6-185.6-6.4-112 92.8-188.8 188.8-192 108.8-3.2 176 121.6 176 121.6l281.6-102.4S864 32 547.2 32C252.8 35.2 48 236.8 48 512c0 243.2 192 489.6 489.6 476.8C867.2 976 979.2 688 979.2 688L688 592c3.2 3.2-57.6 99.2-169.6 99.2" p-id="1601"></path></svg>`
}

export const TEAM_MEMBERS = [
  {
    avatar: '/avatars/chai2010.jpeg',
    title: '发起人、wago',
    name: '柴树杉',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/chai2010' },
      { icon: 'github', link: 'https://github.com/chai2010' },
      { icon: 'twitter', link: 'https://twitter.com/chaishushan' }
    ],
  },
  {
    avatar: '/avatars/3dgen.jpeg',
    name: '丁尔男',
    title: '发起人、wat 后端',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/DingErNan' },
      { icon: 'github', link: 'https://github.com/3dgen' },
    ],
  },
  {
    avatar: '/avatars/benshi001.jpeg',
    name: '史斌',
    title: '发起人、llvm 后端',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/benshi001' },
      { icon: 'github', link: 'https://github.com/benshi001' },
    ],
  },
  {
    avatar: '/avatars/xxx.jpeg',
    title: "VS Code、Playground",
    name: '扈梦明',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/ohxxx' },
      { icon: 'github', link: 'https://github.com/ohxxx' },
    ],
  },
  {
    avatar: '/avatars/leaftree.jpeg',
    name: '刘云峰',
    title: '包管理',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/leaftree' },
      { icon: 'github', link: 'https://github.com/leaftree' },
    ],
  },
  {
    avatar: '/avatars/shiinaorez.jpeg',
    name: '宋汝阳',
    title: ' ',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/shiinaorez' },
      { icon: 'github', link: 'https://github.com/ShiinaOrez' },
    ],
  },
  {
    avatar: '/avatars/imaginemiracle_wxn_1.jpeg',
    name: '王潇南',
    title: ' ',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/imaginemiracle_wxn_1' },
      { icon: 'github', link: 'https://github.com/ImagineMiracle-wxn' },
    ],
  },
  {
    avatar: '/avatars/zhaopuming.jpeg',
    name: '赵普明',
    title: ' ',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/visus' },
      { icon: 'github', link: 'https://github.com/zhaopuming' },
    ],
  },
]

export const NAV_BANNER = {
  title: '🎉🎉🎉 凹语言 v0.4.0 发布, 入驻 开源中国',
  link: 'https://wa-lang.org/guide/changelog.html'
}