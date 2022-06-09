function calcular() {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const resultado = document.getElementById("resultado");
  const operacion = document.getElementById("operacion");

  if (num1.value == "" || num2.value == "") {
    alert("Ingrese los valores");
  }

  if (operacion.value == "suma") {
    resultado.value = parseInt(num1.value) + parseInt(num2.value);
  } else if (operacion.value == "resta") {
    resultado.value = parseInt(num1.value) - parseInt(num2.value);
  } else if (operacion.value == "multiplicacion") {
    resultado.value = parseInt(num1.value) * parseInt(num2.value);
  } else if (operacion.value == "division") {
    resultado.value = parseInt(num1.value) / parseInt(num2.value);
  }
}
