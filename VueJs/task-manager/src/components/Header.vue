<template>
  <header>
    <container class="navigation">
      <div class="navigation__logo">
        <span>My</span>
        <span>Tasks</span>
      </div>
      <nav class="navigation__links">
        <router-link to="/">All</router-link>
        <router-link to="/onGoing">On Going</router-link>
        <router-link to="/finished">Finished</router-link>
        <router-link to="/corbeille">Corbeille</router-link>
        <router-link to="/add">
          <button>Add</button>
        </router-link>
      </nav>
    </container>
  </header>
</template>

<script setup lang="ts" >
import Container from "./Container.vue";
</script>

<style lang="scss" scoped >
$primary: rgb(255, 115, 1);
%flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

header {
  width: 100vw;
  height: fit-content;
  position: fixed;
  top: 0;
  left: 0;
  @extend %flex;

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 10px;
    border: 1px solid black;

    &__logo {
      font-size: 20px;
      font-weight: 700;

      & span:nth-child(1) {
        color: gray;
      }
      & span:nth-child(2) {
        color: $primary;
      }
    }

    &__links {
      @extend %flex;
      gap: 25px;
      font-size: 18px;
      font-weight: 500;

      a {
        color: black;
      }
      .router-link-active {
        color: $primary;
      }
      button {
        padding: 16px 32px;
        font-size: 18px;
        background-color: black;
        color: white;
        border-radius: 5px;
      }
    }
  }
}
</style>