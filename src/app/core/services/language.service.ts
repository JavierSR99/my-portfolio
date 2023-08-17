import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public activeLanguage$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private _ts: TranslateService) { }

  public setInitialLanguage(): void {
    this._ts.addLangs(['es', 'en']);
    const lang = this._ts.getBrowserLang();
    const storageLang = localStorage.getItem('lang');

    if (storageLang) {
      this.validateAndSetLang(storageLang);
    } else {
      this.validateAndSetLang(lang);
    }
  }

  public setActiveLang(value: string): void {

    if (['es', 'en'].includes(value)) {
      this.activeLanguage$.next(value);

      if (localStorage.getItem('lang')) {
        localStorage.removeItem('lang');
      }
      localStorage.setItem('lang', value);

    } else { this.activeLanguage$.next('es'); }
  }

  private validateAndSetLang(lang: string | undefined): void {
    if (lang !== 'es' && lang !== 'en') {
      this._ts.setDefaultLang('es');
      this.setActiveLang('es');
    } else {
      this._ts.setDefaultLang(lang);
      this.setActiveLang(lang);
    }
  }
}
