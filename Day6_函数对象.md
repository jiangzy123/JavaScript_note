title: Day6 JavaScript学习 - 函数对象
date: 2015-12-09
categories: JavaScript
tags: [正式学习javascript,函数对象]
---

> JavaScript 最令人感兴趣的莫过于函数实际上就是功能完整的对象，JavaScript中所有的事物都是对象，包括函数。函数名只是指向函数对象的引用值，行为就像其他对象一样。甚至可以使两个变量指向同一个函数，因此函数可以当做参数传递给另外一个函数。

上面是我在学习JavaScript函数对象对我感触最深的一段话，当然这也是JavaScript的特别之处。

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
    alert("Hello," + name);
}
```

### 2. Function对象的属性与方法



> 尽管可以使用 Function 构造函数创建函数，但最好不要使用它，因为用它定义函数比用传统方式要慢得多。不过，所有函数都应看作 Function 类的实例。