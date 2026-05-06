"use client";

import { useActionState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/contato/actions";
import { UNIDADES } from "@/lib/constants";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-[1.75rem] bg-gradient-to-br from-brand-mint to-white p-10 text-center ring-1 ring-brand-accent/20">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent text-brand-primary">
          <CheckCircle2 className="size-8" strokeWidth={2} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-brand-primary">
          Mensagem enviada!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-brand-secondary">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Nome"
          name="nome"
          placeholder="Como você se chama"
          required
          error={state.errors?.nome}
        />
        <Field
          label="E-mail"
          name="email"
          type="email"
          placeholder="seu@email.com"
          required
          error={state.errors?.email}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Telefone / WhatsApp"
          name="telefone"
          type="tel"
          placeholder="(11) 99999-9999"
          required
          error={state.errors?.telefone}
        />
        <SelectField
          label="Unidade preferida"
          name="unidade"
          options={[
            { value: "", label: "Sem preferência" },
            ...UNIDADES.map((u) => ({ value: u.slug, label: `${u.nome} — ${u.cidade}` })),
          ]}
        />
      </div>

      <SelectField
        label="Tipo de pet"
        name="pet"
        options={[
          { value: "", label: "Selecione" },
          { value: "cao", label: "Cão" },
          { value: "gato", label: "Gato" },
          { value: "outro", label: "Outro" },
        ]}
      />

      <TextareaField
        label="Mensagem"
        name="mensagem"
        placeholder="Conte um pouco sobre o seu pet e o que precisa..."
        required
        error={state.errors?.mensagem}
      />

      {state.status === "error" && state.message && (
        <div className="flex items-start gap-3 rounded-2xl border border-brand-coral/30 bg-brand-cream p-4 text-sm text-brand-primary">
          <AlertCircle className="size-5 shrink-0 text-brand-coral" />
          <span>{state.message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-pill bg-brand-primary text-base font-semibold text-white transition-all hover:bg-brand-primary/90 hover:shadow-[0_8px_32px_-8px_rgb(24_10_50/0.4)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="size-5 transition-transform group-hover:translate-x-0.5" />
            Enviar mensagem
          </>
        )}
      </button>

      <p className="text-center text-xs text-brand-secondary">
        Resposta em até 24h em horário comercial. Para urgências, use o WhatsApp.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-primary">
        {label}
        {required && <span className="ml-0.5 text-brand-accent">*</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`block w-full rounded-2xl border-2 ${
          error ? "border-brand-coral" : "border-brand-primary/10"
        } bg-white px-5 py-3.5 text-base text-brand-primary placeholder:text-brand-secondary/50 transition-all focus:border-brand-accent focus:outline-none focus:ring-4 focus:ring-brand-accent/20`}
      />
      {error && (
        <span className="mt-1 block text-xs font-medium text-brand-coral">{error}</span>
      )}
    </label>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-primary">
        {label}
        {required && <span className="ml-0.5 text-brand-accent">*</span>}
      </span>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        className={`block w-full resize-none rounded-2xl border-2 ${
          error ? "border-brand-coral" : "border-brand-primary/10"
        } bg-white px-5 py-3.5 text-base text-brand-primary placeholder:text-brand-secondary/50 transition-all focus:border-brand-accent focus:outline-none focus:ring-4 focus:ring-brand-accent/20`}
      />
      {error && (
        <span className="mt-1 block text-xs font-medium text-brand-coral">{error}</span>
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-primary">
        {label}
      </span>
      <select
        name={name}
        className="block w-full appearance-none rounded-2xl border-2 border-brand-primary/10 bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23180A32%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[right_1rem_center] bg-[length:18px_18px] bg-no-repeat px-5 py-3.5 pr-12 text-base text-brand-primary transition-all focus:border-brand-accent focus:outline-none focus:ring-4 focus:ring-brand-accent/20"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
