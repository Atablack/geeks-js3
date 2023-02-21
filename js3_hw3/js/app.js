const tabContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

let slideIndex = 0
let timeout
let slider = () => {    
    hideTabContent()  
    if (slideIndex == tabContent.length) {
        slideIndex = 0
    }     
    showTabContent(slideIndex) 
    slideIndex++;
    timeout = setTimeout(slider, 2000)
}

slider()

let stopTimeout = () => {
    clearTimeout(timeout)
}

tabsParent.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('tabheader__item')) {
        tabs.forEach((item, index) => {
            if ( target === item) {
                hideTabContent()
                showTabContent(index)
                stopTimeout()
                setTimeout(() => {
                    slider()
                }, 3000)
            }
        })
    }
}) 


const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

openModalBtn.addEventListener('click', openModal)

const scrollDown = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
    }
}

window.addEventListener('scroll', scrollDown)

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

closeModalBtn.addEventListener('click', closeModal)

const modalContent = document.querySelector('.modal__content')
const modalTitle = document.querySelector('.modal__title')
const modalInput = document.querySelectorAll('.modal__input')

const closeModal2 = (event) => {
    if (event.target !== modalContent && event.target !== modalTitle && event.target.tagName !== 'FORM' && event.target.tagName !== 'INPUT' && event.target.tagName !== 'BUTTON') {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }
}

modal.addEventListener('click', closeModal2)