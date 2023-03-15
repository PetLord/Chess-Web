function hbopenclose() {
    x = document.getElementById("hbmenulist");
    if(window.getComputedStyle(x).display =="none")
    {
        document.getElementById("hbmenulist").style.display="block";
        document.getElementById("hbopener").style.marginLeft = "40vw";
        document.getElementById("hbopener").style.marginRight = "45vw";
        
    }
    else
    {
        document.getElementById("hbmenulist").style.display="none";
        document.getElementById("hbopener").style.marginLeft = "1vw";
        document.getElementById("hbopener").style.marginRight = "0px";
        
    }
}

window.addEventListener("resize", playembedheight);

function playembedheight(){
    document.getElementById("playembed").style.marginTop = document.getElementById("hbopenerdiv").style.height;

    if( document.getElementById("playembed").style.marginTop == document.getElementById("hbopenerdiv").style.height)
    {   
    console.log("height changed");
    }
}