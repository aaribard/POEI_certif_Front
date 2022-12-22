import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { GlobalVariable } from '../global/global.variables';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  // Un utilisateur
  private _utilisateur = new BehaviorSubject<any>({});
  private _utilisateurs = new BehaviorSubject<any>([]);

  /**
   * Constructeur
   * @param httpClient client HTTP
   */
  constructor(
    private httpClient: HttpClient
  ) { 
  }

  /**
   * Recuperation d'un canal
   * @param url url de recupération
   * @param id  identifiant de l'utilisateur
   */
  public getUtilisateur(url: string, id: number) {
    url = GlobalVariable.appUrlUtilisateurFindByID + "?id=" + id;
    this.httpClient.get(url).subscribe(reponse => this._utilisateur.next(reponse));
  }

    /**
   * Liste des utilisateurs
   * @param url url de recupération
   */
    public getUtilisateurList(url: string): void {
      this.httpClient
        .get(url)
        .subscribe(reponse => {
          this._utilisateurs.next(reponse);
        })
    }
  
  public get utilisateur() {
    return this._utilisateur;
  }
  
  public get utilisateurs() {
    return this._utilisateurs;
  }

  public set utilisateur(utilisateur: any) {
    this._utilisateur = utilisateur;
  }
}
