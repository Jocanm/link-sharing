<script lang="ts" setup>
import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue';
import Input from '@/components/ui/Input.vue';
import Text from '@/components/ui/Text.vue';
import { LockKeyhole, Mail } from 'lucide-vue-next';
import { ref } from 'vue';
import { useLogin } from '../composables/useLogin';
import ChangePageMsg from './ChangePageMsg.vue';

const email = ref('');
const password = ref('');

const { onSubmit, isLoading } = useLogin()

</script>

<template>
  <Card class="p-0 bg-transparent sm:bg-white sm:p-10 space-y-10">
    <div class="space-y-2">
      <Text class="text-heading-m text-2xl">Login</Text>
      <Text class="text-body-m text-gray">Add your details below to get back into the app</Text>
    </div>
    <form class="space-y-6" @submit.prevent="onSubmit({ email, password })">
      <Input placeholder="e.g. alex@email.com" :icon="Mail" label="Email address" v-model="email" />
      <Input type="password" placeholder="Enter your password" :icon="LockKeyhole" label="Password"
        v-model="password" />
      <Button class="w-full" type="submit" :disabled="isLoading">
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
    </form>
  </Card>
</template>