<template>
  <div :class="`container-theme ${theme === 'dark' && 'dark'}`" @click="toggleTheme">
    <span class="moon"></span>
  </div>
</template>

<script setup>
const theme = useState("theme");
const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme.value);
};
</script>

<style scoped>
.container-theme {
  width: 50px;
  height: 30px;
  background-color: rgb(34, 34, 34);
  border-radius: 20px;
  border: none;
  position: relative;
  z-index: 20;
}

.container-theme:hover {
  cursor: pointer;
}

.container-theme .moon {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: none;
  background-color: yellowgreen;
  position: absolute;
  top: 5px;
  left: 5px;
}

.container-theme.dark {
  background-color: white;
}
.container-theme.dark .moon {
  left: 25px;
}
</style>