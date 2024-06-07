<script setup>
// --- Import Vue ---
import { ref, watch } from 'vue';
// --- Import VeeValidate ---
import { useForm, } from 'vee-validate';
// --- Import Schema & Default Values ---
import { schema, defaultValues } from '@/validation/subscriptionSchema';
// --- Import Date-Fns
import { addDays, addWeeks, addMonths, addYears, format } from 'date-fns';
import { tr } from 'date-fns/locale'

//NOTE - Ref
const dayOptions = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']);
const unitOptions = ref(['Gün', 'Hafta', 'Ay', 'Yıl']);
const autoRenewalControl = ref('control1');
const control = ref(false)
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

//NOTE - Watch Repetition Time
watch(() => [autoRenewal.value, repetitionTime.value.value, repetitionTime.value.unit], ([newAutoRenewal, newValue, newUnit]) => {

    console.log("geldim12", newValue)
    console.log("geldim22", newUnit)


    if (repetitionTime?.value?.value && repetitionTime?.value?.unit && repetitionTime?.value?.value != '' && repetitionTime?.value?.unit != '') {
        if (newAutoRenewal) {
            autoRenewalControl.value = 'control2';
            paymentDate.value != '' ? control.value = true : control.value = false
        }
        else {
            autoRenewalControl.value = 'control1';
            paymentDate.value != '' ? control.value = true : control.value = false
        }
    }
    else if (newValue != '' && newUnit != '' && paymentDate.value != '') {
        console.log("geldim")
        control.value = true
    }

});
//NOTE - Add Days
const getDate = () => {
    if (repetitionTime?.value?.value && repetitionTime?.value?.unit && repetitionTime?.value?.value != '' && repetitionTime?.value?.unit != '') {
        if (repetitionTime?.value?.unit == 'Gün') {
            let resultDate = addDays(new Date(paymentDate.value), parseInt(repetitionTime?.value?.value))
            return format(resultDate, 'dd MMMM yyyy', { locale: tr });
        }
        else if (repetitionTime?.value?.unit == 'Hafta') {
            let resultDate = addWeeks(new Date(paymentDate.value), parseInt(repetitionTime?.value?.value))
            return format(resultDate, 'dd MMMM yyyy', { locale: tr });
        }
        else if (repetitionTime?.value?.unit == 'Ay') {
            let resultDate = addMonths(new Date(paymentDate.value), parseInt(repetitionTime?.value?.value))
            return format(resultDate, 'dd MMMM yyyy', { locale: tr });
        }
        else if (repetitionTime?.value?.unit == 'Yıl') {
            let resultDate = addYears(new Date(paymentDate.value), parseInt(repetitionTime?.value?.value))
            return format(resultDate, 'dd MMMM yyyy', { locale: tr });
        }
    }
}

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
                            <Message v-if="autoRenewalControl == 'control2' && control" severity="info"
                                :closable="false">
                                <span>Bu abonelik <strong>{{ getDate() }}</strong>
                                    Tarihinde yenilecektir.
                                </span>
                            </Message>
                            <Message v-if="autoRenewalControl == 'control1' && control" severity="warn"
                                :closable="false">
                                <span>Bu
                                    abonelik <strong>{{ getDate() }}</strong>
                                    Tarihinde sonlanacaktır.
                                </span>
                            </Message>
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