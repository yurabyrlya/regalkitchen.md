<template>
    <div class="container-fluid menu bg-light py-6 my-6">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-duration="1s">
                <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">{{ $t('ourKitchens') }}</small>
                <h1 class="display-5 mb-5">{{ $t('mostPopular') }}</h1>
            </div>
            <div class="tab-class text-center">
                <ul class="nav nav-pills d-inline-flex justify-content-center mb-5 wow fadeInUp"  data-wow-duration="1s">
                    <li class="nav-item p-2">
                        <a class="d-flex py-2 mx-2 border border-primary bg-white rounded-pill active" data-bs-toggle="pill" href="#tab-6">
                            <span class="text-dark" style="width: 150px;">{{ $t('modern') }}</span>
                        </a>
                    </li>
                    <li class="nav-item p-2">
                        <a class="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-7">
                            <span class="text-dark" style="width: 150px;">{{ $t('design') }}</span>
                        </a>
                    </li>
                    <li class="nav-item p-2">
                        <a class="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-9">
                            <span class="text-dark" style="width: 150px;">{{ $t('country') }}</span>
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div id="tab-6" class="tab-pane fade show p-0 active wow fadeInUp" data-wow-duration="1s">
                        <div class="row g-5 align-items-center">
                        <div class="col-lg-5">
                            <img src="public/img/modern.png" class="img-fluid rounded" alt="">
                        </div>
                        <div class="col-lg-7">
                            <h1 class="display-5 mb-4">{{  $t('modernKitchens') }} </h1>
                            <p class="mb-4 text-start">{{  $t('modernDesc') }} </p>
                            <div class="row g-4 text-dark mb-5">
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('kitchenServices') }}
                                </div>
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('support') }}
                                </div>
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('customization') }}
                                </div>
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('efficientInstall') }}
                                </div>
                            </div>
                            <NuxtLink to="/kitchens#modern" class="btn btn-primary py-3 px-5 rounded-pill">{{  $t('seeMore') }}<i class="fas fa-arrow-right ps-2"></i></NuxtLink>
                        </div>
                        </div>
                    </div>
                    <div id="tab-7" class="tab-pane fade show p-0 wow fadeInUp" data-wow-duration="1s">
                        <div class="row g-5 align-items-center">
                        <div class="col-lg-5">
                            <img src="public/img/design.png" class="img-fluid rounded" alt="">
                        </div>
                        <div class="col-lg-7">
                            <h1 class="display-5 mb-4">{{ $t('designerKitchens') }}</h1>
                            <p class="mb-4 text-start">
                                {{  $t('designerDesc') }}
                            </p>
                            <div class="row g-4 text-dark mb-5">
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('kitchenServices') }}
                                </div>
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('support') }}
                                </div>
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('customization') }}
                                </div>
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('efficientInstall') }}
                                </div>
                            </div>
                            <NuxtLink to="/kitchens#design" class="btn btn-primary py-3 px-5 rounded-pill">{{  $t('seeMore') }}<i class="fas fa-arrow-right ps-2"></i></NuxtLink>
                        </div>
                        </div>
                    </div>
                    <div id="tab-9" class="tab-pane fade show p-0 wow fadeInUp" data-wow-duration="1s">
                        <div class="row g-5 align-items-center">
                        <div class="col-lg-5">
                            <img src="public/img/cottage.png" class="img-fluid rounded" alt="">
                        </div>
                        <div class="col-lg-7">
                            <h1 class="display-5 mb-4">{{ $t('cottageKitchens') }}</h1>
                            <p class="mb-4 text-start">{{ $t('cottageDesc') }}
                            </p>
                            <div class="row g-4 text-dark mb-5">
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('kitchenServices') }}
                                </div>
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('support') }}
                                </div>
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('customization') }}
                                </div>
                                <div class="col-sm-6">
                                    <i class="fas fa-share text-primary me-2"></i> {{ $t('efficientInstall') }}
                                </div>
                            </div>
                            <NuxtLink to="/kitchens#country" class="btn btn-primary py-3 px-5 rounded-pill">{{  $t('seeMore') }}<i class="fas fa-arrow-right ps-2"></i></NuxtLink>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>