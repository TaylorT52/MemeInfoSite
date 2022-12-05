function populateTimeline(){
    var elements = document.getElementsByClassName("timeline-marker");
    var elemsdiv = document.getElementById("timeline-items"); 
    elemsdiv.style.transform = "translateX(5vw)"; 
    for(var i = 0; i < elements.length; i++){
        var x = (i+1) * -0.5; 
        var y = -3; 
        elements[i].style.transform = "translate(" + x +"vw, " + y + "vh)";
    }
    console.log(window.innerHeight); 
    console.log(elements.length); 
}