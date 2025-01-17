import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { NewsComponent } from './shared/layouts/news/news.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    HomeComponent,
    SharedModule,
    NewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
