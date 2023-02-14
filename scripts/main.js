const animal_buttons = document.getElementsByName("animal-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

function change_animal(animal) {
  text.innerHTML = "Here's the picture you wanted of a " + animal + "."
  photo.src = "../images/" + animal + ".jpg"
}

animal_buttons.forEach(button => {
  button.addEventListener("change", event => {
    alert("you have clicked a button. congrats")
    change_animal(button.value)
  })
})