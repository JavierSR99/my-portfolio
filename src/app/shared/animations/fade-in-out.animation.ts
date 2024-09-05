import { trigger, style, animate, transition } from "@angular/animations";

export const FADE_IN_OUT = trigger('fadeinout', [
  transition(':enter', [
    style({ opacity : 0 }),
    animate('200ms ease-in-out', style({ opacity : 1 }))
  ]),
  transition(':leave', [
    style({ opacity : 1 }),
    animate('200ms ease-in-out', style({ opacity : 0 }))
  ])
]);