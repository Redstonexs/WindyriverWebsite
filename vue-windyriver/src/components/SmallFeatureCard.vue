<template>
  <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div class="text-4xl text-accent mb-4">
      <i :class="['fa', icon]"></i>
    </div>
    <h3 class="text-xl font-bold mb-3">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <div class="flex items-center">
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div 
          class="bg-accent h-2 rounded-full transition-all duration-500" 
          :style="{ width: `${percentage}%` }"
        ></div>
      </div>
      <div class="ml-3 text-accent font-bold">{{ percentage }}%</div>
    </div>
    <div class="text-sm text-gray-500 mt-1">{{ label }}</div>
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
  },
  percentage: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>
