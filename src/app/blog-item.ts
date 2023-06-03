import { Guid } from "guid-typescript";

export class BlogItem {
    title:string = "";
    article:string = "";
    snippet:string = "";
    like: number = 0;
    picture: string = "";
    id:string = Guid.create().toString();
    comment?:Array<Object> = [{"name": "Moderator", "comment": "Leave a comment!"}]
}
