function calcularChance(ocorrencias, possibilidades) {
    const chance = (ocorrencias / possibilidades) * 100;
    return chance.toFixed(2) + "%";
  }
  
  //const ocorrencias = parseInt(prompt("Com quantos resultados você ganha?"));;
  //const possibilidades = parseInt(prompt("Quantas possibilidades tem: Ex: vitória, derrota e empate:"));;
  
  const chanceDeOcorrer = calcularChance(ocorrencias, possibilidades);
  
  //alert(`A chance de vencer é ${chanceDeOcorrer}`);