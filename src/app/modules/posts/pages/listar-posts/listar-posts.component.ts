import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html',
  styleUrls: ['./listar-posts.component.scss']
})
export class ListarPostsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarPost(){
    this.router.navigate(['criarPosts']);
  }
}
