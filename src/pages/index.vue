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
<<<<<<< HEAD
  <!--
  <v-container>
    <h2 data-aos="fade-right" style="font-family:Shrikhand, serif;padding-top: 30px; color: #212879;font-size: 2rem;">What's New</h2>
=======
  <!-- #eb8e24 -->
  <v-container>
    <h2 style="font-family:Shrikhand, serif;padding-top: 30px; color: #212879;font-size: 2rem;">What's New</h2>
>>>>>>> dffa9d2e573a5da067155887482590441baaffce
    <v-slide-group
      show-arrows
      v-model="selectedSlide"
      :center-active="true"
      class="pa-7"
<<<<<<< HEAD
      style="gap: 20px; padding-left: 10px; padding-right: 10px; margin-left: 10px; margin-right: 10px;"
=======
      style="gap: 20px;"
>>>>>>> dffa9d2e573a5da067155887482590441baaffce
    >
      <v-slide-item
        v-for="product in products"
        :key="product._id"
        class="pa-8"
      >
<<<<<<< HEAD
        <ProductCard class="product-card" v-bind="product"></ProductCard>
      </v-slide-item>
    </v-slide-group>
  </v-container>
  -->

  <v-container>
    <h2 data-aos="fade-right" style="font-family:Shrikhand, serif;padding-top: 30px;padding-bottom: 50px; color: #212879;font-size: 2rem;">What's New</h2>
    <swiper     
       :navigation="true" 
       :modules="modules" 
       class="mySwiper"
       :slidesPerView="1"
       :breakpoints="{
          '600': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '960': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1280': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
       }"
    >
      <swiper-slide 
       v-for="product in products" :key="product._id">
         <ProductCard class="product-card" v-bind="product"></ProductCard>
      </swiper-slide>
      <!-- <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide> -->
    </swiper>
    <br>
    <br>
    <br>
    <br>
  </v-container>
=======
        <ProductCard v-bind="product"></ProductCard>
      </v-slide-item>
    </v-slide-group>
    
  </v-container>
>>>>>>> dffa9d2e573a5da067155887482590441baaffce
  
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
<<<<<<< HEAD
import Aos from 'aos';
import 'aos/dist/aos.css';

// swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const modules = [Pagination, Navigation];


// 使用 import 来确保图片路径正确
const items = ref([
  { src: new URL('@/assets/desk01.jpg', import.meta.url).href },
  { src: new URL('@/assets/desk02.jpg', import.meta.url).href },
  { src: new URL('@/assets/desk07.jpg', import.meta.url).href },
  { src: new URL('@/assets/desk04.jpg', import.meta.url).href },
=======

// 使用 import 来确保图片路径正确
const items = ref([
  { src: new URL('@/assets/bear01.jpg', import.meta.url).href },
  { src: new URL('@/assets/bear02.jpg', import.meta.url).href },
  { src: new URL('@/assets/bear03.jpg', import.meta.url).href },
  { src: new URL('@/assets/dog01.jpg', import.meta.url).href },
>>>>>>> dffa9d2e573a5da067155887482590441baaffce
]);

definePage({
  meta: {
    title: 'qwiyeo',
    login: false,
    admin: false
  }
})

<<<<<<< HEAD
// onMounted(() => {
// });

onMounted(() => {
  Aos.init({
    duration: 1000, // 初始化 AOS
  });
  loadProducts().then(() => {
    Aos.refresh(); // 重新初始化 AOS
  });
});


=======
onMounted(() => {
});

>>>>>>> dffa9d2e573a5da067155887482590441baaffce
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

<style scoped>

.mySwiper{
  /* height: 300px; */
  width: 85%;
}
</style>
