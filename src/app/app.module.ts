import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChartsComponent } from './charts/charts.component';
import { MapsComponent } from './maps/maps.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterseptorTokenService } from './interseptor-token.service';
import { NgChartsModule  } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { LineChartComponent } from './line-chart/line-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChartsComponent,
    MapsComponent,
    NotFoundComponent,
    NavbarComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7ZcK-w0-xUwYgu22YQoRNb8cUiqB8yss'
    })
    
    //
  ],
  providers: [
    {
   provide:HTTP_INTERCEPTORS,
    useClass:InterseptorTokenService,
    multi:true
  }
],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
