<template>
  <div class="flex items-start">
    <div class="text-secondary text-2xl mr-4 mt-1">{{ number }}</div>
    <div>
      <h4 class="font-bold">{{ title }}</h4>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>
