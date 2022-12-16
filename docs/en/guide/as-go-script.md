
# Execut as Go script

The Wa language itself can also be executed like the Lua language embedded in the Go host locale:

```
package main

import (
	"fmt"
	"wa-lang.org/wa/api"
)

func main() {
	output, err := api.RunCode(api.DefaultConfig(), "hello.wa", code)
	fmt.Print(string(output), err)
}
```

> **Note:** Executing as a script currently only supports native environments.

