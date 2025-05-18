<template>
  <section class="container">
    <slot />
  </section>
</template>

<script setup lang="ts" >
import { defineProps } from "vue";
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  max-width: 1440px;
  padding-inline: 50px;
  margin-inline: auto;
}
</style>