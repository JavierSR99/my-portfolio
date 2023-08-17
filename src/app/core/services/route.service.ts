import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  public activeRoute$: BehaviorSubject<string> = new BehaviorSubject<string>('HOME');

  constructor() { }

  public setActiveRoute(value: string): void {
    this.activeRoute$.next(value);
  }
}
