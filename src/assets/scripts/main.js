import 'lazysizes'
import UIkit from 'uikit'
import { App } from '../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()

    //SECTION 2
    
    if (window.innerWidth < app.lg) {
        UIkit.slider(`.s2__tab`)
    } else {
        UIkit.slider(`.s2__tab`, {
            center: true,
        })
    }
    UIkit.switcher(`.s2__slide-tab`, {
        connect: `.s2__slide-items`,
        cls: `switcher-active`,
        animation: 'uk-animation-fade'
    })
    
    document.querySelectorAll(`.s2__slide-btn`).forEach(el => {
        el.addEventListener(`click`, ev => {
            ev.preventDefault()
            const idx = app.getIndexOfElements(document.querySelector(`.s2__slide-tab .switcher-active`), document.querySelector(`.s2__slide-tab .switcher-active`).parentElement.children)
            UIkit.switcher(`.s2__slide-tab`).show(idx  + 1)
        })
    })
    document.querySelectorAll(`li.s2__slide-content`).forEach((el, idx) => {
        el.addEventListener(`beforeshow`, (event) => {
            const idx = app.getIndexOfElements(event.target, event.target.parentElement.children)
            UIkit.slider(`.s2__tab`).show(idx)
        })
    })
    // END SECTION 2


    //SECTION 3
    
    if (window.innerWidth < app.lg) {
        UIkit.drop('.s3__tab-drop', {
            mode: 'click'
        });
    }
    UIkit.switcher(`.s3__slide-tab`, {
        connect: `.s3__slide-items`,
        cls: `switcher-active`,
        animation: 'uk-animation-fade',
        active: document.querySelector(`.s3__widget[data-active-index]`)?.getAttribute('data-active-index') || 0
    })
    document.querySelectorAll(`li.s3__slide-content`).forEach((el, idx) => {
        el.addEventListener(`beforeshow`, (event) => {
            if (window.innerWidth < app.lg) {
                document.querySelector(`.s3__tab-dropbtn span`).innerText = document.querySelector(`.s3__tab-item.switcher-active`).innerText;
                UIkit.drop('.s3__tab-drop').hide(0);
            }
        })
    })
    //END SECTION 3

    //SECTION 4
    
    if (window.innerWidth < app.lg) {
        UIkit.slider(`.s4__tab`)
    }
    UIkit.switcher(`.s4__slide-tab`, {
        connect: `.s4__slide-items`,
        cls: `switcher-active`,
        animation: 'uk-animation-fade'
    })
    
    document.querySelectorAll(`.s4__slide-btn`).forEach(el => {
        el.addEventListener(`click`, ev => {
            ev.preventDefault()
            const idx = app.getIndexOfElements(document.querySelector(`.s4__slide-tab .switcher-active`), document.querySelector(`.s4__slide-tab .switcher-active`).parentElement.children)
            UIkit.switcher(`.s4__slide-tab`).show(idx  + 1)
        })
    })
    document.querySelectorAll(`li.s4__slide-content`).forEach((el, idx) => {
        el.addEventListener(`beforeshow`, (event) => {
            const idx = app.getIndexOfElements(event.target, event.target.parentElement.children)
            UIkit.slider(`.s4__tab`).show(idx)
        })
    })
    //END SECTION 4

    //SECTION 5
    
    if (window.innerWidth < app.lg) {
        UIkit.drop('.s5__tab-drop', {
            mode: 'click'
        });
    }
    UIkit.switcher(`.s5__slide-tab`, {
        connect: `.s5__slide-items`,
        cls: `switcher-active`,
        animation: 'uk-animation-fade'
    })
    document.querySelectorAll(`li.s5__slide-content`).forEach((el, idx) => {
        el.addEventListener(`beforeshow`, (event) => {
            if (window.innerWidth < app.lg) {
                document.querySelector(`.s5__tab-dropbtn .date`).innerText = document.querySelector(`.s5__tab-item.switcher-active .date`).innerText;
                document.querySelector(`.s5__tab-dropbtn .descr`).innerText = document.querySelector(`.s5__tab-item.switcher-active .descr`).innerText;
                UIkit.drop('.s5__tab-drop').hide(0);
            }
        })
    })
    //END SECTION 5

    // MAP SECTION
    UIkit.scrollspy(`.s9__map`)
    document.querySelector(`.s9__map`).addEventListener(`inview`, (event) => {
        document.querySelector(`.s9__map-script`).insertAdjacentHTML(`beforeend`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.667277934908!2d37.69852651613655!3d55.712155002593455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4d89a045823%3A0x1ecdfec22421b7e5!2zMy3QuSDQo9Cz0YDQtdGI0YHQutC40Lkg0L_RgC3QtCwgMTUsINCc0L7RgdC60LLQsCwgMTE1MDg4!5e0!3m2!1sru!2sru!4v1616064460854!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    })

    //VIDEO
    UIkit.scrollspy(`#video60`)
    document.querySelector(`#video60`).addEventListener(`inview`, (event) => {
        document.querySelector(`#video60 .popup__body`).insertAdjacentHTML(`beforeend`, `<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/0I7rYotTip4" frameborder="0" allowfullscreen="true" data-uk-video data-uk-responsive"></iframe>`)
    })
})
