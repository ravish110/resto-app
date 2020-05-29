import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.sass']
})
export class AddRestaurantComponent implements OnInit {
  alert:boolean = false;
  addRestaurant= new FormGroup({
    name: new FormControl(' '),
    email: new FormControl(' '),
    restaurant: new FormControl(' ')
  })
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  creatResto() {
    // console.log(this.addRestaurant.value);
    this.resto.addResto(this.addRestaurant.value).subscribe((result)=>{
      this.alert = true;
      this.addRestaurant.reset({});
      console.log('get data from service', result)
    })
  }
  closeAlert(){
    this.alert =false;
  }

}
