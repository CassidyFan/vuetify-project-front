<template>
  <section id="section02" class="about-background">
    <v-container fluid>
      <v-row class="d-flex align-center justify-center text-center">
        <v-col cols="12" md="5" class="d-flex flex-column justify-center">
          <router-link to="/aboutme" style="text-decoration: none;">
            <blockquote class="about-text">
              <h1>about studio</h1>
            </blockquote>
            <p class="about-p">
              歡迎來到 qwiyeo，我們是一個致力於保護環境和愛護動物的文創品牌。我們的每一件產品都以北極熊為靈感，旨在喚起人們對環境保護的重視，並為地球的未來做出貢獻。
            </p>
          </router-link>
        </v-col>
        <v-col cols="12" md="5" class="d-flex justify-center align-center">
          <div class="image-wrapper">
            <v-parallax
              src="../assets/seeturtle.jpg"
              alt="About Image"
              class="about-image"
              hight="100%"
              width="100%"
            ></v-parallax>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#section02 {
  width: 100vw;
  background-color: cadetblue;
   
}
/* 避免內容超出 section */
.about-background {
  min-height: 60vh;
  padding: 20px;
  overflow: hidden;
}

.about-text {
  color: #fff;
  font-size: 4rem;
  font-weight: bolder;
  font-family: "Shrikhand", serif;
  line-height: 1.2;
  text-align: left;
  margin-bottom: 20px;
}

.about-p {
  color: #fff;
  font-size: 1.25rem;
  font-weight: bolder;
  text-align: left;
  line-height: 5rem;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 60px;
  /* width: 100%;
  max-height: 57%;
 overflow: hidden; */
}

.about-image {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  object-fit: cover;
  border-radius: 10px;
  /* width: 60%;
  height: auto;
  object-fit: cover; */
}

blockquote {
  position: relative;
  padding-left: 20px;
  margin: 0;
}

blockquote::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 100%;
  background-color: #fff;
}
</style>
