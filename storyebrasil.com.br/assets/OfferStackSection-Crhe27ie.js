import {
    j as e,
    m as r
} from "./motion-Dl5ESBnd.js";
import {
    q as t,
    j as o,
    S as n,
    G as i,
    Z as d
} from "./ui-vendor-CgMXgsDn.js";
import "./react-vendor-BhhBPzEV.js";
const c = [{
        icon: t,
        label: "Camisa oficial Brasil (modelo à sua escolha)",
        value: "R$ 249,90"
    }, {
        icon: o,
        label: "Frete rastreado para todo o Brasil",
        value: "R$ 39,90"
    }, {
        icon: n,
        label: "Garantia de troca em 7 dias",
        value: "Incluso"
    }, {
        icon: i,
        label: "Bônus: brinde surpresa da Seleção 🇧🇷",
        value: "R$ 29,00"
    }, {
        icon: d,
        label: "Aprovação imediata via PIX",
        value: "Incluso"
    }],
    p = () => {
        const s = () => document.getElementById("produtos") ? .scrollIntoView({
            behavior: "smooth"
        });
        return e.jsx("section", {
            className: "py-16 bg-gradient-to-b from-brasil-green to-brasil-green/90",
            children: e.jsxs("div", {
                className: "container mx-auto px-4 max-w-3xl",
                children: [e.jsxs("div", {
                    className: "text-center mb-8",
                    children: [e.jsx("span", {
                        className: "inline-block px-4 py-1.5 rounded-full bg-brasil-yellow text-secondary-foreground font-bold text-sm uppercase tracking-wide mb-4",
                        children: "🎁 Oferta Completa"
                    }), e.jsxs("h2", {
                        className: "font-display text-4xl md:text-5xl text-primary-foreground mb-3",
                        children: ["Tudo que você leva por ", e.jsx("span", {
                            className: "text-brasil-yellow",
                            children: "R$ 112"
                        })]
                    }), e.jsx("p", {
                        className: "text-primary-foreground/90",
                        children: "Veja o valor real do que está incluso na sua compra."
                    })]
                }), e.jsxs(r.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "bg-card rounded-2xl shadow-card p-6 md:p-8 border-4 border-brasil-yellow",
                    children: [e.jsx("ul", {
                        className: "space-y-3 mb-6",
                        children: c.map((a, l) => e.jsxs("li", {
                            className: "flex items-center justify-between gap-3 pb-3 border-b border-border last:border-0 last:pb-0",
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [e.jsx("div", {
                                    className: "w-9 h-9 rounded-full bg-brasil-green/10 flex items-center justify-center shrink-0",
                                    children: e.jsx(a.icon, {
                                        className: "w-5 h-5 text-brasil-green"
                                    })
                                }), e.jsx("span", {
                                    className: "text-card-foreground font-medium text-sm md:text-base",
                                    children: a.label
                                })]
                            }), e.jsx("span", {
                                className: "text-muted-foreground text-sm font-semibold whitespace-nowrap",
                                children: a.value
                            })]
                        }, l))
                    }), e.jsxs("div", {
                        className: "bg-muted rounded-xl p-5 text-center",
                        children: [e.jsx("p", {
                            className: "text-muted-foreground text-sm mb-1",
                            children: "Valor total:"
                        }), e.jsx("p", {
                            className: "text-2xl text-muted-foreground font-bold line-through mb-2",
                            children: "R$ 318,80"
                        }), e.jsx("p", {
                            className: "text-sm text-foreground font-semibold mb-1",
                            children: "Hoje, no PIX, por apenas:"
                        }), e.jsx("p", {
                            className: "font-display text-6xl md:text-7xl text-brasil-green leading-none mb-2",
                            children: "R$ 112"
                        }), e.jsx("p", {
                            className: "inline-block bg-brasil-yellow text-secondary-foreground font-bold px-4 py-1.5 rounded-full text-sm",
                            children: "💰 Você economiza R$ 206,80"
                        })]
                    }), e.jsx("button", {
                        onClick: s,
                        className: "w-full mt-6 bg-brasil-yellow text-secondary-foreground font-bold text-lg md:text-xl px-8 py-5 rounded-full shadow-cta hover:brightness-110 transition-all uppercase tracking-wide",
                        children: "Quero Garantir Por R$ 112 →"
                    }), e.jsx("p", {
                        className: "text-center text-xs text-muted-foreground mt-3",
                        children: "🔒 Pagamento seguro • 📦 Envio em 24h • 🔄 Troca grátis em 7 dias"
                    })]
                })]
            })
        })
    };
export {
    p as
    default
};