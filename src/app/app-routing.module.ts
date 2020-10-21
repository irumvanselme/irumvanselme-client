import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
