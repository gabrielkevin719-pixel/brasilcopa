import {
    j as e,
    A as g,
    m as o
} from "./motion-Dl5ESBnd.js";
import {
    r as i
} from "./react-vendor-BhhBPzEV.js";
import {
    f as p,
    g as n,
    p as P,
    b as j
} from "./index-HbVrSddE.js";
import {
    X as S,
    J as E,
    N as _
} from "./ui-vendor-CgMXgsDn.js";
import "./supabase-C7dOFRwv.js";
const q = "/assets/detail-back-Lvayzq3B.webp",
    B = "/assets/detail-collar-CY2seC3n.webp",
    G = "/assets/detail-fabric-ZU1_fqLT.webp",
    L = ["P", "M", "G", "GG", "XGG"],
    D = ({
        product: a,
        onClose: h,
        onBuy: v
    }) => {
        const [m, x] = i.useState(""), [d, l] = i.useState(0), [N, c] = i.useState(!1), [s, b] = i.useState(a);
        i.useEffect(() => {
            b(a), l(0), x(""), c(!1), a && p("ViewContent", {
                content_ids: [a.id],
                content_name: a.name,
                content_type: "product",
                value: n(a.id),
                currency: "BRL"
            })
        }, [a]);
        const f = s ? P.filter(t => t.id !== s.id).slice(0, 4) : [],
            y = t => {
                b(t), l(0), x(""), c(!1)
            },
            r = s ? s.images && s.images.length > 0 ? s.images : [{
                src: s.image,
                label: "Frente"
            }, {
                src: q,
                label: "Costas"
            }, {
                src: B,
                label: "Gola"
            }, {
                src: G,
                label: "Tecido"
            }] : [],
            w = () => {
                if (!m) {
                    c(!0);
                    return
                }
                s && (p("AddToCart", {
                    content_ids: [s.id],
                    content_name: s.name,
                    content_type: "product",
                    value: n(s.id),
                    currency: "BRL",
                    contents: [{
                        id: s.id,
                        quantity: 1,
                        item_price: n(s.id)
                    }]
                }), v(s, m))
            },
            C = () => l(t => (t + 1) % r.length),
            k = () => l(t => (t - 1 + r.length) % r.length);
        return e.jsx(g, {
            children: s && e.jsx(o.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4 overflow-y-auto",
                onClick: h,
                children: e.jsxs(o.div, {
                    initial: {
                        scale: .9,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: .9,
                        opacity: 0
                    },
                    onClick: t => t.stopPropagation(),
                    className: "bg-card rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative",
                    children: [e.jsx("button", {
                        onClick: h,
                        className: "absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground bg-card/80 rounded-full p-1.5",
                        children: e.jsx(S, {
                            className: "w-6 h-6"
                        })
                    }), e.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-0",
                        children: [e.jsxs("div", {
                            className: "relative bg-muted rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden",
                            children: [e.jsxs("div", {
                                className: "relative aspect-square",
                                children: [e.jsx(g, {
                                    mode: "wait",
                                    children: e.jsx(o.img, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: .2
                                        },
                                        src: r[d] ? .src,
                                        alt: r[d] ? .label,
                                        className: "w-full h-full object-contain"
                                    }, d)
                                }), e.jsx("button", {
                                    onClick: k,
                                    className: "absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 rounded-full p-1.5 hover:bg-card transition-colors",
                                    children: e.jsx(E, {
                                        className: "w-5 h-5 text-foreground"
                                    })
                                }), e.jsx("button", {
                                    onClick: C,
                                    className: "absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 rounded-full p-1.5 hover:bg-card transition-colors",
                                    children: e.jsx(_, {
                                        className: "w-5 h-5 text-foreground"
                                    })
                                }), e.jsx("span", {
                                    className: "absolute top-3 left-3 bg-brasil-yellow text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full",
                                    children: s.tag
                                })]
                            }), e.jsx("div", {
                                className: "flex gap-2 p-3 justify-center flex-wrap",
                                children: r.map((t, u) => e.jsx("button", {
                                    onClick: () => l(u),
                                    className: `w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${u===d?"border-brasil-green scale-105":"border-border opacity-60 hover:opacity-100"}`,
                                    children: e.jsx("img", {
                                        src: t.src,
                                        alt: t.label,
                                        className: "w-full h-full object-cover"
                                    })
                                }, u))
                            })]
                        }), e.jsxs("div", {
                            className: "p-6 flex flex-col",
                            children: [e.jsx("h2", {
                                className: "font-display text-3xl text-foreground mb-1",
                                children: s.name
                            }), e.jsx("p", {
                                className: "text-muted-foreground text-sm mb-4 leading-relaxed",
                                children: s.description
                            }), e.jsxs("div", {
                                className: "space-y-2 mb-5",
                                children: [e.jsx("h4", {
                                    className: "text-sm font-bold text-foreground",
                                    children: "Detalhes do Produto"
                                }), e.jsxs("ul", {
                                    className: "text-xs text-muted-foreground space-y-1",
                                    children: [e.jsx("li", {
                                        children: "✅ Tecido Dry-Fit respirável de alta performance"
                                    }), e.jsx("li", {
                                        children: "✅ Gola com acabamento premium reforçado"
                                    }), e.jsx("li", {
                                        children: "✅ Escudo bordado em alta definição"
                                    }), e.jsx("li", {
                                        children: "✅ Costura dupla em todas as emendas"
                                    }), e.jsx("li", {
                                        children: "✅ Modelagem slim fit confortável"
                                    }), e.jsx("li", {
                                        children: "✅ Lavável à máquina sem deformação"
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "mb-5",
                                children: [e.jsxs("h4", {
                                    className: "text-sm font-bold text-foreground mb-2",
                                    children: ["Tamanho ", e.jsx("span", {
                                        className: "text-destructive",
                                        children: "*"
                                    })]
                                }), e.jsx("div", {
                                    className: "flex gap-2 flex-wrap",
                                    children: L.map(t => e.jsx("button", {
                                        onClick: () => {
                                            x(t), c(!1)
                                        },
                                        className: `w-12 h-12 rounded-xl text-sm font-bold border-2 transition-all ${m===t?"border-brasil-green bg-brasil-green text-primary-foreground":"border-border text-foreground hover:border-brasil-green/50"}`,
                                        children: t
                                    }, t))
                                }), N && e.jsx("p", {
                                    className: "text-destructive text-xs mt-1",
                                    children: "Selecione um tamanho"
                                })]
                            }), e.jsxs("div", {
                                className: "mt-auto",
                                children: [e.jsxs("div", {
                                    className: "mb-4",
                                    children: [e.jsx("span", {
                                        className: "text-muted-foreground text-xs line-through",
                                        children: "R$ 189,90"
                                    }), e.jsx("span", {
                                        className: "block text-brasil-green font-bold text-3xl",
                                        children: j(n(s.id))
                                    }), e.jsx("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: "via PIX • Envio para todo Brasil"
                                    })]
                                }), e.jsx(o.button, {
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: .97
                                    },
                                    onClick: w,
                                    className: "w-full bg-brasil-green text-primary-foreground font-bold py-4 rounded-xl shadow-cta hover:bg-brasil-green-dark transition-colors text-base",
                                    children: "Comprar Agora 🛒"
                                })]
                            })]
                        })]
                    }), f.length > 0 && e.jsxs("div", {
                        className: "border-t border-border px-6 py-5",
                        children: [e.jsx("h3", {
                            className: "font-display text-xl text-foreground mb-1",
                            children: "Você também vai amar 💚"
                        }), e.jsx("p", {
                            className: "text-xs text-muted-foreground mb-4",
                            children: "Outros modelos que estão bombando na loja"
                        }), e.jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                            children: f.map(t => e.jsxs(o.button, {
                                whileHover: {
                                    y: -3
                                },
                                onClick: () => y(t),
                                className: "group text-left bg-muted/40 hover:bg-muted rounded-2xl overflow-hidden border border-border hover:border-brasil-green/50 transition-all",
                                children: [e.jsx("div", {
                                    className: "aspect-square bg-card overflow-hidden",
                                    children: e.jsx("img", {
                                        src: t.image,
                                        alt: t.name,
                                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    })
                                }), e.jsxs("div", {
                                    className: "p-2",
                                    children: [e.jsx("p", {
                                        className: "text-xs font-bold text-foreground line-clamp-1",
                                        children: t.name
                                    }), e.jsx("p", {
                                        className: "text-brasil-green font-bold text-sm mt-0.5",
                                        children: j(n(t.id))
                                    })]
                                })]
                            }, t.id))
                        })]
                    })]
                })
            })
        })
    };
export {
    D as
    default
};