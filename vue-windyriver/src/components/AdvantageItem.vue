<template>
  <div class="flex items-start">
    <div class="text-secondary text-xl mr-3 mt-1">
      <i :class="['fa', icon]"></i>
    </div>
    <div>
      <h4 class="font-bold">{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
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
  description: {
    type: String,
    required: true
  }
})
</script>
