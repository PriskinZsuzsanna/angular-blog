import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogItem } from '../blog-item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  actual: BlogItem = new BlogItem()
  constructor(public service: BlogService, private router: Router, route: ActivatedRoute){
    route.params.subscribe(t => {
      this.actual = this.service.find(t['id'])
    })
  }

  saveChanges(actual:BlogItem){
    this.service.update(actual)
    this.service.save()
    this.router.navigate(['list'])
    this.service.message = "Changes Saved"
    this.service.isMessage = true
    setTimeout(()=> {
      this.service.isMessage = false
    }, 3000)
  }
}
