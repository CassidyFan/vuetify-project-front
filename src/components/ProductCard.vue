<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        :disabled="loadingbar"
        :loading="loadingbar"
        class="mx-auto"
        color="grey-lighten-4"
        max-width="380"
        v-bind="props"
      >
        <!-- 進度條放在這裡  -->
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img :src="image" cover height="200">
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
              style="height: 100%;"
            >
              ${{ price }}
            </div>
          </v-expand-transition>
        </v-img>

        <v-card-text class="pt-6">
          <h3 class="text-h4 font-weight-light text-orange mb-2" style="font-family: Shrikhand, serif;">
            <router-link class="custom-link" :to="'/products/' + _id">{{ name }}</router-link>
          </h3>
          <div
            class="font-weight-light text-h7 mb-2 text-grey"
            style=
            "font-family: Shrikhand, serif;
            height: 40px; overflow: hidden;
            width: 300px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;"
          >
            {{ description }}
          </div>
        </v-card-text>
        
        <v-card-actions>
          <v-btn
            color="deep-purple-lighten-2"
            prepend-icon="mdi-cart"
            text="加入購物車"
            block
            border
            @click="handleClick"
            :loading="loading"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { ref } from 'vue'
import Swal from 'sweetalert2'

const user = useUserStore()
const router = useRouter()
// const createSnackbar = useSnackbar()

const props = defineProps(['_id', 'category', 'description', 'image', 'name', 'price', 'sell'])

const loading = ref(false)
const selection = ref(1)
const loadingbar = ref(false)

const reserve = () => {
  loadingbar.value = true
  setTimeout(() => {
    loadingbar.value = false
  }, 2000)
}

const addCart = async () => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  loading.value = true
  const result = await user.addCart(props._id, 1)
  Swal.fire({
    title: result.text,
    icon: result.color === 'red' ? 'error' : 'success',
    showConfirmButton: false,
    timer: 2000,
    background: '#f5e8d7',
    color: '#41807c',
    width: 300,
  })
  loading.value = false
}

const handleClick = () => {
  reserve()
  addCart()
}
</script>

<style scoped>
  .custom-link {
    text-decoration: none;
    color: orange;
  }

  .custom-link:hover {
    text-decoration: underline overline;
    font-weight: bolder;
    color: #f5e8d7;
  }

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
