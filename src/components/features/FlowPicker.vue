<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  CATEGORY_LABELS,
  SUB_LABELS,
  TAG_LABELS,
  type FoodCategory,
  type FoodSubcategory,
  type FoodTag,
} from '@/types/food';
import { useMenuFilter } from '@/composables/useMenuFilter';
import { FOODS, type Food } from '@/data/foods';

const REGIONS = ['구로', '판교', '광교', '대구'] as const;
const { region, category, sub, includeTags, excludeTags, budget, subsForCategory, pool } = useMenuFilter();

const current = ref<Food | null>(null);
const history = ref<Food[]>([]);

function toggleTag(set: Set<FoodTag>, t: FoodTag) {
  set.has(t) ? set.delete(t) : set.add(t);
}

function roll() {
  const list = pool.value.length ? pool.value : FOODS;
  const pick = list[Math.floor(Math.random() * list.length)];
  current.value = pick;
  history.value = [pick, ...history.value].slice(0, 10);
}

const canStep2 = computed(() => !!region.value);
const canStep3 = computed(() => !!category.value); // 세부메뉴는 선택 optional
const searchQuery = computed(() => `${region.value ?? ''} ${current.value?.name ?? ''}`.trim());
</script>

<template>
  <section class="container-prose grid gap-6">
    <!-- Step 1: 지역 -->
    <div class="grid gap-3">
      <h3 class="text-fg font-semibold">지역을 선택하세요 <span class="text-muted">/ Step 1</span></h3>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="r in REGIONS"
          :key="r"
          class="chip"
          :class="region === r ? 'chip-selected' : ''"
          @click="region = r"
        >
          {{ r }}
        </button>
      </div>
    </div>

    <hr class="border-token" />

    <!-- Step 2-1: 카테고리 -->
    <div class="grid gap-3" :class="!canStep2 ? 'pointer-events-none opacity-60' : ''">
      <h3 class="text-fg font-semibold">메뉴를 선택하세요 <span class="text-muted">/ Step 2</span></h3>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(label, key) in CATEGORY_LABELS"
          :key="key"
          class="chip"
          :class="category === key ? 'chip-selected' : ''"
          @click="
            category = key as FoodCategory;
            sub = null;
          "
        >
          {{ label }}
        </button>
        <button
          class="chip"
          :class="!category ? 'chip-selected' : ''"
          @click="
            category = null;
            sub = null;
          "
        >
          완전랜덤
        </button>
      </div>

      <!-- Step 2-2: 세부메뉴 (선택) -->
      <div v-if="category" class="flex flex-wrap gap-2">
        <button
          v-for="s in subsForCategory"
          :key="s"
          class="chip"
          :class="sub === s ? 'chip-selected' : ''"
          @click="sub = sub === s ? null : (s as FoodSubcategory)"
          :title="`필터 결과: ${pool.length}개`"
        >
          {{ SUB_LABELS[s] }}
        </button>
      </div>

      <!-- 태그 포함 -->
      <div class="flex flex-wrap gap-2">
        <span class="text-xs text-muted">태그 포함</span>
        <button
          v-for="(label, key) in TAG_LABELS"
          :key="'inc-' + key"
          class="chip"
          :class="includeTags.has(key as FoodTag) ? 'chip-selected' : ''"
          @click="toggleTag(includeTags, key as FoodTag)"
        >
          {{ label }}
        </button>
      </div>

      <!-- 태그 제외 -->
      <div class="flex flex-wrap gap-2">
        <span class="text-xs text-muted">태그 제외</span>
        <button
          v-for="(label, key) in TAG_LABELS"
          :key="'exc-' + key"
          class="chip"
          :class="excludeTags.has(key as FoodTag) ? 'chip-selected' : ''"
          @click="toggleTag(excludeTags, key as FoodTag)"
        >
          {{ label }}
        </button>

        <!-- 예산 셀렉트는 그대로 유지 -->
        <select
          class="input-surface px-3 py-2"
          :value="budget"
          @change="budget = ($event.target as HTMLSelectElement).value as any"
        >
          <option value="any">예산(전체)</option>
          <option value="low">저렴</option>
          <option value="mid">보통</option>
          <option value="high">비쌈</option>
        </select>
      </div>

      <p class="text-xs text-muted">
        현재 필터 결과: <strong>{{ pool.length }}</strong> 개
      </p>
    </div>

    <hr class="border-token" />

    <!-- Step 3: 추천 -->
    <div class="grid gap-4" :class="!canStep3 ? 'pointer-events-none opacity-60' : ''">
      <div class="flex items-center justify-between">
        <h3 class="text-fg font-semibold">추천 결과 <span class="text-muted">/ Step 3</span></h3>
        <div class="flex gap-2">
          <button class="btn-ghost" @click="roll" :disabled="!canStep3">추천메뉴</button>
          <button
            class="btn-primary"
            @click="window.open(`https://map.naver.com/p/search/${encodeURIComponent(searchQuery)}`, '_blank')"
            :disabled="!current"
          >
            식당 추천받기 🔍
          </button>
        </div>
      </div>

      <div v-if="current" class="card p-5 fade-up">
        <h4 class="text-[1.15rem] font-semibold tracking-[-0.01em]">{{ current.name }}</h4>
        <p class="text-sm text-muted mt-1">
          {{ CATEGORY_LABELS[current.category] }} <span v-if="current.sub">· {{ SUB_LABELS[current.sub] }}</span>
        </p>
      </div>
    </div>
  </section>
</template>
