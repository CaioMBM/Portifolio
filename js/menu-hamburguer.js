var abrirMenu  = document.querySelector('.abrir-menu-hamburguer');
var fecharMenu = document.querySelector('.fechar-menu-hamburguer');
var itensMenu  = document.querySelector('ul');

// Abrir o menu hamburguer
abrirMenu.addEventListener("click", function(){
    abrirMenu.style.display  = "none";
    fecharMenu.style.display = "block";
    itensMenu.style.display  = "block";
});

// Fechar o menu hamburguer
fecharMenu.addEventListener("click", function(){
    abrirMenu.style.display  = "block";
    fecharMenu.style.display = "none";
    itensMenu.style.display  = "none";
});