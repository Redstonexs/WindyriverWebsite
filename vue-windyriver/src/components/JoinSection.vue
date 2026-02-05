<template>
  <section id="join" class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <h2 class="section-title text-center">如何加入服务器</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <!-- 客户端准备 -->
        <div class="minecraft-card">
          <h3 class="text-xl font-bold mb-4 flex items-center">
            <i class="fa fa-download text-secondary mr-2"></i> 客户端准备
          </h3>
          <div class="space-y-4">
            <JoinStep 
              number="1"
              title="下载游戏客户端"
            >
              推荐使用 <span class="text-secondary hover:underline cursor-pointer">PCL2</span>。
            </JoinStep>
            
            <JoinStep 
              number="2"
              title="安装对应游戏版本"
            >
              服务器支持 1.13-1.21.6 版本，建议使用最新版。
            </JoinStep>
            
            <JoinStep 
              number="3"
              title="正版与盗版融合登录"
            >
              - 正版用户：直接使用 Mojang 账号登录。<br>
              - 盗版用户：使用离线登录功能，输入任意用户名即可。<br>
              - <strong>注意：在风河，正版玩家享有改名保留数据的权益。</strong>
            </JoinStep>
          </div>
        </div>

        <!-- 服务器连接 -->
        <div class="minecraft-card">
          <h3 class="text-xl font-bold mb-4 flex items-center">
            <i class="fa fa-server text-secondary mr-2"></i> 服务器连接
          </h3>
          <div class="space-y-4">
            <JoinStep 
              number="1"
              title="打开多人游戏"
            >
              在游戏主界面点击"多人游戏"，然后点击"添加服务器"。
            </JoinStep>
            
            <JoinStep 
              number="2"
              title="输入服务器信息"
            >
              - 服务器名称：风河 · WindyRiver<br>
              - 服务器地址：mc.windyriver.top<br>
              然后点击"完成"保存。
            </JoinStep>
            
            <JoinStep 
              number="3"
              title="连接服务器"
            >
              选择刚添加的服务器，点击"加入服务器"即可。
            </JoinStep>
          </div>
        </div>
      </div>

      <!-- 服务器IP -->
      <div class="mt-16 text-center">
        <div class="inline-block p-6 bg-primary/20 rounded-lg border border-primary/30">
          <h3 class="text-2xl font-bold mb-4">服务器IP</h3>
          <div class="flex items-center justify-center">
            <input 
              type="text" 
              :value="serverIP" 
              readonly 
              ref="ipInput"
              class="bg-gray-100 border border-gray-200 text-dark rounded-l-lg px-4 py-3 w-64 text-center focus:outline-none text-xl font-minecraft font-bold"
            >
            <button 
              @click="copyIP" 
              class="bg-secondary hover:bg-secondary/80 text-white px-4 py-3 rounded-r-lg transition-colors duration-300"
            >
              <i class="fa fa-copy mr-2"></i> {{ copied ? '已复制' : '复制' }}
            </button>
          </div>
          <p class="mt-2 text-sm">点击按钮复制IP，或直接手动输入</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import JoinStep from './JoinStep.vue'

const serverIP = 'mc.windyriver.top'
const ipInput = ref(null)
const copied = ref(false)

const copyIP = async () => {
  try {
    await navigator.clipboard.writeText(serverIP)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    // 备用方案
    if (ipInput.value) {
      ipInput.value.select()
      document.execCommand('copy')
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    }
  }
}
</script>
