title: Day2 JavaScript学习 - 增删DOM节点
date: 2015-11-29
categories: JavaScript
tags: [正式学习javascript,增删DOM节点]
---

忙真的不是借口，并不能因为忙就把刚刚给自己定下来的学习目标抛之脑后。虽然这周真的很忙，公司一个破项目把我这几个月折腾得够呛，虽说是上线了，但是还是一堆的问题需要解决，大家都懂得，上线不等于就完事，特别是那种被追赶出来的东西。
<!-- more -->
第一天，主要是学习了修改Style，今天就增删DOM节点的内容来总结一下，其实这个内容跟第一天的内容完全可以合并，由于第一天『励志』要开始学习JavaScript，并记录学习笔记，写了很多的废话，于是就把增删DOM节点的学习内容分开记录了。

### 1. 增加DOM节点
简单学习过一些数据库的知识，我是知道`增删改查`的基本概念的，第一天学习了如何查找一个DOM节点，通过  
`document.getElementById()`  
`document.getElementsByClassName()`  
`document.getElementsByTagName()`  
可以找到HTML上的DOM节点，那么增加DOM节点呢？

其实这里应该有3中方法来实现。

1. `innerHTML`属性值，第一天的时候就知道，在一个节点里添加一些内容，这些内容可以是`HTML`的片段，这样就相当往节点里增加了其他的DOM节点；
2. `appendChild`方法，在父节点中插入一个DOM节点；
3. `insertBefore`方法，将一个DOM节点插入到指定的位置上；

知道了方法，就得动手实践了，不动手写代码，估计我永远也提高不了编程水平。实际演示代码[点击这里>](/html/JavaScript/002.html)

### 2. 删除DOM节点
世界总是平衡的，有正就要有负，有增加就应该有删除，删除节点的方法就相对简单点，当然不是`document.getElementById("xxx").innerHTML = ''`.

1. `removeChild`方法，跟`appendChild`相对；

实际演示代码[点击这里>](../HTML/002.html)

下面贴上`JavaScript`代码便于日后查看，HTML就免了，当然可以直接点击上述链接审查代码。

```javascript
// 002.js
function add1(){
	//将已有的节点插入到list列表中
	var list = document.getElementById("list");
	var javascript = document.getElementById("javascript");
	javascript.style.color = "red";
	list.appendChild(javascript);
}
function add2(){
	//创建一个节点，并插入到list列表中
	var java = document.createElement("p");
	java.setAttribute("id","java");
	java.innerHTML = "Java";
	list.appendChild(java);
}
function add3(){
	//创建一个节点，并插入到list列表中
	var php = document.createElement("p");
	php.setAttribute("id","php");
	php.innerHTML = "PHP";
	list.insertBefore(php,java);  //将php节点插入到java节点前面
}
function removeSomething(){
	var java = document.getElementById("java");
	var list = document.getElementById("list");
	list.removeChild(java);  //移除指定节点
}
```

参考内容：[JavaScript教程 - 廖雪峰的官方网站](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)
