<script lang="ts" setup>
    const route = useRoute()
    const showBtn: Boolean = route.name === 'index';
</script>

<template>
      <!-- Service Start -->
      <div class="container-fluid service py-6">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-duration="1s">
                <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">{{  $t('ourServices') }}</small>
                <h1 class="display-6 mb-5">{{ $t('whatWeOffer') }}</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1s">
                    <div class="bg-light rounded service-item">
                        <div class="service-content d-flex align-items-center justify-content-center p-4">
                            <div class="service-content-icon text-center">
                                <i class="fas fa-tools fa-7x text-primary mb-4"></i>
                                <h4 class="mb-3">{{ $t('germanInstall') }}</h4>
                                <p class="mb-4">{{ $t('expertInstall') }}</p>
                                <NuxtLink v-show="showBtn" to="/service" class="btn btn-primary px-4 py-2 rounded-pill">{{  $t('readMore') }}</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1s">
                    <div class="bg-light rounded service-item">
                        <div class="service-content d-flex align-items-center justify-content-center p-4">
                            <div class="service-content-icon text-center">
                                <i class="fas fa-drafting-compass fa-7x text-primary mb-4"></i>
                                <h4 class="mb-3">{{ $t('customDesign') }}</h4>
                                <p class="mb-4">{{ $t('tailoredDesign') }}</p>
                                <NuxtLink v-show="showBtn" to="/service" class="btn btn-primary px-4 py-2 rounded-pill">{{  $t('readMore') }}</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1s">
                    <div class="bg-light rounded service-item">
                        <div class="service-content d-flex align-items-center justify-content-center p-4">
                            <div class="service-content-icon text-center">
                                <i class="fas fa-home fa-7x text-primary mb-4"></i>
                                <h4 class="mb-3">{{ $t('luxuryRenovation') }}</h4>
                                <p class="mb-4">{{ $t('highEndMaterials') }}</p>
                                <NuxtLink v-show="showBtn" to="/service" class="btn btn-primary px-4 py-2 rounded-pill">{{  $t('readMore') }}</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1s">
                    <div class="bg-light rounded service-item">
                        <div class="service-content d-flex align-items-center justify-content-center p-4">
                            <div class="service-content-icon text-center">
                                <i class="fas fa-th-large fa-7x text-primary mb-4"></i>
                                <h4 class="mb-3">{{ $t('modularSolution') }}</h4>
                                <p class="mb-4">{{ $t('flexibleUnits') }}</p>
                                <NuxtLink v-show="showBtn" to="/service" class="btn btn-primary px-4 py-2 rounded-pill">{{  $t('readMore') }}</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- Service End -->
</template>


<style>

</style>