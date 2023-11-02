<template>
    <div class="wrap">
        <LoginPopup v-if="store.state.LoginPopState==true"/>
        <JoinPopup  v-if="store.state.JoinPopState==true"/>
        <div class="menu-wrap">
          <AppMenu/>
        </div>
        <div class="content-wrap">
          <div class="header-wrap">
            <AppHeader/>
          </div>
          <router-view />
        </div>
        <div class="side-wrap">
          <AppSide/>
        </div>
    </div>
</template>

<script setup>
import AppHeader from '@/components/common/AppHeader.vue'
import AppMenu from '@/components/common/AppMenu.vue'
import AppSide from '@/components/common/AppSide.vue'
import LoginPopup from '@/components/LoginPopup.vue'
import JoinPopup from '@/components/JoinPopup.vue'
import {useStore} from "vuex";

const store = useStore();
</script>

<style>
.wrap {
  display: flex;
}
.menu-wrap {
  flex: 2;
  height: 824px;
}
.content-wrap {
  flex: 6;
  height: 824px;
}
.header-wrap {
  text-align : center;
  position: sticky;
  width: 1224px;
  height: 100px;
  border : 1px solid black;
}   
.side-wrap {
  flex: 2;
  height: 824px;
}
  
</style>