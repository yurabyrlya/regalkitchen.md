<script lang="ts" setup>

</script>

<template>
    <Navbar/>
    <!-- Hero Start -->
    <div class="container-fluid bg-light py-6 my-6 mt-0">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-7 col-md-12">
                    <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-2 px-md-4 py-1 mb-4">
                        {{ $t('welcome')}}
                    </small>
                    <h1 class="display-5 mb-4 text-primary">{{ $t('passion') }}  </h1>
                    <h3 class="mb-4 text-primary">{{ $t('kitchenWay') }}  </h3>
                    <a href="#book" class="btn btn-primary hero-btn btnborder-0 rounded-pill py-3 px-md-4 px-md-5 me-1 me-sm-2 mt-2  ">{{ $t('bookVisit') }}</a>
                    <NuxtLink to="/our-work" class="btn btn-light hero-btn border-0 rounded-pill py-3 px-2 px-md-4 mt-2 ">{{ $t('knowMore') }}
                        <i class="fas fa-arrow-right ps-2"></i>
                    </NuxtLink>
                </div>
                <div class="col-lg-5 col-md-12">
                    <img :src="'img/hero.png'" class="img-fluid rounded " :alt="$t('kitchenWay')">
                </div>
            </div>
        </div>
    </div>
    <!-- Hero End -->

    <About/>

    <!-- Fact Start-->
    <!-- <div class="container-fluid faqt py-6">
        <div class="container">
            <div class="row g-4 align-items-center">
                <div class="col-lg-7">
                    <div class="row g-4">
                        <div class="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
                            <div class="faqt-item bg-primary rounded p-4 text-center">
                                <i class="fas fa-users fa-4x mb-4 text-white"></i>
                                <h1 class="display-4 fw-bold" data-toggle="counter-up">12</h1>
                                <p class="text-dark text-uppercase fw-bold mb-0">Happy Customers</p>
                            </div>
                        </div>
                        <div class="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
                            <div class="faqt-item bg-primary rounded p-4 text-center">
                                <i class="fas fa-users-cog fa-4x mb-4 text-white"></i>
                                <h1 class="display-4 fw-bold" data-toggle="counter-up">2</h1>
                                <p class="text-dark text-uppercase fw-bold mb-0">Experts</p>
                            </div>
                        </div>
                        <div class="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
                            <div class="faqt-item bg-primary rounded p-4 text-center">
                                <i class="fas fa-check fa-4x mb-4 text-white"></i>
                                <h1 class="display-4 fw-bold" data-toggle="counter-up">10</h1>
                                <p class="text-dark text-uppercase fw-bold mb-0">Installs Complete</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                    <div class="video">
                        <button type="button" class="btn btn-play" data-bs-toggle="modal" data-src="https://youtu.be/llTcBRQ6EEI?si=PkzU0ykWC6rWlV54" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- Modal Video -->
    <!-- <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-0">
                <div class="modal-header">
                    <h5 class="text-primary fw-bold">Studio.<span class="text-dark">md</span> </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="ratio ratio-16x9">
                        <iframe
                            id="video"
                            class="embed-responsive-item" 
                            width="560" height="315" 
                            src="https://www.youtube.com/embed/bn6YH9Wf834" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div> --> 
    <!-- Fact End -->

    <Services/>
    <CategoryIndex/>
    <div id="book">
        <Book/>
    </div>
    <Footer/>
    <BackToTop/>

</template>
