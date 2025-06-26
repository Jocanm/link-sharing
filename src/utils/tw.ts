import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const tw = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes))
}