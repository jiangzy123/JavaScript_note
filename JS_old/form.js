window.onload = function(){
	

	//alert("email".localeCompare("email"));	
	// initField(document.getElementsByTagName("input")[0]);
	 initForm(document.fm);
	 document.fm.repassword.onblur = function(){
		if(document.fm.password.value != null){
			var pa = document.fm.password.value;
			var repa = document.fm.repassword.value;
			if(!isTheSame(pa,repa)){
				document.getElementsByTagName("span")[0].nodeValue = "两次输入的密码不一样";
			}else{
				document.getElementsByTagName("span")[0].nodeValue = "";
			}
		}
	 }
	 
	 document.fm.email.onblur = function(){
		if(document.fm.email.value != null){
			var email = document.fm.email.value;
			if(!isEmail(email)){
				document.getElementsByTagName("span")[0].innerHTML = "email格式不对";
			}else{
				document.getElementsByTagName("span")[0].nodeValue = "";
			}
		}
	 }
	 
	 // demo
	 
/*	var username = "username";
	var password = "password";
	//document.fm.username.focus();
	var inputs = document.getElementsByTagName("INPUT");
	for(var i=0;i<inputs.length;i++){
		var name = inputs[i].getAttribute("name");
		inputs[i].onblur=function(){
			this.focus();
		}
	}
*/	
	function handler(obj){
		
	}
	 
}

function isEmpty(str){
	if(str == null || /^\s*$/.test(str)){
		return true;
	}else{
		return false;	
	}
}

function isEmail(email){
	if(email != null && /^[a-z 0-9]+@\w+\.[^0-9]+/i.test(email)){
		return true;
	}else{
		return false;
	}
}

function isTheSame(str1,str2){
	if(str1 != null && str2 != null){
		if(str1.localeCompare(str2) == 0){
			return true;
		}
	}
	return false;
}

function initForm(form){
	var fields = form.elements;
	for(var i = 0 ; i < fields.length ; i++){
		if(fields[i].getAttribute("type") != "submit" && fields[i].getAttribute("type") != "reset"){
			if(fields[i].tagName.localeCompare("input")){
				initField(fields[i]);
			}
		}
	}
}

function initField(field){
	field.onclick=function(){
		if(!isEmpty(this.defaultValue)){
			if(this.defaultValue == this.value){
				this.value = "";
			}
		}
	}
	field.onblur = function(){
		if(isEmpty(this.value)){
			this.value= this.defaultValue;
		}
	}
}


