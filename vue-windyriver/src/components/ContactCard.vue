<template>
  <div class="minecraft-card flex items-center justify-between p-3 bg-white/90 shadow-sm">
    <div class="flex items-center">
      <div class="text-3xl text-secondary mr-3">
        <i :class="icon"></i>
      </div>
      <div>
        <h3 class="text-sm font-bold">{{ title }}</h3>
        <p class="text-xs text-gray-500">{{ description }}</p>
      </div>
    </div>
    <a 
      :href="link" 
      target="_blank"
      class="minecraft-btn bg-secondary hover:bg-secondary/80 px-3 py-1.5 text-xs whitespace-nowrap"
    >
      <i :class="[buttonIcon, 'mr-1']"></i> {{ buttonText }}
    </a>
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
  buttonText: {
    type: String,
    required: true
  },
  buttonIcon: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>
