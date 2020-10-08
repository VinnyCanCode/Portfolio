import { gsap } from 'gsap';
import { elements } from './base';

// LOGO Animation
const logoAnimation = gsap.timeline();

logoAnimation.from([elements.logo], {
  duration: 1,
  y: 40,
  opacity: 0,
  ease: 'power3.out',
});

// HEADER ANIMATION
const initialAnimation = gsap.timeline();

initialAnimation
  .from([elements.pageLinksItem], {
    duration: 0.5,
    opacity: -1,
    x: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.5,
    },
  })
  .from([elements.socialsList], {
    duration: 0.5,
    opacity: 0,
    // width: 0,
    x: 0,
    y: 20,
    ease: 'power3.inOut',
  })
  .from([elements.socialsItem], {
    duration: 0.5,
    opacity: -1,
    x: 0,
    y: 20,
    ease: 'power3.inOut',
  })
  .from([elements.aboutTitle, elements.aboutSection], {
    duration: 0.5,
    opacity: -1,
    y: 40,
    // x: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.5,
    },
  });
