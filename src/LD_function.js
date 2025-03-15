const button = document.querySelector("#LD_mode");
const root = document.querySelector(":root")
let bg ="#0D0221"
let main ="#718f94"
let accent = "#b80c09"
let text = "#fcfcfc"
export function toggleLD() {
  button.addEventListener("click", () => {
    const currentClass = button.getAttribute("class");

    if (currentClass === "light") {
        root.style.setProperty("--text",'#fcfcfc')
        root.style.setProperty("--white",'fcfcfc')
        root.style.setProperty("--light_blue",'#0D0221')
        root.style.setProperty("--lightest",'#718F94')
        root.style.setProperty("--darkest",'#5B2EAD')
        button.setAttribute("class","dark")
    } else if (currentClass === "dark") {
        root.style.setProperty("--text",'black')
        root.style.setProperty("--white",'#F9F9F9')
        root.style.setProperty("--lightest",'#7FC8F8')
        root.style.setProperty("--light_blue",'#5aa9e6')
        root.style.setProperty("--darkest",'#218fe4')
        button.setAttribute("class","light")

    }
  });
}
