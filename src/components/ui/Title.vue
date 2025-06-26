<script setup lang="ts">
import Text from './Text.vue';

</script>

<template>
  <Text class="text-heading-m text-2xl" component="h1" v-bind="$attrs">
    <slot></slot>
  </Text>
</template>