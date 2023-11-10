<template >
    <div id="box" @mousedown="mouseDown">
    <textarea class ="box-child" v-for ="(each, index) in boxChilds" :key  ="index" :style="each" @mousedown.stop="doNothing"></textarea>
  </div>
</template>

<script setup>
import {reactive, toRefs, computed } from "vue"
const boxChilds = reactive([])
      function getRandomColor() {
        const r = Math.floor(Math.random() * 100) + 100
        const g = Math.floor(Math.random() * 100) + 100
        const b = Math.floor(Math.random() * 100) + 100
        return `rgb(${r}, ${g}, ${b})`
      }

      function mouseDown(e) {
        const childSize = 20;
        const childStyle = {
          width           : childSize + 'px',
          height          : computed(() => childStyle.width),
          left            : e.offsetX - (childSize / 2) + 'px',
          top             : e.offsetY - (childSize / 2) + 'px',
          backgroundColor : getRandomColor()
        }
        boxChilds.push(childStyle)
      }

      function doNothing(e) {
        console.log(e)
      }
</script>
<style>
 #box {
    background-color:white;
    width:100%;
    height:100%;
    position          : absolute;
    left              : 20px;
    top               : 20px;
    width             : 80%;
    height            : 80%;
    background-color  : darkgreen;
    overflow: hidden;

  }

  .box-child {

    box-sizing        : border-box;
    position          : absolute;
    background-color  : red;

  }

  .box-child:hover {

    border: 2px solid white;

  }
</style>
