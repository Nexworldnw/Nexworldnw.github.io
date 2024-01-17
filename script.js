
        document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products");

    // Example product data
    const products = [
        { id: 1, name: "Product 1", price: 19.99 },
        { id: 2, name: "Product 2", price: 29.99 },
        { id: 3, name: "Product 3", price: 39.99 },
    ];

    // Render products
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
});

function addToCart(productId) {
    // Implement logic to add product to cart
    alert(`Product with ID ${productId} added to cart`);
}
function changeBackgroundColor() {
            const body = document.body;
            const randomColor = getRandomColor();
            body.style.backgroundColor = randomColor;
        }

        function getRandomColor()
        {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
            
        }

