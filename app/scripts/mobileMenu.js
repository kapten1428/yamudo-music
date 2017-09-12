export class mobileMenu {

    constructor(){
        this.getIcon = document.querySelector('.header__icon-menu');
        this.getMenuMobile = document.querySelector('.header');
        this.getMenuMobileList= document.querySelector('.header__nav-bar');
        this.getIcon.addEventListener('click',() => this.onClickMenu())
    }
    onClickMenu(){
        this.getIcon.classList.toggle('header__icon-menu--is-open')
        this.getMenuMobile.classList.toggle('header__menu-open');
        this.getMenuMobileList.classList.toggle('header__nav-bar--is-open');

    }


}