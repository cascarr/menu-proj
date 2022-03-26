/**
 * get only unique categories - HDest one
 * iterate over categories return buttons
 * make sure to select buttons when they are 
 * available
 * 
 */

const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
    }
];

const pElem = document.querySelector('.section-center');
const btns = document.querySelectorAll('.filter-btn');

/**
 * display by default onload
 */
 window.addEventListener('DOMContentLoaded', function() {

    dhesDisplay(menu);

});

/**
 * filter btns
 */
btns.forEach(function(btn) {

    btn.addEventListener('click', function(e) {

        const btnCategory = e.currentTarget.dataset.id;

        let menuClickArr = menu.map(function(menuGroup) {

            if (btnCategory === menuGroup.category) {

                //
                return `<article class="menu-item">
    
                    <img src=${menuGroup.img} class="photo" alt=${menuGroup.title} />
    
                    <div class="item-info">
    
                        <header>
                            <h4>${menuGroup.title}</h4>
                            <h4 class="price">$${menuGroup.price}</h4>
                        </header>
                        <p class="item-text">
                            ${menuGroup.desc}
                        </p>
    
                    </div>
    
                </article>
        `;
            }

        });

        menuClickArr = menuClickArr.join("");
        pElem.innerHTML = menuClickArr;

        if (btnCategory === 'all') {

            //console.log(e.currentTarget.dataset.id);
            dhesDisplay(menu);
        }

    });

});


function dhesDisplay(menuArr) {

    let newMenu = menuArr.map(function(dish) {
    
        return `<article class="menu-item">
    
                    <img src=${dish.img} class="photo" alt=${dish.title} />
    
                    <div class="item-info">
    
                        <header>
                            <h4>${dish.title}</h4>
                            <h4 class="price">$${dish.price}</h4>
                        </header>
                        <p class="item-text">
                            ${dish.desc}
                        </p>
    
                    </div>
    
                </article>
        `;
    
    });

    //console.log(newMenu);

    newMenu = newMenu.join("");

    pElem.innerHTML = newMenu;

}