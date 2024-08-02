import { Component } from '@angular/core';
import { CarouselComponent } from '../../units/carousel/carousel.component';
import { AboutusComponent } from '../aboutus/aboutus.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,AboutusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
