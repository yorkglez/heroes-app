import { Component, OnInit } from '@angular/core';
import {Heroe} from '../../services/heroes.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-addheroe',
  templateUrl: './addheroe.component.html',
  styleUrls: ['./addheroe.component.css']
})
export class AddheroeComponent implements OnInit {
   model= {};
  constructor( private http:HttpClient) {

  }

  ngOnInit() {
  }
  onSubmit() {
  //console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.http.post('http://api.malastareas.com.mx/api/insertData.php',JSON.stringify(this.model)).subscribe(res => console.log(res));
  }
}
