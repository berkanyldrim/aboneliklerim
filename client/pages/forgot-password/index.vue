<script setup>
definePageMeta({
    layout: 'empty'
})
// --- Import Vue ---
import { ref } from 'vue';
// --- Import VeeValidate ---
import { useForm, } from 'vee-validate';
// --- Import Schema & Default Values ---
import { schema, defaultValues } from '@/validation/forgotPassword';

//NOTE - Ref
const isDisabled = ref(false);

//NOTE - Form Values
const { defineField, handleSubmit, errors } = useForm({
    validationSchema: schema, initialValues: defaultValues
});

//NOTE - Form Fields
const [email] = defineField('email');
//NOTE - Form Submit Handler
const submitHandler = handleSubmit((values) => {
    console.log(values);
    isDisabled.value = true;
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
                    Forgot Password
                </template>
                <template #subtitle>
                    Enter the email address you are registered with
                </template>
                <template #content>
                    <div class="p-fluid formgrid grid">
                        <div class="field col-12">
                            <InputGroup>
                                <InputGroupAddon>
                                    <i :aria-disabled="isDisabled" class="pi pi-envelope"></i>
                                </InputGroupAddon>
                                <InputText :disabled="isDisabled" id="email" v-model="email" placeholder="Email"
                                    :class="{ 'p-invalid': errors.email }" aria-describedby="email-help" />
                            </InputGroup>
                            <small id="email-help" class="p-error">
                                {{ errors.email }}
                            </small>
                        </div>


                        <div class="field col-12">
                            <Button :disabled="isDisabled" label="Reset Password" type="submit" />
                        </div>

                        <div v-if="isDisabled" class="field col-12">
                            <Message :closable="false" severity="info">Your temporary password has been sent to your
                                e-mail address. Please check your e-mail address</Message>
                        </div>
                        <div v-if="isDisabled" class="field col-12">
                            <NuxtLink to="/login">
                                <Button text raised label="Go to Login" />
                            </NuxtLink>
                        </div>

                    </div>
                </template>
            </Card>
        </div>
    </form>

</template>