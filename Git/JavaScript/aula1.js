
const gasolina = 5;
const etanol = 4.5;
const gastoMedioPorKM = 15;
const distanciaKM = 150;
const tipoCombustivel = 'Etanol';


if(tipoCombustivel === 'Etanol'){
    const resultado = distanciaKM/gastoMedioPorKM * etanol;
    console.log(resultado);
}
else{
    const res =distanciaKM/gastoMedioPorKM * gasolina;
    console.log(res);
}








