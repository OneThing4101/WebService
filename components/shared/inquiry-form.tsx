"use client";

import { FormEvent, startTransition, useState } from "react";
import { appendInquiry } from "@/lib/demo-store";
import type { InquirySubmission } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface InquiryFormProps {
  title?: string;
  description?: string;
  productId?: string;
  serviceId?: string;
  submitLabel?: string;
}

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  quantity: "1",
  message: "",
};

export function InquiryForm({
  title = "Үнийн санал, захиалгын хүсэлт",
  description = "Мэдээллээ үлдээгээрэй. Манай баг боломжит хугацаанд эргэн холбогдоно.",
  productId,
  serviceId,
  submitLabel = "Илгээх",
}: InquiryFormProps) {
  const [form, setForm] = useState(initialFormState);
  const [notice, setNotice] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setNotice("Нэр, утас, хүсэлтээ бөглөнө үү.");
      return;
    }

    startTransition(() => {
      const payload: InquirySubmission = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        productId,
        serviceId,
        quantity: Number(form.quantity) || 1,
        message: form.message.trim(),
      };

      appendInquiry(payload);
      setForm(initialFormState);
      setNotice("Хүсэлт амжилттай бүртгэгдлээ. Demo орчинд admin хэсгээс харах боломжтой.");
    });
  }

  return (
    <div
      id="inquiry-form"
      className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_24px_60px_rgba(14,34,64,0.08)] sm:p-8"
    >
      <div className="space-y-3">
        <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
        <p className="text-sm leading-7 text-muted">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Нэр"
          />
          <Input
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            placeholder="Утас"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder="Имэйл"
          />
          <Input
            type="number"
            min={1}
            value={form.quantity}
            onChange={(event) => setForm({ ...form, quantity: event.target.value })}
            placeholder="Тоо хэмжээ"
          />
        </div>
        <Textarea
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          placeholder="Таны хүсэлт, техникийн шаардлага"
        />
        {notice ? <p className="text-sm text-primary">{notice}</p> : null}
        <Button type="submit" className="w-full sm:w-auto">
          {submitLabel}
        </Button>
      </form>
    </div>
  );
}
