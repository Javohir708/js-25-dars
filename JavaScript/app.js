const wrapperEl = document.querySelector(".products__wrapper")
const BASE_URL = "https://dummyjson.com"

async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`)
    response 
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err))
}

window.addEventListener("load", ()=> {
    fetchData ("/products?limit=7")
})

function createCard (data) {
    data.products.forEach(product => {
        const divEl = document.createElement("div")
        divEl.className = "products__card"        
        
        divEl.innerHTML = `
            <img src="${product.thumbnail}" alt="product image">
            <h4>${product.title}</h4>
            <h5>${product.price}$</h5>
        `
        wrapperEl.appendChild(divEl)
    });
    
    
}