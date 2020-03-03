import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-repository-component',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  @Input('mode') mode: "preview" | "full" = "preview"
  @Input("repository") repository;


  // @Output() select = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  isFull() {
    return this.mode === 'full'
  }
  isPreview() {
    return this.mode === 'preview'
  }
}
