<template>
<div class="container">
  <h1>No-Axure</h1>
  <div class="handle">
    <h2 v-if="store.state.authToken == ''" class="join" @click="store.state.JoinPopState = true">회원가입</h2>
    <h2 v-if="store.state.authToken == ''" class="login" @click="store.state.LoginPopState = true">로그인</h2>
    <h2 v-if="store.state.authToken != ''" class="login" @click="store.state.LoginPopState = true">로그아웃</h2>
  </div>
</div>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<style scoped>
.container {
  display : flex;
  margin-top: 20px;
}
.handle {
  margin: auto 0 0 auto;
  display : flex;
}
h1 {
  color:white;
}
h2 {
  color:white;
  margin-right:20px;
}
img {
  width:50px;
}
</style>