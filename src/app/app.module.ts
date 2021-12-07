import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LaureatesComponent } from './laureates.component';
import { LaureateComponent } from './laureate.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
import { NavComponent } from './nav.component';
import { PrizesComponent } from './prizes.component';
import { PrizeComponent } from './prize.component';
import { CategoryComponent } from './category.component';
import { UniversitiesComponent } from './universities.component';
import { AffiliatedComponent } from './affiliated.component';
import { AffiliatedCountryComponent } from './affiliated-country.component';
import { CountryComponent } from './country.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { A11yModule } from '@angular/cdk/a11y';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { SearchComponent } from './search.component';

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
  },
  {
    path: 'prizes',
    component: PrizesComponent
  },
  {
    path: 'prizes/:id',
    component: PrizeComponent
  },
  {
    path: 'prizes/category/:category',
    component: CategoryComponent
  },
  {
    path: 'laureates/universities/top20',
    component: UniversitiesComponent
  },
  {
    path: 'laureates/universities/:university',
    component: AffiliatedComponent
  },
  {
    path: 'laureates/countries/top30',
    component: CountryComponent
  },
  {
    path: 'laureates/countries/:countryCode',
    component: AffiliatedCountryComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'laureates/search/:search',
    component: SearchComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaureatesComponent,
    LaureateComponent,
    NavComponent,
    PrizesComponent,
    PrizeComponent,
    CategoryComponent,
    UniversitiesComponent,
    AffiliatedComponent,
    CountryComponent,
    AffiliatedCountryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AuthModule.forRoot( {
      domain: 'dev-7smlvzj3.eu.auth0.com',
      clientId: 'av1fHbzphSYq0NKXVjVBsuWHpaESogkg'
    }),
    MatGridListModule,
    A11yModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent],
})
export class AppModule { }
