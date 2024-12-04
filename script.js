const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")



function mostrarform(){
    form.style.left = "40%" 
    form.style.trasnform = "translateX(-40%)"  
    mascara.style.visibility = "visible" 
}

function esconderform(){
    form.style.left = "-300px" 
    form.style.trasnform = "translateX(0%)"  
    mascara.style.visibility = "hidden" 
}