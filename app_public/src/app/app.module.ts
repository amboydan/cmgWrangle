import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WellListComponent } from './well-list/well-list.component';

@NgModule({
  declarations: [
    WellListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [WellListComponent]
})
export class AppModule { }
