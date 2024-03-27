const campoPeso = document.getElementById("peso");
const campoAltura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const btn = document.querySelector("button");

function calcularIMC(e) {
  e.preventDefault();
  const peso = campoPeso.value;
  const altura = campoAltura.value;
  const imc = (peso / altura ** 2).toFixed(1);
  let criterio;
  if (imc >= 30) {
    criterio = "obesidade";
    resultado.classList.add("bad");
    resultado.classList.remove("alert");
    resultado.classList.remove("good");
  } else if (imc >= 25) {
    criterio = "sobrepeso";
    resultado.classList.add("alert");
    resultado.classList.remove("bad");
    resultado.classList.remove("good");
  } else if (imc >= 18.5) {
    criterio = "normal";
    resultado.classList.add("good");
    resultado.classList.remove("bad");
    resultado.classList.remove("alert");
  } else {
    criterio = "desnutrido";
    resultado.classList.add("bad");
    resultado.classList.remove("alert");
    resultado.classList.remove("good");
  }
  resultado.innerText = `IMC: ${imc}    Grau: ${criterio}`;
}
btn.addEventListener("click", calcularIMC);

/*
obesidade  IMC >=30
sobrepeso IMC >=25  e <30
normal IMC >= 18,5 e <25
desnutrido IMC < 18,5

*/
