<template>
  <div class="flex items-center space-x-4">
    <div class="flex-1">
      <div class="text-sm text-gray-500 mb-1">{{ label }}</div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div 
          :class="['h-2 rounded-full transition-all duration-500', color]" 
          :style="{ width: `${percentage}%` }"
        ></div>
      </div>
      <div class="text-right text-sm text-gray-500 mt-1">{{ percentage }}%</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: 'bg-primary'
  }
})
</script>
