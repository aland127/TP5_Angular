import { Component } from '@angular/core';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.component.scss',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  constructor(public activiteService: ActiviteService) {}
}
