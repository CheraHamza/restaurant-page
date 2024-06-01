import '../css/home.css';

export default function homeLoader() {

    const content = document.getElementById('content');
    const description = document.createElement('div');
    const headline = document.createElement('h1');
    const text = document.createElement('p');

    description.id = 'description';
    headline.textContent = 'Welcome to our restaurant';
    text.textContent = 'We serve the best food in town.';

    description.appendChild(headline);
    description.appendChild(text);
    content.appendChild(description);
}