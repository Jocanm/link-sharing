import type { LoginCredentials } from "@/models/auth"
import { login } from "@/services/auth/auth.service"
import { ref } from "vue"
import { useToast } from "vue-toastification"

export const useLogin = () => {
  const toast = useToast()
  const isLoading = ref(false)

  const onSubmit = async (data: LoginCredentials) => {
    isLoading.value = true;
    try {
      await login(data)
      toast.success('Login succeed')
    } catch (error) {
      console.error(error)
      toast.error("Login failed")
    } finally {
      isLoading.value = false
    }
  }

  return { onSubmit, isLoading }
}