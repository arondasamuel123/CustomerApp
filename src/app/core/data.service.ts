import { Injectable } from "@angular/core";
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const POST_URL =`${environment.baseUrl}posts`;

@Injectable
({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient : HttpClient) {



  }

  getPosts(): Observable<any>{

    return this.httpClient.get(POST_URL);
  }
}
