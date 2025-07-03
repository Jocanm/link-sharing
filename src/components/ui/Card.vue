<script lang="ts" setup>
import { cn } from '@/utils/cn';
import { computed } from 'vue';

interface Props {
  class?: string;
}

const props = defineProps<Props>()

const mergedClass = computed(() => cn(
  'bg-white rounded-lg p-10',
  props.class
))
</script>

<template>
  <div v-bind="$attrs" :class="mergedClass" aria-label="Card">
    <slot></slot>
  </div>
</template>