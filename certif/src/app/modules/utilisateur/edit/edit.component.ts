import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalVariable } from 'src/app/global/global.variables';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'utilisateur-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public utilisateur?: any;
  idutilisateursession?: number;

  // Formulaire
  public formEditUtilisateur = new FormGroup({
    id: new FormControl(),
    nom: new FormControl(),
    isroot: new FormControl()
  });

  constructor(
    private utilisateurService: UtilisateurService
  ) {
    this.idutilisateursession = Number(localStorage.getItem(GlobalVariable.NameIdUtilisateurSession));
    if (this.idutilisateursession != null) {
      // On recupere le utilisateur choisi
      this.utilisateurService.getUtilisateur(GlobalVariable.appUrlUtilisateurFindByID, this.idutilisateursession);
      this.utilisateurService.utilisateur.subscribe(data => this.utilisateur = data);;
    }
   }

  public updateUtilisateur() {
    // On met à jour la valeur isroot
    this.formEditUtilisateur.controls['isroot'].setValue(0);
    this.idutilisateursession = Number(localStorage.getItem(GlobalVariable.NameIdUtilisateurSession));
    if ((this.idutilisateursession != null) && (this.idutilisateursession != GlobalVariable.idUtilisateurGeneral)) {
      this.formEditUtilisateur.controls['id'].setValue(this.idutilisateursession);
      console.log(this.formEditUtilisateur.controls);
      // On insert le utilisateur dans la base de données
      this.utilisateurService.updateUtilisateur(GlobalVariable.appUrlUtilisateurAdd, this.formEditUtilisateur.value);
      // On recharge la page
      window.location.reload();
    }
  }

      public deleteUtilisateur() {
       // On met à jour la valeur isroot
      this.idutilisateursession = Number(localStorage.getItem(GlobalVariable.NameIdUtilisateurSession));
      if ((this.idutilisateursession != null) && (this.idutilisateursession != GlobalVariable.idUtilisateurGeneral)) {
        this.utilisateurService.deleteUtilisateur(GlobalVariable.appUrlUtilisateurAdd, this.idutilisateursession);
        localStorage.setItem(GlobalVariable.NameIdUtilisateurSession, GlobalVariable.idUtilisateurGeneral + "");
        // On recharge la page
        window.location.reload();
      }
      }
  
}
