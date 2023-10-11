import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponentsComponent } from './containers/index-components/index-components.component';
import { ShowComponentComponent } from './containers/show-component/show-component.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponentsComponent,
    pathMatch: 'full'
  },
  {
    path:':id',
    component: ShowComponentComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
