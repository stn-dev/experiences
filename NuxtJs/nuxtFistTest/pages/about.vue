<script setup >
definePageMeta({
  middleware: "unique"
});
</script>

<template>
  <div class="container">
    <h1>About us</h1>
    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nemo debitis molestias, maxime veniam incidunt ex doloribus adipisci itaque culpa, quisquam voluptatibus blanditiis corrupti voluptates, necessitatibus magnam. Minima corporis optio pariatur adipisci neque velit, voluptatum iure aperiam, tempore et, dignissimos id laboriosam amet quae expedita. Illum perspiciatis architecto delectus id.</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda facere quo quaerat provident beatae repellendus nemo odit corporis excepturi consectetur.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda facere quo quaerat provident beatae repellendus nemo odit corporis excepturi consectetur.</p>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding-top: 100px;
}

h1 {
  font-size: 35px;
  font-weight: bold;
}

h4 {
  min-height: 100px;
  font-weight: normal;
  font-size: 18px;
}

p {
  font-size: 14px;
  font-weight: normal;
}
</style> 
