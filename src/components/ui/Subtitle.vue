<script setup lang="ts">
import Text from './Text.vue';

</script>

<template>
  <Text class="text-body-m text-gray" component="h2" v-bind="$attrs">
    <slot></slot>
  </Text>
</template>