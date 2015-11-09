// Code based off of this fiddle: http://jsfiddle.net/macloo/x2t7x019/ 

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
	
	var stadiumArray = ["The Swamp", "The O'Dome", "The Mac"];
				for ( var i in stadiumArray ) {       
					if ( radioButtons[i].checked ) {
						var para = $(stadiumArray[i]);
						$("img").after(para);
					}
				}
			
	*/
}