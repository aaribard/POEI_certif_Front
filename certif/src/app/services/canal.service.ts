import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalVariable } from '../global/global.variables';

@Injectable({
  providedIn: 'root'
})
export class CanalService {

  // Liste des canaux
  private _canals = new BehaviorSubject<any>([]);
  // Un canal
  private _canal = new BehaviorSubject<any>({});

  /**
   * Constructeur
   * @param httpClient client HTTP
   */
  constructor(
    private httpClient: HttpClient
  ) { 
    // On recupere la liste des canaux
    this.getCanalsFromDatabase(GlobalVariable.appUrlCanalList);
    //console.log("Canal List : " + GlobalVariable.appUrlCanalList);
  }

  /**
   * Liste des canaux
   */
  public getCanalsFromDatabase(url: string): void {
    this.httpClient
      .get(url)
      .subscribe(reponse => {
        this._canals.next(reponse);
      
      })
  }

  /**
   * Recuperation d'un canal
   * @param url url de recupération
   * @param id  identifiant du canal
   */
  public getCanal(url: string, id: number) {
    url = GlobalVariable.appUrlCanalFindByID + "?id=" + id;
    this.httpClient.get(url).subscribe(reponse => this.canal.next(reponse));
  }

  /**
   * Création d'un canal en base de données
   * @param url url de creation
   * @param canal canal au format JSON
   */
  public createCanal(url: string, canal: any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers };

    this.httpClient.post(url, canal, options).subscribe(reponse => console.log(reponse));
  }

  /**
   * Mise à jour du canal
   * @param url Mise à jour d'un canal
   * @param canal canal au format JSON
   */
  public updateCanal(url: string, canal: any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers };

    this.httpClient.post(url, canal, options).subscribe(reponse => console.log(reponse));
  }

  /**
   * Suppression
   * @param url suppression d'un canal
   * @param canal canal au format JSON
   */
  public deleteCanal(url: string, id: number) {
    url = GlobalVariable.appUrlCanalDelete + "?id=" + id;
    this.httpClient.delete(url).subscribe(reponse => console.log(reponse));
  }

  // ---------------------------
  // GETTERS
  // ---------------------------
  public get canals() {
          return this._canals;
  }
  
  public get canal() {
          return this._canal;
  }

}
