"use client";

import { FormEvent, useId, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface InquiryFormProps {
  title?: string;
  description?: string;
  productId?: string;
  serviceId?: string;
  submitLabel?: string;
  variant?: "default" | "compact";
  messagePlaceholder?: string;
}

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function InquiryForm({
  title = "Үнийн санал, захиалгын хүсэлт",
  description = "Нэр, утас, хүсэлтээ үлдээгээрэй. Манай баг боломжит хугацаанд эргэн холбогдоно.",
  productId,
  serviceId,
  submitLabel = "Илгээх",
  variant = "default",
  messagePlaceholder = "Таны хүсэлт, техникийн шаардлага",
}: InquiryFormProps) {
  const [form, setForm] = useState(initialFormState);
  const [notice, setNotice] = useState<string | null>(null);
  const [noticeType, setNoticeType] = useState<"success" | "error">("success");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setNoticeType("error");
      setNotice("Нэр, утас, хүсэлтээ бөглөнө үү.");
      return;
    }

    startTransition(async () => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          interest: serviceId ? `service:${serviceId}` : undefined,
          productId,
        }),
      });
      const payload = (await response.json()) as {
        ok: boolean;
        message?: string;
        devWarning?: string | null;
      };

      if (!response.ok || !payload.ok) {
        setNoticeType("error");
        setNotice(payload.message ?? "Хүсэлт илгээх үед алдаа гарлаа.");
        return;
      }

      if (payload.devWarning) {
        console.warn(payload.devWarning);
      }

      setNoticeType("success");
      setNotice("Таны хүсэлт амжилттай илгээгдлээ. Бид удахгүй холбогдох болно.");
      setForm(initialFormState);
    });
  }

  function updateForm(field: keyof typeof initialFormState, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  const isCompact = variant === "compact";
  const formId = useId();
  const compactInputClass =
    "h-[52px] rounded-2xl border-slate-200 shadow-none focus:border-primary focus:ring-4 focus:ring-sky-100";
  const compactLabelClass = "text-sm font-semibold text-ink";

  return (
    <div
      id="inquiry-form"
      className={cn(
        "rounded-[2rem] border border-border bg-white p-6 shadow-[0_24px_60px_rgba(14,34,64,0.08)] sm:p-8",
        isCompact &&
          "rounded-[28px] border-slate-200 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8",
      )}
    >
      {isCompact ? (
        <div className="mb-6 h-1 w-16 rounded-full bg-[linear-gradient(90deg,#0f5cc0_0%,#f28c28_100%)]" />
      ) : null}

      <div className={cn("space-y-3", isCompact && "space-y-2")}>
        <h3
          className={cn(
            "font-display text-2xl font-bold text-ink",
            isCompact && "text-2xl",
          )}
        >
          {title}
        </h3>
        <p className={cn("text-sm leading-7 text-muted", isCompact && "max-w-xl leading-6")}>
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className={cn("mt-6 space-y-4", isCompact && "mt-7 space-y-4")}>
        <div className={cn("grid gap-4 sm:grid-cols-2")}>
          <div className={cn(isCompact && "space-y-2")}>
            {isCompact ? (
              <label htmlFor={`${formId}-name`} className={compactLabelClass}>
                Нэр
              </label>
            ) : null}
            <Input
              id={`${formId}-name`}
              value={form.name}
              onChange={(event) => updateForm("name", event.target.value)}
              placeholder={isCompact ? "Таны нэр" : "Нэр"}
              className={isCompact ? compactInputClass : undefined}
            />
          </div>
          <div className={cn(isCompact && "space-y-2")}>
            {isCompact ? (
              <label htmlFor={`${formId}-phone`} className={compactLabelClass}>
                Утас
              </label>
            ) : null}
            <Input
              id={`${formId}-phone`}
              value={form.phone}
              onChange={(event) => updateForm("phone", event.target.value)}
              placeholder={isCompact ? "+976" : "Утас"}
              className={isCompact ? compactInputClass : undefined}
            />
          </div>
        </div>
        <div className={cn(isCompact && "space-y-2")}>
          {isCompact ? (
            <label htmlFor={`${formId}-email`} className={compactLabelClass}>
              Имэйл
            </label>
          ) : null}
          <Input
            id={`${formId}-email`}
            type="email"
            value={form.email}
            onChange={(event) => updateForm("email", event.target.value)}
            placeholder={isCompact ? "name@company.mn" : "Имэйл"}
            className={isCompact ? compactInputClass : undefined}
          />
        </div>
        <div className={cn(isCompact && "space-y-2")}>
          {isCompact ? (
            <label htmlFor={`${formId}-message`} className={compactLabelClass}>
              Хүсэлт / part number / шаардлага
            </label>
          ) : null}
          <Textarea
            id={`${formId}-message`}
            value={form.message}
            onChange={(event) => updateForm("message", event.target.value)}
            placeholder={messagePlaceholder}
            className={
              isCompact
                ? "min-h-[150px] rounded-2xl border-slate-200 shadow-none focus:border-primary focus:ring-4 focus:ring-sky-100"
                : undefined
            }
          />
        </div>
        {notice ? (
          <p
            className={
              noticeType === "success"
                ? "text-sm font-medium text-primary"
                : "text-sm font-medium text-red-600"
            }
          >
            {notice}
          </p>
        ) : null}
        <Button
          type="submit"
          disabled={isPending}
          className={cn(
            "w-full sm:w-auto",
            isCompact &&
              "h-[52px] rounded-full bg-ink px-7 text-sm text-white shadow-none hover:bg-primary-strong",
          )}
        >
          {isPending ? "Илгээж байна..." : submitLabel}
        </Button>
      </form>
    </div>
  );
}
