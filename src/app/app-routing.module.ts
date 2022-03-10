import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { InvestorComponent } from './pages/investor/investor.component';
import { NewsComponent } from './pages/news/news.component';
import { CarrerComponent } from './pages/carrer/carrer.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [

  {
  path: '',
  component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'investor',
    component: InvestorComponent
  },
  {
    path: 'plus-news',
    component: NewsComponent
  },
  {
    path: 'carrer',
    component: CarrerComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
