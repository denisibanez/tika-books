import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public title = 'tika-books-asteria';
  public items: any = [
    { url: '../../../assets/images/1.png', class: ''},
    { url: '../../../assets/images/2.png', class: ''},
    { url: '../../../assets/images/3.png', class: ''},
    { url: '../../../assets/images/4.png', class: ''},
    { url: '../../../assets/images/5.png', class: ''},    
  ]
  
  ngOnInit() {  
  }
}


