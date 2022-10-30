const nota1 = 5;
const nota2 = 2;
const nota3 = 5;
const Media = (nota1 + nota2 + nota3 )/3;
if (Media < 5){
    console.log('Reprovado');
}
else if (Media >= 5 && Media <=7){
    console.log('Recuperação');
}else{
    console.log('Passou de semestre');
}
