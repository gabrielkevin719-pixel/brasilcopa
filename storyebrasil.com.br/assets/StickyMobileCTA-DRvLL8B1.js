import {
    j as e
} from "./motion-Dl5ESBnd.js";
import {
    r as s
} from "./react-vendor-BhhBPzEV.js";
const i = () => {
    const [r, o] = s.useState(!1);
    s.useEffect(() => {
        const t = () => o(window.scrollY > 600);
        return window.addEventListener("scroll", t), t(), () => window.removeEventListener("scroll", t)
    }, []);
    const l = () => document.getElementById("produtos") ? .scrollIntoView({
        behavior: "smooth"
    });
    return e.jsx("div", {
        className: `md:hidden fixed bottom-0 inset-x-0 z-40 bg-card border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 ${r?"translate-y-0":"translate-y-full"}`,
        children: e.jsxs("div", {
            className: "flex items-center justify-between gap-3 p-3",
            children: [e.jsxs("div", {
                className: "flex flex-col leading-tight",
                children: [e.jsx("span", {
                    className: "text-[10px] text-muted-foreground uppercase font-semibold",
                    children: "A partir de"
                }), e.jsx("span", {
                    className: "font-display text-2xl text-brasil-green",
                    children: "R$ 112"
                })]
            }), e.jsx("button", {
                onClick: l,
                className: "flex-1 bg-brasil-yellow text-secondary-foreground font-bold text-sm px-4 py-3 rounded-full shadow-cta uppercase tracking-wide active:scale-95 transition-transform",
                children: "Comprar Agora 🇧🇷"
            })]
        })
    })
};
export {
    i as
    default
};