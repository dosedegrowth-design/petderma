"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data = {
    nome: String(formData.get("nome") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    telefone: String(formData.get("telefone") || "").trim(),
    unidade: String(formData.get("unidade") || "").trim(),
    pet: String(formData.get("pet") || "").trim(),
    mensagem: String(formData.get("mensagem") || "").trim(),
  };

  const errors: Record<string, string> = {};
  if (!data.nome || data.nome.length < 2) errors.nome = "Informe seu nome.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "E-mail inválido.";
  if (!data.telefone || data.telefone.replace(/\D/g, "").length < 10)
    errors.telefone = "Telefone inválido.";
  if (!data.mensagem || data.mensagem.length < 5) errors.mensagem = "Conte um pouco mais.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Verifique os campos.", errors };
  }

  // Send via Web3Forms (free tier, just need to set NEXT_PUBLIC_WEB3FORMS_KEY in env)
  const accessKey = process.env.WEB3FORMS_KEY;

  if (accessKey) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[PetDerma] Contato de ${data.nome}`,
          from_name: "PetDerma — site",
          replyto: data.email,
          ...data,
        }),
      });
      if (!res.ok) throw new Error("Web3Forms response not ok");
    } catch (err) {
      console.error("[contato] erro envio:", err);
      // Falha silenciosa — em produção seria bom logar
    }
  } else {
    // Modo desenvolvimento — apenas registra
    console.log("[contato] formulário recebido:", data);
  }

  return {
    status: "success",
    message:
      "Recebemos sua mensagem! Entraremos em contato em até 24h em horário comercial.",
  };
}
