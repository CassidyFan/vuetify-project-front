<template>
  <v-container class="main-box h-100">
    <v-row class="h-100">
      <v-col cols="12">
        <h1 class="title-h1 text-center">請選擇管理項目</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn class="all-btn" to="/admin/board">看板管理</v-btn>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn class="all-btn" to="/admin/article">文章管理</v-btn>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn class="all-btn" to="/admin/products">商品管理</v-btn>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn class="all-btn" to="/admin/orders">訂單管理</v-btn>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn class="index-btn" to="/">回首頁</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: 'qwiyeo | 管理',
    login: true,
    admin: true,
    hideSidebar: true
  }
})
</script>

<style scoped>
.main-box {
  background-image: url('/src/assets/greenborder.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100vw; /* 確保寬度覆蓋整個螢幕 */
  margin: 0; /* 移除任何默認的外邊距 */
  max-width: 1904px;
}

.title-h1 {
  font-size: 2rem;
  font-family: "Shrikhand", serif;
  color: #41807c;
  margin-top: 20px;
}

.all-btn {
  font-size: 1rem;
  font-weight: bolder;
  width: 50%;
  height: 50px;
  margin-top: 20px;
  color: #41807c;
  border: 2px solid #41807c;
  background-color: transparent;
  font-family: "Shrikhand", serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.all-btn:hover {
  background-color: #41807c;
  color: #fff;
}

.index-btn {
  font-size: 1rem;
  font-weight: bolder;
  width: 50%;
  height: 50px;
  margin-top: 20px;
  background-color: #41807c;
  color: #fff;
  font-family: "Shrikhand", serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.index-btn:hover {
  color: #ffffff;
  /* border: 2px solid #41807c; */
  background-color: #d65c28;
  /* background-color: transparent; */
}

</style>

<route lang="yaml">
meta:
  layout: admin
  hideSideBar: true
</route>
