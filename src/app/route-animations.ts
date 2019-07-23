import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition('* => *', [
      query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        ["right"]: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ ["right"]: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ ["right"]: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ ["right"]: '0%' }))
      ])
    ]),
  ]),
]);
