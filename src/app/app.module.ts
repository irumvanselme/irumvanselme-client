import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { ServicesComponent } from './components/home/services/services.component';
import { ServiceComponent } from './components/home/service/service.component';
import { QuestionsComponent } from './components/home/questions/questions.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HeaderComponent } from './components/home/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    ServiceComponent,
    QuestionsComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
