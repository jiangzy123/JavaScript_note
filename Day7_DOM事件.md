title: Day7 JavaScript-DOM事件
date: 2015-12-15
categories: JavaScript
tags: [DOM事件,鼠标事件]
---

前面的例子一直都在使用鼠标的`click`事件，之前也零零散散的了解过一些事件，诸如：`focus`、`mouseover`等，这里重新针对这些鼠标事件再学习总结一遍。

<!-- more -->

JavaScript操作HTML，最重要的知识应该就是这块了，没有这块的相关鼠标事件，真的很难想象JavaScript还能对HTML做些什么。这里就从网页加载开始，系统学习一下这些DOM事件。

### 1. `onload`&`onunload`事件
用户进入或者离开页面时被触发。`onload`事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。`onload`和`onunload`事件可用于处理 cookie。

### 2. `onfocus`&`onblur`&`onchange`事件
把它们列在一组，是因为在`input`输入框中比较常用。

- `onfocus`获取焦点的时候
- `onblur`失去焦点的时候
- `onchange`内容被改变的时候

### 3. `onmouseover`&`onmouseout`事件
顾名思义，鼠标悬浮移入移开的时候触发。在动态加载某些内容的时候，较常用。


### 4. `onmousedown`&`onmouseup`&`onclick`事件
这一组是鼠标点击的一套动作。按下鼠标`onmousedown`,松开鼠标`onmouseup`,完成点击`onclick`。通过这些可以做出很漂亮的效果以及用户体验。



以上只是列举了我觉得比较常用的一些事件，需要更多的请查看参考手册：[HTML DOM Event 对象](http://www.w3school.com.cn/jsref/dom_obj_event.asp)

