<script setup lang="ts">
    const route = useRoute()

    function active(page: String): String {
     
        if (route.name === page) {
            return 'active'
        }
        return '';
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
                        <NuxtLink to="/" class="nav-item nav-link" :class="active('index')">Home</NuxtLink>
                        <NuxtLink to="/about" class="nav-item nav-link" :class="active('about')">About</NuxtLink>
                        <NuxtLink to="/service" class="nav-item nav-link" :class="active('service')">Services</NuxtLink>
                        <NuxtLink to="/kitchens" class="nav-item nav-link" :class="active('kitchens')">Kitchens</NuxtLink>
                        <NuxtLink to="/our-work" class="nav-item nav-link" :class="active('our-work')">Our work</NuxtLink>
                        <NuxtLink to="/contact" class="nav-item nav-link" :class="active('contact')">Contact</NuxtLink>
                    </div>
                    <!-- <button class="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search"></i></button> -->
                    <NuxtLink to="/book" class="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Submit a Request</NuxtLink>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar End -->
    <!-- <ModalSearch/> -->
</template>

<script lang="ts" setup>

</script>

<style>

</style>