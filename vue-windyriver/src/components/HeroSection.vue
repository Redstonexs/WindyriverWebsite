<template>
  <header class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 hero-bg"></div>
    <div class="absolute inset-0 bg-black/30"></div>
    
    <div class="container mx-auto px-6 relative z-10 text-center">
      <h1 class="text-[clamp(2.5rem,5vw,4rem)] font-minecraft text-white text-shadow-lg mb-6 animate-float">
        风河 · WindyRiver
      </h1>
      
      <p class="text-[clamp(1rem,2vw,1.25rem)] mb-8 max-w-2xl mx-auto text-white/80">
        支持 <span class="text-white font-bold">1.13-1.21.6</span> 客户端加入<br>
        i9-12900KS · DDR5 64G内存 · 物理机
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#join" class="minecraft-btn flex items-center justify-center">
          <i class="fa fa-server mr-2"></i> 立即加入服务器
        </a>
        <a 
          href="https://qm.qq.com/q/sFxtDUBht0" 
          target="_blank"
          class="minecraft-btn bg-secondary hover:bg-secondary/80 flex items-center justify-center"
        >
          <i class="fab fa-qq mr-2"></i> 加入QQ群
        </a>
      </div>
      
      <div class="mt-12 flex flex-wrap justify-center gap-4">
        <StatCard 
          icon="fa-users" 
          :value="playerCount" 
          label="在线玩家" 
        />
        <StatCard 
          icon="fa-clock" 
          value="24/7" 
          label="全天候运行" 
        />
        <StatCard 
          icon="fa-download" 
          value="3年" 
          label="累计开服时长" 
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StatCard from './StatCard.vue'

const playerCount = ref('?')

// 可以在这里添加获取在线玩家数的API调用
onMounted(() => {
  // 示例：获取玩家数
  // fetchPlayerCount()
})
</script>

<style scoped>
.hero-bg {
  background-image: url('/images/bg-header.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

@media (max-width: 768px) {
  .hero-bg {
    background-attachment: scroll;
  }
}
</style>
