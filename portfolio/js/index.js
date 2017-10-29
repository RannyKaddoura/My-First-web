// Start BurgerMenu script
var burgerButton = document.getElementById('burger-button');
var burgerNav = document.getElementById('burger-nav');
// switching between the block and hidden block for the burger mnenu
var burgerShowHide = function (event) {
    if (burgerNav.style.display == 'block') {
        burgerNav.style.display = 'none';
    } else {
        burgerNav.style.display = 'block';
    }
};
burgerButton.addEventListener('click', burgerShowHide);
// End BurgerMenu script
