import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/app/global/global.variables';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'utilisateur-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public utilisateurs: any[] = [];
  public user_id:any = 1;

  constructor(
    private utilisateurService: UtilisateurService,
  ) {}

  ngOnInit(): void {

    this.utilisateurService.getUtilisateurList(GlobalVariable.appUrlUtilisateurList);
    this.utilisateurService.utilisateurs.subscribe(data => this.utilisateurs = data);
  }

  changeIdUtilisateur(event:Event) {
    const idString = (event.target as HTMLInputElement).value;
    const id:number = +idString;
    this.utilisateurService.getUtilisateur(GlobalVariable.appUrlUtilisateurFindByID, id);
    
  }
}
