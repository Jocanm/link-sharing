import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const AuthLayout = () => import("@/modules/auth/layout/AuthLayout.vue");
const Login = () => import("@/modules/auth/components/Login.vue");
const Register = () => import("@/modules/auth/components/Register.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/auth",
    redirect: "/auth/login",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "register",
        name: "Register",
        component: Register,
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