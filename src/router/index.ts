import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/auth",
    redirect: "/auth/login",
    component: () => import("@/modules/auth/layout/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/modules/auth/components/Login.vue"),
      }
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/auth",
  }
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})