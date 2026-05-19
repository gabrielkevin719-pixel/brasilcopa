import {
    j as d,
    A as ht,
    m as ae
} from "./motion-Dl5ESBnd.js";
import {
    f as pt,
    r as C
} from "./react-vendor-BhhBPzEV.js";
import {
    I as gt
} from "./input-CwTK8_3Y.js";
import {
    g as X,
    f as _e,
    s as J,
    u as G,
    b as Q
} from "./index-HbVrSddE.js";
import {
    X as yt,
    O as xe,
    L as ne,
    Q as Ze,
    q as _t,
    W as xt,
    n as vt
} from "./ui-vendor-CgMXgsDn.js";
import "./supabase-C7dOFRwv.js";
var k;
(function(s) {
    s.assertEqual = a => {};

    function e(a) {}
    s.assertIs = e;

    function t(a) {
        throw new Error
    }
    s.assertNever = t, s.arrayToEnum = a => {
        const n = {};
        for (const i of a) n[i] = i;
        return n
    }, s.getValidEnumValues = a => {
        const n = s.objectKeys(a).filter(o => typeof a[a[o]] != "number"),
            i = {};
        for (const o of n) i[o] = a[o];
        return s.objectValues(i)
    }, s.objectValues = a => s.objectKeys(a).map(function(n) {
        return a[n]
    }), s.objectKeys = typeof Object.keys == "function" ? a => Object.keys(a) : a => {
        const n = [];
        for (const i in a) Object.prototype.hasOwnProperty.call(a, i) && n.push(i);
        return n
    }, s.find = (a, n) => {
        for (const i of a)
            if (n(i)) return i
    }, s.isInteger = typeof Number.isInteger == "function" ? a => Number.isInteger(a) : a => typeof a == "number" && Number.isFinite(a) && Math.floor(a) === a;

    function r(a, n = " | ") {
        return a.map(i => typeof i == "string" ? `'${i}'` : i).join(n)
    }
    s.joinValues = r, s.jsonStringifyReplacer = (a, n) => typeof n == "bigint" ? n.toString() : n
})(k || (k = {}));
var Pe;
(function(s) {
    s.mergeShapes = (e, t) => ({ ...e,
        ...t
    })
})(Pe || (Pe = {}));
const u = k.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
    V = s => {
        switch (typeof s) {
            case "undefined":
                return u.undefined;
            case "string":
                return u.string;
            case "number":
                return Number.isNaN(s) ? u.nan : u.number;
            case "boolean":
                return u.boolean;
            case "function":
                return u.function;
            case "bigint":
                return u.bigint;
            case "symbol":
                return u.symbol;
            case "object":
                return Array.isArray(s) ? u.array : s === null ? u.null : s.then && typeof s.then == "function" && s.catch && typeof s.catch == "function" ? u.promise : typeof Map < "u" && s instanceof Map ? u.map : typeof Set < "u" && s instanceof Set ? u.set : typeof Date < "u" && s instanceof Date ? u.date : u.object;
            default:
                return u.unknown
        }
    },
    c = k.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class P extends Error {
    get errors() {
        return this.issues
    }
    constructor(e) {
        super(), this.issues = [], this.addIssue = r => {
            this.issues = [...this.issues, r]
        }, this.addIssues = (r = []) => {
            this.issues = [...this.issues, ...r]
        };
        const t = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e
    }
    format(e) {
        const t = e || function(n) {
                return n.message
            },
            r = {
                _errors: []
            },
            a = n => {
                for (const i of n.issues)
                    if (i.code === "invalid_union") i.unionErrors.map(a);
                    else if (i.code === "invalid_return_type") a(i.returnTypeError);
                else if (i.code === "invalid_arguments") a(i.argumentsError);
                else if (i.path.length === 0) r._errors.push(t(i));
                else {
                    let o = r,
                        f = 0;
                    for (; f < i.path.length;) {
                        const h = i.path[f];
                        f === i.path.length - 1 ? (o[h] = o[h] || {
                            _errors: []
                        }, o[h]._errors.push(t(i))) : o[h] = o[h] || {
                            _errors: []
                        }, o = o[h], f++
                    }
                }
            };
        return a(this), r
    }
    static assert(e) {
        if (!(e instanceof P)) throw new Error(`Not a ZodError: ${e}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, k.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e = t => t.message) {
        const t = {},
            r = [];
        for (const a of this.issues)
            if (a.path.length > 0) {
                const n = a.path[0];
                t[n] = t[n] || [], t[n].push(e(a))
            } else r.push(e(a));
        return {
            formErrors: r,
            fieldErrors: t
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
P.create = s => new P(s);
const be = (s, e) => {
    let t;
    switch (s.code) {
        case c.invalid_type:
            s.received === u.undefined ? t = "Required" : t = `Expected ${s.expected}, received ${s.received}`;
            break;
        case c.invalid_literal:
            t = `Invalid literal value, expected ${JSON.stringify(s.expected,k.jsonStringifyReplacer)}`;
            break;
        case c.unrecognized_keys:
            t = `Unrecognized key(s) in object: ${k.joinValues(s.keys,", ")}`;
            break;
        case c.invalid_union:
            t = "Invalid input";
            break;
        case c.invalid_union_discriminator:
            t = `Invalid discriminator value. Expected ${k.joinValues(s.options)}`;
            break;
        case c.invalid_enum_value:
            t = `Invalid enum value. Expected ${k.joinValues(s.options)}, received '${s.received}'`;
            break;
        case c.invalid_arguments:
            t = "Invalid function arguments";
            break;
        case c.invalid_return_type:
            t = "Invalid function return type";
            break;
        case c.invalid_date:
            t = "Invalid date";
            break;
        case c.invalid_string:
            typeof s.validation == "object" ? "includes" in s.validation ? (t = `Invalid input: must include "${s.validation.includes}"`, typeof s.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${s.validation.position}`)) : "startsWith" in s.validation ? t = `Invalid input: must start with "${s.validation.startsWith}"` : "endsWith" in s.validation ? t = `Invalid input: must end with "${s.validation.endsWith}"` : k.assertNever(s.validation) : s.validation !== "regex" ? t = `Invalid ${s.validation}` : t = "Invalid";
            break;
        case c.too_small:
            s.type === "array" ? t = `Array must contain ${s.exact?"exactly":s.inclusive?"at least":"more than"} ${s.minimum} element(s)` : s.type === "string" ? t = `String must contain ${s.exact?"exactly":s.inclusive?"at least":"over"} ${s.minimum} character(s)` : s.type === "number" ? t = `Number must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${s.minimum}` : s.type === "bigint" ? t = `Number must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${s.minimum}` : s.type === "date" ? t = `Date must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(s.minimum))}` : t = "Invalid input";
            break;
        case c.too_big:
            s.type === "array" ? t = `Array must contain ${s.exact?"exactly":s.inclusive?"at most":"less than"} ${s.maximum} element(s)` : s.type === "string" ? t = `String must contain ${s.exact?"exactly":s.inclusive?"at most":"under"} ${s.maximum} character(s)` : s.type === "number" ? t = `Number must be ${s.exact?"exactly":s.inclusive?"less than or equal to":"less than"} ${s.maximum}` : s.type === "bigint" ? t = `BigInt must be ${s.exact?"exactly":s.inclusive?"less than or equal to":"less than"} ${s.maximum}` : s.type === "date" ? t = `Date must be ${s.exact?"exactly":s.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(s.maximum))}` : t = "Invalid input";
            break;
        case c.custom:
            t = "Invalid input";
            break;
        case c.invalid_intersection_types:
            t = "Intersection results could not be merged";
            break;
        case c.not_multiple_of:
            t = `Number must be a multiple of ${s.multipleOf}`;
            break;
        case c.not_finite:
            t = "Number must be finite";
            break;
        default:
            t = e.defaultError, k.assertNever(s)
    }
    return {
        message: t
    }
};
let bt = be;

function kt() {
    return bt
}
const wt = s => {
    const {
        data: e,
        path: t,
        errorMaps: r,
        issueData: a
    } = s, n = [...t, ...a.path || []], i = { ...a,
        path: n
    };
    if (a.message !== void 0) return { ...a,
        path: n,
        message: a.message
    };
    let o = "";
    const f = r.filter(h => !!h).slice().reverse();
    for (const h of f) o = h(i, {
        data: e,
        defaultError: o
    }).message;
    return { ...a,
        path: n,
        message: o
    }
};

function l(s, e) {
    const t = kt(),
        r = wt({
            issueData: e,
            data: s.data,
            path: s.path,
            errorMaps: [s.common.contextualErrorMap, s.schemaErrorMap, t, t === be ? void 0 : be].filter(a => !!a)
        });
    s.common.issues.push(r)
}
class S {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, t) {
        const r = [];
        for (const a of t) {
            if (a.status === "aborted") return g;
            a.status === "dirty" && e.dirty(), r.push(a.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
    static async mergeObjectAsync(e, t) {
        const r = [];
        for (const a of t) {
            const n = await a.key,
                i = await a.value;
            r.push({
                key: n,
                value: i
            })
        }
        return S.mergeObjectSync(e, r)
    }
    static mergeObjectSync(e, t) {
        const r = {};
        for (const a of t) {
            const {
                key: n,
                value: i
            } = a;
            if (n.status === "aborted" || i.status === "aborted") return g;
            n.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), n.value !== "__proto__" && (typeof i.value < "u" || a.alwaysSet) && (r[n.value] = i.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
}
const g = Object.freeze({
        status: "aborted"
    }),
    oe = s => ({
        status: "dirty",
        value: s
    }),
    E = s => ({
        status: "valid",
        value: s
    }),
    $e = s => s.status === "aborted",
    Le = s => s.status === "dirty",
    K = s => s.status === "valid",
    me = s => typeof Promise < "u" && s instanceof Promise;
var m;
(function(s) {
    s.errToObj = e => typeof e == "string" ? {
        message: e
    } : e || {}, s.toString = e => typeof e == "string" ? e : e ? .message
})(m || (m = {}));
class D {
    constructor(e, t, r, a) {
        this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = a
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
    }
}
const Ve = (s, e) => {
    if (K(e)) return {
        success: !0,
        data: e.value
    };
    if (!s.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error) return this._error;
            const t = new P(s.common.issues);
            return this._error = t, this._error
        }
    }
};

function _(s) {
    if (!s) return {};
    const {
        errorMap: e,
        invalid_type_error: t,
        required_error: r,
        description: a
    } = s;
    if (e && (t || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: a
    } : {
        errorMap: (i, o) => {
            const {
                message: f
            } = s;
            return i.code === "invalid_enum_value" ? {
                message: f ? ? o.defaultError
            } : typeof o.data > "u" ? {
                message: f ? ? r ? ? o.defaultError
            } : i.code !== "invalid_type" ? {
                message: o.defaultError
            } : {
                message: f ? ? t ? ? o.defaultError
            }
        },
        description: a
    }
}
class v {
    get description() {
        return this._def.description
    }
    _getType(e) {
        return V(e.data)
    }
    _getOrReturnCtx(e, t) {
        return t || {
            common: e.parent.common,
            data: e.data,
            parsedType: V(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new S,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: V(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const t = this._parse(e);
        if (me(t)) throw new Error("Synchronous parse encountered promise.");
        return t
    }
    _parseAsync(e) {
        const t = this._parse(e);
        return Promise.resolve(t)
    }
    parse(e, t) {
        const r = this.safeParse(e, t);
        if (r.success) return r.data;
        throw r.error
    }
    safeParse(e, t) {
        const r = {
                common: {
                    issues: [],
                    async: t ? .async ? ? !1,
                    contextualErrorMap: t ? .errorMap
                },
                path: t ? .path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: V(e)
            },
            a = this._parseSync({
                data: e,
                path: r.path,
                parent: r
            });
        return Ve(r, a)
    }
    "~validate" (e) {
        const t = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: V(e)
        };
        if (!this["~standard"].async) try {
            const r = this._parseSync({
                data: e,
                path: [],
                parent: t
            });
            return K(r) ? {
                value: r.value
            } : {
                issues: t.common.issues
            }
        } catch (r) {
            r ? .message ? .toLowerCase() ? .includes("encountered") && (this["~standard"].async = !0), t.common = {
                issues: [],
                async: !0
            }
        }
        return this._parseAsync({
            data: e,
            path: [],
            parent: t
        }).then(r => K(r) ? {
            value: r.value
        } : {
            issues: t.common.issues
        })
    }
    async parseAsync(e, t) {
        const r = await this.safeParseAsync(e, t);
        if (r.success) return r.data;
        throw r.error
    }
    async safeParseAsync(e, t) {
        const r = {
                common: {
                    issues: [],
                    contextualErrorMap: t ? .errorMap,
                    async: !0
                },
                path: t ? .path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: V(e)
            },
            a = this._parse({
                data: e,
                path: r.path,
                parent: r
            }),
            n = await (me(a) ? a : Promise.resolve(a));
        return Ve(r, n)
    }
    refine(e, t) {
        const r = a => typeof t == "string" || typeof t > "u" ? {
            message: t
        } : typeof t == "function" ? t(a) : t;
        return this._refinement((a, n) => {
            const i = e(a),
                o = () => n.addIssue({
                    code: c.custom,
                    ...r(a)
                });
            return typeof Promise < "u" && i instanceof Promise ? i.then(f => f ? !0 : (o(), !1)) : i ? !0 : (o(), !1)
        })
    }
    refinement(e, t) {
        return this._refinement((r, a) => e(r) ? !0 : (a.addIssue(typeof t == "function" ? t(r, a) : t), !1))
    }
    _refinement(e) {
        return new te({
            schema: this,
            typeName: y.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    constructor(e) {
        this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: t => this["~validate"](t)
        }
    }
    optional() {
        return z.create(this, this._def)
    }
    nullable() {
        return se.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return A.create(this)
    }
    promise() {
        return ge.create(this, this._def)
    }
    or(e) {
        return he.create([this, e], this._def)
    }
    and(e) {
        return pe.create(this, e, this._def)
    }
    transform(e) {
        return new te({ ..._(this._def),
            schema: this,
            typeName: y.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default (e) {
        const t = typeof e == "function" ? e : () => e;
        return new we({ ..._(this._def),
            innerType: this,
            defaultValue: t,
            typeName: y.ZodDefault
        })
    }
    brand() {
        return new Wt({
            typeName: y.ZodBranded,
            type: this,
            ..._(this._def)
        })
    } catch (e) {
        const t = typeof e == "function" ? e : () => e;
        return new Ne({ ..._(this._def),
            innerType: this,
            catchValue: t,
            typeName: y.ZodCatch
        })
    }
    describe(e) {
        const t = this.constructor;
        return new t({ ...this._def,
            description: e
        })
    }
    pipe(e) {
        return Ce.create(this, e)
    }
    readonly() {
        return je.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const Nt = /^c[^\s-]{8,}$/i,
    jt = /^[0-9a-z]+$/,
    Ct = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
    St = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    Tt = /^[a-z0-9_-]{21}$/i,
    Et = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
    Ot = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    Rt = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    At = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ve;
const It = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    Zt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    Pt = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
    $t = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    Lt = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    Vt = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    Qe = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
    Mt = new RegExp(`^${Qe}$`);

function Ye(s) {
    let e = "[0-5]\\d";
    s.precision ? e = `${e}\\.\\d{${s.precision}}` : s.precision == null && (e = `${e}(\\.\\d+)?`);
    const t = s.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`
}

function zt(s) {
    return new RegExp(`^${Ye(s)}$`)
}

function Dt(s) {
    let e = `${Qe}T${Ye(s)}`;
    const t = [];
    return t.push(s.local ? "Z?" : "Z"), s.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`)
}

function Bt(s, e) {
    return !!((e === "v4" || !e) && It.test(s) || (e === "v6" || !e) && Pt.test(s))
}

function Ft(s, e) {
    if (!Et.test(s)) return !1;
    try {
        const [t] = s.split(".");
        if (!t) return !1;
        const r = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="),
            a = JSON.parse(atob(r));
        return !(typeof a != "object" || a === null || "typ" in a && a ? .typ !== "JWT" || !a.alg || e && a.alg !== e)
    } catch {
        return !1
    }
}

function Ut(s, e) {
    return !!((e === "v4" || !e) && Zt.test(s) || (e === "v6" || !e) && $t.test(s))
}
class M extends v {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== u.string) {
            const n = this._getOrReturnCtx(e);
            return l(n, {
                code: c.invalid_type,
                expected: u.string,
                received: n.parsedType
            }), g
        }
        const r = new S;
        let a;
        for (const n of this._def.checks)
            if (n.kind === "min") e.data.length < n.value && (a = this._getOrReturnCtx(e, a), l(a, {
                code: c.too_small,
                minimum: n.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: n.message
            }), r.dirty());
            else if (n.kind === "max") e.data.length > n.value && (a = this._getOrReturnCtx(e, a), l(a, {
            code: c.too_big,
            maximum: n.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: n.message
        }), r.dirty());
        else if (n.kind === "length") {
            const i = e.data.length > n.value,
                o = e.data.length < n.value;
            (i || o) && (a = this._getOrReturnCtx(e, a), i ? l(a, {
                code: c.too_big,
                maximum: n.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: n.message
            }) : o && l(a, {
                code: c.too_small,
                minimum: n.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: n.message
            }), r.dirty())
        } else if (n.kind === "email") Rt.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "email",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "emoji") ve || (ve = new RegExp(At, "u")), ve.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "emoji",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "uuid") St.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "uuid",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "nanoid") Tt.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "nanoid",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "cuid") Nt.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "cuid",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "cuid2") jt.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "cuid2",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "ulid") Ct.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "ulid",
            code: c.invalid_string,
            message: n.message
        }), r.dirty());
        else if (n.kind === "url") try {
            new URL(e.data)
        } catch {
            a = this._getOrReturnCtx(e, a), l(a, {
                validation: "url",
                code: c.invalid_string,
                message: n.message
            }), r.dirty()
        } else n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "regex",
            code: c.invalid_string,
            message: n.message
        }), r.dirty())) : n.kind === "trim" ? e.data = e.data.trim() : n.kind === "includes" ? e.data.includes(n.value, n.position) || (a = this._getOrReturnCtx(e, a), l(a, {
            code: c.invalid_string,
            validation: {
                includes: n.value,
                position: n.position
            },
            message: n.message
        }), r.dirty()) : n.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : n.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : n.kind === "startsWith" ? e.data.startsWith(n.value) || (a = this._getOrReturnCtx(e, a), l(a, {
            code: c.invalid_string,
            validation: {
                startsWith: n.value
            },
            message: n.message
        }), r.dirty()) : n.kind === "endsWith" ? e.data.endsWith(n.value) || (a = this._getOrReturnCtx(e, a), l(a, {
            code: c.invalid_string,
            validation: {
                endsWith: n.value
            },
            message: n.message
        }), r.dirty()) : n.kind === "datetime" ? Dt(n).test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            code: c.invalid_string,
            validation: "datetime",
            message: n.message
        }), r.dirty()) : n.kind === "date" ? Mt.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            code: c.invalid_string,
            validation: "date",
            message: n.message
        }), r.dirty()) : n.kind === "time" ? zt(n).test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            code: c.invalid_string,
            validation: "time",
            message: n.message
        }), r.dirty()) : n.kind === "duration" ? Ot.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "duration",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : n.kind === "ip" ? Bt(e.data, n.version) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "ip",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : n.kind === "jwt" ? Ft(e.data, n.alg) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "jwt",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : n.kind === "cidr" ? Ut(e.data, n.version) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "cidr",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : n.kind === "base64" ? Lt.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "base64",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : n.kind === "base64url" ? Vt.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, {
            validation: "base64url",
            code: c.invalid_string,
            message: n.message
        }), r.dirty()) : k.assertNever(n);
        return {
            status: r.value,
            value: e.data
        }
    }
    _regex(e, t, r) {
        return this.refinement(a => e.test(a), {
            validation: t,
            code: c.invalid_string,
            ...m.errToObj(r)
        })
    }
    _addCheck(e) {
        return new M({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...m.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...m.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...m.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...m.errToObj(e)
        })
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...m.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...m.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...m.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...m.errToObj(e)
        })
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...m.errToObj(e)
        })
    }
    base64url(e) {
        return this._addCheck({
            kind: "base64url",
            ...m.errToObj(e)
        })
    }
    jwt(e) {
        return this._addCheck({
            kind: "jwt",
            ...m.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...m.errToObj(e)
        })
    }
    cidr(e) {
        return this._addCheck({
            kind: "cidr",
            ...m.errToObj(e)
        })
    }
    datetime(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof e ? .precision > "u" ? null : e ? .precision,
            offset: e ? .offset ? ? !1,
            local: e ? .local ? ? !1,
            ...m.errToObj(e ? .message)
        })
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        })
    }
    time(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: typeof e ? .precision > "u" ? null : e ? .precision,
            ...m.errToObj(e ? .message)
        })
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...m.errToObj(e)
        })
    }
    regex(e, t) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...m.errToObj(t)
        })
    }
    includes(e, t) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: t ? .position,
            ...m.errToObj(t ? .message)
        })
    }
    startsWith(e, t) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...m.errToObj(t)
        })
    }
    endsWith(e, t) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...m.errToObj(t)
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...m.errToObj(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...m.errToObj(t)
        })
    }
    length(e, t) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...m.errToObj(t)
        })
    }
    nonempty(e) {
        return this.min(1, m.errToObj(e))
    }
    trim() {
        return new M({ ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new M({ ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new M({ ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(e => e.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(e => e.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(e => e.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(e => e.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(e => e.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(e => e.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(e => e.kind === "base64url")
    }
    get minLength() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
M.create = s => new M({
    checks: [],
    typeName: y.ZodString,
    coerce: s ? .coerce ? ? !1,
    ..._(s)
});

function qt(s, e) {
    const t = (s.toString().split(".")[1] || "").length,
        r = (e.toString().split(".")[1] || "").length,
        a = t > r ? t : r,
        n = Number.parseInt(s.toFixed(a).replace(".", "")),
        i = Number.parseInt(e.toFixed(a).replace(".", ""));
    return n % i / 10 ** a
}
class de extends v {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== u.number) {
            const n = this._getOrReturnCtx(e);
            return l(n, {
                code: c.invalid_type,
                expected: u.number,
                received: n.parsedType
            }), g
        }
        let r;
        const a = new S;
        for (const n of this._def.checks) n.kind === "int" ? k.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), l(r, {
            code: c.invalid_type,
            expected: "integer",
            received: "float",
            message: n.message
        }), a.dirty()) : n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (r = this._getOrReturnCtx(e, r), l(r, {
            code: c.too_small,
            minimum: n.value,
            type: "number",
            inclusive: n.inclusive,
            exact: !1,
            message: n.message
        }), a.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (r = this._getOrReturnCtx(e, r), l(r, {
            code: c.too_big,
            maximum: n.value,
            type: "number",
            inclusive: n.inclusive,
            exact: !1,
            message: n.message
        }), a.dirty()) : n.kind === "multipleOf" ? qt(e.data, n.value) !== 0 && (r = this._getOrReturnCtx(e, r), l(r, {
            code: c.not_multiple_of,
            multipleOf: n.value,
            message: n.message
        }), a.dirty()) : n.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), l(r, {
            code: c.not_finite,
            message: n.message
        }), a.dirty()) : k.assertNever(n);
        return {
            status: a.value,
            value: e.data
        }
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, m.toString(t))
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, m.toString(t))
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, m.toString(t))
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, m.toString(t))
    }
    setLimit(e, t, r, a) {
        return new de({ ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: t,
                inclusive: r,
                message: m.toString(a)
            }]
        })
    }
    _addCheck(e) {
        return new de({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: m.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: m.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: m.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: m.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: m.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: m.toString(t)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: m.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: m.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: m.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && k.isInteger(e.value))
    }
    get isFinite() {
        let e = null,
            t = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0;
            r.kind === "min" ? (t === null || r.value > t) && (t = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value)
        }
        return Number.isFinite(t) && Number.isFinite(e)
    }
}
de.create = s => new de({
    checks: [],
    typeName: y.ZodNumber,
    coerce: s ? .coerce || !1,
    ..._(s)
});
class ce extends v {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce) try {
            e.data = BigInt(e.data)
        } catch {
            return this._getInvalidInput(e)
        }
        if (this._getType(e) !== u.bigint) return this._getInvalidInput(e);
        let r;
        const a = new S;
        for (const n of this._def.checks) n.kind === "min" ? (n.inclusive ? e.data < n.value : e.data <= n.value) && (r = this._getOrReturnCtx(e, r), l(r, {
            code: c.too_small,
            type: "bigint",
            minimum: n.value,
            inclusive: n.inclusive,
            message: n.message
        }), a.dirty()) : n.kind === "max" ? (n.inclusive ? e.data > n.value : e.data >= n.value) && (r = this._getOrReturnCtx(e, r), l(r, {
            code: c.too_big,
            type: "bigint",
            maximum: n.value,
            inclusive: n.inclusive,
            message: n.message
        }), a.dirty()) : n.kind === "multipleOf" ? e.data % n.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), l(r, {
            code: c.not_multiple_of,
            multipleOf: n.value,
            message: n.message
        }), a.dirty()) : k.assertNever(n);
        return {
            status: a.value,
            value: e.data
        }
    }
    _getInvalidInput(e) {
        const t = this._getOrReturnCtx(e);
        return l(t, {
            code: c.invalid_type,
            expected: u.bigint,
            received: t.parsedType
        }), g
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, m.toString(t))
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, m.toString(t))
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, m.toString(t))
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, m.toString(t))
    }
    setLimit(e, t, r, a) {
        return new ce({ ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: t,
                inclusive: r,
                message: m.toString(a)
            }]
        })
    }
    _addCheck(e) {
        return new ce({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: m.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: m.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: m.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: m.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: m.toString(t)
        })
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
ce.create = s => new ce({
    checks: [],
    typeName: y.ZodBigInt,
    coerce: s ? .coerce ? ? !1,
    ..._(s)
});
class Me extends v {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== u.boolean) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: c.invalid_type,
                expected: u.boolean,
                received: r.parsedType
            }), g
        }
        return E(e.data)
    }
}
Me.create = s => new Me({
    typeName: y.ZodBoolean,
    coerce: s ? .coerce || !1,
    ..._(s)
});
class fe extends v {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== u.date) {
            const n = this._getOrReturnCtx(e);
            return l(n, {
                code: c.invalid_type,
                expected: u.date,
                received: n.parsedType
            }), g
        }
        if (Number.isNaN(e.data.getTime())) {
            const n = this._getOrReturnCtx(e);
            return l(n, {
                code: c.invalid_date
            }), g
        }
        const r = new S;
        let a;
        for (const n of this._def.checks) n.kind === "min" ? e.data.getTime() < n.value && (a = this._getOrReturnCtx(e, a), l(a, {
            code: c.too_small,
            message: n.message,
            inclusive: !0,
            exact: !1,
            minimum: n.value,
            type: "date"
        }), r.dirty()) : n.kind === "max" ? e.data.getTime() > n.value && (a = this._getOrReturnCtx(e, a), l(a, {
            code: c.too_big,
            message: n.message,
            inclusive: !0,
            exact: !1,
            maximum: n.value,
            type: "date"
        }), r.dirty()) : k.assertNever(n);
        return {
            status: r.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new fe({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: m.toString(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: m.toString(t)
        })
    }
    get minDate() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e != null ? new Date(e) : null
    }
}
fe.create = s => new fe({
    checks: [],
    coerce: s ? .coerce || !1,
    typeName: y.ZodDate,
    ..._(s)
});
class ze extends v {
    _parse(e) {
        if (this._getType(e) !== u.symbol) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: c.invalid_type,
                expected: u.symbol,
                received: r.parsedType
            }), g
        }
        return E(e.data)
    }
}
ze.create = s => new ze({
    typeName: y.ZodSymbol,
    ..._(s)
});
class De extends v {
    _parse(e) {
        if (this._getType(e) !== u.undefined) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: c.invalid_type,
                expected: u.undefined,
                received: r.parsedType
            }), g
        }
        return E(e.data)
    }
}
De.create = s => new De({
    typeName: y.ZodUndefined,
    ..._(s)
});
class Be extends v {
    _parse(e) {
        if (this._getType(e) !== u.null) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: c.invalid_type,
                expected: u.null,
                received: r.parsedType
            }), g
        }
        return E(e.data)
    }
}
Be.create = s => new Be({
    typeName: y.ZodNull,
    ..._(s)
});
class Fe extends v {
    constructor() {
        super(...arguments), this._any = !0
    }
    _parse(e) {
        return E(e.data)
    }
}
Fe.create = s => new Fe({
    typeName: y.ZodAny,
    ..._(s)
});
class Ue extends v {
    constructor() {
        super(...arguments), this._unknown = !0
    }
    _parse(e) {
        return E(e.data)
    }
}
Ue.create = s => new Ue({
    typeName: y.ZodUnknown,
    ..._(s)
});
class B extends v {
    _parse(e) {
        const t = this._getOrReturnCtx(e);
        return l(t, {
            code: c.invalid_type,
            expected: u.never,
            received: t.parsedType
        }), g
    }
}
B.create = s => new B({
    typeName: y.ZodNever,
    ..._(s)
});
class qe extends v {
    _parse(e) {
        if (this._getType(e) !== u.undefined) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: c.invalid_type,
                expected: u.void,
                received: r.parsedType
            }), g
        }
        return E(e.data)
    }
}
qe.create = s => new qe({
    typeName: y.ZodVoid,
    ..._(s)
});
class A extends v {
    _parse(e) {
        const {
            ctx: t,
            status: r
        } = this._processInputParams(e), a = this._def;
        if (t.parsedType !== u.array) return l(t, {
            code: c.invalid_type,
            expected: u.array,
            received: t.parsedType
        }), g;
        if (a.exactLength !== null) {
            const i = t.data.length > a.exactLength.value,
                o = t.data.length < a.exactLength.value;
            (i || o) && (l(t, {
                code: i ? c.too_big : c.too_small,
                minimum: o ? a.exactLength.value : void 0,
                maximum: i ? a.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: a.exactLength.message
            }), r.dirty())
        }
        if (a.minLength !== null && t.data.length < a.minLength.value && (l(t, {
                code: c.too_small,
                minimum: a.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: a.minLength.message
            }), r.dirty()), a.maxLength !== null && t.data.length > a.maxLength.value && (l(t, {
                code: c.too_big,
                maximum: a.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: a.maxLength.message
            }), r.dirty()), t.common.async) return Promise.all([...t.data].map((i, o) => a.type._parseAsync(new D(t, i, t.path, o)))).then(i => S.mergeArray(r, i));
        const n = [...t.data].map((i, o) => a.type._parseSync(new D(t, i, t.path, o)));
        return S.mergeArray(r, n)
    }
    get element() {
        return this._def.type
    }
    min(e, t) {
        return new A({ ...this._def,
            minLength: {
                value: e,
                message: m.toString(t)
            }
        })
    }
    max(e, t) {
        return new A({ ...this._def,
            maxLength: {
                value: e,
                message: m.toString(t)
            }
        })
    }
    length(e, t) {
        return new A({ ...this._def,
            exactLength: {
                value: e,
                message: m.toString(t)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
A.create = (s, e) => new A({
    type: s,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: y.ZodArray,
    ..._(e)
});

function Y(s) {
    if (s instanceof j) {
        const e = {};
        for (const t in s.shape) {
            const r = s.shape[t];
            e[t] = z.create(Y(r))
        }
        return new j({ ...s._def,
            shape: () => e
        })
    } else return s instanceof A ? new A({ ...s._def,
        type: Y(s.element)
    }) : s instanceof z ? z.create(Y(s.unwrap())) : s instanceof se ? se.create(Y(s.unwrap())) : s instanceof W ? W.create(s.items.map(e => Y(e))) : s
}
class j extends v {
    constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const e = this._def.shape(),
            t = k.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: t
        }, this._cached
    }
    _parse(e) {
        if (this._getType(e) !== u.object) {
            const h = this._getOrReturnCtx(e);
            return l(h, {
                code: c.invalid_type,
                expected: u.object,
                received: h.parsedType
            }), g
        }
        const {
            status: r,
            ctx: a
        } = this._processInputParams(e), {
            shape: n,
            keys: i
        } = this._getCached(), o = [];
        if (!(this._def.catchall instanceof B && this._def.unknownKeys === "strip"))
            for (const h in a.data) i.includes(h) || o.push(h);
        const f = [];
        for (const h of i) {
            const x = n[h],
                $ = a.data[h];
            f.push({
                key: {
                    status: "valid",
                    value: h
                },
                value: x._parse(new D(a, $, a.path, h)),
                alwaysSet: h in a.data
            })
        }
        if (this._def.catchall instanceof B) {
            const h = this._def.unknownKeys;
            if (h === "passthrough")
                for (const x of o) f.push({
                    key: {
                        status: "valid",
                        value: x
                    },
                    value: {
                        status: "valid",
                        value: a.data[x]
                    }
                });
            else if (h === "strict") o.length > 0 && (l(a, {
                code: c.unrecognized_keys,
                keys: o
            }), r.dirty());
            else if (h !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const h = this._def.catchall;
            for (const x of o) {
                const $ = a.data[x];
                f.push({
                    key: {
                        status: "valid",
                        value: x
                    },
                    value: h._parse(new D(a, $, a.path, x)),
                    alwaysSet: x in a.data
                })
            }
        }
        return a.common.async ? Promise.resolve().then(async () => {
            const h = [];
            for (const x of f) {
                const $ = await x.key,
                    I = await x.value;
                h.push({
                    key: $,
                    value: I,
                    alwaysSet: x.alwaysSet
                })
            }
            return h
        }).then(h => S.mergeObjectSync(r, h)) : S.mergeObjectSync(r, f)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return m.errToObj, new j({ ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (t, r) => {
                    const a = this._def.errorMap ? .(t, r).message ? ? r.defaultError;
                    return t.code === "unrecognized_keys" ? {
                        message: m.errToObj(e).message ? ? a
                    } : {
                        message: a
                    }
                }
            } : {}
        })
    }
    strip() {
        return new j({ ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new j({ ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new j({ ...this._def,
            shape: () => ({ ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new j({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: y.ZodObject
        })
    }
    setKey(e, t) {
        return this.augment({
            [e]: t
        })
    }
    catchall(e) {
        return new j({ ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const t = {};
        for (const r of k.objectKeys(e)) e[r] && this.shape[r] && (t[r] = this.shape[r]);
        return new j({ ...this._def,
            shape: () => t
        })
    }
    omit(e) {
        const t = {};
        for (const r of k.objectKeys(this.shape)) e[r] || (t[r] = this.shape[r]);
        return new j({ ...this._def,
            shape: () => t
        })
    }
    deepPartial() {
        return Y(this)
    }
    partial(e) {
        const t = {};
        for (const r of k.objectKeys(this.shape)) {
            const a = this.shape[r];
            e && !e[r] ? t[r] = a : t[r] = a.optional()
        }
        return new j({ ...this._def,
            shape: () => t
        })
    }
    required(e) {
        const t = {};
        for (const r of k.objectKeys(this.shape))
            if (e && !e[r]) t[r] = this.shape[r];
            else {
                let n = this.shape[r];
                for (; n instanceof z;) n = n._def.innerType;
                t[r] = n
            }
        return new j({ ...this._def,
            shape: () => t
        })
    }
    keyof() {
        return Ke(k.objectKeys(this.shape))
    }
}
j.create = (s, e) => new j({
    shape: () => s,
    unknownKeys: "strip",
    catchall: B.create(),
    typeName: y.ZodObject,
    ..._(e)
});
j.strictCreate = (s, e) => new j({
    shape: () => s,
    unknownKeys: "strict",
    catchall: B.create(),
    typeName: y.ZodObject,
    ..._(e)
});
j.lazycreate = (s, e) => new j({
    shape: s,
    unknownKeys: "strip",
    catchall: B.create(),
    typeName: y.ZodObject,
    ..._(e)
});
class he extends v {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e), r = this._def.options;

        function a(n) {
            for (const o of n)
                if (o.result.status === "valid") return o.result;
            for (const o of n)
                if (o.result.status === "dirty") return t.common.issues.push(...o.ctx.common.issues), o.result;
            const i = n.map(o => new P(o.ctx.common.issues));
            return l(t, {
                code: c.invalid_union,
                unionErrors: i
            }), g
        }
        if (t.common.async) return Promise.all(r.map(async n => {
            const i = { ...t,
                common: { ...t.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await n._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: i
                }),
                ctx: i
            }
        })).then(a); {
            let n;
            const i = [];
            for (const f of r) {
                const h = { ...t,
                        common: { ...t.common,
                            issues: []
                        },
                        parent: null
                    },
                    x = f._parseSync({
                        data: t.data,
                        path: t.path,
                        parent: h
                    });
                if (x.status === "valid") return x;
                x.status === "dirty" && !n && (n = {
                    result: x,
                    ctx: h
                }), h.common.issues.length && i.push(h.common.issues)
            }
            if (n) return t.common.issues.push(...n.ctx.common.issues), n.result;
            const o = i.map(f => new P(f));
            return l(t, {
                code: c.invalid_union,
                unionErrors: o
            }), g
        }
    }
    get options() {
        return this._def.options
    }
}
he.create = (s, e) => new he({
    options: s,
    typeName: y.ZodUnion,
    ..._(e)
});

function ke(s, e) {
    const t = V(s),
        r = V(e);
    if (s === e) return {
        valid: !0,
        data: s
    };
    if (t === u.object && r === u.object) {
        const a = k.objectKeys(e),
            n = k.objectKeys(s).filter(o => a.indexOf(o) !== -1),
            i = { ...s,
                ...e
            };
        for (const o of n) {
            const f = ke(s[o], e[o]);
            if (!f.valid) return {
                valid: !1
            };
            i[o] = f.data
        }
        return {
            valid: !0,
            data: i
        }
    } else if (t === u.array && r === u.array) {
        if (s.length !== e.length) return {
            valid: !1
        };
        const a = [];
        for (let n = 0; n < s.length; n++) {
            const i = s[n],
                o = e[n],
                f = ke(i, o);
            if (!f.valid) return {
                valid: !1
            };
            a.push(f.data)
        }
        return {
            valid: !0,
            data: a
        }
    } else return t === u.date && r === u.date && +s == +e ? {
        valid: !0,
        data: s
    } : {
        valid: !1
    }
}
class pe extends v {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e), a = (n, i) => {
            if ($e(n) || $e(i)) return g;
            const o = ke(n.value, i.value);
            return o.valid ? ((Le(n) || Le(i)) && t.dirty(), {
                status: t.value,
                value: o.data
            }) : (l(r, {
                code: c.invalid_intersection_types
            }), g)
        };
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then(([n, i]) => a(n, i)) : a(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }))
    }
}
pe.create = (s, e, t) => new pe({
    left: s,
    right: e,
    typeName: y.ZodIntersection,
    ..._(t)
});
class W extends v {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== u.array) return l(r, {
            code: c.invalid_type,
            expected: u.array,
            received: r.parsedType
        }), g;
        if (r.data.length < this._def.items.length) return l(r, {
            code: c.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), g;
        !this._def.rest && r.data.length > this._def.items.length && (l(r, {
            code: c.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), t.dirty());
        const n = [...r.data].map((i, o) => {
            const f = this._def.items[o] || this._def.rest;
            return f ? f._parse(new D(r, i, r.path, o)) : null
        }).filter(i => !!i);
        return r.common.async ? Promise.all(n).then(i => S.mergeArray(t, i)) : S.mergeArray(t, n)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new W({ ...this._def,
            rest: e
        })
    }
}
W.create = (s, e) => {
    if (!Array.isArray(s)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new W({
        items: s,
        typeName: y.ZodTuple,
        rest: null,
        ..._(e)
    })
};
class We extends v {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== u.map) return l(r, {
            code: c.invalid_type,
            expected: u.map,
            received: r.parsedType
        }), g;
        const a = this._def.keyType,
            n = this._def.valueType,
            i = [...r.data.entries()].map(([o, f], h) => ({
                key: a._parse(new D(r, o, r.path, [h, "key"])),
                value: n._parse(new D(r, f, r.path, [h, "value"]))
            }));
        if (r.common.async) {
            const o = new Map;
            return Promise.resolve().then(async () => {
                for (const f of i) {
                    const h = await f.key,
                        x = await f.value;
                    if (h.status === "aborted" || x.status === "aborted") return g;
                    (h.status === "dirty" || x.status === "dirty") && t.dirty(), o.set(h.value, x.value)
                }
                return {
                    status: t.value,
                    value: o
                }
            })
        } else {
            const o = new Map;
            for (const f of i) {
                const h = f.key,
                    x = f.value;
                if (h.status === "aborted" || x.status === "aborted") return g;
                (h.status === "dirty" || x.status === "dirty") && t.dirty(), o.set(h.value, x.value)
            }
            return {
                status: t.value,
                value: o
            }
        }
    }
}
We.create = (s, e, t) => new We({
    valueType: e,
    keyType: s,
    typeName: y.ZodMap,
    ..._(t)
});
class le extends v {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== u.set) return l(r, {
            code: c.invalid_type,
            expected: u.set,
            received: r.parsedType
        }), g;
        const a = this._def;
        a.minSize !== null && r.data.size < a.minSize.value && (l(r, {
            code: c.too_small,
            minimum: a.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: a.minSize.message
        }), t.dirty()), a.maxSize !== null && r.data.size > a.maxSize.value && (l(r, {
            code: c.too_big,
            maximum: a.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: a.maxSize.message
        }), t.dirty());
        const n = this._def.valueType;

        function i(f) {
            const h = new Set;
            for (const x of f) {
                if (x.status === "aborted") return g;
                x.status === "dirty" && t.dirty(), h.add(x.value)
            }
            return {
                status: t.value,
                value: h
            }
        }
        const o = [...r.data.values()].map((f, h) => n._parse(new D(r, f, r.path, h)));
        return r.common.async ? Promise.all(o).then(f => i(f)) : i(o)
    }
    min(e, t) {
        return new le({ ...this._def,
            minSize: {
                value: e,
                message: m.toString(t)
            }
        })
    }
    max(e, t) {
        return new le({ ...this._def,
            maxSize: {
                value: e,
                message: m.toString(t)
            }
        })
    }
    size(e, t) {
        return this.min(e, t).max(e, t)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
le.create = (s, e) => new le({
    valueType: s,
    minSize: null,
    maxSize: null,
    typeName: y.ZodSet,
    ..._(e)
});
class He extends v {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e);
        return this._def.getter()._parse({
            data: t.data,
            path: t.path,
            parent: t
        })
    }
}
He.create = (s, e) => new He({
    getter: s,
    typeName: y.ZodLazy,
    ..._(e)
});
class Xe extends v {
    _parse(e) {
        if (e.data !== this._def.value) {
            const t = this._getOrReturnCtx(e);
            return l(t, {
                received: t.data,
                code: c.invalid_literal,
                expected: this._def.value
            }), g
        }
        return {
            status: "valid",
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
Xe.create = (s, e) => new Xe({
    value: s,
    typeName: y.ZodLiteral,
    ..._(e)
});

function Ke(s, e) {
    return new ee({
        values: s,
        typeName: y.ZodEnum,
        ..._(e)
    })
}
class ee extends v {
    _parse(e) {
        if (typeof e.data != "string") {
            const t = this._getOrReturnCtx(e),
                r = this._def.values;
            return l(t, {
                expected: k.joinValues(r),
                received: t.parsedType,
                code: c.invalid_type
            }), g
        }
        if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
            const t = this._getOrReturnCtx(e),
                r = this._def.values;
            return l(t, {
                received: t.data,
                code: c.invalid_enum_value,
                options: r
            }), g
        }
        return E(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e
    }
    get Values() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e
    }
    get Enum() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e
    }
    extract(e, t = this._def) {
        return ee.create(e, { ...this._def,
            ...t
        })
    }
    exclude(e, t = this._def) {
        return ee.create(this.options.filter(r => !e.includes(r)), { ...this._def,
            ...t
        })
    }
}
ee.create = Ke;
class Je extends v {
    _parse(e) {
        const t = k.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
        if (r.parsedType !== u.string && r.parsedType !== u.number) {
            const a = k.objectValues(t);
            return l(r, {
                expected: k.joinValues(a),
                received: r.parsedType,
                code: c.invalid_type
            }), g
        }
        if (this._cache || (this._cache = new Set(k.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
            const a = k.objectValues(t);
            return l(r, {
                received: r.data,
                code: c.invalid_enum_value,
                options: a
            }), g
        }
        return E(e.data)
    }
    get enum() {
        return this._def.values
    }
}
Je.create = (s, e) => new Je({
    values: s,
    typeName: y.ZodNativeEnum,
    ..._(e)
});
class ge extends v {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e);
        if (t.parsedType !== u.promise && t.common.async === !1) return l(t, {
            code: c.invalid_type,
            expected: u.promise,
            received: t.parsedType
        }), g;
        const r = t.parsedType === u.promise ? t.data : Promise.resolve(t.data);
        return E(r.then(a => this._def.type.parseAsync(a, {
            path: t.path,
            errorMap: t.common.contextualErrorMap
        })))
    }
}
ge.create = (s, e) => new ge({
    type: s,
    typeName: y.ZodPromise,
    ..._(e)
});
class te extends v {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === y.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e), a = this._def.effect || null, n = {
            addIssue: i => {
                l(r, i), i.fatal ? t.abort() : t.dirty()
            },
            get path() {
                return r.path
            }
        };
        if (n.addIssue = n.addIssue.bind(n), a.type === "preprocess") {
            const i = a.transform(r.data, n);
            if (r.common.async) return Promise.resolve(i).then(async o => {
                if (t.value === "aborted") return g;
                const f = await this._def.schema._parseAsync({
                    data: o,
                    path: r.path,
                    parent: r
                });
                return f.status === "aborted" ? g : f.status === "dirty" || t.value === "dirty" ? oe(f.value) : f
            }); {
                if (t.value === "aborted") return g;
                const o = this._def.schema._parseSync({
                    data: i,
                    path: r.path,
                    parent: r
                });
                return o.status === "aborted" ? g : o.status === "dirty" || t.value === "dirty" ? oe(o.value) : o
            }
        }
        if (a.type === "refinement") {
            const i = o => {
                const f = a.refinement(o, n);
                if (r.common.async) return Promise.resolve(f);
                if (f instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return o
            };
            if (r.common.async === !1) {
                const o = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return o.status === "aborted" ? g : (o.status === "dirty" && t.dirty(), i(o.value), {
                    status: t.value,
                    value: o.value
                })
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(o => o.status === "aborted" ? g : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({
                status: t.value,
                value: o.value
            }))))
        }
        if (a.type === "transform")
            if (r.common.async === !1) {
                const i = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!K(i)) return g;
                const o = a.transform(i.value, n);
                if (o instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: t.value,
                    value: o
                }
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(i => K(i) ? Promise.resolve(a.transform(i.value, n)).then(o => ({
                status: t.value,
                value: o
            })) : g);
        k.assertNever(a)
    }
}
te.create = (s, e, t) => new te({
    schema: s,
    typeName: y.ZodEffects,
    effect: e,
    ..._(t)
});
te.createWithPreprocess = (s, e, t) => new te({
    schema: e,
    effect: {
        type: "preprocess",
        transform: s
    },
    typeName: y.ZodEffects,
    ..._(t)
});
class z extends v {
    _parse(e) {
        return this._getType(e) === u.undefined ? E(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
z.create = (s, e) => new z({
    innerType: s,
    typeName: y.ZodOptional,
    ..._(e)
});
class se extends v {
    _parse(e) {
        return this._getType(e) === u.null ? E(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
se.create = (s, e) => new se({
    innerType: s,
    typeName: y.ZodNullable,
    ..._(e)
});
class we extends v {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e);
        let r = t.data;
        return t.parsedType === u.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
            data: r,
            path: t.path,
            parent: t
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
we.create = (s, e) => new we({
    innerType: s,
    typeName: y.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ..._(e)
});
class Ne extends v {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e), r = { ...t,
            common: { ...t.common,
                issues: []
            }
        }, a = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: { ...r
            }
        });
        return me(a) ? a.then(n => ({
            status: "valid",
            value: n.status === "valid" ? n.value : this._def.catchValue({
                get error() {
                    return new P(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: a.status === "valid" ? a.value : this._def.catchValue({
                get error() {
                    return new P(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
Ne.create = (s, e) => new Ne({
    innerType: s,
    typeName: y.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ..._(e)
});
class Ge extends v {
    _parse(e) {
        if (this._getType(e) !== u.nan) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: c.invalid_type,
                expected: u.nan,
                received: r.parsedType
            }), g
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
Ge.create = s => new Ge({
    typeName: y.ZodNaN,
    ..._(s)
});
class Wt extends v {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e), r = t.data;
        return this._def.type._parse({
            data: r,
            path: t.path,
            parent: t
        })
    }
    unwrap() {
        return this._def.type
    }
}
class Ce extends v {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.common.async) return (async () => {
            const n = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return n.status === "aborted" ? g : n.status === "dirty" ? (t.dirty(), oe(n.value)) : this._def.out._parseAsync({
                data: n.value,
                path: r.path,
                parent: r
            })
        })(); {
            const a = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return a.status === "aborted" ? g : a.status === "dirty" ? (t.dirty(), {
                status: "dirty",
                value: a.value
            }) : this._def.out._parseSync({
                data: a.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(e, t) {
        return new Ce({ in: e,
            out: t,
            typeName: y.ZodPipeline
        })
    }
}
class je extends v {
    _parse(e) {
        const t = this._def.innerType._parse(e),
            r = a => (K(a) && (a.value = Object.freeze(a.value)), a);
        return me(t) ? t.then(a => r(a)) : r(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
je.create = (s, e) => new je({
    innerType: s,
    typeName: y.ZodReadonly,
    ..._(e)
});
j.lazycreate;
var y;
(function(s) {
    s.ZodString = "ZodString", s.ZodNumber = "ZodNumber", s.ZodNaN = "ZodNaN", s.ZodBigInt = "ZodBigInt", s.ZodBoolean = "ZodBoolean", s.ZodDate = "ZodDate", s.ZodSymbol = "ZodSymbol", s.ZodUndefined = "ZodUndefined", s.ZodNull = "ZodNull", s.ZodAny = "ZodAny", s.ZodUnknown = "ZodUnknown", s.ZodNever = "ZodNever", s.ZodVoid = "ZodVoid", s.ZodArray = "ZodArray", s.ZodObject = "ZodObject", s.ZodUnion = "ZodUnion", s.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", s.ZodIntersection = "ZodIntersection", s.ZodTuple = "ZodTuple", s.ZodRecord = "ZodRecord", s.ZodMap = "ZodMap", s.ZodSet = "ZodSet", s.ZodFunction = "ZodFunction", s.ZodLazy = "ZodLazy", s.ZodLiteral = "ZodLiteral", s.ZodEnum = "ZodEnum", s.ZodEffects = "ZodEffects", s.ZodNativeEnum = "ZodNativeEnum", s.ZodOptional = "ZodOptional", s.ZodNullable = "ZodNullable", s.ZodDefault = "ZodDefault", s.ZodCatch = "ZodCatch", s.ZodPromise = "ZodPromise", s.ZodBranded = "ZodBranded", s.ZodPipeline = "ZodPipeline", s.ZodReadonly = "ZodReadonly"
})(y || (y = {}));
const R = M.create;
B.create;
A.create;
const Ht = j.create;
j.strictCreate;
he.create;
pe.create;
W.create;
ee.create;
ge.create;
z.create;
se.create;
const et = 200,
    Xt = 12.5,
    ie = s => s >= et ? 0 : Xt,
    Jt = s => /^\d{5}-?\d{3}$/.test(s.trim()),
    Gt = Ht({
        nome: R().trim().min(3, "Nome deve ter pelo menos 3 caracteres").max(100),
        cpf: R().trim().regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido (ex: 000.000.000-00)"),
        email: R().trim().email("Email inválido").max(255),
        telefone: R().trim().regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Telefone inválido"),
        cep: R().trim().regex(/^\d{5}-?\d{3}$/, "CEP inválido (ex: 00000-000)"),
        endereco: R().trim().min(5, "Endereço obrigatório").max(200),
        numero: R().trim().min(1, "Número obrigatório").max(10),
        complemento: R().trim().max(100).optional(),
        bairro: R().trim().min(2, "Bairro obrigatório").max(100),
        cidade: R().trim().min(2, "Cidade obrigatória").max(100),
        estado: R().trim().length(2, "Use a sigla (ex: SP)")
    }),
    rs = ({
        product: s,
        size: e,
        onClose: t
    }) => {
        const r = pt(),
            [a, n] = C.useState("form"),
            [i, o] = C.useState(null),
            [f, h] = C.useState(null),
            [x, $] = C.useState(!1),
            I = C.useRef(null),
            Se = "cardPaymentBrick_container",
            [F, Te] = C.useState(!1),
            [tt, Ee] = C.useState(!1),
            [U, Oe] = C.useState(!1),
            [re, Re] = C.useState({}),
            [ue, ye] = C.useState({}),
            [H, Ae] = C.useState(null),
            Z = C.useRef(null);
        C.useEffect(() => () => {
            Z.current && window.clearInterval(Z.current)
        }, []), C.useEffect(() => {
            if (!s) n("form"), Re({}), ye({}), Ae(null), Z.current && window.clearInterval(Z.current);
            else {
                const p = X(s.id);
                _e("InitiateCheckout", {
                    content_ids: [s.id],
                    content_name: s.name,
                    content_type: "product",
                    value: p,
                    currency: "BRL",
                    num_items: 1,
                    contents: [{
                        id: s.id,
                        quantity: 1,
                        item_price: p
                    }]
                })
            }
        }, [s]);
        const st = (p, b) => {
                Re(w => ({ ...w,
                    [p]: b
                })), ue[p] && ye(w => ({ ...w,
                    [p]: void 0
                }))
            },
            rt = p => {
                Z.current && window.clearInterval(Z.current), Z.current = window.setInterval(async () => {
                    const {
                        data: b,
                        error: w
                    } = await J.functions.invoke("check-payment-status", {
                        body: {
                            order_id: p
                        }
                    });
                    if (!w && b ? .status === "approved") {
                        if (Z.current && window.clearInterval(Z.current), s) {
                            const N = X(s.id),
                                q = ie(N);
                            _e("Purchase", {
                                content_ids: [s.id],
                                content_name: s.name,
                                content_type: "product",
                                value: N + q,
                                currency: "BRL",
                                num_items: 1,
                                contents: [{
                                    id: s.id,
                                    quantity: 1,
                                    item_price: N
                                }],
                                order_id: p
                            }, {
                                eventID: p
                            })
                        }
                        n("success"), await J.functions.invoke("send-set-password-link", {
                            body: {
                                email: re.email,
                                redirect_to: `${window.location.origin}/definir-senha`
                            }
                        })
                    }
                }, 4e3)
            },
            at = () => {
                const p = Gt.safeParse(re);
                if (!p.success) {
                    const b = {};
                    p.error.errors.forEach(w => {
                        const N = w.path[0];
                        b[N] || (b[N] = w.message)
                    }), ye(b);
                    return
                }
                o(p.data), n("method")
            },
            nt = async () => {
                if (!(!s || !i)) {
                    Oe(!0);
                    try {
                        const {
                            data: p,
                            error: b
                        } = await J.functions.invoke("create-pix-payment", {
                            body: {
                                email: i.email,
                                product_id: s.id,
                                product_name: s.name,
                                size: e,
                                shipping: {
                                    name: i.nome,
                                    cpf: i.cpf,
                                    phone: i.telefone,
                                    cep: i.cep,
                                    address: i.endereco,
                                    number: i.numero,
                                    complement: i.complemento,
                                    neighborhood: i.bairro,
                                    city: i.cidade,
                                    state: i.estado
                                }
                            }
                        });
                        if (b) throw b;
                        if (p ? .error) throw new Error(p.error);
                        Ae({
                            qr: p.qr_code,
                            qr_b64: p.qr_code_base64,
                            copy: p.qr_code,
                            order_id: p.order_id
                        }), n("pix"), rt(p.order_id)
                    } catch (p) {
                        console.error(p), G.error("Erro ao gerar PIX", {
                            description: p.message || "Tente novamente."
                        })
                    } finally {
                        Oe(!1)
                    }
                }
            },
            it = () => new Promise((p, b) => {
                if (window.MercadoPago) return p();
                const w = document.getElementById("mp-sdk-js");
                if (w) {
                    w.addEventListener("load", () => p()), w.addEventListener("error", () => b(new Error("Falha ao carregar SDK MP")));
                    return
                }
                const N = document.createElement("script");
                N.id = "mp-sdk-js", N.src = "https://sdk.mercadopago.com/js/v2", N.async = !0, N.onload = () => p(), N.onerror = () => b(new Error("Falha ao carregar SDK MP")), document.head.appendChild(N)
            }),
            ot = async () => {
                if (!(!s || !i)) {
                    Te(!0);
                    try {
                        let p = f;
                        if (!p) {
                            const {
                                data: b,
                                error: w
                            } = await J.functions.invoke("get-mp-public-key");
                            if (w) throw w;
                            if (p = b ? .public_key, !p) throw new Error("Chave pública não configurada");
                            h(p)
                        }
                        await it(), n("card")
                    } catch (p) {
                        console.error(p), G.error("Erro ao abrir cartão", {
                            description: p.message || "Tente novamente."
                        })
                    } finally {
                        Te(!1)
                    }
                }
            };
        C.useEffect(() => {
            if (a !== "card" || !s || !i || !f) return;
            let p = !1;
            return (async () => {
                try {
                    const b = X(s.id),
                        w = b + ie(b),
                        q = new window.MercadoPago(f, {
                            locale: "pt-BR"
                        }).bricks();
                    if (I.current ? .unmount) {
                        try {
                            I.current.unmount()
                        } catch {}
                        I.current = null
                    }
                    const ct = i.cpf.replace(/\D/g, ""),
                        lt = await q.create("cardPayment", Se, {
                            initialization: {
                                amount: w,
                                payer: {
                                    email: i.email
                                }
                            },
                            customization: {
                                paymentMethods: {
                                    maxInstallments: 12
                                },
                                visual: {
                                    style: {
                                        theme: "default"
                                    }
                                }
                            },
                            callbacks: {
                                onReady: () => {},
                                onSubmit: L => new Promise(async (ut, mt) => {
                                    $(!0);
                                    try {
                                        const {
                                            data: T,
                                            error: Ie
                                        } = await J.functions.invoke("process-card-payment", {
                                            body: {
                                                email: i.email,
                                                product_id: s.id,
                                                product_name: s.name,
                                                size: e,
                                                shipping: {
                                                    name: i.nome,
                                                    cpf: i.cpf,
                                                    phone: i.telefone,
                                                    cep: i.cep,
                                                    address: i.endereco,
                                                    number: i.numero,
                                                    complement: i.complemento,
                                                    neighborhood: i.bairro,
                                                    city: i.cidade,
                                                    state: i.estado
                                                },
                                                token: L.token,
                                                payment_method_id: L.payment_method_id,
                                                issuer_id: L.issuer_id || null,
                                                installments: Number(L.installments) || 1,
                                                payer: {
                                                    email: L.payer ? .email || i.email,
                                                    identification: L.payer ? .identification || {
                                                        type: "CPF",
                                                        number: ct
                                                    }
                                                }
                                            }
                                        });
                                        if (Ie) throw Ie;
                                        if (T ? .error) throw new Error(T.error);
                                        if (T.status === "approved") {
                                            const ft = ie(b);
                                            _e("Purchase", {
                                                content_ids: [s.id],
                                                content_name: s.name,
                                                content_type: "product",
                                                value: b + ft,
                                                currency: "BRL",
                                                num_items: 1,
                                                contents: [{
                                                    id: s.id,
                                                    quantity: 1,
                                                    item_price: b
                                                }],
                                                order_id: T.order_id
                                            }, {
                                                eventID: T.order_id
                                            }), await J.functions.invoke("send-set-password-link", {
                                                body: {
                                                    email: i.email,
                                                    redirect_to: `${window.location.origin}/definir-senha`
                                                }
                                            }), n("success")
                                        } else T.status === "in_process" || T.status === "pending" ? (G.info("Pagamento em análise", {
                                            description: "Você receberá uma confirmação por email assim que aprovado."
                                        }), n("success")) : G.error("Pagamento recusado", {
                                            description: T.status_detail || "Tente outro cartão."
                                        });
                                        ut()
                                    } catch (T) {
                                        console.error(T), G.error("Erro no pagamento", {
                                            description: T.message || "Tente novamente."
                                        }), mt(T)
                                    } finally {
                                        $(!1)
                                    }
                                }),
                                onError: L => {
                                    console.error("Brick error:", L)
                                }
                            }
                        });
                    p || (I.current = lt)
                } catch (b) {
                    console.error(b), G.error("Erro ao montar formulário do cartão")
                }
            })(), () => {
                if (p = !0, I.current ? .unmount) {
                    try {
                        I.current.unmount()
                    } catch {}
                    I.current = null
                }
            }
        }, [a, f, s, i, e]);
        const dt = () => {
                H ? .copy && (navigator.clipboard.writeText(H.copy), Ee(!0), setTimeout(() => Ee(!1), 2e3))
            },
            O = (p, b, w, N) => d.jsxs("div", {
                className: N ? .className,
                children: [d.jsxs("label", {
                    className: "text-xs font-semibold text-foreground mb-1 block",
                    children: [p, " ", d.jsx("span", {
                        className: "text-destructive",
                        children: "*"
                    })]
                }), d.jsx(gt, {
                    placeholder: w,
                    value: re[b] || "",
                    onChange: q => st(b, q.target.value),
                    maxLength: N ? .maxLength || 100,
                    className: `rounded-xl text-sm ${ue[b]?"border-destructive":""}`
                }), ue[b] && d.jsx("p", {
                    className: "text-destructive text-xs mt-0.5",
                    children: ue[b]
                })]
            });
        return d.jsx(ht, {
            children: s && d.jsx(ae.div, {
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
                onClick: t,
                children: d.jsxs(ae.div, {
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
                    onClick: p => p.stopPropagation(),
                    className: "bg-card rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative",
                    children: [d.jsx("button", {
                        onClick: t,
                        className: "absolute top-4 right-4 text-muted-foreground hover:text-foreground",
                        children: d.jsx(yt, {
                            className: "w-6 h-6"
                        })
                    }), (() => {
                        const p = X(s.id),
                            b = re.cep || "",
                            w = Jt(b),
                            N = ie(p),
                            q = p + N;
                        return d.jsxs(d.Fragment, {
                            children: [d.jsxs("div", {
                                className: "flex items-center gap-3 mb-4 pb-4 border-b border-border",
                                children: [d.jsx("img", {
                                    src: s.image,
                                    alt: s.name,
                                    className: "w-14 h-14 rounded-xl object-contain bg-muted"
                                }), d.jsxs("div", {
                                    className: "flex-1",
                                    children: [d.jsx("h3", {
                                        className: "font-bold text-sm text-foreground",
                                        children: s.name
                                    }), d.jsxs("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: ["Tamanho: ", e]
                                    })]
                                }), d.jsx("span", {
                                    className: "text-brasil-green font-bold text-lg",
                                    children: Q(p)
                                })]
                            }), a === "form" && d.jsxs("div", {
                                className: "bg-muted/50 rounded-xl p-3 mb-5 text-sm space-y-1.5",
                                children: [d.jsxs("div", {
                                    className: "flex justify-between text-muted-foreground",
                                    children: [d.jsx("span", {
                                        children: "Subtotal"
                                    }), d.jsx("span", {
                                        className: "text-foreground font-medium",
                                        children: Q(p)
                                    })]
                                }), d.jsxs("div", {
                                    className: "flex justify-between text-muted-foreground",
                                    children: [d.jsxs("span", {
                                        children: ["Frete ", w && `(CEP ${b})`]
                                    }), w ? N === 0 ? d.jsx("span", {
                                        className: "text-brasil-green font-bold",
                                        children: "GRÁTIS 🎉"
                                    }) : d.jsx("span", {
                                        className: "text-foreground font-medium",
                                        children: Q(N)
                                    }) : d.jsx("span", {
                                        className: "text-xs italic",
                                        children: "Informe o CEP abaixo"
                                    })]
                                }), N > 0 && w && d.jsxs("p", {
                                    className: "text-xs text-brasil-yellow-dark bg-brasil-yellow/20 rounded-lg p-2 mt-1",
                                    children: ["🚚 Faltam ", Q(et - p), " para frete grátis!"]
                                }), d.jsxs("div", {
                                    className: "flex justify-between pt-2 border-t border-border",
                                    children: [d.jsx("span", {
                                        className: "font-bold text-foreground",
                                        children: "Total"
                                    }), d.jsx("span", {
                                        className: "font-bold text-brasil-green text-lg",
                                        children: Q(q)
                                    })]
                                })]
                            })]
                        })
                    })(), a === "form" && d.jsxs("div", {
                        children: [d.jsx("h3", {
                            className: "font-display text-2xl text-foreground mb-4",
                            children: "Dados para Pagamento e Entrega"
                        }), d.jsxs("div", {
                            className: "space-y-3 mb-5",
                            children: [d.jsx("p", {
                                className: "text-xs font-bold text-muted-foreground uppercase tracking-wide",
                                children: "Dados Pessoais"
                            }), O("Nome completo", "nome", "João da Silva"), d.jsxs("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [O("CPF", "cpf", "000.000.000-00", {
                                    maxLength: 14
                                }), O("Telefone", "telefone", "(11) 92684-1693", {
                                    maxLength: 15
                                })]
                            }), O("Email", "email", "joao@email.com"), d.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Após o pagamento, você receberá um email para criar sua senha e acessar a área exclusiva."
                            })]
                        }), d.jsxs("div", {
                            className: "space-y-3 mb-6",
                            children: [d.jsx("p", {
                                className: "text-xs font-bold text-muted-foreground uppercase tracking-wide",
                                children: "Endereço de Entrega"
                            }), O("CEP", "cep", "00000-000", {
                                maxLength: 9
                            }), O("Endereço", "endereco", "Rua das Flores"), d.jsxs("div", {
                                className: "grid grid-cols-3 gap-3",
                                children: [O("Número", "numero", "123", {
                                    maxLength: 10
                                }), O("Complemento", "complemento", "Apto 4", {
                                    className: "col-span-2"
                                })]
                            }), O("Bairro", "bairro", "Centro"), d.jsxs("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [O("Cidade", "cidade", "São Paulo"), O("Estado", "estado", "SP", {
                                    maxLength: 2
                                })]
                            })]
                        }), d.jsx(ae.button, {
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: .97
                            },
                            onClick: at,
                            className: "w-full bg-brasil-green text-primary-foreground font-bold py-4 rounded-xl shadow-cta hover:bg-brasil-green-dark transition-colors flex items-center justify-center gap-2",
                            children: "Continuar para Pagamento →"
                        })]
                    }), a === "method" && d.jsxs("div", {
                        children: [d.jsxs("button", {
                            onClick: () => n("form"),
                            className: "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4",
                            children: [d.jsx(xe, {
                                className: "w-4 h-4"
                            }), " Voltar"]
                        }), d.jsx("h3", {
                            className: "font-display text-2xl text-foreground mb-2",
                            children: "Escolha a forma de pagamento"
                        }), d.jsx("p", {
                            className: "text-sm text-muted-foreground mb-5",
                            children: "Selecione como deseja pagar seu pedido."
                        }), d.jsxs("div", {
                            className: "space-y-3",
                            children: [d.jsx(ae.button, {
                                whileHover: {
                                    scale: U || F ? 1 : 1.02
                                },
                                whileTap: {
                                    scale: U || F ? 1 : .97
                                },
                                onClick: nt,
                                disabled: U || F,
                                className: "w-full bg-brasil-green text-primary-foreground font-bold py-4 rounded-xl shadow-cta hover:bg-brasil-green-dark transition-colors disabled:opacity-60 flex items-center justify-center gap-2",
                                children: U ? d.jsxs(d.Fragment, {
                                    children: [d.jsx(ne, {
                                        className: "w-5 h-5 animate-spin"
                                    }), " Gerando PIX..."]
                                }) : d.jsxs(d.Fragment, {
                                    children: [d.jsx(Ze, {
                                        className: "w-5 h-5"
                                    }), " Pagar com PIX"]
                                })
                            }), d.jsx(ae.button, {
                                whileHover: {
                                    scale: U || F ? 1 : 1.02
                                },
                                whileTap: {
                                    scale: U || F ? 1 : .97
                                },
                                onClick: ot,
                                disabled: U || F,
                                className: "w-full bg-brasil-blue text-primary-foreground font-bold py-4 rounded-xl shadow-cta hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2",
                                children: F ? d.jsxs(d.Fragment, {
                                    children: [d.jsx(ne, {
                                        className: "w-5 h-5 animate-spin"
                                    }), " Redirecionando..."]
                                }) : d.jsx(d.Fragment, {
                                    children: "💳 Pagar com Cartão de Crédito"
                                })
                            }), d.jsx("p", {
                                className: "text-xs text-center text-muted-foreground mt-2",
                                children: "💚 PIX: aprovação imediata • 💳 Cartão: até 12x sem juros*"
                            })]
                        })]
                    }), a === "card" && d.jsxs("div", {
                        children: [d.jsxs("button", {
                            onClick: () => n("method"),
                            className: "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4",
                            children: [d.jsx(xe, {
                                className: "w-4 h-4"
                            }), " Voltar"]
                        }), d.jsx("h3", {
                            className: "font-display text-2xl text-foreground mb-1",
                            children: "Pagamento com Cartão"
                        }), d.jsx("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: "Preencha os dados do seu cartão. Pagamento seguro processado pelo Mercado Pago."
                        }), d.jsx("div", {
                            id: Se
                        }), x && d.jsxs("div", {
                            className: "flex items-center justify-center gap-2 text-sm text-muted-foreground mt-3",
                            children: [d.jsx(ne, {
                                className: "w-4 h-4 animate-spin"
                            }), " Processando pagamento..."]
                        })]
                    }), a === "pix" && H && d.jsxs("div", {
                        children: [d.jsxs("button", {
                            onClick: () => n("method"),
                            className: "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4",
                            children: [d.jsx(xe, {
                                className: "w-4 h-4"
                            }), " Voltar"]
                        }), d.jsxs("div", {
                            className: "text-center mb-5",
                            children: [d.jsx("div", {
                                className: "w-14 h-14 mx-auto mb-3 rounded-2xl bg-brasil-green flex items-center justify-center",
                                children: d.jsx(Ze, {
                                    className: "w-7 h-7 text-primary-foreground"
                                })
                            }), d.jsx("h3", {
                                className: "font-display text-3xl text-foreground",
                                children: "Pagamento PIX"
                            }), d.jsxs("p", {
                                className: "text-muted-foreground text-sm mt-1",
                                children: [s.name, " — Tam. ", e]
                            })]
                        }), d.jsxs("div", {
                            className: "bg-muted rounded-2xl p-6 mb-5 text-center",
                            children: [H.qr_b64 ? d.jsx("img", {
                                src: `data:image/png;base64,${H.qr_b64}`,
                                alt: "QR Code PIX",
                                className: "w-48 h-48 mx-auto mb-3 rounded-xl bg-card"
                            }) : d.jsx(ne, {
                                className: "w-10 h-10 mx-auto animate-spin text-muted-foreground"
                            }), d.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Escaneie o QR Code com o app do seu banco"
                            })]
                        }), d.jsxs("div", {
                            className: "mb-5",
                            children: [d.jsx("p", {
                                className: "text-sm font-semibold text-foreground mb-2",
                                children: "Ou copie o código PIX:"
                            }), d.jsxs("div", {
                                className: "flex items-center gap-2 bg-muted rounded-xl p-3",
                                children: [d.jsx("span", {
                                    className: "text-xs text-card-foreground flex-1 truncate font-mono",
                                    children: H.copy
                                }), d.jsx("button", {
                                    onClick: dt,
                                    className: "bg-brasil-green text-primary-foreground p-2 rounded-lg hover:bg-brasil-green-dark transition-colors",
                                    children: tt ? d.jsx(_t, {
                                        className: "w-4 h-4"
                                    }) : d.jsx(xt, {
                                        className: "w-4 h-4"
                                    })
                                })]
                            })]
                        }), d.jsxs("div", {
                            className: "bg-brasil-yellow/20 border border-brasil-yellow rounded-xl p-4 text-center",
                            children: [d.jsxs("p", {
                                className: "text-sm font-bold text-foreground",
                                children: ["Valor: ", Q(X(s.id) + ie(X(s.id)))]
                            }), d.jsxs("div", {
                                className: "flex items-center justify-center gap-2 mt-2 text-xs text-muted-foreground",
                                children: [d.jsx(ne, {
                                    className: "w-3 h-3 animate-spin"
                                }), "Aguardando confirmação do pagamento..."]
                            })]
                        })]
                    }), a === "success" && d.jsxs("div", {
                        className: "text-center py-6",
                        children: [d.jsx("div", {
                            className: "w-20 h-20 mx-auto mb-4 rounded-full bg-brasil-green/20 flex items-center justify-center",
                            children: d.jsx(vt, {
                                className: "w-12 h-12 text-brasil-green"
                            })
                        }), d.jsx("h3", {
                            className: "font-display text-3xl text-foreground mb-2",
                            children: "Pagamento Aprovado! 🎉"
                        }), d.jsx("p", {
                            className: "text-muted-foreground mb-2",
                            children: "Seu pedido foi confirmado."
                        }), d.jsxs("p", {
                            className: "text-sm text-muted-foreground mb-6",
                            children: ["Enviamos um email para ", d.jsx("strong", {
                                children: re.email
                            }), " com o link para você criar sua senha e acessar a área exclusiva."]
                        }), d.jsx("button", {
                            onClick: () => {
                                t(), r("/membros")
                            },
                            className: "w-full bg-brasil-green text-primary-foreground font-bold py-4 rounded-xl shadow-cta hover:bg-brasil-green-dark transition-colors",
                            children: "Ir para Área de Membros"
                        })]
                    })]
                })
            })
        })
    };
export {
    rs as
    default
};