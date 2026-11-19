"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: send `email` to your API / newsletter service here
    setStatus("success");
    setEmail("");
  };

  return (
    <div className="w-full max-w-[393px]">
      <form
        onSubmit={handleSubmit}
        className="flex items-center rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-md"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("idle");
          }}
          placeholder="Enter your email"
          aria-label="Email address"
          className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-[#6b8f63] px-5 py-2.5 text-sm text-white transition hover:bg-[#5c7c55]"
        >
          Subscribe
        </button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-center text-sm text-white/90" role="status">
          Thanks for subscribing!
        </p>
      )}
    </div>
  );
}