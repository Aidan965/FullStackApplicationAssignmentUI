import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LaureatesComponent } from './laureates.component';
import { LaureateComponent } from './laureate.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

var routes: any = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'laureates',
    component: LaureatesComponent
  },
  {
    path: 'laureates/:id',
    component: LaureateComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaureatesComponent,
    LaureateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
