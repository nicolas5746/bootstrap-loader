import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxUiLoaderModule.forRoot({
      bgsColor: 'skyblue',
      bgsOpacity: 0.5,
      bgsPosition: 'bottom-right',
      bgsSize: 60,
      bgsType: 'ball-spin-clockwise',
      blur: 5,
      delay: 0,
      fastFadeOut: true,
      fgsColor: 'skyblue',
      fgsPosition: 'center-center',
      fgsSize: 60,
      fgsType: 'ball-spin-clockwise',
      gap: 24,
      logoPosition: 'center-center',
      logoSize: 120,
      logoUrl: '',
      masterLoaderId: 'master',
      overlayBorderRadius: '0',
      overlayColor: 'black',
      pbColor: 'skyblue',
      pbDirection: 'ltr',
      pbThickness: 3,
    }),
    RouterModule.forRoot([]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}