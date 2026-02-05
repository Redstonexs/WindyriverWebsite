<template>
  <section id="about" class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <h2 class="section-title text-center">服务器优势</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <!-- 硬件配置 -->
        <div class="minecraft-card">
          <h3 class="text-xl font-bold mb-6 flex items-center">
            <i class="fa fa-microchip text-secondary mr-2"></i> 💪 硬核硬件配置
          </h3>
          <div class="space-y-4">
            <AdvantageItem 
              v-for="item in hardwareItems" 
              :key="item.title"
              :icon="item.icon"
              :title="item.title"
              :description="item.description"
            />
          </div>
        </div>

        <!-- 社区生态 -->
        <div class="minecraft-card">
          <h3 class="text-xl font-bold mb-6 flex items-center">
            <i class="fa fa-users text-secondary mr-2"></i> ❤️ 温暖社区生态
          </h3>
          <div class="space-y-4">
            <AdvantageItem 
              v-for="item in communityItems" 
              :key="item.title"
              :icon="item.icon"
              :title="item.title"
              :description="item.description"
            />
          </div>
        </div>
      </div>

      <!-- 服务器数据 -->
      <div class="mt-16 text-center">
        <h3 class="text-xl font-bold mb-8">服务器数据</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="minecraft-card bg-primary/20">
            <div>始于</div>
            <div class="text-4xl font-bold mb-2">2022</div>
          </div>
          <div class="minecraft-card bg-secondary/20">
            <div>子服数量</div>
            <div class="text-4xl font-bold mb-2">9+</div>
          </div>
          <div class="minecraft-card bg-accent/20">
            <div>稳定性保障</div>
            <div class="text-4xl font-bold mb-2">96.8%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AdvantageItem from './AdvantageItem.vue'

const hardwareItems = ref([
  {
    icon: 'fa-server',
    title: 'Intel i9-12900KS 处理器',
    description: '16核24线程，专为高性能服务器优化'
  },
  {
    icon: 'fa-memory',
    title: '64GB DDR5高频内存',
    description: '确保多玩家同时在线时流畅运行'
  },
  {
    icon: 'fa-hdd',
    title: '1TB NVMe SSD',
    description: '读写速度高达7000MB/s，确保区块加载迅速'
  },
  {
    icon: 'fa-wifi',
    title: '中国移动骨干网专线',
    description: '专用网络通道，低延迟，高稳定性，拒绝卡顿'
  },
  {
    icon: 'fa-shield-alt',
    title: 'DDoS防御已部署',
    description: '令人失望的'
  }
])

const communityItems = ref([
  {
    icon: 'fa-book',
    title: '上万字超详细服规及指引',
    description: '从基础操作到高级玩法，一步一步带你熟悉服务器'
  },
  {
    icon: 'fa-shield-alt',
    title: '活跃管理团队高强度在线',
    description: '公平公正处理玩家问题，维护良好游戏环境'
  },
  {
    icon: 'fa-calendar',
    title: '定期举办玩家活动',
    description: '节日庆典、隐藏玩法、建筑比赛等，等你来玩'
  },
  {
    icon: 'fa-comments',
    title: '友好互助的玩家社区',
    description: '老玩家热情指导新手'
  },
  {
    icon: 'fa-code-fork',
    title: '听劝的管理层',
    description: '根据玩家反馈不断优化游戏体验'
  }
])
</script>
