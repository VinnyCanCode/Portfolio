const navIcons = document.querySelectorAll('[data-navController]')
const tooltips = document.querySelectorAll('[data-tooltip]')

if (navIcons) {
    navIcons.forEach((icon) =>
        icon.addEventListener('mouseenter', (e) => {
            const controller = icon.dataset.navcontroller

            navIcons.forEach((icon) => {
                icon.classList.remove('-active')
            })

            icon.classList.add('-active')

            tooltips.forEach((tip) => {
                const child = tip.dataset.tooltip

                tip.classList.remove('-active')

                if (child === controller) {
                    tip.classList.toggle('-active')
                }
            })
        })
    )
}
