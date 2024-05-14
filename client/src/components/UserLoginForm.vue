<script setup lang="ts">
// --- Import Vue ---
import { ref } from "vue";
// --- Import Vue Router ---
import { useRouter } from "vue-router";
// --- Import Lucide ---
import { Loader } from 'lucide-vue-next';
// --- Import Utils ---
import { cn } from "@/lib/utils";
// --- Import Vee Validate ---
import { useForm } from "vee-validate";
// --- Import Schema ---
import { loginSchema } from "@/form-schema/login";
// --- Import Axios ---
import axios from "axios";
// --- AuthStore Import ---
import { useAuthStore } from '@/stores/auth';
// --- JWT Decode Import ---
import { jwtDecode } from 'jwt-decode';
// --- Import Types ---
import type { JwtPayload } from '@/types/JwtPayload.ts';

//NOTE - useRouter
const router = useRouter();

//NOTE - useForm
const { handleSubmit } = useForm({
  validationSchema: loginSchema,
});

//NOTE - useAuthStore
const authStore = useAuthStore();


//NOTE - Ref
const isLoading = ref(false);

//NOTE - onSubmit
const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true;
  await axios.post("/login", values).then((res) => {
    if (res.status == 200) {
      const decoded = jwtDecode<JwtPayload>(res?.data?.token);
      authStore.token = res?.data?.token;
      authStore.user = {
        _id: decoded?._id,
        email: decoded?.email,
        name: decoded?.name,
        surname: decoded?.surname,
      }
      localStorage.setItem('token', res?.data?.token);
      isLoading.value = false;
      router.push("/");
    }
  }).catch((err) => {
    console.log(err);
    isLoading.value = false;
  });
});

//NOTE - handleClickSingup
const handleClickSingup = () => {
  router.push('/singup')
}
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
                  auto-complete="email" auto-correct="off" :disabled="isLoading" v-bind="componentField" />
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
                <Input id="password" placeholder="name@example.com" type="password" :disabled="isLoading"
                  v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
      </div>

      <div class="grid gap-2 mb-2">
        <Button type="submit" :disabled="isLoading">
          <Loader v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />

          Giriş Yap
        </Button>
      </div>
      <div class="grid">
        <p class="px-8 text-center text-sm text-muted-foreground">
          Giriş yapamıyor musunuz?
          <a href="/forgot-password" class="underline underline-offset-4 hover:text-primary">
            Şifremi Unuttum
          </a>
        </p>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs">
        <span class="bg-background px-2 text-muted-foreground">
          Hesabın Yok mu?
        </span>
      </div>
    </div>
    <Button variant="outline" type="button" :disabled="isLoading" @click="handleClickSingup">
      <Loader v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />

      Hesap Oluştur
    </Button>
  </div>
</template>
