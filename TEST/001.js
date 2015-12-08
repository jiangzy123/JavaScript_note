'use strict'
function doSomething () {
	var js = document.getElementById('test-js');
	js.innerHTML = 'JavaScript';
	js.style.color = '#ff0000';
	js.style.fontWeight = 'bold';
}

function sortArray () {
	var list = document.getElementById("test-list");
	var arrayList = [].slice.call(document.getElementsByClassName("lang"));
	arrayList.sort(function(x1,x2){
		if(x1.innerHTML < x2.innerHTML){
			return -1;
		}
		if(x1.innerHTML > x2.innerHTML){
			return 1;
		}
		return 0;
	});
	for (var i = 0 ; i < arrayList.length ; i ++){
		// var child = document.createElement("li");
		// child.id = "lang";
		// child.innerHTML = arrayList[i];
		list.appendChild(arrayList[i]);
	}
}

function sortArray2 (){
	var arr = [].slice.call(document.getElementsByClassName('lang'));
	arr.sort(function(e1, e2) {
    		return e1.innerHTML.localeCompare(e2.innerHTML);
	});
	for (var i = 0; i < arr.length; i++) {
	    document.getElementById('test-list').appendChild(arr[i]);
	}
}

function removeArray(){
	var list2 = document.getElementById("test-list2");
	var arr = [].slice.call(list2.children);
	var arr2 = [];
	for (var i = 0 ; i < arr.length ; i++) {
		if (arr[i].innerHTML != 'JavaScript' && arr[i].innerHTML != 'HTML' && arr[i].innerHTML != 'CSS') {

		}else{
			arr2.push(arr[i]);			
		}

	}
	list2.innerHTML = '';
	for (var i = 0; i < arr2.length; i++) {
		list2.appendChild(arr2[i]);
	};
}