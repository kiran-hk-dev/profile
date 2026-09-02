"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio contact from ${name || "website visitor"}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div>
        <label htmlFor="name" className="text-xs text-text-faint font-mono-tag">Name</label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border-soft bg-bg-elevated px-4 py-2.5 text-sm text-text focus:outline-none focus:border-accent/50"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-xs text-text-faint font-mono-tag">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border-soft bg-bg-elevated px-4 py-2.5 text-sm text-text focus:outline-none focus:border-accent/50"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs text-text-faint font-mono-tag">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border-soft bg-bg-elevated px-4 py-2.5 text-sm text-text focus:outline-none focus:border-accent/50 resize-none"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg hover:bg-accent/90 transition-colors"
      >
        Send Message
      </button>
      <p className="text-xs text-text-faint">
        Opens your email client with this message pre-filled — no data is stored or sent to a server.
      </p>
    </form>
  );
}
