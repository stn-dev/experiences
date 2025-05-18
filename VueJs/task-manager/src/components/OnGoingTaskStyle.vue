<template>
  <div class="container-on-going">
    <p>{{ task }}</p>
    <div class="container-on-going__box"></div>
    <div class="container-on-going__btns">
      <button @click="emit('done')">Done</button>
      <button @click="emit('delete')">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts" >
import { defineProps, defineEmits } from "vue";

defineProps<{ task: string }>();
const emit = defineEmits<{
  (e: "done"): void;
  (e: "delete"): void;
}>();
</script>

<style lang="scss" scoped>
.container-on-going {
  width: 100%;
  height: fit-content;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid violet;
  border-radius: 5px;

  p {
    font-size: 18px;
    font-weight: 600;
    color: black;
  }

  &__box {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    background-color: violet;
  }

  &__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    button {
      padding: 10px 16px;
      font-size: 16px;
      border-radius: 3px;
      border: none;
      color: white;
      &:hover {
        cursor: pointer;
      }
    }
    & button:nth-child(1) {
      background-color: yellowgreen;
    }
    & button:nth-child(2) {
      background-color: rgb(250, 89, 89);
    }
  }
}
</style>