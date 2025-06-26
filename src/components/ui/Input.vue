<!-- <script lang="ts" setup>
import { Mail } from 'lucide-vue-next';

type Props = {
  id?: string
  label?: string;
}

defineProps<Props>()

</script>

<template>
  <section class="w-full space-y-1">
    <label v-if="label" :for="id" class="text-body-s">{{ label }}</label>
    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Mail class="text-gray" width="16" height="16" />
      </div>
      <input type="text"
        class="border border-borders rounded-lg py-2 px-11 text-body-m outline-0 placeholder:text-body-m placeholder:opacity-50 focus:border focus:border-primary focus:caret-primary"
        id="input-id" placeholder="Enter your email address" />
    </div>
  </section>
</template> -->

<script lang="ts" setup>
import { tw } from '@/utils/tw';
import { computed } from 'vue';


type Props = {
  id?: string
  icon?: Function
  label?: string;
  class?: string;
  placeholder?: string;
}

const props = defineProps<Props>()

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
      <input type="text" id="input-id" :placeholder="placeholder" :class="computedClass" v-bind="$attrs" />
    </div>
  </section>
</template>
