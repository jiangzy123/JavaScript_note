title: Day9 JavaScript-浏览器对象模型（BOM）
date: 2016-01-12
categories: JavaScript
tags: [window对象]
---

`JavaScript`另外一块比较重要的内容就是`BOM(浏览器对象模型)`，定义了浏览器窗口的一些属性以及方法，实现JavaScript的交互性。今天主要学习了解了这一块的基本内容。

### 1. window对象

> 所有浏览器都支持 window 对象。它表示浏览器窗口。  
> 所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

- `window.innerHeight` 窗口高度
- `window.innerWidth` 窗口宽度

### 2. screen对象

> 该对象包含屏幕相关信息，

- `screen.availHeight` 屏幕高度
- `screen.availWidth` 屏幕宽度

### 3. location对象

> window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。

- `location.hostname` 返回 web 主机的域名
- `location.pathname` 返回当前页面的路径和文件名
- `location.port` 返回 web 主机的端口 （80 或 443）
- `location.protocol` 返回所使用的 web 协议（http:// 或 https://）
- `location.href` 返回URL
- `location.assign('http://lupeng.me')` 加载新的文档

### 4. history对象

> 包含浏览器的历史。

- `history.back()` 后退
- `history.forward()` 前进

### 5. navigator对象

> window.navigator 对象包含有关访问者浏览器的信息。

- Browser CodeName:  `navigator.appCodeName`;
- Browser Name:  `navigator.appName`;
- Browser Version:  `navigator.appVersion`;
- Cookies Enabled:  `navigator.cookieEnabled`;
- Platform:  `navigator.platform`;
- User-agent header:  `navigator.userAgent`;
- User-agent language:  `navigator.systemLanguage`;

### 6. PopupAlert对象

最常用的就是`alert()`函数了，还有`confirm()`以及`prompt()`

- `confirm("文本")` 确认返回`true`，取消返回`false`
- `prompt("文本","默认值")` 确认返回文本值，取消返回`null`

### 7. Timing对象
 
> 通过使用 JavaScript，我们有能力做到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件。

主要有两个函数：

- `setTimeout("JavaScript语句",毫秒)` 设置一个定时器
- `clearTimeout(t)` 取消一个定时器，传入定时器对象

### 8. Cookies对象

cookies是存储在用户计算机上的变量

- `setCooies("变量",变量值,时间)`
- 