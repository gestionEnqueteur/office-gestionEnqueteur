import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef, MatTableModule
} from "@angular/material/table";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'app-gestion-vacations',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    MatHeaderCell,
    MatIconModule,
    MatCell,
    MatTableModule,
    MatFormFieldModule,
    MatSelect,
    MatOption,
    MatHeaderRow,
    MatRow,
    MatIcon,
    MatButton,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    FormsModule,
    MatColumnDef
  ],
  templateUrl: './gestion-vacations.component.html',
  styleUrl: './gestion-vacations.component.css'
})
export class GestionVacationsComponent {
  selectedTheme: string = 'material';

  colonnes: string[] = [
    'pds', 'vac', 'mission', 'semaine', 'typeJour', 'date', 'affectation',
    'index', 'ligne', 'trainCourse', 'objectif', 'prQuota', 'hd', 'ha',
    'depart', 'arrivee', 'commentaires', 'actions'
  ];

  dataSource = [
    {
      pds: 'PDS-001', vac: 'VAC-01', mission: 'Satis KPA', semaine: '15', typeJour: 'Lundi',
      date: '2024-04-08', affectation: 'PONCHE Remi', index: '101', ligne: 'L1',
      trainCourse: 'TC001', objectif: '30', prQuota: '50%', hd: '08:00', ha: '12:00',
      depart: 'Paris', arrivee: 'Lyon', commentaires: 'RAS'
    },
    {
      pds: 'PDS-002', vac: 'VAC-02', mission: 'HLP VS', semaine: '15', typeJour: 'Mardi',
      date: '2024-04-09', affectation: 'PONCHE Remi', index: '102', ligne: 'L2',
      trainCourse: 'TC002', objectif: '25', prQuota: '40%', hd: '09:00', ha: '13:00',
      depart: 'Marseille', arrivee: 'Nice', commentaires: 'Prévoir retour'
    }
  ]; // à remplir plus tard avec des vraies données

  ajouterCourse() {
    alert("Ajout d'une course manuelle (à implémenter)");
  }
}
