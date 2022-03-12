import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'codigo',
    loadChildren: () => import('./pages/codigo/codigo.module').then( m => m.CodigoPageModule)
  },
  {
    path: 'inicio-d',
    loadChildren: () => import('./pages/inicio-d/inicio-d.module').then( m => m.InicioDPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'inicio-farma',
    loadChildren: () => import('./pages/inicio-farma/inicio-farma.module').then( m => m.InicioFarmaPageModule)
  },
  {
    path: 'registro-dos',
    loadChildren: () => import('./pages/registro-dos/registro-dos.module').then( m => m.RegistroDosPageModule)
  },
  {
    path: 'viaje-d',
    loadChildren: () => import('./pages/viaje-d/viaje-d.module').then( m => m.ViajeDPageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pages/pagos/pagos.module').then( m => m.PagosPageModule)
  },
  {
    path: 'usuario-d',
    loadChildren: () => import('./pages/usuario-d/usuario-d.module').then( m => m.UsuarioDPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/cliente/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'inicio-c',
    loadChildren: () => import('./pages/cliente/inicio-c/inicio-c.module').then( m => m.InicioCPageModule)
  },
  {
    path: 'registro-delivery',
    loadChildren: () => import('./pages/registro-delivery/registro-delivery.module').then( m => m.RegistroDeliveryPageModule)
  },
  {
    path: 'registro-opciones',
    loadChildren: () => import('./pages/registro-opciones/registro-opciones.module').then( m => m.RegistroOpcionesPageModule)
  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./pages/registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
  },
  {
    path: 'codigo-cliente',
    loadChildren: () => import('./pages/codigo-cliente/codigo-cliente.module').then( m => m.CodigoClientePageModule)
  },
  {
    path: 'pedidos-cliente',
    loadChildren: () => import('./pages/pedidos-cliente/pedidos-cliente.module').then( m => m.PedidosClientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
