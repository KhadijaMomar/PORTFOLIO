let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');




window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top <= offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let logo = document.getElementById('logo');
let loginElement = document.getElementById('login');
let ville = document.getElementById('ville');
const portfolioLink = document.getElementById('portfolio-link');

fetch('https://api.github.com/users/KhadijaMomar')
    .then(response => {
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
        return response.json(); // Convertit la réponse en JSON
    })
    .then(data => {

        const portfolioUrl = data.html_url;

        portfolioLink.href = portfolioUrl;

        const login = data.login;
        loginElement.textContent = `Login: ${login}`;

        logo.src = data.avatar_url;

    })
    .catch(error => {
        console.error('Erreur lors de la récupération de l\'URL:', error);

        // Optionnel : Mettez un lien de secours en cas d'erreur
        portfolioLink.href = "https://lien-de-secours.com";
    });