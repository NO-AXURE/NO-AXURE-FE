<template>
  <div class="container">
    <h2 class="title" @click="toAll()">전체 랭킹 ></h2>
    <div class="img-container">
        <div class="img-box" :key="item" v-for="(item) in data">
            <img :src="`/assets/${item.no}.jpeg`" @click="toDetail()"/>
            <div class="box-box">
              <p>{{item.title}}</p>
              <div class="star-ratings">
                <div class="star-ratings-fill space-x-2 text-lg" :style="{ width: ratingToPercent + '%' }">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <div class="star-ratings-base space-x-2 text-lg">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
            <div class="overlay" @click="toDetail()">
                <div class="detail">영화 요약정보</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import apiAuth from "@/apis/testApi";
import { useRouter } from "vue-router";
import { reactive,toRefs, onMounted } from "vue";

const state = reactive({
    data : [
        {"no":1,"title":"화란","src":"@/assets/1.jpeg"},
        {"no":2,"title":"1947 보스톤","src":"@/assets/2.jpeg"},
        {"no":3,"title":"크리에이터","src":"@/assets/3.jpeg"},
        {"no":4,"title":"더넌","src":"@/assets/4.jpeg"},
        {"no":5,"title":"거미집","src":"@/assets/5.jpeg"},
        {"no":6,"title":"화란","src":"@/assets/6.jpeg"},
        {"no":7,"title":"천박사","src":"@/assets/7.jpeg"},
        {"no":1,"title":"화란","src":"@/assets/1.jpeg"},
        {"no":2,"title":"1947 보스톤","src":"@/assets/2.jpeg"},
        {"no":3,"title":"크리에이터","src":"@/assets/3.jpeg"},

    ]
})
onMounted(async() => {
testApi();
})
const router = useRouter();
  const testApi = async() => {
  const result = await apiAuth.getTestUrl();
}
const toAll = () => {
    router.push({path:"/all"});
}
const toDetail = () => {
    router.push({path:"/detail"});
}

const { data } = toRefs(state);
</script>
<style scoped>
.title{
    color:white;
}
.img-container {
    display:flex;
    flex-direction: row;
    flex-wrap : wrap;
}
.img-box {
  width:200px;
  margin:10px;
  flex:auto;
  position: relative;
}
p {
    color:white;
}
.box-box {
  display :flex;
}
.star-ratings {
  color: #aaa9a9; 
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #2b2a29;
  margin-top :15px;
}
 
.star-ratings-fill {
  color: #fff58c;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: gold;
}
 
.star-ratings-base {
  z-index: 0;
  padding: 0;
}
img {
  width:100%;
  height:auto;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: white;
}
.img-box:hover .overlay {
  opacity: 0.9;
}

.detail {
  color: black;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>