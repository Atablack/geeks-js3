// 1
const block = document.querySelector('.block')
const box = document.querySelector('.box')

let positionX = 0;
let positionY = 0;

const move = () => {
    
  if (positionY === 0 && positionX < 450) {
    positionX += 10;
    box.style.left = positionX + 'px'
    setTimeout(move, 50);
  } else if (positionX === 450 && positionY < 450) {
    positionY += 10;
    box.style.top = positionY + 'px';
    setTimeout(move, 50);
  } else if (positionX <= 450 && positionY <= 450) {
    positionX -= 10;
    box.style.left = positionX + 'px'
    positionY -= 10;
    box.style.top = positionY + 'px'
    setTimeout(move, 50);
  } 
};
move()


//2
let i = 0

const timer = () => {
    setInterval(() => {
        if (i <= 60) {
            console.log(i);
            i++
        } else {
            alert('your time is up')
        }
    }, 1000)
}
timer()