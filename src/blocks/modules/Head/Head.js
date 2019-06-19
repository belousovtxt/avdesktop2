

let elBackLink = document.querySelector(".back")

if(elBackLink) {
    elBackLink.addEventListener('click', (e) =>{
        e.preventDefault()
        window.history.back()
        console.log("back")
    })
}

