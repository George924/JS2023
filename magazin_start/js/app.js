const productsDOM = document.getElementById('products-container');
const fetchProducts = function(){
    productsDOM.innerHTML = '<div class="loading"></div>';
    try{
        const data = productsJsonList;
        return data;
    }
    catch(error){
        productsDOM.innerHTML = '<p class="error">there was an error</p>'
    }
};

const displayProducts = (list) => {
    const productsList = list
    .map((product)=>{
       const id = product.id;
       const company = product.fields.comapany;
       const title = product.fields.name;
       const price = product.fields.price;
       const img = product.fields.image[0].url;
       return    `<article class="product">
       <div class="product-container">
         <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1668084633/product-1_evgdfv.jpg" class="product-img img" alt="high-back bench">
        
         <div class="product-icons">
           <a href="product.html?id=rec43w3ipXvP28vog" class="product-icon">
             <i class="fas fa-search"></i>
           </a>
           <button class="product-cart-btn product-icon" data-id="rec43w3ipXvP28vog">
             <i class="fas fa-shopping-cart"></i>
           </button>
         </div>
       </div>
       <footer>
         <p class="product-name">high-back bench</p>
         <h4 class="product-price">$9.99</h4>
       </footer>
     </article>`;
       
       
    })
    .join('');
    productsDOM.innerHTML = productList;
};

const start = function(){
    console.log('start');
    const data
}

