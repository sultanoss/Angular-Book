import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input() book!: Book;  // Property Binding
  @Output() showListEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getRating(num:number){
    return new Array(num)
  }

  showBookList(){
    this.showListEvent.emit()
  }

}
