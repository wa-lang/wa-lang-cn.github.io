# 语言规范

凹语言基于Go语言演化而来（参考[《Go语言定制指南》](https://github.com/chai2010/go-ast-book)），因此重点描述和Go语言的差异部分。

## 关键字

凹语言删除了Go语言中的 `package`、`fallthrough`、`goto` 等关键字，同时删除了 `go`、`chan`、`select` 等并发关键字，同时将 `func` 关键字简化为 `fn`。因此凹语言目前有19个关键字：

```go
break     defer  import     struct
case      else   interface  switch
const     for    map        type
continue  fn     range      var
default   if     return
```

在英文关键字的基础上，凹语言同时为不同的区域提供本地的关键字。比如中文和和拼音地区对应关键字如下（最终形态会由对应语言的社区投票决定）：

```go
//  zh/zh_pinyin => 中文/中文拼音
//  1. break     => 跳出/tiaochu
//  2. case      => 有辙/youzhe
//  3. const     => 常量/changliang
//  4. continue  => 继续/jixu
//  5. default   => 没辙/meizhe
//  6. defer     => 善后/shanhou
//  7. else      => 否则/fouze
//  8. for       => 循环/xunhuan
//  9. fn        => 函数/hanshu
// 10. if        => 如果/ruguo
// 11. import    => 导入/daoru
// 12. interface => 接口/jiekou
// 13. map       => 字典/zidian
// 14. range     => 区间/qujian
// 15. return    => 返回/fanhui
// 16. struct    => 结构/jiegou
// 17. switch    => 找辙/zhaozhe
// 18. type      => 类型/leixing
// 19. var       => 变量/bianliang
```

不同区域编码将由凹语言官方决定，目前除了英文关键字外提供的中文/中文拼音对应`zh`/`zh_pinyin`两种内置编码。凹程序发布单位是模块，每个模块需要通过区域编码指定一种默认区域，这样模块内部的代码可以混合用本地和英文关键字。

## 运算符

增加了 `#` 作为行注释。删除了 `<-`、`~` 运算符：

```go
+    &     +=    &=     &&    ==    !=    (    )
-    |     -=    |=     ||    <     <=    [    ]
*    ^     *=    ^=     <-    >     >=    {    }
/    <<    /=    <<=    ++    =     :=    ,    ;
%    >>    %=    >>=    --    !     ...   .    :
     &^          &^=
```

同时支持的全角符号：

```go
// #   => #
// ... => …
// <<  =>《
// >>  => 》
// |   => ｜
// !   => ！
// :   => ：
// .   => ·
// ;   => ；
// ,   => ，
// [   =>【
// ]   => 】
// (   => （
// )   => ）
```

## 字符和字符串

增加中文单引号和双引号支持，比如：‘啊’表示一个字符，“你好”表示一个字符串。中文单引号和双引号必须左右配对。

<!--

## 控制语句

## 内存管理

## 目录结构

-->
