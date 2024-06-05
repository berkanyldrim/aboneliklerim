<script setup>
// --- Import Vue ---
import { ref } from 'vue';
// --- Import VeeValidate ---
import { useForm, } from 'vee-validate';
// --- Import Schema & Default Values ---
import { schema, defaultValues } from '@/validation/subscriptionSchema';

//NOTE - Ref
const dayOptions = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']);
const unitOptions = ref(['Gün', 'Hafta', 'Ay', 'Yıl']);
//NOTE - Form Values
const { defineField, handleSubmit, errors } = useForm({
    validationSchema: schema, initialValues: defaultValues
});

//NOTE - Form Fields
const [subscribe] = defineField('subscribe');
const [price] = defineField('price');
const [paymentDate] = defineField('paymentDate');
const [currency] = defineField('currency');
const [repetitionTime] = defineField('repetitionTime');
const [autoRenewal] = defineField('autoRenewal');
const [note] = defineField('note');

//NOTE - Form Submit Handler
const submitHandler = handleSubmit(async (values) => {
    const { data: responseData } = await useMyFetch('subscription', {
        method: 'POST',
        body: (values),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log("responseData", responseData.value);
});
</script>

<template>
    <form @submit="submitHandler">
        <div class="">
            <Card>
                <template #title>
                    Abonelik Ekle
                </template>
                <template #subtitle>
                    Lütfen Aşağıdaki Bilgileri Doldurunuz
                </template>
                <template #content>
                    <div class="p-fluid formgrid grid">
                        <div class="field lg:col-4 md:col-6 sm:col-12">
                            <label>Abonelik</label>
                            <Dropdown v-model="subscribe" :options="[]" filter optionLabel="name" showClear checkmark
                                aria-describedby="subscribe-help" placeholder="Abonelik Seç" class="w-full"
                                :class="{ 'p-invalid': errors.subscribe }">
                                <!-- TODO - Dropdown Options ve valuede seçilen optionun logosu eklenecek -->
                            </Dropdown>
                            <small id="subscribe-help" class="p-error">
                                {{ errors.subscribe }}
                            </small>
                        </div>
                        <div class="field lg:col-4 md:col-6 sm:col-12">
                            <label>Para Birimi</label>
                            <Dropdown v-model="currency" :options="[]" filter optionLabel="name" showClear checkmark
                                aria-describedby="currency-help" placeholder="Para Birimi" class="w-full"
                                :class="{ 'p-invalid': errors.currency }">
                                <!-- TODO - Dropdown Options ve valuede seçilen optionun simgesi eklenecek -->
                            </Dropdown>
                            <small id="currency-help" class="p-error">
                                {{ errors.currency }}
                            </small>
                        </div>
                        <div class="field lg:col-4 md:col-6 sm:col-12">
                            <label>Ödeme Tarihi</label>
                            <Calendar v-model="paymentDate" showButtonBar aria-describedby="paymentDate-help" showIcon
                                date-format="dd/mm/yy" placeholder="Ödeme Tarihi"
                                :class="{ 'p-invalid': errors.paymentDate }" />
                            <small id="paymentDate-help" class="p-error">
                                {{ errors.paymentDate }}
                            </small>
                        </div>
                        <div class="field lg:col-4 md:col-6 sm:col-12">
                            <label>Fiyat</label>
                            <InputText id="price" v-model="price" placeholder="Fiyat"
                                :class="{ 'p-invalid': errors.price }" aria-describedby="price-help" />
                            <small id="price-help" class="p-error">
                                {{ errors.price }}
                            </small>
                        </div>
                        <div class="field lg:col-4 md:col-6 sm:col-12">
                            <label>Tekrar Süresi</label>
                            <InputGroup>
                                <Dropdown v-model="repetitionTime.value" :options="dayOptions" checkmark
                                    aria-describedby="repetitionTime-help" placeholder="1" style="max-width: 100px;"
                                    :class="{ 'p-invalid': errors.repetitionTime }">
                                </Dropdown>
                                <Dropdown v-model="repetitionTime.unit" :options="unitOptions" checkmark showClear
                                    aria-describedby="repetitionTime-help" placeholder="Gün/Ay/Hafya/Yıl"
                                    :class="{ 'p-invalid': errors.repetitionTime }">
                                </Dropdown>
                            </InputGroup>
                            <small id="repetitionTime-unit-help" class="p-error">
                                {{ errors.repetitionTime }}
                            </small>
                        </div>
                        <div class="field lg:col-4 md:col-6 sm:col-12">
                            <label>Not</label>
                            <Textarea v-model="note" rows="5" cols="30" aria-describedby="note-help"
                                :class="{ 'p-invalid': errors.note }" />
                            <small id="note-help" class="p-error">
                                {{ errors.note }}
                            </small>
                        </div>
                        <div class="field  md:col-6 sm:col-12">
                            <div class="flex items-center gap-5"> <label for="autoRenewal">Otomatik yenileniyor mu
                                    ?</label>
                                <Checkbox v-model="autoRenewal" inputId="autoRenewal" name="autoRenewal" binary />
                            </div>
                            <Message severity="info" :closable="false">Bu abonelik 15 Nisan 2024 Tarihinden itibaren her
                                ay otomatik olarak yenilenir. </Message>
                        </div>
                        <div class="field  md:col-6 sm:col-12 flex justify-content-end align-items-center">
                            <Button class="max-h-3rem" label="Abonelik Ekle" type="submit" style="max-width: 150px;" />
                        </div>

                    </div>
                </template>
            </Card>

        </div>
    </form>

</template>