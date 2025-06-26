<script lang="ts" setup>
import { tw } from '@/utils/tw';
import { computed } from 'vue';

interface Props {
  class?: string;
}

const props = defineProps<Props>()

const mergedClass = computed(() => tw(
  'bg-white rounded-lg p-10',
  props.class
))
</script>

<template>
  <div v-bind="$attrs" :class="mergedClass" aria-label="Card">
    <slot></slot>
  </div>
</template>