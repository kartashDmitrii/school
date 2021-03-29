import hideList from "./components/hideList";
import Dots from "./components/dots";

if (document.querySelector('[data-hide]')) {
    document.querySelectorAll('[data-hide]').forEach(list => {
        setTimeout(()=>{
            new hideList(list);
        }, 500)
    });
}
if (document.querySelector('[data-hide-auto]')) {
    document.querySelectorAll('[data-hide-auto]').forEach(list => {
        setTimeout(()=>{
            new hideList(list, true);
        }, 500)
    });
}
if (document.querySelector('section.top-catalog')){
    function closeMenu(e){
        console.log(e.target.closest('.catalog'));
        if (!e.target.closest('.catalog')){
            document.querySelectorAll('section.top-catalog .catalog .has-child.active').forEach( elem => {
                elem.classList.remove('active')
            });
            window.removeEventListener('click', closeMenu)
        }
    }
    document.querySelectorAll('section.top-catalog .catalog .has-child span').forEach( elem => {
        elem.addEventListener('click', function (e) {
            let activeClass;
            e.stopPropagation();
            elem.parentNode.classList.contains('active') ? activeClass = true : activeClass = false;
            elem.parentNode.closest('ul').querySelectorAll('.has-child').forEach( child => child.classList.remove('active'));
            if (activeClass) {
                this.classList.add('active');
            } else {
                window.addEventListener('click', closeMenu)
            }
            elem.parentNode.classList.toggle('active')
        })
    });
    new Dots({
        importElem: document.querySelector('section.top-catalog .dots-canvas'),
        class: 'top-block-dots',
        width: 204,
        height: 108,
    })
}
if (document.querySelector('section.product-slider')){
    document.querySelectorAll('section.product-slider').forEach( elem => {
        let block = elem.querySelector('.swiper-container');
        let swiper = new Swiper(block, {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: elem.querySelector('.pagination'),
                clickable: true
            },
            navigation: {
                nextEl: elem.querySelector('.arrow.next'),
                prevEl: elem.querySelector('.arrow.prev')
            }
        });
    })
}
if (document.querySelector('section.features')){
    new Dots({
        importElem: document.querySelector('section.features .dots-canvas'),
        class: 'top-block-dots',
        width: 430,
        height: 108,
    })
}
if (document.querySelector('section.about-company')){
    new Dots({
        importElem: document.querySelector('section.about-company .dots-canvas'),
        class: 'top-block-dots',
        width: 430,
        height: 108,
    })
}
if (document.querySelector('section.solutions')){
    new Dots({
        importElem: document.querySelector('section.solutions .dots-canvas'),
        class: 'top-block-dots',
        width: 430,
        height: 108,
    })
}
if (document.querySelector('section.contacts')){
    new Dots({
        importElem: document.querySelector('section.contacts .dots-canvas'),
        class: 'top-block-dots',
        width: 108,
        height: 76,
    })
}



