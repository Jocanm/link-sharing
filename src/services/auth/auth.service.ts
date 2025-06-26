import type { LoginCredentials, RegisterCredentials } from "@/models/auth";
import { pb } from "../../lib/pocketbase";
import { getCollection } from "../../utils/getCollection";

export const login = async ({ email, password }: LoginCredentials) => {
  return await pb.collection(getCollection('users')).authWithPassword(email, password);
}

export const register = async ({ email, password, confirmPassword }: RegisterCredentials) => {
  return await pb.collection(getCollection('users')).create({
    email,
    password,
    confirmPassword
  });
}