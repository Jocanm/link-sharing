<script setup lang="ts">
import Text from '@/components/ui/Text.vue';


defineProps<{
  routeName?: string;
}>();
</script>

<template>
  <Text class="text-body-m text-gray text-center flex flex-col sm:flex-row sm:gap-1 sm:justify-center">
    <slot name="message"></slot>

    <RouterLink :to="{ name: routeName }" class="text-primary">
      <slot name="link"></slot>
    </RouterLink>
  </Text>
</template>