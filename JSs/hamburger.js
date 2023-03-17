function hbopenclose() {
    x = document.getElementById("hbmenulist");
    if(window.getComputedStyle(x).display =="none")
    {
        document.getElementById("hbmenulist").style.display="block";
        document.getElementById("hbopener").style.marginLeft = "44vw";
        document.getElementById("hbopener").style.marginRight = "45vw";
        
    }
    else
    {
        document.getElementById("hbmenulist").style.display="none";
        document.getElementById("hbopener").style.marginLeft = "1vw";
        document.getElementById("hbopener").style.marginRight = "0px";
        
    }
}
console.log("hamburger.js loaded");


