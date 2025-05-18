<template>
  <div class="container">
    <h1>on Going Tasks</h1>
    <div class="container__tasks" v-for="task in onGoingTask" :key="task.id">
      <on-going-task-style
        :task="task.title"
        @done="handleDone(task.id)"
        @delete="handleDelete(task.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts" >
import { ref } from "vue";
import OnGoingTaskStyle from "../components/OnGoingTaskStyle.vue";
import { TaskType } from "./Add.vue";

const allTasks: TaskType[] =
  JSON.parse(localStorage.getItem("all-task")!) || [];

localStorage.setItem(
  "on-going-task",
  JSON.stringify(
    [...allTasks].filter(
      task => task.currentCase === "on-going" && task.isDelete === false
    )
  )
);

let onGoingTask = ref<TaskType[]>(
  [...allTasks].filter(
    task => task.currentCase === "on-going" && task.isDelete === false
  )
);

const handleDone = (id: number) => {
  onGoingTask.value = onGoingTask.value.map((task: TaskType) =>
    task.id !== id ? task : { ...task, currentCase: "done" }
  );
  onGoingTask.value = onGoingTask.value.filter(
    (task: TaskType) => task.currentCase === "on-going"
  );
  const newAllTask = [...allTasks].map((task: TaskType) =>
    task.id !== id ? task : { ...task, currentCase: "done" }
  );
  localStorage.setItem("all-task", JSON.stringify(newAllTask));
};

const handleDelete = (id: number) => {
  onGoingTask.value = onGoingTask.value.map((task: TaskType) =>
    task.id !== id ? task : { ...task, isDelete: true }
  );
  onGoingTask.value = onGoingTask.value.filter(
    (task: TaskType) => task.isDelete === false
  );
  const newAllTask = [...allTasks].map((task: TaskType) =>
    task.id !== id ? task : { ...task, isDelete: true }
  );
  localStorage.setItem("all-task", JSON.stringify(newAllTask));
};
</script>


<style lang="scss" scoped>
.container {
  color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 {
    color: black;
  }

  &__tasks {
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
}
</style>