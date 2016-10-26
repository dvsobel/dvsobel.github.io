//send a message to the console
// console.log("Is this page loading?");

// alert("this is a function!");

//boolean to toggle states
var pcontact_showing = true;

//add event listener to element, event is click, displayElement is the function that will
//be called when the user clicks on the element
document.getElementById("pcontact").addEventListener("click", display_second_element);


//function is being defined here- display element
function display_second_element(){

	//if else statement to determine behavior 
	//if the paragraph is showing, do something
	//else, do something else
	if(pcontact_showing == true){
		document.getElementById("pcontact_info").style.display="none";

		pcontact_showing = false;
	}
	else{
		document.getElementById("pcontact_info").style.display="inherit";
		

		pcontact_showing = true;

	}	

}

//fly in for design
  
  $(document).ready(function(){
                setTimeout(function() {
                    $('.fly-in-text').removeClass('hidden');
                }, 500);
                
            })();