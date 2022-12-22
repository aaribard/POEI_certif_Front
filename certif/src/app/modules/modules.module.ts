import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModulesRoutingModule } from './modules-routing.module';
import { AddComponent as UtilisateurAddComponent} from './utilisateur/add/add.component';
import { ListComponent as UtilisateurListComponent } from './utilisateur/list/list.component';
import { EditComponent as UtilisateurEditComponent } from './utilisateur/edit/edit.component';
import { DeleteComponent as UtilisateurDeleteComponent } from './utilisateur/delete/delete.component';


@NgModule({
  declarations: [
    UtilisateurAddComponent,
    UtilisateurListComponent,
    UtilisateurEditComponent,
    UtilisateurDeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModulesRoutingModule
  ],
  exports: [
    UtilisateurAddComponent,
    UtilisateurListComponent,
    UtilisateurEditComponent,
    UtilisateurDeleteComponent
  ]
})
export class ModulesModule { }
