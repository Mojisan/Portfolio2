window.onload = pageLoad;

function pageLoad(){
	const xhr = new XMLHttpRequest();
    xhr.open("GET", "cloth.json")
    xhr.onload = function() {
        const jsData = JSON.parse(xhr.responseText)
        showData(jsData)
    }
    xhr.onerror = function() {alert("ERROR!")}
    xhr.send()
}

function showData(data){
    console.log(Object.keys(data).length)
	const showDiv = document.querySelectorAll('#layer div')
    const key = Object.keys(data)

    for (let i = 0; i <= showDiv.length; i++) {
        const img = document.createElement('img')
        img.src = 'pic/' + data[key[i]].pic
        img.alt = 'pic'

        const brandName = document.createElement('p')
        brandName.innerHTML = data[key[i]].brandname
        
        const price = document.createElement('p')
        price.innerHTML = data[key[i]].price

        showDiv[i].appendChild(img)
        showDiv[i].appendChild(brandName)
        showDiv[i].appendChild(price)
    }

}

