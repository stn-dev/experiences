<script setup lang="ts" >
import { useSayHello } from "../composables/useSayHello";
useSayHello("hello from the home page");
</script>

<template>
  <section class="container">
    <h1>
      <span>welcome</span>
      in the
      home page!
    </h1>
    <h4>
      This is my first
      <span>nuxt js</span>
      website
    </h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet facilis assumenda id totam deleniti soluta, minus eum consectetur qui non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet facilis assumenda id totam deleniti soluta, minus eum consectetur qui non?</p>
  </section>
</template>

<style scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  padding-top: 100px;
}

h1 {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
}

span {
  color: rgb(133, 197, 5);
}

h4 {
  font-size: 20px;
}
</style>
