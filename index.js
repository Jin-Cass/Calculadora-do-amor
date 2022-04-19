function ValentineDay(){


    var numeroAleatorio = Math.random ();
    numeroAleatorio = numeroAleatorio * 100;
    numeroAleatorio = Math.floor(numeroAleatorio) + 1;
    // exemplo de condicionais //

    if (numeroAleatorio >70){numeroAleatorio =  "you are a wonderful couple " + numeroAleatorio ;
    }
    if(numeroAleatorio > 30 && numeroAleatorio <=70){numeroAleatorio = "Maybe it works " + numeroAleatorio ;
    }
if(numeroAleatorio <=30){numeroAleatorio = "water and oil " + numeroAleatorio ;
    }
    
    
    var resposta = document.getElementById("resposta");
    resposta.innerHTML = numeroAleatorio + " %";
    }
    
    