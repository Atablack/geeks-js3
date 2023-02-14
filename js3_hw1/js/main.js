//1
const emailInput = document.querySelector('#emailInput')

const regExp = /@/

const passwordInput = document.querySelector('#passwordInput')
const passwordBtn = document.querySelector('#passwordBtn')

const regExp1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

passwordBtn.addEventListener('click', () => {
    if (regExp1.test(passwordInput.value) && regExp.test(emailInput.value)) {
        alert('great job')
    } else {
        alert('your email address or password is incorrect')
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
