  //creating player profile tabs
var playerlinks;
var playerpanels;
        
window.onload = function () {
 //grab li elements 
    playerlinks = Document.getElementById("tabs").getElementsByTagName("li");
                   
    playerpanels = Document.getElementById("profiles").getElementsByTagName("div");
            
//display first player panel 
            
    displaypanel(playerlinks[0]);
            
    for (var i = 0; i < playerlinks.length; i++) {
        playerlinks[i].onclick = function() {
            displaypanel(this);
            return false; 
                    
        }
    playerlinks[i].onfocus = function() {
        displaypanel(this);
        return false;
        }
    }
}
        
function displaypanel(TabToActivate) {
// go through all playerlinks
    for (var i = 0; i < playerlinks.length; i++) {
        if (playerlinks[i] == TabToActivate) {
             playerlinks[i].classList.add("active");
            // and display corresponding panel
            playerpanels[i].style.display = "block";
        } else {
            playerlinks[i].classList.remove("active");
            // and display corresponding panel
            playerpanels[i].style.display = "none";
        }
    }
}
        