document.getElementById("seePic").onclick = change;

function change() {
    
    var url = "images/"
   
  
    var radioButtons = document.getElementsByName("stadium");
    

    for ( var i in radioButtons ) {       
        if ( radioButtons[i].checked ) {
            var checkedButton = radioButtons[i].value;
            break;
        }
    }


	var newSource = url + checkedButton + ".png";
	
	var image = document.getElementById("stadiumImage");
	image.setAttribute( "src", newSource );
	
/* TESTING	
	
	
	var decriptionPara = document.getElementsByClassName("description");
	
	descriptionPara.innerHTML = "<p> Swamp </p>";
	
	
	 var para = document.createElement("p");
		var swampPara = document.createTextNode("Swamp");
		var odomePara = document.createTextNode("O'Dome");
		
	para.appendChild(swampPara);
	body.insertBefore(para, img);
	
	*/
	 
	
}