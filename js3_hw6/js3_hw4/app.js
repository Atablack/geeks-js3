fetch('data.json')
 .then((response) => {
    return response.json()
 })
  .then((json) => {
    let html = ""
    json.forEach(row => {
        html += "<div class="+'block'+"><img src="+row.img+" class="+'card'+"><div class="+'price'+">"+row.price+"</div><div class="+'title'+">"+row.name+"</div></div>"
    });
                
    document.querySelector('.wrapper').innerHTML = html
  })
  .catch(() => {
    console.error('error')
  })