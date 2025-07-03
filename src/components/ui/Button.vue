<script lang="ts" setup>
import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'cva';
import { computed } from 'vue';

type ButtonVariants = VariantProps<typeof buttonVariants>;
export type ButtonProps = {
  class?: string;
  variant?: ButtonVariants['variant'];
};

const props = defineProps<ButtonProps>();

const buttonVariants = cva("py-3 px-7 button-primary rounded-lg text-heading-s", {
  variants: {
    variant: {
      primary: "bg-primary active:bg-primary-hover hover:bg-primary-hover text-white disabled:opacity-25",
      secondary: "border border-primary text-primary active:bg-light-primary hover:bg-light-primary disabled:opacity-25",
    }
  },
  defaultVariants: {
    variant: "primary",
  },
})

const computedClass = computed(() => {
  return cn(buttonVariants({ variant: props.variant }), props.class);
});

</script>

<template>
  <button v-bind="$attrs" :class="computedClass" type="button">
    <slot></slot>
  </button>
</template>