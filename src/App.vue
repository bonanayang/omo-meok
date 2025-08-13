<script setup lang="ts">
import FlowPicker from '@/components/features/FlowPicker.vue';
import ThemeToggle from '@/components/base/ThemeToggle.vue'; // ← 추가
</script>

<template>
  <main class="min-h-screen bg-app">
    <header class="container-prose py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-3">
      <div class="flex-1 text-left">
        <h1 class="text-[1.7rem] sm:text-[2rem] font-semibold tracking-[-0.02em]">OmOmeOk — 오늘 뭐 먹지?</h1>
        <p class="mt-1 text-muted text-sm">카테고리 고르고, 버튼 한 번! 🎯</p>
      </div>
      <div class="flex-shrink-0">
        <ThemeToggle />
      </div>
    </header>

    <FlowPicker />

    <footer class="container-prose text-center text-xs text-muted mt-12 pb-8">© 2025 OmOmeOk</footer>
  </main>
</template>
