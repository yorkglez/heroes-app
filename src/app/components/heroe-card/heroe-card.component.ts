import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router'; //Import router
@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;
  @Output() heroeSelected: EventEmitter<number>; //Output with emitter type number for index of heroe
  constructor(private router:Router) {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit() {
  }
  viewHeroe(index:number){
    // this.heroeSelected.emit(this.index); //emiit heroe
    this.router.navigate(['/heroe',this.index]); //redirect to heroe
  }
}
