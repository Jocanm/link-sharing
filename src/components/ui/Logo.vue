<script lang="ts" setup>
import type { ImgHTMLAttributes } from 'vue';

const defaultImgProps: ImgHTMLAttributes = {
  loading: 'lazy',
  decoding: 'async',
};
</script>

<template>
  <section class="flex gap-2.5 items-center">
    <img src="/logo.png" alt="app logo" width="30" height="30" v-bind="defaultImgProps" />
    <img src="/devlinks.png" alt="app text" width="135" height="27" v-bind="defaultImgProps" />
  </section>
</template>
