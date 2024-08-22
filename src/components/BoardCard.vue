<template>
  <v-card
    class="mx-auto text-white board-card"
    color="#a1887f"
    max-width="400"
    prepend-icon="mdi-paw"
    title="qwitter"
  >
    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-img :src="image" cover height="170"></v-img>

    <v-card-text class="text-h5 py-2 description">
      "{{ description }}"
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraightStrand&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=Overall&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          ></v-avatar>
        </template>

        <v-list-item-title>Cassidy Fan</v-list-item-title>
        <v-list-item-subtitle>qwiyeo Creator</v-list-item-subtitle>
        
        <template v-slot:append>
          <v-btn class="eyes-btn" color="white" prepend-icon="mdi-eye" to="/shophere"></v-btn>
          <div class="justify-self-end">
            <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">256</span>
            <span class="me-1">·</span>
            <v-icon class="me-1" icon="mdi-share-variant" @click="showShareDialog"></v-icon>
            <span class="subheading">45</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>

    <!-- Share Dialog @click="viewDetails" -->
    <v-dialog v-model="shareDialog" max-width="500">
      <v-card>
        <v-card-title class="headline">複製網址</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="shareUrl"
            label="分享網址"
            readonly
            append-icon="mdi-content-copy"
            @click:append="copyToClipboard"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="shareDialog = false">關閉</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const router = useRouter()

const props = defineProps(['_id', 'name', 'description', 'image'])
const shareDialog = ref(false)
const shareUrl = ref('https://www.wda.gov.tw/')

// const viewDetails = () => {
//   router.push('/boards/' + props._id)
// }

const showShareDialog = () => {
  shareDialog.value = true
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(shareUrl.value).then(() => {
    console.log('複製成功！')
  }).catch(err => {
    console.error('複製失敗:', err)
  })
}
</script>

<style scoped>
.board-card {
  height: 400px; /* 固定卡片的高度 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}

.description {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 顯示最多三行 */
  -webkit-box-orient: vertical;
  white-space: normal;
}

.v-card-actions {
  margin-top: auto; /* 將 v-card-actions 固定在底部 */
}
</style>
