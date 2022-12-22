import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GlobalVariable } from './global/global.variables';
import { CanalService } from './services/canal.service';
import { UtilisateurService } from './services/utilisateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public canal?: any;
  public utilisateur?: any;

  // id?: number;
  public idcanalsession: number = GlobalVariable.idCanalGeneral;

  constructor(
    private canalService: CanalService,
    private utilisateurService: UtilisateurService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
      // On recupere le canal choisi
    this.canalService.getCanal(GlobalVariable.appUrlCanalFindByID, 1);
    this.canalService.canal.subscribe((data:any) => this.canal = data);
    
    this.utilisateurService.getUtilisateur(GlobalVariable.appUrlUtilisateurFindByID, 1),
    this.utilisateurService.utilisateur.subscribe((data:any) => this.utilisateur = data);
  }
  
}
