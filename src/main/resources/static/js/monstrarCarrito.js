
const cart = document.getElementById('cart');
const cartContainer = document.getElementById('cartContainer');

// Mostrar el carrito al hacer clic en el ícono del carrito
cart.addEventListener('click', () => {
    cartContainer.style.display = 'block';
});

// Ocultar el carrito al hacer clic fuera del contenedor del carrito
document.addEventListener('click', (event) => {
    if (!cart.contains(event.target) && !cartContainer.contains(event.target)) {
        cartContainer.style.display = 'none';
    }
});

function getCookieMonstrar(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split('=');
        if (name == cookiePair[0].trim()) {
            return JSON.parse(cookiePair[1]);
        }
    }
    return [];
}
const cartItemCountMonstar = document.getElementById('cartItemCount');

const cartItemsListMonstar = document.getElementById('cartItems');
const cartTotalMonstar = document.getElementById('cartTotal');




function updateCartViewMostrar() {
    // Limpiar la vista del carrito
    const userLogCookie = getCookieMonstrar('user-log');
    if (userLogCookie.length !== 0) {

        let cartItems = getCookieMonstrar('cartItems');
        if (cartItems[userLogCookie]){
            let cartItemMostrar = cartItems[userLogCookie];
            let itemCountMostrar = cartItemMostrar.length;
            cartItemsListMonstar.innerHTML = '';

            // Recorrer todos los elementos del carrito
            let total = 0;
            cartItemMostrar.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.name + ' - $' + item.price.toFixed(2);
                cartItemsListMonstar.appendChild(listItem);
                total += item.price;
            });

            // Actualizar el total
            cartTotalMonstar.textContent = 'Total: $' + total.toFixed(2);
            cartItemCountMonstar.textContent = itemCountMostrar;
        }

    }
}


function clearCart() {

    console.log("hola bebebebe")
    const userLogCookie = getCookieMonstrar('user-log');

    console.log("esto es borrar");
    if (userLogCookie.length !== 0) {
        let cartItems = getCookieMonstrar('cartItems');
        delete cartItems[userLogCookie];
        setCookie('cartItems', cartItems, 7);

        window.location.reload();


        updateCartViewMostrar();
   }



}



document.addEventListener('DOMContentLoaded', () => {

    const btnLimpiar = document.querySelector('#btnLimpiar');

    btnLimpiar.addEventListener('click', clearCart);
    updateCartViewMostrar();

});

/*btnLimpiar.addEventListener('click', clearCart);*/



