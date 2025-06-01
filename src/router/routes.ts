import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/tratamentos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TreatmentsPage.vue') }],
  },

  {
    path: '/contato',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContactPage.vue') }],
  },

  {
    path: '/sobre',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AboutPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
