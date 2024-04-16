<script setup lang="ts">
import UserNav from './composables/UserNav.vue'
</script>

<template>
    <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border">
        <div class="container flex h-14 max-w-screen-2xl items-center">
            <div class="mr-4 md:mr-1 hidden md:flex">
                <span class="font-bold">Aboneliklerim </span>
            </div>
            <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <UserNav />

                <UserNav />
            </div>

        </div>

    </header>

</template>