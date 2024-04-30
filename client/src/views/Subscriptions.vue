<script setup lang="ts">
// --- Components Import ---
import Container from '@/components/Container.vue';
import SubscriptionsCard from '@/components/SubscriptionsCard.vue';
import DialogComponent from '@/components/DialogComponent.vue';

</script>

<template>
    <div class="flex-1 bg-background ">
        <div class="container relative">
            <div class="flex-1  mb-2">
                <div class="flex items-center justify-between space-y-2">
                    <h2 class="text-3xl font-bold tracking-tight">
                        Aboneliklerim
                    </h2>
                    <div class="flex items-center space-x-2">
                        <Dialog>
                            <DialogTrigger>
                                <Button>Ekle</Button>
                            </DialogTrigger>
                            <DialogComponent />
                        </Dialog>

                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="a in 10">
                    <Container key="a">
                        <SubscriptionsCard />
                    </Container>
                </div>

            </div>
        </div>
    </div>
</template>
