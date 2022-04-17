function ValentineDay(){


var numeroAleatorio = Math.random ();
numeroAleatorio = numeroAleatorio * 100;
numeroAleatorio = Math.floor(numeroAleatorio) + 1;
var resposta = document.getElementById("resposta");
resposta.innerHTML = "Your chances are : " + numeroAleatorio + "%.";
}
