import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) { }

  public getPostById(id: number) {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts/' + id).subscribe(
      res => {
        for (let obj in res) {
          console.log(obj, res[obj]);
          return obj;
        }
      },
      error => {
        console.log(error);
      });
  }
}
