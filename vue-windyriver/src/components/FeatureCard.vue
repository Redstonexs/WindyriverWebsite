<template>
  <div class="minecraft-card group">
    <h3 class="text-xl font-bold mb-4 flex items-center">
      <i :class="['fa', icon, 'text-secondary mr-2']"></i>
      <span class="text-xl">{{ title }}</span>
    </h3>
    <ul class="list-disc pl-5 space-y-2">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})
</script>
