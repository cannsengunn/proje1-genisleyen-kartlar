let cards = document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener("click", () => {
        if (card.classList.contains("active")) {
            card.classList.remove("active")
        } else {
            removeClass();
            card.classList.add("active")
        }
    })
})

function removeClass() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}
