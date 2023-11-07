import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { OrgaMenuComponent } from './template/orga-menu/orga-menu.component';

@NgModule({
  declarations: [
    AccueilComponent,
    OrgaMenuComponent
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule
  ]
})
export class OrganisationModule { }
