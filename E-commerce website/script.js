const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
let cart = [];

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productId = productElement.dataset.id;

        cart.push(productId);
        cartCount.textContent = cart.length;

        alert(`${productElement.querySelector('h3').textContent} added to cart!`);
    });
});

// Search functionality
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll('.product').forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});