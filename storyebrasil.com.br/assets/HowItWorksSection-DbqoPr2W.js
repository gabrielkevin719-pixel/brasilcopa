import {
    j as e,
    m as s
} from "./motion-Dl5ESBnd.js";
import {
    o as l,
    p as n,
    l as i
} from "./ui-vendor-CgMXgsDn.js";
import "./react-vendor-BhhBPzEV.js";
const o = [{
        icon: l,
        n: "1",
        title: "Escolha sua camisa",
        desc: "Selecione modelo e tamanho (do P ao XGG). Mais de 6 modelos disponíveis."
    }, {
        icon: n,
        n: "2",
        title: "Pague no PIX",
        desc: "Aprovação imediata, sem cadastro de cartão. Seguro via Mercado Pago."
    }, {
        icon: i,
        n: "3",
        title: "Receba em casa",
        desc: "Entrega rastreada em 5 a 7 dias úteis para todo o Brasil."
    }],
    m = () => {
        const r = () => document.getElementById("produtos") ? .scrollIntoView({
            behavior: "smooth"
        });
        return e.jsx("section", {
            className: "py-16 bg-background",
            children: e.jsxs("div", {
                className: "container mx-auto px-4",
                children: [e.jsxs("div", {
                    className: "text-center mb-12",
                    children: [e.jsxs("h2", {
                        className: "font-display text-4xl md:text-5xl text-foreground mb-3",
                        children: ["Como Funciona em ", e.jsx("span", {
                            className: "text-brasil-green",
                            children: "3 passos"
                        })]
                    }), e.jsx("p", {
                        className: "text-muted-foreground max-w-2xl mx-auto",
                        children: "Do clique à entrega — simples, rápido e 100% seguro."
                    })]
                }), e.jsx("div", {
                    className: "md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2 scrollbar-hide",
                    children: o.map((t, a) => e.jsxs(s.div, {
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
                        transition: {
                            delay: a * .1
                        },
                        className: "relative bg-card p-5 rounded-2xl shadow-card border border-border text-center snap-center shrink-0 basis-[80%] mt-5",
                        children: [e.jsx("div", {
                            className: "absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-brasil-yellow text-secondary-foreground font-display text-lg flex items-center justify-center shadow-cta",
                            children: t.n
                        }), e.jsx("div", {
                            className: "w-11 h-11 mx-auto mb-2 mt-1 rounded-xl bg-brasil-green/10 flex items-center justify-center",
                            children: e.jsx(t.icon, {
                                className: "w-6 h-6 text-brasil-green"
                            })
                        }), e.jsx("h3", {
                            className: "font-bold text-base text-foreground mb-1",
                            children: t.title
                        }), e.jsx("p", {
                            className: "text-muted-foreground text-xs leading-snug",
                            children: t.desc
                        })]
                    }, a))
                }), e.jsx("div", {
                    className: "hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto",
                    children: o.map((t, a) => e.jsxs(s.div, {
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
                        transition: {
                            delay: a * .15
                        },
                        className: "relative bg-card p-8 rounded-2xl shadow-card border border-border text-center",
                        children: [e.jsx("div", {
                            className: "absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brasil-yellow text-secondary-foreground font-display text-2xl flex items-center justify-center shadow-cta",
                            children: t.n
                        }), e.jsx("div", {
                            className: "w-16 h-16 mx-auto mb-4 mt-3 rounded-2xl bg-brasil-green/10 flex items-center justify-center",
                            children: e.jsx(t.icon, {
                                className: "w-8 h-8 text-brasil-green"
                            })
                        }), e.jsx("h3", {
                            className: "font-bold text-xl text-foreground mb-2",
                            children: t.title
                        }), e.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: t.desc
                        })]
                    }, a))
                }), e.jsx("div", {
                    className: "text-center mt-10",
                    children: e.jsx("button", {
                        onClick: r,
                        className: "bg-brasil-yellow text-secondary-foreground font-bold text-lg px-10 py-4 rounded-full shadow-cta hover:brightness-110 transition-all uppercase tracking-wide",
                        children: "Escolher Minha Camisa →"
                    })
                })]
            })
        })
    };
export {
    m as
    default
};