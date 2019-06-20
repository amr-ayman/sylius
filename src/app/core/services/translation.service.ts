import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {BrowserStorageService} from './browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private lang: string;
  private renderer: Renderer2;
  private isArabic = new BehaviorSubject<boolean>(false);
  isArabic$ = this.isArabic.asObservable();

  constructor(private translate: TranslateService,
              private rendererFactory: RendererFactory2,
              private browserStorage: BrowserStorageService) {
    translate.setDefaultLang('en');
    this.renderer = rendererFactory.createRenderer(null, null);
    this.init();
  }

  init() {
    const currentLang = this.browserStorage.getLocal('userLang');
    if (!currentLang) {
      this.lang = 'en';
      this.browserStorage.setLocal('userLang', 'en');
    } else {
      this.lang = this.browserStorage.getLocal('userLang');
    }
    this.translate.use(this.lang);
    if (this.lang === 'ar') {
      this.renderer.addClass(document.body, 'rtl');
    }
  }

  changeLang() {
    this.lang = this.lang === 'ar' ? 'en' : 'ar';
    this.browserStorage.setLocal('userLang', this.lang);
    this.translate.use(this.lang);
    if (this.lang === 'ar') {
      this.renderer.addClass(document.body, 'rtl');
      this.isArabic.next(true);
    } else {
      this.renderer.removeClass(document.body, 'rtl');
      this.isArabic.next(false);
    }
  }
}
