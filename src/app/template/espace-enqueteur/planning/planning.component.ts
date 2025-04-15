import { Component } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatAccordion, MatExpansionModule } from "@angular/material/expansion";
import {CommonModule, NgForOf} from "@angular/common";
import {MatCard, MatCardContent, MatCardModule, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [ CommonModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatAccordion, MatExpansionModule, NgForOf, MatCardModule],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.css'
})
export class PlanningComponent {
  displayedColumns: string[] = ['semaine', 'lundi', 'mardi', 'mercredi'];
  planningData = [
    {
      semaine: '15',
      lundi: '08h-12h : Vac A',
      mardi: 'Repos',
      mercredi: '14h-18h : Vac B'
    }
  ];

  //vue 2
  timeline = [
    {
      date: 'Lundi 14 avril',
      vacations: [
        { time: '08:00 - 12:00', description: 'Ligne 1 - Vac A' },
        { time: '13:00 - 17:00', description: 'Ligne 3 - TGV 4589' }
      ]
    },
    {
      date: 'Mardi 15 avril',
      vacations: []
    }
  ];
}
