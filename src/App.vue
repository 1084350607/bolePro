<script setup lang="ts">
import { useStore } from "vuex"

const store = useStore()
const state = store.state

const add = () => store.commit("add")
</script>

<template>
  <div>
    <p>{{ state.count }}</p>
    <button @click="add">add</button>
    <div class="flex flex-row">
      <div class="basis-1/4">01</div>
      <div class="basis-1/4">02</div>
      <div class="basis-1/2">03</div>
    </div>
    <img src="@/assets/img/test.jpg" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
