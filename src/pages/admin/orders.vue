<template>
  <v-container class="order-container">
    <v-row>
      <v-col cols="12">
        <h1 style="color: #41807c;">訂單管理</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-data-table
          :items="items"
          :headers="headers"
        >
          <template #[`item.cart`]="data">
            <ul>
              <li v-for="item in data.item.cart" :key="item._id">
                {{ item.p_id.name }} * {{ item.quantity }}
              </li>
            </ul>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: 'qwiyeo | 訂單管理',
    login: true,
    admin: true
  }
})

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const items = ref([])
const headers = [
  { title: '編號', key: '_id' },
  { title: '帳號', key: 'user.account' },
  { title: '日期', key: 'createdAt', value: item => new Date(item.createdAt).toLocaleString() },
  { title: '商品', key: 'cart', sortable: false },
  {
    title: '金額',
    key: 'price',
    value: item => {
      return item.cart.reduce((total, current) => {
        return total + current.quantity * current.p_id.price
      }, 0)
    }
  }
]

const loadItems = async () => {
  try {
    const { data } = await apiAuth.get('/order/all')
    items.value.push(...data.result)
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
}
loadItems()
</script>

<style scoped>
.order-container {
  background-image: url('/src/assets/greenborder.jpg');
  background-size: cover; /* 確保圖片覆蓋整個容器 */
  background-position: center; /* 使圖片保持居中 */
  background-repeat: no-repeat; /* 防止背景圖片重複 */
  min-height: 100vh; /* 保證容器最小高度為視窗高度 */
  padding:50px;
  /* display: flex; */
  /* flex-direction: column; */
}
.v-data-table {
  /* margin-top: 50px; */
  background-color: rgba(255, 255, 255, 0.6); /* 增加背景透明度以提高可讀性 */
}
</style>

<route lang="yaml">
meta:
  layout: admin
</route>
