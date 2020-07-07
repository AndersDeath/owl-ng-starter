import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public lang = 'en';

  public nav = [{
    title: 'nav.first',
    path: ''
  }, {
    title: 'nav.second',
    path: 'second'
  }];

  title = 'owl-ng-starter';

  constructor(
    public translate: TranslateService, ) {
        translate.addLangs(['en', 'ru']);
        if (localStorage.getItem('language') === null) {
      this.lang = this.translate.getBrowserLang();
    } else {
      this.lang = localStorage.getItem('language');
    }
        translate.setDefaultLang(this.lang);
  }

  changeLang(code) {
    this.translate.setDefaultLang(code);
    this.lang = code;
    localStorage.setItem('language', code);
  }
}
