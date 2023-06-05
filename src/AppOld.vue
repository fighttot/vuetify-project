<template>
  <!--
    <router-link to="/">首頁</router-link>
    <router-link to="/guitar">吉他</router-link>
  -->
  {{ $route.fullPath }}
  <br>
  <input type="button" value="首頁" @click="goto('/')">
  <input type="button" value="吉他" @click="goto('/guitar')">
  <input type="button" value="顯示路由" @click="showInfo">
  <hr>
  <router-view />
</template>

<!--
<script>
export default {
  methods: {
    goto (path) {
      this.$router.push(path)
    },
    showInfo () {
      console.log(this.$route.fullPath)
    }
  }
}
</script>
-->

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const goto = (path) => {
  router.push(path)
}
const showInfo = () => {
  console.log(route.path)
}
</script>
