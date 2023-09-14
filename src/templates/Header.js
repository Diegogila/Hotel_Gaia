const Header = (option=true) => {
    
    const view = `
    <span class="icon back-icon"></span>
    <img class="logo-icon" src="./assets/images/Logo-Button.svg" alt="">
    <div class="overlay-button">
        <span class="icon menu-icon"></span>
    </div>`;

    const viewBackOnly = `
    <span class="icon back-icon--dark"></span>
    `
    return option? view : viewBackOnly;
}

export default Header;