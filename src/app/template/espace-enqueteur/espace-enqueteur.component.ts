import { Component } from '@angular/core';
import {SidebarEnqueteurComponent} from "../../components/sidebar-enqueteur/sidebar-enqueteur.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-espace-enqueteur',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarEnqueteurComponent],
  templateUrl: './espace-enqueteur.component.html',
  styleUrl: './espace-enqueteur.component.css'
})
export class EspaceEnqueteurComponent {

}
