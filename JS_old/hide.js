
function ready(){
	//var count = 0;
	var elements = getByClassName("change");
	for(var i = 0 ; i <= elements.length ; i++){
		elements[i].onclick = function(){
			this.style.color = "red";
		};
	}
}
function re(){
	for(var i = 0 ; i <= getByClassName("change").length ; i++){
		getByClassName("change")[i].style.color = "blue";	
	}
}

function getByClassName(str){
	return document.getElementsByClassName(str)
}
