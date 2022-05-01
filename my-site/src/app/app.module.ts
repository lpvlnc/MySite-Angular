import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicesOfferedComponent } from './components/services-offered/services-offered.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { HeaderButtonsComponent } from './components/header/header-buttons/header-buttons.component';
import { HeaderSocialsComponent } from './components/header/header-socials/header-socials.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    TestimonialsComponent,
    NavComponent,
    ServicesOfferedComponent,
    MyWorkComponent,
    HeaderButtonsComponent,
    HeaderSocialsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
