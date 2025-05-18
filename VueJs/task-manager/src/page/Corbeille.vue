<template>
  <div class="container">
    <h1>Finished Tasks</h1>
    <div class="container__tasks" v-for="task in deletedTask" :key="task.id">
      <deleted-task-style
        :task="task.title"
        @restore="handleRestore(task.id)"
        @delete-permanently="handleDeletePermanently(task.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts" >
import { ref } from "vue";
import { TaskType } from "./Add.vue";
import DeletedTaskStyle from "../components/DeletedTaskStyle.vue";

const allTasks: TaskType[] =
  JSON.parse(localStorage.getItem("all-task")!) || [];

localStorage.setItem(
  "deleted-task",
  JSON.stringify([...allTasks].filter(task => task.isDelete === true))
);

let deletedTask = ref<TaskType[]>(
  [...allTasks].filter((task: TaskType) => task.isDelete === true)
);

const handleRestore = (id: number) => {
  deletedTask.value = deletedTask.value.map((task: TaskType) =>
    task.id !== id ? task : { ...task, isDelete: false, currentCase: "created" }
  );
  deletedTask.value = deletedTask.value.filter(
    (task: TaskType) => task.isDelete === true
  );

  const newAllTask = [...allTasks].map((task: TaskType) =>
    task.id !== id ? task : { ...task, isDelete: false, currentCase: "created" }
  );

  localStorage.setItem("all-task", JSON.stringify(newAllTask));
};

const handleDeletePermanently = (id: number) => {
  if (!confirm("Are you sure to definitly delete this task")) return;
  deletedTask.value = deletedTask.value.filter(
    (task: TaskType) => task.id !== id
  );

  const newAllTask = [...allTasks].filter((task: TaskType) => task.id !== id);

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