import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [HomeComponent, BookCardComponent, HeroComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
