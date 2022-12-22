import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalVariable } from 'src/app/global/global.variables';
import { Canal } from 'src/app/interface/canal';
import { CanalService } from 'src/app/services/canal.service';
import { MessageService } from 'src/app/services/message.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'message-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  // Formulaire
  public form = new FormGroup({
    corps: new FormControl(),
    canal: new FormControl(),
    utilisateur: new FormControl()
  });

  constructor(
    private messageService: MessageService,
    private canalService: CanalService,
    private utilisateurService: UtilisateurService
  ) { }
  
  public submitMessage() {
    var canal : Partial<any>;
    this.canalService.canal.subscribe((data:any) => {
      canal = data;
      this.messageService.createMessage(GlobalVariable.appUrlMessageAdd, canal);
    })
  }
}
