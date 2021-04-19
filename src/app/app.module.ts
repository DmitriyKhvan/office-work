import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBlockComponent } from './shared/components/search-block/search-block.component';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';
import { IncomingDocumentsComponent } from './incoming-documents/incoming-documents.component';
import { OutgoingDocumentsComponent } from './outgoing-documents/outgoing-documents.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    SearchBlockComponent,
    MainMenuComponent,
    IncomingDocumentsComponent,
    OutgoingDocumentsComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
