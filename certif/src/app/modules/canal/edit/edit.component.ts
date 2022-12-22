import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalVariable } from 'src/app/global/global.variables';
import { CanalService } from 'src/app/services/canal.service';

@Component({
  selector: 'canal-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public canal?: any;
  idcanalsession?: number;

  // Formulaire
  public formEditCanal = new FormGroup({
    id: new FormControl(),
    nom: new FormControl(),
    isroot: new FormControl()
  });

  constructor(
    private canalService: CanalService
  ) {
    this.idcanalsession = Number(localStorage.getItem(GlobalVariable.NameIdCanalSession));
    if (this.idcanalsession != null) {
      // On recupere le canal choisi
      this.canalService.getCanal(GlobalVariable.appUrlCanalFindByID, this.idcanalsession);
      this.canalService.canal.subscribe(data => this.canal = data);;
    }
   }

  public updateCanal() {
    // On met à jour la valeur isroot
    this.formEditCanal.controls['isroot'].setValue(0);
    this.idcanalsession = Number(localStorage.getItem(GlobalVariable.NameIdCanalSession));
    if ((this.idcanalsession != null) && (this.idcanalsession != GlobalVariable.idCanalGeneral)) {
      this.formEditCanal.controls['id'].setValue(this.idcanalsession);
      console.log(this.formEditCanal.controls);
      // On insert le canal dans la base de données
      this.canalService.updateCanal(GlobalVariable.appUrlCanalAdd, this.formEditCanal.value);
      // On recharge la page
      window.location.reload();
    }
  }

      public deleteCanal() {
       // On met à jour la valeur isroot
      this.idcanalsession = Number(localStorage.getItem(GlobalVariable.NameIdCanalSession));
      if ((this.idcanalsession != null) && (this.idcanalsession != GlobalVariable.idCanalGeneral)) {
        this.canalService.deleteCanal(GlobalVariable.appUrlCanalAdd, this.idcanalsession);
        localStorage.setItem(GlobalVariable.NameIdCanalSession, GlobalVariable.idCanalGeneral + "");
        // On recharge la page
        window.location.reload();
      }
      }
  
}
