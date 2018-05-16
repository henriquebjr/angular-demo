import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boo',
  templateUrl: './boo.component.html'
})
export class BooComponent {
  booText: string = 'piada do dia eh...';
  disableButton: boolean = true;
  showJoke: boolean = false;
  joke: string = 'O que uma galinha perguntou para outra?';
  jokeAnswer: string = '';

  ngOnInit() {
    setInterval(() => {this.disableButton = false;}, 2000);
  }

  onClick(event: Event) {
    this.showJoke = !this.showJoke;
  }
}
