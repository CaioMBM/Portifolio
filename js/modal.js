// PROJETOS
var projetoTelaLogin = document.getElementById("imagemTelaLogin");
var projetoIMC       = document.getElementById("imagemIMC");
var projetoConversor = document.getElementById("imagemConversor");
var projetoRecriando = document.getElementById("imagemRecriando");

// TITULO DOS PROJETOS
var tituloTelaLogin = document.getElementById("tituloTelaLogin");
var tituloIMC       = document.getElementById("tituloIMC");
var tituloConversor = document.getElementById("tituloConversor");
var tituloRecriando = document.getElementById("tituloRecriando");

// Seleciona todos os elementos que possuem a classe 'modal-display'
var modals         = document.querySelectorAll(".modal-display");
var modalTelaLogin = modals[0];
var modalIMC       = modals[1];
var modalConversor = modals[2];
var modalRecriando = modals[3];

// Seleciona todos os elementos que possuem a classe 'icon-modal-fechar'
var fecharModal          = document.querySelectorAll(".icon-modal-fechar");
var fecharModalTelaLogin = fecharModal[0]; 
var fecharModalIMC       = fecharModal[1]; 
var fecharModalConversor = fecharModal[2]; 
var fecharModalRecriando = fecharModal[3]; 



// TELA DE LOGIN - Exibir modal
projetoTelaLogin.addEventListener("click", function(){
        // Projeto respectivo
        projetoTelaLogin.style.display = "none";
        tituloTelaLogin.style.display  = "none";
        modalTelaLogin.style.display   = "block";

        // Outros projetos
        projetoIMC.style.display = "none";
        tituloIMC.style.display  = "none";

        projetoConversor.style.display = "none";
        tituloConversor.style.display  = "none";

        projetoRecriando.style.display = "none";
        tituloRecriando.style.display  = "none";
});

// TELA DE LOGIN - Esconder modal
fecharModalTelaLogin.addEventListener("click", function(){
        // Projeto respectivo
        projetoTelaLogin.style.display = "block";
        tituloTelaLogin.style.display  = "block";
        modalTelaLogin.style.display   = "none";

        // Outros projetos
        projetoIMC.style.display = "block";
        tituloIMC.style.display  = "block";

        projetoConversor.style.display = "block";
        tituloConversor.style.display  = "block";

        projetoRecriando.style.display = "block";
        tituloRecriando.style.display  = "block";
});


// CÁLCULO IMC - Exibir modal
projetoIMC.addEventListener("click", function(){
        // Projeto respectivo
        projetoIMC.style.display = "none";
        tituloIMC.style.display  = "none";
        modalIMC.style.display   = "block";

        // Outros projetos
        projetoTelaLogin.style.display = "none";
        tituloTelaLogin.style.display  = "none";

        projetoConversor.style.display = "none";
        tituloConversor.style.display  = "none";

        projetoRecriando.style.display = "none";
        tituloRecriando.style.display  = "none";
});

// CÁLCULO IMC - Esconder modal
fecharModalIMC.addEventListener("click", function(){
        // Projeto respectivo
        projetoIMC.style.display = "block";
        tituloIMC.style.display  = "block";
        modalIMC.style.display   = "none";

        // Outros projetos
        projetoTelaLogin.style.display = "block";
        tituloTelaLogin.style.display  = "block";

        projetoConversor.style.display = "block";
        tituloConversor.style.display  = "block";

        projetoRecriando.style.display = "block";
        tituloRecriando.style.display  = "block";
});


// CONVERSOR DE MOEDAS - Exibir modal
projetoConversor.addEventListener("click", function(){
        // Projeto respectivo
        projetoConversor.style.display = "none";
        tituloConversor.style.display  = "none";
        modalConversor.style.display   = "block";

        // Outros projetos
        projetoTelaLogin.style.display = "none";
        tituloTelaLogin.style.display  = "none";

        projetoIMC.style.display = "none";
        tituloIMC.style.display  = "none";

        projetoRecriando.style.display = "none";
        tituloRecriando.style.display  = "none";
});

// CONVERSOR DE MOEDAS - Esconder modal
fecharModalConversor.addEventListener("click", function(){
        // Projeto respectivo
        projetoConversor.style.display = "block";
        tituloConversor.style.display  = "block";
        modalConversor.style.display   = "none";

        // Outros projetos
        projetoTelaLogin.style.display = "block";
        tituloTelaLogin.style.display  = "block";

        projetoIMC.style.display = "block";
        tituloIMC.style.display  = "block";

        projetoRecriando.style.display = "block";
        tituloRecriando.style.display  = "block";
});


// RECRIANDO SITE - Exibir modal
projetoRecriando.addEventListener("click", function(){
        // Projeto respectivo
        projetoRecriando.style.display = "none";
        tituloRecriando.style.display  = "none";
        modalRecriando.style.display   = "block";

        // Outros projetos
        projetoTelaLogin.style.display = "none";
        tituloTelaLogin.style.display  = "none";

        projetoConversor.style.display = "none";
        tituloConversor.style.display  = "none";

        projetoIMC.style.display = "none";
        tituloIMC.style.display  = "none";
});