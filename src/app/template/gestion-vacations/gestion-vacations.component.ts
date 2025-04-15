import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import { MatSelectModule} from "@angular/material/select";
import { MatIconModule} from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ExcelService, VacationData} from "../../services/excel.service";

@Component({
  selector: 'app-gestion-vacations',
  standalone: true,
  imports: [
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    NgForOf,

  ],
  templateUrl: './gestion-vacations.component.html',
  styleUrl: './gestion-vacations.component.css'
})
export class GestionVacationsComponent {

  colonnes: string[] = [
    'pds', 'vac', 'mission', 'semaine', 'typeJour', 'date', 'affectation',
    'index', 'ligne', 'trainCourse', 'objectif', 'prQuota', 'hd', 'ha',
    'depart', 'arrivee', 'commentaires', 'actions'
  ];

  /*dataSource = [
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
  ]; à remplir plus tard avec des vraies données */

  dataSource = new MatTableDataSource<VacationData>([]);

  constructor(private excelService: ExcelService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.excelService.convertExcelToJson(file).then((data) => {
        this.dataSource.data = data;
      }).catch((error) => {
        console.error('Erreur lors de la conversion du fichier Excel:', error);
      });
    }
  }

  ajouterCourse() {
    alert("Ajout d'une course manuelle (à implémenter)");
  }
}
