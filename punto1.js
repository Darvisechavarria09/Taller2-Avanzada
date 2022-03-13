//TERMINADO
//DECLARO FUNCION PRINCIPAL
function recibirAprendiz(nombre,planeta,edad,estatura,callback){
    setTimeout(function(){
        let aprendiz={nombre,planeta,edad,estatura}        
        //llamo al callback
        callback(aprendiz)
    },1000)
}
//LLAMANDO LA FUNCION PRINCIPAL
recibirAprendiz("Darvis","Tierra",17,1.75,function(aprendiz){
    if(aprendiz.edad < 15){
        console.log("Tu edad es menor a 15, debes practicar el manejo de la fuerza")
    }
    else{
        console.log("Tu edad es igual o superior a 15, debes practicar el manejo del sable de luz")
    }
})