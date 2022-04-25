<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/comp/HelloWorld.vue'
import axios from 'axios';

async function fn() {
  let data1 = await axios.get(import.meta.env.VITE_BASE_URL);
  console.log(data1)
}

fn();

</script>

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
