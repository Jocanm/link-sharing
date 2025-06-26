<script lang="ts" setup>

withDefaults(defineProps<{ component?: string }>(), {
  component: 'p'
})
</script>

<template>
  <component :is="component" v-bind="$attrs">
    <slot></slot>
  </component>
</template>