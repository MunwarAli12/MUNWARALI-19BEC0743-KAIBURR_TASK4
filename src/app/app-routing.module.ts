import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServerComponent } from './add-server/add-server.component';
import { ListAllServersComponent } from './list-all-servers/list-all-servers.component';
import { SearchServerComponent } from './search-server/search-server.component';

const routes: Routes = [
  {path:"addServer", component:AddServerComponent},
  {path:"serversList", component:ListAllServersComponent},
  {path:"searchServer", component:SearchServerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
