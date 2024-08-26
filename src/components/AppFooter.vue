<template>
  <v-footer
    class="bg-grey-darken-3 text-center d-flex flex-column"
    app
  >
    <div>
      <div class="pt-0 year">
        <!-- <h3>qwiyeo</h3> -->
      </div>
      <!-- <br> -->
      <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.name"
        :icon="icon.name"
        :href="icon.link"
        target="_blank"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>
    </div>
    <p style="color: black;">僅提供學習使用</p>
    <div class="year">
<<<<<<< HEAD
      {{ new Date().getFullYear() }} &copy; <a href="/" class="footer-link">qwiyeo</a>
=======
      {{ new Date().getFullYear() }} &copy; qwiyeo
>>>>>>> dffa9d2e573a5da067155887482590441baaffce
    </div>
  </v-footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Press+Start+2P&family=Shrikhand&display=swap');
.year {
  font-family: "Shrikhand", serif;
  font-size: 1.5rem;
  margin-top: 10px;
}
<<<<<<< HEAD

.footer-link {
  color: white;
  text-decoration: none;
}
=======
>>>>>>> dffa9d2e573a5da067155887482590441baaffce
</style>

<script>
export default {
  data: () => ({
    icons: [
      { name: 'mdi-facebook', link: 'https://www.wda.gov.tw/' },
      { name: 'mdi-twitter', link: 'https://www.wda.gov.tw/' },
      { name: 'mdi-linkedin', link: 'https://www.wda.gov.tw/' },
      { name: 'mdi-instagram', link: 'https://www.wda.gov.tw/' },
    ],
  }),
}
</script>
