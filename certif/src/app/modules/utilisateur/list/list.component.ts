import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'utilisateur-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public utilisateurs: any[] = [];

  constructor(
    private utilisateurService: UtilisateurService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.utilisateurService.utilisateurs.subscribe(data => this.utilisateurs = data);
  }
}
