import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard, UsuarioGuardAdm } from './guards/usuario.guard';
import { FavsPageModule } from './pages/favs/favs.module';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  // },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'networking',
    loadChildren: () => import('./pages/networking/networking.module').then(m => m.NetworkingPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'favs',
    loadChildren: () => import('./pages/favs/favs.module').then(m => m.FavsPageModule),
    canLoad: [UsuarioGuard]
  },


  {
    path: 'cuenta',
    loadChildren: () => import('./pages/ajustes/ajustes.module').then(m => m.Tab3PageModule)
  },

  // ! Networking
  {
    path: 'chat/:user',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
  },
  // ! Expositores

  {
    path: 'expositores-list',
    loadChildren: () => import('./pages/_admin/_expositores/expositores-list/expositores-list.module')
      .then(m => m.ExpositoresListPageModule),
    canLoad: [UsuarioGuardAdm]
  },

  {
    path: 'expositor-add',
    loadChildren: () => import('./pages/_admin/_expositores/expositores-add/expositores-add.module')
      .then(m => m.ExpositoresAddPageModule),
    canLoad: [UsuarioGuardAdm]
  },
  {
    path: 'expositor-edit/:id',
    loadChildren: () => import('./pages/_admin/_expositores/expositores-edit/expositores-edit.module')
      .then(m => m.ExpositoresEditPageModule),
    canLoad: [UsuarioGuardAdm]
  },

  // ! Conferencistas

  {
    path: 'conferencistas-list',
    loadChildren: () => import('./pages/_admin/_conferencistas/conferencistas-list/conferencistas-list.module')
      .then(m => m.ConferencistasListPageModule),
    canLoad: [UsuarioGuardAdm]
  },

  {
    path: 'conferencista-add',
    loadChildren: () => import('./pages/_admin/_conferencistas/conferencistas-add/conferencistas-add.module')
      .then(m => m.ConferencistasAddPageModule),
    canLoad: [UsuarioGuardAdm]
  },
  {
    path: 'conferencista-edit/:id',
    loadChildren: () => import('./pages/_admin/_conferencistas/conferencistas-edit/conferencistas-edit.module')
      .then(m => m.ConferencistasEditPageModule),
    canLoad: [UsuarioGuardAdm]
  },


  // ! Auditorios

  {
    path: 'auditorios-list',
    loadChildren: () => import('./pages/_admin/_auditorios/auditorios-list/auditorios-list.module')
      .then(m => m.AuditoriosListPageModule),
    canLoad: [UsuarioGuardAdm]
  },

  {
    path: 'auditorios-add',
    loadChildren: () => import('./pages/_admin/_auditorios/auditorios-add/auditorios-add.module')
      .then(m => m.AuditoriosAddPageModule),
    canLoad: [UsuarioGuardAdm]
  },
  {
    path: 'auditorios-edit/:id',
    loadChildren: () => import('./pages/_admin/_auditorios/auditorios-edit/auditorios-edit.module')
      .then(m => m.AuditoriosEditPageModule),
    canLoad: [UsuarioGuardAdm]
  },


  // ! Categorias
  {
    path: 'categoria-add',
    loadChildren: () => import('./pages/_admin/_categorias/categorias-add/categorias-add.module')
      .then(m => m.CategoriasAddPageModule),
    canLoad: [UsuarioGuardAdm]
  },
  {
    path: 'admin-categorias',
    loadChildren: () => import('./pages/_admin/_categorias/categorias-admin/categorias-admin.module')
      .then(m => m.CategoriasAdmPageModule),
    canLoad: [UsuarioGuardAdm]
  },
  {
    path: 'categorias-list',
    loadChildren: () => import('./pages/_admin/_categorias/categorias-list/categorias-list.module')
      .then(m => m.CategoriasListPageModule),
    canLoad: [UsuarioGuardAdm]
  },
  {
    path: 'categorias-edit/:id',
    loadChildren: () => import(
      './pages/_admin/_categorias/categorias-edit/categorias-edit.module').then(m => m.CategoriasEditPageModule),
    canLoad: [UsuarioGuardAdm]
  },

  // ! Etapas
  {
    path: 'etapas/:id',
    loadChildren: () => import(
      './pages/_etapas/etapas-producto/etapas-producto.module').then(m => m.EtapasPageModule)
  },
  {
    path: 'etapa-add/:id',
    loadChildren: () => import(
      './pages/_etapas/etapa-add/etapa-add.module').then(m => m.EtapaAddPageModule)
  },


  // ! User
  {
    path: 'qr',
    loadChildren: () => import('./pages/_usuarios/qr-generator/qr-generator.module').then(m => m.QrGeneratorPageModule),
    canLoad: [UsuarioGuard]
  },

  {
    path: 'login', loadChildren: () => import('./pages/_usuarios/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/_usuarios/profile/profile.module').then(m => m.ProfilePageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./pages/_usuarios/profile_chat/profile_chat.module').then(m => m.ProfileChatPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
