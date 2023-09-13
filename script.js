const mainForm = document.getElementById("main-form")

mainForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const textAreaInput = document.getElementById("text-area-input")


    const value = textAreaInput.value
    // alert('Dati inviati')


    const task = document.createElement("div")
    task.classList.add("single-task")
    task.innerHTML = `${value} <button id="deletebutton">ELIMINA</button>`
    const divInHtml = document.getElementById("lists-container")
    divInHtml.appendChild(task)

    task.addEventListener("click", (g) => {
        task.style.textDecoration = "line-through"
    })

    const deleteselector = document.getElementById("deletebutton")

    deleteselector.addEventListener("click", (u) => {
        const clickedButton = u.target
        clickedButton.parentElement.remove()
    })








})