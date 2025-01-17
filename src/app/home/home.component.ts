import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/layouts/header/header.component';
import { NewsComponent } from '../shared/layouts/news/news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NewsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }