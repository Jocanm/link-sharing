<script setup lang="ts">
import Text from './Text.vue';

</script>

<template>
  <Text class="text-body-m text-gray" tag="h2" v-bind="$attrs">
    <slot></slot>
  </Text>
</template>