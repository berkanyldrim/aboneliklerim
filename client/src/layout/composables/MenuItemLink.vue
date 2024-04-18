<script setup lang="ts">
// --- Import Vue ---
import { defineProps } from 'vue';
// --- Import Vue Router ---
import { useRoute } from "vue-router"

//NOTE - Props
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    icon: {
        default: null as any,
        required: true
    },
    to: {
        type: String,
        required: true
    }
});

//NOTE - useRouter
const route = useRoute();

</script>

<template>
    <router-link :to="props.to" class="left-0 right-0">
        <Button as="a" size="sm" class="justify-start text-wrap rounded-none h-10 w-full  px-2"
            :variant="route.path === `${props.to}` ? 'secondary' : 'ghost'" :to="props.to" style="border-radius: 6px;">
            <component :is="props.icon" />
            <div class="ml-2">{{ props.label }}</div>
        </Button>
    </router-link>
</template>