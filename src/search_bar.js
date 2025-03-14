const searchbar = document.querySelector("#location")
const submit_button = document.getElementById("submit_location")
export let location = ""
export function getValue () {
    submit_button.addEventListener("click", ()=> {
        location = searchbar.value
    })
}