import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  apiUrl = environment.apiUrl;
  query:any = '';

  public cars:any = [];

  constructor(private carService: CarService){}

  ngOnInit(){
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe((res)=>{
      console.log(res);
      this.cars = res;
    });
  }

  search(){
    this.carService.searchCar(this.query).subscribe((res)=>{
      if (res){
        console.log(res);
        this.cars = res;
      }
      else{
        this.getCars();
      }
    });
  }

}
