import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserModule } from './user/user.module';
import { CreateComponent } from './bikes/create/create.component';
import { CatalogComponent } from './bikes/catalog/catalog.component';
import { DetailsComponent } from './bikes/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CatalogComponent,
    DetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    UserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
