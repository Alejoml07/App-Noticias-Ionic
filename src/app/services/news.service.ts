import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article, NewResponse } from '../pages/interfaces';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';


const apikey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient) { 
    
  }
  getTopHeadLines(): Observable<Article[]>{
   return this.http.get<NewResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apikey}`
   ).pipe(map(({articles}) => articles))
  }

  getToHeadLinesByCategory(category: string): Observable<Article[]>{
    return this.http.get<NewResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=${ category }`,{params:{apikey}}
   ).pipe(map(({articles}) => articles))
  }


}
