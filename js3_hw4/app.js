const loadProducts = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        console.log(data);
        let html = ""
        data.forEach(row => {
            html += "<div class="+'block'+"><img src="+row.img+" class="+'card'+"><div class="+'price'+">"+row.price+"</div><div class="+'title'+">"+row.name+"</div></div>"
        });
        
        document.querySelector('.wrapper').innerHTML = html
     })
}
loadProducts()