import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalVariable } from '../global/global.variables';
import { Utilisateur } from '../interface/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  // Liste des utilisateurs
  private _utilisateurs = new BehaviorSubject<any>([]);
  // Un utilisateur
  private _utilisateur = new BehaviorSubject<any>({});

  /**
   * Constructeur
   * @param httpClient client HTTP
   */
  constructor(
    private httpClient: HttpClient
  ) { 
    // On recupere la liste des canaux
    this.getUtilisateursFromDatabase(GlobalVariable.appUrlUtilisateurList);
    //console.log("Utilisateur List : " + GlobalVariable.appUrlUtilisateurList);
  }

  /**
   * Liste des canaux
   */
  public getUtilisateursFromDatabase(url: string): void {
    this.httpClient
      .get(url)
      .subscribe(reponse => {
        this._utilisateurs.next(reponse);
      
      })
  }

  /**
   * Recuperation d'un utilisateur
   * @param url url de recupération
   * @param id  identifiant du utilisateur
   */
  public getUtilisateur(url: string, id: number) {
    url = GlobalVariable.appUrlUtilisateurFindByID + "?id=" + id;
    this.httpClient.get(url).subscribe(reponse => this._utilisateur.next(reponse));
  }

  /**
   * Création d'un utilisateur en base de données
   * @param url url de creation
   * @param utilisateur utilisateur au format JSON
   */
  public createUtilisateur(url: string, utilisateur: Partial<any>) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers };

    this.httpClient.post(url, utilisateur, options).subscribe(reponse => console.log(reponse));
  }

  /**
   * Mise à jour du utilisateur
   * @param url Mise à jour d'un utilisateur
   * @param utilisateur utilisateur au format JSON
   */
  public updateUtilisateur(url: string, utilisateur: Partial<any>) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers };

    this.httpClient.post(url, utilisateur, options).subscribe(reponse => console.log(reponse));
  }

  /**
   * Suppression
   * @param url suppression d'un utilisateur
   * @param utilisateur utilisateur au format JSON
   */
  public deleteUtilisateur(url: string, id: number) {
    url = GlobalVariable.appUrlUtilisateurDelete + "?id=" + id;
    this.httpClient.delete(url).subscribe(reponse => console.log(reponse));
  }

  // ---------------------------
  // GETTERS
  // ---------------------------
  public get utilisateurs() {
          return this._utilisateurs;
  }
  
  public get utilisateur() {
          return this._utilisateur;
  }

}
