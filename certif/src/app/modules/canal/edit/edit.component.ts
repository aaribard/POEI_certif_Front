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
  }
  
  ngOnInit(): void {
    this.canalService.canal.subscribe((data:any) => this.canal = data);
  }

  public updateCanal() {
    // On met à jour la valeur isroot
    this.formEditCanal.controls['isroot'].setValue(0);

    this.idcanalsession = this.canal.id;

    if ((this.idcanalsession != null) && (this.idcanalsession != GlobalVariable.idCanalGeneral)) {
      this.formEditCanal.controls['id'].setValue(this.idcanalsession);
            // On insert le canal dans la base de données
      this.canalService.updateCanal(GlobalVariable.appUrlCanalAdd, this.formEditCanal.value);
      // On recharge la page car je ne sais pas faire autrement
      window.location.reload();
    }
  }

  public deleteCanal() {
    this.idcanalsession = this.canal.id;

    if ((this.idcanalsession != null) && (this.idcanalsession != GlobalVariable.idCanalGeneral)) {
       this.canalService.deleteCanal(GlobalVariable.appUrlCanalAdd, this.idcanalsession);
       localStorage.setItem(GlobalVariable.NameIdCanalSession, GlobalVariable.idCanalGeneral + "");
       // On recharge la page car je ne sais pas faire autrement
       window.location.reload();
    }
  }
}
