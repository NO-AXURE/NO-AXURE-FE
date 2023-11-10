// 컨텐츠 상세 화면
<template >
    <div id="canvus" class="container" @click="plus()">
        <!-- <img :src="(`@/assets/${data.no}.jpeg`)"/>
        <p>{{data.title}}</p>
        <div class="detail-info">
            <p>상세정보: {{data.detail}}</p>
            <p>출연진: {{data.actor}}</p>
        </div> -->
    </div>
</template>

<script setup>
import {reactive, toRefs} from "vue"
const state = reactive({
    data :
        {
        // "no":1,
        // "title":"화란",
        // "src":"@/assets/1.jpeg",
        // "detail":"상세정보",
        // "actor":"",
        }
})

// const plus = () => {
//     let canvus = document.getElementById("canvus");
//     canvus.innerHTML = canvus.innerHTML + "<textarea></textarea>";
//     var target = document.getElementById("canvus");
//     var targetTop = target.getBoundingClientRect().top;
//     var targetBottom = target.getBoundingClientRect().bottom;
//     var targetLeft = target.getBoundingClientRect().left;
//     var targetRight = target.getBoundingClientRect().right;
//     console.log(targetTop,targetBottom,targetLeft,targetRight)
// };

const { data } = toRefs(state);
</script>
<style>
#canvus{
    width:100%;
    height:100%;
    border: 1px solid white
}
p{
    color:white;
}
.detail-info {
    display :flex;
}
</style>
