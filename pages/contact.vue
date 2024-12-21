<template>

<Navbar/>
  <Hero title="Contact"/>
 
        <!-- Contact Start -->
        <div class="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="p-md-5 p-1 bg-light rounded contact-form">
                    <div class="row g-4">
                        <div class="col-12">
                            <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">{{ $t('getInTouch') }}</small>
                            <h1 class="display-5 mb-0 ">{{ $t('contactUs') }}</h1>
                        </div>
                        <div class="col-md-6 col-lg-7">
                            <form>
                                <input type="text"
                                 class="w-100 form-control p-3 mb-4 border-primary bg-light" 
                                 :placeholder="$t('enterName')"
                                 required
                                >
                                <input type="email"
                                 class="w-100 form-control p-3 mb-4 border-primary bg-light" 
                                 :placeholder="$t('enterEmail')"
                                 required
                                 >
                                <textarea class="w-100 form-control mb-4 p-3 border-primary bg-light"
                                  rows="4" 
                                  cols="10"
                                  :placeholder="$t('yourMessage')"
                                  required
                                  ></textarea>
                                <button class="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit"> {{ $t('submitNow') }} </button>
                            </form>
                        </div>
                        <div class="col-md-6 col-lg-5">
                            <div>
                                <div class="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                                    <i class="fas fa-map-marker-alt fa-2x text-primary me-3"></i>
                                    <div class="">
                                        <h5>{{ $t('address') }}</h5>
                                        <p class="contact-info"><a href="https://www.google.com/maps/place/Strada+Chi%C8%99in%C4%83ului+64,+MD-2084,+Cricova,+Moldova/@47.1376472,28.8669753,17z/data=!3m1!4b1!4m6!3m5!1s0x40cbd89ac46b3867:0x8f9bc000e11b2578!8m2!3d47.1376472!4d28.8669753!16s%2Fg%2F11lg045gj7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">  Str. Chișinăului 64, Cricova, Moldova</a></p>
                                    </div>
                                </div>
                                <div class="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                                    <i class="fas fa-envelope fa-2x text-primary me-3"></i>
                                    <div class="">
                                        <h5>{{ $t('email') }}</h5>
                                        <p class="mb-2 contact-info">
                                            <a href="mailto:regalkitch3n@gmail.com">regalkitch3n@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="d-inline-flex w-100 border border-primary p-4 rounded">
                                    <i class="fa fa-phone-alt fa-2x text-primary me-3"></i>
                                    <div class="">
                                        <h5>{{ $t('telephone') }}</h5>
                                        <p class="mb-2 contact-info"><a href="tel:+37361137774">(+373) 611 377 74</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->

  <Footer/>
  <BackToTop/>
</template>

<script lang="ts" setup>

</script>

<style>

</style>