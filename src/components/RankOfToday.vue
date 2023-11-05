<template>
  <div class="container">
    <div>
      <h2 class="title" @click="toToday()">오늘의 랭킹 ></h2>
      <carousel :items-to-show="3" :autoplay="3000">
        <slide class="slide" v-for="item in data" :key="item">
          <div class="img-box">
            <div class="box-box">
              <h4 class="img-no">{{ item.no }}. {{ item.title }}</h4>
              <div class="star-ratings">
                <div class="star-ratings-fill space-x-2 text-lg" :style="{ width: ratingToPercent + '%' }">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <div class="star-ratings-base space-x-2 text-lg">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
            <img @click="toDetail()" :src="`/assets/${item.no}.jpeg`"/>
            <div class="overlay" @click="toDetail()">
              <div class="detail">영화 요약정보</div>
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useRouter } from "vue-router";
import { reactive,toRefs } from 'vue';
import boardApi from "@/apis/board.js"
const router = useRouter();

const toToday = () => {
  router.push({path:"/today"});
}
const toDetail = () => {
    router.push({path:"/detail"});
}

const state = reactive({
    data : [
        {"no":1,"title":"화란","src":"@/assets/1.jpeg","actor":"", "detail":""},
        {"no":2,"title":"1947 보스톤","src":"@/assets/2.jpeg","actor":"", "detail":""},
        {"no":3,"title":"크리에이터","src":"@/assets/3.jpeg","actor":"", "detail":""},
        {"no":4,"title":"더넌","src":"@/assets/4.jpeg","actor":"", "detail":""},
        {"no":5,"title":"거미집","src":"@/assets/5.jpeg","actor":"", "detail":""},
        {"no":6,"title":"화란","src":"@/assets/6.jpeg","actor":"", "detail":""},
        {"no":7,"title":"천박사","src":"@/assets/7.jpeg","actor":"", "detail":""}

    ]
})

const { data } = toRefs(state);

async function getContentBoardMain(){
  
const boardDbData = await boardApi.getContentBoardMain();

return boardDbData;
}

const boardData = getContentBoardMain();
</script>

<style scoped>
.container{
  width:1224px;
}
.title {
  color:white;
}
.img-no {
  color:white;
}
.img-box {
  position: relative;
  width:200px;
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
  margin-top :20px;
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
  display:block;
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