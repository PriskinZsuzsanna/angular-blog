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
  latest: BlogItem = new BlogItem ()
  isPopupOpen: boolean = false
  newCommentName:string = ""
  newCommentText:string = ""
  newComment: Object = {"name": this.newCommentName, "comment": this.newCommentText}

  constructor() {
    this.load()
    this.getLatest()
   }

  //load
  load(){
    this.localData = JSON.parse(localStorage.getItem("blog") ?? "[]")
    this.blogItems = this.localData
  }

  //add
  addNew(actual:BlogItem){
    console.log(actual)
    this.blogItems.push(actual)
    this.save()
    this.getLatest()
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
    this.likeCounter = 0
    this.blogItems.map(item => {
      if(item.like > this.likeCounter){
        this.likeCounter = item.like
        this.topRated = item
      } 
    })
  }

  getLatest(){
      this.latest = this.blogItems[this.blogItems.length -1] || {}
  }

  openPopup(id:string){
    let actual = this.find(id)
    this.isPopupOpen = !this.isPopupOpen
  }

  saveNewComment(id:string){
    let actual = this.find(id)
    this.newCommentName = this.newCommentName
    this.newCommentText = this.newCommentText
    this.newComment = {"name" : this.newCommentName, "comment": this.newCommentText}
    console.log(this.newCommentName, this.newCommentText, this.newComment)
    actual.comment?.push(this.newComment)
    console.log(actual, actual.comment)
    this.newCommentName = ""
    this.newCommentText = ""
    this.newComment = new Object ()
    this.isPopupOpen = false
    this.save()
  }


  /*updateWithComment(edited: BlogItem){
    let old = this.find(edited.id);
    old.title = edited.title;
    old.snippet = edited.snippet;
    old.article = edited.article;
    //old.name = edited.name
    //old.commentText = edited.commentText
    old.comment = {"name": actual.name, comment:actual.commentText}
    //this.save();
  }*/

 

}
