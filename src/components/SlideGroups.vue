<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="100%"
  >
    <div class="marquee-container">
      <div class="marquee">
        <div class="marquee-content">
          <!-- 原始卡片內容 -->
          <v-slide-group
            v-model="model"
            class="pa-4"
          >
            <v-slide-group-item
              v-for="(text, index) in texts"
              :key="index"
              v-slot="{ isSelected, toggle, selectedClass }"
            >
              <v-card
                :class="['ma-4', selectedClass]"
                color="grey-darken-1"
                height="300"
                width="100"
                @click="goToShop"
              >
                <div class="d-flex fill-height justify-center pt-5">
                  <v-scale-transition>
                    <div v-if="isSelected">
                      <v-icon></v-icon>
                    </div>
                  </v-scale-transition>
                  <div class="texts">{{ text }}</div>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>

          <!-- 複製的卡片內容 -->
          <v-slide-group
            v-model="model"
            class="pa-4"
          >
            <v-slide-group-item
              v-for="(text, index) in texts"
              :key="'copy-' + index"
              v-slot="{ isSelected, toggle, selectedClass }"
            >
              <v-card
                :class="['ma-4', selectedClass]"
                color="grey-darken-1"
                height="300"
                width="100"
                @click="goToShop"
              >
                <div class="d-flex fill-height justify-center pt-5">
                  <v-scale-transition>
                    <div v-if="isSelected">
                      <v-icon></v-icon>
                    </div>
                  </v-scale-transition>
                  <div class="texts">{{ text }}</div>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const model = ref(null)
const router = useRouter()

// 定義包含不同文字的數組
const texts = ref([
  '# HATS',
  '# FIGURES',
  '# STICKERS',
  '# HAND TOWELS',
  '# CRAFTS',
  '# HAIRPINS',
  '# CANDLES',
  '# CLOCK',
  '# DECORATION TRAY',
  '# PHONE CASE',
  '# KEYCHAIN',
  '# SOCKS',
  '# MAGNETS',
  '# NECKLACE',
  '# CLOTHES',
  '# PENCIL CASE',
  '# BATH TOWELS',
  '# EARRINGS',
  '# BLANKETS',
  '# BRACELETS',
  '# PAINTINGS'
])

const goToShop = () => {
  router.push('/shophere')
}
</script>

<style scoped>
.texts {
  font-family: "Shrikhand", serif;
  writing-mode: vertical-rl;
  font-size: 24px;
  /* font-weight: bold; */
  color: white;
}

.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
}

.marquee {
  display: flex;
  animation: marquee 8s linear infinite;
}

.marquee-content {
  display: flex;
  flex-wrap: nowrap;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%); /* 調整動畫移動距離，確保無縫銜接 */
  }
}
</style>
