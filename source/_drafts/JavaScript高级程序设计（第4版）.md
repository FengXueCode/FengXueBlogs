---
title: JavaScript高级程序设计（第4版）
tags:
 - 前端
 - JavaScript
categories:
 - 书籍笔记
---

# JavaScript高级程序设计（第4版）阅读笔记

## 第1章 什么是JavaScript

JavaScript由以下组成:

-  ECMAScript：由ECMA-262定义并提供核心功能。 
-  文档对象模型（DOM）：提供与网页内容交互的方法和接口。 
-  浏览器对象模型（BOM）：提供与浏览器交互的方法和接口。



## 第2章 HTML中的JavaScript

JavaScript 是通过<script>元素插入到HTML页面中的。这个元素可用于把JavaScript代码嵌入到 HTML 页面中，跟其他标记混合在一起，也可用于引入保存在外部文件中的 JavaScript。

- 要包含外部JavaScript文件，必须将 src 属性设置为要包含文件的URL。文件可以跟网页在同 一台服务器上，也可以位于完全不同的域。 
- 所有<script>元素素会依照它们在网页中出现的次序被解释。在不使用defer和async 属性的 情况下，包含在<script>元素中的代码必须严格按次序解释。
- 对不推迟执行的脚本，浏览器必须解释完位于<script>元素中的代码，然后才能继续渲染页面 的剩余部分。为此，通常应该把<script>元素放到页面末尾，介于主内容之后及</body>标签之前。
- 可以使用defer 属性把脚本推迟到文档渲染完毕后再执行。推迟的脚本原则上按照它们被列出的次序执行。
- 可以使用async 属性表示脚本不需要等待其他脚本，同时也不阻塞文档渲染，即异步加载。异 步脚本不能保证按照它们在页面中出现的次序执行。
-  通过使用<noscript>元素，可以指定在浏览器不支持脚本时显示的内容。如果浏览器支持并启 用脚本，则<noscript>元素中的任何内容都不会被渲染。



## 第3章 语言基础 

### 3.1 语法

- 区分大小写

- 标识符

  - 第一个字符必须是英文字母、_（下划线）、$
  - 通常使用驼峰命名法 testGrammar
  - 不能用关键字

  ```
  break       do          in            typeof 
  case        else        instanceof    var 
  catch       export      new           void 
  class       extends     return        while 
  const       finally     super         with 
  continue    for         switch        yield 
  debugger    function    this 
  default     if          throw 
  delete      import      try 
  ```

  未来关键字

  ```
  始终保留: 
  enum  
  严格模式下保留: 
  implements  package     public 
  interface   protected   static 
  let         private 
  模块代码中保留: 
  await
  ```

  

- 注释

  ```javascript
  // 单行注释
  
  /*
  
  多行注释
  
  */
  ```

  

### 3.2 变量

**var** :  最早声明变量的关键字，函数作用域，会自动提升到作用域顶端

**let** ：es6 后新出的声明变量关键字，块作用域，不会自动提升，存在暂时性死区

```JavaScript
console.log(age);//报错
let age = 16;

console.log(name) ;// 'test'
var name = 'test'; //自动提升
```

**const**: 与`let`相似，但声明时必须初始化，且值不能改变，否则会报错；

```JavaScript
const name = 'test';
name = 'hhh'; // TypeError: 给常量赋值 
```

> 推荐优先级 const > let > var

### 3.3 数据类型

ECMAScript有 6种简单数据类型（也称为原始类型）：Undefined、Null、Boolean、Number、 String 和Symbol。Symbol（符号）是ECMAScript 6新增的。还有一种复杂数据类型叫Object（对 象）。Object 是一种无序名值对的集合。

#### 3.3.1 typeof

- "undefined"表示值未定义；
- "boolean"表示值为布尔值； 
- "string"表示值为字符串；
- "number"表示值为数值；
- "object"表示值为对象（而不是函数）或null；
- "function"表示值为函数； 
- "symbol"表示值为符号。

#### 3.3.2 简单数据类型

- Undefined - 声明为定义
- Null - 空指针

```JavaScript
undefined 由 null派生来，所有console.log(null == undefined) //true
```

- Boolean - 布尔值，true,false

| 数据类型  |     true      |   false   |
| :-------: | :-----------: | :-------: |
|  Boolean  |     true      |   false   |
|  String   |  非空字符串   |    ""     |
|  Number   |     非零      |  0、NaN   |
|  Object   |   任意对象    |   null    |
| Undefined | N/A（不存在） | undefined |

- Number

直接写会显示十进制整数，也可以写八进制、十六进制整数

```JavaScript
let octalNum1 = 070;  // 八进制的56 
let octalNum2 = 079;  // 无效的八进制值，当成79 处理 
let octalNum3 = 08;   // 无效的八进制值，当成8 处理 
```

**浮点(float)** :要定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字。支持科学计数法（ 3.125e7）

> 在小数点后面没有数字的情况下，数值就会变成整数。类似地，如果数值本身就是整数，只是小 数点后面跟着0（如1.0），那它也会被转换为整数。
>
> ```JavaScript
> let floatNum1 = 1.;   // 小数点后面没有数字，当成整数1 处理 
> let floatNum2 = 10.0; // 小数点后面是零，当成整数10 处理 
> ```

**NaN**: 有一个特殊的数值叫NaN，意思是“不是数值”（Not a Number），用于表示本来要返回数值的操作失败了（而不是抛出错误)。

**值的范围**：

| 小于最小值 |          最小值          |                     最大值                     |  最大值  |
| :--------: | :----------------------: | :--------------------------------------------: | :------: |
| -Infinity  | Number.MIN_VALUE(5e-324) | Number.MAX_VALUE(1.797 693 134 862 315 7e+308) | Infinity |

**数值转换**

- 布尔值，true转换为1，false转换为0。  

-  数值，直接返回。 

-  null，返回0。

-  undefined，返回NaN。

- 字符串，应用以下规则。

  -   如果字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个十进制数值。

     因此，Number("1")返回1，Number("123")返回123，Number("011")返回11（忽略前面 的零）。

  -   如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值（同样，忽略前面的零）。

  -   如果字符串包含有效的十六进制格式如"0xf"，则会转换为与该十六进制值对应的十进制整 数值。

  -   如果是空字符串（不包含字符），则返回0。 

  -  如果字符串包含除上述情况之外的其他字符，则返回NaN。 

  -  对象，调用 valueOf()方法，并按照上述规则转换返回的值。如果转换结果是 NaN，则调用 toString()方法，再按照转换字符串的规则转换。



- String

**字符字面量**

| 字 面 量 | 含义                                                         |
| -------- | ------------------------------------------------------------ |
| \n       | 换行                                                         |
| \t       | 制表符                                                       |
| \b       | 退格                                                         |
| \r       | 回车                                                         |
| \f       | 换页                                                         |
| \\\      | 反斜杠                                                       |
| \\'      | 单引号（'），在字符串以单引号标示时使用，例如'He said, \'hey.\'' |
| \\"      | 双引号（"），在字符串以双引号标示时使用，例如"He said, \"hey.\"" |
| \\`      | 反引号（\`），在字符串以反引号标示时使用，例如\`He said, \`hey.\`` |
| \xnn     | 以十六进制编码nn表示的字符（其中n是十六进制数字0~F），例如\x41等于"A" |
| \unnnn   | 以十六进制编码nnnn表示的Unicode字符（其中n是十六进制数字0~F），例如\u03a3等于希腊字 符"Σ" |

**字符串的特点**：字符串是不变的，改变某个变量的字符串的值，实际上是先删除再新建一个新的字符串；

**模板字面量**

- 保留换行字符
- ${} 插值
- 标签函数：标签函数本身是一个常规函数，通过前缀到模板字面量来应用自定义行为，如下例所示。标签函数 接收到的参数依次是原始字符串数组和对每个表达式求值的结果。这个函数的返回值是对模板字面量求 值得到的字符串。 

```javascript
let a = 6; 
let b = 9;  
function simpleTag(strings, ...expressions) { 
  console.log(strings);  
  for(const expression of expressions) { 
    console.log(expression); 
  } 
  return 'foobar'; 
} 
let untaggedResult = `${ a } + ${ b } = ${ a + b }`; 
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`; 
// ["", " + ", " = ", ""] 
// 6 
// 9 
// 15 
console.log(untaggedResult);   // "6 + 9 = 15" 
console.log(taggedResult);     // "foobar" 
```

**原始字符串**：String.raw

```javascript
// Unicode 示例 
// \u00A9 是版权符号 
console.log(`\u00A9`);            // © 
console.log(String.raw`\u00A9`);  // \u00A9 
```



- Symbol

| 主要使用场景                   | 核心作用                                                     | 关键点说明                                                   |
| :----------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| **避免属性名冲突**             | 为对象属性提供唯一的键名，防止不同代码（如第三方库）之间因属性名相同而意外覆盖。 | 这是 Symbol 最基本和常见的用途。                             |
| **模拟私有属性/方法**          | 在类或对象中创建难以从外部直接访问的成员，增强封装性。       | 通过 `Object.getOwnPropertySymbols()`仍可访问，因此是“模拟”而非绝对私有。 |
| **定义常量值**                 | 确保一组常量的值都是独一无二的，避免比较时产生歧义。         | 相比字符串或数字，能有效防止因值相同导致的逻辑错误。         |
| **修改语言内部行为（元编程）** | 通过内置的 **Well-known Symbols**（如 `Symbol.iterator`）来自定义对象的内置行为（如迭代）。 | 这是 Symbol 更高级的用法，用于元编程。                       |

**💡 理解 Symbol 的关键特性**

要更好地使用 Symbol，需要理解它的几个重要特性：

1. **唯一性**：这是 Symbol 最根本的特性。即使使用相同的描述符创建多个 Symbol，它们也互不相等

   。

   ```
   const sym1 = Symbol('id');
   const sym2 = Symbol('id');
   console.log(sym1 === sym2); // false
   ```

2. **不可枚举性**：当 Symbol 作为对象的属性键时，它不会被常规的遍历方法（如 `for...in`循环、`Object.keys()`）枚举到

   。这使得 Symbol 属性在一定程度上被“隐藏”起来。

3. **全局注册表**：你可以使用 `Symbol.for(key)`在全局范围内创建或访问一个共享的 Symbol。如果给定的 `key`在全局注册表中不存在，则创建一个新的 Symbol；如果已存在，则返回已存在的那个 Symbol

   。

   ```
   const globalSym1 = Symbol.for('app.global');
   const globalSym2 = Symbol.for('app.global');
   console.log(globalSym1 === globalSym2); // true
   ```

#### 3.3.3 Object类型

ECMAScript中的对象其实就是一组数据和功能的集合。对象通过new操作符后跟对象类型的名称 来创建。

```JavaScript
let o = new Object();
```

每个Object 实例都有如下属性和方法。 

- constructor：用于创建当前对象的函数。在前面的例子中，这个属性的值就是 Object()  函数。 
-  hasOwnProperty(propertyName)：用于判断当前对象实例（不是原型）上是否存在给定的属 性。要检查的属性名必须是字符串（如o.hasOwnProperty("name")）或符号。  
- isPrototypeOf(object)：用于判断当前对象是否为另一个对象的原型。（第8章将详细介绍 原型。）  
- propertyIsEnumerable(propertyName)：用于判断给定的属性是否可以使用（本章稍后讨 论的）for-in语句枚举。与hasOwnProperty()一样，属性名必须是字符串。  
- toLocaleString()：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。  
- toString()：返回对象的字符串表示。 
- valueOf()：返回对象对应的字符串、数值或布尔值表示。通常与toString()的返回值相同。  因为在ECMAScript中 Object 是所有对象的基类，所以任何对象都有这些属性和方法。

### 3.4 操作符

| 分类       | 操作符           | 作用                                                         |
| ---------- | ---------------- | ------------------------------------------------------------ |
| 一元操作符 | ++/--            | 自增/自减                                                    |
| 一元加/减  | +-               | 表正负并会进行类型转换                                       |
| 位操作符   | 按位非 ~         |                                                              |
|            | 按位与 &         |                                                              |
|            | 按位或 \|        |                                                              |
|            | 按位异或 ^       |                                                              |
|            | 左移<<           |                                                              |
|            | 有符号右移>>     |                                                              |
|            | 无符号右移>>>    |                                                              |
| 布尔操作符 | 逻辑非 ！        | 取反                                                         |
|            | 逻辑与 &&        | 如果第一个操作数是对象，则返回第二个操作数。<br />如果第二个操作数是对象，则只有第一个操作数求值为true才会返回该对象。<br />如果两个操作数都是对象，则返回第二个操作数。 <br />如果有一个操作数是null，则返回null。 <br />如果有一个操作数是NaN，则返回NaN。  <br />如果有一个操作数是undefined，则返回undefined。<br />逻辑与操作符是一种短路操作符，意思就是如果第一个操作数决定了结果，那么永远不会对第二个 操作数求值。 |
|            | 逻辑非 \|\|      | 如果第一个操作数是对象，则返回第一个操作数。<br />如果第一个操作数求值为false，则返回第二个操作数。<br />如果两个操作数都是对象，则返回第一个操作数。<br />如果两个操作数都是null，则返回null。<br />如果两个操作数都是NaN，则返回NaN。<br />如果两个操作数都是undefined，则返回undefined。<br />只不过对逻辑或而言，第一个操作数求值为 true，第二个操作数就不会再被求值了。 |
| 乘性操作符 | *                |                                                              |
| 除法操作符 | /                |                                                              |
| 取模操作符 | %                |                                                              |
| 指数操作符 | **               |                                                              |
| 加性操作符 | +                |                                                              |
| 减法操作符 | -                |                                                              |
| 关系操作符 | <、>、<=、>=     |                                                              |
| 相等操作符 | ==、!=、===、!== | 等和不等，比较前会先进行类型转换；全等和不全等，不进行类型转换 |
| 条件操作符 | boolean?x:y      |                                                              |
| 赋值操作符 | =                |                                                              |

> 数值18的二进制格式为00000000000000000000000000010010 第一位为符号位，正0负1

![image-20251029141804689](https://cdn.jsdelivr.net/gh/FengXueCode/FengXueResource@main/image/image-20251029141804689.png)

### 3.5 语句

#### 3.5.1 if

```JavaScript
//看例子
if (i > 25) {  //判断条件
//条件成立
  console.log("Greater than 25."); 
} else if (i < 0) { //次要条件，上面条件不通过，再判断
//次要条件成立
  console.log("Less than 0."); 
} else { 
//条件都不成立
  console.log("Between 0 and 25, inclusive."); 
}
```

#### 3.5.2 do-while

do-while 语句是一种后测试循环语句，即循环体中的代码执行后才会对退出条件进行求值。换句 话说，循环体内的代码至少执行一次。

```javascript
let i = 0; 
do { 
  i += 2; 
} while (i < 10);
```

#### 3.5.3 while

while 语句是一种先测试循环语句，即先检测退出条件，再执行循环体内的代码。

```javascript
let i = 0; 
while (i < 10) { 
  i += 2; 
} 
```

#### 3.5.4 for

for 语句也是先测试语句，只不过增加了进入循环之前的初始化代码，以及循环执行后要执行的表 达式。

```javascript
let count = 10; 
for (let i = 0; i < count; i++) { 
  console.log(i);  
}
```

#### 3.5.5 for-in

for-in 语句是一种严格的迭代语句，用于枚举对象中的非符号键属性。（拿对象key)

```javascript
for (const propName in window) { 
  document.write(propName);  
} 
```

#### 3.5.6 for-of

for-of 语句是一种严格的迭代语句，用于遍历可迭代对象的元素。

```javascript
for (const el of [2,4,6,8]) { 
  console.log(el);//2 4 6 8
} 
```

#### 3.5.7 switch

```javascript
switch (expression) { 
  case value1:  
    statement 
    break; 
  case value2: 
    statement 
    break; 
  case value3: 
    statement 
    break; 
  case value4: 
    statement 
    break; 
  default: 
    statement 
} 
```

这里的每个case（条件/分支）相当于：“如果表达式等于后面的值，则执行下面的语句。”break 关键字会导致代码执行跳出switch语句。如果没有break，则代码会继续匹配下一个条件。default 关键字用于在任何条件都没有满足时指定默认执行的语句（相当于else语句）

#### 3.5.8 标签语句

标签语句用于给语句加标签

```JavaScript
start: for (let i = 0; i < count; i++) { 
  console.log(i);  
} 
```

#### 3.5.9 break和continue语句

break语句用于立即退 出循环，强制执行循环后的下一条语句。而continue语句也用于立即退出循环，但会再次从循环顶部 开始执行。

```JavaScript
//break
let num = 0;  
for (let i = 1; i < 10; i++) { 
  if (i % 5 == 0) { 
    break; 
  } 
  num++; 
} 
console.log(num); // 4 
//continue
let num = 0;  
for (let i = 1; i < 10; i++) { 
  if (i % 5 == 0) { 
continue; 
  } 
  num++; 
} 
console.log(num); // 8 
//标签配合break
let num = 0; 
outermost: for (let i = 0; i < 10; i++) { 
  for (let j = 0; j < 10; j++) { 
    if (i == 5 && j == 5) { 
      break outermost; //从标签处结束，第一个for
    } 
    num++;  
  } 
} 
console.log(num); // 55 
//标签配合continue
let num = 0; 
outermost:  for (let i = 0; i < 10; i++) { 
  for (let j = 0; j < 10; j++) {
       if (i == 5 && j == 5) { 
		continue outermost; //从标签处跳过，第一个for
    } 
    num++; 
  } 
} 
console.log(num); // 95 
```



### 3.6 函数

ECMAScript中的函数与其他语言中的函数不一样。 

- 不需要指定函数的返回值，因为任何函数可以在任何时候返回任何值。  
- 不指定返回值的函数实际上会返回特殊值undefined。



## 第4章 变量、作用域与内存

### 4.1 原始值与引用值

- 原始值：最简单的数据（Undefined、Null、Boolean、Number、String 和Symbol）
- 引用值：多个值构成的对象（Object）

#### 4.1.1 动态属性

原始值和引用值的定义方式很类似，都是创建一个变量，然后给它赋一个值。

原始值不能有属性且只能使用原始字面量；

```JavaScript
let person = new Object(); 
person.name = "Nicholas"; 
console.log(person.name); // "Nicholas"
```

#### 4.1.2 复制值

原始值复制就是创建一个新的值然后把旧值复制给它；

引用值复制则是将旧值的引用地址复制给新值；

#### 4.1.3 传递参数

所有的函数的参数都是按值传递，这意味着函数外的值会被复制到函数内部的参数 中，就像从一个变量复制到另一个变量一样。

#### 4.1.4 确定类型

typeof：确定原始值00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

instanceof：确定引用值

```JavaScript
console.log(person instanceof Object);  // 变量 person 是 Object 吗？ 
console.log(colors instanceof Array);   // 变量 colors 是 Array 吗？ 
console.log(pattern instanceof RegExp); // 变量 pattern 是 RegExp 吗？ 
```

### 4.2 执行上下文与作用域

变量或函数的上下文决定 了它们可以访问哪些数据，以及它们的行为。每个上下文都有一个关联的**变量对象（variable object）**， 而这个上下文中定义的所有变量和函数都存在于这个对象上。虽然无法通过代码访问变量对象，但后台处理数据会用到它。

- 执行上下文分**全局上下文**、**函数上下文**和**块级上下文**。 
- 代码执行流每进入一个新上下文，都会创建一个作用域链，用于搜索变量和函数。
- 函数或块的局部上下文不仅可以访问自己作用域内的变量，而且也可以访问任何包含上下文乃 至全局上下文中的变量。
- 全局上下文只能访问全局上下文中的变量和函数，不能直接访问局部上下文中的任何数据。

### 4.3 垃圾回收

JavaScript 是使用垃圾回收的编程语言，开发者不需要操心内存分配和回收。JavaScript的垃圾回收 程序可以总结如下。

- 标记清理：超出上下文则标记
- 引用计数：需要记录值被引用了多少次，初始值1，引用一次+1，被覆盖-1，到0时标记；

> 引用计数在循环调用的时候会出问题



## 第5章 基本引用类型

- [Date - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [RegExp - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Boolean - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [Number - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [String - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String))



## 第6章 集合引用类型



- [Object - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Array - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [ArrayBuffer - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

定型数组（Typed Array）是 JavaScript 中用于处理二进制数据的一种特殊数组。它允许你以结构化的方式操作原始内存，在处理图像、音频、视频等需要高性能计算的场景中非常有用。

| **类型**              | **每个元素大小 (字节)** | **描述 (C语言等价类型)**        | **值的范围**              |
| :-------------------- | :---------------------- | :------------------------------ | :------------------------ |
| **Int8Array**         | 1                       | 8位有符号整数 (signed char)     | -128 到 127               |
| **Uint8Array**        | 1                       | 8位无符号整数 (unsigned char)   | 0 到 255                  |
| **Uint8ClampedArray** | 1                       | 8位无符号整数（强制转换）       | 0 到 255                  |
| **Int16Array**        | 2                       | 16位有符号整数 (signed short)   | -32768 到 32767           |
| **Uint16Array**       | 2                       | 16位无符号整数 (unsigned short) | 0 到 65535                |
| **Int32Array**        | 4                       | 32位有符号整数 (signed int)     | -2147483648 到 2147483647 |
| **Uint32Array**       | 4                       | 32位无符号整数 (unsigned int)   | 0 到 4294967295           |
| **Float32Array**      | 4                       | 32位IEEE浮点数 (float)          | -3.4e+38 ~ +3.4e+38       |
| **Float64Array**      | 8                       | 64位IEEE浮点数 (double)         | -1.7e+308 ~ +1.7e+308     |

⚡ **主要用途**

定型数组主要用于需要高效处理大量二进制数据的场景

1. **图形处理**：例如**WebGL**。当需要将大量的顶点坐标、颜色、法线等数据传递给GPU时，使用定型数组（如`Float32Array`）可以避免JavaScript原生数字（64位双精度浮点数）与GPU期望的数据格式（如32位浮点数）之间昂贵的转换，极大提升性能
2. **多媒体操作**：处理**Canvas图像像素数据**（常用`Uint8ClampedArray`）、**音频数据**（如`Float32Array`表示音频采样）时，定型数组能提供高效的底层访问
3. **网络通信**：通过**WebSocket**接收或发送二进制数据，或处理从文件（通过`FileReader.readAsArrayBuffer`读取）中获取的原始二进制流时，定型数组是理想的工具

- [Map - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [Set - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [WeakSet - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

| 场景                                                       | 推荐数据结构 | 理由                         |
| :--------------------------------------------------------- | :----------- | :--------------------------- |
| 需要存储键值对，且**键不是字符串**                         | `Map`        | 支持任意类型的键。           |
| 需要存储**唯一值**的列表                                   | `Set`        | 自动去重。                   |
| 需要**遍历**集合、或知道集合**大小**                       | `Map`/ `Set` | 支持迭代和 `size`属性。      |
| **关联对象与附加数据**，且希望数据随对象自动销毁           | `WeakMap`    | **弱引用，自动内存管理**。   |
| **标记对象状态**（如是否已处理），且希望标记随对象自动失效 | `WeakSet`    | **弱引用，自动内存管理**。   |
| 关联或标记的**对象需要长期存在**                           | `Map`/ `Set` | 强引用能防止对象被意外回收。 |



## 第7章 迭代器与生成器

| 特性             | 迭代器 (Iterator)                                           | 生成器 (Generator)                                           |
| :--------------- | :---------------------------------------------------------- | :----------------------------------------------------------- |
| **核心概念**     | 提供统一方法**顺序访问**集合元素的对象                      | 能**暂停和恢复**执行的**特殊函数**                           |
| **创建方式**     | 实现 `next()`方法的对象                                     | 使用 `function*`和 `yield`关键字定义的函数                   |
| **控制流**       | 由调用者外部管理                                            | 函数内部通过 `yield`自动暂停和恢复，状态由生成器自身管理     |
| **典型应用场景** | • 为自定义数据结构提供统一遍历接口 • 惰性加载数据（如分页） | • 创建**无限序列** • 简化**异步流程控制**（在 `async/await`之前常见） • 实现**状态机** • **分块处理**大数据，避免阻塞主线程 |