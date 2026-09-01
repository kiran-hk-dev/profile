"use client";

import { profile } from "@/data/profile";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    const mailtoUrl = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    window.location.assign(mailtoUrl);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-(--color-text-muted)">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Please add your name" })}
          className="w-full rounded-lg border border-(--color-border-strong) bg-(--color-bg-elevated) px-4 py-2.5 text-sm text-(--color-text) outline-none transition-colors focus:border-(--color-accent)"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-(--color-rose)">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-(--color-text-muted)">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Please add your email",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
          })}
          className="w-full rounded-lg border border-(--color-border-strong) bg-(--color-bg-elevated) px-4 py-2.5 text-sm text-(--color-text) outline-none transition-colors focus:border-(--color-accent)"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-(--color-rose)">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-(--color-text-muted)">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", { required: "Add a short message" })}
          className="w-full resize-none rounded-lg border border-(--color-border-strong) bg-(--color-bg-elevated) px-4 py-2.5 text-sm text-(--color-text) outline-none transition-colors focus:border-(--color-accent)"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-(--color-rose)">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-fit items-center gap-2 rounded-lg bg-(--color-accent) px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
      >
        Send message
        <Send size={14} />
      </button>

      {isSubmitSuccessful && (
        <p className="text-xs text-(--color-cyan)">
          Your email client should have opened with this message pre-filled.
        </p>
      )}
    </form>
  );
}
