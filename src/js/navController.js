const navIcons = document.querySelectorAll('[data-navController]')

// Check if navIcons are on the page 
if (navIcons) {

    // Get all tool tips 
    const tooltips = document.querySelectorAll('[data-tooltip]')

    // Foreach through navIcon 
    // On mouseenter remove any icon that has '-active'
    // Add '-active' to the correct icon 
    // Remove '-active' to all tooltips
    // Add '-active' to the correct tooltip 
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
