<template>
  <button class="btn" @click="emit('onClick')" ref="buttonRef">{{ label }}</button>
</template>

<script setup lang="ts" >
import { defineEmits, defineProps, defineExpose, ref } from "vue";

const alertMethode = () => alert("i am a method from the button components");
defineProps<{ label: string }>();
defineExpose({ alertMethode });

const buttonRef = ref<HTMLButtonElement | null>(null);
const emit = defineEmits<{
  (e: "onClick"): void;
}>();
</script>

<style lang="scss" scoped>
.btn {
  padding: 16px 32px;
  color: black;
  background-color: yellow;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
}
</style>
