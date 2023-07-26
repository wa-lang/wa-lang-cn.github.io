# Wa Language and Turing & BrainFuck

Wa is a general-purpose programming language designed for developing robustness and maintainability WebAssembly software. Instead of requiring complex toolchains to set up, you can simply go install it - or run it in a browser. Let's try to build a BrainFuck language virtual machine with Wa language.

⭐️ If you like Wa Language, give it a star on Github: https://github.com/wa-lang/wa


## 1. What is a Turing machine

Turing machine is an abstract computing model proposed by Alan Turing. The machine has an infinite strip of paper divided into small squares, each with a different color, similar to memory in a computer. At the same time, the machine has a probe that moves up and down the tape, sort of reading and writing data from memory by memory address. The machine head has a set of internal computational states and some fixed programs (more like a Harvard structure). At each moment, the machine head reads a square of information from the current tape, and then outputs the information to the tape square according to its internal state and the program instructions it is currently executing, while updating its internal state and moving.

![](/st0013-01.png)

## 2. What is BrainFuck language

Turing machines are not easy to program, but they are very easy to understand. There is a minimized BrainFuck computer language that works very much like a Turing machine. BrainFuck was created by Urban Muller in 1993 and is called BF language for short. Muller's original design goal was to build a simple programming language that could be implemented with a minimal compiler and was in line with Turing's idea of completeness. The language consists of eight states, and the early compiler (second edition) for the Amiga machine was only 240 bytes in size!

![](/st0013-02.jpg)

As the name suggests, the brainfuck program is hard to read. Still, the brainfuck Turing machine can do just about any computational task. brainfuck's calculations are unusual, but they do work correctly. The language is based on a simple machine model that, in addition to instructions, consists of an array in bytes initialized to zero, a pointer to the array (initially to the first byte of the array), and two byte streams for input and output. It is a Turing-complete language, and its main design idea is to implement a "simple" language with minimal concepts. The BrainFuck language has only eight symbols, and all operations are done by combinations of these eight symbols.

Here is a description of the eight states, each of which is identified by a character:

| Command  | C code            | Description |
| --- | ----------------- | ------ |
| `>` | `++ptr;`          | Move the pointer to the right |
| `<` | `--ptr;`          | Move the pointer to the left |
| `+` | `++*ptr;`         | Increment the memory cell at the pointer |
| `-` | `--*ptr;`         | Decrement the memory cell at the pointer |
| `.` | `putchar(*ptr);`  | Output the character signified by the cell at the pointer |
| `,` | `*ptr = getch();` | Input a character and store it in the cell at the pointer |
| `[` | `while(*ptr) {}`  | Jump past the matching `]` if the cell at the pointer is 0 |
| `]` |                   | Jump back to the matching `[` if the cell at the pointer is nonzero |

Here is a brainfuck program that prints the "hi" string to standard output:

```
++++++++++[>++++++++++<-]>++++.+.
```

In theory, we can use BF as the target machine language and compile other high-level languages into BF to run on BF machines.

## 3. Build BrainFuck VM with Wa

Start by constructing a virtual machine structure:

```wa
type BrainFuck struct {
	mem  :[30000]byte
	code :string
	pos  :int
	pc   :int
}
```

Where mem represents the virtual machine's 30,000 bytes of memory, then code represents the input BF program, pos represents the current output location, pc is the instruction location.

Then wrap the corresponding constructor and Run method:

```wa
fn NewBrainFuck(code: string) => *BrainFuck {
	return &BrainFuck{code: code}
}

fn BrainFuck.Run() {
	# ...
}
```

Here's how the main function constructs the BrainFuck VM and executes it:

```wa
fn main {
	# print hi
	const code = "++++++++++[>++++++++++<-]>++++.+."
	vm := NewBrainFuck(code)
	vm.Run()
}
```

Let's look at the implementation of the `BrainFuck.Run` function:

```wa
fn BrainFuck.Run() {
	for ; this.pc != len(this.code); this.pc++ {
		switch x := this.code[this.pc]; x {
		case '>':
			this.pos++
		case '<':
			this.pos--
		case '+':
			this.mem[this.pos]++
		case '-':
			this.mem[this.pos]--
		case '[':
			if this.mem[this.pos] == 0 {
				this.loop(1)
			}
		case ']':
			if this.mem[this.pos] != 0 {
				this.loop(-1)
			}
		case '.':
			print(rune(this.mem[this.pos]))
		case ',':
			# TODO: support read byte
		}
	}
	return
}
```

Basically, the instructions in BF language are interpreted one by one. Where the output is printed by the print built-in function, the input instruction is not processed.

In addition, the `BrainFuck.loop` private method is used to handle nested instructions:

```wa
fn BrainFuck.loop(inc: int) {
	for i := inc; i != 0; this.pc += inc {
		switch this.code[this.pc+inc] {
		case '[':
			i++
		case ']':
			i--
		}
	}
}
```

The complete code [brainfuck.wa](https://gitee.com/wa-lang/wa/blob/master/brainfuck.wa)。

To clone the latest Wa Git repository, then execute in the root directory:

```
$ wa run brainfuck.wa 
hi
```

## 4. Playground

Run the example in the playground: https://wa-lang.org/playground/

![](/blog0002-01.png)

## 5. Summarize

While BrainFuck may seem like a very simple language, it is a Turing complete programming language. In theory, any high-level language written procedures can be simulated by BF language equivalent procedures. Since it is possible to implement a BF virtual machine through a Wa language, the Wa language must also be Turing complete, and next time we hope to build more complex and interesting programs through a Wa language.

