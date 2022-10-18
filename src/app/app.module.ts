import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { RevenueAnalysisReducer } from './store/reducer/revenue-analysis.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RevenueAnalysisEffects } from './store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ revenue_analysis: RevenueAnalysisReducer }),
    EffectsModule.forRoot([RevenueAnalysisEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // consoleshi ramdeni chanweri michvenos
    }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
