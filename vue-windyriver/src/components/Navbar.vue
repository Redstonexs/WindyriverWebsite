<template>
  <nav 
    class="fixed top-0 w-full z-50 p-4 shadow-md transition-all duration-300 bg-light/90 backdrop-blur-md"
    :class="{ 'shadow-lg': isScrolled }"
  >
    <div class="container mx-auto flex items-center justify-between">
      <router-link to="/" class="text-xl font-minecraft flex items-center">
        <img src="/images/favicon.ico" alt="Logo" class="h-8 w-auto mr-2" loading="lazy">
        <span class="text-dark">风河 · WindyRiver</span>
      </router-link>
      
      <!-- 桌面端菜单 -->
      <div class="hidden md:flex items-center ml-auto space-x-6">
        <a 
          href="https://status.windyriver.top" 
          target="_blank"
          class="hover:text-secondary transition-colors duration-300 flex items-center"
        >
          状态监测 <i class="fa fa-external-link-alt ml-1 text-xs"></i>
        </a>
        <a 
          href="https://qm.qq.com/q/sFxtDUBht0" 
          target="_blank"
          class="hover:text-secondary transition-colors duration-300 flex items-center"
        >
          加入我们 <i class="fa fa-external-link-alt ml-1 text-xs"></i>
        </a>
      </div>
      
      <!-- 手机端菜单按钮 -->
      <div class="flex items-center md:hidden">
        <button 
          class="focus:outline-none" 
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <i class="fa fa-bars text-2xl"></i>
        </button>
      </div>
    </div>
    
    <!-- 手机端菜单内容 -->
    <Transition name="slide-down">
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-light/95 shadow-lg"
      >
        <div class="flex flex-col space-y-4 py-4 px-6">
          <a 
            href="https://status.windyriver.top" 
            target="_blank"
            class="hover:text-secondary transition-colors duration-300 flex items-center"
            @click="closeMobileMenu"
          >
            状态监测 <i class="fa fa-external-link-alt ml-1 text-xs"></i>
          </a>
          <a 
            href="https://qm.qq.com/q/sFxtDUBht0" 
            target="_blank"
            class="hover:text-secondary transition-colors duration-300 flex items-center"
            @click="closeMobileMenu"
          >
            加入我们 <i class="fa fa-external-link-alt ml-1 text-xs"></i>
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
