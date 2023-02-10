//1
const emailInput = document.querySelector('#emailInput')
const emailBtn = document.querySelector('#emailBtn')
const emailResult = document.querySelector('#emailResult')

const regExp = /@/

emailBtn.addEventListener('click', () => {
    if (regExp.test(emailInput.value)) {
        alert('great job')
    } else {
        alert('do it right')
    }
})

const passwordInput = document.querySelector('#passwordInput')
const passwordBtn = document.querySelector('#passwordBtn')
const passwordResult = document.querySelector('#passwordResult')

const regExp1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

passwordBtn.addEventListener('click', () => {
    if (regExp1.test(passwordInput.value)) {
        alert('great job')
    } else {
        alert('do it right')
    }
})


//2
let i = 0
const absoluteBox = document.querySelector('.absolute')
const move = () =>  {
    setTimeout(() => {
        absoluteBox.style.left = i + 'px'
        i += 10
        if (i < 551) {
            move()
        }
    }, 50)
    
}
move()