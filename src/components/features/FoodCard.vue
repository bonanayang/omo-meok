<!-- src/components/features/FoodCard.vue -->
<script setup lang="ts">
import type { Food } from '@/types/food';
defineProps<{ food: Food }>();
</script>

<template>
  <div class="card p-7 text-center fade-up">
    <h3 class="text-[1.375rem] font-semibold tracking-[-0.01em]">{{ food.name }}</h3>
    <p class="text-sm text-muted mt-1">{{ food.category }}</p>
  </div>
</template>
