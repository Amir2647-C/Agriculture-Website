document.addEventListener('DOMContentLoaded', () => {
    // Load cart items from local storage
    loadCart();

    // Add event listeners for Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Add event listener for Checkout button
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
});

// Function to handle adding a product to the cart
function addToCart(event) {
    const button = event.target;
    const productCard = button.closest('.card');
    const productTitle = productCard.querySelector('.card-title').textContent;
    const productPrice = productCard.querySelector('.text-muted').textContent;
    const productImage = productCard.querySelector('.card-img-top').src;

    const product = {
        title: productTitle,
        price: productPrice,
        image: productImage
    };

    // Retrieve cart from local storage or create new empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Add product to cart
    cart.push(product);
    // Save cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show confirmation message
    alert(`${productTitle} has been added to your cart!`);
}

// Function to load cart items from local storage
function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    // Retrieve cart from local storage or create new empty cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display each cart item
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'mb-3');
        cartItem.innerHTML = `
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${item.image}" class="card-img" alt="${item.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.price}</p>
                            <button class="btn btn-sm btn-outline-danger remove-from-cart">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Add event listener for Remove from Cart buttons
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });

    // Update cart total
    updateCartTotal();
}

// Function to remove item from cart
function removeFromCart(event) {
    const button = event.target;
    const cartItem = button.closest('.cart-item');
    const productTitle = cartItem.querySelector('.card-title').textContent;

    // Retrieve cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart'));
    // Filter out the item to be removed
    cart = cart.filter(item => item.title !== productTitle);
    // Save updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Remove cart item from display
    cartItem.remove();
    // Update cart total
    updateCartTotal();
}

// Function to update cart total
function updateCartTotal() {
    // Retrieve cart from local storage or create new empty cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    // Calculate total price
    cart.forEach(item => {
        total += parseFloat(item.price.replace('$', ''));
    });
    // Display total price
    document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
}

// Function to handle checkout process
function checkout() {
    // Confirm checkout with user
    if (confirm('Are you sure you want to proceed with the checkout?')) {
        // Clear cart in local storage
        localStorage.removeItem('cart');
        // Show thank you message
        alert('Thank you for your purchase!');
        // Refresh page
        window.location.reload();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkout-form');
    const successMessage = document.getElementById('success-message');

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission behavior

            // Process form data here (you can send it to a server using AJAX, for example)

            // Show success message
            successMessage.style.display = 'block';

            // Optionally, clear the form fields after submission
            this.reset();
        });
    }
});
$(document).ready(function(){
    // Add to cart button click event handler
    $('.add-to-cart').click(function(){
        var size = $(this).data('size'); // Get the size from the data attribute
        var productName = $(this).closest('.card').find('.card-title').text().trim(); // Get the product name
        var productPrice = $(this).closest('.card').find('.text-muted').text().trim(); // Get the product price

        // Add the product to the cart (You need to implement this part)
        addToCart(productName, productPrice, size);
    });

    // Add to cart button click event handler for the main product
    $('#add-to-cart-btn').click(function(){
        var size = $('#size').val(); // Get the selected size
        var productName = $('h2').text().trim(); // Get the product name
        var productPrice = $('.text-muted').text().trim(); // Get the product price

        // Add the product to the cart (You need to implement this part)
        addToCart(productName, productPrice, size);
    });

    // Function to add product to the cart
    function addToCart(productName, productPrice, size) {
        // You can add the product to the cart using AJAX request or other method
        // For demonstration, let's just log the selected product details to the console
        console.log("Product Name:", productName);
        console.log("Product Price:", productPrice);
        console.log("Size:", size);
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // You can perform form validation here
    console.log('Signup:', { username, email, password });
    // After successful signup, you can redirect the user to the homepage or any other page
    // For demo purposes, redirecting to index.html
    window.location.href = 'index.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form data
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // You can perform form validation here

    console.log('Login:', { email, password });
    // After successful login, you can redirect the user to the homepage or any other page
    window.location.href = 'index.html';
});
