import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts = [
    {
      title: "test post 1 ",
      content: "This first post content "
    },
    {
      title: "test post 2 ",
      content: "This second post content "
    },
    {
      title: "test post 3 ",
      content: "This third post content "
    },
  ]

}
