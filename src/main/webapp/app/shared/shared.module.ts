import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AcmeSharedLibsModule, AcmeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AcmeSharedLibsModule, AcmeSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [AcmeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AcmeSharedModule {
  static forRoot() {
    return {
      ngModule: AcmeSharedModule
    };
  }
}
