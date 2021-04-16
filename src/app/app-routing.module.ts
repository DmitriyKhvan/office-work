import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { IncomingDocumentsComponent } from './incoming-documents/incoming-documents.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OutgoingDocumentsComponent } from './outgoing-documents/outgoing-documents.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'incomingDocuments', pathMatch: 'full' },
      { path: 'incomingDocuments', component: IncomingDocumentsComponent },
      { path: 'outgoingDocuments', component: OutgoingDocumentsComponent },
      { path: 'notifications', component: NotificationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
