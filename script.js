const sun = document.querySelector(".sun"),
  moon = document.querySelector(".moon")

//input
const userInput = document.querySelector("#textinput")
let newTodo = []

userInput.addEventListener("keyup", (e) => {
    let userInputTask = e.target.value
    if (e.key === "Enter") {
        createTodo(userInputTask)
    }
})

const createTodo = (e) => {
    let todoValue = e
    newTodo.push(e)
   
}
// const d = document.body

// d.addEventListener("DOMContentLoaded", () => {
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     document.body.classList.add("dark")
//   }
// })

sun.addEventListener("click", () => changeTheme("sun"))
moon.addEventListener("click", () => changeTheme("moon"))

const changeTheme = (svg) => {
  if (svg === "moon") {
    moon.classList.add("hidden")
    sun.classList.remove("hidden")
  } else if (svg === "sun") {
    moon.classList.remove("hidden")
    sun.classList.add("hidden")
  }
}

const li = document.querySelector("ul")
const todo = li.querySelector(".todo")
todo.addEventListener("click", () => {
  todo.classList.toggle("active")
})
