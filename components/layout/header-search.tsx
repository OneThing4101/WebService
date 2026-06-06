"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";

export function HeaderSearch() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(() => {
      const query = search.trim();
      router.push(query ? `/products?q=${encodeURIComponent(query)}` : "/products");
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="hidden items-center gap-2 rounded-full border border-border bg-white p-1.5 shadow-[0_14px_30px_rgba(14,34,64,0.08)] lg:flex"
    >
      <Search className="ml-2 h-4 w-4 text-muted" />
      <Input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Бараа хайх..."
        className="h-9 border-none px-0 shadow-none focus:border-none"
      />
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-primary-strong disabled:opacity-70"
      >
        Хайх
      </button>
    </form>
  );
}
