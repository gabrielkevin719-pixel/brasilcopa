import {
    r as s,
    R as S,
    a as Ae,
    b as yt,
    c as Se
} from "./react-vendor-BhhBPzEV.js";
import {
    j as d
} from "./motion-Dl5ESBnd.js";

function k(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(r) {
        if (e ? .(r), n === !1 || !r.defaultPrevented) return t ? .(r)
    }
}

function be(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function ke(...e) {
    return t => {
        let n = !1;
        const o = e.map(r => {
            const a = be(r, t);
            return !n && typeof a == "function" && (n = !0), a
        });
        if (n) return () => {
            for (let r = 0; r < o.length; r++) {
                const a = o[r];
                typeof a == "function" ? a() : be(e[r], null)
            }
        }
    }
}

function _(...e) {
    return s.useCallback(ke(...e), e)
}

function Z(e, t = []) {
    let n = [];

    function o(a, c) {
        const l = s.createContext(c),
            u = n.length;
        n = [...n, c];
        const i = v => {
            const {
                scope: x,
                children: C,
                ...P
            } = v, h = x ? .[e] ? .[u] || l, p = s.useMemo(() => P, Object.values(P));
            return d.jsx(h.Provider, {
                value: p,
                children: C
            })
        };
        i.displayName = a + "Provider";

        function f(v, x) {
            const C = x ? .[e] ? .[u] || l,
                P = s.useContext(C);
            if (P) return P;
            if (c !== void 0) return c;
            throw new Error(`\`${v}\` must be used within \`${a}\``)
        }
        return [i, f]
    }
    const r = () => {
        const a = n.map(c => s.createContext(c));
        return function(l) {
            const u = l ? .[e] || a;
            return s.useMemo(() => ({
                [`__scope${e}`]: { ...l,
                    [e]: u
                }
            }), [l, u])
        }
    };
    return r.scopeName = e, [o, Ct(r, ...t)]
}

function Ct(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const o = e.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(a) {
            const c = o.reduce((l, {
                useScope: u,
                scopeName: i
            }) => {
                const v = u(a)[`__scope${i}`];
                return { ...l,
                    ...v
                }
            }, {});
            return s.useMemo(() => ({
                [`__scope${t.scopeName}`]: c
            }), [c])
        }
    };
    return n.scopeName = t.scopeName, n
}

function se(e) {
    const t = wt(e),
        n = s.forwardRef((o, r) => {
            const {
                children: a,
                ...c
            } = o, l = s.Children.toArray(a), u = l.find(xt);
            if (u) {
                const i = u.props.children,
                    f = l.map(v => v === u ? s.Children.count(i) > 1 ? s.Children.only(null) : s.isValidElement(i) ? i.props.children : null : v);
                return d.jsx(t, { ...c,
                    ref: r,
                    children: s.isValidElement(i) ? s.cloneElement(i, void 0, f) : null
                })
            }
            return d.jsx(t, { ...c,
                ref: r,
                children: a
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function wt(e) {
    const t = s.forwardRef((n, o) => {
        const {
            children: r,
            ...a
        } = n;
        if (s.isValidElement(r)) {
            const c = gt(r),
                l = Et(a, r.props);
            return r.type !== s.Fragment && (l.ref = o ? ke(o, c) : c), s.cloneElement(r, l)
        }
        return s.Children.count(r) > 1 ? s.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var Ie = Symbol("radix.slottable");

function In(e) {
    const t = ({
        children: n
    }) => d.jsx(d.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = Ie, t
}

function xt(e) {
    return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ie
}

function Et(e, t) {
    const n = { ...t
    };
    for (const o in t) {
        const r = e[o],
            a = t[o];
        /^on[A-Z]/.test(o) ? r && a ? n[o] = (...l) => {
            const u = a(...l);
            return r(...l), u
        } : r && (n[o] = r) : o === "style" ? n[o] = { ...r,
            ...a
        } : o === "className" && (n[o] = [r, a].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function gt(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function Me(e) {
    const t = e + "CollectionProvider",
        [n, o] = Z(t),
        [r, a] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        c = h => {
            const {
                scope: p,
                children: g
            } = h, m = S.useRef(null), y = S.useRef(new Map).current;
            return d.jsx(r, {
                scope: p,
                itemMap: y,
                collectionRef: m,
                children: g
            })
        };
    c.displayName = t;
    const l = e + "CollectionSlot",
        u = se(l),
        i = S.forwardRef((h, p) => {
            const {
                scope: g,
                children: m
            } = h, y = a(l, g), T = _(p, y.collectionRef);
            return d.jsx(u, {
                ref: T,
                children: m
            })
        });
    i.displayName = l;
    const f = e + "CollectionItemSlot",
        v = "data-radix-collection-item",
        x = se(f),
        C = S.forwardRef((h, p) => {
            const {
                scope: g,
                children: m,
                ...y
            } = h, T = S.useRef(null), A = _(p, T), R = a(f, g);
            return S.useEffect(() => (R.itemMap.set(T, {
                ref: T,
                ...y
            }), () => void R.itemMap.delete(T))), d.jsx(x, {
                [v]: "",
                ref: A,
                children: m
            })
        });
    C.displayName = f;

    function P(h) {
        const p = a(e + "CollectionConsumer", h);
        return S.useCallback(() => {
            const m = p.collectionRef.current;
            if (!m) return [];
            const y = Array.from(m.querySelectorAll(`[${v}]`));
            return Array.from(p.itemMap.values()).sort((R, b) => y.indexOf(R.ref.current) - y.indexOf(b.ref.current))
        }, [p.collectionRef, p.itemMap])
    }
    return [{
        Provider: c,
        Slot: i,
        ItemSlot: C
    }, P, o]
}
var bt = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    I = bt.reduce((e, t) => {
        const n = se(`Primitive.${t}`),
            o = s.forwardRef((r, a) => {
                const {
                    asChild: c,
                    ...l
                } = r, u = c ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), d.jsx(u, { ...l,
                    ref: a
                })
            });
        return o.displayName = `Primitive.${t}`, { ...e,
            [t]: o
        }
    }, {});

function Ne(e, t) {
    e && Ae.flushSync(() => e.dispatchEvent(t))
}

function V(e) {
    const t = s.useRef(e);
    return s.useEffect(() => {
        t.current = e
    }), s.useMemo(() => (...n) => t.current ? .(...n), [])
}

function Tt(e, t = globalThis ? .document) {
    const n = V(e);
    s.useEffect(() => {
        const o = r => {
            r.key === "Escape" && n(r)
        };
        return t.addEventListener("keydown", o, {
            capture: !0
        }), () => t.removeEventListener("keydown", o, {
            capture: !0
        })
    }, [n, t])
}
var Rt = "DismissableLayer",
    ae = "dismissableLayer.update",
    Pt = "dismissableLayer.pointerDownOutside",
    At = "dismissableLayer.focusOutside",
    Te, Oe = s.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    _e = s.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: r,
            onFocusOutside: a,
            onInteractOutside: c,
            onDismiss: l,
            ...u
        } = e, i = s.useContext(Oe), [f, v] = s.useState(null), x = f ? .ownerDocument ? ? globalThis ? .document, [, C] = s.useState({}), P = _(t, b => v(b)), h = Array.from(i.layers), [p] = [...i.layersWithOutsidePointerEventsDisabled].slice(-1), g = h.indexOf(p), m = f ? h.indexOf(f) : -1, y = i.layersWithOutsidePointerEventsDisabled.size > 0, T = m >= g, A = kt(b => {
            const M = b.target,
                D = [...i.branches].some(L => L.contains(M));
            !T || D || (r ? .(b), c ? .(b), b.defaultPrevented || l ? .())
        }, x), R = It(b => {
            const M = b.target;
            [...i.branches].some(L => L.contains(M)) || (a ? .(b), c ? .(b), b.defaultPrevented || l ? .())
        }, x);
        return Tt(b => {
            m === i.layers.size - 1 && (o ? .(b), !b.defaultPrevented && l && (b.preventDefault(), l()))
        }, x), s.useEffect(() => {
            if (f) return n && (i.layersWithOutsidePointerEventsDisabled.size === 0 && (Te = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), i.layersWithOutsidePointerEventsDisabled.add(f)), i.layers.add(f), Re(), () => {
                n && i.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = Te)
            }
        }, [f, x, n, i]), s.useEffect(() => () => {
            f && (i.layers.delete(f), i.layersWithOutsidePointerEventsDisabled.delete(f), Re())
        }, [f, i]), s.useEffect(() => {
            const b = () => C({});
            return document.addEventListener(ae, b), () => document.removeEventListener(ae, b)
        }, []), d.jsx(I.div, { ...u,
            ref: P,
            style: {
                pointerEvents: y ? T ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: k(e.onFocusCapture, R.onFocusCapture),
            onBlurCapture: k(e.onBlurCapture, R.onBlurCapture),
            onPointerDownCapture: k(e.onPointerDownCapture, A.onPointerDownCapture)
        })
    });
_e.displayName = Rt;
var St = "DismissableLayerBranch",
    De = s.forwardRef((e, t) => {
        const n = s.useContext(Oe),
            o = s.useRef(null),
            r = _(t, o);
        return s.useEffect(() => {
            const a = o.current;
            if (a) return n.branches.add(a), () => {
                n.branches.delete(a)
            }
        }, [n.branches]), d.jsx(I.div, { ...e,
            ref: r
        })
    });
De.displayName = St;

function kt(e, t = globalThis ? .document) {
    const n = V(e),
        o = s.useRef(!1),
        r = s.useRef(() => {});
    return s.useEffect(() => {
        const a = l => {
                if (l.target && !o.current) {
                    let u = function() {
                        Le(Pt, n, i, {
                            discrete: !0
                        })
                    };
                    const i = {
                        originalEvent: l
                    };
                    l.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = u, t.addEventListener("click", r.current, {
                        once: !0
                    })) : u()
                } else t.removeEventListener("click", r.current);
                o.current = !1
            },
            c = window.setTimeout(() => {
                t.addEventListener("pointerdown", a)
            }, 0);
        return () => {
            window.clearTimeout(c), t.removeEventListener("pointerdown", a), t.removeEventListener("click", r.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function It(e, t = globalThis ? .document) {
    const n = V(e),
        o = s.useRef(!1);
    return s.useEffect(() => {
        const r = a => {
            a.target && !o.current && Le(At, n, {
                originalEvent: a
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r)
    }, [t, n]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function Re() {
    const e = new CustomEvent(ae);
    document.dispatchEvent(e)
}

function Le(e, t, n, {
    discrete: o
}) {
    const r = n.originalEvent.target,
        a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && r.addEventListener(e, t, {
        once: !0
    }), o ? Ne(r, a) : r.dispatchEvent(a)
}
var Mt = _e,
    Nt = De,
    H = globalThis ? .document ? s.useLayoutEffect : () => {},
    Ot = "Portal",
    je = s.forwardRef((e, t) => {
        const {
            container: n,
            ...o
        } = e, [r, a] = s.useState(!1);
        H(() => a(!0), []);
        const c = n || r && globalThis ? .document ? .body;
        return c ? yt.createPortal(d.jsx(I.div, { ...o,
            ref: t
        }), c) : null
    });
je.displayName = Ot;

function _t(e, t) {
    return s.useReducer((n, o) => t[n][o] ? ? n, e)
}
var ue = e => {
    const {
        present: t,
        children: n
    } = e, o = Dt(t), r = typeof n == "function" ? n({
        present: o.isPresent
    }) : s.Children.only(n), a = _(o.ref, Lt(r));
    return typeof n == "function" || o.isPresent ? s.cloneElement(r, {
        ref: a
    }) : null
};
ue.displayName = "Presence";

function Dt(e) {
    const [t, n] = s.useState(), o = s.useRef(null), r = s.useRef(e), a = s.useRef("none"), c = e ? "mounted" : "unmounted", [l, u] = _t(c, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return s.useEffect(() => {
        const i = q(o.current);
        a.current = l === "mounted" ? i : "none"
    }, [l]), H(() => {
        const i = o.current,
            f = r.current;
        if (f !== e) {
            const x = a.current,
                C = q(i);
            e ? u("MOUNT") : C === "none" || i ? .display === "none" ? u("UNMOUNT") : u(f && x !== C ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e
        }
    }, [e, u]), H(() => {
        if (t) {
            let i;
            const f = t.ownerDocument.defaultView ? ? window,
                v = C => {
                    const h = q(o.current).includes(C.animationName);
                    if (C.target === t && h && (u("ANIMATION_END"), !r.current)) {
                        const p = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", i = f.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = p)
                        })
                    }
                },
                x = C => {
                    C.target === t && (a.current = q(o.current))
                };
            return t.addEventListener("animationstart", x), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
                f.clearTimeout(i), t.removeEventListener("animationstart", x), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v)
            }
        } else u("ANIMATION_END")
    }, [t, u]), {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: s.useCallback(i => {
            o.current = i ? getComputedStyle(i) : null, n(i)
        }, [])
    }
}

function q(e) {
    return e ? .animationName || "none"
}

function Lt(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var jt = Se[" useInsertionEffect ".trim().toString()] || H;

function G({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: o
}) {
    const [r, a, c] = Ft({
        defaultProp: t,
        onChange: n
    }), l = e !== void 0, u = l ? e : r; {
        const f = s.useRef(e !== void 0);
        s.useEffect(() => {
            const v = f.current;
            v !== l && console.warn(`${o} is changing from ${v?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), f.current = l
        }, [l, o])
    }
    const i = s.useCallback(f => {
        if (l) {
            const v = Vt(f) ? f(e) : f;
            v !== e && c.current ? .(v)
        } else a(f)
    }, [l, e, a, c]);
    return [u, i]
}

function Ft({
    defaultProp: e,
    onChange: t
}) {
    const [n, o] = s.useState(e), r = s.useRef(n), a = s.useRef(t);
    return jt(() => {
        a.current = t
    }, [t]), s.useEffect(() => {
        r.current !== n && (a.current ? .(n), r.current = n)
    }, [n, r]), [n, o, a]
}

function Vt(e) {
    return typeof e == "function"
}
var Ht = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    $t = "VisuallyHidden",
    Q = s.forwardRef((e, t) => d.jsx(I.span, { ...e,
        ref: t,
        style: { ...Ht,
            ...e.style
        }
    }));
Q.displayName = $t;
var Mn = Q,
    fe = "ToastProvider",
    [pe, Wt, Kt] = Me("Toast"),
    [Fe, Nn] = Z("Toast", [Kt]),
    [Ut, J] = Fe(fe),
    Ve = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: o = 5e3,
            swipeDirection: r = "right",
            swipeThreshold: a = 50,
            children: c
        } = e, [l, u] = s.useState(null), [i, f] = s.useState(0), v = s.useRef(!1), x = s.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${fe}\`. Expected non-empty \`string\`.`), d.jsx(pe.Provider, {
            scope: t,
            children: d.jsx(Ut, {
                scope: t,
                label: n,
                duration: o,
                swipeDirection: r,
                swipeThreshold: a,
                toastCount: i,
                viewport: l,
                onViewportChange: u,
                onToastAdd: s.useCallback(() => f(C => C + 1), []),
                onToastRemove: s.useCallback(() => f(C => C - 1), []),
                isFocusedToastEscapeKeyDownRef: v,
                isClosePausedRef: x,
                children: c
            })
        })
    };
Ve.displayName = fe;
var He = "ToastViewport",
    Bt = ["F8"],
    ie = "toast.viewportPause",
    ce = "toast.viewportResume",
    $e = s.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: o = Bt,
            label: r = "Notifications ({hotkey})",
            ...a
        } = e, c = J(He, n), l = Wt(n), u = s.useRef(null), i = s.useRef(null), f = s.useRef(null), v = s.useRef(null), x = _(t, v, c.onViewportChange), C = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), P = c.toastCount > 0;
        s.useEffect(() => {
            const p = g => {
                o.length !== 0 && o.every(y => g[y] || g.code === y) && v.current ? .focus()
            };
            return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p)
        }, [o]), s.useEffect(() => {
            const p = u.current,
                g = v.current;
            if (P && p && g) {
                const m = () => {
                        if (!c.isClosePausedRef.current) {
                            const R = new CustomEvent(ie);
                            g.dispatchEvent(R), c.isClosePausedRef.current = !0
                        }
                    },
                    y = () => {
                        if (c.isClosePausedRef.current) {
                            const R = new CustomEvent(ce);
                            g.dispatchEvent(R), c.isClosePausedRef.current = !1
                        }
                    },
                    T = R => {
                        !p.contains(R.relatedTarget) && y()
                    },
                    A = () => {
                        p.contains(document.activeElement) || y()
                    };
                return p.addEventListener("focusin", m), p.addEventListener("focusout", T), p.addEventListener("pointermove", m), p.addEventListener("pointerleave", A), window.addEventListener("blur", m), window.addEventListener("focus", y), () => {
                    p.removeEventListener("focusin", m), p.removeEventListener("focusout", T), p.removeEventListener("pointermove", m), p.removeEventListener("pointerleave", A), window.removeEventListener("blur", m), window.removeEventListener("focus", y)
                }
            }
        }, [P, c.isClosePausedRef]);
        const h = s.useCallback(({
            tabbingDirection: p
        }) => {
            const m = l().map(y => {
                const T = y.ref.current,
                    A = [T, ...rn(T)];
                return p === "forwards" ? A : A.reverse()
            });
            return (p === "forwards" ? m.reverse() : m).flat()
        }, [l]);
        return s.useEffect(() => {
            const p = v.current;
            if (p) {
                const g = m => {
                    const y = m.altKey || m.ctrlKey || m.metaKey;
                    if (m.key === "Tab" && !y) {
                        const A = document.activeElement,
                            R = m.shiftKey;
                        if (m.target === p && R) {
                            i.current ? .focus();
                            return
                        }
                        const D = h({
                                tabbingDirection: R ? "backwards" : "forwards"
                            }),
                            L = D.findIndex(F => F === A);
                        re(D.slice(L + 1)) ? m.preventDefault() : R ? i.current ? .focus() : f.current ? .focus()
                    }
                };
                return p.addEventListener("keydown", g), () => p.removeEventListener("keydown", g)
            }
        }, [l, h]), d.jsxs(Nt, {
            ref: u,
            role: "region",
            "aria-label": r.replace("{hotkey}", C),
            tabIndex: -1,
            style: {
                pointerEvents: P ? void 0 : "none"
            },
            children: [P && d.jsx(le, {
                ref: i,
                onFocusFromOutsideViewport: () => {
                    const p = h({
                        tabbingDirection: "forwards"
                    });
                    re(p)
                }
            }), d.jsx(pe.Slot, {
                scope: n,
                children: d.jsx(I.ol, {
                    tabIndex: -1,
                    ...a,
                    ref: x
                })
            }), P && d.jsx(le, {
                ref: f,
                onFocusFromOutsideViewport: () => {
                    const p = h({
                        tabbingDirection: "backwards"
                    });
                    re(p)
                }
            })]
        })
    });
$e.displayName = He;
var We = "ToastFocusProxy",
    le = s.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: o,
            ...r
        } = e, a = J(We, n);
        return d.jsx(Q, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...r,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: c => {
                const l = c.relatedTarget;
                !a.viewport ? .contains(l) && o()
            }
        })
    });
le.displayName = We;
var K = "Toast",
    zt = "toast.swipeStart",
    qt = "toast.swipeMove",
    Yt = "toast.swipeCancel",
    Xt = "toast.swipeEnd",
    Ke = s.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: o,
            defaultOpen: r,
            onOpenChange: a,
            ...c
        } = e, [l, u] = G({
            prop: o,
            defaultProp: r ? ? !0,
            onChange: a,
            caller: K
        });
        return d.jsx(ue, {
            present: n || l,
            children: d.jsx(Qt, {
                open: l,
                ...c,
                ref: t,
                onClose: () => u(!1),
                onPause: V(e.onPause),
                onResume: V(e.onResume),
                onSwipeStart: k(e.onSwipeStart, i => {
                    i.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: k(e.onSwipeMove, i => {
                    const {
                        x: f,
                        y: v
                    } = i.detail.delta;
                    i.currentTarget.setAttribute("data-swipe", "move"), i.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), i.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${v}px`)
                }),
                onSwipeCancel: k(e.onSwipeCancel, i => {
                    i.currentTarget.setAttribute("data-swipe", "cancel"), i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), i.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), i.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: k(e.onSwipeEnd, i => {
                    const {
                        x: f,
                        y: v
                    } = i.detail.delta;
                    i.currentTarget.setAttribute("data-swipe", "end"), i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), i.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), i.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${v}px`), u(!1)
                })
            })
        })
    });
Ke.displayName = K;
var [Zt, Gt] = Fe(K, {
    onClose() {}
}), Qt = s.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: o = "foreground",
        duration: r,
        open: a,
        onClose: c,
        onEscapeKeyDown: l,
        onPause: u,
        onResume: i,
        onSwipeStart: f,
        onSwipeMove: v,
        onSwipeCancel: x,
        onSwipeEnd: C,
        ...P
    } = e, h = J(K, n), [p, g] = s.useState(null), m = _(t, w => g(w)), y = s.useRef(null), T = s.useRef(null), A = r || h.duration, R = s.useRef(0), b = s.useRef(A), M = s.useRef(0), {
        onToastAdd: D,
        onToastRemove: L
    } = h, F = V(() => {
        p ? .contains(document.activeElement) && h.viewport ? .focus(), c()
    }), U = s.useCallback(w => {
        !w || w === 1 / 0 || (window.clearTimeout(M.current), R.current = new Date().getTime(), M.current = window.setTimeout(F, w))
    }, [F]);
    s.useEffect(() => {
        const w = h.viewport;
        if (w) {
            const O = () => {
                    U(b.current), i ? .()
                },
                j = () => {
                    const $ = new Date().getTime() - R.current;
                    b.current = b.current - $, window.clearTimeout(M.current), u ? .()
                };
            return w.addEventListener(ie, j), w.addEventListener(ce, O), () => {
                w.removeEventListener(ie, j), w.removeEventListener(ce, O)
            }
        }
    }, [h.viewport, A, u, i, U]), s.useEffect(() => {
        a && !h.isClosePausedRef.current && U(A)
    }, [a, A, h.isClosePausedRef, U]), s.useEffect(() => (D(), () => L()), [D, L]);
    const Ee = s.useMemo(() => p ? Ze(p) : null, [p]);
    return h.viewport ? d.jsxs(d.Fragment, {
        children: [Ee && d.jsx(Jt, {
            __scopeToast: n,
            role: "status",
            "aria-live": o === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Ee
        }), d.jsx(Zt, {
            scope: n,
            onClose: F,
            children: Ae.createPortal(d.jsx(pe.ItemSlot, {
                scope: n,
                children: d.jsx(Mt, {
                    asChild: !0,
                    onEscapeKeyDown: k(l, () => {
                        h.isFocusedToastEscapeKeyDownRef.current || F(), h.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: d.jsx(I.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": a ? "open" : "closed",
                        "data-swipe-direction": h.swipeDirection,
                        ...P,
                        ref: m,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: k(e.onKeyDown, w => {
                            w.key === "Escape" && (l ? .(w.nativeEvent), w.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, F()))
                        }),
                        onPointerDown: k(e.onPointerDown, w => {
                            w.button === 0 && (y.current = {
                                x: w.clientX,
                                y: w.clientY
                            })
                        }),
                        onPointerMove: k(e.onPointerMove, w => {
                            if (!y.current) return;
                            const O = w.clientX - y.current.x,
                                j = w.clientY - y.current.y,
                                $ = !!T.current,
                                W = ["left", "right"].includes(h.swipeDirection),
                                B = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max,
                                vt = W ? B(0, O) : 0,
                                ht = W ? 0 : B(0, j),
                                oe = w.pointerType === "touch" ? 10 : 2,
                                z = {
                                    x: vt,
                                    y: ht
                                },
                                ge = {
                                    originalEvent: w,
                                    delta: z
                                };
                            $ ? (T.current = z, Y(qt, v, ge, {
                                discrete: !1
                            })) : Pe(z, h.swipeDirection, oe) ? (T.current = z, Y(zt, f, ge, {
                                discrete: !1
                            }), w.target.setPointerCapture(w.pointerId)) : (Math.abs(O) > oe || Math.abs(j) > oe) && (y.current = null)
                        }),
                        onPointerUp: k(e.onPointerUp, w => {
                            const O = T.current,
                                j = w.target;
                            if (j.hasPointerCapture(w.pointerId) && j.releasePointerCapture(w.pointerId), T.current = null, y.current = null, O) {
                                const $ = w.currentTarget,
                                    W = {
                                        originalEvent: w,
                                        delta: O
                                    };
                                Pe(O, h.swipeDirection, h.swipeThreshold) ? Y(Xt, C, W, {
                                    discrete: !0
                                }) : Y(Yt, x, W, {
                                    discrete: !0
                                }), $.addEventListener("click", B => B.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), h.viewport)
        })]
    }) : null
}), Jt = e => {
    const {
        __scopeToast: t,
        children: n,
        ...o
    } = e, r = J(K, t), [a, c] = s.useState(!1), [l, u] = s.useState(!1);
    return nn(() => c(!0)), s.useEffect(() => {
        const i = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(i)
    }, []), l ? null : d.jsx(je, {
        asChild: !0,
        children: d.jsx(Q, { ...o,
            children: a && d.jsxs(d.Fragment, {
                children: [r.label, " ", n]
            })
        })
    })
}, en = "ToastTitle", Ue = s.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...o
    } = e;
    return d.jsx(I.div, { ...o,
        ref: t
    })
});
Ue.displayName = en;
var tn = "ToastDescription",
    Be = s.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...o
        } = e;
        return d.jsx(I.div, { ...o,
            ref: t
        })
    });
Be.displayName = tn;
var ze = "ToastAction",
    qe = s.forwardRef((e, t) => {
        const {
            altText: n,
            ...o
        } = e;
        return n.trim() ? d.jsx(Xe, {
            altText: n,
            asChild: !0,
            children: d.jsx(me, { ...o,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${ze}\`. Expected non-empty \`string\`.`), null)
    });
qe.displayName = ze;
var Ye = "ToastClose",
    me = s.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...o
        } = e, r = Gt(Ye, n);
        return d.jsx(Xe, {
            asChild: !0,
            children: d.jsx(I.button, {
                type: "button",
                ...o,
                ref: t,
                onClick: k(e.onClick, r.onClose)
            })
        })
    });
me.displayName = Ye;
var Xe = s.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: o,
        ...r
    } = e;
    return d.jsx(I.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": o || void 0,
        ...r,
        ref: t
    })
});

function Ze(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(o => {
        if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), on(o)) {
            const r = o.ariaHidden || o.hidden || o.style.display === "none",
                a = o.dataset.radixToastAnnounceExclude === "";
            if (!r)
                if (a) {
                    const c = o.dataset.radixToastAnnounceAlt;
                    c && t.push(c)
                } else t.push(...Ze(o))
        }
    }), t
}

function Y(e, t, n, {
    discrete: o
}) {
    const r = n.originalEvent.currentTarget,
        a = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && r.addEventListener(e, t, {
        once: !0
    }), o ? Ne(r, a) : r.dispatchEvent(a)
}
var Pe = (e, t, n = 0) => {
    const o = Math.abs(e.x),
        r = Math.abs(e.y),
        a = o > r;
    return t === "left" || t === "right" ? a && o > n : !a && r > n
};

function nn(e = () => {}) {
    const t = V(e);
    H(() => {
        let n = 0,
            o = 0;
        return n = window.requestAnimationFrame(() => o = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(o)
        }
    }, [t])
}

function on(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function rn(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const r = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function re(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var On = Ve,
    _n = $e,
    Dn = Ke,
    Ln = Ue,
    jn = Be,
    Fn = qe,
    Vn = me;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Ge = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var an = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cn = s.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: a,
    iconNode: c,
    ...l
}, u) => s.createElement("svg", {
    ref: u,
    ...an,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: o ? Number(n) * 24 / Number(t) : n,
    className: Ge("lucide", r),
    ...l
}, [...c.map(([i, f]) => s.createElement(i, f)), ...Array.isArray(a) ? a : [a]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E = (e, t) => {
    const n = s.forwardRef(({
        className: o,
        ...r
    }, a) => s.createElement(cn, {
        ref: a,
        iconNode: t,
        className: Ge(`lucide-${sn(e)}`, o),
        ...r
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = E("ArrowLeft", [
    ["path", {
        d: "m12 19-7-7 7-7",
        key: "1l729n"
    }],
    ["path", {
        d: "M19 12H5",
        key: "x3x0zl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = E("BadgeCheck", [
    ["path", {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
        key: "3c2336"
    }],
    ["path", {
        d: "m9 12 2 2 4-4",
        key: "dzmm74"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = E("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = E("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = E("ChevronLeft", [
    ["path", {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = E("ChevronRight", [
    ["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = E("CircleCheck", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "m9 12 2 2 4-4",
        key: "dzmm74"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = E("Copy", [
    ["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }],
    ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = E("Flame", [
    ["path", {
        d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
        key: "96xj49"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = E("Gift", [
    ["rect", {
        x: "3",
        y: "8",
        width: "18",
        height: "4",
        rx: "1",
        key: "bkv52"
    }],
    ["path", {
        d: "M12 8v13",
        key: "1c76mn"
    }],
    ["path", {
        d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
        key: "6wjy6b"
    }],
    ["path", {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
        key: "1ihvrl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = E("KeyRound", [
    ["path", {
        d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
        key: "1s6t7t"
    }],
    ["circle", {
        cx: "16.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor",
        key: "w0ekpg"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = E("LoaderCircle", [
    ["path", {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = E("LogOut", [
    ["path", {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
        key: "1uf3rs"
    }],
    ["polyline", {
        points: "16 17 21 12 16 7",
        key: "1gabdz"
    }],
    ["line", {
        x1: "21",
        x2: "9",
        y1: "12",
        y2: "12",
        key: "1uyos4"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = E("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = E("MessageCircle", [
    ["path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
        key: "vv11sd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = E("Package", [
    ["path", {
        d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
        key: "1a0edw"
    }],
    ["path", {
        d: "M12 22V12",
        key: "d0xqtd"
    }],
    ["path", {
        d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
        key: "yx3hmr"
    }],
    ["path", {
        d: "m7.5 4.27 9 5.15",
        key: "1c824w"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = E("Phone", [
    ["path", {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = E("QrCode", [
    ["rect", {
        width: "5",
        height: "5",
        x: "3",
        y: "3",
        rx: "1",
        key: "1tu5fj"
    }],
    ["rect", {
        width: "5",
        height: "5",
        x: "16",
        y: "3",
        rx: "1",
        key: "1v8r4q"
    }],
    ["rect", {
        width: "5",
        height: "5",
        x: "3",
        y: "16",
        rx: "1",
        key: "1x03jg"
    }],
    ["path", {
        d: "M21 16h-3a2 2 0 0 0-2 2v3",
        key: "177gqh"
    }],
    ["path", {
        d: "M21 21v.01",
        key: "ents32"
    }],
    ["path", {
        d: "M12 7v3a2 2 0 0 1-2 2H7",
        key: "8crl2c"
    }],
    ["path", {
        d: "M3 12h.01",
        key: "nlz23k"
    }],
    ["path", {
        d: "M12 3h.01",
        key: "n36tog"
    }],
    ["path", {
        d: "M12 16v.01",
        key: "133mhm"
    }],
    ["path", {
        d: "M16 12h1",
        key: "1slzba"
    }],
    ["path", {
        d: "M21 12v.01",
        key: "1lwtk9"
    }],
    ["path", {
        d: "M12 21v-1",
        key: "1880an"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = E("ShieldCheck", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }],
    ["path", {
        d: "m9 12 2 2 4-4",
        key: "dzmm74"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = E("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = E("Shirt", [
    ["path", {
        d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
        key: "1wgbhj"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = E("ShoppingBag", [
    ["path", {
        d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
        key: "hou9p0"
    }],
    ["path", {
        d: "M3 6h18",
        key: "d0wm0j"
    }],
    ["path", {
        d: "M16 10a4 4 0 0 1-8 0",
        key: "1ltviw"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = E("Smartphone", [
    ["rect", {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3"
    }],
    ["path", {
        d: "M12 18h.01",
        key: "mhygvu"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = E("Sparkles", [
    ["path", {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx"
    }],
    ["path", {
        d: "M20 3v4",
        key: "1olli1"
    }],
    ["path", {
        d: "M22 5h-4",
        key: "1gvqau"
    }],
    ["path", {
        d: "M4 17v2",
        key: "vumght"
    }],
    ["path", {
        d: "M5 18H3",
        key: "zchphs"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = E("Star", [
    ["path", {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = E("Trophy", [
    ["path", {
        d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
        key: "17hqa7"
    }],
    ["path", {
        d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
        key: "lmptdp"
    }],
    ["path", {
        d: "M4 22h16",
        key: "57wxv0"
    }],
    ["path", {
        d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
        key: "1nw9bq"
    }],
    ["path", {
        d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
        key: "1np0yb"
    }],
    ["path", {
        d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
        key: "u46fv3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = E("Truck", [
    ["path", {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
        key: "wrbu53"
    }],
    ["path", {
        d: "M15 18H9",
        key: "1lyqi6"
    }],
    ["path", {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i"
    }],
    ["circle", {
        cx: "17",
        cy: "18",
        r: "2",
        key: "332jqn"
    }],
    ["circle", {
        cx: "7",
        cy: "18",
        r: "2",
        key: "19iecd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = E("User", [
    ["path", {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel"
    }],
    ["circle", {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = E("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = E("Zap", [
    ["path", {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db"
    }]
]);
var ln = Se[" useId ".trim().toString()] || (() => {}),
    dn = 0;

function Qe(e) {
    const [t, n] = s.useState(ln());
    return H(() => {
        n(o => o ? ? String(dn++))
    }, [e]), t ? `radix-${t}` : ""
}
var ee = "Collapsible",
    [un, Je] = Z(ee),
    [fn, ve] = un(ee),
    et = s.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            open: o,
            defaultOpen: r,
            disabled: a,
            onOpenChange: c,
            ...l
        } = e, [u, i] = G({
            prop: o,
            defaultProp: r ? ? !1,
            onChange: c,
            caller: ee
        });
        return d.jsx(fn, {
            scope: n,
            disabled: a,
            contentId: Qe(),
            open: u,
            onOpenToggle: s.useCallback(() => i(f => !f), [i]),
            children: d.jsx(I.div, {
                "data-state": ye(u),
                "data-disabled": a ? "" : void 0,
                ...l,
                ref: t
            })
        })
    });
et.displayName = ee;
var tt = "CollapsibleTrigger",
    nt = s.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            ...o
        } = e, r = ve(tt, n);
        return d.jsx(I.button, {
            type: "button",
            "aria-controls": r.contentId,
            "aria-expanded": r.open || !1,
            "data-state": ye(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...o,
            ref: t,
            onClick: k(e.onClick, r.onOpenToggle)
        })
    });
nt.displayName = tt;
var he = "CollapsibleContent",
    ot = s.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...o
        } = e, r = ve(he, e.__scopeCollapsible);
        return d.jsx(ue, {
            present: n || r.open,
            children: ({
                present: a
            }) => d.jsx(pn, { ...o,
                ref: t,
                present: a
            })
        })
    });
ot.displayName = he;
var pn = s.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        present: o,
        children: r,
        ...a
    } = e, c = ve(he, n), [l, u] = s.useState(o), i = s.useRef(null), f = _(t, i), v = s.useRef(0), x = v.current, C = s.useRef(0), P = C.current, h = c.open || l, p = s.useRef(h), g = s.useRef(void 0);
    return s.useEffect(() => {
        const m = requestAnimationFrame(() => p.current = !1);
        return () => cancelAnimationFrame(m)
    }, []), H(() => {
        const m = i.current;
        if (m) {
            g.current = g.current || {
                transitionDuration: m.style.transitionDuration,
                animationName: m.style.animationName
            }, m.style.transitionDuration = "0s", m.style.animationName = "none";
            const y = m.getBoundingClientRect();
            v.current = y.height, C.current = y.width, p.current || (m.style.transitionDuration = g.current.transitionDuration, m.style.animationName = g.current.animationName), u(o)
        }
    }, [c.open, o]), d.jsx(I.div, {
        "data-state": ye(c.open),
        "data-disabled": c.disabled ? "" : void 0,
        id: c.contentId,
        hidden: !h,
        ...a,
        ref: f,
        style: {
            "--radix-collapsible-content-height": x ? `${x}px` : void 0,
            "--radix-collapsible-content-width": P ? `${P}px` : void 0,
            ...e.style
        },
        children: h && r
    })
});

function ye(e) {
    return e ? "open" : "closed"
}
var mn = et,
    vn = nt,
    hn = ot,
    yn = s.createContext(void 0);

function Cn(e) {
    const t = s.useContext(yn);
    return e || t || "ltr"
}
var N = "Accordion",
    wn = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
    [Ce, xn, En] = Me(N),
    [te, yo] = Z(N, [En, Je]),
    we = Je(),
    rt = S.forwardRef((e, t) => {
        const {
            type: n,
            ...o
        } = e, r = o, a = o;
        return d.jsx(Ce.Provider, {
            scope: e.__scopeAccordion,
            children: n === "multiple" ? d.jsx(Rn, { ...a,
                ref: t
            }) : d.jsx(Tn, { ...r,
                ref: t
            })
        })
    });
rt.displayName = N;
var [st, gn] = te(N), [at, bn] = te(N, {
    collapsible: !1
}), Tn = S.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: o,
        onValueChange: r = () => {},
        collapsible: a = !1,
        ...c
    } = e, [l, u] = G({
        prop: n,
        defaultProp: o ? ? "",
        onChange: r,
        caller: N
    });
    return d.jsx(st, {
        scope: e.__scopeAccordion,
        value: S.useMemo(() => l ? [l] : [], [l]),
        onItemOpen: u,
        onItemClose: S.useCallback(() => a && u(""), [a, u]),
        children: d.jsx(at, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: d.jsx(it, { ...c,
                ref: t
            })
        })
    })
}), Rn = S.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: o,
        onValueChange: r = () => {},
        ...a
    } = e, [c, l] = G({
        prop: n,
        defaultProp: o ? ? [],
        onChange: r,
        caller: N
    }), u = S.useCallback(f => l((v = []) => [...v, f]), [l]), i = S.useCallback(f => l((v = []) => v.filter(x => x !== f)), [l]);
    return d.jsx(st, {
        scope: e.__scopeAccordion,
        value: c,
        onItemOpen: u,
        onItemClose: i,
        children: d.jsx(at, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: d.jsx(it, { ...a,
                ref: t
            })
        })
    })
}), [Pn, ne] = te(N), it = S.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: o,
        dir: r,
        orientation: a = "vertical",
        ...c
    } = e, l = S.useRef(null), u = _(l, t), i = xn(n), v = Cn(r) === "ltr", x = k(e.onKeyDown, C => {
        if (!wn.includes(C.key)) return;
        const P = C.target,
            h = i().filter(M => !M.ref.current ? .disabled),
            p = h.findIndex(M => M.ref.current === P),
            g = h.length;
        if (p === -1) return;
        C.preventDefault();
        let m = p;
        const y = 0,
            T = g - 1,
            A = () => {
                m = p + 1, m > T && (m = y)
            },
            R = () => {
                m = p - 1, m < y && (m = T)
            };
        switch (C.key) {
            case "Home":
                m = y;
                break;
            case "End":
                m = T;
                break;
            case "ArrowRight":
                a === "horizontal" && (v ? A() : R());
                break;
            case "ArrowDown":
                a === "vertical" && A();
                break;
            case "ArrowLeft":
                a === "horizontal" && (v ? R() : A());
                break;
            case "ArrowUp":
                a === "vertical" && R();
                break
        }
        const b = m % g;
        h[b].ref.current ? .focus()
    });
    return d.jsx(Pn, {
        scope: n,
        disabled: o,
        direction: r,
        orientation: a,
        children: d.jsx(Ce.Slot, {
            scope: n,
            children: d.jsx(I.div, { ...c,
                "data-orientation": a,
                ref: u,
                onKeyDown: o ? void 0 : x
            })
        })
    })
}), X = "AccordionItem", [An, xe] = te(X), ct = S.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        value: o,
        ...r
    } = e, a = ne(X, n), c = gn(X, n), l = we(n), u = Qe(), i = o && c.value.includes(o) || !1, f = a.disabled || e.disabled;
    return d.jsx(An, {
        scope: n,
        open: i,
        disabled: f,
        triggerId: u,
        children: d.jsx(mn, {
            "data-orientation": a.orientation,
            "data-state": mt(i),
            ...l,
            ...r,
            ref: t,
            disabled: f,
            open: i,
            onOpenChange: v => {
                v ? c.onItemOpen(o) : c.onItemClose(o)
            }
        })
    })
});
ct.displayName = X;
var lt = "AccordionHeader",
    dt = S.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...o
        } = e, r = ne(N, n), a = xe(lt, n);
        return d.jsx(I.h3, {
            "data-orientation": r.orientation,
            "data-state": mt(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t
        })
    });
dt.displayName = lt;
var de = "AccordionTrigger",
    ut = S.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...o
        } = e, r = ne(N, n), a = xe(de, n), c = bn(de, n), l = we(n);
        return d.jsx(Ce.ItemSlot, {
            scope: n,
            children: d.jsx(vn, {
                "aria-disabled": a.open && !c.collapsible || void 0,
                "data-orientation": r.orientation,
                id: a.triggerId,
                ...l,
                ...o,
                ref: t
            })
        })
    });
ut.displayName = de;
var ft = "AccordionContent",
    pt = S.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...o
        } = e, r = ne(N, n), a = xe(ft, n), c = we(n);
        return d.jsx(hn, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": r.orientation,
            ...c,
            ...o,
            ref: t,
            style: {
                "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                ...e.style
            }
        })
    });
pt.displayName = ft;

function mt(e) {
    return e ? "open" : "closed"
}
var Co = rt,
    wo = ct,
    xo = dt,
    Eo = ut,
    go = pt;
export {
    Fn as A, $n as B, Vn as C, jn as D, no as E, Yn as F, Xn as G, xo as H, wo as I, Un as J, Zn as K, Gn as L, Jn as M, Bn as N, Hn as O, On as P, oo as Q, Dn as R, ro as S, Ln as T, mo as U, _n as V, qn as W, vo as X, eo as Y, ho as Z, I as a, _ as b, Z as c, V as d, k as e, ue as f, _e as g, Mn as h, In as i, po as j, fo as k, to as l, Qn as m, zn as n, io as o, co as p, Wn as q, ao as r, lo as s, so as t, H as u, uo as v, Eo as w, Kn as x, go as y, Co as z
};