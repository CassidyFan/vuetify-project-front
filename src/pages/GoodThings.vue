<template>
  <v-container class="bg-image">
    <h2 class="title" style="text-align: center; color: #41807c;">
      「每一個善行，都是世界變得更好的希望。了解那些正在改變世界的故事。」
    </h2>
    <br>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="12"
        v-for="article in articles"
        :key="article._id"
      >
        <ArticleCard
          :_id="article._id"
          :title="article.title"
          :author="article.author"
          :content="article.content"
          :image="article.image"
          :url="article.url"
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
    title: 'qwiyeo | 好人好事',
    login: false,
    admin: false
  }
})

const ITEMS_PER_PAGE = 10
const page = ref(1)
const pages = ref(0)
const articles = ref([])

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const loadArticles = async () => {
  try {
    const { data } = await apiAuth.get('/article', {
      params: {
        itemsPerPage: ITEMS_PER_PAGE,
        page: page.value
      }
    })
    pages.value = Math.ceil(data.result.total / ITEMS_PER_PAGE)
    articles.value = data.result.data
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
}

onMounted(loadArticles)
</script>

<style scoped>
.bg-image {
  background-image: url(../assets/greenborder01.jpg);
  background-size: cover;
  background-position: center;
  max-width: 1916px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}
</style>
