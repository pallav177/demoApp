import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { PartSearchComponent } from './part-search/part-search.component';
import { PartInfoComponent } from './part-info/part-info.component';

const routes: Routes = [
  { path: "owner-listing", component: OwnerComponent },
  { path: "part-search", component: PartSearchComponent },
  { path: "part-info", component: PartInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
