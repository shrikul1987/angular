import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpsgameComponent } from './rpsgame/rpsgame.component';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RpsgameComponent,
    FizzbuzzComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    RouterModule.forRoot(
      [
        {path: '',component:AppComponent },
        {path:'fizzbuzz',component:FizzbuzzComponent},
        {path:'RPSGame', component:RpsgameComponent}

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
