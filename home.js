var counter = 0;
let timer = setInterval(titleAnim, 300);
let fullTitle = "ee the history of some of your favorite memes!";
var title = document.getElementById("title");

function titleAnim(){
    var currStr = title.innerHTML; 
    var add = fullTitle.charAt(counter); 
    if(counter > 0){
        title.innerHTML = title.innerHTML.split("|")[0] + add + "|"; 
    }else{
        title.innerHTML = currStr + add + "|"; 
    }
    counter += 1; 
    if(counter > currStr.length){
        clearInterval(timer); 
        title.innerHTML = title.innerHTML.split("|")[0]; 
    }
}
