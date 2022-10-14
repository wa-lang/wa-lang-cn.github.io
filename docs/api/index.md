---
title: APIs
---

# 快速入门

新建名为 `hello` 的目录，并创建 `hello/src/main.wa` 文件：

```go
fn main() {
	println(42)
}
```

然后创建 `hello/wa.mod.json` 模块文件：

```json
{
	"name": "hello",
	"pkgpath": "hello"
}
```

然后进入 `hello` 的目录执行程序：

```
$ wa run .
你好, 凹语言!
```

凹程序正常执行！
