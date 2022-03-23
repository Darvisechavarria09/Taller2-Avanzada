let nombres=['cucaracha','tomate','araña','vaca','lechuga','zanahoria','mosca','lagarto','caballo']
let tipos=['insecto','vegetal','animal']

let alimentos=[]
for(let i=0; i < 50; i++)
{
    let alimento={}

    alimento.nombre=nombres[Math.floor(Math.random()*nombres.length)]
    if(alimento.nombre=='cucaracha' || alimento.nombre=='araña' || alimento.nombre=='mosca'){
        alimento.tipo='insecto'
    }
    else if(alimento.nombre=='vaca' || alimento.nombre=='lagarto' || alimento.nombre=='caballo'){
        alimento.tipo='animal'
    }
    else{
        alimento.tipo='vegetal'
    }

    alimento.niveldeEnergia=Math.floor(Math.random()*500)
    alimentos.push(alimento)
}


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
    console.log("la suma de niveles de energia de los vegetales, de nivel mayor a 200 es: " + sumaNiveles)
})