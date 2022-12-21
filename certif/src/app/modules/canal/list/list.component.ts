import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalVariable } from 'src/app/global/global.variables';
import { CanalService } from 'src/app/services/canal.service';

@Component({
  selector: 'canal-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public canals: any[] = [];

  constructor(
    private canalService: CanalService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.canalService.canals.subscribe(data => this.canals = data);
  }

  /**
   * Retourne le canal en fonction de l'identifiant
   * @param id Identifiant du canal
   */
  public choiceCanal(id: number): void {
    localStorage.setItem(GlobalVariable.NameIdCanalSession, id.toString());
    // On recharge la page
    window.location.reload();
  }

}
