import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
//import { IndexComponentsComponent } from './containers/index-components/index-components.component';
import { ShowComponentComponent } from './containers/show-component/show-component.component';


@NgModule({
  declarations: [
    //IndexComponentsComponent,
    ShowComponentComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
