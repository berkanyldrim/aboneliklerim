<script setup lang="ts">
// --- Import Vue Router ---
import { RouterView } from "vue-router";
// --- Import Axios ---
import axios from 'axios';
// --- Import Store ---
import { useAuthStore } from '@/stores/auth.ts';
// --- Import Vue Router ---
import { useRouter } from "vue-router";

//NOTE - useRouter
const router = useRouter();
//NOTE - useAuthStore
const authStore = useAuthStore();


axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.interceptors.request.use(function (config) {
  if (config.url != 'auth/login') {
    config.headers['Authorization'] = `Bearer ${authStore.token}`;
  }
  return config;
});

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, async function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (error.response?.status == 403) {
    router.push({ name: 'accessDenided' });
    setTimeout(() => {

      localStorage.removeItem('token');
      authStore.token = '';
      authStore.user = {};
      window.location.href = '/login';
      //TODO - Add a toast message

    }, 2000);
  }
  if (error.response?.status == 502) {
    localStorage.removeItem('token');
    authStore.token = '';
    authStore.user = {};
    router.push('/error');
  }
  if (error.response?.status == 401) {
    router.push({ name: 'tokenValid' });
    setTimeout(() => {
      localStorage.removeItem('token');
      authStore.token = '';
      authStore.user = {};
      window.location.href = '/login';
      //TODO - Add a toast message
    }, 2000);

  }
  return Promise.reject(error);
});

</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
