import { Component, OnInit } from '@angular/core';
import TypeIt from "typeit";

@Component({
  selector: 'jav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public textComplete: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.generateFirstString();
  }

  private generateFirstString(): void {

    new TypeIt("#hi-message", {
      cursor: false,
      speed: 100,
      waitUntilVisible: true,
      afterComplete: async () => {
        this.generateSecondString();
      }
    }).type("Hola,", { delay: 200 })
    .go();
  }

  private generateSecondString(): void {
    new TypeIt("#iam-message", {
      loop: false,
      speed: 75,
      waitUntilVisible: true,
      afterComplete: () => {
        this.textComplete = true;
      }
    }).type("soy", { delay: 200 })
    .pause(200)
    .type("<span class='u-color-comp2'> Javier Sanz </span>")
    .pause(1000)
    .delete(12)
    .type("<span class='u-color-comp1'> desarrollador web</span>")
    .pause(1000)
    .delete(18)
    .type("<span class='u-color-comp1'> arquitecto BEMIT </span>")
    .pause(1000)
    .delete(17)
    .type("<span class='u-color-comp2'> Javier Sanz </span>")
    .go();
  }
}
