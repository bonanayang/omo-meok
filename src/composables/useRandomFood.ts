import { ref } from 'vue';
import type { Food } from '@/types/food';
import { FOODS } from '@/data/foods';

function pickWeighted(list: Food[]) {
  const weights = list.map((f) => f.weight ?? 1);
  const sum = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * sum;
  for (let i = 0; i < list.length; i++) {
    r -= weights[i];
    if (r <= 0) return list[i];
  }
  return list[list.length - 1];
}

export function useRandomFood() {
  const current = ref<Food | null>(null);
  const history = ref<Food[]>([]);

  function roll() {
    if (!FOODS.length) return;
    current.value = pickWeighted(FOODS);
    history.value.unshift(current.value);
    history.value = history.value.slice(0, 10);
  }

  return { current, history, roll };
}
