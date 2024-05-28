<script setup>
// --- Import VeeValidate ---
import { useForm, } from 'vee-validate';
// --- Import Schema & Default Values ---
import { schema, defaultValues } from '@/validation/registerSchema';

//NOTE - Form Values
const { defineField, handleSubmit, errors } = useForm({
    validationSchema: schema, initialValues: defaultValues
});

//NOTE - Form Fields
const [name] = defineField('name');
const [surname] = defineField('surname');
const [email] = defineField('email');
const [password] = defineField('password');
const [passwordConfirm] = defineField('passwordConfirm');
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
                    Register
                </template>
                <template #subtitle>
                    Please enter your details
                </template>
                <template #content>
                    <div class="p-fluid formgrid grid">
                        <div class="field col-12">
                            <label for="name">Name</label>
                            <InputGroup>
                                <InputGroupAddon>
                                    <i class="pi pi-user"></i>
                                </InputGroupAddon>
                                <InputText id="name" v-model="name" placeholder="Name"
                                    :class="{ 'p-invalid': errors.name }" aria-describedby="name-help" />
                            </InputGroup>
                            <small id="name-help" class="p-error">
                                {{ errors.name }}
                            </small>
                        </div>
                        <div class="field col-12">
                            <label for="surname">Surname</label>
                            <InputGroup>
                                <InputGroupAddon>
                                    <i class="pi pi-user"></i>
                                </InputGroupAddon>
                                <InputText id="surname" v-model="surname" placeholder="Surname"
                                    :class="{ 'p-invalid': errors.surname }" aria-describedby="surname-help" />
                            </InputGroup>
                            <small id="surname-help" class="p-error">
                                {{ errors.surname }}
                            </small>
                        </div>
                        <div class="field col-12">
                            <label for="Email">Email</label>
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
                            <label for="password">Password</label>
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
                        <div class="field col-12">
                            <label for="passwordConfirm">Password Confirm</label>
                            <InputGroup>
                                <InputGroupAddon>
                                    <i class="pi pi-lock"></i>
                                </InputGroupAddon>
                                <Password id="passwordConfirm" v-model="passwordConfirm" toggleMask
                                    placeholder="Password Confirm" :class="{ 'p-invalid': errors.passwordConfirm }"
                                    aria-describedby="passwordConfirm-help" :feedback="false" />
                            </InputGroup>
                            <small id="passwordConfirm-help" class="p-error">
                                {{ errors.passwordConfirm }}
                            </small>
                        </div>
                        <div class="field col-12">
                            <Button label="Register" type="submit" />
                        </div>
                        <div class="field col-12">
                            <Divider align="center">
                                <b>Do you have an account?</b>
                            </Divider>
                        </div>
                        <div class="field col-12">
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