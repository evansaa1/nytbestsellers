import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IBookService from './ibook.service';
import { Book, BestSellersResponse } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService implements IBookService {

  bookApiKey = 'BjogmMeHtVr6Gu3nfSjShp2i0FBQ2Arm';
  bookApiEndpoint = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${this.bookApiKey}`;
  options = {
    observe: 'response',
    responseType: 'json',
  }

  constructor(private http: HttpClient) { }

  getBookData(){
    return this.http.get<BestSellersResponse>(this.bookApiEndpoint);
  }
}
