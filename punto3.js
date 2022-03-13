//falta terminar
let alimentos =[
    {nombre:"cucaracha",tipo:"insecto",niveldeEnergia:200},
    {nombre:"tomate",tipo:"vegetal",niveldeEnergia:100},
    {nombre:"vaca",tipo:"animal",niveldeEnergia:300},
    {nombre:"lechuga",tipo:"vegetal",niveldeEnergia:300},
    {nombre:"zanahoria",tipo:"vegetal",niveldeEnergia:300},
    {nombre:"mosca",tipo:"insecto",niveldeEnergia:150},
    {nombre:"lagarto",tipo:"animal",niveldeEnergia:300}
]

function recibirAlimentos(alimentos,callback){
    setTimeout(function(){
        let alimento={}
        let alimentosFiltrados= alimento.filter(function(alimento){
            return(alimento.vegetal && alimento.niveldeEnergia >=200)
        })
        //llamo al callback
        callback(alimentosFiltrados)
    },1000)
}
//LLAMADO A LA FUNCION PRINCIPAL
recibirAlimentos(alimentos,function(alimentosFiltrados){
    sumaNiveles=alimentosFiltrados.niveldeEnergia
    console.log("la suma de niveles es: " + sumaNiveles)
})