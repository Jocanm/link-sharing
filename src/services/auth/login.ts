import { pb } from "../../lib/pocketbase"
import { getCollection } from "../../utils/getCollection";

export const login = async (email: string, password: string) => {
  return await pb.collection(getCollection('users')).authWithPassword(email, password);
}