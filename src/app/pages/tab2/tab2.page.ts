import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from '../interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public categories: string[] = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
  ];

  public articles: Article[] = [];
  public selectedCategory: string =  this.categories[0];

  constructor( private newsService: NewsService) {}

  ngOnInit(){
    this.newsService.getToHeadLinesByCategory(this.selectedCategory)
    .subscribe(articles => {
      this.articles = [...this.articles, ...articles]
    })
  }

  segmentChanged( event: any ){
    this.selectedCategory= event.detail.value;
    this.newsService.getToHeadLinesByCategory(this.selectedCategory)
    .subscribe(articles => {
      this.articles = [...articles]
    })

  }

  

  

}
