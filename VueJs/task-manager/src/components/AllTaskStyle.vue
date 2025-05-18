<template>
  <div :class="`task-item ${currentCase}`">
    <p>{{ task }}</p>
    <div :class="`task-item__box ${currentCase} `"></div>
    <div class="task-item__btns">
      <button @click="emit('onGoing')">on going</button>
      <button @click="emit('done')">Done</button>
      <button @click="emit('delete')">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts" >
import { defineProps, defineEmits } from "vue";

export type CurrentCaseType = "done" | "on-going" | "created";

defineProps<{ task: string; currentCase: CurrentCaseType }>();
const emit = defineEmits<{
  (e: "onGoing"): void;
  (e: "done"): void;
  (e: "delete"): void;
}>();
</script>


<style lang="scss" scoped>
.task-item {
  width: 100%;
  height: fit-content;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px;

  p {
    font-size: 18px;
    font-weight: 600;
    color: black;
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
      background-color: rgb(214, 76, 214);
    }
    & button:nth-child(2) {
      background-color: yellowgreen;
    }
    & button:nth-child(3) {
      background-color: rgb(250, 89, 89);
    }
  }

  &__box {
    width: 20px;
    height: 20px;
    border: 1px solid black;
  }
  .created {
    background-color: white;
  }
  .done {
    background-color: yellowgreen;
  }
  .on-going {
    background-color: violet;
  }
}

.created {
  border: 1px solid black;
}
.done {
  border: 1px solid greenyellow;
}
.on-going {
  border: 1px solid violet;
}
</style>