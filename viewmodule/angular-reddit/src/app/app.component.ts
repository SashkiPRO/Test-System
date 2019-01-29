import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  addArticle(title:HTMLInputElement, link:HTMLInputElement){
    console.log(`Adding article: ${title.value}`);
    return false;
  }
}
