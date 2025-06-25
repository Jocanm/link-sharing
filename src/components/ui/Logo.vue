<script lang="ts" setup>
import type { ImgHTMLAttributes } from 'vue';

const defaultImgProps: ImgHTMLAttributes = {
  loading: 'lazy',
  decoding: 'async',
};
</script>

<template>
  <section class="flex gap-1.5 items-center justify-center">
    <img src="/logo.png" alt="app logo" width="40" height="40" v-bind="defaultImgProps" />
    <img src="/devlinks.png" alt="app text" width="135" height="27" v-bind="defaultImgProps" />
  </section>
</template>
