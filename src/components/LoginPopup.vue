<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" :style="$attrs.style">
          <div class="modal-header">
            <slot name="header">로그인</slot>
          </div>

          <div class="modal-body">
            <div class="card-body">
            <!-- <div v-if="store.state.userId === ''"> -->
                <div class="form-group">
                    <label class="form-label">User ID</label>
                    <input type="text" class="form-control" id="userId" v-model="user.id" />
                </div>
                <div class="form-group">
                    <label for="userPassword" class="col-form-label">User Password</label>
                    <input type="text" class="form-control" v-model="user.password" />
                </div>
            <!-- </div> -->
            <!-- <div v-if="store.state.userId !== ''">
                <button class="btn btn-info btn-sm mr-2" v-on:click="handleLogout">로그아웃</button>
            </div> -->
        </div>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-info btn-sm" @click="handleLogin()">로그인</button>
              <button class="modal-default-button" @click="store.state.LoginPopState=false">취소</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
</script>

<script setup>
import { useStore } from "vuex";
import { reactive } from "vue";
import apiAuth from "@/apis/auth";
const store = useStore();
const user = reactive({
    id:"user"
})
async function handleLogin(){
    const result = await apiAuth.login(user);
    console.log(result);
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