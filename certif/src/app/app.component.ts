import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GlobalVariable } from './global/global.variables';
import { CanalService } from './services/canal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public canal?: any;

  // id?: number;
  idcanalsession?: number;

  constructor(
    private canalService: CanalService,
    private route: ActivatedRoute
  ) {

    // this.id = Number(this.route.snapshot.paramMap.get('id'));

    // Id du canal choisi mis en cache de session
    this.idcanalsession = Number(localStorage.getItem(GlobalVariable.NameIdCanalSession));
    if (this.idcanalsession == null) {
      this.idcanalsession = GlobalVariable.idCanalGeneral;
    }

    // On recupere le canal choisi
    this.canalService.getCanal(GlobalVariable.appUrlCanalFindByID, this.idcanalsession);
    this.canalService.canal.subscribe(data => this.canal = data);;
  }
  
}
