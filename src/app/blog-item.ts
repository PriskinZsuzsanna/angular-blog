import { Guid } from "guid-typescript";

export class BlogItem {
    title:string = "";
    article:string = "";
    snippet:string = "";
    id:string = Guid.create().toString();
}
