import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { KeycloakRoutingModule } from './keycloak-routing.module';
import { KeycloakHomeComponent } from './home.component';

const COMPONENTS: Array<Type<void>> = [KeycloakHomeComponent];

@NgModule({
  imports: [SharedModule, KeycloakRoutingModule],
  declarations: [...COMPONENTS]
})
export class KeyclaokModule {}
