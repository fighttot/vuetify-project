<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>校園社團介紹網</v-app-bar-title>
      <v-btn prepend-icon="mdi-home" to="/" :active="false">回首頁</v-btn>
    </v-app-bar>
    <!-- 網站內容 -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app>最近更新日期:2023/06/05</v-footer>
  </v-app>
</template>