<template>
    <!-- Book Us Start -->
    <div class="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-0">
                <div class="col-1">
                </div>
                <div class="col-10">
                    <div class="border border-primary bg-light py-5 px-4">
                        <div class="text-center">
                            <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">{{ $t('submitRequest') }}</small>
                            <h1 class="display-5 mb-5">{{ $t('requestForm') }}</h1>
                        </div>
                        <form action="#">
                            <div class="row g-4 form">
                                <div class="col-lg-4 col-md-6">
                                    <input type="name"
                                     class="form-control border-primary p-2" 
                                     :placeholder="$t('enterName')"
                                     required
                                     >
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <input type="email"
                                    class="form-control border-primary p-2" 
                                    :placeholder="$t('enterEmail')"
                                    required
                                    >
                                </div>    
                                <div class="col-lg-4 col-md-6">
                                    <select class="form-select border-primary p-2"
                                    required
                                    >
                                        <option selected>{{ $t('selectCountry') }}</option>
                                        <option value="1">Moldova</option>
                                        <option value="2">UK</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <select class="form-select border-primary p-2" aria-label="Default select example">
                                        <option selected>{{ $t('selectCity') }}</option>
                                        <option value="1">Belfast</option>
                                        <option value="2">Cahul</option>
                                        <option value="3">Chisinau</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <input type="mobile"
                                     class="form-control border-primary p-2" 
                                     :placeholder="$t('contactNumber')"
                                     >
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <input type="date" 
                                    class="form-control border-primary p-2" 
                                    placeholder="Select contact Date"
                                    >
                                </div>
                                <div class="col-12 text-center">
                                    <button type="submit" 
                                    class="btn btn-primary px-5 py-3 rounded-pill">{{ $t('submit') }}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-1">
                </div>
            </div>
        </div>
    </div>
    <!-- Book Us End -->
</template>

<script lang="ts" setup>

</script>

<style>

</style>