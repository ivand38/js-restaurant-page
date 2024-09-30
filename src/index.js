import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './styles.css';

function navSwitch() {
    const navbar = document.getElementById('nav-bar');
    const button = document.querySelectorAll('.button-nav');
    const content = document.getElementById('content');

    navbar.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            switch (event.target.textContent) {
                case 'Home':
                    content.replaceChildren();
                    button.forEach((button) => {
                        if (button !== this) {
                            button.classList.remove("active");
                        }
                    });
                    event.target.classList.add("active");
                    loadHome();
                    break;
                case 'Menu':
                    content.replaceChildren();
                    button.forEach((button) => {
                        if (button !== this) {
                            button.classList.remove("active");
                        }
                    });
                    event.target.classList.add("active");
                    loadMenu();
                    break;
                case 'Contact':
                    content.replaceChildren();
                    button.forEach((button) => {
                        if (button !== this) {
                            button.classList.remove("active");
                        }
                    });
                    event.target.classList.add("active");
                    loadContact();
                    break;
                default:
                    break;
            }
        }
    });
}

loadHome();
navSwitch();