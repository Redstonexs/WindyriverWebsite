<template>
  <footer class="bg-light py-12 border-t border-gray-200">
    <div class="text-center space-y-2">
      <a 
        href="https://beian.miit.gov.cn/" 
        target="_blank"
        class="hover:text-secondary transition-colors"
      >
        粤ICP备2024285635号
      </a>
      <p>© 2022-{{ currentYear }} 风河 All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
