import {
    j as e,
    A as m,
    m as d
} from "./motion-Dl5ESBnd.js";
import {
    r
} from "./react-vendor-BhhBPzEV.js";
import {
    o as u,
    X as x
} from "./ui-vendor-CgMXgsDn.js";
const o = [{
        name: "João",
        city: "São Paulo, SP",
        product: "Camisa Brasil 2024"
    }, {
        name: "Maria",
        city: "Rio de Janeiro, RJ",
        product: "Camisa Retrô 2002"
    }, {
        name: "Pedro",
        city: "Belo Horizonte, MG",
        product: "Camisa Black Edition"
    }, {
        name: "Ana",
        city: "Curitiba, PR",
        product: "Camisa Brasil Feminina"
    }, {
        name: "Lucas",
        city: "Salvador, BA",
        product: "Camisa Retrô 1970"
    }, {
        name: "Camila",
        city: "Porto Alegre, RS",
        product: "Camisa Brasil 2026"
    }, {
        name: "Rodrigo",
        city: "Fortaleza, CE",
        product: "Camisa Retrô 1994"
    }, {
        name: "Juliana",
        city: "Recife, PE",
        product: "Camisa Brasil 2024"
    }, {
        name: "Felipe",
        city: "Brasília, DF",
        product: "Camisa Black Edition"
    }, {
        name: "Beatriz",
        city: "Manaus, AM",
        product: "Camisa Brasil 2026"
    }],
    p = () => Math.floor(Math.random() * 12) + 1,
    y = () => {
        const [t, a] = r.useState(null), i = r.useRef(0);
        return r.useEffect(() => {
            const s = () => {
                    const l = o[i.current % o.length];
                    i.current++, a({ ...l,
                        mins: p()
                    }), setTimeout(() => a(null), 5500)
                },
                n = setTimeout(s, 8e3),
                c = setInterval(s, 18e3);
            return () => {
                clearTimeout(n), clearInterval(c)
            }
        }, []), e.jsx("div", {
            className: "fixed bottom-20 md:bottom-6 left-4 z-30 pointer-events-none",
            children: e.jsx(m, {
                children: t && e.jsxs(d.div, {
                    initial: {
                        opacity: 0,
                        x: -30,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        x: 0,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        x: -30
                    },
                    transition: {
                        duration: .4
                    },
                    className: "pointer-events-auto bg-card border border-border shadow-card rounded-xl px-3 py-2.5 max-w-[280px] flex items-center gap-3",
                    children: [e.jsx("div", {
                        className: "w-9 h-9 rounded-full bg-brasil-green/10 flex items-center justify-center shrink-0",
                        children: e.jsx(u, {
                            className: "w-4 h-4 text-brasil-green"
                        })
                    }), e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [e.jsxs("p", {
                            className: "text-xs font-bold text-foreground leading-tight",
                            children: [t.name, " de ", t.city]
                        }), e.jsxs("p", {
                            className: "text-[11px] text-muted-foreground leading-tight",
                            children: ["comprou ", t.product]
                        }), e.jsxs("p", {
                            className: "text-[10px] text-brasil-green font-semibold mt-0.5",
                            children: ["há ", t.mins, " min ✓ Verificado"]
                        })]
                    }), e.jsx("button", {
                        onClick: () => a(null),
                        className: "text-muted-foreground hover:text-foreground",
                        "aria-label": "Fechar",
                        children: e.jsx(x, {
                            className: "w-3.5 h-3.5"
                        })
                    })]
                })
            })
        })
    };
export {
    y as
    default
};