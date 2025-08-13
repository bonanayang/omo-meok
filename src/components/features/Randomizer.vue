<!-- src/components/features/Randomizer.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import CategoryChips from './CategoryChips.vue';
import FoodCard from './FoodCard.vue';
import { useRandomFood } from '@/composables/useRandomFood';
import type { FoodCategory } from '@/types/food';
import { FOODS } from '@/data/foods';

const { current, history, roll } = useRandomFood();
const categories = ref<Set<FoodCategory>>(new Set());

const pool = computed(() => {
  if (!categories.value.size) return FOODS;
  return FOODS.filter((f) => categories.value.has(f.category));
});

function rollWithFilter() {
  // 간단 버전: 필터가 있으면 그 중에서 랜덤, 없으면 기존 로직
  if (categories.value.size) {
    const list = pool.value;
    if (!list.length) return;
    const pick = list[Math.floor(Math.random() * list.length)];
    current.value = pick;
    history.value.unshift(pick);
    history.value = history.value.slice(0, 10);
  } else {
    roll();
  }
}
</script>

<template>
  <section class="grid gap-6">
    <CategoryChips v-model="categories" />

    <button
      @click="rollWithFilter"
      class="px-5 py-3 rounded-xl bg-black text-white hover:opacity-90 active:scale-95 transition"
    >
      뭐 먹을까? 🎯
    </button>

    <FoodCard v-if="current" :food="current" />

    <div v-if="history.length" class="grid gap-2">
      <h4 class="text-xs text-gray-400">최근 뽑은 메뉴</h4>
      <div class="flex flex-wrap gap-2">
        <span v-for="f in history" :key="f.id" class="px-2 py-1 rounded bg-gray-100 text-xs">
          {{ f.name }}
        </span>
      </div>
    </div>
  </section>
</template>
