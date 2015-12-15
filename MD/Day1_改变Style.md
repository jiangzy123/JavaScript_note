title: Day1 正式学习JavaScript
date: 2015-11-27
categories: JavaScript
tags: [正式学习javascript,改变DOM]
toc: false
---

我并不是第一次接触编程，也并不是第一次接触JavaScript，之前学习过一段时间Java Web，对于基本的Web技术略懂一些，也自学过一段时间Node.js，对Node的相关技术也略懂一些，对于什么HTML、CSS前端技术也略懂一些，所以总结来说：`啥也不明白`，懵懵懂懂过了好长时间，能写出几个简单的页面，但是从没有完成一个完整的项目，究其原因还是代码量太少，太嫩了。
<!--more-->
为什么选择JavaScript？个人比较热衷于Web的相关技术，速度快，做了就能出效果；并且我是一个标准的视觉动物，喜欢一切美好漂亮的事物。当然也想真正拥有那些漂亮的Pages，能完成一些设计的工作更好了，不过这需要的是一种天赋一种感觉，热衷于此，兴趣所在。

学习日志，当然还是要以学习内容为主，记载只是为了自我监督而已。一些特别基础的教程我是没有耐心读下去的，特别讨厌我这种`高不成低不就`的感觉，希望能再往高爬爬。最近先是以[JavaScript教程 - 廖雪峰的官方网站](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)开始学习，日志内容可能会以廖老师的一些例子着手。教程虽说是给小白看的，但是有些内容还是很深的。

学习JavaScript，都是要从操作DOM开始的，这可以说是最基础的了。今天学习的内容就是学会操作DOM。以下例子，或者[点击此处](../HTML/001.html)实际演示。

```html
<!DOCTYPE html>
<html>
<head>
    <title>Study_JavaScript_001</title>
    <script type="text/javascript" src='001.js'></script>
</head>
<body>
    <a href="lupeng.me" style="font-style: italic">HOME</a>
    <div id="content">
        <p id='test-p'></p>
    </div>
    <button onclick="addSomeText()">addSomeText</button>
    <button onclick="changeStyle()">changeStyle</button>
</body>
</html>
```

简单的HTML代码，下面是js代码

```javascript
// 001.js
function addSomeText(){
    var p = document.getElementById("test-p");
    // innerHTML非常重要的属性，往DOM节点里添加任何内容（注意不是绝对）
    p.innerHTML = "Hello,JavaScript!"  
}
function changeStyle(){
    var p = document.getElementById("test-p");
    // 改变style样式，注意驼峰写法
    p.style.fontSize = "2em";  
    p.style.color = "red";
    p.style.fontWeight = "bold";
    p.style.padding = "1em";
    p.style.backgroundColor = "yellow";
    p.style.fontFamily = "fantasy";
    p.style.fontStyle = "italic";
}
```

总结：

1. 获取DOM节点，`document`对象的三个方法，`getElementById()`、`getElementsByClassName()`、`getElementsByTagName()`；
2. `innerHTML`属性值，添加的内容可能是文本，亦可以是HTML片段；
3. 改变样式方法，使用驼峰变量写法；
