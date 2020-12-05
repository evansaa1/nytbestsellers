import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'book-list',
  template: `
    <p *ngIf="loading">Loading...</p>
    <div *ngIf="!loading">
      <div *ngFor="let book of books" class="book-tile">
        <img src="{{book.book_image}}" alt=""/>
        <div class="book-details">
          <p>{{book.title}}</p>
          <p>{{book.author}}</p>
          <p class="text-sm pt-6">{{book.description}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`.book-tile {
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin: 10px;
    border-bottom: 1px solid black;
  }
  .book-tile img{
    width: 100px;
    margin: 10px;
  }
  .book-tile .book-details{
    margin: 10px;
  }
  `]
})
export class BookListComponent implements OnInit {

  books: Book[];
  loading: boolean;
  constructor(private bookService: BookService){
    this.loading = true;
  }

  ngOnInit(): void {
    this.bookService.getBookData().subscribe(
      (value)=> {
        this.loading = false;
        this.books = value.results.books;
      },
      (error)=> {
        alert(error)
      }
    );
  }

}
