import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalVariable } from 'src/app/global/global.variables';
import { CanalService } from 'src/app/services/canal.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'canal-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public canals: any[] = [];

  constructor(
    private canalService: CanalService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.canalService.canals.subscribe((data: any) => this.canals = data);
  }

  /**
   * Retourne le canal en fonction de l'identifiant
   * @param id Identifiant du canal
   */
  public choiceCanal(id: number): void {
    this.canalService.getCanal(GlobalVariable.appUrlCanalFindByID, id);
    this.messageService.getMessagesByCanal(GlobalVariable.appUrlMessageFindByCanal, id);
  }
}
