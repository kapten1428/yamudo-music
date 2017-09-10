export class mobileMenu {


    constructor(){
       this.openClick = document.getElementsByClassName('header__hero-menu--mobile--is-open');
       this.closeClick = document.getElementsByClassName('header__hero-menu--mobile--is-close');
       this.openMenu = document.getElementsByClassName('nav-menu-mobile');
       this.getStart = document.getElementsByClassName('header__icon-start');

       this.openClick[0].addEventListener('click',() => this.onClickMenu());
       this.closeClick[0].addEventListener('click',() => this.onCloseMenu());
       this.getStart[0].addEventListener('click',() => this.moveMenu());
    }

    onClickMenu(){

        this.openClick[0].style.fontSize = '0';
        this.openClick[0].style.transition = 'font-size .4s';

        this.closeClick[0].style.fontSize = '1em';
        this.closeClick[0].style.display = "block";

        this.openMenu[0].style.transition = 'opacity 1s';
        this.openMenu[0].style.opacity = 1;

    }

    onCloseMenu(){
        this.openClick[0].style.display = "block";
        this.openClick[0].style.fontSize = '1em';

        this.closeClick[0].style.fontSize = 0;
        this.closeClick[0].style.transition = 'font-size .5s';
        this.openMenu[0].style.opacity = 0;
    }

    moveMenu(){

        this.getStart[0].setAttribute('class','header__icon-start header__icon-start--hidden');
        this.getStart[0].innerHTML = 'Go';


    }




}