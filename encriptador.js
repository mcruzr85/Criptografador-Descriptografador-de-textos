const btn_crip = document.querySelector("#btn_criptografar");
  const btn_des = document.querySelector("#btn_descriptografar");
  const alerta = document.querySelector('#div_alerta');

  const resultado = document.querySelector('#lbl_resultado');


function criptografar(){    
  const texto = document.querySelector("#ta_texto").value; 
 
  if(validate(texto)){  
     alerta.classList.add('hidden');     
    resultado.innerHTML = cript(texto);       
    }else{
      alerta.classList.remove('hidden');     
      resultado.innerHTML = "";
    }
  }

function descriptografar(){  
  const texto = document.querySelector("#ta_texto").value;   
  if(validate(texto)){  
    p_alerta.innerHTML ="";
    resultado.innerHTML = descript(texto);       
    }else{
      alerta.innerHTML = "Não escrever letras maiúsculas, com acentos nem caracteres especiais";
    }
  }

function deleteSpaces(cadena){
  let res = cadena.split(/\s+/).join("");
  return res;
}

function validate(cadena){
  str = cadena.split(/\s+/).join("");
  for(let i = 0 ; i < str.length ; i++){
    if(str[i].charCodeAt() < 97 || str[i].charCodeAt() > 122) {
      return false;}
  }
  return true;
}


function descript(str){
  //str = str.split(/\s+/).join(" ");
  str = str.replaceAll('enter','e');
  str = str.replaceAll('imes','i');
  str = str.replaceAll('ai','a');
  str = str.replaceAll('ober','o');
  str = str.replaceAll('ufat','u');
  return str; 
}

function cript(str){
  //str = str.split(/\s+/).join(" ");
  str = str.replaceAll('e', 'enter');
  str = str.replaceAll('i', 'imes');
  str = str.replaceAll('a', 'ai');
  str = str.replaceAll('o', 'ober');
  str = str.replaceAll('u', 'ufat');
  return str; 
}

async function copiar(){  
  const strResultado = document.querySelector('#lbl_resultado').innerHTML;
  console.log('Writed content: ', strResultado);
  
  try{
     await navigator.clipboard.writeText(strResultado);
     console.log(' luego del try Writed content: ', strResultado);
     
  }catch(err){
     console.error('Failed to write on the clipboard: ', err);
  }
 
  /*.then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );*/
}