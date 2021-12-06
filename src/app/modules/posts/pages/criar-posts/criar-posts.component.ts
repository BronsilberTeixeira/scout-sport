import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-posts',
  templateUrl: './criar-posts.component.html',
  styleUrls: ['./criar-posts.component.scss']
})
export class CriarPostsComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  abrirListarPost(){
    this.router.navigate(['listarPosts']);
  }
}
