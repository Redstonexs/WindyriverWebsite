<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:translate-y-[-5px] transition-all duration-300">
    <div class="flex flex-col md:flex-row h-full">
      <div :class="['md:w-1/3 p-6 flex items-center justify-center h-full', iconBg]">
        <i :class="['fa', icon, 'text-5xl', iconColor]"></i>
      </div>
      <div class="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold mb-3 flex items-center">
            <span :class="['inline-block w-2 h-2 rounded-full mr-2', dotColor]"></span>
            {{ title }}
          </h3>
          <slot name="description"></slot>
        </div>
        <slot name="stats"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  iconBg: {
    type: String,
    default: 'bg-primary/10'
  },
  iconColor: {
    type: String,
    default: 'text-primary'
  },
  dotColor: {
    type: String,
    default: 'bg-primary'
  },
  title: {
    type: String,
    required: true
  }
})
</script>
