document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.getElementById("nav_bar");
    const close = document.getElementById("close");
    const menu = document.getElementById("menu");

    // Add a click event listener to the navBar element
    navBar.addEventListener("click", function () {
        // Hide navBar and show close
        navBar.classList.add("hidden");
        close.classList.remove("hidden");
        // Show the menu
        menu.style.display = "flex";
    });

    // Add a click event listener to the close element
    close.addEventListener("click", function () {
        // Hide close and show navBar
        navBar.classList.remove("hidden");
        close.classList.add("hidden");
        // Hide the menu
        menu.style.display = "none";
    });
});

// Function to hide the menu when screen size is greater than 600px
function hideMenuOnDesktop() {
    const menu = document.querySelector('.menu');
    const close = document.getElementById("close");
    const navBar = document.getElementById("nav_bar");

    // Check the screen width
    if (window.innerWidth > 600) {
        menu.style.display = 'none';
        close.classList.add("hidden")
        navBar.classList.remove("hidden");
    }
}

// Initial call to hideMenuOnDesktop to handle the initial screen size
hideMenuOnDesktop();

// Add an event listener to window resize event
window.addEventListener('resize', hideMenuOnDesktop);

document.addEventListener("DOMContentLoaded", function () {
    // Your existing JavaScript code

    // Add a click event listener to the cart button in the header
    const cartButton = document.querySelector(".cart-button");
    const cartButton2 = document.querySelector(".cart");
    const cartMenu = document.getElementById("cart-menu");
    const closeCart = document.getElementById("close-cart");

    cartButton.addEventListener("click", function () {
        // Show the cart menu
        cartMenu.style.display = "block";
    });

    cartButton2.addEventListener("click", function () {
        // Show the cart menu
        cartMenu.style.display = "block";
    });

    closeCart.addEventListener("click", function () {
        // Hide the cart menu when the close button is clicked
        cartMenu.style.display = "none";
    });
});


