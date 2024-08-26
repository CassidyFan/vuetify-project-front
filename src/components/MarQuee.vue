<template>
      <div class="marquee">
        <div class="marquee-content">
          <h2>qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．qwiyeo．</h2>
        </div>
      </div>
  </template>
  
  <script setup>
  import '@iconify/iconify'
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Press+Start+2P&family=Shrikhand&display=swap');
  
  .marquee {
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    position: relative;
  }
  
  .marquee-content {
    font-family: "Shrikhand", serif;
    margin: 5px;
    display: inline-block;
    font-size: 20px;
    /* padding-left: 100%; */
    animation: marquee 400s linear infinite;
    color: #cfc5b6;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(1%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  