import { useAuthStore } from "~/stores/auth.js";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  if (!authStore.token && to.fullPath !== '/login') {
    return navigateTo('/login');
  }

  if (authStore.token && to.fullPath === '/login') {
    return navigateTo('/');
  }
});