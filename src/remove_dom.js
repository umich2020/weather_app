export function removeManyDays() {
    const many_days_elements = document.querySelectorAll("many_days *")
    many_days_elements.forEach((element) => {
        element.remove()
    })
}
