<script setup lang="ts">
import { config } from './lib/config';
</script>

<template>
  <div>hola {{ config.VITE_POCKETBASE_URL }}</div>
</template>

<style scoped>
</style>
