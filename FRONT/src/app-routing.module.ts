import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './app/welcome-mod/welcome-page/welcome-page.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  // redirect to home page without spécific route
  { path: "", redirectTo: "/welcome", pathMatch: "full" },

  { path: 'welcome', component: WelcomePageComponent },
  { path: 'not-found', component: PageNotFoundComponent },

  { path: 'user', loadChildren: () => import('./app/customer-account-mod/customer-account.module').then(m => m.CustomerAccountModule) },
  //{ path: 'user', loadChildren: () => import('./app/customer-account-mod/customer-account.module').then(m => m.CustomerAccountModule) },
  { path: 'catalog', loadChildren: () => import('./app/catalog-mod/catalog-mod.module').then(m => m.CatalogModModule) },
  { path: 'basket', loadChildren: () => import('./app/basket-mod/basket-mod.module').then(m => m.BasketModModule) },
  { path: "**", redirectTo: "/not-found", pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
