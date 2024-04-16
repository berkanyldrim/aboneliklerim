<script setup lang="ts">
// --- Import Vue ---
import { ref } from "vue";

// --- Import Components ---
import { buttonVariants } from "@/components/ui/button";

// --- Lucide Import ---
import { Loader } from 'lucide-vue-next';

// --- Import Utils ---
import { cn } from "@/lib/utils";

// --- Import Vee Validate ---
import { useForm } from "vee-validate";

// --- Import Schema ---
import { forgotPassowrdSchema } from "@/form-schema/forgotPassword";

//NOTE - User Form
const { handleSubmit } = useForm({
    validationSchema: forgotPassowrdSchema
})

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
    <form @submit="onSubmit">
        <div class="page">
            <div class="container">
                <Card>
                    <div
                        class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                        <a href="/login" :class="cn(
                            buttonVariants({ variant: 'ghost' }),
                            'absolute right-4 top-4 md:right-8 md:top-8'
                        )
                            ">
                            Geri Dön
                        </a>
                        <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                            <div class="absolute inset-0 bg-zinc-900 rounded-l-lg " />
                            <div class="relative z-20 flex items-center text-lg font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    class="mr-2 h-6 w-6">
                                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                                </svg>
                                Aboneliklerim
                            </div>
                            <div class="relative z-20 mt-auto">
                                <blockquote class="space-y-2">
                                    <p class="text-lg">
                                        &ldquo;Aboneliklerinizi yönetmek için yola çıkın!
                                        Kullandığınız bir çok abonelik mi bulunuyor ve bunları takip
                                        etmekte zorlanıyor musunuz. İşte tam bu sorun için doğru
                                        yerdesiniz. Kolayca yönetmek için şimdi giriş yapın!&rdquo;
                                    </p>

                                </blockquote>
                            </div>

                        </div>
                        <div class="lg:p-8">
                            <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                                <div class="flex flex-col space-y-2 text-center">
                                    <h1 class="text-2xl font-semibold tracking-tight">Şifrenizi mi unuttunuz ?</h1>
                                    <p class="text-sm text-muted-foreground">
                                        Email adresinizi girin ve şifrenizi yenilemek için size yardımcı olalım.
                                    </p>
                                </div>
                                <div :class="cn('grid gap-6', $attrs.class ?? '')">
                                    <div class="grid gap-2 mb-2">

                                        <div class="grid gap-1">
                                            <FormField v-slot="{ componentField }" name="email">
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input id="email" placeholder="name@example.com" type="email"
                                                            auto-capitalize="none" auto-complete="email"
                                                            auto-correct="off" :disabled="isLoading"
                                                            v-bind="componentField" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            </FormField>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid gap-2 mb-2">
                                    <Button type="submit" :disabled="isLoading">
                                        <Loader v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
                                        Şifre Yenile
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>

    </form>

</template>
<style scoped>
.page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Adjust as needed */
}
</style>
