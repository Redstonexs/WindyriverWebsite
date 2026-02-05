<template>
  <section id="features-special" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="section-title text-center mb-12">服务器特色</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 特色1：群服消息互通 -->
        <SpecialFeatureCard 
          icon="fa-users"
          iconBg="bg-primary/10"
          iconColor="text-primary"
          dotColor="bg-primary"
          title="群服消息互通 + 群内 AI 聊天"
        >
          <template #description>
            <p class="text-gray-600 mb-4">
              QQ群内有群机器人<strong>「云玥」</strong><br>
              她让群内发的消息和服里发的消息畅通无阻<br>
              同时还可以和搭载 gpt-4o-mini 的她聊天哦~<br>
              有什么不懂的都可以问她。
            </p>
          </template>
          <template #stats>
            <div class="flex space-x-4 mt-6">
              <div class="text-center flex-1">
                <div class="text-2xl font-bold text-primary">9999+</div>
                <div class="text-sm text-gray-500">累计消息数</div>
              </div>
              <div class="text-center flex-1">
                <div class="text-2xl font-bold text-primary">20+</div>
                <div class="text-sm text-gray-500">最高日活</div>
              </div>
              <div class="text-center flex-1">
                <div class="text-2xl font-bold text-primary">45.678</div>
                <div class="text-sm text-gray-500">活跃留存率(%)</div>
              </div>
            </div>
          </template>
        </SpecialFeatureCard>

        <!-- 特色2：正盗版融合登录 -->
        <SpecialFeatureCard 
          icon="fa-shield-alt"
          iconBg="bg-secondary/10"
          iconColor="text-secondary"
          dotColor="bg-secondary"
          title="正盗版融合登录系统"
        >
          <template #description>
            <p class="text-gray-600 mb-4">
              如果你是正版，在风河就可以免注册免密登录，而且如果更换了用户名，你的数据也不会丢失！<br>
              如果你不是正版，你也可以手动注册登录！
            </p>
          </template>
          <template #stats>
            <div class="space-y-4 mt-4">
              <ProgressBar label="可用性" :percentage="100" color="bg-secondary" />
              <ProgressBar label="玩家满意度" :percentage="96" color="bg-secondary" />
            </div>
          </template>
        </SpecialFeatureCard>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <SmallFeatureCard
          v-for="feature in smallFeatures"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
          :percentage="feature.percentage"
          :label="feature.label"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SpecialFeatureCard from './SpecialFeatureCard.vue'
import SmallFeatureCard from './SmallFeatureCard.vue'
import ProgressBar from './ProgressBar.vue'

const smallFeatures = ref([
  {
    icon: 'fa-refresh',
    title: '跟进版本更新',
    description: '对于生存类玩法，我们将在合适的时候更新服务端核心版本，使其支持最新特性。',
    percentage: 77.7,
    label: '玩家对更新满意度'
  },
  {
    icon: 'fa-lightbulb',
    title: '数据包地图创意工坊支持',
    description: '我们接受数据包地图作为定期轮换的派对游戏子服玩法，如果你认为有什么适合的，欢迎投稿~',
    percentage: 88.8,
    label: '派对游戏游玩率'
  },
  {
    icon: 'fa-calendar-alt',
    title: '丰富特色活动',
    description: '每周举办一次整活，如建筑大赛、活到最后比赛、生存挑战等，获胜者可获得专属奖励。',
    percentage: 99.9,
    label: '活动参与率'
  }
])
</script>
