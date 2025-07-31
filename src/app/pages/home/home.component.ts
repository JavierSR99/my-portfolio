import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/core/services/language.service';
import TypeIt from "typeit";
import { ITypeitText } from './interfaces/typeit-text.interface';

@Component({
  selector: 'jav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  //#region READONLY VARIABLES
  private readonly typeitSpanish: ITypeitText = {
    hi: "Hola,",
    iam: "soy",
    name: "Javier Sanz",
    job1: "desarrollador web",
    job2: "arquitecto BEMIT"
  };

  private readonly typeitEnglish: ITypeitText = {
    hi: "Hello,",
    iam: "I am",
    name: "Javier Sanz",
    job1: "web developer",
    job2: "BEMIT architect"
  };
  //#endregion

  //#region VARIABLES
  private activeLang: "es" | "en" | "" = "";
  public textComplete: boolean = false;

  private listObservers$: Array<Subscription> = [];
  //#endregion

  //#region CONSTRUCTOR & LIFECYCLE HOOKS
  constructor(private _ls: LanguageService) { }

  ngOnInit(): void {
    const observableLang$ = this.getLang();
    
    this.activeLang == "es" ? this.generateFirstString(this.typeitSpanish) : this.generateFirstString(this.typeitEnglish);

  }

  ngOnDestroy() {
    this.listObservers$.forEach(u => u.unsubscribe());
  }
  //#endregion

  //#region PRIVATE METHODS
  private getLang(): Subscription {
    return this._ls.activeLanguage$.subscribe((lang: string) => {
      if (this.activeLang == "") { this.activeLang = lang as "es" | "en"; }
      else if (this.activeLang !== lang) {

      }


    });
  }

  private generateFirstString(lang: ITypeitText): void {

    new TypeIt("#hi-message", {
      cursor: false,
      speed: 100,
      waitUntilVisible: true,
      afterComplete: async () => {
        this.generateSecondString(lang);
      }
    }).type(lang.hi, { delay: 200 })
    .go();
  }

  private generateSecondString(lang: ITypeitText): void {
    new TypeIt("#iam-message", {
      loop: false,
      speed: 75,
      waitUntilVisible: true,
      afterComplete: () => {
        this.textComplete = true;
      }
    }).type(lang.iam, { delay: 200 })
    .pause(200)
    .type(`<span class='u-color-comp2'> ${lang.name} </span>`)
    .pause(1000)
    .delete(12)
    .type(`<span class='u-color-comp1'> ${lang.job1} </span>`)
    .pause(1000)
    .delete(18)
    .type(`<span class='u-color-comp1'> ${lang.job2} </span>`)
    .pause(1000)
    .delete(17)
    .type(`<span class='u-color-comp2'> ${lang.name} </span>`)
    .go();
  }
  //#endregion
}
