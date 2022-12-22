import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/app/global/global.variables';
import { CanalService } from 'src/app/services/canal.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'message-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public messages: any[] = [];
  private idcanalsession:number=0;

  constructor(
    private messageService: MessageService,
    private canalService: CanalService,
  ) {}

  ngOnInit(): void {

    this.canalService.canal.subscribe((data:any)=> {
      this.idcanalsession = data.id;
      console.log(this.idcanalsession);})
    this.messageService.getMessagesByCanal(GlobalVariable.appUrlMessageFindByCanal, this.idcanalsession);
    this.messageService.messages.subscribe(data => this.messages = data);
  }
}
