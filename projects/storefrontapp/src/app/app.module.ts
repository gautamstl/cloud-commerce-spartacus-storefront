import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeJa from '@angular/common/locales/ja';
import localeZh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {
  B2cStorefrontModule,
  StorefrontComponent,
} from '@spartacus/storefront';
import { environment } from '../environments/environment';
import { TestOutletModule } from '../test-outlets/test-outlet.module';

registerLocaleData(localeDe);
registerLocaleData(localeJa);
registerLocaleData(localeZh);

const devImports = [];

if (!environment.production) {
  devImports.push(StoreDevtoolsModule.instrument());
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'spartacus-app' }),
    BrowserTransferStateModule,

    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: environment.occBaseUrl,
          prefix: '/stltelcocommercewebservices/v2/',
          legacy: false,
        },
      },
      authentication: {
        client_id: 'sbg_admin',
        client_secret: 'secret'
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: [
          'b2ctelco',
        ],
      },

      // custom routing configuration for e2e testing
      routing: {
        routes: {
          product: {
            paths: ['product/:productCode/:name', 'product/:productCode'],
          },
        },
      },
      // we  bring in static translations to be up and running soon right away
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '1.2',
      },
    }),

    TestOutletModule, // custom usages of cxOutletRef only for e2e testing

    ...devImports,
  ],
  bootstrap: [StorefrontComponent],
})
export class AppModule {}
