<script setup>
const route = useRoute();
const { data: blog, pending } = await useFetch(
  `/api/hello/${[Number(route.params.id) - 1]}`,
  { lazy: true }
);

const goBack = () => {
  navigateTo("/blogs");
};
</script>

<template>
  <div>
    <h1 v-if="pending" style="text-align: center; padding-top: 100px; min-height :100vh ">Loading...</h1>
    <div v-else class="container">
      <h1>{{ blog.title }}</h1>
      <h3>{{ blog.description }}</h3>
      <p>{{ blog.content }}</p>
      <button @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding-top: 100px;
}

p {
  font-weight: lighter;
}

button {
  width: fit-content;
  height: fit-content;
  padding: 12px 25px;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: normal;
  background-color: rgb(0, 173, 0);
}
button:hover {
  cursor: pointer;
}
</style>