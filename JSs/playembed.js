function playembedheight(){
    document.getElementById("playembed").style.marginTop = document.getElementById("hbopenerdiv").style.height;

    if( document.getElementById("playembed").style.marginTop == document.getElementById("hbopenerdiv").style.height)
    {   
    console.log("height changed");
    }
}window.addEventListener("resize", playembedheight);