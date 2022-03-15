//falta terminar
let alimentos =[
    {nombre:"cucaracha",tipo:"insecto",niveldeEnergia:200},
    {nombre:"tomate",tipo:"vegetal",niveldeEnergia:100},
    {nombre:"vaca",tipo:"animal",niveldeEnergia:300},
    {nombre:"lechuga",tipo:"vegetal",niveldeEnergia:300},
    {nombre:"zanahoria",tipo:"vegetal",niveldeEnergia:300},
    {nombre:"mosca",tipo:"insecto",niveldeEnergia:150},
    {nombre:"lagarto",tipo:"animal",niveldeEnergia:300},
    {nombre:"banano",tipo:"vegetal",niveldeEnergia:400}
]
function recibirAlimentos(alimentos,callback){
    setTimeout(function(){        
        let alimentosFiltrados = alimentos.filter(function(alimento){
            return(alimento.tipo =='vegetal' && alimento.niveldeEnergia >=200)
        })
        //llamo al callback
        callback(alimentosFiltrados)
    },5000)
}
//LLAMADO A LA FUNCION PRINCIPAL
recibirAlimentos(alimentos,function(alimentosFiltrados){
    let sumaNiveles = alimentosFiltrados.map(alimento => alimento.niveldeEnergia).reduce((prev, curr) => prev + curr, 0)
    console.log(alimentosFiltrados)
    console.log("la suma de niveles de los vegetales de nivel mayor a 200 es: " + sumaNiveles)
})