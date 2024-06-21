/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { RouteComponent } from "vue-router";
import type { LastLevelRouteKey, RouteLayout } from "@elegant-router/types";

import BaseLayout from "@renderer/layouts/base-layout/index.vue";
import BlankLayout from "@renderer/layouts/blank-layout/index.vue";

export const layouts: Record<RouteLayout, RouteComponent | (() => Promise<RouteComponent>)> = {
  base: BaseLayout,
  blank: BlankLayout,
};

export const views: Record<LastLevelRouteKey, RouteComponent | (() => Promise<RouteComponent>)> = {
  403: () => import("@renderer/views/_error/403/index.vue"),
  404: () => import("@renderer/views/_error/404/index.vue"),
  500: () => import("@renderer/views/_error/500/index.vue"),
  archive: () => import("@renderer/views/archive/index.vue"),
  home: () => import("@renderer/views/home/index.vue"),
  login: () => import("@renderer/views/login/index.vue"),
  setting_about: () => import("@renderer/views/setting/about/index.vue"),
  setting_system: () => import("@renderer/views/setting/system/index.vue"),
};
