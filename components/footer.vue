<template>
    <!-- Footer Start -->
    <div class="container-fluid footer py-6 my-6 mb-0 bg-light" data-wow-delay="0.1s">
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
                            <p><i class="fa fa-map-marker-alt text-primary me-2"></i> <a href="https://www.google.com/maps/place/Strada+Chi%C8%99in%C4%83ului+64,+MD-2084,+Cricova,+Moldova/@47.1376472,28.8669753,17z/data=!3m1!4b1!4m6!3m5!1s0x40cbd89ac46b3867:0x8f9bc000e11b2578!8m2!3d47.1376472!4d28.8669753!16s%2Fg%2F11lg045gj7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">  Str. Chișinăului 64, Cricova, Moldova</a></p>
                            <p><i class="fa fa-phone-alt text-primary me-2"></i> <a href="tel:+37361137774">(+373) 611 377 74</a></p>
                            <p><i class="fas fa-envelope text-primary me-2"></i> <a href="mailto:regalkitch3n@gmail.com">regalkitch3n@gmail.com</a> </p>
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