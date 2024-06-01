import '../css/about.css'

export default function aboutLoader() {

    const content = document.getElementById('content');
    const about = document.createElement('div');
    const aboutTitle = document.createElement('h1');
    const aboutText = document.createElement('p');

    about.id = 'about';

    aboutTitle.textContent = 'About Us';

    aboutText.textContent = 'Our restaurant is a place where you can enjoy the best food in town. We have a wide variety of dishes that will make you come back for more. Our chefs are the best in the business and they will make sure that you have the best dining experience possible. So come on down and enjoy a meal with us!';

    about.appendChild(aboutTitle);
    about.appendChild(aboutText);

    content.appendChild(about);
}