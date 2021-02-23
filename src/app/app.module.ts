import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { EmplistComponent } from './emplist/emplist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './employee/create/create.component';
import { ViewComponent } from './employee/view/view.component';
import { ListComponent } from './employee/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatTableModule} from '@angular/material/table';
 import { MatPaginatorModule } from '@angular/material/paginator';
 import { HttpClientModule } from '@angular/common/http';
 import {EmpServiceService} from './employee/emp-service.service';
 import {MatSortModule} from '@angular/material/sort';
 import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
  
    CreateComponent,
    ViewComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
   // NgbModule

  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
