
window.addEventListener("scroll", function()
{
    if(window.innerHeight > window.scrollY) {
        document.getElementById("bgImg").style.filter = "blur("+(window.scrollY/window.innerHeight*35)+"px)";
    }
});