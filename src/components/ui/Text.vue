<script lang="ts" setup>

withDefaults(defineProps<{ tag?: string }>(), {
  tag: 'p'
})
</script>

<template>
  <component :is="tag" v-bind="$attrs">
    <slot></slot>
  </component>
</template>