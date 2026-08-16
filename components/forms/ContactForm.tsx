"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import FormSuccess from "@/components/forms/FormSuccess";

const fieldClass =
  "w-full rounded-sm border border-navy/20 bg-white px-4 py-3 text-[15px] text-navy outline-none focus:border-green";
const labelClass = "mb-1.5 block text-sm font-medium text-navy";
const errorClass = "mt-1.5 text-xs text-red-600";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  async function onSubmit(values: ContactFormValues) {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong sending your message. Please try WhatsApp or call us directly.");
    }
  }

  if (submitted) {
    return (
      <FormSuccess
        onReset={() => {
          reset();
          setSubmitted(false);
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" data-cta="contact-form">
      <div>
        <label className={labelClass} htmlFor="c-fullName">
          Full Name
        </label>
        <input id="c-fullName" className={fieldClass} {...register("fullName")} />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>
      <div>
        <label className={labelClass} htmlFor="c-phone">
          Phone Number
        </label>
        <input id="c-phone" type="tel" className={fieldClass} {...register("phone")} />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>
      <div>
        <label className={labelClass} htmlFor="c-email">
          Email <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="c-email" type="email" className={fieldClass} {...register("email")} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>
      <div>
        <label className={labelClass} htmlFor="c-message">
          Message
        </label>
        <textarea id="c-message" rows={5} className={fieldClass} {...register("message")} />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {serverError && <p className={errorClass}>{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        data-cta="contact-form-submit"
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-green px-6 py-4 text-[15px] font-semibold text-navy transition-colors hover:bg-green-dark disabled:opacity-60 focus-ring sm:w-auto"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        Send Message
      </button>
    </form>
  );
}
