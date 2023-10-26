import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { HeroComponent } from './components/hero/hero.component';
import { StoryComponent } from './components/story/story.component';
import { LargeCardProductComponent } from './components/large-card-product/large-card-product.component';
import { SmallCardProductComponent } from './components/small-card-product/small-card-product.component';
import { NewExperienceComponent } from './components/new-experience/new-experience.component';
import { ProductsComponent } from './components/products/products.component';
import { CardProductComponent } from './components/card-product/card-product.component';

@NgModule({
  declarations: [HomeComponent, BookCardComponent, HeroComponent, StoryComponent, LargeCardProductComponent, SmallCardProductComponent, NewExperienceComponent, ProductsComponent, CardProductComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
