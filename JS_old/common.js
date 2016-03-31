function getById(str){
	return document.getElementById(str);
}

function getByClassName(str){
	return document.getElementsByClassName(str);
}

function getByTagName(str){
	return document.getElementsByTagName(str);
}

function initField(field){
	field.onclick = function(){
		if(this.value == this.defaultValue){
			this.value= "";
		}
	}
	field.onblur = function(){
		if(this.value == ""){
			this.value = this.defaultValue;
		}
	}
}
 function isEmpty(str){
	if(/^ /.test(str)){
		return true;
	}else{
		return false;
	}
 }

function isEmail(str){
	if(/^\w+@\w+\.\w+/.test(str)){
		return true;
	}else{
		return false;
	}
}

function isPhoneNum(str){
	if(/^\d{8,11}$/.test(str)){
		return true;
	}else{
		return false;
	}
}

/*
function BaseFuntion(){
}
BaseFuntion.prototype.getById=function(id){
	return document.getElementById(str);
}*/

