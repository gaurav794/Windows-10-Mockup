import { animation, style, animate, trigger, transition, useAnimation, state, keyframes, query, animateChild, group } from '@angular/animations';

export const slideInAnimation =
trigger('fadeInAnimation', [

  // route 'enter' transition
  transition(':enter', [

      // css styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('.3s', style({ opacity: 1 }))
  ]),
]);