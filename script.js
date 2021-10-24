let header__content = document.querySelector('.header__content');

class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.element);
        this.top = obj.top;
        this.element.style.position = 'fixed';
        this.init = obj.init;
        this.element.style.top = this.scroll();


        window.addEventListener('scroll', () => this.scroll());
        window.addEventListener('resize', () => this.scroll());
    }

    scroll() {

        this.window = this.scrollNumber();

        if (this.window - pageYOffset > 0) {
            this.element.style.top = this.window - pageYOffset + 'px';
        } else {
            this.element.style.top = 0;
        }
    }

    scrollNumber() {
        if (this.init == 'px') {
            return this.top >= 0 ? this.top : 0;
        } else if (this.init == '%' || this.init == undefined) {
            return this.calc(window.innerHeight, this.top) - this.element.clientHeight;
        }
    }


    calc(height, top) {
        return height / 100 * top;
    }
}

const scroll = new Scroll({
    element: '.header__nav',
    top: 100,
    init: '%'
})

header__content.addEventListener('click', (e) => {
    randomPlace();
}) 

function randomPlace() {

    if(score > 0) {
        let num1 = widthHeight(50, 450),
            num2 = widthHeight(50, 450);
        place.style.cssText =  `
        top: ${num1}px;
        left: ${num2}px;
        `;
    } 
}

function widthHeight(max, min) {
    let num = Math.floor(Math.random() * (max + 1 - min) + min);
    return num;
}











