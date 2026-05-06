import { Star, ShieldCheck, Microscope, Heart, FlaskConical, Award } from "lucide-react";

const items = [
  { icon: Star, text: "+3.500 pets tratados" },
  { icon: Award, text: "12 anos de experiência" },
  { icon: ShieldCheck, text: "CRMV-SP certificado" },
  { icon: Microscope, text: "Exames no local" },
  { icon: Heart, text: "Atendimento humanizado" },
  { icon: FlaskConical, text: "Diagnóstico em 24h" },
];

export function Marquee() {
  return (
    <section className="border-y border-brand-primary/5 bg-brand-primary py-5 text-white">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-12 pr-12">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3 text-sm font-medium uppercase tracking-wider">
              <item.icon className="size-4 text-brand-accent" />
              <span>{item.text}</span>
              <span className="text-brand-accent">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
