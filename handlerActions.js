document.getElementById('button-tallas').addEventListener("click", () => {
    document.getElementById('popup1').classList.add("active")
})

document.getElementById('button-close').addEventListener("click", () => {
    document.getElementById('popup1').classList.remove("active")
})