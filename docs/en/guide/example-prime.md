
# Example: Print Prime

Print prime numbers up to 30:

```wa
func main {
	for n := 2; n <= 30; n = n + 1 {
		var isPrime int = 1
		for i := 2; i*i <= n; i = i + 1 {
			if x := n % i; x == 0 {
				isPrime = 0
			}
		}
		if isPrime != 0 {
			println(n)
		}
	}
}
```

Execute the program:

```
$ go run main.go run _examples/prime
2
3
5
7
11
13
17
19
23
29
```

More examples [_examples](https://github.com/wa-lang/wa/tree/master/_examples)
