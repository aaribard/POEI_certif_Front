import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModulesRoutingModule } from './modules-routing.module';
import { AddComponent as CanalAddComponent} from './canal/add/add.component';
import { ListComponent as CanalListComponent } from './canal/list/list.component';
import { EditComponent as CanalEditComponent } from './canal/edit/edit.component';
import { DeleteComponent as CanalDeleteComponent } from './canal/delete/delete.component';


@NgModule({
  declarations: [
    CanalAddComponent,
    CanalListComponent,
    CanalEditComponent,
    CanalDeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModulesRoutingModule
  ],
  exports: [
    CanalAddComponent,
    CanalListComponent,
    CanalEditComponent,
    CanalDeleteComponent
  ]
})
export class ModulesModule { }
