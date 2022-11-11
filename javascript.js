
function generiskknapp(type,farge) {
    if (type=== "tekstfarge") {
        document.getElementById("tekst").setAttribute("style","color:" + farge); 
    } else if (type=== "bgfarge") {
        document.getElementById("body").setAttribute("style","background-color:" + farge); 
    }
}
