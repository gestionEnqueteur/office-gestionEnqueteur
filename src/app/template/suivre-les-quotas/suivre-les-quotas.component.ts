import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-suivre-les-quotas',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    NgClass
  ],
  templateUrl: './suivre-les-quotas.component.html',
  styleUrl: './suivre-les-quotas.component.css'
})
export class SuivreLesQuotasComponent {
  mode: 'ligne' | 'train' = 'ligne';

  filtreLigne: string = '';

  quotasParLigne = [
    { ligne: 'Ligne A', quota: 20, realise: 18, statut: false },
    { ligne: 'Ligne B', quota: 10, realise: 12, statut: true },
    { ligne: 'Ligne C', quota: 15, realise: 15, statut: true },
  ];

  quotasParTrain = [
    { train: 'Train 101', quota: 5, realise: 3, statut: false },
    { train: 'Train 202', quota: 8, realise: 10, statut: true },
    { train: 'Train 303', quota: 6, realise: 6, statut: true },
  ];

  switchMode(mode: 'ligne' | 'train') {
    this.mode = mode;
  }

  getKey(item: any): string {
    return this.mode === 'ligne' ? (item as any).ligne : (item as any).train;
  }

  get filteredQuotas() {
    const data = this.mode === 'ligne' ? this.quotasParLigne : this.quotasParTrain;
    return data.filter(item =>
      this.getKey(item).toLowerCase().includes(this.filtreLigne.toLowerCase())
    );
  }
}
