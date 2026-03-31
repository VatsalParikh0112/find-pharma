import { ServerRoute, RenderMode } from '@angular/ssr';

export const commonServerRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'common/home',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'common/about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'common/contact',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'common/follow-us',
    renderMode: RenderMode.Prerender,
  },
];