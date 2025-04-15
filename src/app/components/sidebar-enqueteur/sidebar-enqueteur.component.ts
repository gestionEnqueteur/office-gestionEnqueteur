import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-sidebar-enqueteur',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatIconModule, MatListModule],
  templateUrl: './sidebar-enqueteur.component.html',
  styleUrl: './sidebar-enqueteur.component.css'
})
export class SidebarEnqueteurComponent {

}
