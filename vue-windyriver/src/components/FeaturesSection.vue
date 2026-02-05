<template>
  <section id="features" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="section-title text-center">部分玩法</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <FeatureCard 
          v-for="feature in features" 
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :items="feature.items"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import FeatureCard from './FeatureCard.vue'

const features = ref([
  {
    icon: 'fa-tree',
    title: '粘液生存 or 纯净生存',
    items: [
      '两个生存服，喜欢哪个玩哪个',
      '粘液生存：粘液科技，永不删档，多种扩展，领地保护，随时传送',
      '纯净生存：原汁原味，定期换周目，无领地与传送，紧张刺激',
      '纯净生存采用Luminol多线程优化服务器核心，为生电机器保驾护航'
    ]
  },
  {
    icon: 'fa-dungeon',
    title: '无尽地城',
    items: [
      '一个无尽肉鸽游戏，玩法紧张刺激',
      '支持单人或组队冒险，通力合作，挑战强敌',
      '特色打怪生存机制，难度层层递进',
      '通关层数最高者将被光荣展示于登录大厅与无尽地城大厅',
      '每次进入皆为重置，体验真正的"运气与策略并重"'
    ]
  },
  {
    icon: 'fa-gamepad',
    title: '游艺街',
    items: [
      'PCL作者龙猫制作的小游戏合集',
      '包含跑酷、闯关、竞技等多种类型游戏',
      '和好友实时竞技，争夺排行榜荣耀',
      '定期更新小游戏，保持新鲜感',
      '轻松休闲，适合各种玩家'
    ]
  }
])
</script>
