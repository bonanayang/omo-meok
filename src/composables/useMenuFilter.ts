import { computed, ref } from 'vue';
import { FOODS } from '@/data/foods';
import { SUBS_BY_CATEGORY, type FoodCategory, type FoodSubcategory, type FoodTag, type Food } from '@/types/food';

export function useMenuFilter() {
  const region = ref<string | null>(null);
  const category = ref<FoodCategory | null>(null);
  const sub = ref<FoodSubcategory | null>(null);
  const includeTags = ref<Set<FoodTag>>(new Set());
  const excludeTags = ref<Set<FoodTag>>(new Set());
  const budget = ref<Food['budget'] | 'any'>('any');

  const subsForCategory = computed<FoodSubcategory[]>(() => (category.value ? SUBS_BY_CATEGORY[category.value] : []));

  const pool = computed(() => {
    return FOODS.filter((f) => {
      if (category.value && f.category !== category.value) return false;
      if (sub.value && f.sub !== sub.value) return false;
      if (budget.value !== 'any' && f.budget !== budget.value) return false;

      const tags = new Set(f.tags ?? []);
      // include: 모두 포함해야 통과
      for (const t of includeTags.value) if (!tags.has(t)) return false;
      // exclude: 하나라도 포함하면 탈락
      for (const t of excludeTags.value) if (tags.has(t)) return false;

      return true;
    });
  });

  return { region, category, sub, includeTags, excludeTags, budget, subsForCategory, pool };
}
