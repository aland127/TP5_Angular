import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  nbItems: number = 0;
  btnText: string = 'Ajouter un item';
  objectifText: string = '';

  constructor(
    public activiteService: ActiviteService,
    private monRouteur: Router,
  ) {}

  ajoutItem(): void {
    this.activiteService.objectifs.push(this.objectifText);
    this.objectifText = '';
    this.nbItems = this.activiteService.objectifs.length;

    setTimeout(() => {
      this.monRouteur.navigate(['about']);
    }, 1000);
  }

  consulterActivite(index: number): void {
    this.monRouteur.navigate(['consultAct', index]);
  }

  ngOnInit(): void {
    this.nbItems = this.activiteService.objectifs.length;
  }
}
