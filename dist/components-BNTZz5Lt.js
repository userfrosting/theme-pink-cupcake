import { defineComponent as ht, ref as ge, watch as ep, computed as ce, resolveComponent as Pt, openBlock as I, createElementBlock as D, normalizeClass as ye, createBlock as gt, createCommentVNode as et, createTextVNode as _t, toDisplayString as ot, createVNode as At, renderSlot as Q, unref as U, withCtx as Dt, createElementVNode as x, createSlots as np, withModifiers as os, withDirectives as Lt, vModelText as ne, Fragment as Qe, renderList as ei, vModelSelect as zo, isRef as Ho, mergeProps as ni, normalizeProps as ip, guardReactiveProps as sp, inject as rs, provide as op } from "vue";
import { RouterLink as oi } from "vue-router";
import { defineStore as Hl } from "pinia";
import { useSprunjer as rp } from "@userfrosting/sprinkle-core/sprunjer";
var Nt = /* @__PURE__ */ ((i) => (i.Primary = "Primary", i.Secondary = "Secondary", i.Success = "Success", i.Warning = "Warning", i.Danger = "Danger", i.Info = "Info", i.Muted = "Muted", i))(Nt || {});
const ap = {
  key: 0,
  "data-test": "title"
}, lp = {
  key: 1,
  "data-test": "description"
}, cp = ["innerHTML"], up = /* @__PURE__ */ ht({
  __name: "UFAlert",
  props: {
    alert: {}
  },
  emits: ["close"],
  setup(i, { emit: s }) {
    const a = s, r = ge(!0);
    ep(
      () => i.alert,
      () => {
        g();
      }
    );
    const u = ce(() => {
      switch (i.alert.style) {
        case Nt.Success:
          return "uk-alert-success";
        case Nt.Warning:
          return "uk-alert-warning";
        case Nt.Danger:
          return "uk-alert-danger";
        case Nt.Info:
          return "uk-alert-info";
        case Nt.Secondary:
          return "uk-alert-secondary";
        case Nt.Muted:
          return "uk-alert-muted";
        default:
          return "uk-alert-primary";
      }
    }), h = ce(() => {
      switch (i.alert.style) {
        case Nt.Success:
          return "fa-solid fa-circle-check";
        case Nt.Warning:
          return "fa-solid fa-circle-exclamation";
        case Nt.Danger:
          return "fa-solid fa-triangle-exclamation";
        default:
          return "fa-solid fa-circle-info";
      }
    }), f = () => {
      a("close"), r.value = !1;
    }, g = () => {
      r.value = !0;
    };
    return (k, b) => {
      const v = Pt("font-awesome-icon");
      return r.value ? (I(), D("div", {
        key: 0,
        class: ye([u.value, "uk-alert"]),
        "uk-alert": ""
      }, [
        k.alert.title ? (I(), D("h3", ap, [
          k.alert.hideIcon ? et("", !0) : (I(), gt(v, {
            key: 0,
            icon: h.value,
            class: "uk-icon"
          }, null, 8, ["icon"])),
          _t(" " + ot(k.alert.title) + " ", 1),
          k.alert.closeBtn ? (I(), D("a", {
            key: 1,
            "data-test": "closeBtn",
            onClick: f,
            class: "uk-alert-close"
          }, [
            At(v, { icon: "xmark" })
          ])) : et("", !0)
        ])) : et("", !0),
        k.$slots.default ? (I(), D("p", lp, [
          Q(k.$slots, "default")
        ])) : k.alert.description ? (I(), D("p", {
          key: 2,
          innerHTML: k.alert.description,
          "data-test": "description"
        }, null, 8, cp)) : et("", !0)
      ], 2)) : et("", !0);
    };
  }
}), hp = /* @__PURE__ */ ht({
  __name: "UFLabel",
  props: {
    severity: { default: "" }
  },
  setup(i) {
    const s = ce(() => {
      switch (i.severity) {
        case Nt.Success:
          return "uk-label-success";
        case Nt.Warning:
          return "uk-label-warning";
        case Nt.Danger:
          return "uk-label-danger";
        case Nt.Info:
          return "uk-label-info";
        case Nt.Muted:
          return "uk-label-muted";
        case Nt.Secondary:
          return "uk-label-secondary";
        case Nt.Primary:
        default:
          return "uk-label-primary";
      }
    });
    return (a, r) => (I(), D("span", {
      class: ye(["uk-label", s.value])
    }, [
      Q(a.$slots, "default")
    ], 2));
  }
}), dp = ["href"], fp = { key: 1 }, qo = /* @__PURE__ */ ht({
  __name: "AppLink",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, a = ce(() => typeof s.to == "string" && s.to.startsWith("http")), r = ce(() => s.to), u = ce(() => s.to === "");
    return (h, f) => a.value ? (I(), D("a", {
      key: 0,
      href: r.value,
      target: "_blank"
    }, [
      Q(h.$slots, "default", {}, () => [
        _t(ot(h.label), 1)
      ])
    ], 8, dp)) : u.value ? (I(), D("div", fp, [
      Q(h.$slots, "default", {}, () => [
        _t(ot(h.label), 1)
      ])
    ])) : (I(), gt(U(oi), {
      key: 2,
      to: h.to
    }, {
      default: Dt(() => [
        Q(h.$slots, "default", {}, () => [
          _t(ot(h.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["to"]));
  }
}), pp = { class: "uk-card uk-card-default uk-card-body uk-card-small" }, mp = {
  class: "uk-grid-small uk-flex-middle",
  "uk-grid": ""
}, gp = {
  key: 0,
  class: "uk-width-auto"
}, vp = ["data-uk-icon"], bp = { class: "uk-width-expand" }, wp = {
  key: 0,
  class: "uk-margin-remove"
}, yp = {
  key: 1,
  class: "uk-text-meta uk-text-uppercase"
}, kp = /* @__PURE__ */ ht({
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
      const r = Pt("font-awesome-icon");
      return I(), gt(qo, {
        to: s.to,
        class: "uk-text-decoration-none"
      }, {
        default: Dt(() => [
          x("div", pp, [
            x("div", mp, [
              s.icon || s.faIcon ? (I(), D("div", gp, [
                s.icon ? (I(), D("span", {
                  key: 0,
                  "data-uk-icon": "icon: " + s.icon + "; ratio: 2",
                  class: "uk-margin-small-right"
                }, null, 8, vp)) : et("", !0),
                s.faIcon ? (I(), gt(r, {
                  key: 1,
                  icon: s.faIcon,
                  size: "2xl",
                  "fixed-width": ""
                }, null, 8, ["icon"])) : et("", !0)
              ])) : et("", !0),
              x("div", bp, [
                s.value !== null ? (I(), D("h4", wp, ot(s.value), 1)) : et("", !0),
                s.label !== null ? (I(), D("span", yp, ot(s.label), 1)) : et("", !0)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
}), $p = { class: "uk-card uk-card-default uk-card-small" }, xp = {
  key: 0,
  class: "uk-card-header"
}, Sp = { "data-test": "title" }, _p = {
  class: "uk-card-body",
  "data-test": "slot"
}, Ep = {
  key: 1,
  class: "uk-card-footer"
}, Op = /* @__PURE__ */ ht({
  __name: "CardBox",
  props: {
    title: String
  },
  setup(i) {
    return (s, a) => (I(), D("div", $p, [
      i.title || s.$slots.header ? (I(), D("div", xp, [
        x("h4", Sp, [
          Q(s.$slots, "header", {}, () => [
            _t(ot(i.title), 1)
          ])
        ])
      ])) : et("", !0),
      x("div", _p, [
        Q(s.$slots, "default")
      ]),
      s.$slots.footer ? (I(), D("div", Ep, [
        Q(s.$slots, "footer")
      ])) : et("", !0)
    ]));
  }
}), Tp = { class: "uk-flex uk-flex-center uk-flex-middle" }, Cp = { class: "uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl" }, Ap = /* @__PURE__ */ ht({
  __name: "CardBoxBig",
  props: {
    title: String
  },
  setup(i) {
    return (s, a) => {
      const r = Pt("UFCardBox");
      return I(), D("div", Tp, [
        x("div", Cp, [
          At(r, null, np({
            default: Dt(() => [
              Q(s.$slots, "default")
            ]),
            _: 2
          }, [
            s.$slots.header || i.title ? {
              name: "header",
              fn: Dt(() => [
                Q(s.$slots, "header", {}, () => [
                  _t(ot(i.title), 1)
                ])
              ]),
              key: "0"
            } : void 0,
            s.$slots.footer ? {
              name: "footer",
              fn: Dt(() => [
                Q(s.$slots, "footer")
              ]),
              key: "1"
            } : void 0
          ]), 1024)
        ])
      ]);
    };
  }
}), ri = (i, s) => {
  const a = i.__vccOpts || i;
  for (const [r, u] of s)
    a[r] = u;
  return a;
}, Pp = {}, Rp = {
  class: "uf-main uk-section uk-section-default uk-section-muted",
  "uk-height-viewport": "expand: true"
}, Ip = {
  class: "uk-container",
  "data-test": "slot"
};
function Bp(i, s) {
  return I(), D("div", Rp, [
    x("div", Ip, [
      Q(i.$slots, "default")
    ])
  ]);
}
const Fp = /* @__PURE__ */ ri(Pp, [["render", Bp]]), Np = { class: "uf-page-header" }, Dp = { class: "uk-margin-remove" }, jp = {
  key: 0,
  class: "uk-text-meta uk-margin-remove"
}, Up = /* @__PURE__ */ ht({
  __name: "HeaderPage",
  props: {
    title: {},
    caption: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), D("div", Np, [
      x("h3", Dp, ot(s.title), 1),
      s.caption ? (I(), D("p", jp, ot(s.caption), 1)) : et("", !0)
    ]));
  }
}), Lp = {}, Mp = { class: "uf-main uk-section uk-section-small uk-section-muted uk-text-center" }, zp = {
  class: "uk-text-small uk-text-center",
  "data-test": "slot"
};
function Hp(i, s) {
  return I(), D("footer", Mp, [
    s[0] || (s[0] = x("hr", null, null, -1)),
    x("p", zp, [
      Q(i.$slots, "default")
    ])
  ]);
}
const qp = /* @__PURE__ */ ri(Lp, [["render", Hp]]);
var Wp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vp(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ql = { exports: {} };
/*! UIkit 3.21.13 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */
(function(i, s) {
  (function(a, r) {
    i.exports = r();
  })(Wp, function() {
    const { hasOwnProperty: a, toString: r } = Object.prototype;
    function u(t, e) {
      return a.call(t, e);
    }
    const h = /\B([A-Z])/g, f = re((t) => t.replace(h, "-$1").toLowerCase()), g = /-(\w)/g, k = re(
      (t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(g, (e, n) => n.toUpperCase())
    ), b = re((t) => t.charAt(0).toUpperCase() + t.slice(1));
    function v(t, e) {
      var n;
      return (n = t == null ? void 0 : t.startsWith) == null ? void 0 : n.call(t, e);
    }
    function A(t, e) {
      var n;
      return (n = t == null ? void 0 : t.endsWith) == null ? void 0 : n.call(t, e);
    }
    function S(t, e) {
      var n;
      return (n = t == null ? void 0 : t.includes) == null ? void 0 : n.call(t, e);
    }
    function P(t, e) {
      var n;
      return (n = t == null ? void 0 : t.findIndex) == null ? void 0 : n.call(t, e);
    }
    const { isArray: T, from: O } = Array, { assign: q } = Object;
    function L(t) {
      return typeof t == "function";
    }
    function M(t) {
      return t !== null && typeof t == "object";
    }
    function mt(t) {
      return r.call(t) === "[object Object]";
    }
    function jt(t) {
      return M(t) && t === t.window;
    }
    function vt(t) {
      return Xt(t) === 9;
    }
    function Ot(t) {
      return Xt(t) >= 1;
    }
    function Gt(t) {
      return Xt(t) === 1;
    }
    function Xt(t) {
      return !jt(t) && M(t) && t.nodeType;
    }
    function oe(t) {
      return typeof t == "boolean";
    }
    function ft(t) {
      return typeof t == "string";
    }
    function _n(t) {
      return typeof t == "number";
    }
    function fe(t) {
      return _n(t) || ft(t) && !isNaN(t - parseFloat(t));
    }
    function hi(t) {
      return !(T(t) ? t.length : M(t) && Object.keys(t).length);
    }
    function It(t) {
      return t === void 0;
    }
    function vs(t) {
      return oe(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function ve(t) {
      const e = Number(t);
      return isNaN(e) ? !1 : e;
    }
    function G(t) {
      return parseFloat(t) || 0;
    }
    function kt(t) {
      return t && tt(t)[0];
    }
    function tt(t) {
      return Ot(t) ? [t] : Array.from(t || []).filter(Ot);
    }
    function Re(t) {
      if (jt(t))
        return t;
      t = kt(t);
      const e = vt(t) ? t : t == null ? void 0 : t.ownerDocument;
      return (e == null ? void 0 : e.defaultView) || window;
    }
    function En(t, e) {
      return t === e || M(t) && M(e) && Object.keys(t).length === Object.keys(e).length && sn(t, (n, o) => n === e[o]);
    }
    function bs(t, e, n) {
      return t.replace(new RegExp(`${e}|${n}`, "g"), (o) => o === e ? n : e);
    }
    function Ie(t) {
      return t[t.length - 1];
    }
    function sn(t, e) {
      for (const n in t)
        if (e(t[n], n) === !1)
          return !1;
      return !0;
    }
    function nr(t, e) {
      return t.slice().sort(
        ({ [e]: n = 0 }, { [e]: o = 0 }) => n > o ? 1 : o > n ? -1 : 0
      );
    }
    function Be(t, e) {
      return t.reduce(
        (n, o) => n + G(L(e) ? e(o) : o[e]),
        0
      );
    }
    function ir(t, e) {
      const n = /* @__PURE__ */ new Set();
      return t.filter(({ [e]: o }) => n.has(o) ? !1 : n.add(o));
    }
    function ws(t, e) {
      return e.reduce((n, o) => ({ ...n, [o]: t[o] }), {});
    }
    function Ut(t, e = 0, n = 1) {
      return Math.min(Math.max(ve(t) || 0, e), n);
    }
    function rt() {
    }
    function di(...t) {
      return [
        ["bottom", "top"],
        ["right", "left"]
      ].every(
        ([e, n]) => Math.min(...t.map(({ [e]: o }) => o)) - Math.max(...t.map(({ [n]: o }) => o)) > 0
      );
    }
    function fi(t, e) {
      return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function ys(t, e, n) {
      const o = e === "width" ? "height" : "width";
      return {
        [o]: t[e] ? Math.round(n * t[o] / t[e]) : t[o],
        [e]: n
      };
    }
    function sr(t, e) {
      t = { ...t };
      for (const n in t)
        t = t[n] > e[n] ? ys(t, n, e[n]) : t;
      return t;
    }
    function Wc(t, e) {
      t = sr(t, e);
      for (const n in t)
        t = t[n] < e[n] ? ys(t, n, e[n]) : t;
      return t;
    }
    const ks = { ratio: ys, contain: sr, cover: Wc };
    function Yt(t, e, n = 0, o = !1) {
      e = tt(e);
      const { length: l } = e;
      return l ? (t = fe(t) ? ve(t) : t === "next" ? n + 1 : t === "previous" ? n - 1 : t === "last" ? l - 1 : e.indexOf(kt(t)), o ? Ut(t, 0, l - 1) : (t %= l, t < 0 ? t + l : t)) : -1;
    }
    function re(t) {
      const e = /* @__PURE__ */ Object.create(null);
      return (n, ...o) => e[n] || (e[n] = t(n, ...o));
    }
    function X(t, ...e) {
      for (const n of tt(t)) {
        const o = Fe(e).filter((l) => !H(n, l));
        o.length && n.classList.add(...o);
      }
    }
    function st(t, ...e) {
      for (const n of tt(t)) {
        const o = Fe(e).filter((l) => H(n, l));
        o.length && n.classList.remove(...o);
      }
    }
    function pi(t, e, n) {
      n = Fe(n), e = Fe(e).filter((o) => !S(n, o)), st(t, e), X(t, n);
    }
    function H(t, e) {
      return [e] = Fe(e), tt(t).some((n) => n.classList.contains(e));
    }
    function $t(t, e, n) {
      const o = Fe(e);
      It(n) || (n = !!n);
      for (const l of tt(t))
        for (const c of o)
          l.classList.toggle(c, n);
    }
    function Fe(t) {
      return t ? T(t) ? t.map(Fe).flat() : String(t).split(" ").filter(Boolean) : [];
    }
    function F(t, e, n) {
      var o;
      if (M(e)) {
        for (const l in e)
          F(t, l, e[l]);
        return;
      }
      if (It(n))
        return (o = kt(t)) == null ? void 0 : o.getAttribute(e);
      for (const l of tt(t))
        L(n) && (n = n.call(l, F(l, e))), n === null ? On(l, e) : l.setAttribute(e, n);
    }
    function $e(t, e) {
      return tt(t).some((n) => n.hasAttribute(e));
    }
    function On(t, e) {
      tt(t).forEach((n) => n.removeAttribute(e));
    }
    function Bt(t, e) {
      for (const n of [e, `data-${e}`])
        if ($e(t, n))
          return F(t, n);
    }
    const Ne = typeof window < "u", Tt = Ne && document.dir === "rtl", on = Ne && "ontouchstart" in window, rn = Ne && window.PointerEvent, ae = rn ? "pointerdown" : on ? "touchstart" : "mousedown", mi = rn ? "pointermove" : on ? "touchmove" : "mousemove", xe = rn ? "pointerup" : on ? "touchend" : "mouseup", De = rn ? "pointerenter" : on ? "" : "mouseenter", an = rn ? "pointerleave" : on ? "" : "mouseleave", gi = rn ? "pointercancel" : "touchcancel", Vc = {
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
    function $s(t) {
      return tt(t).some((e) => Vc[e.tagName.toLowerCase()]);
    }
    const Jc = Ne && Element.prototype.checkVisibility || function() {
      return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
    };
    function xt(t) {
      return tt(t).some((e) => Jc.call(e));
    }
    const Tn = "input,select,textarea,button";
    function vi(t) {
      return tt(t).some((e) => nt(e, Tn));
    }
    const Cn = `${Tn},a[href],[tabindex]`;
    function bi(t) {
      return nt(t, Cn);
    }
    function lt(t) {
      var e;
      return (e = kt(t)) == null ? void 0 : e.parentElement;
    }
    function An(t, e) {
      return tt(t).filter((n) => nt(n, e));
    }
    function nt(t, e) {
      return tt(t).some((n) => n.matches(e));
    }
    function Pn(t, e) {
      const n = [];
      for (; t = lt(t); )
        (!e || nt(t, e)) && n.push(t);
      return n;
    }
    function ct(t, e) {
      t = kt(t);
      const n = t ? O(t.children) : [];
      return e ? An(n, e) : n;
    }
    function be(t, e) {
      return e ? tt(t).indexOf(kt(e)) : ct(lt(t)).indexOf(t);
    }
    function ln(t) {
      return t = kt(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
    }
    function xs(t) {
      if (ln(t)) {
        const { hash: e, ownerDocument: n } = kt(t), o = decodeURIComponent(e).slice(1);
        return n.getElementById(o) || n.getElementsByName(o)[0];
      }
    }
    function Mt(t, e) {
      return Ss(t, or(t, e));
    }
    function Rn(t, e) {
      return In(t, or(t, e));
    }
    function Ss(t, e) {
      return kt(lr(t, kt(e), "querySelector"));
    }
    function In(t, e) {
      return tt(lr(t, kt(e), "querySelectorAll"));
    }
    function or(t, e = document) {
      return vt(e) || rr(t).isContextSelector ? e : e.ownerDocument;
    }
    const Kc = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, Gc = /(\([^)]*\)|[^,])+/g, rr = re((t) => {
      let e = !1;
      if (!t || !ft(t))
        return {};
      const n = [];
      for (let o of t.match(Gc))
        o = o.trim().replace(Kc, "$1 *"), e || (e = ["!", "+", "~", "-", ">"].includes(o[0])), n.push(o);
      return {
        selector: n.join(","),
        selectors: n,
        isContextSelector: e
      };
    }), Xc = /(\([^)]*\)|\S)*/, ar = re((t) => {
      t = t.slice(1).trim();
      const [e] = t.match(Xc);
      return [e, t.slice(e.length + 1)];
    });
    function lr(t, e = document, n) {
      const o = rr(t);
      if (!o.isContextSelector)
        return o.selector ? _s(e, n, o.selector) : t;
      t = "";
      const l = o.selectors.length === 1;
      for (let c of o.selectors) {
        let d, p = e;
        if (c[0] === "!" && ([d, c] = ar(c), p = e.parentElement.closest(d), !c && l) || p && c[0] === "-" && ([d, c] = ar(c), p = p.previousElementSibling, p = nt(p, d) ? p : null, !c && l))
          return p;
        if (p) {
          if (l)
            return c[0] === "~" || c[0] === "+" ? (c = `:scope > :nth-child(${be(p) + 1}) ${c}`, p = p.parentElement) : c[0] === ">" && (c = `:scope ${c}`), _s(p, n, c);
          t += `${t ? "," : ""}${Yc(p)} ${c}`;
        }
      }
      return vt(e) || (e = e.ownerDocument), _s(e, n, t);
    }
    function _s(t, e, n) {
      try {
        return t[e](n);
      } catch {
        return null;
      }
    }
    function Yc(t) {
      const e = [];
      for (; t.parentNode; ) {
        const n = F(t, "id");
        if (n) {
          e.unshift(`#${Es(n)}`);
          break;
        } else {
          let { tagName: o } = t;
          o !== "HTML" && (o += `:nth-child(${be(t) + 1})`), e.unshift(o), t = t.parentNode;
        }
      }
      return e.join(" > ");
    }
    function Es(t) {
      return ft(t) ? CSS.escape(t) : "";
    }
    function W(...t) {
      let [e, n, o, l, c = !1] = Os(t);
      l.length > 1 && (l = Zc(l)), c != null && c.self && (l = tu(l)), o && (l = Qc(o, l));
      for (const d of n)
        for (const p of e)
          p.addEventListener(d, l, c);
      return () => Se(e, n, l, c);
    }
    function Se(...t) {
      let [e, n, , o, l = !1] = Os(t);
      for (const c of n)
        for (const d of e)
          d.removeEventListener(c, o, l);
    }
    function bt(...t) {
      const [e, n, o, l, c = !1, d] = Os(t), p = W(
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
    function j(t, e, n) {
      return Ts(t).every(
        (o) => o.dispatchEvent(cn(e, !0, !0, n))
      );
    }
    function cn(t, e = !0, n = !1, o) {
      return ft(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: n, detail: o })), t;
    }
    function Os(t) {
      return t[0] = Ts(t[0]), ft(t[1]) && (t[1] = t[1].split(" ")), L(t[2]) && t.splice(2, 0, !1), t;
    }
    function Qc(t, e) {
      return (n) => {
        const o = t[0] === ">" ? In(t, n.currentTarget).reverse().find((l) => l.contains(n.target)) : n.target.closest(t);
        o && (n.current = o, e.call(this, n), delete n.current);
      };
    }
    function Zc(t) {
      return (e) => T(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function tu(t) {
      return function(e) {
        if (e.target === e.currentTarget || e.target === e.current)
          return t.call(null, e);
      };
    }
    function cr(t) {
      return t && "addEventListener" in t;
    }
    function eu(t) {
      return cr(t) ? t : kt(t);
    }
    function Ts(t) {
      return T(t) ? t.map(eu).filter(Boolean) : ft(t) ? In(t) : cr(t) ? [t] : tt(t);
    }
    function ue(t) {
      return t.pointerType === "touch" || !!t.touches;
    }
    function we(t) {
      var e, n;
      const { clientX: o, clientY: l } = ((e = t.touches) == null ? void 0 : e[0]) || ((n = t.changedTouches) == null ? void 0 : n[0]) || t;
      return { x: o, y: l };
    }
    const nu = {
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
        if (ft(e)) {
          if (e = wi(e), It(n))
            return getComputedStyle(c).getPropertyValue(e);
          c.style.setProperty(
            e,
            fe(n) && !nu[e] ? `${n}px` : n || _n(n) ? n : "",
            o
          );
        } else if (T(e)) {
          const d = {};
          for (const p of e)
            d[p] = w(c, p);
          return d;
        } else if (M(e))
          for (const d in e)
            w(c, d, e[d], n);
      return l[0];
    }
    const wi = re((t) => {
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
    }), Cs = "uk-transition", As = "transitionend", Ps = "transitioncanceled";
    function iu(t, e, n = 400, o = "linear") {
      return n = Math.round(n), Promise.all(
        tt(t).map(
          (l) => new Promise((c, d) => {
            for (const m in e)
              w(l, m);
            const p = setTimeout(() => j(l, As), n);
            bt(
              l,
              [As, Ps],
              ({ type: m }) => {
                clearTimeout(p), st(l, Cs), w(l, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
                }), m === Ps ? d() : c(l);
              },
              { self: !0 }
            ), X(l, Cs), w(l, {
              transitionProperty: Object.keys(e).map(wi).join(","),
              transitionDuration: `${n}ms`,
              transitionTimingFunction: o,
              ...e
            });
          })
        )
      );
    }
    const ut = {
      start: iu,
      async stop(t) {
        j(t, As), await Promise.resolve();
      },
      async cancel(t) {
        j(t, Ps), await Promise.resolve();
      },
      inProgress(t) {
        return H(t, Cs);
      }
    }, Bn = "uk-animation", ur = "animationend", yi = "animationcanceled";
    function hr(t, e, n = 200, o, l) {
      return Promise.all(
        tt(t).map(
          (c) => new Promise((d, p) => {
            H(c, Bn) && j(c, yi);
            const m = [
              e,
              Bn,
              `${Bn}-${l ? "leave" : "enter"}`,
              o && `uk-transform-origin-${o}`,
              l && `${Bn}-reverse`
            ], y = setTimeout(() => j(c, ur), n);
            bt(
              c,
              [ur, yi],
              ({ type: $ }) => {
                clearTimeout(y), $ === yi ? p() : d(c), w(c, "animationDuration", ""), st(c, m);
              },
              { self: !0 }
            ), w(c, "animationDuration", `${n}ms`), X(c, m);
          })
        )
      );
    }
    const _e = {
      in: hr,
      out(t, e, n, o) {
        return hr(t, e, n, o, !0);
      },
      inProgress(t) {
        return H(t, Bn);
      },
      cancel(t) {
        j(t, yi);
      }
    };
    function su(t) {
      if (document.readyState !== "loading") {
        t();
        return;
      }
      bt(document, "DOMContentLoaded", t);
    }
    function wt(t, ...e) {
      return e.some((n) => {
        var o;
        return ((o = t == null ? void 0 : t.tagName) == null ? void 0 : o.toLowerCase()) === n.toLowerCase();
      });
    }
    function dr(t) {
      return t = V(t), t.innerHTML = "", t;
    }
    function Ee(t, e) {
      return It(e) ? V(t).innerHTML : St(dr(t), e);
    }
    const ou = xi("prepend"), St = xi("append"), ki = xi("before"), $i = xi("after");
    function xi(t) {
      return function(e, n) {
        var o;
        const l = tt(ft(n) ? je(n) : n);
        return (o = V(e)) == null || o[t](...l), fr(l);
      };
    }
    function Qt(t) {
      tt(t).forEach((e) => e.remove());
    }
    function Si(t, e) {
      for (e = kt(ki(t, e)); e.firstElementChild; )
        e = e.firstElementChild;
      return St(e, t), e;
    }
    function Rs(t, e) {
      return tt(
        tt(t).map(
          (n) => n.hasChildNodes() ? Si(O(n.childNodes), e) : St(n, e)
        )
      );
    }
    function Fn(t) {
      tt(t).map(lt).filter((e, n, o) => o.indexOf(e) === n).forEach((e) => e.replaceWith(...e.childNodes));
    }
    const ru = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function je(t) {
      const e = ru.exec(t);
      if (e)
        return document.createElement(e[1]);
      const n = document.createElement("template");
      return n.innerHTML = t.trim(), fr(n.content.childNodes);
    }
    function fr(t) {
      return t.length > 1 ? t : t[0];
    }
    function Oe(t, e) {
      if (Gt(t))
        for (e(t), t = t.firstElementChild; t; )
          Oe(t, e), t = t.nextElementSibling;
    }
    function V(t, e) {
      return pr(t) ? kt(je(t)) : Ss(t, e);
    }
    function dt(t, e) {
      return pr(t) ? tt(je(t)) : In(t, e);
    }
    function pr(t) {
      return ft(t) && v(t.trim(), "<");
    }
    const Ue = {
      width: ["left", "right"],
      height: ["top", "bottom"]
    };
    function N(t) {
      const e = Gt(t) ? kt(t).getBoundingClientRect() : { height: zt(t), width: _i(t), top: 0, left: 0 };
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
      const n = N(t);
      if (t) {
        const { scrollY: o, scrollX: l } = Re(t), c = { height: o, width: l };
        for (const d in Ue)
          for (const p of Ue[d])
            n[p] += c[d];
      }
      if (!e)
        return n;
      for (const o of ["left", "top"])
        w(t, o, e[o] - n[o]);
    }
    function Is(t) {
      let { top: e, left: n } = Z(t);
      const {
        ownerDocument: { body: o, documentElement: l },
        offsetParent: c
      } = kt(t);
      let d = c || l;
      for (; d && (d === o || d === l) && w(d, "position") === "static"; )
        d = d.parentNode;
      if (Gt(d)) {
        const p = Z(d);
        e -= p.top + G(w(d, "borderTopWidth")), n -= p.left + G(w(d, "borderLeftWidth"));
      }
      return {
        top: e - G(w(t, "marginTop")),
        left: n - G(w(t, "marginLeft"))
      };
    }
    function Nn(t) {
      t = kt(t);
      const e = [t.offsetTop, t.offsetLeft];
      for (; t = t.offsetParent; )
        if (e[0] += t.offsetTop + G(w(t, "borderTopWidth")), e[1] += t.offsetLeft + G(w(t, "borderLeftWidth")), w(t, "position") === "fixed") {
          const n = Re(t);
          return e[0] += n.scrollY, e[1] += n.scrollX, e;
        }
      return e;
    }
    const zt = mr("height"), _i = mr("width");
    function mr(t) {
      const e = b(t);
      return (n, o) => {
        if (It(o)) {
          if (jt(n))
            return n[`inner${e}`];
          if (vt(n)) {
            const l = n.documentElement;
            return Math.max(l[`offset${e}`], l[`scroll${e}`]);
          }
          return n = kt(n), o = w(n, t), o = o === "auto" ? n[`offset${e}`] : G(o) || 0, o - un(n, t);
        } else
          return w(
            n,
            t,
            !o && o !== 0 ? "" : +o + un(n, t) + "px"
          );
      };
    }
    function un(t, e, n = "border-box") {
      return w(t, "boxSizing") === n ? Be(
        Ue[e],
        (o) => G(w(t, `padding-${o}`)) + G(w(t, `border-${o}-width`))
      ) : 0;
    }
    function Ei(t) {
      for (const e in Ue)
        for (const n in Ue[e])
          if (Ue[e][n] === t)
            return Ue[e][1 - n];
      return t;
    }
    function Rt(t, e = "width", n = window, o = !1) {
      return ft(t) ? Be(lu(t), (l) => {
        const c = uu(l);
        return c ? hu(
          c === "vh" ? du() : c === "vw" ? _i(Re(n)) : o ? n[`offset${b(e)}`] : N(n)[e],
          l
        ) : l;
      }) : G(t);
    }
    const au = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, lu = re((t) => t.toString().replace(/\s/g, "").match(au) || []), cu = /(?:v[hw]|%)$/, uu = re((t) => (t.match(cu) || [])[0]);
    function hu(t, e) {
      return t * G(e) / 100;
    }
    let Dn, hn;
    function du() {
      return Dn || (hn || (hn = V("<div>"), w(hn, {
        height: "100vh",
        position: "fixed"
      }), W(window, "resize", () => Dn = null)), St(document.body, hn), Dn = hn.clientHeight, Qt(hn), Dn);
    }
    const Te = { read: fu, write: pu, clear: mu, flush: gr }, Oi = [], Ti = [];
    function fu(t) {
      return Oi.push(t), Fs(), t;
    }
    function pu(t) {
      return Ti.push(t), Fs(), t;
    }
    function mu(t) {
      br(Oi, t), br(Ti, t);
    }
    let Bs = !1;
    function gr() {
      vr(Oi), vr(Ti.splice(0)), Bs = !1, (Oi.length || Ti.length) && Fs();
    }
    function Fs() {
      Bs || (Bs = !0, queueMicrotask(gr));
    }
    function vr(t) {
      let e;
      for (; e = t.shift(); )
        try {
          e();
        } catch (n) {
          console.error(n);
        }
    }
    function br(t, e) {
      const n = t.indexOf(e);
      return ~n && t.splice(n, 1);
    }
    class wr {
      init() {
        this.positions = [];
        let e;
        this.unbind = W(document, "mousemove", (n) => e = we(n)), this.interval = setInterval(() => {
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
        const n = N(e), { left: o, right: l, top: c, bottom: d } = n, [p] = this.positions, m = Ie(this.positions), y = [p, m];
        return fi(m, n) ? !1 : [
          [
            { x: o, y: c },
            { x: l, y: d }
          ],
          [
            { x: o, y: d },
            { x: l, y: c }
          ]
        ].some((C) => {
          const R = gu(y, C);
          return R && fi(R, n);
        });
      }
    }
    function gu([{ x: t, y: e }, { x: n, y: o }], [{ x: l, y: c }, { x: d, y: p }]) {
      const m = (p - c) * (n - t) - (d - l) * (o - e);
      if (m === 0)
        return !1;
      const y = ((d - l) * (e - c) - (p - c) * (t - l)) / m;
      return y < 0 ? !1 : { x: t + y * (n - t), y: e + y * (o - e) };
    }
    function yr(t, e, n = {}, { intersecting: o = !0 } = {}) {
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
    const vu = Ne && window.ResizeObserver;
    function jn(t, e, n = { box: "border-box" }) {
      if (vu)
        return kr(ResizeObserver, t, e, n);
      const o = [W(window, "load resize", e), W(document, "loadedmetadata load", e, !0)];
      return { disconnect: () => o.map((l) => l()) };
    }
    function Ns(t) {
      return { disconnect: W([window, window.visualViewport], "resize", t) };
    }
    function Ds(t, e, n) {
      return kr(MutationObserver, t, e, n);
    }
    function kr(t, e, n, o) {
      const l = new t(n);
      for (const c of tt(e))
        l.observe(c, o);
      return l;
    }
    function js(t) {
      Pi(t) && Us(t, { func: "playVideo", method: "play" }), Ai(t) && t.play().catch(rt);
    }
    function Ci(t) {
      Pi(t) && Us(t, { func: "pauseVideo", method: "pause" }), Ai(t) && t.pause();
    }
    function $r(t) {
      Pi(t) && Us(t, { func: "mute", method: "setVolume", value: 0 }), Ai(t) && (t.muted = !0);
    }
    function xr(t) {
      return Ai(t) || Pi(t);
    }
    function Ai(t) {
      return wt(t, "video");
    }
    function Pi(t) {
      return wt(t, "iframe") && (Sr(t) || _r(t));
    }
    function Sr(t) {
      return !!t.src.match(
        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
      );
    }
    function _r(t) {
      return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function Us(t, e) {
      await wu(t), Er(t, e);
    }
    function Er(t, e) {
      t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
    }
    const Ls = "_ukPlayer";
    let bu = 0;
    function wu(t) {
      if (t[Ls])
        return t[Ls];
      const e = Sr(t), n = _r(t), o = ++bu;
      let l;
      return t[Ls] = new Promise((c) => {
        e && bt(t, "load", () => {
          const d = () => Er(t, { event: "listening", id: o });
          l = setInterval(d, 100), d();
        }), bt(window, "message", c, !1, ({ data: d }) => {
          try {
            return d = JSON.parse(d), e && (d == null ? void 0 : d.id) === o && d.event === "onReady" || n && Number(d == null ? void 0 : d.player_id) === o;
          } catch {
          }
        }), t.src = `${t.src}${S(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${o}`}`;
      }).then(() => clearInterval(l));
    }
    function yu(t, e = 0, n = 0) {
      return xt(t) ? di(
        ...Me(t).map((o) => {
          const { top: l, left: c, bottom: d, right: p } = Zt(o);
          return {
            top: l - e,
            left: c - n,
            bottom: d + e,
            right: p + n
          };
        }).concat(Z(t))
      ) : !1;
    }
    function Or(t, { offset: e = 0 } = {}) {
      const n = xt(t) ? Le(t, !1, ["hidden"]) : [];
      return n.reduce(
        (d, p, m) => {
          const { scrollTop: y, scrollHeight: $, offsetHeight: C } = p, R = Zt(p), B = $ - R.height, { height: z, top: Y } = n[m - 1] ? Zt(n[m - 1]) : Z(t);
          let it = Math.ceil(Y - R.top - e + y);
          return e > 0 && C < z + e ? it += e : e = 0, it > B ? (e -= it - B, it = B) : it < 0 && (e -= it, it = 0), () => o(p, it - y, t, B).then(d);
        },
        () => Promise.resolve()
      )();
      function o(d, p, m, y) {
        return new Promise(($) => {
          const C = d.scrollTop, R = l(Math.abs(p)), B = Date.now(), z = Hs(d) === d, Y = Z(m).top + (z ? 0 : C);
          let it = 0, pe = 15;
          (function wn() {
            const yn = c(Ut((Date.now() - B) / R));
            let me = 0;
            n[0] === d && C + p < y && (me = Z(m).top + (z ? 0 : d.scrollTop) - Y - N(Ms(m)).height), w(d, "scrollBehavior") !== "auto" && w(d, "scrollBehavior", "auto"), d.scrollTop = C + (p + me) * yn, w(d, "scrollBehavior", ""), yn === 1 && (it === me || !pe--) ? $() : (it = me, requestAnimationFrame(wn));
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
    function Ri(t, e = 0, n = 0) {
      if (!xt(t))
        return 0;
      const o = Ce(t, !0), { scrollHeight: l, scrollTop: c } = o, { height: d } = Zt(o), p = l - d, m = Nn(t)[0] - Nn(o)[0], y = Math.max(0, m - d + e), $ = Math.min(p, m + t.offsetHeight - n);
      return y < $ ? Ut((c - y) / ($ - y)) : 1;
    }
    function Le(t, e = !1, n = []) {
      const o = Hs(t);
      let l = Pn(t).reverse();
      l = l.slice(l.indexOf(o) + 1);
      const c = P(l, (d) => w(d, "position") === "fixed");
      return ~c && (l = l.slice(c)), [o].concat(
        l.filter(
          (d) => w(d, "overflow").split(" ").some((p) => S(["auto", "scroll", ...n], p)) && (!e || d.scrollHeight > Zt(d).height)
        )
      ).reverse();
    }
    function Ce(...t) {
      return Le(...t)[0];
    }
    function Me(t) {
      return Le(t, !1, ["hidden", "clip"]);
    }
    function Zt(t) {
      const e = Re(t), n = Hs(t), o = !Ot(t) || t.contains(n);
      if (o && e.visualViewport) {
        let { height: m, width: y, scale: $, pageTop: C, pageLeft: R } = e.visualViewport;
        return m = Math.round(m * $), y = Math.round(y * $), { height: m, width: y, top: C, left: R, bottom: C + m, right: R + y };
      }
      let l = Z(o ? e : t);
      if (w(t, "display") === "inline")
        return l;
      const { body: c, documentElement: d } = e.document, p = o ? n === d || // In quirks mode the scrolling element is body, even though the viewport is html
      n.clientHeight < c.clientHeight ? n : c : t;
      for (let [m, y, $, C] of [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
      ]) {
        const R = l[m] % 1;
        l[$] += G(w(p, `border-${$}-width`)), l[m] = l[y] = p[`client${b(m)}`] - (R ? R < 0.5 ? -R : 1 - R : 0), l[C] = l[m] + l[$];
      }
      return l;
    }
    function Ms(t) {
      const { left: e, width: n, top: o } = N(t);
      for (const l of o ? [0, o] : [0]) {
        let c;
        for (const d of Re(t).document.elementsFromPoint(e + n / 2, l))
          !d.contains(t) && // If e.g. Offcanvas is not yet closed
          !H(d, "uk-togglable-leave") && (zs(d, "fixed") && Tr(
            Pn(t).reverse().find(
              (p) => !p.contains(d) && !zs(p, "static")
            )
          ) < Tr(d) || zs(d, "sticky") && lt(d).contains(t)) && (!c || N(c).height < N(d).height) && (c = d);
        if (c)
          return c;
      }
    }
    function Tr(t) {
      return G(w(t, "zIndex"));
    }
    function zs(t, e) {
      return w(t, "position") === e;
    }
    function Hs(t) {
      return Re(t).document.scrollingElement;
    }
    const te = [
      ["width", "x", "left", "right"],
      ["height", "y", "top", "bottom"]
    ];
    function Cr(t, e, n) {
      n = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...n.attach
        },
        offset: [0, 0],
        placement: [],
        ...n
      }, T(e) || (e = [e, e]), Z(t, Ar(t, e, n));
    }
    function Ar(t, e, n) {
      const o = Pr(t, e, n), { boundary: l, viewportOffset: c = 0, placement: d } = n;
      let p = o;
      for (const [m, [y, , $, C]] of Object.entries(te)) {
        const R = ku(t, e[m], c, l, m);
        if (Ii(o, R, m))
          continue;
        let B = 0;
        if (d[m] === "flip") {
          const z = n.attach.target[m];
          if (z === C && o[C] <= R[C] || z === $ && o[$] >= R[$])
            continue;
          B = xu(t, e, n, m)[$] - o[$];
          const Y = $u(t, e[m], c, m);
          if (!Ii(qs(o, B, m), Y, m)) {
            if (Ii(o, Y, m))
              continue;
            if (n.recursion)
              return !1;
            const it = Su(t, e, n);
            if (it && Ii(it, Y, 1 - m))
              return it;
            continue;
          }
        } else if (d[m] === "shift") {
          const z = Z(e[m]), { offset: Y } = n;
          B = Ut(
            Ut(o[$], R[$], R[C] - o[y]),
            z[$] - o[y] + Y[m],
            z[C] - Y[m]
          ) - o[$];
        }
        p = qs(p, B, m);
      }
      return p;
    }
    function Pr(t, e, n) {
      let { attach: o, offset: l } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...n.attach
        },
        offset: [0, 0],
        ...n
      }, c = Z(t);
      for (const [d, [p, , m, y]] of Object.entries(te)) {
        const $ = o.target[d] === o.element[d] ? Zt(e[d]) : Z(e[d]);
        c = qs(
          c,
          $[m] - c[m] + Rr(o.target[d], y, $[p]) - Rr(o.element[d], y, c[p]) + +l[d],
          d
        );
      }
      return c;
    }
    function qs(t, e, n) {
      const [, o, l, c] = te[n], d = { ...t };
      return d[l] = t[o] = t[l] + e, d[c] += e, d;
    }
    function Rr(t, e, n) {
      return t === "center" ? n / 2 : t === e ? n : 0;
    }
    function ku(t, e, n, o, l) {
      let c = Br(...Ir(t, e).map(Zt));
      return n && (c[te[l][2]] += n, c[te[l][3]] -= n), o && (c = Br(
        c,
        Z(T(o) ? o[l] : o)
      )), c;
    }
    function $u(t, e, n, o) {
      const [l, c, d, p] = te[o], [m] = Ir(t, e), y = Zt(m);
      return ["auto", "scroll"].includes(w(m, `overflow-${c}`)) && (y[d] -= m[`scroll${b(d)}`], y[p] = y[d] + m[`scroll${b(l)}`]), y[d] += n, y[p] -= n, y;
    }
    function Ir(t, e) {
      return Me(e).filter((n) => n.contains(t));
    }
    function Br(...t) {
      let e = {};
      for (const n of t)
        for (const [, , o, l] of te)
          e[o] = Math.max(e[o] || 0, n[o]), e[l] = Math.min(...[e[l], n[l]].filter(Boolean));
      return e;
    }
    function Ii(t, e, n) {
      const [, , o, l] = te[n];
      return t[o] >= e[o] && t[l] <= e[l];
    }
    function xu(t, e, { offset: n, attach: o }, l) {
      return Pr(t, e, {
        attach: {
          element: Fr(o.element, l),
          target: Fr(o.target, l)
        },
        offset: _u(n, l)
      });
    }
    function Su(t, e, n) {
      return Ar(t, e, {
        ...n,
        attach: {
          element: n.attach.element.map(Nr).reverse(),
          target: n.attach.target.map(Nr).reverse()
        },
        offset: n.offset.reverse(),
        placement: n.placement.reverse(),
        recursion: !0
      });
    }
    function Fr(t, e) {
      const n = [...t], o = te[e].indexOf(t[e]);
      return ~o && (n[e] = te[e][1 - o % 2 + 2]), n;
    }
    function Nr(t) {
      for (let e = 0; e < te.length; e++) {
        const n = te[e].indexOf(t);
        if (~n)
          return te[1 - e][n % 2 + 2];
      }
    }
    function _u(t, e) {
      return t = [...t], t[e] *= -1, t;
    }
    var Eu = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $: V,
      $$: dt,
      Animation: _e,
      Dimensions: ks,
      MouseTracker: wr,
      Transition: ut,
      addClass: X,
      after: $i,
      append: St,
      apply: Oe,
      assign: q,
      attr: F,
      before: ki,
      boxModelAdjust: un,
      camelize: k,
      children: ct,
      clamp: Ut,
      createEvent: cn,
      css: w,
      data: Bt,
      dimensions: N,
      each: sn,
      empty: dr,
      endsWith: A,
      escape: Es,
      fastdom: Te,
      filter: An,
      find: Ss,
      findAll: In,
      findIndex: P,
      flipPosition: Ei,
      fragment: je,
      getCoveringElement: Ms,
      getEventPos: we,
      getIndex: Yt,
      getTargetedElement: xs,
      hasAttr: $e,
      hasClass: H,
      hasOwn: u,
      hasTouch: on,
      height: zt,
      html: Ee,
      hyphenate: f,
      inBrowser: Ne,
      includes: S,
      index: be,
      intersectRect: di,
      isArray: T,
      isBoolean: oe,
      isDocument: vt,
      isElement: Gt,
      isEmpty: hi,
      isEqual: En,
      isFocusable: bi,
      isFunction: L,
      isInView: yu,
      isInput: vi,
      isNode: Ot,
      isNumber: _n,
      isNumeric: fe,
      isObject: M,
      isPlainObject: mt,
      isRtl: Tt,
      isSameSiteAnchor: ln,
      isString: ft,
      isTag: wt,
      isTouch: ue,
      isUndefined: It,
      isVideo: xr,
      isVisible: xt,
      isVoidElement: $s,
      isWindow: jt,
      last: Ie,
      matches: nt,
      memoize: re,
      mute: $r,
      noop: rt,
      observeIntersection: yr,
      observeMutation: Ds,
      observeResize: jn,
      observeViewportResize: Ns,
      off: Se,
      offset: Z,
      offsetPosition: Nn,
      offsetViewport: Zt,
      on: W,
      once: bt,
      overflowParents: Me,
      parent: lt,
      parents: Pn,
      pause: Ci,
      pick: ws,
      play: js,
      pointInRect: fi,
      pointerCancel: gi,
      pointerDown: ae,
      pointerEnter: De,
      pointerLeave: an,
      pointerMove: mi,
      pointerUp: xe,
      position: Is,
      positionAt: Cr,
      prepend: ou,
      propName: wi,
      query: Mt,
      queryAll: Rn,
      ready: su,
      remove: Qt,
      removeAttr: On,
      removeClass: st,
      replaceClass: pi,
      scrollIntoView: Or,
      scrollParent: Ce,
      scrollParents: Le,
      scrolledOver: Ri,
      selFocusable: Cn,
      selInput: Tn,
      sortBy: nr,
      startsWith: v,
      sumBy: Be,
      swap: bs,
      toArray: O,
      toBoolean: vs,
      toEventTargets: Ts,
      toFloat: G,
      toNode: kt,
      toNodes: tt,
      toNumber: ve,
      toPx: Rt,
      toWindow: Re,
      toggleClass: $t,
      trigger: j,
      ucfirst: b,
      uniqueBy: ir,
      unwrap: Fn,
      width: _i,
      wrapAll: Si,
      wrapInner: Rs
    }), Ht = {
      connected() {
        X(this.$el, this.$options.id);
      }
    };
    const Ou = ["days", "hours", "minutes", "seconds"];
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
        F(this.$el, "role", this.role), this.date = G(Date.parse(this.$props.date)), this.end = !1, this.start();
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
          this.stop(), this.update(), this.timer || (j(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3));
        },
        stop() {
          this.timer && (clearInterval(this.timer), j(this.$el, "countdownstop"), this.timer = null);
        },
        update() {
          const t = Cu(this.date);
          t.total || (this.stop(), this.end || (j(this.$el, "countdownend"), this.end = !0));
          for (const e of Ou) {
            const n = V(this.clsWrapper.replace("%unit%", e), this.$el);
            if (!n)
              continue;
            let o = Math.trunc(t[e]).toString().padStart(2, "0");
            n.textContent !== o && (o = o.split(""), o.length !== n.children.length && Ee(n, o.map(() => "<span></span>").join("")), o.forEach((l, c) => n.children[c].textContent = l));
          }
        }
      }
    };
    function Cu(t) {
      const e = Math.max(0, t - Date.now()) / 1e3;
      return {
        total: e,
        seconds: e % 60,
        minutes: e / 60 % 60,
        hours: e / 60 / 60 % 24,
        days: e / 60 / 60 / 24
      };
    }
    const Ct = {};
    Ct.events = Ct.watch = Ct.observe = Ct.created = Ct.beforeConnect = Ct.connected = Ct.beforeDisconnect = Ct.disconnected = Ct.destroy = Ws, Ct.args = function(t, e) {
      return e !== !1 && Ws(e || t);
    }, Ct.update = function(t, e) {
      return nr(
        Ws(t, L(e) ? { read: e } : e),
        "order"
      );
    }, Ct.props = function(t, e) {
      if (T(e)) {
        const n = {};
        for (const o of e)
          n[o] = String;
        e = n;
      }
      return Ct.methods(t, e);
    }, Ct.computed = Ct.methods = function(t, e) {
      return e ? t ? { ...t, ...e } : e : t;
    }, Ct.i18n = Ct.data = function(t, e, n) {
      return n ? Dr(t, e, n) : e ? t ? function(o) {
        return Dr(t, e, o);
      } : e : t;
    };
    function Dr(t, e, n) {
      return Ct.computed(
        L(t) ? t.call(n, n) : t,
        L(e) ? e.call(n, n) : e
      );
    }
    function Ws(t, e) {
      return t = t && !T(t) ? [t] : t, e ? t ? t.concat(e) : T(e) ? e : [e] : t;
    }
    function Au(t, e) {
      return It(e) ? t : e;
    }
    function Un(t, e, n) {
      const o = {};
      if (L(e) && (e = e.options), e.extends && (t = Un(t, e.extends, n)), e.mixins)
        for (const c of e.mixins)
          t = Un(t, c, n);
      for (const c in t)
        l(c);
      for (const c in e)
        u(t, c) || l(c);
      function l(c) {
        o[c] = (Ct[c] || Au)(t[c], e[c], n);
      }
      return o;
    }
    function dn(t, e = []) {
      try {
        return t ? v(t, "{") ? JSON.parse(t) : e.length && !S(t, ":") ? { [e[0]]: t } : t.split(";").reduce((n, o) => {
          const [l, c] = o.split(/:(.*)/);
          return l && !It(c) && (n[l.trim()] = c.trim()), n;
        }, {}) : {};
      } catch {
        return {};
      }
    }
    function Vs(t, e) {
      return t === Boolean ? vs(e) : t === Number ? ve(e) : t === "list" ? Ru(e) : t === Object && ft(e) ? dn(e) : t ? t(e) : e;
    }
    const Pu = /,(?![^(]*\))/;
    function Ru(t) {
      return T(t) ? t : ft(t) ? t.split(Pu).map((e) => fe(e) ? ve(e) : vs(e.trim())) : [t];
    }
    function Iu(t) {
      t._data = {}, t._updates = [...t.$options.update || []], t._disconnect.push(() => t._updates = t._data = null);
    }
    function Bu(t, e) {
      t._updates.unshift(e);
    }
    function Ln(t, e = "update") {
      t._connected && t._updates.length && (t._queued || (t._queued = /* @__PURE__ */ new Set(), Te.read(() => {
        t._connected && Fu(t, t._queued), t._queued = null;
      })), t._queued.add(e.type || e));
    }
    function Fu(t, e) {
      for (const { read: n, write: o, events: l = [] } of t._updates) {
        if (!e.has("update") && !l.some((d) => e.has(d)))
          continue;
        let c;
        n && (c = n.call(t, t._data, e), c && mt(c) && q(t._data, c)), o && c !== !1 && Te.write(() => {
          t._connected && o.call(t, t._data, e);
        });
      }
    }
    function le(t) {
      return zn(jn, t, "resize");
    }
    function fn(t) {
      return zn(yr, t);
    }
    function Bi(t) {
      return zn(Ds, t);
    }
    function Fi(t = {}) {
      return fn({
        handler: function(e, n) {
          const { targets: o = this.$el, preload: l = 5 } = t;
          for (const c of tt(L(o) ? o(this) : o))
            dt('[loading="lazy"]', c).slice(0, l - 1).forEach((d) => On(d, "loading"));
          for (const c of e.filter(({ isIntersecting: d }) => d).map(({ target: d }) => d))
            n.unobserve(c);
        },
        ...t
      });
    }
    function Js(t) {
      return zn((e, n) => Ns(n), t, "resize");
    }
    function Mn(t) {
      return zn(
        (e, n) => ({
          disconnect: W(Du(e), "scroll", n, { passive: !0 })
        }),
        t,
        "scroll"
      );
    }
    function jr(t) {
      return {
        observe(e, n) {
          return {
            observe: rt,
            unobserve: rt,
            disconnect: W(e, ae, n, { passive: !0 })
          };
        },
        handler(e) {
          if (!ue(e))
            return;
          const n = we(e), o = "tagName" in e.target ? e.target : lt(e.target);
          bt(document, `${xe} ${gi} scroll`, (l) => {
            const { x: c, y: d } = we(l);
            (l.type !== "scroll" && o && c && Math.abs(n.x - c) > 100 || d && Math.abs(n.y - d) > 100) && setTimeout(() => {
              j(o, "swipe"), j(o, `swipe${Nu(n.x, n.y, c, d)}`);
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
          Ln(this, n);
        },
        ...e
      };
    }
    function Nu(t, e, n, o) {
      return Math.abs(t - n) >= Math.abs(e - o) ? t - n > 0 ? "Left" : "Right" : e - o > 0 ? "Up" : "Down";
    }
    function Du(t) {
      return tt(t).map((e) => {
        const { ownerDocument: n } = e, o = Ce(e, !0);
        return o === n.scrollingElement ? n : o;
      });
    }
    var Ur = {
      props: {
        margin: String,
        firstColumn: Boolean
      },
      data: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column"
      },
      observe: [
        Bi({
          options: {
            childList: !0
          }
        }),
        Bi({
          options: {
            attributes: !0,
            attributeFilter: ["style"]
          },
          target: ({ $el: t }) => [t, ...ct(t)]
        }),
        le({
          target: ({ $el: t }) => [t, ...ct(t)]
        })
      ],
      update: {
        read() {
          return {
            rows: Ks(ct(this.$el))
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
    function Ks(t) {
      const e = [[]], n = t.some(
        (o, l) => l && t[l - 1].offsetParent !== o.offsetParent
      );
      for (const o of t) {
        if (!xt(o))
          continue;
        const l = Gs(o, n);
        for (let c = e.length - 1; c >= 0; c--) {
          const d = e[c];
          if (!d[0]) {
            d.push(o);
            break;
          }
          const p = Gs(d[0], n);
          if (l.top >= p.bottom - 1 && l.top !== p.top) {
            e.push([o]);
            break;
          }
          if (l.bottom - 1 > p.top || l.top === p.top) {
            let m = d.length - 1;
            for (; m >= 0; m--) {
              const y = Gs(d[m], n);
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
    function Gs(t, e = !1) {
      let { offsetTop: n, offsetLeft: o, offsetHeight: l, offsetWidth: c } = t;
      return e && ([n, o] = Nn(t)), {
        top: n,
        left: o,
        bottom: n + l,
        right: o + c
      };
    }
    async function ju(t, e, n) {
      await Xs();
      let o = ct(e);
      const l = o.map((B) => Lr(B, !0)), c = { ...w(e, ["height", "padding"]), display: "block" }, d = o.concat(e);
      await Promise.all(d.map(ut.cancel)), w(d, "transitionProperty", "none"), await t(), o = o.concat(ct(e).filter((B) => !S(o, B))), await Promise.resolve(), w(d, "transitionProperty", "");
      const p = F(e, "style"), m = w(e, ["height", "padding"]), [y, $] = Uu(e, o, l), C = o.map((B) => ({ style: F(B, "style") }));
      o.forEach((B, z) => $[z] && w(B, $[z])), w(e, c), j(e, "scroll"), await Xs();
      const R = o.map((B, z) => lt(B) === e && ut.start(B, y[z], n, "ease")).concat(ut.start(e, m, n, "ease"));
      try {
        await Promise.all(R), o.forEach((B, z) => {
          F(B, C[z]), lt(B) === e && w(B, "display", y[z].opacity === 0 ? "none" : "");
        }), F(e, "style", p);
      } catch {
        F(o, "style", ""), Lu(e, c);
      }
    }
    function Lr(t, e) {
      const n = w(t, "zIndex");
      return xt(t) ? {
        display: "",
        opacity: e ? w(t, "opacity") : "0",
        pointerEvents: "none",
        position: "absolute",
        zIndex: n === "auto" ? be(t) : n,
        ...Mr(t)
      } : !1;
    }
    function Uu(t, e, n) {
      const o = e.map(
        (c, d) => lt(c) && d in n ? n[d] ? xt(c) ? Mr(c) : { opacity: 0 } : { opacity: xt(c) ? 1 : 0 } : !1
      ), l = o.map((c, d) => {
        const p = lt(e[d]) === t && (n[d] || Lr(e[d]));
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
    function Mr(t) {
      const { height: e, width: n } = N(t);
      return {
        height: e,
        width: n,
        transform: "",
        ...Is(t),
        ...w(t, ["marginTop", "marginLeft"])
      };
    }
    function Xs() {
      return new Promise((t) => requestAnimationFrame(t));
    }
    const Ys = "uk-transition-leave", Qs = "uk-transition-enter";
    function zr(t, e, n, o = 0) {
      const l = Ni(e, !0), c = { opacity: 1 }, d = { opacity: 0 }, p = ($) => () => l === Ni(e) ? $() : Promise.reject(), m = p(async () => {
        X(e, Ys), await Promise.all(
          qr(e).map(
            ($, C) => new Promise(
              (R) => setTimeout(
                () => ut.start($, d, n / 2, "ease").then(
                  R
                ),
                C * o
              )
            )
          )
        ), st(e, Ys);
      }), y = p(async () => {
        const $ = zt(e);
        X(e, Qs), t(), w(ct(e), { opacity: 0 }), await Xs();
        const C = ct(e), R = zt(e);
        w(e, "alignContent", "flex-start"), zt(e, $);
        const B = qr(e);
        w(C, d);
        const z = B.map(async (Y, it) => {
          await Mu(it * o), await ut.start(Y, c, n / 2, "ease");
        });
        $ !== R && z.push(
          ut.start(
            e,
            { height: R },
            n / 2 + B.length * o,
            "ease"
          )
        ), await Promise.all(z).then(() => {
          st(e, Qs), l === Ni(e) && (w(e, { height: "", alignContent: "" }), w(C, { opacity: "" }), delete e.dataset.transition);
        });
      });
      return H(e, Ys) ? Hr(e).then(y) : H(e, Qs) ? Hr(e).then(m).then(y) : m().then(y);
    }
    function Ni(t, e) {
      return e && (t.dataset.transition = 1 + Ni(t)), ve(t.dataset.transition) || 0;
    }
    function Hr(t) {
      return Promise.all(
        ct(t).filter(ut.inProgress).map(
          (e) => new Promise((n) => bt(e, "transitionend transitioncanceled", n))
        )
      );
    }
    function qr(t) {
      return Ks(ct(t)).flat().filter(xt);
    }
    function Mu(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    var Wr = {
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
          return (n === "fade" ? zr : n === "delayed-fade" ? (...l) => zr(...l, 40) : n ? ju : () => (t(), Promise.resolve()))(t, e, this.duration).catch(rt);
        }
      }
    };
    const at = {
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
    var zu = {
      mixins: [Wr],
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
        children: ({ target: t }, e) => dt(`${t} > *`, e),
        toggles: ({ attrItem: t }, e) => dt(`[${t}],[data-${t}]`, e)
      },
      watch: {
        toggles(t) {
          this.updateState();
          const e = dt(this.selActive, this.$el);
          for (const n of t) {
            this.selActive !== !1 && $t(n, this.cls, S(e, n));
            const o = Ju(n);
            wt(o, "a") && F(o, "role", "button");
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
          t.type === "keydown" && t.keyCode !== at.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current));
        }
      },
      methods: {
        apply(t) {
          const e = this.getState(), n = Jr(t, this.attrItem, this.getState());
          Hu(e, n) || this.setState(n);
        },
        getState() {
          return this.toggles.filter((t) => H(t, this.cls)).reduce((t, e) => Jr(e, this.attrItem, t), {
            filter: { "": "" },
            sort: []
          });
        },
        async setState(t, e = !0) {
          t = { filter: { "": "" }, sort: [], ...t }, j(this.$el, "beforeFilter", [this, t]);
          for (const n of this.toggles)
            $t(n, this.cls, Wu(n, this.attrItem, t));
          await Promise.all(
            dt(this.target, this.$el).map((n) => {
              const o = () => qu(t, n, ct(n));
              return e ? this.animate(o, n) : o();
            })
          ), j(this.$el, "afterFilter", [this]);
        },
        updateState() {
          Te.write(() => this.setState(this.getState(), !1));
        }
      }
    };
    function Vr(t, e) {
      return dn(Bt(t, e), ["filter"]);
    }
    function Hu(t, e) {
      return ["filter", "sort"].every((n) => En(t[n], e[n]));
    }
    function qu(t, e, n) {
      for (const c of n)
        w(
          c,
          "display",
          Object.values(t.filter).every((d) => !d || nt(c, d)) ? "" : "none"
        );
      const [o, l] = t.sort;
      if (o) {
        const c = Vu(n, o, l);
        En(c, n) || St(e, c);
      }
    }
    function Jr(t, e, n) {
      const { filter: o, group: l, sort: c, order: d = "asc" } = Vr(t, e);
      return (o || It(c)) && (l ? o ? (delete n.filter[""], n.filter[l] = o) : (delete n.filter[l], (hi(n.filter) || "" in n.filter) && (n.filter = { "": o || "" })) : n.filter = { "": o || "" }), It(c) || (n.sort = [c, d]), n;
    }
    function Wu(t, e, { filter: n = { "": "" }, sort: [o, l] }) {
      const { filter: c = "", group: d = "", sort: p, order: m = "asc" } = Vr(t, e);
      return It(p) ? d in n && c === n[d] || !c && d && !(d in n) && !n[""] : o === p && l === m;
    }
    function Vu(t, e, n) {
      return [...t].sort(
        (o, l) => Bt(o, e).localeCompare(Bt(l, e), void 0, { numeric: !0 }) * (n === "asc" || -1)
      );
    }
    function Ju(t) {
      return V("a,button", t) || t;
    }
    let Zs;
    function Kr(t) {
      const e = W(
        t,
        "touchstart",
        (o) => {
          if (o.targetTouches.length !== 1 || nt(o.target, 'input[type="range"'))
            return;
          let l = we(o).y;
          const c = W(
            t,
            "touchmove",
            (d) => {
              const p = we(d).y;
              p !== l && (l = p, Le(d.target).some((m) => {
                if (!t.contains(m))
                  return !1;
                let { scrollHeight: y, clientHeight: $ } = m;
                return $ < y;
              }) || d.preventDefault());
            },
            { passive: !1 }
          );
          bt(t, "scroll touchend touchcanel", c, { capture: !0 });
        },
        { passive: !0 }
      );
      if (Zs)
        return e;
      Zs = !0;
      const { scrollingElement: n } = document;
      return w(n, {
        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
        touchAction: "none",
        paddingRight: _i(window) - n.clientWidth || ""
      }), () => {
        Zs = !1, e(), w(n, { overflowY: "", touchAction: "", paddingRight: "" });
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
                const l = oe(e) ? e : !this.isToggled(o);
                if (!j(o, `before${l ? "show" : "hide"}`, [this]))
                  return Promise.reject();
                const c = (L(n) ? n : n === !1 || !this.hasAnimation ? Ku : this.hasTransition ? Gu : Xu)(o, l, this), d = l ? this.clsEnter : this.clsLeave;
                X(o, d), j(o, l ? "show" : "hide", [this]);
                const p = () => {
                  st(o, d), j(o, l ? "shown" : "hidden", [this]);
                };
                return c ? c.then(p, () => (st(o, d), Promise.reject())) : p();
              })
            ), !0;
          } catch {
            return !1;
          }
        },
        isToggled(t = this.$el) {
          return t = kt(t), H(t, this.clsEnter) ? !0 : H(t, this.clsLeave) ? !1 : this.cls ? H(t, this.cls.split(" ")[0]) : xt(t);
        },
        _toggle(t, e) {
          if (!t)
            return;
          e = !!e;
          let n;
          this.cls ? (n = S(this.cls, " ") || e !== H(t, this.cls), n && $t(t, this.cls, S(this.cls, " ") ? void 0 : e)) : (n = e === t.hidden, n && (t.hidden = !e)), n && j(t, "toggled", [e, this]), dt("[autofocus]", t).some((o) => xt(o) ? o.focus() || !0 : o.blur());
        }
      }
    };
    function Ku(t, e, { _toggle: n }) {
      return _e.cancel(t), ut.cancel(t), n(t, e);
    }
    async function Gu(t, e, { animation: n, duration: o, velocity: l, transition: c, _toggle: d }) {
      var p;
      const [m = "reveal", y = "top"] = ((p = n[0]) == null ? void 0 : p.split("-")) || [], $ = [
        ["left", "right"],
        ["top", "bottom"]
      ], C = $[S($[0], y) ? 0 : 1], R = C[1] === y, z = ["width", "height"][$.indexOf(C)], Y = `margin-${C[0]}`, it = `margin-${y}`;
      let pe = N(t)[z];
      const wn = ut.inProgress(t);
      await ut.cancel(t), e && d(t, !0);
      const yn = Object.fromEntries(
        [
          "padding",
          "border",
          "width",
          "height",
          "minWidth",
          "minHeight",
          "overflowY",
          "overflowX",
          Y,
          it
        ].map((pl) => [pl, t.style[pl]])
      ), me = N(t), bo = G(w(t, Y)), hl = G(w(t, it)), Ge = me[z] + hl;
      !wn && !e && (pe += hl);
      const [Xi] = Rs(t, "<div>");
      w(Xi, {
        boxSizing: "border-box",
        height: me.height,
        width: me.width,
        ...w(t, [
          "overflow",
          "padding",
          "borderTop",
          "borderRight",
          "borderBottom",
          "borderLeft",
          "borderImage",
          it
        ])
      }), w(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [it]: 0,
        width: me.width,
        height: me.height,
        overflow: "hidden",
        [z]: pe
      });
      const dl = pe / Ge;
      o = (l * Ge + o) * (e ? 1 - dl : dl);
      const fl = { [z]: e ? Ge : 0 };
      R && (w(t, Y, Ge - pe + bo), fl[Y] = e ? bo : Ge + bo), !R ^ m === "reveal" && (w(Xi, Y, -Ge + pe), ut.start(Xi, { [Y]: e ? 0 : -Ge }, o, c));
      try {
        await ut.start(t, fl, o, c);
      } finally {
        w(t, yn), Fn(Xi.firstChild), e || d(t, !1);
      }
    }
    function Xu(t, e, n) {
      const { animation: o, duration: l, _toggle: c } = n;
      return e ? (c(t, !0), _e.in(t, o[0], l, n.origin)) : _e.out(t, o[1] || o[0], l, n.origin).then(
        () => c(t, !1)
      );
    }
    const qt = [];
    var to = {
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
        F(this.panel || this.$el, "role", this.role), this.overlay && F(this.panel || this.$el, "aria-modal", !0);
      },
      beforeDisconnect() {
        S(qt, this) && this.toggleElement(this.$el, !1, !1);
      },
      events: [
        {
          name: "click",
          delegate: ({ selClose: t }) => `${t},a[href*="#"]`,
          handler(t) {
            const { current: e, defaultPrevented: n } = t, { hash: o } = e;
            !n && o && ln(e) && !this.$el.contains(V(o)) ? this.hide() : nt(e, this.selClose) && (t.preventDefault(), this.hide());
          }
        },
        {
          name: "toggle",
          self: !0,
          handler(t) {
            t.defaultPrevented || (t.preventDefault(), this.isToggled() === S(qt, this) && this.toggle());
          }
        },
        {
          name: "beforeshow",
          self: !0,
          handler(t) {
            if (S(qt, this))
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
              this.overlay && Qu(this),
              this.overlay && Kr(this.$el),
              this.bgClose && Zu(this),
              this.escClose && th(this)
            ];
            bt(
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
            bi(this.$el) || F(this.$el, "tabindex", "-1"), nt(this.$el, ":focus-within") || this.$el.focus();
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            S(qt, this) && qt.splice(qt.indexOf(this), 1), w(this.$el, "zIndex", ""), qt.some((t) => t.clsPage === this.clsPage) || st(document.documentElement, this.clsPage);
          }
        }
      ],
      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },
        show() {
          return this.container && lt(this.$el) !== this.container ? (St(this.container, this.$el), new Promise(
            (t) => requestAnimationFrame(() => this.show().then(t))
          )) : this.toggleElement(this.$el, !0, Gr);
        },
        hide() {
          return this.toggleElement(this.$el, !1, Gr);
        }
      }
    };
    function Gr(t, e, { transitionElement: n, _toggle: o }) {
      return new Promise(
        (l, c) => bt(t, "show hide", () => {
          var d;
          (d = t._reject) == null || d.call(t), t._reject = c, o(t, e);
          const p = bt(
            n,
            "transitionstart",
            () => {
              bt(n, "transitionend transitioncancel", l, {
                self: !0
              }), clearTimeout(m);
            },
            { self: !0 }
          ), m = setTimeout(
            () => {
              p(), l();
            },
            Yu(w(n, "transitionDuration"))
          );
        })
      ).then(() => delete t._reject);
    }
    function Yu(t) {
      return t ? A(t, "ms") ? G(t) : G(t) * 1e3 : 0;
    }
    function Qu(t) {
      return W(document, "focusin", (e) => {
        Ie(qt) === t && !t.$el.contains(e.target) && t.$el.focus();
      });
    }
    function Zu(t) {
      return W(document, ae, ({ target: e }) => {
        Ie(qt) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || bt(
          document,
          `${xe} ${gi} scroll`,
          ({ defaultPrevented: n, type: o, target: l }) => {
            !n && o === xe && e === l && t.hide();
          },
          !0
        );
      });
    }
    function th(t) {
      return W(document, "keydown", (e) => {
        e.keyCode === 27 && Ie(qt) === t && t.hide();
      });
    }
    var eo = {
      slide: {
        show(t) {
          return [{ transform: yt(t * -100) }, { transform: yt() }];
        },
        percent(t) {
          return qn(t);
        },
        translate(t, e) {
          return [
            { transform: yt(e * -100 * t) },
            { transform: yt(e * 100 * (1 - t)) }
          ];
        }
      }
    };
    function qn(t) {
      return Math.abs(new DOMMatrix(w(t, "transform")).m41 / t.offsetWidth);
    }
    function yt(t = 0, e = "%") {
      return t += t ? e : "", `translate3d(${t}, 0, 0)`;
    }
    function pn(t) {
      return `scale3d(${t}, ${t}, 1)`;
    }
    function eh(t, e, n, { animation: o, easing: l }) {
      const { percent: c, translate: d, show: p = rt } = o, m = p(n), { promise: y, resolve: $ } = Xr();
      return {
        dir: n,
        show(C, R = 0, B) {
          const z = B ? "linear" : l;
          return C -= Math.round(C * Ut(R, -1, 1)), this.translate(R), He(e, "itemin", { percent: R, duration: C, timing: z, dir: n }), He(t, "itemout", { percent: 1 - R, duration: C, timing: z, dir: n }), Promise.all([
            ut.start(e, m[1], C, z),
            ut.start(t, m[0], C, z)
          ]).then(() => {
            this.reset(), $();
          }, rt), y;
        },
        cancel() {
          return ut.cancel([e, t]);
        },
        reset() {
          for (const C in m[0])
            w([e, t], C, "");
        },
        async forward(C, R = this.percent()) {
          return await this.cancel(), this.show(C, R, !0);
        },
        translate(C) {
          this.reset();
          const R = d(C, n);
          w(e, R[1]), w(t, R[0]), He(e, "itemtranslatein", { percent: C, dir: n }), He(t, "itemtranslateout", { percent: 1 - C, dir: n });
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
      j(t, cn(e, !1, !1, n));
    }
    function Xr() {
      let t;
      return { promise: new Promise((e) => t = e), resolve: t };
    }
    var Di = {
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
    }, nh = {
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
        F(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
      },
      disconnected() {
        this.stopAutoplay();
      },
      update() {
        F(this.slides, "tabindex", "-1");
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
            this.stack.length || this.draggable && nt(this.$el, ":focus-within") && !nt(this.$el, ":focus") || this.pauseOnHover && nt(this.$el, ":hover") || this.show("next");
          }, this.autoplayInterval);
        },
        stopAutoplay() {
          clearInterval(this.interval);
        }
      }
    };
    const Wn = { passive: !1, capture: !0 }, Yr = { passive: !0, capture: !0 }, ih = "touchstart mousedown", no = "touchmove mousemove", Qr = "touchend touchcancel mouseup click input scroll", Zr = (t) => t.preventDefault();
    var sh = {
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
            const o = we(n).x * (Tt ? -1 : 1);
            this.prevPos = o === this.pos ? this.prevPos : this.pos, this.pos = o, e(n);
          };
        }
      },
      events: [
        {
          name: ih,
          passive: !0,
          delegate: ({ selList: t }) => `${t} > *`,
          handler(t) {
            !this.draggable || this.parallax || !ue(t) && oh(t.target) || t.target.closest(Tn) || t.button > 0 || this.length < 2 || this.start(t);
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
          name: no,
          el: ({ list: t }) => t,
          handler: rt,
          ...Wn
        }
      ],
      methods: {
        start() {
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, W(document, no, this.move, Wn), W(document, Qr, this.end, Yr), w(this.list, "userSelect", "none");
        },
        move(t) {
          const e = this.pos - this.drag;
          if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
            return;
          this.dragging || W(this.list, "click", Zr, Wn), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
          let { slides: n, prevIndex: o } = this, l = Math.abs(e), c = this.getIndex(o + this.dir), d = ta.call(this, o, c);
          for (; c !== o && l > d; )
            this.drag -= d * this.dir, o = c, l -= d, c = this.getIndex(o + this.dir), d = ta.call(this, o, c);
          this.percent = l / d;
          const p = n[o], m = n[c], y = this.index !== c, $ = o === c;
          let C;
          for (const R of [this.index, this.prevIndex])
            S([c, o], R) || (j(n[R], "itemhidden", [this]), $ && (C = !0, this.prevIndex = o));
          (this.index === o && this.prevIndex !== o || C) && j(n[this.index], "itemshown", [this]), y && (this.prevIndex = o, this.index = c, $ || (j(p, "beforeitemhide", [this]), j(p, "itemhide", [this])), j(m, "beforeitemshow", [this]), j(m, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), p, !$ && m);
        },
        end() {
          if (Se(document, no, this.move, Wn), Se(document, Qr, this.end, Yr), this.dragging)
            if (this.dragging = null, this.index === this.prevIndex)
              this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
            else {
              const t = (Tt ? this.dir * (Tt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
              this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(
                this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous",
                !0
              );
            }
          setTimeout(() => Se(this.list, "click", Zr, Wn)), w(this.list, { userSelect: "" }), this.drag = this.percent = null;
        }
      }
    };
    function ta(t, e) {
      return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
    }
    function oh(t) {
      return w(t, "userSelect") !== "none" && O(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
    }
    function rh(t) {
      t._watches = [];
      for (const e of t.$options.watch || [])
        for (const [n, o] of Object.entries(e))
          ea(t, o, n);
      t._initial = !0;
    }
    function ea(t, e, n) {
      t._watches.push({
        name: n,
        ...mt(e) ? e : { handler: e }
      });
    }
    function ah(t, e) {
      for (const { name: n, handler: o, immediate: l = !0 } of t._watches)
        (t._initial && l || u(e, n) && !En(e[n], t[n])) && o.call(t, t[n], e[n]);
      t._initial = !1;
    }
    function lh(t) {
      const { computed: e } = t.$options;
      if (t._computed = {}, e)
        for (const n in e)
          ia(t, n, e[n]);
    }
    const na = { subtree: !0, childList: !0 };
    function ia(t, e, n) {
      t._hasComputed = !0, Object.defineProperty(t, e, {
        enumerable: !0,
        get() {
          const { _computed: o, $props: l, $el: c } = t;
          if (!u(o, e) && (o[e] = (n.get || n).call(t, l, c), n.observe && t._computedObserver)) {
            const d = n.observe.call(t, l);
            t._computedObserver.observe(
              ["~", "+", "-"].includes(d[0]) ? c.parentElement : c.getRootNode(),
              na
            );
          }
          return o[e];
        },
        set(o) {
          const { _computed: l } = t;
          l[e] = n.set ? n.set.call(t, o) : o, It(l[e]) && delete l[e];
        }
      });
    }
    function ch(t) {
      t._hasComputed && (Bu(t, {
        read: () => ah(t, sa(t)),
        events: ["resize", "computed"]
      }), t._computedObserver = Ds(
        t.$el,
        () => Ln(t, "computed"),
        na
      ), t._disconnect.push(() => {
        t._computedObserver.disconnect(), t._computedObserver = null, sa(t);
      }));
    }
    function sa(t) {
      const e = { ...t._computed };
      return t._computed = {}, e;
    }
    function uh(t) {
      for (const e of t.$options.events || [])
        if (u(e, "handler"))
          oa(t, e);
        else
          for (const n in e)
            oa(t, e[n], n);
    }
    function oa(t, e, n) {
      let { name: o, el: l, handler: c, capture: d, passive: p, delegate: m, filter: y, self: $ } = mt(e) ? e : { name: n, handler: e };
      l = L(l) ? l.call(t, t) : l || t.$el, !(!l || T(l) && !l.length || y && !y.call(t, t)) && t._disconnect.push(
        W(
          l,
          o,
          m ? ft(m) ? m : m.call(t, t) : null,
          ft(c) ? t[c] : c.bind(t),
          { passive: p, capture: d, self: $ }
        )
      );
    }
    function hh(t) {
      for (const e of t.$options.observe || [])
        dh(t, e);
    }
    function dh(t, e) {
      let { observe: n, target: o = t.$el, handler: l, options: c, filter: d, args: p } = e;
      if (d && !d.call(t, t))
        return;
      const m = `_observe${t._disconnect.length}`;
      L(o) && !u(t, m) && ia(t, m, () => {
        const C = o.call(t, t);
        return T(C) ? tt(C) : C;
      }), l = ft(l) ? t[l] : l.bind(t), L(c) && (c = c.call(t, t));
      const y = u(t, m) ? t[m] : o, $ = n(y, l, c, p);
      L(o) && T(t[m]) && ea(
        t,
        { handler: fh($, c), immediate: !1 },
        m
      ), t._disconnect.push(() => $.disconnect());
    }
    function fh(t, e) {
      return (n, o) => {
        for (const l of o)
          S(n, l) || (t.unobserve ? t.unobserve(l) : t.observe && t.disconnect());
        for (const l of n)
          (!S(o, l) || !t.unobserve) && t.observe(l, e);
      };
    }
    function ph(t) {
      const { $options: e, $props: n } = t, o = ra(e);
      q(n, o);
      const { computed: l, methods: c } = e;
      for (let d in n)
        d in o && (!l || !u(l, d)) && (!c || !u(c, d)) && (t[d] = n[d]);
    }
    function ra(t) {
      const e = {}, { args: n = [], props: o = {}, el: l, id: c } = t;
      if (!o)
        return e;
      for (const p in o) {
        const m = f(p);
        let y = Bt(l, m);
        It(y) || (y = o[p] === Boolean && y === "" ? !0 : Vs(o[p], y), !(m === "target" && v(y, "_")) && (e[p] = y));
      }
      const d = dn(Bt(l, c), n);
      for (const p in d) {
        const m = k(p);
        It(o[m]) || (e[m] = Vs(o[m], d[p]));
      }
      return e;
    }
    const mh = re((t, e) => {
      const n = Object.keys(e), o = n.concat(t).map((l) => [f(l), `data-${f(l)}`]).flat();
      return { attributes: n, filter: o };
    });
    function gh(t) {
      const { $options: e, $props: n } = t, { id: o, props: l, el: c } = e;
      if (!l)
        return;
      const { attributes: d, filter: p } = mh(o, l), m = new MutationObserver((y) => {
        const $ = ra(e);
        y.some(({ attributeName: C }) => {
          const R = C.replace("data-", "");
          return (R === o ? d : [k(R), k(C)]).some(
            (B) => !It($[B]) && $[B] !== n[B]
          );
        }) && t.$reset();
      });
      m.observe(c, {
        attributes: !0,
        attributeFilter: p
      }), t._disconnect.push(() => m.disconnect());
    }
    function mn(t, e) {
      var n;
      (n = t.$options[e]) == null || n.forEach((o) => o.call(t));
    }
    function io(t) {
      t._connected || (ph(t), mn(t, "beforeConnect"), t._connected = !0, t._disconnect = [], uh(t), Iu(t), rh(t), hh(t), gh(t), ch(t), mn(t, "connected"), Ln(t));
    }
    function so(t) {
      t._connected && (mn(t, "beforeDisconnect"), t._disconnect.forEach((e) => e()), t._disconnect = null, mn(t, "disconnected"), t._connected = !1);
    }
    let vh = 0;
    function aa(t, e = {}) {
      e.data = yh(e, t.constructor.options), t.$options = Un(t.constructor.options, e, t), t.$props = {}, t._uid = vh++, bh(t), wh(t), lh(t), mn(t, "created"), e.el && t.$mount(e.el);
    }
    function bh(t) {
      const { data: e = {} } = t.$options;
      for (const n in e)
        t.$props[n] = t[n] = e[n];
    }
    function wh(t) {
      const { methods: e } = t.$options;
      if (e)
        for (const n in e)
          t[n] = e[n].bind(t);
    }
    function yh({ data: t = {} }, { args: e = [], props: n = {} }) {
      T(t) && (t = t.slice(0, e.length).reduce((o, l, c) => (mt(l) ? q(o, l) : o[e[c]] = l, o), {}));
      for (const o in t)
        It(t[o]) ? delete t[o] : n[o] && (t[o] = Vs(n[o], t[o]));
      return t;
    }
    const ee = function(t) {
      aa(this, t);
    };
    ee.util = Eu, ee.options = {}, ee.version = "3.21.13";
    const kh = "uk-", qe = "__uikit__", gn = {};
    function la(t, e) {
      var n, o;
      const l = kh + f(t);
      if (!e)
        return gn[l].options || (gn[l] = ee.extend(gn[l])), gn[l];
      t = k(t), ee[t] = (d, p) => Vn(t, d, p);
      const c = (n = e.options) != null ? n : { ...e };
      return c.id = l, c.name = t, (o = c.install) == null || o.call(c, ee, c, t), ee._initialized && !c.functional && requestAnimationFrame(() => Vn(t, `[${l}],[data-${l}]`)), gn[l] = c;
    }
    function Vn(t, e, n, ...o) {
      const l = la(t);
      return l.options.functional ? new l({ data: mt(e) ? e : [e, n, ...o] }) : e ? dt(e).map(c)[0] : c();
      function c(d) {
        const p = ji(d, t);
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
    function ji(t, e) {
      return Jn(t)[e];
    }
    function $h(t, e) {
      t[qe] || (t[qe] = {}), t[qe][e.$options.name] = e;
    }
    function xh(t, e) {
      var n;
      (n = t[qe]) == null || delete n[e.$options.name], hi(t[qe]) && delete t[qe];
    }
    function Sh(t) {
      t.component = la, t.getComponents = Jn, t.getComponent = ji, t.update = ca, t.use = function(n) {
        if (!n.installed)
          return n.call(null, this), n.installed = !0, this;
      }, t.mixin = function(n, o) {
        o = (ft(o) ? this.component(o) : o) || this, o.options = Un(o.options, n);
      }, t.extend = function(n) {
        n || (n = {});
        const o = this, l = function(d) {
          aa(this, d);
        };
        return l.prototype = Object.create(o.prototype), l.prototype.constructor = l, l.options = Un(o.options, n), l.super = o, l.extend = o.extend, l;
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
    function ca(t, e) {
      t = t ? kt(t) : document.body;
      for (const n of Pn(t).reverse())
        ua(n, e);
      Oe(t, (n) => ua(n, e));
    }
    function ua(t, e) {
      const n = Jn(t);
      for (const o in n)
        Ln(n[o], e);
    }
    function _h(t) {
      t.prototype.$mount = function(e) {
        const n = this;
        $h(e, n), n.$options.el = e, document.contains(e) && io(n);
      }, t.prototype.$destroy = function(e = !1) {
        const n = this, { el: o } = n.$options;
        o && so(n), mn(n, "destroy"), xh(o, n), e && Qt(n.$el);
      }, t.prototype.$create = Vn, t.prototype.$emit = function(e) {
        Ln(this, e);
      }, t.prototype.$update = function(e = this.$el, n) {
        ca(e, n);
      }, t.prototype.$reset = function() {
        so(this), io(this);
      }, t.prototype.$getComponent = ji, Object.defineProperties(t.prototype, {
        $el: {
          get() {
            return this.$options.el;
          }
        },
        $container: Object.getOwnPropertyDescriptor(t, "container")
      });
    }
    let Eh = 1;
    function We(t, e = null) {
      return (e == null ? void 0 : e.id) || `${t.$options.id}-${Eh++}`;
    }
    var Oh = {
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
          return ct(this.nav);
        },
        selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`,
        navItems(t, e) {
          return dt(this.selNavItem, e);
        }
      },
      watch: {
        nav(t, e) {
          F(t, "role", "tablist"), this.padNavitems(), e && this.$emit();
        },
        list(t) {
          wt(t, "ul") && F(t, "role", "presentation");
        },
        navChildren(t) {
          F(t, "role", "presentation"), this.padNavitems(), this.updateNav();
        },
        navItems(t) {
          for (const e of t) {
            const n = Bt(e, this.attrItem), o = V("a,button", e) || e;
            let l, c = null;
            if (fe(n)) {
              const d = ve(n), p = this.slides[d];
              p && (p.id || (p.id = We(this, p)), c = p.id), l = this.t("slideX", G(n) + 1), F(o, "role", "tab");
            } else
              this.list && (this.list.id || (this.list.id = We(this, this.list)), c = this.list.id), l = this.t(n);
            F(o, {
              "aria-controls": c,
              "aria-label": F(o, "aria-label") || l
            });
          }
        },
        slides(t) {
          t.forEach(
            (e, n) => F(e, {
              role: this.nav ? "tabpanel" : "group",
              "aria-label": this.t("slideLabel", n + 1, this.length),
              "aria-roledescription": this.nav ? null : "slide"
            })
          ), this.padNavitems();
        }
      },
      connected() {
        F(this.$el, {
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
            t.target.closest("a,button") && (t.type === "click" || t.keyCode === at.SPACE) && (t.preventDefault(), this.show(Bt(t.current, this.attrItem)));
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
            const { current: e, keyCode: n } = t, o = Bt(e, this.attrItem);
            if (!fe(o))
              return;
            let l = n === at.HOME ? 0 : n === at.END ? "last" : n === at.LEFT ? "previous" : n === at.RIGHT ? "next" : -1;
            ~l && (t.preventDefault(), this.show(l));
          }
        }
      ],
      methods: {
        updateNav() {
          const t = this.getValidIndex();
          for (const e of this.navItems) {
            const n = Bt(e, this.attrItem), o = V("a,button", e) || e;
            if (fe(n)) {
              const c = ve(n) === t;
              $t(e, this.clsActive, c), $t(o, "uk-disabled", this.parallax), F(o, {
                "aria-selected": c,
                tabindex: c && !this.parallax ? null : -1
              }), c && o && nt(lt(e), ":focus-within") && o.focus();
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
          En(t, this.navChildren) || Ee(this.nav, t);
        }
      }
    };
    const Th = "cubic-bezier(0.25, 0.46, 0.45, 0.94)", Ch = "cubic-bezier(0.165, 0.84, 0.44, 1)";
    var ha = {
      mixins: [nh, sh, Oh, Di],
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
        duration: ({ velocity: t }, e) => da(e.offsetWidth / t),
        list: ({ selList: t }, e) => V(t, e),
        maxIndex() {
          return this.length - 1;
        },
        slides() {
          return ct(this.list);
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
          if (this.dir = Ah(t, d), this.prevIndex = d, this.index = m, p && !j(p, "beforeitemhide", [this]) || !j(y, "beforeitemshow", [this, p])) {
            this.index = this.prevIndex, c();
            return;
          }
          const $ = this._show(p, y, e).then(() => {
            p && j(p, "itemhidden", [this]), j(y, "itemshown", [this]), o.shift(), this._transitioner = null, o.length && requestAnimationFrame(() => o.length && this.show(o.shift(), !0));
          });
          return p && j(p, "itemhide", [this]), j(y, "itemshow", [this]), $;
        },
        getIndex(t = this.index, e = this.index) {
          return Ut(
            Yt(t, this.slides, e, this.finite),
            0,
            Math.max(0, this.maxIndex)
          );
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          return this.getIndex(t, e);
        },
        async _show(t, e, n) {
          if (this._transitioner = this._getTransitioner(t, e, this.dir, {
            easing: n ? e.offsetWidth < 600 ? Th : Ch : this.easing,
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
    function Ah(t, e) {
      return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
    }
    function da(t) {
      return 0.5 * t + 300;
    }
    var fa = {
      mixins: [ha],
      props: {
        animation: String
      },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: eo,
        Transitioner: eh
      },
      computed: {
        animation({ animation: t, Animations: e }) {
          return { ...e[t] || e.slide, name: t };
        },
        transitionOptions() {
          return { animation: this.animation };
        }
      },
      observe: le(),
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
    }, pa = {
      ...eo,
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
            { opacity: 0, transform: pn(1 - 0.2) },
            { opacity: 1, transform: pn(1) }
          ];
        },
        percent(t) {
          return 1 - w(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: pn(1 - 0.2 * t) },
            { opacity: t, transform: pn(1 - 0.2 + 0.2 * t) }
          ];
        }
      }
    }, ma = {
      mixins: [to, fa],
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
        Animations: pa,
        template: '<div class="uk-lightbox uk-overflow-hidden"> <div class="uk-lightbox-items"></div> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
      }),
      created() {
        const t = V(this.template), e = V(this.selList, t);
        this.items.forEach(() => St(e, "<div>"));
        const n = V("[uk-close]", t), o = this.t("close");
        n && o && (n.dataset.i18n = JSON.stringify({ label: o })), this.$mount(St(this.container, t));
      },
      events: [
        {
          name: `${mi} ${ae} keydown`,
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
            this.hideControls(), st(this.slides, this.clsActive), ut.stop(this.slides);
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
            t === at.LEFT ? e = "previous" : t === at.RIGHT ? e = "next" : t === at.HOME ? e = 0 : t === at.END && (e = "last"), ~e && this.show(e);
          }
        },
        {
          name: "beforeitemshow",
          handler(t) {
            this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = pa.scale, st(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
          }
        },
        {
          name: "itemshow",
          handler() {
            Ee(V(this.selCaption, this.$el), this.getItem().caption || "");
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
          this.getSlide(e).childElementCount || j(this.$el, "itemload", [e]);
        },
        getItem(t = this.index) {
          return this.items[Yt(t, this.slides)];
        },
        setItem(t, e) {
          j(this.$el, "itemloaded", [this, Ee(this.getSlide(t), e)]);
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
      return F(n, e), n;
    }
    var Ph = {
      install: Rh,
      props: { toggle: String },
      data: { toggle: "a" },
      computed: {
        toggles: ({ toggle: t }, e) => dt(t, e)
      },
      watch: {
        toggles(t) {
          this.hide();
          for (const e of t)
            wt(e, "a") && F(e, "role", "button");
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
          const e = ir(this.toggles.map(ga), "source");
          if (Gt(t)) {
            const { source: n } = ga(t);
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
    function Rh(t, e) {
      t.lightboxPanel || t.component("lightboxPanel", ma), q(e.props, t.component("lightboxPanel").options.props);
    }
    function ga(t) {
      const e = {};
      for (const n of ["href", "caption", "type", "poster", "alt", "attrs"])
        e[n === "href" ? "source" : n] = Bt(t, n);
      return e.attrs = dn(e.attrs), e;
    }
    var Ih = {
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
      install: Bh,
      computed: {
        marginProp: ({ pos: t }) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`,
        startProps() {
          return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
        }
      },
      created() {
        const t = `${this.clsContainer}-${this.pos}`, e = `data-${this.clsContainer}-container`, n = V(`.${t}[${e}]`, this.container) || St(
          this.container,
          `<div class="${this.clsContainer} ${t}" ${e}></div>`
        );
        this.$mount(
          St(
            n,
            `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`
          )
        );
      },
      async connected() {
        const t = G(w(this.$el, this.marginProp));
        await ut.start(w(this.$el, this.startProps), {
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
        [an]() {
          this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        }
      },
      methods: {
        async close(t) {
          const e = (n) => {
            const o = lt(n);
            j(n, "close", [this]), Qt(n), o != null && o.hasChildNodes() || Qt(o);
          };
          this.timer && clearTimeout(this.timer), t || await ut.start(this.$el, this.startProps), e(this.$el);
        }
      }
    };
    function Bh(t) {
      t.notification.closeAll = function(e, n) {
        Oe(document.body, (o) => {
          const l = t.getComponent(o, "notification");
          l && (!e || e === l.group) && l.close(n);
        });
      };
    }
    var Ui = {
      props: {
        media: Boolean
      },
      data: {
        media: !1
      },
      connected() {
        const t = Fh(this.media, this.$el);
        if (this.matchMedia = !0, t) {
          this.mediaObj = window.matchMedia(t);
          const e = () => {
            this.matchMedia = this.mediaObj.matches, j(this.$el, cn("mediachange", !1, !0, [this.mediaObj]));
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
    function Fh(t, e) {
      if (ft(t)) {
        if (v(t, "@"))
          t = G(w(e, `--uk-breakpoint-${t.slice(1)}`));
        else if (isNaN(t))
          return t;
      }
      return t && fe(t) ? `(min-width: ${t}px)` : "";
    }
    function va(t) {
      return xt(t) ? Math.ceil(
        Math.max(0, ...dt("[stroke]", t).map((e) => {
          var n;
          return ((n = e.getTotalLength) == null ? void 0 : n.call(e)) || 0;
        }))
      ) : 0;
    }
    const Li = {
      x: Mi,
      y: Mi,
      rotate: Mi,
      scale: Mi,
      color: oo,
      backgroundColor: oo,
      borderColor: oo,
      blur: Ve,
      hue: Ve,
      fopacity: Ve,
      grayscale: Ve,
      invert: Ve,
      saturate: Ve,
      sepia: Ve,
      opacity: Dh,
      stroke: jh,
      bgx: ya,
      bgy: ya
    }, { keys: ba } = Object;
    var wa = {
      mixins: [Ui],
      props: _a(ba(Li), "list"),
      data: _a(ba(Li), void 0),
      computed: {
        props(t, e) {
          const n = {};
          for (const l in t)
            l in Li && !It(t[l]) && (n[l] = t[l].slice());
          const o = {};
          for (const l in n)
            o[l] = Li[l](l, e, n[l], n);
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
            this.props[n](e, Ut(t));
          return e.willChange = Object.keys(e).map(wi).join(","), e;
        }
      }
    };
    function Mi(t, e, n) {
      let o = Hi(n) || { x: "px", y: "px", rotate: "deg" }[t] || "", l;
      return t === "x" || t === "y" ? (t = `translate${b(t)}`, l = (c) => G(G(c).toFixed(o === "px" ? 0 : 6))) : t === "scale" && (o = "", l = (c) => {
        var d;
        return Hi([c]) ? Rt(c, "width", e, !0) / e[`offset${(d = c.endsWith) != null && d.call(c, "vh") ? "Height" : "Width"}`] : G(c);
      }), n.length === 1 && n.unshift(t === "scale" ? 1 : 0), n = vn(n, l), (c, d) => {
        c.transform = `${c.transform || ""} ${t}(${Gn(n, d)}${o})`;
      };
    }
    function oo(t, e, n) {
      return n.length === 1 && n.unshift(Xn(e, t, "")), n = vn(n, (o) => Nh(e, o)), (o, l) => {
        const [c, d, p] = Sa(n, l), m = c.map((y, $) => (y += p * (d[$] - y), $ === 3 ? G(y) : parseInt(y, 10))).join(",");
        o[t] = `rgba(${m})`;
      };
    }
    function Nh(t, e) {
      return Xn(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(G);
    }
    function Ve(t, e, n) {
      n.length === 1 && n.unshift(0);
      const o = Hi(n) || { blur: "px", hue: "deg" }[t] || "%";
      return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, n = vn(n), (l, c) => {
        const d = Gn(n, c);
        l.filter = `${l.filter || ""} ${t}(${d + o})`;
      };
    }
    function Dh(t, e, n) {
      return n.length === 1 && n.unshift(Xn(e, t, "")), n = vn(n), (o, l) => {
        o[t] = Gn(n, l);
      };
    }
    function jh(t, e, n) {
      n.length === 1 && n.unshift(0);
      const o = Hi(n), l = va(e);
      return n = vn(n.reverse(), (c) => (c = G(c), o === "%" ? c * l / 100 : c)), n.some(([c]) => c) ? (w(e, "strokeDasharray", l), (c, d) => {
        c.strokeDashoffset = Gn(n, d);
      }) : rt;
    }
    function ya(t, e, n, o) {
      n.length === 1 && n.unshift(0);
      const l = t === "bgy" ? "height" : "width";
      o[t] = vn(n, (p) => Rt(p, l, e));
      const c = ["bgx", "bgy"].filter((p) => p in o);
      if (c.length === 2 && t === "bgx")
        return rt;
      if (Xn(e, "backgroundSize", "") === "cover")
        return Uh(t, e, n, o);
      const d = {};
      for (const p of c)
        d[p] = ka(e, p);
      return $a(c, d, o);
    }
    function Uh(t, e, n, o) {
      const l = Lh(e);
      if (!l.width)
        return rt;
      const c = {
        width: e.offsetWidth,
        height: e.offsetHeight
      }, d = ["bgx", "bgy"].filter(($) => $ in o), p = {};
      for (const $ of d) {
        const C = o[$].map(([it]) => it), R = Math.min(...C), B = Math.max(...C), z = C.indexOf(R) < C.indexOf(B), Y = B - R;
        p[$] = `${(z ? -Y : 0) - (z ? R : B)}px`, c[$ === "bgy" ? "height" : "width"] += Y;
      }
      const m = ks.cover(l, c);
      for (const $ of d) {
        const C = $ === "bgy" ? "height" : "width", R = m[C] - c[C];
        p[$] = `max(${ka(e, $)},-${R}px) + ${p[$]}`;
      }
      const y = $a(d, p, o);
      return ($, C) => {
        y($, C), $.backgroundSize = `${m.width}px ${m.height}px`, $.backgroundRepeat = "no-repeat";
      };
    }
    function ka(t, e) {
      return Xn(t, `background-position-${e.slice(-1)}`, "");
    }
    function $a(t, e, n) {
      return function(o, l) {
        for (const c of t) {
          const d = Gn(n[c], l);
          o[`background-position-${c.slice(-1)}`] = `calc(${e[c]} + ${d}px)`;
        }
      };
    }
    const xa = {}, zi = {};
    function Lh(t) {
      const e = w(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
      if (zi[e])
        return zi[e];
      const n = new Image();
      return e && (n.src = e, !n.naturalWidth && !xa[e]) ? (bt(n, "error load", () => {
        zi[e] = ro(n), j(t, cn("load", !1));
      }), xa[e] = !0, ro(n)) : zi[e] = ro(n);
    }
    function ro(t) {
      return {
        width: t.naturalWidth,
        height: t.naturalHeight
      };
    }
    function vn(t, e = G) {
      const n = [], { length: o } = t;
      let l = 0;
      for (let c = 0; c < o; c++) {
        let [d, p] = ft(t[c]) ? t[c].trim().split(/ (?![^(]*\))/) : [t[c]];
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
    function Sa(t, e) {
      const n = P(t.slice(1), ([, o]) => e <= o) + 1;
      return [
        t[n - 1][0],
        t[n][0],
        (e - t[n - 1][1]) / (t[n][1] - t[n - 1][1])
      ];
    }
    function Gn(t, e) {
      const [n, o, l] = Sa(t, e);
      return n + Math.abs(n - o) * l * (n < o ? 1 : -1);
    }
    const Mh = /^-?\d+(?:\.\d+)?(\S+)?/;
    function Hi(t, e) {
      var n;
      for (const o of t) {
        const l = (n = o.match) == null ? void 0 : n.call(o, Mh);
        if (l)
          return l[1];
      }
      return e;
    }
    function Xn(t, e, n) {
      const o = t.style[e], l = w(w(t, e, n), e);
      return t.style[e] = o, l;
    }
    function _a(t, e) {
      return t.reduce((n, o) => (n[o] = e, n), {});
    }
    function Ea(t, e) {
      return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    var zh = {
      mixins: [wa],
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
        target: ({ target: t }, e) => Oa(t && Mt(t, e) || e),
        start({ start: t }) {
          return Rt(t, "height", this.target, !0);
        },
        end({ end: t, viewport: e }) {
          return Rt(
            t || (e = (1 - e) * 100) && `${e}vh+${e}%`,
            "height",
            this.target,
            !0
          );
        }
      },
      observe: [
        Js(),
        Mn({ target: ({ target: t }) => t }),
        le({ target: ({ $el: t, target: e }) => [t, e, Ce(e, !0)] })
      ],
      update: {
        read({ percent: t }, e) {
          if (e.has("scroll") || (t = !1), !xt(this.$el))
            return !1;
          if (!this.matchMedia)
            return;
          const n = t;
          return t = Ea(Ri(this.target, this.start, this.end), this.easing), {
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
    function Oa(t) {
      return t ? "offsetTop" in t ? t : Oa(lt(t)) : document.documentElement;
    }
    var Ta = {
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
        le({
          target: ({ $el: t, parallaxTarget: e }) => [t, e],
          filter: ({ parallax: t }) => t
        }),
        Mn({ filter: ({ parallax: t }) => t })
      ],
      computed: {
        parallaxTarget({ parallaxTarget: t }, e) {
          return t && Mt(t, e) || this.list;
        }
      },
      update: {
        read() {
          if (!this.parallax)
            return !1;
          const t = this.parallaxTarget;
          if (!t)
            return !1;
          const e = Rt(this.parallaxStart, "height", t, !0), n = Rt(this.parallaxEnd, "height", t, !0), o = Ea(Ri(t, e, n), this.parallaxEasing);
          return { parallax: this.getIndexAt(o) };
        },
        write({ parallax: t }) {
          const [e, n] = t, o = this.getValidIndex(e + Math.ceil(n)), l = this.slides[e], c = this.slides[o], { triggerShow: d, triggerShown: p, triggerHide: m, triggerHidden: y } = Hh(this);
          if (~this.prevIndex)
            for (const C of /* @__PURE__ */ new Set([this.index, this.prevIndex]))
              S([o, e], C) || (m(this.slides[C]), y(this.slides[C]));
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
    function Hh(t) {
      const { clsSlideActive: e, clsEnter: n, clsLeave: o } = t;
      return { triggerShow: l, triggerShown: c, triggerHide: d, triggerHidden: p };
      function l(m) {
        H(m, o) && (d(m), p(m)), H(m, e) || (j(m, "beforeitemshow", [t]), j(m, "itemshow", [t]));
      }
      function c(m) {
        H(m, n) && j(m, "itemshown", [t]);
      }
      function d(m) {
        H(m, e) || l(m), H(m, n) && c(m), H(m, o) || (j(m, "beforeitemhide", [t]), j(m, "itemhide", [t]));
      }
      function p(m) {
        H(m, o) && j(m, "itemhidden", [t]);
      }
    }
    var Ca = {
      update: {
        write() {
          if (this.stack.length || this.dragging || this.parallax)
            return;
          const t = this.getValidIndex();
          !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1);
        },
        events: ["resize"]
      }
    }, Aa = {
      observe: Fi({
        target: ({ slides: t }) => t,
        targets: (t) => t.getAdjacentSlides()
      }),
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        }
      }
    };
    function qh(t, e, n, { center: o, easing: l, list: c }) {
      const d = t ? Yn(t, c, o) : Yn(e, c, o) + N(e).width * n, p = e ? Yn(e, c, o) : d + N(t).width * n * (Tt ? -1 : 1), { promise: m, resolve: y } = Xr();
      return {
        dir: n,
        show($, C = 0, R) {
          const B = R ? "linear" : l;
          return $ -= Math.round($ * Ut(C, -1, 1)), w(c, "transitionProperty", "none"), this.translate(C), w(c, "transitionProperty", ""), C = t ? C : Ut(C, 0, 1), He(this.getItemIn(), "itemin", { percent: C, duration: $, timing: B, dir: n }), t && He(this.getItemIn(!0), "itemout", {
            percent: 1 - C,
            duration: $,
            timing: B,
            dir: n
          }), ut.start(
            c,
            { transform: yt(-p * (Tt ? -1 : 1), "px") },
            $,
            B
          ).then(y, rt), m;
        },
        cancel() {
          return ut.cancel(c);
        },
        reset() {
          w(c, "transform", "");
        },
        async forward($, C = this.percent()) {
          return await this.cancel(), this.show($, C, !0);
        },
        translate($) {
          if ($ === this.percent())
            return;
          const C = this.getDistance() * n * (Tt ? -1 : 1);
          w(
            c,
            "transform",
            yt(
              Ut(
                -p + (C - C * $),
                -bn(c),
                N(c).width
              ) * (Tt ? -1 : 1),
              "px"
            )
          );
          const R = this.getActives(), B = this.getItemIn(), z = this.getItemIn(!0);
          $ = t ? Ut($, -1, 1) : 0;
          for (const Y of ct(c)) {
            const it = S(R, Y), pe = Y === B, wn = Y === z, yn = pe || !wn && (it || n * (Tt ? -1 : 1) === -1 ^ qi(Y, c) > qi(t || e));
            He(Y, `itemtranslate${yn ? "in" : "out"}`, {
              dir: n,
              percent: wn ? 1 - $ : pe ? $ : it ? 1 : 0
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
          let C = this.getActives(), R = Ra(c, Yn(e || t, c, o));
          if ($) {
            const B = C;
            C = R, R = B;
          }
          return R[P(R, (B) => !S(C, B))];
        },
        getActives() {
          return Ra(c, Yn(t || e, c, o));
        }
      };
    }
    function Yn(t, e, n) {
      const o = qi(t, e);
      return n ? o - Wh(t, e) : Math.min(o, Pa(e));
    }
    function Pa(t) {
      return Math.max(0, bn(t) - N(t).width);
    }
    function bn(t, e) {
      return Be(ct(t).slice(0, e), (n) => N(n).width);
    }
    function Wh(t, e) {
      return N(e).width / 2 - N(t).width / 2;
    }
    function qi(t, e) {
      return t && (Is(t).left + (Tt ? N(t).width - N(e).width : 0)) * (Tt ? -1 : 1) || 0;
    }
    function Ra(t, e) {
      e -= 1;
      const n = N(t).width, o = e + n + 2;
      return ct(t).filter((l) => {
        const c = qi(l, t), d = c + Math.min(N(l).width, n);
        return c >= e && d <= o;
      });
    }
    var Vh = {
      mixins: [Ht, ha, Ca, Ta, Aa],
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
        Transitioner: qh
      },
      computed: {
        finite({ finite: t }) {
          return t || Jh(this.list, this.center);
        },
        maxIndex() {
          if (!this.finite || this.center && !this.sets)
            return this.length - 1;
          if (this.center)
            return Ie(this.sets);
          let t = 0;
          const e = Pa(this.list), n = P(this.slides, (o) => {
            if (t >= e - 5e-3)
              return !0;
            t += N(o).width;
          });
          return ~n ? n : this.length - 1;
        },
        sets({ sets: t }) {
          if (!t || this.parallax)
            return;
          let e = 0;
          const n = [], o = N(this.list).width;
          for (let l = 0; l < this.length; l++) {
            const c = N(this.slides[l]).width;
            e + c > o && (e = 0), this.center ? e < o / 2 && e + c + N(this.slides[Yt(l + 1, this.slides)]).width / 2 > o / 2 && (n.push(l), e = o / 2 - c / 2) : e === 0 && n.push(Math.min(l, this.maxIndex)), e += c;
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
          return ct(this.list).filter(xt);
        }
      },
      connected() {
        $t(this.$el, this.clsContainer, !V(`.${this.clsContainer}`, this.$el));
      },
      observe: le({
        target: ({ slides: t, $el: e }) => [e, ...t]
      }),
      update: {
        write() {
          for (const t of this.navItems) {
            const e = ve(Bt(t, this.attrItem));
            e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !S(this.sets, e));
          }
          this.reorder(), this.parallax || this._translate(1), this.updateActiveClasses();
        },
        events: ["resize"]
      },
      events: {
        beforeitemshow(t) {
          !this.dragging && this.sets && this.stack.length < 2 && !S(this.sets, this.index) && (this.index = this.getValidIndex());
          const e = Math.abs(
            this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
          );
          if (!this.dragging && e > 1) {
            for (let l = 0; l < e; l++)
              this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
            t.preventDefault();
            return;
          }
          const n = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex, o = bn(this.list) / this.length;
          this.duration = da(o / this.velocity) * (N(this.slides[n]).width / o), this.reorder();
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
          let n = N(this.list).width / 2 - N(e).width / 2, o = 0;
          for (; n > 0; ) {
            const l = this.getIndex(--o + t, t), c = this.slides[l];
            w(c, "order", l > t ? -2 : -1), n -= N(c).width;
          }
        },
        updateActiveClasses(t = this.index) {
          let e = this._getTransitioner(t).getActives();
          this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
          const n = [
            this.clsActive,
            !this.sets || S(this.sets, G(this.index)) ? this.clsActivated : ""
          ];
          for (const o of this.slides) {
            const l = S(e, o);
            $t(o, n, l), F(o, "aria-hidden", !l);
            for (const c of dt(Cn, o))
              u(c, "_tabindex") || (c._tabindex = F(c, "tabindex")), F(c, "tabindex", l ? c._tabindex : -1);
          }
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          if (t = this.getIndex(t, e), !this.sets)
            return t;
          let n;
          do {
            if (S(this.sets, t))
              return t;
            n = t, t = this.getIndex(t + this.dir, e);
          } while (t !== n);
          return t;
        },
        getAdjacentSlides() {
          const { width: t } = N(this.list), e = -t, n = t * 2, o = N(this.slides[this.index]).width, l = this.center ? t / 2 - o / 2 : 0, c = /* @__PURE__ */ new Set();
          for (const d of [-1, 1]) {
            let p = l + (d > 0 ? o : 0), m = 0;
            do {
              const y = this.slides[this.getIndex(this.index + d + m++ * d)];
              p += N(y).width * d, c.add(y);
            } while (this.length > m && p > e && p < n);
          }
          return Array.from(c);
        },
        getIndexAt(t) {
          let e = -1;
          const n = this.center ? bn(this.list) - (N(this.slides[0]).width / 2 + N(Ie(this.slides)).width / 2) : bn(this.list, this.maxIndex);
          let o = t * n, l = 0;
          do {
            const c = N(this.slides[++e]).width, d = this.center ? c / 2 + N(this.slides[e + 1]).width / 2 : c;
            l = o / d % 1, o -= d;
          } while (o >= 0 && e < this.maxIndex);
          return [e, l];
        }
      }
    };
    function Jh(t, e) {
      if (!t || t.length < 2)
        return !0;
      const { width: n } = N(t);
      if (!e)
        return Math.ceil(bn(t)) < Math.trunc(n + Kh(t));
      const o = ct(t), l = Math.trunc(n / 2);
      for (const c in o) {
        const d = o[c], p = N(d).width, m = /* @__PURE__ */ new Set([d]);
        let y = 0;
        for (const $ of [-1, 1]) {
          let C = p / 2, R = 0;
          for (; C < l; ) {
            const B = o[Yt(+c + $ + R++ * $, o)];
            if (m.has(B))
              return !0;
            C += N(B).width, m.add(B);
          }
          y = Math.max(
            y,
            p / 2 + N(o[Yt(+c + $, o)]).width / 2 - (C - l)
          );
        }
        if (Math.trunc(y) > Be(
          o.filter(($) => !m.has($)),
          ($) => N($).width
        ))
          return !0;
      }
      return !1;
    }
    function Kh(t) {
      return Math.max(0, ...ct(t).map((e) => N(e).width));
    }
    var Ia = {
      mixins: [wa],
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
            Te.read(() => {
              if (!this.matchMedia)
                return;
              const c = this.getCss(Fa(t, l, e)), d = this.getCss(Ba(t) ? 0.5 : l > 0 ? 1 : 0);
              Te.write(() => {
                w(this.$el, c), ut.start(this.$el, d, n, o).catch(rt);
              });
            });
          }
        },
        {
          name: "transitioncanceled transitionend",
          self: !0,
          el: ({ item: t }) => t,
          handler() {
            ut.cancel(this.$el);
          }
        },
        {
          name: "itemtranslatein itemtranslateout",
          self: !0,
          el: ({ item: t }) => t,
          handler({ type: t, detail: { percent: e, dir: n } }) {
            Te.read(() => {
              if (!this.matchMedia) {
                this.reset();
                return;
              }
              const o = this.getCss(Fa(t, n, e));
              Te.write(() => w(this.$el, o));
            });
          }
        }
      ]
    };
    function Ba(t) {
      return A(t, "in");
    }
    function Fa(t, e, n) {
      return n /= 2, Ba(t) ^ e < 0 ? n : 1 - n;
    }
    var Gh = {
      ...eo,
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
          return [{ opacity: 0, transform: pn(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - w(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: pn(1 + 0.5 * t), zIndex: 0 },
            { zIndex: -1 }
          ];
        }
      },
      pull: {
        show(t) {
          return t < 0 ? [
            { transform: yt(30), zIndex: -1 },
            { transform: yt(), zIndex: 0 }
          ] : [
            { transform: yt(-100), zIndex: 0 },
            { transform: yt(), zIndex: -1 }
          ];
        },
        percent(t, e, n) {
          return n < 0 ? 1 - qn(e) : qn(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: yt(30 * t), zIndex: -1 },
            { transform: yt(-100 * (1 - t)), zIndex: 0 }
          ] : [
            { transform: yt(-t * 100), zIndex: 0 },
            { transform: yt(30 * (1 - t)), zIndex: -1 }
          ];
        }
      },
      push: {
        show(t) {
          return t < 0 ? [
            { transform: yt(100), zIndex: 0 },
            { transform: yt(), zIndex: -1 }
          ] : [
            { transform: yt(-30), zIndex: -1 },
            { transform: yt(), zIndex: 0 }
          ];
        },
        percent(t, e, n) {
          return n > 0 ? 1 - qn(e) : qn(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: yt(t * 100), zIndex: 0 },
            { transform: yt(-30 * (1 - t)), zIndex: -1 }
          ] : [
            { transform: yt(-30 * t), zIndex: -1 },
            { transform: yt(100 * (1 - t)), zIndex: 0 }
          ];
        }
      }
    }, Xh = {
      mixins: [Ht, fa, Ca, Ta, Aa],
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
        Animations: Gh
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
    }, Yh = {
      mixins: [Ht, Wr],
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
        name: ae,
        passive: !1,
        handler: "init"
      },
      computed: {
        target: (t, e) => (e.tBodies || [e])[0],
        items() {
          return ct(this.target);
        },
        isEmpty() {
          return !this.items.length;
        },
        handles({ handle: t }, e) {
          return t ? dt(t, e) : this.items;
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
          if (!this.drag || !lt(this.placeholder))
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
          if (p.some(ut.inProgress))
            return;
          const m = ed(p, { x: e, y: n });
          if (p.length && (!m || m === c))
            return;
          const y = this.getSortable(c), $ = nd(
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
          !l || o || n > 0 || vi(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = we(t), this.touched = /* @__PURE__ */ new Set([this]), this.placeholder = l, this.origin = { target: e, index: be(l), ...this.pos }, W(document, mi, this.move), W(document, xe, this.end), this.threshold || this.start(t));
        },
        start(t) {
          this.drag = td(this.$container, this.placeholder);
          const { left: e, top: n } = N(this.placeholder);
          q(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - n }), X(this.drag, this.clsDrag, this.clsCustom), X(this.placeholder, this.clsPlaceholder), X(this.items, this.clsItem), X(document.documentElement, this.clsDragState), j(this.$el, "start", [this, this.placeholder]), Qh(this.pos), this.move(t);
        },
        move: sd(function(t) {
          q(this.pos, we(t)), !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t), this.$emit("move");
        }),
        end() {
          if (Se(document, mi, this.move), Se(document, xe, this.end), !this.drag)
            return;
          Zh();
          const t = this.getSortable(this.placeholder);
          this === t ? this.origin.index !== be(this.placeholder) && j(this.$el, "moved", [this, this.placeholder]) : (j(t.$el, "added", [t, this.placeholder]), j(this.$el, "removed", [this, this.placeholder])), j(this.$el, "stop", [this, this.placeholder]), Qt(this.drag), this.drag = null;
          for (const { clsPlaceholder: e, clsItem: n } of this.touched)
            for (const o of this.touched)
              st(o.items, e, n);
          this.touched = null, st(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          X(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => ki(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => St(this.target, t));
        },
        remove(t) {
          this.target.contains(t) && this.animate(() => Qt(t));
        },
        getSortable(t) {
          do {
            const e = this.$getComponent(t, "sortable");
            if (e && (e === this || this.group !== !1 && e.group === this.group))
              return e;
          } while (t = lt(t));
        }
      }
    };
    let Na;
    function Qh(t) {
      let e = Date.now();
      Na = setInterval(() => {
        let { x: n, y: o } = t;
        o += document.scrollingElement.scrollTop;
        const l = (Date.now() - e) * 0.3;
        e = Date.now(), Le(document.elementFromPoint(n, t.y)).reverse().some((c) => {
          let { scrollTop: d, scrollHeight: p } = c;
          const { top: m, bottom: y, height: $ } = Zt(c);
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
    function Zh() {
      clearInterval(Na);
    }
    function td(t, e) {
      let n;
      if (wt(e, "li", "tr")) {
        n = V("<div>"), St(n, e.cloneNode(!0).children);
        for (const o of e.getAttributeNames())
          F(n, o, e.getAttribute(o));
      } else
        n = e.cloneNode(!0);
      return St(t, n), w(n, "margin", "0", "important"), w(n, {
        boxSizing: "border-box",
        width: e.offsetWidth,
        height: e.offsetHeight,
        padding: w(e, "padding")
      }), zt(n.firstElementChild, zt(e.firstElementChild)), n;
    }
    function ed(t, e) {
      return t[P(t, (n) => fi(e, N(n)))];
    }
    function nd(t, e, n, o, l, c) {
      if (!ct(t).length)
        return;
      const d = N(e);
      if (!c)
        return id(t, n) || l < d.top + d.height / 2 ? e : e.nextElementSibling;
      const p = N(n), m = Da(
        [d.top, d.bottom],
        [p.top, p.bottom]
      ), [y, $, C, R] = m ? [o, "width", "left", "right"] : [l, "height", "top", "bottom"], B = p[$] < d[$] ? d[$] - p[$] : 0;
      return p[C] < d[C] ? B && y < d[C] + B ? !1 : e.nextElementSibling : B && y > d[R] - B ? !1 : e;
    }
    function id(t, e) {
      const n = ct(t).length === 1;
      n && St(t, e);
      const o = ct(t), l = o.some((c, d) => {
        const p = N(c);
        return o.slice(d + 1).some((m) => {
          const y = N(m);
          return !Da([p.left, p.right], [y.left, y.right]);
        });
      });
      return n && Qt(e), l;
    }
    function Da(t, e) {
      return t[1] > e[0] && e[1] > t[0];
    }
    function sd(t) {
      let e;
      return function(...n) {
        e || (e = !0, t.call(this, ...n), requestAnimationFrame(() => e = !1));
      };
    }
    var ja = {
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
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = S(["top", "bottom"], this.dir) ? "y" : "x";
      },
      methods: {
        positionAt(t, e, n) {
          let o = [this.getPositionOffset(t), this.getShiftOffset(t)];
          const l = [this.flip && "flip", this.shift && "shift"], c = {
            element: [this.inset ? this.dir : Ei(this.dir), this.align],
            target: [this.dir, this.align]
          };
          if (this.axis === "y") {
            for (const m in c)
              c[m].reverse();
            o.reverse(), l.reverse();
          }
          const d = Ua(t), p = N(t);
          w(t, { top: -p.height, left: -p.width }), Cr(t, e, {
            attach: c,
            offset: o,
            boundary: n,
            placement: l,
            viewportOffset: this.getViewportOffset(t)
          }), d();
        },
        getPositionOffset(t = this.$el) {
          return Rt(
            this.offset === !1 ? w(t, "--uk-position-offset") : this.offset,
            this.axis === "x" ? "width" : "height",
            t
          ) * (S(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
        },
        getShiftOffset(t = this.$el) {
          return this.align === "center" ? 0 : Rt(
            w(t, "--uk-position-shift-offset"),
            this.axis === "y" ? "width" : "height",
            t
          ) * (S(["left", "top"], this.align) ? 1 : -1);
        },
        getViewportOffset(t) {
          return Rt(w(t, "--uk-position-viewport-offset"));
        }
      }
    };
    function Ua(t) {
      const e = Ce(t), { scrollTop: n } = e;
      return () => {
        n !== e.scrollTop && (e.scrollTop = n);
      };
    }
    var od = {
      mixins: [Hn, ze, ja],
      data: {
        pos: "top",
        animation: ["uk-animation-scale-up"],
        duration: 100,
        cls: "uk-active"
      },
      connected() {
        rd(this.$el);
      },
      disconnected() {
        this.hide();
      },
      methods: {
        show() {
          if (this.isToggled(this.tooltip || null))
            return;
          const { delay: t = 0, title: e } = ld(this.$options);
          if (!e)
            return;
          const n = F(this.$el, "title"), o = W(this.$el, ["blur", an], (c) => !ue(c) && this.hide());
          this.reset = () => {
            F(this.$el, { title: n, "aria-describedby": null }), o();
          };
          const l = We(this);
          F(this.$el, { title: null, "aria-describedby": l }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, l), t);
        },
        async hide() {
          var t;
          nt(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), (t = this.reset) == null || t.call(this), Qt(this.tooltip), this.tooltip = null);
        },
        async _show(t, e) {
          this.tooltip = St(
            this.container,
            `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`
          ), W(this.tooltip, "toggled", (n, o) => {
            if (!o)
              return;
            const l = () => this.positionAt(this.tooltip, this.$el);
            l();
            const [c, d] = ad(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? `${Ei(c)}-${d}` : `${d}-${Ei(c)}`;
            const p = [
              bt(
                document,
                `keydown ${ae}`,
                this.hide,
                !1,
                (m) => m.type === ae && !this.$el.contains(m.target) || m.type === "keydown" && m.keyCode === at.ESC
              ),
              W([document, ...Me(this.$el)], "scroll", l, {
                passive: !0
              })
            ];
            bt(this.tooltip, "hide", () => p.forEach((m) => m()), {
              self: !0
            });
          }), await this.toggleElement(this.tooltip, !0) || this.hide();
        }
      },
      events: {
        // Clicking a button does not give it focus on all browsers and platforms
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
        [`focus ${De} ${ae}`](t) {
          (!ue(t) || t.type === ae) && this.show();
        }
      }
    };
    function rd(t) {
      bi(t) || F(t, "tabindex", "0");
    }
    function ad(t, e, [n, o]) {
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
      return o = (S(d[0], n) ? d[1] : d[0]).find((m) => l[m] === c[m]) || "center", [n, o];
    }
    function ld(t) {
      const { el: e, id: n, data: o } = t;
      return ["delay", "title"].reduce((l, c) => ({ [c]: Bt(e, c), ...l }), {
        ...dn(Bt(e, n), ["title"]),
        ...o
      });
    }
    var cd = {
      mixins: [Di],
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
        abort: rt,
        beforeAll: rt,
        beforeSend: rt,
        complete: rt,
        completeAll: rt,
        error: rt,
        fail: rt,
        load: rt,
        loadEnd: rt,
        loadStart: rt,
        progress: rt
      },
      events: {
        change(t) {
          nt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
        },
        drop(t) {
          Wi(t);
          const e = t.dataTransfer;
          e != null && e.files && (st(this.$el, this.clsDragover), this.upload(e.files));
        },
        dragenter(t) {
          Wi(t);
        },
        dragover(t) {
          Wi(t), X(this.$el, this.clsDragover);
        },
        dragleave(t) {
          Wi(t), st(this.$el, this.clsDragover);
        }
      },
      methods: {
        async upload(t) {
          if (t = O(t), !t.length)
            return;
          j(this.$el, "upload", [t]);
          for (const o of t) {
            if (this.maxSize && this.maxSize * 1e3 < o.size) {
              this.fail(this.t("invalidSize", this.maxSize));
              return;
            }
            if (this.allow && !La(this.allow, o.name)) {
              this.fail(this.t("invalidName", this.allow));
              return;
            }
            if (this.mime && !La(this.mime, o.type)) {
              this.fail(this.t("invalidMime", this.mime));
              return;
            }
          }
          this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
          const e = ud(t, this.concurrent), n = async (o) => {
            const l = new FormData();
            o.forEach((c) => l.append(this.name, c));
            for (const c in this.params)
              l.append(c, this.params[c]);
            try {
              const c = await hd(this.url, {
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
    function La(t, e) {
      return e.match(
        new RegExp(
          `^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`,
          "i"
        )
      );
    }
    function ud(t, e) {
      const n = [];
      for (let o = 0; o < t.length; o += e)
        n.push(t.slice(o, o + e));
      return n;
    }
    function Wi(t) {
      t.preventDefault(), t.stopPropagation();
    }
    async function hd(t, e) {
      const n = {
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: rt,
        responseType: "",
        ...e
      };
      return await n.beforeSend(n), dd(t, n);
    }
    function dd(t, e) {
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
            q(Error(l.statusText), {
              xhr: l,
              status: l.status
            })
          );
        }), W(l, "error", () => o(q(Error("Network Error"), { xhr: l }))), W(l, "timeout", () => o(q(Error("Network Timeout"), { xhr: l }))), l.send(e.data);
      });
    }
    var fd = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Countdown: Tu,
      Filter: zu,
      Lightbox: Ph,
      LightboxPanel: ma,
      Notification: Ih,
      Parallax: zh,
      Slider: Vh,
      SliderParallax: Ia,
      Slideshow: Xh,
      SlideshowParallax: Ia,
      Sortable: Yh,
      Tooltip: od,
      Upload: cd
    });
    function pd(t) {
      Ne && window.MutationObserver && (document.body ? requestAnimationFrame(() => Ma(t)) : new MutationObserver((e, n) => {
        document.body && (Ma(t), n.disconnect());
      }).observe(document.documentElement, { childList: !0 }));
    }
    function Ma(t) {
      j(document, "uikit:init", t), document.body && Oe(document.body, za), new MutationObserver((e) => e.forEach(md)).observe(document, {
        subtree: !0,
        childList: !0
      }), new MutationObserver((e) => e.forEach(gd)).observe(document, {
        subtree: !0,
        attributes: !0
      }), t._initialized = !0;
    }
    function md({ addedNodes: t, removedNodes: e }) {
      for (const n of t)
        Oe(n, za);
      for (const n of e)
        Oe(n, vd);
    }
    function gd({ target: t, attributeName: e }) {
      var n;
      const o = Ha(e);
      o && ($e(t, e) ? Vn(o, t) : (n = ji(t, o)) == null || n.$destroy());
    }
    function za(t) {
      const e = Jn(t);
      for (const n in e)
        io(e[n]);
      for (const n of t.getAttributeNames()) {
        const o = Ha(n);
        o && Vn(o, t);
      }
    }
    function vd(t) {
      const e = Jn(t);
      for (const n in e)
        so(e[n]);
    }
    function Ha(t) {
      v(t, "data-") && (t = t.slice(5));
      const e = gn[t];
      return e && (e.options || e).name;
    }
    Sh(ee), _h(ee);
    var qa = {
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
        items: ({ targets: t }, e) => dt(t, e),
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
            Vi(e, !n);
          }
          this.$emit();
        }
      },
      observe: Fi(),
      events: [
        {
          name: "click keydown",
          delegate: ({ targets: t, $props: e }) => `${t} ${e.toggle}`,
          async handler(t) {
            var e;
            t.type === "keydown" && t.keyCode !== at.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = wd(t.target), await this.toggle(be(this.toggles, t.current)), this._off());
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
          const l = S(t, this.items[e]);
          F(n, {
            role: wt(n, "a") ? "button" : null,
            "aria-controls": o.id,
            "aria-expanded": l,
            "aria-disabled": !this.collapsible && t.length < 2 && l
          }), F(o, { role: "region", "aria-labelledby": n.id }), wt(o, "ul") && F(ct(o), "role", "presentation");
        }
      },
      methods: {
        toggle(t, e) {
          t = this.items[Yt(t, this.items)];
          let n = [t];
          const o = An(this.items, `.${this.clsOpen}`);
          if (!this.multiple && !S(o, n[0]) && (n = n.concat(o)), !(!this.collapsible && o.length < 2 && S(o, t)))
            return Promise.all(
              n.map(
                (l) => this.toggleElement(l, !S(o, l), (c, d) => {
                  if ($t(c, this.clsOpen, d), e === !1 || !this.animation) {
                    Vi(V(this.content, c), !d);
                    return;
                  }
                  return bd(c, d, this);
                })
              )
            );
        }
      }
    };
    function Vi(t, e) {
      t && (t.hidden = e);
    }
    async function bd(t, e, { content: n, duration: o, velocity: l, transition: c }) {
      var d;
      n = ((d = t._wrapper) == null ? void 0 : d.firstElementChild) || V(n, t), t._wrapper || (t._wrapper = Si(n, "<div>"));
      const p = t._wrapper;
      w(p, "overflow", "hidden");
      const m = G(w(p, "height"));
      await ut.cancel(p), Vi(n, !1);
      const y = Be(["marginTop", "marginBottom"], (C) => w(n, C)) + N(n).height, $ = m / y;
      o = (l * y + o) * (e ? 1 - $ : $), w(p, "height", m), await ut.start(p, { height: e ? y : 0 }, o, c), Fn(n), delete t._wrapper, e || Vi(n, !0);
    }
    function wd(t) {
      const e = Ce(t, !0);
      let n;
      return function o() {
        n = requestAnimationFrame(() => {
          const { top: l } = N(t);
          l < 0 && (e.scrollTop += l), o();
        });
      }(), () => requestAnimationFrame(() => cancelAnimationFrame(n));
    }
    var yd = {
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
          await this.toggleElement(this.$el, !1, kd), this.$destroy(!0);
        }
      }
    };
    function kd(t, e, { duration: n, transition: o, velocity: l }) {
      const c = G(w(t, "height"));
      return w(t, "height", c), ut.start(
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
    var Wa = {
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
        this.autoplay === "inview" && !$e(this.$el, "preload") && (this.$el.preload = "none"), wt(this.$el, "iframe") && !$e(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && (wt(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = !0), this.automute && $r(this.$el);
      },
      events: [
        {
          name: `${De} focusin`,
          filter: ({ autoplay: t }) => S(t, "hover"),
          handler(t) {
            !ue(t) || !$d(this.$el) ? js(this.$el) : Ci(this.$el);
          }
        },
        {
          name: `${an} focusout`,
          filter: ({ autoplay: t }) => S(t, "hover"),
          handler(t) {
            ue(t) || Ci(this.$el);
          }
        }
      ],
      observe: [
        fn({
          filter: ({ $el: t, autoplay: e }) => e !== "hover" && xr(t),
          handler([{ isIntersecting: t }]) {
            document.fullscreenElement || (t ? this.autoplay && js(this.$el) : Ci(this.$el));
          },
          args: { intersecting: !1 },
          options: ({ $el: t, autoplay: e }) => ({ root: e === "inview" ? null : lt(t) })
        })
      ]
    };
    function $d(t) {
      return !t.paused && !t.ended;
    }
    var xd = {
      mixins: [Wa],
      props: {
        width: Number,
        height: Number
      },
      data: {
        automute: !0
      },
      created() {
        this.useObjectFit = wt(this.$el, "img", "video");
      },
      observe: le({
        target: ({ $el: t }) => Va(t) || lt(t),
        filter: ({ useObjectFit: t }) => !t
      }),
      update: {
        read() {
          if (this.useObjectFit)
            return !1;
          const { ratio: t, cover: e } = ks, { $el: n, width: o, height: l } = this;
          let c = { width: o, height: l };
          if (!o || !l) {
            const y = {
              width: n.naturalWidth || n.videoWidth || n.clientWidth,
              height: n.naturalHeight || n.videoHeight || n.clientHeight
            };
            o ? c = t(y, "width", o) : l ? c = t(y, "height", l) : c = y;
          }
          const { offsetHeight: d, offsetWidth: p } = Va(n) || lt(n), m = e(c, { width: p, height: d });
          return !m.width || !m.height ? !1 : m;
        },
        write({ height: t, width: e }) {
          w(this.$el, { height: t, width: e });
        },
        events: ["resize"]
      }
    };
    function Va(t) {
      for (; t = lt(t); )
        if (w(t, "position") !== "static")
          return t;
    }
    let Ft;
    var Ja = {
      mixins: [Hn, ja, ze],
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
            Mt(e || t, o) || window,
            Mt(n || t, o) || window
          ];
        },
        target({ target: t, targetX: e, targetY: n }, o) {
          return e || (e = t || this.targetEl), n || (n = t || this.targetEl), [
            e === !0 ? window : Mt(e, o),
            n === !0 ? window : Mt(n, o)
          ];
        }
      },
      created() {
        this.tracker = new wr();
      },
      beforeConnect() {
        this.clsDrop = this.$props.clsDrop || this.$options.id;
      },
      connected() {
        X(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = _d(this)), this._style = ws(this.$el.style, ["width", "height"]);
      },
      disconnected() {
        this.isActive() && (this.hide(!1), Ft = null), w(this.$el, this._style);
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
            !t && n && ln(e) && !this.$el.contains(V(n)) && this.hide(!1);
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
            t.preventDefault(), nt(this.$el, ":focus,:hover") || this.hide();
          }
        },
        {
          name: `${De} focusin`,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            ue(t) || this.clearTimers();
          }
        },
        {
          name: `${an} focusout`,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            !ue(t) && t.relatedTarget && this.hide();
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
            Ft = this, this.tracker.init(), F(this.targetEl, "aria-expanded", !0);
            const t = [
              Ed(this),
              Od(this),
              Cd(this),
              this.autoUpdate && Ka(this),
              this.closeOnScroll && Td(this)
            ];
            bt(this.$el, "hide", () => t.forEach((e) => e && e()), {
              self: !0
            }), this.bgScroll || bt(this.$el, "hidden", Kr(this.$el), { self: !0 });
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
              Ft = Ft === null && this.$el.contains(t) && this.isToggled() ? this : Ft;
              return;
            }
            Ft = this.isActive() ? null : Ft, this.tracker.cancel(), F(this.targetEl, "aria-expanded", null);
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
            if (Ft) {
              if (e && Ft.isDelaying()) {
                this.showTimer = setTimeout(() => nt(t, ":hover") && this.show(), 10);
                return;
              }
              let n;
              for (; Ft && n !== Ft && !Ft.$el.contains(this.$el); )
                n = Ft, Ft.hide(!1, !1);
            }
            this.container && lt(this.$el) !== this.container && St(this.container, this.$el), this.showTimer = setTimeout(
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
          return Ft === this;
        },
        isDelaying() {
          return [this.$el, ...dt(".uk-drop", this.$el)].some((t) => this.tracker.movesTo(t));
        },
        position() {
          const t = Ua(this.$el);
          st(this.$el, "uk-drop-stack"), w(this.$el, this._style), this.$el.hidden = !0;
          const e = this.target.map((c) => Sd(this.$el, c)), n = this.getViewportOffset(this.$el), o = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]]
          ];
          for (const [c, [d, p]] of o)
            this.axis !== d && S([d, !0], this.stretch) && w(this.$el, {
              [p]: Math.min(
                Z(this.boundary[c])[p],
                e[c][p] - 2 * n
              ),
              [`overflow-${d}`]: "auto"
            });
          const l = e[0].width - 2 * n;
          this.$el.hidden = !1, w(this.$el, "maxWidth", ""), this.$el.offsetWidth > l && X(this.$el, "uk-drop-stack"), w(this.$el, "maxWidth", l), this.positionAt(this.$el, this.target, this.boundary);
          for (const [c, [d, p, m, y]] of o)
            if (this.axis === d && S([d, !0], this.stretch)) {
              const $ = Math.abs(this.getPositionOffset()), C = Z(this.target[c]), R = Z(this.$el);
              w(this.$el, {
                [p]: (C[m] > R[m] ? C[this.inset ? y : m] - Math.max(
                  Z(this.boundary[c])[m],
                  e[c][m] + n
                ) : Math.min(
                  Z(this.boundary[c])[y],
                  e[c][y] - n
                ) - C[this.inset ? m : y]) - $,
                [`overflow-${d}`]: "auto"
              }), this.positionAt(this.$el, this.target, this.boundary);
            }
          t();
        }
      }
    };
    function Sd(t, e) {
      return Zt(Me(e).find((n) => n.contains(t)));
    }
    function _d(t) {
      const { $el: e } = t.$create("toggle", Mt(t.toggle, t.$el), {
        target: t.$el,
        mode: t.mode
      });
      return F(e, "aria-haspopup", !0), e;
    }
    function Ed(t) {
      const e = () => t.$emit(), n = [
        Ns(e),
        jn(Me(t.$el).concat(t.target), e)
      ];
      return () => n.map((o) => o.disconnect());
    }
    function Ka(t, e = () => t.$emit()) {
      return W([document, ...Me(t.$el)], "scroll", e, {
        passive: !0
      });
    }
    function Od(t) {
      return W(document, "keydown", (e) => {
        e.keyCode === at.ESC && t.hide(!1);
      });
    }
    function Td(t) {
      return Ka(t, () => t.hide(!1));
    }
    function Cd(t) {
      return W(document, ae, ({ target: e }) => {
        t.$el.contains(e) || bt(
          document,
          `${xe} ${gi} scroll`,
          ({ defaultPrevented: n, type: o, target: l }) => {
            var c;
            !n && o === xe && e === l && !((c = t.targetEl) != null && c.contains(e)) && t.hide(!1);
          },
          !0
        );
      });
    }
    var Ga = {
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
        dropbarAnchor: ({ dropbarAnchor: t }, e) => Mt(t, e) || e,
        dropbar({ dropbar: t }) {
          return t ? (t = this._dropbar || Mt(t, this.$el) || V(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = V("<div></div>"))) : null;
        },
        dropContainer(t, e) {
          return this.container || e;
        },
        dropdowns({ clsDrop: t }, e) {
          var n;
          const o = dt(`.${t}`, e);
          if (this.dropContainer !== e)
            for (const l of dt(`.${t}`, this.dropContainer)) {
              const c = (n = this.getDropdown(l)) == null ? void 0 : n.targetEl;
              !S(o, l) && c && this.$el.contains(c) && o.push(l);
            }
          return o;
        },
        items({ selNavItem: t }, e) {
          return dt(t, e);
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
        Qt(this._dropbar), delete this._dropbar;
      },
      events: [
        {
          name: "mouseover focusin",
          delegate: ({ selNavItem: t }) => t,
          handler({ current: t }) {
            const e = this.getActive();
            e && S(e.mode, "hover") && e.targetEl && !t.contains(e.targetEl) && !e.isDelaying() && e.hide(!1);
          }
        },
        {
          name: "keydown",
          self: !0,
          delegate: ({ selNavItem: t }) => t,
          handler(t) {
            var e;
            const { current: n, keyCode: o } = t, l = this.getActive();
            o === at.DOWN && (l == null ? void 0 : l.targetEl) === n && (t.preventDefault(), (e = V(Cn, l.$el)) == null || e.focus()), Xa(t, this.items, l);
          }
        },
        {
          name: "keydown",
          el: ({ dropContainer: t }) => t,
          delegate: ({ clsDrop: t }) => `.${t}`,
          handler(t) {
            var e;
            const { current: n, keyCode: o, target: l } = t;
            if (vi(l) || !S(this.dropdowns, n))
              return;
            const c = this.getActive();
            let d = -1;
            if (o === at.HOME ? d = 0 : o === at.END ? d = "last" : o === at.UP ? d = "previous" : o === at.DOWN ? d = "next" : o === at.ESC && ((e = c.targetEl) == null || e.focus()), ~d) {
              t.preventDefault();
              const p = dt(Cn, n);
              p[Yt(
                d,
                p,
                P(p, (m) => nt(m, ":focus"))
              )].focus();
            }
            Xa(t, this.items, c);
          }
        },
        {
          name: "mouseleave",
          el: ({ dropbar: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler() {
            const t = this.getActive();
            t && S(t.mode, "hover") && !this.dropdowns.some((e) => nt(e, ":hover")) && t.hide();
          }
        },
        {
          name: "beforeshow",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler({ target: t }) {
            this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && $i(this.dropbarAnchor, this.dropbar), X(t, `${this.clsDrop}-dropbar`));
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
            nt(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && S(e.mode, "hover") && e.isDelayedHide && !this.items.some((n) => e.targetEl !== n && nt(n, ":focus")) && t.preventDefault();
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
          return S(this.dropdowns, (t = Ft) == null ? void 0 : t.$el) && Ft;
        },
        async transitionTo(t, e) {
          const { dropbar: n } = this, o = zt(n);
          if (e = o < t && e, await ut.cancel([e, n]), e) {
            const l = Z(e).top - Z(n).top - o;
            l > 0 && w(e, "transitionDelay", `${l / t * this.duration}ms`);
          }
          w(e, "clipPath", `polygon(0 0,100% 0,100% ${o}px,0 ${o}px)`), zt(n, o), await Promise.all([
            ut.start(n, { height: t }, this.duration),
            ut.start(
              e,
              { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` },
              this.duration
            ).finally(() => w(e, { clipPath: "", transitionDelay: "" }))
          ]).catch(rt);
        },
        getDropdown(t) {
          return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
        },
        isDropbarDrop(t) {
          return S(this.dropdowns, t) && H(t, this.clsDrop);
        },
        getDropbarOffset(t) {
          const { $el: e, target: n, targetY: o } = this, { top: l, height: c } = Z(Mt(o || n || e, e));
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
    function Xa(t, e, n) {
      var o, l, c;
      const { current: d, keyCode: p } = t;
      let m = -1;
      p === at.HOME ? m = 0 : p === at.END ? m = "last" : p === at.LEFT ? m = "previous" : p === at.RIGHT ? m = "next" : p === at.TAB && ((o = n.targetEl) == null || o.focus(), (l = n.hide) == null || l.call(n, !1)), ~m && (t.preventDefault(), (c = n.hide) == null || c.call(n, !1), e[Yt(m, e, e.indexOf(n.targetEl || d))].focus());
    }
    var Ad = {
      mixins: [Ht],
      args: "target",
      props: {
        target: Boolean
      },
      data: {
        target: !1
      },
      computed: {
        input: (t, e) => V(Tn, e),
        state() {
          return this.input.nextElementSibling;
        },
        target({ target: t }, e) {
          return t && (t === !0 && lt(this.input) === e && this.input.nextElementSibling || V(t, e));
        }
      },
      update() {
        var t;
        const { target: e, input: n } = this;
        if (!e)
          return;
        let o;
        const l = vi(e) ? "value" : "textContent", c = e[l], d = (t = n.files) != null && t[0] ? n.files[0].name : nt(n, "select") && (o = dt("option", n).filter((p) => p.selected)[0]) ? o.textContent : n.value;
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
    }, Pd = {
      extends: Ur,
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
            if (o = Math.max(0, Rt(o)), !(n || o || l) || Ya(e) || e[0].some(
              (z, Y) => e.some((it) => it[Y] && it[Y].offsetWidth !== z.offsetWidth)
            ))
              return t.translates = t.scrollColumns = !1;
            let d = Id(e, c), p, m;
            n ? [p, m] = Rd(e, d, n === "next") : p = Bd(e);
            const y = p.map(
              (z) => Be(z, "offsetHeight") + d * (z.length - 1)
            ), $ = Math.max(0, ...y);
            let C, R, B;
            return (o || l) && (C = y.map(
              (z, Y) => l ? $ - z + o : o / (Y % 2 || 8)
            ), l || (o = Math.max(
              ...y.map((z, Y) => z + C[Y] - $)
            )), R = Rt(this.parallaxStart, "height", this.$el, !0), B = Rt(this.parallaxEnd, "height", this.$el, !0)), {
              columns: p,
              translates: m,
              scrollColumns: C,
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
              scrolled: e && !Ya(t) ? Ri(this.$el, n, o) : !1
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
    function Ya(t) {
      return t.flat().some((e) => w(e, "position") === "absolute");
    }
    function Rd(t, e, n) {
      const o = [], l = [], c = Array(t[0].length).fill(0);
      let d = 0;
      for (let p of t) {
        Tt && (p = p.reverse());
        let m = 0;
        for (const y in p) {
          const { offsetWidth: $, offsetHeight: C } = p[y], R = n ? y : c.indexOf(Math.min(...c));
          ao(o, R, p[y]), ao(l, R, [
            (R - y) * $ * (Tt ? -1 : 1),
            c[R] - d
          ]), c[R] += C + e, m = Math.max(m, C);
        }
        d += m + e;
      }
      return [o, l];
    }
    function Id(t, e) {
      const n = t.flat().find((o) => H(o, e));
      return G(n ? w(n, "marginTop") : w(t[0][0], "paddingLeft"));
    }
    function Bd(t) {
      const e = [];
      for (const n of t)
        for (const o in n)
          ao(e, o, n[o]);
      return e;
    }
    function ao(t, e, n) {
      t[e] || (t[e] = []), t[e].push(n);
    }
    var Fd = {
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
        elements: ({ target: t }, e) => dt(t, e)
      },
      observe: le({
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
            rows: (this.row ? Ks(this.elements) : [this.elements]).map(Nd)
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
      let e = t.map(Dd);
      const n = Math.max(...e);
      return {
        heights: t.map((o, l) => e[l].toFixed(2) === n.toFixed(2) ? "" : n),
        elements: t
      };
    }
    function Dd(t) {
      const e = ws(t.style, ["display", "minHeight"]);
      xt(t) || w(t, "display", "block", "important"), w(t, "minHeight", "");
      const n = N(t).height - un(t, "height", "content-box");
      return w(t, e), n;
    }
    var jd = {
      args: "target",
      props: {
        target: String
      },
      data: {
        target: ""
      },
      computed: {
        target: {
          get: ({ target: t }, e) => Mt(t, e),
          observe: ({ target: t }) => t
        }
      },
      observe: le({ target: ({ target: t }) => t }),
      update: {
        read() {
          return this.target ? { height: this.target.offsetHeight } : !1;
        },
        write({ height: t }) {
          w(this.$el, { minHeight: t });
        },
        events: ["resize"]
      }
    }, Ud = {
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
        Js({ filter: ({ expand: t }) => t }),
        le({ target: ({ $el: t }) => Le(t) })
      ],
      update: {
        read() {
          if (!xt(this.$el))
            return !1;
          let t = "";
          const e = un(this.$el, "height", "content-box"), { body: n, scrollingElement: o } = document, l = Ce(this.$el), { height: c } = Zt(
            l === n ? o : l
          ), d = o === l || n === l;
          if (t = `calc(${d ? "100vh" : `${c}px`}`, this.expand) {
            const p = N(l).height - N(this.$el).height;
            t += ` - ${p}px`;
          } else {
            if (this.offsetTop)
              if (d) {
                const p = this.offsetTop === !0 ? this.$el : Mt(this.offsetTop, this.$el), { top: m } = Z(p);
                t += m > 0 && m < c / 2 ? ` - ${m}px` : "";
              } else
                t += ` - ${un(l, "height", w(l, "boxSizing"))}px`;
            this.offsetBottom === !0 ? t += ` - ${N(this.$el.nextElementSibling).height}px` : fe(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && A(this.offsetBottom, "px") ? t += ` - ${G(this.offsetBottom)}px` : ft(this.offsetBottom) && (t += ` - ${N(Mt(this.offsetBottom, this.$el)).height}px`);
          }
          return t += `${e ? ` - ${e}px` : ""})`, { minHeight: t };
        },
        write({ minHeight: t }) {
          w(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"]
      }
    }, Ld = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', Md = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', zd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Hd = '<svg width="20" height="20" viewBox="0 0 20 20"><rect width="1" height="11" x="9" y="4"/><rect width="11" height="1" x="4" y="9"/></svg>', qd = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', Wd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Vd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Jd = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1"/><rect width="20" height="2" y="9" class="line-2"/><rect width="20" height="2" y="9" class="line-3"/><rect width="20" height="2" y="15" class="line-4"/></svg>', Kd = '<svg width="40" height="40" viewBox="0 0 40 40"><rect width="1" height="40" x="19" y="0"/><rect width="40" height="1" x="0" y="19"/></svg>', Gd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', Xd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Qa = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', Yd = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', Qd = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', Zd = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', tf = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', ef = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', nf = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', sf = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', of = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>', Za = {
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
          const e = rf(t, this.$el);
          return this.svgEl && e !== this.svgEl && Qt(this.svgEl), af.call(this, e, t), this.svgEl = e;
        }, rt);
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected || ($s(this.$el) && (this.$el.hidden = !1), Qt(t), this.svgEl = null);
        }), this.svg = null;
      },
      methods: {
        async getSvg() {
        }
      }
    };
    function rf(t, e) {
      if ($s(e) || wt(e, "canvas")) {
        e.hidden = !0;
        const o = e.nextElementSibling;
        return tl(t, o) ? o : $i(e, t);
      }
      const n = e.lastElementChild;
      return tl(t, n) ? n : St(e, t);
    }
    function tl(t, e) {
      return wt(t, "svg") && wt(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function af(t, e) {
      const n = ["width", "height"];
      let o = n.map((c) => this[c]);
      o.some((c) => c) || (o = n.map((c) => F(e, c)));
      const l = F(e, "viewBox");
      l && !o.some((c) => c) && (o = l.split(" ").slice(2)), o.forEach((c, d) => F(t, n[d], G(c) * this.ratio || null));
    }
    var lf = {
      mixins: [Za],
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
        Bi({
          async handler() {
            const t = await this.svg;
            t && el.call(this, t);
          },
          options: {
            attributes: !0,
            attributeFilter: ["id", "class", "style"]
          }
        })
      ],
      async connected() {
        S(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
        const t = await this.svg;
        t && (el.call(this, t), this.strokeAnimation && df(t));
      },
      methods: {
        async getSvg() {
          return wt(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t) => bt(this.$el, "load", t)), uf(await cf(this.src), this.icon) || Promise.reject("SVG not found.");
        }
      }
    };
    function el(t) {
      const { $el: e } = this;
      X(t, F(e, "class"), "uk-svg");
      for (let n = 0; n < e.style.length; n++) {
        const o = e.style[n];
        w(t, o, w(e, o));
      }
      for (const n in this.attributes) {
        const [o, l] = this.attributes[n].split(":", 2);
        F(t, o, l);
      }
      this.$el.id || On(t, "id");
    }
    const cf = re(async (t) => t ? v(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function uf(t, e) {
      return e && S(t, "<symbol") && (t = hf(t)[e] || t), il(t);
    }
    const nl = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, hf = re(function(t) {
      const e = {};
      nl.lastIndex = 0;
      let n;
      for (; n = nl.exec(t); )
        e[n[3]] = `<svg ${n[1]}svg>`;
      return e;
    });
    function df(t) {
      const e = va(t);
      e && w(t, "--uk-animation-stroke", e);
    }
    function il(t) {
      const e = document.createElement("template");
      return e.innerHTML = t, e.content.firstElementChild;
    }
    const Ji = {
      spinner: sf,
      totop: of,
      marker: Hd,
      "close-icon": Ld,
      "close-large": Md,
      "drop-parent-icon": zd,
      "nav-parent-icon": Wd,
      "nav-parent-icon-large": qd,
      "navbar-parent-icon": Vd,
      "navbar-toggle-icon": Jd,
      "overlay-icon": Kd,
      "pagination-next": Gd,
      "pagination-previous": Xd,
      "search-icon": Qa,
      "search-medium": Qd,
      "search-large": Yd,
      "search-toggle-icon": Qa,
      "slidenav-next": tf,
      "slidenav-next-large": Zd,
      "slidenav-previous": nf,
      "slidenav-previous-large": ef
    }, lo = {
      install: $f,
      mixins: [Za],
      args: "icon",
      props: { icon: String },
      isIcon: !0,
      beforeConnect() {
        X(this.$el, "uk-icon");
      },
      methods: {
        async getSvg() {
          const t = Sf(this.icon);
          if (!t)
            throw "Icon not found.";
          return t;
        }
      }
    }, Je = {
      args: !1,
      extends: lo,
      data: (t) => ({
        icon: f(t.constructor.options.name)
      }),
      beforeConnect() {
        X(this.$el, this.$options.id);
      }
    }, ff = {
      extends: Je,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      }
    }, pf = {
      extends: Je,
      mixins: [Di],
      i18n: { toggle: "Open Search", submit: "Submit Search" },
      beforeConnect() {
        const t = H(this.$el, "uk-search-toggle") || H(this.$el, "uk-navbar-toggle");
        if (this.icon = t ? "search-toggle-icon" : H(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-medium") ? "search-medium" : this.$props.icon, !$e(this.$el, "aria-label"))
          if (t) {
            const e = this.t("toggle");
            F(this.$el, "aria-label", e);
          } else {
            const e = this.$el.closest("a,button");
            if (e) {
              const n = this.t("submit");
              F(e, "aria-label", n);
            }
          }
      }
    }, mf = {
      extends: Je,
      beforeConnect() {
        F(this.$el, "role", "status");
      },
      methods: {
        async getSvg() {
          const t = await lo.methods.getSvg.call(this);
          return this.ratio !== 1 && w(V("circle", t), "strokeWidth", 1 / this.ratio), t;
        }
      }
    }, Ke = {
      extends: Je,
      mixins: [Di],
      beforeConnect() {
        const t = this.$el.closest("a,button");
        F(t, "role", this.role !== null && wt(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !$e(t, "aria-label") && F(t, "aria-label", e);
      }
    }, sl = {
      extends: Ke,
      beforeConnect() {
        X(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = H(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      }
    }, gf = {
      extends: Ke,
      i18n: { label: "Open menu" }
    }, vf = {
      extends: Ke,
      i18n: { label: "Close" },
      beforeConnect() {
        this.icon = `close-${H(this.$el, "uk-close-large") ? "large" : "icon"}`;
      }
    }, bf = {
      extends: Ke,
      i18n: { label: "Open" }
    }, wf = {
      extends: Ke,
      i18n: { label: "Back to top" }
    }, yf = {
      extends: Ke,
      i18n: { label: "Next page" },
      data: { role: null }
    }, kf = {
      extends: Ke,
      i18n: { label: "Previous page" },
      data: { role: null }
    }, Ki = {};
    function $f(t) {
      t.icon.add = (e, n) => {
        const o = ft(e) ? { [e]: n } : e;
        sn(o, (l, c) => {
          Ji[c] = l, delete Ki[c];
        }), t._initialized && Oe(
          document.body,
          (l) => sn(t.getComponents(l), (c) => {
            c.$options.isIcon && c.icon in o && c.$reset();
          })
        );
      };
    }
    const xf = { twitter: "x" };
    function Sf(t) {
      return t = xf[t] || t, Ji[t] ? (Ki[t] || (Ki[t] = il(Ji[_f(t)] || Ji[t])), Ki[t].cloneNode(!0)) : null;
    }
    function _f(t) {
      return Tt ? bs(bs(t, "left", "right"), "previous", "next") : t;
    }
    var Ef = {
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
        this.loading !== "lazy" ? this.load() : uo(this.$el) && (this.$el.loading = "lazy", co(this.$el));
      },
      disconnected() {
        this.img && (this.img.onload = ""), delete this.img;
      },
      observe: fn({
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
          const t = uo(this.$el) ? this.$el : Tf(this.$el, this.dataSrc, this.sources);
          return On(t, "loading"), co(this.$el, t.currentSrc), this.img = t;
        }
      }
    };
    function co(t, e) {
      if (uo(t)) {
        const n = lt(t);
        (wt(n, "picture") ? ct(n) : [t]).forEach((l) => ol(l, l));
      } else e && !S(t.style.backgroundImage, e) && (w(t, "backgroundImage", `url(${Es(e)})`), j(t, cn("load", !1)));
    }
    const Of = ["data-src", "data-srcset", "sizes"];
    function ol(t, e) {
      for (const n of Of) {
        const o = Bt(t, n);
        o && F(e, n.replace(/^(data-)+/, ""), o);
      }
    }
    function Tf(t, e, n) {
      const o = new Image();
      return Cf(o, n), ol(t, o), o.onload = () => {
        co(t, o.currentSrc);
      }, F(o, "src", e), o;
    }
    function Cf(t, e) {
      if (e = Af(e), e.length) {
        const n = je("<picture>");
        for (const o of e) {
          const l = je("<source>");
          F(l, o), St(n, l);
        }
        St(n, t);
      }
    }
    function Af(t) {
      if (!t)
        return [];
      if (v(t, "["))
        try {
          t = JSON.parse(t);
        } catch {
          t = [];
        }
      else
        t = dn(t);
      return T(t) || (t = [t]), t.filter((e) => !hi(e));
    }
    function uo(t) {
      return wt(t, "img");
    }
    var Pf = {
      props: {
        target: String,
        selActive: String
      },
      data: {
        target: !1,
        selActive: !1
      },
      computed: {
        target: ({ target: t }, e) => t ? dt(t, e) : e
      },
      observe: [
        fn({
          handler(t) {
            this.isIntersecting = t.some(({ isIntersecting: e }) => e), this.$emit();
          },
          target: ({ target: t }) => t,
          args: { intersecting: !1 }
        }),
        Bi({
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
            let e = !this.selActive || nt(t, this.selActive) ? Rf(t) : "";
            e !== !1 && pi(t, "uk-light uk-dark", e);
          }
        }
      }
    };
    function Rf(t) {
      const e = N(t), n = N(window);
      if (!di(e, n))
        return !1;
      const { left: o, top: l, height: c, width: d } = e;
      let p;
      for (const m of [0.25, 0.5, 0.75]) {
        const y = t.ownerDocument.elementsFromPoint(
          Math.max(0, Math.min(o + d * m, n.width - 1)),
          Math.max(0, Math.min(l + c / 2, n.height - 1))
        );
        for (const $ of y) {
          if (t.contains($) || !If($) || $.closest('[class*="-leave"]') && y.some((R) => $ !== R && nt(R, '[class*="-enter"]')))
            continue;
          const C = w($, "--uk-inverse");
          if (C) {
            if (C === p)
              return `uk-${C}`;
            p = C;
            break;
          }
        }
      }
      return p ? `uk-${p}` : "";
    }
    function If(t) {
      if (w(t, "visibility") !== "visible")
        return !1;
      for (; t; ) {
        if (w(t, "opacity") === "0")
          return !1;
        t = lt(t);
      }
      return !0;
    }
    var Bf = {
      mixins: [Ht, Ui],
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
        [this.wrapper] = Rs(this.$el, `<span class="${this.clsWrapper}">`);
      },
      disconnected() {
        Fn(this.wrapper.childNodes);
      },
      observe: le(),
      update: {
        read() {
          return {
            width: Math.trunc(this.$el.offsetWidth / 2),
            fill: this.fill,
            hide: !this.matchMedia
          };
        },
        write({ width: t, fill: e, hide: n }) {
          $t(this.wrapper, this.clsHide, n), F(this.wrapper, this.attrFill, new Array(t).join(e));
        },
        events: ["resize"]
      }
    }, Ff = {
      install: Nf,
      mixins: [to],
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
            wt(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
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
          ({ i18n: l }) => `<div class="uk-modal-body">${ft(n) ? n : Ee(n)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${l.ok}</button> </div>`,
          o
        );
      }, t.confirm = function(n, o) {
        return e(
          ({ i18n: l }) => `<form> <div class="uk-modal-body">${ft(n) ? n : Ee(n)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${l.ok}</button> </div> </form>`,
          o,
          () => Promise.reject()
        );
      }, t.prompt = function(n, o, l) {
        const c = e(
          ({ i18n: m }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${ft(n) ? n : Ee(n)}</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${m.cancel}</button> <button class="uk-button uk-button-primary">${m.ok}</button> </div> </form>`,
          l,
          () => null,
          () => p.value
        ), { $el: d } = c.dialog, p = V("input", d);
        return p.value = o || "", W(d, "show", () => p.select()), c;
      }, t.i18n = {
        ok: "Ok",
        cancel: "Cancel"
      };
      function e(n, o, l = rt, c = rt) {
        o = {
          bgClose: !1,
          escClose: !0,
          ...o,
          i18n: { ...t.i18n, ...o == null ? void 0 : o.i18n }
        };
        const d = t.dialog(n(o), o);
        return q(
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
    var Df = {
      extends: qa,
      data: {
        targets: "> .uk-parent",
        toggle: "> a",
        content: "> ul"
      }
    };
    const ho = "uk-navbar-transparent";
    var jf = {
      extends: Ga,
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
          const t = H(this.$el, "uk-navbar-justify"), e = dt(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
          for (const n of e) {
            const o = t ? dt(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", n).length : "";
            w(n, "flexGrow", o);
          }
        }
      },
      events: [
        {
          name: "show",
          el: ({ dropContainer: t }) => t,
          handler({ target: t }) {
            this.getTransparentMode(t) === "remove" && H(this.navbarContainer, ho) && (st(this.navbarContainer, ho), this._transparent = !0);
          }
        },
        {
          name: "hide",
          el: ({ dropContainer: t }) => t,
          async handler() {
            await Uf(), !this.getActive() && this._transparent && (X(this.navbarContainer, ho), this._transparent = null);
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
    function Uf() {
      return new Promise((t) => setTimeout(t));
    }
    var Lf = {
      mixins: [to],
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
          return t === "reveal" ? lt(this.panel) : this.panel;
        }
      },
      observe: jr({ filter: ({ swiping: t }) => t }),
      update: {
        read() {
          this.isToggled() && !xt(this.$el) && this.hide();
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
            this.mode === "reveal" && !H(lt(this.panel), this.clsMode) && X(Si(this.panel, "<div>"), this.clsMode);
            const { body: t, scrollingElement: e } = document;
            X(t, this.clsContainer, this.clsFlip), w(t, "touchAction", "pan-y pinch-zoom"), w(this.$el, "display", "block"), w(this.panel, "maxWidth", e.clientWidth), X(this.$el, this.clsOverlay), X(
              this.panel,
              this.clsSidebarAnimation,
              this.mode === "reveal" ? "" : this.clsMode
            ), zt(t), X(t, this.clsContainerAnimation), this.clsContainerAnimation && Mf();
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
            this.clsContainerAnimation && zf(), this.mode === "reveal" && H(lt(this.panel), this.clsMode) && Fn(this.panel), st(this.panel, this.clsSidebarAnimation, this.clsMode), st(this.$el, this.clsOverlay), w(this.$el, "display", ""), w(this.panel, "maxWidth", ""), st(document.body, this.clsContainer, this.clsFlip);
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
    function Mf() {
      rl().content += ",user-scalable=0";
    }
    function zf() {
      const t = rl();
      t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function rl() {
      return V('meta[name="viewport"]', document.head) || St(document.head, '<meta name="viewport">');
    }
    var Hf = {
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
      observe: le({
        target: ({ container: t, content: e }) => [t, e]
      }),
      update: {
        read() {
          return !this.content || !this.container || !xt(this.$el) ? !1 : {
            max: Math.max(
              this.minHeight,
              zt(this.container) - (N(this.content).height - zt(this.$el))
            )
          };
        },
        write({ max: t }) {
          w(this.$el, { minHeight: this.minHeight, maxHeight: t });
        },
        events: ["resize"]
      }
    }, qf = {
      props: ["width", "height"],
      connected() {
        X(this.$el, "uk-responsive-width"), w(this.$el, "aspectRatio", `${this.width}/${this.height}`);
      }
    }, Wf = {
      props: {
        offset: Number
      },
      data: {
        offset: 0
      },
      connected() {
        Vf(this);
      },
      disconnected() {
        Jf(this);
      },
      methods: {
        async scrollTo(t) {
          t = t && V(t) || document.body, j(this.$el, "beforescroll", [this, t]) && (await Or(t, { offset: this.offset }), j(this.$el, "scrolled", [this, t]));
        }
      }
    };
    const Qn = /* @__PURE__ */ new Set();
    function Vf(t) {
      Qn.size || W(document, "click", al), Qn.add(t);
    }
    function Jf(t) {
      Qn.delete(t), Qn.size || Se(document, "click", al);
    }
    function al(t) {
      if (!t.defaultPrevented)
        for (const e of Qn)
          e.$el.contains(t.target) && ln(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(xs(e.$el)));
    }
    const fo = "uk-scrollspy-inview";
    var Kf = {
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
        elements: ({ target: t }, e) => t ? dt(t, e) : [e]
      },
      watch: {
        elements(t) {
          this.hidden && w(An(t, `:not(.${fo})`), "opacity", 0);
        }
      },
      connected() {
        this.elementData = /* @__PURE__ */ new Map();
      },
      disconnected() {
        for (const [t, e] of this.elementData.entries())
          st(t, fo, (e == null ? void 0 : e.cls) || "");
        delete this.elementData;
      },
      observe: fn({
        target: ({ elements: t }) => t,
        handler(t) {
          const e = this.elementData;
          for (const { target: n, isIntersecting: o } of t) {
            e.has(n) || e.set(n, {
              cls: Bt(n, "uk-scrollspy-class") || this.cls
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
          (o = l.off) == null || o.call(l), w(t, "opacity", !e && this.hidden ? 0 : ""), $t(t, fo, e), $t(t, l.cls);
          let c;
          if (c = l.cls.match(/\buk-animation-[\w-]+/g)) {
            const d = () => st(t, c);
            e ? l.off = bt(t, "animationcancel animationend", d, {
              self: !0
            }) : d();
          }
          j(t, e ? "inview" : "outview"), l.inview = e;
        }
      }
    }, Gf = {
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
        links: ({ target: t }, e) => dt(t, e).filter((n) => ln(n)),
        elements({ closest: t }) {
          return this.links.map((e) => e.closest(t || "*"));
        }
      },
      watch: {
        links(t) {
          this.scroll && this.$create("scroll", t, { offset: this.offset });
        }
      },
      observe: [fn(), Mn()],
      update: [
        {
          read() {
            const t = this.links.map((m) => xs(m) || m.ownerDocument), { length: e } = t;
            if (!e || !xt(this.$el))
              return !1;
            const n = Ce(t, !0), { scrollTop: o, scrollHeight: l } = n, c = Zt(n), d = l - c.height;
            let p = !1;
            if (o >= d)
              p = e - 1;
            else {
              const m = this.offset + N(Ms()).height + c.height * 0.1;
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
            e && j(this.$el, "active", [t, this.elements[t]]);
          },
          events: ["scroll", "resize"]
        }
      ]
    }, Xf = {
      mixins: [Ht, Ui],
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
        this.start = ll(this.start || this.top), this.end = ll(this.end || this.bottom), this.placeholder = V("+ .uk-sticky-placeholder", this.$el) || V('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
      },
      beforeDisconnect() {
        this.isFixed && (this.hide(), st(this.target, this.clsInactive)), cl(this.$el), Qt(this.placeholder), this.placeholder = null;
      },
      observe: [
        Js(),
        Mn({ target: () => document.scrollingElement }),
        le({
          target: ({ $el: t }) => [t, Gi(t), document.scrollingElement],
          handler(t) {
            this.$emit(
              this._data.resized && t.some(({ target: e }) => e === Gi(this.$el)) ? "update" : "resize"
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
              this.isFixed && di(e, n) && (t.scrollTop = Math.ceil(
                e.top - n.height - Rt(this.targetOffset, "height", this.placeholder) - Rt(this.offset, "height", this.placeholder)
              ));
            });
          }
        }
      ],
      update: [
        {
          read({ height: t, width: e, margin: n, sticky: o }, l) {
            if (this.inactive = !this.matchMedia || !xt(this.$el) || !this.$el.offsetHeight, this.inactive)
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
            p && (go(this.target), this.hide()), this.active || ({ height: t, width: e } = N(this.$el), n = w(this.$el, "margin")), p && this.show();
            const m = Rt("100vh", "height");
            let y = this.position;
            this.overflowFlip && t > m && (y = y === "top" ? "bottom" : "top");
            const $ = this.isFixed ? this.placeholder : this.$el;
            let C = Rt(this.offset, "height", o ? this.$el : $);
            y === "bottom" && (t < c || this.overflowFlip) && (C += c - t);
            const R = this.overflowFlip ? 0 : Math.max(0, t + C - m), B = Z($).top - // offset possible `transform: translateY` animation 'uk-animation-slide-top' while hiding
            new DOMMatrix(w($, "transform")).m42, z = N(this.$el).height, Y = (this.start === !1 ? B : po(this.start, this.$el, B)) - C, it = this.end === !1 ? d : Math.min(
              d,
              po(this.end, this.$el, B + t, !0) - z - C + R
            );
            return o = !this.showOnUp && Y + C === B && it === Math.min(
              d,
              po(!0, this.$el, 0, !0) - z - C + R
            ) && w(Gi(this.$el), "overflowY") !== "hidden", {
              start: Y,
              end: it,
              offset: C,
              overflow: R,
              height: t,
              elHeight: z,
              width: e,
              margin: n,
              top: Nn($)[0],
              sticky: o,
              viewport: m,
              maxScrollHeight: d
            };
          },
          write({ height: t, width: e, margin: n, offset: o, sticky: l }) {
            if ((this.inactive || l || !this.isFixed) && cl(this.$el), this.inactive)
              return;
            l && (t = e = n = 0, w(this.$el, { position: "sticky", top: o }));
            const { placeholder: c } = this;
            w(c, { height: t, width: e, margin: n }), (lt(c) !== lt(this.$el) || l ^ be(c) < be(this.$el)) && ((l ? ki : $i)(this.$el, c), c.hidden = !0);
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
            const $ = Math.min(document.scrollingElement.scrollTop, y), C = t <= $ ? "down" : "up", R = this.isFixed ? this.placeholder : this.$el;
            return {
              dir: C,
              prevDir: e,
              scroll: $,
              prevScroll: t,
              below: $ > Z(R).top + (m ? Math.min(p, d) : p),
              offsetParentTop: Z(R.offsetParent).top,
              overflowScroll: Ut(
                o + Ut($, l, c) - Ut(t, l, c),
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
            const C = Date.now();
            if ((C - o > 300 || l !== c) && (t.initScroll = d, t.initTimestamp = C), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - d) <= 30 && Math.abs(p - d) <= 10))
              if (this.inactive || d < y || this.showOnUp && (d <= y || l === "down" && n || l === "up" && !this.isFixed && !$)) {
                if (!this.isFixed) {
                  _e.inProgress(this.$el) && m > d && (_e.cancel(this.$el), this.hide());
                  return;
                }
                if (this.animation && $) {
                  if (H(this.$el, "uk-animation-leave"))
                    return;
                  _e.out(this.$el, this.animation).then(() => this.hide(), rt);
                } else
                  this.hide();
              } else this.isFixed ? this.update() : this.animation && $ ? (this.show(), _e.in(this.$el, this.animation).catch(rt)) : (go(this.target), this.show());
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
            let C = "fixed";
            e > c && (d += c - p + o - n, C = "absolute"), w(this.$el, { position: C, width: t, marginTop: 0 }, "important");
          }
          w(this.$el, "top", d - o), this.setActive($), $t(this.$el, this.clsBelow, y), X(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          this.active = t, t ? (pi(this.target, this.clsInactive, this.clsActive), e !== t && j(this.$el, "active")) : (pi(this.target, this.clsActive, this.clsInactive), e !== t && (go(this.target), j(this.$el, "inactive")));
        }
      }
    };
    function po(t, e, n, o) {
      if (!t)
        return 0;
      if (fe(t) || ft(t) && t.match(/^-?\d/))
        return n + Rt(t, "height", e, !0);
      {
        const l = t === !0 ? Gi(e) : Mt(t, e);
        return Z(l).bottom - (o && (l != null && l.contains(e)) ? G(w(l, "paddingBottom")) + G(w(l, "borderBottomWidth")) : 0);
      }
    }
    function ll(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function cl(t) {
      w(t, { position: "", top: "", marginTop: "", width: "" });
    }
    const mo = "uk-transition-disable";
    function go(t) {
      H(t, mo) || (X(t, mo), requestAnimationFrame(() => st(t, mo)));
    }
    function Gi(t) {
      for (; t = lt(t); )
        if (xt(t))
          return t;
    }
    const vo = ".uk-disabled *, .uk-disabled, [disabled]";
    var ul = {
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
          return this.connects.map((t) => ct(t)).flat();
        },
        toggles: ({ toggle: t }, e) => dt(t, e),
        children(t, e) {
          return ct(e).filter(
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
            ct(e).forEach((n, o) => $t(n, this.cls, o === t));
          this.$emit();
        },
        toggles(t) {
          this.$emit();
          const e = this.index();
          this.show(~e ? e : t[this.active] || t[0]);
        }
      },
      connected() {
        F(this.$el, "role", "tablist");
      },
      observe: [
        Fi({ targets: ({ connectChildren: t }) => t }),
        jr({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })
      ],
      events: [
        {
          name: "click keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            !nt(t.current, vo) && (t.type === "click" || t.keyCode === at.SPACE) && (t.preventDefault(), this.show(t.current));
          }
        },
        {
          name: "keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            const { current: e, keyCode: n } = t, o = nt(this.$el, this.selVertical);
            let l = n === at.HOME ? 0 : n === at.END ? "last" : n === at.LEFT && !o || n === at.UP && o ? "previous" : n === at.RIGHT && !o || n === at.DOWN && o ? "next" : -1;
            if (~l) {
              t.preventDefault();
              const c = this.toggles.filter((p) => !nt(p, vo)), d = c[Yt(l, c, c.indexOf(e))];
              d.focus(), this.followFocus && this.show(d);
            }
          }
        },
        {
          name: "click",
          el: ({ $el: t, connects: e, itemNav: n }) => e.concat(n ? Rn(n, t) : []),
          delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`,
          handler(t) {
            t.target.closest("a,button") && (t.preventDefault(), this.show(Bt(t.current, this.attrItem)));
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
          wt(e, "ul") && F(e, "role", "presentation");
        F(ct(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const n = this.toggles[e], o = (t = this.connects[0]) == null ? void 0 : t.children[e];
          F(n, "role", "tab"), o && (n.id = We(this, n), o.id = We(this, o), F(n, "aria-controls", o.id), F(o, { role: "tabpanel", "aria-labelledby": n.id }));
        }
        F(this.$el, "aria-orientation", nt(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return P(this.children, (t) => H(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter((d) => !nt(d, vo)), n = this.index(), o = Yt(
            !Ot(t) || S(e, t) ? t : 0,
            e,
            Yt(this.toggles[n], e)
          ), l = Yt(e[o], this.toggles);
          this.children.forEach((d, p) => {
            $t(d, this.cls, l === p), F(this.toggles[p], {
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
    }, Yf = {
      mixins: [Ht],
      extends: ul,
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
    const Qf = 32;
    var Zf = {
      mixins: [Ui, ze],
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
        S(this.mode, "media") || (bi(this.$el) || F(this.$el, "tabindex", "0"), !this.cls && wt(this.$el, "a") && F(this.$el, "role", "button"));
      },
      observe: Fi({ targets: ({ target: t }) => t }),
      events: [
        {
          name: ae,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            this._preventClick = null, !(!ue(t) || oe(this._showState) || this.$el.disabled) && (j(this.$el, "focus"), bt(
              document,
              ae,
              () => j(this.$el, "blur"),
              !0,
              (e) => !this.$el.contains(e.target)
            ), S(this.mode, "click") && (this._preventClick = !0));
          }
        },
        {
          // mouseenter mouseleave are added because of Firefox bug,
          // where pointerleave is triggered immediately after pointerenter on scroll
          name: `mouseenter mouseleave ${De} ${an} focus blur`,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            if (ue(t) || this.$el.disabled)
              return;
            const e = S(["mouseenter", De, "focus"], t.type), n = this.isToggled(this.target);
            if (!e && (!oe(this._showState) || t.type !== "blur" && nt(this.$el, ":focus") || t.type === "blur" && nt(this.$el, ":hover"))) {
              n === this._showState && (this._showState = null);
              return;
            }
            e && oe(this._showState) && n !== this._showState || (this._showState = e ? n : null, this.toggle(`toggle${e ? "show" : "hide"}`));
          }
        },
        {
          name: "keydown",
          filter: ({ $el: t, mode: e }) => S(e, "click") && !wt(t, "input"),
          handler(t) {
            t.keyCode === Qf && (t.preventDefault(), this.$el.click());
          }
        },
        {
          name: "click",
          filter: ({ mode: t }) => ["click", "hover"].some((e) => S(t, e)),
          handler(t) {
            let e;
            (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && nt(this.target, e.hash))) && t.preventDefault(), !this._preventClick && S(this.mode, "click") && this.toggle();
          }
        },
        {
          name: "mediachange",
          filter: ({ mode: t }) => S(t, "media"),
          el: ({ target: t }) => t,
          handler(t, e) {
            e.matches ^ this.isToggled(this.target) && this.toggle();
          }
        }
      ],
      methods: {
        async toggle(t) {
          if (!j(this.target, t || "toggle", [this]))
            return;
          if ($e(this.$el, "aria-expanded") && F(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
            return this.toggleElement(this.target);
          const e = this.target.filter((o) => H(o, this.clsLeave));
          if (e.length) {
            for (const o of this.target) {
              const l = S(e, o);
              this.toggleElement(o, l, l);
            }
            return;
          }
          const n = this.target.filter(this.isToggled);
          await this.toggleElement(n, !1) && await this.toggleElement(
            this.target.filter((o) => !S(n, o)),
            !0
          );
        }
      }
    }, tp = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Accordion: qa,
      Alert: yd,
      Close: vf,
      Cover: xd,
      Drop: Ja,
      DropParentIcon: Je,
      Dropdown: Ja,
      Dropnav: Ga,
      FormCustom: Ad,
      Grid: Pd,
      HeightMatch: Fd,
      HeightPlaceholder: jd,
      HeightViewport: Ud,
      Icon: lo,
      Img: Ef,
      Inverse: Pf,
      Leader: Bf,
      Margin: Ur,
      Marker: bf,
      Modal: Ff,
      Nav: Df,
      NavParentIcon: ff,
      Navbar: jf,
      NavbarParentIcon: Je,
      NavbarToggleIcon: gf,
      Offcanvas: Lf,
      OverflowAuto: Hf,
      OverlayIcon: Je,
      PaginationNext: yf,
      PaginationPrevious: kf,
      Responsive: qf,
      Scroll: Wf,
      Scrollspy: Kf,
      ScrollspyNav: Gf,
      SearchIcon: pf,
      SlidenavNext: sl,
      SlidenavPrevious: sl,
      Spinner: mf,
      Sticky: Xf,
      Svg: lf,
      Switcher: ul,
      Tab: Yf,
      Toggle: Zf,
      Totop: wf,
      Video: Wa
    });
    return sn(tp, (t, e) => ee.component(e, t)), pd(ee), sn(fd, (t, e) => ee.component(e, t)), ee;
  });
})(ql);
var Jp = ql.exports;
const Wl = /* @__PURE__ */ Vp(Jp);
function Vl(i, s) {
  return function() {
    return i.apply(s, arguments);
  };
}
const { toString: Kp } = Object.prototype, { getPrototypeOf: Wo } = Object, as = /* @__PURE__ */ ((i) => (s) => {
  const a = Kp.call(s);
  return i[a] || (i[a] = a.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), he = (i) => (i = i.toLowerCase(), (s) => as(s) === i), ls = (i) => (s) => typeof s === i, { isArray: kn } = Array, ii = ls("undefined");
function Gp(i) {
  return i !== null && !ii(i) && i.constructor !== null && !ii(i.constructor) && ie(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const Jl = he("ArrayBuffer");
function Xp(i) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(i) : s = i && i.buffer && Jl(i.buffer), s;
}
const Yp = ls("string"), ie = ls("function"), Kl = ls("number"), cs = (i) => i !== null && typeof i == "object", Qp = (i) => i === !0 || i === !1, Yi = (i) => {
  if (as(i) !== "object")
    return !1;
  const s = Wo(i);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
}, Zp = he("Date"), tm = he("File"), em = he("Blob"), nm = he("FileList"), im = (i) => cs(i) && ie(i.pipe), sm = (i) => {
  let s;
  return i && (typeof FormData == "function" && i instanceof FormData || ie(i.append) && ((s = as(i)) === "formdata" || // detect form-data instance
  s === "object" && ie(i.toString) && i.toString() === "[object FormData]"));
}, om = he("URLSearchParams"), [rm, am, lm, cm] = ["ReadableStream", "Request", "Response", "Headers"].map(he), um = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ai(i, s, { allOwnKeys: a = !1 } = {}) {
  if (i === null || typeof i > "u")
    return;
  let r, u;
  if (typeof i != "object" && (i = [i]), kn(i))
    for (r = 0, u = i.length; r < u; r++)
      s.call(null, i[r], r, i);
  else {
    const h = a ? Object.getOwnPropertyNames(i) : Object.keys(i), f = h.length;
    let g;
    for (r = 0; r < f; r++)
      g = h[r], s.call(null, i[g], g, i);
  }
}
function Gl(i, s) {
  s = s.toLowerCase();
  const a = Object.keys(i);
  let r = a.length, u;
  for (; r-- > 0; )
    if (u = a[r], s === u.toLowerCase())
      return u;
  return null;
}
const Xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xl = (i) => !ii(i) && i !== Xe;
function To() {
  const { caseless: i } = Xl(this) && this || {}, s = {}, a = (r, u) => {
    const h = i && Gl(s, u) || u;
    Yi(s[h]) && Yi(r) ? s[h] = To(s[h], r) : Yi(r) ? s[h] = To({}, r) : kn(r) ? s[h] = r.slice() : s[h] = r;
  };
  for (let r = 0, u = arguments.length; r < u; r++)
    arguments[r] && ai(arguments[r], a);
  return s;
}
const hm = (i, s, a, { allOwnKeys: r } = {}) => (ai(s, (u, h) => {
  a && ie(u) ? i[h] = Vl(u, a) : i[h] = u;
}, { allOwnKeys: r }), i), dm = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i), fm = (i, s, a, r) => {
  i.prototype = Object.create(s.prototype, r), i.prototype.constructor = i, Object.defineProperty(i, "super", {
    value: s.prototype
  }), a && Object.assign(i.prototype, a);
}, pm = (i, s, a, r) => {
  let u, h, f;
  const g = {};
  if (s = s || {}, i == null) return s;
  do {
    for (u = Object.getOwnPropertyNames(i), h = u.length; h-- > 0; )
      f = u[h], (!r || r(f, i, s)) && !g[f] && (s[f] = i[f], g[f] = !0);
    i = a !== !1 && Wo(i);
  } while (i && (!a || a(i, s)) && i !== Object.prototype);
  return s;
}, mm = (i, s, a) => {
  i = String(i), (a === void 0 || a > i.length) && (a = i.length), a -= s.length;
  const r = i.indexOf(s, a);
  return r !== -1 && r === a;
}, gm = (i) => {
  if (!i) return null;
  if (kn(i)) return i;
  let s = i.length;
  if (!Kl(s)) return null;
  const a = new Array(s);
  for (; s-- > 0; )
    a[s] = i[s];
  return a;
}, vm = /* @__PURE__ */ ((i) => (s) => i && s instanceof i)(typeof Uint8Array < "u" && Wo(Uint8Array)), bm = (i, s) => {
  const a = (i && i[Symbol.iterator]).call(i);
  let r;
  for (; (r = a.next()) && !r.done; ) {
    const u = r.value;
    s.call(i, u[0], u[1]);
  }
}, wm = (i, s) => {
  let a;
  const r = [];
  for (; (a = i.exec(s)) !== null; )
    r.push(a);
  return r;
}, ym = he("HTMLFormElement"), km = (i) => i.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, a, r) {
    return a.toUpperCase() + r;
  }
), ml = (({ hasOwnProperty: i }) => (s, a) => i.call(s, a))(Object.prototype), $m = he("RegExp"), Yl = (i, s) => {
  const a = Object.getOwnPropertyDescriptors(i), r = {};
  ai(a, (u, h) => {
    let f;
    (f = s(u, h, i)) !== !1 && (r[h] = f || u);
  }), Object.defineProperties(i, r);
}, xm = (i) => {
  Yl(i, (s, a) => {
    if (ie(i) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
      return !1;
    const r = i[a];
    if (ie(r)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + a + "'");
      });
    }
  });
}, Sm = (i, s) => {
  const a = {}, r = (u) => {
    u.forEach((h) => {
      a[h] = !0;
    });
  };
  return kn(i) ? r(i) : r(String(i).split(s)), a;
}, _m = () => {
}, Em = (i, s) => i != null && Number.isFinite(i = +i) ? i : s, wo = "abcdefghijklmnopqrstuvwxyz", gl = "0123456789", Ql = {
  DIGIT: gl,
  ALPHA: wo,
  ALPHA_DIGIT: wo + wo.toUpperCase() + gl
}, Om = (i = 16, s = Ql.ALPHA_DIGIT) => {
  let a = "";
  const { length: r } = s;
  for (; i--; )
    a += s[Math.random() * r | 0];
  return a;
};
function Tm(i) {
  return !!(i && ie(i.append) && i[Symbol.toStringTag] === "FormData" && i[Symbol.iterator]);
}
const Cm = (i) => {
  const s = new Array(10), a = (r, u) => {
    if (cs(r)) {
      if (s.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        s[u] = r;
        const h = kn(r) ? [] : {};
        return ai(r, (f, g) => {
          const k = a(f, u + 1);
          !ii(k) && (h[g] = k);
        }), s[u] = void 0, h;
      }
    }
    return r;
  };
  return a(i, 0);
}, Am = he("AsyncFunction"), Pm = (i) => i && (cs(i) || ie(i)) && ie(i.then) && ie(i.catch), Zl = ((i, s) => i ? setImmediate : s ? ((a, r) => (Xe.addEventListener("message", ({ source: u, data: h }) => {
  u === Xe && h === a && r.length && r.shift()();
}, !1), (u) => {
  r.push(u), Xe.postMessage(a, "*");
}))(`axios@${Math.random()}`, []) : (a) => setTimeout(a))(
  typeof setImmediate == "function",
  ie(Xe.postMessage)
), Rm = typeof queueMicrotask < "u" ? queueMicrotask.bind(Xe) : typeof process < "u" && process.nextTick || Zl, _ = {
  isArray: kn,
  isArrayBuffer: Jl,
  isBuffer: Gp,
  isFormData: sm,
  isArrayBufferView: Xp,
  isString: Yp,
  isNumber: Kl,
  isBoolean: Qp,
  isObject: cs,
  isPlainObject: Yi,
  isReadableStream: rm,
  isRequest: am,
  isResponse: lm,
  isHeaders: cm,
  isUndefined: ii,
  isDate: Zp,
  isFile: tm,
  isBlob: em,
  isRegExp: $m,
  isFunction: ie,
  isStream: im,
  isURLSearchParams: om,
  isTypedArray: vm,
  isFileList: nm,
  forEach: ai,
  merge: To,
  extend: hm,
  trim: um,
  stripBOM: dm,
  inherits: fm,
  toFlatObject: pm,
  kindOf: as,
  kindOfTest: he,
  endsWith: mm,
  toArray: gm,
  forEachEntry: bm,
  matchAll: wm,
  isHTMLForm: ym,
  hasOwnProperty: ml,
  hasOwnProp: ml,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Yl,
  freezeMethods: xm,
  toObjectSet: Sm,
  toCamelCase: km,
  noop: _m,
  toFiniteNumber: Em,
  findKey: Gl,
  global: Xe,
  isContextDefined: Xl,
  ALPHABET: Ql,
  generateString: Om,
  isSpecCompliantForm: Tm,
  toJSONObject: Cm,
  isAsyncFn: Am,
  isThenable: Pm,
  setImmediate: Zl,
  asap: Rm
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
const tc = J.prototype, ec = {};
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
  ec[i] = { value: i };
});
Object.defineProperties(J, ec);
Object.defineProperty(tc, "isAxiosError", { value: !0 });
J.from = (i, s, a, r, u, h) => {
  const f = Object.create(tc);
  return _.toFlatObject(i, f, function(g) {
    return g !== Error.prototype;
  }, (g) => g !== "isAxiosError"), J.call(f, i.message, s, a, r, u), f.cause = i, f.name = i.name, h && Object.assign(f, h), f;
};
const Im = null;
function Co(i) {
  return _.isPlainObject(i) || _.isArray(i);
}
function nc(i) {
  return _.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function vl(i, s, a) {
  return i ? i.concat(s).map(function(r, u) {
    return r = nc(r), !a && u ? "[" + r + "]" : r;
  }).join(a ? "." : "") : s;
}
function Bm(i) {
  return _.isArray(i) && !i.some(Co);
}
const Fm = _.toFlatObject(_, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function us(i, s, a) {
  if (!_.isObject(i))
    throw new TypeError("target must be an object");
  s = s || new FormData(), a = _.toFlatObject(a, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, T) {
    return !_.isUndefined(T[P]);
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
  function b(P, T, O) {
    let q = P;
    if (P && !O && typeof P == "object") {
      if (_.endsWith(T, "{}"))
        T = r ? T : T.slice(0, -2), P = JSON.stringify(P);
      else if (_.isArray(P) && Bm(P) || (_.isFileList(P) || _.endsWith(T, "[]")) && (q = _.toArray(P)))
        return T = nc(T), q.forEach(function(L, M) {
          !(_.isUndefined(L) || L === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? vl([T], M, h) : f === null ? T : T + "[]",
            k(L)
          );
        }), !1;
    }
    return Co(P) ? !0 : (s.append(vl(O, T, h), k(P)), !1);
  }
  const v = [], A = Object.assign(Fm, {
    defaultVisitor: b,
    convertValue: k,
    isVisitable: Co
  });
  function S(P, T) {
    if (!_.isUndefined(P)) {
      if (v.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      v.push(P), _.forEach(P, function(O, q) {
        (!(_.isUndefined(O) || O === null) && u.call(
          s,
          O,
          _.isString(q) ? q.trim() : q,
          T,
          A
        )) === !0 && S(O, T ? T.concat(q) : [q]);
      }), v.pop();
    }
  }
  if (!_.isObject(i))
    throw new TypeError("data must be an object");
  return S(i), s;
}
function bl(i) {
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
function Vo(i, s) {
  this._pairs = [], i && us(i, this, s);
}
const ic = Vo.prototype;
ic.append = function(i, s) {
  this._pairs.push([i, s]);
};
ic.toString = function(i) {
  const s = i ? function(a) {
    return i.call(this, a, bl);
  } : bl;
  return this._pairs.map(function(a) {
    return s(a[0]) + "=" + s(a[1]);
  }, "").join("&");
};
function Nm(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function sc(i, s, a) {
  if (!s)
    return i;
  const r = a && a.encode || Nm, u = a && a.serialize;
  let h;
  if (u ? h = u(s, a) : h = _.isURLSearchParams(s) ? s.toString() : new Vo(s, a).toString(r), h) {
    const f = i.indexOf("#");
    f !== -1 && (i = i.slice(0, f)), i += (i.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return i;
}
let wl = class {
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
const oc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Dm = typeof URLSearchParams < "u" ? URLSearchParams : Vo, jm = typeof FormData < "u" ? FormData : null, Um = typeof Blob < "u" ? Blob : null, Lm = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Dm,
    FormData: jm,
    Blob: Um
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Jo = typeof window < "u" && typeof document < "u", Ao = typeof navigator == "object" && navigator || void 0, Mm = Jo && (!Ao || ["ReactNative", "NativeScript", "NS"].indexOf(Ao.product) < 0), zm = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Hm = Jo && window.location.href || "http://localhost", qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Jo,
  hasStandardBrowserEnv: Mm,
  hasStandardBrowserWebWorkerEnv: zm,
  navigator: Ao,
  origin: Hm
}, Symbol.toStringTag, { value: "Module" })), Wt = {
  ...qm,
  ...Lm
};
function Wm(i, s) {
  return us(i, new Wt.classes.URLSearchParams(), Object.assign({
    visitor: function(a, r, u, h) {
      return Wt.isNode && _.isBuffer(a) ? (this.append(r, a.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function Vm(i) {
  return _.matchAll(/\w+|\[(\w*)]/g, i).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function Jm(i) {
  const s = {}, a = Object.keys(i);
  let r;
  const u = a.length;
  let h;
  for (r = 0; r < u; r++)
    h = a[r], s[h] = i[h];
  return s;
}
function rc(i) {
  function s(a, r, u, h) {
    let f = a[h++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f), k = h >= a.length;
    return f = !f && _.isArray(u) ? u.length : f, k ? (_.hasOwnProp(u, f) ? u[f] = [u[f], r] : u[f] = r, !g) : ((!u[f] || !_.isObject(u[f])) && (u[f] = []), s(a, r, u[f], h) && _.isArray(u[f]) && (u[f] = Jm(u[f])), !g);
  }
  if (_.isFormData(i) && _.isFunction(i.entries)) {
    const a = {};
    return _.forEachEntry(i, (r, u) => {
      s(Vm(r), u, a, 0);
    }), a;
  }
  return null;
}
function Km(i, s, a) {
  if (_.isString(i))
    try {
      return (s || JSON.parse)(i), _.trim(i);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(i);
}
const li = {
  transitional: oc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, s) {
    const a = s.getContentType() || "", r = a.indexOf("application/json") > -1, u = _.isObject(i);
    if (u && _.isHTMLForm(i) && (i = new FormData(i)), _.isFormData(i))
      return r ? JSON.stringify(rc(i)) : i;
    if (_.isArrayBuffer(i) || _.isBuffer(i) || _.isStream(i) || _.isFile(i) || _.isBlob(i) || _.isReadableStream(i))
      return i;
    if (_.isArrayBufferView(i))
      return i.buffer;
    if (_.isURLSearchParams(i))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let h;
    if (u) {
      if (a.indexOf("application/x-www-form-urlencoded") > -1)
        return Wm(i, this.formSerializer).toString();
      if ((h = _.isFileList(i)) || a.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return us(
          h ? { "files[]": i } : i,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return u || r ? (s.setContentType("application/json", !1), Km(i)) : i;
  }],
  transformResponse: [function(i) {
    const s = this.transitional || li.transitional, a = s && s.forcedJSONParsing, r = this.responseType === "json";
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
  li.headers[i] = {};
});
const Gm = _.toObjectSet([
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
]), Xm = (i) => {
  const s = {};
  let a, r, u;
  return i && i.split(`
`).forEach(function(h) {
    u = h.indexOf(":"), a = h.substring(0, u).trim().toLowerCase(), r = h.substring(u + 1).trim(), !(!a || s[a] && Gm[a]) && (a === "set-cookie" ? s[a] ? s[a].push(r) : s[a] = [r] : s[a] = s[a] ? s[a] + ", " + r : r);
  }), s;
}, yl = Symbol("internals");
function Zn(i) {
  return i && String(i).trim().toLowerCase();
}
function Qi(i) {
  return i === !1 || i == null ? i : _.isArray(i) ? i.map(Qi) : String(i);
}
function Ym(i) {
  const s = /* @__PURE__ */ Object.create(null), a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = a.exec(i); )
    s[r[1]] = r[2];
  return s;
}
const Qm = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function yo(i, s, a, r, u) {
  if (_.isFunction(r))
    return r.call(this, s, a);
  if (u && (s = a), !!_.isString(s)) {
    if (_.isString(r))
      return s.indexOf(r) !== -1;
    if (_.isRegExp(r))
      return r.test(s);
  }
}
function Zm(i) {
  return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, a, r) => a.toUpperCase() + r);
}
function tg(i, s) {
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
      (!A || u[A] === void 0 || b === !0 || b === void 0 && u[A] !== !1) && (u[A || k] = Qi(g));
    }
    const f = (g, k) => _.forEach(g, (b, v) => h(b, v, k));
    if (_.isPlainObject(s) || s instanceof this.constructor)
      f(s, a);
    else if (_.isString(s) && (s = s.trim()) && !Qm(s))
      f(Xm(s), a);
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
          return Ym(u);
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
      return !!(r && this[r] !== void 0 && (!a || yo(this, this[r], r, a)));
    }
    return !1;
  }
  delete(s, a) {
    const r = this;
    let u = !1;
    function h(f) {
      if (f = Zn(f), f) {
        const g = _.findKey(r, f);
        g && (!a || yo(r, r[g], g, a)) && (delete r[g], u = !0);
      }
    }
    return _.isArray(s) ? s.forEach(h) : h(s), u;
  }
  clear(s) {
    const a = Object.keys(this);
    let r = a.length, u = !1;
    for (; r--; ) {
      const h = a[r];
      (!s || yo(this, this[h], h, s, !0)) && (delete this[h], u = !0);
    }
    return u;
  }
  normalize(s) {
    const a = this, r = {};
    return _.forEach(this, (u, h) => {
      const f = _.findKey(r, h);
      if (f) {
        a[f] = Qi(u), delete a[h];
        return;
      }
      const g = s ? Zm(h) : String(h).trim();
      g !== h && delete a[h], a[g] = Qi(u), r[g] = !0;
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
    const a = (this[yl] = this[yl] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function u(h) {
      const f = Zn(h);
      a[f] || (tg(r, h), a[f] = !0);
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
function ko(i, s) {
  const a = this || li, r = s || a, u = Vt.from(r.headers);
  let h = r.data;
  return _.forEach(i, function(f) {
    h = f.call(a, h, u.normalize(), s ? s.status : void 0);
  }), u.normalize(), h;
}
function ac(i) {
  return !!(i && i.__CANCEL__);
}
function $n(i, s, a) {
  J.call(this, i ?? "canceled", J.ERR_CANCELED, s, a), this.name = "CanceledError";
}
_.inherits($n, J, {
  __CANCEL__: !0
});
function lc(i, s, a) {
  const r = a.config.validateStatus;
  !a.status || !r || r(a.status) ? i(a) : s(new J(
    "Request failed with status code " + a.status,
    [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
    a.config,
    a.request,
    a
  ));
}
function eg(i) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return s && s[1] || "";
}
function ng(i, s) {
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
    const S = b && k - b;
    return S ? Math.round(A * 1e3 / S) : void 0;
  };
}
function ig(i, s) {
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
const es = (i, s, a = 3) => {
  let r = 0;
  const u = ng(50, 250);
  return ig((h) => {
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
}, kl = (i, s) => {
  const a = i != null;
  return [(r) => s[0]({
    lengthComputable: a,
    total: i,
    loaded: r
  }), s[1]];
}, $l = (i) => (...s) => _.asap(() => i(...s)), sg = Wt.hasStandardBrowserEnv ? (
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
), og = Wt.hasStandardBrowserEnv ? (
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
function rg(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function ag(i, s) {
  return s ? i.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : i;
}
function cc(i, s) {
  return i && !rg(s) ? ag(i, s) : s;
}
const xl = (i) => i instanceof Vt ? { ...i } : i;
function en(i, s) {
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
    headers: (b, v) => u(xl(b), xl(v), !0)
  };
  return _.forEach(Object.keys(Object.assign({}, i, s)), function(b) {
    const v = k[b] || u, A = v(i[b], s[b], b);
    _.isUndefined(A) && v !== g || (a[b] = A);
  }), a;
}
const uc = (i) => {
  const s = en({}, i);
  let { data: a, withXSRFToken: r, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = s;
  s.headers = f = Vt.from(f), s.url = sc(cc(s.baseURL, s.url), i.params, i.paramsSerializer), g && f.set(
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
  if (Wt.hasStandardBrowserEnv && (r && _.isFunction(r) && (r = r(s)), r || r !== !1 && sg(s.url))) {
    const b = u && h && og.read(h);
    b && f.set(u, b);
  }
  return s;
}, lg = typeof XMLHttpRequest < "u", cg = lg && function(i) {
  return new Promise(function(s, a) {
    const r = uc(i);
    let u = r.data;
    const h = Vt.from(r.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: k } = r, b, v, A, S, P;
    function T() {
      S && S(), P && P(), r.cancelToken && r.cancelToken.unsubscribe(b), r.signal && r.signal.removeEventListener("abort", b);
    }
    let O = new XMLHttpRequest();
    O.open(r.method.toUpperCase(), r.url, !0), O.timeout = r.timeout;
    function q() {
      if (!O)
        return;
      const M = Vt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), mt = {
        data: !f || f === "text" || f === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: M,
        config: i,
        request: O
      };
      lc(function(jt) {
        s(jt), T();
      }, function(jt) {
        a(jt), T();
      }, mt), O = null;
    }
    "onloadend" in O ? O.onloadend = q : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(q);
    }, O.onabort = function() {
      O && (a(new J("Request aborted", J.ECONNABORTED, i, O)), O = null);
    }, O.onerror = function() {
      a(new J("Network Error", J.ERR_NETWORK, i, O)), O = null;
    }, O.ontimeout = function() {
      let M = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const mt = r.transitional || oc;
      r.timeoutErrorMessage && (M = r.timeoutErrorMessage), a(new J(
        M,
        mt.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
        i,
        O
      )), O = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in O && _.forEach(h.toJSON(), function(M, mt) {
      O.setRequestHeader(mt, M);
    }), _.isUndefined(r.withCredentials) || (O.withCredentials = !!r.withCredentials), f && f !== "json" && (O.responseType = r.responseType), k && ([A, P] = es(k, !0), O.addEventListener("progress", A)), g && O.upload && ([v, S] = es(g), O.upload.addEventListener("progress", v), O.upload.addEventListener("loadend", S)), (r.cancelToken || r.signal) && (b = (M) => {
      O && (a(!M || M.type ? new $n(null, i, O) : M), O.abort(), O = null);
    }, r.cancelToken && r.cancelToken.subscribe(b), r.signal && (r.signal.aborted ? b() : r.signal.addEventListener("abort", b)));
    const L = eg(r.url);
    if (L && Wt.protocols.indexOf(L) === -1) {
      a(new J("Unsupported protocol " + L + ":", J.ERR_BAD_REQUEST, i));
      return;
    }
    O.send(u || null);
  });
}, ug = (i, s) => {
  const { length: a } = i = i ? i.filter(Boolean) : [];
  if (s || a) {
    let r = new AbortController(), u;
    const h = function(b) {
      if (!u) {
        u = !0, g();
        const v = b instanceof Error ? b : this.reason;
        r.abort(v instanceof J ? v : new $n(v instanceof Error ? v.message : v));
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
}, hg = function* (i, s) {
  let a = i.byteLength;
  if (a < s) {
    yield i;
    return;
  }
  let r = 0, u;
  for (; r < a; )
    u = r + s, yield i.slice(r, u), r = u;
}, dg = async function* (i, s) {
  for await (const a of fg(i))
    yield* hg(a, s);
}, fg = async function* (i) {
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
}, Sl = (i, s, a, r) => {
  const u = dg(i, s);
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
          let S = h += A;
          a(S);
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
}, hs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", hc = hs && typeof ReadableStream == "function", pg = hs && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((i) => (s) => i.encode(s))(new TextEncoder()) : async (i) => new Uint8Array(await new Response(i).arrayBuffer())), dc = (i, ...s) => {
  try {
    return !!i(...s);
  } catch {
    return !1;
  }
}, mg = hc && dc(() => {
  let i = !1;
  const s = new Request(Wt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return i = !0, "half";
    }
  }).headers.has("Content-Type");
  return i && !s;
}), _l = 64 * 1024, Po = hc && dc(() => _.isReadableStream(new Response("").body)), ns = {
  stream: Po && ((i) => i.body)
};
hs && ((i) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !ns[s] && (ns[s] = _.isFunction(i[s]) ? (a) => a[s]() : (a, r) => {
      throw new J(`Response type '${s}' is not supported`, J.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const gg = async (i) => {
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
    return (await pg(i)).byteLength;
}, vg = async (i, s) => _.toFiniteNumber(i.getContentLength()) ?? gg(s), bg = hs && (async (i) => {
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
    fetchOptions: S
  } = uc(i);
  b = b ? (b + "").toLowerCase() : "text";
  let P = ug([u, h && h.toAbortSignal()], f), T;
  const O = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let q;
  try {
    if (k && mg && a !== "get" && a !== "head" && (q = await vg(v, r)) !== 0) {
      let vt = new Request(s, {
        method: "POST",
        body: r,
        duplex: "half"
      }), Ot;
      if (_.isFormData(r) && (Ot = vt.headers.get("content-type")) && v.setContentType(Ot), vt.body) {
        const [Gt, Xt] = kl(
          q,
          es($l(k))
        );
        r = Sl(vt.body, _l, Gt, Xt);
      }
    }
    _.isString(A) || (A = A ? "include" : "omit");
    const L = "credentials" in Request.prototype;
    T = new Request(s, {
      ...S,
      signal: P,
      method: a.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: L ? A : void 0
    });
    let M = await fetch(T);
    const mt = Po && (b === "stream" || b === "response");
    if (Po && (g || mt && O)) {
      const vt = {};
      ["status", "statusText", "headers"].forEach((oe) => {
        vt[oe] = M[oe];
      });
      const Ot = _.toFiniteNumber(M.headers.get("content-length")), [Gt, Xt] = g && kl(
        Ot,
        es($l(g), !0)
      ) || [];
      M = new Response(
        Sl(M.body, _l, Gt, () => {
          Xt && Xt(), O && O();
        }),
        vt
      );
    }
    b = b || "text";
    let jt = await ns[_.findKey(ns, b) || "text"](M, i);
    return !mt && O && O(), await new Promise((vt, Ot) => {
      lc(vt, Ot, {
        data: jt,
        headers: Vt.from(M.headers),
        status: M.status,
        statusText: M.statusText,
        config: i,
        request: T
      });
    });
  } catch (L) {
    throw O && O(), L && L.name === "TypeError" && /fetch/i.test(L.message) ? Object.assign(
      new J("Network Error", J.ERR_NETWORK, i, T),
      {
        cause: L.cause || L
      }
    ) : J.from(L, L && L.code, i, T);
  }
}), Ro = {
  http: Im,
  xhr: cg,
  fetch: bg
};
_.forEach(Ro, (i, s) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: s });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: s });
  }
});
const El = (i) => `- ${i}`, wg = (i) => _.isFunction(i) || i === null || i === !1, fc = {
  getAdapter: (i) => {
    i = _.isArray(i) ? i : [i];
    const { length: s } = i;
    let a, r;
    const u = {};
    for (let h = 0; h < s; h++) {
      a = i[h];
      let f;
      if (r = a, !wg(a) && (r = Ro[(f = String(a)).toLowerCase()], r === void 0))
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
` + h.map(El).join(`
`) : " " + El(h[0]) : "as no adapter specified";
      throw new J(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ro
};
function $o(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new $n(null, i);
}
function Ol(i) {
  return $o(i), i.headers = Vt.from(i.headers), i.data = ko.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), fc.getAdapter(i.adapter || li.adapter)(i).then(function(s) {
    return $o(i), s.data = ko.call(
      i,
      i.transformResponse,
      s
    ), s.headers = Vt.from(s.headers), s;
  }, function(s) {
    return ac(s) || ($o(i), s && s.response && (s.response.data = ko.call(
      i,
      i.transformResponse,
      s.response
    ), s.response.headers = Vt.from(s.response.headers))), Promise.reject(s);
  });
}
const pc = "1.7.7", Ko = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, s) => {
  Ko[i] = function(a) {
    return typeof a === i || "a" + (s < 1 ? "n " : " ") + i;
  };
});
const Tl = {};
Ko.transitional = function(i, s, a) {
  function r(u, h) {
    return "[Axios v" + pc + "] Transitional option '" + u + "'" + h + (a ? ". " + a : "");
  }
  return (u, h, f) => {
    if (i === !1)
      throw new J(
        r(h, " has been removed" + (s ? " in " + s : "")),
        J.ERR_DEPRECATED
      );
    return s && !Tl[h] && (Tl[h] = !0, console.warn(
      r(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), i ? i(u, h, f) : !0;
  };
};
function yg(i, s, a) {
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
const Io = {
  assertOptions: yg,
  validators: Ko
}, Ae = Io.validators;
let Ze = class {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new wl(),
      response: new wl()
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
    r !== void 0 && Io.assertOptions(r, {
      silentJSONParsing: Ae.transitional(Ae.boolean),
      forcedJSONParsing: Ae.transitional(Ae.boolean),
      clarifyTimeoutError: Ae.transitional(Ae.boolean)
    }, !1), u != null && (_.isFunction(u) ? a.paramsSerializer = {
      serialize: u
    } : Io.assertOptions(u, {
      encode: Ae.function,
      serialize: Ae.function
    }, !0)), a.method = (a.method || this.defaults.method || "get").toLowerCase();
    let f = h && _.merge(
      h.common,
      h[a.method]
    );
    h && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (T) => {
        delete h[T];
      }
    ), a.headers = Vt.concat(f, h);
    const g = [];
    let k = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(a) === !1 || (k = k && T.synchronous, g.unshift(T.fulfilled, T.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(T) {
      b.push(T.fulfilled, T.rejected);
    });
    let v, A = 0, S;
    if (!k) {
      const T = [Ol.bind(this), void 0];
      for (T.unshift.apply(T, g), T.push.apply(T, b), S = T.length, v = Promise.resolve(a); A < S; )
        v = v.then(T[A++], T[A++]);
      return v;
    }
    S = g.length;
    let P = a;
    for (A = 0; A < S; ) {
      const T = g[A++], O = g[A++];
      try {
        P = T(P);
      } catch (q) {
        O.call(this, q);
        break;
      }
    }
    try {
      v = Ol.call(this, P);
    } catch (T) {
      return Promise.reject(T);
    }
    for (A = 0, S = b.length; A < S; )
      v = v.then(b[A++], b[A++]);
    return v;
  }
  getUri(s) {
    s = en(this.defaults, s);
    const a = cc(s.baseURL, s.url);
    return sc(a, s.params, s.paramsSerializer);
  }
};
_.forEach(["delete", "get", "head", "options"], function(i) {
  Ze.prototype[i] = function(s, a) {
    return this.request(en(a || {}, {
      method: i,
      url: s,
      data: (a || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(i) {
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
let kg = class mc {
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
      r.reason || (r.reason = new $n(u, h, f), a(r.reason));
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
      token: new mc(function(a) {
        s = a;
      }),
      cancel: s
    };
  }
};
function $g(i) {
  return function(s) {
    return i.apply(null, s);
  };
}
function xg(i) {
  return _.isObject(i) && i.isAxiosError === !0;
}
const Bo = {
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
Object.entries(Bo).forEach(([i, s]) => {
  Bo[s] = i;
});
function gc(i) {
  const s = new Ze(i), a = Vl(Ze.prototype.request, s);
  return _.extend(a, Ze.prototype, s, { allOwnKeys: !0 }), _.extend(a, s, null, { allOwnKeys: !0 }), a.create = function(r) {
    return gc(en(i, r));
  }, a;
}
const pt = gc(li);
pt.Axios = Ze;
pt.CanceledError = $n;
pt.CancelToken = kg;
pt.isCancel = ac;
pt.VERSION = pc;
pt.toFormData = us;
pt.AxiosError = J;
pt.Cancel = pt.CanceledError;
pt.all = function(i) {
  return Promise.all(i);
};
pt.spread = $g;
pt.isAxiosError = xg;
pt.mergeConfig = en;
pt.AxiosHeaders = Vt;
pt.formToJSON = (i) => rc(_.isHTMLForm(i) ? new FormData(i) : i);
pt.getAdapter = fc.getAdapter;
pt.HttpStatusCode = Bo;
pt.default = pt;
var ke = /* @__PURE__ */ ((i) => (i.Primary = "Primary", i.Secondary = "Secondary", i.Success = "Success", i.Warning = "Warning", i.Danger = "Danger", i.Info = "Info", i.Muted = "Muted", i))(ke || {});
const Sg = Hl("auth", {
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
          style: ke.Danger,
          closeBtn: !0,
          ...s.response.data
        };
      });
    },
    async check() {
      return pt.get("/account/auth-check").then((i) => (this.setUser(i.data.user), this.user)).catch((i) => {
        throw this.unsetUser(), {
          description: "An error as occurred",
          style: ke.Danger,
          closeBtn: !0,
          ...i.response.data
        };
      });
    },
    async logout() {
      return this.unsetUser(), pt.get("/account/logout").catch((i) => {
        throw {
          description: "An error as occurred",
          style: ke.Danger,
          closeBtn: !0,
          ...i.response.data
        };
      });
    }
  }
}), _g = { class: "uk-fieldset" }, Eg = { class: "uk-margin" }, Og = { class: "uk-inline uk-width-1-1" }, Tg = { class: "uk-margin" }, Cg = { class: "uk-inline uk-width-1-1" }, Ag = { class: "uk-text-center" }, Pg = ["disabled"], Go = /* @__PURE__ */ ht({
  __name: "FormLogin",
  setup(i) {
    const s = ge(!1), a = ge();
    let r = {
      user_name: "",
      password: ""
    };
    async function u() {
      s.value = !0, a.value = null, await Sg().login(r).then((f) => {
        Wl.notification({
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
      const g = Pt("UFAlert");
      return I(), D("form", {
        onSubmit: f[2] || (f[2] = os((k) => u(), ["prevent"]))
      }, [
        x("fieldset", _g, [
          a.value ? (I(), gt(g, {
            key: 0,
            "data-test": "error",
            alert: a.value
          }, null, 8, ["alert"])) : et("", !0),
          x("div", Eg, [
            x("div", Og, [
              f[3] || (f[3] = x("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: user"
              }, null, -1)),
              Lt(x("input", {
                class: "uk-input",
                type: "text",
                placeholder: "Username",
                "aria-label": "Username",
                "data-test": "username",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => U(r).user_name = k)
              }, null, 512), [
                [ne, U(r).user_name]
              ])
            ])
          ]),
          x("div", Tg, [
            x("div", Cg, [
              f[4] || (f[4] = x("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: lock"
              }, null, -1)),
              Lt(x("input", {
                class: "uk-input",
                type: "password",
                placeholder: "Password",
                "aria-label": "Password",
                "data-test": "password",
                "onUpdate:modelValue": f[1] || (f[1] = (k) => U(r).password = k)
              }, null, 512), [
                [ne, U(r).password]
              ])
            ])
          ]),
          x("div", Ag, [
            x("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Login ", 8, Pg)
          ])
        ])
      ], 32);
    };
  }
});
function vc(i, s) {
  return function() {
    return i.apply(s, arguments);
  };
}
const { toString: Rg } = Object.prototype, { getPrototypeOf: Xo } = Object, ds = /* @__PURE__ */ ((i) => (s) => {
  const a = Rg.call(s);
  return i[a] || (i[a] = a.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), de = (i) => (i = i.toLowerCase(), (s) => ds(s) === i), fs = (i) => (s) => typeof s === i, { isArray: xn } = Array, si = fs("undefined");
function Ig(i) {
  return i !== null && !si(i) && i.constructor !== null && !si(i.constructor) && se(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const bc = de("ArrayBuffer");
function Bg(i) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(i) : s = i && i.buffer && bc(i.buffer), s;
}
const Fg = fs("string"), se = fs("function"), wc = fs("number"), ps = (i) => i !== null && typeof i == "object", Ng = (i) => i === !0 || i === !1, Zi = (i) => {
  if (ds(i) !== "object")
    return !1;
  const s = Xo(i);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
}, Dg = de("Date"), jg = de("File"), Ug = de("Blob"), Lg = de("FileList"), Mg = (i) => ps(i) && se(i.pipe), zg = (i) => {
  let s;
  return i && (typeof FormData == "function" && i instanceof FormData || se(i.append) && ((s = ds(i)) === "formdata" || // detect form-data instance
  s === "object" && se(i.toString) && i.toString() === "[object FormData]"));
}, Hg = de("URLSearchParams"), [qg, Wg, Vg, Jg] = ["ReadableStream", "Request", "Response", "Headers"].map(de), Kg = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ci(i, s, { allOwnKeys: a = !1 } = {}) {
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
function yc(i, s) {
  s = s.toLowerCase();
  const a = Object.keys(i);
  let r = a.length, u;
  for (; r-- > 0; )
    if (u = a[r], s === u.toLowerCase())
      return u;
  return null;
}
const Ye = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, kc = (i) => !si(i) && i !== Ye;
function Fo() {
  const { caseless: i } = kc(this) && this || {}, s = {}, a = (r, u) => {
    const h = i && yc(s, u) || u;
    Zi(s[h]) && Zi(r) ? s[h] = Fo(s[h], r) : Zi(r) ? s[h] = Fo({}, r) : xn(r) ? s[h] = r.slice() : s[h] = r;
  };
  for (let r = 0, u = arguments.length; r < u; r++)
    arguments[r] && ci(arguments[r], a);
  return s;
}
const Gg = (i, s, a, { allOwnKeys: r } = {}) => (ci(s, (u, h) => {
  a && se(u) ? i[h] = vc(u, a) : i[h] = u;
}, { allOwnKeys: r }), i), Xg = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i), Yg = (i, s, a, r) => {
  i.prototype = Object.create(s.prototype, r), i.prototype.constructor = i, Object.defineProperty(i, "super", {
    value: s.prototype
  }), a && Object.assign(i.prototype, a);
}, Qg = (i, s, a, r) => {
  let u, h, f;
  const g = {};
  if (s = s || {}, i == null) return s;
  do {
    for (u = Object.getOwnPropertyNames(i), h = u.length; h-- > 0; )
      f = u[h], (!r || r(f, i, s)) && !g[f] && (s[f] = i[f], g[f] = !0);
    i = a !== !1 && Xo(i);
  } while (i && (!a || a(i, s)) && i !== Object.prototype);
  return s;
}, Zg = (i, s, a) => {
  i = String(i), (a === void 0 || a > i.length) && (a = i.length), a -= s.length;
  const r = i.indexOf(s, a);
  return r !== -1 && r === a;
}, tv = (i) => {
  if (!i) return null;
  if (xn(i)) return i;
  let s = i.length;
  if (!wc(s)) return null;
  const a = new Array(s);
  for (; s-- > 0; )
    a[s] = i[s];
  return a;
}, ev = /* @__PURE__ */ ((i) => (s) => i && s instanceof i)(typeof Uint8Array < "u" && Xo(Uint8Array)), nv = (i, s) => {
  const a = (i && i[Symbol.iterator]).call(i);
  let r;
  for (; (r = a.next()) && !r.done; ) {
    const u = r.value;
    s.call(i, u[0], u[1]);
  }
}, iv = (i, s) => {
  let a;
  const r = [];
  for (; (a = i.exec(s)) !== null; )
    r.push(a);
  return r;
}, sv = de("HTMLFormElement"), ov = (i) => i.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, a, r) {
    return a.toUpperCase() + r;
  }
), Cl = (({ hasOwnProperty: i }) => (s, a) => i.call(s, a))(Object.prototype), rv = de("RegExp"), $c = (i, s) => {
  const a = Object.getOwnPropertyDescriptors(i), r = {};
  ci(a, (u, h) => {
    let f;
    (f = s(u, h, i)) !== !1 && (r[h] = f || u);
  }), Object.defineProperties(i, r);
}, av = (i) => {
  $c(i, (s, a) => {
    if (se(i) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
      return !1;
    const r = i[a];
    if (se(r)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + a + "'");
      });
    }
  });
}, lv = (i, s) => {
  const a = {}, r = (u) => {
    u.forEach((h) => {
      a[h] = !0;
    });
  };
  return xn(i) ? r(i) : r(String(i).split(s)), a;
}, cv = () => {
}, uv = (i, s) => i != null && Number.isFinite(i = +i) ? i : s, xo = "abcdefghijklmnopqrstuvwxyz", Al = "0123456789", xc = {
  DIGIT: Al,
  ALPHA: xo,
  ALPHA_DIGIT: xo + xo.toUpperCase() + Al
}, hv = (i = 16, s = xc.ALPHA_DIGIT) => {
  let a = "";
  const { length: r } = s;
  for (; i--; )
    a += s[Math.random() * r | 0];
  return a;
};
function dv(i) {
  return !!(i && se(i.append) && i[Symbol.toStringTag] === "FormData" && i[Symbol.iterator]);
}
const fv = (i) => {
  const s = new Array(10), a = (r, u) => {
    if (ps(r)) {
      if (s.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        s[u] = r;
        const h = xn(r) ? [] : {};
        return ci(r, (f, g) => {
          const k = a(f, u + 1);
          !si(k) && (h[g] = k);
        }), s[u] = void 0, h;
      }
    }
    return r;
  };
  return a(i, 0);
}, pv = de("AsyncFunction"), mv = (i) => i && (ps(i) || se(i)) && se(i.then) && se(i.catch), Sc = ((i, s) => i ? setImmediate : s ? ((a, r) => (Ye.addEventListener("message", ({ source: u, data: h }) => {
  u === Ye && h === a && r.length && r.shift()();
}, !1), (u) => {
  r.push(u), Ye.postMessage(a, "*");
}))(`axios@${Math.random()}`, []) : (a) => setTimeout(a))(
  typeof setImmediate == "function",
  se(Ye.postMessage)
), gv = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ye) : typeof process < "u" && process.nextTick || Sc, E = {
  isArray: xn,
  isArrayBuffer: bc,
  isBuffer: Ig,
  isFormData: zg,
  isArrayBufferView: Bg,
  isString: Fg,
  isNumber: wc,
  isBoolean: Ng,
  isObject: ps,
  isPlainObject: Zi,
  isReadableStream: qg,
  isRequest: Wg,
  isResponse: Vg,
  isHeaders: Jg,
  isUndefined: si,
  isDate: Dg,
  isFile: jg,
  isBlob: Ug,
  isRegExp: rv,
  isFunction: se,
  isStream: Mg,
  isURLSearchParams: Hg,
  isTypedArray: ev,
  isFileList: Lg,
  forEach: ci,
  merge: Fo,
  extend: Gg,
  trim: Kg,
  stripBOM: Xg,
  inherits: Yg,
  toFlatObject: Qg,
  kindOf: ds,
  kindOfTest: de,
  endsWith: Zg,
  toArray: tv,
  forEachEntry: nv,
  matchAll: iv,
  isHTMLForm: sv,
  hasOwnProperty: Cl,
  hasOwnProp: Cl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $c,
  freezeMethods: av,
  toObjectSet: lv,
  toCamelCase: ov,
  noop: cv,
  toFiniteNumber: uv,
  findKey: yc,
  global: Ye,
  isContextDefined: kc,
  ALPHABET: xc,
  generateString: hv,
  isSpecCompliantForm: dv,
  toJSONObject: fv,
  isAsyncFn: pv,
  isThenable: mv,
  setImmediate: Sc,
  asap: gv
};
function K(i, s, a, r, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = i, this.name = "AxiosError", s && (this.code = s), a && (this.config = a), r && (this.request = r), u && (this.response = u, this.status = u.status ? u.status : null);
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
      status: this.status
    };
  }
});
const _c = K.prototype, Ec = {};
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
  Ec[i] = { value: i };
});
Object.defineProperties(K, Ec);
Object.defineProperty(_c, "isAxiosError", { value: !0 });
K.from = (i, s, a, r, u, h) => {
  const f = Object.create(_c);
  return E.toFlatObject(i, f, function(g) {
    return g !== Error.prototype;
  }, (g) => g !== "isAxiosError"), K.call(f, i.message, s, a, r, u), f.cause = i, f.name = i.name, h && Object.assign(f, h), f;
};
const vv = null;
function No(i) {
  return E.isPlainObject(i) || E.isArray(i);
}
function Oc(i) {
  return E.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function Pl(i, s, a) {
  return i ? i.concat(s).map(function(r, u) {
    return r = Oc(r), !a && u ? "[" + r + "]" : r;
  }).join(a ? "." : "") : s;
}
function bv(i) {
  return E.isArray(i) && !i.some(No);
}
const wv = E.toFlatObject(E, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function ms(i, s, a) {
  if (!E.isObject(i))
    throw new TypeError("target must be an object");
  s = s || new FormData(), a = E.toFlatObject(a, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, T) {
    return !E.isUndefined(T[P]);
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
  function b(P, T, O) {
    let q = P;
    if (P && !O && typeof P == "object") {
      if (E.endsWith(T, "{}"))
        T = r ? T : T.slice(0, -2), P = JSON.stringify(P);
      else if (E.isArray(P) && bv(P) || (E.isFileList(P) || E.endsWith(T, "[]")) && (q = E.toArray(P)))
        return T = Oc(T), q.forEach(function(L, M) {
          !(E.isUndefined(L) || L === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? Pl([T], M, h) : f === null ? T : T + "[]",
            k(L)
          );
        }), !1;
    }
    return No(P) ? !0 : (s.append(Pl(O, T, h), k(P)), !1);
  }
  const v = [], A = Object.assign(wv, {
    defaultVisitor: b,
    convertValue: k,
    isVisitable: No
  });
  function S(P, T) {
    if (!E.isUndefined(P)) {
      if (v.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      v.push(P), E.forEach(P, function(O, q) {
        (!(E.isUndefined(O) || O === null) && u.call(
          s,
          O,
          E.isString(q) ? q.trim() : q,
          T,
          A
        )) === !0 && S(O, T ? T.concat(q) : [q]);
      }), v.pop();
    }
  }
  if (!E.isObject(i))
    throw new TypeError("data must be an object");
  return S(i), s;
}
function Rl(i) {
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
function Yo(i, s) {
  this._pairs = [], i && ms(i, this, s);
}
const Tc = Yo.prototype;
Tc.append = function(i, s) {
  this._pairs.push([i, s]);
};
Tc.toString = function(i) {
  const s = i ? function(a) {
    return i.call(this, a, Rl);
  } : Rl;
  return this._pairs.map(function(a) {
    return s(a[0]) + "=" + s(a[1]);
  }, "").join("&");
};
function yv(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cc(i, s, a) {
  if (!s)
    return i;
  const r = a && a.encode || yv, u = a && a.serialize;
  let h;
  if (u ? h = u(s, a) : h = E.isURLSearchParams(s) ? s.toString() : new Yo(s, a).toString(r), h) {
    const f = i.indexOf("#");
    f !== -1 && (i = i.slice(0, f)), i += (i.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return i;
}
class Il {
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
const Ac = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, kv = typeof URLSearchParams < "u" ? URLSearchParams : Yo, $v = typeof FormData < "u" ? FormData : null, xv = typeof Blob < "u" ? Blob : null, Sv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kv,
    FormData: $v,
    Blob: xv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Qo = typeof window < "u" && typeof document < "u", Do = typeof navigator == "object" && navigator || void 0, _v = Qo && (!Do || ["ReactNative", "NativeScript", "NS"].indexOf(Do.product) < 0), Ev = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ov = Qo && window.location.href || "http://localhost", Tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Qo,
  hasStandardBrowserEnv: _v,
  hasStandardBrowserWebWorkerEnv: Ev,
  navigator: Do,
  origin: Ov
}, Symbol.toStringTag, { value: "Module" })), Jt = {
  ...Tv,
  ...Sv
};
function Cv(i, s) {
  return ms(i, new Jt.classes.URLSearchParams(), Object.assign({
    visitor: function(a, r, u, h) {
      return Jt.isNode && E.isBuffer(a) ? (this.append(r, a.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function Av(i) {
  return E.matchAll(/\w+|\[(\w*)]/g, i).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function Pv(i) {
  const s = {}, a = Object.keys(i);
  let r;
  const u = a.length;
  let h;
  for (r = 0; r < u; r++)
    h = a[r], s[h] = i[h];
  return s;
}
function Pc(i) {
  function s(a, r, u, h) {
    let f = a[h++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f), k = h >= a.length;
    return f = !f && E.isArray(u) ? u.length : f, k ? (E.hasOwnProp(u, f) ? u[f] = [u[f], r] : u[f] = r, !g) : ((!u[f] || !E.isObject(u[f])) && (u[f] = []), s(a, r, u[f], h) && E.isArray(u[f]) && (u[f] = Pv(u[f])), !g);
  }
  if (E.isFormData(i) && E.isFunction(i.entries)) {
    const a = {};
    return E.forEachEntry(i, (r, u) => {
      s(Av(r), u, a, 0);
    }), a;
  }
  return null;
}
function Rv(i, s, a) {
  if (E.isString(i))
    try {
      return (s || JSON.parse)(i), E.trim(i);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(i);
}
const ui = {
  transitional: Ac,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, s) {
    const a = s.getContentType() || "", r = a.indexOf("application/json") > -1, u = E.isObject(i);
    if (u && E.isHTMLForm(i) && (i = new FormData(i)), E.isFormData(i))
      return r ? JSON.stringify(Pc(i)) : i;
    if (E.isArrayBuffer(i) || E.isBuffer(i) || E.isStream(i) || E.isFile(i) || E.isBlob(i) || E.isReadableStream(i))
      return i;
    if (E.isArrayBufferView(i))
      return i.buffer;
    if (E.isURLSearchParams(i))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let h;
    if (u) {
      if (a.indexOf("application/x-www-form-urlencoded") > -1)
        return Cv(i, this.formSerializer).toString();
      if ((h = E.isFileList(i)) || a.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ms(
          h ? { "files[]": i } : i,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return u || r ? (s.setContentType("application/json", !1), Rv(i)) : i;
  }],
  transformResponse: [function(i) {
    const s = this.transitional || ui.transitional, a = s && s.forcedJSONParsing, r = this.responseType === "json";
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
    FormData: Jt.classes.FormData,
    Blob: Jt.classes.Blob
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
  ui.headers[i] = {};
});
const Iv = E.toObjectSet([
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
]), Bv = (i) => {
  const s = {};
  let a, r, u;
  return i && i.split(`
`).forEach(function(h) {
    u = h.indexOf(":"), a = h.substring(0, u).trim().toLowerCase(), r = h.substring(u + 1).trim(), !(!a || s[a] && Iv[a]) && (a === "set-cookie" ? s[a] ? s[a].push(r) : s[a] = [r] : s[a] = s[a] ? s[a] + ", " + r : r);
  }), s;
}, Bl = Symbol("internals");
function ti(i) {
  return i && String(i).trim().toLowerCase();
}
function ts(i) {
  return i === !1 || i == null ? i : E.isArray(i) ? i.map(ts) : String(i);
}
function Fv(i) {
  const s = /* @__PURE__ */ Object.create(null), a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = a.exec(i); )
    s[r[1]] = r[2];
  return s;
}
const Nv = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function So(i, s, a, r, u) {
  if (E.isFunction(r))
    return r.call(this, s, a);
  if (u && (s = a), !!E.isString(s)) {
    if (E.isString(r))
      return s.indexOf(r) !== -1;
    if (E.isRegExp(r))
      return r.test(s);
  }
}
function Dv(i) {
  return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, a, r) => a.toUpperCase() + r);
}
function jv(i, s) {
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
class Kt {
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
      (!A || u[A] === void 0 || b === !0 || b === void 0 && u[A] !== !1) && (u[A || k] = ts(g));
    }
    const f = (g, k) => E.forEach(g, (b, v) => h(b, v, k));
    if (E.isPlainObject(s) || s instanceof this.constructor)
      f(s, a);
    else if (E.isString(s) && (s = s.trim()) && !Nv(s))
      f(Bv(s), a);
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
          return Fv(u);
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
      return !!(r && this[r] !== void 0 && (!a || So(this, this[r], r, a)));
    }
    return !1;
  }
  delete(s, a) {
    const r = this;
    let u = !1;
    function h(f) {
      if (f = ti(f), f) {
        const g = E.findKey(r, f);
        g && (!a || So(r, r[g], g, a)) && (delete r[g], u = !0);
      }
    }
    return E.isArray(s) ? s.forEach(h) : h(s), u;
  }
  clear(s) {
    const a = Object.keys(this);
    let r = a.length, u = !1;
    for (; r--; ) {
      const h = a[r];
      (!s || So(this, this[h], h, s, !0)) && (delete this[h], u = !0);
    }
    return u;
  }
  normalize(s) {
    const a = this, r = {};
    return E.forEach(this, (u, h) => {
      const f = E.findKey(r, h);
      if (f) {
        a[f] = ts(u), delete a[h];
        return;
      }
      const g = s ? Dv(h) : String(h).trim();
      g !== h && delete a[h], a[g] = ts(u), r[g] = !0;
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
    const a = (this[Bl] = this[Bl] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function u(h) {
      const f = ti(h);
      a[f] || (jv(r, h), a[f] = !0);
    }
    return E.isArray(s) ? s.forEach(u) : u(s), this;
  }
}
Kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Kt.prototype, ({ value: i }, s) => {
  let a = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => i,
    set(r) {
      this[a] = r;
    }
  };
});
E.freezeMethods(Kt);
function _o(i, s) {
  const a = this || ui, r = s || a, u = Kt.from(r.headers);
  let h = r.data;
  return E.forEach(i, function(f) {
    h = f.call(a, h, u.normalize(), s ? s.status : void 0);
  }), u.normalize(), h;
}
function Rc(i) {
  return !!(i && i.__CANCEL__);
}
function Sn(i, s, a) {
  K.call(this, i ?? "canceled", K.ERR_CANCELED, s, a), this.name = "CanceledError";
}
E.inherits(Sn, K, {
  __CANCEL__: !0
});
function Ic(i, s, a) {
  const r = a.config.validateStatus;
  !a.status || !r || r(a.status) ? i(a) : s(new K(
    "Request failed with status code " + a.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
    a.config,
    a.request,
    a
  ));
}
function Uv(i) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return s && s[1] || "";
}
function Lv(i, s) {
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
    const S = b && k - b;
    return S ? Math.round(A * 1e3 / S) : void 0;
  };
}
function Mv(i, s) {
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
const is = (i, s, a = 3) => {
  let r = 0;
  const u = Lv(50, 250);
  return Mv((h) => {
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
}, Fl = (i, s) => {
  const a = i != null;
  return [(r) => s[0]({
    lengthComputable: a,
    total: i,
    loaded: r
  }), s[1]];
}, Nl = (i) => (...s) => E.asap(() => i(...s)), zv = Jt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const i = Jt.navigator && /(msie|trident)/i.test(Jt.navigator.userAgent), s = document.createElement("a");
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
), Hv = Jt.hasStandardBrowserEnv ? (
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
function qv(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function Wv(i, s) {
  return s ? i.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : i;
}
function Bc(i, s) {
  return i && !qv(s) ? Wv(i, s) : s;
}
const Dl = (i) => i instanceof Kt ? { ...i } : i;
function nn(i, s) {
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
    headers: (b, v) => u(Dl(b), Dl(v), !0)
  };
  return E.forEach(Object.keys(Object.assign({}, i, s)), function(b) {
    const v = k[b] || u, A = v(i[b], s[b], b);
    E.isUndefined(A) && v !== g || (a[b] = A);
  }), a;
}
const Fc = (i) => {
  const s = nn({}, i);
  let { data: a, withXSRFToken: r, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = s;
  s.headers = f = Kt.from(f), s.url = Cc(Bc(s.baseURL, s.url), i.params, i.paramsSerializer), g && f.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let k;
  if (E.isFormData(a)) {
    if (Jt.hasStandardBrowserEnv || Jt.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if ((k = f.getContentType()) !== !1) {
      const [b, ...v] = k ? k.split(";").map((A) => A.trim()).filter(Boolean) : [];
      f.setContentType([b || "multipart/form-data", ...v].join("; "));
    }
  }
  if (Jt.hasStandardBrowserEnv && (r && E.isFunction(r) && (r = r(s)), r || r !== !1 && zv(s.url))) {
    const b = u && h && Hv.read(h);
    b && f.set(u, b);
  }
  return s;
}, Vv = typeof XMLHttpRequest < "u", Jv = Vv && function(i) {
  return new Promise(function(s, a) {
    const r = Fc(i);
    let u = r.data;
    const h = Kt.from(r.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: k } = r, b, v, A, S, P;
    function T() {
      S && S(), P && P(), r.cancelToken && r.cancelToken.unsubscribe(b), r.signal && r.signal.removeEventListener("abort", b);
    }
    let O = new XMLHttpRequest();
    O.open(r.method.toUpperCase(), r.url, !0), O.timeout = r.timeout;
    function q() {
      if (!O)
        return;
      const M = Kt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), mt = {
        data: !f || f === "text" || f === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: M,
        config: i,
        request: O
      };
      Ic(function(jt) {
        s(jt), T();
      }, function(jt) {
        a(jt), T();
      }, mt), O = null;
    }
    "onloadend" in O ? O.onloadend = q : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(q);
    }, O.onabort = function() {
      O && (a(new K("Request aborted", K.ECONNABORTED, i, O)), O = null);
    }, O.onerror = function() {
      a(new K("Network Error", K.ERR_NETWORK, i, O)), O = null;
    }, O.ontimeout = function() {
      let M = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const mt = r.transitional || Ac;
      r.timeoutErrorMessage && (M = r.timeoutErrorMessage), a(new K(
        M,
        mt.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        i,
        O
      )), O = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in O && E.forEach(h.toJSON(), function(M, mt) {
      O.setRequestHeader(mt, M);
    }), E.isUndefined(r.withCredentials) || (O.withCredentials = !!r.withCredentials), f && f !== "json" && (O.responseType = r.responseType), k && ([A, P] = is(k, !0), O.addEventListener("progress", A)), g && O.upload && ([v, S] = is(g), O.upload.addEventListener("progress", v), O.upload.addEventListener("loadend", S)), (r.cancelToken || r.signal) && (b = (M) => {
      O && (a(!M || M.type ? new Sn(null, i, O) : M), O.abort(), O = null);
    }, r.cancelToken && r.cancelToken.subscribe(b), r.signal && (r.signal.aborted ? b() : r.signal.addEventListener("abort", b)));
    const L = Uv(r.url);
    if (L && Jt.protocols.indexOf(L) === -1) {
      a(new K("Unsupported protocol " + L + ":", K.ERR_BAD_REQUEST, i));
      return;
    }
    O.send(u || null);
  });
}, Kv = (i, s) => {
  const { length: a } = i = i ? i.filter(Boolean) : [];
  if (s || a) {
    let r = new AbortController(), u;
    const h = function(b) {
      if (!u) {
        u = !0, g();
        const v = b instanceof Error ? b : this.reason;
        r.abort(v instanceof K ? v : new Sn(v instanceof Error ? v.message : v));
      }
    };
    let f = s && setTimeout(() => {
      f = null, h(new K(`timeout ${s} of ms exceeded`, K.ETIMEDOUT));
    }, s);
    const g = () => {
      i && (f && clearTimeout(f), f = null, i.forEach((b) => {
        b.unsubscribe ? b.unsubscribe(h) : b.removeEventListener("abort", h);
      }), i = null);
    };
    i.forEach((b) => b.addEventListener("abort", h));
    const { signal: k } = r;
    return k.unsubscribe = () => E.asap(g), k;
  }
}, Gv = function* (i, s) {
  let a = i.byteLength;
  if (a < s) {
    yield i;
    return;
  }
  let r = 0, u;
  for (; r < a; )
    u = r + s, yield i.slice(r, u), r = u;
}, Xv = async function* (i, s) {
  for await (const a of Yv(i))
    yield* Gv(a, s);
}, Yv = async function* (i) {
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
}, jl = (i, s, a, r) => {
  const u = Xv(i, s);
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
          let S = h += A;
          a(S);
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
}, gs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Nc = gs && typeof ReadableStream == "function", Qv = gs && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((i) => (s) => i.encode(s))(new TextEncoder()) : async (i) => new Uint8Array(await new Response(i).arrayBuffer())), Dc = (i, ...s) => {
  try {
    return !!i(...s);
  } catch {
    return !1;
  }
}, Zv = Nc && Dc(() => {
  let i = !1;
  const s = new Request(Jt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return i = !0, "half";
    }
  }).headers.has("Content-Type");
  return i && !s;
}), Ul = 64 * 1024, jo = Nc && Dc(() => E.isReadableStream(new Response("").body)), ss = {
  stream: jo && ((i) => i.body)
};
gs && ((i) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !ss[s] && (ss[s] = E.isFunction(i[s]) ? (a) => a[s]() : (a, r) => {
      throw new K(`Response type '${s}' is not supported`, K.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const tb = async (i) => {
  if (i == null)
    return 0;
  if (E.isBlob(i))
    return i.size;
  if (E.isSpecCompliantForm(i))
    return (await new Request(Jt.origin, {
      method: "POST",
      body: i
    }).arrayBuffer()).byteLength;
  if (E.isArrayBufferView(i) || E.isArrayBuffer(i))
    return i.byteLength;
  if (E.isURLSearchParams(i) && (i = i + ""), E.isString(i))
    return (await Qv(i)).byteLength;
}, eb = async (i, s) => E.toFiniteNumber(i.getContentLength()) ?? tb(s), nb = gs && (async (i) => {
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
    fetchOptions: S
  } = Fc(i);
  b = b ? (b + "").toLowerCase() : "text";
  let P = Kv([u, h && h.toAbortSignal()], f), T;
  const O = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let q;
  try {
    if (k && Zv && a !== "get" && a !== "head" && (q = await eb(v, r)) !== 0) {
      let vt = new Request(s, {
        method: "POST",
        body: r,
        duplex: "half"
      }), Ot;
      if (E.isFormData(r) && (Ot = vt.headers.get("content-type")) && v.setContentType(Ot), vt.body) {
        const [Gt, Xt] = Fl(
          q,
          is(Nl(k))
        );
        r = jl(vt.body, Ul, Gt, Xt);
      }
    }
    E.isString(A) || (A = A ? "include" : "omit");
    const L = "credentials" in Request.prototype;
    T = new Request(s, {
      ...S,
      signal: P,
      method: a.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: L ? A : void 0
    });
    let M = await fetch(T);
    const mt = jo && (b === "stream" || b === "response");
    if (jo && (g || mt && O)) {
      const vt = {};
      ["status", "statusText", "headers"].forEach((oe) => {
        vt[oe] = M[oe];
      });
      const Ot = E.toFiniteNumber(M.headers.get("content-length")), [Gt, Xt] = g && Fl(
        Ot,
        is(Nl(g), !0)
      ) || [];
      M = new Response(
        jl(M.body, Ul, Gt, () => {
          Xt && Xt(), O && O();
        }),
        vt
      );
    }
    b = b || "text";
    let jt = await ss[E.findKey(ss, b) || "text"](M, i);
    return !mt && O && O(), await new Promise((vt, Ot) => {
      Ic(vt, Ot, {
        data: jt,
        headers: Kt.from(M.headers),
        status: M.status,
        statusText: M.statusText,
        config: i,
        request: T
      });
    });
  } catch (L) {
    throw O && O(), L && L.name === "TypeError" && /fetch/i.test(L.message) ? Object.assign(
      new K("Network Error", K.ERR_NETWORK, i, T),
      {
        cause: L.cause || L
      }
    ) : K.from(L, L && L.code, i, T);
  }
}), Uo = {
  http: vv,
  xhr: Jv,
  fetch: nb
};
E.forEach(Uo, (i, s) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: s });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: s });
  }
});
const Ll = (i) => `- ${i}`, ib = (i) => E.isFunction(i) || i === null || i === !1, jc = {
  getAdapter: (i) => {
    i = E.isArray(i) ? i : [i];
    const { length: s } = i;
    let a, r;
    const u = {};
    for (let h = 0; h < s; h++) {
      a = i[h];
      let f;
      if (r = a, !ib(a) && (r = Uo[(f = String(a)).toLowerCase()], r === void 0))
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
` + h.map(Ll).join(`
`) : " " + Ll(h[0]) : "as no adapter specified";
      throw new K(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Uo
};
function Eo(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new Sn(null, i);
}
function Ml(i) {
  return Eo(i), i.headers = Kt.from(i.headers), i.data = _o.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), jc.getAdapter(i.adapter || ui.adapter)(i).then(function(s) {
    return Eo(i), s.data = _o.call(
      i,
      i.transformResponse,
      s
    ), s.headers = Kt.from(s.headers), s;
  }, function(s) {
    return Rc(s) || (Eo(i), s && s.response && (s.response.data = _o.call(
      i,
      i.transformResponse,
      s.response
    ), s.response.headers = Kt.from(s.response.headers))), Promise.reject(s);
  });
}
const Uc = "1.7.7", Zo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, s) => {
  Zo[i] = function(a) {
    return typeof a === i || "a" + (s < 1 ? "n " : " ") + i;
  };
});
const zl = {};
Zo.transitional = function(i, s, a) {
  function r(u, h) {
    return "[Axios v" + Uc + "] Transitional option '" + u + "'" + h + (a ? ". " + a : "");
  }
  return (u, h, f) => {
    if (i === !1)
      throw new K(
        r(h, " has been removed" + (s ? " in " + s : "")),
        K.ERR_DEPRECATED
      );
    return s && !zl[h] && (zl[h] = !0, console.warn(
      r(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), i ? i(u, h, f) : !0;
  };
};
function sb(i, s, a) {
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
const Lo = {
  assertOptions: sb,
  validators: Zo
}, Pe = Lo.validators;
class tn {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new Il(),
      response: new Il()
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
    typeof s == "string" ? (a = a || {}, a.url = s) : a = s || {}, a = nn(this.defaults, a);
    const { transitional: r, paramsSerializer: u, headers: h } = a;
    r !== void 0 && Lo.assertOptions(r, {
      silentJSONParsing: Pe.transitional(Pe.boolean),
      forcedJSONParsing: Pe.transitional(Pe.boolean),
      clarifyTimeoutError: Pe.transitional(Pe.boolean)
    }, !1), u != null && (E.isFunction(u) ? a.paramsSerializer = {
      serialize: u
    } : Lo.assertOptions(u, {
      encode: Pe.function,
      serialize: Pe.function
    }, !0)), a.method = (a.method || this.defaults.method || "get").toLowerCase();
    let f = h && E.merge(
      h.common,
      h[a.method]
    );
    h && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (T) => {
        delete h[T];
      }
    ), a.headers = Kt.concat(f, h);
    const g = [];
    let k = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(a) === !1 || (k = k && T.synchronous, g.unshift(T.fulfilled, T.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(T) {
      b.push(T.fulfilled, T.rejected);
    });
    let v, A = 0, S;
    if (!k) {
      const T = [Ml.bind(this), void 0];
      for (T.unshift.apply(T, g), T.push.apply(T, b), S = T.length, v = Promise.resolve(a); A < S; )
        v = v.then(T[A++], T[A++]);
      return v;
    }
    S = g.length;
    let P = a;
    for (A = 0; A < S; ) {
      const T = g[A++], O = g[A++];
      try {
        P = T(P);
      } catch (q) {
        O.call(this, q);
        break;
      }
    }
    try {
      v = Ml.call(this, P);
    } catch (T) {
      return Promise.reject(T);
    }
    for (A = 0, S = b.length; A < S; )
      v = v.then(b[A++], b[A++]);
    return v;
  }
  getUri(s) {
    s = nn(this.defaults, s);
    const a = Bc(s.baseURL, s.url);
    return Cc(a, s.params, s.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function(i) {
  tn.prototype[i] = function(s, a) {
    return this.request(nn(a || {}, {
      method: i,
      url: s,
      data: (a || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(i) {
  function s(a) {
    return function(r, u, h) {
      return this.request(nn(h || {}, {
        method: i,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: u
      }));
    };
  }
  tn.prototype[i] = s(), tn.prototype[i + "Form"] = s(!0);
});
class tr {
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
      token: new tr(function(a) {
        s = a;
      }),
      cancel: s
    };
  }
}
function ob(i) {
  return function(s) {
    return i.apply(null, s);
  };
}
function rb(i) {
  return E.isObject(i) && i.isAxiosError === !0;
}
const Mo = {
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
Object.entries(Mo).forEach(([i, s]) => {
  Mo[s] = i;
});
function Lc(i) {
  const s = new tn(i), a = vc(tn.prototype.request, s);
  return E.extend(a, tn.prototype, s, { allOwnKeys: !0 }), E.extend(a, s, null, { allOwnKeys: !0 }), a.create = function(r) {
    return Lc(nn(i, r));
  }, a;
}
const Et = Lc(ui);
Et.Axios = tn;
Et.CanceledError = Sn;
Et.CancelToken = tr;
Et.isCancel = Rc;
Et.VERSION = Uc;
Et.toFormData = ms;
Et.AxiosError = K;
Et.Cancel = Et.CanceledError;
Et.all = function(i) {
  return Promise.all(i);
};
Et.spread = ob;
Et.isAxiosError = rb;
Et.mergeConfig = nn;
Et.AxiosHeaders = Kt;
Et.formToJSON = (i) => Pc(E.isHTMLForm(i) ? new FormData(i) : i);
Et.getAdapter = jc.getAdapter;
Et.HttpStatusCode = Mo;
Et.default = Et;
const ab = (i) => {
  const s = typeof i;
  return i !== null && (s === "object" || s === "function");
}, Oo = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), lb = new Set("0123456789");
function cb(i) {
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
        if (Oo.has(a))
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
          if (Oo.has(a))
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
        if (r === "index" && !lb.has(h))
          throw new Error("Invalid character in an index");
        if (r === "indexEnd")
          throw new Error("Invalid character after an index");
        r === "start" && (r = "property"), u && (u = !1, a += "\\"), a += h;
      }
    }
  switch (u && (a += "\\"), r) {
    case "property": {
      if (Oo.has(a))
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
function ub(i, s) {
  if (typeof s != "number" && Array.isArray(i)) {
    const a = Number.parseInt(s, 10);
    return Number.isInteger(a) && i[a] === i[s];
  }
  return !1;
}
function hb(i, s, a) {
  if (!ab(i) || typeof s != "string")
    return a === void 0 ? i : a;
  const r = cb(s);
  if (r.length === 0)
    return a;
  for (let u = 0; u < r.length; u++) {
    const h = r[u];
    if (ub(i, h) ? i = u === r.length - 1 ? void 0 : null : i = i[h], i == null) {
      if (u !== r.length - 1)
        return a;
      break;
    }
  }
  return i === void 0 ? a : i;
}
const Mc = Hl("config", {
  persist: !0,
  state: () => ({
    config: {}
  }),
  getters: {
    get: (i) => (s, a) => hb(i.config, s, a)
  },
  actions: {
    async load() {
      Et.get("/api/config").then((i) => {
        this.config = i.data;
      });
    }
  }
});
function db() {
  return {
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    password: "",
    passwordc: "",
    locale: Mc().get("site.registration.user_defaults.locale", "en_US"),
    captcha: "",
    spiderbro: "http://"
  };
}
function fb() {
  return Mc().get("locales.available");
}
function pb() {
  return "/account/captcha";
}
async function mb(i) {
  return pt.post("/account/register", i).then((s) => s.data).catch((s) => {
    throw {
      description: "An error as occurred",
      style: ke.Danger,
      closeBtn: !0,
      ...s.response.data
    };
  });
}
const gb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  doRegister: mb,
  getAvailableLocales: fb,
  getCaptchaUrl: pb,
  getDefaultForm: db
}, Symbol.toStringTag, { value: "Module" }));
async function vb(i) {
  return pt.post("/account/forgot-password", { email: i }).then((s) => ({
    description: s.data.message,
    style: ke.Success,
    closeBtn: !0
  })).catch((s) => {
    throw {
      description: "An error as occurred",
      style: ke.Danger,
      closeBtn: !0,
      ...s.response.data
    };
  });
}
async function bb(i) {
  return pt.post("/account/resend-verification", { email: i }).then((s) => ({
    description: s.data.message,
    style: ke.Success,
    closeBtn: !0
  })).catch((s) => {
    throw {
      description: "An error as occurred",
      style: ke.Danger,
      closeBtn: !0,
      ...s.response.data
    };
  });
}
const wb = { class: "uk-fieldset uk-form-stacked" }, yb = { class: "uk-margin" }, kb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, $b = { class: "uk-width-1-2" }, xb = { class: "uk-width-1-2" }, Sb = { class: "uk-width-1-1" }, _b = { class: "uk-margin" }, Eb = { class: "uk-margin" }, Ob = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Tb = { class: "uk-width-1-2" }, Cb = { class: "uk-width-1-2" }, Ab = { class: "uk-margin" }, Pb = ["value"], Rb = { class: "uk-margin" }, Ib = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Bb = { class: "uk-width-2-3" }, Fb = { class: "uk-width-1-3" }, Nb = ["src"], Db = { class: "uk-text-center" }, jb = ["disabled"], zc = /* @__PURE__ */ ht({
  __name: "FormRegister",
  setup(i) {
    const { getDefaultForm: s, doRegister: a, getAvailableLocales: r, getCaptchaUrl: u } = gb, h = ge(!1), f = ge();
    let g = s();
    async function k() {
      h.value = !0, f.value = null, await a(g).then((b) => {
        Wl.notification({
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
      const A = Pt("UFAlert");
      return I(), D("form", {
        onSubmit: v[8] || (v[8] = os((S) => k(), ["prevent"]))
      }, [
        x("fieldset", wb, [
          f.value ? (I(), gt(A, {
            key: 0,
            "data-test": "error",
            alert: f.value
          }, null, 8, ["alert"])) : et("", !0),
          x("div", yb, [
            v[9] || (v[9] = x("label", {
              class: "uk-form-label",
              for: "first_name"
            }, "Name and email", -1)),
            x("div", kb, [
              x("div", $b, [
                Lt(x("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "First Name",
                  "aria-label": "First Name",
                  id: "first_name",
                  "data-test": "first_name",
                  "onUpdate:modelValue": v[0] || (v[0] = (S) => U(g).first_name = S)
                }, null, 512), [
                  [ne, U(g).first_name]
                ])
              ]),
              x("div", xb, [
                Lt(x("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "Last Name",
                  "aria-label": "Last Name",
                  "data-test": "last_name",
                  "onUpdate:modelValue": v[1] || (v[1] = (S) => U(g).last_name = S)
                }, null, 512), [
                  [ne, U(g).last_name]
                ])
              ]),
              x("div", Sb, [
                Lt(x("input", {
                  class: "uk-input",
                  type: "email",
                  placeholder: "Email",
                  "aria-label": "Email",
                  "data-test": "email",
                  "onUpdate:modelValue": v[2] || (v[2] = (S) => U(g).email = S)
                }, null, 512), [
                  [ne, U(g).email]
                ])
              ])
            ])
          ]),
          x("div", _b, [
            v[10] || (v[10] = x("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Username", -1)),
            Lt(x("input", {
              class: "uk-input",
              type: "text",
              placeholder: "Username",
              "aria-label": "Username",
              "data-test": "username",
              "onUpdate:modelValue": v[3] || (v[3] = (S) => U(g).user_name = S)
            }, null, 512), [
              [ne, U(g).user_name]
            ])
          ]),
          x("div", Eb, [
            v[11] || (v[11] = x("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Password", -1)),
            x("div", Ob, [
              x("div", Tb, [
                Lt(x("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Password",
                  "aria-label": "Password",
                  "data-test": "password",
                  "onUpdate:modelValue": v[4] || (v[4] = (S) => U(g).password = S)
                }, null, 512), [
                  [ne, U(g).password]
                ])
              ]),
              x("div", Cb, [
                Lt(x("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Confirm Password",
                  "aria-label": "Confirm Password",
                  "data-test": "passwordc",
                  "onUpdate:modelValue": v[5] || (v[5] = (S) => U(g).passwordc = S)
                }, null, 512), [
                  [ne, U(g).passwordc]
                ])
              ])
            ])
          ]),
          x("div", Ab, [
            v[12] || (v[12] = x("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Locale", -1)),
            Lt(x("select", {
              class: "uk-select",
              id: "form-stacked-select",
              "data-test": "locale",
              "onUpdate:modelValue": v[6] || (v[6] = (S) => U(g).locale = S)
            }, [
              (I(!0), D(Qe, null, ei(U(r)(), (S, P) => (I(), D("option", {
                value: P,
                key: P
              }, ot(S), 9, Pb))), 128))
            ], 512), [
              [zo, U(g).locale]
            ])
          ]),
          x("div", Rb, [
            v[13] || (v[13] = x("label", {
              class: "uk-form-label",
              for: "r-form-captcha"
            }, "Captcha", -1)),
            x("div", Ib, [
              x("div", Bb, [
                Lt(x("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Captcha",
                  "aria-label": "Captcha",
                  id: "r-form-captcha",
                  "data-test": "captcha",
                  "onUpdate:modelValue": v[7] || (v[7] = (S) => U(g).captcha = S)
                }, null, 512), [
                  [ne, U(g).captcha]
                ])
              ]),
              x("div", Fb, [
                x("img", {
                  src: U(u)(),
                  id: "captcha",
                  "data-target": "#r-form-captcha"
                }, null, 8, Nb)
              ])
            ])
          ]),
          v[14] || (v[14] = x("p", null, [
            _t(" By registering an account with UserFrosting, you accept "),
            x("a", null, "the terms and conditions"),
            _t(". ")
          ], -1)),
          x("div", Db, [
            x("button", {
              class: "uk-button uk-button-primary",
              disabled: h.value
            }, "Sign me up", 8, jb)
          ])
        ])
      ], 32);
    };
  }
}), Ub = { class: "uk-fieldset" }, Lb = { class: "uk-margin" }, Mb = { class: "uk-inline uk-width-1-1" }, zb = { class: "uk-text-center" }, Hb = ["disabled"], Hc = /* @__PURE__ */ ht({
  __name: "FormForgotPassword",
  setup(i) {
    const s = ge(!1), a = ge();
    let r = "";
    async function u() {
      s.value = !0, a.value = null, await vb(r).then((h) => {
        a.value = h;
      }).catch((h) => {
        a.value = h;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (h, f) => {
      const g = Pt("UFAlert");
      return I(), D("form", {
        onSubmit: f[1] || (f[1] = os((k) => u(), ["prevent"]))
      }, [
        x("fieldset", Ub, [
          a.value ? (I(), gt(g, {
            key: 0,
            "data-test": "error",
            alert: a.value
          }, null, 8, ["alert"])) : et("", !0),
          x("div", Lb, [
            x("div", Mb, [
              f[2] || (f[2] = x("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              Lt(x("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => Ho(r) ? r.value = k : r = k)
              }, null, 512), [
                [ne, U(r)]
              ])
            ])
          ]),
          x("div", zb, [
            x("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Email Password Reset Link ", 8, Hb)
          ])
        ])
      ], 32);
    };
  }
}), qb = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, Wb = { class: "uk-navbar-container" }, Vb = { class: "uk-container uk-container-expand" }, Jb = {
  class: "uk-navbar",
  "uk-navbar": ""
}, Kb = {
  class: "uk-navbar-left",
  "data-test": "navbar-left"
}, Gb = {
  class: "uk-navbar-right",
  "data-test": "navbar-right"
}, Xb = { class: "uk-navbar-nav" }, Yb = /* @__PURE__ */ ht({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), D("header", null, [
      x("div", qb, [
        x("div", Wb, [
          x("div", Vb, [
            x("nav", Jb, [
              x("div", Kb, [
                At(qo, {
                  to: s.to,
                  class: "uk-navbar-item uk-logo",
                  label: ""
                }, {
                  default: Dt(() => [
                    Q(s.$slots, "title", {}, () => [
                      _t(ot(s.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              x("div", Gb, [
                x("ul", Xb, [
                  Q(s.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), Qb = { "data-test": "label" }, Zb = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0px"
}, tw = {
  class: "uk-nav uk-navbar-dropdown-nav",
  "data-test": "slot"
}, er = /* @__PURE__ */ ht({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), D("li", null, [
      x("a", Qb, [
        Q(s.$slots, "label", {}, () => [
          _t(ot(s.label), 1)
        ]),
        a[0] || (a[0] = _t()),
        a[1] || (a[1] = x("span", { "uk-navbar-parent-icon": "" }, null, -1))
      ]),
      x("div", Zb, [
        x("ul", tw, [
          Q(s.$slots, "default")
        ])
      ])
    ]));
  }
}), ew = {}, nw = { class: "uk-nav-divider" };
function iw(i, s) {
  return I(), D("li", nw);
}
const sw = /* @__PURE__ */ ri(ew, [["render", iw]]), ow = { key: 0 }, rw = ["href"], aw = ["href", "onClick"], lw = /* @__PURE__ */ ht({
  __name: "NavBarItem",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, a = ce(() => s.to === "" || typeof s.to == "string" && s.to.startsWith("http"));
    return (r, u) => a.value ? (I(), D("li", ow, [
      x("a", {
        href: r.to.toString(),
        target: "_blank"
      }, [
        Q(r.$slots, "default", {}, () => [
          _t(ot(r.label), 1)
        ])
      ], 8, rw)
    ])) : (I(), gt(U(oi), ni({
      key: 1,
      to: r.to
    }, r.$props, { custom: "" }), {
      default: Dt(({ isActive: h, href: f, navigate: g }) => [
        x("li", {
          class: ye({ "uk-active": h })
        }, [
          x("a", ni(r.$attrs, {
            href: f,
            onClick: g
          }), [
            Q(r.$slots, "default", {}, () => [
              _t(ot(r.label), 1)
            ])
          ], 16, aw)
        ], 2)
      ]),
      _: 3
    }, 16, ["to"]));
  }
}), cw = { class: "uk-text-center" }, uw = /* @__PURE__ */ ht({
  __name: "NavBarLogin",
  setup(i) {
    return (s, a) => (I(), gt(er, {
      label: "Login",
      class: "uf-nav-login uk-text-center"
    }, {
      default: Dt(() => [
        At(Go),
        x("div", cw, [
          x("button", {
            class: "uk-button uk-button-default",
            onClick: a[0] || (a[0] = (r) => s.$emit("gotoRegistration")),
            "data-test": "gotoRegistration"
          }, " Register ")
        ]),
        Q(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}), hw = {
  key: 0,
  "data-test": "username"
}, dw = ["src"], fw = { class: "uk-margin" }, pw = ["src"], mw = {
  key: 1,
  class: "uk-margin-remove",
  "data-test": "username"
}, gw = {
  key: 2,
  class: "uk-margin-remove uk-text-meta",
  "data-test": "meta"
}, vw = /* @__PURE__ */ ht({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), gt(er, { class: "uf-nav-user uk-text-center" }, {
      label: Dt(() => [
        s.username ? (I(), D("span", hw, ot(s.username), 1)) : et("", !0),
        s.avatar ? (I(), D("img", {
          key: 1,
          src: s.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, dw)) : et("", !0)
      ]),
      default: Dt(() => [
        x("div", fw, [
          s.avatar ? (I(), D("img", {
            key: 0,
            src: s.avatar,
            alt: "avatar",
            class: "uk-border-circle",
            "uk-height-match": ""
          }, null, 8, pw)) : et("", !0),
          s.username ? (I(), D("p", mw, ot(s.username), 1)) : et("", !0),
          s.meta ? (I(), D("p", gw, "(" + ot(s.meta) + ")", 1)) : et("", !0)
        ]),
        Q(s.$slots, "default", { dataTest: "slot" })
      ]),
      _: 3
    }));
  }
}), bw = { key: 0 }, ww = ["href"], yw = { key: 1 }, kw = /* @__PURE__ */ ht({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, a = ce(() => typeof s.to == "string" && s.to.startsWith("http"));
    return (r, u) => a.value ? (I(), D("li", bw, [
      x("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: r.to.toString(),
        target: "_blank"
      }, [
        Q(r.$slots, "default", {}, () => [
          _t(ot(r.label), 1)
        ])
      ], 8, ww)
    ])) : (I(), D("li", yw, [
      At(U(oi), {
        to: r.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: Dt(() => [
          Q(r.$slots, "default", {}, () => [
            _t(ot(r.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["to"])
    ]));
  }
}), $w = { class: "uk-list" }, xw = { class: "uk-text-center" }, Sw = /* @__PURE__ */ ht({
  __name: "PageLogin",
  setup(i) {
    return (s, a) => {
      const r = Pt("font-awesome-icon"), u = Pt("UFCardBoxBig");
      return I(), gt(u, null, {
        default: Dt(() => [
          a[5] || (a[5] = x("h3", { class: "uk-card-title" }, "Login", -1)),
          At(Go),
          x("ul", $w, [
            x("li", null, [
              x("a", {
                onClick: a[0] || (a[0] = (h) => s.$emit("gotoForgotPassword")),
                "data-test": "gotoForgotPassword"
              }, "Forgot your password?")
            ]),
            x("li", null, [
              x("a", {
                onClick: a[1] || (a[1] = (h) => s.$emit("gotoResendVerification")),
                "data-test": "gotoResendVerification"
              }, "Resend verification email")
            ])
          ]),
          a[6] || (a[6] = x("hr", null, null, -1)),
          x("div", xw, [
            a[4] || (a[4] = x("p", null, "You don't have an account yet?", -1)),
            x("button", {
              class: "uk-button uk-button-default",
              onClick: a[2] || (a[2] = (h) => s.$emit("gotoRegistration")),
              "data-test": "gotoRegistration"
            }, [
              At(r, { icon: ["fas", "user-plus"] }),
              a[3] || (a[3] = _t(" Register "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), _w = { class: "uk-text-center" }, Ew = /* @__PURE__ */ ht({
  __name: "PageRegister",
  setup(i) {
    return (s, a) => {
      const r = Pt("font-awesome-icon"), u = Pt("UFCardBoxBig");
      return I(), gt(u, null, {
        default: Dt(() => [
          a[3] || (a[3] = x("h3", { class: "uk-card-title" }, "Register", -1)),
          At(zc),
          a[4] || (a[4] = x("hr", null, null, -1)),
          x("div", _w, [
            a[2] || (a[2] = x("p", null, "Already have an account ?", -1)),
            x("button", {
              class: "uk-button uk-button-default",
              onClick: a[0] || (a[0] = (h) => s.$emit("gotoLogin")),
              "data-test": "gotoLogin"
            }, [
              At(r, { icon: ["fas", "right-to-bracket"] }),
              a[1] || (a[1] = _t(" Login "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), Ow = /* @__PURE__ */ ht({
  __name: "PageForgotPassword",
  setup(i) {
    return (s, a) => {
      const r = Pt("UFCardBoxBig");
      return I(), gt(r, null, {
        default: Dt(() => [
          a[0] || (a[0] = x("h3", { class: "uk-card-title" }, "Forgotten Password", -1)),
          a[1] || (a[1] = x("p", null, " Please enter the email address you used to sign up. A link with instructions to reset your password will be emailed to you. ", -1)),
          At(Hc)
        ]),
        _: 1
      });
    };
  }
}), Tw = { class: "uk-fieldset" }, Cw = { class: "uk-margin" }, Aw = { class: "uk-inline uk-width-1-1" }, Pw = { class: "uk-text-center" }, Rw = ["disabled"], Iw = /* @__PURE__ */ ht({
  __name: "FormResendVerification",
  setup(i) {
    const s = ge(!1), a = ge();
    let r = "";
    async function u() {
      s.value = !0, a.value = null, await bb(r).then((h) => {
        a.value = h;
      }).catch((h) => {
        a.value = h;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (h, f) => {
      const g = Pt("UFAlert");
      return I(), D("form", {
        onSubmit: f[1] || (f[1] = os((k) => u(), ["prevent"]))
      }, [
        x("fieldset", Tw, [
          a.value ? (I(), gt(g, {
            key: 0,
            "data-test": "error",
            alert: a.value
          }, null, 8, ["alert"])) : et("", !0),
          x("div", Cw, [
            x("div", Aw, [
              f[2] || (f[2] = x("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              Lt(x("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => Ho(r) ? r.value = k : r = k)
              }, null, 512), [
                [ne, U(r)]
              ])
            ])
          ]),
          x("div", Pw, [
            x("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Email the verification link for my account ", 8, Rw)
          ])
        ])
      ], 32);
    };
  }
}), Bw = /* @__PURE__ */ ht({
  __name: "PageResendVerification",
  setup(i) {
    return (s, a) => {
      const r = Pt("UFCardBoxBig");
      return I(), gt(r, null, {
        default: Dt(() => [
          a[0] || (a[0] = x("h3", { class: "uk-card-title" }, "Resend Verification Email", -1)),
          a[1] || (a[1] = x("p", null, " Please enter the email address you used to sign up, and your verification email will be resent. ", -1)),
          At(Iw)
        ]),
        _: 1
      });
    };
  }
}), Fw = {}, Nw = { class: "uf-sidebar-left uk-light uk-visible@m" }, Dw = { class: "left-nav-wrap" }, jw = {
  class: "uk-nav uk-nav-default",
  "data-uk-nav": ""
};
function Uw(i, s) {
  return I(), D("aside", Nw, [
    x("div", Dw, [
      x("ul", jw, [
        Q(i.$slots, "default")
      ])
    ])
  ]);
}
const Lw = /* @__PURE__ */ ri(Fw, [["render", Uw]]), Mw = ["data-uk-icon"], zw = {
  key: 2,
  "uk-nav-parent-icon": "",
  "data-test": "caret"
}, Hw = {
  class: "uk-nav-sub",
  "data-test": "slot"
}, qw = /* @__PURE__ */ ht({
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
      const r = Pt("font-awesome-icon");
      return I(), gt(U(oi), ni({ to: s.to }, s.$props, { custom: "" }), {
        default: Dt(({ isActive: u }) => [
          x("li", {
            class: ye(["uk-parent", { "uk-open": u }])
          }, [
            x("a", ip(sp(s.$attrs)), [
              s.icon ? (I(), D("span", {
                key: 0,
                "data-uk-icon": s.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, Mw)) : et("", !0),
              s.faIcon ? (I(), gt(r, {
                key: 1,
                class: "uk-margin-small-right",
                icon: s.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : et("", !0),
              Q(s.$slots, "label", {}, () => [
                _t(ot(s.label), 1)
              ]),
              s.hideCaret ? et("", !0) : (I(), D("span", zw))
            ], 16),
            x("ul", Hw, [
              Q(s.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]);
    };
  }
}), Ww = { key: 0 }, Vw = ["href"], Jw = ["data-uk-icon"], Kw = ["href", "onClick"], Gw = ["data-uk-icon"], Xw = /* @__PURE__ */ ht({
  __name: "SideBarItem",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(i) {
    const s = i, a = ce(() => s.to === "" || typeof s.to == "string" && s.to.startsWith("http"));
    return (r, u) => {
      const h = Pt("font-awesome-icon");
      return a.value ? (I(), D("li", Ww, [
        x("a", {
          href: r.to.toString(),
          target: "_blank"
        }, [
          r.icon ? (I(), D("span", {
            key: 0,
            "data-uk-icon": r.icon,
            class: "uk-margin-small-right",
            "data-test": "icon"
          }, null, 8, Jw)) : et("", !0),
          r.faIcon ? (I(), gt(h, {
            key: 1,
            class: "uk-margin-small-right",
            icon: r.faIcon,
            "data-test": "faIcon"
          }, null, 8, ["icon"])) : et("", !0),
          Q(r.$slots, "default", {}, () => [
            _t(ot(r.label), 1)
          ])
        ], 8, Vw)
      ])) : (I(), gt(U(oi), ni({
        key: 1,
        to: r.to
      }, r.$props, { custom: "" }), {
        default: Dt(({ isActive: f, href: g, navigate: k }) => [
          x("li", {
            class: ye({ "uk-active": f })
          }, [
            x("a", ni(r.$attrs, {
              href: g,
              onClick: k
            }), [
              r.icon ? (I(), D("span", {
                key: 0,
                "data-uk-icon": r.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, Gw)) : et("", !0),
              r.faIcon ? (I(), gt(h, {
                key: 1,
                class: "uk-margin-small-right",
                icon: r.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : et("", !0),
              Q(r.$slots, "default", {}, () => [
                _t(ot(r.label), 1)
              ])
            ], 16, Kw)
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]));
    };
  }
}), Yw = { class: "uk-nav-header" }, Qw = /* @__PURE__ */ ht({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(i) {
    return (s, a) => (I(), D("li", Yw, ot(s.label), 1));
  }
}), Zw = {};
function ty(i, s) {
  return I(), D("td", null, [
    Q(i.$slots, "default")
  ]);
}
const ey = /* @__PURE__ */ ri(Zw, [["render", ty]]), ny = {
  key: 0,
  class: "uk-table-link uk-padding-small"
}, iy = {
  key: 1,
  class: "uk-padding-small"
}, sy = /* @__PURE__ */ ht({
  __name: "SprunjeHeader",
  props: {
    sort: {}
  },
  setup(i) {
    const s = rs("sprunjer"), { sorts: a, toggleSort: r } = s;
    return (u, h) => {
      const f = Pt("font-awesome-icon");
      return u.sort ? (I(), D("th", ny, [
        x("a", {
          class: "uk-link-reset",
          onClick: h[0] || (h[0] = (g) => U(r)(u.sort))
        }, [
          Q(u.$slots, "default"),
          U(a)[u.sort] === "asc" ? (I(), gt(f, {
            key: 0,
            icon: ["fas", "sort-up"],
            "fixed-width": "",
            class: "uk-align-right uk-margin-remove"
          })) : U(a)[u.sort] === "desc" ? (I(), gt(f, {
            key: 1,
            icon: ["fas", "sort-down"],
            "fixed-width": "",
            class: "uk-align-right uk-margin-remove"
          })) : (I(), gt(f, {
            key: 2,
            icon: ["fas", "sort"],
            "fixed-width": "",
            class: "uk-align-right uk-margin-remove"
          }))
        ])
      ])) : (I(), D("th", iy, [
        Q(u.$slots, "default")
      ]));
    };
  }
}), oy = {
  class: "uk-child-width-auto",
  "uk-grid": ""
}, ry = { class: "uk-text-left uk-text-meta" }, ay = { class: "uk-text-center uk-width-expand" }, ly = ["value"], cy = { class: "uk-text-right" }, uy = { "aria-label": "Pagination" }, hy = {
  class: "uk-pagination uk-flex-right",
  "uk-margin": ""
}, qc = /* @__PURE__ */ ht({
  __name: "SprunjePaginator",
  props: {
    rowsPerPageOptions: { default: () => [5, 10, 20, 50] }
  },
  setup(i) {
    const s = rs("sprunjer"), { size: a, page: r, totalPages: u, countFiltered: h, first: f, last: g } = s;
    function k(b) {
      r.value = b;
    }
    return (b, v) => {
      const A = Pt("font-awesome-icon");
      return I(), D("div", oy, [
        x("div", ry, [
          x("span", null, "Showing " + ot(U(f)) + " - " + ot(U(g)) + " of " + ot(U(h)), 1)
        ]),
        x("div", ay, [
          Lt(x("select", {
            class: "uk-select uk-form-small uk-form-width-small",
            "aria-label": "Select per page",
            "onUpdate:modelValue": v[0] || (v[0] = (S) => Ho(a) ? a.value = S : null)
          }, [
            (I(!0), D(Qe, null, ei(b.rowsPerPageOptions, (S) => (I(), D("option", {
              key: S,
              value: S
            }, ot(S) + " per page ", 9, ly))), 128))
          ], 512), [
            [zo, U(a)]
          ])
        ]),
        x("div", cy, [
          x("nav", uy, [
            x("ul", hy, [
              x("li", null, [
                x("a", {
                  onClick: v[1] || (v[1] = (S) => k(0)),
                  class: ye(["uk-icon-link", { "uk-disabled": U(r) === 0 }])
                }, [
                  At(A, {
                    icon: "angles-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              x("li", null, [
                x("a", {
                  onClick: v[2] || (v[2] = (S) => k(U(r) - 1)),
                  class: ye(["uk-icon-link", { "uk-disabled": U(r) === 0 }])
                }, [
                  At(A, {
                    icon: "angle-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              x("li", null, "Page " + ot(U(r) + 1) + " of " + ot(U(u) + 1), 1),
              x("li", null, [
                x("a", {
                  onClick: v[3] || (v[3] = (S) => k(U(r) + 1)),
                  class: ye(["uk-icon-link", { "uk-disabled": U(r) === U(u) }])
                }, [
                  At(A, {
                    icon: "angle-right",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              x("li", null, [
                x("a", {
                  onClick: v[4] || (v[4] = (S) => k(U(u))),
                  class: ye(["uk-icon-link", { "uk-disabled": U(r) === U(u) }])
                }, [
                  At(A, {
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
}), dy = {
  key: 0,
  class: "uk-search uk-search-default"
}, fy = ["placeholder"], py = /* @__PURE__ */ ht({
  __name: "SprunjeSearch",
  props: {
    column: {
      type: String,
      required: !0
    },
    label: {
      type: String
    }
  },
  setup(i) {
    const s = i, a = rs("sprunjer"), { filters: r } = a, u = ce(() => s.label ? "Search " + s.label + "..." : "Search " + s.column + "...");
    return (h, f) => i.column ? (I(), D("div", dy, [
      Lt(x("input", {
        class: "uk-search-input uk-form-small",
        type: "search",
        placeholder: u.value,
        "aria-label": "Search",
        "onUpdate:modelValue": f[0] || (f[0] = (g) => U(r)[i.column] = g)
      }, null, 8, fy), [
        [ne, U(r)[i.column]]
      ]),
      f[1] || (f[1] = x("span", {
        class: "uk-search-icon-flip",
        "uk-search-icon": ""
      }, null, -1))
    ])) : et("", !0);
  }
}), my = ["onUpdate:modelValue"], gy = ["value"], vy = ["placeholder", "onUpdate:modelValue"], by = /* @__PURE__ */ ht({
  __name: "SprunjeFilters",
  setup(i) {
    const s = rs("sprunjer"), { data: a, filters: r } = s, u = ce(() => a.value.filterable), h = ce(() => a.value.listable), f = () => {
      r.value = {};
    }, g = (b) => h.value[b] !== void 0, k = (b) => h.value[b];
    return (b, v) => {
      const A = Pt("font-awesome-icon");
      return I(), D(Qe, null, [
        v[2] || (v[2] = x("h3", { class: "uk-heading-divider" }, "Filters", -1)),
        (I(!0), D(Qe, null, ei(u.value, (S, P) => (I(), D("dl", {
          class: "uk-description-list",
          key: P
        }, [
          x("dt", null, ot(S), 1),
          x("dd", null, [
            g(S) ? Lt((I(), D("select", {
              key: 0,
              "onUpdate:modelValue": (T) => U(r)[S] = T,
              class: "uk-select"
            }, [
              v[0] || (v[0] = x("option", { value: "" }, null, -1)),
              (I(!0), D(Qe, null, ei(k(S), (T) => (I(), D("option", {
                key: T.value,
                value: T.value
              }, ot(T.text), 9, gy))), 128))
            ], 8, my)), [
              [zo, U(r)[S]]
            ]) : Lt((I(), D("input", {
              key: 1,
              class: "uk-input",
              type: "text",
              placeholder: S,
              "onUpdate:modelValue": (T) => U(r)[S] = T
            }, null, 8, vy)), [
              [ne, U(r)[S]]
            ])
          ])
        ]))), 128)),
        x("button", {
          class: "uk-button uk-button-default uk-button-small",
          onClick: f
        }, [
          At(A, {
            icon: "xmark",
            "fixed-width": ""
          }),
          v[1] || (v[1] = _t(" Clear filters "))
        ])
      ], 64);
    };
  }
}), wy = {
  "uk-grid": "",
  class: "uk-child-width-1-2"
}, yy = { class: "uk-text-left" }, ky = { class: "uk-text-right" }, $y = {
  "uk-grid": "",
  class: "uk-grid-small uk-grid-divider"
}, xy = { class: "uk-width-expand" }, Sy = { class: "uk-table uk-table-striped uk-table-small" }, _y = {
  key: 0,
  class: "uk-width-1-4"
}, Ey = /* @__PURE__ */ ht({
  __name: "SprunjeTable",
  props: {
    dataUrl: {},
    hidePagination: { type: Boolean, default: !1 },
    hideFilters: { type: Boolean, default: !1 },
    defaultSorts: { default: () => ({}) },
    defaultFilters: { default: () => ({}) },
    defaultSize: { default: 10 },
    defaultPage: { default: 0 },
    searchColumn: { default: null }
  },
  setup(i) {
    const s = ge(!1), a = rp(() => i.dataUrl, i.defaultSorts, i.defaultFilters, i.defaultSize, i.defaultPage), { rows: r } = a;
    return op("sprunjer", a), (u, h) => {
      const f = Pt("font-awesome-icon");
      return I(), D(Qe, null, [
        x("div", wy, [
          x("div", yy, [
            Q(u.$slots, "actions")
          ]),
          x("div", ky, [
            Q(u.$slots, "filters"),
            u.searchColumn ? (I(), gt(py, {
              key: 0,
              column: u.searchColumn
            }, null, 8, ["column"])) : et("", !0),
            u.hideFilters ? et("", !0) : (I(), D("a", {
              key: 1,
              class: "uk-button uk-button-default uk-button-small",
              onClick: h[0] || (h[0] = (g) => s.value = !s.value)
            }, [
              At(f, { icon: "filter" })
            ]))
          ])
        ]),
        x("div", $y, [
          x("div", xy, [
            x("table", Sy, [
              x("thead", null, [
                x("tr", null, [
                  Q(u.$slots, "header")
                ])
              ]),
              x("tbody", null, [
                (I(!0), D(Qe, null, ei(U(r), (g) => (I(), D("tr", {
                  key: g.id
                }, [
                  Q(u.$slots, "body", { item: g })
                ]))), 128))
              ])
            ])
          ]),
          s.value === !0 ? (I(), D("div", _y, [
            At(by),
            Q(u.$slots, "filterPanel")
          ])) : et("", !0)
        ]),
        u.hidePagination ? et("", !0) : Q(u.$slots, "paginator", { key: 0 }, () => [
          At(qc)
        ])
      ], 64);
    };
  }
}), By = {
  install: (i) => {
    i.component("UFAlert", up).component("UFLabel", hp).component("UFAppLink", qo).component("UFInfoBox", kp).component("UFCardBox", Op).component("UFCardBoxBig", Ap).component("UFMainContent", Fp).component("UFHeaderPage", Up).component("UFFooterContent", qp).component("UFFormLogin", Go).component("UFFormRegister", zc).component("UFFormForgotPassword", Hc).component("UFNavBar", Yb).component("UFNavBarDropdown", er).component("UFNavBarDropdownSeparator", sw).component("UFNavBarItem", lw).component("UFNavBarLogin", uw).component("UFNavBarUserCard", vw).component("UFNavBarUserCardButton", kw).component("UFPageLogin", Sw).component("UFPageRegister", Ew).component("UFPageForgotPassword", Ow).component("UFPageResendVerification", Bw).component("UFSideBar", Lw).component("UFSideBarDropdown", qw).component("UFSideBarItem", Xw).component("UFSideBarLabel", Qw).component("UFSprunjeColumn", ey).component("UFSprunjeHeader", sy).component("UFSprunjePaginator", qc).component("UFSprunjeTable", Ey);
  }
};
export {
  ey as A,
  sy as B,
  qc as C,
  Ey as D,
  qp as F,
  Fp as M,
  sw as N,
  By as P,
  Lw as S,
  Wl as U,
  ri as _,
  Nt as a,
  up as b,
  Wp as c,
  hp as d,
  qo as e,
  kp as f,
  Vp as g,
  Op as h,
  Ap as i,
  Up as j,
  Go as k,
  zc as l,
  Hc as m,
  Yb as n,
  er as o,
  lw as p,
  uw as q,
  vw as r,
  kw as s,
  Sw as t,
  Ew as u,
  Ow as v,
  Bw as w,
  qw as x,
  Xw as y,
  Qw as z
};
