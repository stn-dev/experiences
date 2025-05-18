<script setup>
const { data: blogs, pending } = await useFetch("/api/hello.", { lazy: true });
const theme = useState("theme");
</script>

<template>
  <div class="container-blog-page">
    <h1>Our blogs</h1>

    <p v-if="pending">Loading ...</p>

    <div v-else class="blogs">
      <NuxtLink v-for="blog in blogs" :key="blog.id" :to="`/blogs/${blog.id}`">
        <div :class="`blog ${theme}`">
          <h4>{{blog.title}}</h4>
          <p>{{ blog.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
* {
  text-decoration: none;
  list-style: none;
}

.container-blog-page {
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  padding-top: 100px;
}

.blogs {
  width: fit-content;
  min-height: fit-content;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: none;
  border-radius: 20px;
}

.blog {
  width: 200px;
  height: 150px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;
  background-color: transparent;
  border: 2px solid yellowgreen;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}

.blog.dark h4 {
  color: rgb(202, 202, 202);
}
.blog.dark p {
  color: white;
}

.blog a {
  text-decoration: none;
}

.blog h4 {
  font-size: 18px;
  font-weight: 600;
  color: rgb(88, 88, 88);
  text-decoration: underline;
}

.blog p {
  font-size: 14px;
  font-weight: lighter;
  color: black;
}

.blog:hover {
  transform: scale(1.02);
  box-shadow: 0px 5px 10px 5px rgba(128, 128, 128, 0.14);
}
.blog.dark:hover {
  transform: scale(1.02);
  box-shadow: 0px 5px 10px 5px rgba(228, 228, 228, 0.26);
}
</style>