<template>
    <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="100%"
    >
      <div class="marquee-container">
        <div class="marquee">
          <div class="marquee-content">
            <v-slide-group
              v-model="model"
              class="pa-4"
              show-arrows
            >
              <v-slide-group-item
                v-for="n in 35"
                :key="n"
                v-slot="{ isSelected, toggle, selectedClass }"
              >
                <v-card
                  :class="['ma-4', selectedClass]"
                  color="grey-lighten-1"
                  height="300"
                  width="100"
                  @click="toggle"
                >
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <v-icon
                        v-if="isSelected"
                      ></v-icon>
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </div>
        </div>
      </div>
    </v-sheet>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const model = ref(null)
  </script>
  
  <style scoped>
  .marquee-container {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
  }
  
  .marquee {
    display: flex;
    animation: marquee 30s linear infinite;
  }
  
  .marquee-content {
    display: flex;
    flex-wrap: nowrap;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  </style>
  