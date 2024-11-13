<template>
   <!-- Hero Start -->
   <div class="container-fluid bg-light py-6 my-6 mt-0">
    <div class="container text-center animated bounceInDown">
        <h1 class="display-1 mb-4">{{ title }}</h1>
        <Breadcrump :page="title"/>
    </div>
  </div>
  <!-- Hero End -->
</template>

<script lang="ts" setup>

  defineProps({
    title: {
      type: String,
      required: true
    }
  });
</script>

<style>

</style>