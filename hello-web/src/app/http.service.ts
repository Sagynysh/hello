import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{
    url = 'http://localhost:8080/getHelloWorld';
    constructor(private http: HttpClient){ }
     
    postData(text){
    	console.log('Request text : '+text.name);
        return this.http.post(this.url, text); 
    }
}
