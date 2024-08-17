document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h1').innerText;
            const productPrice = parseFloat(product.querySelector('.price').innerText.replace('$', ''));

            const cartItem = {
                name: productName,
                price: productPrice
            };

            cart.push(cartItem);
            displayCartItems();
        });
    });

    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const div = document.createElement('div');
            div.innerText = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(div);
            totalPrice += item.price;
        });

        const totalDiv = document.createElement('div');
        totalDiv.innerText = `Total Price: $${totalPrice.toFixed(2)}`;
        cartItemsContainer.appendChild(totalDiv);
    }
});
