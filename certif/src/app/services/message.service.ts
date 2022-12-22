import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalVariable } from '../global/global.variables';
import { Message } from '../interface/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _messages = new BehaviorSubject<any>([]);
  private _message = new BehaviorSubject<any>({});

  /**
   * Constructeur
   * @param httpClient client HTTP
   */
  constructor(
    private httpClient: HttpClient
  ) { 
    // On recupere la liste des messages
    this.getMessagesFromDatabase(GlobalVariable.appUrlMessageList);
    //console.log("Message List : " + GlobalVariable.appUrlCanalList);
  }

  /**
   * Liste des messages
   * @param url url de recupération
   */
  public getMessagesFromDatabase(url: string): void {
    this.httpClient
      .get(url)
      .subscribe(reponse => {
        this._messages.next(reponse);
      })
  }

  /**
   * Recuperation d'un message
   * @param url url de recupération
   * @param id  identifiant du message
   */
  public getMessagesByCanal(url: string, id: number|undefined) {
    url = GlobalVariable.appUrlMessageFindByCanal + "?id=" + id;
    this.httpClient.get(url).subscribe(reponse => this._messages.next(reponse));
  }

  /**
   * Création d'un message en base de données
   * @param url url de creation
   * @param message message au format JSON
   */
  public createMessage(url: string, message: Partial<any>) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers };
    this.httpClient.post(url, message, options).subscribe(reponse => console.log(reponse));
  }

  /**
   * Mise à jour du message
   * @param url Mise à jour d'un message
   * @param message message au format JSON
   */
  public updateMessage(url: string, message: Partial<any>) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers };

    this.httpClient.post(url, message, options).subscribe(reponse => console.log(reponse));
  }

  /**
   * Suppression
   * @param url suppression d'un message
   * @param message message au format JSON
   */
  public deleteCanal(url: string, id: number) {
    url = GlobalVariable.appUrlMessageDelete + "?id=" + id;
    this.httpClient.delete(url).subscribe(reponse => console.log(reponse));
  }

  // ---------------------------
  // GETTERS
  // ---------------------------
  public get messages() {
          return this._messages;
  }
  
  public get message() {
          return this._message;
  }
}