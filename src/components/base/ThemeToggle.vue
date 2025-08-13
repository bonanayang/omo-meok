<!-- src/components/base/ThemeToggle.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '@/composables/useTheme';
const { theme, setTheme, toggle } = useTheme();
const label = computed(() => (theme.value === 'system' ? 'System' : theme.value === 'dark' ? 'Dark' : 'Light'));
</script>

<template>
  <div class="flex items-center gap-2">
    <!-- 모바일: 아이콘만, sm+: 라벨 표시 -->
    <button class="btn-ghost px-2.5 py-2" @click="toggle" :aria-pressed="theme !== 'system'">
      <span v-if="theme === 'dark'">🌙</span>
      <span v-else-if="theme === 'light'">☀️</span>
      <span v-else>🖥️</span>
      <span class="hidden sm:inline ml-1">{{ label }}</span>
    </button>

    <!-- 선택 드롭다운은 sm 이상에서만 노출 -->
    <select
      class="input-surface px-3 py-2 hidden sm:inline-block"
      :value="theme"
      @change="setTheme(($event.target as HTMLSelectElement).value as any)"
      aria-label="Theme mode"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>
