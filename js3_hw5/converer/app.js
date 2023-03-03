const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')


const convert = (e) => {
    e.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open('GET', 'data.json')
        request.setRequestHeader('Content-Type', 'application/json')
        request.send()
        request.addEventListener('load', () => {
            const data = JSON.parse(request.response)
            console.log(data);
            
            if (e === som) {
              usd.value = (som.value / data.usd).toFixed(2)
              euro.value = (som.value / data.euro).toFixed(2)
            } else if (e === usd) {
              som.value = (usd.value * data.usd).toFixed(2)
              euro.value = (usd.value * data.usd / data.euro).toFixed(2)
            } else {
              usd.value = (euro.value * data.euro / data.usd).toFixed(2)
              som.value = (euro.value * data.euro).toFixed(2)
            }

            if (e.value === '') {
              usd.value = ''
              euro.value = ''
              som.value = ''
            }
            })
        })
}

convert(som)    
convert(euro)   
convert(usd)    