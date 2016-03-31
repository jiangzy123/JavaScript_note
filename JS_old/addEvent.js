/**
	window.onload = function(){};函数的监听
*/
function addOnload(newOnload){
	var oldOnload = window.onload;
	if(typeof oldOnload == "function"){
		window.onload= function(){
			oldOnload();
			newOnload();
		}	
	}else{
		window.onload = oldOnload;
	}
}

/**
	通用的函数监听函数
*/
function adEvent(obj,event,newEvent){
	var saved = obj["on" + event];
	if(typeof saved == "function"){
		obj["on" + event] = function{
			saved();
			newEvent();
		}
	}else{
		obj["on" + event] = newEvent;
	}
};