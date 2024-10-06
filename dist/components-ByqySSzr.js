import { defineComponent as mt, computed as Ae, resolveComponent as jt, openBlock as I, createElementBlock as j, normalizeClass as Ce, createCommentVNode as ht, createBlock as St, createTextVNode as _t, toDisplayString as ut, renderSlot as it, unref as M, withCtx as Bt, createElementVNode as S, createVNode as Ut, createSlots as tp, ref as Pe, withModifiers as ss, withDirectives as Zt, vModelText as ae, Fragment as Zi, renderList as Uo, vModelSelect as Ml, isRef as Mo, mergeProps as ei, normalizeProps as ep, guardReactiveProps as np } from "vue";
import { RouterLink as si } from "vue-router";
import { defineStore as zl } from "pinia";
import { useSprunjer as ip } from "@userfrosting/sprinkle-core/sprunjer";
var ve = /* @__PURE__ */ ((i) => (i.Primary = "Primary", i.Success = "Success", i.Warning = "Warning", i.Danger = "Danger", i))(ve || {});
const sp = {
  key: 1,
  "data-test": "title"
}, op = {
  key: 2,
  "data-test": "description"
}, rp = ["innerHTML"], ap = /* @__PURE__ */ mt({
  __name: "AlertContainer",
  props: {
    alert: {}
  },
  setup(i) {
    const s = i, a = Ae(() => {
      switch (s.alert.style) {
        case ve.Success:
          return "uk-alert-success";
        case ve.Warning:
          return "uk-alert-warning";
        case ve.Danger:
          return "uk-alert-danger";
        case ve.Primary:
        default:
          return "uk-alert-primary";
      }
    }), r = Ae(() => {
      switch (s.alert.style) {
        case ve.Success:
          return "fa-solid fa-circle-check";
        case ve.Warning:
          return "fa-solid fa-circle-exclamation";
        case ve.Danger:
          return "fa-solid fa-triangle-exclamation";
        case ve.Primary:
        default:
          return "fa-solid fa-circle-info";
      }
    });
    return (u, h) => {
      const f = jt("font-awesome-icon");
      return I(), j("div", {
        class: Ce([a.value, "uk-alert"]),
        "uk-alert": ""
      }, [
        u.alert.closeBtn ? (I(), j("a", {
          key: 0,
          "data-test": "closeBtn",
          class: "uk-alert-close",
          "uk-close": "",
          onClick: h[0] || (h[0] = (g) => u.$emit("close"))
        })) : ht("", !0),
        u.alert.title ? (I(), j("h3", sp, [
          u.alert.hideIcon ? ht("", !0) : (I(), St(f, {
            key: 0,
            icon: r.value,
            class: "uk-icon"
          }, null, 8, ["icon"])),
          _t(" " + ut(u.alert.title), 1)
        ])) : ht("", !0),
        u.$slots.default ? (I(), j("p", op, [
          it(u.$slots, "default")
        ])) : u.alert.description ? (I(), j("p", {
          key: 3,
          innerHTML: u.alert.description,
          "data-test": "description"
        }, null, 8, rp)) : ht("", !0)
      ], 2);
    };
  }
}), lp = ["href"], cp = { key: 1 }, zo = /* @__PURE__ */ mt({
  __name: "AppLink",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, a = Ae(() => typeof s.to == "string" && s.to.startsWith("http")), r = Ae(() => s.to), u = Ae(() => s.to === "");
    return (h, f) => a.value ? (I(), j("a", {
      key: 0,
      href: r.value,
      target: "_blank"
    }, [
      it(h.$slots, "default", {}, () => [
        _t(ut(h.label), 1)
      ])
    ], 8, lp)) : u.value ? (I(), j("div", cp, [
      it(h.$slots, "default", {}, () => [
        _t(ut(h.label), 1)
      ])
    ])) : (I(), St(M(si), {
      key: 2,
      to: h.to
    }, {
      default: Bt(() => [
        it(h.$slots, "default", {}, () => [
          _t(ut(h.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["to"]));
  }
}), up = { class: "uk-card uk-card-default uk-card-body uk-card-small" }, hp = {
  class: "uk-grid-small uk-flex-middle",
  "uk-grid": ""
}, dp = {
  key: 0,
  class: "uk-width-auto"
}, fp = ["data-uk-icon"], pp = { class: "uk-width-expand" }, mp = {
  key: 0,
  class: "uk-margin-remove"
}, gp = {
  key: 1,
  class: "uk-text-meta uk-text-uppercase"
}, vp = /* @__PURE__ */ mt({
  __name: "InfoBox",
  props: {
    to: { default: "" },
    label: { default: null },
    value: { default: null },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(i) {
    return (s, a) => {
      const r = jt("font-awesome-icon");
      return I(), St(zo, {
        to: s.to,
        class: "uk-text-decoration-none"
      }, {
        default: Bt(() => [
          S("div", up, [
            S("div", hp, [
              s.icon || s.faIcon ? (I(), j("div", dp, [
                s.icon ? (I(), j("span", {
                  key: 0,
                  "data-uk-icon": "icon: " + s.icon + "; ratio: 2",
                  class: "uk-margin-small-right"
                }, null, 8, fp)) : ht("", !0),
                s.faIcon ? (I(), St(r, {
                  key: 1,
                  icon: s.faIcon,
                  size: "2xl",
                  "fixed-width": ""
                }, null, 8, ["icon"])) : ht("", !0)
              ])) : ht("", !0),
              S("div", pp, [
                s.value !== null ? (I(), j("h4", mp, ut(s.value), 1)) : ht("", !0),
                s.label !== null ? (I(), j("span", gp, ut(s.label), 1)) : ht("", !0)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
}), bp = { class: "uk-card uk-card-default uk-card-small" }, wp = {
  key: 0,
  class: "uk-card-header"
}, yp = { "data-test": "title" }, $p = {
  class: "uk-card-body",
  "data-test": "slot"
}, kp = {
  key: 1,
  class: "uk-card-footer"
}, xp = /* @__PURE__ */ mt({
  __name: "CardBox",
  props: {
    title: String
  },
  setup(i) {
    return (s, a) => (I(), j("div", bp, [
      i.title || s.$slots.header ? (I(), j("div", wp, [
        S("h4", yp, [
          it(s.$slots, "header", {}, () => [
            _t(ut(i.title), 1)
          ])
        ])
      ])) : ht("", !0),
      S("div", $p, [
        it(s.$slots, "default")
      ]),
      s.$slots.footer ? (I(), j("div", kp, [
        it(s.$slots, "footer")
      ])) : ht("", !0)
    ]));
  }
}), Sp = { class: "uk-flex uk-flex-center uk-flex-middle" }, _p = { class: "uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl" }, Ep = /* @__PURE__ */ mt({
  __name: "CardBoxBig",
  props: {
    title: String
  },
  setup(i) {
    return (s, a) => {
      const r = jt("UFCardBox");
      return I(), j("div", Sp, [
        S("div", _p, [
          Ut(r, null, tp({
            default: Bt(() => [
              it(s.$slots, "default")
            ]),
            _: 2
          }, [
            s.$slots.header || i.title ? {
              name: "header",
              fn: Bt(() => [
                it(s.$slots, "header", {}, () => [
                  _t(ut(i.title), 1)
                ])
              ]),
              key: "0"
            } : void 0,
            s.$slots.footer ? {
              name: "footer",
              fn: Bt(() => [
                it(s.$slots, "footer")
              ]),
              key: "1"
            } : void 0
          ]), 1024)
        ])
      ]);
    };
  }
}), yn = (i, s) => {
  const a = i.__vccOpts || i;
  for (const [r, u] of s)
    a[r] = u;
  return a;
}, Tp = {}, Op = {
  class: "uf-main uk-section uk-section-default uk-section-muted",
  "uk-height-viewport": "expand: true"
}, Cp = {
  class: "uk-container",
  "data-test": "slot"
};
function Ap(i, s) {
  return I(), j("div", Op, [
    S("div", Cp, [
      it(i.$slots, "default")
    ])
  ]);
}
const Pp = /* @__PURE__ */ yn(Tp, [["render", Ap]]), Rp = { class: "uf-page-header" }, Ip = { class: "uk-margin-remove" }, Bp = {
  key: 0,
  class: "uk-text-meta uk-margin-remove"
}, Np = /* @__PURE__ */ mt({
  __name: "HeaderPage",
  props: {
    title: {},
    caption: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), j("div", Rp, [
      S("h3", Ip, ut(s.title), 1),
      s.caption ? (I(), j("p", Bp, ut(s.caption), 1)) : ht("", !0)
    ]));
  }
}), Fp = {}, Dp = { class: "uf-main uk-section uk-section-small uk-section-muted uk-text-center" }, jp = {
  class: "uk-text-small uk-text-center",
  "data-test": "slot"
};
function Lp(i, s) {
  return I(), j("footer", Dp, [
    s[0] || (s[0] = S("hr", null, null, -1)),
    S("p", jp, [
      it(i.$slots, "default")
    ])
  ]);
}
const Up = /* @__PURE__ */ yn(Fp, [["render", Lp]]);
var Mp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zp(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Hl = { exports: {} };
/*! UIkit 3.21.13 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */
(function(i, s) {
  (function(a, r) {
    i.exports = r();
  })(Mp, function() {
    const { hasOwnProperty: a, toString: r } = Object.prototype;
    function u(t, e) {
      return a.call(t, e);
    }
    const h = /\B([A-Z])/g, f = ie((t) => t.replace(h, "-$1").toLowerCase()), g = /-(\w)/g, k = ie(
      (t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(g, (e, n) => n.toUpperCase())
    ), b = ie((t) => t.charAt(0).toUpperCase() + t.slice(1));
    function v(t, e) {
      var n;
      return (n = t == null ? void 0 : t.startsWith) == null ? void 0 : n.call(t, e);
    }
    function A(t, e) {
      var n;
      return (n = t == null ? void 0 : t.endsWith) == null ? void 0 : n.call(t, e);
    }
    function x(t, e) {
      var n;
      return (n = t == null ? void 0 : t.includes) == null ? void 0 : n.call(t, e);
    }
    function P(t, e) {
      var n;
      return (n = t == null ? void 0 : t.findIndex) == null ? void 0 : n.call(t, e);
    }
    const { isArray: C, from: O } = Array, { assign: U } = Object;
    function q(t) {
      return typeof t == "function";
    }
    function z(t) {
      return t !== null && typeof t == "object";
    }
    function Y(t) {
      return r.call(t) === "[object Object]";
    }
    function Ct(t) {
      return z(t) && t === t.window;
    }
    function Nt(t) {
      return ne(t) === 9;
    }
    function wt(t) {
      return ne(t) >= 1;
    }
    function Ft(t) {
      return ne(t) === 1;
    }
    function ne(t) {
      return !Ct(t) && z(t) && t.nodeType;
    }
    function Mt(t) {
      return typeof t == "boolean";
    }
    function dt(t) {
      return typeof t == "string";
    }
    function _n(t) {
      return typeof t == "number";
    }
    function he(t) {
      return _n(t) || dt(t) && !isNaN(t - parseFloat(t));
    }
    function ci(t) {
      return !(C(t) ? t.length : z(t) && Object.keys(t).length);
    }
    function Pt(t) {
      return t === void 0;
    }
    function ms(t) {
      return Mt(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function pe(t) {
      const e = Number(t);
      return isNaN(e) ? !1 : e;
    }
    function G(t) {
      return parseFloat(t) || 0;
    }
    function yt(t) {
      return t && tt(t)[0];
    }
    function tt(t) {
      return wt(t) ? [t] : Array.from(t || []).filter(wt);
    }
    function Re(t) {
      if (Ct(t))
        return t;
      t = yt(t);
      const e = Nt(t) ? t : t == null ? void 0 : t.ownerDocument;
      return (e == null ? void 0 : e.defaultView) || window;
    }
    function En(t, e) {
      return t === e || z(t) && z(e) && Object.keys(t).length === Object.keys(e).length && nn(t, (n, o) => n === e[o]);
    }
    function gs(t, e, n) {
      return t.replace(new RegExp(`${e}|${n}`, "g"), (o) => o === e ? n : e);
    }
    function Ie(t) {
      return t[t.length - 1];
    }
    function nn(t, e) {
      for (const n in t)
        if (e(t[n], n) === !1)
          return !1;
      return !0;
    }
    function tr(t, e) {
      return t.slice().sort(
        ({ [e]: n = 0 }, { [e]: o = 0 }) => n > o ? 1 : o > n ? -1 : 0
      );
    }
    function Be(t, e) {
      return t.reduce(
        (n, o) => n + G(q(e) ? e(o) : o[e]),
        0
      );
    }
    function er(t, e) {
      const n = /* @__PURE__ */ new Set();
      return t.filter(({ [e]: o }) => n.has(o) ? !1 : n.add(o));
    }
    function vs(t, e) {
      return e.reduce((n, o) => ({ ...n, [o]: t[o] }), {});
    }
    function Dt(t, e = 0, n = 1) {
      return Math.min(Math.max(pe(t) || 0, e), n);
    }
    function ot() {
    }
    function ui(...t) {
      return [
        ["bottom", "top"],
        ["right", "left"]
      ].every(
        ([e, n]) => Math.min(...t.map(({ [e]: o }) => o)) - Math.max(...t.map(({ [n]: o }) => o)) > 0
      );
    }
    function hi(t, e) {
      return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function bs(t, e, n) {
      const o = e === "width" ? "height" : "width";
      return {
        [o]: t[e] ? Math.round(n * t[o] / t[e]) : t[o],
        [e]: n
      };
    }
    function nr(t, e) {
      t = { ...t };
      for (const n in t)
        t = t[n] > e[n] ? bs(t, n, e[n]) : t;
      return t;
    }
    function qc(t, e) {
      t = nr(t, e);
      for (const n in t)
        t = t[n] < e[n] ? bs(t, n, e[n]) : t;
      return t;
    }
    const ws = { ratio: bs, contain: nr, cover: qc };
    function Kt(t, e, n = 0, o = !1) {
      e = tt(e);
      const { length: l } = e;
      return l ? (t = he(t) ? pe(t) : t === "next" ? n + 1 : t === "previous" ? n - 1 : t === "last" ? l - 1 : e.indexOf(yt(t)), o ? Dt(t, 0, l - 1) : (t %= l, t < 0 ? t + l : t)) : -1;
    }
    function ie(t) {
      const e = /* @__PURE__ */ Object.create(null);
      return (n, ...o) => e[n] || (e[n] = t(n, ...o));
    }
    function X(t, ...e) {
      for (const n of tt(t)) {
        const o = Ne(e).filter((l) => !H(n, l));
        o.length && n.classList.add(...o);
      }
    }
    function st(t, ...e) {
      for (const n of tt(t)) {
        const o = Ne(e).filter((l) => H(n, l));
        o.length && n.classList.remove(...o);
      }
    }
    function di(t, e, n) {
      n = Ne(n), e = Ne(e).filter((o) => !x(n, o)), st(t, e), X(t, n);
    }
    function H(t, e) {
      return [e] = Ne(e), tt(t).some((n) => n.classList.contains(e));
    }
    function $t(t, e, n) {
      const o = Ne(e);
      Pt(n) || (n = !!n);
      for (const l of tt(t))
        for (const c of o)
          l.classList.toggle(c, n);
    }
    function Ne(t) {
      return t ? C(t) ? t.map(Ne).flat() : String(t).split(" ").filter(Boolean) : [];
    }
    function N(t, e, n) {
      var o;
      if (z(e)) {
        for (const l in e)
          N(t, l, e[l]);
        return;
      }
      if (Pt(n))
        return (o = yt(t)) == null ? void 0 : o.getAttribute(e);
      for (const l of tt(t))
        q(n) && (n = n.call(l, N(l, e))), n === null ? Tn(l, e) : l.setAttribute(e, n);
    }
    function we(t, e) {
      return tt(t).some((n) => n.hasAttribute(e));
    }
    function Tn(t, e) {
      tt(t).forEach((n) => n.removeAttribute(e));
    }
    function Rt(t, e) {
      for (const n of [e, `data-${e}`])
        if (we(t, n))
          return N(t, n);
    }
    const Fe = typeof window < "u", Tt = Fe && document.dir === "rtl", sn = Fe && "ontouchstart" in window, on = Fe && window.PointerEvent, se = on ? "pointerdown" : sn ? "touchstart" : "mousedown", fi = on ? "pointermove" : sn ? "touchmove" : "mousemove", ye = on ? "pointerup" : sn ? "touchend" : "mouseup", De = on ? "pointerenter" : sn ? "" : "mouseenter", rn = on ? "pointerleave" : sn ? "" : "mouseleave", pi = on ? "pointercancel" : "touchcancel", Wc = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    };
    function ys(t) {
      return tt(t).some((e) => Wc[e.tagName.toLowerCase()]);
    }
    const Vc = Fe && Element.prototype.checkVisibility || function() {
      return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
    };
    function kt(t) {
      return tt(t).some((e) => Vc.call(e));
    }
    const On = "input,select,textarea,button";
    function mi(t) {
      return tt(t).some((e) => et(e, On));
    }
    const Cn = `${On},a[href],[tabindex]`;
    function gi(t) {
      return et(t, Cn);
    }
    function at(t) {
      var e;
      return (e = yt(t)) == null ? void 0 : e.parentElement;
    }
    function An(t, e) {
      return tt(t).filter((n) => et(n, e));
    }
    function et(t, e) {
      return tt(t).some((n) => n.matches(e));
    }
    function Pn(t, e) {
      const n = [];
      for (; t = at(t); )
        (!e || et(t, e)) && n.push(t);
      return n;
    }
    function lt(t, e) {
      t = yt(t);
      const n = t ? O(t.children) : [];
      return e ? An(n, e) : n;
    }
    function me(t, e) {
      return e ? tt(t).indexOf(yt(e)) : lt(at(t)).indexOf(t);
    }
    function an(t) {
      return t = yt(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
    }
    function $s(t) {
      if (an(t)) {
        const { hash: e, ownerDocument: n } = yt(t), o = decodeURIComponent(e).slice(1);
        return n.getElementById(o) || n.getElementsByName(o)[0];
      }
    }
    function Lt(t, e) {
      return ks(t, ir(t, e));
    }
    function Rn(t, e) {
      return In(t, ir(t, e));
    }
    function ks(t, e) {
      return yt(rr(t, yt(e), "querySelector"));
    }
    function In(t, e) {
      return tt(rr(t, yt(e), "querySelectorAll"));
    }
    function ir(t, e = document) {
      return Nt(e) || sr(t).isContextSelector ? e : e.ownerDocument;
    }
    const Jc = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, Kc = /(\([^)]*\)|[^,])+/g, sr = ie((t) => {
      let e = !1;
      if (!t || !dt(t))
        return {};
      const n = [];
      for (let o of t.match(Kc))
        o = o.trim().replace(Jc, "$1 *"), e || (e = ["!", "+", "~", "-", ">"].includes(o[0])), n.push(o);
      return {
        selector: n.join(","),
        selectors: n,
        isContextSelector: e
      };
    }), Gc = /(\([^)]*\)|\S)*/, or = ie((t) => {
      t = t.slice(1).trim();
      const [e] = t.match(Gc);
      return [e, t.slice(e.length + 1)];
    });
    function rr(t, e = document, n) {
      const o = sr(t);
      if (!o.isContextSelector)
        return o.selector ? xs(e, n, o.selector) : t;
      t = "";
      const l = o.selectors.length === 1;
      for (let c of o.selectors) {
        let d, p = e;
        if (c[0] === "!" && ([d, c] = or(c), p = e.parentElement.closest(d), !c && l) || p && c[0] === "-" && ([d, c] = or(c), p = p.previousElementSibling, p = et(p, d) ? p : null, !c && l))
          return p;
        if (p) {
          if (l)
            return c[0] === "~" || c[0] === "+" ? (c = `:scope > :nth-child(${me(p) + 1}) ${c}`, p = p.parentElement) : c[0] === ">" && (c = `:scope ${c}`), xs(p, n, c);
          t += `${t ? "," : ""}${Xc(p)} ${c}`;
        }
      }
      return Nt(e) || (e = e.ownerDocument), xs(e, n, t);
    }
    function xs(t, e, n) {
      try {
        return t[e](n);
      } catch {
        return null;
      }
    }
    function Xc(t) {
      const e = [];
      for (; t.parentNode; ) {
        const n = N(t, "id");
        if (n) {
          e.unshift(`#${Ss(n)}`);
          break;
        } else {
          let { tagName: o } = t;
          o !== "HTML" && (o += `:nth-child(${me(t) + 1})`), e.unshift(o), t = t.parentNode;
        }
      }
      return e.join(" > ");
    }
    function Ss(t) {
      return dt(t) ? CSS.escape(t) : "";
    }
    function W(...t) {
      let [e, n, o, l, c = !1] = _s(t);
      l.length > 1 && (l = Qc(l)), c != null && c.self && (l = Zc(l)), o && (l = Yc(o, l));
      for (const d of n)
        for (const p of e)
          p.addEventListener(d, l, c);
      return () => $e(e, n, l, c);
    }
    function $e(...t) {
      let [e, n, , o, l = !1] = _s(t);
      for (const c of n)
        for (const d of e)
          d.removeEventListener(c, o, l);
    }
    function gt(...t) {
      const [e, n, o, l, c = !1, d] = _s(t), p = W(
        e,
        n,
        o,
        (m) => {
          const y = !d || d(m);
          y && (p(), l(m, y));
        },
        c
      );
      return p;
    }
    function D(t, e, n) {
      return Es(t).every(
        (o) => o.dispatchEvent(ln(e, !0, !0, n))
      );
    }
    function ln(t, e = !0, n = !1, o) {
      return dt(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: n, detail: o })), t;
    }
    function _s(t) {
      return t[0] = Es(t[0]), dt(t[1]) && (t[1] = t[1].split(" ")), q(t[2]) && t.splice(2, 0, !1), t;
    }
    function Yc(t, e) {
      return (n) => {
        const o = t[0] === ">" ? In(t, n.currentTarget).reverse().find((l) => l.contains(n.target)) : n.target.closest(t);
        o && (n.current = o, e.call(this, n), delete n.current);
      };
    }
    function Qc(t) {
      return (e) => C(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function Zc(t) {
      return function(e) {
        if (e.target === e.currentTarget || e.target === e.current)
          return t.call(null, e);
      };
    }
    function ar(t) {
      return t && "addEventListener" in t;
    }
    function tu(t) {
      return ar(t) ? t : yt(t);
    }
    function Es(t) {
      return C(t) ? t.map(tu).filter(Boolean) : dt(t) ? In(t) : ar(t) ? [t] : tt(t);
    }
    function re(t) {
      return t.pointerType === "touch" || !!t.touches;
    }
    function ge(t) {
      var e, n;
      const { clientX: o, clientY: l } = ((e = t.touches) == null ? void 0 : e[0]) || ((n = t.changedTouches) == null ? void 0 : n[0]) || t;
      return { x: o, y: l };
    }
    const eu = {
      "animation-iteration-count": !0,
      "column-count": !0,
      "fill-opacity": !0,
      "flex-grow": !0,
      "flex-shrink": !0,
      "font-weight": !0,
      "line-height": !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      "stroke-dasharray": !0,
      "stroke-dashoffset": !0,
      widows: !0,
      "z-index": !0,
      zoom: !0
    };
    function w(t, e, n, o) {
      const l = tt(t);
      for (const c of l)
        if (dt(e)) {
          if (e = vi(e), Pt(n))
            return getComputedStyle(c).getPropertyValue(e);
          c.style.setProperty(
            e,
            he(n) && !eu[e] ? `${n}px` : n || _n(n) ? n : "",
            o
          );
        } else if (C(e)) {
          const d = {};
          for (const p of e)
            d[p] = w(c, p);
          return d;
        } else if (z(e))
          for (const d in e)
            w(c, d, e[d], n);
      return l[0];
    }
    const vi = ie((t) => {
      if (v(t, "--"))
        return t;
      t = f(t);
      const { style: e } = document.documentElement;
      if (t in e)
        return t;
      for (const n of ["webkit", "moz"]) {
        const o = `-${n}-${t}`;
        if (o in e)
          return o;
      }
    }), Ts = "uk-transition", Os = "transitionend", Cs = "transitioncanceled";
    function nu(t, e, n = 400, o = "linear") {
      return n = Math.round(n), Promise.all(
        tt(t).map(
          (l) => new Promise((c, d) => {
            for (const m in e)
              w(l, m);
            const p = setTimeout(() => D(l, Os), n);
            gt(
              l,
              [Os, Cs],
              ({ type: m }) => {
                clearTimeout(p), st(l, Ts), w(l, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
                }), m === Cs ? d() : c(l);
              },
              { self: !0 }
            ), X(l, Ts), w(l, {
              transitionProperty: Object.keys(e).map(vi).join(","),
              transitionDuration: `${n}ms`,
              transitionTimingFunction: o,
              ...e
            });
          })
        )
      );
    }
    const ct = {
      start: nu,
      async stop(t) {
        D(t, Os), await Promise.resolve();
      },
      async cancel(t) {
        D(t, Cs), await Promise.resolve();
      },
      inProgress(t) {
        return H(t, Ts);
      }
    }, Bn = "uk-animation", lr = "animationend", bi = "animationcanceled";
    function cr(t, e, n = 200, o, l) {
      return Promise.all(
        tt(t).map(
          (c) => new Promise((d, p) => {
            H(c, Bn) && D(c, bi);
            const m = [
              e,
              Bn,
              `${Bn}-${l ? "leave" : "enter"}`,
              o && `uk-transform-origin-${o}`,
              l && `${Bn}-reverse`
            ], y = setTimeout(() => D(c, lr), n);
            gt(
              c,
              [lr, bi],
              ({ type: $ }) => {
                clearTimeout(y), $ === bi ? p() : d(c), w(c, "animationDuration", ""), st(c, m);
              },
              { self: !0 }
            ), w(c, "animationDuration", `${n}ms`), X(c, m);
          })
        )
      );
    }
    const ke = {
      in: cr,
      out(t, e, n, o) {
        return cr(t, e, n, o, !0);
      },
      inProgress(t) {
        return H(t, Bn);
      },
      cancel(t) {
        D(t, bi);
      }
    };
    function iu(t) {
      if (document.readyState !== "loading") {
        t();
        return;
      }
      gt(document, "DOMContentLoaded", t);
    }
    function vt(t, ...e) {
      return e.some((n) => {
        var o;
        return ((o = t == null ? void 0 : t.tagName) == null ? void 0 : o.toLowerCase()) === n.toLowerCase();
      });
    }
    function ur(t) {
      return t = V(t), t.innerHTML = "", t;
    }
    function xe(t, e) {
      return Pt(e) ? V(t).innerHTML : xt(ur(t), e);
    }
    const su = $i("prepend"), xt = $i("append"), wi = $i("before"), yi = $i("after");
    function $i(t) {
      return function(e, n) {
        var o;
        const l = tt(dt(n) ? je(n) : n);
        return (o = V(e)) == null || o[t](...l), hr(l);
      };
    }
    function Gt(t) {
      tt(t).forEach((e) => e.remove());
    }
    function ki(t, e) {
      for (e = yt(wi(t, e)); e.firstElementChild; )
        e = e.firstElementChild;
      return xt(e, t), e;
    }
    function As(t, e) {
      return tt(
        tt(t).map(
          (n) => n.hasChildNodes() ? ki(O(n.childNodes), e) : xt(n, e)
        )
      );
    }
    function Nn(t) {
      tt(t).map(at).filter((e, n, o) => o.indexOf(e) === n).forEach((e) => e.replaceWith(...e.childNodes));
    }
    const ou = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function je(t) {
      const e = ou.exec(t);
      if (e)
        return document.createElement(e[1]);
      const n = document.createElement("template");
      return n.innerHTML = t.trim(), hr(n.content.childNodes);
    }
    function hr(t) {
      return t.length > 1 ? t : t[0];
    }
    function Se(t, e) {
      if (Ft(t))
        for (e(t), t = t.firstElementChild; t; )
          Se(t, e), t = t.nextElementSibling;
    }
    function V(t, e) {
      return dr(t) ? yt(je(t)) : ks(t, e);
    }
    function ft(t, e) {
      return dr(t) ? tt(je(t)) : In(t, e);
    }
    function dr(t) {
      return dt(t) && v(t.trim(), "<");
    }
    const Le = {
      width: ["left", "right"],
      height: ["top", "bottom"]
    };
    function F(t) {
      const e = Ft(t) ? yt(t).getBoundingClientRect() : { height: zt(t), width: xi(t), top: 0, left: 0 };
      return {
        height: e.height,
        width: e.width,
        top: e.top,
        left: e.left,
        bottom: e.top + e.height,
        right: e.left + e.width
      };
    }
    function Z(t, e) {
      e && w(t, { left: 0, top: 0 });
      const n = F(t);
      if (t) {
        const { scrollY: o, scrollX: l } = Re(t), c = { height: o, width: l };
        for (const d in Le)
          for (const p of Le[d])
            n[p] += c[d];
      }
      if (!e)
        return n;
      for (const o of ["left", "top"])
        w(t, o, e[o] - n[o]);
    }
    function Ps(t) {
      let { top: e, left: n } = Z(t);
      const {
        ownerDocument: { body: o, documentElement: l },
        offsetParent: c
      } = yt(t);
      let d = c || l;
      for (; d && (d === o || d === l) && w(d, "position") === "static"; )
        d = d.parentNode;
      if (Ft(d)) {
        const p = Z(d);
        e -= p.top + G(w(d, "borderTopWidth")), n -= p.left + G(w(d, "borderLeftWidth"));
      }
      return {
        top: e - G(w(t, "marginTop")),
        left: n - G(w(t, "marginLeft"))
      };
    }
    function Fn(t) {
      t = yt(t);
      const e = [t.offsetTop, t.offsetLeft];
      for (; t = t.offsetParent; )
        if (e[0] += t.offsetTop + G(w(t, "borderTopWidth")), e[1] += t.offsetLeft + G(w(t, "borderLeftWidth")), w(t, "position") === "fixed") {
          const n = Re(t);
          return e[0] += n.scrollY, e[1] += n.scrollX, e;
        }
      return e;
    }
    const zt = fr("height"), xi = fr("width");
    function fr(t) {
      const e = b(t);
      return (n, o) => {
        if (Pt(o)) {
          if (Ct(n))
            return n[`inner${e}`];
          if (Nt(n)) {
            const l = n.documentElement;
            return Math.max(l[`offset${e}`], l[`scroll${e}`]);
          }
          return n = yt(n), o = w(n, t), o = o === "auto" ? n[`offset${e}`] : G(o) || 0, o - cn(n, t);
        } else
          return w(
            n,
            t,
            !o && o !== 0 ? "" : +o + cn(n, t) + "px"
          );
      };
    }
    function cn(t, e, n = "border-box") {
      return w(t, "boxSizing") === n ? Be(
        Le[e],
        (o) => G(w(t, `padding-${o}`)) + G(w(t, `border-${o}-width`))
      ) : 0;
    }
    function Si(t) {
      for (const e in Le)
        for (const n in Le[e])
          if (Le[e][n] === t)
            return Le[e][1 - n];
      return t;
    }
    function At(t, e = "width", n = window, o = !1) {
      return dt(t) ? Be(au(t), (l) => {
        const c = cu(l);
        return c ? uu(
          c === "vh" ? hu() : c === "vw" ? xi(Re(n)) : o ? n[`offset${b(e)}`] : F(n)[e],
          l
        ) : l;
      }) : G(t);
    }
    const ru = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, au = ie((t) => t.toString().replace(/\s/g, "").match(ru) || []), lu = /(?:v[hw]|%)$/, cu = ie((t) => (t.match(lu) || [])[0]);
    function uu(t, e) {
      return t * G(e) / 100;
    }
    let Dn, un;
    function hu() {
      return Dn || (un || (un = V("<div>"), w(un, {
        height: "100vh",
        position: "fixed"
      }), W(window, "resize", () => Dn = null)), xt(document.body, un), Dn = un.clientHeight, Gt(un), Dn);
    }
    const _e = { read: du, write: fu, clear: pu, flush: pr }, _i = [], Ei = [];
    function du(t) {
      return _i.push(t), Is(), t;
    }
    function fu(t) {
      return Ei.push(t), Is(), t;
    }
    function pu(t) {
      gr(_i, t), gr(Ei, t);
    }
    let Rs = !1;
    function pr() {
      mr(_i), mr(Ei.splice(0)), Rs = !1, (_i.length || Ei.length) && Is();
    }
    function Is() {
      Rs || (Rs = !0, queueMicrotask(pr));
    }
    function mr(t) {
      let e;
      for (; e = t.shift(); )
        try {
          e();
        } catch (n) {
          console.error(n);
        }
    }
    function gr(t, e) {
      const n = t.indexOf(e);
      return ~n && t.splice(n, 1);
    }
    class vr {
      init() {
        this.positions = [];
        let e;
        this.unbind = W(document, "mousemove", (n) => e = ge(n)), this.interval = setInterval(() => {
          e && (this.positions.push(e), this.positions.length > 5 && this.positions.shift());
        }, 50);
      }
      cancel() {
        var e;
        (e = this.unbind) == null || e.call(this), clearInterval(this.interval);
      }
      movesTo(e) {
        if (!this.positions || this.positions.length < 2)
          return !1;
        const n = F(e), { left: o, right: l, top: c, bottom: d } = n, [p] = this.positions, m = Ie(this.positions), y = [p, m];
        return hi(m, n) ? !1 : [
          [
            { x: o, y: c },
            { x: l, y: d }
          ],
          [
            { x: o, y: d },
            { x: l, y: c }
          ]
        ].some((T) => {
          const R = mu(y, T);
          return R && hi(R, n);
        });
      }
    }
    function mu([{ x: t, y: e }, { x: n, y: o }], [{ x: l, y: c }, { x: d, y: p }]) {
      const m = (p - c) * (n - t) - (d - l) * (o - e);
      if (m === 0)
        return !1;
      const y = ((d - l) * (e - c) - (p - c) * (t - l)) / m;
      return y < 0 ? !1 : { x: t + y * (n - t), y: e + y * (o - e) };
    }
    function br(t, e, n = {}, { intersecting: o = !0 } = {}) {
      const l = new IntersectionObserver(
        o ? (c, d) => {
          c.some((p) => p.isIntersecting) && e(c, d);
        } : e,
        n
      );
      for (const c of tt(t))
        l.observe(c);
      return l;
    }
    const gu = Fe && window.ResizeObserver;
    function jn(t, e, n = { box: "border-box" }) {
      if (gu)
        return wr(ResizeObserver, t, e, n);
      const o = [W(window, "load resize", e), W(document, "loadedmetadata load", e, !0)];
      return { disconnect: () => o.map((l) => l()) };
    }
    function Bs(t) {
      return { disconnect: W([window, window.visualViewport], "resize", t) };
    }
    function Ns(t, e, n) {
      return wr(MutationObserver, t, e, n);
    }
    function wr(t, e, n, o) {
      const l = new t(n);
      for (const c of tt(e))
        l.observe(c, o);
      return l;
    }
    function Fs(t) {
      Ci(t) && Ds(t, { func: "playVideo", method: "play" }), Oi(t) && t.play().catch(ot);
    }
    function Ti(t) {
      Ci(t) && Ds(t, { func: "pauseVideo", method: "pause" }), Oi(t) && t.pause();
    }
    function yr(t) {
      Ci(t) && Ds(t, { func: "mute", method: "setVolume", value: 0 }), Oi(t) && (t.muted = !0);
    }
    function $r(t) {
      return Oi(t) || Ci(t);
    }
    function Oi(t) {
      return vt(t, "video");
    }
    function Ci(t) {
      return vt(t, "iframe") && (kr(t) || xr(t));
    }
    function kr(t) {
      return !!t.src.match(
        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
      );
    }
    function xr(t) {
      return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function Ds(t, e) {
      await bu(t), Sr(t, e);
    }
    function Sr(t, e) {
      t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
    }
    const js = "_ukPlayer";
    let vu = 0;
    function bu(t) {
      if (t[js])
        return t[js];
      const e = kr(t), n = xr(t), o = ++vu;
      let l;
      return t[js] = new Promise((c) => {
        e && gt(t, "load", () => {
          const d = () => Sr(t, { event: "listening", id: o });
          l = setInterval(d, 100), d();
        }), gt(window, "message", c, !1, ({ data: d }) => {
          try {
            return d = JSON.parse(d), e && (d == null ? void 0 : d.id) === o && d.event === "onReady" || n && Number(d == null ? void 0 : d.player_id) === o;
          } catch {
          }
        }), t.src = `${t.src}${x(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${o}`}`;
      }).then(() => clearInterval(l));
    }
    function wu(t, e = 0, n = 0) {
      return kt(t) ? ui(
        ...Me(t).map((o) => {
          const { top: l, left: c, bottom: d, right: p } = Xt(o);
          return {
            top: l - e,
            left: c - n,
            bottom: d + e,
            right: p + n
          };
        }).concat(Z(t))
      ) : !1;
    }
    function _r(t, { offset: e = 0 } = {}) {
      const n = kt(t) ? Ue(t, !1, ["hidden"]) : [];
      return n.reduce(
        (d, p, m) => {
          const { scrollTop: y, scrollHeight: $, offsetHeight: T } = p, R = Xt(p), B = $ - R.height, { height: L, top: Q } = n[m - 1] ? Xt(n[m - 1]) : Z(t);
          let nt = Math.ceil(Q - R.top - e + y);
          return e > 0 && T < L + e ? nt += e : e = 0, nt > B ? (e -= nt - B, nt = B) : nt < 0 && (e -= nt, nt = 0), () => o(p, nt - y, t, B).then(d);
        },
        () => Promise.resolve()
      )();
      function o(d, p, m, y) {
        return new Promise(($) => {
          const T = d.scrollTop, R = l(Math.abs(p)), B = Date.now(), L = Ms(d) === d, Q = Z(m).top + (L ? 0 : T);
          let nt = 0, de = 15;
          (function bn() {
            const wn = c(Dt((Date.now() - B) / R));
            let fe = 0;
            n[0] === d && T + p < y && (fe = Z(m).top + (L ? 0 : d.scrollTop) - Q - F(Ls(m)).height), w(d, "scrollBehavior") !== "auto" && w(d, "scrollBehavior", "auto"), d.scrollTop = T + (p + fe) * wn, w(d, "scrollBehavior", ""), wn === 1 && (nt === fe || !de--) ? $() : (nt = fe, requestAnimationFrame(bn));
          })();
        });
      }
      function l(d) {
        return 40 * Math.pow(d, 0.375);
      }
      function c(d) {
        return 0.5 * (1 - Math.cos(Math.PI * d));
      }
    }
    function Ai(t, e = 0, n = 0) {
      if (!kt(t))
        return 0;
      const o = Ee(t, !0), { scrollHeight: l, scrollTop: c } = o, { height: d } = Xt(o), p = l - d, m = Fn(t)[0] - Fn(o)[0], y = Math.max(0, m - d + e), $ = Math.min(p, m + t.offsetHeight - n);
      return y < $ ? Dt((c - y) / ($ - y)) : 1;
    }
    function Ue(t, e = !1, n = []) {
      const o = Ms(t);
      let l = Pn(t).reverse();
      l = l.slice(l.indexOf(o) + 1);
      const c = P(l, (d) => w(d, "position") === "fixed");
      return ~c && (l = l.slice(c)), [o].concat(
        l.filter(
          (d) => w(d, "overflow").split(" ").some((p) => x(["auto", "scroll", ...n], p)) && (!e || d.scrollHeight > Xt(d).height)
        )
      ).reverse();
    }
    function Ee(...t) {
      return Ue(...t)[0];
    }
    function Me(t) {
      return Ue(t, !1, ["hidden", "clip"]);
    }
    function Xt(t) {
      const e = Re(t), n = Ms(t), o = !wt(t) || t.contains(n);
      if (o && e.visualViewport) {
        let { height: m, width: y, scale: $, pageTop: T, pageLeft: R } = e.visualViewport;
        return m = Math.round(m * $), y = Math.round(y * $), { height: m, width: y, top: T, left: R, bottom: T + m, right: R + y };
      }
      let l = Z(o ? e : t);
      if (w(t, "display") === "inline")
        return l;
      const { body: c, documentElement: d } = e.document, p = o ? n === d || // In quirks mode the scrolling element is body, even though the viewport is html
      n.clientHeight < c.clientHeight ? n : c : t;
      for (let [m, y, $, T] of [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
      ]) {
        const R = l[m] % 1;
        l[$] += G(w(p, `border-${$}-width`)), l[m] = l[y] = p[`client${b(m)}`] - (R ? R < 0.5 ? -R : 1 - R : 0), l[T] = l[m] + l[$];
      }
      return l;
    }
    function Ls(t) {
      const { left: e, width: n, top: o } = F(t);
      for (const l of o ? [0, o] : [0]) {
        let c;
        for (const d of Re(t).document.elementsFromPoint(e + n / 2, l))
          !d.contains(t) && // If e.g. Offcanvas is not yet closed
          !H(d, "uk-togglable-leave") && (Us(d, "fixed") && Er(
            Pn(t).reverse().find(
              (p) => !p.contains(d) && !Us(p, "static")
            )
          ) < Er(d) || Us(d, "sticky") && at(d).contains(t)) && (!c || F(c).height < F(d).height) && (c = d);
        if (c)
          return c;
      }
    }
    function Er(t) {
      return G(w(t, "zIndex"));
    }
    function Us(t, e) {
      return w(t, "position") === e;
    }
    function Ms(t) {
      return Re(t).document.scrollingElement;
    }
    const Yt = [
      ["width", "x", "left", "right"],
      ["height", "y", "top", "bottom"]
    ];
    function Tr(t, e, n) {
      n = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...n.attach
        },
        offset: [0, 0],
        placement: [],
        ...n
      }, C(e) || (e = [e, e]), Z(t, Or(t, e, n));
    }
    function Or(t, e, n) {
      const o = Cr(t, e, n), { boundary: l, viewportOffset: c = 0, placement: d } = n;
      let p = o;
      for (const [m, [y, , $, T]] of Object.entries(Yt)) {
        const R = yu(t, e[m], c, l, m);
        if (Pi(o, R, m))
          continue;
        let B = 0;
        if (d[m] === "flip") {
          const L = n.attach.target[m];
          if (L === T && o[T] <= R[T] || L === $ && o[$] >= R[$])
            continue;
          B = ku(t, e, n, m)[$] - o[$];
          const Q = $u(t, e[m], c, m);
          if (!Pi(zs(o, B, m), Q, m)) {
            if (Pi(o, Q, m))
              continue;
            if (n.recursion)
              return !1;
            const nt = xu(t, e, n);
            if (nt && Pi(nt, Q, 1 - m))
              return nt;
            continue;
          }
        } else if (d[m] === "shift") {
          const L = Z(e[m]), { offset: Q } = n;
          B = Dt(
            Dt(o[$], R[$], R[T] - o[y]),
            L[$] - o[y] + Q[m],
            L[T] - Q[m]
          ) - o[$];
        }
        p = zs(p, B, m);
      }
      return p;
    }
    function Cr(t, e, n) {
      let { attach: o, offset: l } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...n.attach
        },
        offset: [0, 0],
        ...n
      }, c = Z(t);
      for (const [d, [p, , m, y]] of Object.entries(Yt)) {
        const $ = o.target[d] === o.element[d] ? Xt(e[d]) : Z(e[d]);
        c = zs(
          c,
          $[m] - c[m] + Ar(o.target[d], y, $[p]) - Ar(o.element[d], y, c[p]) + +l[d],
          d
        );
      }
      return c;
    }
    function zs(t, e, n) {
      const [, o, l, c] = Yt[n], d = { ...t };
      return d[l] = t[o] = t[l] + e, d[c] += e, d;
    }
    function Ar(t, e, n) {
      return t === "center" ? n / 2 : t === e ? n : 0;
    }
    function yu(t, e, n, o, l) {
      let c = Rr(...Pr(t, e).map(Xt));
      return n && (c[Yt[l][2]] += n, c[Yt[l][3]] -= n), o && (c = Rr(
        c,
        Z(C(o) ? o[l] : o)
      )), c;
    }
    function $u(t, e, n, o) {
      const [l, c, d, p] = Yt[o], [m] = Pr(t, e), y = Xt(m);
      return ["auto", "scroll"].includes(w(m, `overflow-${c}`)) && (y[d] -= m[`scroll${b(d)}`], y[p] = y[d] + m[`scroll${b(l)}`]), y[d] += n, y[p] -= n, y;
    }
    function Pr(t, e) {
      return Me(e).filter((n) => n.contains(t));
    }
    function Rr(...t) {
      let e = {};
      for (const n of t)
        for (const [, , o, l] of Yt)
          e[o] = Math.max(e[o] || 0, n[o]), e[l] = Math.min(...[e[l], n[l]].filter(Boolean));
      return e;
    }
    function Pi(t, e, n) {
      const [, , o, l] = Yt[n];
      return t[o] >= e[o] && t[l] <= e[l];
    }
    function ku(t, e, { offset: n, attach: o }, l) {
      return Cr(t, e, {
        attach: {
          element: Ir(o.element, l),
          target: Ir(o.target, l)
        },
        offset: Su(n, l)
      });
    }
    function xu(t, e, n) {
      return Or(t, e, {
        ...n,
        attach: {
          element: n.attach.element.map(Br).reverse(),
          target: n.attach.target.map(Br).reverse()
        },
        offset: n.offset.reverse(),
        placement: n.placement.reverse(),
        recursion: !0
      });
    }
    function Ir(t, e) {
      const n = [...t], o = Yt[e].indexOf(t[e]);
      return ~o && (n[e] = Yt[e][1 - o % 2 + 2]), n;
    }
    function Br(t) {
      for (let e = 0; e < Yt.length; e++) {
        const n = Yt[e].indexOf(t);
        if (~n)
          return Yt[1 - e][n % 2 + 2];
      }
    }
    function Su(t, e) {
      return t = [...t], t[e] *= -1, t;
    }
    var _u = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $: V,
      $$: ft,
      Animation: ke,
      Dimensions: ws,
      MouseTracker: vr,
      Transition: ct,
      addClass: X,
      after: yi,
      append: xt,
      apply: Se,
      assign: U,
      attr: N,
      before: wi,
      boxModelAdjust: cn,
      camelize: k,
      children: lt,
      clamp: Dt,
      createEvent: ln,
      css: w,
      data: Rt,
      dimensions: F,
      each: nn,
      empty: ur,
      endsWith: A,
      escape: Ss,
      fastdom: _e,
      filter: An,
      find: ks,
      findAll: In,
      findIndex: P,
      flipPosition: Si,
      fragment: je,
      getCoveringElement: Ls,
      getEventPos: ge,
      getIndex: Kt,
      getTargetedElement: $s,
      hasAttr: we,
      hasClass: H,
      hasOwn: u,
      hasTouch: sn,
      height: zt,
      html: xe,
      hyphenate: f,
      inBrowser: Fe,
      includes: x,
      index: me,
      intersectRect: ui,
      isArray: C,
      isBoolean: Mt,
      isDocument: Nt,
      isElement: Ft,
      isEmpty: ci,
      isEqual: En,
      isFocusable: gi,
      isFunction: q,
      isInView: wu,
      isInput: mi,
      isNode: wt,
      isNumber: _n,
      isNumeric: he,
      isObject: z,
      isPlainObject: Y,
      isRtl: Tt,
      isSameSiteAnchor: an,
      isString: dt,
      isTag: vt,
      isTouch: re,
      isUndefined: Pt,
      isVideo: $r,
      isVisible: kt,
      isVoidElement: ys,
      isWindow: Ct,
      last: Ie,
      matches: et,
      memoize: ie,
      mute: yr,
      noop: ot,
      observeIntersection: br,
      observeMutation: Ns,
      observeResize: jn,
      observeViewportResize: Bs,
      off: $e,
      offset: Z,
      offsetPosition: Fn,
      offsetViewport: Xt,
      on: W,
      once: gt,
      overflowParents: Me,
      parent: at,
      parents: Pn,
      pause: Ti,
      pick: vs,
      play: Fs,
      pointInRect: hi,
      pointerCancel: pi,
      pointerDown: se,
      pointerEnter: De,
      pointerLeave: rn,
      pointerMove: fi,
      pointerUp: ye,
      position: Ps,
      positionAt: Tr,
      prepend: su,
      propName: vi,
      query: Lt,
      queryAll: Rn,
      ready: iu,
      remove: Gt,
      removeAttr: Tn,
      removeClass: st,
      replaceClass: di,
      scrollIntoView: _r,
      scrollParent: Ee,
      scrollParents: Ue,
      scrolledOver: Ai,
      selFocusable: Cn,
      selInput: On,
      sortBy: tr,
      startsWith: v,
      sumBy: Be,
      swap: gs,
      toArray: O,
      toBoolean: ms,
      toEventTargets: Es,
      toFloat: G,
      toNode: yt,
      toNodes: tt,
      toNumber: pe,
      toPx: At,
      toWindow: Re,
      toggleClass: $t,
      trigger: D,
      ucfirst: b,
      uniqueBy: er,
      unwrap: Nn,
      width: xi,
      wrapAll: ki,
      wrapInner: As
    }), Ht = {
      connected() {
        X(this.$el, this.$options.id);
      }
    };
    const Eu = ["days", "hours", "minutes", "seconds"];
    var Tu = {
      mixins: [Ht],
      props: {
        date: String,
        clsWrapper: String,
        role: String
      },
      data: {
        date: "",
        clsWrapper: ".uk-countdown-%unit%",
        role: "timer"
      },
      connected() {
        N(this.$el, "role", this.role), this.date = G(Date.parse(this.$props.date)), this.end = !1, this.start();
      },
      disconnected() {
        this.stop();
      },
      events: {
        name: "visibilitychange",
        el: () => document,
        handler() {
          document.hidden ? this.stop() : this.start();
        }
      },
      methods: {
        start() {
          this.stop(), this.update(), this.timer || (D(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3));
        },
        stop() {
          this.timer && (clearInterval(this.timer), D(this.$el, "countdownstop"), this.timer = null);
        },
        update() {
          const t = Ou(this.date);
          t.total || (this.stop(), this.end || (D(this.$el, "countdownend"), this.end = !0));
          for (const e of Eu) {
            const n = V(this.clsWrapper.replace("%unit%", e), this.$el);
            if (!n)
              continue;
            let o = Math.trunc(t[e]).toString().padStart(2, "0");
            n.textContent !== o && (o = o.split(""), o.length !== n.children.length && xe(n, o.map(() => "<span></span>").join("")), o.forEach((l, c) => n.children[c].textContent = l));
          }
        }
      }
    };
    function Ou(t) {
      const e = Math.max(0, t - Date.now()) / 1e3;
      return {
        total: e,
        seconds: e % 60,
        minutes: e / 60 % 60,
        hours: e / 60 / 60 % 24,
        days: e / 60 / 60 / 24
      };
    }
    const Ot = {};
    Ot.events = Ot.watch = Ot.observe = Ot.created = Ot.beforeConnect = Ot.connected = Ot.beforeDisconnect = Ot.disconnected = Ot.destroy = Hs, Ot.args = function(t, e) {
      return e !== !1 && Hs(e || t);
    }, Ot.update = function(t, e) {
      return tr(
        Hs(t, q(e) ? { read: e } : e),
        "order"
      );
    }, Ot.props = function(t, e) {
      if (C(e)) {
        const n = {};
        for (const o of e)
          n[o] = String;
        e = n;
      }
      return Ot.methods(t, e);
    }, Ot.computed = Ot.methods = function(t, e) {
      return e ? t ? { ...t, ...e } : e : t;
    }, Ot.i18n = Ot.data = function(t, e, n) {
      return n ? Nr(t, e, n) : e ? t ? function(o) {
        return Nr(t, e, o);
      } : e : t;
    };
    function Nr(t, e, n) {
      return Ot.computed(
        q(t) ? t.call(n, n) : t,
        q(e) ? e.call(n, n) : e
      );
    }
    function Hs(t, e) {
      return t = t && !C(t) ? [t] : t, e ? t ? t.concat(e) : C(e) ? e : [e] : t;
    }
    function Cu(t, e) {
      return Pt(e) ? t : e;
    }
    function Ln(t, e, n) {
      const o = {};
      if (q(e) && (e = e.options), e.extends && (t = Ln(t, e.extends, n)), e.mixins)
        for (const c of e.mixins)
          t = Ln(t, c, n);
      for (const c in t)
        l(c);
      for (const c in e)
        u(t, c) || l(c);
      function l(c) {
        o[c] = (Ot[c] || Cu)(t[c], e[c], n);
      }
      return o;
    }
    function hn(t, e = []) {
      try {
        return t ? v(t, "{") ? JSON.parse(t) : e.length && !x(t, ":") ? { [e[0]]: t } : t.split(";").reduce((n, o) => {
          const [l, c] = o.split(/:(.*)/);
          return l && !Pt(c) && (n[l.trim()] = c.trim()), n;
        }, {}) : {};
      } catch {
        return {};
      }
    }
    function qs(t, e) {
      return t === Boolean ? ms(e) : t === Number ? pe(e) : t === "list" ? Pu(e) : t === Object && dt(e) ? hn(e) : t ? t(e) : e;
    }
    const Au = /,(?![^(]*\))/;
    function Pu(t) {
      return C(t) ? t : dt(t) ? t.split(Au).map((e) => he(e) ? pe(e) : ms(e.trim())) : [t];
    }
    function Ru(t) {
      t._data = {}, t._updates = [...t.$options.update || []], t._disconnect.push(() => t._updates = t._data = null);
    }
    function Iu(t, e) {
      t._updates.unshift(e);
    }
    function Un(t, e = "update") {
      t._connected && t._updates.length && (t._queued || (t._queued = /* @__PURE__ */ new Set(), _e.read(() => {
        t._connected && Bu(t, t._queued), t._queued = null;
      })), t._queued.add(e.type || e));
    }
    function Bu(t, e) {
      for (const { read: n, write: o, events: l = [] } of t._updates) {
        if (!e.has("update") && !l.some((d) => e.has(d)))
          continue;
        let c;
        n && (c = n.call(t, t._data, e), c && Y(c) && U(t._data, c)), o && c !== !1 && _e.write(() => {
          t._connected && o.call(t, t._data, e);
        });
      }
    }
    function oe(t) {
      return zn(jn, t, "resize");
    }
    function dn(t) {
      return zn(br, t);
    }
    function Ri(t) {
      return zn(Ns, t);
    }
    function Ii(t = {}) {
      return dn({
        handler: function(e, n) {
          const { targets: o = this.$el, preload: l = 5 } = t;
          for (const c of tt(q(o) ? o(this) : o))
            ft('[loading="lazy"]', c).slice(0, l - 1).forEach((d) => Tn(d, "loading"));
          for (const c of e.filter(({ isIntersecting: d }) => d).map(({ target: d }) => d))
            n.unobserve(c);
        },
        ...t
      });
    }
    function Ws(t) {
      return zn((e, n) => Bs(n), t, "resize");
    }
    function Mn(t) {
      return zn(
        (e, n) => ({
          disconnect: W(Fu(e), "scroll", n, { passive: !0 })
        }),
        t,
        "scroll"
      );
    }
    function Fr(t) {
      return {
        observe(e, n) {
          return {
            observe: ot,
            unobserve: ot,
            disconnect: W(e, se, n, { passive: !0 })
          };
        },
        handler(e) {
          if (!re(e))
            return;
          const n = ge(e), o = "tagName" in e.target ? e.target : at(e.target);
          gt(document, `${ye} ${pi} scroll`, (l) => {
            const { x: c, y: d } = ge(l);
            (l.type !== "scroll" && o && c && Math.abs(n.x - c) > 100 || d && Math.abs(n.y - d) > 100) && setTimeout(() => {
              D(o, "swipe"), D(o, `swipe${Nu(n.x, n.y, c, d)}`);
            });
          });
        },
        ...t
      };
    }
    function zn(t, e, n) {
      return {
        observe: t,
        handler() {
          Un(this, n);
        },
        ...e
      };
    }
    function Nu(t, e, n, o) {
      return Math.abs(t - n) >= Math.abs(e - o) ? t - n > 0 ? "Left" : "Right" : e - o > 0 ? "Up" : "Down";
    }
    function Fu(t) {
      return tt(t).map((e) => {
        const { ownerDocument: n } = e, o = Ee(e, !0);
        return o === n.scrollingElement ? n : o;
      });
    }
    var Dr = {
      props: {
        margin: String,
        firstColumn: Boolean
      },
      data: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column"
      },
      observe: [
        Ri({
          options: {
            childList: !0
          }
        }),
        Ri({
          options: {
            attributes: !0,
            attributeFilter: ["style"]
          },
          target: ({ $el: t }) => [t, ...lt(t)]
        }),
        oe({
          target: ({ $el: t }) => [t, ...lt(t)]
        })
      ],
      update: {
        read() {
          return {
            rows: Vs(lt(this.$el))
          };
        },
        write({ rows: t }) {
          for (const e of t)
            for (const n of e)
              $t(n, this.margin, t[0] !== e), $t(n, this.firstColumn, e[Tt ? e.length - 1 : 0] === n);
        },
        events: ["resize"]
      }
    };
    function Vs(t) {
      const e = [[]], n = t.some(
        (o, l) => l && t[l - 1].offsetParent !== o.offsetParent
      );
      for (const o of t) {
        if (!kt(o))
          continue;
        const l = Js(o, n);
        for (let c = e.length - 1; c >= 0; c--) {
          const d = e[c];
          if (!d[0]) {
            d.push(o);
            break;
          }
          const p = Js(d[0], n);
          if (l.top >= p.bottom - 1 && l.top !== p.top) {
            e.push([o]);
            break;
          }
          if (l.bottom - 1 > p.top || l.top === p.top) {
            let m = d.length - 1;
            for (; m >= 0; m--) {
              const y = Js(d[m], n);
              if (l.left >= y.left)
                break;
            }
            d.splice(m + 1, 0, o);
            break;
          }
          if (c === 0) {
            e.unshift([o]);
            break;
          }
        }
      }
      return e;
    }
    function Js(t, e = !1) {
      let { offsetTop: n, offsetLeft: o, offsetHeight: l, offsetWidth: c } = t;
      return e && ([n, o] = Fn(t)), {
        top: n,
        left: o,
        bottom: n + l,
        right: o + c
      };
    }
    async function Du(t, e, n) {
      await Ks();
      let o = lt(e);
      const l = o.map((B) => jr(B, !0)), c = { ...w(e, ["height", "padding"]), display: "block" }, d = o.concat(e);
      await Promise.all(d.map(ct.cancel)), w(d, "transitionProperty", "none"), await t(), o = o.concat(lt(e).filter((B) => !x(o, B))), await Promise.resolve(), w(d, "transitionProperty", "");
      const p = N(e, "style"), m = w(e, ["height", "padding"]), [y, $] = ju(e, o, l), T = o.map((B) => ({ style: N(B, "style") }));
      o.forEach((B, L) => $[L] && w(B, $[L])), w(e, c), D(e, "scroll"), await Ks();
      const R = o.map((B, L) => at(B) === e && ct.start(B, y[L], n, "ease")).concat(ct.start(e, m, n, "ease"));
      try {
        await Promise.all(R), o.forEach((B, L) => {
          N(B, T[L]), at(B) === e && w(B, "display", y[L].opacity === 0 ? "none" : "");
        }), N(e, "style", p);
      } catch {
        N(o, "style", ""), Lu(e, c);
      }
    }
    function jr(t, e) {
      const n = w(t, "zIndex");
      return kt(t) ? {
        display: "",
        opacity: e ? w(t, "opacity") : "0",
        pointerEvents: "none",
        position: "absolute",
        zIndex: n === "auto" ? me(t) : n,
        ...Lr(t)
      } : !1;
    }
    function ju(t, e, n) {
      const o = e.map(
        (c, d) => at(c) && d in n ? n[d] ? kt(c) ? Lr(c) : { opacity: 0 } : { opacity: kt(c) ? 1 : 0 } : !1
      ), l = o.map((c, d) => {
        const p = at(e[d]) === t && (n[d] || jr(e[d]));
        if (!p)
          return !1;
        if (!c)
          delete p.opacity;
        else if (!("opacity" in c)) {
          const { opacity: m } = p;
          m % 1 ? c.opacity = 1 : delete p.opacity;
        }
        return p;
      });
      return [o, l];
    }
    function Lu(t, e) {
      for (const n in e)
        w(t, n, "");
    }
    function Lr(t) {
      const { height: e, width: n } = F(t);
      return {
        height: e,
        width: n,
        transform: "",
        ...Ps(t),
        ...w(t, ["marginTop", "marginLeft"])
      };
    }
    function Ks() {
      return new Promise((t) => requestAnimationFrame(t));
    }
    const Gs = "uk-transition-leave", Xs = "uk-transition-enter";
    function Ur(t, e, n, o = 0) {
      const l = Bi(e, !0), c = { opacity: 1 }, d = { opacity: 0 }, p = ($) => () => l === Bi(e) ? $() : Promise.reject(), m = p(async () => {
        X(e, Gs), await Promise.all(
          zr(e).map(
            ($, T) => new Promise(
              (R) => setTimeout(
                () => ct.start($, d, n / 2, "ease").then(
                  R
                ),
                T * o
              )
            )
          )
        ), st(e, Gs);
      }), y = p(async () => {
        const $ = zt(e);
        X(e, Xs), t(), w(lt(e), { opacity: 0 }), await Ks();
        const T = lt(e), R = zt(e);
        w(e, "alignContent", "flex-start"), zt(e, $);
        const B = zr(e);
        w(T, d);
        const L = B.map(async (Q, nt) => {
          await Uu(nt * o), await ct.start(Q, c, n / 2, "ease");
        });
        $ !== R && L.push(
          ct.start(
            e,
            { height: R },
            n / 2 + B.length * o,
            "ease"
          )
        ), await Promise.all(L).then(() => {
          st(e, Xs), l === Bi(e) && (w(e, { height: "", alignContent: "" }), w(T, { opacity: "" }), delete e.dataset.transition);
        });
      });
      return H(e, Gs) ? Mr(e).then(y) : H(e, Xs) ? Mr(e).then(m).then(y) : m().then(y);
    }
    function Bi(t, e) {
      return e && (t.dataset.transition = 1 + Bi(t)), pe(t.dataset.transition) || 0;
    }
    function Mr(t) {
      return Promise.all(
        lt(t).filter(ct.inProgress).map(
          (e) => new Promise((n) => gt(e, "transitionend transitioncanceled", n))
        )
      );
    }
    function zr(t) {
      return Vs(lt(t)).flat().filter(kt);
    }
    function Uu(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    var Hr = {
      props: {
        duration: Number,
        animation: Boolean
      },
      data: {
        duration: 150,
        animation: "slide"
      },
      methods: {
        animate(t, e = this.$el) {
          const n = this.animation;
          return (n === "fade" ? Ur : n === "delayed-fade" ? (...l) => Ur(...l, 40) : n ? Du : () => (t(), Promise.resolve()))(t, e, this.duration).catch(ot);
        }
      }
    };
    const rt = {
      TAB: 9,
      ESC: 27,
      SPACE: 32,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    };
    var Mu = {
      mixins: [Hr],
      args: "target",
      props: {
        target: String,
        selActive: Boolean
      },
      data: {
        target: "",
        selActive: !1,
        attrItem: "uk-filter-control",
        cls: "uk-active",
        duration: 250
      },
      computed: {
        children: ({ target: t }, e) => ft(`${t} > *`, e),
        toggles: ({ attrItem: t }, e) => ft(`[${t}],[data-${t}]`, e)
      },
      watch: {
        toggles(t) {
          this.updateState();
          const e = ft(this.selActive, this.$el);
          for (const n of t) {
            this.selActive !== !1 && $t(n, this.cls, x(e, n));
            const o = Vu(n);
            vt(o, "a") && N(o, "role", "button");
          }
        },
        children(t, e) {
          e && this.updateState();
        }
      },
      events: {
        name: "click keydown",
        delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`,
        handler(t) {
          t.type === "keydown" && t.keyCode !== rt.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current));
        }
      },
      methods: {
        apply(t) {
          const e = this.getState(), n = Wr(t, this.attrItem, this.getState());
          zu(e, n) || this.setState(n);
        },
        getState() {
          return this.toggles.filter((t) => H(t, this.cls)).reduce((t, e) => Wr(e, this.attrItem, t), {
            filter: { "": "" },
            sort: []
          });
        },
        async setState(t, e = !0) {
          t = { filter: { "": "" }, sort: [], ...t }, D(this.$el, "beforeFilter", [this, t]);
          for (const n of this.toggles)
            $t(n, this.cls, qu(n, this.attrItem, t));
          await Promise.all(
            ft(this.target, this.$el).map((n) => {
              const o = () => Hu(t, n, lt(n));
              return e ? this.animate(o, n) : o();
            })
          ), D(this.$el, "afterFilter", [this]);
        },
        updateState() {
          _e.write(() => this.setState(this.getState(), !1));
        }
      }
    };
    function qr(t, e) {
      return hn(Rt(t, e), ["filter"]);
    }
    function zu(t, e) {
      return ["filter", "sort"].every((n) => En(t[n], e[n]));
    }
    function Hu(t, e, n) {
      for (const c of n)
        w(
          c,
          "display",
          Object.values(t.filter).every((d) => !d || et(c, d)) ? "" : "none"
        );
      const [o, l] = t.sort;
      if (o) {
        const c = Wu(n, o, l);
        En(c, n) || xt(e, c);
      }
    }
    function Wr(t, e, n) {
      const { filter: o, group: l, sort: c, order: d = "asc" } = qr(t, e);
      return (o || Pt(c)) && (l ? o ? (delete n.filter[""], n.filter[l] = o) : (delete n.filter[l], (ci(n.filter) || "" in n.filter) && (n.filter = { "": o || "" })) : n.filter = { "": o || "" }), Pt(c) || (n.sort = [c, d]), n;
    }
    function qu(t, e, { filter: n = { "": "" }, sort: [o, l] }) {
      const { filter: c = "", group: d = "", sort: p, order: m = "asc" } = qr(t, e);
      return Pt(p) ? d in n && c === n[d] || !c && d && !(d in n) && !n[""] : o === p && l === m;
    }
    function Wu(t, e, n) {
      return [...t].sort(
        (o, l) => Rt(o, e).localeCompare(Rt(l, e), void 0, { numeric: !0 }) * (n === "asc" || -1)
      );
    }
    function Vu(t) {
      return V("a,button", t) || t;
    }
    let Ys;
    function Vr(t) {
      const e = W(
        t,
        "touchstart",
        (o) => {
          if (o.targetTouches.length !== 1 || et(o.target, 'input[type="range"'))
            return;
          let l = ge(o).y;
          const c = W(
            t,
            "touchmove",
            (d) => {
              const p = ge(d).y;
              p !== l && (l = p, Ue(d.target).some((m) => {
                if (!t.contains(m))
                  return !1;
                let { scrollHeight: y, clientHeight: $ } = m;
                return $ < y;
              }) || d.preventDefault());
            },
            { passive: !1 }
          );
          gt(t, "scroll touchend touchcanel", c, { capture: !0 });
        },
        { passive: !0 }
      );
      if (Ys)
        return e;
      Ys = !0;
      const { scrollingElement: n } = document;
      return w(n, {
        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
        touchAction: "none",
        paddingRight: xi(window) - n.clientWidth || ""
      }), () => {
        Ys = !1, e(), w(n, { overflowY: "", touchAction: "", paddingRight: "" });
      };
    }
    var Hn = {
      props: {
        container: Boolean
      },
      data: {
        container: !0
      },
      computed: {
        container({ container: t }) {
          return t === !0 && this.$container || t && V(t);
        }
      }
    }, ze = {
      props: {
        cls: Boolean,
        animation: "list",
        duration: Number,
        velocity: Number,
        origin: String,
        transition: String
      },
      data: {
        cls: !1,
        animation: [!1],
        duration: 200,
        velocity: 0.2,
        origin: !1,
        transition: "ease",
        clsEnter: "uk-togglable-enter",
        clsLeave: "uk-togglable-leave"
      },
      computed: {
        hasAnimation: ({ animation: t }) => !!t[0],
        hasTransition: ({ animation: t }) => ["slide", "reveal"].some((e) => v(t[0], e))
      },
      methods: {
        async toggleElement(t, e, n) {
          try {
            return await Promise.all(
              tt(t).map((o) => {
                const l = Mt(e) ? e : !this.isToggled(o);
                if (!D(o, `before${l ? "show" : "hide"}`, [this]))
                  return Promise.reject();
                const c = (q(n) ? n : n === !1 || !this.hasAnimation ? Ju : this.hasTransition ? Ku : Gu)(o, l, this), d = l ? this.clsEnter : this.clsLeave;
                X(o, d), D(o, l ? "show" : "hide", [this]);
                const p = () => {
                  st(o, d), D(o, l ? "shown" : "hidden", [this]);
                };
                return c ? c.then(p, () => (st(o, d), Promise.reject())) : p();
              })
            ), !0;
          } catch {
            return !1;
          }
        },
        isToggled(t = this.$el) {
          return t = yt(t), H(t, this.clsEnter) ? !0 : H(t, this.clsLeave) ? !1 : this.cls ? H(t, this.cls.split(" ")[0]) : kt(t);
        },
        _toggle(t, e) {
          if (!t)
            return;
          e = !!e;
          let n;
          this.cls ? (n = x(this.cls, " ") || e !== H(t, this.cls), n && $t(t, this.cls, x(this.cls, " ") ? void 0 : e)) : (n = e === t.hidden, n && (t.hidden = !e)), n && D(t, "toggled", [e, this]), ft("[autofocus]", t).some((o) => kt(o) ? o.focus() || !0 : o.blur());
        }
      }
    };
    function Ju(t, e, { _toggle: n }) {
      return ke.cancel(t), ct.cancel(t), n(t, e);
    }
    async function Ku(t, e, { animation: n, duration: o, velocity: l, transition: c, _toggle: d }) {
      var p;
      const [m = "reveal", y = "top"] = ((p = n[0]) == null ? void 0 : p.split("-")) || [], $ = [
        ["left", "right"],
        ["top", "bottom"]
      ], T = $[x($[0], y) ? 0 : 1], R = T[1] === y, L = ["width", "height"][$.indexOf(T)], Q = `margin-${T[0]}`, nt = `margin-${y}`;
      let de = F(t)[L];
      const bn = ct.inProgress(t);
      await ct.cancel(t), e && d(t, !0);
      const wn = Object.fromEntries(
        [
          "padding",
          "border",
          "width",
          "height",
          "minWidth",
          "minHeight",
          "overflowY",
          "overflowX",
          Q,
          nt
        ].map((dl) => [dl, t.style[dl]])
      ), fe = F(t), go = G(w(t, Q)), cl = G(w(t, nt)), Ge = fe[L] + cl;
      !bn && !e && (de += cl);
      const [Ki] = As(t, "<div>");
      w(Ki, {
        boxSizing: "border-box",
        height: fe.height,
        width: fe.width,
        ...w(t, [
          "overflow",
          "padding",
          "borderTop",
          "borderRight",
          "borderBottom",
          "borderLeft",
          "borderImage",
          nt
        ])
      }), w(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [nt]: 0,
        width: fe.width,
        height: fe.height,
        overflow: "hidden",
        [L]: de
      });
      const ul = de / Ge;
      o = (l * Ge + o) * (e ? 1 - ul : ul);
      const hl = { [L]: e ? Ge : 0 };
      R && (w(t, Q, Ge - de + go), hl[Q] = e ? go : Ge + go), !R ^ m === "reveal" && (w(Ki, Q, -Ge + de), ct.start(Ki, { [Q]: e ? 0 : -Ge }, o, c));
      try {
        await ct.start(t, hl, o, c);
      } finally {
        w(t, wn), Nn(Ki.firstChild), e || d(t, !1);
      }
    }
    function Gu(t, e, n) {
      const { animation: o, duration: l, _toggle: c } = n;
      return e ? (c(t, !0), ke.in(t, o[0], l, n.origin)) : ke.out(t, o[1] || o[0], l, n.origin).then(
        () => c(t, !1)
      );
    }
    const qt = [];
    var Qs = {
      mixins: [Ht, Hn, ze],
      props: {
        selPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean,
        role: String
      },
      data: {
        cls: "uk-open",
        escClose: !0,
        bgClose: !0,
        overlay: !0,
        stack: !1,
        role: "dialog"
      },
      computed: {
        panel: ({ selPanel: t }, e) => V(t, e),
        transitionElement() {
          return this.panel;
        },
        bgClose({ bgClose: t }) {
          return t && this.panel;
        }
      },
      connected() {
        N(this.panel || this.$el, "role", this.role), this.overlay && N(this.panel || this.$el, "aria-modal", !0);
      },
      beforeDisconnect() {
        x(qt, this) && this.toggleElement(this.$el, !1, !1);
      },
      events: [
        {
          name: "click",
          delegate: ({ selClose: t }) => `${t},a[href*="#"]`,
          handler(t) {
            const { current: e, defaultPrevented: n } = t, { hash: o } = e;
            !n && o && an(e) && !this.$el.contains(V(o)) ? this.hide() : et(e, this.selClose) && (t.preventDefault(), this.hide());
          }
        },
        {
          name: "toggle",
          self: !0,
          handler(t) {
            t.defaultPrevented || (t.preventDefault(), this.isToggled() === x(qt, this) && this.toggle());
          }
        },
        {
          name: "beforeshow",
          self: !0,
          handler(t) {
            if (x(qt, this))
              return !1;
            !this.stack && qt.length ? (Promise.all(qt.map((e) => e.hide())).then(this.show), t.preventDefault()) : qt.push(this);
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            this.stack && w(this.$el, "zIndex", G(w(this.$el, "zIndex")) + qt.length);
            const t = [
              this.overlay && Yu(this),
              this.overlay && Vr(this.$el),
              this.bgClose && Qu(this),
              this.escClose && Zu(this)
            ];
            gt(
              this.$el,
              "hidden",
              () => t.forEach((e) => e && e()),
              { self: !0 }
            ), X(document.documentElement, this.clsPage);
          }
        },
        {
          name: "shown",
          self: !0,
          handler() {
            gi(this.$el) || N(this.$el, "tabindex", "-1"), et(this.$el, ":focus-within") || this.$el.focus();
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            x(qt, this) && qt.splice(qt.indexOf(this), 1), w(this.$el, "zIndex", ""), qt.some((t) => t.clsPage === this.clsPage) || st(document.documentElement, this.clsPage);
          }
        }
      ],
      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },
        show() {
          return this.container && at(this.$el) !== this.container ? (xt(this.container, this.$el), new Promise(
            (t) => requestAnimationFrame(() => this.show().then(t))
          )) : this.toggleElement(this.$el, !0, Jr);
        },
        hide() {
          return this.toggleElement(this.$el, !1, Jr);
        }
      }
    };
    function Jr(t, e, { transitionElement: n, _toggle: o }) {
      return new Promise(
        (l, c) => gt(t, "show hide", () => {
          var d;
          (d = t._reject) == null || d.call(t), t._reject = c, o(t, e);
          const p = gt(
            n,
            "transitionstart",
            () => {
              gt(n, "transitionend transitioncancel", l, {
                self: !0
              }), clearTimeout(m);
            },
            { self: !0 }
          ), m = setTimeout(
            () => {
              p(), l();
            },
            Xu(w(n, "transitionDuration"))
          );
        })
      ).then(() => delete t._reject);
    }
    function Xu(t) {
      return t ? A(t, "ms") ? G(t) : G(t) * 1e3 : 0;
    }
    function Yu(t) {
      return W(document, "focusin", (e) => {
        Ie(qt) === t && !t.$el.contains(e.target) && t.$el.focus();
      });
    }
    function Qu(t) {
      return W(document, se, ({ target: e }) => {
        Ie(qt) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || gt(
          document,
          `${ye} ${pi} scroll`,
          ({ defaultPrevented: n, type: o, target: l }) => {
            !n && o === ye && e === l && t.hide();
          },
          !0
        );
      });
    }
    function Zu(t) {
      return W(document, "keydown", (e) => {
        e.keyCode === 27 && Ie(qt) === t && t.hide();
      });
    }
    var Zs = {
      slide: {
        show(t) {
          return [{ transform: bt(t * -100) }, { transform: bt() }];
        },
        percent(t) {
          return qn(t);
        },
        translate(t, e) {
          return [
            { transform: bt(e * -100 * t) },
            { transform: bt(e * 100 * (1 - t)) }
          ];
        }
      }
    };
    function qn(t) {
      return Math.abs(new DOMMatrix(w(t, "transform")).m41 / t.offsetWidth);
    }
    function bt(t = 0, e = "%") {
      return t += t ? e : "", `translate3d(${t}, 0, 0)`;
    }
    function fn(t) {
      return `scale3d(${t}, ${t}, 1)`;
    }
    function th(t, e, n, { animation: o, easing: l }) {
      const { percent: c, translate: d, show: p = ot } = o, m = p(n), { promise: y, resolve: $ } = Kr();
      return {
        dir: n,
        show(T, R = 0, B) {
          const L = B ? "linear" : l;
          return T -= Math.round(T * Dt(R, -1, 1)), this.translate(R), He(e, "itemin", { percent: R, duration: T, timing: L, dir: n }), He(t, "itemout", { percent: 1 - R, duration: T, timing: L, dir: n }), Promise.all([
            ct.start(e, m[1], T, L),
            ct.start(t, m[0], T, L)
          ]).then(() => {
            this.reset(), $();
          }, ot), y;
        },
        cancel() {
          return ct.cancel([e, t]);
        },
        reset() {
          for (const T in m[0])
            w([e, t], T, "");
        },
        async forward(T, R = this.percent()) {
          return await this.cancel(), this.show(T, R, !0);
        },
        translate(T) {
          this.reset();
          const R = d(T, n);
          w(e, R[1]), w(t, R[0]), He(e, "itemtranslatein", { percent: T, dir: n }), He(t, "itemtranslateout", { percent: 1 - T, dir: n });
        },
        percent() {
          return c(t || e, e, n);
        },
        getDistance() {
          return t == null ? void 0 : t.offsetWidth;
        }
      };
    }
    function He(t, e, n) {
      D(t, ln(e, !1, !1, n));
    }
    function Kr() {
      let t;
      return { promise: new Promise((e) => t = e), resolve: t };
    }
    var Ni = {
      props: {
        i18n: Object
      },
      data: {
        i18n: null
      },
      methods: {
        t(t, ...e) {
          var n, o, l;
          let c = 0;
          return ((l = ((n = this.i18n) == null ? void 0 : n[t]) || ((o = this.$options.i18n) == null ? void 0 : o[t])) == null ? void 0 : l.replace(
            /%s/g,
            () => e[c++] || ""
          )) || "";
        }
      }
    }, eh = {
      props: {
        autoplay: Boolean,
        autoplayInterval: Number,
        pauseOnHover: Boolean
      },
      data: {
        autoplay: !1,
        autoplayInterval: 7e3,
        pauseOnHover: !0
      },
      connected() {
        N(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
      },
      disconnected() {
        this.stopAutoplay();
      },
      update() {
        N(this.slides, "tabindex", "-1");
      },
      events: [
        {
          name: "visibilitychange",
          el: () => document,
          filter: ({ autoplay: t }) => t,
          handler() {
            document.hidden ? this.stopAutoplay() : this.startAutoplay();
          }
        }
      ],
      methods: {
        startAutoplay() {
          this.stopAutoplay(), this.interval = setInterval(() => {
            this.stack.length || this.draggable && et(this.$el, ":focus-within") && !et(this.$el, ":focus") || this.pauseOnHover && et(this.$el, ":hover") || this.show("next");
          }, this.autoplayInterval);
        },
        stopAutoplay() {
          clearInterval(this.interval);
        }
      }
    };
    const Wn = { passive: !1, capture: !0 }, Gr = { passive: !0, capture: !0 }, nh = "touchstart mousedown", to = "touchmove mousemove", Xr = "touchend touchcancel mouseup click input scroll", Yr = (t) => t.preventDefault();
    var ih = {
      props: {
        draggable: Boolean
      },
      data: {
        draggable: !0,
        threshold: 10
      },
      created() {
        for (const t of ["start", "move", "end"]) {
          const e = this[t];
          this[t] = (n) => {
            const o = ge(n).x * (Tt ? -1 : 1);
            this.prevPos = o === this.pos ? this.prevPos : this.pos, this.pos = o, e(n);
          };
        }
      },
      events: [
        {
          name: nh,
          passive: !0,
          delegate: ({ selList: t }) => `${t} > *`,
          handler(t) {
            !this.draggable || this.parallax || !re(t) && sh(t.target) || t.target.closest(On) || t.button > 0 || this.length < 2 || this.start(t);
          }
        },
        {
          name: "dragstart",
          handler(t) {
            t.preventDefault();
          }
        },
        {
          // iOS workaround for slider stopping if swiping fast
          name: to,
          el: ({ list: t }) => t,
          handler: ot,
          ...Wn
        }
      ],
      methods: {
        start() {
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, W(document, to, this.move, Wn), W(document, Xr, this.end, Gr), w(this.list, "userSelect", "none");
        },
        move(t) {
          const e = this.pos - this.drag;
          if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
            return;
          this.dragging || W(this.list, "click", Yr, Wn), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
          let { slides: n, prevIndex: o } = this, l = Math.abs(e), c = this.getIndex(o + this.dir), d = Qr.call(this, o, c);
          for (; c !== o && l > d; )
            this.drag -= d * this.dir, o = c, l -= d, c = this.getIndex(o + this.dir), d = Qr.call(this, o, c);
          this.percent = l / d;
          const p = n[o], m = n[c], y = this.index !== c, $ = o === c;
          let T;
          for (const R of [this.index, this.prevIndex])
            x([c, o], R) || (D(n[R], "itemhidden", [this]), $ && (T = !0, this.prevIndex = o));
          (this.index === o && this.prevIndex !== o || T) && D(n[this.index], "itemshown", [this]), y && (this.prevIndex = o, this.index = c, $ || (D(p, "beforeitemhide", [this]), D(p, "itemhide", [this])), D(m, "beforeitemshow", [this]), D(m, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), p, !$ && m);
        },
        end() {
          if ($e(document, to, this.move, Wn), $e(document, Xr, this.end, Gr), this.dragging)
            if (this.dragging = null, this.index === this.prevIndex)
              this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
            else {
              const t = (Tt ? this.dir * (Tt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
              this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(
                this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous",
                !0
              );
            }
          setTimeout(() => $e(this.list, "click", Yr, Wn)), w(this.list, { userSelect: "" }), this.drag = this.percent = null;
        }
      }
    };
    function Qr(t, e) {
      return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
    }
    function sh(t) {
      return w(t, "userSelect") !== "none" && O(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
    }
    function oh(t) {
      t._watches = [];
      for (const e of t.$options.watch || [])
        for (const [n, o] of Object.entries(e))
          Zr(t, o, n);
      t._initial = !0;
    }
    function Zr(t, e, n) {
      t._watches.push({
        name: n,
        ...Y(e) ? e : { handler: e }
      });
    }
    function rh(t, e) {
      for (const { name: n, handler: o, immediate: l = !0 } of t._watches)
        (t._initial && l || u(e, n) && !En(e[n], t[n])) && o.call(t, t[n], e[n]);
      t._initial = !1;
    }
    function ah(t) {
      const { computed: e } = t.$options;
      if (t._computed = {}, e)
        for (const n in e)
          ea(t, n, e[n]);
    }
    const ta = { subtree: !0, childList: !0 };
    function ea(t, e, n) {
      t._hasComputed = !0, Object.defineProperty(t, e, {
        enumerable: !0,
        get() {
          const { _computed: o, $props: l, $el: c } = t;
          if (!u(o, e) && (o[e] = (n.get || n).call(t, l, c), n.observe && t._computedObserver)) {
            const d = n.observe.call(t, l);
            t._computedObserver.observe(
              ["~", "+", "-"].includes(d[0]) ? c.parentElement : c.getRootNode(),
              ta
            );
          }
          return o[e];
        },
        set(o) {
          const { _computed: l } = t;
          l[e] = n.set ? n.set.call(t, o) : o, Pt(l[e]) && delete l[e];
        }
      });
    }
    function lh(t) {
      t._hasComputed && (Iu(t, {
        read: () => rh(t, na(t)),
        events: ["resize", "computed"]
      }), t._computedObserver = Ns(
        t.$el,
        () => Un(t, "computed"),
        ta
      ), t._disconnect.push(() => {
        t._computedObserver.disconnect(), t._computedObserver = null, na(t);
      }));
    }
    function na(t) {
      const e = { ...t._computed };
      return t._computed = {}, e;
    }
    function ch(t) {
      for (const e of t.$options.events || [])
        if (u(e, "handler"))
          ia(t, e);
        else
          for (const n in e)
            ia(t, e[n], n);
    }
    function ia(t, e, n) {
      let { name: o, el: l, handler: c, capture: d, passive: p, delegate: m, filter: y, self: $ } = Y(e) ? e : { name: n, handler: e };
      l = q(l) ? l.call(t, t) : l || t.$el, !(!l || C(l) && !l.length || y && !y.call(t, t)) && t._disconnect.push(
        W(
          l,
          o,
          m ? dt(m) ? m : m.call(t, t) : null,
          dt(c) ? t[c] : c.bind(t),
          { passive: p, capture: d, self: $ }
        )
      );
    }
    function uh(t) {
      for (const e of t.$options.observe || [])
        hh(t, e);
    }
    function hh(t, e) {
      let { observe: n, target: o = t.$el, handler: l, options: c, filter: d, args: p } = e;
      if (d && !d.call(t, t))
        return;
      const m = `_observe${t._disconnect.length}`;
      q(o) && !u(t, m) && ea(t, m, () => {
        const T = o.call(t, t);
        return C(T) ? tt(T) : T;
      }), l = dt(l) ? t[l] : l.bind(t), q(c) && (c = c.call(t, t));
      const y = u(t, m) ? t[m] : o, $ = n(y, l, c, p);
      q(o) && C(t[m]) && Zr(
        t,
        { handler: dh($, c), immediate: !1 },
        m
      ), t._disconnect.push(() => $.disconnect());
    }
    function dh(t, e) {
      return (n, o) => {
        for (const l of o)
          x(n, l) || (t.unobserve ? t.unobserve(l) : t.observe && t.disconnect());
        for (const l of n)
          (!x(o, l) || !t.unobserve) && t.observe(l, e);
      };
    }
    function fh(t) {
      const { $options: e, $props: n } = t, o = sa(e);
      U(n, o);
      const { computed: l, methods: c } = e;
      for (let d in n)
        d in o && (!l || !u(l, d)) && (!c || !u(c, d)) && (t[d] = n[d]);
    }
    function sa(t) {
      const e = {}, { args: n = [], props: o = {}, el: l, id: c } = t;
      if (!o)
        return e;
      for (const p in o) {
        const m = f(p);
        let y = Rt(l, m);
        Pt(y) || (y = o[p] === Boolean && y === "" ? !0 : qs(o[p], y), !(m === "target" && v(y, "_")) && (e[p] = y));
      }
      const d = hn(Rt(l, c), n);
      for (const p in d) {
        const m = k(p);
        Pt(o[m]) || (e[m] = qs(o[m], d[p]));
      }
      return e;
    }
    const ph = ie((t, e) => {
      const n = Object.keys(e), o = n.concat(t).map((l) => [f(l), `data-${f(l)}`]).flat();
      return { attributes: n, filter: o };
    });
    function mh(t) {
      const { $options: e, $props: n } = t, { id: o, props: l, el: c } = e;
      if (!l)
        return;
      const { attributes: d, filter: p } = ph(o, l), m = new MutationObserver((y) => {
        const $ = sa(e);
        y.some(({ attributeName: T }) => {
          const R = T.replace("data-", "");
          return (R === o ? d : [k(R), k(T)]).some(
            (B) => !Pt($[B]) && $[B] !== n[B]
          );
        }) && t.$reset();
      });
      m.observe(c, {
        attributes: !0,
        attributeFilter: p
      }), t._disconnect.push(() => m.disconnect());
    }
    function pn(t, e) {
      var n;
      (n = t.$options[e]) == null || n.forEach((o) => o.call(t));
    }
    function eo(t) {
      t._connected || (fh(t), pn(t, "beforeConnect"), t._connected = !0, t._disconnect = [], ch(t), Ru(t), oh(t), uh(t), mh(t), lh(t), pn(t, "connected"), Un(t));
    }
    function no(t) {
      t._connected && (pn(t, "beforeDisconnect"), t._disconnect.forEach((e) => e()), t._disconnect = null, pn(t, "disconnected"), t._connected = !1);
    }
    let gh = 0;
    function oa(t, e = {}) {
      e.data = wh(e, t.constructor.options), t.$options = Ln(t.constructor.options, e, t), t.$props = {}, t._uid = gh++, vh(t), bh(t), ah(t), pn(t, "created"), e.el && t.$mount(e.el);
    }
    function vh(t) {
      const { data: e = {} } = t.$options;
      for (const n in e)
        t.$props[n] = t[n] = e[n];
    }
    function bh(t) {
      const { methods: e } = t.$options;
      if (e)
        for (const n in e)
          t[n] = e[n].bind(t);
    }
    function wh({ data: t = {} }, { args: e = [], props: n = {} }) {
      C(t) && (t = t.slice(0, e.length).reduce((o, l, c) => (Y(l) ? U(o, l) : o[e[c]] = l, o), {}));
      for (const o in t)
        Pt(t[o]) ? delete t[o] : n[o] && (t[o] = qs(n[o], t[o]));
      return t;
    }
    const Qt = function(t) {
      oa(this, t);
    };
    Qt.util = _u, Qt.options = {}, Qt.version = "3.21.13";
    const yh = "uk-", qe = "__uikit__", mn = {};
    function ra(t, e) {
      var n, o;
      const l = yh + f(t);
      if (!e)
        return mn[l].options || (mn[l] = Qt.extend(mn[l])), mn[l];
      t = k(t), Qt[t] = (d, p) => Vn(t, d, p);
      const c = (n = e.options) != null ? n : { ...e };
      return c.id = l, c.name = t, (o = c.install) == null || o.call(c, Qt, c, t), Qt._initialized && !c.functional && requestAnimationFrame(() => Vn(t, `[${l}],[data-${l}]`)), mn[l] = c;
    }
    function Vn(t, e, n, ...o) {
      const l = ra(t);
      return l.options.functional ? new l({ data: Y(e) ? e : [e, n, ...o] }) : e ? ft(e).map(c)[0] : c();
      function c(d) {
        const p = Fi(d, t);
        if (p)
          if (n)
            p.$destroy();
          else
            return p;
        return new l({ el: d, data: n });
      }
    }
    function Jn(t) {
      return (t == null ? void 0 : t[qe]) || {};
    }
    function Fi(t, e) {
      return Jn(t)[e];
    }
    function $h(t, e) {
      t[qe] || (t[qe] = {}), t[qe][e.$options.name] = e;
    }
    function kh(t, e) {
      var n;
      (n = t[qe]) == null || delete n[e.$options.name], ci(t[qe]) && delete t[qe];
    }
    function xh(t) {
      t.component = ra, t.getComponents = Jn, t.getComponent = Fi, t.update = aa, t.use = function(n) {
        if (!n.installed)
          return n.call(null, this), n.installed = !0, this;
      }, t.mixin = function(n, o) {
        o = (dt(o) ? this.component(o) : o) || this, o.options = Ln(o.options, n);
      }, t.extend = function(n) {
        n || (n = {});
        const o = this, l = function(d) {
          oa(this, d);
        };
        return l.prototype = Object.create(o.prototype), l.prototype.constructor = l, l.options = Ln(o.options, n), l.super = o, l.extend = o.extend, l;
      };
      let e;
      Object.defineProperty(t, "container", {
        get() {
          return e || document.body;
        },
        set(n) {
          e = V(n);
        }
      });
    }
    function aa(t, e) {
      t = t ? yt(t) : document.body;
      for (const n of Pn(t).reverse())
        la(n, e);
      Se(t, (n) => la(n, e));
    }
    function la(t, e) {
      const n = Jn(t);
      for (const o in n)
        Un(n[o], e);
    }
    function Sh(t) {
      t.prototype.$mount = function(e) {
        const n = this;
        $h(e, n), n.$options.el = e, document.contains(e) && eo(n);
      }, t.prototype.$destroy = function(e = !1) {
        const n = this, { el: o } = n.$options;
        o && no(n), pn(n, "destroy"), kh(o, n), e && Gt(n.$el);
      }, t.prototype.$create = Vn, t.prototype.$emit = function(e) {
        Un(this, e);
      }, t.prototype.$update = function(e = this.$el, n) {
        aa(e, n);
      }, t.prototype.$reset = function() {
        no(this), eo(this);
      }, t.prototype.$getComponent = Fi, Object.defineProperties(t.prototype, {
        $el: {
          get() {
            return this.$options.el;
          }
        },
        $container: Object.getOwnPropertyDescriptor(t, "container")
      });
    }
    let _h = 1;
    function We(t, e = null) {
      return (e == null ? void 0 : e.id) || `${t.$options.id}-${_h++}`;
    }
    var Eh = {
      i18n: {
        next: "Next slide",
        previous: "Previous slide",
        slideX: "Slide %s",
        slideLabel: "%s of %s",
        role: "String"
      },
      data: {
        selNav: !1,
        role: "region"
      },
      computed: {
        nav: ({ selNav: t }, e) => V(t, e),
        navChildren() {
          return lt(this.nav);
        },
        selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`,
        navItems(t, e) {
          return ft(this.selNavItem, e);
        }
      },
      watch: {
        nav(t, e) {
          N(t, "role", "tablist"), this.padNavitems(), e && this.$emit();
        },
        list(t) {
          vt(t, "ul") && N(t, "role", "presentation");
        },
        navChildren(t) {
          N(t, "role", "presentation"), this.padNavitems(), this.updateNav();
        },
        navItems(t) {
          for (const e of t) {
            const n = Rt(e, this.attrItem), o = V("a,button", e) || e;
            let l, c = null;
            if (he(n)) {
              const d = pe(n), p = this.slides[d];
              p && (p.id || (p.id = We(this, p)), c = p.id), l = this.t("slideX", G(n) + 1), N(o, "role", "tab");
            } else
              this.list && (this.list.id || (this.list.id = We(this, this.list)), c = this.list.id), l = this.t(n);
            N(o, {
              "aria-controls": c,
              "aria-label": N(o, "aria-label") || l
            });
          }
        },
        slides(t) {
          t.forEach(
            (e, n) => N(e, {
              role: this.nav ? "tabpanel" : "group",
              "aria-label": this.t("slideLabel", n + 1, this.length),
              "aria-roledescription": this.nav ? null : "slide"
            })
          ), this.padNavitems();
        }
      },
      connected() {
        N(this.$el, {
          role: this.role,
          "aria-roledescription": "carousel"
        });
      },
      update: [
        {
          write() {
            this.navItems.concat(this.nav).forEach((t) => t && (t.hidden = !this.maxIndex)), this.updateNav();
          },
          events: ["resize"]
        }
      ],
      events: [
        {
          name: "click keydown",
          delegate: ({ selNavItem: t }) => t,
          filter: ({ parallax: t }) => !t,
          handler(t) {
            t.target.closest("a,button") && (t.type === "click" || t.keyCode === rt.SPACE) && (t.preventDefault(), this.show(Rt(t.current, this.attrItem)));
          }
        },
        {
          name: "itemshow",
          handler: "updateNav"
        },
        {
          name: "keydown",
          delegate: ({ selNavItem: t }) => t,
          filter: ({ parallax: t }) => !t,
          handler(t) {
            const { current: e, keyCode: n } = t, o = Rt(e, this.attrItem);
            if (!he(o))
              return;
            let l = n === rt.HOME ? 0 : n === rt.END ? "last" : n === rt.LEFT ? "previous" : n === rt.RIGHT ? "next" : -1;
            ~l && (t.preventDefault(), this.show(l));
          }
        }
      ],
      methods: {
        updateNav() {
          const t = this.getValidIndex();
          for (const e of this.navItems) {
            const n = Rt(e, this.attrItem), o = V("a,button", e) || e;
            if (he(n)) {
              const c = pe(n) === t;
              $t(e, this.clsActive, c), $t(o, "uk-disabled", this.parallax), N(o, {
                "aria-selected": c,
                tabindex: c && !this.parallax ? null : -1
              }), c && o && et(at(e), ":focus-within") && o.focus();
            } else
              $t(
                e,
                "uk-invisible",
                this.finite && (n === "previous" && t === 0 || n === "next" && t >= this.maxIndex)
              );
          }
        },
        padNavitems() {
          if (!this.nav)
            return;
          const t = [];
          for (let e = 0; e < this.length; e++) {
            const n = `${this.attrItem}="${e}"`;
            t[e] = this.navChildren.findLast((o) => o.matches(`[${n}]`)) || V(`<li ${n}><a href></a></li>`);
          }
          En(t, this.navChildren) || xe(this.nav, t);
        }
      }
    };
    const Th = "cubic-bezier(0.25, 0.46, 0.45, 0.94)", Oh = "cubic-bezier(0.165, 0.84, 0.44, 1)";
    var ca = {
      mixins: [eh, ih, Eh, Ni],
      props: {
        clsActivated: String,
        easing: String,
        index: Number,
        finite: Boolean,
        velocity: Number
      },
      data: () => ({
        easing: "ease",
        finite: !1,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: "uk-active",
        clsActivated: "",
        clsEnter: "uk-slide-enter",
        clsLeave: "uk-slide-leave",
        clsSlideActive: "uk-slide-active",
        Transitioner: !1,
        transitionOptions: {}
      }),
      connected() {
        this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
      },
      disconnected() {
        st(this.slides, this.clsActive);
      },
      computed: {
        duration: ({ velocity: t }, e) => ua(e.offsetWidth / t),
        list: ({ selList: t }, e) => V(t, e),
        maxIndex() {
          return this.length - 1;
        },
        slides() {
          return lt(this.list);
        },
        length() {
          return this.slides.length;
        }
      },
      watch: {
        slides(t, e) {
          e && this.$emit();
        }
      },
      events: {
        itemshow({ target: t }) {
          X(t, this.clsEnter, this.clsSlideActive);
        },
        itemshown({ target: t }) {
          st(t, this.clsEnter);
        },
        itemhide({ target: t }) {
          X(t, this.clsLeave);
        },
        itemhidden({ target: t }) {
          st(t, this.clsLeave, this.clsSlideActive);
        }
      },
      methods: {
        show(t, e = !1) {
          var n;
          if (this.dragging || !this.length || this.parallax)
            return;
          const { stack: o } = this, l = e ? 0 : o.length, c = () => {
            o.splice(l, 1), o.length && this.show(o.shift(), !0);
          };
          if (o[e ? "unshift" : "push"](t), !e && o.length > 1) {
            o.length === 2 && ((n = this._transitioner) == null || n.forward(Math.min(this.duration, 200)));
            return;
          }
          const d = this.getIndex(this.index), p = H(this.slides, this.clsActive) && this.slides[d], m = this.getIndex(t, this.index), y = this.slides[m];
          if (p === y) {
            c();
            return;
          }
          if (this.dir = Ch(t, d), this.prevIndex = d, this.index = m, p && !D(p, "beforeitemhide", [this]) || !D(y, "beforeitemshow", [this, p])) {
            this.index = this.prevIndex, c();
            return;
          }
          const $ = this._show(p, y, e).then(() => {
            p && D(p, "itemhidden", [this]), D(y, "itemshown", [this]), o.shift(), this._transitioner = null, o.length && requestAnimationFrame(() => o.length && this.show(o.shift(), !0));
          });
          return p && D(p, "itemhide", [this]), D(y, "itemshow", [this]), $;
        },
        getIndex(t = this.index, e = this.index) {
          return Dt(
            Kt(t, this.slides, e, this.finite),
            0,
            Math.max(0, this.maxIndex)
          );
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          return this.getIndex(t, e);
        },
        async _show(t, e, n) {
          if (this._transitioner = this._getTransitioner(t, e, this.dir, {
            easing: n ? e.offsetWidth < 600 ? Th : Oh : this.easing,
            ...this.transitionOptions
          }), !n && !t) {
            this._translate(1);
            return;
          }
          const { length: o } = this.stack;
          return this._transitioner[o > 1 ? "forward" : "show"](
            o > 1 ? Math.min(this.duration, 75 + 75 / (o - 1)) : this.duration,
            this.percent
          );
        },
        _translate(t, e = this.prevIndex, n = this.index) {
          const o = this._getTransitioner(e === n ? !1 : e, n);
          return o.translate(t), o;
        },
        _getTransitioner(t = this.prevIndex, e = this.index, n = this.dir || 1, o = this.transitionOptions) {
          return new this.Transitioner(
            _n(t) ? this.slides[t] : t,
            _n(e) ? this.slides[e] : e,
            n * (Tt ? -1 : 1),
            o
          );
        }
      }
    };
    function Ch(t, e) {
      return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
    }
    function ua(t) {
      return 0.5 * t + 300;
    }
    var ha = {
      mixins: [ca],
      props: {
        animation: String
      },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: Zs,
        Transitioner: th
      },
      computed: {
        animation({ animation: t, Animations: e }) {
          return { ...e[t] || e.slide, name: t };
        },
        transitionOptions() {
          return { animation: this.animation };
        }
      },
      observe: oe(),
      events: {
        beforeitemshow({ target: t }) {
          X(t, this.clsActive);
        },
        itemshown({ target: t }) {
          X(t, this.clsActivated);
        },
        itemhidden({ target: t }) {
          st(t, this.clsActive, this.clsActivated);
        }
      }
    }, da = {
      ...Zs,
      fade: {
        show() {
          return [{ opacity: 0 }, { opacity: 1 }];
        },
        percent(t) {
          return 1 - w(t, "opacity");
        },
        translate(t) {
          return [{ opacity: 1 - t }, { opacity: t }];
        }
      },
      scale: {
        show() {
          return [
            { opacity: 0, transform: fn(1 - 0.2) },
            { opacity: 1, transform: fn(1) }
          ];
        },
        percent(t) {
          return 1 - w(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: fn(1 - 0.2 * t) },
            { opacity: t, transform: fn(1 - 0.2 + 0.2 * t) }
          ];
        }
      }
    }, fa = {
      mixins: [Qs, ha],
      functional: !0,
      props: {
        delayControls: Number,
        preload: Number,
        videoAutoplay: Boolean,
        template: String
      },
      data: () => ({
        preload: 1,
        videoAutoplay: !1,
        delayControls: 3e3,
        items: [],
        cls: "uk-open",
        clsPage: "uk-lightbox-page",
        selList: ".uk-lightbox-items",
        attrItem: "uk-lightbox-item",
        selClose: ".uk-close-large",
        selCaption: ".uk-lightbox-caption",
        pauseOnHover: !1,
        velocity: 2,
        Animations: da,
        template: '<div class="uk-lightbox uk-overflow-hidden"> <div class="uk-lightbox-items"></div> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
      }),
      created() {
        const t = V(this.template), e = V(this.selList, t);
        this.items.forEach(() => xt(e, "<div>"));
        const n = V("[uk-close]", t), o = this.t("close");
        n && o && (n.dataset.i18n = JSON.stringify({ label: o })), this.$mount(xt(this.container, t));
      },
      events: [
        {
          name: `${fi} ${se} keydown`,
          handler: "showControls"
        },
        {
          name: "click",
          self: !0,
          delegate: ({ selList: t }) => `${t} > *`,
          handler(t) {
            t.defaultPrevented || this.hide();
          }
        },
        {
          name: "shown",
          self: !0,
          handler: "showControls"
        },
        {
          name: "hide",
          self: !0,
          handler() {
            this.hideControls(), st(this.slides, this.clsActive), ct.stop(this.slides);
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.$destroy(!0);
          }
        },
        {
          name: "keyup",
          el: () => document,
          handler({ keyCode: t }) {
            if (!this.isToggled(this.$el) || !this.draggable)
              return;
            let e = -1;
            t === rt.LEFT ? e = "previous" : t === rt.RIGHT ? e = "next" : t === rt.HOME ? e = 0 : t === rt.END && (e = "last"), ~e && this.show(e);
          }
        },
        {
          name: "beforeitemshow",
          handler(t) {
            this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = da.scale, st(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
          }
        },
        {
          name: "itemshow",
          handler() {
            xe(V(this.selCaption, this.$el), this.getItem().caption || "");
            for (let t = -this.preload; t <= this.preload; t++)
              this.loadItem(this.index + t);
          }
        },
        {
          name: "itemshown",
          handler() {
            this.draggable = this.$props.draggable;
          }
        },
        {
          name: "itemload",
          async handler(t, e) {
            const { source: n, type: o, alt: l = "", poster: c, attrs: d = {} } = e;
            if (this.setItem(e, "<span uk-spinner></span>"), !n)
              return;
            let p;
            const m = {
              allowfullscreen: "",
              style: "max-width: 100%; box-sizing: border-box;",
              "uk-responsive": "",
              "uk-video": `${this.videoAutoplay}`
            };
            if (o === "image" || n.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
              const y = Kn("img", { src: n, alt: l, ...d });
              W(y, "load", () => this.setItem(e, y)), W(y, "error", () => this.setError(e));
            } else if (o === "video" || n.match(/\.(mp4|webm|ogv)($|\?)/i)) {
              const y = Kn("video", {
                src: n,
                poster: c,
                controls: "",
                playsinline: "",
                "uk-video": `${this.videoAutoplay}`,
                ...d
              });
              W(y, "loadedmetadata", () => this.setItem(e, y)), W(y, "error", () => this.setError(e));
            } else if (o === "iframe" || n.match(/\.(html|php)($|\?)/i))
              this.setItem(
                e,
                Kn("iframe", {
                  src: n,
                  allowfullscreen: "",
                  class: "uk-lightbox-iframe",
                  ...d
                })
              );
            else if (p = n.match(
              /\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
            ))
              this.setItem(
                e,
                Kn("iframe", {
                  src: `https://www.youtube${p[1] || ""}.com/embed/${p[2]}${p[3] ? `?${p[3]}` : ""}`,
                  width: 1920,
                  height: 1080,
                  ...m,
                  ...d
                })
              );
            else if (p = n.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
              try {
                const { height: y, width: $ } = await (await fetch(
                  `https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(
                    n
                  )}`,
                  { credentials: "omit" }
                )).json();
                this.setItem(
                  e,
                  Kn("iframe", {
                    src: `https://player.vimeo.com/video/${p[1]}${p[2] ? `?${p[2]}` : ""}`,
                    width: $,
                    height: y,
                    ...m,
                    ...d
                  })
                );
              } catch {
                this.setError(e);
              }
          }
        }
      ],
      methods: {
        loadItem(t = this.index) {
          const e = this.getItem(t);
          this.getSlide(e).childElementCount || D(this.$el, "itemload", [e]);
        },
        getItem(t = this.index) {
          return this.items[Kt(t, this.slides)];
        },
        setItem(t, e) {
          D(this.$el, "itemloaded", [this, xe(this.getSlide(t), e)]);
        },
        getSlide(t) {
          return this.slides[this.items.indexOf(t)];
        },
        setError(t) {
          this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },
        showControls() {
          clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), X(this.$el, "uk-active", "uk-transition-active");
        },
        hideControls() {
          st(this.$el, "uk-active", "uk-transition-active");
        }
      }
    };
    function Kn(t, e) {
      const n = je(`<${t}>`);
      return N(n, e), n;
    }
    var Ah = {
      install: Ph,
      props: { toggle: String },
      data: { toggle: "a" },
      computed: {
        toggles: ({ toggle: t }, e) => ft(t, e)
      },
      watch: {
        toggles(t) {
          this.hide();
          for (const e of t)
            vt(e, "a") && N(e, "role", "button");
        }
      },
      disconnected() {
        this.hide();
      },
      events: {
        name: "click",
        delegate: ({ toggle: t }) => `${t}:not(.uk-disabled)`,
        handler(t) {
          t.defaultPrevented || (t.preventDefault(), this.show(t.current));
        }
      },
      methods: {
        show(t) {
          const e = er(this.toggles.map(pa), "source");
          if (Ft(t)) {
            const { source: n } = pa(t);
            t = P(e, ({ source: o }) => n === o);
          }
          return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items: e }), W(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t);
        },
        hide() {
          var t;
          return (t = this.panel) == null ? void 0 : t.hide();
        }
      }
    };
    function Ph(t, e) {
      t.lightboxPanel || t.component("lightboxPanel", fa), U(e.props, t.component("lightboxPanel").options.props);
    }
    function pa(t) {
      const e = {};
      for (const n of ["href", "caption", "type", "poster", "alt", "attrs"])
        e[n === "href" ? "source" : n] = Rt(t, n);
      return e.attrs = hn(e.attrs), e;
    }
    var Rh = {
      mixins: [Hn],
      functional: !0,
      args: ["message", "status"],
      data: {
        message: "",
        status: "",
        timeout: 5e3,
        group: "",
        pos: "top-center",
        clsContainer: "uk-notification",
        clsClose: "uk-notification-close",
        clsMsg: "uk-notification-message"
      },
      install: Ih,
      computed: {
        marginProp: ({ pos: t }) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`,
        startProps() {
          return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
        }
      },
      created() {
        const t = `${this.clsContainer}-${this.pos}`, e = `data-${this.clsContainer}-container`, n = V(`.${t}[${e}]`, this.container) || xt(
          this.container,
          `<div class="${this.clsContainer} ${t}" ${e}></div>`
        );
        this.$mount(
          xt(
            n,
            `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`
          )
        );
      },
      async connected() {
        const t = G(w(this.$el, this.marginProp));
        await ct.start(w(this.$el, this.startProps), {
          opacity: 1,
          [this.marginProp]: t
        }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      },
      events: {
        click(t) {
          t.target.closest('a[href="#"],a[href=""]') && t.preventDefault(), this.close();
        },
        [De]() {
          this.timer && clearTimeout(this.timer);
        },
        [rn]() {
          this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        }
      },
      methods: {
        async close(t) {
          const e = (n) => {
            const o = at(n);
            D(n, "close", [this]), Gt(n), o != null && o.hasChildNodes() || Gt(o);
          };
          this.timer && clearTimeout(this.timer), t || await ct.start(this.$el, this.startProps), e(this.$el);
        }
      }
    };
    function Ih(t) {
      t.notification.closeAll = function(e, n) {
        Se(document.body, (o) => {
          const l = t.getComponent(o, "notification");
          l && (!e || e === l.group) && l.close(n);
        });
      };
    }
    var Di = {
      props: {
        media: Boolean
      },
      data: {
        media: !1
      },
      connected() {
        const t = Bh(this.media, this.$el);
        if (this.matchMedia = !0, t) {
          this.mediaObj = window.matchMedia(t);
          const e = () => {
            this.matchMedia = this.mediaObj.matches, D(this.$el, ln("mediachange", !1, !0, [this.mediaObj]));
          };
          this.offMediaObj = W(this.mediaObj, "change", () => {
            e(), this.$emit("resize");
          }), e();
        }
      },
      disconnected() {
        var t;
        (t = this.offMediaObj) == null || t.call(this);
      }
    };
    function Bh(t, e) {
      if (dt(t)) {
        if (v(t, "@"))
          t = G(w(e, `--uk-breakpoint-${t.slice(1)}`));
        else if (isNaN(t))
          return t;
      }
      return t && he(t) ? `(min-width: ${t}px)` : "";
    }
    function ma(t) {
      return kt(t) ? Math.ceil(
        Math.max(0, ...ft("[stroke]", t).map((e) => {
          var n;
          return ((n = e.getTotalLength) == null ? void 0 : n.call(e)) || 0;
        }))
      ) : 0;
    }
    const ji = {
      x: Li,
      y: Li,
      rotate: Li,
      scale: Li,
      color: io,
      backgroundColor: io,
      borderColor: io,
      blur: Ve,
      hue: Ve,
      fopacity: Ve,
      grayscale: Ve,
      invert: Ve,
      saturate: Ve,
      sepia: Ve,
      opacity: Fh,
      stroke: Dh,
      bgx: ba,
      bgy: ba
    }, { keys: ga } = Object;
    var va = {
      mixins: [Di],
      props: xa(ga(ji), "list"),
      data: xa(ga(ji), void 0),
      computed: {
        props(t, e) {
          const n = {};
          for (const l in t)
            l in ji && !Pt(t[l]) && (n[l] = t[l].slice());
          const o = {};
          for (const l in n)
            o[l] = ji[l](l, e, n[l], n);
          return o;
        }
      },
      events: {
        load() {
          this.$emit();
        }
      },
      methods: {
        reset() {
          for (const t in this.getCss(0))
            w(this.$el, t, "");
        },
        getCss(t) {
          const e = {};
          for (const n in this.props)
            this.props[n](e, Dt(t));
          return e.willChange = Object.keys(e).map(vi).join(","), e;
        }
      }
    };
    function Li(t, e, n) {
      let o = Mi(n) || { x: "px", y: "px", rotate: "deg" }[t] || "", l;
      return t === "x" || t === "y" ? (t = `translate${b(t)}`, l = (c) => G(G(c).toFixed(o === "px" ? 0 : 6))) : t === "scale" && (o = "", l = (c) => {
        var d;
        return Mi([c]) ? At(c, "width", e, !0) / e[`offset${(d = c.endsWith) != null && d.call(c, "vh") ? "Height" : "Width"}`] : G(c);
      }), n.length === 1 && n.unshift(t === "scale" ? 1 : 0), n = gn(n, l), (c, d) => {
        c.transform = `${c.transform || ""} ${t}(${Gn(n, d)}${o})`;
      };
    }
    function io(t, e, n) {
      return n.length === 1 && n.unshift(Xn(e, t, "")), n = gn(n, (o) => Nh(e, o)), (o, l) => {
        const [c, d, p] = ka(n, l), m = c.map((y, $) => (y += p * (d[$] - y), $ === 3 ? G(y) : parseInt(y, 10))).join(",");
        o[t] = `rgba(${m})`;
      };
    }
    function Nh(t, e) {
      return Xn(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(G);
    }
    function Ve(t, e, n) {
      n.length === 1 && n.unshift(0);
      const o = Mi(n) || { blur: "px", hue: "deg" }[t] || "%";
      return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, n = gn(n), (l, c) => {
        const d = Gn(n, c);
        l.filter = `${l.filter || ""} ${t}(${d + o})`;
      };
    }
    function Fh(t, e, n) {
      return n.length === 1 && n.unshift(Xn(e, t, "")), n = gn(n), (o, l) => {
        o[t] = Gn(n, l);
      };
    }
    function Dh(t, e, n) {
      n.length === 1 && n.unshift(0);
      const o = Mi(n), l = ma(e);
      return n = gn(n.reverse(), (c) => (c = G(c), o === "%" ? c * l / 100 : c)), n.some(([c]) => c) ? (w(e, "strokeDasharray", l), (c, d) => {
        c.strokeDashoffset = Gn(n, d);
      }) : ot;
    }
    function ba(t, e, n, o) {
      n.length === 1 && n.unshift(0);
      const l = t === "bgy" ? "height" : "width";
      o[t] = gn(n, (p) => At(p, l, e));
      const c = ["bgx", "bgy"].filter((p) => p in o);
      if (c.length === 2 && t === "bgx")
        return ot;
      if (Xn(e, "backgroundSize", "") === "cover")
        return jh(t, e, n, o);
      const d = {};
      for (const p of c)
        d[p] = wa(e, p);
      return ya(c, d, o);
    }
    function jh(t, e, n, o) {
      const l = Lh(e);
      if (!l.width)
        return ot;
      const c = {
        width: e.offsetWidth,
        height: e.offsetHeight
      }, d = ["bgx", "bgy"].filter(($) => $ in o), p = {};
      for (const $ of d) {
        const T = o[$].map(([nt]) => nt), R = Math.min(...T), B = Math.max(...T), L = T.indexOf(R) < T.indexOf(B), Q = B - R;
        p[$] = `${(L ? -Q : 0) - (L ? R : B)}px`, c[$ === "bgy" ? "height" : "width"] += Q;
      }
      const m = ws.cover(l, c);
      for (const $ of d) {
        const T = $ === "bgy" ? "height" : "width", R = m[T] - c[T];
        p[$] = `max(${wa(e, $)},-${R}px) + ${p[$]}`;
      }
      const y = ya(d, p, o);
      return ($, T) => {
        y($, T), $.backgroundSize = `${m.width}px ${m.height}px`, $.backgroundRepeat = "no-repeat";
      };
    }
    function wa(t, e) {
      return Xn(t, `background-position-${e.slice(-1)}`, "");
    }
    function ya(t, e, n) {
      return function(o, l) {
        for (const c of t) {
          const d = Gn(n[c], l);
          o[`background-position-${c.slice(-1)}`] = `calc(${e[c]} + ${d}px)`;
        }
      };
    }
    const $a = {}, Ui = {};
    function Lh(t) {
      const e = w(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
      if (Ui[e])
        return Ui[e];
      const n = new Image();
      return e && (n.src = e, !n.naturalWidth && !$a[e]) ? (gt(n, "error load", () => {
        Ui[e] = so(n), D(t, ln("load", !1));
      }), $a[e] = !0, so(n)) : Ui[e] = so(n);
    }
    function so(t) {
      return {
        width: t.naturalWidth,
        height: t.naturalHeight
      };
    }
    function gn(t, e = G) {
      const n = [], { length: o } = t;
      let l = 0;
      for (let c = 0; c < o; c++) {
        let [d, p] = dt(t[c]) ? t[c].trim().split(/ (?![^(]*\))/) : [t[c]];
        if (d = e(d), p = p ? G(p) / 100 : null, c === 0 ? p === null ? p = 0 : p && n.push([d, 0]) : c === o - 1 && (p === null ? p = 1 : p !== 1 && (n.push([d, p]), p = 1)), n.push([d, p]), p === null)
          l++;
        else if (l) {
          const m = n[c - l - 1][1], y = (p - m) / (l + 1);
          for (let $ = l; $ > 0; $--)
            n[c - $][1] = m + y * (l - $ + 1);
          l = 0;
        }
      }
      return n;
    }
    function ka(t, e) {
      const n = P(t.slice(1), ([, o]) => e <= o) + 1;
      return [
        t[n - 1][0],
        t[n][0],
        (e - t[n - 1][1]) / (t[n][1] - t[n - 1][1])
      ];
    }
    function Gn(t, e) {
      const [n, o, l] = ka(t, e);
      return n + Math.abs(n - o) * l * (n < o ? 1 : -1);
    }
    const Uh = /^-?\d+(?:\.\d+)?(\S+)?/;
    function Mi(t, e) {
      var n;
      for (const o of t) {
        const l = (n = o.match) == null ? void 0 : n.call(o, Uh);
        if (l)
          return l[1];
      }
      return e;
    }
    function Xn(t, e, n) {
      const o = t.style[e], l = w(w(t, e, n), e);
      return t.style[e] = o, l;
    }
    function xa(t, e) {
      return t.reduce((n, o) => (n[o] = e, n), {});
    }
    function Sa(t, e) {
      return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    var Mh = {
      mixins: [va],
      props: {
        target: String,
        viewport: Number,
        // Deprecated
        easing: Number,
        start: String,
        end: String
      },
      data: {
        target: !1,
        viewport: 1,
        easing: 1,
        start: 0,
        end: 0
      },
      computed: {
        target: ({ target: t }, e) => _a(t && Lt(t, e) || e),
        start({ start: t }) {
          return At(t, "height", this.target, !0);
        },
        end({ end: t, viewport: e }) {
          return At(
            t || (e = (1 - e) * 100) && `${e}vh+${e}%`,
            "height",
            this.target,
            !0
          );
        }
      },
      observe: [
        Ws(),
        Mn({ target: ({ target: t }) => t }),
        oe({ target: ({ $el: t, target: e }) => [t, e, Ee(e, !0)] })
      ],
      update: {
        read({ percent: t }, e) {
          if (e.has("scroll") || (t = !1), !kt(this.$el))
            return !1;
          if (!this.matchMedia)
            return;
          const n = t;
          return t = Sa(Ai(this.target, this.start, this.end), this.easing), {
            percent: t,
            style: n === t ? !1 : this.getCss(t)
          };
        },
        write({ style: t }) {
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          t && w(this.$el, t);
        },
        events: ["scroll", "resize"]
      }
    };
    function _a(t) {
      return t ? "offsetTop" in t ? t : _a(at(t)) : document.documentElement;
    }
    var Ea = {
      props: {
        parallax: Boolean,
        parallaxTarget: Boolean,
        parallaxStart: String,
        parallaxEnd: String,
        parallaxEasing: Number
      },
      data: {
        parallax: !1,
        parallaxTarget: !1,
        parallaxStart: 0,
        parallaxEnd: 0,
        parallaxEasing: 0
      },
      observe: [
        oe({
          target: ({ $el: t, parallaxTarget: e }) => [t, e],
          filter: ({ parallax: t }) => t
        }),
        Mn({ filter: ({ parallax: t }) => t })
      ],
      computed: {
        parallaxTarget({ parallaxTarget: t }, e) {
          return t && Lt(t, e) || this.list;
        }
      },
      update: {
        read() {
          if (!this.parallax)
            return !1;
          const t = this.parallaxTarget;
          if (!t)
            return !1;
          const e = At(this.parallaxStart, "height", t, !0), n = At(this.parallaxEnd, "height", t, !0), o = Sa(Ai(t, e, n), this.parallaxEasing);
          return { parallax: this.getIndexAt(o) };
        },
        write({ parallax: t }) {
          const [e, n] = t, o = this.getValidIndex(e + Math.ceil(n)), l = this.slides[e], c = this.slides[o], { triggerShow: d, triggerShown: p, triggerHide: m, triggerHidden: y } = zh(this);
          if (~this.prevIndex)
            for (const T of /* @__PURE__ */ new Set([this.index, this.prevIndex]))
              x([o, e], T) || (m(this.slides[T]), y(this.slides[T]));
          const $ = this.prevIndex !== e || this.index !== o;
          this.dir = 1, this.prevIndex = e, this.index = o, l !== c && m(l), d(c), $ && p(l), this._translate(l === c ? 1 : n, l, c);
        },
        events: ["scroll", "resize"]
      },
      methods: {
        getIndexAt(t) {
          const e = t * (this.length - 1);
          return [Math.floor(e), e % 1];
        }
      }
    };
    function zh(t) {
      const { clsSlideActive: e, clsEnter: n, clsLeave: o } = t;
      return { triggerShow: l, triggerShown: c, triggerHide: d, triggerHidden: p };
      function l(m) {
        H(m, o) && (d(m), p(m)), H(m, e) || (D(m, "beforeitemshow", [t]), D(m, "itemshow", [t]));
      }
      function c(m) {
        H(m, n) && D(m, "itemshown", [t]);
      }
      function d(m) {
        H(m, e) || l(m), H(m, n) && c(m), H(m, o) || (D(m, "beforeitemhide", [t]), D(m, "itemhide", [t]));
      }
      function p(m) {
        H(m, o) && D(m, "itemhidden", [t]);
      }
    }
    var Ta = {
      update: {
        write() {
          if (this.stack.length || this.dragging || this.parallax)
            return;
          const t = this.getValidIndex();
          !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1);
        },
        events: ["resize"]
      }
    }, Oa = {
      observe: Ii({
        target: ({ slides: t }) => t,
        targets: (t) => t.getAdjacentSlides()
      }),
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        }
      }
    };
    function Hh(t, e, n, { center: o, easing: l, list: c }) {
      const d = t ? Yn(t, c, o) : Yn(e, c, o) + F(e).width * n, p = e ? Yn(e, c, o) : d + F(t).width * n * (Tt ? -1 : 1), { promise: m, resolve: y } = Kr();
      return {
        dir: n,
        show($, T = 0, R) {
          const B = R ? "linear" : l;
          return $ -= Math.round($ * Dt(T, -1, 1)), w(c, "transitionProperty", "none"), this.translate(T), w(c, "transitionProperty", ""), T = t ? T : Dt(T, 0, 1), He(this.getItemIn(), "itemin", { percent: T, duration: $, timing: B, dir: n }), t && He(this.getItemIn(!0), "itemout", {
            percent: 1 - T,
            duration: $,
            timing: B,
            dir: n
          }), ct.start(
            c,
            { transform: bt(-p * (Tt ? -1 : 1), "px") },
            $,
            B
          ).then(y, ot), m;
        },
        cancel() {
          return ct.cancel(c);
        },
        reset() {
          w(c, "transform", "");
        },
        async forward($, T = this.percent()) {
          return await this.cancel(), this.show($, T, !0);
        },
        translate($) {
          if ($ === this.percent())
            return;
          const T = this.getDistance() * n * (Tt ? -1 : 1);
          w(
            c,
            "transform",
            bt(
              Dt(
                -p + (T - T * $),
                -vn(c),
                F(c).width
              ) * (Tt ? -1 : 1),
              "px"
            )
          );
          const R = this.getActives(), B = this.getItemIn(), L = this.getItemIn(!0);
          $ = t ? Dt($, -1, 1) : 0;
          for (const Q of lt(c)) {
            const nt = x(R, Q), de = Q === B, bn = Q === L, wn = de || !bn && (nt || n * (Tt ? -1 : 1) === -1 ^ zi(Q, c) > zi(t || e));
            He(Q, `itemtranslate${wn ? "in" : "out"}`, {
              dir: n,
              percent: bn ? 1 - $ : de ? $ : nt ? 1 : 0
            });
          }
        },
        percent() {
          return Math.abs(
            (new DOMMatrix(w(c, "transform")).m41 * (Tt ? -1 : 1) + d) / (p - d)
          );
        },
        getDistance() {
          return Math.abs(p - d);
        },
        getItemIn($ = !1) {
          let T = this.getActives(), R = Aa(c, Yn(e || t, c, o));
          if ($) {
            const B = T;
            T = R, R = B;
          }
          return R[P(R, (B) => !x(T, B))];
        },
        getActives() {
          return Aa(c, Yn(t || e, c, o));
        }
      };
    }
    function Yn(t, e, n) {
      const o = zi(t, e);
      return n ? o - qh(t, e) : Math.min(o, Ca(e));
    }
    function Ca(t) {
      return Math.max(0, vn(t) - F(t).width);
    }
    function vn(t, e) {
      return Be(lt(t).slice(0, e), (n) => F(n).width);
    }
    function qh(t, e) {
      return F(e).width / 2 - F(t).width / 2;
    }
    function zi(t, e) {
      return t && (Ps(t).left + (Tt ? F(t).width - F(e).width : 0)) * (Tt ? -1 : 1) || 0;
    }
    function Aa(t, e) {
      e -= 1;
      const n = F(t).width, o = e + n + 2;
      return lt(t).filter((l) => {
        const c = zi(l, t), d = c + Math.min(F(l).width, n);
        return c >= e && d <= o;
      });
    }
    var Wh = {
      mixins: [Ht, ca, Ta, Ea, Oa],
      props: {
        center: Boolean,
        sets: Boolean,
        active: String
      },
      data: {
        center: !1,
        sets: !1,
        attrItem: "uk-slider-item",
        selList: ".uk-slider-items",
        selNav: ".uk-slider-nav",
        clsContainer: "uk-slider-container",
        active: "all",
        Transitioner: Hh
      },
      computed: {
        finite({ finite: t }) {
          return t || Vh(this.list, this.center);
        },
        maxIndex() {
          if (!this.finite || this.center && !this.sets)
            return this.length - 1;
          if (this.center)
            return Ie(this.sets);
          let t = 0;
          const e = Ca(this.list), n = P(this.slides, (o) => {
            if (t >= e - 5e-3)
              return !0;
            t += F(o).width;
          });
          return ~n ? n : this.length - 1;
        },
        sets({ sets: t }) {
          if (!t || this.parallax)
            return;
          let e = 0;
          const n = [], o = F(this.list).width;
          for (let l = 0; l < this.length; l++) {
            const c = F(this.slides[l]).width;
            e + c > o && (e = 0), this.center ? e < o / 2 && e + c + F(this.slides[Kt(l + 1, this.slides)]).width / 2 > o / 2 && (n.push(l), e = o / 2 - c / 2) : e === 0 && n.push(Math.min(l, this.maxIndex)), e += c;
          }
          if (n.length)
            return n;
        },
        transitionOptions() {
          return {
            center: this.center,
            list: this.list
          };
        },
        slides() {
          return lt(this.list).filter(kt);
        }
      },
      connected() {
        $t(this.$el, this.clsContainer, !V(`.${this.clsContainer}`, this.$el));
      },
      observe: oe({
        target: ({ slides: t, $el: e }) => [e, ...t]
      }),
      update: {
        write() {
          for (const t of this.navItems) {
            const e = pe(Rt(t, this.attrItem));
            e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !x(this.sets, e));
          }
          this.reorder(), this.parallax || this._translate(1), this.updateActiveClasses();
        },
        events: ["resize"]
      },
      events: {
        beforeitemshow(t) {
          !this.dragging && this.sets && this.stack.length < 2 && !x(this.sets, this.index) && (this.index = this.getValidIndex());
          const e = Math.abs(
            this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
          );
          if (!this.dragging && e > 1) {
            for (let l = 0; l < e; l++)
              this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
            t.preventDefault();
            return;
          }
          const n = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex, o = vn(this.list) / this.length;
          this.duration = ua(o / this.velocity) * (F(this.slides[n]).width / o), this.reorder();
        },
        itemshow() {
          ~this.prevIndex && X(this._getTransitioner().getItemIn(), this.clsActive), this.updateActiveClasses(this.prevIndex);
        },
        itemshown() {
          this.updateActiveClasses();
        }
      },
      methods: {
        reorder() {
          if (this.finite) {
            w(this.slides, "order", "");
            return;
          }
          const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
          if (this.slides.forEach(
            (l, c) => w(
              l,
              "order",
              this.dir > 0 && c < t ? 1 : this.dir < 0 && c >= this.index ? -1 : ""
            )
          ), !this.center || !this.length)
            return;
          const e = this.slides[t];
          let n = F(this.list).width / 2 - F(e).width / 2, o = 0;
          for (; n > 0; ) {
            const l = this.getIndex(--o + t, t), c = this.slides[l];
            w(c, "order", l > t ? -2 : -1), n -= F(c).width;
          }
        },
        updateActiveClasses(t = this.index) {
          let e = this._getTransitioner(t).getActives();
          this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
          const n = [
            this.clsActive,
            !this.sets || x(this.sets, G(this.index)) ? this.clsActivated : ""
          ];
          for (const o of this.slides) {
            const l = x(e, o);
            $t(o, n, l), N(o, "aria-hidden", !l);
            for (const c of ft(Cn, o))
              u(c, "_tabindex") || (c._tabindex = N(c, "tabindex")), N(c, "tabindex", l ? c._tabindex : -1);
          }
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          if (t = this.getIndex(t, e), !this.sets)
            return t;
          let n;
          do {
            if (x(this.sets, t))
              return t;
            n = t, t = this.getIndex(t + this.dir, e);
          } while (t !== n);
          return t;
        },
        getAdjacentSlides() {
          const { width: t } = F(this.list), e = -t, n = t * 2, o = F(this.slides[this.index]).width, l = this.center ? t / 2 - o / 2 : 0, c = /* @__PURE__ */ new Set();
          for (const d of [-1, 1]) {
            let p = l + (d > 0 ? o : 0), m = 0;
            do {
              const y = this.slides[this.getIndex(this.index + d + m++ * d)];
              p += F(y).width * d, c.add(y);
            } while (this.length > m && p > e && p < n);
          }
          return Array.from(c);
        },
        getIndexAt(t) {
          let e = -1;
          const n = this.center ? vn(this.list) - (F(this.slides[0]).width / 2 + F(Ie(this.slides)).width / 2) : vn(this.list, this.maxIndex);
          let o = t * n, l = 0;
          do {
            const c = F(this.slides[++e]).width, d = this.center ? c / 2 + F(this.slides[e + 1]).width / 2 : c;
            l = o / d % 1, o -= d;
          } while (o >= 0 && e < this.maxIndex);
          return [e, l];
        }
      }
    };
    function Vh(t, e) {
      if (!t || t.length < 2)
        return !0;
      const { width: n } = F(t);
      if (!e)
        return Math.ceil(vn(t)) < Math.trunc(n + Jh(t));
      const o = lt(t), l = Math.trunc(n / 2);
      for (const c in o) {
        const d = o[c], p = F(d).width, m = /* @__PURE__ */ new Set([d]);
        let y = 0;
        for (const $ of [-1, 1]) {
          let T = p / 2, R = 0;
          for (; T < l; ) {
            const B = o[Kt(+c + $ + R++ * $, o)];
            if (m.has(B))
              return !0;
            T += F(B).width, m.add(B);
          }
          y = Math.max(
            y,
            p / 2 + F(o[Kt(+c + $, o)]).width / 2 - (T - l)
          );
        }
        if (Math.trunc(y) > Be(
          o.filter(($) => !m.has($)),
          ($) => F($).width
        ))
          return !0;
      }
      return !1;
    }
    function Jh(t) {
      return Math.max(0, ...lt(t).map((e) => F(e).width));
    }
    var Pa = {
      mixins: [va],
      beforeConnect() {
        this.item = this.$el.closest(`.${this.$options.id.replace("parallax", "items")} > *`);
      },
      disconnected() {
        this.item = null;
      },
      events: [
        {
          name: "itemin itemout",
          self: !0,
          el: ({ item: t }) => t,
          handler({ type: t, detail: { percent: e, duration: n, timing: o, dir: l } }) {
            _e.read(() => {
              if (!this.matchMedia)
                return;
              const c = this.getCss(Ia(t, l, e)), d = this.getCss(Ra(t) ? 0.5 : l > 0 ? 1 : 0);
              _e.write(() => {
                w(this.$el, c), ct.start(this.$el, d, n, o).catch(ot);
              });
            });
          }
        },
        {
          name: "transitioncanceled transitionend",
          self: !0,
          el: ({ item: t }) => t,
          handler() {
            ct.cancel(this.$el);
          }
        },
        {
          name: "itemtranslatein itemtranslateout",
          self: !0,
          el: ({ item: t }) => t,
          handler({ type: t, detail: { percent: e, dir: n } }) {
            _e.read(() => {
              if (!this.matchMedia) {
                this.reset();
                return;
              }
              const o = this.getCss(Ia(t, n, e));
              _e.write(() => w(this.$el, o));
            });
          }
        }
      ]
    };
    function Ra(t) {
      return A(t, "in");
    }
    function Ia(t, e, n) {
      return n /= 2, Ra(t) ^ e < 0 ? n : 1 - n;
    }
    var Kh = {
      ...Zs,
      fade: {
        show() {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - w(t, "opacity");
        },
        translate(t) {
          return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
        }
      },
      scale: {
        show() {
          return [{ opacity: 0, transform: fn(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - w(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: fn(1 + 0.5 * t), zIndex: 0 },
            { zIndex: -1 }
          ];
        }
      },
      pull: {
        show(t) {
          return t < 0 ? [
            { transform: bt(30), zIndex: -1 },
            { transform: bt(), zIndex: 0 }
          ] : [
            { transform: bt(-100), zIndex: 0 },
            { transform: bt(), zIndex: -1 }
          ];
        },
        percent(t, e, n) {
          return n < 0 ? 1 - qn(e) : qn(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: bt(30 * t), zIndex: -1 },
            { transform: bt(-100 * (1 - t)), zIndex: 0 }
          ] : [
            { transform: bt(-t * 100), zIndex: 0 },
            { transform: bt(30 * (1 - t)), zIndex: -1 }
          ];
        }
      },
      push: {
        show(t) {
          return t < 0 ? [
            { transform: bt(100), zIndex: 0 },
            { transform: bt(), zIndex: -1 }
          ] : [
            { transform: bt(-30), zIndex: -1 },
            { transform: bt(), zIndex: 0 }
          ];
        },
        percent(t, e, n) {
          return n > 0 ? 1 - qn(e) : qn(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: bt(t * 100), zIndex: 0 },
            { transform: bt(-30 * (1 - t)), zIndex: -1 }
          ] : [
            { transform: bt(-30 * t), zIndex: -1 },
            { transform: bt(100 * (1 - t)), zIndex: 0 }
          ];
        }
      }
    }, Gh = {
      mixins: [Ht, ha, Ta, Ea, Oa],
      props: {
        ratio: String,
        minHeight: String,
        maxHeight: String
      },
      data: {
        ratio: "16:9",
        minHeight: void 0,
        maxHeight: void 0,
        selList: ".uk-slideshow-items",
        attrItem: "uk-slideshow-item",
        selNav: ".uk-slideshow-nav",
        Animations: Kh
      },
      watch: {
        list(t) {
          w(t, {
            aspectRatio: this.ratio ? this.ratio.replace(":", "/") : void 0,
            minHeight: this.minHeight,
            maxHeight: this.maxHeight,
            minWidth: "100%",
            maxWidth: "100%"
          });
        }
      },
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        }
      }
    }, Xh = {
      mixins: [Ht, Hr],
      props: {
        group: String,
        threshold: Number,
        clsItem: String,
        clsPlaceholder: String,
        clsDrag: String,
        clsDragState: String,
        clsBase: String,
        clsNoDrag: String,
        clsEmpty: String,
        clsCustom: String,
        handle: String
      },
      data: {
        group: !1,
        threshold: 5,
        clsItem: "uk-sortable-item",
        clsPlaceholder: "uk-sortable-placeholder",
        clsDrag: "uk-sortable-drag",
        clsDragState: "uk-drag",
        clsBase: "uk-sortable",
        clsNoDrag: "uk-sortable-nodrag",
        clsEmpty: "uk-sortable-empty",
        clsCustom: "",
        handle: !1,
        pos: {}
      },
      events: {
        name: se,
        passive: !1,
        handler: "init"
      },
      computed: {
        target: (t, e) => (e.tBodies || [e])[0],
        items() {
          return lt(this.target);
        },
        isEmpty() {
          return !this.items.length;
        },
        handles({ handle: t }, e) {
          return t ? ft(t, e) : this.items;
        }
      },
      watch: {
        isEmpty(t) {
          $t(this.target, this.clsEmpty, t);
        },
        handles(t, e) {
          w(e, { touchAction: "", userSelect: "" }), w(t, { touchAction: "none", userSelect: "none" });
        }
      },
      update: {
        write(t) {
          if (!this.drag || !at(this.placeholder))
            return;
          const {
            pos: { x: e, y: n },
            origin: { offsetTop: o, offsetLeft: l },
            placeholder: c
          } = this;
          w(this.drag, {
            top: n - o,
            left: e - l
          });
          const d = this.getSortable(document.elementFromPoint(e, n));
          if (!d)
            return;
          const { items: p } = d;
          if (p.some(ct.inProgress))
            return;
          const m = td(p, { x: e, y: n });
          if (p.length && (!m || m === c))
            return;
          const y = this.getSortable(c), $ = ed(
            d.target,
            m,
            c,
            e,
            n,
            d === y && t.moved !== m
          );
          $ !== !1 && ($ && c === $ || (d !== y ? (y.remove(c), t.moved = m) : delete t.moved, d.insert(c, $), this.touched.add(d)));
        },
        events: ["move"]
      },
      methods: {
        init(t) {
          const { target: e, button: n, defaultPrevented: o } = t, [l] = this.items.filter((c) => c.contains(e));
          !l || o || n > 0 || mi(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = ge(t), this.touched = /* @__PURE__ */ new Set([this]), this.placeholder = l, this.origin = { target: e, index: me(l), ...this.pos }, W(document, fi, this.move), W(document, ye, this.end), this.threshold || this.start(t));
        },
        start(t) {
          this.drag = Zh(this.$container, this.placeholder);
          const { left: e, top: n } = F(this.placeholder);
          U(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - n }), X(this.drag, this.clsDrag, this.clsCustom), X(this.placeholder, this.clsPlaceholder), X(this.items, this.clsItem), X(document.documentElement, this.clsDragState), D(this.$el, "start", [this, this.placeholder]), Yh(this.pos), this.move(t);
        },
        move: id(function(t) {
          U(this.pos, ge(t)), !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t), this.$emit("move");
        }),
        end() {
          if ($e(document, fi, this.move), $e(document, ye, this.end), !this.drag)
            return;
          Qh();
          const t = this.getSortable(this.placeholder);
          this === t ? this.origin.index !== me(this.placeholder) && D(this.$el, "moved", [this, this.placeholder]) : (D(t.$el, "added", [t, this.placeholder]), D(this.$el, "removed", [this, this.placeholder])), D(this.$el, "stop", [this, this.placeholder]), Gt(this.drag), this.drag = null;
          for (const { clsPlaceholder: e, clsItem: n } of this.touched)
            for (const o of this.touched)
              st(o.items, e, n);
          this.touched = null, st(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          X(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => wi(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => xt(this.target, t));
        },
        remove(t) {
          this.target.contains(t) && this.animate(() => Gt(t));
        },
        getSortable(t) {
          do {
            const e = this.$getComponent(t, "sortable");
            if (e && (e === this || this.group !== !1 && e.group === this.group))
              return e;
          } while (t = at(t));
        }
      }
    };
    let Ba;
    function Yh(t) {
      let e = Date.now();
      Ba = setInterval(() => {
        let { x: n, y: o } = t;
        o += document.scrollingElement.scrollTop;
        const l = (Date.now() - e) * 0.3;
        e = Date.now(), Ue(document.elementFromPoint(n, t.y)).reverse().some((c) => {
          let { scrollTop: d, scrollHeight: p } = c;
          const { top: m, bottom: y, height: $ } = Xt(c);
          if (m < o && m + 35 > o)
            d -= l;
          else if (y > o && y - 35 < o)
            d += l;
          else
            return;
          if (d > 0 && d < p - $)
            return c.scrollTop = d, !0;
        });
      }, 15);
    }
    function Qh() {
      clearInterval(Ba);
    }
    function Zh(t, e) {
      let n;
      if (vt(e, "li", "tr")) {
        n = V("<div>"), xt(n, e.cloneNode(!0).children);
        for (const o of e.getAttributeNames())
          N(n, o, e.getAttribute(o));
      } else
        n = e.cloneNode(!0);
      return xt(t, n), w(n, "margin", "0", "important"), w(n, {
        boxSizing: "border-box",
        width: e.offsetWidth,
        height: e.offsetHeight,
        padding: w(e, "padding")
      }), zt(n.firstElementChild, zt(e.firstElementChild)), n;
    }
    function td(t, e) {
      return t[P(t, (n) => hi(e, F(n)))];
    }
    function ed(t, e, n, o, l, c) {
      if (!lt(t).length)
        return;
      const d = F(e);
      if (!c)
        return nd(t, n) || l < d.top + d.height / 2 ? e : e.nextElementSibling;
      const p = F(n), m = Na(
        [d.top, d.bottom],
        [p.top, p.bottom]
      ), [y, $, T, R] = m ? [o, "width", "left", "right"] : [l, "height", "top", "bottom"], B = p[$] < d[$] ? d[$] - p[$] : 0;
      return p[T] < d[T] ? B && y < d[T] + B ? !1 : e.nextElementSibling : B && y > d[R] - B ? !1 : e;
    }
    function nd(t, e) {
      const n = lt(t).length === 1;
      n && xt(t, e);
      const o = lt(t), l = o.some((c, d) => {
        const p = F(c);
        return o.slice(d + 1).some((m) => {
          const y = F(m);
          return !Na([p.left, p.right], [y.left, y.right]);
        });
      });
      return n && Gt(e), l;
    }
    function Na(t, e) {
      return t[1] > e[0] && e[1] > t[0];
    }
    function id(t) {
      let e;
      return function(...n) {
        e || (e = !0, t.call(this, ...n), requestAnimationFrame(() => e = !1));
      };
    }
    var Fa = {
      props: {
        pos: String,
        offset: Boolean,
        flip: Boolean,
        shift: Boolean,
        inset: Boolean
      },
      data: {
        pos: `bottom-${Tt ? "right" : "left"}`,
        offset: !1,
        flip: !0,
        shift: !0,
        inset: !1
      },
      connected() {
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = x(["top", "bottom"], this.dir) ? "y" : "x";
      },
      methods: {
        positionAt(t, e, n) {
          let o = [this.getPositionOffset(t), this.getShiftOffset(t)];
          const l = [this.flip && "flip", this.shift && "shift"], c = {
            element: [this.inset ? this.dir : Si(this.dir), this.align],
            target: [this.dir, this.align]
          };
          if (this.axis === "y") {
            for (const m in c)
              c[m].reverse();
            o.reverse(), l.reverse();
          }
          const d = Da(t), p = F(t);
          w(t, { top: -p.height, left: -p.width }), Tr(t, e, {
            attach: c,
            offset: o,
            boundary: n,
            placement: l,
            viewportOffset: this.getViewportOffset(t)
          }), d();
        },
        getPositionOffset(t = this.$el) {
          return At(
            this.offset === !1 ? w(t, "--uk-position-offset") : this.offset,
            this.axis === "x" ? "width" : "height",
            t
          ) * (x(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
        },
        getShiftOffset(t = this.$el) {
          return this.align === "center" ? 0 : At(
            w(t, "--uk-position-shift-offset"),
            this.axis === "y" ? "width" : "height",
            t
          ) * (x(["left", "top"], this.align) ? 1 : -1);
        },
        getViewportOffset(t) {
          return At(w(t, "--uk-position-viewport-offset"));
        }
      }
    };
    function Da(t) {
      const e = Ee(t), { scrollTop: n } = e;
      return () => {
        n !== e.scrollTop && (e.scrollTop = n);
      };
    }
    var sd = {
      mixins: [Hn, ze, Fa],
      data: {
        pos: "top",
        animation: ["uk-animation-scale-up"],
        duration: 100,
        cls: "uk-active"
      },
      connected() {
        od(this.$el);
      },
      disconnected() {
        this.hide();
      },
      methods: {
        show() {
          if (this.isToggled(this.tooltip || null))
            return;
          const { delay: t = 0, title: e } = ad(this.$options);
          if (!e)
            return;
          const n = N(this.$el, "title"), o = W(this.$el, ["blur", rn], (c) => !re(c) && this.hide());
          this.reset = () => {
            N(this.$el, { title: n, "aria-describedby": null }), o();
          };
          const l = We(this);
          N(this.$el, { title: null, "aria-describedby": l }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, l), t);
        },
        async hide() {
          var t;
          et(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), (t = this.reset) == null || t.call(this), Gt(this.tooltip), this.tooltip = null);
        },
        async _show(t, e) {
          this.tooltip = xt(
            this.container,
            `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`
          ), W(this.tooltip, "toggled", (n, o) => {
            if (!o)
              return;
            const l = () => this.positionAt(this.tooltip, this.$el);
            l();
            const [c, d] = rd(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? `${Si(c)}-${d}` : `${d}-${Si(c)}`;
            const p = [
              gt(
                document,
                `keydown ${se}`,
                this.hide,
                !1,
                (m) => m.type === se && !this.$el.contains(m.target) || m.type === "keydown" && m.keyCode === rt.ESC
              ),
              W([document, ...Me(this.$el)], "scroll", l, {
                passive: !0
              })
            ];
            gt(this.tooltip, "hide", () => p.forEach((m) => m()), {
              self: !0
            });
          }), await this.toggleElement(this.tooltip, !0) || this.hide();
        }
      },
      events: {
        // Clicking a button does not give it focus on all browsers and platforms
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
        [`focus ${De} ${se}`](t) {
          (!re(t) || t.type === se) && this.show();
        }
      }
    };
    function od(t) {
      gi(t) || N(t, "tabindex", "0");
    }
    function rd(t, e, [n, o]) {
      const l = Z(t), c = Z(e), d = [
        ["left", "right"],
        ["top", "bottom"]
      ];
      for (const m of d) {
        if (l[m[0]] >= c[m[1]]) {
          n = m[1];
          break;
        }
        if (l[m[1]] <= c[m[0]]) {
          n = m[0];
          break;
        }
      }
      return o = (x(d[0], n) ? d[1] : d[0]).find((m) => l[m] === c[m]) || "center", [n, o];
    }
    function ad(t) {
      const { el: e, id: n, data: o } = t;
      return ["delay", "title"].reduce((l, c) => ({ [c]: Rt(e, c), ...l }), {
        ...hn(Rt(e, n), ["title"]),
        ...o
      });
    }
    var ld = {
      mixins: [Ni],
      i18n: {
        invalidMime: "Invalid File Type: %s",
        invalidName: "Invalid File Name: %s",
        invalidSize: "Invalid File Size: %s Kilobytes Max"
      },
      props: {
        allow: String,
        clsDragover: String,
        concurrent: Number,
        maxSize: Number,
        method: String,
        mime: String,
        multiple: Boolean,
        name: String,
        params: Object,
        type: String,
        url: String
      },
      data: {
        allow: !1,
        clsDragover: "uk-dragover",
        concurrent: 1,
        maxSize: 0,
        method: "POST",
        mime: !1,
        multiple: !1,
        name: "files[]",
        params: {},
        type: "",
        url: "",
        abort: ot,
        beforeAll: ot,
        beforeSend: ot,
        complete: ot,
        completeAll: ot,
        error: ot,
        fail: ot,
        load: ot,
        loadEnd: ot,
        loadStart: ot,
        progress: ot
      },
      events: {
        change(t) {
          et(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
        },
        drop(t) {
          Hi(t);
          const e = t.dataTransfer;
          e != null && e.files && (st(this.$el, this.clsDragover), this.upload(e.files));
        },
        dragenter(t) {
          Hi(t);
        },
        dragover(t) {
          Hi(t), X(this.$el, this.clsDragover);
        },
        dragleave(t) {
          Hi(t), st(this.$el, this.clsDragover);
        }
      },
      methods: {
        async upload(t) {
          if (t = O(t), !t.length)
            return;
          D(this.$el, "upload", [t]);
          for (const o of t) {
            if (this.maxSize && this.maxSize * 1e3 < o.size) {
              this.fail(this.t("invalidSize", this.maxSize));
              return;
            }
            if (this.allow && !ja(this.allow, o.name)) {
              this.fail(this.t("invalidName", this.allow));
              return;
            }
            if (this.mime && !ja(this.mime, o.type)) {
              this.fail(this.t("invalidMime", this.mime));
              return;
            }
          }
          this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
          const e = cd(t, this.concurrent), n = async (o) => {
            const l = new FormData();
            o.forEach((c) => l.append(this.name, c));
            for (const c in this.params)
              l.append(c, this.params[c]);
            try {
              const c = await ud(this.url, {
                data: l,
                method: this.method,
                responseType: this.type,
                beforeSend: (d) => {
                  const { xhr: p } = d;
                  W(p.upload, "progress", this.progress);
                  for (const m of ["loadStart", "load", "loadEnd", "abort"])
                    W(p, m.toLowerCase(), this[m]);
                  return this.beforeSend(d);
                }
              });
              this.complete(c), e.length ? await n(e.shift()) : this.completeAll(c);
            } catch (c) {
              this.error(c);
            }
          };
          await n(e.shift());
        }
      }
    };
    function ja(t, e) {
      return e.match(
        new RegExp(
          `^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`,
          "i"
        )
      );
    }
    function cd(t, e) {
      const n = [];
      for (let o = 0; o < t.length; o += e)
        n.push(t.slice(o, o + e));
      return n;
    }
    function Hi(t) {
      t.preventDefault(), t.stopPropagation();
    }
    async function ud(t, e) {
      const n = {
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: ot,
        responseType: "",
        ...e
      };
      return await n.beforeSend(n), hd(t, n);
    }
    function hd(t, e) {
      return new Promise((n, o) => {
        const { xhr: l } = e;
        for (const c in e)
          if (c in l)
            try {
              l[c] = e[c];
            } catch {
            }
        l.open(e.method.toUpperCase(), t);
        for (const c in e.headers)
          l.setRequestHeader(c, e.headers[c]);
        W(l, "load", () => {
          l.status === 0 || l.status >= 200 && l.status < 300 || l.status === 304 ? n(l) : o(
            U(Error(l.statusText), {
              xhr: l,
              status: l.status
            })
          );
        }), W(l, "error", () => o(U(Error("Network Error"), { xhr: l }))), W(l, "timeout", () => o(U(Error("Network Timeout"), { xhr: l }))), l.send(e.data);
      });
    }
    var dd = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Countdown: Tu,
      Filter: Mu,
      Lightbox: Ah,
      LightboxPanel: fa,
      Notification: Rh,
      Parallax: Mh,
      Slider: Wh,
      SliderParallax: Pa,
      Slideshow: Gh,
      SlideshowParallax: Pa,
      Sortable: Xh,
      Tooltip: sd,
      Upload: ld
    });
    function fd(t) {
      Fe && window.MutationObserver && (document.body ? requestAnimationFrame(() => La(t)) : new MutationObserver((e, n) => {
        document.body && (La(t), n.disconnect());
      }).observe(document.documentElement, { childList: !0 }));
    }
    function La(t) {
      D(document, "uikit:init", t), document.body && Se(document.body, Ua), new MutationObserver((e) => e.forEach(pd)).observe(document, {
        subtree: !0,
        childList: !0
      }), new MutationObserver((e) => e.forEach(md)).observe(document, {
        subtree: !0,
        attributes: !0
      }), t._initialized = !0;
    }
    function pd({ addedNodes: t, removedNodes: e }) {
      for (const n of t)
        Se(n, Ua);
      for (const n of e)
        Se(n, gd);
    }
    function md({ target: t, attributeName: e }) {
      var n;
      const o = Ma(e);
      o && (we(t, e) ? Vn(o, t) : (n = Fi(t, o)) == null || n.$destroy());
    }
    function Ua(t) {
      const e = Jn(t);
      for (const n in e)
        eo(e[n]);
      for (const n of t.getAttributeNames()) {
        const o = Ma(n);
        o && Vn(o, t);
      }
    }
    function gd(t) {
      const e = Jn(t);
      for (const n in e)
        no(e[n]);
    }
    function Ma(t) {
      v(t, "data-") && (t = t.slice(5));
      const e = mn[t];
      return e && (e.options || e).name;
    }
    xh(Qt), Sh(Qt);
    var za = {
      mixins: [Ht, ze],
      props: {
        animation: Boolean,
        targets: String,
        active: null,
        collapsible: Boolean,
        multiple: Boolean,
        toggle: String,
        content: String,
        offset: Number
      },
      data: {
        targets: "> *",
        active: !1,
        animation: !0,
        collapsible: !0,
        multiple: !1,
        clsOpen: "uk-open",
        toggle: "> .uk-accordion-title",
        content: "> .uk-accordion-content",
        offset: 0
      },
      computed: {
        items: ({ targets: t }, e) => ft(t, e),
        toggles({ toggle: t }) {
          return this.items.map((e) => V(t, e));
        },
        contents({ content: t }) {
          return this.items.map((e) => {
            var n;
            return ((n = e._wrapper) == null ? void 0 : n.firstElementChild) || V(t, e);
          });
        }
      },
      watch: {
        items(t, e) {
          if (e || H(t, this.clsOpen))
            return;
          const n = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
          n && this.toggle(n, !1);
        },
        toggles() {
          this.$emit();
        },
        contents(t) {
          for (const e of t) {
            const n = H(
              this.items.find((o) => o.contains(e)),
              this.clsOpen
            );
            qi(e, !n);
          }
          this.$emit();
        }
      },
      observe: Ii(),
      events: [
        {
          name: "click keydown",
          delegate: ({ targets: t, $props: e }) => `${t} ${e.toggle}`,
          async handler(t) {
            var e;
            t.type === "keydown" && t.keyCode !== rt.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = bd(t.target), await this.toggle(me(this.toggles, t.current)), this._off());
          }
        },
        {
          name: "shown hidden",
          self: !0,
          delegate: ({ targets: t }) => t,
          handler() {
            this.$emit();
          }
        }
      ],
      update() {
        const t = An(this.items, `.${this.clsOpen}`);
        for (const e in this.items) {
          const n = this.toggles[e], o = this.contents[e];
          if (!n || !o)
            continue;
          n.id = We(this, n), o.id = We(this, o);
          const l = x(t, this.items[e]);
          N(n, {
            role: vt(n, "a") ? "button" : null,
            "aria-controls": o.id,
            "aria-expanded": l,
            "aria-disabled": !this.collapsible && t.length < 2 && l
          }), N(o, { role: "region", "aria-labelledby": n.id }), vt(o, "ul") && N(lt(o), "role", "presentation");
        }
      },
      methods: {
        toggle(t, e) {
          t = this.items[Kt(t, this.items)];
          let n = [t];
          const o = An(this.items, `.${this.clsOpen}`);
          if (!this.multiple && !x(o, n[0]) && (n = n.concat(o)), !(!this.collapsible && o.length < 2 && x(o, t)))
            return Promise.all(
              n.map(
                (l) => this.toggleElement(l, !x(o, l), (c, d) => {
                  if ($t(c, this.clsOpen, d), e === !1 || !this.animation) {
                    qi(V(this.content, c), !d);
                    return;
                  }
                  return vd(c, d, this);
                })
              )
            );
        }
      }
    };
    function qi(t, e) {
      t && (t.hidden = e);
    }
    async function vd(t, e, { content: n, duration: o, velocity: l, transition: c }) {
      var d;
      n = ((d = t._wrapper) == null ? void 0 : d.firstElementChild) || V(n, t), t._wrapper || (t._wrapper = ki(n, "<div>"));
      const p = t._wrapper;
      w(p, "overflow", "hidden");
      const m = G(w(p, "height"));
      await ct.cancel(p), qi(n, !1);
      const y = Be(["marginTop", "marginBottom"], (T) => w(n, T)) + F(n).height, $ = m / y;
      o = (l * y + o) * (e ? 1 - $ : $), w(p, "height", m), await ct.start(p, { height: e ? y : 0 }, o, c), Nn(n), delete t._wrapper, e || qi(n, !0);
    }
    function bd(t) {
      const e = Ee(t, !0);
      let n;
      return function o() {
        n = requestAnimationFrame(() => {
          const { top: l } = F(t);
          l < 0 && (e.scrollTop += l), o();
        });
      }(), () => requestAnimationFrame(() => cancelAnimationFrame(n));
    }
    var wd = {
      mixins: [Ht, ze],
      args: "animation",
      props: {
        animation: Boolean,
        close: String
      },
      data: {
        animation: !0,
        selClose: ".uk-alert-close",
        duration: 150
      },
      events: {
        name: "click",
        delegate: ({ selClose: t }) => t,
        handler(t) {
          t.preventDefault(), this.close();
        }
      },
      methods: {
        async close() {
          await this.toggleElement(this.$el, !1, yd), this.$destroy(!0);
        }
      }
    };
    function yd(t, e, { duration: n, transition: o, velocity: l }) {
      const c = G(w(t, "height"));
      return w(t, "height", c), ct.start(
        t,
        {
          height: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          borderTop: 0,
          borderBottom: 0,
          opacity: 0
        },
        l * c + n,
        o
      );
    }
    var Ha = {
      args: "autoplay",
      props: {
        automute: Boolean,
        autoplay: Boolean
      },
      data: {
        automute: !1,
        autoplay: !0
      },
      beforeConnect() {
        this.autoplay === "inview" && !we(this.$el, "preload") && (this.$el.preload = "none"), vt(this.$el, "iframe") && !we(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && (vt(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = !0), this.automute && yr(this.$el);
      },
      events: [
        {
          name: `${De} focusin`,
          filter: ({ autoplay: t }) => x(t, "hover"),
          handler(t) {
            !re(t) || !$d(this.$el) ? Fs(this.$el) : Ti(this.$el);
          }
        },
        {
          name: `${rn} focusout`,
          filter: ({ autoplay: t }) => x(t, "hover"),
          handler(t) {
            re(t) || Ti(this.$el);
          }
        }
      ],
      observe: [
        dn({
          filter: ({ $el: t, autoplay: e }) => e !== "hover" && $r(t),
          handler([{ isIntersecting: t }]) {
            document.fullscreenElement || (t ? this.autoplay && Fs(this.$el) : Ti(this.$el));
          },
          args: { intersecting: !1 },
          options: ({ $el: t, autoplay: e }) => ({ root: e === "inview" ? null : at(t) })
        })
      ]
    };
    function $d(t) {
      return !t.paused && !t.ended;
    }
    var kd = {
      mixins: [Ha],
      props: {
        width: Number,
        height: Number
      },
      data: {
        automute: !0
      },
      created() {
        this.useObjectFit = vt(this.$el, "img", "video");
      },
      observe: oe({
        target: ({ $el: t }) => qa(t) || at(t),
        filter: ({ useObjectFit: t }) => !t
      }),
      update: {
        read() {
          if (this.useObjectFit)
            return !1;
          const { ratio: t, cover: e } = ws, { $el: n, width: o, height: l } = this;
          let c = { width: o, height: l };
          if (!o || !l) {
            const y = {
              width: n.naturalWidth || n.videoWidth || n.clientWidth,
              height: n.naturalHeight || n.videoHeight || n.clientHeight
            };
            o ? c = t(y, "width", o) : l ? c = t(y, "height", l) : c = y;
          }
          const { offsetHeight: d, offsetWidth: p } = qa(n) || at(n), m = e(c, { width: p, height: d });
          return !m.width || !m.height ? !1 : m;
        },
        write({ height: t, width: e }) {
          w(this.$el, { height: t, width: e });
        },
        events: ["resize"]
      }
    };
    function qa(t) {
      for (; t = at(t); )
        if (w(t, "position") !== "static")
          return t;
    }
    let It;
    var Wa = {
      mixins: [Hn, Fa, ze],
      args: "pos",
      props: {
        mode: "list",
        toggle: Boolean,
        boundary: Boolean,
        boundaryX: Boolean,
        boundaryY: Boolean,
        target: Boolean,
        targetX: Boolean,
        targetY: Boolean,
        stretch: Boolean,
        delayShow: Number,
        delayHide: Number,
        autoUpdate: Boolean,
        clsDrop: String,
        animateOut: Boolean,
        bgScroll: Boolean,
        closeOnScroll: Boolean
      },
      data: {
        mode: ["click", "hover"],
        toggle: "- *",
        boundary: !1,
        boundaryX: !1,
        boundaryY: !1,
        target: !1,
        targetX: !1,
        targetY: !1,
        stretch: !1,
        delayShow: 0,
        delayHide: 800,
        autoUpdate: !0,
        clsDrop: !1,
        animateOut: !1,
        bgScroll: !0,
        animation: ["uk-animation-fade"],
        cls: "uk-open",
        container: !1,
        closeOnScroll: !1
      },
      computed: {
        boundary({ boundary: t, boundaryX: e, boundaryY: n }, o) {
          return [
            Lt(e || t, o) || window,
            Lt(n || t, o) || window
          ];
        },
        target({ target: t, targetX: e, targetY: n }, o) {
          return e || (e = t || this.targetEl), n || (n = t || this.targetEl), [
            e === !0 ? window : Lt(e, o),
            n === !0 ? window : Lt(n, o)
          ];
        }
      },
      created() {
        this.tracker = new vr();
      },
      beforeConnect() {
        this.clsDrop = this.$props.clsDrop || this.$options.id;
      },
      connected() {
        X(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = Sd(this)), this._style = vs(this.$el.style, ["width", "height"]);
      },
      disconnected() {
        this.isActive() && (this.hide(!1), It = null), w(this.$el, this._style);
      },
      events: [
        {
          name: "click",
          delegate: () => ".uk-drop-close",
          handler(t) {
            t.preventDefault(), this.hide(!1);
          }
        },
        {
          name: "click",
          delegate: () => 'a[href*="#"]',
          handler({ defaultPrevented: t, current: e }) {
            const { hash: n } = e;
            !t && n && an(e) && !this.$el.contains(V(n)) && this.hide(!1);
          }
        },
        {
          name: "beforescroll",
          handler() {
            this.hide(!1);
          }
        },
        {
          name: "toggle",
          self: !0,
          handler(t, e) {
            t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1);
          }
        },
        {
          name: "toggleshow",
          self: !0,
          handler(t, e) {
            t.preventDefault(), this.show(e == null ? void 0 : e.$el);
          }
        },
        {
          name: "togglehide",
          self: !0,
          handler(t) {
            t.preventDefault(), et(this.$el, ":focus,:hover") || this.hide();
          }
        },
        {
          name: `${De} focusin`,
          filter: ({ mode: t }) => x(t, "hover"),
          handler(t) {
            re(t) || this.clearTimers();
          }
        },
        {
          name: `${rn} focusout`,
          filter: ({ mode: t }) => x(t, "hover"),
          handler(t) {
            !re(t) && t.relatedTarget && this.hide();
          }
        },
        {
          name: "toggled",
          self: !0,
          handler(t, e) {
            e && (this.clearTimers(), this.position());
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            It = this, this.tracker.init(), N(this.targetEl, "aria-expanded", !0);
            const t = [
              _d(this),
              Ed(this),
              Od(this),
              this.autoUpdate && Va(this),
              this.closeOnScroll && Td(this)
            ];
            gt(this.$el, "hide", () => t.forEach((e) => e && e()), {
              self: !0
            }), this.bgScroll || gt(this.$el, "hidden", Vr(this.$el), { self: !0 });
          }
        },
        {
          name: "beforehide",
          self: !0,
          handler: "clearTimers"
        },
        {
          name: "hide",
          handler({ target: t }) {
            if (this.$el !== t) {
              It = It === null && this.$el.contains(t) && this.isToggled() ? this : It;
              return;
            }
            It = this.isActive() ? null : It, this.tracker.cancel(), N(this.targetEl, "aria-expanded", null);
          }
        }
      ],
      update: {
        write() {
          this.isToggled() && !H(this.$el, this.clsEnter) && this.position();
        }
      },
      methods: {
        show(t = this.targetEl, e = !0) {
          if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
            if (It) {
              if (e && It.isDelaying()) {
                this.showTimer = setTimeout(() => et(t, ":hover") && this.show(), 10);
                return;
              }
              let n;
              for (; It && n !== It && !It.$el.contains(this.$el); )
                n = It, It.hide(!1, !1);
            }
            this.container && at(this.$el) !== this.container && xt(this.container, this.$el), this.showTimer = setTimeout(
              () => this.toggleElement(this.$el, !0),
              e && this.delayShow || 0
            );
          }
        },
        hide(t = !0, e = !0) {
          const n = () => this.toggleElement(this.$el, !1, this.animateOut && e);
          this.clearTimers(), this.isDelayedHide = t, t && this.isDelaying() ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(n, this.delayHide) : n();
        },
        clearTimers() {
          clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null;
        },
        isActive() {
          return It === this;
        },
        isDelaying() {
          return [this.$el, ...ft(".uk-drop", this.$el)].some((t) => this.tracker.movesTo(t));
        },
        position() {
          const t = Da(this.$el);
          st(this.$el, "uk-drop-stack"), w(this.$el, this._style), this.$el.hidden = !0;
          const e = this.target.map((c) => xd(this.$el, c)), n = this.getViewportOffset(this.$el), o = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]]
          ];
          for (const [c, [d, p]] of o)
            this.axis !== d && x([d, !0], this.stretch) && w(this.$el, {
              [p]: Math.min(
                Z(this.boundary[c])[p],
                e[c][p] - 2 * n
              ),
              [`overflow-${d}`]: "auto"
            });
          const l = e[0].width - 2 * n;
          this.$el.hidden = !1, w(this.$el, "maxWidth", ""), this.$el.offsetWidth > l && X(this.$el, "uk-drop-stack"), w(this.$el, "maxWidth", l), this.positionAt(this.$el, this.target, this.boundary);
          for (const [c, [d, p, m, y]] of o)
            if (this.axis === d && x([d, !0], this.stretch)) {
              const $ = Math.abs(this.getPositionOffset()), T = Z(this.target[c]), R = Z(this.$el);
              w(this.$el, {
                [p]: (T[m] > R[m] ? T[this.inset ? y : m] - Math.max(
                  Z(this.boundary[c])[m],
                  e[c][m] + n
                ) : Math.min(
                  Z(this.boundary[c])[y],
                  e[c][y] - n
                ) - T[this.inset ? m : y]) - $,
                [`overflow-${d}`]: "auto"
              }), this.positionAt(this.$el, this.target, this.boundary);
            }
          t();
        }
      }
    };
    function xd(t, e) {
      return Xt(Me(e).find((n) => n.contains(t)));
    }
    function Sd(t) {
      const { $el: e } = t.$create("toggle", Lt(t.toggle, t.$el), {
        target: t.$el,
        mode: t.mode
      });
      return N(e, "aria-haspopup", !0), e;
    }
    function _d(t) {
      const e = () => t.$emit(), n = [
        Bs(e),
        jn(Me(t.$el).concat(t.target), e)
      ];
      return () => n.map((o) => o.disconnect());
    }
    function Va(t, e = () => t.$emit()) {
      return W([document, ...Me(t.$el)], "scroll", e, {
        passive: !0
      });
    }
    function Ed(t) {
      return W(document, "keydown", (e) => {
        e.keyCode === rt.ESC && t.hide(!1);
      });
    }
    function Td(t) {
      return Va(t, () => t.hide(!1));
    }
    function Od(t) {
      return W(document, se, ({ target: e }) => {
        t.$el.contains(e) || gt(
          document,
          `${ye} ${pi} scroll`,
          ({ defaultPrevented: n, type: o, target: l }) => {
            var c;
            !n && o === ye && e === l && !((c = t.targetEl) != null && c.contains(e)) && t.hide(!1);
          },
          !0
        );
      });
    }
    var Ja = {
      mixins: [Ht, Hn],
      props: {
        align: String,
        clsDrop: String,
        boundary: Boolean,
        dropbar: Boolean,
        dropbarAnchor: Boolean,
        duration: Number,
        mode: Boolean,
        offset: Boolean,
        stretch: Boolean,
        delayShow: Boolean,
        delayHide: Boolean,
        target: Boolean,
        targetX: Boolean,
        targetY: Boolean,
        animation: Boolean,
        animateOut: Boolean,
        closeOnScroll: Boolean
      },
      data: {
        align: Tt ? "right" : "left",
        clsDrop: "uk-dropdown",
        clsDropbar: "uk-dropnav-dropbar",
        boundary: !0,
        dropbar: !1,
        dropbarAnchor: !1,
        duration: 200,
        container: !1,
        selNavItem: "> li > a, > ul > li > a"
      },
      computed: {
        dropbarAnchor: ({ dropbarAnchor: t }, e) => Lt(t, e) || e,
        dropbar({ dropbar: t }) {
          return t ? (t = this._dropbar || Lt(t, this.$el) || V(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = V("<div></div>"))) : null;
        },
        dropContainer(t, e) {
          return this.container || e;
        },
        dropdowns({ clsDrop: t }, e) {
          var n;
          const o = ft(`.${t}`, e);
          if (this.dropContainer !== e)
            for (const l of ft(`.${t}`, this.dropContainer)) {
              const c = (n = this.getDropdown(l)) == null ? void 0 : n.targetEl;
              !x(o, l) && c && this.$el.contains(c) && o.push(l);
            }
          return o;
        },
        items({ selNavItem: t }, e) {
          return ft(t, e);
        }
      },
      watch: {
        dropbar(t) {
          X(
            t,
            "uk-dropbar",
            "uk-dropbar-top",
            this.clsDropbar,
            `uk-${this.$options.name}-dropbar`
          );
        },
        dropdowns() {
          this.initializeDropdowns();
        }
      },
      connected() {
        this.initializeDropdowns();
      },
      disconnected() {
        Gt(this._dropbar), delete this._dropbar;
      },
      events: [
        {
          name: "mouseover focusin",
          delegate: ({ selNavItem: t }) => t,
          handler({ current: t }) {
            const e = this.getActive();
            e && x(e.mode, "hover") && e.targetEl && !t.contains(e.targetEl) && !e.isDelaying() && e.hide(!1);
          }
        },
        {
          name: "keydown",
          self: !0,
          delegate: ({ selNavItem: t }) => t,
          handler(t) {
            var e;
            const { current: n, keyCode: o } = t, l = this.getActive();
            o === rt.DOWN && (l == null ? void 0 : l.targetEl) === n && (t.preventDefault(), (e = V(Cn, l.$el)) == null || e.focus()), Ka(t, this.items, l);
          }
        },
        {
          name: "keydown",
          el: ({ dropContainer: t }) => t,
          delegate: ({ clsDrop: t }) => `.${t}`,
          handler(t) {
            var e;
            const { current: n, keyCode: o, target: l } = t;
            if (mi(l) || !x(this.dropdowns, n))
              return;
            const c = this.getActive();
            let d = -1;
            if (o === rt.HOME ? d = 0 : o === rt.END ? d = "last" : o === rt.UP ? d = "previous" : o === rt.DOWN ? d = "next" : o === rt.ESC && ((e = c.targetEl) == null || e.focus()), ~d) {
              t.preventDefault();
              const p = ft(Cn, n);
              p[Kt(
                d,
                p,
                P(p, (m) => et(m, ":focus"))
              )].focus();
            }
            Ka(t, this.items, c);
          }
        },
        {
          name: "mouseleave",
          el: ({ dropbar: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler() {
            const t = this.getActive();
            t && x(t.mode, "hover") && !this.dropdowns.some((e) => et(e, ":hover")) && t.hide();
          }
        },
        {
          name: "beforeshow",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler({ target: t }) {
            this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && yi(this.dropbarAnchor, this.dropbar), X(t, `${this.clsDrop}-dropbar`));
          }
        },
        {
          name: "show",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler({ target: t }) {
            if (!this.isDropbarDrop(t))
              return;
            const e = this.getDropdown(t), n = () => {
              const o = Math.max(
                ...Pn(t, `.${this.clsDrop}`).concat(t).map((l) => Z(l).bottom)
              );
              Z(this.dropbar, {
                left: Z(this.dropbar).left,
                top: this.getDropbarOffset(e.getPositionOffset())
              }), this.transitionTo(
                o - Z(this.dropbar).top + G(w(t, "marginBottom")),
                t
              );
            };
            this._observer = jn([e.$el, ...e.target], n), n();
          }
        },
        {
          name: "beforehide",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler(t) {
            const e = this.getActive();
            et(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && x(e.mode, "hover") && e.isDelayedHide && !this.items.some((n) => e.targetEl !== n && et(n, ":focus")) && t.preventDefault();
          }
        },
        {
          name: "hide",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler({ target: t }) {
            var e;
            if (!this.isDropbarDrop(t))
              return;
            (e = this._observer) == null || e.disconnect();
            const n = this.getActive();
            (!n || n.$el === t) && this.transitionTo(0);
          }
        }
      ],
      methods: {
        getActive() {
          var t;
          return x(this.dropdowns, (t = It) == null ? void 0 : t.$el) && It;
        },
        async transitionTo(t, e) {
          const { dropbar: n } = this, o = zt(n);
          if (e = o < t && e, await ct.cancel([e, n]), e) {
            const l = Z(e).top - Z(n).top - o;
            l > 0 && w(e, "transitionDelay", `${l / t * this.duration}ms`);
          }
          w(e, "clipPath", `polygon(0 0,100% 0,100% ${o}px,0 ${o}px)`), zt(n, o), await Promise.all([
            ct.start(n, { height: t }, this.duration),
            ct.start(
              e,
              { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` },
              this.duration
            ).finally(() => w(e, { clipPath: "", transitionDelay: "" }))
          ]).catch(ot);
        },
        getDropdown(t) {
          return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
        },
        isDropbarDrop(t) {
          return x(this.dropdowns, t) && H(t, this.clsDrop);
        },
        getDropbarOffset(t) {
          const { $el: e, target: n, targetY: o } = this, { top: l, height: c } = Z(Lt(o || n || e, e));
          return l + c + t;
        },
        initializeDropdowns() {
          this.$create(
            "drop",
            this.dropdowns.filter((t) => !this.getDropdown(t)),
            {
              ...this.$props,
              flip: !1,
              shift: !0,
              pos: `bottom-${this.align}`,
              boundary: this.boundary === !0 ? this.$el : this.boundary
            }
          );
        }
      }
    };
    function Ka(t, e, n) {
      var o, l, c;
      const { current: d, keyCode: p } = t;
      let m = -1;
      p === rt.HOME ? m = 0 : p === rt.END ? m = "last" : p === rt.LEFT ? m = "previous" : p === rt.RIGHT ? m = "next" : p === rt.TAB && ((o = n.targetEl) == null || o.focus(), (l = n.hide) == null || l.call(n, !1)), ~m && (t.preventDefault(), (c = n.hide) == null || c.call(n, !1), e[Kt(m, e, e.indexOf(n.targetEl || d))].focus());
    }
    var Cd = {
      mixins: [Ht],
      args: "target",
      props: {
        target: Boolean
      },
      data: {
        target: !1
      },
      computed: {
        input: (t, e) => V(On, e),
        state() {
          return this.input.nextElementSibling;
        },
        target({ target: t }, e) {
          return t && (t === !0 && at(this.input) === e && this.input.nextElementSibling || V(t, e));
        }
      },
      update() {
        var t;
        const { target: e, input: n } = this;
        if (!e)
          return;
        let o;
        const l = mi(e) ? "value" : "textContent", c = e[l], d = (t = n.files) != null && t[0] ? n.files[0].name : et(n, "select") && (o = ft("option", n).filter((p) => p.selected)[0]) ? o.textContent : n.value;
        c !== d && (e[l] = d);
      },
      events: [
        {
          name: "change",
          handler() {
            this.$emit();
          }
        },
        {
          name: "reset",
          el: ({ $el: t }) => t.closest("form"),
          handler() {
            this.$emit();
          }
        }
      ]
    }, Ad = {
      extends: Dr,
      mixins: [Ht],
      name: "grid",
      props: {
        masonry: Boolean,
        parallax: String,
        parallaxStart: String,
        parallaxEnd: String,
        parallaxJustify: Boolean
      },
      data: {
        margin: "uk-grid-margin",
        clsStack: "uk-grid-stack",
        masonry: !1,
        parallax: 0,
        parallaxStart: 0,
        parallaxEnd: 0,
        parallaxJustify: !1
      },
      connected() {
        this.masonry && X(this.$el, "uk-flex-top", "uk-flex-wrap-top");
      },
      observe: Mn({ filter: ({ parallax: t, parallaxJustify: e }) => t || e }),
      update: [
        {
          write({ rows: t }) {
            $t(this.$el, this.clsStack, !t.some((e) => e.length > 1));
          },
          events: ["resize"]
        },
        {
          read(t) {
            const { rows: e } = t;
            let { masonry: n, parallax: o, parallaxJustify: l, margin: c } = this;
            if (o = Math.max(0, At(o)), !(n || o || l) || Ga(e) || e[0].some(
              (L, Q) => e.some((nt) => nt[Q] && nt[Q].offsetWidth !== L.offsetWidth)
            ))
              return t.translates = t.scrollColumns = !1;
            let d = Rd(e, c), p, m;
            n ? [p, m] = Pd(e, d, n === "next") : p = Id(e);
            const y = p.map(
              (L) => Be(L, "offsetHeight") + d * (L.length - 1)
            ), $ = Math.max(0, ...y);
            let T, R, B;
            return (o || l) && (T = y.map(
              (L, Q) => l ? $ - L + o : o / (Q % 2 || 8)
            ), l || (o = Math.max(
              ...y.map((L, Q) => L + T[Q] - $)
            )), R = At(this.parallaxStart, "height", this.$el, !0), B = At(this.parallaxEnd, "height", this.$el, !0)), {
              columns: p,
              translates: m,
              scrollColumns: T,
              parallaxStart: R,
              parallaxEnd: B,
              padding: o,
              height: m ? $ : ""
            };
          },
          write({ height: t, padding: e }) {
            w(this.$el, "paddingBottom", e || ""), t !== !1 && w(this.$el, "height", t);
          },
          events: ["resize"]
        },
        {
          read({ rows: t, scrollColumns: e, parallaxStart: n, parallaxEnd: o }) {
            return {
              scrolled: e && !Ga(t) ? Ai(this.$el, n, o) : !1
            };
          },
          write({ columns: t, scrolled: e, scrollColumns: n, translates: o }) {
            !e && !o || t.forEach(
              (l, c) => l.forEach((d, p) => {
                let [m, y] = o && o[c][p] || [0, 0];
                e && (y += e * n[c]), w(d, "transform", `translate(${m}px, ${y}px)`);
              })
            );
          },
          events: ["scroll", "resize"]
        }
      ]
    };
    function Ga(t) {
      return t.flat().some((e) => w(e, "position") === "absolute");
    }
    function Pd(t, e, n) {
      const o = [], l = [], c = Array(t[0].length).fill(0);
      let d = 0;
      for (let p of t) {
        Tt && (p = p.reverse());
        let m = 0;
        for (const y in p) {
          const { offsetWidth: $, offsetHeight: T } = p[y], R = n ? y : c.indexOf(Math.min(...c));
          oo(o, R, p[y]), oo(l, R, [
            (R - y) * $ * (Tt ? -1 : 1),
            c[R] - d
          ]), c[R] += T + e, m = Math.max(m, T);
        }
        d += m + e;
      }
      return [o, l];
    }
    function Rd(t, e) {
      const n = t.flat().find((o) => H(o, e));
      return G(n ? w(n, "marginTop") : w(t[0][0], "paddingLeft"));
    }
    function Id(t) {
      const e = [];
      for (const n of t)
        for (const o in n)
          oo(e, o, n[o]);
      return e;
    }
    function oo(t, e, n) {
      t[e] || (t[e] = []), t[e].push(n);
    }
    var Bd = {
      args: "target",
      props: {
        target: String,
        row: Boolean
      },
      data: {
        target: "> *",
        row: !0
      },
      computed: {
        elements: ({ target: t }, e) => ft(t, e)
      },
      observe: oe({
        target: ({ $el: t, elements: e }) => e.reduce((n, o) => n.concat(o, ...o.children), [t])
      }),
      events: {
        // Hidden elements may change height when fonts load
        name: "loadingdone",
        el: () => document.fonts,
        handler() {
          this.$emit("resize");
        }
      },
      update: {
        read() {
          return {
            rows: (this.row ? Vs(this.elements) : [this.elements]).map(Nd)
          };
        },
        write({ rows: t }) {
          for (const { heights: e, elements: n } of t)
            n.forEach((o, l) => w(o, "minHeight", e[l]));
        },
        events: ["resize"]
      }
    };
    function Nd(t) {
      if (t.length < 2)
        return { heights: [""], elements: t };
      let e = t.map(Fd);
      const n = Math.max(...e);
      return {
        heights: t.map((o, l) => e[l].toFixed(2) === n.toFixed(2) ? "" : n),
        elements: t
      };
    }
    function Fd(t) {
      const e = vs(t.style, ["display", "minHeight"]);
      kt(t) || w(t, "display", "block", "important"), w(t, "minHeight", "");
      const n = F(t).height - cn(t, "height", "content-box");
      return w(t, e), n;
    }
    var Dd = {
      args: "target",
      props: {
        target: String
      },
      data: {
        target: ""
      },
      computed: {
        target: {
          get: ({ target: t }, e) => Lt(t, e),
          observe: ({ target: t }) => t
        }
      },
      observe: oe({ target: ({ target: t }) => t }),
      update: {
        read() {
          return this.target ? { height: this.target.offsetHeight } : !1;
        },
        write({ height: t }) {
          w(this.$el, { minHeight: t });
        },
        events: ["resize"]
      }
    }, jd = {
      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean,
        minHeight: Number
      },
      data: {
        expand: !1,
        offsetTop: !1,
        offsetBottom: !1,
        minHeight: 0
      },
      // check for offsetTop change
      observe: [
        Ws({ filter: ({ expand: t }) => t }),
        oe({ target: ({ $el: t }) => Ue(t) })
      ],
      update: {
        read() {
          if (!kt(this.$el))
            return !1;
          let t = "";
          const e = cn(this.$el, "height", "content-box"), { body: n, scrollingElement: o } = document, l = Ee(this.$el), { height: c } = Xt(
            l === n ? o : l
          ), d = o === l || n === l;
          if (t = `calc(${d ? "100vh" : `${c}px`}`, this.expand) {
            const p = F(l).height - F(this.$el).height;
            t += ` - ${p}px`;
          } else {
            if (this.offsetTop)
              if (d) {
                const p = this.offsetTop === !0 ? this.$el : Lt(this.offsetTop, this.$el), { top: m } = Z(p);
                t += m > 0 && m < c / 2 ? ` - ${m}px` : "";
              } else
                t += ` - ${cn(l, "height", w(l, "boxSizing"))}px`;
            this.offsetBottom === !0 ? t += ` - ${F(this.$el.nextElementSibling).height}px` : he(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && A(this.offsetBottom, "px") ? t += ` - ${G(this.offsetBottom)}px` : dt(this.offsetBottom) && (t += ` - ${F(Lt(this.offsetBottom, this.$el)).height}px`);
          }
          return t += `${e ? ` - ${e}px` : ""})`, { minHeight: t };
        },
        write({ minHeight: t }) {
          w(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"]
      }
    }, Ld = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', Ud = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', Md = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', zd = '<svg width="20" height="20" viewBox="0 0 20 20"><rect width="1" height="11" x="9" y="4"/><rect width="11" height="1" x="4" y="9"/></svg>', Hd = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', qd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Wd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Vd = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1"/><rect width="20" height="2" y="9" class="line-2"/><rect width="20" height="2" y="9" class="line-3"/><rect width="20" height="2" y="15" class="line-4"/></svg>', Jd = '<svg width="40" height="40" viewBox="0 0 40 40"><rect width="1" height="40" x="19" y="0"/><rect width="40" height="1" x="0" y="19"/></svg>', Kd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', Gd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Xa = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', Xd = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', Yd = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', Qd = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', Zd = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', tf = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', ef = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', nf = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', sf = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>', Ya = {
      args: "src",
      props: {
        width: Number,
        height: Number,
        ratio: Number
      },
      data: {
        ratio: 1
      },
      connected() {
        this.svg = this.getSvg().then((t) => {
          if (!this._connected)
            return;
          const e = of(t, this.$el);
          return this.svgEl && e !== this.svgEl && Gt(this.svgEl), rf.call(this, e, t), this.svgEl = e;
        }, ot);
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected || (ys(this.$el) && (this.$el.hidden = !1), Gt(t), this.svgEl = null);
        }), this.svg = null;
      },
      methods: {
        async getSvg() {
        }
      }
    };
    function of(t, e) {
      if (ys(e) || vt(e, "canvas")) {
        e.hidden = !0;
        const o = e.nextElementSibling;
        return Qa(t, o) ? o : yi(e, t);
      }
      const n = e.lastElementChild;
      return Qa(t, n) ? n : xt(e, t);
    }
    function Qa(t, e) {
      return vt(t, "svg") && vt(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function rf(t, e) {
      const n = ["width", "height"];
      let o = n.map((c) => this[c]);
      o.some((c) => c) || (o = n.map((c) => N(e, c)));
      const l = N(e, "viewBox");
      l && !o.some((c) => c) && (o = l.split(" ").slice(2)), o.forEach((c, d) => N(t, n[d], G(c) * this.ratio || null));
    }
    var af = {
      mixins: [Ya],
      args: "src",
      props: {
        src: String,
        icon: String,
        attributes: "list",
        strokeAnimation: Boolean
      },
      data: {
        strokeAnimation: !1
      },
      observe: [
        Ri({
          async handler() {
            const t = await this.svg;
            t && Za.call(this, t);
          },
          options: {
            attributes: !0,
            attributeFilter: ["id", "class", "style"]
          }
        })
      ],
      async connected() {
        x(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
        const t = await this.svg;
        t && (Za.call(this, t), this.strokeAnimation && hf(t));
      },
      methods: {
        async getSvg() {
          return vt(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t) => gt(this.$el, "load", t)), cf(await lf(this.src), this.icon) || Promise.reject("SVG not found.");
        }
      }
    };
    function Za(t) {
      const { $el: e } = this;
      X(t, N(e, "class"), "uk-svg");
      for (let n = 0; n < e.style.length; n++) {
        const o = e.style[n];
        w(t, o, w(e, o));
      }
      for (const n in this.attributes) {
        const [o, l] = this.attributes[n].split(":", 2);
        N(t, o, l);
      }
      this.$el.id || Tn(t, "id");
    }
    const lf = ie(async (t) => t ? v(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function cf(t, e) {
      return e && x(t, "<symbol") && (t = uf(t)[e] || t), el(t);
    }
    const tl = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, uf = ie(function(t) {
      const e = {};
      tl.lastIndex = 0;
      let n;
      for (; n = tl.exec(t); )
        e[n[3]] = `<svg ${n[1]}svg>`;
      return e;
    });
    function hf(t) {
      const e = ma(t);
      e && w(t, "--uk-animation-stroke", e);
    }
    function el(t) {
      const e = document.createElement("template");
      return e.innerHTML = t, e.content.firstElementChild;
    }
    const Wi = {
      spinner: nf,
      totop: sf,
      marker: zd,
      "close-icon": Ld,
      "close-large": Ud,
      "drop-parent-icon": Md,
      "nav-parent-icon": qd,
      "nav-parent-icon-large": Hd,
      "navbar-parent-icon": Wd,
      "navbar-toggle-icon": Vd,
      "overlay-icon": Jd,
      "pagination-next": Kd,
      "pagination-previous": Gd,
      "search-icon": Xa,
      "search-medium": Yd,
      "search-large": Xd,
      "search-toggle-icon": Xa,
      "slidenav-next": Zd,
      "slidenav-next-large": Qd,
      "slidenav-previous": ef,
      "slidenav-previous-large": tf
    }, ro = {
      install: $f,
      mixins: [Ya],
      args: "icon",
      props: { icon: String },
      isIcon: !0,
      beforeConnect() {
        X(this.$el, "uk-icon");
      },
      methods: {
        async getSvg() {
          const t = xf(this.icon);
          if (!t)
            throw "Icon not found.";
          return t;
        }
      }
    }, Je = {
      args: !1,
      extends: ro,
      data: (t) => ({
        icon: f(t.constructor.options.name)
      }),
      beforeConnect() {
        X(this.$el, this.$options.id);
      }
    }, df = {
      extends: Je,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      }
    }, ff = {
      extends: Je,
      mixins: [Ni],
      i18n: { toggle: "Open Search", submit: "Submit Search" },
      beforeConnect() {
        const t = H(this.$el, "uk-search-toggle") || H(this.$el, "uk-navbar-toggle");
        if (this.icon = t ? "search-toggle-icon" : H(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-medium") ? "search-medium" : this.$props.icon, !we(this.$el, "aria-label"))
          if (t) {
            const e = this.t("toggle");
            N(this.$el, "aria-label", e);
          } else {
            const e = this.$el.closest("a,button");
            if (e) {
              const n = this.t("submit");
              N(e, "aria-label", n);
            }
          }
      }
    }, pf = {
      extends: Je,
      beforeConnect() {
        N(this.$el, "role", "status");
      },
      methods: {
        async getSvg() {
          const t = await ro.methods.getSvg.call(this);
          return this.ratio !== 1 && w(V("circle", t), "strokeWidth", 1 / this.ratio), t;
        }
      }
    }, Ke = {
      extends: Je,
      mixins: [Ni],
      beforeConnect() {
        const t = this.$el.closest("a,button");
        N(t, "role", this.role !== null && vt(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !we(t, "aria-label") && N(t, "aria-label", e);
      }
    }, nl = {
      extends: Ke,
      beforeConnect() {
        X(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = H(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      }
    }, mf = {
      extends: Ke,
      i18n: { label: "Open menu" }
    }, gf = {
      extends: Ke,
      i18n: { label: "Close" },
      beforeConnect() {
        this.icon = `close-${H(this.$el, "uk-close-large") ? "large" : "icon"}`;
      }
    }, vf = {
      extends: Ke,
      i18n: { label: "Open" }
    }, bf = {
      extends: Ke,
      i18n: { label: "Back to top" }
    }, wf = {
      extends: Ke,
      i18n: { label: "Next page" },
      data: { role: null }
    }, yf = {
      extends: Ke,
      i18n: { label: "Previous page" },
      data: { role: null }
    }, Vi = {};
    function $f(t) {
      t.icon.add = (e, n) => {
        const o = dt(e) ? { [e]: n } : e;
        nn(o, (l, c) => {
          Wi[c] = l, delete Vi[c];
        }), t._initialized && Se(
          document.body,
          (l) => nn(t.getComponents(l), (c) => {
            c.$options.isIcon && c.icon in o && c.$reset();
          })
        );
      };
    }
    const kf = { twitter: "x" };
    function xf(t) {
      return t = kf[t] || t, Wi[t] ? (Vi[t] || (Vi[t] = el(Wi[Sf(t)] || Wi[t])), Vi[t].cloneNode(!0)) : null;
    }
    function Sf(t) {
      return Tt ? gs(gs(t, "left", "right"), "previous", "next") : t;
    }
    var _f = {
      args: "dataSrc",
      props: {
        dataSrc: String,
        sources: String,
        margin: String,
        target: String,
        loading: String
      },
      data: {
        dataSrc: "",
        sources: !1,
        margin: "50%",
        target: !1,
        loading: "lazy"
      },
      connected() {
        this.loading !== "lazy" ? this.load() : lo(this.$el) && (this.$el.loading = "lazy", ao(this.$el));
      },
      disconnected() {
        this.img && (this.img.onload = ""), delete this.img;
      },
      observe: dn({
        handler(t, e) {
          this.load(), e.disconnect();
        },
        options: ({ margin: t }) => ({ rootMargin: t }),
        filter: ({ loading: t }) => t === "lazy",
        target: ({ $el: t, $props: e }) => e.target ? [t, ...Rn(e.target, t)] : t
      }),
      methods: {
        load() {
          if (this.img)
            return this.img;
          const t = lo(this.$el) ? this.$el : Tf(this.$el, this.dataSrc, this.sources);
          return Tn(t, "loading"), ao(this.$el, t.currentSrc), this.img = t;
        }
      }
    };
    function ao(t, e) {
      if (lo(t)) {
        const n = at(t);
        (vt(n, "picture") ? lt(n) : [t]).forEach((l) => il(l, l));
      } else e && !x(t.style.backgroundImage, e) && (w(t, "backgroundImage", `url(${Ss(e)})`), D(t, ln("load", !1)));
    }
    const Ef = ["data-src", "data-srcset", "sizes"];
    function il(t, e) {
      for (const n of Ef) {
        const o = Rt(t, n);
        o && N(e, n.replace(/^(data-)+/, ""), o);
      }
    }
    function Tf(t, e, n) {
      const o = new Image();
      return Of(o, n), il(t, o), o.onload = () => {
        ao(t, o.currentSrc);
      }, N(o, "src", e), o;
    }
    function Of(t, e) {
      if (e = Cf(e), e.length) {
        const n = je("<picture>");
        for (const o of e) {
          const l = je("<source>");
          N(l, o), xt(n, l);
        }
        xt(n, t);
      }
    }
    function Cf(t) {
      if (!t)
        return [];
      if (v(t, "["))
        try {
          t = JSON.parse(t);
        } catch {
          t = [];
        }
      else
        t = hn(t);
      return C(t) || (t = [t]), t.filter((e) => !ci(e));
    }
    function lo(t) {
      return vt(t, "img");
    }
    var Af = {
      props: {
        target: String,
        selActive: String
      },
      data: {
        target: !1,
        selActive: !1
      },
      computed: {
        target: ({ target: t }, e) => t ? ft(t, e) : e
      },
      observe: [
        dn({
          handler(t) {
            this.isIntersecting = t.some(({ isIntersecting: e }) => e), this.$emit();
          },
          target: ({ target: t }) => t,
          args: { intersecting: !1 }
        }),
        Ri({
          target: ({ target: t }) => t,
          options: { attributes: !0, attributeFilter: ["class"], attributeOldValue: !0 }
        }),
        {
          target: ({ target: t }) => t,
          observe: (t, e) => {
            const n = jn(
              [...tt(t), document.documentElement],
              e
            ), o = [
              W(document, "scroll itemshown itemhidden", e, {
                passive: !0,
                capture: !0
              }),
              W(document, "show hide transitionstart", (l) => (e(), n.observe(l.target))),
              W(document, "shown hidden transitionend transitioncancel", (l) => (e(), n.unobserve(l.target)))
            ];
            return {
              observe: n.observe.bind(n),
              unobserve: n.unobserve.bind(n),
              disconnect() {
                n.disconnect(), o.map((l) => l());
              }
            };
          },
          handler() {
            this.$emit();
          }
        }
      ],
      update: {
        read() {
          if (!this.isIntersecting)
            return !1;
          for (const t of tt(this.target)) {
            let e = !this.selActive || et(t, this.selActive) ? Pf(t) : "";
            e !== !1 && di(t, "uk-light uk-dark", e);
          }
        }
      }
    };
    function Pf(t) {
      const e = F(t), n = F(window);
      if (!ui(e, n))
        return !1;
      const { left: o, top: l, height: c, width: d } = e;
      let p;
      for (const m of [0.25, 0.5, 0.75]) {
        const y = t.ownerDocument.elementsFromPoint(
          Math.max(0, Math.min(o + d * m, n.width - 1)),
          Math.max(0, Math.min(l + c / 2, n.height - 1))
        );
        for (const $ of y) {
          if (t.contains($) || !Rf($) || $.closest('[class*="-leave"]') && y.some((R) => $ !== R && et(R, '[class*="-enter"]')))
            continue;
          const T = w($, "--uk-inverse");
          if (T) {
            if (T === p)
              return `uk-${T}`;
            p = T;
            break;
          }
        }
      }
      return p ? `uk-${p}` : "";
    }
    function Rf(t) {
      if (w(t, "visibility") !== "visible")
        return !1;
      for (; t; ) {
        if (w(t, "opacity") === "0")
          return !1;
        t = at(t);
      }
      return !0;
    }
    var If = {
      mixins: [Ht, Di],
      props: {
        fill: String
      },
      data: {
        fill: "",
        clsWrapper: "uk-leader-fill",
        clsHide: "uk-leader-hide",
        attrFill: "data-fill"
      },
      computed: {
        fill: ({ fill: t }, e) => t || w(e, "--uk-leader-fill-content")
      },
      connected() {
        [this.wrapper] = As(this.$el, `<span class="${this.clsWrapper}">`);
      },
      disconnected() {
        Nn(this.wrapper.childNodes);
      },
      observe: oe(),
      update: {
        read() {
          return {
            width: Math.trunc(this.$el.offsetWidth / 2),
            fill: this.fill,
            hide: !this.matchMedia
          };
        },
        write({ width: t, fill: e, hide: n }) {
          $t(this.wrapper, this.clsHide, n), N(this.wrapper, this.attrFill, new Array(t).join(e));
        },
        events: ["resize"]
      }
    }, Bf = {
      install: Nf,
      mixins: [Qs],
      data: {
        clsPage: "uk-modal-page",
        selPanel: ".uk-modal-dialog",
        selClose: '[class*="uk-modal-close"]'
      },
      events: [
        {
          name: "fullscreenchange webkitendfullscreen",
          capture: !0,
          handler(t) {
            vt(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            H(this.panel, "uk-margin-auto-vertical") ? X(this.$el, "uk-flex") : w(this.$el, "display", "block"), zt(this.$el);
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            w(this.$el, "display", ""), st(this.$el, "uk-flex");
          }
        }
      ]
    };
    function Nf({ modal: t }) {
      t.dialog = function(n, o) {
        const l = t(V(`<div><div class="uk-modal-dialog">${n}</div></div>`), {
          stack: !0,
          role: "alertdialog",
          ...o
        });
        return l.show(), W(
          l.$el,
          "hidden",
          async () => {
            await Promise.resolve(), l.$destroy(!0);
          },
          { self: !0 }
        ), l;
      }, t.alert = function(n, o) {
        return e(
          ({ i18n: l }) => `<div class="uk-modal-body">${dt(n) ? n : xe(n)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${l.ok}</button> </div>`,
          o
        );
      }, t.confirm = function(n, o) {
        return e(
          ({ i18n: l }) => `<form> <div class="uk-modal-body">${dt(n) ? n : xe(n)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${l.ok}</button> </div> </form>`,
          o,
          () => Promise.reject()
        );
      }, t.prompt = function(n, o, l) {
        const c = e(
          ({ i18n: m }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${dt(n) ? n : xe(n)}</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${m.cancel}</button> <button class="uk-button uk-button-primary">${m.ok}</button> </div> </form>`,
          l,
          () => null,
          () => p.value
        ), { $el: d } = c.dialog, p = V("input", d);
        return p.value = o || "", W(d, "show", () => p.select()), c;
      }, t.i18n = {
        ok: "Ok",
        cancel: "Cancel"
      };
      function e(n, o, l = ot, c = ot) {
        o = {
          bgClose: !1,
          escClose: !0,
          ...o,
          i18n: { ...t.i18n, ...o == null ? void 0 : o.i18n }
        };
        const d = t.dialog(n(o), o);
        return U(
          new Promise((p) => {
            const m = W(d.$el, "hide", () => p(l()));
            W(d.$el, "submit", "form", (y) => {
              y.preventDefault(), p(c(d)), m(), d.hide();
            });
          }),
          { dialog: d }
        );
      }
    }
    var Ff = {
      extends: za,
      data: {
        targets: "> .uk-parent",
        toggle: "> a",
        content: "> ul"
      }
    };
    const co = "uk-navbar-transparent";
    var Df = {
      extends: Ja,
      props: {
        dropbarTransparentMode: Boolean
      },
      data: {
        clsDrop: "uk-navbar-dropdown",
        selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle",
        // Simplify with :where() selector once browser target is Safari 14+
        dropbarTransparentMode: !1
      },
      computed: {
        navbarContainer: (t, e) => e.closest(".uk-navbar-container")
      },
      watch: {
        items() {
          const t = H(this.$el, "uk-navbar-justify"), e = ft(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
          for (const n of e) {
            const o = t ? ft(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", n).length : "";
            w(n, "flexGrow", o);
          }
        }
      },
      events: [
        {
          name: "show",
          el: ({ dropContainer: t }) => t,
          handler({ target: t }) {
            this.getTransparentMode(t) === "remove" && H(this.navbarContainer, co) && (st(this.navbarContainer, co), this._transparent = !0);
          }
        },
        {
          name: "hide",
          el: ({ dropContainer: t }) => t,
          async handler() {
            await jf(), !this.getActive() && this._transparent && (X(this.navbarContainer, co), this._transparent = null);
          }
        }
      ],
      methods: {
        getTransparentMode(t) {
          if (!this.navbarContainer)
            return;
          if (this.dropbar && this.isDropbarDrop(t))
            return this.dropbarTransparentMode;
          const e = this.getDropdown(t);
          if (e && H(t, "uk-dropbar"))
            return e.inset ? "behind" : "remove";
        },
        getDropbarOffset(t) {
          const { top: e, height: n } = Z(this.navbarContainer);
          return e + (this.dropbarTransparentMode === "behind" ? 0 : n + t);
        }
      }
    };
    function jf() {
      return new Promise((t) => setTimeout(t));
    }
    var Lf = {
      mixins: [Qs],
      args: "mode",
      props: {
        mode: String,
        flip: Boolean,
        overlay: Boolean,
        swiping: Boolean
      },
      data: {
        mode: "slide",
        flip: !1,
        overlay: !1,
        clsPage: "uk-offcanvas-page",
        clsContainer: "uk-offcanvas-container",
        selPanel: ".uk-offcanvas-bar",
        clsFlip: "uk-offcanvas-flip",
        clsContainerAnimation: "uk-offcanvas-container-animation",
        clsSidebarAnimation: "uk-offcanvas-bar-animation",
        clsMode: "uk-offcanvas",
        clsOverlay: "uk-offcanvas-overlay",
        selClose: ".uk-offcanvas-close",
        container: !1,
        swiping: !0
      },
      computed: {
        clsFlip: ({ flip: t, clsFlip: e }) => t ? e : "",
        clsOverlay: ({ overlay: t, clsOverlay: e }) => t ? e : "",
        clsMode: ({ mode: t, clsMode: e }) => `${e}-${t}`,
        clsSidebarAnimation: ({ mode: t, clsSidebarAnimation: e }) => t === "none" || t === "reveal" ? "" : e,
        clsContainerAnimation: ({ mode: t, clsContainerAnimation: e }) => t !== "push" && t !== "reveal" ? "" : e,
        transitionElement({ mode: t }) {
          return t === "reveal" ? at(this.panel) : this.panel;
        }
      },
      observe: Fr({ filter: ({ swiping: t }) => t }),
      update: {
        read() {
          this.isToggled() && !kt(this.$el) && this.hide();
        },
        events: ["resize"]
      },
      events: [
        {
          name: "touchmove",
          self: !0,
          passive: !1,
          filter: ({ overlay: t }) => t,
          handler(t) {
            t.cancelable && t.preventDefault();
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            this.mode === "reveal" && !H(at(this.panel), this.clsMode) && X(ki(this.panel, "<div>"), this.clsMode);
            const { body: t, scrollingElement: e } = document;
            X(t, this.clsContainer, this.clsFlip), w(t, "touchAction", "pan-y pinch-zoom"), w(this.$el, "display", "block"), w(this.panel, "maxWidth", e.clientWidth), X(this.$el, this.clsOverlay), X(
              this.panel,
              this.clsSidebarAnimation,
              this.mode === "reveal" ? "" : this.clsMode
            ), zt(t), X(t, this.clsContainerAnimation), this.clsContainerAnimation && Uf();
          }
        },
        {
          name: "hide",
          self: !0,
          handler() {
            st(document.body, this.clsContainerAnimation), w(document.body, "touchAction", "");
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.clsContainerAnimation && Mf(), this.mode === "reveal" && H(at(this.panel), this.clsMode) && Nn(this.panel), st(this.panel, this.clsSidebarAnimation, this.clsMode), st(this.$el, this.clsOverlay), w(this.$el, "display", ""), w(this.panel, "maxWidth", ""), st(document.body, this.clsContainer, this.clsFlip);
          }
        },
        {
          name: "swipeLeft swipeRight",
          handler(t) {
            this.isToggled() && A(t.type, "Left") ^ this.flip && this.hide();
          }
        }
      ]
    };
    function Uf() {
      sl().content += ",user-scalable=0";
    }
    function Mf() {
      const t = sl();
      t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function sl() {
      return V('meta[name="viewport"]', document.head) || xt(document.head, '<meta name="viewport">');
    }
    var zf = {
      mixins: [Ht],
      props: {
        selContainer: String,
        selContent: String,
        minHeight: Number
      },
      data: {
        selContainer: ".uk-modal",
        selContent: ".uk-modal-dialog",
        minHeight: 150
      },
      computed: {
        container: ({ selContainer: t }, e) => e.closest(t),
        content: ({ selContent: t }, e) => e.closest(t)
      },
      observe: oe({
        target: ({ container: t, content: e }) => [t, e]
      }),
      update: {
        read() {
          return !this.content || !this.container || !kt(this.$el) ? !1 : {
            max: Math.max(
              this.minHeight,
              zt(this.container) - (F(this.content).height - zt(this.$el))
            )
          };
        },
        write({ max: t }) {
          w(this.$el, { minHeight: this.minHeight, maxHeight: t });
        },
        events: ["resize"]
      }
    }, Hf = {
      props: ["width", "height"],
      connected() {
        X(this.$el, "uk-responsive-width"), w(this.$el, "aspectRatio", `${this.width}/${this.height}`);
      }
    }, qf = {
      props: {
        offset: Number
      },
      data: {
        offset: 0
      },
      connected() {
        Wf(this);
      },
      disconnected() {
        Vf(this);
      },
      methods: {
        async scrollTo(t) {
          t = t && V(t) || document.body, D(this.$el, "beforescroll", [this, t]) && (await _r(t, { offset: this.offset }), D(this.$el, "scrolled", [this, t]));
        }
      }
    };
    const Qn = /* @__PURE__ */ new Set();
    function Wf(t) {
      Qn.size || W(document, "click", ol), Qn.add(t);
    }
    function Vf(t) {
      Qn.delete(t), Qn.size || $e(document, "click", ol);
    }
    function ol(t) {
      if (!t.defaultPrevented)
        for (const e of Qn)
          e.$el.contains(t.target) && an(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo($s(e.$el)));
    }
    const uo = "uk-scrollspy-inview";
    var Jf = {
      args: "cls",
      props: {
        cls: String,
        target: String,
        hidden: Boolean,
        margin: String,
        repeat: Boolean,
        delay: Number
      },
      data: () => ({
        cls: "",
        target: !1,
        hidden: !0,
        margin: "-1px",
        repeat: !1,
        delay: 0
      }),
      computed: {
        elements: ({ target: t }, e) => t ? ft(t, e) : [e]
      },
      watch: {
        elements(t) {
          this.hidden && w(An(t, `:not(.${uo})`), "opacity", 0);
        }
      },
      connected() {
        this.elementData = /* @__PURE__ */ new Map();
      },
      disconnected() {
        for (const [t, e] of this.elementData.entries())
          st(t, uo, (e == null ? void 0 : e.cls) || "");
        delete this.elementData;
      },
      observe: dn({
        target: ({ elements: t }) => t,
        handler(t) {
          const e = this.elementData;
          for (const { target: n, isIntersecting: o } of t) {
            e.has(n) || e.set(n, {
              cls: Rt(n, "uk-scrollspy-class") || this.cls
            });
            const l = e.get(n);
            !this.repeat && l.show || (l.show = o);
          }
          this.$emit();
        },
        options: ({ margin: t }) => ({ rootMargin: t }),
        args: { intersecting: !1 }
      }),
      update: [
        {
          write(t) {
            for (const [e, n] of this.elementData.entries())
              n.show && !n.inview && !n.queued ? (n.queued = !0, t.promise = (t.promise || Promise.resolve()).then(() => new Promise((o) => setTimeout(o, this.delay))).then(() => {
                this.toggle(e, !0), setTimeout(() => {
                  n.queued = !1, this.$emit();
                }, 300);
              })) : !n.show && n.inview && !n.queued && this.repeat && this.toggle(e, !1);
          }
        }
      ],
      methods: {
        toggle(t, e) {
          var n, o;
          const l = (n = this.elementData) == null ? void 0 : n.get(t);
          if (!l)
            return;
          (o = l.off) == null || o.call(l), w(t, "opacity", !e && this.hidden ? 0 : ""), $t(t, uo, e), $t(t, l.cls);
          let c;
          if (c = l.cls.match(/\buk-animation-[\w-]+/g)) {
            const d = () => st(t, c);
            e ? l.off = gt(t, "animationcancel animationend", d, {
              self: !0
            }) : d();
          }
          D(t, e ? "inview" : "outview"), l.inview = e;
        }
      }
    }, Kf = {
      props: {
        cls: String,
        closest: Boolean,
        scroll: Boolean,
        target: String,
        offset: Number
      },
      data: {
        cls: "uk-active",
        closest: !1,
        scroll: !1,
        target: 'a[href]:not([role="button"])',
        offset: 0
      },
      computed: {
        links: ({ target: t }, e) => ft(t, e).filter((n) => an(n)),
        elements({ closest: t }) {
          return this.links.map((e) => e.closest(t || "*"));
        }
      },
      watch: {
        links(t) {
          this.scroll && this.$create("scroll", t, { offset: this.offset });
        }
      },
      observe: [dn(), Mn()],
      update: [
        {
          read() {
            const t = this.links.map((m) => $s(m) || m.ownerDocument), { length: e } = t;
            if (!e || !kt(this.$el))
              return !1;
            const n = Ee(t, !0), { scrollTop: o, scrollHeight: l } = n, c = Xt(n), d = l - c.height;
            let p = !1;
            if (o >= d)
              p = e - 1;
            else {
              const m = this.offset + F(Ls()).height + c.height * 0.1;
              for (let y = 0; y < t.length && !(Z(t[y]).top - c.top - m > 0); y++)
                p = +y;
            }
            return { active: p };
          },
          write({ active: t }) {
            const e = t !== !1 && !H(this.elements[t], this.cls);
            this.links.forEach((n) => n.blur());
            for (let n = 0; n < this.elements.length; n++)
              $t(this.elements[n], this.cls, +n === t);
            e && D(this.$el, "active", [t, this.elements[t]]);
          },
          events: ["scroll", "resize"]
        }
      ]
    }, Gf = {
      mixins: [Ht, Di],
      props: {
        position: String,
        top: null,
        bottom: null,
        start: null,
        end: null,
        offset: String,
        overflowFlip: Boolean,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        showOnUp: Boolean,
        targetOffset: Number
      },
      data: {
        position: "top",
        top: !1,
        bottom: !1,
        start: !1,
        end: !1,
        offset: 0,
        overflowFlip: !1,
        animation: "",
        clsActive: "uk-active",
        clsInactive: "",
        clsFixed: "uk-sticky-fixed",
        clsBelow: "uk-sticky-below",
        selTarget: "",
        showOnUp: !1,
        targetOffset: !1
      },
      computed: {
        target: ({ selTarget: t }, e) => t && V(t, e) || e
      },
      connected() {
        this.start = rl(this.start || this.top), this.end = rl(this.end || this.bottom), this.placeholder = V("+ .uk-sticky-placeholder", this.$el) || V('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
      },
      beforeDisconnect() {
        this.isFixed && (this.hide(), st(this.target, this.clsInactive)), al(this.$el), Gt(this.placeholder), this.placeholder = null;
      },
      observe: [
        Ws(),
        Mn({ target: () => document.scrollingElement }),
        oe({
          target: ({ $el: t }) => [t, Ji(t), document.scrollingElement],
          handler(t) {
            this.$emit(
              this._data.resized && t.some(({ target: e }) => e === Ji(this.$el)) ? "update" : "resize"
            ), this._data.resized = !0;
          }
        })
      ],
      events: [
        {
          name: "load hashchange popstate",
          el: () => window,
          filter: ({ targetOffset: t }) => t !== !1,
          handler() {
            const { scrollingElement: t } = document;
            !location.hash || t.scrollTop === 0 || setTimeout(() => {
              const e = Z(V(location.hash)), n = Z(this.$el);
              this.isFixed && ui(e, n) && (t.scrollTop = Math.ceil(
                e.top - n.height - At(this.targetOffset, "height", this.placeholder) - At(this.offset, "height", this.placeholder)
              ));
            });
          }
        }
      ],
      update: [
        {
          read({ height: t, width: e, margin: n, sticky: o }, l) {
            if (this.inactive = !this.matchMedia || !kt(this.$el) || !this.$el.offsetHeight, this.inactive)
              return;
            const c = zt(window), d = Math.max(
              0,
              document.scrollingElement.scrollHeight - c
            );
            if (!d) {
              this.inactive = !0;
              return;
            }
            const p = this.isFixed && l.has("update");
            p && (po(this.target), this.hide()), this.active || ({ height: t, width: e } = F(this.$el), n = w(this.$el, "margin")), p && this.show();
            const m = At("100vh", "height");
            let y = this.position;
            this.overflowFlip && t > m && (y = y === "top" ? "bottom" : "top");
            const $ = this.isFixed ? this.placeholder : this.$el;
            let T = At(this.offset, "height", o ? this.$el : $);
            y === "bottom" && (t < c || this.overflowFlip) && (T += c - t);
            const R = this.overflowFlip ? 0 : Math.max(0, t + T - m), B = Z($).top - // offset possible `transform: translateY` animation 'uk-animation-slide-top' while hiding
            new DOMMatrix(w($, "transform")).m42, L = F(this.$el).height, Q = (this.start === !1 ? B : ho(this.start, this.$el, B)) - T, nt = this.end === !1 ? d : Math.min(
              d,
              ho(this.end, this.$el, B + t, !0) - L - T + R
            );
            return o = !this.showOnUp && Q + T === B && nt === Math.min(
              d,
              ho(!0, this.$el, 0, !0) - L - T + R
            ) && w(Ji(this.$el), "overflowY") !== "hidden", {
              start: Q,
              end: nt,
              offset: T,
              overflow: R,
              height: t,
              elHeight: L,
              width: e,
              margin: n,
              top: Fn($)[0],
              sticky: o,
              viewport: m,
              maxScrollHeight: d
            };
          },
          write({ height: t, width: e, margin: n, offset: o, sticky: l }) {
            if ((this.inactive || l || !this.isFixed) && al(this.$el), this.inactive)
              return;
            l && (t = e = n = 0, w(this.$el, { position: "sticky", top: o }));
            const { placeholder: c } = this;
            w(c, { height: t, width: e, margin: n }), (at(c) !== at(this.$el) || l ^ me(c) < me(this.$el)) && ((l ? wi : yi)(this.$el, c), c.hidden = !0);
          },
          events: ["resize"]
        },
        {
          read({
            scroll: t = 0,
            dir: e = "down",
            overflow: n,
            overflowScroll: o = 0,
            start: l,
            end: c,
            elHeight: d,
            height: p,
            sticky: m,
            maxScrollHeight: y
          }) {
            const $ = Math.min(document.scrollingElement.scrollTop, y), T = t <= $ ? "down" : "up", R = this.isFixed ? this.placeholder : this.$el;
            return {
              dir: T,
              prevDir: e,
              scroll: $,
              prevScroll: t,
              below: $ > Z(R).top + (m ? Math.min(p, d) : p),
              offsetParentTop: Z(R.offsetParent).top,
              overflowScroll: Dt(
                o + Dt($, l, c) - Dt(t, l, c),
                0,
                n
              )
            };
          },
          write(t, e) {
            const n = e.has("scroll"), {
              initTimestamp: o = 0,
              dir: l,
              prevDir: c,
              scroll: d,
              prevScroll: p = 0,
              top: m,
              start: y,
              below: $
            } = t;
            if (d < 0 || d === p && n || this.showOnUp && !n && !this.isFixed)
              return;
            const T = Date.now();
            if ((T - o > 300 || l !== c) && (t.initScroll = d, t.initTimestamp = T), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - d) <= 30 && Math.abs(p - d) <= 10))
              if (this.inactive || d < y || this.showOnUp && (d <= y || l === "down" && n || l === "up" && !this.isFixed && !$)) {
                if (!this.isFixed) {
                  ke.inProgress(this.$el) && m > d && (ke.cancel(this.$el), this.hide());
                  return;
                }
                if (this.animation && $) {
                  if (H(this.$el, "uk-animation-leave"))
                    return;
                  ke.out(this.$el, this.animation).then(() => this.hide(), ot);
                } else
                  this.hide();
              } else this.isFixed ? this.update() : this.animation && $ ? (this.show(), ke.in(this.$el, this.animation).catch(ot)) : (po(this.target), this.show());
          },
          events: ["resize", "resizeViewport", "scroll"]
        }
      ],
      methods: {
        show() {
          this.isFixed = !0, this.update(), this.placeholder.hidden = !1;
        },
        hide() {
          const { offset: t, sticky: e } = this._data;
          this.setActive(!1), st(this.$el, this.clsFixed, this.clsBelow), e ? w(this.$el, "top", t) : w(this.$el, {
            position: "",
            top: "",
            width: "",
            marginTop: ""
          }), this.placeholder.hidden = !0, this.isFixed = !1;
        },
        update() {
          let {
            width: t,
            scroll: e = 0,
            overflow: n,
            overflowScroll: o = 0,
            start: l,
            end: c,
            offset: d,
            offsetParentTop: p,
            sticky: m,
            below: y
          } = this._data;
          const $ = l !== 0 || e > l;
          if (!m) {
            let T = "fixed";
            e > c && (d += c - p + o - n, T = "absolute"), w(this.$el, { position: T, width: t, marginTop: 0 }, "important");
          }
          w(this.$el, "top", d - o), this.setActive($), $t(this.$el, this.clsBelow, y), X(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          this.active = t, t ? (di(this.target, this.clsInactive, this.clsActive), e !== t && D(this.$el, "active")) : (di(this.target, this.clsActive, this.clsInactive), e !== t && (po(this.target), D(this.$el, "inactive")));
        }
      }
    };
    function ho(t, e, n, o) {
      if (!t)
        return 0;
      if (he(t) || dt(t) && t.match(/^-?\d/))
        return n + At(t, "height", e, !0);
      {
        const l = t === !0 ? Ji(e) : Lt(t, e);
        return Z(l).bottom - (o && (l != null && l.contains(e)) ? G(w(l, "paddingBottom")) + G(w(l, "borderBottomWidth")) : 0);
      }
    }
    function rl(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function al(t) {
      w(t, { position: "", top: "", marginTop: "", width: "" });
    }
    const fo = "uk-transition-disable";
    function po(t) {
      H(t, fo) || (X(t, fo), requestAnimationFrame(() => st(t, fo)));
    }
    function Ji(t) {
      for (; t = at(t); )
        if (kt(t))
          return t;
    }
    const mo = ".uk-disabled *, .uk-disabled, [disabled]";
    var ll = {
      mixins: [ze],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        itemNav: String,
        active: Number,
        followFocus: Boolean,
        swiping: Boolean
      },
      data: {
        connect: "~.uk-switcher",
        toggle: "> * > :first-child",
        itemNav: !1,
        active: 0,
        cls: "uk-active",
        attrItem: "uk-switcher-item",
        selVertical: ".uk-nav",
        followFocus: !1,
        swiping: !0
      },
      computed: {
        connects: {
          get: ({ connect: t }, e) => Rn(t, e),
          observe: ({ connect: t }) => t
        },
        connectChildren() {
          return this.connects.map((t) => lt(t)).flat();
        },
        toggles: ({ toggle: t }, e) => ft(t, e),
        children(t, e) {
          return lt(e).filter(
            (n) => this.toggles.some((o) => n.contains(o))
          );
        }
      },
      watch: {
        connects(t) {
          this.swiping && w(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
        },
        connectChildren() {
          let t = Math.max(0, this.index());
          for (const e of this.connects)
            lt(e).forEach((n, o) => $t(n, this.cls, o === t));
          this.$emit();
        },
        toggles(t) {
          this.$emit();
          const e = this.index();
          this.show(~e ? e : t[this.active] || t[0]);
        }
      },
      connected() {
        N(this.$el, "role", "tablist");
      },
      observe: [
        Ii({ targets: ({ connectChildren: t }) => t }),
        Fr({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })
      ],
      events: [
        {
          name: "click keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            !et(t.current, mo) && (t.type === "click" || t.keyCode === rt.SPACE) && (t.preventDefault(), this.show(t.current));
          }
        },
        {
          name: "keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            const { current: e, keyCode: n } = t, o = et(this.$el, this.selVertical);
            let l = n === rt.HOME ? 0 : n === rt.END ? "last" : n === rt.LEFT && !o || n === rt.UP && o ? "previous" : n === rt.RIGHT && !o || n === rt.DOWN && o ? "next" : -1;
            if (~l) {
              t.preventDefault();
              const c = this.toggles.filter((p) => !et(p, mo)), d = c[Kt(l, c, c.indexOf(e))];
              d.focus(), this.followFocus && this.show(d);
            }
          }
        },
        {
          name: "click",
          el: ({ $el: t, connects: e, itemNav: n }) => e.concat(n ? Rn(n, t) : []),
          delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`,
          handler(t) {
            t.target.closest("a,button") && (t.preventDefault(), this.show(Rt(t.current, this.attrItem)));
          }
        },
        {
          name: "swipeRight swipeLeft",
          filter: ({ swiping: t }) => t,
          el: ({ connects: t }) => t,
          handler({ type: t }) {
            this.show(A(t, "Left") ? "next" : "previous");
          }
        }
      ],
      update() {
        var t;
        for (const e of this.connects)
          vt(e, "ul") && N(e, "role", "presentation");
        N(lt(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const n = this.toggles[e], o = (t = this.connects[0]) == null ? void 0 : t.children[e];
          N(n, "role", "tab"), o && (n.id = We(this, n), o.id = We(this, o), N(n, "aria-controls", o.id), N(o, { role: "tabpanel", "aria-labelledby": n.id }));
        }
        N(this.$el, "aria-orientation", et(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return P(this.children, (t) => H(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter((d) => !et(d, mo)), n = this.index(), o = Kt(
            !wt(t) || x(e, t) ? t : 0,
            e,
            Kt(this.toggles[n], e)
          ), l = Kt(e[o], this.toggles);
          this.children.forEach((d, p) => {
            $t(d, this.cls, l === p), N(this.toggles[p], {
              "aria-selected": l === p,
              tabindex: l === p ? null : -1
            });
          });
          const c = n >= 0 && n !== o;
          this.connects.forEach(async ({ children: d }) => {
            const p = O(d).filter(
              (m, y) => y !== l && H(m, this.cls)
            );
            await this.toggleElement(p, !1, c) && await this.toggleElement(d[l], !0, c);
          });
        }
      }
    }, Xf = {
      mixins: [Ht],
      extends: ll,
      props: {
        media: Boolean
      },
      data: {
        media: 960,
        attrItem: "uk-tab-item",
        selVertical: ".uk-tab-left,.uk-tab-right"
      },
      connected() {
        const t = H(this.$el, "uk-tab-left") ? "uk-tab-left" : H(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
        t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
      }
    };
    const Yf = 32;
    var Qf = {
      mixins: [Di, ze],
      args: "target",
      props: {
        href: String,
        target: null,
        mode: "list",
        queued: Boolean
      },
      data: {
        href: !1,
        target: !1,
        mode: "click",
        queued: !0
      },
      computed: {
        target: {
          get: ({ target: t }, e) => (t = Rn(t || e.hash, e), t.length ? t : [e]),
          observe: ({ target: t }) => t
        }
      },
      connected() {
        x(this.mode, "media") || (gi(this.$el) || N(this.$el, "tabindex", "0"), !this.cls && vt(this.$el, "a") && N(this.$el, "role", "button"));
      },
      observe: Ii({ targets: ({ target: t }) => t }),
      events: [
        {
          name: se,
          filter: ({ mode: t }) => x(t, "hover"),
          handler(t) {
            this._preventClick = null, !(!re(t) || Mt(this._showState) || this.$el.disabled) && (D(this.$el, "focus"), gt(
              document,
              se,
              () => D(this.$el, "blur"),
              !0,
              (e) => !this.$el.contains(e.target)
            ), x(this.mode, "click") && (this._preventClick = !0));
          }
        },
        {
          // mouseenter mouseleave are added because of Firefox bug,
          // where pointerleave is triggered immediately after pointerenter on scroll
          name: `mouseenter mouseleave ${De} ${rn} focus blur`,
          filter: ({ mode: t }) => x(t, "hover"),
          handler(t) {
            if (re(t) || this.$el.disabled)
              return;
            const e = x(["mouseenter", De, "focus"], t.type), n = this.isToggled(this.target);
            if (!e && (!Mt(this._showState) || t.type !== "blur" && et(this.$el, ":focus") || t.type === "blur" && et(this.$el, ":hover"))) {
              n === this._showState && (this._showState = null);
              return;
            }
            e && Mt(this._showState) && n !== this._showState || (this._showState = e ? n : null, this.toggle(`toggle${e ? "show" : "hide"}`));
          }
        },
        {
          name: "keydown",
          filter: ({ $el: t, mode: e }) => x(e, "click") && !vt(t, "input"),
          handler(t) {
            t.keyCode === Yf && (t.preventDefault(), this.$el.click());
          }
        },
        {
          name: "click",
          filter: ({ mode: t }) => ["click", "hover"].some((e) => x(t, e)),
          handler(t) {
            let e;
            (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && et(this.target, e.hash))) && t.preventDefault(), !this._preventClick && x(this.mode, "click") && this.toggle();
          }
        },
        {
          name: "mediachange",
          filter: ({ mode: t }) => x(t, "media"),
          el: ({ target: t }) => t,
          handler(t, e) {
            e.matches ^ this.isToggled(this.target) && this.toggle();
          }
        }
      ],
      methods: {
        async toggle(t) {
          if (!D(this.target, t || "toggle", [this]))
            return;
          if (we(this.$el, "aria-expanded") && N(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
            return this.toggleElement(this.target);
          const e = this.target.filter((o) => H(o, this.clsLeave));
          if (e.length) {
            for (const o of this.target) {
              const l = x(e, o);
              this.toggleElement(o, l, l);
            }
            return;
          }
          const n = this.target.filter(this.isToggled);
          await this.toggleElement(n, !1) && await this.toggleElement(
            this.target.filter((o) => !x(n, o)),
            !0
          );
        }
      }
    }, Zf = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Accordion: za,
      Alert: wd,
      Close: gf,
      Cover: kd,
      Drop: Wa,
      DropParentIcon: Je,
      Dropdown: Wa,
      Dropnav: Ja,
      FormCustom: Cd,
      Grid: Ad,
      HeightMatch: Bd,
      HeightPlaceholder: Dd,
      HeightViewport: jd,
      Icon: ro,
      Img: _f,
      Inverse: Af,
      Leader: If,
      Margin: Dr,
      Marker: vf,
      Modal: Bf,
      Nav: Ff,
      NavParentIcon: df,
      Navbar: Df,
      NavbarParentIcon: Je,
      NavbarToggleIcon: mf,
      Offcanvas: Lf,
      OverflowAuto: zf,
      OverlayIcon: Je,
      PaginationNext: wf,
      PaginationPrevious: yf,
      Responsive: Hf,
      Scroll: qf,
      Scrollspy: Jf,
      ScrollspyNav: Kf,
      SearchIcon: ff,
      SlidenavNext: nl,
      SlidenavPrevious: nl,
      Spinner: pf,
      Sticky: Gf,
      Svg: af,
      Switcher: ll,
      Tab: Xf,
      Toggle: Qf,
      Totop: bf,
      Video: Ha
    });
    return nn(Zf, (t, e) => Qt.component(e, t)), fd(Qt), nn(dd, (t, e) => Qt.component(e, t)), Qt;
  });
})(Hl);
var Hp = Hl.exports;
const ql = /* @__PURE__ */ zp(Hp);
function Wl(i, s) {
  return function() {
    return i.apply(s, arguments);
  };
}
const { toString: qp } = Object.prototype, { getPrototypeOf: Ho } = Object, os = /* @__PURE__ */ ((i) => (s) => {
  const a = qp.call(s);
  return i[a] || (i[a] = a.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ce = (i) => (i = i.toLowerCase(), (s) => os(s) === i), rs = (i) => (s) => typeof s === i, { isArray: $n } = Array, ni = rs("undefined");
function Wp(i) {
  return i !== null && !ni(i) && i.constructor !== null && !ni(i.constructor) && te(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const Vl = ce("ArrayBuffer");
function Vp(i) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(i) : s = i && i.buffer && Vl(i.buffer), s;
}
const Jp = rs("string"), te = rs("function"), Jl = rs("number"), as = (i) => i !== null && typeof i == "object", Kp = (i) => i === !0 || i === !1, Gi = (i) => {
  if (os(i) !== "object")
    return !1;
  const s = Ho(i);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
}, Gp = ce("Date"), Xp = ce("File"), Yp = ce("Blob"), Qp = ce("FileList"), Zp = (i) => as(i) && te(i.pipe), tm = (i) => {
  let s;
  return i && (typeof FormData == "function" && i instanceof FormData || te(i.append) && ((s = os(i)) === "formdata" || // detect form-data instance
  s === "object" && te(i.toString) && i.toString() === "[object FormData]"));
}, em = ce("URLSearchParams"), [nm, im, sm, om] = ["ReadableStream", "Request", "Response", "Headers"].map(ce), rm = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function oi(i, s, { allOwnKeys: a = !1 } = {}) {
  if (i === null || typeof i > "u")
    return;
  let r, u;
  if (typeof i != "object" && (i = [i]), $n(i))
    for (r = 0, u = i.length; r < u; r++)
      s.call(null, i[r], r, i);
  else {
    const h = a ? Object.getOwnPropertyNames(i) : Object.keys(i), f = h.length;
    let g;
    for (r = 0; r < f; r++)
      g = h[r], s.call(null, i[g], g, i);
  }
}
function Kl(i, s) {
  s = s.toLowerCase();
  const a = Object.keys(i);
  let r = a.length, u;
  for (; r-- > 0; )
    if (u = a[r], s === u.toLowerCase())
      return u;
  return null;
}
const Xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Gl = (i) => !ni(i) && i !== Xe;
function Eo() {
  const { caseless: i } = Gl(this) && this || {}, s = {}, a = (r, u) => {
    const h = i && Kl(s, u) || u;
    Gi(s[h]) && Gi(r) ? s[h] = Eo(s[h], r) : Gi(r) ? s[h] = Eo({}, r) : $n(r) ? s[h] = r.slice() : s[h] = r;
  };
  for (let r = 0, u = arguments.length; r < u; r++)
    arguments[r] && oi(arguments[r], a);
  return s;
}
const am = (i, s, a, { allOwnKeys: r } = {}) => (oi(s, (u, h) => {
  a && te(u) ? i[h] = Wl(u, a) : i[h] = u;
}, { allOwnKeys: r }), i), lm = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i), cm = (i, s, a, r) => {
  i.prototype = Object.create(s.prototype, r), i.prototype.constructor = i, Object.defineProperty(i, "super", {
    value: s.prototype
  }), a && Object.assign(i.prototype, a);
}, um = (i, s, a, r) => {
  let u, h, f;
  const g = {};
  if (s = s || {}, i == null) return s;
  do {
    for (u = Object.getOwnPropertyNames(i), h = u.length; h-- > 0; )
      f = u[h], (!r || r(f, i, s)) && !g[f] && (s[f] = i[f], g[f] = !0);
    i = a !== !1 && Ho(i);
  } while (i && (!a || a(i, s)) && i !== Object.prototype);
  return s;
}, hm = (i, s, a) => {
  i = String(i), (a === void 0 || a > i.length) && (a = i.length), a -= s.length;
  const r = i.indexOf(s, a);
  return r !== -1 && r === a;
}, dm = (i) => {
  if (!i) return null;
  if ($n(i)) return i;
  let s = i.length;
  if (!Jl(s)) return null;
  const a = new Array(s);
  for (; s-- > 0; )
    a[s] = i[s];
  return a;
}, fm = /* @__PURE__ */ ((i) => (s) => i && s instanceof i)(typeof Uint8Array < "u" && Ho(Uint8Array)), pm = (i, s) => {
  const a = (i && i[Symbol.iterator]).call(i);
  let r;
  for (; (r = a.next()) && !r.done; ) {
    const u = r.value;
    s.call(i, u[0], u[1]);
  }
}, mm = (i, s) => {
  let a;
  const r = [];
  for (; (a = i.exec(s)) !== null; )
    r.push(a);
  return r;
}, gm = ce("HTMLFormElement"), vm = (i) => i.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, a, r) {
    return a.toUpperCase() + r;
  }
), fl = (({ hasOwnProperty: i }) => (s, a) => i.call(s, a))(Object.prototype), bm = ce("RegExp"), Xl = (i, s) => {
  const a = Object.getOwnPropertyDescriptors(i), r = {};
  oi(a, (u, h) => {
    let f;
    (f = s(u, h, i)) !== !1 && (r[h] = f || u);
  }), Object.defineProperties(i, r);
}, wm = (i) => {
  Xl(i, (s, a) => {
    if (te(i) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
      return !1;
    const r = i[a];
    if (te(r)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + a + "'");
      });
    }
  });
}, ym = (i, s) => {
  const a = {}, r = (u) => {
    u.forEach((h) => {
      a[h] = !0;
    });
  };
  return $n(i) ? r(i) : r(String(i).split(s)), a;
}, $m = () => {
}, km = (i, s) => i != null && Number.isFinite(i = +i) ? i : s, vo = "abcdefghijklmnopqrstuvwxyz", pl = "0123456789", Yl = {
  DIGIT: pl,
  ALPHA: vo,
  ALPHA_DIGIT: vo + vo.toUpperCase() + pl
}, xm = (i = 16, s = Yl.ALPHA_DIGIT) => {
  let a = "";
  const { length: r } = s;
  for (; i--; )
    a += s[Math.random() * r | 0];
  return a;
};
function Sm(i) {
  return !!(i && te(i.append) && i[Symbol.toStringTag] === "FormData" && i[Symbol.iterator]);
}
const _m = (i) => {
  const s = new Array(10), a = (r, u) => {
    if (as(r)) {
      if (s.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        s[u] = r;
        const h = $n(r) ? [] : {};
        return oi(r, (f, g) => {
          const k = a(f, u + 1);
          !ni(k) && (h[g] = k);
        }), s[u] = void 0, h;
      }
    }
    return r;
  };
  return a(i, 0);
}, Em = ce("AsyncFunction"), Tm = (i) => i && (as(i) || te(i)) && te(i.then) && te(i.catch), Ql = ((i, s) => i ? setImmediate : s ? ((a, r) => (Xe.addEventListener("message", ({ source: u, data: h }) => {
  u === Xe && h === a && r.length && r.shift()();
}, !1), (u) => {
  r.push(u), Xe.postMessage(a, "*");
}))(`axios@${Math.random()}`, []) : (a) => setTimeout(a))(
  typeof setImmediate == "function",
  te(Xe.postMessage)
), Om = typeof queueMicrotask < "u" ? queueMicrotask.bind(Xe) : typeof process < "u" && process.nextTick || Ql, _ = {
  isArray: $n,
  isArrayBuffer: Vl,
  isBuffer: Wp,
  isFormData: tm,
  isArrayBufferView: Vp,
  isString: Jp,
  isNumber: Jl,
  isBoolean: Kp,
  isObject: as,
  isPlainObject: Gi,
  isReadableStream: nm,
  isRequest: im,
  isResponse: sm,
  isHeaders: om,
  isUndefined: ni,
  isDate: Gp,
  isFile: Xp,
  isBlob: Yp,
  isRegExp: bm,
  isFunction: te,
  isStream: Zp,
  isURLSearchParams: em,
  isTypedArray: fm,
  isFileList: Qp,
  forEach: oi,
  merge: Eo,
  extend: am,
  trim: rm,
  stripBOM: lm,
  inherits: cm,
  toFlatObject: um,
  kindOf: os,
  kindOfTest: ce,
  endsWith: hm,
  toArray: dm,
  forEachEntry: pm,
  matchAll: mm,
  isHTMLForm: gm,
  hasOwnProperty: fl,
  hasOwnProp: fl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xl,
  freezeMethods: wm,
  toObjectSet: ym,
  toCamelCase: vm,
  noop: $m,
  toFiniteNumber: km,
  findKey: Kl,
  global: Xe,
  isContextDefined: Gl,
  ALPHABET: Yl,
  generateString: xm,
  isSpecCompliantForm: Sm,
  toJSONObject: _m,
  isAsyncFn: Em,
  isThenable: Tm,
  setImmediate: Ql,
  asap: Om
};
function J(i, s, a, r, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = i, this.name = "AxiosError", s && (this.code = s), a && (this.config = a), r && (this.request = r), u && (this.response = u, this.status = u.status ? u.status : null);
}
_.inherits(J, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Zl = J.prototype, tc = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((i) => {
  tc[i] = { value: i };
});
Object.defineProperties(J, tc);
Object.defineProperty(Zl, "isAxiosError", { value: !0 });
J.from = (i, s, a, r, u, h) => {
  const f = Object.create(Zl);
  return _.toFlatObject(i, f, function(g) {
    return g !== Error.prototype;
  }, (g) => g !== "isAxiosError"), J.call(f, i.message, s, a, r, u), f.cause = i, f.name = i.name, h && Object.assign(f, h), f;
};
const Cm = null;
function To(i) {
  return _.isPlainObject(i) || _.isArray(i);
}
function ec(i) {
  return _.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function ml(i, s, a) {
  return i ? i.concat(s).map(function(r, u) {
    return r = ec(r), !a && u ? "[" + r + "]" : r;
  }).join(a ? "." : "") : s;
}
function Am(i) {
  return _.isArray(i) && !i.some(To);
}
const Pm = _.toFlatObject(_, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function ls(i, s, a) {
  if (!_.isObject(i))
    throw new TypeError("target must be an object");
  s = s || new FormData(), a = _.toFlatObject(a, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, C) {
    return !_.isUndefined(C[P]);
  });
  const r = a.metaTokens, u = a.visitor || b, h = a.dots, f = a.indexes, g = (a.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(s);
  if (!_.isFunction(u))
    throw new TypeError("visitor must be a function");
  function k(P) {
    if (P === null) return "";
    if (_.isDate(P))
      return P.toISOString();
    if (!g && _.isBlob(P))
      throw new J("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(P) || _.isTypedArray(P) ? g && typeof Blob == "function" ? new Blob([P]) : Buffer.from(P) : P;
  }
  function b(P, C, O) {
    let U = P;
    if (P && !O && typeof P == "object") {
      if (_.endsWith(C, "{}"))
        C = r ? C : C.slice(0, -2), P = JSON.stringify(P);
      else if (_.isArray(P) && Am(P) || (_.isFileList(P) || _.endsWith(C, "[]")) && (U = _.toArray(P)))
        return C = ec(C), U.forEach(function(q, z) {
          !(_.isUndefined(q) || q === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? ml([C], z, h) : f === null ? C : C + "[]",
            k(q)
          );
        }), !1;
    }
    return To(P) ? !0 : (s.append(ml(O, C, h), k(P)), !1);
  }
  const v = [], A = Object.assign(Pm, {
    defaultVisitor: b,
    convertValue: k,
    isVisitable: To
  });
  function x(P, C) {
    if (!_.isUndefined(P)) {
      if (v.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      v.push(P), _.forEach(P, function(O, U) {
        (!(_.isUndefined(O) || O === null) && u.call(
          s,
          O,
          _.isString(U) ? U.trim() : U,
          C,
          A
        )) === !0 && x(O, C ? C.concat(U) : [U]);
      }), v.pop();
    }
  }
  if (!_.isObject(i))
    throw new TypeError("data must be an object");
  return x(i), s;
}
function gl(i) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function(a) {
    return s[a];
  });
}
function qo(i, s) {
  this._pairs = [], i && ls(i, this, s);
}
const nc = qo.prototype;
nc.append = function(i, s) {
  this._pairs.push([i, s]);
};
nc.toString = function(i) {
  const s = i ? function(a) {
    return i.call(this, a, gl);
  } : gl;
  return this._pairs.map(function(a) {
    return s(a[0]) + "=" + s(a[1]);
  }, "").join("&");
};
function Rm(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ic(i, s, a) {
  if (!s)
    return i;
  const r = a && a.encode || Rm, u = a && a.serialize;
  let h;
  if (u ? h = u(s, a) : h = _.isURLSearchParams(s) ? s.toString() : new qo(s, a).toString(r), h) {
    const f = i.indexOf("#");
    f !== -1 && (i = i.slice(0, f)), i += (i.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return i;
}
let vl = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(s, a, r) {
    return this.handlers.push({
      fulfilled: s,
      rejected: a,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(s) {
    this.handlers[s] && (this.handlers[s] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(s) {
    _.forEach(this.handlers, function(a) {
      a !== null && s(a);
    });
  }
};
const sc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Im = typeof URLSearchParams < "u" ? URLSearchParams : qo, Bm = typeof FormData < "u" ? FormData : null, Nm = typeof Blob < "u" ? Blob : null, Fm = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Im,
    FormData: Bm,
    Blob: Nm
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Wo = typeof window < "u" && typeof document < "u", Oo = typeof navigator == "object" && navigator || void 0, Dm = Wo && (!Oo || ["ReactNative", "NativeScript", "NS"].indexOf(Oo.product) < 0), jm = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Lm = Wo && window.location.href || "http://localhost", Um = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Wo,
  hasStandardBrowserEnv: Dm,
  hasStandardBrowserWebWorkerEnv: jm,
  navigator: Oo,
  origin: Lm
}, Symbol.toStringTag, { value: "Module" })), Wt = {
  ...Um,
  ...Fm
};
function Mm(i, s) {
  return ls(i, new Wt.classes.URLSearchParams(), Object.assign({
    visitor: function(a, r, u, h) {
      return Wt.isNode && _.isBuffer(a) ? (this.append(r, a.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function zm(i) {
  return _.matchAll(/\w+|\[(\w*)]/g, i).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function Hm(i) {
  const s = {}, a = Object.keys(i);
  let r;
  const u = a.length;
  let h;
  for (r = 0; r < u; r++)
    h = a[r], s[h] = i[h];
  return s;
}
function oc(i) {
  function s(a, r, u, h) {
    let f = a[h++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f), k = h >= a.length;
    return f = !f && _.isArray(u) ? u.length : f, k ? (_.hasOwnProp(u, f) ? u[f] = [u[f], r] : u[f] = r, !g) : ((!u[f] || !_.isObject(u[f])) && (u[f] = []), s(a, r, u[f], h) && _.isArray(u[f]) && (u[f] = Hm(u[f])), !g);
  }
  if (_.isFormData(i) && _.isFunction(i.entries)) {
    const a = {};
    return _.forEachEntry(i, (r, u) => {
      s(zm(r), u, a, 0);
    }), a;
  }
  return null;
}
function qm(i, s, a) {
  if (_.isString(i))
    try {
      return (s || JSON.parse)(i), _.trim(i);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(i);
}
const ri = {
  transitional: sc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, s) {
    const a = s.getContentType() || "", r = a.indexOf("application/json") > -1, u = _.isObject(i);
    if (u && _.isHTMLForm(i) && (i = new FormData(i)), _.isFormData(i))
      return r ? JSON.stringify(oc(i)) : i;
    if (_.isArrayBuffer(i) || _.isBuffer(i) || _.isStream(i) || _.isFile(i) || _.isBlob(i) || _.isReadableStream(i))
      return i;
    if (_.isArrayBufferView(i))
      return i.buffer;
    if (_.isURLSearchParams(i))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let h;
    if (u) {
      if (a.indexOf("application/x-www-form-urlencoded") > -1)
        return Mm(i, this.formSerializer).toString();
      if ((h = _.isFileList(i)) || a.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ls(
          h ? { "files[]": i } : i,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return u || r ? (s.setContentType("application/json", !1), qm(i)) : i;
  }],
  transformResponse: [function(i) {
    const s = this.transitional || ri.transitional, a = s && s.forcedJSONParsing, r = this.responseType === "json";
    if (_.isResponse(i) || _.isReadableStream(i))
      return i;
    if (i && _.isString(i) && (a && !this.responseType || r)) {
      const u = !(s && s.silentJSONParsing) && r;
      try {
        return JSON.parse(i);
      } catch (h) {
        if (u)
          throw h.name === "SyntaxError" ? J.from(h, J.ERR_BAD_RESPONSE, this, null, this.response) : h;
      }
    }
    return i;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Wt.classes.FormData,
    Blob: Wt.classes.Blob
  },
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
_.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  ri.headers[i] = {};
});
const Wm = _.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Vm = (i) => {
  const s = {};
  let a, r, u;
  return i && i.split(`
`).forEach(function(h) {
    u = h.indexOf(":"), a = h.substring(0, u).trim().toLowerCase(), r = h.substring(u + 1).trim(), !(!a || s[a] && Wm[a]) && (a === "set-cookie" ? s[a] ? s[a].push(r) : s[a] = [r] : s[a] = s[a] ? s[a] + ", " + r : r);
  }), s;
}, bl = Symbol("internals");
function Zn(i) {
  return i && String(i).trim().toLowerCase();
}
function Xi(i) {
  return i === !1 || i == null ? i : _.isArray(i) ? i.map(Xi) : String(i);
}
function Jm(i) {
  const s = /* @__PURE__ */ Object.create(null), a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = a.exec(i); )
    s[r[1]] = r[2];
  return s;
}
const Km = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function bo(i, s, a, r, u) {
  if (_.isFunction(r))
    return r.call(this, s, a);
  if (u && (s = a), !!_.isString(s)) {
    if (_.isString(r))
      return s.indexOf(r) !== -1;
    if (_.isRegExp(r))
      return r.test(s);
  }
}
function Gm(i) {
  return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, a, r) => a.toUpperCase() + r);
}
function Xm(i, s) {
  const a = _.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(i, r + a, {
      value: function(u, h, f) {
        return this[r].call(this, s, u, h, f);
      },
      configurable: !0
    });
  });
}
let Vt = class {
  constructor(s) {
    s && this.set(s);
  }
  set(s, a, r) {
    const u = this;
    function h(g, k, b) {
      const v = Zn(k);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const A = _.findKey(u, v);
      (!A || u[A] === void 0 || b === !0 || b === void 0 && u[A] !== !1) && (u[A || k] = Xi(g));
    }
    const f = (g, k) => _.forEach(g, (b, v) => h(b, v, k));
    if (_.isPlainObject(s) || s instanceof this.constructor)
      f(s, a);
    else if (_.isString(s) && (s = s.trim()) && !Km(s))
      f(Vm(s), a);
    else if (_.isHeaders(s))
      for (const [g, k] of s.entries())
        h(k, g, r);
    else
      s != null && h(a, s, r);
    return this;
  }
  get(s, a) {
    if (s = Zn(s), s) {
      const r = _.findKey(this, s);
      if (r) {
        const u = this[r];
        if (!a)
          return u;
        if (a === !0)
          return Jm(u);
        if (_.isFunction(a))
          return a.call(this, u, r);
        if (_.isRegExp(a))
          return a.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, a) {
    if (s = Zn(s), s) {
      const r = _.findKey(this, s);
      return !!(r && this[r] !== void 0 && (!a || bo(this, this[r], r, a)));
    }
    return !1;
  }
  delete(s, a) {
    const r = this;
    let u = !1;
    function h(f) {
      if (f = Zn(f), f) {
        const g = _.findKey(r, f);
        g && (!a || bo(r, r[g], g, a)) && (delete r[g], u = !0);
      }
    }
    return _.isArray(s) ? s.forEach(h) : h(s), u;
  }
  clear(s) {
    const a = Object.keys(this);
    let r = a.length, u = !1;
    for (; r--; ) {
      const h = a[r];
      (!s || bo(this, this[h], h, s, !0)) && (delete this[h], u = !0);
    }
    return u;
  }
  normalize(s) {
    const a = this, r = {};
    return _.forEach(this, (u, h) => {
      const f = _.findKey(r, h);
      if (f) {
        a[f] = Xi(u), delete a[h];
        return;
      }
      const g = s ? Gm(h) : String(h).trim();
      g !== h && delete a[h], a[g] = Xi(u), r[g] = !0;
    }), this;
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const a = /* @__PURE__ */ Object.create(null);
    return _.forEach(this, (r, u) => {
      r != null && r !== !1 && (a[u] = s && _.isArray(r) ? r.join(", ") : r);
    }), a;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, a]) => s + ": " + a).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...a) {
    const r = new this(s);
    return a.forEach((u) => r.set(u)), r;
  }
  static accessor(s) {
    const a = (this[bl] = this[bl] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function u(h) {
      const f = Zn(h);
      a[f] || (Xm(r, h), a[f] = !0);
    }
    return _.isArray(s) ? s.forEach(u) : u(s), this;
  }
};
Vt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(Vt.prototype, ({ value: i }, s) => {
  let a = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => i,
    set(r) {
      this[a] = r;
    }
  };
});
_.freezeMethods(Vt);
function wo(i, s) {
  const a = this || ri, r = s || a, u = Vt.from(r.headers);
  let h = r.data;
  return _.forEach(i, function(f) {
    h = f.call(a, h, u.normalize(), s ? s.status : void 0);
  }), u.normalize(), h;
}
function rc(i) {
  return !!(i && i.__CANCEL__);
}
function kn(i, s, a) {
  J.call(this, i ?? "canceled", J.ERR_CANCELED, s, a), this.name = "CanceledError";
}
_.inherits(kn, J, {
  __CANCEL__: !0
});
function ac(i, s, a) {
  const r = a.config.validateStatus;
  !a.status || !r || r(a.status) ? i(a) : s(new J(
    "Request failed with status code " + a.status,
    [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
    a.config,
    a.request,
    a
  ));
}
function Ym(i) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return s && s[1] || "";
}
function Qm(i, s) {
  i = i || 10;
  const a = new Array(i), r = new Array(i);
  let u = 0, h = 0, f;
  return s = s !== void 0 ? s : 1e3, function(g) {
    const k = Date.now(), b = r[h];
    f || (f = k), a[u] = g, r[u] = k;
    let v = h, A = 0;
    for (; v !== u; )
      A += a[v++], v = v % i;
    if (u = (u + 1) % i, u === h && (h = (h + 1) % i), k - f < s)
      return;
    const x = b && k - b;
    return x ? Math.round(A * 1e3 / x) : void 0;
  };
}
function Zm(i, s) {
  let a = 0, r = 1e3 / s, u, h;
  const f = (g, k = Date.now()) => {
    a = k, u = null, h && (clearTimeout(h), h = null), i.apply(null, g);
  };
  return [(...g) => {
    const k = Date.now(), b = k - a;
    b >= r ? f(g, k) : (u = g, h || (h = setTimeout(() => {
      h = null, f(u);
    }, r - b)));
  }, () => u && f(u)];
}
const ts = (i, s, a = 3) => {
  let r = 0;
  const u = Qm(50, 250);
  return Zm((h) => {
    const f = h.loaded, g = h.lengthComputable ? h.total : void 0, k = f - r, b = u(k), v = f <= g;
    r = f;
    const A = {
      loaded: f,
      total: g,
      progress: g ? f / g : void 0,
      bytes: k,
      rate: b || void 0,
      estimated: b && g && v ? (g - f) / b : void 0,
      event: h,
      lengthComputable: g != null,
      [s ? "download" : "upload"]: !0
    };
    i(A);
  }, a);
}, wl = (i, s) => {
  const a = i != null;
  return [(r) => s[0]({
    lengthComputable: a,
    total: i,
    loaded: r
  }), s[1]];
}, yl = (i) => (...s) => _.asap(() => i(...s)), tg = Wt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const i = Wt.navigator && /(msie|trident)/i.test(Wt.navigator.userAgent), s = document.createElement("a");
    let a;
    function r(u) {
      let h = u;
      return i && (s.setAttribute("href", h), h = s.href), s.setAttribute("href", h), {
        href: s.href,
        protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
        host: s.host,
        search: s.search ? s.search.replace(/^\?/, "") : "",
        hash: s.hash ? s.hash.replace(/^#/, "") : "",
        hostname: s.hostname,
        port: s.port,
        pathname: s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname
      };
    }
    return a = r(window.location.href), function(u) {
      const h = _.isString(u) ? r(u) : u;
      return h.protocol === a.protocol && h.host === a.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), eg = Wt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(i, s, a, r, u, h) {
      const f = [i + "=" + encodeURIComponent(s)];
      _.isNumber(a) && f.push("expires=" + new Date(a).toGMTString()), _.isString(r) && f.push("path=" + r), _.isString(u) && f.push("domain=" + u), h === !0 && f.push("secure"), document.cookie = f.join("; ");
    },
    read(i) {
      const s = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
      return s ? decodeURIComponent(s[3]) : null;
    },
    remove(i) {
      this.write(i, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ng(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function ig(i, s) {
  return s ? i.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : i;
}
function lc(i, s) {
  return i && !ng(s) ? ig(i, s) : s;
}
const $l = (i) => i instanceof Vt ? { ...i } : i;
function tn(i, s) {
  s = s || {};
  const a = {};
  function r(b, v, A) {
    return _.isPlainObject(b) && _.isPlainObject(v) ? _.merge.call({ caseless: A }, b, v) : _.isPlainObject(v) ? _.merge({}, v) : _.isArray(v) ? v.slice() : v;
  }
  function u(b, v, A) {
    if (_.isUndefined(v)) {
      if (!_.isUndefined(b))
        return r(void 0, b, A);
    } else return r(b, v, A);
  }
  function h(b, v) {
    if (!_.isUndefined(v))
      return r(void 0, v);
  }
  function f(b, v) {
    if (_.isUndefined(v)) {
      if (!_.isUndefined(b))
        return r(void 0, b);
    } else return r(void 0, v);
  }
  function g(b, v, A) {
    if (A in s)
      return r(b, v);
    if (A in i)
      return r(void 0, b);
  }
  const k = {
    url: h,
    method: h,
    data: h,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: g,
    headers: (b, v) => u($l(b), $l(v), !0)
  };
  return _.forEach(Object.keys(Object.assign({}, i, s)), function(b) {
    const v = k[b] || u, A = v(i[b], s[b], b);
    _.isUndefined(A) && v !== g || (a[b] = A);
  }), a;
}
const cc = (i) => {
  const s = tn({}, i);
  let { data: a, withXSRFToken: r, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = s;
  s.headers = f = Vt.from(f), s.url = ic(lc(s.baseURL, s.url), i.params, i.paramsSerializer), g && f.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let k;
  if (_.isFormData(a)) {
    if (Wt.hasStandardBrowserEnv || Wt.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if ((k = f.getContentType()) !== !1) {
      const [b, ...v] = k ? k.split(";").map((A) => A.trim()).filter(Boolean) : [];
      f.setContentType([b || "multipart/form-data", ...v].join("; "));
    }
  }
  if (Wt.hasStandardBrowserEnv && (r && _.isFunction(r) && (r = r(s)), r || r !== !1 && tg(s.url))) {
    const b = u && h && eg.read(h);
    b && f.set(u, b);
  }
  return s;
}, sg = typeof XMLHttpRequest < "u", og = sg && function(i) {
  return new Promise(function(s, a) {
    const r = cc(i);
    let u = r.data;
    const h = Vt.from(r.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: k } = r, b, v, A, x, P;
    function C() {
      x && x(), P && P(), r.cancelToken && r.cancelToken.unsubscribe(b), r.signal && r.signal.removeEventListener("abort", b);
    }
    let O = new XMLHttpRequest();
    O.open(r.method.toUpperCase(), r.url, !0), O.timeout = r.timeout;
    function U() {
      if (!O)
        return;
      const z = Vt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), Y = {
        data: !f || f === "text" || f === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: z,
        config: i,
        request: O
      };
      ac(function(Ct) {
        s(Ct), C();
      }, function(Ct) {
        a(Ct), C();
      }, Y), O = null;
    }
    "onloadend" in O ? O.onloadend = U : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(U);
    }, O.onabort = function() {
      O && (a(new J("Request aborted", J.ECONNABORTED, i, O)), O = null);
    }, O.onerror = function() {
      a(new J("Network Error", J.ERR_NETWORK, i, O)), O = null;
    }, O.ontimeout = function() {
      let z = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const Y = r.transitional || sc;
      r.timeoutErrorMessage && (z = r.timeoutErrorMessage), a(new J(
        z,
        Y.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
        i,
        O
      )), O = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in O && _.forEach(h.toJSON(), function(z, Y) {
      O.setRequestHeader(Y, z);
    }), _.isUndefined(r.withCredentials) || (O.withCredentials = !!r.withCredentials), f && f !== "json" && (O.responseType = r.responseType), k && ([A, P] = ts(k, !0), O.addEventListener("progress", A)), g && O.upload && ([v, x] = ts(g), O.upload.addEventListener("progress", v), O.upload.addEventListener("loadend", x)), (r.cancelToken || r.signal) && (b = (z) => {
      O && (a(!z || z.type ? new kn(null, i, O) : z), O.abort(), O = null);
    }, r.cancelToken && r.cancelToken.subscribe(b), r.signal && (r.signal.aborted ? b() : r.signal.addEventListener("abort", b)));
    const q = Ym(r.url);
    if (q && Wt.protocols.indexOf(q) === -1) {
      a(new J("Unsupported protocol " + q + ":", J.ERR_BAD_REQUEST, i));
      return;
    }
    O.send(u || null);
  });
}, rg = (i, s) => {
  const { length: a } = i = i ? i.filter(Boolean) : [];
  if (s || a) {
    let r = new AbortController(), u;
    const h = function(b) {
      if (!u) {
        u = !0, g();
        const v = b instanceof Error ? b : this.reason;
        r.abort(v instanceof J ? v : new kn(v instanceof Error ? v.message : v));
      }
    };
    let f = s && setTimeout(() => {
      f = null, h(new J(`timeout ${s} of ms exceeded`, J.ETIMEDOUT));
    }, s);
    const g = () => {
      i && (f && clearTimeout(f), f = null, i.forEach((b) => {
        b.unsubscribe ? b.unsubscribe(h) : b.removeEventListener("abort", h);
      }), i = null);
    };
    i.forEach((b) => b.addEventListener("abort", h));
    const { signal: k } = r;
    return k.unsubscribe = () => _.asap(g), k;
  }
}, ag = function* (i, s) {
  let a = i.byteLength;
  if (a < s) {
    yield i;
    return;
  }
  let r = 0, u;
  for (; r < a; )
    u = r + s, yield i.slice(r, u), r = u;
}, lg = async function* (i, s) {
  for await (const a of cg(i))
    yield* ag(a, s);
}, cg = async function* (i) {
  if (i[Symbol.asyncIterator]) {
    yield* i;
    return;
  }
  const s = i.getReader();
  try {
    for (; ; ) {
      const { done: a, value: r } = await s.read();
      if (a)
        break;
      yield r;
    }
  } finally {
    await s.cancel();
  }
}, kl = (i, s, a, r) => {
  const u = lg(i, s);
  let h = 0, f, g = (k) => {
    f || (f = !0, r && r(k));
  };
  return new ReadableStream({
    async pull(k) {
      try {
        const { done: b, value: v } = await u.next();
        if (b) {
          g(), k.close();
          return;
        }
        let A = v.byteLength;
        if (a) {
          let x = h += A;
          a(x);
        }
        k.enqueue(new Uint8Array(v));
      } catch (b) {
        throw g(b), b;
      }
    },
    cancel(k) {
      return g(k), u.return();
    }
  }, {
    highWaterMark: 2
  });
}, cs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", uc = cs && typeof ReadableStream == "function", ug = cs && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((i) => (s) => i.encode(s))(new TextEncoder()) : async (i) => new Uint8Array(await new Response(i).arrayBuffer())), hc = (i, ...s) => {
  try {
    return !!i(...s);
  } catch {
    return !1;
  }
}, hg = uc && hc(() => {
  let i = !1;
  const s = new Request(Wt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return i = !0, "half";
    }
  }).headers.has("Content-Type");
  return i && !s;
}), xl = 64 * 1024, Co = uc && hc(() => _.isReadableStream(new Response("").body)), es = {
  stream: Co && ((i) => i.body)
};
cs && ((i) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !es[s] && (es[s] = _.isFunction(i[s]) ? (a) => a[s]() : (a, r) => {
      throw new J(`Response type '${s}' is not supported`, J.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const dg = async (i) => {
  if (i == null)
    return 0;
  if (_.isBlob(i))
    return i.size;
  if (_.isSpecCompliantForm(i))
    return (await new Request(Wt.origin, {
      method: "POST",
      body: i
    }).arrayBuffer()).byteLength;
  if (_.isArrayBufferView(i) || _.isArrayBuffer(i))
    return i.byteLength;
  if (_.isURLSearchParams(i) && (i = i + ""), _.isString(i))
    return (await ug(i)).byteLength;
}, fg = async (i, s) => _.toFiniteNumber(i.getContentLength()) ?? dg(s), pg = cs && (async (i) => {
  let {
    url: s,
    method: a,
    data: r,
    signal: u,
    cancelToken: h,
    timeout: f,
    onDownloadProgress: g,
    onUploadProgress: k,
    responseType: b,
    headers: v,
    withCredentials: A = "same-origin",
    fetchOptions: x
  } = cc(i);
  b = b ? (b + "").toLowerCase() : "text";
  let P = rg([u, h && h.toAbortSignal()], f), C;
  const O = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let U;
  try {
    if (k && hg && a !== "get" && a !== "head" && (U = await fg(v, r)) !== 0) {
      let Nt = new Request(s, {
        method: "POST",
        body: r,
        duplex: "half"
      }), wt;
      if (_.isFormData(r) && (wt = Nt.headers.get("content-type")) && v.setContentType(wt), Nt.body) {
        const [Ft, ne] = wl(
          U,
          ts(yl(k))
        );
        r = kl(Nt.body, xl, Ft, ne);
      }
    }
    _.isString(A) || (A = A ? "include" : "omit");
    const q = "credentials" in Request.prototype;
    C = new Request(s, {
      ...x,
      signal: P,
      method: a.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: q ? A : void 0
    });
    let z = await fetch(C);
    const Y = Co && (b === "stream" || b === "response");
    if (Co && (g || Y && O)) {
      const Nt = {};
      ["status", "statusText", "headers"].forEach((Mt) => {
        Nt[Mt] = z[Mt];
      });
      const wt = _.toFiniteNumber(z.headers.get("content-length")), [Ft, ne] = g && wl(
        wt,
        ts(yl(g), !0)
      ) || [];
      z = new Response(
        kl(z.body, xl, Ft, () => {
          ne && ne(), O && O();
        }),
        Nt
      );
    }
    b = b || "text";
    let Ct = await es[_.findKey(es, b) || "text"](z, i);
    return !Y && O && O(), await new Promise((Nt, wt) => {
      ac(Nt, wt, {
        data: Ct,
        headers: Vt.from(z.headers),
        status: z.status,
        statusText: z.statusText,
        config: i,
        request: C
      });
    });
  } catch (q) {
    throw O && O(), q && q.name === "TypeError" && /fetch/i.test(q.message) ? Object.assign(
      new J("Network Error", J.ERR_NETWORK, i, C),
      {
        cause: q.cause || q
      }
    ) : J.from(q, q && q.code, i, C);
  }
}), Ao = {
  http: Cm,
  xhr: og,
  fetch: pg
};
_.forEach(Ao, (i, s) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: s });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: s });
  }
});
const Sl = (i) => `- ${i}`, mg = (i) => _.isFunction(i) || i === null || i === !1, dc = {
  getAdapter: (i) => {
    i = _.isArray(i) ? i : [i];
    const { length: s } = i;
    let a, r;
    const u = {};
    for (let h = 0; h < s; h++) {
      a = i[h];
      let f;
      if (r = a, !mg(a) && (r = Ao[(f = String(a)).toLowerCase()], r === void 0))
        throw new J(`Unknown adapter '${f}'`);
      if (r)
        break;
      u[f || "#" + h] = r;
    }
    if (!r) {
      const h = Object.entries(u).map(
        ([g, k]) => `adapter ${g} ` + (k === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let f = s ? h.length > 1 ? `since :
` + h.map(Sl).join(`
`) : " " + Sl(h[0]) : "as no adapter specified";
      throw new J(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ao
};
function yo(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new kn(null, i);
}
function _l(i) {
  return yo(i), i.headers = Vt.from(i.headers), i.data = wo.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), dc.getAdapter(i.adapter || ri.adapter)(i).then(function(s) {
    return yo(i), s.data = wo.call(
      i,
      i.transformResponse,
      s
    ), s.headers = Vt.from(s.headers), s;
  }, function(s) {
    return rc(s) || (yo(i), s && s.response && (s.response.data = wo.call(
      i,
      i.transformResponse,
      s.response
    ), s.response.headers = Vt.from(s.response.headers))), Promise.reject(s);
  });
}
const fc = "1.7.7", Vo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, s) => {
  Vo[i] = function(a) {
    return typeof a === i || "a" + (s < 1 ? "n " : " ") + i;
  };
});
const El = {};
Vo.transitional = function(i, s, a) {
  function r(u, h) {
    return "[Axios v" + fc + "] Transitional option '" + u + "'" + h + (a ? ". " + a : "");
  }
  return (u, h, f) => {
    if (i === !1)
      throw new J(
        r(h, " has been removed" + (s ? " in " + s : "")),
        J.ERR_DEPRECATED
      );
    return s && !El[h] && (El[h] = !0, console.warn(
      r(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), i ? i(u, h, f) : !0;
  };
};
function gg(i, s, a) {
  if (typeof i != "object")
    throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(i);
  let u = r.length;
  for (; u-- > 0; ) {
    const h = r[u], f = s[h];
    if (f) {
      const g = i[h], k = g === void 0 || f(g, h, i);
      if (k !== !0)
        throw new J("option " + h + " must be " + k, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0)
      throw new J("Unknown option " + h, J.ERR_BAD_OPTION);
  }
}
const Po = {
  assertOptions: gg,
  validators: Vo
}, Te = Po.validators;
let Qe = class {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new vl(),
      response: new vl()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(s, a) {
    try {
      return await this._request(s, a);
    } catch (r) {
      if (r instanceof Error) {
        let u;
        Error.captureStackTrace ? Error.captureStackTrace(u = {}) : u = new Error();
        const h = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? h && !String(r.stack).endsWith(h.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + h) : r.stack = h;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(s, a) {
    typeof s == "string" ? (a = a || {}, a.url = s) : a = s || {}, a = tn(this.defaults, a);
    const { transitional: r, paramsSerializer: u, headers: h } = a;
    r !== void 0 && Po.assertOptions(r, {
      silentJSONParsing: Te.transitional(Te.boolean),
      forcedJSONParsing: Te.transitional(Te.boolean),
      clarifyTimeoutError: Te.transitional(Te.boolean)
    }, !1), u != null && (_.isFunction(u) ? a.paramsSerializer = {
      serialize: u
    } : Po.assertOptions(u, {
      encode: Te.function,
      serialize: Te.function
    }, !0)), a.method = (a.method || this.defaults.method || "get").toLowerCase();
    let f = h && _.merge(
      h.common,
      h[a.method]
    );
    h && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete h[C];
      }
    ), a.headers = Vt.concat(f, h);
    const g = [];
    let k = !0;
    this.interceptors.request.forEach(function(C) {
      typeof C.runWhen == "function" && C.runWhen(a) === !1 || (k = k && C.synchronous, g.unshift(C.fulfilled, C.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(C) {
      b.push(C.fulfilled, C.rejected);
    });
    let v, A = 0, x;
    if (!k) {
      const C = [_l.bind(this), void 0];
      for (C.unshift.apply(C, g), C.push.apply(C, b), x = C.length, v = Promise.resolve(a); A < x; )
        v = v.then(C[A++], C[A++]);
      return v;
    }
    x = g.length;
    let P = a;
    for (A = 0; A < x; ) {
      const C = g[A++], O = g[A++];
      try {
        P = C(P);
      } catch (U) {
        O.call(this, U);
        break;
      }
    }
    try {
      v = _l.call(this, P);
    } catch (C) {
      return Promise.reject(C);
    }
    for (A = 0, x = b.length; A < x; )
      v = v.then(b[A++], b[A++]);
    return v;
  }
  getUri(s) {
    s = tn(this.defaults, s);
    const a = lc(s.baseURL, s.url);
    return ic(a, s.params, s.paramsSerializer);
  }
};
_.forEach(["delete", "get", "head", "options"], function(i) {
  Qe.prototype[i] = function(s, a) {
    return this.request(tn(a || {}, {
      method: i,
      url: s,
      data: (a || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(i) {
  function s(a) {
    return function(r, u, h) {
      return this.request(tn(h || {}, {
        method: i,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: u
      }));
    };
  }
  Qe.prototype[i] = s(), Qe.prototype[i + "Form"] = s(!0);
});
let vg = class pc {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let a;
    this.promise = new Promise(function(u) {
      a = u;
    });
    const r = this;
    this.promise.then((u) => {
      if (!r._listeners) return;
      let h = r._listeners.length;
      for (; h-- > 0; )
        r._listeners[h](u);
      r._listeners = null;
    }), this.promise.then = (u) => {
      let h;
      const f = new Promise((g) => {
        r.subscribe(g), h = g;
      }).then(u);
      return f.cancel = function() {
        r.unsubscribe(h);
      }, f;
    }, s(function(u, h, f) {
      r.reason || (r.reason = new kn(u, h, f), a(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(s) {
    if (!this._listeners)
      return;
    const a = this._listeners.indexOf(s);
    a !== -1 && this._listeners.splice(a, 1);
  }
  toAbortSignal() {
    const s = new AbortController(), a = (r) => {
      s.abort(r);
    };
    return this.subscribe(a), s.signal.unsubscribe = () => this.unsubscribe(a), s.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let s;
    return {
      token: new pc(function(a) {
        s = a;
      }),
      cancel: s
    };
  }
};
function bg(i) {
  return function(s) {
    return i.apply(null, s);
  };
}
function wg(i) {
  return _.isObject(i) && i.isAxiosError === !0;
}
const Ro = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ro).forEach(([i, s]) => {
  Ro[s] = i;
});
function mc(i) {
  const s = new Qe(i), a = Wl(Qe.prototype.request, s);
  return _.extend(a, Qe.prototype, s, { allOwnKeys: !0 }), _.extend(a, s, null, { allOwnKeys: !0 }), a.create = function(r) {
    return mc(tn(i, r));
  }, a;
}
const pt = mc(ri);
pt.Axios = Qe;
pt.CanceledError = kn;
pt.CancelToken = vg;
pt.isCancel = rc;
pt.VERSION = fc;
pt.toFormData = ls;
pt.AxiosError = J;
pt.Cancel = pt.CanceledError;
pt.all = function(i) {
  return Promise.all(i);
};
pt.spread = bg;
pt.isAxiosError = wg;
pt.mergeConfig = tn;
pt.AxiosHeaders = Vt;
pt.formToJSON = (i) => oc(_.isHTMLForm(i) ? new FormData(i) : i);
pt.getAdapter = dc.getAdapter;
pt.HttpStatusCode = Ro;
pt.default = pt;
var be = /* @__PURE__ */ ((i) => (i.Primary = "Primary", i.Success = "Success", i.Warning = "Warning", i.Danger = "Danger", i))(be || {});
const yg = zl("auth", {
  persist: !0,
  state: () => ({
    user: null
  }),
  getters: {
    isAuthenticated: (i) => i.user !== null
  },
  actions: {
    setUser(i) {
      this.user = i;
    },
    unsetUser() {
      this.user = null;
    },
    async login(i) {
      return pt.post("/account/login", i).then((s) => (this.setUser(s.data), this.user)).catch((s) => {
        throw {
          description: "An error as occurred",
          style: be.Danger,
          closeBtn: !0,
          ...s.response.data
        };
      });
    },
    async check() {
      return pt.get("/account/auth-check").then((i) => (this.setUser(i.data.user), this.user)).catch((i) => {
        throw this.unsetUser(), {
          description: "An error as occurred",
          style: be.Danger,
          closeBtn: !0,
          ...i.response.data
        };
      });
    },
    async logout() {
      return this.unsetUser(), pt.get("/account/logout").catch((i) => {
        throw {
          description: "An error as occurred",
          style: be.Danger,
          closeBtn: !0,
          ...i.response.data
        };
      });
    }
  }
}), $g = { class: "uk-fieldset" }, kg = { class: "uk-margin" }, xg = { class: "uk-inline uk-width-1-1" }, Sg = { class: "uk-margin" }, _g = { class: "uk-inline uk-width-1-1" }, Eg = { class: "uk-text-center" }, Tg = ["disabled"], Jo = /* @__PURE__ */ mt({
  __name: "FormLogin",
  setup(i) {
    const s = Pe(!1), a = Pe();
    let r = {
      user_name: "",
      password: ""
    };
    async function u() {
      s.value = !0, a.value = null, await yg().login(r).then((f) => {
        ql.notification({
          message: "Welcome back " + (f == null ? void 0 : f.full_name) + "!",
          status: "success",
          pos: "bottom-right",
          timeout: 4e3
        });
      }).catch((f) => {
        a.value = f;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (h, f) => {
      const g = jt("UFAlertContainer");
      return I(), j("form", {
        onSubmit: f[2] || (f[2] = ss((k) => u(), ["prevent"]))
      }, [
        S("fieldset", $g, [
          a.value ? (I(), St(g, {
            key: 0,
            "data-test": "error",
            alert: a.value
          }, null, 8, ["alert"])) : ht("", !0),
          S("div", kg, [
            S("div", xg, [
              f[3] || (f[3] = S("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: user"
              }, null, -1)),
              Zt(S("input", {
                class: "uk-input",
                type: "text",
                placeholder: "Username",
                "aria-label": "Username",
                "data-test": "username",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => M(r).user_name = k)
              }, null, 512), [
                [ae, M(r).user_name]
              ])
            ])
          ]),
          S("div", Sg, [
            S("div", _g, [
              f[4] || (f[4] = S("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: lock"
              }, null, -1)),
              Zt(S("input", {
                class: "uk-input",
                type: "password",
                placeholder: "Password",
                "aria-label": "Password",
                "data-test": "password",
                "onUpdate:modelValue": f[1] || (f[1] = (k) => M(r).password = k)
              }, null, 512), [
                [ae, M(r).password]
              ])
            ])
          ]),
          S("div", Eg, [
            S("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Login ", 8, Tg)
          ])
        ])
      ], 32);
    };
  }
});
function gc(i, s) {
  return function() {
    return i.apply(s, arguments);
  };
}
const { toString: Og } = Object.prototype, { getPrototypeOf: Ko } = Object, us = /* @__PURE__ */ ((i) => (s) => {
  const a = Og.call(s);
  return i[a] || (i[a] = a.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ue = (i) => (i = i.toLowerCase(), (s) => us(s) === i), hs = (i) => (s) => typeof s === i, { isArray: xn } = Array, ii = hs("undefined");
function Cg(i) {
  return i !== null && !ii(i) && i.constructor !== null && !ii(i.constructor) && ee(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const vc = ue("ArrayBuffer");
function Ag(i) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(i) : s = i && i.buffer && vc(i.buffer), s;
}
const Pg = hs("string"), ee = hs("function"), bc = hs("number"), ds = (i) => i !== null && typeof i == "object", Rg = (i) => i === !0 || i === !1, Yi = (i) => {
  if (us(i) !== "object")
    return !1;
  const s = Ko(i);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
}, Ig = ue("Date"), Bg = ue("File"), Ng = ue("Blob"), Fg = ue("FileList"), Dg = (i) => ds(i) && ee(i.pipe), jg = (i) => {
  let s;
  return i && (typeof FormData == "function" && i instanceof FormData || ee(i.append) && ((s = us(i)) === "formdata" || // detect form-data instance
  s === "object" && ee(i.toString) && i.toString() === "[object FormData]"));
}, Lg = ue("URLSearchParams"), [Ug, Mg, zg, Hg] = ["ReadableStream", "Request", "Response", "Headers"].map(ue), qg = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ai(i, s, { allOwnKeys: a = !1 } = {}) {
  if (i === null || typeof i > "u")
    return;
  let r, u;
  if (typeof i != "object" && (i = [i]), xn(i))
    for (r = 0, u = i.length; r < u; r++)
      s.call(null, i[r], r, i);
  else {
    const h = a ? Object.getOwnPropertyNames(i) : Object.keys(i), f = h.length;
    let g;
    for (r = 0; r < f; r++)
      g = h[r], s.call(null, i[g], g, i);
  }
}
function wc(i, s) {
  s = s.toLowerCase();
  const a = Object.keys(i);
  let r = a.length, u;
  for (; r-- > 0; )
    if (u = a[r], s === u.toLowerCase())
      return u;
  return null;
}
const Ye = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, yc = (i) => !ii(i) && i !== Ye;
function Io() {
  const { caseless: i } = yc(this) && this || {}, s = {}, a = (r, u) => {
    const h = i && wc(s, u) || u;
    Yi(s[h]) && Yi(r) ? s[h] = Io(s[h], r) : Yi(r) ? s[h] = Io({}, r) : xn(r) ? s[h] = r.slice() : s[h] = r;
  };
  for (let r = 0, u = arguments.length; r < u; r++)
    arguments[r] && ai(arguments[r], a);
  return s;
}
const Wg = (i, s, a, { allOwnKeys: r } = {}) => (ai(s, (u, h) => {
  a && ee(u) ? i[h] = gc(u, a) : i[h] = u;
}, { allOwnKeys: r }), i), Vg = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i), Jg = (i, s, a, r) => {
  i.prototype = Object.create(s.prototype, r), i.prototype.constructor = i, Object.defineProperty(i, "super", {
    value: s.prototype
  }), a && Object.assign(i.prototype, a);
}, Kg = (i, s, a, r) => {
  let u, h, f;
  const g = {};
  if (s = s || {}, i == null) return s;
  do {
    for (u = Object.getOwnPropertyNames(i), h = u.length; h-- > 0; )
      f = u[h], (!r || r(f, i, s)) && !g[f] && (s[f] = i[f], g[f] = !0);
    i = a !== !1 && Ko(i);
  } while (i && (!a || a(i, s)) && i !== Object.prototype);
  return s;
}, Gg = (i, s, a) => {
  i = String(i), (a === void 0 || a > i.length) && (a = i.length), a -= s.length;
  const r = i.indexOf(s, a);
  return r !== -1 && r === a;
}, Xg = (i) => {
  if (!i) return null;
  if (xn(i)) return i;
  let s = i.length;
  if (!bc(s)) return null;
  const a = new Array(s);
  for (; s-- > 0; )
    a[s] = i[s];
  return a;
}, Yg = /* @__PURE__ */ ((i) => (s) => i && s instanceof i)(typeof Uint8Array < "u" && Ko(Uint8Array)), Qg = (i, s) => {
  const a = (i && i[Symbol.iterator]).call(i);
  let r;
  for (; (r = a.next()) && !r.done; ) {
    const u = r.value;
    s.call(i, u[0], u[1]);
  }
}, Zg = (i, s) => {
  let a;
  const r = [];
  for (; (a = i.exec(s)) !== null; )
    r.push(a);
  return r;
}, tv = ue("HTMLFormElement"), ev = (i) => i.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, a, r) {
    return a.toUpperCase() + r;
  }
), Tl = (({ hasOwnProperty: i }) => (s, a) => i.call(s, a))(Object.prototype), nv = ue("RegExp"), $c = (i, s) => {
  const a = Object.getOwnPropertyDescriptors(i), r = {};
  ai(a, (u, h) => {
    let f;
    (f = s(u, h, i)) !== !1 && (r[h] = f || u);
  }), Object.defineProperties(i, r);
}, iv = (i) => {
  $c(i, (s, a) => {
    if (ee(i) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
      return !1;
    const r = i[a];
    if (ee(r)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + a + "'");
      });
    }
  });
}, sv = (i, s) => {
  const a = {}, r = (u) => {
    u.forEach((h) => {
      a[h] = !0;
    });
  };
  return xn(i) ? r(i) : r(String(i).split(s)), a;
}, ov = () => {
}, rv = (i, s) => i != null && Number.isFinite(i = +i) ? i : s, $o = "abcdefghijklmnopqrstuvwxyz", Ol = "0123456789", kc = {
  DIGIT: Ol,
  ALPHA: $o,
  ALPHA_DIGIT: $o + $o.toUpperCase() + Ol
}, av = (i = 16, s = kc.ALPHA_DIGIT) => {
  let a = "";
  const { length: r } = s;
  for (; i--; )
    a += s[Math.random() * r | 0];
  return a;
};
function lv(i) {
  return !!(i && ee(i.append) && i[Symbol.toStringTag] === "FormData" && i[Symbol.iterator]);
}
const cv = (i) => {
  const s = new Array(10), a = (r, u) => {
    if (ds(r)) {
      if (s.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        s[u] = r;
        const h = xn(r) ? [] : {};
        return ai(r, (f, g) => {
          const k = a(f, u + 1);
          !ii(k) && (h[g] = k);
        }), s[u] = void 0, h;
      }
    }
    return r;
  };
  return a(i, 0);
}, uv = ue("AsyncFunction"), hv = (i) => i && (ds(i) || ee(i)) && ee(i.then) && ee(i.catch), xc = ((i, s) => i ? setImmediate : s ? ((a, r) => (Ye.addEventListener("message", ({ source: u, data: h }) => {
  u === Ye && h === a && r.length && r.shift()();
}, !1), (u) => {
  r.push(u), Ye.postMessage(a, "*");
}))(`axios@${Math.random()}`, []) : (a) => setTimeout(a))(
  typeof setImmediate == "function",
  ee(Ye.postMessage)
), dv = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ye) : typeof process < "u" && process.nextTick || xc, E = {
  isArray: xn,
  isArrayBuffer: vc,
  isBuffer: Cg,
  isFormData: jg,
  isArrayBufferView: Ag,
  isString: Pg,
  isNumber: bc,
  isBoolean: Rg,
  isObject: ds,
  isPlainObject: Yi,
  isReadableStream: Ug,
  isRequest: Mg,
  isResponse: zg,
  isHeaders: Hg,
  isUndefined: ii,
  isDate: Ig,
  isFile: Bg,
  isBlob: Ng,
  isRegExp: nv,
  isFunction: ee,
  isStream: Dg,
  isURLSearchParams: Lg,
  isTypedArray: Yg,
  isFileList: Fg,
  forEach: ai,
  merge: Io,
  extend: Wg,
  trim: qg,
  stripBOM: Vg,
  inherits: Jg,
  toFlatObject: Kg,
  kindOf: us,
  kindOfTest: ue,
  endsWith: Gg,
  toArray: Xg,
  forEachEntry: Qg,
  matchAll: Zg,
  isHTMLForm: tv,
  hasOwnProperty: Tl,
  hasOwnProp: Tl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $c,
  freezeMethods: iv,
  toObjectSet: sv,
  toCamelCase: ev,
  noop: ov,
  toFiniteNumber: rv,
  findKey: wc,
  global: Ye,
  isContextDefined: yc,
  ALPHABET: kc,
  generateString: av,
  isSpecCompliantForm: lv,
  toJSONObject: cv,
  isAsyncFn: uv,
  isThenable: hv,
  setImmediate: xc,
  asap: dv
};
function K(i, s, a, r, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = i, this.name = "AxiosError", s && (this.code = s), a && (this.config = a), r && (this.request = r), u && (this.response = u);
}
E.inherits(K, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Sc = K.prototype, _c = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((i) => {
  _c[i] = { value: i };
});
Object.defineProperties(K, _c);
Object.defineProperty(Sc, "isAxiosError", { value: !0 });
K.from = (i, s, a, r, u, h) => {
  const f = Object.create(Sc);
  return E.toFlatObject(i, f, function(g) {
    return g !== Error.prototype;
  }, (g) => g !== "isAxiosError"), K.call(f, i.message, s, a, r, u), f.cause = i, f.name = i.name, h && Object.assign(f, h), f;
};
const fv = null;
function Bo(i) {
  return E.isPlainObject(i) || E.isArray(i);
}
function Ec(i) {
  return E.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function Cl(i, s, a) {
  return i ? i.concat(s).map(function(r, u) {
    return r = Ec(r), !a && u ? "[" + r + "]" : r;
  }).join(a ? "." : "") : s;
}
function pv(i) {
  return E.isArray(i) && !i.some(Bo);
}
const mv = E.toFlatObject(E, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function fs(i, s, a) {
  if (!E.isObject(i))
    throw new TypeError("target must be an object");
  s = s || new FormData(), a = E.toFlatObject(a, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, C) {
    return !E.isUndefined(C[P]);
  });
  const r = a.metaTokens, u = a.visitor || b, h = a.dots, f = a.indexes, g = (a.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(s);
  if (!E.isFunction(u))
    throw new TypeError("visitor must be a function");
  function k(P) {
    if (P === null) return "";
    if (E.isDate(P))
      return P.toISOString();
    if (!g && E.isBlob(P))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(P) || E.isTypedArray(P) ? g && typeof Blob == "function" ? new Blob([P]) : Buffer.from(P) : P;
  }
  function b(P, C, O) {
    let U = P;
    if (P && !O && typeof P == "object") {
      if (E.endsWith(C, "{}"))
        C = r ? C : C.slice(0, -2), P = JSON.stringify(P);
      else if (E.isArray(P) && pv(P) || (E.isFileList(P) || E.endsWith(C, "[]")) && (U = E.toArray(P)))
        return C = Ec(C), U.forEach(function(q, z) {
          !(E.isUndefined(q) || q === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? Cl([C], z, h) : f === null ? C : C + "[]",
            k(q)
          );
        }), !1;
    }
    return Bo(P) ? !0 : (s.append(Cl(O, C, h), k(P)), !1);
  }
  const v = [], A = Object.assign(mv, {
    defaultVisitor: b,
    convertValue: k,
    isVisitable: Bo
  });
  function x(P, C) {
    if (!E.isUndefined(P)) {
      if (v.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      v.push(P), E.forEach(P, function(O, U) {
        (!(E.isUndefined(O) || O === null) && u.call(
          s,
          O,
          E.isString(U) ? U.trim() : U,
          C,
          A
        )) === !0 && x(O, C ? C.concat(U) : [U]);
      }), v.pop();
    }
  }
  if (!E.isObject(i))
    throw new TypeError("data must be an object");
  return x(i), s;
}
function Al(i) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function(a) {
    return s[a];
  });
}
function Go(i, s) {
  this._pairs = [], i && fs(i, this, s);
}
const Tc = Go.prototype;
Tc.append = function(i, s) {
  this._pairs.push([i, s]);
};
Tc.toString = function(i) {
  const s = i ? function(a) {
    return i.call(this, a, Al);
  } : Al;
  return this._pairs.map(function(a) {
    return s(a[0]) + "=" + s(a[1]);
  }, "").join("&");
};
function gv(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Oc(i, s, a) {
  if (!s)
    return i;
  const r = a && a.encode || gv, u = a && a.serialize;
  let h;
  if (u ? h = u(s, a) : h = E.isURLSearchParams(s) ? s.toString() : new Go(s, a).toString(r), h) {
    const f = i.indexOf("#");
    f !== -1 && (i = i.slice(0, f)), i += (i.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return i;
}
class Pl {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(s, a, r) {
    return this.handlers.push({
      fulfilled: s,
      rejected: a,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(s) {
    this.handlers[s] && (this.handlers[s] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(s) {
    E.forEach(this.handlers, function(a) {
      a !== null && s(a);
    });
  }
}
const Cc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, vv = typeof URLSearchParams < "u" ? URLSearchParams : Go, bv = typeof FormData < "u" ? FormData : null, wv = typeof Blob < "u" ? Blob : null, yv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: vv,
    FormData: bv,
    Blob: wv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xo = typeof window < "u" && typeof document < "u", $v = ((i) => Xo && ["ReactNative", "NativeScript", "NS"].indexOf(i) < 0)(typeof navigator < "u" && navigator.product), kv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xv = Xo && window.location.href || "http://localhost", Sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xo,
  hasStandardBrowserEnv: $v,
  hasStandardBrowserWebWorkerEnv: kv,
  origin: xv
}, Symbol.toStringTag, { value: "Module" })), le = {
  ...Sv,
  ...yv
};
function _v(i, s) {
  return fs(i, new le.classes.URLSearchParams(), Object.assign({
    visitor: function(a, r, u, h) {
      return le.isNode && E.isBuffer(a) ? (this.append(r, a.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function Ev(i) {
  return E.matchAll(/\w+|\[(\w*)]/g, i).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function Tv(i) {
  const s = {}, a = Object.keys(i);
  let r;
  const u = a.length;
  let h;
  for (r = 0; r < u; r++)
    h = a[r], s[h] = i[h];
  return s;
}
function Ac(i) {
  function s(a, r, u, h) {
    let f = a[h++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f), k = h >= a.length;
    return f = !f && E.isArray(u) ? u.length : f, k ? (E.hasOwnProp(u, f) ? u[f] = [u[f], r] : u[f] = r, !g) : ((!u[f] || !E.isObject(u[f])) && (u[f] = []), s(a, r, u[f], h) && E.isArray(u[f]) && (u[f] = Tv(u[f])), !g);
  }
  if (E.isFormData(i) && E.isFunction(i.entries)) {
    const a = {};
    return E.forEachEntry(i, (r, u) => {
      s(Ev(r), u, a, 0);
    }), a;
  }
  return null;
}
function Ov(i, s, a) {
  if (E.isString(i))
    try {
      return (s || JSON.parse)(i), E.trim(i);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(i);
}
const li = {
  transitional: Cc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, s) {
    const a = s.getContentType() || "", r = a.indexOf("application/json") > -1, u = E.isObject(i);
    if (u && E.isHTMLForm(i) && (i = new FormData(i)), E.isFormData(i))
      return r ? JSON.stringify(Ac(i)) : i;
    if (E.isArrayBuffer(i) || E.isBuffer(i) || E.isStream(i) || E.isFile(i) || E.isBlob(i) || E.isReadableStream(i))
      return i;
    if (E.isArrayBufferView(i))
      return i.buffer;
    if (E.isURLSearchParams(i))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let h;
    if (u) {
      if (a.indexOf("application/x-www-form-urlencoded") > -1)
        return _v(i, this.formSerializer).toString();
      if ((h = E.isFileList(i)) || a.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return fs(
          h ? { "files[]": i } : i,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return u || r ? (s.setContentType("application/json", !1), Ov(i)) : i;
  }],
  transformResponse: [function(i) {
    const s = this.transitional || li.transitional, a = s && s.forcedJSONParsing, r = this.responseType === "json";
    if (E.isResponse(i) || E.isReadableStream(i))
      return i;
    if (i && E.isString(i) && (a && !this.responseType || r)) {
      const u = !(s && s.silentJSONParsing) && r;
      try {
        return JSON.parse(i);
      } catch (h) {
        if (u)
          throw h.name === "SyntaxError" ? K.from(h, K.ERR_BAD_RESPONSE, this, null, this.response) : h;
      }
    }
    return i;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: le.classes.FormData,
    Blob: le.classes.Blob
  },
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  li.headers[i] = {};
});
const Cv = E.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Av = (i) => {
  const s = {};
  let a, r, u;
  return i && i.split(`
`).forEach(function(h) {
    u = h.indexOf(":"), a = h.substring(0, u).trim().toLowerCase(), r = h.substring(u + 1).trim(), !(!a || s[a] && Cv[a]) && (a === "set-cookie" ? s[a] ? s[a].push(r) : s[a] = [r] : s[a] = s[a] ? s[a] + ", " + r : r);
  }), s;
}, Rl = Symbol("internals");
function ti(i) {
  return i && String(i).trim().toLowerCase();
}
function Qi(i) {
  return i === !1 || i == null ? i : E.isArray(i) ? i.map(Qi) : String(i);
}
function Pv(i) {
  const s = /* @__PURE__ */ Object.create(null), a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = a.exec(i); )
    s[r[1]] = r[2];
  return s;
}
const Rv = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function ko(i, s, a, r, u) {
  if (E.isFunction(r))
    return r.call(this, s, a);
  if (u && (s = a), !!E.isString(s)) {
    if (E.isString(r))
      return s.indexOf(r) !== -1;
    if (E.isRegExp(r))
      return r.test(s);
  }
}
function Iv(i) {
  return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, a, r) => a.toUpperCase() + r);
}
function Bv(i, s) {
  const a = E.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(i, r + a, {
      value: function(u, h, f) {
        return this[r].call(this, s, u, h, f);
      },
      configurable: !0
    });
  });
}
class Jt {
  constructor(s) {
    s && this.set(s);
  }
  set(s, a, r) {
    const u = this;
    function h(g, k, b) {
      const v = ti(k);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const A = E.findKey(u, v);
      (!A || u[A] === void 0 || b === !0 || b === void 0 && u[A] !== !1) && (u[A || k] = Qi(g));
    }
    const f = (g, k) => E.forEach(g, (b, v) => h(b, v, k));
    if (E.isPlainObject(s) || s instanceof this.constructor)
      f(s, a);
    else if (E.isString(s) && (s = s.trim()) && !Rv(s))
      f(Av(s), a);
    else if (E.isHeaders(s))
      for (const [g, k] of s.entries())
        h(k, g, r);
    else
      s != null && h(a, s, r);
    return this;
  }
  get(s, a) {
    if (s = ti(s), s) {
      const r = E.findKey(this, s);
      if (r) {
        const u = this[r];
        if (!a)
          return u;
        if (a === !0)
          return Pv(u);
        if (E.isFunction(a))
          return a.call(this, u, r);
        if (E.isRegExp(a))
          return a.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, a) {
    if (s = ti(s), s) {
      const r = E.findKey(this, s);
      return !!(r && this[r] !== void 0 && (!a || ko(this, this[r], r, a)));
    }
    return !1;
  }
  delete(s, a) {
    const r = this;
    let u = !1;
    function h(f) {
      if (f = ti(f), f) {
        const g = E.findKey(r, f);
        g && (!a || ko(r, r[g], g, a)) && (delete r[g], u = !0);
      }
    }
    return E.isArray(s) ? s.forEach(h) : h(s), u;
  }
  clear(s) {
    const a = Object.keys(this);
    let r = a.length, u = !1;
    for (; r--; ) {
      const h = a[r];
      (!s || ko(this, this[h], h, s, !0)) && (delete this[h], u = !0);
    }
    return u;
  }
  normalize(s) {
    const a = this, r = {};
    return E.forEach(this, (u, h) => {
      const f = E.findKey(r, h);
      if (f) {
        a[f] = Qi(u), delete a[h];
        return;
      }
      const g = s ? Iv(h) : String(h).trim();
      g !== h && delete a[h], a[g] = Qi(u), r[g] = !0;
    }), this;
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const a = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (r, u) => {
      r != null && r !== !1 && (a[u] = s && E.isArray(r) ? r.join(", ") : r);
    }), a;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, a]) => s + ": " + a).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...a) {
    const r = new this(s);
    return a.forEach((u) => r.set(u)), r;
  }
  static accessor(s) {
    const a = (this[Rl] = this[Rl] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function u(h) {
      const f = ti(h);
      a[f] || (Bv(r, h), a[f] = !0);
    }
    return E.isArray(s) ? s.forEach(u) : u(s), this;
  }
}
Jt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Jt.prototype, ({ value: i }, s) => {
  let a = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => i,
    set(r) {
      this[a] = r;
    }
  };
});
E.freezeMethods(Jt);
function xo(i, s) {
  const a = this || li, r = s || a, u = Jt.from(r.headers);
  let h = r.data;
  return E.forEach(i, function(f) {
    h = f.call(a, h, u.normalize(), s ? s.status : void 0);
  }), u.normalize(), h;
}
function Pc(i) {
  return !!(i && i.__CANCEL__);
}
function Sn(i, s, a) {
  K.call(this, i ?? "canceled", K.ERR_CANCELED, s, a), this.name = "CanceledError";
}
E.inherits(Sn, K, {
  __CANCEL__: !0
});
function Rc(i, s, a) {
  const r = a.config.validateStatus;
  !a.status || !r || r(a.status) ? i(a) : s(new K(
    "Request failed with status code " + a.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
    a.config,
    a.request,
    a
  ));
}
function Nv(i) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return s && s[1] || "";
}
function Fv(i, s) {
  i = i || 10;
  const a = new Array(i), r = new Array(i);
  let u = 0, h = 0, f;
  return s = s !== void 0 ? s : 1e3, function(g) {
    const k = Date.now(), b = r[h];
    f || (f = k), a[u] = g, r[u] = k;
    let v = h, A = 0;
    for (; v !== u; )
      A += a[v++], v = v % i;
    if (u = (u + 1) % i, u === h && (h = (h + 1) % i), k - f < s)
      return;
    const x = b && k - b;
    return x ? Math.round(A * 1e3 / x) : void 0;
  };
}
function Dv(i, s) {
  let a = 0, r = 1e3 / s, u, h;
  const f = (g, k = Date.now()) => {
    a = k, u = null, h && (clearTimeout(h), h = null), i.apply(null, g);
  };
  return [(...g) => {
    const k = Date.now(), b = k - a;
    b >= r ? f(g, k) : (u = g, h || (h = setTimeout(() => {
      h = null, f(u);
    }, r - b)));
  }, () => u && f(u)];
}
const ns = (i, s, a = 3) => {
  let r = 0;
  const u = Fv(50, 250);
  return Dv((h) => {
    const f = h.loaded, g = h.lengthComputable ? h.total : void 0, k = f - r, b = u(k), v = f <= g;
    r = f;
    const A = {
      loaded: f,
      total: g,
      progress: g ? f / g : void 0,
      bytes: k,
      rate: b || void 0,
      estimated: b && g && v ? (g - f) / b : void 0,
      event: h,
      lengthComputable: g != null,
      [s ? "download" : "upload"]: !0
    };
    i(A);
  }, a);
}, Il = (i, s) => {
  const a = i != null;
  return [(r) => s[0]({
    lengthComputable: a,
    total: i,
    loaded: r
  }), s[1]];
}, Bl = (i) => (...s) => E.asap(() => i(...s)), jv = le.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const i = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");
    let a;
    function r(u) {
      let h = u;
      return i && (s.setAttribute("href", h), h = s.href), s.setAttribute("href", h), {
        href: s.href,
        protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
        host: s.host,
        search: s.search ? s.search.replace(/^\?/, "") : "",
        hash: s.hash ? s.hash.replace(/^#/, "") : "",
        hostname: s.hostname,
        port: s.port,
        pathname: s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname
      };
    }
    return a = r(window.location.href), function(u) {
      const h = E.isString(u) ? r(u) : u;
      return h.protocol === a.protocol && h.host === a.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Lv = le.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(i, s, a, r, u, h) {
      const f = [i + "=" + encodeURIComponent(s)];
      E.isNumber(a) && f.push("expires=" + new Date(a).toGMTString()), E.isString(r) && f.push("path=" + r), E.isString(u) && f.push("domain=" + u), h === !0 && f.push("secure"), document.cookie = f.join("; ");
    },
    read(i) {
      const s = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
      return s ? decodeURIComponent(s[3]) : null;
    },
    remove(i) {
      this.write(i, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Uv(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function Mv(i, s) {
  return s ? i.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : i;
}
function Ic(i, s) {
  return i && !Uv(s) ? Mv(i, s) : s;
}
const Nl = (i) => i instanceof Jt ? { ...i } : i;
function en(i, s) {
  s = s || {};
  const a = {};
  function r(b, v, A) {
    return E.isPlainObject(b) && E.isPlainObject(v) ? E.merge.call({ caseless: A }, b, v) : E.isPlainObject(v) ? E.merge({}, v) : E.isArray(v) ? v.slice() : v;
  }
  function u(b, v, A) {
    if (E.isUndefined(v)) {
      if (!E.isUndefined(b))
        return r(void 0, b, A);
    } else return r(b, v, A);
  }
  function h(b, v) {
    if (!E.isUndefined(v))
      return r(void 0, v);
  }
  function f(b, v) {
    if (E.isUndefined(v)) {
      if (!E.isUndefined(b))
        return r(void 0, b);
    } else return r(void 0, v);
  }
  function g(b, v, A) {
    if (A in s)
      return r(b, v);
    if (A in i)
      return r(void 0, b);
  }
  const k = {
    url: h,
    method: h,
    data: h,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: g,
    headers: (b, v) => u(Nl(b), Nl(v), !0)
  };
  return E.forEach(Object.keys(Object.assign({}, i, s)), function(b) {
    const v = k[b] || u, A = v(i[b], s[b], b);
    E.isUndefined(A) && v !== g || (a[b] = A);
  }), a;
}
const Bc = (i) => {
  const s = en({}, i);
  let { data: a, withXSRFToken: r, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = s;
  s.headers = f = Jt.from(f), s.url = Oc(Ic(s.baseURL, s.url), i.params, i.paramsSerializer), g && f.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let k;
  if (E.isFormData(a)) {
    if (le.hasStandardBrowserEnv || le.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if ((k = f.getContentType()) !== !1) {
      const [b, ...v] = k ? k.split(";").map((A) => A.trim()).filter(Boolean) : [];
      f.setContentType([b || "multipart/form-data", ...v].join("; "));
    }
  }
  if (le.hasStandardBrowserEnv && (r && E.isFunction(r) && (r = r(s)), r || r !== !1 && jv(s.url))) {
    const b = u && h && Lv.read(h);
    b && f.set(u, b);
  }
  return s;
}, zv = typeof XMLHttpRequest < "u", Hv = zv && function(i) {
  return new Promise(function(s, a) {
    const r = Bc(i);
    let u = r.data;
    const h = Jt.from(r.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: k } = r, b, v, A, x, P;
    function C() {
      x && x(), P && P(), r.cancelToken && r.cancelToken.unsubscribe(b), r.signal && r.signal.removeEventListener("abort", b);
    }
    let O = new XMLHttpRequest();
    O.open(r.method.toUpperCase(), r.url, !0), O.timeout = r.timeout;
    function U() {
      if (!O)
        return;
      const z = Jt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), Y = {
        data: !f || f === "text" || f === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: z,
        config: i,
        request: O
      };
      Rc(function(Ct) {
        s(Ct), C();
      }, function(Ct) {
        a(Ct), C();
      }, Y), O = null;
    }
    "onloadend" in O ? O.onloadend = U : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(U);
    }, O.onabort = function() {
      O && (a(new K("Request aborted", K.ECONNABORTED, i, O)), O = null);
    }, O.onerror = function() {
      a(new K("Network Error", K.ERR_NETWORK, i, O)), O = null;
    }, O.ontimeout = function() {
      let z = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const Y = r.transitional || Cc;
      r.timeoutErrorMessage && (z = r.timeoutErrorMessage), a(new K(
        z,
        Y.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        i,
        O
      )), O = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in O && E.forEach(h.toJSON(), function(z, Y) {
      O.setRequestHeader(Y, z);
    }), E.isUndefined(r.withCredentials) || (O.withCredentials = !!r.withCredentials), f && f !== "json" && (O.responseType = r.responseType), k && ([A, P] = ns(k, !0), O.addEventListener("progress", A)), g && O.upload && ([v, x] = ns(g), O.upload.addEventListener("progress", v), O.upload.addEventListener("loadend", x)), (r.cancelToken || r.signal) && (b = (z) => {
      O && (a(!z || z.type ? new Sn(null, i, O) : z), O.abort(), O = null);
    }, r.cancelToken && r.cancelToken.subscribe(b), r.signal && (r.signal.aborted ? b() : r.signal.addEventListener("abort", b)));
    const q = Nv(r.url);
    if (q && le.protocols.indexOf(q) === -1) {
      a(new K("Unsupported protocol " + q + ":", K.ERR_BAD_REQUEST, i));
      return;
    }
    O.send(u || null);
  });
}, qv = (i, s) => {
  let a = new AbortController(), r;
  const u = function(k) {
    if (!r) {
      r = !0, f();
      const b = k instanceof Error ? k : this.reason;
      a.abort(b instanceof K ? b : new Sn(b instanceof Error ? b.message : b));
    }
  };
  let h = s && setTimeout(() => {
    u(new K(`timeout ${s} of ms exceeded`, K.ETIMEDOUT));
  }, s);
  const f = () => {
    i && (h && clearTimeout(h), h = null, i.forEach((k) => {
      k && (k.removeEventListener ? k.removeEventListener("abort", u) : k.unsubscribe(u));
    }), i = null);
  };
  i.forEach((k) => k && k.addEventListener && k.addEventListener("abort", u));
  const { signal: g } = a;
  return g.unsubscribe = f, [g, () => {
    h && clearTimeout(h), h = null;
  }];
}, Wv = function* (i, s) {
  let a = i.byteLength;
  if (a < s) {
    yield i;
    return;
  }
  let r = 0, u;
  for (; r < a; )
    u = r + s, yield i.slice(r, u), r = u;
}, Vv = async function* (i, s, a) {
  for await (const r of i)
    yield* Wv(ArrayBuffer.isView(r) ? r : await a(String(r)), s);
}, Fl = (i, s, a, r, u) => {
  const h = Vv(i, s, u);
  let f = 0, g, k = (b) => {
    g || (g = !0, r && r(b));
  };
  return new ReadableStream({
    async pull(b) {
      try {
        const { done: v, value: A } = await h.next();
        if (v) {
          k(), b.close();
          return;
        }
        let x = A.byteLength;
        if (a) {
          let P = f += x;
          a(P);
        }
        b.enqueue(new Uint8Array(A));
      } catch (v) {
        throw k(v), v;
      }
    },
    cancel(b) {
      return k(b), h.return();
    }
  }, {
    highWaterMark: 2
  });
}, ps = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Nc = ps && typeof ReadableStream == "function", No = ps && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((i) => (s) => i.encode(s))(new TextEncoder()) : async (i) => new Uint8Array(await new Response(i).arrayBuffer())), Fc = (i, ...s) => {
  try {
    return !!i(...s);
  } catch {
    return !1;
  }
}, Jv = Nc && Fc(() => {
  let i = !1;
  const s = new Request(le.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return i = !0, "half";
    }
  }).headers.has("Content-Type");
  return i && !s;
}), Dl = 64 * 1024, Fo = Nc && Fc(() => E.isReadableStream(new Response("").body)), is = {
  stream: Fo && ((i) => i.body)
};
ps && ((i) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !is[s] && (is[s] = E.isFunction(i[s]) ? (a) => a[s]() : (a, r) => {
      throw new K(`Response type '${s}' is not supported`, K.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Kv = async (i) => {
  if (i == null)
    return 0;
  if (E.isBlob(i))
    return i.size;
  if (E.isSpecCompliantForm(i))
    return (await new Request(i).arrayBuffer()).byteLength;
  if (E.isArrayBufferView(i) || E.isArrayBuffer(i))
    return i.byteLength;
  if (E.isURLSearchParams(i) && (i = i + ""), E.isString(i))
    return (await No(i)).byteLength;
}, Gv = async (i, s) => E.toFiniteNumber(i.getContentLength()) ?? Kv(s), Xv = ps && (async (i) => {
  let {
    url: s,
    method: a,
    data: r,
    signal: u,
    cancelToken: h,
    timeout: f,
    onDownloadProgress: g,
    onUploadProgress: k,
    responseType: b,
    headers: v,
    withCredentials: A = "same-origin",
    fetchOptions: x
  } = Bc(i);
  b = b ? (b + "").toLowerCase() : "text";
  let [P, C] = u || h || f ? qv([u, h], f) : [], O, U;
  const q = () => {
    !O && setTimeout(() => {
      P && P.unsubscribe();
    }), O = !0;
  };
  let z;
  try {
    if (k && Jv && a !== "get" && a !== "head" && (z = await Gv(v, r)) !== 0) {
      let wt = new Request(s, {
        method: "POST",
        body: r,
        duplex: "half"
      }), Ft;
      if (E.isFormData(r) && (Ft = wt.headers.get("content-type")) && v.setContentType(Ft), wt.body) {
        const [ne, Mt] = Il(
          z,
          ns(Bl(k))
        );
        r = Fl(wt.body, Dl, ne, Mt, No);
      }
    }
    E.isString(A) || (A = A ? "include" : "omit"), U = new Request(s, {
      ...x,
      signal: P,
      method: a.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: A
    });
    let Y = await fetch(U);
    const Ct = Fo && (b === "stream" || b === "response");
    if (Fo && (g || Ct)) {
      const wt = {};
      ["status", "statusText", "headers"].forEach((dt) => {
        wt[dt] = Y[dt];
      });
      const Ft = E.toFiniteNumber(Y.headers.get("content-length")), [ne, Mt] = g && Il(
        Ft,
        ns(Bl(g), !0)
      ) || [];
      Y = new Response(
        Fl(Y.body, Dl, ne, () => {
          Mt && Mt(), Ct && q();
        }, No),
        wt
      );
    }
    b = b || "text";
    let Nt = await is[E.findKey(is, b) || "text"](Y, i);
    return !Ct && q(), C && C(), await new Promise((wt, Ft) => {
      Rc(wt, Ft, {
        data: Nt,
        headers: Jt.from(Y.headers),
        status: Y.status,
        statusText: Y.statusText,
        config: i,
        request: U
      });
    });
  } catch (Y) {
    throw q(), Y && Y.name === "TypeError" && /fetch/i.test(Y.message) ? Object.assign(
      new K("Network Error", K.ERR_NETWORK, i, U),
      {
        cause: Y.cause || Y
      }
    ) : K.from(Y, Y && Y.code, i, U);
  }
}), Do = {
  http: fv,
  xhr: Hv,
  fetch: Xv
};
E.forEach(Do, (i, s) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: s });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: s });
  }
});
const jl = (i) => `- ${i}`, Yv = (i) => E.isFunction(i) || i === null || i === !1, Dc = {
  getAdapter: (i) => {
    i = E.isArray(i) ? i : [i];
    const { length: s } = i;
    let a, r;
    const u = {};
    for (let h = 0; h < s; h++) {
      a = i[h];
      let f;
      if (r = a, !Yv(a) && (r = Do[(f = String(a)).toLowerCase()], r === void 0))
        throw new K(`Unknown adapter '${f}'`);
      if (r)
        break;
      u[f || "#" + h] = r;
    }
    if (!r) {
      const h = Object.entries(u).map(
        ([g, k]) => `adapter ${g} ` + (k === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let f = s ? h.length > 1 ? `since :
` + h.map(jl).join(`
`) : " " + jl(h[0]) : "as no adapter specified";
      throw new K(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Do
};
function So(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new Sn(null, i);
}
function Ll(i) {
  return So(i), i.headers = Jt.from(i.headers), i.data = xo.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), Dc.getAdapter(i.adapter || li.adapter)(i).then(function(s) {
    return So(i), s.data = xo.call(
      i,
      i.transformResponse,
      s
    ), s.headers = Jt.from(s.headers), s;
  }, function(s) {
    return Pc(s) || (So(i), s && s.response && (s.response.data = xo.call(
      i,
      i.transformResponse,
      s.response
    ), s.response.headers = Jt.from(s.response.headers))), Promise.reject(s);
  });
}
const jc = "1.7.3", Yo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, s) => {
  Yo[i] = function(a) {
    return typeof a === i || "a" + (s < 1 ? "n " : " ") + i;
  };
});
const Ul = {};
Yo.transitional = function(i, s, a) {
  function r(u, h) {
    return "[Axios v" + jc + "] Transitional option '" + u + "'" + h + (a ? ". " + a : "");
  }
  return (u, h, f) => {
    if (i === !1)
      throw new K(
        r(h, " has been removed" + (s ? " in " + s : "")),
        K.ERR_DEPRECATED
      );
    return s && !Ul[h] && (Ul[h] = !0, console.warn(
      r(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), i ? i(u, h, f) : !0;
  };
};
function Qv(i, s, a) {
  if (typeof i != "object")
    throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(i);
  let u = r.length;
  for (; u-- > 0; ) {
    const h = r[u], f = s[h];
    if (f) {
      const g = i[h], k = g === void 0 || f(g, h, i);
      if (k !== !0)
        throw new K("option " + h + " must be " + k, K.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0)
      throw new K("Unknown option " + h, K.ERR_BAD_OPTION);
  }
}
const jo = {
  assertOptions: Qv,
  validators: Yo
}, Oe = jo.validators;
class Ze {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new Pl(),
      response: new Pl()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(s, a) {
    try {
      return await this._request(s, a);
    } catch (r) {
      if (r instanceof Error) {
        let u;
        Error.captureStackTrace ? Error.captureStackTrace(u = {}) : u = new Error();
        const h = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? h && !String(r.stack).endsWith(h.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + h) : r.stack = h;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(s, a) {
    typeof s == "string" ? (a = a || {}, a.url = s) : a = s || {}, a = en(this.defaults, a);
    const { transitional: r, paramsSerializer: u, headers: h } = a;
    r !== void 0 && jo.assertOptions(r, {
      silentJSONParsing: Oe.transitional(Oe.boolean),
      forcedJSONParsing: Oe.transitional(Oe.boolean),
      clarifyTimeoutError: Oe.transitional(Oe.boolean)
    }, !1), u != null && (E.isFunction(u) ? a.paramsSerializer = {
      serialize: u
    } : jo.assertOptions(u, {
      encode: Oe.function,
      serialize: Oe.function
    }, !0)), a.method = (a.method || this.defaults.method || "get").toLowerCase();
    let f = h && E.merge(
      h.common,
      h[a.method]
    );
    h && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete h[C];
      }
    ), a.headers = Jt.concat(f, h);
    const g = [];
    let k = !0;
    this.interceptors.request.forEach(function(C) {
      typeof C.runWhen == "function" && C.runWhen(a) === !1 || (k = k && C.synchronous, g.unshift(C.fulfilled, C.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(C) {
      b.push(C.fulfilled, C.rejected);
    });
    let v, A = 0, x;
    if (!k) {
      const C = [Ll.bind(this), void 0];
      for (C.unshift.apply(C, g), C.push.apply(C, b), x = C.length, v = Promise.resolve(a); A < x; )
        v = v.then(C[A++], C[A++]);
      return v;
    }
    x = g.length;
    let P = a;
    for (A = 0; A < x; ) {
      const C = g[A++], O = g[A++];
      try {
        P = C(P);
      } catch (U) {
        O.call(this, U);
        break;
      }
    }
    try {
      v = Ll.call(this, P);
    } catch (C) {
      return Promise.reject(C);
    }
    for (A = 0, x = b.length; A < x; )
      v = v.then(b[A++], b[A++]);
    return v;
  }
  getUri(s) {
    s = en(this.defaults, s);
    const a = Ic(s.baseURL, s.url);
    return Oc(a, s.params, s.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function(i) {
  Ze.prototype[i] = function(s, a) {
    return this.request(en(a || {}, {
      method: i,
      url: s,
      data: (a || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(i) {
  function s(a) {
    return function(r, u, h) {
      return this.request(en(h || {}, {
        method: i,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: u
      }));
    };
  }
  Ze.prototype[i] = s(), Ze.prototype[i + "Form"] = s(!0);
});
class Qo {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let a;
    this.promise = new Promise(function(u) {
      a = u;
    });
    const r = this;
    this.promise.then((u) => {
      if (!r._listeners) return;
      let h = r._listeners.length;
      for (; h-- > 0; )
        r._listeners[h](u);
      r._listeners = null;
    }), this.promise.then = (u) => {
      let h;
      const f = new Promise((g) => {
        r.subscribe(g), h = g;
      }).then(u);
      return f.cancel = function() {
        r.unsubscribe(h);
      }, f;
    }, s(function(u, h, f) {
      r.reason || (r.reason = new Sn(u, h, f), a(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(s) {
    if (!this._listeners)
      return;
    const a = this._listeners.indexOf(s);
    a !== -1 && this._listeners.splice(a, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let s;
    return {
      token: new Qo(function(a) {
        s = a;
      }),
      cancel: s
    };
  }
}
function Zv(i) {
  return function(s) {
    return i.apply(null, s);
  };
}
function tb(i) {
  return E.isObject(i) && i.isAxiosError === !0;
}
const Lo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Lo).forEach(([i, s]) => {
  Lo[s] = i;
});
function Lc(i) {
  const s = new Ze(i), a = gc(Ze.prototype.request, s);
  return E.extend(a, Ze.prototype, s, { allOwnKeys: !0 }), E.extend(a, s, null, { allOwnKeys: !0 }), a.create = function(r) {
    return Lc(en(i, r));
  }, a;
}
const Et = Lc(li);
Et.Axios = Ze;
Et.CanceledError = Sn;
Et.CancelToken = Qo;
Et.isCancel = Pc;
Et.VERSION = jc;
Et.toFormData = fs;
Et.AxiosError = K;
Et.Cancel = Et.CanceledError;
Et.all = function(i) {
  return Promise.all(i);
};
Et.spread = Zv;
Et.isAxiosError = tb;
Et.mergeConfig = en;
Et.AxiosHeaders = Jt;
Et.formToJSON = (i) => Ac(E.isHTMLForm(i) ? new FormData(i) : i);
Et.getAdapter = Dc.getAdapter;
Et.HttpStatusCode = Lo;
Et.default = Et;
const eb = (i) => {
  const s = typeof i;
  return i !== null && (s === "object" || s === "function");
}, _o = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), nb = new Set("0123456789");
function ib(i) {
  const s = [];
  let a = "", r = "start", u = !1;
  for (const h of i)
    switch (h) {
      case "\\": {
        if (r === "index")
          throw new Error("Invalid character in an index");
        if (r === "indexEnd")
          throw new Error("Invalid character after an index");
        u && (a += h), r = "property", u = !u;
        break;
      }
      case ".": {
        if (r === "index")
          throw new Error("Invalid character in an index");
        if (r === "indexEnd") {
          r = "property";
          break;
        }
        if (u) {
          u = !1, a += h;
          break;
        }
        if (_o.has(a))
          return [];
        s.push(a), a = "", r = "property";
        break;
      }
      case "[": {
        if (r === "index")
          throw new Error("Invalid character in an index");
        if (r === "indexEnd") {
          r = "index";
          break;
        }
        if (u) {
          u = !1, a += h;
          break;
        }
        if (r === "property") {
          if (_o.has(a))
            return [];
          s.push(a), a = "";
        }
        r = "index";
        break;
      }
      case "]": {
        if (r === "index") {
          s.push(Number.parseInt(a, 10)), a = "", r = "indexEnd";
          break;
        }
        if (r === "indexEnd")
          throw new Error("Invalid character after an index");
      }
      default: {
        if (r === "index" && !nb.has(h))
          throw new Error("Invalid character in an index");
        if (r === "indexEnd")
          throw new Error("Invalid character after an index");
        r === "start" && (r = "property"), u && (u = !1, a += "\\"), a += h;
      }
    }
  switch (u && (a += "\\"), r) {
    case "property": {
      if (_o.has(a))
        return [];
      s.push(a);
      break;
    }
    case "index":
      throw new Error("Index was not closed");
    case "start": {
      s.push("");
      break;
    }
  }
  return s;
}
function sb(i, s) {
  if (typeof s != "number" && Array.isArray(i)) {
    const a = Number.parseInt(s, 10);
    return Number.isInteger(a) && i[a] === i[s];
  }
  return !1;
}
function ob(i, s, a) {
  if (!eb(i) || typeof s != "string")
    return a === void 0 ? i : a;
  const r = ib(s);
  if (r.length === 0)
    return a;
  for (let u = 0; u < r.length; u++) {
    const h = r[u];
    if (sb(i, h) ? i = u === r.length - 1 ? void 0 : null : i = i[h], i == null) {
      if (u !== r.length - 1)
        return a;
      break;
    }
  }
  return i === void 0 ? a : i;
}
const Uc = zl("config", {
  persist: !0,
  state: () => ({
    config: {}
  }),
  getters: {
    get: (i) => (s, a) => ob(i.config, s, a)
  },
  actions: {
    async load() {
      Et.get("/api/config").then((i) => {
        this.config = i.data;
      });
    }
  }
});
function rb() {
  return {
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    password: "",
    passwordc: "",
    locale: Uc().get("site.registration.user_defaults.locale", "en_US"),
    captcha: "",
    spiderbro: "http://"
  };
}
function ab() {
  return Uc().get("locales.available");
}
function lb() {
  return "/account/captcha";
}
async function cb(i) {
  return pt.post("/account/register", i).then((s) => s.data).catch((s) => {
    throw {
      description: "An error as occurred",
      style: be.Danger,
      closeBtn: !0,
      ...s.response.data
    };
  });
}
const ub = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  doRegister: cb,
  getAvailableLocales: ab,
  getCaptchaUrl: lb,
  getDefaultForm: rb
}, Symbol.toStringTag, { value: "Module" }));
async function hb(i) {
  return pt.post("/account/forgot-password", { email: i }).then((s) => ({
    description: s.data.message,
    style: be.Success,
    closeBtn: !0
  })).catch((s) => {
    throw {
      description: "An error as occurred",
      style: be.Danger,
      closeBtn: !0,
      ...s.response.data
    };
  });
}
async function db(i) {
  return pt.post("/account/resend-verification", { email: i }).then((s) => ({
    description: s.data.message,
    style: be.Success,
    closeBtn: !0
  })).catch((s) => {
    throw {
      description: "An error as occurred",
      style: be.Danger,
      closeBtn: !0,
      ...s.response.data
    };
  });
}
const fb = { class: "uk-fieldset uk-form-stacked" }, pb = { class: "uk-margin" }, mb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, gb = { class: "uk-width-1-2" }, vb = { class: "uk-width-1-2" }, bb = { class: "uk-width-1-1" }, wb = { class: "uk-margin" }, yb = { class: "uk-margin" }, $b = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, kb = { class: "uk-width-1-2" }, xb = { class: "uk-width-1-2" }, Sb = { class: "uk-margin" }, _b = ["value"], Eb = { class: "uk-margin" }, Tb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Ob = { class: "uk-width-2-3" }, Cb = { class: "uk-width-1-3" }, Ab = ["src"], Pb = { class: "uk-text-center" }, Rb = ["disabled"], Mc = /* @__PURE__ */ mt({
  __name: "FormRegister",
  setup(i) {
    const { getDefaultForm: s, doRegister: a, getAvailableLocales: r, getCaptchaUrl: u } = ub, h = Pe(!1), f = Pe();
    let g = s();
    async function k() {
      h.value = !0, f.value = null, await a(g).then((b) => {
        ql.notification({
          message: "Succesfully registered " + (b == null ? void 0 : b.full_name) + "!",
          status: "success",
          pos: "bottom-right",
          timeout: 4e3
        });
      }).catch((b) => {
        f.value = b;
      }).finally(() => {
        h.value = !1;
      });
    }
    return (b, v) => {
      const A = jt("UFAlertContainer");
      return I(), j("form", {
        onSubmit: v[8] || (v[8] = ss((x) => k(), ["prevent"]))
      }, [
        S("fieldset", fb, [
          f.value ? (I(), St(A, {
            key: 0,
            "data-test": "error",
            alert: f.value
          }, null, 8, ["alert"])) : ht("", !0),
          S("div", pb, [
            v[9] || (v[9] = S("label", {
              class: "uk-form-label",
              for: "first_name"
            }, "Name and email", -1)),
            S("div", mb, [
              S("div", gb, [
                Zt(S("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "First Name",
                  "aria-label": "First Name",
                  id: "first_name",
                  "data-test": "first_name",
                  "onUpdate:modelValue": v[0] || (v[0] = (x) => M(g).first_name = x)
                }, null, 512), [
                  [ae, M(g).first_name]
                ])
              ]),
              S("div", vb, [
                Zt(S("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "Last Name",
                  "aria-label": "Last Name",
                  "data-test": "last_name",
                  "onUpdate:modelValue": v[1] || (v[1] = (x) => M(g).last_name = x)
                }, null, 512), [
                  [ae, M(g).last_name]
                ])
              ]),
              S("div", bb, [
                Zt(S("input", {
                  class: "uk-input",
                  type: "email",
                  placeholder: "Email",
                  "aria-label": "Email",
                  "data-test": "email",
                  "onUpdate:modelValue": v[2] || (v[2] = (x) => M(g).email = x)
                }, null, 512), [
                  [ae, M(g).email]
                ])
              ])
            ])
          ]),
          S("div", wb, [
            v[10] || (v[10] = S("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Username", -1)),
            Zt(S("input", {
              class: "uk-input",
              type: "text",
              placeholder: "Username",
              "aria-label": "Username",
              "data-test": "username",
              "onUpdate:modelValue": v[3] || (v[3] = (x) => M(g).user_name = x)
            }, null, 512), [
              [ae, M(g).user_name]
            ])
          ]),
          S("div", yb, [
            v[11] || (v[11] = S("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Password", -1)),
            S("div", $b, [
              S("div", kb, [
                Zt(S("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Password",
                  "aria-label": "Password",
                  "data-test": "password",
                  "onUpdate:modelValue": v[4] || (v[4] = (x) => M(g).password = x)
                }, null, 512), [
                  [ae, M(g).password]
                ])
              ]),
              S("div", xb, [
                Zt(S("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Confirm Password",
                  "aria-label": "Confirm Password",
                  "data-test": "passwordc",
                  "onUpdate:modelValue": v[5] || (v[5] = (x) => M(g).passwordc = x)
                }, null, 512), [
                  [ae, M(g).passwordc]
                ])
              ])
            ])
          ]),
          S("div", Sb, [
            v[12] || (v[12] = S("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Locale", -1)),
            Zt(S("select", {
              class: "uk-select",
              id: "form-stacked-select",
              "data-test": "locale",
              "onUpdate:modelValue": v[6] || (v[6] = (x) => M(g).locale = x)
            }, [
              (I(!0), j(Zi, null, Uo(M(r)(), (x, P) => (I(), j("option", {
                value: P,
                key: P
              }, ut(x), 9, _b))), 128))
            ], 512), [
              [Ml, M(g).locale]
            ])
          ]),
          S("div", Eb, [
            v[13] || (v[13] = S("label", {
              class: "uk-form-label",
              for: "r-form-captcha"
            }, "Captcha", -1)),
            S("div", Tb, [
              S("div", Ob, [
                Zt(S("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Captcha",
                  "aria-label": "Captcha",
                  id: "r-form-captcha",
                  "data-test": "captcha",
                  "onUpdate:modelValue": v[7] || (v[7] = (x) => M(g).captcha = x)
                }, null, 512), [
                  [ae, M(g).captcha]
                ])
              ]),
              S("div", Cb, [
                S("img", {
                  src: M(u)(),
                  id: "captcha",
                  "data-target": "#r-form-captcha"
                }, null, 8, Ab)
              ])
            ])
          ]),
          v[14] || (v[14] = S("p", null, [
            _t(" By registering an account with UserFrosting, you accept "),
            S("a", null, "the terms and conditions"),
            _t(". ")
          ], -1)),
          S("div", Pb, [
            S("button", {
              class: "uk-button uk-button-primary",
              disabled: h.value
            }, "Sign me up", 8, Rb)
          ])
        ])
      ], 32);
    };
  }
}), Ib = { class: "uk-fieldset" }, Bb = { class: "uk-margin" }, Nb = { class: "uk-inline uk-width-1-1" }, Fb = { class: "uk-text-center" }, Db = ["disabled"], zc = /* @__PURE__ */ mt({
  __name: "FormForgotPassword",
  setup(i) {
    const s = Pe(!1), a = Pe();
    let r = "";
    async function u() {
      s.value = !0, a.value = null, await hb(r).then((h) => {
        a.value = h;
      }).catch((h) => {
        a.value = h;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (h, f) => {
      const g = jt("UFAlertContainer");
      return I(), j("form", {
        onSubmit: f[1] || (f[1] = ss((k) => u(), ["prevent"]))
      }, [
        S("fieldset", Ib, [
          a.value ? (I(), St(g, {
            key: 0,
            "data-test": "error",
            alert: a.value
          }, null, 8, ["alert"])) : ht("", !0),
          S("div", Bb, [
            S("div", Nb, [
              f[2] || (f[2] = S("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              Zt(S("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => Mo(r) ? r.value = k : r = k)
              }, null, 512), [
                [ae, M(r)]
              ])
            ])
          ]),
          S("div", Fb, [
            S("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Email Password Reset Link ", 8, Db)
          ])
        ])
      ], 32);
    };
  }
}), jb = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, Lb = { class: "uk-navbar-container" }, Ub = { class: "uk-container uk-container-expand" }, Mb = {
  class: "uk-navbar",
  "uk-navbar": ""
}, zb = {
  class: "uk-navbar-left",
  "data-test": "navbar-left"
}, Hb = {
  class: "uk-navbar-right",
  "data-test": "navbar-right"
}, qb = { class: "uk-navbar-nav" }, Wb = /* @__PURE__ */ mt({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), j("header", null, [
      S("div", jb, [
        S("div", Lb, [
          S("div", Ub, [
            S("nav", Mb, [
              S("div", zb, [
                Ut(zo, {
                  to: s.to,
                  class: "uk-navbar-item uk-logo",
                  label: ""
                }, {
                  default: Bt(() => [
                    it(s.$slots, "title", {}, () => [
                      _t(ut(s.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              S("div", Hb, [
                S("ul", qb, [
                  it(s.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), Vb = { "data-test": "label" }, Jb = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0px"
}, Kb = {
  class: "uk-nav uk-navbar-dropdown-nav",
  "data-test": "slot"
}, Zo = /* @__PURE__ */ mt({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), j("li", null, [
      S("a", Vb, [
        it(s.$slots, "label", {}, () => [
          _t(ut(s.label), 1)
        ]),
        a[0] || (a[0] = _t()),
        a[1] || (a[1] = S("span", { "uk-navbar-parent-icon": "" }, null, -1))
      ]),
      S("div", Jb, [
        S("ul", Kb, [
          it(s.$slots, "default")
        ])
      ])
    ]));
  }
}), Gb = {}, Xb = { class: "uk-nav-divider" };
function Yb(i, s) {
  return I(), j("li", Xb);
}
const Qb = /* @__PURE__ */ yn(Gb, [["render", Yb]]), Zb = { key: 0 }, tw = ["href"], ew = ["href", "onClick"], nw = /* @__PURE__ */ mt({
  __name: "NavBarItem",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, a = Ae(() => s.to === "" || typeof s.to == "string" && s.to.startsWith("http"));
    return (r, u) => a.value ? (I(), j("li", Zb, [
      S("a", {
        href: r.to.toString(),
        target: "_blank"
      }, [
        it(r.$slots, "default", {}, () => [
          _t(ut(r.label), 1)
        ])
      ], 8, tw)
    ])) : (I(), St(M(si), ei({
      key: 1,
      to: r.to
    }, r.$props, { custom: "" }), {
      default: Bt(({ isActive: h, href: f, navigate: g }) => [
        S("li", {
          class: Ce({ "uk-active": h })
        }, [
          S("a", ei(r.$attrs, {
            href: f,
            onClick: g
          }), [
            it(r.$slots, "default", {}, () => [
              _t(ut(r.label), 1)
            ])
          ], 16, ew)
        ], 2)
      ]),
      _: 3
    }, 16, ["to"]));
  }
}), iw = { class: "uk-text-center" }, sw = /* @__PURE__ */ mt({
  __name: "NavBarLogin",
  setup(i) {
    return (s, a) => (I(), St(Zo, {
      label: "Login",
      class: "uf-nav-login uk-text-center"
    }, {
      default: Bt(() => [
        Ut(Jo),
        S("div", iw, [
          S("button", {
            class: "uk-button uk-button-default",
            onClick: a[0] || (a[0] = (r) => s.$emit("gotoRegistration")),
            "data-test": "gotoRegistration"
          }, " Register ")
        ]),
        it(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ow = {
  key: 0,
  "data-test": "username"
}, rw = ["src"], aw = { class: "uk-margin" }, lw = ["src"], cw = {
  key: 1,
  class: "uk-margin-remove",
  "data-test": "username"
}, uw = {
  key: 2,
  class: "uk-margin-remove uk-text-meta",
  "data-test": "meta"
}, hw = /* @__PURE__ */ mt({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), St(Zo, { class: "uf-nav-user uk-text-center" }, {
      label: Bt(() => [
        s.username ? (I(), j("span", ow, ut(s.username), 1)) : ht("", !0),
        s.avatar ? (I(), j("img", {
          key: 1,
          src: s.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, rw)) : ht("", !0)
      ]),
      default: Bt(() => [
        S("div", aw, [
          s.avatar ? (I(), j("img", {
            key: 0,
            src: s.avatar,
            alt: "avatar",
            class: "uk-border-circle",
            "uk-height-match": ""
          }, null, 8, lw)) : ht("", !0),
          s.username ? (I(), j("p", cw, ut(s.username), 1)) : ht("", !0),
          s.meta ? (I(), j("p", uw, "(" + ut(s.meta) + ")", 1)) : ht("", !0)
        ]),
        it(s.$slots, "default", { dataTest: "slot" })
      ]),
      _: 3
    }));
  }
}), dw = { key: 0 }, fw = ["href"], pw = { key: 1 }, mw = /* @__PURE__ */ mt({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, a = Ae(() => typeof s.to == "string" && s.to.startsWith("http"));
    return (r, u) => a.value ? (I(), j("li", dw, [
      S("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: r.to.toString(),
        target: "_blank"
      }, [
        it(r.$slots, "default", {}, () => [
          _t(ut(r.label), 1)
        ])
      ], 8, fw)
    ])) : (I(), j("li", pw, [
      Ut(M(si), {
        to: r.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: Bt(() => [
          it(r.$slots, "default", {}, () => [
            _t(ut(r.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["to"])
    ]));
  }
}), gw = { class: "uk-list" }, vw = { class: "uk-text-center" }, bw = /* @__PURE__ */ mt({
  __name: "PageLogin",
  setup(i) {
    return (s, a) => {
      const r = jt("font-awesome-icon"), u = jt("UFCardBoxBig");
      return I(), St(u, null, {
        default: Bt(() => [
          a[5] || (a[5] = S("h3", { class: "uk-card-title" }, "Login", -1)),
          Ut(Jo),
          S("ul", gw, [
            S("li", null, [
              S("a", {
                onClick: a[0] || (a[0] = (h) => s.$emit("gotoForgotPassword")),
                "data-test": "gotoForgotPassword"
              }, "Forgot your password?")
            ]),
            S("li", null, [
              S("a", {
                onClick: a[1] || (a[1] = (h) => s.$emit("gotoResendVerification")),
                "data-test": "gotoResendVerification"
              }, "Resend verification email")
            ])
          ]),
          a[6] || (a[6] = S("hr", null, null, -1)),
          S("div", vw, [
            a[4] || (a[4] = S("p", null, "You don't have an account yet?", -1)),
            S("button", {
              class: "uk-button uk-button-default",
              onClick: a[2] || (a[2] = (h) => s.$emit("gotoRegistration")),
              "data-test": "gotoRegistration"
            }, [
              Ut(r, { icon: ["fas", "user-plus"] }),
              a[3] || (a[3] = _t(" Register "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), ww = { class: "uk-text-center" }, yw = /* @__PURE__ */ mt({
  __name: "PageRegister",
  setup(i) {
    return (s, a) => {
      const r = jt("font-awesome-icon"), u = jt("UFCardBoxBig");
      return I(), St(u, null, {
        default: Bt(() => [
          a[3] || (a[3] = S("h3", { class: "uk-card-title" }, "Register", -1)),
          Ut(Mc),
          a[4] || (a[4] = S("hr", null, null, -1)),
          S("div", ww, [
            a[2] || (a[2] = S("p", null, "Already have an account ?", -1)),
            S("button", {
              class: "uk-button uk-button-default",
              onClick: a[0] || (a[0] = (h) => s.$emit("gotoLogin")),
              "data-test": "gotoLogin"
            }, [
              Ut(r, { icon: ["fas", "right-to-bracket"] }),
              a[1] || (a[1] = _t(" Login "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), $w = /* @__PURE__ */ mt({
  __name: "PageForgotPassword",
  setup(i) {
    return (s, a) => {
      const r = jt("UFCardBoxBig");
      return I(), St(r, null, {
        default: Bt(() => [
          a[0] || (a[0] = S("h3", { class: "uk-card-title" }, "Forgotten Password", -1)),
          a[1] || (a[1] = S("p", null, " Please enter the email address you used to sign up. A link with instructions to reset your password will be emailed to you. ", -1)),
          Ut(zc)
        ]),
        _: 1
      });
    };
  }
}), kw = { class: "uk-fieldset" }, xw = { class: "uk-margin" }, Sw = { class: "uk-inline uk-width-1-1" }, _w = { class: "uk-text-center" }, Ew = ["disabled"], Tw = /* @__PURE__ */ mt({
  __name: "FormResendVerification",
  setup(i) {
    const s = Pe(!1), a = Pe();
    let r = "";
    async function u() {
      s.value = !0, a.value = null, await db(r).then((h) => {
        a.value = h;
      }).catch((h) => {
        a.value = h;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (h, f) => {
      const g = jt("UFAlertContainer");
      return I(), j("form", {
        onSubmit: f[1] || (f[1] = ss((k) => u(), ["prevent"]))
      }, [
        S("fieldset", kw, [
          a.value ? (I(), St(g, {
            key: 0,
            "data-test": "error",
            alert: a.value
          }, null, 8, ["alert"])) : ht("", !0),
          S("div", xw, [
            S("div", Sw, [
              f[2] || (f[2] = S("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              Zt(S("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => Mo(r) ? r.value = k : r = k)
              }, null, 512), [
                [ae, M(r)]
              ])
            ])
          ]),
          S("div", _w, [
            S("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Email the verification link for my account ", 8, Ew)
          ])
        ])
      ], 32);
    };
  }
}), Ow = /* @__PURE__ */ mt({
  __name: "PageResendVerification",
  setup(i) {
    return (s, a) => {
      const r = jt("UFCardBoxBig");
      return I(), St(r, null, {
        default: Bt(() => [
          a[0] || (a[0] = S("h3", { class: "uk-card-title" }, "Resend Verification Email", -1)),
          a[1] || (a[1] = S("p", null, " Please enter the email address you used to sign up, and your verification email will be resent. ", -1)),
          Ut(Tw)
        ]),
        _: 1
      });
    };
  }
}), Cw = {}, Aw = { class: "uf-sidebar-left uk-light uk-visible@m" }, Pw = { class: "left-nav-wrap" }, Rw = {
  class: "uk-nav uk-nav-default",
  "data-uk-nav": ""
};
function Iw(i, s) {
  return I(), j("aside", Aw, [
    S("div", Pw, [
      S("ul", Rw, [
        it(i.$slots, "default")
      ])
    ])
  ]);
}
const Bw = /* @__PURE__ */ yn(Cw, [["render", Iw]]), Nw = ["data-uk-icon"], Fw = {
  key: 2,
  "uk-nav-parent-icon": "",
  "data-test": "caret"
}, Dw = {
  class: "uk-nav-sub",
  "data-test": "slot"
}, jw = /* @__PURE__ */ mt({
  __name: "SideBarDropdown",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" },
    hideCaret: { type: Boolean, default: !1 }
  },
  setup(i) {
    return (s, a) => {
      const r = jt("font-awesome-icon");
      return I(), St(M(si), ei({ to: s.to }, s.$props, { custom: "" }), {
        default: Bt(({ isActive: u }) => [
          S("li", {
            class: Ce(["uk-parent", { "uk-open": u }])
          }, [
            S("a", ep(np(s.$attrs)), [
              s.icon ? (I(), j("span", {
                key: 0,
                "data-uk-icon": s.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, Nw)) : ht("", !0),
              s.faIcon ? (I(), St(r, {
                key: 1,
                class: "uk-margin-small-right",
                icon: s.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : ht("", !0),
              it(s.$slots, "label", {}, () => [
                _t(ut(s.label), 1)
              ]),
              s.hideCaret ? ht("", !0) : (I(), j("span", Fw))
            ], 16),
            S("ul", Dw, [
              it(s.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]);
    };
  }
}), Lw = { key: 0 }, Uw = ["href"], Mw = ["data-uk-icon"], zw = ["href", "onClick"], Hw = ["data-uk-icon"], qw = /* @__PURE__ */ mt({
  __name: "SideBarItem",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(i) {
    const s = i, a = Ae(() => s.to === "" || typeof s.to == "string" && s.to.startsWith("http"));
    return (r, u) => {
      const h = jt("font-awesome-icon");
      return a.value ? (I(), j("li", Lw, [
        S("a", {
          href: r.to.toString(),
          target: "_blank"
        }, [
          r.icon ? (I(), j("span", {
            key: 0,
            "data-uk-icon": r.icon,
            class: "uk-margin-small-right",
            "data-test": "icon"
          }, null, 8, Mw)) : ht("", !0),
          r.faIcon ? (I(), St(h, {
            key: 1,
            class: "uk-margin-small-right",
            icon: r.faIcon,
            "data-test": "faIcon"
          }, null, 8, ["icon"])) : ht("", !0),
          it(r.$slots, "default", {}, () => [
            _t(ut(r.label), 1)
          ])
        ], 8, Uw)
      ])) : (I(), St(M(si), ei({
        key: 1,
        to: r.to
      }, r.$props, { custom: "" }), {
        default: Bt(({ isExactActive: f, href: g, navigate: k }) => [
          S("li", {
            class: Ce({ "uk-active": f })
          }, [
            S("a", ei(r.$attrs, {
              href: g,
              onClick: k
            }), [
              r.icon ? (I(), j("span", {
                key: 0,
                "data-uk-icon": r.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, Hw)) : ht("", !0),
              r.faIcon ? (I(), St(h, {
                key: 1,
                class: "uk-margin-small-right",
                icon: r.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : ht("", !0),
              it(r.$slots, "default", {}, () => [
                _t(ut(r.label), 1)
              ])
            ], 16, zw)
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]));
    };
  }
}), Ww = { class: "uk-nav-header" }, Vw = /* @__PURE__ */ mt({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(i) {
    return (s, a) => (I(), j("li", Ww, ut(s.label), 1));
  }
}), Jw = {};
function Kw(i, s) {
  return I(), j("td", null, [
    it(i.$slots, "default")
  ]);
}
const Gw = /* @__PURE__ */ yn(Jw, [["render", Kw]]), Xw = {};
function Yw(i, s) {
  return I(), j("th", null, [
    it(i.$slots, "default")
  ]);
}
const Qw = /* @__PURE__ */ yn(Xw, [["render", Yw]]), Zw = {
  class: "uk-child-width-expand",
  "uk-grid": ""
}, ty = { class: "uk-text-left uk-text-meta" }, ey = { class: "uk-text-center" }, ny = ["value"], iy = { class: "uk-text-right" }, sy = { "aria-label": "Pagination" }, oy = {
  class: "uk-pagination uk-flex-right",
  "uk-margin": ""
}, Hc = /* @__PURE__ */ mt({
  __name: "SprunjePaginator",
  props: {
    sprunjer: {},
    rowsPerPageOptions: { default: () => [5, 10, 20, 50] }
  },
  setup(i) {
    const s = i, { size: a, page: r, totalPages: u, countFiltered: h, first: f, last: g } = s.sprunjer;
    function k(b) {
      r.value = b;
    }
    return (b, v) => {
      const A = jt("font-awesome-icon");
      return I(), j("div", Zw, [
        S("div", ty, [
          S("span", null, "Showing " + ut(M(f)) + " - " + ut(M(g)) + " of " + ut(M(h)), 1)
        ]),
        S("div", ey, [
          Zt(S("select", {
            class: "uk-select uk-form-small uk-form-width-small",
            "aria-label": "Select per page",
            "onUpdate:modelValue": v[0] || (v[0] = (x) => Mo(a) ? a.value = x : null)
          }, [
            (I(!0), j(Zi, null, Uo(b.rowsPerPageOptions, (x) => (I(), j("option", {
              key: x,
              value: x
            }, ut(x) + " per page ", 9, ny))), 128))
          ], 512), [
            [Ml, M(a)]
          ])
        ]),
        S("div", iy, [
          S("nav", sy, [
            S("ul", oy, [
              S("li", null, [
                S("a", {
                  onClick: v[1] || (v[1] = (x) => k(0)),
                  class: Ce(["uk-icon-link", { "uk-disabled": M(r) === 0 }])
                }, [
                  Ut(A, {
                    icon: "angles-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              S("li", null, [
                S("a", {
                  onClick: v[2] || (v[2] = (x) => k(M(r) - 1)),
                  class: Ce(["uk-icon-link", { "uk-disabled": M(r) === 0 }])
                }, [
                  Ut(A, {
                    icon: "angle-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              S("li", null, "Page " + ut(M(r) + 1) + " of " + ut(M(u) + 1), 1),
              S("li", null, [
                S("a", {
                  onClick: v[3] || (v[3] = (x) => k(M(r) + 1)),
                  class: Ce(["uk-icon-link", { "uk-disabled": M(r) === M(u) }])
                }, [
                  Ut(A, {
                    icon: "angle-right",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              S("li", null, [
                S("a", {
                  onClick: v[4] || (v[4] = (x) => k(M(u))),
                  class: Ce(["uk-icon-link", { "uk-disabled": M(r) === M(u) }])
                }, [
                  Ut(A, {
                    icon: "angles-right",
                    "fixed-width": ""
                  })
                ], 2)
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), ry = { class: "uk-table uk-table-striped" }, ay = /* @__PURE__ */ mt({
  __name: "SprunjeTable",
  props: {
    dataUrl: {
      type: String,
      required: !0
    },
    hidePagination: {
      type: Boolean,
      default: !1
    },
    // TODO : Add type AssociativeArray
    defaultSorts: {
      default: {}
    },
    defaultFilters: {
      default: {}
    },
    defaultSize: Number,
    defaultPage: Number
  },
  setup(i) {
    const s = i, a = ip(
      s.dataUrl,
      s.defaultSorts,
      s.defaultFilters,
      s.defaultSize,
      s.defaultPage
    ), { rows: r, fetch: u, loading: h } = a;
    return (f, g) => (I(), j(Zi, null, [
      it(f.$slots, "actions", {
        sprunjer: { fetch: M(u), loading: M(h) }
      }),
      S("table", ry, [
        S("thead", null, [
          S("tr", null, [
            it(f.$slots, "header")
          ])
        ]),
        S("tbody", null, [
          (I(!0), j(Zi, null, Uo(M(r), (k) => (I(), j("tr", {
            key: k.id
          }, [
            it(f.$slots, "body", { item: k })
          ]))), 128))
        ])
      ]),
      i.hidePagination ? ht("", !0) : it(f.$slots, "paginator", { key: 0 }, () => [
        Ut(Hc, { sprunjer: M(a) }, null, 8, ["sprunjer"])
      ])
    ], 64));
  }
}), my = {
  install: (i) => {
    i.component("UFAlertContainer", ap).component("UFAppLink", zo).component("UFInfoBox", vp).component("UFCardBox", xp).component("UFCardBoxBig", Ep).component("UFMainContent", Pp).component("UFHeaderPage", Np).component("UFFooterContent", Up).component("UFFormLogin", Jo).component("UFFormRegister", Mc).component("UFFormForgotPassword", zc).component("UFNavBar", Wb).component("UFNavBarDropdown", Zo).component("UFNavBarDropdownSeparator", Qb).component("UFNavBarItem", nw).component("UFNavBarLogin", sw).component("UFNavBarUserCard", hw).component("UFNavBarUserCardButton", mw).component("UFPageLogin", bw).component("UFPageRegister", yw).component("UFPageForgotPassword", $w).component("UFPageResendVerification", Ow).component("UFSideBar", Bw).component("UFSideBarDropdown", jw).component("UFSideBarItem", qw).component("UFSideBarLabel", Vw).component("UFSprunjeColumn", Gw).component("UFSprunjeHeader", Qw).component("UFSprunjePaginator", Hc).component("UFSprunjeTable", ay);
  }
};
export {
  ay as A,
  Up as F,
  Pp as M,
  Qb as N,
  my as P,
  Bw as S,
  ql as U,
  ap as _,
  zo as a,
  vp as b,
  Mp as c,
  xp as d,
  Ep as e,
  Np as f,
  zp as g,
  Jo as h,
  Mc as i,
  zc as j,
  Wb as k,
  Zo as l,
  nw as m,
  sw as n,
  hw as o,
  mw as p,
  bw as q,
  yw as r,
  $w as s,
  Ow as t,
  jw as u,
  qw as v,
  Vw as w,
  Gw as x,
  Qw as y,
  Hc as z
};
