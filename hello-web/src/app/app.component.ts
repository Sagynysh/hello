import { Component } from '@angular/core';
import { HttpService} from './http.service';
import {User} from './models/User.model';
import {Result} from './models/Result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpService]
})
export class AppComponent {
title = 'AngularHelloWorld';
result:Object;
constructor(private httpService: HttpService){}

  sayHelloWorld(text){
  	let user = new User(text);
  	this.httpService.postData(user).subscribe(
  		data=>{
  			console.log('Response from back '+data['result']);
  			this.result = data['result'];
  		}),
  		err=>{
  			console.log('Error!')

  		}


  }
}
