import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL= 'http://localhost:3000/resto'
  constructor(private _http: HttpClient) { }
  getRestoList(){
    return this._http.get(this.URL);
  }
  addResto(data){
    return this._http.post(this.URL, data);
  }
  deleteResto(id){
    return this._http.delete(`${this.URL}/${id}`)
  }
  getCurrentData(id){
    return this._http.get(`${this.URL}/${id}`)
  }
  updateResto(id,data){
    return this._http.put(`${this.URL}/${id}`,data)
  }
}
