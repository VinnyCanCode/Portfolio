import { gsap } from 'gsap'
import { elements } from './base'
import './navController'
import './imessage'
 

// Inspiration Click Functionality
// If not on page, skip
const inspirationTrigger = document.querySelector('.info__inspirationClick')

if (inspirationTrigger) {

    const inspirationBlock = document.querySelector('.info__inspiration')
    const inspirationExitButton = document.querySelector('.info__inspiration-close')

    // On/Off Click For Inspiration Dropdown Menu
    inspirationTrigger.addEventListener('click', (e) => {

        // If -active is already in the classlist
        // Remove -active class and add -remove class
        // Remove "-remove" class 1.5s after
        if (inspirationBlock.classList.contains('-active')) {
            inspirationBlock.classList.toggle('-active')
            inspirationBlock.classList.toggle('-remove')
            setTimeout(() => {
                inspirationBlock.classList.toggle('-remove')
            }, 1500)
        } else {
            inspirationBlock.classList.toggle('-active')
        }
    })

    // Exit Button For Inspiration dropdwon
    inspirationExitButton.addEventListener('click', (e) => {

        // If -active is already in the classlist
        // Remove -active class and add -remove class
        // Remove "-remove" class 1.5s after
        inspirationBlock.classList.toggle('-active')
        inspirationBlock.classList.toggle('-remove')
        setTimeout(() => {
            inspirationBlock.classList.toggle('-remove')
        }, 1500)
    })
}

// LOGO Animation
// const logoAnimation = gsap.timeline()

// logoAnimation.from([elements.logo], {
//     duration: 1,
//     y: 40,
//     opacity: 0,
//     ease: 'power3.out',
// })

// HEADER ANIMATION
// const initialAnimation = gsap.timeline()

// initialAnimation
//     .from([elements.pageLinksItem], {
//         duration: 0.5,
//         opacity: -1,
//         x: 0,
//         ease: 'power3.inOut',
//         stagger: {
//             amount: 0.5,
//         },
//     })
//     .from([elements.socialsList], {
//         duration: 0.5,
//         opacity: 0,
//         // width: 0,
//         x: 0,
//         y: 20,
//         ease: 'power3.inOut',
//     })
//     .from([elements.socialsItem], {
//         duration: 0.5,
//         opacity: -1,
//         x: 0,
//         y: 20,
//         ease: 'power3.inOut',
//     })
//     .from([elements.aboutTitle, elements.aboutSection], {
//         duration: 0.5,
//         opacity: -1,
//         y: 40,
//         // x: 0,
//         ease: 'power3.inOut',
//         stagger: {
//             amount: 0.5,
//         },
//     })
