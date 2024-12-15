<script setup lang="ts">
    import type {Locale} from '@nuxtjs/i18n';
    import { ref, Ref } from 'vue';

    const route = useRoute()
    const { setLocale } = useI18n()

    function active(page: String): String {
     
        if (route.name === page) {
            return 'active'
        }
        return '';
    }

    let lang: Ref<string> = ref('English');

    function setLang(locale: Locale): void {
        setLocale(locale).then(() => {
        if (locale === 'ro') {
            lang.value = 'Romanian';
        } else if (locale === 'ru') {
            lang.value = 'Russian';
        } else {
            lang.value = 'English';
        }
        }).catch((error) => {
            console.error('Error while setting locale:', error);
        });
    }

</script>

<template>
  <!-- Navbar start -->
  <div class="container-fluid nav-bar">
        <div class="container">
            <nav class="navbar navbar-light navbar-expand-lg py-4">
                <NuxtLink to="/" class="navbar-brand">
                    <img width="250" src="/img/logos/regal_logo.svg"></img>
                </NuxtLink>
                <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars text-primary"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <NuxtLink to="/" class="nav-item nav-link" :class="active('index')">{{ $t('home') }}</NuxtLink>
                        <NuxtLink to="/about" class="nav-item nav-link" :class="active('about')">{{ $t('about') }}</NuxtLink>
                        <NuxtLink to="/service" class="nav-item nav-link" :class="active('service')">{{ $t('services') }}</NuxtLink>
                        <NuxtLink to="/kitchens" class="nav-item nav-link" :class="active('kitchens')">{{ $t('kitchens') }}</NuxtLink>
                        <NuxtLink to="/our-work" class="nav-item nav-link" :class="active('our-work')">{{ $t('ourWork') }}</NuxtLink>
                        <NuxtLink to="/contact" class="nav-item nav-link" :class="active('contact')">{{ $t('contact') }}</NuxtLink>
                    </div>
                    <!-- <button class="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search"></i></button> -->
                    <NuxtLink to="/book" class="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">{{ $t('submitRequest') }}</NuxtLink>
                    <div class="dropdown ms-auto" id="lang">
                    <a 
                        class="btn dropdown-toggle" 
                        type="button"
                        id="dropdownMenuButton1" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        {{ lang }}
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#" @click="setLang('en')">English</a></li>
                        <li><a class="dropdown-item" href="#" @click="setLang('ro')">Romanian</a></li>
                        <li><a class="dropdown-item" href="#" @click="setLang('ru')">Russian</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar End -->
    <!-- <ModalSearch/> -->
</template>

<script lang="ts" setup>

</script>

<style scoped>
    #lang {
      min-width: 120px;
    }
</style>