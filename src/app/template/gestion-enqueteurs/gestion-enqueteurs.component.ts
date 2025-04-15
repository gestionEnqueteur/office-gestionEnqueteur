import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";

@Component({
  selector: 'app-gestion-enqueteurs',
  standalone: true,
  imports: [MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule],
  templateUrl: './gestion-enqueteurs.component.html',
  styleUrl: './gestion-enqueteurs.component.css'
})
export class GestionEnqueteursComponent {
  public colonnes = ['nom', 'email', 'actions'];
  public dataSource = new MatTableDataSource([
    { nom: 'Jean Dupont', email: 'jean.dupont@exemple.fr' },
    { nom: 'Marie Martin', email: 'marie.martin@exemple.fr' }
  ]);
}
