<template>
  <section id="section03" class="sec03-background">
    <v-container fluid class="relative-container">
      <v-row class="d-flex align-center justify-center text-center">
        <v-col cols="12" md="8" class="p1-text">
<<<<<<< HEAD
          <p>
=======
          <p style="font-size: 3rem; font-weight: bolder;">
>>>>>>> dffa9d2e573a5da067155887482590441baaffce
            探索我們最新的綠色創新動態
          </p>
        </v-col>
      </v-row>
      <v-row class="p2-text-container">
        <v-col cols="12" md="4" class="p2-text">
          <p>Learn about our latest news</p>
<<<<<<< HEAD
          <v-btn class="news-btn" to="/newsinfo">Click me</v-btn>
=======
          <v-btn class="news-btn" to="/aboutme">Click me</v-btn>
>>>>>>> dffa9d2e573a5da067155887482590441baaffce
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#section03 {
  background-color: #d2d0c5;
  background-image: url('../assets/logo2.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 60vh;
}

.relative-container {
  position: relative;
  height: 100%;
}

.p1-text {
  font-family: "Shrikhand", serif;
  font-size: 2.25rem;
  font-weight: 400;
  text-align: left;
  color: #f8f8f8;
  margin-top: 43px;
}

.p1-text:hover {
  font-family: "Shrikhand", serif;
  font-size: 2.25rem;
  font-weight: 400;
  text-align: left;
  color: #b9b8af;
}

.p2-text-container {
  position: absolute;
  bottom: 12px;
  right: -69px;
  padding: 20px; /* Optional: Adjust for padding from edges */
}

.p2-text {
  font-family: "Shrikhand", serif;
  font-size: 2.25rem;
  font-weight: 400;
  text-align: left;
  color: #f8f8f8;
}

.news-btn {
  width: 200px;
  height: 60px;
  color: #b9b8af;
}

.news-btn:hover {
  background-color: rgb(99, 97, 95);
  color: #fff;
}
<<<<<<< HEAD

@media (max-width: 600px) {
  .p1-text {
    font-size: 1.75rem;
  }
  .p1-text:hover {
  font-family: "Shrikhand", serif;
  font-size: 1.75rem;
  font-weight: 400;
  text-align: left;
  color: #b9b8af;
}
  .p2-text-container {
    right: -250px;
  }
  .p2-text {
    font-size: 1.5rem;
  }
}

@media (min-width: 961px) and (max-width: 1400px) {
  .p2-text-container {
  position: absolute;
  bottom: 2px;
  right: -250px;
  padding: 20px; /* Optional: Adjust for padding from edges */
}
.p2-text {
  font-family: "Shrikhand", serif;
  font-size: 1.75rem;
  font-weight: 400;
  text-align: left;
  color: #f8f8f8;
}
}
=======
>>>>>>> dffa9d2e573a5da067155887482590441baaffce
</style>
