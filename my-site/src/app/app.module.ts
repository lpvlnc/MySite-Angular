import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { MeComponent } from './components/home/me/me.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { NavComponent } from './components/home/nav/nav.component';
import { ServicesOfferedComponent } from './components/home/services-offered/services-offered.component';
import { ButtonComponent } from './components/button/button.component';
import { MeSocialsComponent } from './components/home/me/me-details/me-socials/me-socials.component';
import { HeaderButtonsComponent } from './components/home/me/header-buttons/header-buttons.component';
import { MeIntroductionComponent } from './components/home/me/me-introduction/me-introduction.component';
import { MeDetailsComponent } from './components/home/me/me-details/me-details.component';
import { AboutCardComponent } from './components/home/about/about-card/about-card.component';
import { ExperienceCardComponent } from './components/home/experience/experience-card/experience-card.component';
import { PortfolioComponent } from './components/home/portfolio/portfolio.component';
import { PortfolioCardComponent } from './components/home/portfolio/portfolio-card/portfolio-card.component';
import { PortfolioCardOverlayComponent } from './components/home/portfolio/portfolio-card-overlay/portfolio-card-overlay.component';
import { TestimonialCardComponent } from './components/home/testimonials/testimonial-card/testimonial-card.component';
import { ContactCardComponent } from './components/home/contact/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    MeComponent,
    TestimonialsComponent,
    NavComponent,
    ServicesOfferedComponent,
    PortfolioComponent,
    ButtonComponent,
    MeSocialsComponent,
    HeaderButtonsComponent,
    MeIntroductionComponent,
    MeDetailsComponent,
    AboutCardComponent,
    ExperienceCardComponent,
    PortfolioCardComponent,
    PortfolioCardOverlayComponent,
    TestimonialCardComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
