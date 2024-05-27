<script setup lang="ts">
// --- Import Vue ---
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const rememberMe = ref(false);

</script>

<template>
    <div class="flex justify-content-center align-items-center min-h-screen ">
        <Card class="max-w-30rem">
            <template #title>
                Login
            </template>
            <template #subtitle>
                Please enter your details
            </template>
            <template #content>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12">
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-envelope"></i>
                            </InputGroupAddon>
                            <InputText id="username" v-model="username" placeholder="Email" />
                        </InputGroup>
                    </div>
                    <div class="field col-12">
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-lock"></i>
                            </InputGroupAddon>
                            <Password id="password" v-model="password" toggleMask placeholder="Password"
                                :feedback="false" />
                        </InputGroup>
                    </div>
                    <div class="field col-12 flex justify-content-between">
                        <div class="flex align-items-center">
                            <Checkbox v-model="rememberMe" name="rememberMe" binary />
                            <label for="ingredient1" class="ml-2 text-sm"> Remember Me </label>
                        </div>
                        <NuxtLink to="/register" style="text-decoration: none !important;">
                            <span class="text-sm"> Forgot Password </span>
                        </NuxtLink>
                    </div>
                    <div class="field col-12">
                        <Divider align="center">
                            <b>Don't you have an account?</b>
                        </Divider>
                    </div>
                    <div class="field col-12">
                        <NuxtLink to="/register">
                            <Button label="Create account" />
                        </NuxtLink>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>