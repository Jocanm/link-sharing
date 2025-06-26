<script lang="ts" setup>
import { tw } from '@/utils/tw';
import { computed } from 'vue';


type Props = {
  id?: string
  icon?: Function
  label?: string;
  class?: string;
  placeholder?: string;
  modelValue?: string | number;
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const computedClass = computed(() => {
  return tw([
    'border border-borders rounded-lg py-2 text-body-m outline-0 w-full',
    'placeholder:text-body-m placeholder:opacity-50 focus:border focus:border-primary focus:caret-primary',
    props.icon ? 'px-11' : 'px-4'
  ], props.class);
})

</script>

<template>
  <section class="w-full space-y-1">
    <label v-if="label" :for="id" class="text-body-s">{{ label }}</label>
    <div class="relative">
      <div v-if="icon" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <component :is="icon" class="text-gray" width="16" height="16" />
      </div>
      <input :placeholder="placeholder" :class="computedClass" :value="modelValue" @input="handleInput"
        v-bind="$attrs" />
    </div>
  </section>
</template>
