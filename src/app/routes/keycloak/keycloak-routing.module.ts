import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBlankComponent } from '@layout';

import { KeycloakHomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutBlankComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: KeycloakHomeComponent },
      
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeycloakRoutingModule {}
