
# Quick Start

## Install and Run:

1. `go install wa-lang.org/wa@latest`
2. `wa init -name=_examples/hi`
3. `wa run _examples/hi`

## Example: Print Wa

Print rune and call function：

```wa
# Copyright @2019-2022 The Wa author. All rights reserved.

import "fmt"

fn main {
	println("hello, Wa!")
	println(add(40, 2))

	fmt.Println(1+1)
}

fn add(a: i32, b: i32) => i32 {
	return a+b
}
```

Execute the program:

```
$ go run main.go hello.wa 
hello, Wa!
42
2
```