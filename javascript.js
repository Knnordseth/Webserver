
function generiskknapp(type,farge) {
    if (type=== "tekstfarge") {
        ElementId = "tekst"
        tekstellerbg = ""
    //   document.getElementById("tekst").setAttribute("style","color:" + farge); 
    } else if (type=== "bgfarge") {
        ElementId = "body"
        tekstellerbg = "background-"
    //    document.getElementById("body").setAttribute("style","background-color:" + farge); 
    }
    document.getElementById(ElementId).setAttribute("style",tekstellerbg + "color:" + farge); 

}
