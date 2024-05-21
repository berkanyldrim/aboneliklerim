import {
  createRouter,
  RouteRecordRaw,
  NavigationGuardNext,
  createWebHistory,
  RouteLocationNormalized,
} from "vue-router";

import AppLayout from "@/layout/AppLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: AppLayout,
    children:[
    {
      path: "/",
      name: "dashboard",
      meta: {
        type: "dashboard",
      },
      component: () => import("@/views/Dashboard.vue"),
    },
    {
      path: "/subscriptions",
      name: "subscriptions",
      meta: {
        type: "subscriptions",
      },
      component: () => import("@/views/Subscriptions.vue"),
    },

    ]
  },
  {
    path: "/login",
    name: "login",
    meta: {
      type: "login",
    },
    component: () => import("@/views/Singin.vue"),
  },
  {
    path: "/singup",
    name: "singup",
    meta: {
      type: "singup",
    },
    component: () => import("@/views/Singup.vue"),
  },
  {
    path:"/forgot-password",
    name:"forgot-password",
    component:()=>import("@/views/ForgotPassword.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const token = localStorage.getItem("token");
    if (to.meta.type === "login" && token && token !== "undefined" && token !== "null" && token !== "") { 
      next({ name: "dashboard" });
      return;
    }

    if (to.meta.type === "dashboard" && !token) {
      next({ name: "login" });
      return;
    }

    next();
  }
);

export default router;
