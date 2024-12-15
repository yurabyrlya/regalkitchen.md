<script lang="ts" setup>

  defineProps({
    page: {
      type: String,
      required: true
    }
  });
</script>

<template>
    <ol class="breadcrumb justify-content-center mb-0 animated bounceInDown">
        <li class="breadcrumb-item"><NuxtLink to="/">{{ $t('home') }}</NuxtLink></li>
        <li class="breadcrumb-item text-dark" aria-current="page">{{ page }}</li>
    </ol>
</template>
