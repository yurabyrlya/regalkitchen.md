<template>
    <!-- About Satrt -->
    <div class="container-fluid py-6">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                    <img src="public/img/about.jpg" class="img-fluid rounded" alt="">
                </div>
                <div class="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
                    <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">{{ $t('about') }}</small>
                    <h1 class="display-6 mb-4"> {{ $t('weAreRegal') }} </h1>
                    <p class="mb-4">{{ $t('description') }}</p>
                    <div class="row g-4 text-dark mb-5">
                        <div class="col-sm-6">
                            <i class="fas fa-share text-primary me-2"></i>{{ $t('kitchenServices') }}
                        </div>
                        <div class="col-sm-6">
                            <i class="fas fa-share text-primary me-2"></i>{{ $t('efficientInstall') }}
                        </div>
                        <div class="col-sm-6">
                            <i class="fas fa-share text-primary me-2"></i>{{ $t('customization') }}
                        </div>
                        <div class="col-sm-6">
                            <i class="fas fa-share text-primary me-2"></i>{{ $t('support') }}
                        </div>
                    </div>
                     <ButtonPrimary v-show="showBtn" 
                        :title="$t('about')" 
                        href="/about"
                     />
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->
</template>

<script lang="ts" setup>
  const route = useRoute();  
 const showBtn: Boolean = route.name === 'index';
</script>

<style>

</style>