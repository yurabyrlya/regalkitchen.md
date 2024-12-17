
<script lang="ts" setup>
import { useNuxtApp } from '#app';
import { onMounted } from 'vue';

const { $bs } = useNuxtApp();

onMounted(()=> {
    selectTabFromUrl();
});

function selectTabFromUrl(): void {
    const route = useRoute();
    if (!route.hash) {
        return ;
    }
    const slectedKitchenTab: any = document.querySelector(route.hash);
    const tab: Any = new $bs.Tab(slectedKitchenTab);
    tab.show(); // switch to selected tab 
}

</script>

<template>
    <div class="container-fluid menu bg-light py-6 my-6">
        <div class="container">
            <div class="text-center wow bounceInUp" data-wow-delay="0.1s">
                <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our kitchens</small>
                <h1 class="display-5 mb-5">Choose your kitchen.</h1>
            </div>
            <div class="tab-class text-center">
                <ul class="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                    <li class="nav-item p-2">
                        <a class="d-flex py-2 mx-2 border border-primary bg-white rounded-pill active" 
                          data-bs-toggle="pill"
                          id="modern" 
                          href="#tab-6"
                          >
                            <span class="text-dark" style="width: 150px;">Modern</span>
                        </a>
                    </li>
                    <li class="nav-item p-2">
                        <a class="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" 
                            id="design" 
                            data-bs-toggle="pill" 
                            href="#tab-7"
                            >
                            <span class="text-dark" style="width: 150px;">Design</span>
                        </a>
                    </li>
                    <li class="nav-item p-2">
                        <a class="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" 
                            data-bs-toggle="pill" 
                            href="#tab-9"
                            id="country"
                            >
                            <span class="text-dark" style="width: 150px;">Country</span>
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div id="tab-6" class="tab-pane fade show p-0 active">
                        <div class="col-lg-12 wow bounceInUp" data-wow-delay="0.1s">
                            <span class="display-6 text-primary">Como 2188 Verde // Loft 2224 Dust Grey</span>
                            <NuxtImg src="/img/kitchens/modern/2188-2224.jpg" class="img-fluid rounded mb-5 mt-5" />
                        </div>
                        <div class="col-lg-12 wow bounceInUp" data-wow-delay="0.1s">
                            <span class="display-6 text-primary">Sinus NCS</span>
                            <NuxtImg src="/img/kitchens/modern/2142.jpg" class="img-fluid rounded mb-5 mt-5" />
                        </div>
                        <div class="col-lg-12 wow bounceInUp" data-wow-delay="0.1s">
                            <span class="display-6 text-primary">Sinus RAL</span>
                            <NuxtImg src="/img/kitchens/modern/4100-950-a10-farblich-bearbeitet.jpg" class="img-fluid rounded mb-5 mt-5" />
                        </div>
                        <div class="col-lg-12 wow bounceInUp" data-wow-delay="0.1s">
                            <span class="display-6 text-primary">Como 2189 Azzurro // 2187 Elm</span>
                            <NuxtImg src="/img/kitchens/modern/2189-2187-a10-1.jpg" class="img-fluid rounded mb-5 mt-5" />
                        </div>
                        <div class="col-lg-12 wow bounceInUp mt-5" data-wow-delay="0.1s">
                            <div class="row">
                                <div class="col-lg-6">
                                    <NuxtImg src="/img/kitchens/modern/arosa.jpg" class="img-fluid rounded" />
                                </div>
                                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                    <span class="display-6 text-primary">Arosa 2296 Fenix Grigio Londra // Sinus 3000-245 Sage</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 wow bounceInUp mt-5" data-wow-delay="0.1s">
                            <div class="row">
                                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                    <span class="display-6 text-primary">Loft 2225 Cashmere</span>
                                </div>
                                <div class="col-lg-6">
                                <NuxtImg src="/img/kitchens/modern/2225-d14.jpg" class="img-fluid rounded" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 wow bounceInUp mt-5" data-wow-delay="0.1s">
                            <div class="row">
                                <div class="col-lg-6">
                                    <NuxtImg src="/img/kitchens/modern/2187-2294-d10.jpg" class="img-fluid rounded" />
                                </div>
                                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                    <span class="display-6 text-primary">Como 2187 Elm // Arosa 2294 Fenix Nero</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-7" class="tab-pane fade show p-0">
                        <div class="col-lg-12 wow bounceInUp" data-wow-delay="0.1s">
                            <span class="display-6 text-primary">Sinus 4000-228 Steel blue // Nova 4394 Neve High Gloss</span>
                            <NuxtImg src="/img/kitchens/design/4000-228-4394-a10.jpg" class="img-fluid rounded mb-5 mt-5" />
                        </div>
                        <div class="col-lg-12 wow bounceInUp" data-wow-delay="0.1s">
                            <span class="display-6 text-primary">Fresh 4316 Silk Grey // Loft 4223 Dark Black</span>
                            <NuxtImg src="/img/kitchens/design/4316-4223-a10-1.jpg" class="img-fluid rounded mb-5 mt-5" />
                        </div>
                        <div class="col-lg-12 wow bounceInUp mt-5" data-wow-delay="0.1s">
                            <div class="row">
                                <div class="col-lg-6">
                                    <NuxtImg src="/img/kitchens/design/2282_2223_a10_quadrat.jpg" class="img-fluid rounded" />
                                </div>
                                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                    <span class="display-6 text-primary">Como 2185 Walnut // Arosa
                                        4296 Fenix Grigio Londra</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 wow bounceInUp mt-5" data-wow-delay="0.1s">
                            <div class="row">
                                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                    <span class="display-6 text-primary">Florida Multicolour 2100 // Wallis 2700-322 Light</span>
                                </div>
                                <div class="col-lg-6">
                                     <NuxtImg src="/img/kitchens/design/2100-2700-a10.jpg" class="img-fluid rounded" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 wow bounceInUp mt-5" data-wow-delay="0.1s">
                            <div class="row">
                                <div class="col-lg-6">
                                    <NuxtImg src="/img/kitchens/design/2282_2223_a10_quadrat.jpg" class="img-fluid rounded" />
                                </div>
                                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                    <span class="display-6 text-primary">Havanna 2282 Chocolate Oak // Loft 2223 Dark Black</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 wow bounceInUp mt-5" data-wow-delay="0.1s">
                            <div class="row">
                                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                    <span class="display-6 text-primary">Porto 4264 Piano matt // 4262 Titanio matt</span>
                                </div>
                                <div class="col-lg-6">
                                     <NuxtImg src="/img/kitchens/design/4264-4262-d16.jpg" class="img-fluid rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-9" class="tab-pane fade show p-0">
                        <div class="col-lg-12 wow bounceInUp" data-wow-delay="0.1s">
                            <span class="display-6 text-primary">Piemont 3460-227 Manhattan // Delta 2152 Cantaro Oak</span>
                            <NuxtImg src="/img/kitchens/country/3460-2152-a10.jpg" class="img-fluid rounded mb-5 mt-5" />
                        </div>
                        <div class="col-lg-12 wow bounceInUp" data-wow-delay="0.1s">
                            <span class="display-6 text-primary">Piemont 3460-233 Pearl // 3460-9999</span>
                            <NuxtImg src="/img/kitchens/country/3460-233-232-a10.jpg" class="img-fluid rounded mb-5 mt-5" />
                        </div>
                        <div class="col-lg-12 wow bounceInUp" data-wow-delay="0.1s">
                            <span class="display-6 text-primary">Normandie 3470-79 Magnolia</span>
                            <NuxtImg src="/img/kitchens/country/3470-a10.jpg" class="img-fluid rounded mb-5 mt-5" />
                        </div>
                        <div class="col-lg-12 wow bounceInUp mt-5" data-wow-delay="0.1s">
                            <div class="row">
                                <div class="col-lg-6">
                                    <NuxtImg src="/img/kitchens/country/3460-2152-a10.jpg" class="img-fluid rounded" />
                                </div>
                                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                    <span class="display-6 text-primary">Piemont 3460-227 Manhattan // Delta 2152 Cantaro Oak</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 wow bounceInUp mt-5" data-wow-delay="0.1s">
                            <div class="row">
                                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                    <span class="display-6 text-primary">Normandie 3470-79 Magnolia</span>
                                </div>
                                <div class="col-lg-6">
                                     <NuxtImg src="/img/kitchens/country/3470-d20.jpg" class="img-fluid rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center wow bounceInUp mt-5" data-wow-delay="0.1s">
                <a class="btn btn-primary py-3 px-5 rounded-pill" target="_blank" href="/downloads/catalog-2023.pdf"> {{ $t('learnMore') }}
                    <i class="fas fa-arrow-right ps-2"></i>
                 </a>
            </div>
        </div>
    </div>
</template>

<style>
    .tab-content {
        img {
            width: 100%;
        }
    }
</style>

