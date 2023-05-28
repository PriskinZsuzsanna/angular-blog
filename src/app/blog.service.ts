import { Injectable } from '@angular/core';
import { BlogItem } from './blog-item';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  localData: Array<BlogItem> = new Array<BlogItem> ()
  blogItems: Array<BlogItem> = new Array<BlogItem> ()
  isMessage:boolean = false
  message:string = ""
  likeCounter:number = 0
  topRated:BlogItem = new BlogItem()

  constructor() {
    this.load()
   }

  //load
  load(){
    this.localData = JSON.parse(localStorage.getItem("blog") ?? "[]")
    this.blogItems = this.localData
  }

  //add
  addNew(actual:BlogItem){
    this.blogItems.push(actual)
    this.save()
  }


  //save
  save(){
    localStorage.setItem("blog", JSON.stringify(this.blogItems))
  }

  //find by id
  find(id:string): BlogItem{
    //console.log(this.blogItems.filter(item => item.id == id )) //----> {[blog]} objetet ad vissza egy tömbbel
   return this.blogItems.filter(item => item.id == id )[0]
  }

  //update
  update(edited: BlogItem){
    let old = this.find(edited.id);
    old.title = edited.title;
    old.snippet = edited.snippet;
    old.article = edited.article;
    this.save();
  }

  //delete
  delete(id:string){
    this.blogItems = this.blogItems.filter(item => item.id != id)
    this.localData = this.blogItems
  }

  //top rated
  getTopRated(){
    this.blogItems.map(item => {
      if(item.like >= this.likeCounter){
        this.likeCounter = item.like
        this.topRated = item
      } 
      console.log(this.likeCounter)
      console.log(this.topRated)
    })
  }

}
