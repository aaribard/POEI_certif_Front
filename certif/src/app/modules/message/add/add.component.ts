import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalVariable } from 'src/app/global/global.variables';
import { MessageService } from 'src/app/services/message.service';

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
    private messageService: MessageService
  ) { }
  
  public submitMessage() {
    
    // On insert le canal dans la base de données
    this.messageService.createMessage(GlobalVariable.appUrlMessageAdd, this.form.value);
    // On recharge la page
    window.location.reload();
  }
}
