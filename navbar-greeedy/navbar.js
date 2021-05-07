const items = [
    "BRAND",
    "Nulla",
    "Inventore",
    "Reprehenderit",
    "At",
    "Voluptates",
    "Ex",
    "Quibusdam",
    "Nostrum"
]

const TOTAL        = 9
const BTN_WIDTH    = 55
let eWidth         = 0
let dropOpen       = false

function adapt() {
    navbarDrop.innerHTML = ``
    dropOpen = false
    for( let n = TOTAL; n >= 1; n-- ) {
        estimateWidth(n)
        if(eWidth <= innerWidth) {
            showItems(n)
            break
        }
    }
}

function estimateWidth( n ){
    let text = ``
    let pad = 0
    for (let i = 0; i < n; i++) {
        text += items[i]
        pad += 2 * 10  //l+r padding
    }
    eWidth = 20.75 * text.length + pad + BTN_WIDTH //character width
}

function showItems( n ) {
    navbar.innerHTML = ``
    for (let i = 0; i < n && n <= items.length ; i++){
        navbar.innerHTML += `<li id="navbarLinks">
                                 <a href="">${items[i]}</a>
                             </li>`
    }

    let remaining = TOTAL - n
    if(remaining > 0 ) {
        navbar.innerHTML += `<button onclick="showRemanindItems(${remaining})">
                                 <span>${remaining}</span>
                                 <i class="fas fa-bars"></i>
                             </button>`
    }
}

function showRemanindItems( n ) {
    if(dropOpen) {
        navbarDrop.innerHTML = ``
        dropOpen = false
    } else {
        for (let i = TOTAL - n; i < TOTAL; i++) {
            navbarDrop.innerHTML += `<li id="navbarLinks">
                                         <a href="">${items[i]}</a>
                                     </li>`
        }
        dropOpen = true
    }
}