import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './guards/authorized.guard';
import { FramePage } from './pages/shared/frame/frame.page';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/account/login/login.module').then(
        (x) => x.LoginPageModule
      ),
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./pages/shared/frame/frame.module').then(
  //       (x) => x.FramePageModule
  //     ),
  // },
  {
    path: '',
    component: FramePage,
    canActivate: [AuthorizedGuard],
    children: [
      //{ path: '', loadChildren: './pages/home/home.module#HomePageModule' },
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((x) => x.HomePageModule),
      },
      //loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(x => x.CustomerAppSupplierModule)
      {
        path: 'orders',
        loadChildren: () =>
          import('./pages/store/orders/orders.module').then(
            (x) => x.OrdersPageModule
          ),
      },
      {
        path: 'orders/:number',
        loadChildren: () =>
          import('./pages/store/order-details/order-details.module').then(
            (x) => x.OrderDetailsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
