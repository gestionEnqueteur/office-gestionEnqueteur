import { Routes } from '@angular/router';
import {GestionEnqueteursComponent} from "./template/gestion-enqueteurs/gestion-enqueteurs.component";
import {GestionVacationsComponent} from "./template/gestion-vacations/gestion-vacations.component";
import {SuivreLesQuotasComponent} from "./template/suivre-les-quotas/suivre-les-quotas.component";
import {DashboardComponent} from "./template/dashboard/dashboard.component";

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'gestion-enqueteurs', component: GestionEnqueteursComponent },
  { path: 'gestion-vacations', component: GestionVacationsComponent },
  { path: 'quotas', component: SuivreLesQuotasComponent }
];
