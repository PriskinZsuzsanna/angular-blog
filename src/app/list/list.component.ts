import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { BlogItem } from '../blog-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
  blogIcon = faRocket
  filterText: string = ""

  constructor(public service: BlogService, private router: Router){
  }

  getDetails(item: BlogItem){
    console.log(item)
    this.router.navigate(['details', item.id])
  }

  filter(){
    this.service.blogItems = this.service.localData;
    this.service.blogItems = this.service.blogItems.filter(item => (item.snippet).toLowerCase().includes(this.filterText))
  }

}
