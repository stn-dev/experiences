<template>
  <section class="container">
    <h1>Add New Task</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Enter new task title" v-model="input" />
      <button>add</button>
    </form>
  </section>
</template>


<script setup lang="ts" >
import { ref } from "vue";
import { CurrentCaseType } from "../components/AllTaskStyle.vue";

export interface TaskType {
  id: number;
  title: string;
  isDelete: boolean;
  currentCase: CurrentCaseType;
}

const input = ref("");
const allTasks: TaskType[] =
  JSON.parse(localStorage.getItem("all-task")!) || [];

const handleSubmit = () => {
  const currentTask: TaskType = {
    id: Date.now(),
    title: input.value,
    isDelete: false,
    currentCase: "created"
  };
  allTasks.push(currentTask);

  localStorage.setItem("all-task", JSON.stringify(allTasks));

  input.value = "";
};
</script>

<style lang="scss" scoped>
$primary: rgb(255, 115, 1);
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  height: 100vh;
  padding-top: 150px;

  h1 {
    color: black;
    text-align: center;
    font-size: 25px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    box-shadow: 4px 6px 10px 2px #00000018;
    border-radius: 10px;
    border: none;

    input {
      width: 400px;
      padding: 20px;
      border-radius: 5px;
      border: 1px solid black;
      font-size: 16px;
      outline: none;
      &:focus {
        border-color: $primary;
      }
    }

    button {
      width: fit-content;
      padding: 16px 32px;
      font-size: 16px;
      background-color: $primary;
      color: white;
      font-weight: 600;
      border-radius: 5px;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>