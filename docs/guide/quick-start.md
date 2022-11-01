# 快速开始

## 本地安装和测试

1. `go install github.com/wa-lang/wa@latest`
2. `wa init -name=_examples/hi`
3. `wa run _examples/hi`

> 项目尚处于原型开源阶段，如果有共建和PR需求请参考 [如何贡献代码](/community/contribute)。

## 例子: 你好, 凹语言

打印字符和调用函数：

```wa
fn main {
	println("你好，凹语言！")
	println(add(40, 2))
}

fn add(a: i32, b: i32) => i32 {
	return a+b
}
```

运行并输出结果:

```
$ go run main.go hello.wa 
你好，凹语言！
42
```

一切正常！
