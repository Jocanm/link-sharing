<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue';
import Input from '@/components/ui/Input.vue';
import Title from '@/components/ui/Title.vue';
import type { RegisterCredentials } from '@/models/auth';
import { LockKeyhole, Mail } from 'lucide-vue-next';
import { reactive } from 'vue';
import { useRegister } from '../composables/useRegister';
import ChangePageMsg from './ChangePageMsg.vue';
import Subtitle from '@/components/ui/Subtitle.vue';

const formData = reactive<RegisterCredentials>({
  email: '',
  password: '',
  passwordConfirm: '',
})

const { onSubmit, isLoading } = useRegister()

const handleSubmit = () => {
  onSubmit(formData)
}

</script>

<template>
  <Card class="p-0 bg-transparent md:bg-white md:p-10 space-y-10">
    <div class="space-y-2">
      <Title>Login</Title>
      <Subtitle>Add your details below to get back into the app</Subtitle>
    </div>
    <form class="space-y-6" @submit.prevent="handleSubmit">
      <Input placeholder="e.g. alex@email.com" :icon="Mail" label="Email address" v-model="formData.email" />
      <Input type="password" placeholder="Al least 8 characters" :icon="LockKeyhole" label="Create password"
        v-model="formData.password" />
      <Input type="password" placeholder="Al least 8 characters" :icon="LockKeyhole" label="Confirm password"
        v-model="formData.passwordConfirm" />
      <Button class="w-full" type="submit" :disabled="isLoading">
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
    </form>
  </Card>
</template>