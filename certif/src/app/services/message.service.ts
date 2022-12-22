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
   * Recuperation d'un canal
   * @param url url de recupération
   * @param id  identifiant du canal
   */
  public getMessageByCanal(url: string, id: number) {
    url = GlobalVariable.appUrlMessageFindByCanal + "?id=" + id;
    this.httpClient.get(url).subscribe(reponse => this._message.next(reponse));
  }

  /**
   * Création d'un canal en base de données
   * @param url url de creation
   * @param message message au format JSON
   */
  public createMessage(url: string, message: Message) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers };

    this.httpClient.post(url, message, options).subscribe(reponse => console.log(reponse));
  }

  /**
   * Mise à jour du canal
   * @param url Mise à jour d'un message
   * @param message message au format JSON
   */
  public updateMessage(url: string, message: Message) {

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
  public get canals() {
          return this._messages;
  }
  
  public get canal() {
          return this._message;
  }
}