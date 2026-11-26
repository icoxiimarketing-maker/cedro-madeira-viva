import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/cedro-logo.png.asset.json";
import hero from "@/assets/hero-kitchen.jpg";
import closet from "@/assets/closet.jpg";
import living from "@/assets/living.jpg";
import workshop from "@/assets/workshop.jpg";

// WhatsApp da Cedro
const WHATS = "https://wa.me/5541998359963?text=" + encodeURIComponent("Olá! Gostaria de solicitar um orçamento de móveis sob medida.");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cedro Móveis Sob Medida | Marcenaria de Alto Padrão" },
      { name: "description", content: "Cozinhas, closets, dormitórios e painéis sob medida com fabricação própria. Solicite seu orçamento pelo WhatsApp." },
      { property: "og:title", content: "Cedro Móveis Sob Medida | Marcenaria de Alto Padrão" },
      { property: "og:description", content: "Móveis planejados com fabricação própria e acabamento premium. Orçamento pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ children = "Solicitar orçamento" }: { children?: string }) {
  return (
    <a href={WHATS} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-sm bg-whatsapp px-7 py-4 text-sm font-medium uppercase tracking-widest text-background transition hover:brightness-110">
      {children}
    </a>
  );
}

const services = ["Cozinhas planejadas", "Closets", "Dormitórios", "Banheiros", "Painéis ripados", "Home office", "Móveis corporativos", "Lojas comerciais"];
const steps = [["Atendimento", "Entendemos sua necessidade e espaço."], ["Projeto", "Desenho sob medida com materiais e acabamentos."], ["Aprovação", "Você valida cada detalhe antes da produção."], ["Fabricação", "Produção própria com controle de qualidade."], ["Instalação", "Montagem profissional e cuidadosa."], ["Entrega", "Ambiente pronto, no prazo combinado."]];
const reviews = [["O projeto ficou exatamente como imaginávamos. Acabamento impecável.", "Mariana A."], ["Tudo muito organizado do atendimento à instalação.", "Rafael M."], ["Qualidade excelente e entrega dentro do prazo.", "Juliana S."]];
const faq = [["Quanto tempo leva um projeto?", "Depende da complexidade. Após a medição, passamos um cronograma realista do projeto à instalação."], ["Vocês trabalham com arquitetos?", "Sim. Executamos projetos próprios e em parceria com arquitetos e designers."], ["Os móveis têm garantia?", "Sim, oferecemos garantia sobre fabricação e instalação, detalhada na proposta."], ["Como solicito orçamento?", "Fale conosco pelo WhatsApp. Agendamos a medição e enviamos sua proposta."]];

function Index() {
  return (
    <main>
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-12">
        <img src={logo.url} alt="Cedro Móveis Sob Medida" className="h-16 w-16 rounded-sm object-cover" />
        <a href={WHATS} target="_blank" rel="noopener" className="rounded-sm border border-primary px-5 py-2 text-xs uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground">WhatsApp</a>
      </header>

      <section className="relative flex min-h-[92vh] items-center">
        <img src={hero} alt="Cozinha planejada em madeira" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative z-10 max-w-2xl px-6 md:px-12">
          <p className="eyebrow">Marcenaria sob medida</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">Móveis planejados para ambientes exclusivos.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Projeto personalizado, fabricação própria e acabamento de alto padrão — do desenho à instalação.</p>
          <div className="mt-10"><Cta>Solicitar orçamento grátis</Cta></div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li>✓ Fabricação própria</li><li>✓ Projeto personalizado</li><li>✓ Garantia</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={workshop} alt="Marceneiro finalizando móvel" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-sm object-cover" />
        <div>
          <p className="eyebrow">Quem somos</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Marcenaria feita com precisão.</h2>
          <p className="mt-6 text-muted-foreground">A Cedro desenvolve móveis sob medida que unem estética, funcionalidade e acabamento impecável. Acompanhamos cada projeto do planejamento à instalação, com materiais selecionados e atenção a cada detalhe.</p>
          <div className="mt-8"><Cta /></div>
        </div>
      </section>

      <section className="bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-center">Serviços</p>
          <h2 className="mt-4 text-center font-display text-4xl md:text-5xl">O que fazemos</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[[closet, "Closets"], [living, "Salas e painéis"]].map(([img, t]) => (
              <div key={t} className="relative overflow-hidden rounded-sm">
                <img src={img} alt={t} loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105" />
                <span className="absolute bottom-4 left-4 font-display text-3xl">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {services.map((s) => <div key={s} className="bg-card p-6 text-center font-display text-xl">{s}</div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow text-center">Como funciona</p>
        <h2 className="mt-4 text-center font-display text-4xl md:text-5xl">Do projeto à entrega</h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <li key={t} className="border-t border-border pt-6">
              <span className="font-display text-4xl text-primary">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-medium">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-card px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {reviews.map(([q, n]) => (
            <figure key={n} className="border border-border p-8">
              <p className="text-primary">★★★★★</p>
              <blockquote className="mt-4 font-display text-xl italic">“{q}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">{n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center font-display text-4xl md:text-5xl">Perguntas frequentes</h2>
        <div className="mt-10 divide-y divide-border">
          {faq.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-medium">{q}</summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl md:text-6xl">Vamos criar o seu próximo ambiente.</h2>
        <p className="mt-4 text-muted-foreground">Orçamento sem compromisso pelo WhatsApp.</p>
        <div className="mt-10"><Cta>Falar no WhatsApp</Cta></div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Cedro Móveis Sob Medida</footer>

      <a href={WHATS} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-background shadow-lg">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.1.1.6-.1 1.2Z"/></svg>
      </a>
    </main>
  );
}
