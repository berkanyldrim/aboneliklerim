<script setup lang="ts">
// --- Import Vue ---
import { ref } from "vue";

// import LucideSpinner from '~icons/lucide/loader-2'
// --- Import Utils ---
import { cn } from "@/lib/utils";

// --- Import Vee Validate ---
import { useForm } from "vee-validate";

// --- Import Schema ---
import { singUpSchema } from "@/form-schema/singup";

//NOTE - useForm
const { handleSubmit } = useForm({
    validationSchema: singUpSchema,
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
</script>

<template>
    <div :class="cn('grid gap-6', $attrs.class ?? '')">
        <form @submit="onSubmit">
            <div class="grid gap-2 mb-2">
                <div class="grid gap-1">
                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input id="email" placeholder="name@example.com" type="email" auto-capitalize="none"
                                    auto-complete="email" auto-correct="off" :disabled="isLoading"
                                    v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
            </div>
            <div class="grid gap-2 mb-2">
                <div class="grid gap-1">
                    <FormField v-slot="{ componentField }" name="password">
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input id="password" placeholder="************" type="password" :disabled="isLoading"
                                    v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
            </div>

            <div class="grid gap-2 mb-2">
                <div class="grid gap-1">
                    <FormField v-slot="{ componentField }" name="confirmPassword">
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input id="confirmPassword" placeholder="************" type="password"
                                    :disabled="isLoading" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
            </div>

            <div class="grid gap-2 mb-2">
                <Button type="submit" :disabled="isLoading">
                    <!-- <LucideSpinner v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" /> -->
                    Kayıt Ol
                </Button>
            </div>

        </form>
        <div class="relative">
            <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t" />
            </div>
            <div class="relative flex justify-center text-xs">
                <span class="bg-background px-2 text-muted-foreground">
                    Zaten Hesabım Var
                </span>
            </div>
        </div>
        <Button variant="outline" type="button" :disabled="isLoading">
            <!-- <LucideSpinner v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" /> -->

            Giriş Yap
        </Button>
    </div>
</template>
