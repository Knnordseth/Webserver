function button1Click(farge) {
    document.getElementById("tekst").setAttribute("style","color:" + farge); 
   
}
function generiskknapp(type,farge) {
    if (type=== "tekstfarge") {
        document.getElementById("tekst").setAttribute("style","color:" + farge); 
    } else if (type=== "bgfarge") {
        document.getElementById("body").setAttribute("style","background-color:" + farge); 
    }
}
