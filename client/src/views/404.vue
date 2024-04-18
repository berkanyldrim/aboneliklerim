<script setup lang="ts">

</script>

<template>
  <div class='h-svh'>
    <div class='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
      <h1 class='text-[7rem] font-bold leading-tight'>404</h1>
      <span class='font-medium'>OPPSSS</span>
      <p class='text-center text-muted-foreground mt-6'>Sayfa Bulunamadı !!</p>
      <div class='mt-6 flex gap-4'>
        <RouterLink to="/">
          <Button variant='outline'>Ana Sayfaya Dön</Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
