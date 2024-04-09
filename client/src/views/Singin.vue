<script setup lang="ts">
import UserLoginForm from "./components/UserLoginForm.vue";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
</script>

<template>
  <div class="page">
    <div class="container">
      <Card>
        <div
          class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
        >
          <a
            href="/examples/authentication"
            :class="
              cn(
                buttonVariants({ variant: 'ghost' }),
                'absolute right-4 top-4 md:right-8 md:top-8'
              )
            "
          >
            Kayıt Ol
          </a>
          <div
            class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
          >
            <div class="absolute inset-0 bg-zinc-900" />
            <div class="relative z-20 flex items-center text-lg font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="mr-2 h-6 w-6"
              >
                <path
                  d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
                />
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
                <footer class="text-sm">Berkan Yıldırım</footer>
              </blockquote>
            </div>
          </div>
          <div class="lg:p-8">
            <div
              class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
            >
              <div class="flex flex-col space-y-2 text-center">
                <h1 class="text-2xl font-semibold tracking-tight">Giriş Yap</h1>
                <p class="text-sm text-muted-foreground">
                  Giriş yapmak için aşağıdaki bilgileri girin.
                </p>
              </div>
              <UserLoginForm />
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust as needed */
}
</style>
