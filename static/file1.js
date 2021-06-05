var MenuItem = document.getElementById("MenuItem");
MenuItem.style.maxHeight = "0px";

function toggle_menu(){
	if(MenuItem.style.maxHeight == "0px"){
		MenuItem.style.maxHeight = "200px"
	}
	else{
		MenuItem.style.maxHeight = "0px"
	}

}


/*------------JsForImages--------*/

var ProductImg = document.getElementById("productImg");
var SmallImg = document.getElementsByClassName("small-img") ;

SmallImg[0].onclick = function(){
	ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
	ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
	ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
	ProductImg.src = SmallImg[3].src;
}


