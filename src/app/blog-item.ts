import { Guid } from "guid-typescript";

export class BlogItem {
    title:string = "";
    article:string = "";
    snippet:string = "";
    like: number = 0;
    id:string = Guid.create().toString();
}
