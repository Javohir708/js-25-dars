const productImage = document.querySelector(".product__image")
const productTitle = document.querySelector(".product__title")
const productDescription = document.querySelector(".product__description")
const productPrice = document.querySelector(".product__price")

const BASE_URL = "https://dummyjson.com"

function fetchProduct() {
    const params = new URLSearchParams(window.location.search)
    const productId = params.get("id")

    fetch(`${BASE_URL}/products/${productId}`)
        .then(response => response.json())
        .then(data => {
            createDetailPage(data);
        })
        .catch(error => {
            console.error(error);
        });
}

window.onload = ()=> {
    fetchProduct()
}

function createDetailPage(product) {
    productImage.src = product.thumbnail
    productTitle.textContent = product.title
    productDescription.textContent = product.description
    productPrice.textContent = `${product.price}$`
}
