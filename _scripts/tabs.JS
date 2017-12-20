  //creating player profile tabs
Function tabs(){
    var i, playerlinks, playerpanels;
    
    playerpanels = document.getElementsByClassName("player-profile");
    for (i = 0; i < playerpanels.length; i++) {
        playerpanels[1].style.display = "none";
    }
}