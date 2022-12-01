## 本地开发调试

**本地环境**

```
node、pnpm
```

**安装依赖**

```
pnpm install
```


**本地调试**

```
pnpm dev
```


**本地打包**

```
// 仅作为本地构建应用测试，不会触发 action deploy
pnpm build
```

## 文档目录

```
docs
├─index.md  // home 页面
├─public // 静态资源
├─guide // 指南文档
├─smalltalk // 碎碎念文档
├─changelog // 历史版本文档
├─api // api 文档
├─.vitepress
|     ├─config.ts // 主题文案配置
|     ├─constants.ts // 基础配置（开发成员等）
|     ├─theme // 主题布局
|     ├─styles // 主题样式
|     ├─plugins // md 相关插件
|     ├─helper // 工具函数
|     ├─components // 自定义组件
```


## 横幅设置

第一步：配置 ID

```
// 在 `docs/.vitepress/inlined-scripts/restorePreference.js` 修改当前的 banner id
// 这里的 id 一定要是唯一且不能重复的，可以使用 docs 中 md ID，如：st0015

window.__WA_BANNER_ID__ = 'xxx'
```

第二步

```
// 在 docs/.vitepress/constants.ts 中 NAV_BANNER 进行通知内容更新

export const NAV_BANNER = {
  title: '这横幅的标题',
  link: '这是横幅的跳转地址'
}
```