import { Component } from '@angular/core';
import { BlogItem } from '../blog-item';
import { faEdit, faRocket, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  actual: BlogItem = new BlogItem()
  blogIcon = faRocket
  deleteIcon = faTrash
  editIcon = faEdit


  constructor(public service: BlogService, private router: Router, route: ActivatedRoute){
    route.params.subscribe(t=> //objectet ad vissza egy id-vel {id:zgfuzupe}
      
      this.actual = this.service.find(t['id']))
  }

  delete(id:string){
    this.service.delete(id)
    this.service.save()
    this.router.navigate(['list'])
  }

  goToEdit(){
    this.router.navigate(['edit', this.actual.id])
  }

}
