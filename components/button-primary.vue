<script lang="ts" setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  });
</script>

<template>
    <a :href="href" 
      class="btn btn-primary py-3 px-5 rounded-pill"
      > {{ title }}
        <i class="fas fa-arrow-right ps-2"></i>
    </a>  
</template>
