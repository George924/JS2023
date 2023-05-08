
console.log(masters);

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(masters, searchTerm='');
function showMovies(results, searchTerm=''){
    if(searchTerm !==''){
        alert(searchTerm);
        results = results.filter(function (element) {
            // return element.title == searchTerm;
            return (element.title.toLowerCase().indexOf(searchTerm) > -1);
          });
    }
    results.forEach(element => {
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');
        const ln = document.createElement('p')

        text.innerHTML = `${element.title}`;
        console.log(`image source: ${element.imgSrc}`)
        image.src = element.imgSrc;
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
    }); 
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
     
    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(masters, searchTerm.toLowerCase());
        search.value = "";
    }
});
