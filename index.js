function ValentineDay(){


    var numeroAleatorio = Math.random ();
    numeroAleatorio = numeroAleatorio * 100;
    numeroAleatorio = Math.floor(numeroAleatorio) + 1;
    // exemplo de condicionais //

    if (numeroAleatorio >70){numeroAleatorio =  "you are a wonderful couple " + numeroAleatorio ;
    }
    else{(numeroAleatorio = "Maybe it works " + numeroAleatorio );
    }
    
    
    var resposta = document.getElementById("resposta");
    resposta.innerHTML = numeroAleatorio + " %";
    }
    
    