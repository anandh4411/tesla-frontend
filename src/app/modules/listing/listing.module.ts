import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ListingModule { }
