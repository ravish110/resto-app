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
  addRestaurent= new FormGroup({
    name: new FormControl(' '),
    email: new FormControl(' '),
    restaurent: new FormControl(' ')
  })
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  creatResto() {
    // console.log(this.addRestaurent.value);
    this.resto.addResto(this.addRestaurent.value).subscribe((result)=>{
      this.alert = true;
      this.addRestaurent.reset({});
      console.log('get data from service', result)
    })
  }
  closeAlert(){
    this.alert =false;
  }

}
