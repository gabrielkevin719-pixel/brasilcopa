import {
    j as e,
    m as i
} from "./motion-Dl5ESBnd.js";
import {
    r,
    s,
    t as o,
    j as l
} from "./ui-vendor-CgMXgsDn.js";
import "./react-vendor-BhhBPzEV.js";
const c = [{
        icon: r,
        title: "Tecido Premium",
        desc: "Material de alta qualidade, leve e respirável."
    }, {
        icon: s,
        title: "Modelagem Perfeita",
        desc: "Caimento impecável que valoriza qualquer corpo."
    }, {
        icon: o,
        title: "Conforto e Durabilidade",
        desc: "Feita para durar, lavagem após lavagem."
    }, {
        icon: l,
        title: "Envio Rápido",
        desc: "Entrega para todo o Brasil com rastreio."
    }],
    x = () => e.jsx("section", {
        className: "py-16 bg-brasil-green",
        children: e.jsxs("div", {
            className: "container mx-auto px-4",
            children: [e.jsx("h2", {
                className: "font-display text-4xl md:text-5xl text-primary-foreground text-center mb-12",
                children: "Por que escolher a gente?"
            }), e.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                children: c.map((t, a) => e.jsxs(i.div, {
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
                    className: "text-center",
                    children: [e.jsx("div", {
                        className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-brasil-yellow flex items-center justify-center",
                        children: e.jsx(t.icon, {
                            className: "w-8 h-8 text-secondary-foreground"
                        })
                    }), e.jsx("h3", {
                        className: "text-primary-foreground font-bold text-lg mb-2",
                        children: t.title
                    }), e.jsx("p", {
                        className: "text-primary-foreground/80 text-sm",
                        children: t.desc
                    })]
                }, a))
            })]
        })
    });
export {
    x as
    default
};