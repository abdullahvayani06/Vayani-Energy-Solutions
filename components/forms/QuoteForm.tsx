"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import {
  quoteFormSchema,
  systemSizeOptions,
  propertyOptions,
  backupOptions,
  type QuoteFormValues,
} from "@/lib/schemas";
import FormSuccess from "@/components/forms/FormSuccess";

const fieldClass =
  "w-full rounded-sm border border-navy/20 bg-white px-4 py-3 text-[15px] text-navy outline-none focus:border-green";
const labelClass = "mb-1.5 block text-sm font-medium text-navy";
const errorClass = "mt-1.5 text-xs text-red-600";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      systemSize: "Not Sure",
      property: "Home",
      backup: "Not Sure",
    },
  });

  async function onSubmit(values: QuoteFormValues) {
    setServerError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong sending your request. Please try WhatsApp or call us directly.");
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" data-cta="quote-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fullName">
            Full Name
          </label>
          <input id="fullName" className={fieldClass} {...register("fullName")} />
          {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="area">
            Area / Location
          </label>
          <input id="area" className={fieldClass} placeholder="e.g. DHA Phase 6" {...register("area")} />
          {errors.area && <p className={errorClass}>{errors.area.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number
          </label>
          <input id="phone" type="tel" className={fieldClass} {...register("phone")} />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="whatsapp">
            WhatsApp Number
          </label>
          <input id="whatsapp" type="tel" className={fieldClass} {...register("whatsapp")} />
          {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="monthlyBill">
            Monthly Electricity Bill (PKR)
          </label>
          <input
            id="monthlyBill"
            inputMode="numeric"
            placeholder="e.g. 35000"
            className={fieldClass}
            {...register("monthlyBill")}
          />
          {errors.monthlyBill && <p className={errorClass}>{errors.monthlyBill.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="systemSize">
            Required System Size
          </label>
          <select id="systemSize" className={fieldClass} {...register("systemSize")}>
            {systemSizeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="property">
            Property
          </label>
          <select id="property" className={fieldClass} {...register("property")}>
            {propertyOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="backup">
            Backup Requirement
          </label>
          <select id="backup" className={fieldClass} {...register("backup")}>
            {backupOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea id="message" rows={4} className={fieldClass} {...register("message")} />
      </div>

      {serverError && <p className={errorClass}>{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        data-cta="quote-form-submit"
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-green px-6 py-4 text-[15px] font-semibold text-navy transition-colors hover:bg-green-dark disabled:opacity-60 focus-ring sm:w-auto"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        Request My Free Estimate
      </button>
    </form>
  );
}
