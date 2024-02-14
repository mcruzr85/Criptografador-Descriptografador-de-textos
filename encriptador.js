const btn_crip = document.querySelector("#btn_criptografar");
const btn_descrip = document.querySelector("#btn_descriptografar");

const p_alerta = document.querySelector("#p_alerta");
const lbl_resultado = document.querySelector("#lbl_resultado");

function criptografar() {
  const texto = document.querySelector("#ta_texto").value;
  console.log(texto);

  if (validate(texto)) {
    p_alerta.innerHTML ="";
    lbl_resultado.innerHTML = aplicarCifrado(texto);
  } else {
    p_alerta.innerHTML =
      "Não escrever letras maiúsculas, com acentos nem caracteres especiais";
  }
}

function deleteSpaces(cadena) {
  let res = cadena.split(/\s+/).join("");
  return res;
}

function validate(cadena) {
  str = cadena.split(/\s+/).join("");
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() < 97 || str[i].charCodeAt() > 122) {
      return false;
    }
  }
  return true;
}

function aplicarCifrado(str) {
  //str = str.split(/\s+/).join(" ");
  str = str.replaceAll("e", "enter");
  str = str.replaceAll("i", "imes");
  str = str.replaceAll("a", "ai");
  str = str.replaceAll("o", "ober");
  str = str.replaceAll("u", "ufat");
  return str;
}
