import hideList from "./components/hideList";
import Dots from "./components/dots";
import popupFunc from "./components/popupFunc";

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

if (document.querySelector('*[data-popup]')) {
    document.querySelectorAll('*[data-popup]').forEach( elem => {
        if (document.querySelector(`.popup.${elem.dataset.popup}`)) {
            new popupFunc(elem, document.querySelector(`.popup.${elem.dataset.popup}`))
        }
    })
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
        let slidesPerView = 4;
        if (elem.classList.contains('three-slides-per-view')){
            slidesPerView = 3;
        }
        let block = elem.querySelector('.swiper-container');
        let swiper = new Swiper(block, {
            slidesPerView: slidesPerView,
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
if (document.querySelector('section.catalog')){
    document.querySelectorAll('section.catalog .catalog-buttons .btns-view button').forEach( elem => {
        elem.addEventListener('click', function () {
            document.querySelector('section.catalog .catalog-buttons .btns-view button.active').classList.remove('active');
            if (elem.classList.contains('list')){
                document.querySelector('section.catalog .product-grid').classList.add('row-grid')
            } else {
                document.querySelector('section.catalog .product-grid').classList.remove('row-grid')
            }
            elem.classList.add('active')
        })
    })
}
if (document.querySelector('section.filter .filter-list.price')){
    let from = $('section.filter .filter-list.price .range-slider').data('from'),
        to = $('section.filter .filter-list.price .range-slider').data('to'),
        fromInput = $('section.filter .filter-list.price .from input'),
        toInput = $('section.filter .filter-list.price .to input'),
        min = $('section.filter .filter-list.price .range-slider').data('min'),
        max = $('section.filter .filter-list.price .range-slider').data('max');
    function updateInputs(data){
        from = data.from;
        to = data.to;
        fromInput.prop('value', from);
        toInput.prop('value', to);
    }

    $('section.filter .filter-list.price .range-slider').ionRangeSlider({
        type: "double",
        skin: "round",
        from_shadow: true,
        to_shadow: true,
        hide_min_max: true,
        hide_from_to: true,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    let instance = $('section.filter .filter-list.price .range-slider').data("ionRangeSlider");

    fromInput.on('change', function () {
       let val = $(this).prop('value')

       if (val < min){
           val = min
       } else if (val > to){
           val = to;
       }

        instance.update({
            from: val
        });

        $(this).prop('value', val);
    });

    toInput.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop("value", val);
    });
}
if (document.querySelector('section.product-info .image-gallery')){
    let swiper = new Swiper('section.product-info .image-gallery .swiper-container', {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 20,
    });
    document.querySelectorAll('section.product-info .image-gallery .swiper-slide').forEach( elem => {
        elem.querySelector('a').addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('section.product-info .big-image img').src = elem.querySelector('img').src;
            document.querySelector('section.product-info .big-image a').href = elem.querySelector('a').href;
        })
    })
}
if (document.querySelector('section.product-tabs')){
    document.querySelectorAll("section.product-tabs .tab-links li").forEach( (elem, i) => {
        elem.addEventListener('click', function () {
            document.querySelector("section.product-tabs .tab-links .active").classList.remove('active');
            document.querySelector("section.product-tabs .tabs .tab.active").classList.remove('active');
            elem.classList.add('active');
            [...document.querySelectorAll("section.product-tabs .tabs .tab")][i].classList.add('active')
        })
    })
}
if (document.querySelector('section.cart-order')){
    document.querySelectorAll('section.cart-order .delivery .content .block').forEach( elem => {
        elem.querySelector('.radio input').addEventListener('input', function () {
            document.querySelectorAll('section.cart-order .delivery .content .block').forEach( block => {
                block.classList.remove('active');
                block.querySelector('.radio-fields').style.height = 0;
            });
            elem.classList.add('active');
            elem.querySelector('.radio-fields').style.height = `${elem.querySelector('.radio-fields').scrollHeight}px`
        })
    });
    document.querySelector('section.cart-order .up').addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}
if (document.querySelector('section.about-us')){
    new Dots({
        importElem: document.querySelector('section.about-us .dots-canvas'),
        class: 'top-block-dots',
        width: 204,
        height: 108,
    })
}
if (document.querySelector('section.main-catalog')){
    document.querySelectorAll('section.main-catalog .dots-canvas').forEach( elem => {
        new Dots({
            importElem: elem,
            class: 'top-block-dots',
            width: 430,
            height: 105,
        })
    });
}
if (document.querySelector('section.payment-methods')){
    document.querySelectorAll('section.payment-methods .dots-canvas').forEach( elem => {
        new Dots({
            importElem: elem,
            class: 'top-block-dots',
            width: 430,
            height: 105,
        })
    });
}
if (document.querySelector('section.service')){
    document.querySelectorAll('section.service .dots-canvas').forEach( elem => {
        new Dots({
            importElem: elem,
            class: 'top-block-dots',
            width: 430,
            height: 105,
        })
    });
}
if (document.querySelector('section.blog')){
    document.querySelectorAll('section.blog .dots-canvas').forEach( elem => {
        new Dots({
            importElem: elem,
            class: 'top-block-dots',
            width: 430,
            height: 105,
        })
    });
}
if (document.querySelector('section.contact-page')){
    document.querySelectorAll('section.contact-page .dots-canvas').forEach( elem => {
        new Dots({
            importElem: elem,
            class: 'top-block-dots',
            width: 430,
            height: 105,
        })
    });
}
if (document.querySelector('section.news-page')){
    document.querySelectorAll('section.news-page .dots-canvas').forEach( elem => {
        new Dots({
            importElem: elem,
            class: 'top-block-dots',
            width: 430,
            height: 105,
        })
    });
}