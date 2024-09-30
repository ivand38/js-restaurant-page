import rendang from './images/rendang.png';
import nasigoreng from './images/nasi goreng.png';
import sateayam from './images/sate ayam.png';
import nasiuduk from './images/nasi uduk.png';

export default function loadMenu() {
    const content = document.getElementById('content');
    content.appendChild(createMenu(
        rendang, 'Rendang', 'Rp 35.000', 'slow-cooked beef stew, simmered in a rich and aromatic mixture of coconut milk and a blend of spices.'
    ));
    content.appendChild(createMenu(
        nasigoreng, 'Nasi Goreng', 'Rp 25.000', 'made with day-old rice, it is stir-fried with a mixture of garlic, shallots, soy sauce, and chili, often accompanied by a variety of ingredients like eggs, chicken, shrimp, or vegetables.'
    ));
    content.appendChild(createMenu(
        sateayam, 'Sate Ayam', 'Rp 25.000', 'The chicken is typically seasoned with a blend of spices, including turmeric, garlic, and coriander, giving it a rich, savory flavor. Once grilled to perfection, Sate Ayam is traditionally served with a creamy peanut sauce, alongside rice cakes (lontong), and garnished with fresh cucumbers and onions'
    ));
    content.appendChild(createMenu(
        nasiuduk, 'Nasi Uduk', 'Rp 15.000', ' is a fragrant Indonesian rice dish cooked in coconut milk, giving it a rich, creamy flavor. Originating from Jakarta, it infused with aromatic spices like lemongrass, bay leaves, and pandan leaves, making it uniquely flavorful.'
    ));
}

function createMenu(image, name, price, desc) {
    const menuLayout = document.createElement('div');
    menuLayout.classList.add('menu-layout');

    const menuRight = document.createElement('div');
    menuRight.classList.add('menu-right');

    const img = document.createElement('img');
    img.classList.add('img-menu');
    img.src = image;
    img.alt = `${name.toLowerCase()}`;

    const menuName = document.createElement('h4');
    menuName.textContent = name;

    const menuPrice = document.createElement('p');
    menuPrice.textContent = price;

    const menuDescription = document.createElement('p');
    menuDescription.textContent = desc;

    menuLayout.appendChild(img);
    menuLayout.appendChild(menuRight);
    menuRight.appendChild(menuName);
    menuRight.appendChild(menuPrice);
    menuRight.appendChild(menuDescription);

    return menuLayout;
}
