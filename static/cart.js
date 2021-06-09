var removeCartItemButton = document.getElementsByClassName('rem_btn')
/*console.log(removeCartItemButton)*/
for (var i = 0; i< removeCartItemButton.length; i++){
	var button = removeCartItemButton[i]
	button.addEventListener('click', function(){
		var buttonClicked = event.target
		buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
	})
}