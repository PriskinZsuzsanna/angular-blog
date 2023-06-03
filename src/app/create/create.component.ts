import { Component } from '@angular/core';
import { BlogItem } from '../blog-item';
import { Action } from 'rxjs/internal/scheduler/Action';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  actual = new BlogItem ()

  constructor(public service: BlogService, private router: Router){

  }

  //create
  create(actual:BlogItem){
    console.log(actual)
    this.service.addNew(actual)
    this.actual = new BlogItem ()
    this.router.navigate(['list'])
  }

  upload(event: any){
    let file : File = event.target?.files[0];
    const reader = new FileReader();
    reader.onload = (e:any) => {
      this.actual.picture = e.target.result;
    }
    reader.readAsDataURL(file);
  }
}
