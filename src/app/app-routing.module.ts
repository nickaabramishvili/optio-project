import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'revenue-analysis',
    pathMatch: 'full',
  },
  {
    path: 'revenue-analysis',
    loadChildren: () =>
      import('./revenue-analysis/revenue-analysis.module').then(
        (m) => m.RevenueAnalysisModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
