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
├─daily // 日常文档
|   ├─index.md 
|   ├─smalltalk // 碎碎念文档
|   ├─conference // 会议文档
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

