<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <h1>Login</h1>
    <form class="flex-column justify-content-center w-50">
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" />
      </div>
      <div class="my-3">
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../store"
const store = useStore()
console.log(store.state.auth.name)
</script>

<style scoped></style>
