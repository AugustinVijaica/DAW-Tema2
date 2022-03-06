import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CookieService} from "../services/cookie.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService,public cookieService: CookieService) {
    translate.addLangs(['Română','English']);
    let language = this.cookieService.getCookieInfo('language');
    if(language!==''){
      translate.setDefaultLang(language);
    }
    else{
      translate.setDefaultLang('Română')
    }

    localStorage.setItem('language',translate.getDefaultLang());
  }

  ngOnInit(): void {
  }

  translateLanguageTo(lang:string){
    if(lang==='Română')
      document.cookie = 'language = Română'
    else
      document.cookie = 'language = English'
    this.translate.use(lang);
    window.location.reload();
  }
}
