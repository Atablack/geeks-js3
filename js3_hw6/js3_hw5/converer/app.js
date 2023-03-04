const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");

const convert = (e) => {
  e.addEventListener("input", () => {
    fetch("data.json")
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        if (e === som) {
          usd.value = (som.value / json.usd).toFixed(2)
          euro.value = (som.value / json.euro).toFixed(2)
        } else if (e === usd) {
          som.value = (usd.value * json.usd).toFixed(2)
          euro.value = ((usd.value * json.usd) / json.euro).toFixed(2)
        } else {
          usd.value = ((euro.value * json.euro) / json.usd).toFixed(2)
          som.value = (euro.value * json.euro).toFixed(2)
        }

        if (e.value === "") {
          usd.value = ""
          euro.value = ""
          som.value = ""
        }
      })
      .catch(() => {
        console.error('error')
      })
  })
}

convert(som);
convert(euro);
convert(usd);
