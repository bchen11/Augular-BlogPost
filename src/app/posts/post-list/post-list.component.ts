import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-post-list',
    templateUrl:'./post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
    // posts = [
    //     {title: 'First Post', content: "this is the first post"},
    //     {title: '2nd Post', content: "this is the first post"},
    //     {title: '3rd Post', content: "this is the first post"},
    // ]

   @Input() posts = [];
}