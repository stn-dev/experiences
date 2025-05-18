<template>
  <div class="container">
    <h1>Finished Tasks</h1>
    <div class="container__tasks" v-for="task in finishedTask" :key="task.id">
      <finish-task-style
        :task="task.title"
        @do-again="handleDoAgain(task.id)"
        @delete="handleDelete(task.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TaskType } from "./Add.vue";
import FinishTaskStyle from "../components/FinishTaskStyle.vue";
import { ref } from "vue";

const allTasks: TaskType[] =
  JSON.parse(localStorage.getItem("all-task")!) || [];

localStorage.setItem(
  "finished-task",
  JSON.stringify(
    [...allTasks].filter(
      task => task.currentCase === "done" && task.isDelete === false
    )
  )
);

let finishedTask = ref<TaskType[]>(
  [...allTasks].filter(
    task => task.currentCase === "done" && task.isDelete === false
  )
);

const handleDoAgain = (id: number) => {
  finishedTask.value = finishedTask.value.map((task: TaskType) =>
    task.id !== id ? task : { ...task, currentCase: "created" }
  );
  finishedTask.value = finishedTask.value.filter(
    (task: TaskType) => task.currentCase === "done"
  );

  const newAllTask = [...allTasks].map((task: TaskType) =>
    task.id !== id ? task : { ...task, currentCase: "created" }
  );
  localStorage.setItem("all-task", JSON.stringify(newAllTask));
};

const handleDelete = (id: number) => {
  finishedTask.value = finishedTask.value.map((task: TaskType) =>
    task.id !== id ? task : { ...task, isDelete: true }
  );
  finishedTask.value = finishedTask.value.filter(
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