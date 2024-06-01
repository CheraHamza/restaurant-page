import '../css/contact.css'

export default function contactLoader() {

    const content = document.getElementById('content');
    const contact = document.createElement('div');
    const contactTitle = document.createElement('h1');
    const number = document.createElement('p');
    const email = document.createElement('p');

    contact.id = 'contact';

    contactTitle.textContent = 'Contact Us';
    number.textContent = 'Phone: 123-456-7890';
    email.textContent = 'Email: cherahamza1@gmail.com';

    contact.appendChild(contactTitle);
    contact.appendChild(number);
    contact.appendChild(email);

    content.appendChild(contact);
}