import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ApiService } from './service/api.service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [ApiService,{ provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
