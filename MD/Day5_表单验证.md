title: Day5 JavaScript学习 - 表单验证
date: 2015-12-06
categories: JavaScript
tags: [正式学习javascript,表单验证]
toc: false
---

根据一万个小时的理论，也就是说不管是什么内容，持续坚持学习一万个小时，你也就变成了个中高手。那么一个万个小时是多长概念呢，对于一个业余爱好来说大概是多长时间呢？假设每天能平均抽出2个小时来学习，那麽一年下来是：`2*365=730`小时，一万个小时就是`10000/730=13.7`年。哇，不想了，接着学习吧，如果真的喜欢，那便是快乐，与其他无关。
<!-- more -->
今天学习的内容是表单验证，这个要多普遍就有多普遍，基本上所有的网站都要用到这个。注册、登录、评论等等，只要是想往服务器POST信息的，基本上都要用到`form`，好了，接着看例子。

```hmtl
<form action="#" id="test-form" onsubmit="return checkForm()">
  <div><span class="text">username:</span><input type="text" name="username" id="username"></div>
  <div><span class="text">password:</span><input type="text" name="password" id="password"></div>
  <div><span class="text">re-password:</span><input type="text" name="password2" id="password2"></div>
  <div id="error" class="text"></div>
  <button type="submit" name="submit">Submit</button>
  <button type="reset" name="reset">Reset</button>
</form>
```

用户名，密码是注册登录界面最基本的元素，还有好多基本的元素就不一一写出来了，那些东西都是练习得多了，自然就会了。关键还是在代码量。

实现功能：

1. 用户名要求数字，字母3-10位；
2. 密码要求6-12位；
3. 两次密码输入要一致；

- 第一个要点要使用到正则表达式来匹配
	- 用户名匹配用`/^[0-9a-zA-Z]{3,10}$/`
	- 密码匹配用到`/^.{6-12}$/`；

- 第二个要点就是表单提交的方法
	- 一是使用了表单的`submit()`方法；  
	`document.getElementById("formId").submit()`
	- 二是浏览器默认提交方法`<button type="submit">`，使用`submit`类型的`button`按钮来提交，这种方法需要在`form`中添加`onsubmit`属性值。

主要内容就是这些，那么接下来就是代码实现了。

```javascript
function checkForm() {
  var form = document.getElementById('test-form');
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var rePassword = document.getElementById('password2').value;
  var error = document.getElementById('error');
  // 不允许为空
  if (username.length <= 0 || password.length <= 0 || password2 <= 0){
    error.innerHTML = "not allow empty";
    return false;
  }
  // 用户名为字符数字，3到10位
  var reg_username = /^[0-9a-zA-Z]{3,10}$/;
  if(!reg_username.test(username)){
    error.innerHTML = "username is not valid, please retry";  
    return false;
  }
  // 密码需为6到12位
  var reg_password = /^.{6,12}$/;
  if(!reg_password.test(password)){
    error.innerHTML = "password is not valid, please retry";
    return false;
  }
  // 两次输入密码需一致
  if (password != rePassword) {
    error.innerHTML = "inconsistent password";
    return false;
  }
  error.innerHTML = "Success";
  alert("Access Success");
  return true;
}
```

直接[点击这里](../HTML/005.html)，查看效果。