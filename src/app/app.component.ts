import { Component } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faClose} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-blog';
  openMenu = faBars
  closeMenu = faClose
  open: boolean = false

  constructor(){

  }

  toggleMenu(){
    this.open = !this.open
   
  }
}
