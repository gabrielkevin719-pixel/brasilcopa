import {
    j as a
} from "./motion-Dl5ESBnd.js";
import {
    r as t
} from "./react-vendor-BhhBPzEV.js";
import {
    I as p,
    H as u,
    w as n,
    x,
    y as d,
    z as g
} from "./ui-vendor-CgMXgsDn.js";
import {
    c as i
} from "./index-HbVrSddE.js";
import "./supabase-C7dOFRwv.js";
const h = g,
    c = t.forwardRef(({
        className: s,
        ...e
    }, o) => a.jsx(p, {
        ref: o,
        className: i("border-b", s),
        ...e
    }));
c.displayName = "AccordionItem";
const m = t.forwardRef(({
    className: s,
    children: e,
    ...o
}, r) => a.jsx(u, {
    className: "flex",
    children: a.jsxs(n, {
        ref: r,
        className: i("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", s),
        ...o,
        children: [e, a.jsx(x, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
m.displayName = n.displayName;
const l = t.forwardRef(({
    className: s,
    children: e,
    ...o
}, r) => a.jsx(d, {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...o,
    children: a.jsx("div", {
        className: i("pb-4 pt-0", s),
        children: e
    })
}));
l.displayName = d.displayName;
const f = [{
        q: "A camisa é original da CBF?",
        a: "Não somos licenciados oficiais, mas a qualidade é praticamente idêntica: tecido dry-fit respirável, escudo bordado e mesma modelagem da oficial. É exatamente por isso que conseguimos vender por R$ 112 ao invés dos R$ 349 da loja oficial."
    }, {
        q: "E se o tamanho não servir? Posso trocar?",
        a: "Sim! Você tem 7 dias após o recebimento para solicitar a troca de tamanho sem custo adicional. Basta nos chamar no WhatsApp."
    }, {
        q: "Quanto tempo demora para chegar?",
        a: "Entre 5 e 7 dias úteis para todo o Brasil. Você recebe o código de rastreio no WhatsApp assim que o pedido é despachado (em até 24h após a confirmação do PIX)."
    }, {
        q: "O pagamento via PIX é seguro?",
        a: "100% seguro. Processamos pagamentos via Mercado Pago, a maior plataforma de pagamentos da América Latina. A aprovação é imediata e você recebe a confirmação no e-mail."
    }, {
        q: "Vocês têm CNPJ? Como sei que não é golpe?",
        a: "Sim, somos uma empresa brasileira com CNPJ ativo, atendimento humano via WhatsApp e mais de 12.000 clientes atendidos. Confira os depoimentos verificados nesta página."
    }, {
        q: "Posso parcelar no cartão?",
        a: "No momento trabalhamos exclusivamente com PIX para garantir o menor preço (R$ 112). Em breve disponibilizaremos cartão em até 3x sem juros."
    }, {
        q: "A camisa desbota ou o escudo descola depois de lavar?",
        a: "Não. O tecido mantém a cor após mais de 100 lavagens e o escudo é bordado (não estampado), então não descola. Recomendamos apenas lavar em água fria e do avesso."
    }],
    y = () => {
        const s = () => document.getElementById("produtos") ? .scrollIntoView({
            behavior: "smooth"
        });
        return a.jsx("section", {
            className: "py-16 bg-muted",
            children: a.jsxs("div", {
                className: "container mx-auto px-4 max-w-3xl",
                children: [a.jsxs("div", {
                    className: "text-center mb-10",
                    children: [a.jsxs("h2", {
                        className: "font-display text-4xl md:text-5xl text-foreground mb-3",
                        children: ["Perguntas ", a.jsx("span", {
                            className: "text-brasil-green",
                            children: "Frequentes"
                        })]
                    }), a.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Tirou suas dúvidas? Garante a sua agora antes que esgote."
                    })]
                }), a.jsx(h, {
                    type: "single",
                    collapsible: !0,
                    className: "bg-card rounded-2xl border border-border shadow-card px-6",
                    children: f.map((e, o) => a.jsxs(c, {
                        value: `item-${o}`,
                        className: "border-border",
                        children: [a.jsx(m, {
                            className: "text-left font-bold text-foreground hover:no-underline",
                            children: e.q
                        }), a.jsx(l, {
                            className: "text-muted-foreground leading-relaxed",
                            children: e.a
                        })]
                    }, o))
                }), a.jsx("div", {
                    className: "text-center mt-8",
                    children: a.jsx("button", {
                        onClick: s,
                        className: "bg-brasil-green text-primary-foreground font-bold text-lg px-10 py-4 rounded-full shadow-cta hover:brightness-110 transition-all uppercase tracking-wide",
                        children: "Tirei Minhas Dúvidas — Quero Comprar 🇧🇷"
                    })
                })]
            })
        })
    };
export {
    y as
    default
};