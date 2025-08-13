<!-- src/components/features/CategoryChips.vue -->
<script setup lang="ts">
import type { FoodCategory } from '@/types/food';

const props = defineProps<{ modelValue: Set<FoodCategory> }>();
const emit = defineEmits<{ 'update:modelValue': [Set<FoodCategory>] }>();

const all: FoodCategory[] = ['Korean', 'Japanese', 'Chinese', 'Western', 'Street'];

function toggle(c: FoodCategory) {
  const next = new Set(props.modelValue);
  next.has(c) ? next.delete(c) : next.add(c);
  emit('update:modelValue', next);
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button v-for="c in all" :key="c" @click="toggle(c)" class="chip" :class="modelValue.has(c) ? 'chip-selected' : ''">
      {{ c }}
    </button>
  </div>
</template>
