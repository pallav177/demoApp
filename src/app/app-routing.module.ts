import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { PartSearchComponent } from './part-search/part-search.component';

const routes: Routes = [
  { path: "owner-listing", component: OwnerComponent },
  { path: "part-search", component: PartSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
