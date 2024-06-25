/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { GeneratedRoute } from '@elegant-router/types'

export const generatedRoutes: GeneratedRoute[] = [
  {
    name: '403',
    path: '/403',
    component: 'layout.base$view.403',
    meta: {
      title: '403',
      i18nKey: 'route.403',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: 'layout.base$view.404',
    meta: {
      title: '404',
      i18nKey: 'route.404',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '500',
    path: '/500',
    component: 'layout.base$view.500',
    meta: {
      title: '500',
      i18nKey: 'route.500',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'archive',
    path: '/archive',
    component: 'layout.base$view.archive',
    meta: {
      title: 'archive',
      icon: 'mynaui:archive',
      i18nKey: 'route.archive',
      order: 10
    }
  },
  {
    name: 'home',
    path: '/home',
    component: 'layout.base$view.home',
    meta: {
      title: 'home',
      i18nKey: 'route.home',
      icon: 'mynaui:home',
      order: 1
    }
  },
  {
    name: 'login',
    path: '/login/:module(pwd-login|register|reset-pwd|game-start)?',
    component: 'layout.blank$view.login',
    meta: {
      title: 'login',
      i18nKey: 'route.login',
      constant: true,
      hideInMenu: true
    },
    props: true
  },
  {
    name: 'setting',
    path: '/setting',
    component: 'layout.base',
    meta: {
      title: 'setting',
      icon: 'carbon:settings-adjust',
      i18nKey: 'route.setting',
      order: 999
    },
    children: [
      {
        name: 'setting_about',
        path: '/setting/about',
        component: 'view.setting_about',
        meta: {
          title: 'setting_about',
          icon: 'mynaui:info-square',
          i18nKey: 'route.setting_about'
        }
      },
      {
        name: 'setting_system',
        path: '/setting/system',
        component: 'view.setting_system',
        meta: {
          title: 'setting_system',
          icon: 'mynaui:cog-one',
          i18nKey: 'route.setting_system'
        }
      },
      {
        name: 'setting_theme',
        path: '/setting/theme',
        component: 'view.setting_theme',
        meta: {
          title: 'setting_theme',
          icon: 'majesticons:color-swatch-line',
          i18nKey: 'route.setting_theme'
        }
      }
    ]
  }
];
