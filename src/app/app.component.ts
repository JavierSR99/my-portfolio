import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'jav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private _ts: TranslateService) {
    _ts.addLangs(['es', 'en']);
    const lang = _ts.getBrowserLang();

    if (lang !== 'es' && lang !== 'en') {
      _ts.setDefaultLang('es');
    } else {
      _ts.setDefaultLang(lang);
    }
  }

}
