import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
