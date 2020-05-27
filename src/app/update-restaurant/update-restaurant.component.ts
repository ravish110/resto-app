import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.sass']
})
export class UpdateRestaurantComponent implements OnInit {
  alert:boolean = false;
  editRestaurent= new FormGroup({
    name: new FormControl(' '),
    email: new FormControl(' '),
    restaurent: new FormControl(' ')
  })
  constructor(private resto:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRestaurent= new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        restaurent: new FormControl(result['restaurent'])
      })
    })
  }
  updateResto(){
    this.resto.updateResto(this.router.snapshot.params.id, this.editRestaurent.value).subscribe((result)=>{
      console.log(result, "data updated successfull")
      this.alert=true;
    })
  }
  closeAlert(){
    this.alert=false;
  }

}
