// src/composables/useTheme.ts
import { ref, onMounted } from 'vue';

type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'omo-theme';

function getSystemTheme(): Exclude<Theme, 'system'> {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'system') {
    root.removeAttribute('data-theme'); // 시스템 선호 사용
  } else {
    root.setAttribute('data-theme', theme); // 강제 오버라이드
  }
}

export function useTheme() {
  const theme = ref<Theme>('system');

  function setTheme(next: Theme) {
    theme.value = next;
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  function toggle() {
    // system이면 현재 시스템 기준으로 반대편으로
    const current = theme.value === 'system' ? getSystemTheme() : theme.value;
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  onMounted(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? 'system';
    theme.value = saved;
    applyTheme(saved);

    // 사용자가 system 선택 시, 시스템 테마 변할 때 실시간 반영
    const mql = window.matchMedia('(prefers-color-scheme: light)');
    const handler = () => {
      if (theme.value === 'system') applyTheme('system');
    };
    mql.addEventListener?.('change', handler);
  });

  return { theme, setTheme, toggle };
}
