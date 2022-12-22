import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModulesRoutingModule } from './modules-routing.module';
import { AddComponent as CanalAddComponent} from './canal/add/add.component';
import { ListComponent as CanalListComponent } from './canal/list/list.component';
import { EditComponent as CanalEditComponent } from './canal/edit/edit.component';
import { AddComponent as MessageAddComponent} from './message/add/add.component';
import { ListComponent as MessageListComponent } from './message/list/list.component';
import { EditComponent as MessageEditComponent } from './message/edit/edit.component';
import { ListComponent as UtilisateurListComponent } from './utilisateur/list/list.component';

@NgModule({
  declarations: [
    CanalAddComponent,
    CanalListComponent,
    CanalEditComponent,
    MessageAddComponent,
    MessageListComponent,
    MessageEditComponent,
    UtilisateurListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModulesRoutingModule,
    FormsModule
  ],
  exports: [
    CanalAddComponent,
    CanalListComponent,
    CanalEditComponent,
    MessageAddComponent,
    MessageListComponent,
    MessageEditComponent,
    UtilisateurListComponent
  ]
})
export class ModulesModule { }
