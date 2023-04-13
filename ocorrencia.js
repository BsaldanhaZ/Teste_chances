function calcularChance(ocorrencias, possibilidades) {
    const chance = (ocorrencias / possibilidades) * 100;
    return chance.toFixed(2) + "%";
  }
  
  document.addEventListener("DOMContentLoaded", function() {

    const resultadoElement = document.getElementById('resultado');
    const button = document.querySelector("[name=submit]");

    button.onclick = function(){
      const ocorrencias = parseFloat(document.querySelector("#ocorrencias").value);
      const possibilidades = parseFloat(document.querySelector("#possibilidades").value);
      const chanceDeOcorrer = calcularChance(ocorrencias, possibilidades);
      resultadoElement.textContent = chanceDeOcorrer;

    };
  });
  