import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CarDetailsComponent } from './modules/car-details/car-details.component';
import { ListingComponent } from './modules/listing/listing.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'car/details',
    component: CarDetailsComponent,
    loadChildren: () =>
      import('./modules/car-details/car-details.module').then((m) => m.CarDetailsModule),
  },
  {
    path: 'car/listing',
    component: ListingComponent,
    loadChildren: () =>
      import('./modules/listing/listing.module').then((m) => m.ListingModule),
  },
  {
    path: 'about',
    component: AboutComponent,
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    component: ContactComponent,
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
