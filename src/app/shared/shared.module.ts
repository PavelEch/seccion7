import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LazyimageComponent } from './lazyimage/lazyimage.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HomePageComponent,
    LazyimageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    SidebarComponent,
    LazyimageComponent
  ]
})
export class SharedModule { }
