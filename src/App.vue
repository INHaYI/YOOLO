<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
div {
  margin: 0;
  padding: 0;
}
</style>
