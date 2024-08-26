<template>
    <v-container>
    <v-row>
      <v-col cols="12">
        <h2>最新商品</h2>
      </v-col>
      <v-col
        cols="12" md="6" lg="3"
        v-for="product in products"
        :key="product._id"
      >
        <ProductCard v-bind="product"></ProductCard>
      </v-col>
      <v-col cols="12">
        <v-pagination v-model="page" :length="pages" rounded="circle" @update:model-value="loadProducts"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { definePage } from 'vue-router/auto';
import { useApi } from '@/composables/axios';
import { useSnackbar } from 'vuetify-use-dialog';
import ProductCard from '@/components/ProductCard.vue';


onMounted(() => {
});

definePage({
  meta: {
    title: 'qwiyeo',
    login: false,
    admin: false
  }
})

const { api } = useApi();
const createSnackbar = useSnackbar();

const page = ref(1);
const pages = ref(1);
const ITEMS_PER_PAGE = 20;

const products = ref([]);
const loadProducts = async () => {
  try {
    const { data } = await api.get('/product', {
      params: {
        itemsPerPage: ITEMS_PER_PAGE,
        page: page.value
      }
    });
    pages.value = Math.ceil(data.result.total / ITEMS_PER_PAGE);
    products.value.splice(0, products.value.length, ...data.result.data);
  } catch (error) {
    console.log(error);
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    });
  }
};

loadProducts();
</script>