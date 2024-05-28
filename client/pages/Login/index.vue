<script setup>
// --- Import Vue ---
import { ref } from 'vue';
// --- Import VeeValidate ---
import { useForm, } from 'vee-validate';
// --- Import Schema & Default Values ---
import { schema, defaultValues } from '@/validation/loginSchema';

//NOTE - Ref
const rememberMe = ref(false);

//NOTE - Form Values
const { defineField, handleSubmit, errors } = useForm({
    validationSchema: schema, initialValues: defaultValues
});

//NOTE - Form Fields
const [email] = defineField('email');
const [password] = defineField('password');
//NOTE - Form Submit Handler
const submitHandler = handleSubmit((values) => {
    console.log(values);
    // --- API Call ---
    // const response = await login(values);
    // if (response) {
    //     // --- Redirect ---
    //     // router.push('/dashboard');
    // }
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