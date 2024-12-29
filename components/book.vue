<template>
    <!-- Book Us Start -->
    <div class="container-fluid contact py-6" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-0">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    <div class="border border-primary bg-light py-5 px-4">
                        <div class="text-center">
                            <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">{{ $t('submitRequest') }}</small>
                            <h1 class="display-5 mb-5">{{ $t('requestForm') }}</h1>
                        </div>
                        <form @submit.prevent="handleSubmit">
                            <div class="row g-4 form">
                                <div class="col-lg-6 col-md-12">
                                    <input type="name"
                                     class="form-control border-primary p-2" 
                                     :placeholder="$t('enterName')"
                                     v-model="form.name"
                                     required
                                     >
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <input type="email"
                                        class="form-control border-primary p-2" 
                                        :placeholder="$t('enterEmail')"
                                        v-model="form.email"
                                        required
                                    >
                                </div>    
                                <div class="col-lg-6 col-md-12">
                                    <select class="form-select border-primary p-2"
                                        v-model="form.country"
                                        required
                                    >
                                        <option>{{ $t('selectCountry') }}</option>
                                        <option selected value="Moldova">Moldova</option>
                                        <option value="UK">UK</option>
                                    </select>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <input type="mobile"
                                        class="form-control border-primary p-2" 
                                        :placeholder="$t('contactNumber')"
                                        v-model="form.mobile"
                                     >
                                </div>
                                <div class="col-12 text-center">
                                    <button type="submit" 
                                        class="btn btn-primary px-5 py-3 rounded-pill"
                                        :disabled="isSubmitting"
                                    >
                                         <span v-show="isSubmitting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        {{ $t('submit') }}
                                    </button>
                                </div>
                                <div class="col-12 text-center">
                                    <div v-if="successMessage" class="alert alert-warning" role="alert">
                                        {{ successMessage }}
                                    </div>
                                    <div v-if="errorMessage" class="alert alert-danger" role="alert">
                                        {{ errorMessage }}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-2">
                </div>
            </div>
        </div>
    </div>
    <!-- Book Us End -->
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    interface FormData {
        name: string;
        email: string;
        country: string;
        mobile: string;
    }

    const form = ref<FormData>({
        name: '',
        email:'',
        country: 'Moldova',
        mobile: '',
    })

    const isSubmitting = ref(false);
    const successMessage = ref('');
    const errorMessage = ref('');

    const handleSubmit = async () => {
        isSubmitting.value = true;
        successMessage.value = '';
        errorMessage.value = '';

        try {
            const response = await $fetch<{success: boolean; message: string }>('/api/request', {
               method: 'POST',
               body: {...form.value, type: 'request'},
            })
            if (response.success) {
                successMessage.value = t('submitSucessMessage');
                form.value = { name: '', email: '', mobile: '', country: 'Moldova' }; // Reset form
            } else {
                errorMessage.value = t('submitErrorMessage');
                console.error(errorMessage.value);
            }

        } catch (error: any) {
            console.error('Error submitting form:', error);
            errorMessage.value = t('submitErrorMessage');
        } finally {
            isSubmitting.value = false;
        }

    }

</script>
