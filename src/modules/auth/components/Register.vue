<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue';
import Input from '@/components/ui/Input.vue';
import { LockKeyhole, Mail } from 'lucide-vue-next';
import ChangePageMsg from './ChangePageMsg.vue';
import Text from '@/components/ui/Text.vue';

</script>

<template>
  <Card class="p-0 bg-transparent md:bg-white md:p-10 space-y-10">
    <div class="space-y-2">
      <Text class="text-heading-m text-2xl">Login</Text>
      <Text class="text-body-m text-gray">Add your details below to get back into the app</Text>
    </div>
    <div class="space-y-6">
      <Input placeholder="e.g. alex@email.com" :icon="Mail" label="Email address" />
      <Input placeholder="Al least 8 characters" :icon="LockKeyhole" label="Create password" />
      <Input placeholder="Al least 8 characters" :icon="LockKeyhole" label="Confirm password" />
      <Button class="w-full">
        Iniciar sesión
      </Button>
      <ChangePageMsg routeName="Login">
        <template #message>
          Already have an account?
        </template>
        <template #link>
          Login
        </template>
      </ChangePageMsg>
    </div>
  </Card>
</template>