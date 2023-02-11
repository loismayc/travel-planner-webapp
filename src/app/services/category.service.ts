import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../models/categories';

const httpOptions = {
  headers: new HttpHeaders({
      "Content-Type": "application/json",
  }),
};
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrlCategories = "http://localhost:5137/categories";


  constructor(private http: HttpClient) {
    console.log("constructor");
}

getCategory = (id: number): Observable<Categories> => {
  let item: Observable<Categories>;

  item = this.http.get<Categories>(
      `${this.apiUrlCategories}/${id}`,
      httpOptions
  );

  return item;
};

getAll = (): Observable<Categories[]> => {
  return this.http.get<Categories[]>(this.apiUrlCategories);
};

}