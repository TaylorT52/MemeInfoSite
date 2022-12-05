function populateTimeline(){
    var elements = document.getElementsByClassName("timeline-marker");
    for(var i = 0; i < elements.length; i++){
        var x = (i+1) * -0.5; 
        var y = -3; 
        elements[i].style.transform = "translate(" + x +"vw, " + y + "vh)";
    }
}