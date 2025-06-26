<script lang="ts" setup>
import Logo from '@/components/ui/Logo.vue';
</script>

<template>
  <section class="p-8 flex flex-col sm:items-center bg-light-gray h-full gap-14">
    <div><Logo /></div>
    <RouterView />
  </section>
</template>

<style lang="" scoped></style>