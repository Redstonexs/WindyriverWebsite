<template>
  <section id="contact" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-center mb-8">联系我们</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <!-- QQ群卡片 -->
        <ContactCard 
          icon="fab fa-qq"
          title="QQ群（946254761）"
          description="加入获取最新资讯"
          buttonText="立即加入"
          buttonIcon="fab fa-qq"
          link="https://qm.qq.com/q/sFxtDUBht0"
        />

        <!-- 哔哩哔哩卡片 -->
        <ContactCard 
          icon="fab fa-bilibili"
          title="服主的哔哩哔哩账号"
          description="关注获取精彩视频"
          buttonText="关注B站"
          buttonIcon="fab fa-bilibili"
          link="https://space.bilibili.com/327387810"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactCard from './ContactCard.vue'
</script>
