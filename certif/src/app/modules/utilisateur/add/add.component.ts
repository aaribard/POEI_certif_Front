import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalVariable } from 'src/app/global/global.variables';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'utilisateur-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  // Formulaire
  public form = new FormGroup({
    isroot: new FormControl(),
    nom: new FormControl()
  });

  constructor(
    private utilisateurService: UtilisateurService
  ) { }
  
  public submitUtilisateur() {
    // On met à jour la valeur isroot
    this.form.controls['isroot'].setValue(0);
    // On insert le utilisateur dans la base de données
    this.utilisateurService.createUtilisateur(GlobalVariable.appUrlUtilisateurAdd, this.form.value);
    // On recharge la page
    window.location.reload();
  }
}
