<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userSingIn = ref("");

onMounted(() => {
  const user = localStorage.getItem("user") as string;
  userSingIn.value = user;
  console.log(userSingIn.value);
});

const handleLogOUt = () => {
  localStorage.removeItem("user");
  router.push("/login");
};
</script>

<template >
  <div class="app">
    <nav class="links">
      <div class="page-link">
        <router-link to="/home">Home</router-link>

        <router-link to="/item">Item</router-link>

        <router-link to="/about">About</router-link>

        <router-link to="/contact">Contact</router-link>
      </div>

      <div>
        <div class="connexion-nav" v-if="!userSingIn">
          <button @click="$router.push('/singUp')">sing up</button>
          <button @click="$router.push('/login')">login</button>
        </div>
        <div class="logOut" v-else>
          <button @click="handleLogOUt">log out</button>
        </div>
      </div>
    </nav>

    <main>
      <router-view v-slot="{Component}">
        <transition name="page">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped lang="scss">
$backGround: rgb(236, 255, 233);
$lighted: green;

%flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* page transition */

.page-enter-active,
.page-leave-active {
  transition: all 1s;
  position: absolute;
}

.page-enter-from {
  top: 100%;
  left: 0;
}
.page-enter-to {
  top: 0;
  left: 0;
}
.page-leave-from {
  bottom: 0;
  transform: scale(1);
  opacity: 1;
}
.page-leave-to {
  bottom: 30%;
  transform: scale(0.5);
  opacity: 0;
}

.router-link-active {
  border: none;
  border-bottom: 5px solid $lighted;
}

.app {
  width: 100vw;
  height: 100vh;
  background-color: $backGround;
  overflow-x: hidden;
}

main {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.links {
  width: 100vw;
  min-height: 40px;
  padding: 5px;
  margin-bottom: 5px;
  box-shadow: 0px 3px 16px 6px rgb(0 128 0 / 17%);
  z-index: 1000;
  @extend %flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: transparent;
  mix-blend-mode: difference;

  .page-link {
    @extend %flex;
    height: 50px;
    gap: 50px;
    transition: all 0.3s;

    a {
      text-decoration: none;
      color: black;
      width: fit-content;
      height: 100%;
      font-size: 20px;
      font-weight: bold;
      color: white;
      transition: all 0.3s;
      @extend %flex;
    }
  }
}

.connexion-nav {
  @extend %flex;
  gap: 20px;
  height: 40px;
  button {
    width: fit-content;
    height: 100%;
    font-size: 18px;
    font-weight: bold;
    background-color: green;
    color: white;
    border: 1px solid green;
    padding: 2px 10px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
}

.logOut button {
  width: fit-content;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  background-color: rgb(255, 27, 27);
  color: white;
  padding: 2px 10px;
  border-radius: 5px;
  border: none;
  &:hover {
    cursor: pointer;
  }
}
</style>
