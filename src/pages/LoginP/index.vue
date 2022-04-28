<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <h1>Login {{ store.state.auth.name }}</h1>
    <form @submit="handleSubmit" class="flex-column justify-content-center w-50">
      <div class="form-group">
        <label>Email</label>
        <input v-model="user.email" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>password</label>
        <input v-model="user.psw" type="password" class="form-control" />
      </div>
      <div class="my-3">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { useStore } from "../../store"
const store = useStore()

const user = reactive({
  email: "",
  psw: "",
})

const handleSubmit = () => {}
</script>

<style scoped></style>
