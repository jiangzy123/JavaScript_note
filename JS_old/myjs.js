window.onload = function(){
	initForm();
	validate_isRight();
}

function initForm(form){
	var element = getById("form").elements;
	for(i = 0 ; i < element.length ; i++){
		initField(element[i]);
	}
}

function validate_isRight(field){
	var element = getByTagName("input");
	//alert(element.length);
	for(i =0 ; i < element.length ; i++){
		if(element[i].name == "email"){
			element[i].onblur = function(){
				alert(this.value);
				if(isEmpty(this.value)){
					getById("notice").innerHTML = this.name + " is empty ,please input";
					this.value = this.defaultValue;
				}else{
					if(isEmail(this.value)){
						
					}else{
						getById("notice").innerHTML = this.name + " your email has the wrong format";
						this.value = this.defaultValue;
					}
				}
			}
		}else{
			element[i].onblur = function(){
				if(isEmpty(this.value)){
					getById("notice").innerHTML = this.name + " is empty,please input";
					this.value = this.defaultValue;
				}
			}
		}
	}
}