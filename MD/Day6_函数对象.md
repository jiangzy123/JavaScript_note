title: Day6 JavaScript学习 - 函数对象
date: 2015-12-09
categories: JavaScript
tags: [函数,Function类,arguments对象]
---

> JavaScript 最令人感兴趣的莫过于函数实际上就是功能完整的对象，JavaScript中所有的事物都是对象，包括函数。函数名只是指向函数对象的一个引用，行为就像其他对象一样。甚至可以使两个变量指向同一个函数，因此函数可以当做参数传递给另外一个函数。

上面是我在学习`JavaScript`函数对象对我感触最深的一段话，当然这也是`JavaScript`的特别之处。

### 1. 创建函数的方法
创建一个函数非常简单，如：

```javascript
function sayHello(name){
    alert("Hello," + name);
}
```

既然函数名只是指向函数对象的一个引用，那么就是说`sayHello`就如同其他变量一样。当然你也可以这样定义一个函数：

```javascript
var sayHello = function(name){
    alert("Hello..." + name);
}
```

两种方式得到的效果是一样的，`sayHello`都是函数对象的一个引用，可以理解为指向一个对象的指针变量。如果对一个变量重新赋值的话，就会改变指针指向的对象。

```javascript
function sayHello(name){
    alert("Hello," + name);
}
var sayHello = function(name){
    alert("Hello..." + name);
}
sayHello("JavaScript");
```

这样弹出的窗口肯定是"Hello...JavaScript"而不是"Hello,JavaScript"，因为指向的对象变了。

> 函数实际上就是功能完整的对象，对象是某个类的实例。那么通过`Function`类肯定也是可以创建一个函数的。

`Function`类可以创建任何函数，语法如下：

    var function_name = new function(arg1, arg2, ..., argN, function_body);

那么上面那个例子就可以表示为：

    var sayHello = new function("name", "alert(\"Hello,\" + name);");

看起来就觉得别扭，所以通常情况下不会这么去创建一个函数对象。但是这种方式却很直接的将函数名只是函数对象的一个引用的概念表现出来了，所有函数都应看作`Function`类的实例。既然函数名只是一个引用，当然就可以将一个函数当作参数变量传递给另一个函数。看下面例子：

```javascript
function calcSomething(regular,value1,value2){
    alert(regular(value1,value2));
}
function plus(x1,x2){
    return  x1 + x2;
}
function minus(x1,x2){
    return x1 - x2;
}
calcSomething(plus,5,10);
calcSomething(minus,5,10);
```

将`plus`以及`minus`当作一个参数传入另外一个函数中。


### 2. Function对象（类）的属性与方法

每一个对象都有它的属性和方法，既然函数是`Function`类的一个对象，那么每一个函数都应该继承`Function`类的属性与方法。比较常见的有`length`属性以及`toString`方法。

1. `calcSomething.length`等于3，代表有3个参数；
2. `calcSomething.toString()`打印出函数主体；

### 3. 特殊对象`arguments`
JavaScript还有一个特殊的对象`arguments`，也就是函数的参数。我们无需指定一个函数的参数，就可以直接访问到它。并且可以接受最多255个参数。看个简单的例子，大致的用法就清楚了。

```javascript
function addSum(){
	var sum = 0;
	if (arguments.length == 0) {
		return sum;
	}else{
		for (var i = 0; i < arguments.length; i++) {
			sum = sum + arguments[i];
		};
		return sum;
	};
}
alert("The sum is " + addSum(3,4,5));
```

1. `arguments.length`代表函数参数的个数；
2. `arguments[i]`参数列表可以当做数组来访问；

> 这里只是`JavaScript`函数对象的初步了解，待后续继续深入学习。