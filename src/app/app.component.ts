import { Component } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import { BlogService } from './blog.service';
import { BlogItem } from './blog-item';
import { Router } from '@angular/router';

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
  blogIcon = faRocket


  constructor(public service: BlogService, private router: Router){
    this.service.getTopRated()
  }

  toggleMenu(){
    this.open = !this.open
  }

  getDetails(item: BlogItem){
    console.log(item)
    this.router.navigate(['details', item.id])
  }

  
}
