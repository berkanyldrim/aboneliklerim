<script setup lang="ts">
// --- Import utils ---
import { cn } from '@/lib/utils'

// --- Import AppMenu ---
import AppMenu from './AppMenu.vue';
</script>

<template>
    <aside
        :class="cn(`fixed left-0 right-0 top-50 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh md:w-64`)">
        <div :class="cn('relative flex h-full w-full flex-col')">
            <!-- Logo or brand -->
            <div class="container flex h-14 max-w-screen-2xl items-center">
                <div class="mr-4 md:mr-1 hidden md:flex">
                    <span class="font-bold">Aboneliklerim </span>
                </div>
            </div>
            <!-- Navigation links -->
            <div :class="cn(`h-full flex-1 overflow-auto  'max-h-0 py-0 md:max-h-screen`)">
                <AppMenu />
            </div>
        </div>
    </aside>
</template>