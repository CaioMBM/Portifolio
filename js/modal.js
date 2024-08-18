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


// Exibir modal TELA DE LOGIN
projetoTelaLogin.addEventListener("click", function(){
        // Projeto respectivo
        projetoTelaLogin.style.display = "none";
        tituloTelaLogin.style.display = "none";
        modalTelaLogin.style.display = "block";

        // Outros projetos
        projetoIMC.style.display = "none";
        tituloIMC.style.display = "none";

        projetoConversor.style.display = "none";
        tituloConversor.style.display = "none";

        projetoRecriando.style.display = "none";
        tituloRecriando.style.display = "none";
});