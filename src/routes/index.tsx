import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/cedro-logo-mark.png";
import hero from "@/assets/hero-kitchen.jpg";
import closet from "@/assets/closet.jpg";
import p2 from "@/assets/port-cozinha-cinza.jpg.asset.json";
import p3 from "@/assets/port-dormitorio-ripado.jpg.asset.json";
import p4 from "@/assets/port-quarto-planejado.jpg.asset.json";
import workshop from "@/assets/workshop.jpg";
import banheiro from "@/assets/svc-banheiro.jpg";
import homeOffice from "@/assets/svc-home-office.jpg";
import corporativo from "@/assets/svc-corporativo.jpg";
import loja from "@/assets/svc-loja.jpg";

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

const sections = [
  ["#sobre", "Nossa história"],
  ["#servicos", "Serviços"],
  ["#processo", "Como funciona"],
  ["#depoimentos", "Depoimentos"],
  ["#duvidas", "Dúvidas"],
];

function Cta({ children = "Solicitar orçamento" }: { children?: string }) {
  return (
    <a href={WHATS} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-sm bg-whatsapp px-7 py-4 text-sm font-medium uppercase tracking-widest text-background transition hover:brightness-110">
      {children}
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-md" : "border-b border-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 md:px-8">
        <a href="#inicio" onClick={() => setOpen(false)} className="shrink-0">
          <img src={logo} alt="Cedro Móveis Sob Medida" className="h-14 w-auto object-contain md:h-16" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {sections.map(([href, label]) => (
            <a key={href} href={href} className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={WHATS} target="_blank" rel="noopener" className="hidden rounded-sm border border-primary px-5 py-2 text-xs uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground sm:inline-flex">
            WhatsApp
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground transition hover:border-primary hover:text-primary lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>

      {open && (
        <nav className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-border bg-background lg:hidden">
          {sections.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-border px-6 py-4 text-sm uppercase tracking-[0.2em] text-muted-foreground transition hover:bg-card hover:text-primary">
              {label}
            </a>
          ))}
          <a href={WHATS} target="_blank" rel="noopener" onClick={() => setOpen(false)} className="block px-6 py-4 text-sm uppercase tracking-[0.2em] text-whatsapp">
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </>
  );
}

const services: [string, string, string][] = [
  [p2.url, "Cozinhas planejadas", "O coração da casa, pensado para receber e cozinhar com prazer."],
  [closet, "Closets", "Cada peça no seu lugar, com elegância de boutique."],
  [p3.url, "Dormitórios", "Conforto e organização para o seu descanso."],
  [banheiro, "Banheiros", "Gabinetes resistentes com o charme da madeira."],
  [p4.url, "Painéis ripados", "Textura e aconchego que transformam qualquer parede."],
  [homeOffice, "Home office", "Produtividade com estilo, no conforto de casa."],
  [corporativo, "Móveis corporativos", "Ambientes que transmitem a força da sua marca."],
  [loja, "Lojas comerciais", "Expositores que valorizam o seu produto e encantam clientes."],
];
const steps = [["Atendimento", "Entendemos sua necessidade e espaço."], ["Projeto", "Desenho sob medida com materiais e acabamentos."], ["Aprovação", "Você valida cada detalhe antes da produção."], ["Fabricação", "Produção própria com controle de qualidade."], ["Instalação", "Montagem profissional e cuidadosa."], ["Entrega", "Ambiente pronto, no prazo combinado."]];
const reviews = [["O projeto ficou exatamente como imaginávamos. Acabamento impecável.", "Mariana A."], ["Tudo muito organizado do atendimento à instalação.", "Rafael M."], ["Qualidade excelente e entrega dentro do prazo.", "Juliana S."]];
const faq = [["Quanto tempo leva um projeto?", "Depende da complexidade. Após a medição, passamos um cronograma realista do projeto à instalação."], ["Vocês trabalham com arquitetos?", "Sim. Executamos projetos próprios e em parceria com arquitetos e designers."], ["Os móveis têm garantia?", "Sim, oferecemos garantia sobre fabricação e instalação, detalhada na proposta."], ["Como solicito orçamento?", "Fale conosco pelo WhatsApp. Agendamos a medição e enviamos sua proposta."]];

function Index() {
  return (
    <main id="inicio">
      <Header />

      <section className="relative flex min-h-[92vh] items-center">
        <img src={hero} alt="Cozinha planejada em madeira" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 md:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Marcenaria sob medida</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">Móveis Planejados em Curitiba e região. Feito para quem busca exclusividade!</h1>
            <p className="mt-6 text-lg text-muted-foreground">Projeto personalizado, fabricação própria e acabamento de alto padrão — do desenho à instalação.</p>
            <div className="mt-10"><Cta>Solicitar orçamento grátis</Cta></div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li>✓ 25 anos de mercado</li><li>✓ Orçamento e entrega mais rápidos da região</li><li>✓ Empresa familiar</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-8">
        <img src={workshop} alt="Marceneiro finalizando móvel" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-sm object-cover" />
        <div>
          <p className="eyebrow">Nossa história</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">De pai para filho, a arte de transformar madeira em lar.</h2>
          <p className="mt-6 text-muted-foreground">Somos uma empresa familiar, que prioriza atendimento rápido com acabamentos impecáveis. A Cedro acompanha cada projeto do planejamento à instalação, com materiais selecionados e atenção a cada detalhe.</p>
          <div className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6">
            <div><p className="font-display text-5xl text-primary">25</p><p className="text-sm text-muted-foreground">anos de mercado</p></div>
            <div><p className="font-display text-2xl leading-tight text-primary">Mais rápido da região</p><p className="text-sm text-muted-foreground">no orçamento e na entrega</p></div>
          </div>
          <div className="mt-8"><Cta /></div>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-24 bg-card px-6 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-center">Serviços</p>
          <h2 className="mt-4 text-center font-display text-4xl md:text-5xl">Cada ambiente, uma obra feita para você</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">Da cozinha ao escritório, transformamos madeira em espaços que contam a sua história — com design exclusivo, funcionalidade e o cuidado de quem faz com as próprias mãos.</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([img, t, d]) => (
              <div key={t} className="group relative overflow-hidden rounded-sm">
                <img src={img} alt={t} loading="lazy" className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><Cta>Quero um projeto assim</Cta></div>
        </div>
      </section>


      <section id="processo" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-8">
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

      <section id="depoimentos" className="scroll-mt-24 bg-card px-6 py-24 md:px-8">
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

      <section id="duvidas" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
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

      <section id="contato" className="scroll-mt-24 border-t border-border px-6 py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl md:text-6xl">Vamos criar o seu próximo ambiente.</h2>
        <p className="mt-4 text-muted-foreground">Orçamento sem compromisso e o mais rápido da região, pelo WhatsApp.</p>
        <div className="mt-10"><Cta>Falar no WhatsApp</Cta></div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Cedro Móveis Sob Medida</footer>

      <a href={WHATS} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-background shadow-lg">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.1.1.6-.1 1.2Z"/></svg>
      </a>
    </main>
  );
}
