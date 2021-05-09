import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularDemoComponent } from './angular-demo/form/angular-demo.component';
import { AngularDemoTableComponent } from './angular-demo/table/angular-demo-table.component';
import { BootstrapDemoComponent } from './bootstrap-demo/form/bootstrap-demo.component';
import { BootstrapDemoTableComponent } from './bootstrap-demo/table/bootstrap-demo-table.component';

const routes: Routes = [
  {
    path: 'angular', component: AngularDemoComponent,
  },
  {
    path: 'angular-table', component: AngularDemoTableComponent,
  },
  {
    path: 'bootstrap', component: BootstrapDemoComponent
  },
  {
    path: 'bootstrap-table', component: BootstrapDemoTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
