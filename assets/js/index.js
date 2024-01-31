
window.addEventListener("scroll", function()
{
    const blurPx = 20;
    if(window.innerHeight > window.scrollY) {
        document.getElementById("bgImg").style.filter = "blur("+(window.scrollY/window.innerHeight*blurPx)+"px)";
    }
});