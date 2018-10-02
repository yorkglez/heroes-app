import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router'; //Import router
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Observable, of, throwError} from "rxjs";
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];
  public headers: Headers; host;
  public heroes$: Observable<Heroe[]>

  constructor(private _heroesService:HeroesService,private router:Router,public http: HttpClient) {
     this.host = "http://localhost:80/api/";
     this.headers = new Headers();
     //this.headers.append('Content-Type', 'application/json'
   }

  ngOnInit() {
      /*Call getData of _heroesService, and conver data to array*/
      this._heroesService.getData().subscribe(data=>{this.heroes = data});
  }


  insertHeroe(){
    //return this.http.post('http://api.malastareas.com.mx/api/insertData.php',JSON.stringify(this.heroes))  .subscribe(res => console.log(res));
  }
  viewHeroe(index:number){
    this.router.navigate(['/heroe',index]); //redirect to heroe
  }


}
