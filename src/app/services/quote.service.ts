import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  getQuote(){
   return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=38ca34cb6f9301f6496f5cfdf57bd149');
  }
}
