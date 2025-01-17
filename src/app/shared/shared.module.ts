import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { NewsComponent } from './layouts/news/news.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    NewsComponent
  ],
  exports:[
    HeaderComponent,
    NewsComponent
  ]
})
export class SharedModule { }
