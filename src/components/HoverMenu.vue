<template>
    <div class="text-center">
      <v-menu
        open-on-hover
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="black"
            v-bind="props"
          >
            最新消息
          </v-btn>
        </template>
  
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :to="item.to"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        items: [
          { title: '愛地球', to:'/loveearth' },
          { title: '最新活動', to:'/newsinfo' },
          { title: '好人好事', to:'/goodthings' },
        ],
      }),
    }
  </script>