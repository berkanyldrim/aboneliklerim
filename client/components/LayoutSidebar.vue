<script setup >
// --- Import Vue ---
import { defineProps } from 'vue';

//NOTE - Props
const props = defineProps({
  sidebarVisible: {
        type: Boolean,
        default: true
    },
  isMobile: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
  <Sidebar v-model:visible="props.sidebarVisible" :modal="props.isMobile" :dismissable="false"   >
    <template #container="{ closeCallback }">
      <div class="flex flex-column h-full">
        <div class="flex align-items-center justify-content-between p-4 pb-2  flex-shrink-0">
            <span class="inline-flex align-items-center gap-2">

                <span class="font-semibold text-2xl text-primary">Aboneliklerim</span>
                <span v-if="isMobile">
                    <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined
                            class="h-2rem w-2rem"></Button>
                </span>
            </span>
        </div>
        <hr class="mt-3 mx-3 border-top-1 border-none surface-border" />

        <div class="overflow-y-auto">
          <ul class="list-none p-3  m-0 overflow-hidden">
            <li style="margin-bottom:5px" >
              <NuxtLink to="/" style="text-decoration: none !important;" active-class="active-link" >
                <a
                   class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                  <i class="pi pi-home mr-2"></i>
                  <span class="font-medium">Ana Sayfa</span>
                </a>

              </NuxtLink>

            </li>
            <li>
              <NuxtLink to="/new-subscription" style="text-decoration: none !important;" active-class="active-link">
                <a
                   class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                  <i class="pi pi-dollar mr-2"></i>
                  <span class="font-medium">Yeni Abonelik Ekle</span>
                </a>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
          <a
             class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">

            <span class="font-bold">Amy Elsner</span>
          </a>
        </div>
      </div>
    </template>
  </Sidebar>
</template>

<style >
.active-link a {
  background-color: var(--surface-100);

}

</style>