<script setup lang="ts">
// --- Import Vue ---
import { ref } from "vue";

// --- Import Vee Validate ---
import { useForm } from "vee-validate";

// --- Import Schema ---
import { subscriptionSchema } from "@/form-schema/subscriptions";

//NOTE - useForm
const { handleSubmit } = useForm({
    validationSchema: subscriptionSchema,
});

//NOTE - Ref
const isLoading = ref(false);

//NOTE - onSubmit
const onSubmit = handleSubmit(async (values) => {
    isLoading.value = true;
    console.log(values);
    setTimeout(() => {
        isLoading.value = false;
    }, 3000);
});

const subscriptions = [
    { id: 1, name: "Netflix" },
    { id: 2, name: "Spotify" }
]

</script>

<template>
    <form @submit="onSubmit">
        <DialogContent class="sm:max-w-[1000px]">
            <DialogHeader>
                <DialogTitle>Yeni Abonelik Ekle</DialogTitle>
            </DialogHeader>
            <div class="grid gap-5 mb-2 grid-cols-2">
                <div class="grid gap-1 p-5">
                    <FormField v-slot="{ componentField }" name="subscription.name">
                        <FormItem>
                            <FormLabel>Abonelik</FormLabel>
                            <Select v-bind="componentField" :disabled="isLoading">
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Lütfen Abonelik Seçiniz" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem v-for="sub in subscriptions" :value="sub.name">
                                                {{ sub.name }}
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </FormControl>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
                <div class="grid gap-1 p-5">
                    <FormField v-slot="{ componentField }" name="price">
                        <FormItem>
                            <FormLabel>Ücret</FormLabel>
                            <FormControl>
                                <Input id="price" placeholder="50" type="text" auto-capitalize="none"
                                    auto-complete="price" auto-correct="off" :disabled="isLoading"
                                    v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
            </div>
            <DialogFooter>
                <Button type="submit">
                    Save changes
                </Button>
            </DialogFooter>
        </DialogContent>
    </form>


</template>