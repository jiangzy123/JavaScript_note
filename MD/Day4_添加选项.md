title: Day4 JavaScript学习 - 添加选项界面
date: 2015-12-04
categories: JavaScript
tags: [正式学习javascript,添加选项界面]
toc: false
---

> 朋友圈里看到一句戳心窝的话：『间歇性踌躇满志，持续性混吃等死』

坚持下去总是好的，永远记住当时你为什么有那么一会的踌躇满志，不管什么理由，反正是不想要现在的状态。
<!-- more -->
今天是对前面学习内容的一个小结，这个小内容其实在很早之前就一直想完成了，当然之前只是一直想，想，想...

内容就是完成一个『添加选项的界面』，很多地方都会用到这个小功能模块，基本功能就是一个表单，可以随时添加选项，同时可以随时删除选项。

功能很简单，对于代码量少得可怜的我来说，实实在在写出来才是最真实的。

```html
<form id="test-form">
  	<ol id = "test-ol"></ol>
  	<button onclick="addOption()">Add</button>
</form>
```

页面就是这么简单，一个表单，一个按钮，接下来就是`JS`的上场时间了。

```javascript
var count = 1	;
function addOption () {
	var form = document.getElementById('test-form');
	var ol = document.getElementById('test-ol');
	var li = document.createElement("li");
	li.setAttribute("class","li-options");
	li.id = "li" + count;
	var input = document.createElement("input");
	input.setAttribute("class","options");
	input.setAttribute("type","text");
	var button = document.createElement("button");
	button.innerHTML = "Remove";
	button.setAttribute("class","removeButton");
	button.id = count;
	button.setAttribute("onclick","removeOption(this.id)");
	
	ol.appendChild(li);
	li.appendChild(input);
	li.appendChild(button);
	count ++;
}
function removeOption(iCount){
	var ol = document.getElementById("test-ol");
	var removeId = "li" + iCount;
	var needRemove = document.getElementById(removeId);
	ol.removeChild(needRemove);
}
```

添加的功能很容易，跟之前的内容结合起来就很容易实现了；移除功能需要想想办法了，这里使用了一个变量`count`来定位到底是哪个`remove`按钮点击了，传入`this.id`到函数`removeOption`中，然后删除对应的`li`节点。

查看效果直接[点击此处](../HTML/004.html)，也许写的方法有些笨，但是最终还是实现基本的要求，后续更加深入学习再回头看看之前的代码应该也是很有乐趣的吧。

下周的主要学习内容是表单的相关操作了。

