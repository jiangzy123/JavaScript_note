window.onload = function(){
	window.onclick = function(){
		//var baidu = window.open("about_blank" , "Window1" , "height=200,width=200,left=100,top=100");
		var baidu = getById("baidu");
		alert(baidu.top);
		setInterval(function moveWindow(){
						var whichWindow = baidu;
						var startLeft = whichWindow.screenX;
						var startTop = whichWindow.screenY;
						if(whichWindow.screenY <= 1000){
							whichWindow.screenY = startLeft + 50;
						}
						if(whichWindow.screenX <= 500){
							whichWindow.screenY = startLeft + 50;
						}
						
						whichWindow.moveTo(whichWindow.screenY,whichWindow.screenX);
						},
						1000);
		//moveWindow(1366,768);
	};

}

/*function moveWindow(whichWindow,stopTop,stopLeft){
	var startLeft = whichWindow.screenX;
	var startTop = whichWindow.screenY;
	if(whichWindow.screenY <= stopTop){
		whichWindow.screenY = startLeft + 50;
	}
	if(whichWindow.screenX <= stopLeft){
		whichWindow.screenY = startLeft + 50;
	}
	
	whichWindow.moveTo(whichWindow.screenY,whichWindow.screenX);
}*/
//window.open(),有个返回值，返回object对象