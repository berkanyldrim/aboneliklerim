<script setup lang="ts">
import UserNav from './composables/UserNav.vue'
</script>

<template>
    <div class="flex h-[var(--header-height)] flex-none items-center gap-4 bg-background p-4 md:px-8 border-b">
        <div class="ml-auto flex items-center space-x-4">
            <UserNav />
            <UserNav />
        </div>
    </div>
</template>