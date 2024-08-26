<template>
  <v-container class="main-container">
    <v-row class="fill-height" align="center" justify="center">
      <!-- 左側圖片 -->
      <v-col cols="12" md="6">
        <v-img :src="product.image" height="500"></v-img>
      </v-col>

      <!-- 右側文字與按鈕 -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <h1 class="text-center" style="color: #212879;">{{ product.name }}</h1>
        <br>
        <h2 class="text-center" style="color: #d65c28;">${{ product.price }}</h2>
        <br>
        <p>{{ product.description }}</p>
        <br>
          <v-form :disabled="isSubmitting" @submit.prevent="submit">
            <v-text-field
              type="number"
              v-model.number="quantity.value"
              :error-messages="quantity.errorMessage"
              label="數量"
            ></v-text-field>
            <br>
            <v-row justify="end">
            <v-btn
              class="add-text-btn"
              type="submit"
              prepend-icon="mdi-cart"
              :loading="isSubmitting"
            >
              加入購物車
              </v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    
    <!-- 下架顯示層 -->
    <v-overlay
      class="align-center justify-center text-center"
      :model-value="!product.sell"
      persistent
    >
      <h1 class="text-center text-red">已下架</h1>
      <v-btn to="/">回首頁</v-btn>
    </v-overlay>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { definePage } from 'vue-router/auto'
import { useRoute, useRouter } from 'vue-router'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '@/stores/user'

definePage({
  meta: {
    title: '購物網 | 商品',
    login: false,
    admin: false
  }
})

const { api } = useApi()
const route = useRoute()
const router = useRouter()
const createSnackbar = useSnackbar()
const user = useUserStore()

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const load = async () => {
  try {
    const { data } = await api.get('/product/' + route.params.id)
    product.value = data.result
    document.title = '購物網 | ' + product.value.name
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
load()

const schema = yup.object({
  quantity: yup.number().typeError('數量必填').required('數量必填').min(1, '最少為 1')
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1
  }
})
const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  const result = await user.addCart(product.value._id, values.quantity)
  createSnackbar({
    text: result.text,
    snackbarProps: {
      color: result.color
    }
  })
})
</script>

<style scoped>
.main-container {
  padding:180px 0 100px;
  font-family: "Shrikhand", serif;
  color: #727171;
}

.add-text-btn {
  width: 180px;
  height: 55px;
  margin-right: 12px;
  background-color: #212879;
  color: white;
}
</style>
