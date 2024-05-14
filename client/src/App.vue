<script setup lang="ts">
// --- Import Vue Router ---
import { RouterView } from "vue-router";
// --- Import Axios ---
import axios from 'axios';
// --- Import Store ---
import { useAuthStore } from '@/stores/auth.ts';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.interceptors.request.use(function (config) {
  if (config.url != 'auth/login') {
    const authStore = useAuthStore();
    config.headers['Authorization'] = `Bearer ${authStore.token}`;
  }
  return config;
});

</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
