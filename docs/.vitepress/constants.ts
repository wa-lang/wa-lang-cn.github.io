export const ICONS = {
  discourse: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16.135 0C24.885 0 32 7.313 32 15.995s-7.104 15.99-15.865 15.99L0 32.001V15.72C0 7.043 7.375.001 16.135.001zm.157 6.083a9.851 9.851 0 0 0-8.448 4.76a9.655 9.655 0 0 0-.198 9.625l-1.781 5.677l6.396-1.432a9.889 9.889 0 0 0 10.844-1.854a9.662 9.662 0 0 0 2.318-10.661a9.835 9.835 0 0 0-9.12-6.115z"/></svg>',
  gitee: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1668434078511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2734" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2735"></path></svg>',
  oschina: '<svg t="1669908932648" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1600" width="200" height="200"><path d="M518.4 691.2c-99.2 0-182.4-64-185.6-185.6-6.4-112 92.8-188.8 188.8-192 108.8-3.2 176 121.6 176 121.6l281.6-102.4S864 32 547.2 32C252.8 35.2 48 236.8 48 512c0 243.2 192 489.6 489.6 476.8C867.2 976 979.2 688 979.2 688L688 592c3.2 3.2-57.6 99.2-169.6 99.2" p-id="1601"></path></svg>',
  opentekr: '<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="800px" height="800px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"></path><path fill="#FFF" d="M7.336 17.962c0-6.449 4.341-11.41 10.666-11.41c6.232 0 10.666 5.116 10.666 11.41c0 6.418-4.31 11.41-10.666 11.41c-6.294 0-10.666-4.992-10.666-11.41zm16.496 0c0-3.752-1.954-7.131-5.83-7.131c-3.876 0-5.829 3.379-5.829 7.131c0 3.782 1.891 7.132 5.829 7.132c3.938 0 5.83-3.35 5.83-7.132z"></path></svg>',
}

export const TEAM_MEMBERS = [
  {
    avatar: '/avatars/chai2010.jpeg',
    title: '发起人、wago',
    name: '柴树杉',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/chai2010' },
      { icon: 'github', link: 'https://github.com/chai2010' },
      { icon: 'twitter', link: 'https://twitter.com/chaishushan' },
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
    title: 'VS Code、Playground',
    name: '扈梦明',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/ohxxx' },
      { icon: 'github', link: 'https://github.com/ohxxx' },
    ],
  },
  {
    avatar: '/avatars/zhaopuming.jpeg',
    name: '赵普明',
    title: '凹中文语法设计',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/visus' },
      { icon: 'github', link: 'https://github.com/zhaopuming' },
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
    avatar: '/avatars/leaftree.jpeg',
    name: '刘云峰',
    title: '包管理',
    links: [
      { icon: { svg: ICONS.gitee }, link: 'https://gitee.com/leaftree' },
      { icon: 'github', link: 'https://github.com/leaftree' },
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
]

export const NAV_BANNER = {
  title: '🎉 凹语言入选 CCF GLCC2023 编程夏令营 🎉',
  link: 'https://wa-lang.org/smalltalk/st0027.html',
}
