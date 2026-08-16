import { z } from "zod";

export const systemSizeOptions = [
  "Not Sure",
  "3KW",
  "4.2KW",
  "6KW",
  "8KW",
  "10KW",
  "Above 10KW / Commercial",
] as const;

export const propertyOptions = ["Home", "Office", "Shop", "Commercial", "Industrial"] as const;

export const backupOptions = [
  "No Battery Backup",
  "Essential Loads",
  "Extended Backup",
  "Not Sure",
] as const;

export const quoteFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().min(10, "Please enter a valid phone number."),
  whatsapp: z.string().trim().min(10, "Please enter a valid WhatsApp number."),
  area: z.string().trim().min(2, "Please enter your area or location."),
  monthlyBill: z.string().trim().min(1, "Please enter your monthly electricity bill."),
  systemSize: z.enum(systemSizeOptions),
  property: z.enum(propertyOptions),
  backup: z.enum(backupOptions),
  message: z.string().trim().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().min(10, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email.").optional().or(z.literal("")),
  message: z.string().trim().min(5, "Please enter a short message."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
