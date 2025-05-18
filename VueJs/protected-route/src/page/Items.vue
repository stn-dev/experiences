<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import Button from "../components/Button.vue";
const count = ref(0);
const countRef = ref<HTMLParagraphElement | null>(null);
const buttonRef = ref<InstanceType<typeof Button> | null>(null);

// watch(count, () => {
//   buttonRef.value?.alertMethode();
// });

const handleClick = () => {
  count.value++;
};
const displayPRef = () => {
  console.log(countRef.value);
};
</script>

<template>
  <div class="container">
    <h1>item page</h1>
    <p ref="countRef" @click="displayPRef">{{ count }}</p>
    <Button label="increment" ref="buttonRef" @onClick="handleClick" />
  </div>
</template>

<style scoped lang="scss" >
$backGround: rgb(236, 255, 233);
$lighted: green;

%flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 111, 0);
  @extend %flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 20px;
    font-weight: 700;
    color: whitesmoke;
  }
}
</style>