import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { UsersComponent } from './pages/users/users.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LegalsComponent } from './pages/legals/legals.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErreurComponent } from './pages/erreur/erreur.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'profil', component:ProfilComponent},
  {path:'utilisateurs', component:UsersComponent},
  {path:'evenements', component:EvenementsComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'mentions', component:LegalsComponent},
  {path:'rgpd', component:LegalsComponent},
  {path:'contact', component:ContactComponent},
  {path:'organisation', loadChildren:
    () => import('./organisation/organisation.module').then(m => m.OrganisationModule)
  },
  {path:'**', component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
