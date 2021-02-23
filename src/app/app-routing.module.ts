import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './employee/create/create.component';
import { ListComponent } from './employee/list/list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'

},
  
   { 
     path: 'list', 
     component: ListComponent 
},
{ 
  path: 'create', 
  component: CreateComponent 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
