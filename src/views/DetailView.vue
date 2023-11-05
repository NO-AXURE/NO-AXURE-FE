// 컨텐츠 상세 화면
<template>
    <div class="container">
        <img :src="(`@/assets/${data.no}.jpeg`)"/>
        <p>{{data.title}}</p>
        <div class="detail-info">
            <p>상세정보: {{data.detail}}</p>
            <p>출연진: {{data.actor}}</p>
        </div>
    </div>
</template>

<script setup>
import {reactive, toRefs} from "vue"
const state = reactive({
    data : 
        {
        "no":1,
        "title":"화란",
        "src":"@/assets/1.jpeg",
        "detail":"상세정보",
        "actor":"",
        },
})

const { data } = toRefs(state);
</script>
<style>
p{
    color:white;
}
.detail-info {
    display :flex;
}
</style>
