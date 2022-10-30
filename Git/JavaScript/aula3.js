const peso =200;
const altura = 1.84;
const imc = peso / (altura**2);
console.log('imc', imc);
if (imc< 18.5){
    console.log('abaixo do peso');
}
else if(imc >= 18.5 && imc < 26){
    console.log('peso normal');
} else if (imc > 24 && imc < 31){
    console.log('acima do peso');

}else if (imc >=30 && imc <41){
    console.log ('obeso');

}else{
    console.log(' Obesidade grave');
}