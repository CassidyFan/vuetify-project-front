<template>
  <!-- 手機版側欄 -->
  <v-navigation-drawer v-if="mobile" v-model="drawer">
    <v-list nav>
      <template v-for="item in navItems" :key="item.to">
        <v-list-item
          :prepend-icon="item.icon" :to="item.to"
          :title="item.text"
          v-if="item.show"
        >
          <template #append>
            <v-badge color="error" :content="user.cart" v-if="item.to === '/cart' && user.cart > 0" inline></v-badge>
          </template>
        </v-list-item>
      </template>
      <v-list-item prepend-icon="mdi-account-arrow-right" v-if="user.isLogin" title="登出" @click="logout"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  
  <!-- 導覽列 -->
  <v-app-bar>
    <HoverMenu></HoverMenu>
    <v-btn to="/aboutme">關於我們</v-btn>
    <v-btn to="/shophere">商店</v-btn>
    <v-spacer />
    <a href="/" class="text-center">
      <img src="@/assets/logo.png" class="logo" style="width: 26%; position: relative; top:7px; left:77px;" />
    </a>
    <v-spacer />
    <template v-if="mobile">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </template>
    <template v-else>
      <template v-for="item in navItems" :key="item.to">
        <v-btn v-if="item.show" :prepend-icon="item.icon" :to="item.to">
          {{ item.text }}
          <v-badge color="red" :content="user.cart" v-if="item.to === '/cart' && user.cart > 0" floating></v-badge>
        </v-btn>
      </template>
      <v-btn prepend-icon="mdi-account-arrow-right" v-if="user.isLogin" @click="logout">登出</v-btn>
      <v-menu v-if="user.isLogin">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar color="grey-darken-1" size="small">
              <span class="text-h5">{{ user.account }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="grey-darken-1">
                <span class="text-h5">{{ user.account }}</span>
              </v-avatar>
              <h3>{{ user.account }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <EditProfiletest :initialName="user.account" :initialEmail="user.email" :initialAge="user.age" :initialGender="user.gender" :initialJob="user.job" :initialAddress="user.address" />
              <!-- <EditProfiletest></EditProfiletest> -->
              <v-divider class="my-3"></v-divider>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-app-bar>

  <!-- 主要內容 -->
  <v-main class="main-content" style="--v-layout-top: 5px; --v-layout-bottom: 5px;">
    <router-view></router-view>
  </v-main>
  
  <!-- 頁尾 -->
  <AppFooter v-if="showFooter"></AppFooter>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'
import HoverMenu from '@/components/HoverMenu.vue'
import AppFooter from '@/components/AppFooter.vue'
import EditProfiletest from '@/components/EditProfiletest.vue'

const { mobile } = useDisplay()
const user = useUserStore()
const createSnackbar = useSnackbar()

const drawer = ref(false)

const navItems = computed(() => {
  return [
    { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !user.isLogin },
    { to: '/login', text: '登入', icon: 'mdi-account-arrow-left', show: !user.isLogin },
    { to: '/cart', text: '購物車', icon: 'mdi-cart', show: user.isLogin },
    { to: '/orders', text: '訂單', icon: 'mdi-list-box', show: user.isLogin },
    { to: '/admin', text: '管理', icon: 'mdi-cog', show: user.isLogin && user.isAdmin }
  ]
})

const logout = async () => {
  await user.logout()
  createSnackbar({
    text: '登出成功',
    snackbarProps: {
      color: 'green'
    }
  })
}

const showFooter = ref(false)

const handleScroll = () => {
  const scrollPosition = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight

  // 顯示 footer 當滾動到頁面的一半
  showFooter.value = scrollPosition + windowHeight >= documentHeight / 2
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  flex: 1;
}

.v-app-bar {
  z-index: 1000;
}

.v-footer {
  z-index: 1000;
}

@media (max-width: 600px) {
  .logo {
    display: none;
  }
}

</style>
