<template>
    <!-- Footer Start -->
    <div class="container-fluid footer py-6 my-6 mb-0 bg-light wow bounceInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="footer-item">
                        <NuxtLink to="/" class="navbar-brand">
                            <img class="logo" width="320" src="/img/logos/regal_logo.svg"></img>
                        </NuxtLink>
                        <p class="lh-lg mb-4 mt-3">{{ $t('specializeInGermanKitchenDesigns') }} </p>
                        <div class="footer-icon d-flex mb-4">
                            <a href="https://www.facebook.com/people/Regal-Kitchen/61570418261961" target="_blank" class="btn btn-primary btn-sm-square me-2 rounded-circle"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/regalkitchen.md" target="_blank" class="btn btn-primary btn-sm-square me-2 rounded-circle"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="footer-item">
                        <h4 class="mb-4">{{ $t('whatWeOfferFooter') }}</h4>
                        <div class="d-flex flex-column align-items-start">
                            <a class="text-body mb-3" href="#"><i class="fa fa-check text-primary me-2"></i>{{ $t('customDesign') }}</a>
                            <a class="text-body mb-3" href="#"><i class="fa fa-check text-primary me-2"></i>{{ $t('modularKitchenInstallations') }}</a>
                            <a class="text-body mb-3" href="#"><i class="fa fa-check text-primary me-2"></i>{{ $t('premiumKitchenRenovations') }}</a>
                            <a class="text-body mb-3" href="#"><i class="fa fa-check text-primary me-2"></i>{{ $t('highQualityKitchenFittings') }}</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="footer-item">
                        <h4 class="mb-4">{{ $t('contact') }}</h4>
                        <div class="d-flex flex-column align-items-start">
                            <p><i class="fa fa-map-marker-alt text-primary me-2"></i> Str. Chișinăului 64, Cricova, Moldova</p>
                            <p><i class="fa fa-phone-alt text-primary me-2"></i> (+373) 611 377 74</p>
                            <p><i class="fas fa-envelope text-primary me-2"></i> regalkitch3n@gmail.com</p>
                            <p><i class="fa fa-clock text-primary me-2"></i> {{ $t('support') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->

    <!-- Copyright Start -->
    <div class="container-fluid copyright bg-dark py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <span class="text-light"><a href="#"><i class="fas fa-copyright text-light me-2"></i><span class="text-capitalize">regal kitchen</span></a>, All right reserved.</span>
                </div>
                <div class="col-md-6 my-auto text-center text-md-end text-white">
                    Developed by <a href="https://www.linkedin.com/in/iuri-birlea">Iuri Birlea </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Copyright End -->
</template>

<script lang="ts" setup>

</script>

<style>

</style>