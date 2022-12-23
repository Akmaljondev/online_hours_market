let bigDiv = document.querySelector("div")
let allBasketDiv = document.querySelector("div")
let smallDiv = document.createElement("div")
let basketDiv = document.createElement("div")
smallDiv.classList.add("smallDiv")

let row = document.createElement("row")
row.classList.add("row")

let baskets = []
let newProductCount
let pCount

reRender(hours)

function reRender(newData){
    row.innerHTML = ""
    newData.map((item, index) => {
        let seeButton = document.createElement("button")
        seeButton.innerText = "Ko'rish"
        seeButton.setAttribute("class", "btn btn-primary")
        seeButton.setAttribute("data-bs-toggle", "modal")
        seeButton.setAttribute("data-bs-target", "#exampleModal")
        seeButton.setAttribute("onclick", `seeButton(${index})`)
        seeButton.style.borderRadius = "15px"
        seeButton.style.boxShadow = "0 0 10px blue"

        let buyButton = document.createElement("button")
        buyButton.innerText = "Sotib olish"
        buyButton.setAttribute("class", "btn btn-primary mt-2")
        buyButton.setAttribute("onclick", `buyButton(${index})`)
        buyButton.style.borderRadius = "15px"
        buyButton.style.boxShadow = "0 0 10px blue"

        let img = document.createElement("img")
        img.src = item.img_src
        img.style.borderRadius = "20px"
        img.style.height = "250px"
        img.style.boxShadow = "0 0 10px black"

        let name = document.createElement("p")
        name.innerText = item.name
        name.classList.add("titleName")

        let col = document.createElement("div")
        col.classList.add("col-4")

        let card = document.createElement("div")
        card.classList.add("card", "m-3", "p-3")

        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(seeButton)
        card.appendChild(buyButton)

        col.appendChild(card)
        row.appendChild(col)
        smallDiv.appendChild(row)
        bigDiv.appendChild(smallDiv)
    })
}

function searchText(keyWord){
    let newData = hours.filter(item =>{
        return item.name.toLowerCase().includes(keyWord.value.toLowerCase())
    })
    reRender(newData)
}

function searchCost(){
    let costStart = Number(document.querySelector(".costStart").value)
    let costEnd = Number(document.querySelector(".costEnd").value)

    let getHoursCosts = hours.filter((hour) =>{
        return (Number(hour.cost) >= costStart) && (Number(hour.cost) <= costEnd)
    })
    reRender(getHoursCosts)
}

function getHours(option){
    let getHoursCategory = hours.filter((hour)=>{
        return hour.category.includes(option)
    })
    reRender(getHoursCategory)
}

function seeButton(index){
let modalBady = document.querySelector(".modal-body")
    let foto = document.createElement("img")
    foto.src = hours[index].img_src 
    foto.style.width = "100%"
    foto.style.borderRadius = "20px"
    foto.style.boxShadow = "0 0 10px black"

    let title = document.createElement("p")
    title.innerText = "Nomi: " + hours[index].name 
    title.style.color = "blue"
    title.style.fontSize = "25px"
    title.style.fontWeight = "bolder"

    let categoriya = document.createElement("p")
    categoriya.innerText = "Kategoriyasi: " + hours[index].category 
    categoriya.style.color = "blue"
    categoriya.style.fontSize = "25px"
    categoriya.style.fontWeight = "bolder"

    let cost = document.createElement("p")
    cost.innerText = "Narxi:" + hours[index].cost + " $"
    cost.style.color = "blue"
    cost.style.fontSize = "25px"
    cost.style.fontWeight = "bolder"

    modalBady.innerHTML = ""

    modalBady.appendChild(foto)
    modalBady.appendChild(title)
    modalBady.appendChild(categoriya)
    modalBady.appendChild(cost)
} 

function products(){
    reRender(hours)
}

function buyButton(index){
    baskets.push({
        id:hours[index].id,
        newName:hours[index].name,
        newCost:hours[index].cost,
        newCount:hours[index].count,
        newCategory:hours[index].category,
        newImgSrc:hours[index].img_src,
    })
}

function basket(){
    row.innerHTML = ""
    if(baskets==""){
        let pbaskets = document.createElement("p")
        pbaskets.innerText = "Savatda hali hech narsa yoq"
        pbaskets.style.color = "blue" 
        pbaskets.style.textAlign = "center" 
        pbaskets.style.marginTop = "100px" 
        pbaskets.style.fontSize = "100px" 
        pbaskets.style.textShadow = "0 0 10px grey" 
        
        row.appendChild(pbaskets)
        basketDiv.appendChild(row)
        allBasketDiv.appendChild(basketDiv)
    }
    baskets.map((item, index) =>{
        let minusButton = document.createElement("button")
        minusButton.innerText = "-"
        minusButton.setAttribute("class", "btn btn-primary mt-3")
        minusButton.setAttribute("onclick", `minusButton(${index})`)
        minusButton.style.borderRadius = "15px"
        minusButton.style.width = "29%"
        minusButton.style.marginRight = "2%"
        minusButton.style.boxShadow = "0 0 10px blue"

        let pilusButton = document.createElement("button")
        pilusButton.innerText = "+"
        pilusButton.setAttribute("class", "btn btn-primary mt-3")
        pilusButton.setAttribute("onclick", `pilusButton(${index})`)
        pilusButton.style.borderRadius = "15px"
        pilusButton.style.width = "29%"
        pilusButton.style.marginRight = "2%"
        pilusButton.style.marginLeft = "2%"
        pilusButton.style.boxShadow = "0 0 10px blue"

        let deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        deleteButton.setAttribute("class", "btn btn-primary mt-3")
        deleteButton.setAttribute("onclick", `deleteButton(${index})`)
        deleteButton.style.borderRadius = "15px"
        deleteButton.style.width = "29%"
        deleteButton.style.marginLeft = "2%"
        deleteButton.style.boxShadow = "0 0 10px blue"

        let photo = document.createElement("img")
        photo.src = item.newImgSrc
        photo.style.borderRadius = "20px"
        photo.style.height = "250px"
        photo.style.width = "100%"
        photo.style.boxShadow = "0 0 10px black"

        let productName = document.createElement("p")
        productName.innerText = "Nomi: " + item.newName
        productName.style.color = "blue"
        productName.style.fontWeight = "bolder"
        productName.style.fontSize = "25px"
        productName.style.marginLeft = "50px"

        let productCost = document.createElement("p")
        productCost.innerText = "Narxi: " + item.newCost + "$"
        productCost.style.color = "blue"
        productCost.style.fontWeight = "bolder"
        productCost.style.fontSize = "25px"
        productCost.style.marginLeft = "50px"

        let allCost = document.createElement("p")
        allCost.innerText = "Umumiy summa: " + item.newCost + "$"
        allCost.style.color = "blue"
        allCost.style.fontWeight = "bolder"
        allCost.style.fontSize = "25px"
        allCost.style.marginLeft = "50px"

        let col = document.createElement("div")
        col.classList.add("col-12")

        let card = document.createElement("div")
        card.classList.add("card", "m-3", "p-3")

        let span = document.createElement("span")
        span.classList.add("spanButton")

        let imgSpan = document.createElement("span")
        imgSpan.classList.add("spanImg")

        let pDiv = document.createElement("div")
        pDiv.classList.add("pDiv")

        let newTable = document.createElement("table")
        let newTr = document.createElement("tr")
        let newTd1 = document.createElement("td")
        let newTd2 = document.createElement("td")

        pCount = document.createElement("b")
        pCount.innerText = "1"
        pCount.style.width = "3%"
        pCount.style.marginLeft = "1%"
        pCount.style.marginRight = "1%"
        pCount.style.marginTop = "5px"
        pCount.style.color = "blue"

        imgSpan.appendChild(photo)
        newTd1.appendChild(imgSpan)

        pDiv.appendChild(productName)
        pDiv.appendChild(productCost)
        pDiv.appendChild(allCost)
        newTd2.appendChild(pDiv)

        newTr.appendChild(newTd1)
        newTr.appendChild(newTd2)
        newTable.appendChild(newTr)
        
        span.appendChild(minusButton)
        span.appendChild(pCount)
        span.appendChild(pilusButton)
        span.appendChild(deleteButton)
        card.appendChild(newTable)
        card.appendChild(span)

        col.appendChild(card)
        row.appendChild(col)
        basketDiv.appendChild(row)
        allBasketDiv.appendChild(basketDiv)
    })
}

function deleteButton(index) { 
    baskets.splice(index, 1)
    basket(baskets)
}

function minusButton(){

}

function pilusButton(){
    
}