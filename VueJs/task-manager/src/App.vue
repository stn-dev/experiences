

<template>
  <div>
    <Header />
    <main>
      <Container class="main">
        <router-view></router-view>
      </Container>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Container from "./components/Container.vue";
</script>

<style scoped lang="scss">
.main {
  padding-top: 100px;
  min-height: 100vh;
}
</style>
