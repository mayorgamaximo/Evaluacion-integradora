let result = document.getElementById("result"); // A) Obtiene el elemento input con id 'result'
function calculate(value) {
  if (value === "clear") {
    result.value = ""; // C) Limpia el valor del input
  } else if (value === "calculate") {
    try {
      result.value = eval(result.value); // D) Evalúa la expresión matemática
    } catch (error) {
      result.value = "Error"; // D) Maneja errores en la evaluación
    }
  } else if (value === "%") {
    try {
      result.value = eval(result.value + "/100"); // Divide el valor por 100 para calcular el
    } catch (error) {
      result.value = "Error";
    }
  } else if (value === "**2") {
    try {
      result.value = eval(result.value + "**2"); //eleva el numero a la 2
    } catch (error) {
      result.value = "Error";
    }
  } else if (value === "Math.sqrt()") {
    result.value = Math.sqrt(result.value); //hace la raiz cuadrada del numero ingresado y le da el valor para mostrar en el display
  } else if (value === "Math.sin(") {
    result.value = eval(Math.sin(result.value)); //hace el seno del numero ingresado y le da el valor para mostrar en el display
  } else if (value === "Math.cos(") {
    result.value = eval(Math.cos(result.value)); //hace el coseno del numero ingresado y le da el valor para mostrar en el display
  } else if (value === "Math.tan(") {
    result.value = eval(Math.tan(result.value)); //hace la tangente del numero ingresado y le da el valor para mostrar en el display
  } else if (value === "Math.log(") {
    result.value = eval(Math.log(result.value)); //hace el logaritmo del numero ingresado y le da el valor para mostrar en el display
  } else {
    result.value += value; // D) Añade el valor del botón al input
  }
}
