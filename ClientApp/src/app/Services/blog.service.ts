import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  options = {
    headers: new HttpHeaders({
      Accept: 'multipart/form-data',
    }),
  };


  constructor(private http:HttpClient) { }


  addBlog(blog:any){

    const BASE_URL="http://localhost:5000";
    return this.http.post(`${BASE_URL}/admin/add-blog`,blog,this.options);
  }

}
