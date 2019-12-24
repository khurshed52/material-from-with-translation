import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  lang = true;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ar');
  }
  ngOnInit() {
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.lang = !this.lang;
    $('body').toggleClass('english');
    if ($('html').attr('lang') === 'ar') {
      $('html').attr('lang', 'en');
    } else {
      $('html').attr('lang', 'ar');
    }
  }
}
