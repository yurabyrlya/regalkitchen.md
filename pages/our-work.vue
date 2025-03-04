<script lang="ts" setup>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { ref } from 'vue';


//https://vue3-carousel.ismail9k.com/config.html
const galleryConfig = {
  itemsToShow: 1,
  mouseDrag: true,
  touchDrag: true,
  wrapAround: false,
};

let thumbnailsConfig = {
  itemsToShow: 4,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  autoplay: 5000,
  breakpoints: {
    // 200px and up
    200: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // 400px and up
    400: {
      itemsToShow: 1.5,
      snapAlign: 'center',
    },
    // 768px and up
    768: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
  },
};

const imageUrl: string = "/img";
const currentSlide: Ref = ref(0);
const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide);
const imagesPath: string = imageUrl + "/images/img";
const imagesAmount: number = 98;

const currentSlide2: Ref = ref(0);
const slideTo2 = (nextSlide: number) => (currentSlide2.value = nextSlide);
const imagesPath2: string = imageUrl + "/images2/img";
const imagesAmount2: number = 114;

const currentSlide3: Ref = ref(0);
const slideTo3 = (nextSlide: number) => (currentSlide3.value = nextSlide);
const imagesPath3: string = imageUrl + "/images3/img";
const imagesAmount3: number = 78;

const currentSlide4: Ref = ref(0);
const slideTo4 = (nextSlide: number) => (currentSlide4.value = nextSlide);
const imagesPath4: string = imageUrl + "/images4/img";
const imagesAmount4: number = 18;

function beforeInit(): void {

}

function isNotMobileScreen(): boolean {
  if (!window) {
    return false;
  }
  return window.innerWidth >= 768;
}

</script>

<template>
  <Navbar/>
  <Hero :title="$t('ourWork')"/>

  <div class="container">
    <div class="row mt-5 mb-5">
      <Carousel id="gallery3" 
        v-bind="galleryConfig" 
        v-model="currentSlide3"
        v-if="isNotMobileScreen()"
      >
      <Slide v-for="imageId3 in imagesAmount3" :key="imageId3">
        <div class="carousel__item">
          <img :src="imagesPath3 + imageId3 + '.jpg' "
           class="image-fluid" 
           width="1300" 
           height="720"
           />
        </div>
      </Slide>
      </Carousel>

      <Carousel id="thumbnails3"
       v-bind="thumbnailsConfig" 
       v-model="currentSlide3"
       @init="beforeInit" 
       >
        <Slide v-for="imageId3 in imagesAmount3" :key="imageId3">
          <div class="carousel__item" @click="slideTo3(imageId3 - 1)">
            <img :src="imagesPath3 + imageId3 + '.jpg' " 
              class="image-fluid"
                width="450" 
                height="200"
                sizes="md:400px"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div class="row mt-5 mb-5">
      <Carousel id="gallery4" 
        v-bind="galleryConfig" 
        v-model="currentSlide4" 
        v-if="isNotMobileScreen()"
      >
        <Slide v-for="imageId in imagesAmount4" :key="imageId">
          <div class="carousel__item">
            <img :src="imagesPath4 + imageId + '.jpg' "
            class="image-fluid" 
            width="1300" 
            height="720"
            loading="lazy"
            />
          </div>
        </Slide>
      </Carousel>
      <Carousel id="thumbnails4"
        v-bind="thumbnailsConfig" 
        v-model="currentSlide4"
        @init="beforeInit" 
       >
          <Slide v-for="imageId in imagesAmount4" :key="imageId">
            <div class="carousel__item" @click="slideTo4(imageId - 1)">
              <img :src="imagesPath4 + imageId + '.jpg' " 
              class="image-fluid"
              width="450" 
              height="200"
              sizes="md:400px"
              loading="lazy"
              />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
      </Carousel>
    </div>
    <div class="row mt-5 mb-5">
      <Carousel id="gallery2" 
        v-bind="galleryConfig" 
        v-model="currentSlide2"
        v-if="isNotMobileScreen()"
      >
      <Slide v-for="imageId2 in imagesAmount2" :key="imageId2">
        <div class="carousel__item">
          <img :src="imagesPath2 + imageId2 + '.jpg' "
           class="image-fluid" 
           width="1300" 
           height="720"
           loading="lazy"
           />
        </div>
      </Slide>
      </Carousel>

      <Carousel id="thumbnails2"
       v-bind="thumbnailsConfig" 
       v-model="currentSlide2"
       @init="beforeInit" 
       >
        <Slide v-for="imageId2 in imagesAmount2" :key="imageId2">
          <div class="carousel__item" @click="slideTo2(imageId2 - 1)">
            <img :src="imagesPath2 + imageId2 + '.jpg' " 
              class="image-fluid"
                width="450" 
                height="200"
                sizes="md:400px"
                loading="lazy"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div class="row mt-5 mb-5">
      <Carousel id="gallery" 
        v-bind="galleryConfig" 
        v-model="currentSlide"
        v-if="isNotMobileScreen()"
      >
        <Slide v-for="imageId in imagesAmount" :key="imageId">
          <div class="carousel__item">
            <img :src="imagesPath + imageId + '.jpg' "
              class="image-fluid" 
              width="1300" 
              height="720"
              loading="lazy"
            />
          </div>
        </Slide>
      </Carousel>
      <Carousel id="thumbnails"
        v-bind="thumbnailsConfig" 
        v-model="currentSlide"
        @init="beforeInit" 
       >
          <Slide v-for="imageId in imagesAmount" :key="imageId">
            <div class="carousel__item" @click="slideTo(imageId - 1)">
              <img :src="imagesPath + imageId + '.jpg' " 
              sizes="md:400px"
              class="image-fluid"
              width="450" 
              height="200"
              loading="lazy"
              />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
      </Carousel>
    </div>

    <div class="row mt-5">
      <div class="text-center wow bounceInUp mt-5" data-wow-delay="0.1s">
        <NuxtLink to="/book" class="btn btn-primary hero-btn btnborder-0 rounded-pill py-3 px-md-4 px-md-5 me-1 me-sm-2 mt-2 animated bounceInLeft  ">{{ $t('bookVisit') }}</NuxtLink>
    </div>
    </div>
  </div>

  <Footer/>
  <BackToTop/>
</template>

<style scoped>
.row {
    --bs-gutter-x: 0; 
    --bs-gutter-y: 0; 
}

</style>