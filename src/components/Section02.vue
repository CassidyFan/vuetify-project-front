<template>
  <!-- <section id="section2"> -->
    <v-container fluid>
      <v-row class="about-background" align="center" justify="center">
        <v-col cols="12" md="6" class="d-flex flex-column align-center justify-center">
          <div class="about-text">
            <blockquote class="orange-line">
              <p style="font-size: 2.25rem;">探索綠色旅店，守護地球未來</p>
            </blockquote>
            <div class="about-p pt-2">
              <p>
                在這個講求可持續發展的時代，旅行不再只是單純的觀光，我們也應該考慮對環境的影響。為了幫助您找到既舒適又環保的住宿選擇，我們精心打造了環保旅店查詢功能。透過這項功能，您可以輕鬆查詢遍布全台灣的綠色旅店，這些旅店都致力於減少碳足跡、推行節能措施，並以友善環境的方式經營。
              </p>
              <br>
              <v-btn class="clickbtn mt-4" style="width: 200px; height: 60px;" to="/loveearth">Click me</v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="about-image">
            <img src="../assets/forest.jpg" alt="forest" style="max-width: 100%;">
          </div>
        </v-col>
      </v-row>
    </v-container>
  <!-- </section> -->
</template>

  
  <style scoped>
  #section2 {
    width: 100vw;
    height: 63vh;
  }
  
  .about-background {
    min-height: 63vh;
    display: flex;
    align-items: center;
    background-color: rgb(223, 223, 223);
  }
  
  .about-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* margin-right: -19%;
    margin-left: 10%; */
  }
  
  .about-text {
    color: #858383;
    font-size: 20px;
    font-weight: bolder;
    line-height: 3rem;
    width: 60%;
    padding-right: 5%;
    padding-top: 5%;
  }
  
  .orange-line {
    position: relative;
    padding-left: 10px;
    margin: 20px 0;
  }
  
  .orange-line::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 7px;
    height: 100%;
    background-color:orange ;
  }
  
  .about-p {
    color: #a1a0a0;
    line-height: 2rem;
  }
  
  .about-image {
    width: 100%;
    height: auto;
  }
  
  .about-image img {
    width: 100%;
     /*height: 600px; 這裡設定圖片的高度 */
    object-fit: cover; /* 保持圖片比例，填充高度 */
  }

  .clickbtn {
    color: rgb(241, 176, 55);
    font-family: "Shrikhand", serif;
  }
  .clickbtn:hover {
    background-color: rgb(241, 176, 55);
    color: #fff;
  }
  </style>
  