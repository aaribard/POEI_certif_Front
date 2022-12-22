import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariable } from 'src/app/global/global.variables';
import { Canal } from 'src/app/interface/canal';
import { Utilisateur } from 'src/app/interface/utilisateur';
import { CanalService } from 'src/app/services/canal.service';
import { MessageService } from 'src/app/services/message.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'message-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  private idCanal = 1;
  private idUtilisateur = 1;
  private canal:Canal = {} as Canal;
  private utilisateur:Utilisateur = {} as Utilisateur;
  // Formulaire
  public form = new FormGroup({
    corps: new FormControl(),
    canal: new FormControl(),
    utilisateur: new FormControl()
  });

  constructor(
    private messageService: MessageService,
    private canalService: CanalService,
    private utilisateurService: UtilisateurService,
    private router:Router
  ) { }
  
  public submitMessage() {
    
    this.canalService.canal.subscribe((data:any) => {
      this.canal = data
      this.form.controls['canal'].setValue(this.canal);
    });

    this.utilisateurService.utilisateur.subscribe((data:any) => {
      this.utilisateur = data
      this.form.controls['utilisateur'].setValue(this.utilisateur);
    })
    this.messageService.createMessage(GlobalVariable.appUrlMessageAdd, this.form.value);
    

    setTimeout(() => {
      this.messageService.getMessagesByCanal(GlobalVariable.appUrlMessageFindByCanal, this.canal.id);
    }, 500)
  }
}
