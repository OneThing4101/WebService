"use client";

import { FormEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminLoginForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);

    startTransition(async () => {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const payload = (await response.json()) as {
        ok: boolean;
        message?: string;
        devWarning?: string | null;
      };

      if (!response.ok || !payload.ok) {
        setNotice(payload.message ?? "Нэвтрэх үед алдаа гарлаа.");
        return;
      }

      if (payload.devWarning) {
        console.warn(payload.devWarning);
      }

      router.push("/admin");
      router.refresh();
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="ADMIN_EMAIL"
        autoComplete="username"
      />
      <Input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="ADMIN_PASSWORD"
        autoComplete="current-password"
      />
      {notice ? <p className="text-sm font-medium text-red-600">{notice}</p> : null}
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Нэвтэрч байна..." : "Админ нэвтрэх"}
      </Button>
      <p className="text-xs leading-6 text-muted">
        Production орчинд ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_SESSION_SECRET env
        заавал тохируулна. Нууц үг frontend bundle-д ил гарахгүй.
      </p>
    </form>
  );
}
