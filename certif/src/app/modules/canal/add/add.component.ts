import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalVariable } from 'src/app/global/global.variables';
import { CanalService } from 'src/app/services/canal.service';

@Component({
  selector: 'canal-add',
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
    private canalService: CanalService
  ) { }
  
  public submitCanal() {
    // On met à jour la valeur isroot
    this.form.controls['isroot'].setValue(0);
    // On insert le canal dans la base de données
    this.canalService.createCanal(GlobalVariable.appUrlCanalAdd, this.form.value);
    // On recharge la page
    window.location.reload();
  }
}
