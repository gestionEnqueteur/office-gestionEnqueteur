import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent {
  colonnes = ['date', 'ligne', 'trajet', 'heures'];
  filtreLigne: string = '';

  courses = [
    { date: '2025-04-01', ligne: 'A', depart: 'Paris', arrivee: 'Lyon', hd: '08:00', ha: '10:00' },
    { date: '2025-04-02', ligne: 'B', depart: 'Lille', arrivee: 'Marseille', hd: '09:00', ha: '13:00' },
    // ...
  ];

  get lignesDisponibles() {
    return [...new Set(this.courses.map(c => c.ligne))];
  }

  get filteredCourses() {
    return this.filtreLigne
      ? this.courses.filter(c => c.ligne === this.filtreLigne)
      : this.courses;
  }


}
