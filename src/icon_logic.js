
export function whichIcon (temp) {

    switch (true) {
        case (temp >70):
        return "./icons/shorts_icon.png"

        case temp > 60:
            return "./icons/polo_shirt_icon.png"
        case temp > 50:
            return "./icons/jeans_icon.png"
        case temp > 40:
            return "./icons/jacket_icon.png"
        default:
            return "./icons/coat_icon.png"
    }
}
// console.log(whichIcon(77))

// console.log(whichIcon(55))
// console.log(whichIcon(20))