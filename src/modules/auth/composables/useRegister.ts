import type { RegisterCredentials } from "@/models/auth"
import { register } from "@/services/auth/auth.service"
import { ref } from "vue"
import { useToast } from "vue-toastification"

export const useRegister = () => {
  const toast = useToast()
  const isLoading = ref(false)

  const onSubmit = async (data: RegisterCredentials) => {
    isLoading.value = true;
    try {
      await register(data)
      toast.success('Register succeed')
    } catch (error) {
      console.error(error)
      toast.error('Register failed')
    } finally {
      isLoading.value = false
    }
  }

  return { onSubmit, isLoading }
}