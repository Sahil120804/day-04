import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  departments=[
    {
      id:1,
      Title:"Aerospace & Defence",
      Image:"../../../assets/aerospacing.jpg",
      Description:"Pushing boundaries & defending horizons with cutting-edge technologies",
    },
    {
      id:2,
      Title:"Healthcare",
      Image:"../../../assets/Rectangle-20.jpg",
      Description:"Promoting digital innovation & excellence in the healthcare industry",
      
    },
    {
      id:3,
      Title:"Banking & Financial Service (BFS)",
      Image:"../../../assets/banking.jpg",
      Description:"Accelerating the cashless economy efficiently by adopting global standards & local priorities",
      
    },
    {
      id:4,
      Title:"Insurance",
      Image:"../../../assets/insurance3.jpg",
      Description:"Unlocking the potential of insurance through technology",
      
    },
    {
      id:5,
      Title:"Locomotive",
      Image:"../../../assets/locomotive.jpg",
      Description:"Elevating Locomotive Experiences through Innovative Technologies",
      
    },
    {
      id:6,
      Title:"Industrial",
      Image:"../../../assets/indust.png",
      Description:"Where Power Meets Production: Redefining Manufacturing & Energy",
      
    },
    {
      id:7,
      Title:"Mobility",
      Image:"../../../assets/mobility.jpg",
      Description:"We are Revolutionizing the world of Mobility",
      
    },
    {
      id:8,
      Title:"CYBER SECURITY",
      Image:"../../../assets/cyber.jpg",
      Description:"Secure your digital frontiers with cutting-edge Cyber Security",
      
    },
  ]
}
