<script lang="ts" setup>
import { computed, useAttrs } from 'vue';
import Text from './Text.vue';
import { cn } from '@/utils/cn';


export type TabProps = {
  icon?: Function
  label?: string
  active?: boolean
}

const props = defineProps<TabProps>();

const attrs = useAttrs()

const computedClass = computed(() => {
  return cn(attrs.class as string, "rounded-lg py-3 px-7 text-gray flex items-center hover:text-primary", {
    "text-primary bg-light-primary": props.active,
  })
})

</script>

<template>
  <button aria-label="Tab" :class="computedClass" v-bind="$attrs">
    <div v-if="icon">
      <component :is="icon" class="w-5 h-5" />
    </div>
    <Text v-if="$slots.default">
      <slot>
        {{ label }}
      </slot>
    </Text>
  </button>
</template>