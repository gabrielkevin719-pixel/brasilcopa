const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/HowItWorksSection-DbqoPr2W.js", "assets/motion-Dl5ESBnd.js", "assets/react-vendor-BhhBPzEV.js", "assets/ui-vendor-CgMXgsDn.js", "assets/OfferStackSection-Crhe27ie.js", "assets/BenefitsSection-DvlmOv3H.js", "assets/TestimonialsSection-CDkgT7BM.js", "assets/FAQSection-CiYC3s22.js", "assets/supabase-C7dOFRwv.js", "assets/FooterSection-DJWA_pH2.js", "assets/ProductDetailModal-FYK0pa4_.js", "assets/CheckoutModal-B31uABaz.js", "assets/input-CwTK8_3Y.js", "assets/WhatsAppButton-DENbR1jl.js", "assets/StickyMobileCTA-DRvLL8B1.js", "assets/RecentPurchaseToasts-BmAmSU5E.js", "assets/NotFound-Bp5Fv1LL.js", "assets/Login-BPWttlHV.js", "assets/SetPassword-DQSUz2Q6.js", "assets/Members-CjAUZln1.js"]))) => i.map(i => d[i]);
var Wr = e => {
    throw TypeError(e)
};
var fr = (e, t, r) => t.has(e) || Wr("Cannot " + r);
var b = (e, t, r) => (fr(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
    F = (e, t, r) => t.has(e) ? Wr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r),
    O = (e, t, r, s) => (fr(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r),
    te = (e, t, r) => (fr(e, t, "access private method"), r);
var qt = (e, t, r, s) => ({
    set _(o) {
        O(e, t, o, r)
    },
    get _() {
        return b(e, t, s)
    }
});
import {
    j as h,
    m as Tt
} from "./motion-Dl5ESBnd.js";
import {
    a as Ws,
    r as y,
    R as x,
    b as hn,
    L as pn,
    u as mn,
    B as gn,
    d as bn,
    e as kt
} from "./react-vendor-BhhBPzEV.js";
import {
    V as Qs,
    R as Ys,
    A as Ks,
    C as Js,
    X as yn,
    T as Zs,
    D as $s,
    P as vn,
    a as er,
    u as vr,
    c as eo,
    b as tr,
    d as wn,
    e as dt,
    f as xn,
    g as Cn,
    h as An,
    i as En,
    F as Pn,
    j as Sn,
    S as Rn,
    U as Tn
} from "./ui-vendor-CgMXgsDn.js";
import {
    c as kn
} from "./supabase-C7dOFRwv.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
    new MutationObserver(o => {
        for (const n of o)
            if (n.type === "childList")
                for (const a of n.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && s(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(o) {
        const n = {};
        return o.integrity && (n.integrity = o.integrity), o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? n.credentials = "include" : o.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function s(o) {
        if (o.ep) return;
        o.ep = !0;
        const n = r(o);
        fetch(o.href, n)
    }
})();
var to, Qr = Ws;
to = Qr.createRoot, Qr.hydrateRoot;
const On = "modulepreload",
    jn = function(e) {
        return "/" + e
    },
    Yr = {},
    ne = function(t, r, s) {
        let o = Promise.resolve();
        if (r && r.length > 0) {
            document.getElementsByTagName("link");
            const a = document.querySelector("meta[property=csp-nonce]"),
                i = a ? .nonce || a ? .getAttribute("nonce");
            o = Promise.allSettled(r.map(d => {
                if (d = jn(d), d in Yr) return;
                Yr[d] = !0;
                const c = d.endsWith(".css"),
                    u = c ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${d}"]${u}`)) return;
                const f = document.createElement("link");
                if (f.rel = c ? "stylesheet" : On, c || (f.as = "script"), f.crossOrigin = "", f.href = d, i && f.setAttribute("nonce", i), document.head.appendChild(f), c) return new Promise((m, l) => {
                    f.addEventListener("load", m), f.addEventListener("error", () => l(new Error(`Unable to preload CSS for ${d}`)))
                })
            }))
        }

        function n(a) {
            const i = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (i.payload = a, window.dispatchEvent(i), !i.defaultPrevented) throw a
        }
        return o.then(a => {
            for (const i of a || []) i.status === "rejected" && n(i.reason);
            return t().catch(n)
        })
    };
var rr = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    sr = typeof window > "u" || "Deno" in globalThis;

function me() {}

function Nn(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Dn(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Mn(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function wr(e, t) {
    return typeof e == "function" ? e(t) : e
}

function zn(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Kr(e, t) {
    const {
        type: r = "all",
        exact: s,
        fetchStatus: o,
        predicate: n,
        queryKey: a,
        stale: i
    } = e;
    if (a) {
        if (s) {
            if (t.queryHash !== Tr(a, t.options)) return !1
        } else if (!Mt(t.queryKey, a)) return !1
    }
    if (r !== "all") {
        const d = t.isActive();
        if (r === "active" && !d || r === "inactive" && d) return !1
    }
    return !(typeof i == "boolean" && t.isStale() !== i || o && o !== t.state.fetchStatus || n && !n(t))
}

function Jr(e, t) {
    const {
        exact: r,
        status: s,
        predicate: o,
        mutationKey: n
    } = e;
    if (n) {
        if (!t.options.mutationKey) return !1;
        if (r) {
            if (Dt(t.options.mutationKey) !== Dt(n)) return !1
        } else if (!Mt(t.options.mutationKey, n)) return !1
    }
    return !(s && t.state.status !== s || o && !o(t))
}

function Tr(e, t) {
    return (t ? .queryKeyHashFn || Dt)(e)
}

function Dt(e) {
    return JSON.stringify(e, (t, r) => xr(r) ? Object.keys(r).sort().reduce((s, o) => (s[o] = r[o], s), {}) : r)
}

function Mt(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(r => Mt(e[r], t[r])) : !1
}

function ro(e, t) {
    if (e === t) return e;
    const r = Zr(e) && Zr(t);
    if (r || xr(e) && xr(t)) {
        const s = r ? e : Object.keys(e),
            o = s.length,
            n = r ? t : Object.keys(t),
            a = n.length,
            i = r ? [] : {},
            d = new Set(s);
        let c = 0;
        for (let u = 0; u < a; u++) {
            const f = r ? u : n[u];
            (!r && d.has(f) || r) && e[f] === void 0 && t[f] === void 0 ? (i[f] = void 0, c++) : (i[f] = ro(e[f], t[f]), i[f] === e[f] && e[f] !== void 0 && c++)
        }
        return o === a && c === o ? e : i
    }
    return t
}

function Zr(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function xr(e) {
    if (!$r(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const r = t.prototype;
    return !(!$r(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function $r(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function Bn(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function Fn(e, t, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? ro(e, t) : t
}

function Ln(e, t, r = 0) {
    const s = [...e, t];
    return r && s.length > r ? s.slice(1) : s
}

function In(e, t, r = 0) {
    const s = [t, ...e];
    return r && s.length > r ? s.slice(0, -1) : s
}
var kr = Symbol();

function so(e, t) {
    return !e.queryFn && t ? .initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === kr ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Je, Ie, ht, Is, Un = (Is = class extends rr {
        constructor() {
            super();
            F(this, Je);
            F(this, Ie);
            F(this, ht);
            O(this, ht, t => {
                if (!sr && window.addEventListener) {
                    const r = () => t();
                    return window.addEventListener("visibilitychange", r, !1), () => {
                        window.removeEventListener("visibilitychange", r)
                    }
                }
            })
        }
        onSubscribe() {
            b(this, Ie) || this.setEventListener(b(this, ht))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = b(this, Ie)) == null || t.call(this), O(this, Ie, void 0))
        }
        setEventListener(t) {
            var r;
            O(this, ht, t), (r = b(this, Ie)) == null || r.call(this), O(this, Ie, t(s => {
                typeof s == "boolean" ? this.setFocused(s) : this.onFocus()
            }))
        }
        setFocused(t) {
            b(this, Je) !== t && (O(this, Je, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(r => {
                r(t)
            })
        }
        isFocused() {
            return typeof b(this, Je) == "boolean" ? b(this, Je) : globalThis.document ? .visibilityState !== "hidden"
        }
    }, Je = new WeakMap, Ie = new WeakMap, ht = new WeakMap, Is),
    oo = new Un,
    pt, Ue, mt, Us, qn = (Us = class extends rr {
        constructor() {
            super();
            F(this, pt, !0);
            F(this, Ue);
            F(this, mt);
            O(this, mt, t => {
                if (!sr && window.addEventListener) {
                    const r = () => t(!0),
                        s = () => t(!1);
                    return window.addEventListener("online", r, !1), window.addEventListener("offline", s, !1), () => {
                        window.removeEventListener("online", r), window.removeEventListener("offline", s)
                    }
                }
            })
        }
        onSubscribe() {
            b(this, Ue) || this.setEventListener(b(this, mt))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = b(this, Ue)) == null || t.call(this), O(this, Ue, void 0))
        }
        setEventListener(t) {
            var r;
            O(this, mt, t), (r = b(this, Ue)) == null || r.call(this), O(this, Ue, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            b(this, pt) !== t && (O(this, pt, t), this.listeners.forEach(s => {
                s(t)
            }))
        }
        isOnline() {
            return b(this, pt)
        }
    }, pt = new WeakMap, Ue = new WeakMap, mt = new WeakMap, Us),
    Yt = new qn;

function Vn() {
    let e, t;
    const r = new Promise((o, n) => {
        e = o, t = n
    });
    r.status = "pending", r.catch(() => {});

    function s(o) {
        Object.assign(r, o), delete r.resolve, delete r.reject
    }
    return r.resolve = o => {
        s({
            status: "fulfilled",
            value: o
        }), e(o)
    }, r.reject = o => {
        s({
            status: "rejected",
            reason: o
        }), t(o)
    }, r
}

function _n(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function no(e) {
    return (e ? ? "online") === "online" ? Yt.isOnline() : !0
}
var ao = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e ? .revert, this.silent = e ? .silent
    }
};

function hr(e) {
    return e instanceof ao
}

function io(e) {
    let t = !1,
        r = 0,
        s = !1,
        o;
    const n = Vn(),
        a = p => {
            s || (m(new ao(p)), e.abort ? .())
        },
        i = () => {
            t = !0
        },
        d = () => {
            t = !1
        },
        c = () => oo.isFocused() && (e.networkMode === "always" || Yt.isOnline()) && e.canRun(),
        u = () => no(e.networkMode) && e.canRun(),
        f = p => {
            s || (s = !0, e.onSuccess ? .(p), o ? .(), n.resolve(p))
        },
        m = p => {
            s || (s = !0, e.onError ? .(p), o ? .(), n.reject(p))
        },
        l = () => new Promise(p => {
            o = v => {
                (s || c()) && p(v)
            }, e.onPause ? .()
        }).then(() => {
            o = void 0, s || e.onContinue ? .()
        }),
        g = () => {
            if (s) return;
            let p;
            const v = r === 0 ? e.initialPromise : void 0;
            try {
                p = v ? ? e.fn()
            } catch (w) {
                p = Promise.reject(w)
            }
            Promise.resolve(p).then(f).catch(w => {
                if (s) return;
                const C = e.retry ? ? (sr ? 0 : 3),
                    A = e.retryDelay ? ? _n,
                    E = typeof A == "function" ? A(r, w) : A,
                    S = C === !0 || typeof C == "number" && r < C || typeof C == "function" && C(r, w);
                if (t || !S) {
                    m(w);
                    return
                }
                r++, e.onFail ? .(r, w), Bn(E).then(() => c() ? void 0 : l()).then(() => {
                    t ? m(w) : g()
                })
            })
        };
    return {
        promise: n,
        cancel: a,
        continue: () => (o ? .(), n),
        cancelRetry: i,
        continueRetry: d,
        canStart: u,
        start: () => (u() ? g() : l().then(g), n)
    }
}
var Hn = e => setTimeout(e, 0);

function Xn() {
    let e = [],
        t = 0,
        r = i => {
            i()
        },
        s = i => {
            i()
        },
        o = Hn;
    const n = i => {
            t ? e.push(i) : o(() => {
                r(i)
            })
        },
        a = () => {
            const i = e;
            e = [], i.length && o(() => {
                s(() => {
                    i.forEach(d => {
                        r(d)
                    })
                })
            })
        };
    return {
        batch: i => {
            let d;
            t++;
            try {
                d = i()
            } finally {
                t--, t || a()
            }
            return d
        },
        batchCalls: i => (...d) => {
            n(() => {
                i(...d)
            })
        },
        schedule: n,
        setNotifyFunction: i => {
            r = i
        },
        setBatchNotifyFunction: i => {
            s = i
        },
        setScheduler: i => {
            o = i
        }
    }
}
var oe = Xn(),
    Ze, qs, lo = (qs = class {
        constructor() {
            F(this, Ze)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), Dn(this.gcTime) && O(this, Ze, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (sr ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            b(this, Ze) && (clearTimeout(b(this, Ze)), O(this, Ze, void 0))
        }
    }, Ze = new WeakMap, qs),
    gt, $e, de, et, re, Ft, tt, ge, Te, Vs, Gn = (Vs = class extends lo {
        constructor(t) {
            super();
            F(this, ge);
            F(this, gt);
            F(this, $e);
            F(this, de);
            F(this, et);
            F(this, re);
            F(this, Ft);
            F(this, tt);
            O(this, tt, !1), O(this, Ft, t.defaultOptions), this.setOptions(t.options), this.observers = [], O(this, et, t.client), O(this, de, b(this, et).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, O(this, gt, Qn(this.options)), this.state = t.state ? ? b(this, gt), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            return b(this, re) ? .promise
        }
        setOptions(t) {
            this.options = { ...b(this, Ft),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && b(this, de).remove(this)
        }
        setData(t, r) {
            const s = Fn(this.state.data, t, this.options);
            return te(this, ge, Te).call(this, {
                data: s,
                type: "success",
                dataUpdatedAt: r ? .updatedAt,
                manual: r ? .manual
            }), s
        }
        setState(t, r) {
            te(this, ge, Te).call(this, {
                type: "setState",
                state: t,
                setStateOptions: r
            })
        }
        cancel(t) {
            const r = b(this, re) ? .promise;
            return b(this, re) ? .cancel(t), r ? r.then(me).catch(me) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(b(this, gt))
        }
        isActive() {
            return this.observers.some(t => zn(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === kr || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(t => wr(t.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(t = 0) {
            return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !Mn(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            this.observers.find(r => r.shouldFetchOnWindowFocus()) ? .refetch({
                cancelRefetch: !1
            }), b(this, re) ? .continue()
        }
        onOnline() {
            this.observers.find(r => r.shouldFetchOnReconnect()) ? .refetch({
                cancelRefetch: !1
            }), b(this, re) ? .continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), b(this, de).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(r => r !== t), this.observers.length || (b(this, re) && (b(this, tt) ? b(this, re).cancel({
                revert: !0
            }) : b(this, re).cancelRetry()), this.scheduleGc()), b(this, de).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || te(this, ge, Te).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, r) {
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && r ? .cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (b(this, re)) return b(this, re).continueRetry(), b(this, re).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const c = this.observers.find(u => u.options.queryFn);
                c && this.setOptions(c.options)
            }
            const s = new AbortController,
                o = c => {
                    Object.defineProperty(c, "signal", {
                        enumerable: !0,
                        get: () => (O(this, tt, !0), s.signal)
                    })
                },
                n = () => {
                    const c = so(this.options, r),
                        f = (() => {
                            const m = {
                                client: b(this, et),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return o(m), m
                        })();
                    return O(this, tt, !1), this.options.persister ? this.options.persister(c, f, this) : c(f)
                },
                i = (() => {
                    const c = {
                        fetchOptions: r,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: b(this, et),
                        state: this.state,
                        fetchFn: n
                    };
                    return o(c), c
                })();
            this.options.behavior ? .onFetch(i, this), O(this, $e, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== i.fetchOptions ? .meta) && te(this, ge, Te).call(this, {
                type: "fetch",
                meta: i.fetchOptions ? .meta
            });
            const d = c => {
                hr(c) && c.silent || te(this, ge, Te).call(this, {
                    type: "error",
                    error: c
                }), hr(c) || (b(this, de).config.onError ? .(c, this), b(this, de).config.onSettled ? .(this.state.data, c, this)), this.scheduleGc()
            };
            return O(this, re, io({
                initialPromise: r ? .initialPromise,
                fn: i.fetchFn,
                abort: s.abort.bind(s),
                onSuccess: c => {
                    if (c === void 0) {
                        d(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(c)
                    } catch (u) {
                        d(u);
                        return
                    }
                    b(this, de).config.onSuccess ? .(c, this), b(this, de).config.onSettled ? .(c, this.state.error, this), this.scheduleGc()
                },
                onError: d,
                onFail: (c, u) => {
                    te(this, ge, Te).call(this, {
                        type: "failed",
                        failureCount: c,
                        error: u
                    })
                },
                onPause: () => {
                    te(this, ge, Te).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    te(this, ge, Te).call(this, {
                        type: "continue"
                    })
                },
                retry: i.options.retry,
                retryDelay: i.options.retryDelay,
                networkMode: i.options.networkMode,
                canRun: () => !0
            })), b(this, re).start()
        }
    }, gt = new WeakMap, $e = new WeakMap, de = new WeakMap, et = new WeakMap, re = new WeakMap, Ft = new WeakMap, tt = new WeakMap, ge = new WeakSet, Te = function(t) {
        const r = s => {
            switch (t.type) {
                case "failed":
                    return { ...s,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...s,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...s,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...s,
                        ...Wn(s.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    return O(this, $e, void 0), { ...s,
                        data: t.data,
                        dataUpdateCount: s.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const o = t.error;
                    return hr(o) && o.revert && b(this, $e) ? { ...b(this, $e),
                        fetchStatus: "idle"
                    } : { ...s,
                        error: o,
                        errorUpdateCount: s.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: s.fetchFailureCount + 1,
                        fetchFailureReason: o,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...s,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...s,
                        ...t.state
                    }
            }
        };
        this.state = r(this.state), oe.batch(() => {
            this.observers.forEach(s => {
                s.onQueryUpdate()
            }), b(this, de).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, Vs);

function Wn(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: no(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function Qn(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        r = t !== void 0,
        s = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? s ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var we, _s, Yn = (_s = class extends rr {
        constructor(t = {}) {
            super();
            F(this, we);
            this.config = t, O(this, we, new Map)
        }
        build(t, r, s) {
            const o = r.queryKey,
                n = r.queryHash ? ? Tr(o, r);
            let a = this.get(n);
            return a || (a = new Gn({
                client: t,
                queryKey: o,
                queryHash: n,
                options: t.defaultQueryOptions(r),
                state: s,
                defaultOptions: t.getQueryDefaults(o)
            }), this.add(a)), a
        }
        add(t) {
            b(this, we).has(t.queryHash) || (b(this, we).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const r = b(this, we).get(t.queryHash);
            r && (t.destroy(), r === t && b(this, we).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            oe.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return b(this, we).get(t)
        }
        getAll() {
            return [...b(this, we).values()]
        }
        find(t) {
            const r = {
                exact: !0,
                ...t
            };
            return this.getAll().find(s => Kr(r, s))
        }
        findAll(t = {}) {
            const r = this.getAll();
            return Object.keys(t).length > 0 ? r.filter(s => Kr(t, s)) : r
        }
        notify(t) {
            oe.batch(() => {
                this.listeners.forEach(r => {
                    r(t)
                })
            })
        }
        onFocus() {
            oe.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            oe.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, we = new WeakMap, _s),
    xe, se, rt, Ce, Le, Hs, Kn = (Hs = class extends lo {
        constructor(t) {
            super();
            F(this, Ce);
            F(this, xe);
            F(this, se);
            F(this, rt);
            this.mutationId = t.mutationId, O(this, se, t.mutationCache), O(this, xe, []), this.state = t.state || Jn(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            b(this, xe).includes(t) || (b(this, xe).push(t), this.clearGcTimeout(), b(this, se).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            O(this, xe, b(this, xe).filter(r => r !== t)), this.scheduleGc(), b(this, se).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            b(this, xe).length || (this.state.status === "pending" ? this.scheduleGc() : b(this, se).remove(this))
        }
        continue () {
            return b(this, rt) ? .continue() ? ? this.execute(this.state.variables)
        }
        async execute(t) {
            const r = () => {
                te(this, Ce, Le).call(this, {
                    type: "continue"
                })
            };
            O(this, rt, io({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (n, a) => {
                    te(this, Ce, Le).call(this, {
                        type: "failed",
                        failureCount: n,
                        error: a
                    })
                },
                onPause: () => {
                    te(this, Ce, Le).call(this, {
                        type: "pause"
                    })
                },
                onContinue: r,
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => b(this, se).canRun(this)
            }));
            const s = this.state.status === "pending",
                o = !b(this, rt).canStart();
            try {
                if (s) r();
                else {
                    te(this, Ce, Le).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: o
                    }), await b(this, se).config.onMutate ? .(t, this);
                    const a = await this.options.onMutate ? .(t);
                    a !== this.state.context && te(this, Ce, Le).call(this, {
                        type: "pending",
                        context: a,
                        variables: t,
                        isPaused: o
                    })
                }
                const n = await b(this, rt).start();
                return await b(this, se).config.onSuccess ? .(n, t, this.state.context, this), await this.options.onSuccess ? .(n, t, this.state.context), await b(this, se).config.onSettled ? .(n, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(n, null, t, this.state.context), te(this, Ce, Le).call(this, {
                    type: "success",
                    data: n
                }), n
            } catch (n) {
                try {
                    throw await b(this, se).config.onError ? .(n, t, this.state.context, this), await this.options.onError ? .(n, t, this.state.context), await b(this, se).config.onSettled ? .(void 0, n, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, n, t, this.state.context), n
                } finally {
                    te(this, Ce, Le).call(this, {
                        type: "error",
                        error: n
                    })
                }
            } finally {
                b(this, se).runNext(this)
            }
        }
    }, xe = new WeakMap, se = new WeakMap, rt = new WeakMap, Ce = new WeakSet, Le = function(t) {
        const r = s => {
            switch (t.type) {
                case "failed":
                    return { ...s,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...s,
                        isPaused: !0
                    };
                case "continue":
                    return { ...s,
                        isPaused: !1
                    };
                case "pending":
                    return { ...s,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...s,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...s,
                        data: void 0,
                        error: t.error,
                        failureCount: s.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = r(this.state), oe.batch(() => {
            b(this, xe).forEach(s => {
                s.onMutationUpdate(t)
            }), b(this, se).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, Hs);

function Jn() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var ke, be, Lt, Xs, Zn = (Xs = class extends rr {
    constructor(t = {}) {
        super();
        F(this, ke);
        F(this, be);
        F(this, Lt);
        this.config = t, O(this, ke, new Set), O(this, be, new Map), O(this, Lt, 0)
    }
    build(t, r, s) {
        const o = new Kn({
            mutationCache: this,
            mutationId: ++qt(this, Lt)._,
            options: t.defaultMutationOptions(r),
            state: s
        });
        return this.add(o), o
    }
    add(t) {
        b(this, ke).add(t);
        const r = Vt(t);
        if (typeof r == "string") {
            const s = b(this, be).get(r);
            s ? s.push(t) : b(this, be).set(r, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (b(this, ke).delete(t)) {
            const r = Vt(t);
            if (typeof r == "string") {
                const s = b(this, be).get(r);
                if (s)
                    if (s.length > 1) {
                        const o = s.indexOf(t);
                        o !== -1 && s.splice(o, 1)
                    } else s[0] === t && b(this, be).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const r = Vt(t);
        if (typeof r == "string") {
            const o = b(this, be).get(r) ? .find(n => n.state.status === "pending");
            return !o || o === t
        } else return !0
    }
    runNext(t) {
        const r = Vt(t);
        return typeof r == "string" ? b(this, be).get(r) ? .find(o => o !== t && o.state.isPaused) ? .continue() ? ? Promise.resolve() : Promise.resolve()
    }
    clear() {
        oe.batch(() => {
            b(this, ke).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }), b(this, ke).clear(), b(this, be).clear()
        })
    }
    getAll() {
        return Array.from(b(this, ke))
    }
    find(t) {
        const r = {
            exact: !0,
            ...t
        };
        return this.getAll().find(s => Jr(r, s))
    }
    findAll(t = {}) {
        return this.getAll().filter(r => Jr(t, r))
    }
    notify(t) {
        oe.batch(() => {
            this.listeners.forEach(r => {
                r(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(r => r.state.isPaused);
        return oe.batch(() => Promise.all(t.map(r => r.continue().catch(me))))
    }
}, ke = new WeakMap, be = new WeakMap, Lt = new WeakMap, Xs);

function Vt(e) {
    return e.options.scope ? .id
}

function es(e) {
    return {
        onFetch: (t, r) => {
            const s = t.options,
                o = t.fetchOptions ? .meta ? .fetchMore ? .direction,
                n = t.state.data ? .pages || [],
                a = t.state.data ? .pageParams || [];
            let i = {
                    pages: [],
                    pageParams: []
                },
                d = 0;
            const c = async () => {
                let u = !1;
                const f = g => {
                        Object.defineProperty(g, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? u = !0 : t.signal.addEventListener("abort", () => {
                                u = !0
                            }), t.signal)
                        })
                    },
                    m = so(t.options, t.fetchOptions),
                    l = async (g, p, v) => {
                        if (u) return Promise.reject();
                        if (p == null && g.pages.length) return Promise.resolve(g);
                        const C = (() => {
                                const j = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: p,
                                    direction: v ? "backward" : "forward",
                                    meta: t.options.meta
                                };
                                return f(j), j
                            })(),
                            A = await m(C),
                            {
                                maxPages: E
                            } = t.options,
                            S = v ? In : Ln;
                        return {
                            pages: S(g.pages, A, E),
                            pageParams: S(g.pageParams, p, E)
                        }
                    };
                if (o && n.length) {
                    const g = o === "backward",
                        p = g ? $n : ts,
                        v = {
                            pages: n,
                            pageParams: a
                        },
                        w = p(s, v);
                    i = await l(v, w, g)
                } else {
                    const g = e ? ? n.length;
                    do {
                        const p = d === 0 ? a[0] ? ? s.initialPageParam : ts(s, i);
                        if (d > 0 && p == null) break;
                        i = await l(i, p), d++
                    } while (d < g)
                }
                return i
            };
            t.options.persister ? t.fetchFn = () => t.options.persister ? .(c, {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal
            }, r) : t.fetchFn = c
        }
    }
}

function ts(e, {
    pages: t,
    pageParams: r
}) {
    const s = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[s], t, r[s], r) : void 0
}

function $n(e, {
    pages: t,
    pageParams: r
}) {
    return t.length > 0 ? e.getPreviousPageParam ? .(t[0], t, r[0], r) : void 0
}
var J, qe, Ve, bt, yt, _e, vt, wt, Gs, ea = (Gs = class {
        constructor(e = {}) {
            F(this, J);
            F(this, qe);
            F(this, Ve);
            F(this, bt);
            F(this, yt);
            F(this, _e);
            F(this, vt);
            F(this, wt);
            O(this, J, e.queryCache || new Yn), O(this, qe, e.mutationCache || new Zn), O(this, Ve, e.defaultOptions || {}), O(this, bt, new Map), O(this, yt, new Map), O(this, _e, 0)
        }
        mount() {
            qt(this, _e)._++, b(this, _e) === 1 && (O(this, vt, oo.subscribe(async e => {
                e && (await this.resumePausedMutations(), b(this, J).onFocus())
            })), O(this, wt, Yt.subscribe(async e => {
                e && (await this.resumePausedMutations(), b(this, J).onOnline())
            })))
        }
        unmount() {
            var e, t;
            qt(this, _e)._--, b(this, _e) === 0 && ((e = b(this, vt)) == null || e.call(this), O(this, vt, void 0), (t = b(this, wt)) == null || t.call(this), O(this, wt, void 0))
        }
        isFetching(e) {
            return b(this, J).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return b(this, qe).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return b(this, J).get(t.queryHash) ? .state.data
        }
        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e),
                r = b(this, J).build(this, t),
                s = r.state.data;
            return s === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(wr(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(s))
        }
        getQueriesData(e) {
            return b(this, J).findAll(e).map(({
                queryKey: t,
                state: r
            }) => {
                const s = r.data;
                return [t, s]
            })
        }
        setQueryData(e, t, r) {
            const s = this.defaultQueryOptions({
                    queryKey: e
                }),
                n = b(this, J).get(s.queryHash) ? .state.data,
                a = Nn(t, n);
            if (a !== void 0) return b(this, J).build(this, s).setData(a, { ...r,
                manual: !0
            })
        }
        setQueriesData(e, t, r) {
            return oe.batch(() => b(this, J).findAll(e).map(({
                queryKey: s
            }) => [s, this.setQueryData(s, t, r)]))
        }
        getQueryState(e) {
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return b(this, J).get(t.queryHash) ? .state
        }
        removeQueries(e) {
            const t = b(this, J);
            oe.batch(() => {
                t.findAll(e).forEach(r => {
                    t.remove(r)
                })
            })
        }
        resetQueries(e, t) {
            const r = b(this, J);
            return oe.batch(() => (r.findAll(e).forEach(s => {
                s.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, t)))
        }
        cancelQueries(e, t = {}) {
            const r = {
                    revert: !0,
                    ...t
                },
                s = oe.batch(() => b(this, J).findAll(e).map(o => o.cancel(r)));
            return Promise.all(s).then(me).catch(me)
        }
        invalidateQueries(e, t = {}) {
            return oe.batch(() => (b(this, J).findAll(e).forEach(r => {
                r.invalidate()
            }), e ? .refetchType === "none" ? Promise.resolve() : this.refetchQueries({ ...e,
                type: e ? .refetchType ? ? e ? .type ? ? "active"
            }, t)))
        }
        refetchQueries(e, t = {}) {
            const r = { ...t,
                    cancelRefetch: t.cancelRefetch ? ? !0
                },
                s = oe.batch(() => b(this, J).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
                    let n = o.fetch(void 0, r);
                    return r.throwOnError || (n = n.catch(me)), o.state.fetchStatus === "paused" ? Promise.resolve() : n
                }));
            return Promise.all(s).then(me)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const r = b(this, J).build(this, t);
            return r.isStaleByTime(wr(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(me).catch(me)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = es(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(me).catch(me)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = es(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return Yt.isOnline() ? b(this, qe).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return b(this, J)
        }
        getMutationCache() {
            return b(this, qe)
        }
        getDefaultOptions() {
            return b(this, Ve)
        }
        setDefaultOptions(e) {
            O(this, Ve, e)
        }
        setQueryDefaults(e, t) {
            b(this, bt).set(Dt(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...b(this, bt).values()],
                r = {};
            return t.forEach(s => {
                Mt(e, s.queryKey) && Object.assign(r, s.defaultOptions)
            }), r
        }
        setMutationDefaults(e, t) {
            b(this, yt).set(Dt(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...b(this, yt).values()],
                r = {};
            return t.forEach(s => {
                Mt(e, s.mutationKey) && Object.assign(r, s.defaultOptions)
            }), r
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...b(this, Ve).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = Tr(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === kr && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e ? ._defaulted ? e : { ...b(this, Ve).mutations,
                ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted : !0
            }
        }
        clear() {
            b(this, J).clear(), b(this, qe).clear()
        }
    }, J = new WeakMap, qe = new WeakMap, Ve = new WeakMap, bt = new WeakMap, yt = new WeakMap, _e = new WeakMap, vt = new WeakMap, wt = new WeakMap, Gs),
    ta = y.createContext(void 0),
    ra = ({
        client: e,
        children: t
    }) => (y.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), h.jsx(ta.Provider, {
        value: e,
        children: t
    })),
    rs = ["light", "dark"],
    sa = "(prefers-color-scheme: dark)",
    oa = y.createContext(void 0),
    na = {
        setTheme: e => {},
        themes: []
    },
    aa = () => {
        var e;
        return (e = y.useContext(oa)) != null ? e : na
    };
y.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: r,
    enableSystem: s,
    enableColorScheme: o,
    defaultTheme: n,
    value: a,
    attrs: i,
    nonce: d
}) => {
    let c = n === "system",
        u = r === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map(g=>`'${g}'`).join(",")})`};` : `var d=document.documentElement,n='${r}',s='setAttribute';`,
        f = o ? rs.includes(n) && n ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${n}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        m = (g, p = !1, v = !0) => {
            let w = a ? a[g] : g,
                C = p ? g + "|| ''" : `'${w}'`,
                A = "";
            return o && v && !p && rs.includes(g) && (A += `d.style.colorScheme = '${g}';`), r === "class" ? p || w ? A += `c.add(${C})` : A += "null" : w && (A += `d[s](n,${C})`), A
        },
        l = e ? `!function(){${u}${m(e)}}()` : s ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${sa}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${m(a?"x[e]":"e",!0)}}${c?"":"else{"+m(n,!1,!1)+"}"}${f}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${m(a?"x[e]":"e",!0)}}else{${m(n,!1,!1)};}${f}}catch(t){}}();`;
    return y.createElement("script", {
        nonce: d,
        dangerouslySetInnerHTML: {
            __html: l
        }
    })
});
var ia = e => {
        switch (e) {
            case "success":
                return da;
            case "info":
                return fa;
            case "warning":
                return ua;
            case "error":
                return ha;
            default:
                return null
        }
    },
    la = Array(12).fill(0),
    ca = ({
        visible: e,
        className: t
    }) => x.createElement("div", {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e
    }, x.createElement("div", {
        className: "sonner-spinner"
    }, la.map((r, s) => x.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${s}`
    })))),
    da = x.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, x.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    ua = x.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, x.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    fa = x.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, x.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    ha = x.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, x.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    pa = x.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, x.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), x.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    ma = () => {
        let [e, t] = x.useState(document.hidden);
        return x.useEffect(() => {
            let r = () => {
                t(document.hidden)
            };
            return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r)
        }, []), e
    },
    Cr = 1,
    ga = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                var t;
                let {
                    message: r,
                    ...s
                } = e, o = typeof e ? .id == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Cr++, n = this.toasts.find(i => i.id === o), a = e.dismissible === void 0 ? !0 : e.dismissible;
                return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), n ? this.toasts = this.toasts.map(i => i.id === o ? (this.publish({ ...i,
                    ...e,
                    id: o,
                    title: r
                }), { ...i,
                    ...e,
                    id: o,
                    dismissible: a,
                    title: r
                }) : i) : this.addToast({
                    title: r,
                    ...s,
                    dismissible: a,
                    id: o
                }), o
            }, this.dismiss = e => (this.dismissedToasts.add(e), e || this.toasts.forEach(t => {
                this.subscribers.forEach(r => r({
                    id: t.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(t => t({
                id: e,
                dismiss: !0
            })), e), this.message = (e, t) => this.create({ ...t,
                message: e
            }), this.error = (e, t) => this.create({ ...t,
                message: e,
                type: "error"
            }), this.success = (e, t) => this.create({ ...t,
                type: "success",
                message: e
            }), this.info = (e, t) => this.create({ ...t,
                type: "info",
                message: e
            }), this.warning = (e, t) => this.create({ ...t,
                type: "warning",
                message: e
            }), this.loading = (e, t) => this.create({ ...t,
                type: "loading",
                message: e
            }), this.promise = (e, t) => {
                if (!t) return;
                let r;
                t.loading !== void 0 && (r = this.create({ ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description: typeof t.description != "function" ? t.description : void 0
                }));
                let s = e instanceof Promise ? e : e(),
                    o = r !== void 0,
                    n, a = s.then(async d => {
                        if (n = ["resolve", d], x.isValidElement(d)) o = !1, this.create({
                            id: r,
                            type: "default",
                            message: d
                        });
                        else if (ya(d) && !d.ok) {
                            o = !1;
                            let c = typeof t.error == "function" ? await t.error(`HTTP error! status: ${d.status}`) : t.error,
                                u = typeof t.description == "function" ? await t.description(`HTTP error! status: ${d.status}`) : t.description;
                            this.create({
                                id: r,
                                type: "error",
                                message: c,
                                description: u
                            })
                        } else if (t.success !== void 0) {
                            o = !1;
                            let c = typeof t.success == "function" ? await t.success(d) : t.success,
                                u = typeof t.description == "function" ? await t.description(d) : t.description;
                            this.create({
                                id: r,
                                type: "success",
                                message: c,
                                description: u
                            })
                        }
                    }).catch(async d => {
                        if (n = ["reject", d], t.error !== void 0) {
                            o = !1;
                            let c = typeof t.error == "function" ? await t.error(d) : t.error,
                                u = typeof t.description == "function" ? await t.description(d) : t.description;
                            this.create({
                                id: r,
                                type: "error",
                                message: c,
                                description: u
                            })
                        }
                    }).finally(() => {
                        var d;
                        o && (this.dismiss(r), r = void 0), (d = t.finally) == null || d.call(t)
                    }),
                    i = () => new Promise((d, c) => a.then(() => n[0] === "reject" ? c(n[1]) : d(n[1])).catch(c));
                return typeof r != "string" && typeof r != "number" ? {
                    unwrap: i
                } : Object.assign(r, {
                    unwrap: i
                })
            }, this.custom = (e, t) => {
                let r = t ? .id || Cr++;
                return this.create({
                    jsx: e(r),
                    id: r,
                    ...t
                }), r
            }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
        }
    },
    ae = new ga,
    ba = (e, t) => {
        let r = t ? .id || Cr++;
        return ae.addToast({
            title: e,
            ...t,
            id: r
        }), r
    },
    ya = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    va = ba,
    wa = () => ae.toasts,
    xa = () => ae.getActiveToasts(),
    Zd = Object.assign(va, {
        success: ae.success,
        info: ae.info,
        warning: ae.warning,
        error: ae.error,
        custom: ae.custom,
        message: ae.message,
        promise: ae.promise,
        dismiss: ae.dismiss,
        loading: ae.loading
    }, {
        getHistory: wa,
        getToasts: xa
    });

function Ca(e, {
    insertAt: t
} = {}) {
    if (typeof document > "u") return;
    let r = document.head || document.getElementsByTagName("head")[0],
        s = document.createElement("style");
    s.type = "text/css", t === "top" && r.firstChild ? r.insertBefore(s, r.firstChild) : r.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e))
}
Ca(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function _t(e) {
    return e.label !== void 0
}
var Aa = 3,
    Ea = "32px",
    Pa = "16px",
    ss = 4e3,
    Sa = 356,
    Ra = 14,
    Ta = 20,
    ka = 200;

function pe(...e) {
    return e.filter(Boolean).join(" ")
}

function Oa(e) {
    let [t, r] = e.split("-"), s = [];
    return t && s.push(t), r && s.push(r), s
}
var ja = e => {
    var t, r, s, o, n, a, i, d, c, u, f;
    let {
        invert: m,
        toast: l,
        unstyled: g,
        interacting: p,
        setHeights: v,
        visibleToasts: w,
        heights: C,
        index: A,
        toasts: E,
        expanded: S,
        removeToast: j,
        defaultRichColors: D,
        closeButton: X,
        style: K,
        cancelButtonStyle: H,
        actionButtonStyle: Q,
        className: R = "",
        descriptionClassName: q = "",
        duration: M,
        position: Z,
        gap: z,
        loadingIcon: B,
        expandByDefault: T,
        classNames: P,
        icons: V,
        closeButtonAriaLabel: $ = "Close toast",
        pauseWhenPageIsHidden: L
    } = e, [_, G] = x.useState(null), [ee, Ne] = x.useState(null), [I, nt] = x.useState(!1), [Ge, at] = x.useState(!1), [We, St] = x.useState(!1), [Qe, $o] = x.useState(!1), [en, Ur] = x.useState(!1), [tn, cr] = x.useState(0), [rn, qr] = x.useState(0), Rt = x.useRef(l.duration || M || ss), Vr = x.useRef(null), Ye = x.useRef(null), sn = A === 0, on = A + 1 <= w, ce = l.type, it = l.dismissible !== !1, nn = l.className || "", an = l.descriptionClassName || "", Ut = x.useMemo(() => C.findIndex(k => k.toastId === l.id) || 0, [C, l.id]), ln = x.useMemo(() => {
        var k;
        return (k = l.closeButton) != null ? k : X
    }, [l.closeButton, X]), _r = x.useMemo(() => l.duration || M || ss, [l.duration, M]), dr = x.useRef(0), lt = x.useRef(0), Hr = x.useRef(0), ct = x.useRef(null), [cn, dn] = Z.split("-"), Xr = x.useMemo(() => C.reduce((k, U, Y) => Y >= Ut ? k : k + U.height, 0), [C, Ut]), Gr = ma(), un = l.invert || m, ur = ce === "loading";
    lt.current = x.useMemo(() => Ut * z + Xr, [Ut, Xr]), x.useEffect(() => {
        Rt.current = _r
    }, [_r]), x.useEffect(() => {
        nt(!0)
    }, []), x.useEffect(() => {
        let k = Ye.current;
        if (k) {
            let U = k.getBoundingClientRect().height;
            return qr(U), v(Y => [{
                toastId: l.id,
                height: U,
                position: l.position
            }, ...Y]), () => v(Y => Y.filter(ue => ue.toastId !== l.id))
        }
    }, [v, l.id]), x.useLayoutEffect(() => {
        if (!I) return;
        let k = Ye.current,
            U = k.style.height;
        k.style.height = "auto";
        let Y = k.getBoundingClientRect().height;
        k.style.height = U, qr(Y), v(ue => ue.find(fe => fe.toastId === l.id) ? ue.map(fe => fe.toastId === l.id ? { ...fe,
            height: Y
        } : fe) : [{
            toastId: l.id,
            height: Y,
            position: l.position
        }, ...ue])
    }, [I, l.title, l.description, v, l.id]);
    let De = x.useCallback(() => {
        at(!0), cr(lt.current), v(k => k.filter(U => U.toastId !== l.id)), setTimeout(() => {
            j(l)
        }, ka)
    }, [l, j, v, lt]);
    x.useEffect(() => {
        if (l.promise && ce === "loading" || l.duration === 1 / 0 || l.type === "loading") return;
        let k;
        return S || p || L && Gr ? (() => {
            if (Hr.current < dr.current) {
                let U = new Date().getTime() - dr.current;
                Rt.current = Rt.current - U
            }
            Hr.current = new Date().getTime()
        })() : Rt.current !== 1 / 0 && (dr.current = new Date().getTime(), k = setTimeout(() => {
            var U;
            (U = l.onAutoClose) == null || U.call(l, l), De()
        }, Rt.current)), () => clearTimeout(k)
    }, [S, p, l, ce, L, Gr, De]), x.useEffect(() => {
        l.delete && De()
    }, [De, l.delete]);

    function fn() {
        var k, U, Y;
        return V != null && V.loading ? x.createElement("div", {
            className: pe(P ? .loader, (k = l ? .classNames) == null ? void 0 : k.loader, "sonner-loader"),
            "data-visible": ce === "loading"
        }, V.loading) : B ? x.createElement("div", {
            className: pe(P ? .loader, (U = l ? .classNames) == null ? void 0 : U.loader, "sonner-loader"),
            "data-visible": ce === "loading"
        }, B) : x.createElement(ca, {
            className: pe(P ? .loader, (Y = l ? .classNames) == null ? void 0 : Y.loader),
            visible: ce === "loading"
        })
    }
    return x.createElement("li", {
        tabIndex: 0,
        ref: Ye,
        className: pe(R, nn, P ? .toast, (t = l ? .classNames) == null ? void 0 : t.toast, P ? .default, P ? .[ce], (r = l ? .classNames) == null ? void 0 : r[ce]),
        "data-sonner-toast": "",
        "data-rich-colors": (s = l.richColors) != null ? s : D,
        "data-styled": !(l.jsx || l.unstyled || g),
        "data-mounted": I,
        "data-promise": !!l.promise,
        "data-swiped": en,
        "data-removed": Ge,
        "data-visible": on,
        "data-y-position": cn,
        "data-x-position": dn,
        "data-index": A,
        "data-front": sn,
        "data-swiping": We,
        "data-dismissible": it,
        "data-type": ce,
        "data-invert": un,
        "data-swipe-out": Qe,
        "data-swipe-direction": ee,
        "data-expanded": !!(S || T && I),
        style: {
            "--index": A,
            "--toasts-before": A,
            "--z-index": E.length - A,
            "--offset": `${Ge?tn:lt.current}px`,
            "--initial-height": T ? "auto" : `${rn}px`,
            ...K,
            ...l.style
        },
        onDragEnd: () => {
            St(!1), G(null), ct.current = null
        },
        onPointerDown: k => {
            ur || !it || (Vr.current = new Date, cr(lt.current), k.target.setPointerCapture(k.pointerId), k.target.tagName !== "BUTTON" && (St(!0), ct.current = {
                x: k.clientX,
                y: k.clientY
            }))
        },
        onPointerUp: () => {
            var k, U, Y, ue;
            if (Qe || !it) return;
            ct.current = null;
            let fe = Number(((k = Ye.current) == null ? void 0 : k.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                Me = Number(((U = Ye.current) == null ? void 0 : U.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                Ke = new Date().getTime() - ((Y = Vr.current) == null ? void 0 : Y.getTime()),
                he = _ === "x" ? fe : Me,
                ze = Math.abs(he) / Ke;
            if (Math.abs(he) >= Ta || ze > .11) {
                cr(lt.current), (ue = l.onDismiss) == null || ue.call(l, l), Ne(_ === "x" ? fe > 0 ? "right" : "left" : Me > 0 ? "down" : "up"), De(), $o(!0), Ur(!1);
                return
            }
            St(!1), G(null)
        },
        onPointerMove: k => {
            var U, Y, ue, fe;
            if (!ct.current || !it || ((U = window.getSelection()) == null ? void 0 : U.toString().length) > 0) return;
            let Me = k.clientY - ct.current.y,
                Ke = k.clientX - ct.current.x,
                he = (Y = e.swipeDirections) != null ? Y : Oa(Z);
            !_ && (Math.abs(Ke) > 1 || Math.abs(Me) > 1) && G(Math.abs(Ke) > Math.abs(Me) ? "x" : "y");
            let ze = {
                x: 0,
                y: 0
            };
            _ === "y" ? (he.includes("top") || he.includes("bottom")) && (he.includes("top") && Me < 0 || he.includes("bottom") && Me > 0) && (ze.y = Me) : _ === "x" && (he.includes("left") || he.includes("right")) && (he.includes("left") && Ke < 0 || he.includes("right") && Ke > 0) && (ze.x = Ke), (Math.abs(ze.x) > 0 || Math.abs(ze.y) > 0) && Ur(!0), (ue = Ye.current) == null || ue.style.setProperty("--swipe-amount-x", `${ze.x}px`), (fe = Ye.current) == null || fe.style.setProperty("--swipe-amount-y", `${ze.y}px`)
        }
    }, ln && !l.jsx ? x.createElement("button", {
        "aria-label": $,
        "data-disabled": ur,
        "data-close-button": !0,
        onClick: ur || !it ? () => {} : () => {
            var k;
            De(), (k = l.onDismiss) == null || k.call(l, l)
        },
        className: pe(P ? .closeButton, (o = l ? .classNames) == null ? void 0 : o.closeButton)
    }, (n = V ? .close) != null ? n : pa) : null, l.jsx || y.isValidElement(l.title) ? l.jsx ? l.jsx : typeof l.title == "function" ? l.title() : l.title : x.createElement(x.Fragment, null, ce || l.icon || l.promise ? x.createElement("div", {
        "data-icon": "",
        className: pe(P ? .icon, (a = l ? .classNames) == null ? void 0 : a.icon)
    }, l.promise || l.type === "loading" && !l.icon ? l.icon || fn() : null, l.type !== "loading" ? l.icon || V ? .[ce] || ia(ce) : null) : null, x.createElement("div", {
        "data-content": "",
        className: pe(P ? .content, (i = l ? .classNames) == null ? void 0 : i.content)
    }, x.createElement("div", {
        "data-title": "",
        className: pe(P ? .title, (d = l ? .classNames) == null ? void 0 : d.title)
    }, typeof l.title == "function" ? l.title() : l.title), l.description ? x.createElement("div", {
        "data-description": "",
        className: pe(q, an, P ? .description, (c = l ? .classNames) == null ? void 0 : c.description)
    }, typeof l.description == "function" ? l.description() : l.description) : null), y.isValidElement(l.cancel) ? l.cancel : l.cancel && _t(l.cancel) ? x.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: l.cancelButtonStyle || H,
        onClick: k => {
            var U, Y;
            _t(l.cancel) && it && ((Y = (U = l.cancel).onClick) == null || Y.call(U, k), De())
        },
        className: pe(P ? .cancelButton, (u = l ? .classNames) == null ? void 0 : u.cancelButton)
    }, l.cancel.label) : null, y.isValidElement(l.action) ? l.action : l.action && _t(l.action) ? x.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: l.actionButtonStyle || Q,
        onClick: k => {
            var U, Y;
            _t(l.action) && ((Y = (U = l.action).onClick) == null || Y.call(U, k), !k.defaultPrevented && De())
        },
        className: pe(P ? .actionButton, (f = l ? .classNames) == null ? void 0 : f.actionButton)
    }, l.action.label) : null))
};

function os() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}

function Na(e, t) {
    let r = {};
    return [e, t].forEach((s, o) => {
        let n = o === 1,
            a = n ? "--mobile-offset" : "--offset",
            i = n ? Pa : Ea;

        function d(c) {
            ["top", "right", "bottom", "left"].forEach(u => {
                r[`${a}-${u}`] = typeof c == "number" ? `${c}px` : c
            })
        }
        typeof s == "number" || typeof s == "string" ? d(s) : typeof s == "object" ? ["top", "right", "bottom", "left"].forEach(c => {
            s[c] === void 0 ? r[`${a}-${c}`] = i : r[`${a}-${c}`] = typeof s[c] == "number" ? `${s[c]}px` : s[c]
        }) : d(i)
    }), r
}
var Da = y.forwardRef(function(e, t) {
    let {
        invert: r,
        position: s = "bottom-right",
        hotkey: o = ["altKey", "KeyT"],
        expand: n,
        closeButton: a,
        className: i,
        offset: d,
        mobileOffset: c,
        theme: u = "light",
        richColors: f,
        duration: m,
        style: l,
        visibleToasts: g = Aa,
        toastOptions: p,
        dir: v = os(),
        gap: w = Ra,
        loadingIcon: C,
        icons: A,
        containerAriaLabel: E = "Notifications",
        pauseWhenPageIsHidden: S
    } = e, [j, D] = x.useState([]), X = x.useMemo(() => Array.from(new Set([s].concat(j.filter(L => L.position).map(L => L.position)))), [j, s]), [K, H] = x.useState([]), [Q, R] = x.useState(!1), [q, M] = x.useState(!1), [Z, z] = x.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), B = x.useRef(null), T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), P = x.useRef(null), V = x.useRef(!1), $ = x.useCallback(L => {
        D(_ => {
            var G;
            return (G = _.find(ee => ee.id === L.id)) != null && G.delete || ae.dismiss(L.id), _.filter(({
                id: ee
            }) => ee !== L.id)
        })
    }, []);
    return x.useEffect(() => ae.subscribe(L => {
        if (L.dismiss) {
            D(_ => _.map(G => G.id === L.id ? { ...G,
                delete: !0
            } : G));
            return
        }
        setTimeout(() => {
            hn.flushSync(() => {
                D(_ => {
                    let G = _.findIndex(ee => ee.id === L.id);
                    return G !== -1 ? [..._.slice(0, G), { ..._[G],
                        ...L
                    }, ..._.slice(G + 1)] : [L, ..._]
                })
            })
        })
    }), []), x.useEffect(() => {
        if (u !== "system") {
            z(u);
            return
        }
        if (u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")), typeof window > "u") return;
        let L = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            L.addEventListener("change", ({
                matches: _
            }) => {
                z(_ ? "dark" : "light")
            })
        } catch {
            L.addListener(({
                matches: G
            }) => {
                try {
                    z(G ? "dark" : "light")
                } catch (ee) {
                    console.error(ee)
                }
            })
        }
    }, [u]), x.useEffect(() => {
        j.length <= 1 && R(!1)
    }, [j]), x.useEffect(() => {
        let L = _ => {
            var G, ee;
            o.every(Ne => _[Ne] || _.code === Ne) && (R(!0), (G = B.current) == null || G.focus()), _.code === "Escape" && (document.activeElement === B.current || (ee = B.current) != null && ee.contains(document.activeElement)) && R(!1)
        };
        return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L)
    }, [o]), x.useEffect(() => {
        if (B.current) return () => {
            P.current && (P.current.focus({
                preventScroll: !0
            }), P.current = null, V.current = !1)
        }
    }, [B.current]), x.createElement("section", {
        ref: t,
        "aria-label": `${E} ${T}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, X.map((L, _) => {
        var G;
        let [ee, Ne] = L.split("-");
        return j.length ? x.createElement("ol", {
            key: L,
            dir: v === "auto" ? os() : v,
            tabIndex: -1,
            ref: B,
            className: i,
            "data-sonner-toaster": !0,
            "data-theme": Z,
            "data-y-position": ee,
            "data-lifted": Q && j.length > 1 && !n,
            "data-x-position": Ne,
            style: {
                "--front-toast-height": `${((G=K[0])==null?void 0:G.height)||0}px`,
                "--width": `${Sa}px`,
                "--gap": `${w}px`,
                ...l,
                ...Na(d, c)
            },
            onBlur: I => {
                V.current && !I.currentTarget.contains(I.relatedTarget) && (V.current = !1, P.current && (P.current.focus({
                    preventScroll: !0
                }), P.current = null))
            },
            onFocus: I => {
                I.target instanceof HTMLElement && I.target.dataset.dismissible === "false" || V.current || (V.current = !0, P.current = I.relatedTarget)
            },
            onMouseEnter: () => R(!0),
            onMouseMove: () => R(!0),
            onMouseLeave: () => {
                q || R(!1)
            },
            onDragEnd: () => R(!1),
            onPointerDown: I => {
                I.target instanceof HTMLElement && I.target.dataset.dismissible === "false" || M(!0)
            },
            onPointerUp: () => M(!1)
        }, j.filter(I => !I.position && _ === 0 || I.position === L).map((I, nt) => {
            var Ge, at;
            return x.createElement(ja, {
                key: I.id,
                icons: A,
                index: nt,
                toast: I,
                defaultRichColors: f,
                duration: (Ge = p ? .duration) != null ? Ge : m,
                className: p ? .className,
                descriptionClassName: p ? .descriptionClassName,
                invert: r,
                visibleToasts: g,
                closeButton: (at = p ? .closeButton) != null ? at : a,
                interacting: q,
                position: L,
                style: p ? .style,
                unstyled: p ? .unstyled,
                classNames: p ? .classNames,
                cancelButtonStyle: p ? .cancelButtonStyle,
                actionButtonStyle: p ? .actionButtonStyle,
                removeToast: $,
                toasts: j.filter(We => We.position == I.position),
                heights: K.filter(We => We.position == I.position),
                setHeights: H,
                expandByDefault: n,
                gap: w,
                loadingIcon: C,
                expanded: Q,
                pauseWhenPageIsHidden: S,
                swipeDirections: e.swipeDirections
            })
        })) : null
    }))
});
const Ma = ({ ...e
    }) => {
        const {
            theme: t = "system"
        } = aa();
        return h.jsx(Da, {
            theme: t,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                }
            },
            ...e
        })
    },
    za = 1,
    Ba = 1e6;
let pr = 0;

function Fa() {
    return pr = (pr + 1) % Number.MAX_SAFE_INTEGER, pr.toString()
}
const mr = new Map,
    ns = e => {
        if (mr.has(e)) return;
        const t = setTimeout(() => {
            mr.delete(e), Nt({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, Ba);
        mr.set(e, t)
    },
    La = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, za)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(r => r.id === t.toast.id ? { ...r,
                        ...t.toast
                    } : r)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: r
                    } = t;
                    return r ? ns(r) : e.toasts.forEach(s => {
                        ns(s.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(s => s.id === r || r === void 0 ? { ...s,
                            open: !1
                        } : s)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(r => r.id !== t.toastId)
                }
        }
    },
    Gt = [];
let Wt = {
    toasts: []
};

function Nt(e) {
    Wt = La(Wt, e), Gt.forEach(t => {
        t(Wt)
    })
}

function Ia({ ...e
}) {
    const t = Fa(),
        r = o => Nt({
            type: "UPDATE_TOAST",
            toast: { ...o,
                id: t
            }
        }),
        s = () => Nt({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return Nt({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || s()
            }
        }
    }), {
        id: t,
        dismiss: s,
        update: r
    }
}

function Ua() {
    const [e, t] = y.useState(Wt);
    return y.useEffect(() => (Gt.push(t), () => {
        const r = Gt.indexOf(t);
        r > -1 && Gt.splice(r, 1)
    }), [e]), { ...e,
        toast: Ia,
        dismiss: r => Nt({
            type: "DISMISS_TOAST",
            toastId: r
        })
    }
}

function co(e) {
    var t, r, s = "";
    if (typeof e == "string" || typeof e == "number") s += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (r = co(e[t])) && (s && (s += " "), s += r)
        } else
            for (r in e) e[r] && (s && (s += " "), s += r);
    return s
}

function uo() {
    for (var e, t, r = 0, s = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = co(e)) && (s && (s += " "), s += t);
    return s
}
const as = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    is = uo,
    qa = (e, t) => r => {
        var s;
        if (t ? .variants == null) return is(e, r ? .class, r ? .className);
        const {
            variants: o,
            defaultVariants: n
        } = t, a = Object.keys(o).map(c => {
            const u = r ? .[c],
                f = n ? .[c];
            if (u === null) return null;
            const m = as(u) || as(f);
            return o[c][m]
        }), i = r && Object.entries(r).reduce((c, u) => {
            let [f, m] = u;
            return m === void 0 || (c[f] = m), c
        }, {}), d = t == null || (s = t.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((c, u) => {
            let {
                class: f,
                className: m,
                ...l
            } = u;
            return Object.entries(l).every(g => {
                let [p, v] = g;
                return Array.isArray(v) ? v.includes({ ...n,
                    ...i
                }[p]) : { ...n,
                    ...i
                }[p] === v
            }) ? [...c, f, m] : c
        }, []);
        return is(e, a, d, r ? .class, r ? .className)
    },
    Or = "-",
    Va = e => {
        const t = Ha(e),
            {
                conflictingClassGroups: r,
                conflictingClassGroupModifiers: s
            } = e;
        return {
            getClassGroupId: a => {
                const i = a.split(Or);
                return i[0] === "" && i.length !== 1 && i.shift(), fo(i, t) || _a(a)
            },
            getConflictingClassGroupIds: (a, i) => {
                const d = r[a] || [];
                return i && s[a] ? [...d, ...s[a]] : d
            }
        }
    },
    fo = (e, t) => {
        if (e.length === 0) return t.classGroupId;
        const r = e[0],
            s = t.nextPart.get(r),
            o = s ? fo(e.slice(1), s) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const n = e.join(Or);
        return t.validators.find(({
            validator: a
        }) => a(n)) ? .classGroupId
    },
    ls = /^\[(.+)\]$/,
    _a = e => {
        if (ls.test(e)) {
            const t = ls.exec(e)[1],
                r = t ? .substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r
        }
    },
    Ha = e => {
        const {
            theme: t,
            prefix: r
        } = e, s = {
            nextPart: new Map,
            validators: []
        };
        return Ga(Object.entries(e.classGroups), r).forEach(([n, a]) => {
            Ar(a, s, n, t)
        }), s
    },
    Ar = (e, t, r, s) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const n = o === "" ? t : cs(t, o);
                n.classGroupId = r;
                return
            }
            if (typeof o == "function") {
                if (Xa(o)) {
                    Ar(o(s), t, r, s);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: r
                });
                return
            }
            Object.entries(o).forEach(([n, a]) => {
                Ar(a, cs(t, n), r, s)
            })
        })
    },
    cs = (e, t) => {
        let r = e;
        return t.split(Or).forEach(s => {
            r.nextPart.has(s) || r.nextPart.set(s, {
                nextPart: new Map,
                validators: []
            }), r = r.nextPart.get(s)
        }), r
    },
    Xa = e => e.isThemeGetter,
    Ga = (e, t) => t ? e.map(([r, s]) => {
        const o = s.map(n => typeof n == "string" ? t + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([a, i]) => [t + a, i])) : n);
        return [r, o]
    }) : e,
    Wa = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            r = new Map,
            s = new Map;
        const o = (n, a) => {
            r.set(n, a), t++, t > e && (t = 0, s = r, r = new Map)
        };
        return {
            get(n) {
                let a = r.get(n);
                if (a !== void 0) return a;
                if ((a = s.get(n)) !== void 0) return o(n, a), a
            },
            set(n, a) {
                r.has(n) ? r.set(n, a) : o(n, a)
            }
        }
    },
    ho = "!",
    Qa = e => {
        const {
            separator: t,
            experimentalParseClassName: r
        } = e, s = t.length === 1, o = t[0], n = t.length, a = i => {
            const d = [];
            let c = 0,
                u = 0,
                f;
            for (let v = 0; v < i.length; v++) {
                let w = i[v];
                if (c === 0) {
                    if (w === o && (s || i.slice(v, v + n) === t)) {
                        d.push(i.slice(u, v)), u = v + n;
                        continue
                    }
                    if (w === "/") {
                        f = v;
                        continue
                    }
                }
                w === "[" ? c++ : w === "]" && c--
            }
            const m = d.length === 0 ? i : i.substring(u),
                l = m.startsWith(ho),
                g = l ? m.substring(1) : m,
                p = f && f > u ? f - u : void 0;
            return {
                modifiers: d,
                hasImportantModifier: l,
                baseClassName: g,
                maybePostfixModifierPosition: p
            }
        };
        return r ? i => r({
            className: i,
            parseClassName: a
        }) : a
    },
    Ya = e => {
        if (e.length <= 1) return e;
        const t = [];
        let r = [];
        return e.forEach(s => {
            s[0] === "[" ? (t.push(...r.sort(), s), r = []) : r.push(s)
        }), t.push(...r.sort()), t
    },
    Ka = e => ({
        cache: Wa(e.cacheSize),
        parseClassName: Qa(e),
        ...Va(e)
    }),
    Ja = /\s+/,
    Za = (e, t) => {
        const {
            parseClassName: r,
            getClassGroupId: s,
            getConflictingClassGroupIds: o
        } = t, n = [], a = e.trim().split(Ja);
        let i = "";
        for (let d = a.length - 1; d >= 0; d -= 1) {
            const c = a[d],
                {
                    modifiers: u,
                    hasImportantModifier: f,
                    baseClassName: m,
                    maybePostfixModifierPosition: l
                } = r(c);
            let g = !!l,
                p = s(g ? m.substring(0, l) : m);
            if (!p) {
                if (!g) {
                    i = c + (i.length > 0 ? " " + i : i);
                    continue
                }
                if (p = s(m), !p) {
                    i = c + (i.length > 0 ? " " + i : i);
                    continue
                }
                g = !1
            }
            const v = Ya(u).join(":"),
                w = f ? v + ho : v,
                C = w + p;
            if (n.includes(C)) continue;
            n.push(C);
            const A = o(p, g);
            for (let E = 0; E < A.length; ++E) {
                const S = A[E];
                n.push(w + S)
            }
            i = c + (i.length > 0 ? " " + i : i)
        }
        return i
    };

function $a() {
    let e = 0,
        t, r, s = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (r = po(t)) && (s && (s += " "), s += r);
    return s
}
const po = e => {
    if (typeof e == "string") return e;
    let t, r = "";
    for (let s = 0; s < e.length; s++) e[s] && (t = po(e[s])) && (r && (r += " "), r += t);
    return r
};

function ei(e, ...t) {
    let r, s, o, n = a;

    function a(d) {
        const c = t.reduce((u, f) => f(u), e());
        return r = Ka(c), s = r.cache.get, o = r.cache.set, n = i, i(d)
    }

    function i(d) {
        const c = s(d);
        if (c) return c;
        const u = Za(d, r);
        return o(d, u), u
    }
    return function() {
        return n($a.apply(null, arguments))
    }
}
const W = e => {
        const t = r => r[e] || [];
        return t.isThemeGetter = !0, t
    },
    mo = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    ti = /^\d+\/\d+$/,
    ri = new Set(["px", "full", "screen"]),
    si = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    oi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    ni = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    ai = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    ii = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Re = e => ut(e) || ri.has(e) || ti.test(e),
    Be = e => At(e, "length", mi),
    ut = e => !!e && !Number.isNaN(Number(e)),
    gr = e => At(e, "number", ut),
    Ot = e => !!e && Number.isInteger(Number(e)),
    li = e => e.endsWith("%") && ut(e.slice(0, -1)),
    N = e => mo.test(e),
    Fe = e => si.test(e),
    ci = new Set(["length", "size", "percentage"]),
    di = e => At(e, ci, go),
    ui = e => At(e, "position", go),
    fi = new Set(["image", "url"]),
    hi = e => At(e, fi, bi),
    pi = e => At(e, "", gi),
    jt = () => !0,
    At = (e, t, r) => {
        const s = mo.exec(e);
        return s ? s[1] ? typeof t == "string" ? s[1] === t : t.has(s[1]) : r(s[2]) : !1
    },
    mi = e => oi.test(e) && !ni.test(e),
    go = () => !1,
    gi = e => ai.test(e),
    bi = e => ii.test(e),
    yi = () => {
        const e = W("colors"),
            t = W("spacing"),
            r = W("blur"),
            s = W("brightness"),
            o = W("borderColor"),
            n = W("borderRadius"),
            a = W("borderSpacing"),
            i = W("borderWidth"),
            d = W("contrast"),
            c = W("grayscale"),
            u = W("hueRotate"),
            f = W("invert"),
            m = W("gap"),
            l = W("gradientColorStops"),
            g = W("gradientColorStopPositions"),
            p = W("inset"),
            v = W("margin"),
            w = W("opacity"),
            C = W("padding"),
            A = W("saturate"),
            E = W("scale"),
            S = W("sepia"),
            j = W("skew"),
            D = W("space"),
            X = W("translate"),
            K = () => ["auto", "contain", "none"],
            H = () => ["auto", "hidden", "clip", "visible", "scroll"],
            Q = () => ["auto", N, t],
            R = () => [N, t],
            q = () => ["", Re, Be],
            M = () => ["auto", ut, N],
            Z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            z = () => ["solid", "dashed", "dotted", "double", "none"],
            B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            P = () => ["", "0", N],
            V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            $ = () => [ut, N];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [jt],
                spacing: [Re, Be],
                blur: ["none", "", Fe, N],
                brightness: $(),
                borderColor: [e],
                borderRadius: ["none", "", "full", Fe, N],
                borderSpacing: R(),
                borderWidth: q(),
                contrast: $(),
                grayscale: P(),
                hueRotate: $(),
                invert: P(),
                gap: R(),
                gradientColorStops: [e],
                gradientColorStopPositions: [li, Be],
                inset: Q(),
                margin: Q(),
                opacity: $(),
                padding: R(),
                saturate: $(),
                scale: $(),
                sepia: P(),
                skew: $(),
                space: R(),
                translate: R()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", N]
                }],
                container: ["container"],
                columns: [{
                    columns: [Fe]
                }],
                "break-after": [{
                    "break-after": V()
                }],
                "break-before": [{
                    "break-before": V()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...Z(), N]
                }],
                overflow: [{
                    overflow: H()
                }],
                "overflow-x": [{
                    "overflow-x": H()
                }],
                "overflow-y": [{
                    "overflow-y": H()
                }],
                overscroll: [{
                    overscroll: K()
                }],
                "overscroll-x": [{
                    "overscroll-x": K()
                }],
                "overscroll-y": [{
                    "overscroll-y": K()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [p]
                }],
                "inset-x": [{
                    "inset-x": [p]
                }],
                "inset-y": [{
                    "inset-y": [p]
                }],
                start: [{
                    start: [p]
                }],
                end: [{
                    end: [p]
                }],
                top: [{
                    top: [p]
                }],
                right: [{
                    right: [p]
                }],
                bottom: [{
                    bottom: [p]
                }],
                left: [{
                    left: [p]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", Ot, N]
                }],
                basis: [{
                    basis: Q()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", N]
                }],
                grow: [{
                    grow: P()
                }],
                shrink: [{
                    shrink: P()
                }],
                order: [{
                    order: ["first", "last", "none", Ot, N]
                }],
                "grid-cols": [{
                    "grid-cols": [jt]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", Ot, N]
                    }, N]
                }],
                "col-start": [{
                    "col-start": M()
                }],
                "col-end": [{
                    "col-end": M()
                }],
                "grid-rows": [{
                    "grid-rows": [jt]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [Ot, N]
                    }, N]
                }],
                "row-start": [{
                    "row-start": M()
                }],
                "row-end": [{
                    "row-end": M()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", N]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", N]
                }],
                gap: [{
                    gap: [m]
                }],
                "gap-x": [{
                    "gap-x": [m]
                }],
                "gap-y": [{
                    "gap-y": [m]
                }],
                "justify-content": [{
                    justify: ["normal", ...T()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...T(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...T(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [C]
                }],
                px: [{
                    px: [C]
                }],
                py: [{
                    py: [C]
                }],
                ps: [{
                    ps: [C]
                }],
                pe: [{
                    pe: [C]
                }],
                pt: [{
                    pt: [C]
                }],
                pr: [{
                    pr: [C]
                }],
                pb: [{
                    pb: [C]
                }],
                pl: [{
                    pl: [C]
                }],
                m: [{
                    m: [v]
                }],
                mx: [{
                    mx: [v]
                }],
                my: [{
                    my: [v]
                }],
                ms: [{
                    ms: [v]
                }],
                me: [{
                    me: [v]
                }],
                mt: [{
                    mt: [v]
                }],
                mr: [{
                    mr: [v]
                }],
                mb: [{
                    mb: [v]
                }],
                ml: [{
                    ml: [v]
                }],
                "space-x": [{
                    "space-x": [D]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [D]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", N, t]
                }],
                "min-w": [{
                    "min-w": [N, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [N, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [Fe]
                    }, Fe]
                }],
                h: [{
                    h: [N, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [N, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", Fe, Be]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", gr]
                }],
                "font-family": [{
                    font: [jt]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", N]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", ut, gr]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Re, N]
                }],
                "list-image": [{
                    "list-image": ["none", N]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", N]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [w]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [w]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...z(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", Re, Be]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", Re, N]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: R()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", N]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", N]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [w]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...Z(), ui]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", di]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, hi]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [g]
                }],
                "gradient-via-pos": [{
                    via: [g]
                }],
                "gradient-to-pos": [{
                    to: [g]
                }],
                "gradient-from": [{
                    from: [l]
                }],
                "gradient-via": [{
                    via: [l]
                }],
                "gradient-to": [{
                    to: [l]
                }],
                rounded: [{
                    rounded: [n]
                }],
                "rounded-s": [{
                    "rounded-s": [n]
                }],
                "rounded-e": [{
                    "rounded-e": [n]
                }],
                "rounded-t": [{
                    "rounded-t": [n]
                }],
                "rounded-r": [{
                    "rounded-r": [n]
                }],
                "rounded-b": [{
                    "rounded-b": [n]
                }],
                "rounded-l": [{
                    "rounded-l": [n]
                }],
                "rounded-ss": [{
                    "rounded-ss": [n]
                }],
                "rounded-se": [{
                    "rounded-se": [n]
                }],
                "rounded-ee": [{
                    "rounded-ee": [n]
                }],
                "rounded-es": [{
                    "rounded-es": [n]
                }],
                "rounded-tl": [{
                    "rounded-tl": [n]
                }],
                "rounded-tr": [{
                    "rounded-tr": [n]
                }],
                "rounded-br": [{
                    "rounded-br": [n]
                }],
                "rounded-bl": [{
                    "rounded-bl": [n]
                }],
                "border-w": [{
                    border: [i]
                }],
                "border-w-x": [{
                    "border-x": [i]
                }],
                "border-w-y": [{
                    "border-y": [i]
                }],
                "border-w-s": [{
                    "border-s": [i]
                }],
                "border-w-e": [{
                    "border-e": [i]
                }],
                "border-w-t": [{
                    "border-t": [i]
                }],
                "border-w-r": [{
                    "border-r": [i]
                }],
                "border-w-b": [{
                    "border-b": [i]
                }],
                "border-w-l": [{
                    "border-l": [i]
                }],
                "border-opacity": [{
                    "border-opacity": [w]
                }],
                "border-style": [{
                    border: [...z(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [i]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [i]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [w]
                }],
                "divide-style": [{
                    divide: z()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-s": [{
                    "border-s": [o]
                }],
                "border-color-e": [{
                    "border-e": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...z()]
                }],
                "outline-offset": [{
                    "outline-offset": [Re, N]
                }],
                "outline-w": [{
                    outline: [Re, Be]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: q()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [w]
                }],
                "ring-offset-w": [{
                    "ring-offset": [Re, Be]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", Fe, pi]
                }],
                "shadow-color": [{
                    shadow: [jt]
                }],
                opacity: [{
                    opacity: [w]
                }],
                "mix-blend": [{
                    "mix-blend": [...B(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": B()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [r]
                }],
                brightness: [{
                    brightness: [s]
                }],
                contrast: [{
                    contrast: [d]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", Fe, N]
                }],
                grayscale: [{
                    grayscale: [c]
                }],
                "hue-rotate": [{
                    "hue-rotate": [u]
                }],
                invert: [{
                    invert: [f]
                }],
                saturate: [{
                    saturate: [A]
                }],
                sepia: [{
                    sepia: [S]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [r]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [s]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [d]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [c]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [u]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [f]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [w]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [A]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [S]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [a]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [a]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [a]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", N]
                }],
                duration: [{
                    duration: $()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", N]
                }],
                delay: [{
                    delay: $()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", N]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [E]
                }],
                "scale-x": [{
                    "scale-x": [E]
                }],
                "scale-y": [{
                    "scale-y": [E]
                }],
                rotate: [{
                    rotate: [Ot, N]
                }],
                "translate-x": [{
                    "translate-x": [X]
                }],
                "translate-y": [{
                    "translate-y": [X]
                }],
                "skew-x": [{
                    "skew-x": [j]
                }],
                "skew-y": [{
                    "skew-y": [j]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", N]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", N]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": R()
                }],
                "scroll-mx": [{
                    "scroll-mx": R()
                }],
                "scroll-my": [{
                    "scroll-my": R()
                }],
                "scroll-ms": [{
                    "scroll-ms": R()
                }],
                "scroll-me": [{
                    "scroll-me": R()
                }],
                "scroll-mt": [{
                    "scroll-mt": R()
                }],
                "scroll-mr": [{
                    "scroll-mr": R()
                }],
                "scroll-mb": [{
                    "scroll-mb": R()
                }],
                "scroll-ml": [{
                    "scroll-ml": R()
                }],
                "scroll-p": [{
                    "scroll-p": R()
                }],
                "scroll-px": [{
                    "scroll-px": R()
                }],
                "scroll-py": [{
                    "scroll-py": R()
                }],
                "scroll-ps": [{
                    "scroll-ps": R()
                }],
                "scroll-pe": [{
                    "scroll-pe": R()
                }],
                "scroll-pt": [{
                    "scroll-pt": R()
                }],
                "scroll-pr": [{
                    "scroll-pr": R()
                }],
                "scroll-pb": [{
                    "scroll-pb": R()
                }],
                "scroll-pl": [{
                    "scroll-pl": R()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", N]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [Re, Be, gr]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    vi = ei(yi);

function ot(...e) {
    return vi(uo(e))
}
const wi = vn,
    bo = y.forwardRef(({
        className: e,
        ...t
    }, r) => h.jsx(Qs, {
        ref: r,
        className: ot("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
bo.displayName = Qs.displayName;
const xi = qa("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    yo = y.forwardRef(({
        className: e,
        variant: t,
        ...r
    }, s) => h.jsx(Ys, {
        ref: s,
        className: ot(xi({
            variant: t
        }), e),
        ...r
    }));
yo.displayName = Ys.displayName;
const Ci = y.forwardRef(({
    className: e,
    ...t
}, r) => h.jsx(Ks, {
    ref: r,
    className: ot("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
Ci.displayName = Ks.displayName;
const vo = y.forwardRef(({
    className: e,
    ...t
}, r) => h.jsx(Js, {
    ref: r,
    className: ot("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: h.jsx(yn, {
        className: "h-4 w-4"
    })
}));
vo.displayName = Js.displayName;
const wo = y.forwardRef(({
    className: e,
    ...t
}, r) => h.jsx(Zs, {
    ref: r,
    className: ot("text-sm font-semibold", e),
    ...t
}));
wo.displayName = Zs.displayName;
const xo = y.forwardRef(({
    className: e,
    ...t
}, r) => h.jsx($s, {
    ref: r,
    className: ot("text-sm opacity-90", e),
    ...t
}));
xo.displayName = $s.displayName;

function Ai() {
    const {
        toasts: e
    } = Ua();
    return h.jsxs(wi, {
        children: [e.map(function({
            id: t,
            title: r,
            description: s,
            action: o,
            ...n
        }) {
            return h.jsxs(yo, { ...n,
                children: [h.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && h.jsx(wo, {
                        children: r
                    }), s && h.jsx(xo, {
                        children: s
                    })]
                }), o, h.jsx(vo, {})]
            }, t)
        }), h.jsx(bo, {})]
    })
}
const Ei = ["top", "right", "bottom", "left"],
    He = Math.min,
    ie = Math.max,
    Kt = Math.round,
    Ht = Math.floor,
    Ee = e => ({
        x: e,
        y: e
    }),
    Pi = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    Si = {
        start: "end",
        end: "start"
    };

function Er(e, t, r) {
    return ie(e, He(t, r))
}

function Oe(e, t) {
    return typeof e == "function" ? e(t) : e
}

function je(e) {
    return e.split("-")[0]
}

function Et(e) {
    return e.split("-")[1]
}

function jr(e) {
    return e === "x" ? "y" : "x"
}

function Nr(e) {
    return e === "y" ? "height" : "width"
}
const Ri = new Set(["top", "bottom"]);

function Ae(e) {
    return Ri.has(je(e)) ? "y" : "x"
}

function Dr(e) {
    return jr(Ae(e))
}

function Ti(e, t, r) {
    r === void 0 && (r = !1);
    const s = Et(e),
        o = Dr(e),
        n = Nr(o);
    let a = o === "x" ? s === (r ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
    return t.reference[n] > t.floating[n] && (a = Jt(a)), [a, Jt(a)]
}

function ki(e) {
    const t = Jt(e);
    return [Pr(e), t, Pr(t)]
}

function Pr(e) {
    return e.replace(/start|end/g, t => Si[t])
}
const ds = ["left", "right"],
    us = ["right", "left"],
    Oi = ["top", "bottom"],
    ji = ["bottom", "top"];

function Ni(e, t, r) {
    switch (e) {
        case "top":
        case "bottom":
            return r ? t ? us : ds : t ? ds : us;
        case "left":
        case "right":
            return t ? Oi : ji;
        default:
            return []
    }
}

function Di(e, t, r, s) {
    const o = Et(e);
    let n = Ni(je(e), r === "start", s);
    return o && (n = n.map(a => a + "-" + o), t && (n = n.concat(n.map(Pr)))), n
}

function Jt(e) {
    return e.replace(/left|right|bottom|top/g, t => Pi[t])
}

function Mi(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function Co(e) {
    return typeof e != "number" ? Mi(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Zt(e) {
    const {
        x: t,
        y: r,
        width: s,
        height: o
    } = e;
    return {
        width: s,
        height: o,
        top: r,
        left: t,
        right: t + s,
        bottom: r + o,
        x: t,
        y: r
    }
}

function fs(e, t, r) {
    let {
        reference: s,
        floating: o
    } = e;
    const n = Ae(t),
        a = Dr(t),
        i = Nr(a),
        d = je(t),
        c = n === "y",
        u = s.x + s.width / 2 - o.width / 2,
        f = s.y + s.height / 2 - o.height / 2,
        m = s[i] / 2 - o[i] / 2;
    let l;
    switch (d) {
        case "top":
            l = {
                x: u,
                y: s.y - o.height
            };
            break;
        case "bottom":
            l = {
                x: u,
                y: s.y + s.height
            };
            break;
        case "right":
            l = {
                x: s.x + s.width,
                y: f
            };
            break;
        case "left":
            l = {
                x: s.x - o.width,
                y: f
            };
            break;
        default:
            l = {
                x: s.x,
                y: s.y
            }
    }
    switch (Et(t)) {
        case "start":
            l[a] -= m * (r && c ? -1 : 1);
            break;
        case "end":
            l[a] += m * (r && c ? -1 : 1);
            break
    }
    return l
}
const zi = async (e, t, r) => {
    const {
        placement: s = "bottom",
        strategy: o = "absolute",
        middleware: n = [],
        platform: a
    } = r, i = n.filter(Boolean), d = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let c = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: u,
            y: f
        } = fs(c, s, d),
        m = s,
        l = {},
        g = 0;
    for (let p = 0; p < i.length; p++) {
        const {
            name: v,
            fn: w
        } = i[p], {
            x: C,
            y: A,
            data: E,
            reset: S
        } = await w({
            x: u,
            y: f,
            initialPlacement: s,
            placement: m,
            strategy: o,
            middlewareData: l,
            rects: c,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = C ? ? u, f = A ? ? f, l = { ...l,
            [v]: { ...l[v],
                ...E
            }
        }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (m = S.placement), S.rects && (c = S.rects === !0 ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : S.rects), {
            x: u,
            y: f
        } = fs(c, m, d)), p = -1)
    }
    return {
        x: u,
        y: f,
        placement: m,
        strategy: o,
        middlewareData: l
    }
};
async function zt(e, t) {
    var r;
    t === void 0 && (t = {});
    const {
        x: s,
        y: o,
        platform: n,
        rects: a,
        elements: i,
        strategy: d
    } = e, {
        boundary: c = "clippingAncestors",
        rootBoundary: u = "viewport",
        elementContext: f = "floating",
        altBoundary: m = !1,
        padding: l = 0
    } = Oe(t, e), g = Co(l), v = i[m ? f === "floating" ? "reference" : "floating" : f], w = Zt(await n.getClippingRect({
        element: (r = await (n.isElement == null ? void 0 : n.isElement(v))) == null || r ? v : v.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(i.floating)),
        boundary: c,
        rootBoundary: u,
        strategy: d
    })), C = f === "floating" ? {
        x: s,
        y: o,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference, A = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(i.floating)), E = await (n.isElement == null ? void 0 : n.isElement(A)) ? await (n.getScale == null ? void 0 : n.getScale(A)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, S = Zt(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: i,
        rect: C,
        offsetParent: A,
        strategy: d
    }) : C);
    return {
        top: (w.top - S.top + g.top) / E.y,
        bottom: (S.bottom - w.bottom + g.bottom) / E.y,
        left: (w.left - S.left + g.left) / E.x,
        right: (S.right - w.right + g.right) / E.x
    }
}
const Bi = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: r,
                y: s,
                placement: o,
                rects: n,
                platform: a,
                elements: i,
                middlewareData: d
            } = t, {
                element: c,
                padding: u = 0
            } = Oe(e, t) || {};
            if (c == null) return {};
            const f = Co(u),
                m = {
                    x: r,
                    y: s
                },
                l = Dr(o),
                g = Nr(l),
                p = await a.getDimensions(c),
                v = l === "y",
                w = v ? "top" : "left",
                C = v ? "bottom" : "right",
                A = v ? "clientHeight" : "clientWidth",
                E = n.reference[g] + n.reference[l] - m[l] - n.floating[g],
                S = m[l] - n.reference[l],
                j = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
            let D = j ? j[A] : 0;
            (!D || !await (a.isElement == null ? void 0 : a.isElement(j))) && (D = i.floating[A] || n.floating[g]);
            const X = E / 2 - S / 2,
                K = D / 2 - p[g] / 2 - 1,
                H = He(f[w], K),
                Q = He(f[C], K),
                R = H,
                q = D - p[g] - Q,
                M = D / 2 - p[g] / 2 + X,
                Z = Er(R, M, q),
                z = !d.arrow && Et(o) != null && M !== Z && n.reference[g] / 2 - (M < R ? H : Q) - p[g] / 2 < 0,
                B = z ? M < R ? M - R : M - q : 0;
            return {
                [l]: m[l] + B,
                data: {
                    [l]: Z,
                    centerOffset: M - Z - B,
                    ...z && {
                        alignmentOffset: B
                    }
                },
                reset: z
            }
        }
    }),
    Fi = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var r, s;
                const {
                    placement: o,
                    middlewareData: n,
                    rects: a,
                    initialPlacement: i,
                    platform: d,
                    elements: c
                } = t, {
                    mainAxis: u = !0,
                    crossAxis: f = !0,
                    fallbackPlacements: m,
                    fallbackStrategy: l = "bestFit",
                    fallbackAxisSideDirection: g = "none",
                    flipAlignment: p = !0,
                    ...v
                } = Oe(e, t);
                if ((r = n.arrow) != null && r.alignmentOffset) return {};
                const w = je(o),
                    C = Ae(i),
                    A = je(i) === i,
                    E = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)),
                    S = m || (A || !p ? [Jt(i)] : ki(i)),
                    j = g !== "none";
                !m && j && S.push(...Di(i, p, g, E));
                const D = [i, ...S],
                    X = await zt(t, v),
                    K = [];
                let H = ((s = n.flip) == null ? void 0 : s.overflows) || [];
                if (u && K.push(X[w]), f) {
                    const M = Ti(o, a, E);
                    K.push(X[M[0]], X[M[1]])
                }
                if (H = [...H, {
                        placement: o,
                        overflows: K
                    }], !K.every(M => M <= 0)) {
                    var Q, R;
                    const M = (((Q = n.flip) == null ? void 0 : Q.index) || 0) + 1,
                        Z = D[M];
                    if (Z && (!(f === "alignment" ? C !== Ae(Z) : !1) || H.every(T => T.overflows[0] > 0 && Ae(T.placement) === C))) return {
                        data: {
                            index: M,
                            overflows: H
                        },
                        reset: {
                            placement: Z
                        }
                    };
                    let z = (R = H.filter(B => B.overflows[0] <= 0).sort((B, T) => B.overflows[1] - T.overflows[1])[0]) == null ? void 0 : R.placement;
                    if (!z) switch (l) {
                        case "bestFit":
                            {
                                var q;
                                const B = (q = H.filter(T => {
                                    if (j) {
                                        const P = Ae(T.placement);
                                        return P === C || P === "y"
                                    }
                                    return !0
                                }).map(T => [T.placement, T.overflows.filter(P => P > 0).reduce((P, V) => P + V, 0)]).sort((T, P) => T[1] - P[1])[0]) == null ? void 0 : q[0];B && (z = B);
                                break
                            }
                        case "initialPlacement":
                            z = i;
                            break
                    }
                    if (o !== z) return {
                        reset: {
                            placement: z
                        }
                    }
                }
                return {}
            }
        }
    };

function hs(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function ps(e) {
    return Ei.some(t => e[t] >= 0)
}
const Li = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
                const {
                    rects: r
                } = t, {
                    strategy: s = "referenceHidden",
                    ...o
                } = Oe(e, t);
                switch (s) {
                    case "referenceHidden":
                        {
                            const n = await zt(t, { ...o,
                                    elementContext: "reference"
                                }),
                                a = hs(n, r.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: a,
                                    referenceHidden: ps(a)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const n = await zt(t, { ...o,
                                    altBoundary: !0
                                }),
                                a = hs(n, r.floating);
                            return {
                                data: {
                                    escapedOffsets: a,
                                    escaped: ps(a)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    Ao = new Set(["left", "top"]);
async function Ii(e, t) {
    const {
        placement: r,
        platform: s,
        elements: o
    } = e, n = await (s.isRTL == null ? void 0 : s.isRTL(o.floating)), a = je(r), i = Et(r), d = Ae(r) === "y", c = Ao.has(a) ? -1 : 1, u = n && d ? -1 : 1, f = Oe(t, e);
    let {
        mainAxis: m,
        crossAxis: l,
        alignmentAxis: g
    } = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return i && typeof g == "number" && (l = i === "end" ? g * -1 : g), d ? {
        x: l * u,
        y: m * c
    } : {
        x: m * c,
        y: l * u
    }
}
const Ui = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var r, s;
                const {
                    x: o,
                    y: n,
                    placement: a,
                    middlewareData: i
                } = t, d = await Ii(t, e);
                return a === ((r = i.offset) == null ? void 0 : r.placement) && (s = i.arrow) != null && s.alignmentOffset ? {} : {
                    x: o + d.x,
                    y: n + d.y,
                    data: { ...d,
                        placement: a
                    }
                }
            }
        }
    },
    qi = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: r,
                    y: s,
                    placement: o
                } = t, {
                    mainAxis: n = !0,
                    crossAxis: a = !1,
                    limiter: i = {
                        fn: v => {
                            let {
                                x: w,
                                y: C
                            } = v;
                            return {
                                x: w,
                                y: C
                            }
                        }
                    },
                    ...d
                } = Oe(e, t), c = {
                    x: r,
                    y: s
                }, u = await zt(t, d), f = Ae(je(o)), m = jr(f);
                let l = c[m],
                    g = c[f];
                if (n) {
                    const v = m === "y" ? "top" : "left",
                        w = m === "y" ? "bottom" : "right",
                        C = l + u[v],
                        A = l - u[w];
                    l = Er(C, l, A)
                }
                if (a) {
                    const v = f === "y" ? "top" : "left",
                        w = f === "y" ? "bottom" : "right",
                        C = g + u[v],
                        A = g - u[w];
                    g = Er(C, g, A)
                }
                const p = i.fn({ ...t,
                    [m]: l,
                    [f]: g
                });
                return { ...p,
                    data: {
                        x: p.x - r,
                        y: p.y - s,
                        enabled: {
                            [m]: n,
                            [f]: a
                        }
                    }
                }
            }
        }
    },
    Vi = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: r,
                    y: s,
                    placement: o,
                    rects: n,
                    middlewareData: a
                } = t, {
                    offset: i = 0,
                    mainAxis: d = !0,
                    crossAxis: c = !0
                } = Oe(e, t), u = {
                    x: r,
                    y: s
                }, f = Ae(o), m = jr(f);
                let l = u[m],
                    g = u[f];
                const p = Oe(i, t),
                    v = typeof p == "number" ? {
                        mainAxis: p,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...p
                    };
                if (d) {
                    const A = m === "y" ? "height" : "width",
                        E = n.reference[m] - n.floating[A] + v.mainAxis,
                        S = n.reference[m] + n.reference[A] - v.mainAxis;
                    l < E ? l = E : l > S && (l = S)
                }
                if (c) {
                    var w, C;
                    const A = m === "y" ? "width" : "height",
                        E = Ao.has(je(o)),
                        S = n.reference[f] - n.floating[A] + (E && ((w = a.offset) == null ? void 0 : w[f]) || 0) + (E ? 0 : v.crossAxis),
                        j = n.reference[f] + n.reference[A] + (E ? 0 : ((C = a.offset) == null ? void 0 : C[f]) || 0) - (E ? v.crossAxis : 0);
                    g < S ? g = S : g > j && (g = j)
                }
                return {
                    [m]: l,
                    [f]: g
                }
            }
        }
    },
    _i = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var r, s;
                const {
                    placement: o,
                    rects: n,
                    platform: a,
                    elements: i
                } = t, {
                    apply: d = () => {},
                    ...c
                } = Oe(e, t), u = await zt(t, c), f = je(o), m = Et(o), l = Ae(o) === "y", {
                    width: g,
                    height: p
                } = n.floating;
                let v, w;
                f === "top" || f === "bottom" ? (v = f, w = m === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = f, v = m === "end" ? "top" : "bottom");
                const C = p - u.top - u.bottom,
                    A = g - u.left - u.right,
                    E = He(p - u[v], C),
                    S = He(g - u[w], A),
                    j = !t.middlewareData.shift;
                let D = E,
                    X = S;
                if ((r = t.middlewareData.shift) != null && r.enabled.x && (X = A), (s = t.middlewareData.shift) != null && s.enabled.y && (D = C), j && !m) {
                    const H = ie(u.left, 0),
                        Q = ie(u.right, 0),
                        R = ie(u.top, 0),
                        q = ie(u.bottom, 0);
                    l ? X = g - 2 * (H !== 0 || Q !== 0 ? H + Q : ie(u.left, u.right)) : D = p - 2 * (R !== 0 || q !== 0 ? R + q : ie(u.top, u.bottom))
                }
                await d({ ...t,
                    availableWidth: X,
                    availableHeight: D
                });
                const K = await a.getDimensions(i.floating);
                return g !== K.width || p !== K.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function or() {
    return typeof window < "u"
}

function Pt(e) {
    return Eo(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function le(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function Se(e) {
    var t;
    return (t = (Eo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function Eo(e) {
    return or() ? e instanceof Node || e instanceof le(e).Node : !1
}

function ye(e) {
    return or() ? e instanceof Element || e instanceof le(e).Element : !1
}

function Pe(e) {
    return or() ? e instanceof HTMLElement || e instanceof le(e).HTMLElement : !1
}

function ms(e) {
    return !or() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof le(e).ShadowRoot
}
const Hi = new Set(["inline", "contents"]);

function It(e) {
    const {
        overflow: t,
        overflowX: r,
        overflowY: s,
        display: o
    } = ve(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + s + r) && !Hi.has(o)
}
const Xi = new Set(["table", "td", "th"]);

function Gi(e) {
    return Xi.has(Pt(e))
}
const Wi = [":popover-open", ":modal"];

function nr(e) {
    return Wi.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}
const Qi = ["transform", "translate", "scale", "rotate", "perspective"],
    Yi = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    Ki = ["paint", "layout", "strict", "content"];

function Mr(e) {
    const t = zr(),
        r = ye(e) ? ve(e) : e;
    return Qi.some(s => r[s] ? r[s] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || Yi.some(s => (r.willChange || "").includes(s)) || Ki.some(s => (r.contain || "").includes(s))
}

function Ji(e) {
    let t = Xe(e);
    for (; Pe(t) && !xt(t);) {
        if (Mr(t)) return t;
        if (nr(t)) return null;
        t = Xe(t)
    }
    return null
}

function zr() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const Zi = new Set(["html", "body", "#document"]);

function xt(e) {
    return Zi.has(Pt(e))
}

function ve(e) {
    return le(e).getComputedStyle(e)
}

function ar(e) {
    return ye(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function Xe(e) {
    if (Pt(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || ms(e) && e.host || Se(e);
    return ms(t) ? t.host : t
}

function Po(e) {
    const t = Xe(e);
    return xt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pe(t) && It(t) ? t : Po(t)
}

function Bt(e, t, r) {
    var s;
    t === void 0 && (t = []), r === void 0 && (r = !0);
    const o = Po(e),
        n = o === ((s = e.ownerDocument) == null ? void 0 : s.body),
        a = le(o);
    if (n) {
        const i = Sr(a);
        return t.concat(a, a.visualViewport || [], It(o) ? o : [], i && r ? Bt(i) : [])
    }
    return t.concat(o, Bt(o, [], r))
}

function Sr(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function So(e) {
    const t = ve(e);
    let r = parseFloat(t.width) || 0,
        s = parseFloat(t.height) || 0;
    const o = Pe(e),
        n = o ? e.offsetWidth : r,
        a = o ? e.offsetHeight : s,
        i = Kt(r) !== n || Kt(s) !== a;
    return i && (r = n, s = a), {
        width: r,
        height: s,
        $: i
    }
}

function Br(e) {
    return ye(e) ? e : e.contextElement
}

function ft(e) {
    const t = Br(e);
    if (!Pe(t)) return Ee(1);
    const r = t.getBoundingClientRect(),
        {
            width: s,
            height: o,
            $: n
        } = So(t);
    let a = (n ? Kt(r.width) : r.width) / s,
        i = (n ? Kt(r.height) : r.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
        x: a,
        y: i
    }
}
const $i = Ee(0);

function Ro(e) {
    const t = le(e);
    return !zr() || !t.visualViewport ? $i : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function el(e, t, r) {
    return t === void 0 && (t = !1), !r || t && r !== le(e) ? !1 : t
}

function st(e, t, r, s) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const o = e.getBoundingClientRect(),
        n = Br(e);
    let a = Ee(1);
    t && (s ? ye(s) && (a = ft(s)) : a = ft(e));
    const i = el(n, r, s) ? Ro(n) : Ee(0);
    let d = (o.left + i.x) / a.x,
        c = (o.top + i.y) / a.y,
        u = o.width / a.x,
        f = o.height / a.y;
    if (n) {
        const m = le(n),
            l = s && ye(s) ? le(s) : s;
        let g = m,
            p = Sr(g);
        for (; p && s && l !== g;) {
            const v = ft(p),
                w = p.getBoundingClientRect(),
                C = ve(p),
                A = w.left + (p.clientLeft + parseFloat(C.paddingLeft)) * v.x,
                E = w.top + (p.clientTop + parseFloat(C.paddingTop)) * v.y;
            d *= v.x, c *= v.y, u *= v.x, f *= v.y, d += A, c += E, g = le(p), p = Sr(g)
        }
    }
    return Zt({
        width: u,
        height: f,
        x: d,
        y: c
    })
}

function Fr(e, t) {
    const r = ar(e).scrollLeft;
    return t ? t.left + r : st(Se(e)).left + r
}

function To(e, t, r) {
    r === void 0 && (r = !1);
    const s = e.getBoundingClientRect(),
        o = s.left + t.scrollLeft - (r ? 0 : Fr(e, s)),
        n = s.top + t.scrollTop;
    return {
        x: o,
        y: n
    }
}

function tl(e) {
    let {
        elements: t,
        rect: r,
        offsetParent: s,
        strategy: o
    } = e;
    const n = o === "fixed",
        a = Se(s),
        i = t ? nr(t.floating) : !1;
    if (s === a || i && n) return r;
    let d = {
            scrollLeft: 0,
            scrollTop: 0
        },
        c = Ee(1);
    const u = Ee(0),
        f = Pe(s);
    if ((f || !f && !n) && ((Pt(s) !== "body" || It(a)) && (d = ar(s)), Pe(s))) {
        const l = st(s);
        c = ft(s), u.x = l.x + s.clientLeft, u.y = l.y + s.clientTop
    }
    const m = a && !f && !n ? To(a, d, !0) : Ee(0);
    return {
        width: r.width * c.x,
        height: r.height * c.y,
        x: r.x * c.x - d.scrollLeft * c.x + u.x + m.x,
        y: r.y * c.y - d.scrollTop * c.y + u.y + m.y
    }
}

function rl(e) {
    return Array.from(e.getClientRects())
}

function sl(e) {
    const t = Se(e),
        r = ar(e),
        s = e.ownerDocument.body,
        o = ie(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth),
        n = ie(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
    let a = -r.scrollLeft + Fr(e);
    const i = -r.scrollTop;
    return ve(s).direction === "rtl" && (a += ie(t.clientWidth, s.clientWidth) - o), {
        width: o,
        height: n,
        x: a,
        y: i
    }
}

function ol(e, t) {
    const r = le(e),
        s = Se(e),
        o = r.visualViewport;
    let n = s.clientWidth,
        a = s.clientHeight,
        i = 0,
        d = 0;
    if (o) {
        n = o.width, a = o.height;
        const c = zr();
        (!c || c && t === "fixed") && (i = o.offsetLeft, d = o.offsetTop)
    }
    return {
        width: n,
        height: a,
        x: i,
        y: d
    }
}
const nl = new Set(["absolute", "fixed"]);

function al(e, t) {
    const r = st(e, !0, t === "fixed"),
        s = r.top + e.clientTop,
        o = r.left + e.clientLeft,
        n = Pe(e) ? ft(e) : Ee(1),
        a = e.clientWidth * n.x,
        i = e.clientHeight * n.y,
        d = o * n.x,
        c = s * n.y;
    return {
        width: a,
        height: i,
        x: d,
        y: c
    }
}

function gs(e, t, r) {
    let s;
    if (t === "viewport") s = ol(e, r);
    else if (t === "document") s = sl(Se(e));
    else if (ye(t)) s = al(t, r);
    else {
        const o = Ro(e);
        s = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Zt(s)
}

function ko(e, t) {
    const r = Xe(e);
    return r === t || !ye(r) || xt(r) ? !1 : ve(r).position === "fixed" || ko(r, t)
}

function il(e, t) {
    const r = t.get(e);
    if (r) return r;
    let s = Bt(e, [], !1).filter(i => ye(i) && Pt(i) !== "body"),
        o = null;
    const n = ve(e).position === "fixed";
    let a = n ? Xe(e) : e;
    for (; ye(a) && !xt(a);) {
        const i = ve(a),
            d = Mr(a);
        !d && i.position === "fixed" && (o = null), (n ? !d && !o : !d && i.position === "static" && !!o && nl.has(o.position) || It(a) && !d && ko(e, a)) ? s = s.filter(u => u !== a) : o = i, a = Xe(a)
    }
    return t.set(e, s), s
}

function ll(e) {
    let {
        element: t,
        boundary: r,
        rootBoundary: s,
        strategy: o
    } = e;
    const a = [...r === "clippingAncestors" ? nr(t) ? [] : il(t, this._c) : [].concat(r), s],
        i = a[0],
        d = a.reduce((c, u) => {
            const f = gs(t, u, o);
            return c.top = ie(f.top, c.top), c.right = He(f.right, c.right), c.bottom = He(f.bottom, c.bottom), c.left = ie(f.left, c.left), c
        }, gs(t, i, o));
    return {
        width: d.right - d.left,
        height: d.bottom - d.top,
        x: d.left,
        y: d.top
    }
}

function cl(e) {
    const {
        width: t,
        height: r
    } = So(e);
    return {
        width: t,
        height: r
    }
}

function dl(e, t, r) {
    const s = Pe(t),
        o = Se(t),
        n = r === "fixed",
        a = st(e, !0, n, t);
    let i = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const d = Ee(0);

    function c() {
        d.x = Fr(o)
    }
    if (s || !s && !n)
        if ((Pt(t) !== "body" || It(o)) && (i = ar(t)), s) {
            const l = st(t, !0, n, t);
            d.x = l.x + t.clientLeft, d.y = l.y + t.clientTop
        } else o && c();
    n && !s && o && c();
    const u = o && !s && !n ? To(o, i) : Ee(0),
        f = a.left + i.scrollLeft - d.x - u.x,
        m = a.top + i.scrollTop - d.y - u.y;
    return {
        x: f,
        y: m,
        width: a.width,
        height: a.height
    }
}

function br(e) {
    return ve(e).position === "static"
}

function bs(e, t) {
    if (!Pe(e) || ve(e).position === "fixed") return null;
    if (t) return t(e);
    let r = e.offsetParent;
    return Se(e) === r && (r = r.ownerDocument.body), r
}

function Oo(e, t) {
    const r = le(e);
    if (nr(e)) return r;
    if (!Pe(e)) {
        let o = Xe(e);
        for (; o && !xt(o);) {
            if (ye(o) && !br(o)) return o;
            o = Xe(o)
        }
        return r
    }
    let s = bs(e, t);
    for (; s && Gi(s) && br(s);) s = bs(s, t);
    return s && xt(s) && br(s) && !Mr(s) ? r : s || Ji(e) || r
}
const ul = async function(e) {
    const t = this.getOffsetParent || Oo,
        r = this.getDimensions,
        s = await r(e.floating);
    return {
        reference: dl(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: s.width,
            height: s.height
        }
    }
};

function fl(e) {
    return ve(e).direction === "rtl"
}
const hl = {
    convertOffsetParentRelativeRectToViewportRelativeRect: tl,
    getDocumentElement: Se,
    getClippingRect: ll,
    getOffsetParent: Oo,
    getElementRects: ul,
    getClientRects: rl,
    getDimensions: cl,
    getScale: ft,
    isElement: ye,
    isRTL: fl
};

function jo(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function pl(e, t) {
    let r = null,
        s;
    const o = Se(e);

    function n() {
        var i;
        clearTimeout(s), (i = r) == null || i.disconnect(), r = null
    }

    function a(i, d) {
        i === void 0 && (i = !1), d === void 0 && (d = 1), n();
        const c = e.getBoundingClientRect(),
            {
                left: u,
                top: f,
                width: m,
                height: l
            } = c;
        if (i || t(), !m || !l) return;
        const g = Ht(f),
            p = Ht(o.clientWidth - (u + m)),
            v = Ht(o.clientHeight - (f + l)),
            w = Ht(u),
            A = {
                rootMargin: -g + "px " + -p + "px " + -v + "px " + -w + "px",
                threshold: ie(0, He(1, d)) || 1
            };
        let E = !0;

        function S(j) {
            const D = j[0].intersectionRatio;
            if (D !== d) {
                if (!E) return a();
                D ? a(!1, D) : s = setTimeout(() => {
                    a(!1, 1e-7)
                }, 1e3)
            }
            D === 1 && !jo(c, e.getBoundingClientRect()) && a(), E = !1
        }
        try {
            r = new IntersectionObserver(S, { ...A,
                root: o.ownerDocument
            })
        } catch {
            r = new IntersectionObserver(S, A)
        }
        r.observe(e)
    }
    return a(!0), n
}

function ml(e, t, r, s) {
    s === void 0 && (s = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: n = !0,
        elementResize: a = typeof ResizeObserver == "function",
        layoutShift: i = typeof IntersectionObserver == "function",
        animationFrame: d = !1
    } = s, c = Br(e), u = o || n ? [...c ? Bt(c) : [], ...Bt(t)] : [];
    u.forEach(w => {
        o && w.addEventListener("scroll", r, {
            passive: !0
        }), n && w.addEventListener("resize", r)
    });
    const f = c && i ? pl(c, r) : null;
    let m = -1,
        l = null;
    a && (l = new ResizeObserver(w => {
        let [C] = w;
        C && C.target === c && l && (l.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
            var A;
            (A = l) == null || A.observe(t)
        })), r()
    }), c && !d && l.observe(c), l.observe(t));
    let g, p = d ? st(e) : null;
    d && v();

    function v() {
        const w = st(e);
        p && !jo(p, w) && r(), p = w, g = requestAnimationFrame(v)
    }
    return r(), () => {
        var w;
        u.forEach(C => {
            o && C.removeEventListener("scroll", r), n && C.removeEventListener("resize", r)
        }), f ? .(), (w = l) == null || w.disconnect(), l = null, d && cancelAnimationFrame(g)
    }
}
const gl = Ui,
    bl = qi,
    yl = Fi,
    vl = _i,
    wl = Li,
    ys = Bi,
    xl = Vi,
    Cl = (e, t, r) => {
        const s = new Map,
            o = {
                platform: hl,
                ...r
            },
            n = { ...o.platform,
                _c: s
            };
        return zi(e, t, { ...o,
            platform: n
        })
    };
var Al = typeof document < "u",
    El = function() {},
    Qt = Al ? y.useLayoutEffect : El;

function $t(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let r, s, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (s = r; s-- !== 0;)
                if (!$t(e[s], t[s])) return !1;
            return !0
        }
        if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
        for (s = r; s-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[s])) return !1;
        for (s = r; s-- !== 0;) {
            const n = o[s];
            if (!(n === "_owner" && e.$$typeof) && !$t(e[n], t[n])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function No(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function vs(e, t) {
    const r = No(e);
    return Math.round(t * r) / r
}

function yr(e) {
    const t = y.useRef(e);
    return Qt(() => {
        t.current = e
    }), t
}

function Pl(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: r = "absolute",
        middleware: s = [],
        platform: o,
        elements: {
            reference: n,
            floating: a
        } = {},
        transform: i = !0,
        whileElementsMounted: d,
        open: c
    } = e, [u, f] = y.useState({
        x: 0,
        y: 0,
        strategy: r,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [m, l] = y.useState(s);
    $t(m, s) || l(s);
    const [g, p] = y.useState(null), [v, w] = y.useState(null), C = y.useCallback(T => {
        T !== j.current && (j.current = T, p(T))
    }, []), A = y.useCallback(T => {
        T !== D.current && (D.current = T, w(T))
    }, []), E = n || g, S = a || v, j = y.useRef(null), D = y.useRef(null), X = y.useRef(u), K = d != null, H = yr(d), Q = yr(o), R = yr(c), q = y.useCallback(() => {
        if (!j.current || !D.current) return;
        const T = {
            placement: t,
            strategy: r,
            middleware: m
        };
        Q.current && (T.platform = Q.current), Cl(j.current, D.current, T).then(P => {
            const V = { ...P,
                isPositioned: R.current !== !1
            };
            M.current && !$t(X.current, V) && (X.current = V, Ws.flushSync(() => {
                f(V)
            }))
        })
    }, [m, t, r, Q, R]);
    Qt(() => {
        c === !1 && X.current.isPositioned && (X.current.isPositioned = !1, f(T => ({ ...T,
            isPositioned: !1
        })))
    }, [c]);
    const M = y.useRef(!1);
    Qt(() => (M.current = !0, () => {
        M.current = !1
    }), []), Qt(() => {
        if (E && (j.current = E), S && (D.current = S), E && S) {
            if (H.current) return H.current(E, S, q);
            q()
        }
    }, [E, S, q, H, K]);
    const Z = y.useMemo(() => ({
            reference: j,
            floating: D,
            setReference: C,
            setFloating: A
        }), [C, A]),
        z = y.useMemo(() => ({
            reference: E,
            floating: S
        }), [E, S]),
        B = y.useMemo(() => {
            const T = {
                position: r,
                left: 0,
                top: 0
            };
            if (!z.floating) return T;
            const P = vs(z.floating, u.x),
                V = vs(z.floating, u.y);
            return i ? { ...T,
                transform: "translate(" + P + "px, " + V + "px)",
                ...No(z.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: r,
                left: P,
                top: V
            }
        }, [r, i, z.floating, u.x, u.y]);
    return y.useMemo(() => ({ ...u,
        update: q,
        refs: Z,
        elements: z,
        floatingStyles: B
    }), [u, q, Z, z, B])
}
const Sl = e => {
        function t(r) {
            return {}.hasOwnProperty.call(r, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(r) {
                const {
                    element: s,
                    padding: o
                } = typeof e == "function" ? e(r) : e;
                return s && t(s) ? s.current != null ? ys({
                    element: s.current,
                    padding: o
                }).fn(r) : {} : s ? ys({
                    element: s,
                    padding: o
                }).fn(r) : {}
            }
        }
    },
    Rl = (e, t) => ({ ...gl(e),
        options: [e, t]
    }),
    Tl = (e, t) => ({ ...bl(e),
        options: [e, t]
    }),
    kl = (e, t) => ({ ...xl(e),
        options: [e, t]
    }),
    Ol = (e, t) => ({ ...yl(e),
        options: [e, t]
    }),
    jl = (e, t) => ({ ...vl(e),
        options: [e, t]
    }),
    Nl = (e, t) => ({ ...wl(e),
        options: [e, t]
    }),
    Dl = (e, t) => ({ ...Sl(e),
        options: [e, t]
    });
var Ml = "Arrow",
    Do = y.forwardRef((e, t) => {
        const {
            children: r,
            width: s = 10,
            height: o = 5,
            ...n
        } = e;
        return h.jsx(er.svg, { ...n,
            ref: t,
            width: s,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : h.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Do.displayName = Ml;
var zl = Do;

function Bl(e) {
    const [t, r] = y.useState(void 0);
    return vr(() => {
        if (e) {
            r({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const s = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const n = o[0];
                let a, i;
                if ("borderBoxSize" in n) {
                    const d = n.borderBoxSize,
                        c = Array.isArray(d) ? d[0] : d;
                    a = c.inlineSize, i = c.blockSize
                } else a = e.offsetWidth, i = e.offsetHeight;
                r({
                    width: a,
                    height: i
                })
            });
            return s.observe(e, {
                box: "border-box"
            }), () => s.unobserve(e)
        } else r(void 0)
    }, [e]), t
}
var Mo = "Popper",
    [zo, Bo] = eo(Mo),
    [$d, Fo] = zo(Mo),
    Lo = "PopperAnchor",
    Io = y.forwardRef((e, t) => {
        const {
            __scopePopper: r,
            virtualRef: s,
            ...o
        } = e, n = Fo(Lo, r), a = y.useRef(null), i = tr(t, a);
        return y.useEffect(() => {
            n.onAnchorChange(s ? .current || a.current)
        }), s ? null : h.jsx(er.div, { ...o,
            ref: i
        })
    });
Io.displayName = Lo;
var Lr = "PopperContent",
    [Fl, Ll] = zo(Lr),
    Uo = y.forwardRef((e, t) => {
        const {
            __scopePopper: r,
            side: s = "bottom",
            sideOffset: o = 0,
            align: n = "center",
            alignOffset: a = 0,
            arrowPadding: i = 0,
            avoidCollisions: d = !0,
            collisionBoundary: c = [],
            collisionPadding: u = 0,
            sticky: f = "partial",
            hideWhenDetached: m = !1,
            updatePositionStrategy: l = "optimized",
            onPlaced: g,
            ...p
        } = e, v = Fo(Lr, r), [w, C] = y.useState(null), A = tr(t, I => C(I)), [E, S] = y.useState(null), j = Bl(E), D = j ? .width ? ? 0, X = j ? .height ? ? 0, K = s + (n !== "center" ? "-" + n : ""), H = typeof u == "number" ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
        }, Q = Array.isArray(c) ? c : [c], R = Q.length > 0, q = {
            padding: H,
            boundary: Q.filter(Ul),
            altBoundary: R
        }, {
            refs: M,
            floatingStyles: Z,
            placement: z,
            isPositioned: B,
            middlewareData: T
        } = Pl({
            strategy: "fixed",
            placement: K,
            whileElementsMounted: (...I) => ml(...I, {
                animationFrame: l === "always"
            }),
            elements: {
                reference: v.anchor
            },
            middleware: [Rl({
                mainAxis: o + X,
                alignmentAxis: a
            }), d && Tl({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === "partial" ? kl() : void 0,
                ...q
            }), d && Ol({ ...q
            }), jl({ ...q,
                apply: ({
                    elements: I,
                    rects: nt,
                    availableWidth: Ge,
                    availableHeight: at
                }) => {
                    const {
                        width: We,
                        height: St
                    } = nt.reference, Qe = I.floating.style;
                    Qe.setProperty("--radix-popper-available-width", `${Ge}px`), Qe.setProperty("--radix-popper-available-height", `${at}px`), Qe.setProperty("--radix-popper-anchor-width", `${We}px`), Qe.setProperty("--radix-popper-anchor-height", `${St}px`)
                }
            }), E && Dl({
                element: E,
                padding: i
            }), ql({
                arrowWidth: D,
                arrowHeight: X
            }), m && Nl({
                strategy: "referenceHidden",
                ...q
            })]
        }), [P, V] = _o(z), $ = wn(g);
        vr(() => {
            B && $ ? .()
        }, [B, $]);
        const L = T.arrow ? .x,
            _ = T.arrow ? .y,
            G = T.arrow ? .centerOffset !== 0,
            [ee, Ne] = y.useState();
        return vr(() => {
            w && Ne(window.getComputedStyle(w).zIndex)
        }, [w]), h.jsx("div", {
            ref: M.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...Z,
                transform: B ? Z.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ee,
                "--radix-popper-transform-origin": [T.transformOrigin ? .x, T.transformOrigin ? .y].join(" "),
                ...T.hide ? .referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: h.jsx(Fl, {
                scope: r,
                placedSide: P,
                onArrowChange: S,
                arrowX: L,
                arrowY: _,
                shouldHideArrow: G,
                children: h.jsx(er.div, {
                    "data-side": P,
                    "data-align": V,
                    ...p,
                    ref: A,
                    style: { ...p.style,
                        animation: B ? void 0 : "none"
                    }
                })
            })
        })
    });
Uo.displayName = Lr;
var qo = "PopperArrow",
    Il = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Vo = y.forwardRef(function(t, r) {
        const {
            __scopePopper: s,
            ...o
        } = t, n = Ll(qo, s), a = Il[n.placedSide];
        return h.jsx("span", {
            ref: n.onArrowChange,
            style: {
                position: "absolute",
                left: n.arrowX,
                top: n.arrowY,
                [a]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[n.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[n.placedSide],
                visibility: n.shouldHideArrow ? "hidden" : void 0
            },
            children: h.jsx(zl, { ...o,
                ref: r,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
Vo.displayName = qo;

function Ul(e) {
    return e !== null
}
var ql = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        const {
            placement: r,
            rects: s,
            middlewareData: o
        } = t, a = o.arrow ? .centerOffset !== 0, i = a ? 0 : e.arrowWidth, d = a ? 0 : e.arrowHeight, [c, u] = _o(r), f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[u], m = (o.arrow ? .x ? ? 0) + i / 2, l = (o.arrow ? .y ? ? 0) + d / 2;
        let g = "",
            p = "";
        return c === "bottom" ? (g = a ? f : `${m}px`, p = `${-d}px`) : c === "top" ? (g = a ? f : `${m}px`, p = `${s.floating.height+d}px`) : c === "right" ? (g = `${-d}px`, p = a ? f : `${l}px`) : c === "left" && (g = `${s.floating.width+d}px`, p = a ? f : `${l}px`), {
            data: {
                x: g,
                y: p
            }
        }
    }
});

function _o(e) {
    const [t, r = "center"] = e.split("-");
    return [t, r]
}
var Vl = Io,
    _l = Uo,
    Hl = Vo,
    [ir, eu] = eo("Tooltip", [Bo]),
    Ir = Bo(),
    Ho = "TooltipProvider",
    Xl = 700,
    ws = "tooltip.open",
    [Gl, Xo] = ir(Ho),
    Go = e => {
        const {
            __scopeTooltip: t,
            delayDuration: r = Xl,
            skipDelayDuration: s = 300,
            disableHoverableContent: o = !1,
            children: n
        } = e, a = y.useRef(!0), i = y.useRef(!1), d = y.useRef(0);
        return y.useEffect(() => {
            const c = d.current;
            return () => window.clearTimeout(c)
        }, []), h.jsx(Gl, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: y.useCallback(() => {
                window.clearTimeout(d.current), a.current = !1
            }, []),
            onClose: y.useCallback(() => {
                window.clearTimeout(d.current), d.current = window.setTimeout(() => a.current = !0, s)
            }, [s]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: y.useCallback(c => {
                i.current = c
            }, []),
            disableHoverableContent: o,
            children: n
        })
    };
Go.displayName = Ho;
var Wo = "Tooltip",
    [tu, lr] = ir(Wo),
    Rr = "TooltipTrigger",
    Wl = y.forwardRef((e, t) => {
        const {
            __scopeTooltip: r,
            ...s
        } = e, o = lr(Rr, r), n = Xo(Rr, r), a = Ir(r), i = y.useRef(null), d = tr(t, i, o.onTriggerChange), c = y.useRef(!1), u = y.useRef(!1), f = y.useCallback(() => c.current = !1, []);
        return y.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), h.jsx(Vl, {
            asChild: !0,
            ...a,
            children: h.jsx(er.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...s,
                ref: d,
                onPointerMove: dt(e.onPointerMove, m => {
                    m.pointerType !== "touch" && !u.current && !n.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0)
                }),
                onPointerLeave: dt(e.onPointerLeave, () => {
                    o.onTriggerLeave(), u.current = !1
                }),
                onPointerDown: dt(e.onPointerDown, () => {
                    o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", f, {
                        once: !0
                    })
                }),
                onFocus: dt(e.onFocus, () => {
                    c.current || o.onOpen()
                }),
                onBlur: dt(e.onBlur, o.onClose),
                onClick: dt(e.onClick, o.onClose)
            })
        })
    });
Wl.displayName = Rr;
var Ql = "TooltipPortal",
    [ru, Yl] = ir(Ql, {
        forceMount: void 0
    }),
    Ct = "TooltipContent",
    Qo = y.forwardRef((e, t) => {
        const r = Yl(Ct, e.__scopeTooltip),
            {
                forceMount: s = r.forceMount,
                side: o = "top",
                ...n
            } = e,
            a = lr(Ct, e.__scopeTooltip);
        return h.jsx(xn, {
            present: s || a.open,
            children: a.disableHoverableContent ? h.jsx(Yo, {
                side: o,
                ...n,
                ref: t
            }) : h.jsx(Kl, {
                side: o,
                ...n,
                ref: t
            })
        })
    }),
    Kl = y.forwardRef((e, t) => {
        const r = lr(Ct, e.__scopeTooltip),
            s = Xo(Ct, e.__scopeTooltip),
            o = y.useRef(null),
            n = tr(t, o),
            [a, i] = y.useState(null),
            {
                trigger: d,
                onClose: c
            } = r,
            u = o.current,
            {
                onPointerInTransitChange: f
            } = s,
            m = y.useCallback(() => {
                i(null), f(!1)
            }, [f]),
            l = y.useCallback((g, p) => {
                const v = g.currentTarget,
                    w = {
                        x: g.clientX,
                        y: g.clientY
                    },
                    C = tc(w, v.getBoundingClientRect()),
                    A = rc(w, C),
                    E = sc(p.getBoundingClientRect()),
                    S = nc([...A, ...E]);
                i(S), f(!0)
            }, [f]);
        return y.useEffect(() => () => m(), [m]), y.useEffect(() => {
            if (d && u) {
                const g = v => l(v, u),
                    p = v => l(v, d);
                return d.addEventListener("pointerleave", g), u.addEventListener("pointerleave", p), () => {
                    d.removeEventListener("pointerleave", g), u.removeEventListener("pointerleave", p)
                }
            }
        }, [d, u, l, m]), y.useEffect(() => {
            if (a) {
                const g = p => {
                    const v = p.target,
                        w = {
                            x: p.clientX,
                            y: p.clientY
                        },
                        C = d ? .contains(v) || u ? .contains(v),
                        A = !oc(w, a);
                    C ? m() : A && (m(), c())
                };
                return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g)
            }
        }, [d, u, a, c, m]), h.jsx(Yo, { ...e,
            ref: n
        })
    }),
    [Jl, Zl] = ir(Wo, {
        isInside: !1
    }),
    $l = En("TooltipContent"),
    Yo = y.forwardRef((e, t) => {
        const {
            __scopeTooltip: r,
            children: s,
            "aria-label": o,
            onEscapeKeyDown: n,
            onPointerDownOutside: a,
            ...i
        } = e, d = lr(Ct, r), c = Ir(r), {
            onClose: u
        } = d;
        return y.useEffect(() => (document.addEventListener(ws, u), () => document.removeEventListener(ws, u)), [u]), y.useEffect(() => {
            if (d.trigger) {
                const f = m => {
                    m.target ? .contains(d.trigger) && u()
                };
                return window.addEventListener("scroll", f, {
                    capture: !0
                }), () => window.removeEventListener("scroll", f, {
                    capture: !0
                })
            }
        }, [d.trigger, u]), h.jsx(Cn, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: a,
            onFocusOutside: f => f.preventDefault(),
            onDismiss: u,
            children: h.jsxs(_l, {
                "data-state": d.stateAttribute,
                ...c,
                ...i,
                ref: t,
                style: { ...i.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [h.jsx($l, {
                    children: s
                }), h.jsx(Jl, {
                    scope: r,
                    isInside: !0,
                    children: h.jsx(An, {
                        id: d.contentId,
                        role: "tooltip",
                        children: o || s
                    })
                })]
            })
        })
    });
Qo.displayName = Ct;
var Ko = "TooltipArrow",
    ec = y.forwardRef((e, t) => {
        const {
            __scopeTooltip: r,
            ...s
        } = e, o = Ir(r);
        return Zl(Ko, r).isInside ? null : h.jsx(Hl, { ...o,
            ...s,
            ref: t
        })
    });
ec.displayName = Ko;

function tc(e, t) {
    const r = Math.abs(t.top - e.y),
        s = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        n = Math.abs(t.left - e.x);
    switch (Math.min(r, s, o, n)) {
        case n:
            return "left";
        case o:
            return "right";
        case r:
            return "top";
        case s:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function rc(e, t, r = 5) {
    const s = [];
    switch (t) {
        case "top":
            s.push({
                x: e.x - r,
                y: e.y + r
            }, {
                x: e.x + r,
                y: e.y + r
            });
            break;
        case "bottom":
            s.push({
                x: e.x - r,
                y: e.y - r
            }, {
                x: e.x + r,
                y: e.y - r
            });
            break;
        case "left":
            s.push({
                x: e.x + r,
                y: e.y - r
            }, {
                x: e.x + r,
                y: e.y + r
            });
            break;
        case "right":
            s.push({
                x: e.x - r,
                y: e.y - r
            }, {
                x: e.x - r,
                y: e.y + r
            });
            break
    }
    return s
}

function sc(e) {
    const {
        top: t,
        right: r,
        bottom: s,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: r,
        y: t
    }, {
        x: r,
        y: s
    }, {
        x: o,
        y: s
    }]
}

function oc(e, t) {
    const {
        x: r,
        y: s
    } = e;
    let o = !1;
    for (let n = 0, a = t.length - 1; n < t.length; a = n++) {
        const i = t[n],
            d = t[a],
            c = i.x,
            u = i.y,
            f = d.x,
            m = d.y;
        u > s != m > s && r < (f - c) * (s - u) / (m - u) + c && (o = !o)
    }
    return o
}

function nc(e) {
    const t = e.slice();
    return t.sort((r, s) => r.x < s.x ? -1 : r.x > s.x ? 1 : r.y < s.y ? -1 : r.y > s.y ? 1 : 0), ac(t)
}

function ac(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let s = 0; s < e.length; s++) {
        const o = e[s];
        for (; t.length >= 2;) {
            const n = t[t.length - 1],
                a = t[t.length - 2];
            if ((n.x - a.x) * (o.y - a.y) >= (n.y - a.y) * (o.x - a.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const r = [];
    for (let s = e.length - 1; s >= 0; s--) {
        const o = e[s];
        for (; r.length >= 2;) {
            const n = r[r.length - 1],
                a = r[r.length - 2];
            if ((n.x - a.x) * (o.y - a.y) >= (n.y - a.y) * (o.x - a.x)) r.pop();
            else break
        }
        r.push(o)
    }
    return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
}
var ic = Go,
    Jo = Qo;
const lc = ic,
    cc = y.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...r
    }, s) => h.jsx(Jo, {
        ref: s,
        sideOffset: t,
        className: ot("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...r
    }));
cc.displayName = Jo.displayName;
const dc = "https://bctzzzpgfspdzgkqkoje.supabase.co",
    uc = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjdHp6enBnZnNwZHpna3Frb2plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NzUyNzEsImV4cCI6MjA5MjM1MTI3MX0.uASjrbjOiFDQKgONHFuesne_T5nf-IKnSSy0Z2UbHfE",
    Xt = kn(dc, uc, {
        auth: {
            storage: localStorage,
            persistSession: !0,
            autoRefreshToken: !0
        }
    }),
    Zo = y.createContext(void 0),
    fc = ({
        children: e
    }) => {
        const [t, r] = y.useState(null), [s, o] = y.useState(null), [n, a] = y.useState(!1), [i, d] = y.useState(!0), c = async m => {
            const {
                data: l
            } = await Xt.from("user_roles").select("role").eq("user_id", m).eq("role", "buyer").maybeSingle();
            a(!!l)
        };
        y.useEffect(() => {
            const {
                data: m
            } = Xt.auth.onAuthStateChange((l, g) => {
                o(g), r(g ? .user ? ? null), g ? .user ? setTimeout(() => c(g.user.id), 0) : a(!1)
            });
            return Xt.auth.getSession().then(({
                data: {
                    session: l
                }
            }) => {
                o(l), r(l ? .user ? ? null), l ? .user && c(l.user.id), d(!1)
            }), () => m.subscription.unsubscribe()
        }, []);
        const u = async () => {
                await Xt.auth.signOut()
            },
            f = async () => {
                t && await c(t.id)
            };
        return h.jsx(Zo.Provider, {
            value: {
                user: t,
                session: s,
                isBuyer: n,
                loading: i,
                signOut: u,
                refreshRole: f
            },
            children: e
        })
    },
    hc = () => {
        const e = y.useContext(Zo);
        if (!e) throw new Error("useAuth must be used within AuthProvider");
        return e
    },
    pc = "/assets/hero-banner-1-B4kj0LPA.webp",
    mc = "/assets/hero-banner-2-YrfUq8Vx.webp",
    gc = "/assets/hero-banner-3-C3xmH5Yi.webp",
    bc = "/assets/hero-mobile-1-C0nVQ3Qc.webp",
    yc = "/assets/hero-mobile-2-B4jYGi5a.webp",
    vc = "/assets/hero-mobile-3-hfzDX0pr.webp",
    xs = [pc, mc, gc],
    Cs = [bc, yc, vc],
    wc = () => {
        const [e, t] = y.useState(0);
        return y.useEffect(() => {
            const r = setInterval(() => {
                t(s => (s + 1) % 3)
            }, 4500);
            return () => clearInterval(r)
        }, []), h.jsxs("section", {
            className: "relative w-full bg-background overflow-hidden",
            children: [h.jsxs("div", {
                className: "relative w-full aspect-[768/1376] md:hidden",
                children: [Cs.map((r, s) => h.jsx("img", {
                    src: r,
                    alt: "Camisa premium da Seleção Brasileira",
                    width: 768,
                    height: 1376,
                    fetchpriority: s === 0 ? "high" : "auto",
                    decoding: "async",
                    loading: s === 0 ? "eager" : "lazy",
                    className: "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                    style: {
                        opacity: s === e ? 1 : 0
                    }
                }, `m-${s}`)), h.jsx("div", {
                    className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10",
                    children: Cs.map((r, s) => h.jsx("button", {
                        onClick: () => t(s),
                        "aria-label": `Ir para banner ${s+1}`,
                        className: `h-2 rounded-full transition-all ${s===e?"w-6 bg-brasil-yellow":"w-2 bg-foreground/30"}`
                    }, s))
                })]
            }), h.jsxs("div", {
                className: "relative w-full aspect-[1376/764] hidden md:block",
                children: [xs.map((r, s) => h.jsx("img", {
                    src: r,
                    alt: "Camisa premium da Seleção Brasileira",
                    width: 1376,
                    height: 764,
                    fetchpriority: s === 0 ? "high" : "auto",
                    decoding: "async",
                    loading: s === 0 ? "eager" : "lazy",
                    className: "absolute inset-0 w-full h-full object-contain transition-opacity duration-700",
                    style: {
                        opacity: s === e ? 1 : 0
                    }
                }, `d-${s}`)), h.jsx("div", {
                    className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10",
                    children: xs.map((r, s) => h.jsx("button", {
                        onClick: () => t(s),
                        "aria-label": `Ir para banner ${s+1}`,
                        className: `h-2 rounded-full transition-all ${s===e?"w-6 bg-brasil-yellow":"w-2 bg-foreground/30"}`
                    }, s))
                })]
            })]
        })
    },
    xc = () => {
        const {
            user: e,
            isBuyer: t
        } = hc();
        return h.jsx("div", {
            className: "bg-brasil-green text-primary-foreground py-3",
            children: h.jsxs("div", {
                className: "container mx-auto px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold",
                children: [h.jsxs("span", {
                    className: "flex items-center gap-2",
                    children: [h.jsx(Pn, {
                        className: "w-4 h-4 text-brasil-yellow"
                    }), " Estoque limitado"]
                }), h.jsxs("span", {
                    className: "hidden md:flex items-center gap-2",
                    children: [h.jsx(Sn, {
                        className: "w-4 h-4 text-brasil-yellow"
                    }), " Envio rápido para todo o Brasil"]
                }), h.jsxs("span", {
                    className: "hidden md:flex items-center gap-2",
                    children: [h.jsx(Rn, {
                        className: "w-4 h-4 text-brasil-yellow"
                    }), " Compra 100% segura"]
                }), h.jsxs(pn, {
                    to: e && t ? "/membros" : "/login",
                    className: "flex items-center gap-1.5 underline-offset-4 hover:underline",
                    children: [h.jsx(Tn, {
                        className: "w-4 h-4 text-brasil-yellow"
                    }), e && t ? "Área de Membros" : "Entrar"]
                })]
            })
        })
    },
    Cc = 97.9,
    Ac = {
        11: 167
    },
    As = e => Ac[e] ? ? Cc,
    Es = e => e.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2
    }),
    Ps = ({
        product: e,
        onBuy: t,
        onDetails: r,
        index: s
    }) => h.jsxs(Tt.div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: !0
        },
        transition: {
            delay: s * .08,
            duration: .5
        },
        className: "group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-border h-full flex flex-col",
        children: [h.jsxs("div", {
            className: "relative overflow-hidden bg-muted cursor-pointer",
            onClick: () => r(e),
            children: [h.jsx("span", {
                className: "absolute top-3 left-3 z-10 bg-brasil-yellow text-secondary-foreground text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full",
                children: e.tag
            }), h.jsx("img", {
                src: e.image,
                alt: e.name,
                loading: "lazy",
                width: 512,
                height: 640,
                className: "w-full h-56 sm:h-72 object-contain group-hover:scale-105 transition-transform duration-500"
            }), h.jsx("div", {
                className: "absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center",
                children: h.jsx("span", {
                    className: "opacity-0 group-hover:opacity-100 transition-opacity bg-card/90 text-foreground text-xs font-bold px-4 py-2 rounded-full",
                    children: "Ver Detalhes 🔍"
                })
            })]
        }), h.jsxs("div", {
            className: "p-4 flex flex-col flex-1 sm:hidden",
            children: [h.jsx("h3", {
                className: "font-bold text-sm text-card-foreground mb-2 line-clamp-2 min-h-[2.5rem]",
                children: e.name
            }), h.jsxs("div", {
                className: "text-center my-2",
                children: [h.jsx("span", {
                    className: "text-muted-foreground text-[10px] line-through",
                    children: "R$ 189,90"
                }), h.jsx("span", {
                    className: "block text-brasil-green font-bold text-xl leading-tight",
                    children: Es(As(e.id))
                }), h.jsx("span", {
                    className: "text-[10px] text-muted-foreground",
                    children: "via PIX"
                })]
            }), h.jsxs("div", {
                className: "grid grid-cols-2 gap-2 mt-auto",
                children: [h.jsx(Tt.button, {
                    whileTap: {
                        scale: .95
                    },
                    onClick: () => r(e),
                    className: "bg-muted text-foreground font-bold px-2 py-2 rounded-xl hover:bg-border transition-colors text-[11px]",
                    children: "Ver Detalhes"
                }), h.jsx(Tt.button, {
                    whileTap: {
                        scale: .95
                    },
                    onClick: () => t(e),
                    className: "bg-brasil-green text-primary-foreground font-bold px-2 py-2 rounded-xl shadow-cta hover:bg-brasil-green-dark transition-colors text-[11px]",
                    children: "Comprar"
                })]
            })]
        }), h.jsxs("div", {
            className: "p-5 hidden sm:block",
            children: [h.jsx("h3", {
                className: "font-bold text-lg text-card-foreground mb-1",
                children: e.name
            }), h.jsx("p", {
                className: "text-muted-foreground text-sm mb-4 leading-relaxed",
                children: e.description
            }), h.jsxs("div", {
                className: "flex items-center justify-between",
                children: [h.jsxs("div", {
                    children: [h.jsx("span", {
                        className: "text-muted-foreground text-xs line-through",
                        children: "R$ 189,90"
                    }), h.jsx("span", {
                        className: "block text-brasil-green font-bold text-2xl",
                        children: Es(As(e.id))
                    }), h.jsx("span", {
                        className: "text-xs text-muted-foreground",
                        children: "via PIX"
                    })]
                }), h.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [h.jsx(Tt.button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        onClick: () => r(e),
                        className: "bg-muted text-foreground font-bold px-4 py-2 rounded-xl hover:bg-border transition-colors text-xs",
                        children: "Ver Detalhes"
                    }), h.jsx(Tt.button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        onClick: () => t(e),
                        className: "bg-brasil-green text-primary-foreground font-bold px-5 py-3 rounded-xl shadow-cta hover:bg-brasil-green-dark transition-colors text-sm",
                        children: "Comprar Agora"
                    })]
                })]
            })]
        })]
    }),
    Ss = "/assets/2024-home-1-9RZ9xY_P.webp",
    Ec = "/assets/2024-home-2-new-CvaXZKk-.webp",
    Pc = "/assets/2024-home-3-new-CAG2ONgB.webp",
    Sc = "/assets/2024-home-4-SSzL3pvY.webp",
    Rc = "/assets/jersey-away-2024-alt-BSseyA8e.webp",
    Rs = "/assets/retro-2002-1-I3WI64tD.webp",
    Tc = "/assets/retro-2002-2-GwM4_G88.webp",
    kc = "/assets/retro-2002-3-8Fle9Lu4.webp",
    Oc = "data:image/webp;base64,UklGRoIFAABXRUJQVlA4IHYFAADQFwCdASpaAFoAPpVCnEmlo6KhKBcb2LASiWgAyqw0zRFeurtx78+ehL00/MR+1XrVeizzwOob3lytJ18HAb6lPJTv8MKNMTjr9Ev6I9Af1l7Av63lrQYcEhzU9o1Dwzj9v2X3kcslHJr4G6Ef/5YzEmh2rQvwxUn6P/JGE37Cww21oXf4Hv9yeoQrXeHEATX53K2i2xkja1IAeFaCwJEXfGB3Yv4bL2YerkHY67JAAJKr0NzSmrJnp1cE4T98vYwwlKQ4yjIAAP5SnaxhzjNUXTyGNxxLFo7TP3NZi0SR4VSitXRO/MUfAC0aJaDPRXgwHdHbLrPdhSWn9Ouy8/jEt3vF4S0JTJi/o68aaBCJ1ubcJl/eyL0fJpn6ce5rUDujgBAevHuRws3L18JxDhSTH6yIuUxiL03ddkiiZn4O31fSF6n4XZp6imlyxuFyhvrtOGCnhZL9HKjPFH44OTcXNpJsYQ+ooyAsVga3jCqc653YM6ds5r3+pkyJeS68YXlNPAszE84Qp3xFo1DfcF+aK3F9gHvtFjR5l14jo4xK3WhLfbm5hnP2YIDoF8Aiyh/JTQaR7oSRH9ftOA0XnI1AYX0i6pqTcCwEr6leJP7IlOaqBVz6GMJ/p6P3z4tfb34LIVClbbJDmKj7NlvYM5LgZ/tdzKhm3L/3/61oF2vipGrh2cXam2jTXVe8DkPq0A4yiX+yFyQs8y/Q166cXa+1uBMsXIXOj7LuCwqk28iT8nUqTRqNvlg9Hr/Kae/0gYSYcxVDOi7wn+c8xJrsWYBmWNdbkT4YutJqG5XWZXiiOzBsMiJ7lPT3+Uih1VmZ2/aO/pu/tiliwQ817rtlpPHn4Uvj33kFBmFfsx3ZTnDW+5NBBAIEM7NM1Uz1kBRcpzoVQvItfj7d9YVsy2gycUMNUbfTe8ylg1MR56tn1G67XCBZa/AdaKZ5n8OvQfxmr5rmd/vqLL1AVP8l2bZdmlGItiv6aVL04YhXAvtHFm0vmSZ7WvL9x7nLKvDNvjaQeMrAGX7DrPfiAjnXlchku7FvQlOGyuqxPzRuOrj+7+PUaD63hEI5z2XzoRh7SUOinNWk91U4lFiTtbFFvnkIh5o3YOioCDKhYT65kmG0RRyflMwRwe5o5YbZheD7ZXznCCEb5L5tWDy6g3JKr424iKrMXcotxxOMuzbX3ywhRuzsiwSvZyUsJw/9+8DxmEqp+UvqekrYTdkkCwMGP8PXq9VoDXweFaQ1JuHZVnzoIh6AG0zj+dVmMKToMf/v6v99bBrqNfK9x/a5+Nt0e15YmtnSGB5M8pDYE8FqhicxpxmH+0igN+9DZWTM1hgYxB8lvc279f1glgtqKs0OnFRIJOgf0Nvf/t7VbIUJzB+tgcolMnW4KKjU2jeG40DwJFyb43aiLT+hxb5I5Z9lSAZbkqaSXgcLcDOaG+9vWB7old+4RLU4g9pcWT9PlE3d1XXc9thtNT8tmp20KvKpUzEP1PzXCX1vRY+Y8sE7/B9WOZZnowrYRmranb/qfyenKFuR08kijqxwQf8BIPfTI+2zeth5RW9X5iD/k9UKbv5gevy5OPp8AbpLL/jv7+/gVIuPSiwYFbdIP6qR+2nI8HVdUXarpQ2WXcJfQCQ0x9UWjgbn278aVZGM63pMhXBLv/jz9du5ov75bEX8aPk+9cHucHKC4RhU1xbTxb1NfwOYxG/3oa0eHBXP1NgSsVguNXMyiufD3bexa2KwKNmptxyBi7M+xZgwkevXzcJlfd6Bm44RKrTRmNVN/uoJJxnab+pXa+678G5MCWvgG8Evq0FmevzQ9F77EZzlG1T2x7nxvxWYTmiKD2mUzegOQeEzyJADMXPPZ7uAAAA=",
    jc = "/assets/retro-2002-5-CV5Ro7_4.webp",
    Nc = "data:image/webp;base64,UklGRhYGAABXRUJQVlA4IAoGAADwGgCdASpaAFoAPpU8m0mloyKhK5YsKLASiWoNuuVYbIX27rRw09Z4zvknwtzrSDetr+B0mvMG/VrpWeYD7QOEL6Vn0JfLh9lL9sP3A9qp5Lo4q1oMsVlTO/GP9X+wR+uXpjezT9qvaA/Y5HycMX3PH9MH7yimwDfuQG/k2yWqTqo81Df3W/rofxh+lB/YsNV1vgXNVvL5fEa+BOofyhQJbzVYonpeA1vd15RrnWv3s9NiDpEWnHcD8eaPAeXY4SzpTC8Hg3p0DnK2ceUM2Lue+DOT+YKFrTpzRNNPFQGzAAD+79LwR7pK/2kr/aSs2imN5UxsXDO8fxbuJx9qmx2Jd5zlaTMn8wt+UA47bouZJCyCgt+Qk7BNtK02hNtij9VWnzfXTAicRlQObvTsUGErsJwmas9X+nO/zT8EctO84vty/3W+5lv2BEWM8DiZXBNEuR9qv6mjVC8Lk36cr9FES4BCshRnByQ4GEUJ9auJ/jScmkPumaTJ/8bcB+r4FGy9ha/J5b4lOUseL30OjhtoVH800gwxTVNA4BTF5lW/jZlqPnV993K77wviA7bWjTQMScabDJen0gTgr13q6JlTW3MvCw/grDHWZGUjU97qUlcNVB7sRQn/gzxOLLUr9qthtRqv9GSd2d3uyYZtiVBB63ue1dcQOpZvxbEzR+t3bEiyWBZDqDU7X0KRRc9+gdaF0kgj+To9oFX5PcHibbiU/6zjcxd9i65nNsub7WSx83wpRZNKX2glIUxPI9FQ3VrUl93mq4QT/Q0pfSjaoaLZed9yGuHELzeX3Wn2PwWl9LmEqYs/GyPUGo5wFEV/2vXa2K64+m9DzgrkQa4xfwM0DvcA47Z3C7Lo2S+b8XQkuMIrZWRFPi9HIDlzeJUhpAe32p++cw96LK9/kCxDGVid5a/XOPVyCOjhm5BZtcNYGBl4Wh7bMvYv5mRhZdk2gtzBoMCRcgIM7CBb7XpFuXX2tdu+ktZl7gNDaSFr3mHxReSDVYMnfQooVa0DSKxByipoACzWmveTwYRebRHtoqWtfgI583bNuAzrVbQNBLvlYRMKXiNJhcPpw6Nopkslg3tYEFEP0UnrFEiR1mw1y6Vwyqutr/CwoOSvw2a7ucJ9DoZIlsQGYwnTOZDdLq/Ky5uULKH+OPuNAOYsWaxlfqTUcFqtvowBRDpD5ugmU1HiPUm/deNRPeqmIfHMKqNcdA6KOyUc31y30Tqgho9Aqd2Q++1Uoe6c6A9vNhuuijgPULY4PolAA01D8XzknNJNf04LaP2CX/PofIe3D1CsH1UzgM6h4vi4eMPPVpSCDI9SS+xN82VOCswz3GfkfzgL9/aYpRAd3OAG6Mq089Tz9B+oWP5V4P/N25g2NzT/QC3X4s/ilEU64L0yXZ2B7IrS+Gu2lTvJH4LYGcPqyfiN5prMrhVhgEJAZ7PAfw6xD+cWNS30M8m1+sB15bYuAPLNnA1Cow9vjZrYVyq4Arn2JjkVHX3IGfelAhiuD3Cn07GawnmWUhPZY6RIg7ktb7S+eWTb/VkQf7zBS4wZSyzvB1PreNEUW6EwtXH7DvF6lgI+e+S2hziTUmHOtoa0uP1KJfEuqVI9FNufiFhMtx38HVKT0vsihbdar8ssu2ICRx6g3k4nQP7VU58a6dt9Uht0Ol6jchN4lW71T7Dkj8EAdWkiuC9xfa70T2XBuztAqBMaB/ZZWsinuScws0j2RbT6B7myD4mmnPemo+VeS/qBgSpxDfyOT1e5iJNqc4HcuWCoxsNe6X2mQgcMQiL4gVywDGtN0qfwuctIkUc1vqyUIS7yzOOXgA5eqjfzLJw3/7Y+ckhdthiEqSi+W5cVKOIfownxdQEQPvXBU7gXJKwOhA4mGX+Ejy0pBj/BtUoPlknLw7LW/0SMmNbZfkR2BUpJEDlsA6y9WjwYE/OMil0E9N5yMOcfOF0jGWh8d2lwckXH68W/rFVYCllFSZ7b3TRCdXHVDQ83hufkz3VIxKti8eHSQUl/8zzjVXNiD1LG5F3L2vIR4J2XGMGZJ6mLITebFJVYmTuz5DDzAAAA",
    Dc = "/assets/retro-2002-7-BRgh7-gN.webp",
    Ts = "/assets/retro-1970-1-BNodD59k.webp",
    Mc = "/assets/retro-1970-2-CR0qeu6i.webp",
    zc = "/assets/retro-1970-3-B9DdCVUY.webp",
    Bc = "/assets/retro-1970-4-CLFetVGT.webp",
    ks = "/assets/retro-1994-1-veOi2_ds.webp",
    Fc = "/assets/retro-1994-2-DmaKu1IB.webp",
    Lc = "/assets/retro-1994-3-BHsw3muU.webp",
    Ic = "/assets/retro-1994-4-1GXGZ3yl.webp",
    Uc = "/assets/retro-1994-5-m3RGBQY1.webp",
    Os = "/assets/black-gold-1-BshCxj_c.webp",
    qc = "/assets/black-gold-2-Ceh_Ueae.webp",
    Vc = "/assets/black-gold-3-Io3_mBUf.webp",
    _c = "/assets/black-gold-4-DG5AYloV.webp",
    Hc = "/assets/black-gold-5-BPaa3W4K.webp",
    Xc = "/assets/black-gold-6-ehW_I_i4.webp",
    Gc = "/assets/black-gold-7-BSnru-al.webp",
    Wc = "/assets/black-gold-8-BdhBgTBr.webp",
    js = "/assets/away-2022-1-CdITBB5A.webp",
    Qc = "/assets/away-2022-2-BxqENQNp.webp",
    Yc = "/assets/away-2022-3-S56_nlQC.webp",
    Kc = "/assets/away-2022-4-DE87hUO0.webp",
    Jc = "/assets/away-2022-5-DiIy9mRc.webp",
    Ns = "/assets/away-retro-2002-1-BzfUPr2B.webp",
    Zc = "/assets/away-retro-2002-2-6RK-ILjW.webp",
    $c = "/assets/away-retro-2002-3-CDI4i-an.webp",
    ed = "/assets/away-retro-2002-4-C9gsWhYH.webp",
    td = "/assets/away-retro-2002-5-CnDOLb_m.webp",
    rd = "/assets/away-retro-2002-6-beCXxam6.webp",
    sd = "/assets/away-retro-2002-7-hMuhXg5B.webp",
    Ds = "/assets/brasil-2025-1-N-bBGnuX.webp",
    od = "/assets/brasil-2025-2-BI3vrrZy.webp",
    nd = "/assets/brasil-2025-3-Bd32h8Jz.webp",
    ad = "/assets/brasil-2025-4-CnT8zv1M.webp",
    id = "/assets/brasil-2025-5-CEUq4Xf2.webp",
    ld = "/assets/brasil-2025-6-tut_BBEX.webp",
    Ms = "/assets/brasil-2026-1-E1oLqLlO.webp",
    cd = "/assets/brasil-2026-2-pjz7VxaP.webp",
    dd = "/assets/brasil-2026-3-DPXun8wS.webp",
    ud = "/assets/brasil-2026-4-DUXLe4L_.webp",
    fd = "/assets/brasil-2026-5-Dg_4RA5t.webp",
    hd = "/assets/brasil-2026-6-BgWjoLBv.webp",
    zs = "/assets/jaqueta-1994-1-DIRteSYB.webp",
    pd = "/assets/jaqueta-1994-2-ivRK07iF.webp",
    md = "/assets/jaqueta-1994-3-DHdbg4_y.webp",
    gd = "data:image/webp;base64,UklGRoIIAABXRUJQVlA4IHYIAACQJgCdASpaAFoAPlkUlksjkdHNiDgFhLYAXDSAHLjSm7j/Rv2b/F35VK4/Zfv3y3Bxe3z899vXwR/2Hsv/O/+19wn9P/8t/QPVJ/Wb3ueYf9Zf1z92T/deqj/AeoR/dP9V1onoAfsd6Zf7IfCF+237ae1B//6fk+p45D0m2SPrQlZpXkt1DOkowqJ/0H1320vbV6uRi1w1FnrL47tw9ZZVJ6mGDyFKe4/lXKzF5BJ25d+iN5HLgyXFTvpvKh+TZNiUJF7u5iN7+9/RZsvLOd+fBHj4o+9gD46Poe+kYxvij5gXzQwt2Momx8L7ykmS9gqlgHwJsrvtqJO8Bo8MIGO2TUuEEdciwc847UVo5ENE99Aw/c1sbrL1FlQEAOHJMVtHTLEKJeFsxO5GZ68R5Wz4QAvC+HYd1KXSKkWrcAD+/4jb8NmzXNTDnmM4uFLUAvJDshoMN+pa7imfPM6vVkLPpR0TvPtAojJfqGDOhKOzQGGI+FZekM4QbfGqlEXfxpQff71oh3bpeqwmME+9tNe3EXhzPmlFBI+MPgz+nxVwpye2QWVgs2ep/7mbfs5N7CJK/2m5EUSRckKCtR/2bq+bnjCO84lQDZWOkKiyghfAUKAixk8nBUd/Vd0/ktDllaXXV11NJuLIosd1bfzdwMPry4B3yxyqNwolxiPqI7L+8R45H6a9jmEYCwDbfzhMYmPRct0yQ0oOq8ksiA5wmGQ8cxnXFrz6pvJ5sCmS2vi/UwuKIIIVnK25dTQ1ziqcR0dybuxn6oGpCOkoF22X4sRkn9KpaXlWkZMEhnMxXYbz1j15e5gaMvm2c8vYOnW85DJFsldnszyT4gLa/mDqwALsZq++Gk/hxI2veiUMSIGuF+UI8KGTdbvjiTPjhm5dkyCct46hcQJxJcy/9tLwngK30wXZR2yxB/aO1zaVj+jiSLxtTb/IKiPnQcxfAHBZ5Cztu3x2ub/BcoNyk8hxPkTzrA9YA7L51HnAOX/HxtZnFe1ff/3Y6jXdtceRIrslyEweM6oKy/Njm8rq1+uXOKmd5TUb/pwjHVDhN/ezrXj0HcNp0/DkY804MCEqalqJ82wotJoG6nmEf2LrV7q0nuNxK4mcO9BY4WbMIfE/syU4VPivv/Ptt/qp7hdFfuS1LPzKz22z8MK1UtPPUBnwdiGYH+kUKK4lkXzCR8dAdUV6fxVVsD2ygpglpPow0rk9io8TmB3kNVU2eLRZV2vkXzzKkyjSTPyNeOGlR4WXSxYpyK6b6UVS1DhwEz5ciu1WECYnXLz7UWbGUn/Rn8xFt462yHPXShkI0HDhGJXTeLk/i3lLqHcUwBVduvmzOlLP6O1J8FsMev1lkZAowWT+RtGfQ+ZoXh3moj2u4WogMz2ruTZz0tIekp3ri6f3KndhwAB2PUkkahJk4XCKk5GBssh/f/zYyj/4xf+3Oyax6M8a+2n8vXFaubsa7RODW/dA4jlX20qP9EOEmWbzr5vNwP+q+De/bZrnPJmxwiu9x6Y2L2a1E23wtkq7g3eq0XFxn4j4bQAk4yXbIlOnYj0x/3IzDN4/lxymqvDM2jdemugT14D+QNQcN7QAo11pyCSlEQqwv8vl29fxmZvpS+W+tOdl6LMRIkeQ7WNxzhXLVdIp5zys/0uoGrBF9fE4KTsvRf2J1Ce74WVsY1y5NT9YuuC+ECnSJxBQnlwWDQviJpPOfnTz84vMEp9mwQ3X2nLhodu6Nyt2SSqJpOzhZ8WWPbZ2Lhs3M+YRRPOPBCFtNeUvJt0EjGd+UCsaB1sTPzF2ZJw0ODxvLpkP4UlxuspyIfJfrhH1D7/ENx2P1veKfM1x+j/cmaciGyacQrMwuZP6fL1jW1F9oTcGSCzlNvYuqJk4l5mtV7o2zsHYufEdEyDyIiyzmmpMT7L3tzRe9MmaXfpgraEhxBEzfXGc9xne8XQcqvMm6/PbXrDFmUsvvmcXrFbUf0Rr4lBO5/Hb/grFgBHRDm8/CJp07QzO1mpbJGxRlJ8Fx003jz3skWaG3vb3+UxPwv3nfwOAnlT4yV7CXLZ00uhQ+NBvWZAZ0jdadpPoKtMzD6ByEC5eucSBg5RUXlrVb9G3v9vgSEBp0/D0UlYWx+DQqudX83A3kfEHQGGvt/1cv3NjLA9ZNo8wCGj01yA2G5gc6g70IjWN7yqy/dsa8D5p34hdf/dD7zZnRUXVoFhB3VWKh/UbyJ1XyPv4+GD5ijauk/jqOOp1IBaTDQFgZdXBCpgCuFa78j3CpTtvjxGJ+kRpe+pkchSwXek0OSkMqB6ZfIofrBvmXJWGd4h4qZs+5WbbRkWeQxU5biGMw/MXRXNqg6Z39Xq1hLpJe+bCFLrB5QoDsEv94RgnvCjc0LvtXBae7m8bLavYh2mciCT1j5UUWvNrPEZlQgnQD9dMAsbRRn47w7v6pEO6wLEKe0flArWy/niBxCHBT6hFaXnKnnixUtYuoXX26mR3t546yCrwe/2wjwqIXt2TH4GKEDytJYFyMT9V0eaaLasrkv4K5a1M8fXY9Dv0BeQEql69DIycgS83bMZguW/Wi09yfBXJehPNoLASU97JSUzhPGoB0h8bGN85mgXyBea8v4NXcv2fpoTf7aCjeJM8H1i9OwYbrrllueAV/HKGZV1iK188TUdm+C/RV6iRlj4rpotkZl5yT6gAMsAX2NBbC3oAbHqxsPczt82kVQ1ZNSxZSEQdUyNxCx+l6e0uq50fdZusdgJk7523aU7JPDvgBQrgSH2n8Yi1rIPaHonJpyOA+dS0aZg3/FyHSXSQY9sh9ahUshzhQG7/JavHb/vsCJNXoUFE+awFP0yDCw+hcnWy8QYW0shYrMC2wEvgsZxMo/92EWlxk53yJ2QN/3OLEiu15wisAAA=",
    bd = "data:image/webp;base64,UklGRtAJAABXRUJQVlA4IMQJAADQJgCdASpaAFoAPmUYmUykISQkFcCADIlsALEe3sRX2HmbWT/K79uXq3h6Pf8F6g3OY8wHmzeib9g+qS9YD+w+pR0uf91tPnRDwz8s/zCUFcR9ppAK1d935rfZL0OeYX/N8gX0bz9+sV/q+WnUO/XDrX+jh+xwi6sSwIG/JTCGRX01cEFGg9l+6rmEkOJ12s272NrO3xZPqFw7TzluSA4BYBpT/AnPQPNdsRx9S7Do76oyj56ZA4aXltjZxcyUVgH0w4fpqa3PR3+VmV3hWYlTtub13kCOPYgpxCAqO7dPnyRwtodFf4UuxrHC2saL6gbpBF9evrxbX91yBCmVvcUlWDSCCv1wjCwej1zEp87z9tA1saTp5REMMe6GEEhX5cE8OfRXZcmEf++ifSVnOHkqcUo10VNA2Ny1f0L60uDwAP7921vPBw2VWcUbDReh76iDnStla/s73ShY1591ei8lf2oWXv0fBmd1SbKv78eHmiannkaTcqh5yZl2p0D0k3RPq050/bIhA5Sk1Jp28WLvForCwFGcRUzP/P5E40R0v+sUHeJbL+mDP2++FB39gRj9nhpViJABlhD36VBmOrpCC/Y8HWD9Qq7X/9CLPrn+Al4jLAkgUm8uDmNKZ4SXTvu6ztiMByu9i6oxZRtvJ/NnLu9/do/iIyfECpw5PZIk7VgfhpCjkHWGkSuO9gD6HpzTiJP+Ku7h9tnseXXFHxXpswzBfveCvdQoKjYOvpSxvNlTnxnz5iyKi545eMEiLF8nn2JiyyoKzXpF1vYMKBBDGj2kgZ4JSZUWt/4g/Qs8vTCC4FeeoMXrVmYUcgdnrcuTba+R5iGx0wj+ZPpIg0iIrcU5cSDtm630MfGoxMYUefC4DZiAZ95xpga/cOSUpMXnR5lz0/TivimUV0ypiLhDMg4q3a96VjboW7RZEIoxBvK1Sg9Ormm7P5Y+1nUYfEqegQZAJ35J/4t8FRj360GFsbhIe6e0lJ4Ytlgleb3j+pUfvDp+3WbjzMXD/yUDtdd/91+NlD37WN17BuMs5d+2ZIKp9sfZ47NKTfDmbOn+UHnE2T/jyPlef9Pub9U0o6EfaAdSM5atotnHChXO/tGuelw/uIfXZNpWd+/vv40djDU4bUscU8zrTEBaxA50/+5tdzFD9f9QU9R9OjdkuS6GjLE+u//gvBuzN2zuMzgiaH8wF0js4QICVbqF9E/eaKE81LoeANmMi6ZaQv1NyMvMoPMBQN8CKaQ815B/tl7dHEZrWp8V7strIHUXH/RcNQ3LN7W28NcM/Ek68SCd/rKHfguhfxQj7tm1i8VgvD+j7zylPXARDVPKbeyP8fsWgkStY53+WZ9afWByOkuQqWld+N5rIN4a5d35qQ/0JeDzGrmsBz6VV5Kr6skGcqtKB0F7kqoSimMJrVsvshbw9mBXKqXqKw4SkbPFD5/phGllrsHwWnzuf9R1j7bjDk/6sWOtvLlZnbwUvL3pdP3C0+z6P270XcuNaB0tZVJDziqUopfPiyconIAe4uezYTL9UTWQdwcQKH1bL1szDCymWWSHhUk2yZ+gcU7TGeLg/0u2EPSgCVkFrOGBuxL27ow1UJYAqJxn+xAIGQs7NuVLzdGEpwaJOYZ7VkGz/upohv/w0WPpYL5mURSdmOmFO2b1lQ7IE16reIexxkBhrvmAdZ8hqOSawGs0DJBLeQGB9fTA+5Wa0IBB0a8CdsQ87BcDnHoMFwovLr6+gy/FaCezquah6nFZjRiTXHUpKRYo6U8XnP+0E9KuFKjv3j9eTpbfoGjVPRKNIQ5eEz3jVcQVjL6HKFGzje2qJjP44sSzl3D8N/d2xlbxXa1MHCWvkxCi1T5yHv1LnNZF4ot5KiT8Qo5H3dFM9GOOY07pY50q/K5hEwLTlBErCGI1vz/Ig0Lq8UEFSVfYGqjFYjg1ZNeEyEBq+/OUZHW1dLK1EO5uZiYrtzSjjBOvtu2cB8nC67uujtR59Iyb+lWywbWdPW3SR7QWf73a4hOa//BFyfrD4zVBDvn9kXQV2KEOax3hHLnYbwHof9JPVOxPP3XSUj0gnnibNnHGj0pRk7ks2JXzoF8wDjrahnEcM3pUtb+D5YkK0yOUKBkezNAr3RocxrLRDiPQw6PhwSDTlSjDL61PH/80/vjUve2TGbcun+kf+tfI1aWUauT99ZcoGxK0hcRvmNWaG6WRzgUzwBiDbeYyR58ckS/1u3Wnx9NW6v/VPzPJhZYn7oU/IbsWmZDwdb7OoFw7F5FyiUr0mghGq68xo+S51Zusakhwoo71CyCiqLnR6ue49ReOH4ywmiqHZNZJuIkI56vulSlpURIlqrc/zG1lVR78LZStZ0s+VlD0lPwBr7RSoS14GWmKa4fnqXnKlnF88b/BpKDSW6QkFBhCyR6Ef7qerbT0FonqR9sv5sNhyc2QHY5IK9Jtz+pwsygoV+5GYsNuIQXZz501wkQWu9xIHVguO9vYd9sGBjE1mE+cbweJ80sM/LccH5Oqh2EHKEZ75iLkGwBM/qpnmkjiT/w/2ApjAezK5fNTNM013a+wY592prP9SsCTvjbv/jRGXLiePLvSoFjQI9W8YVF2ym7HMa4qd8c4dVcdSJ2QxyHEt9SbvQCm3sfKajvYJfEYzK2yAc5ci59CBLRzgJtD2g+qB5K46MT12e1U1zP1KJZ9/ratBpcEinlqlbTI5qb8vp01vyDz7AOubrIK100vJHEOlCK4bJD1fdK7UuegakDysWqBAzY6s5jjfhgVAYEvgl+XrMxbYWbnV2f+PIEBbr+LBwBcw0+fMLI9P3BvTkV27i4YctHBtMjUe4e7yNdzQODrFiFKWxPIe+n+6WELc3HEwJh0RjN20QyIHItkfvSidvgXWab31LNYoWHLWK1vJNvNIV2uk8ZladwtFUWsNExee6UQVFFxPIYigPY1wYTgzokKTEbLANrEsXMG8dBMXeV/Kwue97nSer1Z02IOlz8oVa8E7Tm7j6d/DqUvUEm2NRl/2ypUL+17EiUj/ElEtJ3AAaQFWhclH7Nf0KyrLvhYHV+9XbRDOeinNFKh/uqExfF4cQCokHO9uif+Q2p5L2ZvY2pkJ7zQvhIA60a/ViKdibqmrDxpbRSE5OVifzJFn+ZMHqc/gWLigSwWRbNXGkysawyU+XpjNxdzkEPEOEEzErnvH0+6oiH/742CHhSorU/9DAO4qBZo6q+Wk2XrLS41IzTbq/AwTTfbtkFojRt6YHt1Iy2CqKPsiYBkJKXDfxVryqdiIHCsfGZFoS/Z8zTircZVnC+UJXLChA084Mu8lrgAALiHSXRdkRd442q5MlwAAAAA",
    Bs = "/assets/retro-1994-azul-1-CHwf15sH.webp",
    yd = "/assets/retro-1994-azul-2-Cqh-lAr9.webp",
    vd = "/assets/retro-1994-azul-3-B_td7Nxb.webp",
    wd = "/assets/retro-1994-azul-4-NscfqUib.webp",
    xd = "/assets/retro-1994-azul-5-mYLtdka1.webp",
    Fs = "/assets/drifit-primary-1-COnTnyJb.webp",
    Cd = "/assets/drifit-primary-2-B265BCSQ.webp",
    Ad = "/assets/drifit-primary-3-CvCQsmy2.webp",
    Ed = "/assets/drifit-primary-4-BNhtxj8h.webp",
    Pd = "/assets/drifit-primary-5-CbGP958B.webp",
    Ls = [{
        id: "11",
        name: "Jaqueta Brasil Retrô 1994 Masculino",
        description: "Jaqueta retrô oficial do Tetra! Inspirada no clássico de 1994, com design ousado em verde, amarelo, azul e branco. Tecido premium e acabamento impecável.",
        image: zs,
        images: [{
            src: zs,
            label: "Frente"
        }, {
            src: pd,
            label: "Detalhe Peito"
        }, {
            src: md,
            label: "Coleção Família"
        }, {
            src: gd,
            label: "Detalhe Gola"
        }, {
            src: bd,
            label: "Costas"
        }],
        tag: "🧥 Edição Tetra"
    }, {
        id: "10",
        name: "Camiseta Masculina Brasil Personalizada - Copa do Mundo 2026",
        description: "A nova camisa II da Seleção rumo à Copa 2026! Design ousado em azul royal e preto com o icônico Jumpman da Jordan. Tecnologia Dry-Fit para máxima performance.",
        image: Ms,
        images: [{
            src: Ms,
            label: "Frente"
        }, {
            src: cd,
            label: "Frente Detalhe"
        }, {
            src: dd,
            label: "Gola e Escudo"
        }, {
            src: ud,
            label: "Costas"
        }, {
            src: fd,
            label: "Escudo CBF"
        }, {
            src: hd,
            label: "Tecido Engineered"
        }],
        tag: "🔥 Copa 2026"
    }, {
        id: "9",
        name: "Camisa Brasil Seleção Brasileira 2025 Lançamento",
        description: "O lançamento oficial 2025! Amarelinha com detalhes em verde vibrante, gola polo moderna e tecnologia Dry-Fit. A nova era da Seleção começa aqui.",
        image: Ds,
        images: [{
            src: Ds,
            label: "Frente"
        }, {
            src: od,
            label: "Costas"
        }, {
            src: nd,
            label: "Escudo CBF"
        }, {
            src: ad,
            label: "Logo Nike"
        }, {
            src: id,
            label: "Detalhe Lateral"
        }, {
            src: ld,
            label: "Etiqueta Nike"
        }],
        tag: "🚀 Novo 2025"
    }, {
        id: "1",
        name: "Brasil Oficial 2024",
        description: "A amarelinha oficial. Tecido respirável, design moderno e o orgulho de vestir o Brasil.",
        image: Ss,
        images: [{
            src: Ss,
            label: "Frente"
        }, {
            src: Ec,
            label: "Costas"
        }, {
            src: Pc,
            label: "Vestida (Frente)"
        }, {
            src: Sc,
            label: "Vestida (Costas)"
        }],
        tag: "⭐ Mais Vendida"
    }, {
        id: "2",
        name: "Brasil Away 2024",
        description: "Azul imponente com detalhes em amarelo. Para quem quer se destacar com estilo.",
        image: Rc,
        tag: "🆕 Lançamento"
    }, {
        id: "3",
        name: "Brasil 2002 Retrô",
        description: "A camisa do Penta! Reviva a glória de Ronaldo, Rivaldo e Ronaldinho.",
        image: Rs,
        images: [{
            src: Rs,
            label: "Frente"
        }, {
            src: Tc,
            label: "Costas"
        }, {
            src: kc,
            label: "Ângulo Frontal"
        }, {
            src: Oc,
            label: "Escudo"
        }, {
            src: jc,
            label: "Gola"
        }, {
            src: Nc,
            label: "Detalhe Peito"
        }, {
            src: Dc,
            label: "Tecido"
        }],
        tag: "🏆 Pentacampeão"
    }, {
        id: "4",
        name: "Brasil 1970 Clássica",
        description: "A camisa de Pelé na Copa do México. Um ícone eterno do futebol mundial.",
        image: Ts,
        images: [{
            src: Ts,
            label: "Frente"
        }, {
            src: Mc,
            label: "Ângulo Frontal"
        }, {
            src: zc,
            label: "Costas"
        }, {
            src: Bc,
            label: "Escudo CBD"
        }],
        tag: "👑 Lendária"
    }, {
        id: "5",
        name: "Brasil 1994 Retrô",
        description: "Tetra! O estilo inconfundível dos anos 90 com toda a nostalgia do título nos EUA.",
        image: ks,
        images: [{
            src: ks,
            label: "Frente"
        }, {
            src: Fc,
            label: "Frente Detalhe"
        }, {
            src: Lc,
            label: "Costas"
        }, {
            src: Ic,
            label: "Escudo CBF"
        }, {
            src: Uc,
            label: "Ângulo Lateral"
        }],
        tag: "🇧🇷 Tetracampeão"
    }, {
        id: "12",
        name: "Camisa Futebol Brasil Retrô II Copa do Mundo 1994 Azul Masculina",
        description: "A icônica camisa II azul do Tetra de 94! Gola polo branca clássica, escudo CBF bordado e estampa Umbro autêntica. Nostalgia pura para colecionadores.",
        image: Bs,
        images: [{
            src: Bs,
            label: "Frente"
        }, {
            src: yd,
            label: "Costas"
        }, {
            src: vd,
            label: "Detalhe Estampa"
        }, {
            src: wd,
            label: "Escudo CBF"
        }, {
            src: xd,
            label: "Logo Umbro"
        }],
        tag: "🔵 Tetra Azul"
    }, {
        id: "13",
        name: "Camiseta Brasil Dri-FIT Nike Primary Masculina",
        description: "A nova Primary da Seleção! Estampa exclusiva em azul petróleo com tecnologia Dri-FIT Nike, escudo CBF bordado e swoosh amarelo. Conforto e estilo para os verdadeiros torcedores.",
        image: Fs,
        images: [{
            src: Fs,
            label: "Frente"
        }, {
            src: Cd,
            label: "Vestida"
        }, {
            src: Ad,
            label: "Escudo CBF"
        }, {
            src: Ed,
            label: "Swoosh Nike"
        }, {
            src: Pd,
            label: "Costas"
        }],
        tag: "💧 Dri-FIT"
    }, {
        id: "6",
        name: "Brasil Edição Black Gold",
        description: "Edição especial comemorativa em preto e dourado. Elegância e exclusividade.",
        image: Os,
        images: [{
            src: Os,
            label: "Frente"
        }, {
            src: qc,
            label: "Costas"
        }, {
            src: Vc,
            label: "Ângulo Frontal"
        }, {
            src: _c,
            label: "Gola"
        }, {
            src: Hc,
            label: "Estrelas"
        }, {
            src: Xc,
            label: "Escudo CBF"
        }, {
            src: Gc,
            label: "Barra"
        }, {
            src: Wc,
            label: "Etiqueta Nike"
        }],
        tag: "✨ Edição Limitada"
    }, {
        id: "7",
        name: "Camisa Seleção Brasil 2022/23 Away",
        description: "Azul vibrante com mangas estampadas em verde. O modelo away que marcou a Copa de 2022.",
        image: js,
        images: [{
            src: js,
            label: "Frente"
        }, {
            src: Qc,
            label: "Costas Neymar Jr"
        }, {
            src: Yc,
            label: "Gola"
        }, {
            src: Kc,
            label: "Escudo CBF"
        }, {
            src: Jc,
            label: "Logo Nike"
        }],
        tag: "🎯 Exclusiva"
    }, {
        id: "8",
        name: "Brasil Away Retrô 2002",
        description: "A azul do Penta com colarinho clássico. Nostalgia e estilo em uma só camisa.",
        image: Ns,
        images: [{
            src: Ns,
            label: "Frente"
        }, {
            src: Zc,
            label: "Costas"
        }, {
            src: $c,
            label: "Gola e Escudo"
        }, {
            src: ed,
            label: "Gola Traseira"
        }, {
            src: td,
            label: "Ângulo Lateral"
        }, {
            src: rd,
            label: "Escudo CBF"
        }, {
            src: sd,
            label: "Detalhe Manga"
        }],
        tag: "🔵 Clássica"
    }],
    Sd = ({
        onBuy: e,
        onDetails: t
    }) => h.jsx("section", {
        id: "produtos",
        className: "py-20 bg-background",
        children: h.jsxs("div", {
            className: "container mx-auto px-4",
            children: [h.jsxs("div", {
                className: "text-center mb-12",
                children: [h.jsx("h2", {
                    className: "font-display text-4xl md:text-6xl text-foreground mb-3",
                    children: "Nossos Modelos"
                }), h.jsx("p", {
                    className: "text-muted-foreground text-lg",
                    children: "Escolha sua camisa e vista o orgulho brasileiro"
                })]
            }), h.jsx("div", {
                className: "sm:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide",
                children: h.jsx("div", {
                    className: "grid grid-rows-2 grid-flow-col auto-cols-[70%] gap-4",
                    children: Ls.map((r, s) => h.jsx("div", {
                        className: "snap-start",
                        children: h.jsx(Ps, {
                            product: r,
                            onBuy: e,
                            onDetails: t,
                            index: s
                        })
                    }, r.id))
                })
            }), h.jsx("div", {
                className: "hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: Ls.map((r, s) => h.jsx(Ps, {
                    product: r,
                    onBuy: e,
                    onDetails: t,
                    index: s
                }, r.id))
            })]
        })
    }),
    Rd = y.lazy(() => ne(() =>
        import ("./HowItWorksSection-DbqoPr2W.js"), __vite__mapDeps([0, 1, 2, 3]))),
    Td = y.lazy(() => ne(() =>
        import ("./OfferStackSection-Crhe27ie.js"), __vite__mapDeps([4, 1, 2, 3]))),
    kd = y.lazy(() => ne(() =>
        import ("./BenefitsSection-DvlmOv3H.js"), __vite__mapDeps([5, 1, 2, 3]))),
    Od = y.lazy(() => ne(() =>
        import ("./TestimonialsSection-CDkgT7BM.js"), __vite__mapDeps([6, 1, 2, 3]))),
    jd = y.lazy(() => ne(() =>
        import ("./FAQSection-CiYC3s22.js"), __vite__mapDeps([7, 1, 2, 3, 8]))),
    Nd = y.lazy(() => ne(() =>
        import ("./FooterSection-DJWA_pH2.js"), __vite__mapDeps([9, 1, 2, 3]))),
    Dd = y.lazy(() => ne(() =>
        import ("./ProductDetailModal-FYK0pa4_.js"), __vite__mapDeps([10, 1, 2, 3, 8]))),
    Md = y.lazy(() => ne(() =>
        import ("./CheckoutModal-B31uABaz.js"), __vite__mapDeps([11, 1, 2, 12, 3, 8]))),
    zd = y.lazy(() => ne(() =>
        import ("./WhatsAppButton-DENbR1jl.js"), __vite__mapDeps([13, 1, 2, 3]))),
    Bd = y.lazy(() => ne(() =>
        import ("./StickyMobileCTA-DRvLL8B1.js"), __vite__mapDeps([14, 1, 2]))),
    Fd = y.lazy(() => ne(() =>
        import ("./RecentPurchaseToasts-BmAmSU5E.js"), __vite__mapDeps([15, 1, 2, 3]))),
    Ld = () => {
        const [e, t] = y.useState(null), [r, s] = y.useState(null), [o, n] = y.useState(""), a = d => {
            t(d)
        }, i = (d, c) => {
            t(null), s(d), n(c)
        };
        return h.jsxs("div", {
            className: "min-h-screen pb-20 md:pb-0",
            children: [h.jsx(xc, {}), h.jsx(wc, {}), h.jsx(y.Suspense, {
                fallback: null,
                children: h.jsx(Rd, {})
            }), h.jsx(Sd, {
                onBuy: a,
                onDetails: t
            }), h.jsxs(y.Suspense, {
                fallback: null,
                children: [h.jsx(Td, {}), h.jsx(kd, {}), h.jsx(Od, {}), h.jsx(jd, {}), h.jsx(Nd, {}), h.jsx(zd, {}), h.jsx(Bd, {}), h.jsx(Fd, {})]
            }), h.jsxs(y.Suspense, {
                fallback: null,
                children: [h.jsx(Dd, {
                    product: e,
                    onClose: () => t(null),
                    onBuy: i
                }), h.jsx(Md, {
                    product: r,
                    size: o,
                    onClose: () => s(null)
                })]
            })]
        })
    },
    Id = (e, t, r) => {
        if (!(typeof window > "u") && typeof window.fbq == "function") try {
            t && r ? .eventID ? window.fbq("track", e, t, {
                eventID: r.eventID
            }) : t ? window.fbq("track", e, t) : window.fbq("track", e)
        } catch (s) {
            console.warn("fbq track error", s)
        }
    },
    Ud = () => {
        const e = mn();
        return y.useEffect(() => {
            const t = window.setTimeout(() => {
                Id("PageView")
            }, 0);
            return () => window.clearTimeout(t)
        }, [e.pathname, e.search]), null
    },
    qd = y.lazy(() => ne(() =>
        import ("./NotFound-Bp5Fv1LL.js"), __vite__mapDeps([16, 1, 2]))),
    Vd = y.lazy(() => ne(() =>
        import ("./Login-BPWttlHV.js"), __vite__mapDeps([17, 1, 2, 12, 3, 8]))),
    _d = y.lazy(() => ne(() =>
        import ("./SetPassword-DQSUz2Q6.js"), __vite__mapDeps([18, 1, 2, 12, 3, 8]))),
    Hd = y.lazy(() => ne(() =>
        import ("./Members-CjAUZln1.js"), __vite__mapDeps([19, 1, 2, 3, 8]))),
    Xd = new ea({
        defaultOptions: {
            queries: {
                staleTime: 6e4,
                refetchOnWindowFocus: !1
            }
        }
    }),
    Gd = () => h.jsx(ra, {
        client: Xd,
        children: h.jsxs(lc, {
            children: [h.jsx(Ai, {}), h.jsx(Ma, {}), h.jsx(gn, {
                children: h.jsxs(fc, {
                    children: [h.jsx(Ud, {}), h.jsx(y.Suspense, {
                        fallback: null,
                        children: h.jsxs(bn, {
                            children: [h.jsx(kt, {
                                path: "/",
                                element: h.jsx(Ld, {})
                            }), h.jsx(kt, {
                                path: "/login",
                                element: h.jsx(Vd, {})
                            }), h.jsx(kt, {
                                path: "/definir-senha",
                                element: h.jsx(_d, {})
                            }), h.jsx(kt, {
                                path: "/membros",
                                element: h.jsx(Hd, {})
                            }), h.jsx(kt, {
                                path: "*",
                                element: h.jsx(qd, {})
                            })]
                        })
                    })]
                })
            })]
        })
    });
to(document.getElementById("root")).render(h.jsx(Gd, {}));
export {
    hc as a, Es as b, ot as c, Id as f, As as g, Ls as p, Xt as s, Zd as u
};