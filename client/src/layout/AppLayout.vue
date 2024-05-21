<script setup lang="ts">
import { cn } from '@/lib/utils'
// import AppTopbar from './AppTopbar.vue';
import AppSidebar from './AppSidebar.vue';
</script>

<template>
    <AppSidebar />

    <div :class="cn(`h-full w-fulloverflow-auto md:ml-64`)">
        <!-- <AppTopbar /> -->
        <div class="p-2 space-y-2 mt-10">
            <router-view></router-view>
        </div>
    </div>
</template>