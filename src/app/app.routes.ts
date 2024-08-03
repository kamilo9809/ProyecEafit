import { Routes } from '@angular/router';
import { loginAccessGuard } from './modules/guards/login-access.guard';

export const routes: Routes = [
  {
    path: 'public',
    title: 'Ruta publica',
    loadComponent: () =>
      import('./pages/public-routes/public-routes.component').then(
        (m) => m.PublicRoutesComponent
      ),
    children: [
      {
        path: 'inicio',
        title: 'Inicio',
        loadComponent: () =>
          import('./pages/inicio/inicio.component').then(
            (m) => m.InicioComponent
          ),
        children: [],
      },
      {
        path: 'servicios',
        title: 'Servicios',
        loadComponent: () =>
          import('./pages/servicios/servicios.component').then(
            (m) => m.ServiciosComponent
          ),
        children: [
          {
            path: 'consultorias',
            title: 'Consultorías e implementación de proyectos',
            loadComponent: () =>
              import(
                './pages/servicios/pages/consultorias/consultorias.component'
              ).then((m) => m.ConsultoriasComponent),
          },
          {
            path: 'estudiantes',
            title: 'Estudiantes',
            loadComponent: () =>
              import(
                './pages/servicios/pages/estudiantes/estudiantes.component'
              ).then((m) => m.EstudiantesComponent),
          },
        ],
      },
      {
        path: 'oportunidades',
        title: 'Oportunidades',
        loadComponent: () =>
          import('./pages/oportunidades/oportunidades.component').then(
            (m) => m.OportunidadesComponent
          ),
        children: [
          {
            path: 'noticias',
            title: 'Noticias',
            loadComponent: () =>
              import(
                './pages/oportunidades/pages/noticias/noticias.component'
              ).then((m) => m.NoticiasComponent),
          },
          {
            path: 'contacto',
            title: 'Contactanos',
            loadComponent: () =>
              import(
                './pages/oportunidades/pages/contacto/contacto.component'
              ).then((m) => m.ContactoComponent),
          },
        ],
      },
      {
        path: 'nosotros',
        title: 'Nosotros',
        loadComponent: () =>
          import('./pages/nosotros/nosotros.component').then(
            (m) => m.NosotrosComponent
          ),
        children: [
          {
            path: 'analitica-de-datos',
            title: 'Analítica de datos',
            loadComponent: () =>
              import(
                './pages/nosotros/pages/analitica/analitica.component'
              ).then((m) => m.AnaliticaComponent),
          },
          {
            path: 'intervencion-socio-emocional',
            title: 'Intervención socio emocional',
            loadComponent: () =>
              import(
                './pages/nosotros/pages/intervencion/intervencion.component'
              ).then((m) => m.IntervencionComponent),
          },
          {
            path: 'comunicaciones',
            title: 'Comunicaciones',
            loadComponent: () =>
              import(
                './pages/nosotros/pages/comunicaciones/comunicaciones.component'
              ).then((m) => m.ComunicacionesComponent),
          },
        ],
      },
      {
        path: 'ingresa',
        title: 'Ingresa',
        loadComponent: () =>
          import('./pages/../modules/auth/login/login.component').then(
            (m) => m.LoginComponent
          ),
        children: [],
      },
      {
        path: 'registrate',
        title: 'Registrate',
        loadComponent: () =>
          import('./pages/../modules/auth/registro/registro.component').then(
            (m) => m.RegistroComponent
          ),
        children: [],
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'private',
    title: 'private',
    canActivate: [loginAccessGuard],
    loadComponent: () =>
      import('./modules/users/user.component').then((m) => m.UserComponent),
    children: [
      {
        path: 'home',
        title: 'Home',
        loadComponent: () =>
          import('./modules/users/pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'favoritos',
        title: 'Favoritos',
        loadComponent: () =>
          import('./modules/users/pages/favoritos/favoritos.component').then(
            (m) => m.FavoritosComponent
          ),
      },
      {
        path: 'administrador',
        title: 'Administrador',
        loadComponent: () =>
          import('./modules/users/pages/admin/admin.component').then(
            (m) => m.AdminComponent
          ),
        children: [
          {
            path: 'lista-usuarios',
            title: 'Usuarios',
            loadComponent: () =>
              import(
                './modules/users/pages/admin/pages/list-users/list-users.component'
              ).then((m) => m.ListUsersComponent),
          },
          {
            path: 'lista-oportunidades',
            title: 'Oportunidades',
            loadComponent: () =>
              import(
                './modules/users/pages/admin/pages/list-oportunidades/list-oportunidades.component'
              ).then((m) => m.ListOportunidadesComponent),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: 'public/inicio',
    pathMatch: 'full',
  },
];
