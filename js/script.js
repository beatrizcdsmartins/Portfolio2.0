
// BOTÃO VEJA MAIS - PROJETOS
const ButtonSeeMore = document.getElementById('see-more')
const hideDiv = document.getElementById('hide-content')

ButtonSeeMore.addEventListener('click', () => {
    hideDiv.classList.toggle('show');
    if (hideDiv.classList.contains('show')) {
        ButtonSeeMore.innerHTML = 'Ver menos';
        ButtonSeeMore.style.backgroundColor = '#D62828';
    } else {
        ButtonSeeMore.innerHTML = 'Ver mais';
        ButtonSeeMore.style.backgroundColor = '#FCBF49';
    }
});


// MENU HAMBURGUER
document.addEventListener('DOMContentLoaded', function () {
    const hamburguer = document.querySelector('.hamburguer');
    const navMenu = document.querySelector('.nav-menu');

    hamburguer.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});


const lamp = document.querySelector('.lamp');
const containerLamp = document.querySelector('.cta');
const textLamps = document.querySelectorAll('.txt-cta');
const moon = document.querySelector('.switch');
const moonImage = document.getElementById('moonImage');


//LAMPADA - CTA
function toggleLamp() {
    containerLamp.classList.toggle('active');
    textLamps.forEach(textLamp => {
        textLamp.classList.toggle('active');
    });

    if (containerLamp.classList.contains('active')) {
        lamp.src = './assets/icons/dark-lamp.svg';
    } else {
        lamp.src = './assets/icons/light_lamp.svg'; 
    }
}
lamp.addEventListener('click', toggleLamp);

//DARK MODE
moon.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark-mode');
        toggleLamp();
        toggleMoonImage(); 
 
    });

// LUA - DARK/LIGHT MODE
function toggleMoonImage() {
    if (document.documentElement.classList.contains('dark-mode')) {
        moonImage.src = './assets/icons/light-moon.svg'; 
    } else {
        moonImage.src = './assets/icons/moon.svg'; 
    }
}


