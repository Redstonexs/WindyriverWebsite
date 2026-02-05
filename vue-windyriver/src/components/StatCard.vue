<template>
  <div class="minecraft-card bg-primary/30 p-4 w-48">
    <div class="text-2xl mb-2">
      <i :class="['fa', icon, 'text-secondary']"></i>
    </div>
    <div class="text-xl font-bold text-white">{{ value }}</div>
    <div class="text-sm text-white/80">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>
