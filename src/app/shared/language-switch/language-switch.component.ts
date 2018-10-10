import { Component, Inject } from '@angular/core';

import { GLOBAL_CONFIG, GlobalConfig } from '../../../config';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ds-language-switch',
  styleUrls: ['./language-switch.component.scss'],
  templateUrl: './language-switch.component.html'
})
export class LanguageSwitchComponent {
  display: boolean = (this.config.supportedLocales.length > 1 ? true : false);
  supportedLocales: string[] = this.config.supportedLocales;

  constructor(
    @Inject(GLOBAL_CONFIG) public config: GlobalConfig,
    private translate: TranslateService
  ) {
  }

  public switchLanguage(language: string) {
    this.translate.use(language);
  }

}
