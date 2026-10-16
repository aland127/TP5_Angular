import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.component.scss',
  templateUrl: './consult-activite.component.html',
})
export class ConsultActiviteComponent {
  index: number;
  modeEdition: boolean = false;
  titreModifie: string = '';

  constructor(
    public activiteService: ActiviteService,
    private actRoute: ActivatedRoute,
    private monRouteur: Router,
  ) {
    this.index = Number(this.actRoute.snapshot.params['idAct']);
  }

  get activite(): string {
    return this.activiteService.objectifs[this.index];
  }

  supprimeElem(index: number): void {
    this.activiteService.removeItem(index);
    this.monRouteur.navigate(['/']);
  }

  modifier(): void {
    this.titreModifie = this.activite;
    this.modeEdition = true;
  }

  sauvegarder(): void {
    this.activiteService.updateItem(this.index, this.titreModifie);
    this.modeEdition = false;
  }
}
