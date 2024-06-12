<script setup>
// --- Import Vue ---
import { ref, onMounted, onUnmounted } from 'vue'
// --- Import Sidebar Components ---
import LayoutSidebar from "~/components/LayoutSidebar.vue";

//NOTE - Ref
const sidebarVisible = ref(true)
const isMobile = ref(false)

//NOTE - Handle Resize
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
  if (isMobile.value) {
    sidebarVisible.value = false
  } else {
    sidebarVisible.value = true
  }
}
//NOTE - On Mounted
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
//NOTE - On Unmounted
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
//NOTE - Toggle Sidebar
const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}
</script>
<template>
    <div class="layout-wrapper">
        <LayoutSidebar :sidebar-visible="sidebarVisible" :is-mobile="isMobile"  />
        <div class="layout-main">
            <header v-if="isMobile">
                <!-- <Menubar :model="items" /> -->
                <Button icon="pi pi-bars" class="p-button-text" @click="toggleSidebar"></Button>
            </header>

            <main>
                <NuxtPage />
            </main>
        </div>
    </div>
</template>

<style scoped>
.layout-wrapper {
    display: flex;
    height: 100vh;
    overflow: hidden;
}

.layout-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 350px;
}

header {
    display: none;
}

main {
    flex: 1;
    padding: 1rem;
}
@media (max-width: 768px) {
    .sidebar {
        position: absolute;
        z-index: 1000;
    }

    .layout-main {
        margin-left: 0;
    }

    header {
        display: block;
        background: #007ad9;
        padding: 1rem;
        color: white;
    }
}
</style>
