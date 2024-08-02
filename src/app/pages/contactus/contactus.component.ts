import { Component } from '@angular/core';
import { AboutusComponent } from '../aboutus/aboutus.component';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [AboutusComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

}
