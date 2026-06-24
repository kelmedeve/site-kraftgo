import { useState } from "react";
import { ArrowRight, Leaf, Package, Truck, Star, ChevronDown, Menu, X } from "lucide-react";

const serif = { fontFamily: "'DM Serif Display', serif" };
const sans = { fontFamily: "'Figtree', sans-serif" };

const sizes = [
  {
    name: "Pequena",
    dims: "18 × 8 × 22 cm",
    ideal: "Joias, cosméticos, acessórios",
    price: "R$ 1,20",
    min: "50 un.",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=700&fit=crop&auto=format",
  },
  {
    name: "Média",
    dims: "24 × 10 × 28 cm",
    ideal: "Roupas, calçados, presentes",
    price: "R$ 1,80",
    min: "50 un.",
    img: "https://images.unsplash.com/photo-1616429368325-d5d7542b0ec3?w=600&h=700&fit=crop&auto=format",
  },
  {
    name: "Grande",
    dims: "32 × 12 × 38 cm",
    ideal: "Panificação, mercearia, atacado",
    price: "R$ 2,40",
    min: "50 un.",
    img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=600&h=700&fit=crop&auto=format",
  },
];

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Proprietária — Empório Orgânico",
    text: "As sacolas transformaram a percepção da minha marca. Os clientes elogiam toda vez. Qualidade impecável e entrega rápida.",
    stars: 5,
  },
  {
    name: "Rafael Mendes",
    role: "Padeiro — Forno da Serra",
    text: "Uso para embalar meus pães artesanais e ficou perfeito. Resistente, charmoso e sustentável. Recomendo muito.",
    stars: 5,
  },
  {
    name: "Camila Souza",
    role: "Designer de Joias",
    text: "Finalmente uma embalagem que combina com o meu produto premium. Personalizei com minha logo e ficou incrível.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Posso personalizar com minha logo?",
    a: "Sim! Oferecemos impressão personalizada a partir de 200 unidades. Entre em contato para solicitar um orçamento com seu arquivo.",
  },
  {
    q: "Qual é o prazo de entrega?",
    a: "Para pedidos em estoque, de 3 a 5 dias úteis. Pedidos personalizados levam de 10 a 15 dias úteis após aprovação da arte.",
  },
  {
    q: "As sacolas são realmente sustentáveis?",
    a: "Sim. Utilizamos papel kraft 100% reciclável, com gramatura de 120g/m². O papel é certificado e biodegradável.",
  },
  {
    q: "Qual o pedido mínimo?",
    a: "Para pedidos padrão, o mínimo é de 50 unidades por tamanho. Para personalizados, o mínimo é de 200 unidades.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState(1);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={sans}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-accent flex items-center justify-center shrink-0">
              <span className="text-accent-foreground font-bold text-xs" style={serif}>K</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-tight text-foreground" style={serif}>KraftGo</span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Embalagens</span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[["Produto", "produto"], ["Tamanhos", "tamanhos"], ["Sustentável", "sustentavel"], ["Contato", "contato"]].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("pedido")}
              className="bg-accent text-accent-foreground text-sm px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              Pedir Agora
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className="md:hidden overflow-hidden transition-all duration-300 border-t border-border"
          style={{ maxHeight: menuOpen ? "260px" : "0" }}
        >
          <div className="px-6 py-6 flex flex-col gap-5 bg-background">
            {[["Produto", "produto"], ["Tamanhos", "tamanhos"], ["Sustentável", "sustentavel"], ["Contato", "contato"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm text-muted-foreground text-left">
                {label}
              </button>
            ))}
            <button onClick={() => scrollTo("pedido")} className="bg-accent text-accent-foreground text-sm px-5 py-3 w-fit">
              Pedir Agora
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-16">
        {/* Text side */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20 md:py-0 order-2 md:order-1">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-8">
            <Leaf size={12} />
            100% Papel Kraft Reciclável
          </span>
          <h1
            className="leading-[1.05] mb-6 text-foreground"
            style={{ ...serif, fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
          >
            A embalagem que
            <br />
            <em>conta a história</em>
            <br />
            do seu produto.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
            Sacolas de papel kraft artesanal — resistentes, elegantes e sustentáveis.
            Para marcas que se importam com cada detalhe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("pedido")}
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("tamanhos")}
              className="flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 text-sm font-semibold hover:bg-card transition-colors"
            >
              Ver Tamanhos
            </button>
          </div>
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
            {[["50+", "unidades mín."], ["3-5", "dias úteis"], ["100%", "reciclável"]].map(([num, label]) => (
              <div key={label}>
                <p className="text-2xl font-bold text-accent" style={serif}>{num}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative order-1 md:order-2 min-h-[50vh] md:min-h-screen bg-secondary overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1616429368325-d5d7542b0ec3?w=900&h=1100&fit=crop&auto=format"
            alt="Sacola de papel kraft artesanal sobre fundo branco"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-3 border border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Material</p>
            <p className="text-sm font-semibold text-foreground">Papel Kraft 120g/m²</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="produto" className="py-28 px-6 md:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4">Por que kraft?</p>
              <h2 style={{ ...serif, fontSize: "clamp(2rem, 4vw, 3.2rem)" }} className="leading-tight mb-8">
                Força e beleza
                <br />
                <em>naturalmente juntas.</em>
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: <Package size={20} className="text-accent" />,
                    title: "Alta resistência",
                    desc: "Gramatura 120g/m² suporta até 5kg com alça reforçada em cordão de algodão.",
                  },
                  {
                    icon: <Leaf size={20} className="text-accent" />,
                    title: "Biodegradável",
                    desc: "Se decompõe em até 6 semanas. Zero plástico, zero culpa.",
                  },
                  {
                    icon: <Star size={20} className="text-accent" />,
                    title: "Visual premium",
                    desc: "Textura natural do kraft valoriza qualquer produto — do artesanal ao luxo.",
                  },
                  {
                    icon: <Truck size={20} className="text-accent" />,
                    title: "Entrega rápida",
                    desc: "Estoque pronto para envio imediato em São Paulo e região.",
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4 items-start">
                    <div className="shrink-0 w-10 h-10 bg-background flex items-center justify-center border border-border">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{f.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 aspect-[16/9] bg-secondary overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1764845357195-06f744d1c972?w=900&h=500&fit=crop&auto=format"
                  alt="Mãos embrulhando presentes com papel kraft"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=400&h=400&fit=crop&auto=format"
                  alt="Sacola kraft vista de frente"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop&auto=format"
                  alt="Sacola kraft com alça"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIZES */}
      <section id="tamanhos" className="py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4">Modelos</p>
            <h2 style={{ ...serif, fontSize: "clamp(2rem, 4vw, 3rem)" }} className="leading-tight">
              Escolha o tamanho ideal
            </h2>
          </div>

          <div className="flex gap-2 justify-center mb-10">
            {sizes.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setSelectedSize(i)}
                className="px-6 py-2.5 text-sm font-medium border transition-colors"
                style={{
                  backgroundColor: selectedSize === i ? "var(--accent)" : "transparent",
                  color: selectedSize === i ? "var(--accent-foreground)" : "var(--muted-foreground)",
                  borderColor: selectedSize === i ? "var(--accent)" : "var(--border)",
                }}
              >
                {s.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden">
            <div className="bg-background aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={sizes[selectedSize].img}
                alt={`Sacola kraft tamanho ${sizes[selectedSize].name}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="bg-card p-12 flex flex-col justify-center gap-8">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Tamanho</p>
                <h3 style={{ ...serif, fontSize: "2.5rem" }} className="leading-tight">{sizes[selectedSize].name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  ["Dimensões", sizes[selectedSize].dims],
                  ["Ideal para", sizes[selectedSize].ideal],
                  ["Preço unitário", sizes[selectedSize].price],
                  ["Pedido mínimo", sizes[selectedSize].min],
                ].map(([label, val]) => (
                  <div key={label}>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
                    <p className="font-semibold text-foreground text-sm">{val}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Alça em cordão de algodão, fundo reforçado com papelão e acabamento dobrado.
                </p>
                <button
                  onClick={() => scrollTo("pedido")}
                  className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Pedir este tamanho <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section id="sustentavel" className="py-28 px-6 md:px-12" style={{ backgroundColor: "#1e1208" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold mb-6" style={{ color: "#c4824a" }}>
              <Leaf size={12} /> Compromisso ambiental
            </span>
            <h2
              style={{ ...serif, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f2ead8" }}
              className="leading-tight mb-8"
            >
              Embalagem que respeita
              <br />
              <em style={{ color: "#c4824a" }}>o planeta.</em>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(242,234,216,0.65)" }}>
              O papel kraft é produzido a partir de fibras de celulose de reflorestamento,
              sem branqueamento químico. Nossa sacola não usa plástico em nenhuma parte —
              nem alça, nem reforço, nem adesivo.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: "rgba(242,234,216,0.1)" }}>
              {[
                ["6 sem.", "Biodegradação"],
                ["0%", "Plástico"],
                ["100%", "Reciclável"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="text-3xl font-bold mb-1" style={{ ...serif, color: "#c4824a" }}>{num}</p>
                  <p className="text-xs uppercase tracking-wider" style={{ color: "rgba(242,234,216,0.5)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-muted overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1755606277170-4e89d5847e14?w=700&h=700&fit=crop&auto=format"
              alt="Embalagem sustentável com produtos naturais"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 md:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4">Depoimentos</p>
            <h2 style={{ ...serif, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              O que dizem nossos clientes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background p-8 flex flex-col gap-4 border border-border">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">"{t.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4">Dúvidas frequentes</p>
            <h2 style={{ ...serif, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>Perguntas frequentes</h2>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-foreground">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-muted-foreground transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? "200px" : "0" }}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed pb-5">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / ORDER */}
      <section id="pedido" className="py-28 px-6 md:px-12 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-6 opacity-70">Solicite seu orçamento</p>
          <h2
            style={{ ...serif, fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            className="leading-tight mb-6"
          >
            Pronto para elevar
            <br />
            sua embalagem?
          </h2>
          <p className="text-lg opacity-80 mb-6 max-w-lg mx-auto leading-relaxed">
            Entre em contato pelo WhatsApp ou e-mail. Respondemos em até 24 horas com
            orçamento personalizado para o seu volume.
          </p>

          {/* Resumo do produto selecionado */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-accent-foreground/10 border border-accent-foreground/20 px-6 py-4 mb-10 text-sm">
            <span className="opacity-60 text-xs uppercase tracking-wider">Produto selecionado:</span>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="font-bold">{sizes[selectedSize].name}</span>
              <span className="opacity-40">·</span>
              <span className="opacity-80">{sizes[selectedSize].dims}</span>
              <span className="opacity-40">·</span>
              <span className="font-bold">{sizes[selectedSize].price} / un.</span>
              <span className="opacity-40">·</span>
              <span className="opacity-80">Mín. {sizes[selectedSize].min}</span>
            </div>
            <button
              onClick={() => scrollTo("tamanhos")}
              className="text-xs underline underline-offset-2 opacity-60 hover:opacity-100 transition-opacity shrink-0"
            >
              Alterar
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/5511994125631?text=${encodeURIComponent(
                `Olá! Tenho interesse nas sacolas KraftGo.\n\n` +
                `📦 Tamanho: ${sizes[selectedSize].name}\n` +
                `📐 Dimensões: ${sizes[selectedSize].dims}\n` +
                `🏷️ Ideal para: ${sizes[selectedSize].ideal}\n` +
                `💰 Preço unitário: ${sizes[selectedSize].price}\n` +
                `📦 Pedido mínimo: ${sizes[selectedSize].min}\n\n` +
                `Gostaria de saber mais sobre prazos e personalização.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Pedir pelo WhatsApp <ArrowRight size={16} />
            </a>
            <a
              href={`mailto:contato@kraftgo.com.br?subject=Orçamento%20Sacola%20${encodeURIComponent(sizes[selectedSize].name)}&body=${encodeURIComponent(
                `Olá!\n\nGostaria de solicitar um orçamento:\n\n` +
                `Tamanho: ${sizes[selectedSize].name}\n` +
                `Dimensões: ${sizes[selectedSize].dims}\n` +
                `Ideal para: ${sizes[selectedSize].ideal}\n` +
                `Preço unitário: ${sizes[selectedSize].price}\n` +
                `Pedido mínimo: ${sizes[selectedSize].min}\n\n` +
                `Quantidade desejada: \nNome da empresa: \nCidade/Estado: `
              )}`}
              className="flex items-center justify-center gap-2 border border-accent-foreground/30 text-accent-foreground px-8 py-4 text-sm font-bold hover:bg-accent-foreground/10 transition-colors"
            >
              Enviar e-mail
            </a>
          </div>
          <p className="text-xs opacity-50 mt-8 tracking-wide uppercase">São Paulo · SP — Entregamos para todo o Brasil</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="border-t border-border px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 bg-accent flex items-center justify-center shrink-0">
                <span className="text-accent-foreground font-bold text-xs" style={serif}>K</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-base tracking-tight text-foreground" style={serif}>KraftGo</span>
                <span className="text-[9px] tracking-[0.18em] uppercase text-muted-foreground">Embalagens</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">São Paulo, SP · contato@kraftgo.com.br</p>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 KraftGo Embalagens. Todos os direitos reservados.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors border border-border px-4 py-2"
          >
            Topo ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
