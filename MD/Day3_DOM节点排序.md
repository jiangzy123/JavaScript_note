title: Day3 JavaScript学习 - DOM节点排序
date: 2015-11-30
categories: JavaScript
tags: [正式学习javascript,排序]
---

写了两篇学习笔记后，觉得原计划每天1篇的要求实在是太难达到了，由于本来也是初学阶段，学习需要理解，需要实践，好多内容不太明白的地方还需要时间查证，于是将计划稍微往下调了调，现在争取每周能有3篇基础学习笔记，然后周末一天能够实现某个功能模块就算是完美完成一周的学习任务了。

今天学习笔记内容是DOM节点的排序，要点就是前面两篇的内容，外加上Array的一些内容。
<!-- more -->
这个例子其实就是[JavaScript教程 - 廖雪峰的官方网站](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)中的一个例子，我觉得这个例子非常好，于是记载在这里了。

### 题目：
根据列表的内容，对列表节点进行排序，如下html片段，根据`li`节点的内容进行排序。

```html
<ol id="test-list">
	<li class="lang">Scheme</li>
	<li class="lang">JavaScript</li>
	<li class="lang">Python</li>
	<li class="lang">Ruby</li>
	<li class="lang">Haskell</li>
	<li class="lang">Html</li>
	<li class="lang">Css</li>
</ol>
```

### 解题：
这里我总结了大概下列5种解题方案

1. 直接取出DOM节点，存入一个`Array`中，然后针对`Array`进行`sort`排序，最后依次插入到父节点中；
2. 取出每个`li`节点的文本信息，存入`Array`队列中，然后针对文本进行排序，创建的节点，将文本赋值，替代父节点innerHTML信息；
3. 前面同2一样，后面不用创建新的节点，直接给父节点的`children`赋值；
4. 采用排序算法，直接取出最小或者最大的节点，插入到父节点中；
5. 采用冒泡排序算法，使用`insertBefore`方法`冒泡`处理；（此处参考教程评论处）

OK，代码实践如下，亦或者直接[点击此处](../HTML/003.html)查看效果。

```javascript
// 直接将DOM节点保存在Array列表中进行排序
function sortDOM1 () {
	var list = document.getElementById('test-list');
	var arr = [].slice.call(document.getElementsByClassName("lang"));
	arr.sort(function(x1,x2){
		if (x1.innerHTML < x2.innerHTML){
			return -1;
		}else if (x1.innerHTML > x2.innerHTML){
			return 1;
		}else{
			return 0;
		}
	});
	for(var i = 0 ; i < arr.length ; i++){
		list.appendChild(arr[i]);
	}
}
// 先清空，再创建
function sortDOM2(){
	var list = document.getElementById("test-list");
	var lang = document.getElementsByClassName("lang");
	var arrList = [];
	for (var i = 0 ; i < lang.length ; i ++){
		arrList[i] = lang[i].innerHTML;
	}
	arrList.sort();
	list.innerHTML = ""; // 清空一个DOM节点的方法，简单粗暴
	for (var i = 0 ; i < arrList.length ; i ++){
		var newElement = document.createElement("li");
		newElement.setAttribute("class","lang");
		newElement.innerHTML = arrList[i];
		list.appendChild(newElement);
	}
}
// 直接更改children
function sortDOM3(){
	var list = document.getElementById("test-list");
	var lang = document.getElementsByClassName("lang");
	var arrList2 = [];
	for (var i = 0 ; i < lang.length ; i ++){
		arrList2[i] = lang[i].innerHTML;
	}
	arrList2.sort();
	for(var i = 0 ; i < arrList2.length ; i ++){
		list.children[i].innerHTML = arrList2[i];
	}
}
// 排序算法
function sortDOM4 () {
	var list = document.getElementById("test-list");
	var lang = document.getElementsByClassName("lang");
	for (var i = 0 ; i < lang.length-1 ; i++){
		for(var j = i+1 ; j < lang.length ; j ++){  // 	取出最大的那个，插入第一个
			if (lang[i].innerHTML < lang[j].innerHTML){
				var a ;
				a = lang[i].innerHTML;
				lang[i].innerHTML = lang[j].innerHTML;
				lang[j].innerHTML = a; 
			}
		}
		list.children[i].innerHTML = lang[i].innerHTML;
	}
}
// 冒泡排序算法
function sortDOM5 (){
	var list = document.getElementById("test-list");
	var lang = document.getElementsByClassName("lang");
	for (var i = 0 ; i < lang.length ; i ++){
		for(var j = 0 ; j < lang.length - i -1 ; j ++){  // 每次遍历次数递减
			if(lang[j].innerHTML > lang[j+1].innerHTML){
				list.insertBefore(lang[j+1],lang[j]);
			}
		}
	}
}
```