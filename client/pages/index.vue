<script setup>
</script>

<template>
    <div class="container" >
        <div class="grid">
          <div class="col-12 flex justify-content-between align-items-center">
            <h2>Ana Sayfa</h2>
            <NuxtLink to="/new-subscription" style="text-decoration: none !important;">
              <Button class="max-h-3rem" label="Yeni Ekle" type="submit" style="max-width: 150px;" />
            </NuxtLink>
          </div>
        </div>
      <div class="grid">
        <div v-for="a in 10" class="lg:col-4 md:col-6 sm:col-12" >
          <Card style=" overflow: hidden">
            <template #title>
              <div class="grid" >
                <div class="col-12 flex justify-content-between align-items-center">
                  Netflix
                  <NuxtImg src="/netflix.png" height="35" width="35" />
                </div>
              </div>
            </template>
            <template #content>
             <div class="grid" >
              <div class="col-12 flex justify-content-between align-items-center">
                <div>
                  <span class="font-bold">Ödeme Tarihi:</span>
                  <span> 07/06/2024</span>
                </div>
                <div>
                  <span class="font-bold">Fiyat:</span>
                  <span> 39.99 TL</span>
                </div>

              </div>
              <div class="col-12 flex justify-content-between align-items-center">
                <div>
                  <span class="font-bold">Not:</span>
                  <span> Netflix dfgbdkjbgdsfgbdkghdksljfhjkdfgdkfjghjk</span>
                </div>

              </div>
             </div>
            </template>
            <template #footer>
              <div class="grid">
                <div class="col-12 flex justify-content-between align-items-center">
                  <div>
                    <span class="p-card-subtitle">Yenilenme Süresi:</span>
                    <span class="p-card-subtitle" > 1 Ay</span>
                  </div>
                  <div>
                    <span class="p-card-subtitle">Otomatik Yenileme:</span>
                    <span class="p-card-subtitle" > Evet</span>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
</template>