<template>
  <v-container fluid>
    <v-row class="about-background" align="center" justify="center">
      <v-col cols="12" md="6">
        <img class="eco-img" src="../assets/leave.jpg" alt="leave" style="max-width: 100%;">
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column align-center justify-center">
        <div class="about-text">
          <h1 style="font-size: 5rem;">Eco Time</h1>
          <div class="about-p pt-2">
            <p>感受每一份小小的善舉，共同推動社會的正能量。</p>
            <p>馬哈蒂爾·甘地：「你想看到世界有什麼改變，你就必須成為那個改變的一部分。」</p>
            <p>點擊了解企業的愛心行動，讓溫暖傳遞</p>
            <br>
            <v-btn class="clickbtn" style="width: 200px; height: 60px;" to="/goodthings">Click me</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
#section2 {
  width: 100vw;
  height: 60vh;
  background-color: #f1e3c8;
}

.about-background {
  min-height: 63vh;
  display: flex;
  align-items: center;
}

.about-content {
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.about-text {
  font-family: "Shrikhand", serif;
  color: #41807c;
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
  line-height: 2rem;
  width: 100%;
}

.about-p {
  color: #a1a0a0;
  text-align: center;
  line-height: 3rem;
  margin-top: 20px;
}

.clickbtn {
  color: #41807c;
  border: 2px solid #41807c;
  background-color: transparent;
  font-family: "Shrikhand", serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.clickbtn:hover {
  background-color: #41807c;
  color: #fff;
}

.eco-img {
  width: 100%;
  height: auto;
}
</style>
