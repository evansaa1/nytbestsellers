import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="top-container">
    <div class="content-container">
      <h1 class="font-serif my-8 text-center text-6xl font-bold">New York Times</h1>
      <h2 class="font-serif my-8 text-center text-3xl font-bold">Best Sellers</h2>
      <book-list></book-list>
    </div>
  </div>`,
  styles: [
    `h1 {
      color: black
    }
    .top-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .content-container{
      max-width: 1000px;

    }`
  ]
})
export class AppComponent {
  title = 'angular-books';
}
