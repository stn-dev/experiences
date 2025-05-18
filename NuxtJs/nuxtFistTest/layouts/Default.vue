<template>
  <div :class="`default-layout-container ${theme === 'light' ? 'light' : 'dark'}`">
    <header>
      <nav class="navbar">
        <div class="logo">
          <NuxtLink to="/">
            <img src="assets/logo.jpg" alt="logo image" />
          </NuxtLink>
        </div>
        <toggle-theme />
        <div :class="`nav ${menu ? 'show' : ''} `">
          <NuxtLink
            v-for="(link , id) in links"
            :key="id"
            :to="link.href"
            @click="menu = false"
          >{{ link.label }}</NuxtLink>
        </div>
        <div class="menu" @click="menu = !menu">{{ menu ? 'CLOSE' : 'MENU' }}</div>
      </nav>
    </header>

    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup>
const theme = useState("theme");
const menu = ref(false);
const links = ref([
  {
    label: "contact",
    href: "/contact"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Blogs",
    href: "/blogs"
  }
]);
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}
.default-layout-container {
  width: 100vw;
  min-height: 100vh;
  /* overflow-x: hidden; */
}
.default-layout-container.light {
  background-color: whitesmoke;
  color: black;
}
.default-layout-container.dark {
  background-color: black;
  color: white;
}
.default-layout-container.light a {
  color: black;
}
.default-layout-container.dark a {
  color: white;
}
.default-layout-container.light a.router-link-active {
  color: rgb(2, 162, 2);
}
.default-layout-container.dark a.router-link-active {
  color: yellowgreen;
}

.navbar {
  width: 100vw;
  min-height: 50px;
  padding: 10px max(2vw, 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 6px 12px 0px #8080804d;
  position: fixed;
  top: 0;
  left: 0;
}
.light .navbar {
  background-color: white;
}
.dark .navbar {
  background-color: black;
}

.navbar .logo img {
  width: 60px;
  height: 50px;
  border: none;
  border-radius: 20%;
  box-shadow: 0 0 10px 5px rgba(172, 255, 47, 0.68);
  position: relative;
  z-index: 20;
}

.navbar a {
  text-decoration: none;
  font-size: 20px;
  font-weight: normal;
}

.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  transform: translateX(100%);
  z-index: 10;
  padding-top: 100px;
}
.nav.show {
  transform: translateX(0);
}

.dark .nav {
  background-color: black;
}
.light .nav {
  background-color: white;
}
.nav :nth-child(3) {
  width: fit-content;
  height: fit-content;
  color: white !important;
  padding: 15px 20px;
  background-color: rgb(2, 162, 2);
  border: none;
  border-radius: 15%;
}

.menu {
  font: bold;
  position: relative;
  z-index: 20;
}
.menu:hover {
  cursor: pointer;
}

@media (min-width: 768px) {
  .nav {
    position: static;
    flex-direction: row;
    width: fit-content;
    height: fit-content;
    transform: translateX(0);
    padding: 0;
  }
  .menu {
    display: none;
  }
}
</style>