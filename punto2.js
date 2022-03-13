//TERMINADO
//DECLARO FUNCION PRINCIPAL
function recibirPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,callback){
    setTimeout(function(){
        let planos=[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
        let planosFiltrados= planos.filter(function(plano){
            return(plano >=1 && plano<=10)
        })
        //llamo al callback
        callback(planosFiltrados)
    },1000)
}
//LLAMANDO LA FUNCION PRINCIPAL
recibirPlanos(10,5,100,150,200,250,300,400,500,1000,function(planosFiltrados){
    if(planosFiltrados.length>0){
        console.log("Puedes irte, hay "+planosFiltrados.length + " planos")
    }
    else{
        console.log("devuelvase, no hay planos validos")
    }
})