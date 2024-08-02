import { Component } from '@angular/core';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { CardsComponent } from '../../units/cards/cards.component';
import { AboutusComponent } from '../aboutus/aboutus.component';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CardsComponent,AboutusComponent],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {

}
