let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
}

function proceedToCheckout() {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let totalAmount = 0;

    cart.forEach(({ item, price }) => {
        let li = document.createElement('li');
        li.innerText = `${item} - ₹${price}`;
        cartItems.appendChild(li);
        totalAmount += price;
    });

    document.getElementById('totalAmount').innerText = `Total: ₹${totalAmount}`;
    document.getElementById('checkout').scrollIntoView();
}

document.getElementById('checkoutForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Order placed successfully!');
});
