<template>
  <div class="container">
    <h1>all of your tasks</h1>
    <div class="container__tasks" v-for="task in duplicatedTasksForReder" :key="task.id">
      <all-task-style
        :task="task.title"
        :current-case="task.currentCase"
        @done="handleDone(task.id)"
        @on-going="handleOnGoing(task.id)"
        @delete="handleDelete(task.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts" >
import { ref } from "vue";
import AllTaskStyle from "../components/AllTaskStyle.vue";
import { TaskType } from "./Add.vue";

const allTasks: TaskType[] =
  JSON.parse(localStorage.getItem("all-task")!) || [];
let duplicatedTasksForReder = ref<TaskType[]>(
  [...allTasks].filter((task: TaskType) => task.isDelete === false)
);
let duplicatedTasksForStorage = [...allTasks];

const handleDone = (id: number) => {
  if (
    duplicatedTasksForReder.value.find(
      (task: TaskType) => task.id === id && task.currentCase === "done"
    )
  ) {
    alert("already set as done");
    return;
  }
  // update the reactive tasks for the rerender
  duplicatedTasksForReder.value = duplicatedTasksForReder.value.map(
    (task: TaskType) =>
      task.id !== id ? task : { ...task, currentCase: "done" }
  );
  // re-assign reactive task to remove the reactivity because JSON0stringify doesn't accept it
  duplicatedTasksForStorage = duplicatedTasksForStorage.map((task: TaskType) =>
    task.id !== id ? task : { ...task, currentCase: "done" }
  );
  //stringify the non reactive array
  localStorage.setItem("all-task", JSON.stringify(duplicatedTasksForStorage));
};

const handleOnGoing = (id: number) => {
  if (
    duplicatedTasksForReder.value.find(
      (task: TaskType) => task.id === id && task.currentCase === "on-going"
    )
  ) {
    alert("already set as on going");
    return;
  }
  duplicatedTasksForReder.value = duplicatedTasksForReder.value.map(
    (task: TaskType) =>
      task.id !== id ? task : { ...task, currentCase: "on-going" }
  );
  duplicatedTasksForStorage = duplicatedTasksForStorage.map((task: TaskType) =>
    task.id !== id ? task : { ...task, currentCase: "on-going" }
  );
  localStorage.setItem("all-task", JSON.stringify(duplicatedTasksForStorage));
};

const handleDelete = (id: number) => {
  duplicatedTasksForReder.value = duplicatedTasksForReder.value.map(
    (task: TaskType) => (task.id !== id ? task : { ...task, isDelete: true })
  );

  duplicatedTasksForReder.value = duplicatedTasksForReder.value.filter(
    (task: TaskType) => task.id !== id
  );

  duplicatedTasksForStorage = duplicatedTasksForStorage.map((task: TaskType) =>
    task.id !== id ? task : { ...task, isDelete: true }
  );
  localStorage.setItem("all-task", JSON.stringify(duplicatedTasksForStorage));
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