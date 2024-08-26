<template>
  <v-container class="main-box">
    <h2 style="text-align: center; color: #41807c;">「探索綠色台灣，入住環保旅店，讓您的旅行更有意義。」</h2>
    <br>
    <h2 style="color: #727171;">全台環保旅店查詢 :</h2>
    <v-row>
      <v-col cols="12">
        <v-select
          v-model="selectedCity"
          :items="cityNames"
          label="Select City"
          clearable
        ></v-select>
      </v-col>
      <v-col v-if="paginatedItems.length" v-for="item in paginatedItems" :key="item.ImportDate" cols="12" md="4">
        <v-card class="mx-auto custom-card" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="../assets/Taiwanmap.jpg"
            cover
          >
<<<<<<< HEAD
            <v-card-title style="color:#004D40; font-weight: bolder;" v-if="item.name">{{ item.cityname }}</v-card-title>
          </v-img>
          
          <v-card-subtitle class="pt-4" style="color: #333; font-weight: bolder;">
=======
            <v-card-title v-if="item.name">{{ item.cityname }}</v-card-title>
          </v-img>
          
          <v-card-subtitle class="pt-4" style="color: #333;">
>>>>>>> dffa9d2e573a5da067155887482590441baaffce
            {{ item.name }}
          </v-card-subtitle>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :model-value="4.5"
                color="amber"
                density="compact"
                size="small"
                half-increments
                readonly
              ></v-rating>
              <div class="text-grey ms-4">
                4.5 (413)
              </div>
            </v-row>
            <br>
            <div v-if="item.address" style="color: #41807c;">{{ item.address }}</div>
            <!-- <div v-if="item.phone">{{ item.phone }}</div>
            <div v-if="item.mobile">{{ item.mobile }}</div> -->
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" @click="handleClick(item)">Click me</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col v-else cols="12">
        <v-alert>Loading...</v-alert>
      </v-col>
    </v-row>

    <!-- 分頁控制 -->
    <v-row>
      <v-col cols="12">
        <v-pagination
          v-model="currentPage"
          :length="pageCount"
          total-visible="7"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { definePage } from 'vue-router/auto';

definePage({
  meta: {
    title: 'qwiyeo | 愛地球',
    login: false,
    admin: false
  }
})

const items = ref([])
const selectedCity = ref(null)
const currentPage = ref(1)
const itemsPerPage = 18

onMounted(async () => {
  try {
    const response = await axios.get('https://data.moenv.gov.tw/api/v2/epr_p_02?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate%20desc&format=JSON')
    items.value = response.data.records || [] // 確保 items 為數組
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

const handleClick = (item) => {
  const searchUrl = `https://www.bing.com/search?q=${item.name} ${item.address}`
  window.open(searchUrl, '_blank')
}

const cityNames = computed(() => {
  const cities = items.value.map(item => item.cityname).filter(Boolean)
  return [...new Set(cities)] // 去重
})

const filteredItems = computed(() => {
  if (!selectedCity.value) {
    return items.value
  }
  return items.value.filter(item => item.cityname === selectedCity.value)
})

const pageCount = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage))

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredItems.value.slice(start, end)
})
</script>

<style scoped>
/*html, body {
  height: 100%;
  margin: 0;
}

@keyframes animateBackground {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

body {
  background: linear-gradient(45deg, #ff9a9e, #fad0c4);
  background-size: 400% 400%;
  animation: animateBackground 10s ease infinite;
}
*/

.main-box {
  width: 75%;
  /* max-width: 1916px; */
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}
.custom-card {
  height: 400px; /* 固定卡片的高度 */
  min-height: 350px; /* 確保最小高度 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
