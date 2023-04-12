function escreverTexto(frase){
    document.write(frase);
}

function pularLinha(){
    document.write("<br><br>")
}

    let numeroSorteado = Math.round(Math.random() * 10);
    console.log(numeroSorteado);

for(i=1;i<=3;i++){

    let chute = parseInt(prompt("digite um número:"));

    if(chute == numeroSorteado){
        escreverTexto("Parabéns");
        break;
    }
    if(chute != numeroSorteado){
        escreverTexto("tente novamente");
        pularLinha();
    }
    
}