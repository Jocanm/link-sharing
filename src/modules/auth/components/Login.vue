<script lang="ts" setup>
import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue';
import Input from '@/components/ui/Input.vue';
import Text from '@/components/ui/Text.vue';
import { Lock, Mail } from 'lucide-vue-next';
import ChangePageMsg from './ChangePageMsg.vue';

</script>

<template>
  <Card class="p-0 bg-transparent sm:bg-white sm:p-10 space-y-10">
    <div class="space-y-2">
      <Text class="text-heading-m text-2xl">Login</Text>
      <Text class="text-body-m text-gray">Add your details below to get back into the app</Text>
    </div>
    <div class="space-y-6">
      <Input placeholder="e.g. alex@email.com" :icon="Mail" label="Email address" />
      <Input placeholder="Enter your password" :icon="Lock" label="Password" />
      <Button class="w-full">
        Iniciar sesión
      </Button>
      <ChangePageMsg routeName="Register">
        <template #message>
          Don't have an account?
        </template>
        <template #link>
          Create account
        </template>
      </ChangePageMsg>
    </div>
  </Card>
</template>