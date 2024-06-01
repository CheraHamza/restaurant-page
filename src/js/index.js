import '../css/main.css';
import background from '../resources/background.jpg';
import homeLoader from './home';
import menuLoader from './menu';
import contactLoader from './contact';
import aboutLoader from './about';


const home = document.getElementById('homebtn');
const menu = document.getElementById('menubtn');
const contact = document.getElementById('contactbtn');
const about = document.getElementById('aboutbtn');
const content = document.getElementById('content');

function loadPage(tab){
    content.innerHTML = '';
    switch(tab){
        case 'home':
            homeLoader();
            break;
        case 'menu':
            menuLoader();
            break;
        case 'contact':
            contactLoader();
            break;
        case 'about':
            aboutLoader();
            break;
    }    
}

home.addEventListener('click', () => loadPage('home'));
menu.addEventListener('click', () => loadPage('menu'));
contact.addEventListener('click', () => loadPage('contact'));
about.addEventListener('click', () => loadPage('about'));


homeLoader();