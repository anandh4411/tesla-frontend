import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  apiUrl = environment.apiUrl;
  id:any;
  car:any;

  constructor(private route: ActivatedRoute, private carService: CarService){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.carService.getCarDetails(this.id).subscribe((res)=>{
      this.car = res;
    });
  }

}
