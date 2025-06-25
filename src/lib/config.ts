import * as yup from 'yup';


export const envSchema = yup.object({
  VITE_POCKETBASE_URL: yup.string().url().required(),
});

export const config = envSchema.validateSync(import.meta.env, {
  abortEarly: false,
  stripUnknown: true,
});