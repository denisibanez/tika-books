import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor() {}
  
  public title = 'tika-books-asteria';
  public msg = {
    title: 'Lendo seu livro',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  }
  public items: any = [
    { url: '../../../assets/images/1.png', class: ''},
    { url: '../../../assets/images/2.png', class: ''},
    { url: '../../../assets/images/3.png', class: ''},
    { url: '../../../assets/images/4.png', class: ''},
    { url: '../../../assets/images/5.png', class: ''},    
  ]
  
  ngOnInit() {  
  }

  onDomChange($event: Event): void {
    const target = $event.target as HTMLTextAreaElement;
    let ref:any;
    if(target.classList.value == 'gallery-cell is-selected') {
      ref = target.attributes[2].value
      console.log(ref)

      switch (ref) {
        case 'index-0':
          this.msg = { 
            title: 'title 1',
            msg: 'msg 1'
          }
          break;
        case 'index-1':
          this.msg = { 
            title: 'title 2',
            msg: 'msg 2'
          }
          break;
        case 'index-2':
          this.msg = { 
            title: 'title 3',
            msg: 'msg 3'
          }
            break;
        case 'index-3':
          this.msg = { 
            title: 'title 4',
            msg: 'msg 4'
          }
          break;
        case 'index-4':
          this.msg = { 
            title: 'title 5',
            msg: 'msg 5'
          }
          break;          
      }
    }
  }
}


