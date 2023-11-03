<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" :style="$attrs.style">
          <div class="modal-header">
            <slot name="header">회원정보 수정</slot>
          </div>

          <div class="modal-body">
            <div class="card-body">
              <div class="form-group">
                <label class="form-label">User Name</label>
                <input type="text" class="form-control" v-model="user.name"/>
              </div>
              <div class="form-group">
                <label class="col-form-label">User Password</label>
                <input type="text" class="form-control" v-model="user.password"/>
              </div>
              <div class="form-group">
                <label class="col-form-label">User Email</label>
                <input type="text" class="form-control" v-model="user.email"/>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-info btn-sm" @click="handleEdit()">수정</button>
              <button class="modal-default-button" @click="store.state.JoinPopState = false">취소</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">

</script>

<script setup>
import { useStore } from "vuex";
import {reactive} from 'vue';
import apiAuth from "@/apis/auth";
const store = useStore();
const user = reactive({
    id:"user",
    name:"사용자",
    password:"12345",
    email:"user1@osstem.com"
})

async function handleEdit(){
    const result = await apiAuth.join(user);
    console.log(result);
    store.state.JoinPopState = false
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 800px;
  height: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>