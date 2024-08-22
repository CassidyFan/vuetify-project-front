<template>
  <v-container class="news-box">
    <h2 class="title" style="text-align: center; color: #727171;">Latest news, come and take a look!</h2>
    <br>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="board in boards"
        :key="board._id"
      >
        <BoardCard
          :_id="board._id"
          :name="board.name"
          :description="board.description"
          :image="board.image"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { definePage } from 'vue-router/auto';

definePage({
  meta: {
    title: 'qwiyeo | 最新活動',
    login: false,
    admin: false
  }
})

const ITEMS_PER_PAGE = 10
const page = ref(1)
const pages = ref(0)
const boards = ref([])

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const loadBoards = async () => {
  try {
    const { data } = await apiAuth.get('/board', {
      params: {
        itemsPerPage: ITEMS_PER_PAGE,
        page: page.value
      }
    })
    console.log('API Data:', data) // 確認獲取到的數據
    pages.value = Math.ceil(data.result.total / ITEMS_PER_PAGE)
    boards.value = data.result.data
    console.log('Boards:', boards.value) // 確認 boards 數組是否正確更新
  } catch (error) {
    console.error('API Error:', error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
}

onMounted(loadBoards)
</script>

<style scoped>
.title {
  font-family: "Shrikhand", serif;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 25px;
}
.news-box {
  margin-top: 30px;
  max-width: 75%;
}
</style>
