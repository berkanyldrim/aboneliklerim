<script setup>
definePageMeta({
    layout: 'empty'
})
// --- Import Vue ---
import { ref } from 'vue';
// --- Import VeeValidate ---
import { useForm, } from 'vee-validate';
// --- Import Schema & Default Values ---
import { schema, defaultValues } from '@/validation/loginSchema';
// --- Import AuthStore ---
import { useAuthStore } from '~/stores/auth';
// --- Import JWT Decode ---
import {jwtDecode} from "jwt-decode";

//NOTE - Use Auth Store
const authStore = useAuthStore();

//NOTE - Ref
const rememberMe = ref(false);

//NOTE - Form Values
const { defineField, handleSubmit, errors } = useForm({
    validationSchema: schema, initialValues: defaultValues
});

const router = useRouter()

//NOTE - Form Fields
const [email] = defineField('email');
const [password] = defineField('password');
//NOTE - Form Submit Handler
const submitHandler = handleSubmit(async (values) => {
    const { data,error } = await useMyFetch('login', {
        method: 'POST',
        body: (values),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(data.value && data.value.token){
        authStore.setToken(data.value.token);
        const decoded = jwtDecode(data.value.token);
        authStore.setUser(decoded);
        router.push('/')

    }
    else{
        console.log(error);
    }

});
</script>

<template>
    <form @submit="submitHandler">
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
                                <InputText id="email" v-model="email" placeholder="Email"
                                    :class="{ 'p-invalid': errors.email }" aria-describedby="email-help" />
                            </InputGroup>
                            <small id="email-help" class="p-error">
                                {{ errors.email }}
                            </small>
                        </div>
                        <div class="field col-12">
                            <InputGroup>
                                <InputGroupAddon>
                                    <i class="pi pi-lock"></i>
                                </InputGroupAddon>
                                <Password id="password" v-model="password" toggleMask placeholder="Password"
                                    :class="{ 'p-invalid': errors.password }" aria-describedby="password-help"
                                    :feedback="false" />
                            </InputGroup>
                            <small id="password-help" class="p-error">
                                {{ errors.password }}
                            </small>
                        </div>
                        <div class="field col-12 flex justify-content-between">
                            <div class="flex align-items-center">
                                <Checkbox v-model="rememberMe" name="rememberMe" binary />
                                <label for="ingredient1" class="ml-2 text-sm"> Remember Me </label>
                            </div>
                            <NuxtLink to="/forgot-password" style="text-decoration: none !important;">
                                <span class="text-sm"> Forgot Password </span>
                            </NuxtLink>
                        </div>
                        <div class="field col-12">
                            <Button label="Login" type="submit" />
                        </div>
                        <div class="field col-12">
                            <Divider align="center">
                                <b>Don't you have an account?</b>
                            </Divider>
                        </div>
                        <div class="field col-12">
                            <NuxtLink to="/register">
                                <Button text raised label="Create account" />
                            </NuxtLink>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </form>

</template>