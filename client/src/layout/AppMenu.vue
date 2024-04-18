<script setup lang="ts">
// --- Import Vue---
import { ref } from 'vue';
// --- Import Lucide Icons ---
import { LayoutDashboard, WalletMinimal } from 'lucide-vue-next'
// --- Import  Types ---
import { MenuItem } from '@/types/MenuItem'
// --- Import MenuItemLink ---
import MenuItemLink from './composables/MenuItemLink.vue';

//NOTE - Menu
const menu = ref<MenuItem[]>([
    {
        label: 'Ana Sayfa',
        icon: LayoutDashboard,
        to: '/',
    },
    {
        label: 'Aboneliklerim',
        icon: WalletMinimal,
        to: '/subscriptions',
    },
]);

</script>

<template>
    <div class="bg-background py-2 h-full duration-500 data-[collapsed=true]:py-2 md:border-none space-y-1">
        <div v-for="menuItem in menu" class="text-center" style="padding: 5px;">
            <MenuItemLink :label="menuItem.label" :icon="menuItem.icon" :to="menuItem.to" />
        </div>
    </div>
</template>