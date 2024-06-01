import '../css/menu.css';

export default function menuLoader() {

    const content = document.getElementById('content');

    const menu = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    const menuItem2 = document.createElement('li');
    const menuItem3 = document.createElement('li');
    const menuItem4 = document.createElement('li');
    const menuItem5 = document.createElement('li');

    menuItem1.textContent = 'Pizza . . . . . . . . . . . . . . . . . . . . . . . . 20$';
    menuItem2.textContent = 'Pasta . . . . . . . . . . . . . . . . . . . . . . . 25$';
    menuItem3.textContent = 'Salad . . . . . . . . . . . . . . . . . . . . . . . 15$';
    menuItem4.textContent = 'Soup . . . . . . . . . . . . . . . . . . . . . . . 10$';
    menuItem5.textContent = 'Dessert . . . . . . . . . . . . . . . . . . . . . 20$';

    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);
    menu.appendChild(menuItem4);
    menu.appendChild(menuItem5);

    content.appendChild(menu);


}