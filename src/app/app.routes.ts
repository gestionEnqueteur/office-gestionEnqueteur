import { Routes } from '@angular/router';
import {GestionEnqueteursComponent} from "./template/gestion-enqueteurs/gestion-enqueteurs.component";
import {GestionVacationsComponent} from "./template/gestion-vacations/gestion-vacations.component";
import {SuivreLesQuotasComponent} from "./template/suivre-les-quotas/suivre-les-quotas.component";
import {DashboardComponent} from "./template/dashboard/dashboard.component";
import {EspaceEnqueteurComponent} from "./template/espace-enqueteur/espace-enqueteur.component";
import {PlanningComponent} from "./template/espace-enqueteur/planning/planning.component";
import {HistoriqueComponent} from "./template/espace-enqueteur/historique/historique.component";
import {PasswordComponent} from "./template/espace-enqueteur/password/password.component";

export const routes: Routes = [

  // Espace responsables
  { path: '', component: DashboardComponent },
  { path: 'gestion-enqueteurs', component: GestionEnqueteursComponent },
  { path: 'gestion-vacations', component: GestionVacationsComponent },
  { path: 'quotas', component: SuivreLesQuotasComponent },

  // Espace enqueteurs
  {
    path: 'espace-enqueteur', component :EspaceEnqueteurComponent,
    children: [
      { path: '', component: PlanningComponent},
      { path: 'planning', component: PlanningComponent },
      { path: 'historique', component: HistoriqueComponent },
      { path: 'password', component: PasswordComponent },
    ],
  },
];
