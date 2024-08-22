<template>
  <MarQuee></MarQuee>
  <v-carousel
    :show-arrows="false" 
    cycle
    style="height: 889px;"
    interval="5000"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    >
    </v-carousel-item>
  </v-carousel>
  <!-- #eb8e24 -->
  <v-container>
    <h2 style="font-family:Shrikhand, serif;padding-top: 30px; color: #212879;font-size: 2rem;">What's New</h2>
    <v-slide-group
      show-arrows
      v-model="selectedSlide"
      :center-active="true"
      class="pa-7"
      style="gap: 20px;"
    >
      <v-slide-item
        v-for="product in products"
        :key="product._id"
        class="pa-8"
      >
        <ProductCard v-bind="product"></ProductCard>
      </v-slide-item>
    </v-slide-group>
    
  </v-container>
  
  <section>
    <StudioSection></StudioSection>
  </section>
  <section>
    <SlideGroups></SlideGroups>
  </section>
  <section>
    <SecTion01></SecTion01>
  </section>
  <section>
    <Section02></Section02>
  </section>
  <section>
    <SecTion03></SecTion03>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { definePage } from 'vue-router/auto';
import { useApi } from '@/composables/axios';
import { useSnackbar } from 'vuetify-use-dialog';
import ProductCard from '@/components/ProductCard.vue';
import StudioSection from '@/components/StudioSection.vue';
import MarQuee from '@/components/MarQuee.vue';
import SlideGroups from '@/components/SlideGroups.vue';

// 使用 import 来确保图片路径正确
const items = ref([
  { src: new URL('@/assets/bear01.jpg', import.meta.url).href },
  { src: new URL('@/assets/bear02.jpg', import.meta.url).href },
  { src: new URL('@/assets/bear03.jpg', import.meta.url).href },
  { src: new URL('@/assets/dog01.jpg', import.meta.url).href },
]);

definePage({
  meta: {
    title: 'qwiyeo',
    login: false,
    admin: false
  }
})

onMounted(() => {
});

const { api } = useApi();
const createSnackbar = useSnackbar();

const page = ref(1);
const pages = ref(1);
const ITEMS_PER_PAGE = 20;

const products = ref([]);
const selectedSlide = ref(0);

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
