import 'lazysizes'
import UIkit from 'uikit'
import { App } from '../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()
    //SECTION 2
    
    if (window.innerWidth < app.lg) {
        UIkit.slider(`.s2__tab`)
    }
    let tabReorder = () => {
        const set = document.querySelectorAll(`.s2__tab .s2__tab-item`)
        const length = set.length
        const center = Math.floor(length / 2)
        const currentActiveIndex = app.getIndexOfElements(document.querySelector(`.s2__tab .s2__tab-item.switcher-active`), set)
        let startIndex = length - (currentActiveIndex - center)
        if (startIndex >= length) {
            startIndex = startIndex - length
        }
        set.forEach(function (e, idx) {
            let i = idx + startIndex
            if (i >= length) {
                i -= length
            }
            e.classList.remove('center')
            e.style.order = i
            switch (i) {
                case 0:
                case 6:
                    e.style.fontSize = '20px'
                    e.style.opacity = '0.3'
                    break;
                case 1:
                case 5:
                    e.style.fontSize = '22px'
                    e.style.opacity = '0.5'
                    break;
                case 2:
                case 4:
                    e.style.fontSize = '24px'
                    e.style.opacity = '1'
                    break;
                default:
                    e.style.fontSize = '26px'
                    e.style.opacity = '1'
                    e.classList.add('center')
                    break;
            }
        })
    }
    UIkit.switcher(`.s2__slide-tab`, {
        connect: `.s2__slide-items`,
        cls: `switcher-active`,
        animation: 'uk-animation-fade',
        swiping: false
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
            if (window.innerWidth < app.lg) {
                UIkit.slider(`.s2__tab`).show(idx)
            } else {
                tabReorder()
            }
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
        animation: 'uk-animation-fade',
        swiping: false
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


    //SECTION 11
    
    if (window.innerWidth < app.lg) {
        UIkit.slider(`.s11__tab`)
    }
    UIkit.switcher(`.s11__slide-tab`, {
        connect: `.s11__slide-items`,
        cls: `switcher-active`,
        animation: 'uk-animation-fade',
        swiping: false
    })
    
    document.querySelectorAll(`li.s11__slide-content`).forEach((el, idx) => {
        el.addEventListener(`beforeshow`, (event) => {
            const idx = app.getIndexOfElements(el, el.parentElement.children)
            UIkit.slider(`.s11__tab`).show(idx)
        })
    })
    //END SECTION 11


    // MAP SECTION
    UIkit.scrollspy(`.s9__map`)
    document.querySelector(`.s9__map`).addEventListener(`inview`, (event) => {
        document.querySelector(`.s9__map-script`).insertAdjacentHTML(`beforeend`, `<iframe src="${document.querySelector(`.s9__map`).getAttribute('data-src')}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    })

    //VIDEO
    UIkit.scrollspy(`#video60`)
    document.querySelector(`#video60`).addEventListener(`inview`, (event) => {
        document.querySelector(`#video60 .popup__body`).insertAdjacentHTML(`beforeend`, `<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/${document.querySelector(`#video60`).getAttribute('data-youtube-id')}" frameborder="0" allowfullscreen="true" data-uk-video data-uk-responsive"></iframe>`)
    })
})
