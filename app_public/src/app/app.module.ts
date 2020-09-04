import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WellListComponent } from './well-list/well-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WellListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [WellListComponent]
})
export class AppModule { }
