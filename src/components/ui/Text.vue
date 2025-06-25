<script lang="ts" setup>

defineProps()
</script>

<template>
  <p v-bind="$attrs">
    <slot></slot>
  </p>
</template>

<style lang="" scoped></style>