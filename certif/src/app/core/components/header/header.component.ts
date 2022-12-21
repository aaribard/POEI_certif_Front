import { Component } from '@angular/core';
import { GlobalVariable } from 'src/app/global/global.variables';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public apptitre = GlobalVariable.appName;

}
