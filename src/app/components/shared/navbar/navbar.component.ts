import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; //Import router
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  searchHeroe(ter:string){
    this.router.navigate(['/search',ter]);
  }
}
