// variabila menu este definita in data.js

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
   
}
function displayMenuButtons() {
    const categories = menu.reduce{
        function (values, item) {
            if (!values.includes(item.category)){
                values.push(item.category);
            }
        },
        ['all']
    };
    const categoryBtns = categories.map(function(category, index) {
        let btn_nr = 'btn'+(index +1);
        const categoryRo ={
            all:'Tot',
            breakfast:'Mic Dejun',
            lunch:'pranz',
            dinner:'Cina',
            shakes:'Bauturi',
        }
        return `<button type='button' class='filtrer-btn' data-id=${category} data-nr=${btn_nr}>
        ${categoryRo[category]} </button>`;

    })
    .join('');
     tbnContainer.innerHTML = categoryBtns;
    
   
}