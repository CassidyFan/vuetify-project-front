<template>
  <v-navigation-drawer v-if="!$route.meta.hideSidebar" permanent>
    <v-list>
      <v-list-item :prepend-avatar="avatar" :title="user.account"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="item in navItems" :key="item.to"
        :to="item.to" :title="item.text" :prepend-icon="item.icon"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!--  style="--v-layout-left: 100px; --v-layout-right: 100px;" -->
  <v-main style="--v-layout-left: 0;">
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'

const user = useUserStore()

const navItems = [
  { to: '/admin/board', text: '看板管理', icon: 'mdi-comment-processing-outline'},
  { to: '/admin/article', text: '文章管理', icon: 'mdi-pencil-outline' },
  { to: '/admin/products', text: '商品管理', icon: 'mdi-shopping-outline' },
  { to: '/admin/orders', text: '訂單管理', icon: 'mdi-list-box-outline' },
  { to: '/', text: '回首頁', icon: 'mdi-home-outline' }
]

const avatar = computed(() => {
  return user.avatarUrl || `https://api.multiavatar.com/${user.account}.png`
})

const sidebarVisible = computed(() => !route.meta.hideSidebar)
</script>

<style scoped>
  .v-navigation-drawer {
    background-color: #fef2e4;
    /* background-image: url('/src/assets/greenborder.jpg'); */
  }
  .v-list-item {
    cursor: pointer;
  }
  .v-list-item--active {
    background-color: #e0e0e0;
  }
</style>
