<template>
  <v-container class="box-size">
    <v-row>
      <v-col cols="12">
        <v-card variant="tonal" class="article-card">
          <v-row no-gutters>
            <v-col cols="4">
              <v-img :src="image" cover class="article-image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title class="title-text">
                <router-link :to="'/article/' + _id">{{ title }}</router-link>
              </v-card-title>
              <v-card-subtitle>{{ author }}</v-card-subtitle>
              <v-card-text class="truncate-text">
                {{ content }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="readbtn" @click="readMore">See More</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  _id: String,
  title: String,
  author: String,
  content: String,
  image: String,
  url: String
})

// const readMore = () => {
//   window.location.href = props.url
// }
const readMore = () => {
  if (props.url) {
    window.open(props.url, '_blank');
  } else {
    console.error('URL is not defined');
  }
}
</script>

<style scoped>
.title-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #455a64; /* 這裡可以更改為你想要的顏色 */
}

.title-text a {
  text-decoration: none; /* 移除底線 */
  color: inherit; /* 保持連結的顏色與標題一致 */
}

.box-size {
  max-width: 65%; /* 設置卡片的最大寬度 */
}

.article-card {
  height: 263px; /* 設置卡片的固定高度 */
  margin: 10px 0; /* 設置卡片之間的間距 */
  border-radius: 10px; /* 設置卡片的圓角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 設置卡片的陰影 */
  transition: transform 0.3s; /* 設置卡片的 hover 效果 */
}

.article-image {
  height: 100%; /* 設置圖片的高度為卡片的100% */
}

.truncate-text {
  height: 80px; /* 設置文字的最大高度 */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #78909c;
  padding: 20px;
}

.readbtn {
  width: 120px;
  height: 42px;
  font-weight: bold;
  color: #607d8b;
  background-color: transparent;
  border: 2px solid #607d8b;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 43px;
  margin-right: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.readbtn:hover {
  background-color: #607d8b;
  color: #fff;
}

</style>
