import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { EditVideoComponent } from './components/edit-video/edit-video.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddVideoComponent,
    EditVideoComponent,
    VideoListComponent,
    VideoDetailComponent,
    LoginComponent,
    SignupComponent,
    SettingsComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
