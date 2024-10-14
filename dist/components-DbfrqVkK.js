import { defineComponent as dt, ref as ge, watch as ep, computed as ce, resolveComponent as At, openBlock as I, createElementBlock as j, normalizeClass as ye, createBlock as gt, createCommentVNode as nt, createTextVNode as _t, toDisplayString as lt, createVNode as Ct, renderSlot as Z, unref as L, withCtx as Dt, createElementVNode as x, createSlots as np, withModifiers as ss, withDirectives as zt, vModelText as ee, Fragment as yn, renderList as os, vModelSelect as zl, isRef as zo, mergeProps as ei, normalizeProps as ip, guardReactiveProps as sp, inject as rs, provide as op } from "vue";
import { RouterLink as si } from "vue-router";
import { defineStore as Hl } from "pinia";
import { useSprunjer as rp } from "@userfrosting/sprinkle-core/sprunjer";
var Nt = /* @__PURE__ */ ((i) => (i.Primary = "Primary", i.Secondary = "Secondary", i.Success = "Success", i.Warning = "Warning", i.Danger = "Danger", i.Info = "Info", i.Muted = "Muted", i))(Nt || {});
const ap = {
  key: 0,
  "data-test": "title"
}, lp = {
  key: 1,
  "data-test": "description"
}, cp = ["innerHTML"], up = /* @__PURE__ */ dt({
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
      const v = At("font-awesome-icon");
      return r.value ? (I(), j("div", {
        key: 0,
        class: ye([u.value, "uk-alert"]),
        "uk-alert": ""
      }, [
        k.alert.title ? (I(), j("h3", ap, [
          k.alert.hideIcon ? nt("", !0) : (I(), gt(v, {
            key: 0,
            icon: h.value,
            class: "uk-icon"
          }, null, 8, ["icon"])),
          _t(" " + lt(k.alert.title) + " ", 1),
          k.alert.closeBtn ? (I(), j("a", {
            key: 1,
            "data-test": "closeBtn",
            onClick: f,
            class: "uk-alert-close"
          }, [
            Ct(v, { icon: "xmark" })
          ])) : nt("", !0)
        ])) : nt("", !0),
        k.$slots.default ? (I(), j("p", lp, [
          Z(k.$slots, "default")
        ])) : k.alert.description ? (I(), j("p", {
          key: 2,
          innerHTML: k.alert.description,
          "data-test": "description"
        }, null, 8, cp)) : nt("", !0)
      ], 2)) : nt("", !0);
    };
  }
}), hp = /* @__PURE__ */ dt({
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
    return (a, r) => (I(), j("span", {
      class: ye(["uk-label", s.value])
    }, [
      Z(a.$slots, "default")
    ], 2));
  }
}), dp = ["href"], fp = { key: 1 }, Ho = /* @__PURE__ */ dt({
  __name: "AppLink",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, a = ce(() => typeof s.to == "string" && s.to.startsWith("http")), r = ce(() => s.to), u = ce(() => s.to === "");
    return (h, f) => a.value ? (I(), j("a", {
      key: 0,
      href: r.value,
      target: "_blank"
    }, [
      Z(h.$slots, "default", {}, () => [
        _t(lt(h.label), 1)
      ])
    ], 8, dp)) : u.value ? (I(), j("div", fp, [
      Z(h.$slots, "default", {}, () => [
        _t(lt(h.label), 1)
      ])
    ])) : (I(), gt(L(si), {
      key: 2,
      to: h.to
    }, {
      default: Dt(() => [
        Z(h.$slots, "default", {}, () => [
          _t(lt(h.label), 1)
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
}, kp = /* @__PURE__ */ dt({
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
      const r = At("font-awesome-icon");
      return I(), gt(Ho, {
        to: s.to,
        class: "uk-text-decoration-none"
      }, {
        default: Dt(() => [
          x("div", pp, [
            x("div", mp, [
              s.icon || s.faIcon ? (I(), j("div", gp, [
                s.icon ? (I(), j("span", {
                  key: 0,
                  "data-uk-icon": "icon: " + s.icon + "; ratio: 2",
                  class: "uk-margin-small-right"
                }, null, 8, vp)) : nt("", !0),
                s.faIcon ? (I(), gt(r, {
                  key: 1,
                  icon: s.faIcon,
                  size: "2xl",
                  "fixed-width": ""
                }, null, 8, ["icon"])) : nt("", !0)
              ])) : nt("", !0),
              x("div", bp, [
                s.value !== null ? (I(), j("h4", wp, lt(s.value), 1)) : nt("", !0),
                s.label !== null ? (I(), j("span", yp, lt(s.label), 1)) : nt("", !0)
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
}, Op = /* @__PURE__ */ dt({
  __name: "CardBox",
  props: {
    title: String
  },
  setup(i) {
    return (s, a) => (I(), j("div", $p, [
      i.title || s.$slots.header ? (I(), j("div", xp, [
        x("h4", Sp, [
          Z(s.$slots, "header", {}, () => [
            _t(lt(i.title), 1)
          ])
        ])
      ])) : nt("", !0),
      x("div", _p, [
        Z(s.$slots, "default")
      ]),
      s.$slots.footer ? (I(), j("div", Ep, [
        Z(s.$slots, "footer")
      ])) : nt("", !0)
    ]));
  }
}), Tp = { class: "uk-flex uk-flex-center uk-flex-middle" }, Cp = { class: "uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl" }, Ap = /* @__PURE__ */ dt({
  __name: "CardBoxBig",
  props: {
    title: String
  },
  setup(i) {
    return (s, a) => {
      const r = At("UFCardBox");
      return I(), j("div", Tp, [
        x("div", Cp, [
          Ct(r, null, np({
            default: Dt(() => [
              Z(s.$slots, "default")
            ]),
            _: 2
          }, [
            s.$slots.header || i.title ? {
              name: "header",
              fn: Dt(() => [
                Z(s.$slots, "header", {}, () => [
                  _t(lt(i.title), 1)
                ])
              ]),
              key: "0"
            } : void 0,
            s.$slots.footer ? {
              name: "footer",
              fn: Dt(() => [
                Z(s.$slots, "footer")
              ]),
              key: "1"
            } : void 0
          ]), 1024)
        ])
      ]);
    };
  }
}), oi = (i, s) => {
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
  return I(), j("div", Rp, [
    x("div", Ip, [
      Z(i.$slots, "default")
    ])
  ]);
}
const Fp = /* @__PURE__ */ oi(Pp, [["render", Bp]]), Np = { class: "uf-page-header" }, Dp = { class: "uk-margin-remove" }, jp = {
  key: 0,
  class: "uk-text-meta uk-margin-remove"
}, Lp = /* @__PURE__ */ dt({
  __name: "HeaderPage",
  props: {
    title: {},
    caption: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), j("div", Np, [
      x("h3", Dp, lt(s.title), 1),
      s.caption ? (I(), j("p", jp, lt(s.caption), 1)) : nt("", !0)
    ]));
  }
}), Up = {}, Mp = { class: "uf-main uk-section uk-section-small uk-section-muted uk-text-center" }, zp = {
  class: "uk-text-small uk-text-center",
  "data-test": "slot"
};
function Hp(i, s) {
  return I(), j("footer", Mp, [
    s[0] || (s[0] = x("hr", null, null, -1)),
    x("p", zp, [
      Z(i.$slots, "default")
    ])
  ]);
}
const qp = /* @__PURE__ */ oi(Up, [["render", Hp]]);
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
    const h = /\B([A-Z])/g, f = oe((t) => t.replace(h, "-$1").toLowerCase()), g = /-(\w)/g, k = oe(
      (t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(g, (e, n) => n.toUpperCase())
    ), b = oe((t) => t.charAt(0).toUpperCase() + t.slice(1));
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
    const { isArray: C, from: T } = Array, { assign: M } = Object;
    function q(t) {
      return typeof t == "function";
    }
    function z(t) {
      return t !== null && typeof t == "object";
    }
    function Y(t) {
      return r.call(t) === "[object Object]";
    }
    function Pt(t) {
      return z(t) && t === t.window;
    }
    function jt(t) {
      return se(t) === 9;
    }
    function yt(t) {
      return se(t) >= 1;
    }
    function Lt(t) {
      return se(t) === 1;
    }
    function se(t) {
      return !Pt(t) && z(t) && t.nodeType;
    }
    function Ht(t) {
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
    function ui(t) {
      return !(C(t) ? t.length : z(t) && Object.keys(t).length);
    }
    function It(t) {
      return t === void 0;
    }
    function vs(t) {
      return Ht(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function ve(t) {
      const e = Number(t);
      return isNaN(e) ? !1 : e;
    }
    function G(t) {
      return parseFloat(t) || 0;
    }
    function kt(t) {
      return t && et(t)[0];
    }
    function et(t) {
      return yt(t) ? [t] : Array.from(t || []).filter(yt);
    }
    function Re(t) {
      if (Pt(t))
        return t;
      t = kt(t);
      const e = jt(t) ? t : t == null ? void 0 : t.ownerDocument;
      return (e == null ? void 0 : e.defaultView) || window;
    }
    function En(t, e) {
      return t === e || z(t) && z(e) && Object.keys(t).length === Object.keys(e).length && nn(t, (n, o) => n === e[o]);
    }
    function bs(t, e, n) {
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
    function er(t, e) {
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
    function nr(t, e) {
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
    function hi(...t) {
      return [
        ["bottom", "top"],
        ["right", "left"]
      ].every(
        ([e, n]) => Math.min(...t.map(({ [e]: o }) => o)) - Math.max(...t.map(({ [n]: o }) => o)) > 0
      );
    }
    function di(t, e) {
      return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function ys(t, e, n) {
      const o = e === "width" ? "height" : "width";
      return {
        [o]: t[e] ? Math.round(n * t[o] / t[e]) : t[o],
        [e]: n
      };
    }
    function ir(t, e) {
      t = { ...t };
      for (const n in t)
        t = t[n] > e[n] ? ys(t, n, e[n]) : t;
      return t;
    }
    function Wc(t, e) {
      t = ir(t, e);
      for (const n in t)
        t = t[n] < e[n] ? ys(t, n, e[n]) : t;
      return t;
    }
    const ks = { ratio: ys, contain: ir, cover: Wc };
    function Xt(t, e, n = 0, o = !1) {
      e = et(e);
      const { length: l } = e;
      return l ? (t = fe(t) ? ve(t) : t === "next" ? n + 1 : t === "previous" ? n - 1 : t === "last" ? l - 1 : e.indexOf(kt(t)), o ? Ut(t, 0, l - 1) : (t %= l, t < 0 ? t + l : t)) : -1;
    }
    function oe(t) {
      const e = /* @__PURE__ */ Object.create(null);
      return (n, ...o) => e[n] || (e[n] = t(n, ...o));
    }
    function X(t, ...e) {
      for (const n of et(t)) {
        const o = Fe(e).filter((l) => !H(n, l));
        o.length && n.classList.add(...o);
      }
    }
    function ot(t, ...e) {
      for (const n of et(t)) {
        const o = Fe(e).filter((l) => H(n, l));
        o.length && n.classList.remove(...o);
      }
    }
    function fi(t, e, n) {
      n = Fe(n), e = Fe(e).filter((o) => !S(n, o)), ot(t, e), X(t, n);
    }
    function H(t, e) {
      return [e] = Fe(e), et(t).some((n) => n.classList.contains(e));
    }
    function $t(t, e, n) {
      const o = Fe(e);
      It(n) || (n = !!n);
      for (const l of et(t))
        for (const c of o)
          l.classList.toggle(c, n);
    }
    function Fe(t) {
      return t ? C(t) ? t.map(Fe).flat() : String(t).split(" ").filter(Boolean) : [];
    }
    function F(t, e, n) {
      var o;
      if (z(e)) {
        for (const l in e)
          F(t, l, e[l]);
        return;
      }
      if (It(n))
        return (o = kt(t)) == null ? void 0 : o.getAttribute(e);
      for (const l of et(t))
        q(n) && (n = n.call(l, F(l, e))), n === null ? On(l, e) : l.setAttribute(e, n);
    }
    function $e(t, e) {
      return et(t).some((n) => n.hasAttribute(e));
    }
    function On(t, e) {
      et(t).forEach((n) => n.removeAttribute(e));
    }
    function Bt(t, e) {
      for (const n of [e, `data-${e}`])
        if ($e(t, n))
          return F(t, n);
    }
    const Ne = typeof window < "u", Ot = Ne && document.dir === "rtl", sn = Ne && "ontouchstart" in window, on = Ne && window.PointerEvent, re = on ? "pointerdown" : sn ? "touchstart" : "mousedown", pi = on ? "pointermove" : sn ? "touchmove" : "mousemove", xe = on ? "pointerup" : sn ? "touchend" : "mouseup", De = on ? "pointerenter" : sn ? "" : "mouseenter", rn = on ? "pointerleave" : sn ? "" : "mouseleave", mi = on ? "pointercancel" : "touchcancel", Vc = {
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
      return et(t).some((e) => Vc[e.tagName.toLowerCase()]);
    }
    const Jc = Ne && Element.prototype.checkVisibility || function() {
      return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
    };
    function xt(t) {
      return et(t).some((e) => Jc.call(e));
    }
    const Tn = "input,select,textarea,button";
    function gi(t) {
      return et(t).some((e) => it(e, Tn));
    }
    const Cn = `${Tn},a[href],[tabindex]`;
    function vi(t) {
      return it(t, Cn);
    }
    function ct(t) {
      var e;
      return (e = kt(t)) == null ? void 0 : e.parentElement;
    }
    function An(t, e) {
      return et(t).filter((n) => it(n, e));
    }
    function it(t, e) {
      return et(t).some((n) => n.matches(e));
    }
    function Pn(t, e) {
      const n = [];
      for (; t = ct(t); )
        (!e || it(t, e)) && n.push(t);
      return n;
    }
    function ut(t, e) {
      t = kt(t);
      const n = t ? T(t.children) : [];
      return e ? An(n, e) : n;
    }
    function be(t, e) {
      return e ? et(t).indexOf(kt(e)) : ut(ct(t)).indexOf(t);
    }
    function an(t) {
      return t = kt(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
    }
    function xs(t) {
      if (an(t)) {
        const { hash: e, ownerDocument: n } = kt(t), o = decodeURIComponent(e).slice(1);
        return n.getElementById(o) || n.getElementsByName(o)[0];
      }
    }
    function Mt(t, e) {
      return Ss(t, sr(t, e));
    }
    function Rn(t, e) {
      return In(t, sr(t, e));
    }
    function Ss(t, e) {
      return kt(ar(t, kt(e), "querySelector"));
    }
    function In(t, e) {
      return et(ar(t, kt(e), "querySelectorAll"));
    }
    function sr(t, e = document) {
      return jt(e) || or(t).isContextSelector ? e : e.ownerDocument;
    }
    const Kc = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, Gc = /(\([^)]*\)|[^,])+/g, or = oe((t) => {
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
    }), Xc = /(\([^)]*\)|\S)*/, rr = oe((t) => {
      t = t.slice(1).trim();
      const [e] = t.match(Xc);
      return [e, t.slice(e.length + 1)];
    });
    function ar(t, e = document, n) {
      const o = or(t);
      if (!o.isContextSelector)
        return o.selector ? _s(e, n, o.selector) : t;
      t = "";
      const l = o.selectors.length === 1;
      for (let c of o.selectors) {
        let d, p = e;
        if (c[0] === "!" && ([d, c] = rr(c), p = e.parentElement.closest(d), !c && l) || p && c[0] === "-" && ([d, c] = rr(c), p = p.previousElementSibling, p = it(p, d) ? p : null, !c && l))
          return p;
        if (p) {
          if (l)
            return c[0] === "~" || c[0] === "+" ? (c = `:scope > :nth-child(${be(p) + 1}) ${c}`, p = p.parentElement) : c[0] === ">" && (c = `:scope ${c}`), _s(p, n, c);
          t += `${t ? "," : ""}${Yc(p)} ${c}`;
        }
      }
      return jt(e) || (e = e.ownerDocument), _s(e, n, t);
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
    function vt(...t) {
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
    function D(t, e, n) {
      return Ts(t).every(
        (o) => o.dispatchEvent(ln(e, !0, !0, n))
      );
    }
    function ln(t, e = !0, n = !1, o) {
      return ft(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: n, detail: o })), t;
    }
    function Os(t) {
      return t[0] = Ts(t[0]), ft(t[1]) && (t[1] = t[1].split(" ")), q(t[2]) && t.splice(2, 0, !1), t;
    }
    function Qc(t, e) {
      return (n) => {
        const o = t[0] === ">" ? In(t, n.currentTarget).reverse().find((l) => l.contains(n.target)) : n.target.closest(t);
        o && (n.current = o, e.call(this, n), delete n.current);
      };
    }
    function Zc(t) {
      return (e) => C(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function tu(t) {
      return function(e) {
        if (e.target === e.currentTarget || e.target === e.current)
          return t.call(null, e);
      };
    }
    function lr(t) {
      return t && "addEventListener" in t;
    }
    function eu(t) {
      return lr(t) ? t : kt(t);
    }
    function Ts(t) {
      return C(t) ? t.map(eu).filter(Boolean) : ft(t) ? In(t) : lr(t) ? [t] : et(t);
    }
    function le(t) {
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
      const l = et(t);
      for (const c of l)
        if (ft(e)) {
          if (e = bi(e), It(n))
            return getComputedStyle(c).getPropertyValue(e);
          c.style.setProperty(
            e,
            fe(n) && !nu[e] ? `${n}px` : n || _n(n) ? n : "",
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
    const bi = oe((t) => {
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
        et(t).map(
          (l) => new Promise((c, d) => {
            for (const m in e)
              w(l, m);
            const p = setTimeout(() => D(l, As), n);
            vt(
              l,
              [As, Ps],
              ({ type: m }) => {
                clearTimeout(p), ot(l, Cs), w(l, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
                }), m === Ps ? d() : c(l);
              },
              { self: !0 }
            ), X(l, Cs), w(l, {
              transitionProperty: Object.keys(e).map(bi).join(","),
              transitionDuration: `${n}ms`,
              transitionTimingFunction: o,
              ...e
            });
          })
        )
      );
    }
    const ht = {
      start: iu,
      async stop(t) {
        D(t, As), await Promise.resolve();
      },
      async cancel(t) {
        D(t, Ps), await Promise.resolve();
      },
      inProgress(t) {
        return H(t, Cs);
      }
    }, Bn = "uk-animation", cr = "animationend", wi = "animationcanceled";
    function ur(t, e, n = 200, o, l) {
      return Promise.all(
        et(t).map(
          (c) => new Promise((d, p) => {
            H(c, Bn) && D(c, wi);
            const m = [
              e,
              Bn,
              `${Bn}-${l ? "leave" : "enter"}`,
              o && `uk-transform-origin-${o}`,
              l && `${Bn}-reverse`
            ], y = setTimeout(() => D(c, cr), n);
            vt(
              c,
              [cr, wi],
              ({ type: $ }) => {
                clearTimeout(y), $ === wi ? p() : d(c), w(c, "animationDuration", ""), ot(c, m);
              },
              { self: !0 }
            ), w(c, "animationDuration", `${n}ms`), X(c, m);
          })
        )
      );
    }
    const _e = {
      in: ur,
      out(t, e, n, o) {
        return ur(t, e, n, o, !0);
      },
      inProgress(t) {
        return H(t, Bn);
      },
      cancel(t) {
        D(t, wi);
      }
    };
    function su(t) {
      if (document.readyState !== "loading") {
        t();
        return;
      }
      vt(document, "DOMContentLoaded", t);
    }
    function bt(t, ...e) {
      return e.some((n) => {
        var o;
        return ((o = t == null ? void 0 : t.tagName) == null ? void 0 : o.toLowerCase()) === n.toLowerCase();
      });
    }
    function hr(t) {
      return t = V(t), t.innerHTML = "", t;
    }
    function Ee(t, e) {
      return It(e) ? V(t).innerHTML : St(hr(t), e);
    }
    const ou = $i("prepend"), St = $i("append"), yi = $i("before"), ki = $i("after");
    function $i(t) {
      return function(e, n) {
        var o;
        const l = et(ft(n) ? je(n) : n);
        return (o = V(e)) == null || o[t](...l), dr(l);
      };
    }
    function Yt(t) {
      et(t).forEach((e) => e.remove());
    }
    function xi(t, e) {
      for (e = kt(yi(t, e)); e.firstElementChild; )
        e = e.firstElementChild;
      return St(e, t), e;
    }
    function Rs(t, e) {
      return et(
        et(t).map(
          (n) => n.hasChildNodes() ? xi(T(n.childNodes), e) : St(n, e)
        )
      );
    }
    function Fn(t) {
      et(t).map(ct).filter((e, n, o) => o.indexOf(e) === n).forEach((e) => e.replaceWith(...e.childNodes));
    }
    const ru = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function je(t) {
      const e = ru.exec(t);
      if (e)
        return document.createElement(e[1]);
      const n = document.createElement("template");
      return n.innerHTML = t.trim(), dr(n.content.childNodes);
    }
    function dr(t) {
      return t.length > 1 ? t : t[0];
    }
    function Oe(t, e) {
      if (Lt(t))
        for (e(t), t = t.firstElementChild; t; )
          Oe(t, e), t = t.nextElementSibling;
    }
    function V(t, e) {
      return fr(t) ? kt(je(t)) : Ss(t, e);
    }
    function pt(t, e) {
      return fr(t) ? et(je(t)) : In(t, e);
    }
    function fr(t) {
      return ft(t) && v(t.trim(), "<");
    }
    const Le = {
      width: ["left", "right"],
      height: ["top", "bottom"]
    };
    function N(t) {
      const e = Lt(t) ? kt(t).getBoundingClientRect() : { height: qt(t), width: Si(t), top: 0, left: 0 };
      return {
        height: e.height,
        width: e.width,
        top: e.top,
        left: e.left,
        bottom: e.top + e.height,
        right: e.left + e.width
      };
    }
    function tt(t, e) {
      e && w(t, { left: 0, top: 0 });
      const n = N(t);
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
    function Is(t) {
      let { top: e, left: n } = tt(t);
      const {
        ownerDocument: { body: o, documentElement: l },
        offsetParent: c
      } = kt(t);
      let d = c || l;
      for (; d && (d === o || d === l) && w(d, "position") === "static"; )
        d = d.parentNode;
      if (Lt(d)) {
        const p = tt(d);
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
    const qt = pr("height"), Si = pr("width");
    function pr(t) {
      const e = b(t);
      return (n, o) => {
        if (It(o)) {
          if (Pt(n))
            return n[`inner${e}`];
          if (jt(n)) {
            const l = n.documentElement;
            return Math.max(l[`offset${e}`], l[`scroll${e}`]);
          }
          return n = kt(n), o = w(n, t), o = o === "auto" ? n[`offset${e}`] : G(o) || 0, o - cn(n, t);
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
    function _i(t) {
      for (const e in Le)
        for (const n in Le[e])
          if (Le[e][n] === t)
            return Le[e][1 - n];
      return t;
    }
    function Rt(t, e = "width", n = window, o = !1) {
      return ft(t) ? Be(lu(t), (l) => {
        const c = uu(l);
        return c ? hu(
          c === "vh" ? du() : c === "vw" ? Si(Re(n)) : o ? n[`offset${b(e)}`] : N(n)[e],
          l
        ) : l;
      }) : G(t);
    }
    const au = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, lu = oe((t) => t.toString().replace(/\s/g, "").match(au) || []), cu = /(?:v[hw]|%)$/, uu = oe((t) => (t.match(cu) || [])[0]);
    function hu(t, e) {
      return t * G(e) / 100;
    }
    let Dn, un;
    function du() {
      return Dn || (un || (un = V("<div>"), w(un, {
        height: "100vh",
        position: "fixed"
      }), W(window, "resize", () => Dn = null)), St(document.body, un), Dn = un.clientHeight, Yt(un), Dn);
    }
    const Te = { read: fu, write: pu, clear: mu, flush: mr }, Ei = [], Oi = [];
    function fu(t) {
      return Ei.push(t), Fs(), t;
    }
    function pu(t) {
      return Oi.push(t), Fs(), t;
    }
    function mu(t) {
      vr(Ei, t), vr(Oi, t);
    }
    let Bs = !1;
    function mr() {
      gr(Ei), gr(Oi.splice(0)), Bs = !1, (Ei.length || Oi.length) && Fs();
    }
    function Fs() {
      Bs || (Bs = !0, queueMicrotask(mr));
    }
    function gr(t) {
      let e;
      for (; e = t.shift(); )
        try {
          e();
        } catch (n) {
          console.error(n);
        }
    }
    function vr(t, e) {
      const n = t.indexOf(e);
      return ~n && t.splice(n, 1);
    }
    class br {
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
        return di(m, n) ? !1 : [
          [
            { x: o, y: c },
            { x: l, y: d }
          ],
          [
            { x: o, y: d },
            { x: l, y: c }
          ]
        ].some((O) => {
          const R = gu(y, O);
          return R && di(R, n);
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
    function wr(t, e, n = {}, { intersecting: o = !0 } = {}) {
      const l = new IntersectionObserver(
        o ? (c, d) => {
          c.some((p) => p.isIntersecting) && e(c, d);
        } : e,
        n
      );
      for (const c of et(t))
        l.observe(c);
      return l;
    }
    const vu = Ne && window.ResizeObserver;
    function jn(t, e, n = { box: "border-box" }) {
      if (vu)
        return yr(ResizeObserver, t, e, n);
      const o = [W(window, "load resize", e), W(document, "loadedmetadata load", e, !0)];
      return { disconnect: () => o.map((l) => l()) };
    }
    function Ns(t) {
      return { disconnect: W([window, window.visualViewport], "resize", t) };
    }
    function Ds(t, e, n) {
      return yr(MutationObserver, t, e, n);
    }
    function yr(t, e, n, o) {
      const l = new t(n);
      for (const c of et(e))
        l.observe(c, o);
      return l;
    }
    function js(t) {
      Ai(t) && Ls(t, { func: "playVideo", method: "play" }), Ci(t) && t.play().catch(rt);
    }
    function Ti(t) {
      Ai(t) && Ls(t, { func: "pauseVideo", method: "pause" }), Ci(t) && t.pause();
    }
    function kr(t) {
      Ai(t) && Ls(t, { func: "mute", method: "setVolume", value: 0 }), Ci(t) && (t.muted = !0);
    }
    function $r(t) {
      return Ci(t) || Ai(t);
    }
    function Ci(t) {
      return bt(t, "video");
    }
    function Ai(t) {
      return bt(t, "iframe") && (xr(t) || Sr(t));
    }
    function xr(t) {
      return !!t.src.match(
        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
      );
    }
    function Sr(t) {
      return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function Ls(t, e) {
      await wu(t), _r(t, e);
    }
    function _r(t, e) {
      t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
    }
    const Us = "_ukPlayer";
    let bu = 0;
    function wu(t) {
      if (t[Us])
        return t[Us];
      const e = xr(t), n = Sr(t), o = ++bu;
      let l;
      return t[Us] = new Promise((c) => {
        e && vt(t, "load", () => {
          const d = () => _r(t, { event: "listening", id: o });
          l = setInterval(d, 100), d();
        }), vt(window, "message", c, !1, ({ data: d }) => {
          try {
            return d = JSON.parse(d), e && (d == null ? void 0 : d.id) === o && d.event === "onReady" || n && Number(d == null ? void 0 : d.player_id) === o;
          } catch {
          }
        }), t.src = `${t.src}${S(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${o}`}`;
      }).then(() => clearInterval(l));
    }
    function yu(t, e = 0, n = 0) {
      return xt(t) ? hi(
        ...Me(t).map((o) => {
          const { top: l, left: c, bottom: d, right: p } = Qt(o);
          return {
            top: l - e,
            left: c - n,
            bottom: d + e,
            right: p + n
          };
        }).concat(tt(t))
      ) : !1;
    }
    function Er(t, { offset: e = 0 } = {}) {
      const n = xt(t) ? Ue(t, !1, ["hidden"]) : [];
      return n.reduce(
        (d, p, m) => {
          const { scrollTop: y, scrollHeight: $, offsetHeight: O } = p, R = Qt(p), B = $ - R.height, { height: U, top: Q } = n[m - 1] ? Qt(n[m - 1]) : tt(t);
          let st = Math.ceil(Q - R.top - e + y);
          return e > 0 && O < U + e ? st += e : e = 0, st > B ? (e -= st - B, st = B) : st < 0 && (e -= st, st = 0), () => o(p, st - y, t, B).then(d);
        },
        () => Promise.resolve()
      )();
      function o(d, p, m, y) {
        return new Promise(($) => {
          const O = d.scrollTop, R = l(Math.abs(p)), B = Date.now(), U = Hs(d) === d, Q = tt(m).top + (U ? 0 : O);
          let st = 0, pe = 15;
          (function bn() {
            const wn = c(Ut((Date.now() - B) / R));
            let me = 0;
            n[0] === d && O + p < y && (me = tt(m).top + (U ? 0 : d.scrollTop) - Q - N(Ms(m)).height), w(d, "scrollBehavior") !== "auto" && w(d, "scrollBehavior", "auto"), d.scrollTop = O + (p + me) * wn, w(d, "scrollBehavior", ""), wn === 1 && (st === me || !pe--) ? $() : (st = me, requestAnimationFrame(bn));
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
    function Pi(t, e = 0, n = 0) {
      if (!xt(t))
        return 0;
      const o = Ce(t, !0), { scrollHeight: l, scrollTop: c } = o, { height: d } = Qt(o), p = l - d, m = Nn(t)[0] - Nn(o)[0], y = Math.max(0, m - d + e), $ = Math.min(p, m + t.offsetHeight - n);
      return y < $ ? Ut((c - y) / ($ - y)) : 1;
    }
    function Ue(t, e = !1, n = []) {
      const o = Hs(t);
      let l = Pn(t).reverse();
      l = l.slice(l.indexOf(o) + 1);
      const c = P(l, (d) => w(d, "position") === "fixed");
      return ~c && (l = l.slice(c)), [o].concat(
        l.filter(
          (d) => w(d, "overflow").split(" ").some((p) => S(["auto", "scroll", ...n], p)) && (!e || d.scrollHeight > Qt(d).height)
        )
      ).reverse();
    }
    function Ce(...t) {
      return Ue(...t)[0];
    }
    function Me(t) {
      return Ue(t, !1, ["hidden", "clip"]);
    }
    function Qt(t) {
      const e = Re(t), n = Hs(t), o = !yt(t) || t.contains(n);
      if (o && e.visualViewport) {
        let { height: m, width: y, scale: $, pageTop: O, pageLeft: R } = e.visualViewport;
        return m = Math.round(m * $), y = Math.round(y * $), { height: m, width: y, top: O, left: R, bottom: O + m, right: R + y };
      }
      let l = tt(o ? e : t);
      if (w(t, "display") === "inline")
        return l;
      const { body: c, documentElement: d } = e.document, p = o ? n === d || // In quirks mode the scrolling element is body, even though the viewport is html
      n.clientHeight < c.clientHeight ? n : c : t;
      for (let [m, y, $, O] of [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
      ]) {
        const R = l[m] % 1;
        l[$] += G(w(p, `border-${$}-width`)), l[m] = l[y] = p[`client${b(m)}`] - (R ? R < 0.5 ? -R : 1 - R : 0), l[O] = l[m] + l[$];
      }
      return l;
    }
    function Ms(t) {
      const { left: e, width: n, top: o } = N(t);
      for (const l of o ? [0, o] : [0]) {
        let c;
        for (const d of Re(t).document.elementsFromPoint(e + n / 2, l))
          !d.contains(t) && // If e.g. Offcanvas is not yet closed
          !H(d, "uk-togglable-leave") && (zs(d, "fixed") && Or(
            Pn(t).reverse().find(
              (p) => !p.contains(d) && !zs(p, "static")
            )
          ) < Or(d) || zs(d, "sticky") && ct(d).contains(t)) && (!c || N(c).height < N(d).height) && (c = d);
        if (c)
          return c;
      }
    }
    function Or(t) {
      return G(w(t, "zIndex"));
    }
    function zs(t, e) {
      return w(t, "position") === e;
    }
    function Hs(t) {
      return Re(t).document.scrollingElement;
    }
    const Zt = [
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
      }, C(e) || (e = [e, e]), tt(t, Cr(t, e, n));
    }
    function Cr(t, e, n) {
      const o = Ar(t, e, n), { boundary: l, viewportOffset: c = 0, placement: d } = n;
      let p = o;
      for (const [m, [y, , $, O]] of Object.entries(Zt)) {
        const R = ku(t, e[m], c, l, m);
        if (Ri(o, R, m))
          continue;
        let B = 0;
        if (d[m] === "flip") {
          const U = n.attach.target[m];
          if (U === O && o[O] <= R[O] || U === $ && o[$] >= R[$])
            continue;
          B = xu(t, e, n, m)[$] - o[$];
          const Q = $u(t, e[m], c, m);
          if (!Ri(qs(o, B, m), Q, m)) {
            if (Ri(o, Q, m))
              continue;
            if (n.recursion)
              return !1;
            const st = Su(t, e, n);
            if (st && Ri(st, Q, 1 - m))
              return st;
            continue;
          }
        } else if (d[m] === "shift") {
          const U = tt(e[m]), { offset: Q } = n;
          B = Ut(
            Ut(o[$], R[$], R[O] - o[y]),
            U[$] - o[y] + Q[m],
            U[O] - Q[m]
          ) - o[$];
        }
        p = qs(p, B, m);
      }
      return p;
    }
    function Ar(t, e, n) {
      let { attach: o, offset: l } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...n.attach
        },
        offset: [0, 0],
        ...n
      }, c = tt(t);
      for (const [d, [p, , m, y]] of Object.entries(Zt)) {
        const $ = o.target[d] === o.element[d] ? Qt(e[d]) : tt(e[d]);
        c = qs(
          c,
          $[m] - c[m] + Pr(o.target[d], y, $[p]) - Pr(o.element[d], y, c[p]) + +l[d],
          d
        );
      }
      return c;
    }
    function qs(t, e, n) {
      const [, o, l, c] = Zt[n], d = { ...t };
      return d[l] = t[o] = t[l] + e, d[c] += e, d;
    }
    function Pr(t, e, n) {
      return t === "center" ? n / 2 : t === e ? n : 0;
    }
    function ku(t, e, n, o, l) {
      let c = Ir(...Rr(t, e).map(Qt));
      return n && (c[Zt[l][2]] += n, c[Zt[l][3]] -= n), o && (c = Ir(
        c,
        tt(C(o) ? o[l] : o)
      )), c;
    }
    function $u(t, e, n, o) {
      const [l, c, d, p] = Zt[o], [m] = Rr(t, e), y = Qt(m);
      return ["auto", "scroll"].includes(w(m, `overflow-${c}`)) && (y[d] -= m[`scroll${b(d)}`], y[p] = y[d] + m[`scroll${b(l)}`]), y[d] += n, y[p] -= n, y;
    }
    function Rr(t, e) {
      return Me(e).filter((n) => n.contains(t));
    }
    function Ir(...t) {
      let e = {};
      for (const n of t)
        for (const [, , o, l] of Zt)
          e[o] = Math.max(e[o] || 0, n[o]), e[l] = Math.min(...[e[l], n[l]].filter(Boolean));
      return e;
    }
    function Ri(t, e, n) {
      const [, , o, l] = Zt[n];
      return t[o] >= e[o] && t[l] <= e[l];
    }
    function xu(t, e, { offset: n, attach: o }, l) {
      return Ar(t, e, {
        attach: {
          element: Br(o.element, l),
          target: Br(o.target, l)
        },
        offset: _u(n, l)
      });
    }
    function Su(t, e, n) {
      return Cr(t, e, {
        ...n,
        attach: {
          element: n.attach.element.map(Fr).reverse(),
          target: n.attach.target.map(Fr).reverse()
        },
        offset: n.offset.reverse(),
        placement: n.placement.reverse(),
        recursion: !0
      });
    }
    function Br(t, e) {
      const n = [...t], o = Zt[e].indexOf(t[e]);
      return ~o && (n[e] = Zt[e][1 - o % 2 + 2]), n;
    }
    function Fr(t) {
      for (let e = 0; e < Zt.length; e++) {
        const n = Zt[e].indexOf(t);
        if (~n)
          return Zt[1 - e][n % 2 + 2];
      }
    }
    function _u(t, e) {
      return t = [...t], t[e] *= -1, t;
    }
    var Eu = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $: V,
      $$: pt,
      Animation: _e,
      Dimensions: ks,
      MouseTracker: br,
      Transition: ht,
      addClass: X,
      after: ki,
      append: St,
      apply: Oe,
      assign: M,
      attr: F,
      before: yi,
      boxModelAdjust: cn,
      camelize: k,
      children: ut,
      clamp: Ut,
      createEvent: ln,
      css: w,
      data: Bt,
      dimensions: N,
      each: nn,
      empty: hr,
      endsWith: A,
      escape: Es,
      fastdom: Te,
      filter: An,
      find: Ss,
      findAll: In,
      findIndex: P,
      flipPosition: _i,
      fragment: je,
      getCoveringElement: Ms,
      getEventPos: we,
      getIndex: Xt,
      getTargetedElement: xs,
      hasAttr: $e,
      hasClass: H,
      hasOwn: u,
      hasTouch: sn,
      height: qt,
      html: Ee,
      hyphenate: f,
      inBrowser: Ne,
      includes: S,
      index: be,
      intersectRect: hi,
      isArray: C,
      isBoolean: Ht,
      isDocument: jt,
      isElement: Lt,
      isEmpty: ui,
      isEqual: En,
      isFocusable: vi,
      isFunction: q,
      isInView: yu,
      isInput: gi,
      isNode: yt,
      isNumber: _n,
      isNumeric: fe,
      isObject: z,
      isPlainObject: Y,
      isRtl: Ot,
      isSameSiteAnchor: an,
      isString: ft,
      isTag: bt,
      isTouch: le,
      isUndefined: It,
      isVideo: $r,
      isVisible: xt,
      isVoidElement: $s,
      isWindow: Pt,
      last: Ie,
      matches: it,
      memoize: oe,
      mute: kr,
      noop: rt,
      observeIntersection: wr,
      observeMutation: Ds,
      observeResize: jn,
      observeViewportResize: Ns,
      off: Se,
      offset: tt,
      offsetPosition: Nn,
      offsetViewport: Qt,
      on: W,
      once: vt,
      overflowParents: Me,
      parent: ct,
      parents: Pn,
      pause: Ti,
      pick: ws,
      play: js,
      pointInRect: di,
      pointerCancel: mi,
      pointerDown: re,
      pointerEnter: De,
      pointerLeave: rn,
      pointerMove: pi,
      pointerUp: xe,
      position: Is,
      positionAt: Tr,
      prepend: ou,
      propName: bi,
      query: Mt,
      queryAll: Rn,
      ready: su,
      remove: Yt,
      removeAttr: On,
      removeClass: ot,
      replaceClass: fi,
      scrollIntoView: Er,
      scrollParent: Ce,
      scrollParents: Ue,
      scrolledOver: Pi,
      selFocusable: Cn,
      selInput: Tn,
      sortBy: er,
      startsWith: v,
      sumBy: Be,
      swap: bs,
      toArray: T,
      toBoolean: vs,
      toEventTargets: Ts,
      toFloat: G,
      toNode: kt,
      toNodes: et,
      toNumber: ve,
      toPx: Rt,
      toWindow: Re,
      toggleClass: $t,
      trigger: D,
      ucfirst: b,
      uniqueBy: nr,
      unwrap: Fn,
      width: Si,
      wrapAll: xi,
      wrapInner: Rs
    }), Wt = {
      connected() {
        X(this.$el, this.$options.id);
      }
    };
    const Ou = ["days", "hours", "minutes", "seconds"];
    var Tu = {
      mixins: [Wt],
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
          this.stop(), this.update(), this.timer || (D(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3));
        },
        stop() {
          this.timer && (clearInterval(this.timer), D(this.$el, "countdownstop"), this.timer = null);
        },
        update() {
          const t = Cu(this.date);
          t.total || (this.stop(), this.end || (D(this.$el, "countdownend"), this.end = !0));
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
    const Tt = {};
    Tt.events = Tt.watch = Tt.observe = Tt.created = Tt.beforeConnect = Tt.connected = Tt.beforeDisconnect = Tt.disconnected = Tt.destroy = Ws, Tt.args = function(t, e) {
      return e !== !1 && Ws(e || t);
    }, Tt.update = function(t, e) {
      return er(
        Ws(t, q(e) ? { read: e } : e),
        "order"
      );
    }, Tt.props = function(t, e) {
      if (C(e)) {
        const n = {};
        for (const o of e)
          n[o] = String;
        e = n;
      }
      return Tt.methods(t, e);
    }, Tt.computed = Tt.methods = function(t, e) {
      return e ? t ? { ...t, ...e } : e : t;
    }, Tt.i18n = Tt.data = function(t, e, n) {
      return n ? Nr(t, e, n) : e ? t ? function(o) {
        return Nr(t, e, o);
      } : e : t;
    };
    function Nr(t, e, n) {
      return Tt.computed(
        q(t) ? t.call(n, n) : t,
        q(e) ? e.call(n, n) : e
      );
    }
    function Ws(t, e) {
      return t = t && !C(t) ? [t] : t, e ? t ? t.concat(e) : C(e) ? e : [e] : t;
    }
    function Au(t, e) {
      return It(e) ? t : e;
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
        o[c] = (Tt[c] || Au)(t[c], e[c], n);
      }
      return o;
    }
    function hn(t, e = []) {
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
      return t === Boolean ? vs(e) : t === Number ? ve(e) : t === "list" ? Ru(e) : t === Object && ft(e) ? hn(e) : t ? t(e) : e;
    }
    const Pu = /,(?![^(]*\))/;
    function Ru(t) {
      return C(t) ? t : ft(t) ? t.split(Pu).map((e) => fe(e) ? ve(e) : vs(e.trim())) : [t];
    }
    function Iu(t) {
      t._data = {}, t._updates = [...t.$options.update || []], t._disconnect.push(() => t._updates = t._data = null);
    }
    function Bu(t, e) {
      t._updates.unshift(e);
    }
    function Un(t, e = "update") {
      t._connected && t._updates.length && (t._queued || (t._queued = /* @__PURE__ */ new Set(), Te.read(() => {
        t._connected && Fu(t, t._queued), t._queued = null;
      })), t._queued.add(e.type || e));
    }
    function Fu(t, e) {
      for (const { read: n, write: o, events: l = [] } of t._updates) {
        if (!e.has("update") && !l.some((d) => e.has(d)))
          continue;
        let c;
        n && (c = n.call(t, t._data, e), c && Y(c) && M(t._data, c)), o && c !== !1 && Te.write(() => {
          t._connected && o.call(t, t._data, e);
        });
      }
    }
    function ae(t) {
      return zn(jn, t, "resize");
    }
    function dn(t) {
      return zn(wr, t);
    }
    function Ii(t) {
      return zn(Ds, t);
    }
    function Bi(t = {}) {
      return dn({
        handler: function(e, n) {
          const { targets: o = this.$el, preload: l = 5 } = t;
          for (const c of et(q(o) ? o(this) : o))
            pt('[loading="lazy"]', c).slice(0, l - 1).forEach((d) => On(d, "loading"));
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
    function Dr(t) {
      return {
        observe(e, n) {
          return {
            observe: rt,
            unobserve: rt,
            disconnect: W(e, re, n, { passive: !0 })
          };
        },
        handler(e) {
          if (!le(e))
            return;
          const n = we(e), o = "tagName" in e.target ? e.target : ct(e.target);
          vt(document, `${xe} ${mi} scroll`, (l) => {
            const { x: c, y: d } = we(l);
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
    function Du(t) {
      return et(t).map((e) => {
        const { ownerDocument: n } = e, o = Ce(e, !0);
        return o === n.scrollingElement ? n : o;
      });
    }
    var jr = {
      props: {
        margin: String,
        firstColumn: Boolean
      },
      data: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column"
      },
      observe: [
        Ii({
          options: {
            childList: !0
          }
        }),
        Ii({
          options: {
            attributes: !0,
            attributeFilter: ["style"]
          },
          target: ({ $el: t }) => [t, ...ut(t)]
        }),
        ae({
          target: ({ $el: t }) => [t, ...ut(t)]
        })
      ],
      update: {
        read() {
          return {
            rows: Ks(ut(this.$el))
          };
        },
        write({ rows: t }) {
          for (const e of t)
            for (const n of e)
              $t(n, this.margin, t[0] !== e), $t(n, this.firstColumn, e[Ot ? e.length - 1 : 0] === n);
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
      let o = ut(e);
      const l = o.map((B) => Lr(B, !0)), c = { ...w(e, ["height", "padding"]), display: "block" }, d = o.concat(e);
      await Promise.all(d.map(ht.cancel)), w(d, "transitionProperty", "none"), await t(), o = o.concat(ut(e).filter((B) => !S(o, B))), await Promise.resolve(), w(d, "transitionProperty", "");
      const p = F(e, "style"), m = w(e, ["height", "padding"]), [y, $] = Lu(e, o, l), O = o.map((B) => ({ style: F(B, "style") }));
      o.forEach((B, U) => $[U] && w(B, $[U])), w(e, c), D(e, "scroll"), await Xs();
      const R = o.map((B, U) => ct(B) === e && ht.start(B, y[U], n, "ease")).concat(ht.start(e, m, n, "ease"));
      try {
        await Promise.all(R), o.forEach((B, U) => {
          F(B, O[U]), ct(B) === e && w(B, "display", y[U].opacity === 0 ? "none" : "");
        }), F(e, "style", p);
      } catch {
        F(o, "style", ""), Uu(e, c);
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
        ...Ur(t)
      } : !1;
    }
    function Lu(t, e, n) {
      const o = e.map(
        (c, d) => ct(c) && d in n ? n[d] ? xt(c) ? Ur(c) : { opacity: 0 } : { opacity: xt(c) ? 1 : 0 } : !1
      ), l = o.map((c, d) => {
        const p = ct(e[d]) === t && (n[d] || Lr(e[d]));
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
    function Uu(t, e) {
      for (const n in e)
        w(t, n, "");
    }
    function Ur(t) {
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
    function Mr(t, e, n, o = 0) {
      const l = Fi(e, !0), c = { opacity: 1 }, d = { opacity: 0 }, p = ($) => () => l === Fi(e) ? $() : Promise.reject(), m = p(async () => {
        X(e, Ys), await Promise.all(
          Hr(e).map(
            ($, O) => new Promise(
              (R) => setTimeout(
                () => ht.start($, d, n / 2, "ease").then(
                  R
                ),
                O * o
              )
            )
          )
        ), ot(e, Ys);
      }), y = p(async () => {
        const $ = qt(e);
        X(e, Qs), t(), w(ut(e), { opacity: 0 }), await Xs();
        const O = ut(e), R = qt(e);
        w(e, "alignContent", "flex-start"), qt(e, $);
        const B = Hr(e);
        w(O, d);
        const U = B.map(async (Q, st) => {
          await Mu(st * o), await ht.start(Q, c, n / 2, "ease");
        });
        $ !== R && U.push(
          ht.start(
            e,
            { height: R },
            n / 2 + B.length * o,
            "ease"
          )
        ), await Promise.all(U).then(() => {
          ot(e, Qs), l === Fi(e) && (w(e, { height: "", alignContent: "" }), w(O, { opacity: "" }), delete e.dataset.transition);
        });
      });
      return H(e, Ys) ? zr(e).then(y) : H(e, Qs) ? zr(e).then(m).then(y) : m().then(y);
    }
    function Fi(t, e) {
      return e && (t.dataset.transition = 1 + Fi(t)), ve(t.dataset.transition) || 0;
    }
    function zr(t) {
      return Promise.all(
        ut(t).filter(ht.inProgress).map(
          (e) => new Promise((n) => vt(e, "transitionend transitioncanceled", n))
        )
      );
    }
    function Hr(t) {
      return Ks(ut(t)).flat().filter(xt);
    }
    function Mu(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    var qr = {
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
          return (n === "fade" ? Mr : n === "delayed-fade" ? (...l) => Mr(...l, 40) : n ? ju : () => (t(), Promise.resolve()))(t, e, this.duration).catch(rt);
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
      mixins: [qr],
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
        children: ({ target: t }, e) => pt(`${t} > *`, e),
        toggles: ({ attrItem: t }, e) => pt(`[${t}],[data-${t}]`, e)
      },
      watch: {
        toggles(t) {
          this.updateState();
          const e = pt(this.selActive, this.$el);
          for (const n of t) {
            this.selActive !== !1 && $t(n, this.cls, S(e, n));
            const o = Ju(n);
            bt(o, "a") && F(o, "role", "button");
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
          const e = this.getState(), n = Vr(t, this.attrItem, this.getState());
          Hu(e, n) || this.setState(n);
        },
        getState() {
          return this.toggles.filter((t) => H(t, this.cls)).reduce((t, e) => Vr(e, this.attrItem, t), {
            filter: { "": "" },
            sort: []
          });
        },
        async setState(t, e = !0) {
          t = { filter: { "": "" }, sort: [], ...t }, D(this.$el, "beforeFilter", [this, t]);
          for (const n of this.toggles)
            $t(n, this.cls, Wu(n, this.attrItem, t));
          await Promise.all(
            pt(this.target, this.$el).map((n) => {
              const o = () => qu(t, n, ut(n));
              return e ? this.animate(o, n) : o();
            })
          ), D(this.$el, "afterFilter", [this]);
        },
        updateState() {
          Te.write(() => this.setState(this.getState(), !1));
        }
      }
    };
    function Wr(t, e) {
      return hn(Bt(t, e), ["filter"]);
    }
    function Hu(t, e) {
      return ["filter", "sort"].every((n) => En(t[n], e[n]));
    }
    function qu(t, e, n) {
      for (const c of n)
        w(
          c,
          "display",
          Object.values(t.filter).every((d) => !d || it(c, d)) ? "" : "none"
        );
      const [o, l] = t.sort;
      if (o) {
        const c = Vu(n, o, l);
        En(c, n) || St(e, c);
      }
    }
    function Vr(t, e, n) {
      const { filter: o, group: l, sort: c, order: d = "asc" } = Wr(t, e);
      return (o || It(c)) && (l ? o ? (delete n.filter[""], n.filter[l] = o) : (delete n.filter[l], (ui(n.filter) || "" in n.filter) && (n.filter = { "": o || "" })) : n.filter = { "": o || "" }), It(c) || (n.sort = [c, d]), n;
    }
    function Wu(t, e, { filter: n = { "": "" }, sort: [o, l] }) {
      const { filter: c = "", group: d = "", sort: p, order: m = "asc" } = Wr(t, e);
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
    function Jr(t) {
      const e = W(
        t,
        "touchstart",
        (o) => {
          if (o.targetTouches.length !== 1 || it(o.target, 'input[type="range"'))
            return;
          let l = we(o).y;
          const c = W(
            t,
            "touchmove",
            (d) => {
              const p = we(d).y;
              p !== l && (l = p, Ue(d.target).some((m) => {
                if (!t.contains(m))
                  return !1;
                let { scrollHeight: y, clientHeight: $ } = m;
                return $ < y;
              }) || d.preventDefault());
            },
            { passive: !1 }
          );
          vt(t, "scroll touchend touchcanel", c, { capture: !0 });
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
        paddingRight: Si(window) - n.clientWidth || ""
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
              et(t).map((o) => {
                const l = Ht(e) ? e : !this.isToggled(o);
                if (!D(o, `before${l ? "show" : "hide"}`, [this]))
                  return Promise.reject();
                const c = (q(n) ? n : n === !1 || !this.hasAnimation ? Ku : this.hasTransition ? Gu : Xu)(o, l, this), d = l ? this.clsEnter : this.clsLeave;
                X(o, d), D(o, l ? "show" : "hide", [this]);
                const p = () => {
                  ot(o, d), D(o, l ? "shown" : "hidden", [this]);
                };
                return c ? c.then(p, () => (ot(o, d), Promise.reject())) : p();
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
          this.cls ? (n = S(this.cls, " ") || e !== H(t, this.cls), n && $t(t, this.cls, S(this.cls, " ") ? void 0 : e)) : (n = e === t.hidden, n && (t.hidden = !e)), n && D(t, "toggled", [e, this]), pt("[autofocus]", t).some((o) => xt(o) ? o.focus() || !0 : o.blur());
        }
      }
    };
    function Ku(t, e, { _toggle: n }) {
      return _e.cancel(t), ht.cancel(t), n(t, e);
    }
    async function Gu(t, e, { animation: n, duration: o, velocity: l, transition: c, _toggle: d }) {
      var p;
      const [m = "reveal", y = "top"] = ((p = n[0]) == null ? void 0 : p.split("-")) || [], $ = [
        ["left", "right"],
        ["top", "bottom"]
      ], O = $[S($[0], y) ? 0 : 1], R = O[1] === y, U = ["width", "height"][$.indexOf(O)], Q = `margin-${O[0]}`, st = `margin-${y}`;
      let pe = N(t)[U];
      const bn = ht.inProgress(t);
      await ht.cancel(t), e && d(t, !0);
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
          st
        ].map((fl) => [fl, t.style[fl]])
      ), me = N(t), bo = G(w(t, Q)), ul = G(w(t, st)), Ge = me[U] + ul;
      !bn && !e && (pe += ul);
      const [Gi] = Rs(t, "<div>");
      w(Gi, {
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
          st
        ])
      }), w(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [st]: 0,
        width: me.width,
        height: me.height,
        overflow: "hidden",
        [U]: pe
      });
      const hl = pe / Ge;
      o = (l * Ge + o) * (e ? 1 - hl : hl);
      const dl = { [U]: e ? Ge : 0 };
      R && (w(t, Q, Ge - pe + bo), dl[Q] = e ? bo : Ge + bo), !R ^ m === "reveal" && (w(Gi, Q, -Ge + pe), ht.start(Gi, { [Q]: e ? 0 : -Ge }, o, c));
      try {
        await ht.start(t, dl, o, c);
      } finally {
        w(t, wn), Fn(Gi.firstChild), e || d(t, !1);
      }
    }
    function Xu(t, e, n) {
      const { animation: o, duration: l, _toggle: c } = n;
      return e ? (c(t, !0), _e.in(t, o[0], l, n.origin)) : _e.out(t, o[1] || o[0], l, n.origin).then(
        () => c(t, !1)
      );
    }
    const Vt = [];
    var to = {
      mixins: [Wt, Hn, ze],
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
        S(Vt, this) && this.toggleElement(this.$el, !1, !1);
      },
      events: [
        {
          name: "click",
          delegate: ({ selClose: t }) => `${t},a[href*="#"]`,
          handler(t) {
            const { current: e, defaultPrevented: n } = t, { hash: o } = e;
            !n && o && an(e) && !this.$el.contains(V(o)) ? this.hide() : it(e, this.selClose) && (t.preventDefault(), this.hide());
          }
        },
        {
          name: "toggle",
          self: !0,
          handler(t) {
            t.defaultPrevented || (t.preventDefault(), this.isToggled() === S(Vt, this) && this.toggle());
          }
        },
        {
          name: "beforeshow",
          self: !0,
          handler(t) {
            if (S(Vt, this))
              return !1;
            !this.stack && Vt.length ? (Promise.all(Vt.map((e) => e.hide())).then(this.show), t.preventDefault()) : Vt.push(this);
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            this.stack && w(this.$el, "zIndex", G(w(this.$el, "zIndex")) + Vt.length);
            const t = [
              this.overlay && Qu(this),
              this.overlay && Jr(this.$el),
              this.bgClose && Zu(this),
              this.escClose && th(this)
            ];
            vt(
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
            vi(this.$el) || F(this.$el, "tabindex", "-1"), it(this.$el, ":focus-within") || this.$el.focus();
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            S(Vt, this) && Vt.splice(Vt.indexOf(this), 1), w(this.$el, "zIndex", ""), Vt.some((t) => t.clsPage === this.clsPage) || ot(document.documentElement, this.clsPage);
          }
        }
      ],
      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },
        show() {
          return this.container && ct(this.$el) !== this.container ? (St(this.container, this.$el), new Promise(
            (t) => requestAnimationFrame(() => this.show().then(t))
          )) : this.toggleElement(this.$el, !0, Kr);
        },
        hide() {
          return this.toggleElement(this.$el, !1, Kr);
        }
      }
    };
    function Kr(t, e, { transitionElement: n, _toggle: o }) {
      return new Promise(
        (l, c) => vt(t, "show hide", () => {
          var d;
          (d = t._reject) == null || d.call(t), t._reject = c, o(t, e);
          const p = vt(
            n,
            "transitionstart",
            () => {
              vt(n, "transitionend transitioncancel", l, {
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
        Ie(Vt) === t && !t.$el.contains(e.target) && t.$el.focus();
      });
    }
    function Zu(t) {
      return W(document, re, ({ target: e }) => {
        Ie(Vt) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || vt(
          document,
          `${xe} ${mi} scroll`,
          ({ defaultPrevented: n, type: o, target: l }) => {
            !n && o === xe && e === l && t.hide();
          },
          !0
        );
      });
    }
    function th(t) {
      return W(document, "keydown", (e) => {
        e.keyCode === 27 && Ie(Vt) === t && t.hide();
      });
    }
    var eo = {
      slide: {
        show(t) {
          return [{ transform: wt(t * -100) }, { transform: wt() }];
        },
        percent(t) {
          return qn(t);
        },
        translate(t, e) {
          return [
            { transform: wt(e * -100 * t) },
            { transform: wt(e * 100 * (1 - t)) }
          ];
        }
      }
    };
    function qn(t) {
      return Math.abs(new DOMMatrix(w(t, "transform")).m41 / t.offsetWidth);
    }
    function wt(t = 0, e = "%") {
      return t += t ? e : "", `translate3d(${t}, 0, 0)`;
    }
    function fn(t) {
      return `scale3d(${t}, ${t}, 1)`;
    }
    function eh(t, e, n, { animation: o, easing: l }) {
      const { percent: c, translate: d, show: p = rt } = o, m = p(n), { promise: y, resolve: $ } = Gr();
      return {
        dir: n,
        show(O, R = 0, B) {
          const U = B ? "linear" : l;
          return O -= Math.round(O * Ut(R, -1, 1)), this.translate(R), He(e, "itemin", { percent: R, duration: O, timing: U, dir: n }), He(t, "itemout", { percent: 1 - R, duration: O, timing: U, dir: n }), Promise.all([
            ht.start(e, m[1], O, U),
            ht.start(t, m[0], O, U)
          ]).then(() => {
            this.reset(), $();
          }, rt), y;
        },
        cancel() {
          return ht.cancel([e, t]);
        },
        reset() {
          for (const O in m[0])
            w([e, t], O, "");
        },
        async forward(O, R = this.percent()) {
          return await this.cancel(), this.show(O, R, !0);
        },
        translate(O) {
          this.reset();
          const R = d(O, n);
          w(e, R[1]), w(t, R[0]), He(e, "itemtranslatein", { percent: O, dir: n }), He(t, "itemtranslateout", { percent: 1 - O, dir: n });
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
    function Gr() {
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
            this.stack.length || this.draggable && it(this.$el, ":focus-within") && !it(this.$el, ":focus") || this.pauseOnHover && it(this.$el, ":hover") || this.show("next");
          }, this.autoplayInterval);
        },
        stopAutoplay() {
          clearInterval(this.interval);
        }
      }
    };
    const Wn = { passive: !1, capture: !0 }, Xr = { passive: !0, capture: !0 }, ih = "touchstart mousedown", no = "touchmove mousemove", Yr = "touchend touchcancel mouseup click input scroll", Qr = (t) => t.preventDefault();
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
            const o = we(n).x * (Ot ? -1 : 1);
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
            !this.draggable || this.parallax || !le(t) && oh(t.target) || t.target.closest(Tn) || t.button > 0 || this.length < 2 || this.start(t);
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
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, W(document, no, this.move, Wn), W(document, Yr, this.end, Xr), w(this.list, "userSelect", "none");
        },
        move(t) {
          const e = this.pos - this.drag;
          if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
            return;
          this.dragging || W(this.list, "click", Qr, Wn), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
          let { slides: n, prevIndex: o } = this, l = Math.abs(e), c = this.getIndex(o + this.dir), d = Zr.call(this, o, c);
          for (; c !== o && l > d; )
            this.drag -= d * this.dir, o = c, l -= d, c = this.getIndex(o + this.dir), d = Zr.call(this, o, c);
          this.percent = l / d;
          const p = n[o], m = n[c], y = this.index !== c, $ = o === c;
          let O;
          for (const R of [this.index, this.prevIndex])
            S([c, o], R) || (D(n[R], "itemhidden", [this]), $ && (O = !0, this.prevIndex = o));
          (this.index === o && this.prevIndex !== o || O) && D(n[this.index], "itemshown", [this]), y && (this.prevIndex = o, this.index = c, $ || (D(p, "beforeitemhide", [this]), D(p, "itemhide", [this])), D(m, "beforeitemshow", [this]), D(m, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), p, !$ && m);
        },
        end() {
          if (Se(document, no, this.move, Wn), Se(document, Yr, this.end, Xr), this.dragging)
            if (this.dragging = null, this.index === this.prevIndex)
              this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
            else {
              const t = (Ot ? this.dir * (Ot ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
              this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(
                this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous",
                !0
              );
            }
          setTimeout(() => Se(this.list, "click", Qr, Wn)), w(this.list, { userSelect: "" }), this.drag = this.percent = null;
        }
      }
    };
    function Zr(t, e) {
      return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
    }
    function oh(t) {
      return w(t, "userSelect") !== "none" && T(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
    }
    function rh(t) {
      t._watches = [];
      for (const e of t.$options.watch || [])
        for (const [n, o] of Object.entries(e))
          ta(t, o, n);
      t._initial = !0;
    }
    function ta(t, e, n) {
      t._watches.push({
        name: n,
        ...Y(e) ? e : { handler: e }
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
          na(t, n, e[n]);
    }
    const ea = { subtree: !0, childList: !0 };
    function na(t, e, n) {
      t._hasComputed = !0, Object.defineProperty(t, e, {
        enumerable: !0,
        get() {
          const { _computed: o, $props: l, $el: c } = t;
          if (!u(o, e) && (o[e] = (n.get || n).call(t, l, c), n.observe && t._computedObserver)) {
            const d = n.observe.call(t, l);
            t._computedObserver.observe(
              ["~", "+", "-"].includes(d[0]) ? c.parentElement : c.getRootNode(),
              ea
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
        read: () => ah(t, ia(t)),
        events: ["resize", "computed"]
      }), t._computedObserver = Ds(
        t.$el,
        () => Un(t, "computed"),
        ea
      ), t._disconnect.push(() => {
        t._computedObserver.disconnect(), t._computedObserver = null, ia(t);
      }));
    }
    function ia(t) {
      const e = { ...t._computed };
      return t._computed = {}, e;
    }
    function uh(t) {
      for (const e of t.$options.events || [])
        if (u(e, "handler"))
          sa(t, e);
        else
          for (const n in e)
            sa(t, e[n], n);
    }
    function sa(t, e, n) {
      let { name: o, el: l, handler: c, capture: d, passive: p, delegate: m, filter: y, self: $ } = Y(e) ? e : { name: n, handler: e };
      l = q(l) ? l.call(t, t) : l || t.$el, !(!l || C(l) && !l.length || y && !y.call(t, t)) && t._disconnect.push(
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
      q(o) && !u(t, m) && na(t, m, () => {
        const O = o.call(t, t);
        return C(O) ? et(O) : O;
      }), l = ft(l) ? t[l] : l.bind(t), q(c) && (c = c.call(t, t));
      const y = u(t, m) ? t[m] : o, $ = n(y, l, c, p);
      q(o) && C(t[m]) && ta(
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
      const { $options: e, $props: n } = t, o = oa(e);
      M(n, o);
      const { computed: l, methods: c } = e;
      for (let d in n)
        d in o && (!l || !u(l, d)) && (!c || !u(c, d)) && (t[d] = n[d]);
    }
    function oa(t) {
      const e = {}, { args: n = [], props: o = {}, el: l, id: c } = t;
      if (!o)
        return e;
      for (const p in o) {
        const m = f(p);
        let y = Bt(l, m);
        It(y) || (y = o[p] === Boolean && y === "" ? !0 : Vs(o[p], y), !(m === "target" && v(y, "_")) && (e[p] = y));
      }
      const d = hn(Bt(l, c), n);
      for (const p in d) {
        const m = k(p);
        It(o[m]) || (e[m] = Vs(o[m], d[p]));
      }
      return e;
    }
    const mh = oe((t, e) => {
      const n = Object.keys(e), o = n.concat(t).map((l) => [f(l), `data-${f(l)}`]).flat();
      return { attributes: n, filter: o };
    });
    function gh(t) {
      const { $options: e, $props: n } = t, { id: o, props: l, el: c } = e;
      if (!l)
        return;
      const { attributes: d, filter: p } = mh(o, l), m = new MutationObserver((y) => {
        const $ = oa(e);
        y.some(({ attributeName: O }) => {
          const R = O.replace("data-", "");
          return (R === o ? d : [k(R), k(O)]).some(
            (B) => !It($[B]) && $[B] !== n[B]
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
    function io(t) {
      t._connected || (ph(t), pn(t, "beforeConnect"), t._connected = !0, t._disconnect = [], uh(t), Iu(t), rh(t), hh(t), gh(t), ch(t), pn(t, "connected"), Un(t));
    }
    function so(t) {
      t._connected && (pn(t, "beforeDisconnect"), t._disconnect.forEach((e) => e()), t._disconnect = null, pn(t, "disconnected"), t._connected = !1);
    }
    let vh = 0;
    function ra(t, e = {}) {
      e.data = yh(e, t.constructor.options), t.$options = Ln(t.constructor.options, e, t), t.$props = {}, t._uid = vh++, bh(t), wh(t), lh(t), pn(t, "created"), e.el && t.$mount(e.el);
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
      C(t) && (t = t.slice(0, e.length).reduce((o, l, c) => (Y(l) ? M(o, l) : o[e[c]] = l, o), {}));
      for (const o in t)
        It(t[o]) ? delete t[o] : n[o] && (t[o] = Vs(n[o], t[o]));
      return t;
    }
    const te = function(t) {
      ra(this, t);
    };
    te.util = Eu, te.options = {}, te.version = "3.21.13";
    const kh = "uk-", qe = "__uikit__", mn = {};
    function aa(t, e) {
      var n, o;
      const l = kh + f(t);
      if (!e)
        return mn[l].options || (mn[l] = te.extend(mn[l])), mn[l];
      t = k(t), te[t] = (d, p) => Vn(t, d, p);
      const c = (n = e.options) != null ? n : { ...e };
      return c.id = l, c.name = t, (o = c.install) == null || o.call(c, te, c, t), te._initialized && !c.functional && requestAnimationFrame(() => Vn(t, `[${l}],[data-${l}]`)), mn[l] = c;
    }
    function Vn(t, e, n, ...o) {
      const l = aa(t);
      return l.options.functional ? new l({ data: Y(e) ? e : [e, n, ...o] }) : e ? pt(e).map(c)[0] : c();
      function c(d) {
        const p = Di(d, t);
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
    function Di(t, e) {
      return Jn(t)[e];
    }
    function $h(t, e) {
      t[qe] || (t[qe] = {}), t[qe][e.$options.name] = e;
    }
    function xh(t, e) {
      var n;
      (n = t[qe]) == null || delete n[e.$options.name], ui(t[qe]) && delete t[qe];
    }
    function Sh(t) {
      t.component = aa, t.getComponents = Jn, t.getComponent = Di, t.update = la, t.use = function(n) {
        if (!n.installed)
          return n.call(null, this), n.installed = !0, this;
      }, t.mixin = function(n, o) {
        o = (ft(o) ? this.component(o) : o) || this, o.options = Ln(o.options, n);
      }, t.extend = function(n) {
        n || (n = {});
        const o = this, l = function(d) {
          ra(this, d);
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
    function la(t, e) {
      t = t ? kt(t) : document.body;
      for (const n of Pn(t).reverse())
        ca(n, e);
      Oe(t, (n) => ca(n, e));
    }
    function ca(t, e) {
      const n = Jn(t);
      for (const o in n)
        Un(n[o], e);
    }
    function _h(t) {
      t.prototype.$mount = function(e) {
        const n = this;
        $h(e, n), n.$options.el = e, document.contains(e) && io(n);
      }, t.prototype.$destroy = function(e = !1) {
        const n = this, { el: o } = n.$options;
        o && so(n), pn(n, "destroy"), xh(o, n), e && Yt(n.$el);
      }, t.prototype.$create = Vn, t.prototype.$emit = function(e) {
        Un(this, e);
      }, t.prototype.$update = function(e = this.$el, n) {
        la(e, n);
      }, t.prototype.$reset = function() {
        so(this), io(this);
      }, t.prototype.$getComponent = Di, Object.defineProperties(t.prototype, {
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
          return ut(this.nav);
        },
        selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`,
        navItems(t, e) {
          return pt(this.selNavItem, e);
        }
      },
      watch: {
        nav(t, e) {
          F(t, "role", "tablist"), this.padNavitems(), e && this.$emit();
        },
        list(t) {
          bt(t, "ul") && F(t, "role", "presentation");
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
              }), c && o && it(ct(e), ":focus-within") && o.focus();
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
    var ua = {
      mixins: [nh, sh, Oh, Ni],
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
        ot(this.slides, this.clsActive);
      },
      computed: {
        duration: ({ velocity: t }, e) => ha(e.offsetWidth / t),
        list: ({ selList: t }, e) => V(t, e),
        maxIndex() {
          return this.length - 1;
        },
        slides() {
          return ut(this.list);
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
          ot(t, this.clsEnter);
        },
        itemhide({ target: t }) {
          X(t, this.clsLeave);
        },
        itemhidden({ target: t }) {
          ot(t, this.clsLeave, this.clsSlideActive);
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
          if (this.dir = Ah(t, d), this.prevIndex = d, this.index = m, p && !D(p, "beforeitemhide", [this]) || !D(y, "beforeitemshow", [this, p])) {
            this.index = this.prevIndex, c();
            return;
          }
          const $ = this._show(p, y, e).then(() => {
            p && D(p, "itemhidden", [this]), D(y, "itemshown", [this]), o.shift(), this._transitioner = null, o.length && requestAnimationFrame(() => o.length && this.show(o.shift(), !0));
          });
          return p && D(p, "itemhide", [this]), D(y, "itemshow", [this]), $;
        },
        getIndex(t = this.index, e = this.index) {
          return Ut(
            Xt(t, this.slides, e, this.finite),
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
            n * (Ot ? -1 : 1),
            o
          );
        }
      }
    };
    function Ah(t, e) {
      return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
    }
    function ha(t) {
      return 0.5 * t + 300;
    }
    var da = {
      mixins: [ua],
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
      observe: ae(),
      events: {
        beforeitemshow({ target: t }) {
          X(t, this.clsActive);
        },
        itemshown({ target: t }) {
          X(t, this.clsActivated);
        },
        itemhidden({ target: t }) {
          ot(t, this.clsActive, this.clsActivated);
        }
      }
    }, fa = {
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
    }, pa = {
      mixins: [to, da],
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
        Animations: fa,
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
          name: `${pi} ${re} keydown`,
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
            this.hideControls(), ot(this.slides, this.clsActive), ht.stop(this.slides);
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
            this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = fa.scale, ot(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
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
          this.getSlide(e).childElementCount || D(this.$el, "itemload", [e]);
        },
        getItem(t = this.index) {
          return this.items[Xt(t, this.slides)];
        },
        setItem(t, e) {
          D(this.$el, "itemloaded", [this, Ee(this.getSlide(t), e)]);
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
          ot(this.$el, "uk-active", "uk-transition-active");
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
        toggles: ({ toggle: t }, e) => pt(t, e)
      },
      watch: {
        toggles(t) {
          this.hide();
          for (const e of t)
            bt(e, "a") && F(e, "role", "button");
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
          const e = nr(this.toggles.map(ma), "source");
          if (Lt(t)) {
            const { source: n } = ma(t);
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
      t.lightboxPanel || t.component("lightboxPanel", pa), M(e.props, t.component("lightboxPanel").options.props);
    }
    function ma(t) {
      const e = {};
      for (const n of ["href", "caption", "type", "poster", "alt", "attrs"])
        e[n === "href" ? "source" : n] = Bt(t, n);
      return e.attrs = hn(e.attrs), e;
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
        await ht.start(w(this.$el, this.startProps), {
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
            const o = ct(n);
            D(n, "close", [this]), Yt(n), o != null && o.hasChildNodes() || Yt(o);
          };
          this.timer && clearTimeout(this.timer), t || await ht.start(this.$el, this.startProps), e(this.$el);
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
    var ji = {
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
    function Fh(t, e) {
      if (ft(t)) {
        if (v(t, "@"))
          t = G(w(e, `--uk-breakpoint-${t.slice(1)}`));
        else if (isNaN(t))
          return t;
      }
      return t && fe(t) ? `(min-width: ${t}px)` : "";
    }
    function ga(t) {
      return xt(t) ? Math.ceil(
        Math.max(0, ...pt("[stroke]", t).map((e) => {
          var n;
          return ((n = e.getTotalLength) == null ? void 0 : n.call(e)) || 0;
        }))
      ) : 0;
    }
    const Li = {
      x: Ui,
      y: Ui,
      rotate: Ui,
      scale: Ui,
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
      bgx: wa,
      bgy: wa
    }, { keys: va } = Object;
    var ba = {
      mixins: [ji],
      props: Sa(va(Li), "list"),
      data: Sa(va(Li), void 0),
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
          return e.willChange = Object.keys(e).map(bi).join(","), e;
        }
      }
    };
    function Ui(t, e, n) {
      let o = zi(n) || { x: "px", y: "px", rotate: "deg" }[t] || "", l;
      return t === "x" || t === "y" ? (t = `translate${b(t)}`, l = (c) => G(G(c).toFixed(o === "px" ? 0 : 6))) : t === "scale" && (o = "", l = (c) => {
        var d;
        return zi([c]) ? Rt(c, "width", e, !0) / e[`offset${(d = c.endsWith) != null && d.call(c, "vh") ? "Height" : "Width"}`] : G(c);
      }), n.length === 1 && n.unshift(t === "scale" ? 1 : 0), n = gn(n, l), (c, d) => {
        c.transform = `${c.transform || ""} ${t}(${Gn(n, d)}${o})`;
      };
    }
    function oo(t, e, n) {
      return n.length === 1 && n.unshift(Xn(e, t, "")), n = gn(n, (o) => Nh(e, o)), (o, l) => {
        const [c, d, p] = xa(n, l), m = c.map((y, $) => (y += p * (d[$] - y), $ === 3 ? G(y) : parseInt(y, 10))).join(",");
        o[t] = `rgba(${m})`;
      };
    }
    function Nh(t, e) {
      return Xn(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(G);
    }
    function Ve(t, e, n) {
      n.length === 1 && n.unshift(0);
      const o = zi(n) || { blur: "px", hue: "deg" }[t] || "%";
      return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, n = gn(n), (l, c) => {
        const d = Gn(n, c);
        l.filter = `${l.filter || ""} ${t}(${d + o})`;
      };
    }
    function Dh(t, e, n) {
      return n.length === 1 && n.unshift(Xn(e, t, "")), n = gn(n), (o, l) => {
        o[t] = Gn(n, l);
      };
    }
    function jh(t, e, n) {
      n.length === 1 && n.unshift(0);
      const o = zi(n), l = ga(e);
      return n = gn(n.reverse(), (c) => (c = G(c), o === "%" ? c * l / 100 : c)), n.some(([c]) => c) ? (w(e, "strokeDasharray", l), (c, d) => {
        c.strokeDashoffset = Gn(n, d);
      }) : rt;
    }
    function wa(t, e, n, o) {
      n.length === 1 && n.unshift(0);
      const l = t === "bgy" ? "height" : "width";
      o[t] = gn(n, (p) => Rt(p, l, e));
      const c = ["bgx", "bgy"].filter((p) => p in o);
      if (c.length === 2 && t === "bgx")
        return rt;
      if (Xn(e, "backgroundSize", "") === "cover")
        return Lh(t, e, n, o);
      const d = {};
      for (const p of c)
        d[p] = ya(e, p);
      return ka(c, d, o);
    }
    function Lh(t, e, n, o) {
      const l = Uh(e);
      if (!l.width)
        return rt;
      const c = {
        width: e.offsetWidth,
        height: e.offsetHeight
      }, d = ["bgx", "bgy"].filter(($) => $ in o), p = {};
      for (const $ of d) {
        const O = o[$].map(([st]) => st), R = Math.min(...O), B = Math.max(...O), U = O.indexOf(R) < O.indexOf(B), Q = B - R;
        p[$] = `${(U ? -Q : 0) - (U ? R : B)}px`, c[$ === "bgy" ? "height" : "width"] += Q;
      }
      const m = ks.cover(l, c);
      for (const $ of d) {
        const O = $ === "bgy" ? "height" : "width", R = m[O] - c[O];
        p[$] = `max(${ya(e, $)},-${R}px) + ${p[$]}`;
      }
      const y = ka(d, p, o);
      return ($, O) => {
        y($, O), $.backgroundSize = `${m.width}px ${m.height}px`, $.backgroundRepeat = "no-repeat";
      };
    }
    function ya(t, e) {
      return Xn(t, `background-position-${e.slice(-1)}`, "");
    }
    function ka(t, e, n) {
      return function(o, l) {
        for (const c of t) {
          const d = Gn(n[c], l);
          o[`background-position-${c.slice(-1)}`] = `calc(${e[c]} + ${d}px)`;
        }
      };
    }
    const $a = {}, Mi = {};
    function Uh(t) {
      const e = w(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
      if (Mi[e])
        return Mi[e];
      const n = new Image();
      return e && (n.src = e, !n.naturalWidth && !$a[e]) ? (vt(n, "error load", () => {
        Mi[e] = ro(n), D(t, ln("load", !1));
      }), $a[e] = !0, ro(n)) : Mi[e] = ro(n);
    }
    function ro(t) {
      return {
        width: t.naturalWidth,
        height: t.naturalHeight
      };
    }
    function gn(t, e = G) {
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
    function xa(t, e) {
      const n = P(t.slice(1), ([, o]) => e <= o) + 1;
      return [
        t[n - 1][0],
        t[n][0],
        (e - t[n - 1][1]) / (t[n][1] - t[n - 1][1])
      ];
    }
    function Gn(t, e) {
      const [n, o, l] = xa(t, e);
      return n + Math.abs(n - o) * l * (n < o ? 1 : -1);
    }
    const Mh = /^-?\d+(?:\.\d+)?(\S+)?/;
    function zi(t, e) {
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
    function Sa(t, e) {
      return t.reduce((n, o) => (n[o] = e, n), {});
    }
    function _a(t, e) {
      return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    var zh = {
      mixins: [ba],
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
        target: ({ target: t }, e) => Ea(t && Mt(t, e) || e),
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
        ae({ target: ({ $el: t, target: e }) => [t, e, Ce(e, !0)] })
      ],
      update: {
        read({ percent: t }, e) {
          if (e.has("scroll") || (t = !1), !xt(this.$el))
            return !1;
          if (!this.matchMedia)
            return;
          const n = t;
          return t = _a(Pi(this.target, this.start, this.end), this.easing), {
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
    function Ea(t) {
      return t ? "offsetTop" in t ? t : Ea(ct(t)) : document.documentElement;
    }
    var Oa = {
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
        ae({
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
          const e = Rt(this.parallaxStart, "height", t, !0), n = Rt(this.parallaxEnd, "height", t, !0), o = _a(Pi(t, e, n), this.parallaxEasing);
          return { parallax: this.getIndexAt(o) };
        },
        write({ parallax: t }) {
          const [e, n] = t, o = this.getValidIndex(e + Math.ceil(n)), l = this.slides[e], c = this.slides[o], { triggerShow: d, triggerShown: p, triggerHide: m, triggerHidden: y } = Hh(this);
          if (~this.prevIndex)
            for (const O of /* @__PURE__ */ new Set([this.index, this.prevIndex]))
              S([o, e], O) || (m(this.slides[O]), y(this.slides[O]));
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
    }, Ca = {
      observe: Bi({
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
      const d = t ? Yn(t, c, o) : Yn(e, c, o) + N(e).width * n, p = e ? Yn(e, c, o) : d + N(t).width * n * (Ot ? -1 : 1), { promise: m, resolve: y } = Gr();
      return {
        dir: n,
        show($, O = 0, R) {
          const B = R ? "linear" : l;
          return $ -= Math.round($ * Ut(O, -1, 1)), w(c, "transitionProperty", "none"), this.translate(O), w(c, "transitionProperty", ""), O = t ? O : Ut(O, 0, 1), He(this.getItemIn(), "itemin", { percent: O, duration: $, timing: B, dir: n }), t && He(this.getItemIn(!0), "itemout", {
            percent: 1 - O,
            duration: $,
            timing: B,
            dir: n
          }), ht.start(
            c,
            { transform: wt(-p * (Ot ? -1 : 1), "px") },
            $,
            B
          ).then(y, rt), m;
        },
        cancel() {
          return ht.cancel(c);
        },
        reset() {
          w(c, "transform", "");
        },
        async forward($, O = this.percent()) {
          return await this.cancel(), this.show($, O, !0);
        },
        translate($) {
          if ($ === this.percent())
            return;
          const O = this.getDistance() * n * (Ot ? -1 : 1);
          w(
            c,
            "transform",
            wt(
              Ut(
                -p + (O - O * $),
                -vn(c),
                N(c).width
              ) * (Ot ? -1 : 1),
              "px"
            )
          );
          const R = this.getActives(), B = this.getItemIn(), U = this.getItemIn(!0);
          $ = t ? Ut($, -1, 1) : 0;
          for (const Q of ut(c)) {
            const st = S(R, Q), pe = Q === B, bn = Q === U, wn = pe || !bn && (st || n * (Ot ? -1 : 1) === -1 ^ Hi(Q, c) > Hi(t || e));
            He(Q, `itemtranslate${wn ? "in" : "out"}`, {
              dir: n,
              percent: bn ? 1 - $ : pe ? $ : st ? 1 : 0
            });
          }
        },
        percent() {
          return Math.abs(
            (new DOMMatrix(w(c, "transform")).m41 * (Ot ? -1 : 1) + d) / (p - d)
          );
        },
        getDistance() {
          return Math.abs(p - d);
        },
        getItemIn($ = !1) {
          let O = this.getActives(), R = Pa(c, Yn(e || t, c, o));
          if ($) {
            const B = O;
            O = R, R = B;
          }
          return R[P(R, (B) => !S(O, B))];
        },
        getActives() {
          return Pa(c, Yn(t || e, c, o));
        }
      };
    }
    function Yn(t, e, n) {
      const o = Hi(t, e);
      return n ? o - Wh(t, e) : Math.min(o, Aa(e));
    }
    function Aa(t) {
      return Math.max(0, vn(t) - N(t).width);
    }
    function vn(t, e) {
      return Be(ut(t).slice(0, e), (n) => N(n).width);
    }
    function Wh(t, e) {
      return N(e).width / 2 - N(t).width / 2;
    }
    function Hi(t, e) {
      return t && (Is(t).left + (Ot ? N(t).width - N(e).width : 0)) * (Ot ? -1 : 1) || 0;
    }
    function Pa(t, e) {
      e -= 1;
      const n = N(t).width, o = e + n + 2;
      return ut(t).filter((l) => {
        const c = Hi(l, t), d = c + Math.min(N(l).width, n);
        return c >= e && d <= o;
      });
    }
    var Vh = {
      mixins: [Wt, ua, Ta, Oa, Ca],
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
          const e = Aa(this.list), n = P(this.slides, (o) => {
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
            e + c > o && (e = 0), this.center ? e < o / 2 && e + c + N(this.slides[Xt(l + 1, this.slides)]).width / 2 > o / 2 && (n.push(l), e = o / 2 - c / 2) : e === 0 && n.push(Math.min(l, this.maxIndex)), e += c;
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
          return ut(this.list).filter(xt);
        }
      },
      connected() {
        $t(this.$el, this.clsContainer, !V(`.${this.clsContainer}`, this.$el));
      },
      observe: ae({
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
          const n = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex, o = vn(this.list) / this.length;
          this.duration = ha(o / this.velocity) * (N(this.slides[n]).width / o), this.reorder();
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
            for (const c of pt(Cn, o))
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
          const n = this.center ? vn(this.list) - (N(this.slides[0]).width / 2 + N(Ie(this.slides)).width / 2) : vn(this.list, this.maxIndex);
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
        return Math.ceil(vn(t)) < Math.trunc(n + Kh(t));
      const o = ut(t), l = Math.trunc(n / 2);
      for (const c in o) {
        const d = o[c], p = N(d).width, m = /* @__PURE__ */ new Set([d]);
        let y = 0;
        for (const $ of [-1, 1]) {
          let O = p / 2, R = 0;
          for (; O < l; ) {
            const B = o[Xt(+c + $ + R++ * $, o)];
            if (m.has(B))
              return !0;
            O += N(B).width, m.add(B);
          }
          y = Math.max(
            y,
            p / 2 + N(o[Xt(+c + $, o)]).width / 2 - (O - l)
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
      return Math.max(0, ...ut(t).map((e) => N(e).width));
    }
    var Ra = {
      mixins: [ba],
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
              const c = this.getCss(Ba(t, l, e)), d = this.getCss(Ia(t) ? 0.5 : l > 0 ? 1 : 0);
              Te.write(() => {
                w(this.$el, c), ht.start(this.$el, d, n, o).catch(rt);
              });
            });
          }
        },
        {
          name: "transitioncanceled transitionend",
          self: !0,
          el: ({ item: t }) => t,
          handler() {
            ht.cancel(this.$el);
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
              const o = this.getCss(Ba(t, n, e));
              Te.write(() => w(this.$el, o));
            });
          }
        }
      ]
    };
    function Ia(t) {
      return A(t, "in");
    }
    function Ba(t, e, n) {
      return n /= 2, Ia(t) ^ e < 0 ? n : 1 - n;
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
            { transform: wt(30), zIndex: -1 },
            { transform: wt(), zIndex: 0 }
          ] : [
            { transform: wt(-100), zIndex: 0 },
            { transform: wt(), zIndex: -1 }
          ];
        },
        percent(t, e, n) {
          return n < 0 ? 1 - qn(e) : qn(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: wt(30 * t), zIndex: -1 },
            { transform: wt(-100 * (1 - t)), zIndex: 0 }
          ] : [
            { transform: wt(-t * 100), zIndex: 0 },
            { transform: wt(30 * (1 - t)), zIndex: -1 }
          ];
        }
      },
      push: {
        show(t) {
          return t < 0 ? [
            { transform: wt(100), zIndex: 0 },
            { transform: wt(), zIndex: -1 }
          ] : [
            { transform: wt(-30), zIndex: -1 },
            { transform: wt(), zIndex: 0 }
          ];
        },
        percent(t, e, n) {
          return n > 0 ? 1 - qn(e) : qn(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: wt(t * 100), zIndex: 0 },
            { transform: wt(-30 * (1 - t)), zIndex: -1 }
          ] : [
            { transform: wt(-30 * t), zIndex: -1 },
            { transform: wt(100 * (1 - t)), zIndex: 0 }
          ];
        }
      }
    }, Xh = {
      mixins: [Wt, da, Ta, Oa, Ca],
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
      mixins: [Wt, qr],
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
        name: re,
        passive: !1,
        handler: "init"
      },
      computed: {
        target: (t, e) => (e.tBodies || [e])[0],
        items() {
          return ut(this.target);
        },
        isEmpty() {
          return !this.items.length;
        },
        handles({ handle: t }, e) {
          return t ? pt(t, e) : this.items;
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
          if (!this.drag || !ct(this.placeholder))
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
          if (p.some(ht.inProgress))
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
          !l || o || n > 0 || gi(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = we(t), this.touched = /* @__PURE__ */ new Set([this]), this.placeholder = l, this.origin = { target: e, index: be(l), ...this.pos }, W(document, pi, this.move), W(document, xe, this.end), this.threshold || this.start(t));
        },
        start(t) {
          this.drag = td(this.$container, this.placeholder);
          const { left: e, top: n } = N(this.placeholder);
          M(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - n }), X(this.drag, this.clsDrag, this.clsCustom), X(this.placeholder, this.clsPlaceholder), X(this.items, this.clsItem), X(document.documentElement, this.clsDragState), D(this.$el, "start", [this, this.placeholder]), Qh(this.pos), this.move(t);
        },
        move: sd(function(t) {
          M(this.pos, we(t)), !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t), this.$emit("move");
        }),
        end() {
          if (Se(document, pi, this.move), Se(document, xe, this.end), !this.drag)
            return;
          Zh();
          const t = this.getSortable(this.placeholder);
          this === t ? this.origin.index !== be(this.placeholder) && D(this.$el, "moved", [this, this.placeholder]) : (D(t.$el, "added", [t, this.placeholder]), D(this.$el, "removed", [this, this.placeholder])), D(this.$el, "stop", [this, this.placeholder]), Yt(this.drag), this.drag = null;
          for (const { clsPlaceholder: e, clsItem: n } of this.touched)
            for (const o of this.touched)
              ot(o.items, e, n);
          this.touched = null, ot(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          X(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => yi(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => St(this.target, t));
        },
        remove(t) {
          this.target.contains(t) && this.animate(() => Yt(t));
        },
        getSortable(t) {
          do {
            const e = this.$getComponent(t, "sortable");
            if (e && (e === this || this.group !== !1 && e.group === this.group))
              return e;
          } while (t = ct(t));
        }
      }
    };
    let Fa;
    function Qh(t) {
      let e = Date.now();
      Fa = setInterval(() => {
        let { x: n, y: o } = t;
        o += document.scrollingElement.scrollTop;
        const l = (Date.now() - e) * 0.3;
        e = Date.now(), Ue(document.elementFromPoint(n, t.y)).reverse().some((c) => {
          let { scrollTop: d, scrollHeight: p } = c;
          const { top: m, bottom: y, height: $ } = Qt(c);
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
      clearInterval(Fa);
    }
    function td(t, e) {
      let n;
      if (bt(e, "li", "tr")) {
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
      }), qt(n.firstElementChild, qt(e.firstElementChild)), n;
    }
    function ed(t, e) {
      return t[P(t, (n) => di(e, N(n)))];
    }
    function nd(t, e, n, o, l, c) {
      if (!ut(t).length)
        return;
      const d = N(e);
      if (!c)
        return id(t, n) || l < d.top + d.height / 2 ? e : e.nextElementSibling;
      const p = N(n), m = Na(
        [d.top, d.bottom],
        [p.top, p.bottom]
      ), [y, $, O, R] = m ? [o, "width", "left", "right"] : [l, "height", "top", "bottom"], B = p[$] < d[$] ? d[$] - p[$] : 0;
      return p[O] < d[O] ? B && y < d[O] + B ? !1 : e.nextElementSibling : B && y > d[R] - B ? !1 : e;
    }
    function id(t, e) {
      const n = ut(t).length === 1;
      n && St(t, e);
      const o = ut(t), l = o.some((c, d) => {
        const p = N(c);
        return o.slice(d + 1).some((m) => {
          const y = N(m);
          return !Na([p.left, p.right], [y.left, y.right]);
        });
      });
      return n && Yt(e), l;
    }
    function Na(t, e) {
      return t[1] > e[0] && e[1] > t[0];
    }
    function sd(t) {
      let e;
      return function(...n) {
        e || (e = !0, t.call(this, ...n), requestAnimationFrame(() => e = !1));
      };
    }
    var Da = {
      props: {
        pos: String,
        offset: Boolean,
        flip: Boolean,
        shift: Boolean,
        inset: Boolean
      },
      data: {
        pos: `bottom-${Ot ? "right" : "left"}`,
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
            element: [this.inset ? this.dir : _i(this.dir), this.align],
            target: [this.dir, this.align]
          };
          if (this.axis === "y") {
            for (const m in c)
              c[m].reverse();
            o.reverse(), l.reverse();
          }
          const d = ja(t), p = N(t);
          w(t, { top: -p.height, left: -p.width }), Tr(t, e, {
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
    function ja(t) {
      const e = Ce(t), { scrollTop: n } = e;
      return () => {
        n !== e.scrollTop && (e.scrollTop = n);
      };
    }
    var od = {
      mixins: [Hn, ze, Da],
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
          const n = F(this.$el, "title"), o = W(this.$el, ["blur", rn], (c) => !le(c) && this.hide());
          this.reset = () => {
            F(this.$el, { title: n, "aria-describedby": null }), o();
          };
          const l = We(this);
          F(this.$el, { title: null, "aria-describedby": l }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, l), t);
        },
        async hide() {
          var t;
          it(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), (t = this.reset) == null || t.call(this), Yt(this.tooltip), this.tooltip = null);
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
            this.origin = this.axis === "y" ? `${_i(c)}-${d}` : `${d}-${_i(c)}`;
            const p = [
              vt(
                document,
                `keydown ${re}`,
                this.hide,
                !1,
                (m) => m.type === re && !this.$el.contains(m.target) || m.type === "keydown" && m.keyCode === at.ESC
              ),
              W([document, ...Me(this.$el)], "scroll", l, {
                passive: !0
              })
            ];
            vt(this.tooltip, "hide", () => p.forEach((m) => m()), {
              self: !0
            });
          }), await this.toggleElement(this.tooltip, !0) || this.hide();
        }
      },
      events: {
        // Clicking a button does not give it focus on all browsers and platforms
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
        [`focus ${De} ${re}`](t) {
          (!le(t) || t.type === re) && this.show();
        }
      }
    };
    function rd(t) {
      vi(t) || F(t, "tabindex", "0");
    }
    function ad(t, e, [n, o]) {
      const l = tt(t), c = tt(e), d = [
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
        ...hn(Bt(e, n), ["title"]),
        ...o
      });
    }
    var cd = {
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
          it(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
        },
        drop(t) {
          qi(t);
          const e = t.dataTransfer;
          e != null && e.files && (ot(this.$el, this.clsDragover), this.upload(e.files));
        },
        dragenter(t) {
          qi(t);
        },
        dragover(t) {
          qi(t), X(this.$el, this.clsDragover);
        },
        dragleave(t) {
          qi(t), ot(this.$el, this.clsDragover);
        }
      },
      methods: {
        async upload(t) {
          if (t = T(t), !t.length)
            return;
          D(this.$el, "upload", [t]);
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
    function qi(t) {
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
            M(Error(l.statusText), {
              xhr: l,
              status: l.status
            })
          );
        }), W(l, "error", () => o(M(Error("Network Error"), { xhr: l }))), W(l, "timeout", () => o(M(Error("Network Timeout"), { xhr: l }))), l.send(e.data);
      });
    }
    var fd = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Countdown: Tu,
      Filter: zu,
      Lightbox: Ph,
      LightboxPanel: pa,
      Notification: Ih,
      Parallax: zh,
      Slider: Vh,
      SliderParallax: Ra,
      Slideshow: Xh,
      SlideshowParallax: Ra,
      Sortable: Yh,
      Tooltip: od,
      Upload: cd
    });
    function pd(t) {
      Ne && window.MutationObserver && (document.body ? requestAnimationFrame(() => Ua(t)) : new MutationObserver((e, n) => {
        document.body && (Ua(t), n.disconnect());
      }).observe(document.documentElement, { childList: !0 }));
    }
    function Ua(t) {
      D(document, "uikit:init", t), document.body && Oe(document.body, Ma), new MutationObserver((e) => e.forEach(md)).observe(document, {
        subtree: !0,
        childList: !0
      }), new MutationObserver((e) => e.forEach(gd)).observe(document, {
        subtree: !0,
        attributes: !0
      }), t._initialized = !0;
    }
    function md({ addedNodes: t, removedNodes: e }) {
      for (const n of t)
        Oe(n, Ma);
      for (const n of e)
        Oe(n, vd);
    }
    function gd({ target: t, attributeName: e }) {
      var n;
      const o = za(e);
      o && ($e(t, e) ? Vn(o, t) : (n = Di(t, o)) == null || n.$destroy());
    }
    function Ma(t) {
      const e = Jn(t);
      for (const n in e)
        io(e[n]);
      for (const n of t.getAttributeNames()) {
        const o = za(n);
        o && Vn(o, t);
      }
    }
    function vd(t) {
      const e = Jn(t);
      for (const n in e)
        so(e[n]);
    }
    function za(t) {
      v(t, "data-") && (t = t.slice(5));
      const e = mn[t];
      return e && (e.options || e).name;
    }
    Sh(te), _h(te);
    var Ha = {
      mixins: [Wt, ze],
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
        items: ({ targets: t }, e) => pt(t, e),
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
            Wi(e, !n);
          }
          this.$emit();
        }
      },
      observe: Bi(),
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
            role: bt(n, "a") ? "button" : null,
            "aria-controls": o.id,
            "aria-expanded": l,
            "aria-disabled": !this.collapsible && t.length < 2 && l
          }), F(o, { role: "region", "aria-labelledby": n.id }), bt(o, "ul") && F(ut(o), "role", "presentation");
        }
      },
      methods: {
        toggle(t, e) {
          t = this.items[Xt(t, this.items)];
          let n = [t];
          const o = An(this.items, `.${this.clsOpen}`);
          if (!this.multiple && !S(o, n[0]) && (n = n.concat(o)), !(!this.collapsible && o.length < 2 && S(o, t)))
            return Promise.all(
              n.map(
                (l) => this.toggleElement(l, !S(o, l), (c, d) => {
                  if ($t(c, this.clsOpen, d), e === !1 || !this.animation) {
                    Wi(V(this.content, c), !d);
                    return;
                  }
                  return bd(c, d, this);
                })
              )
            );
        }
      }
    };
    function Wi(t, e) {
      t && (t.hidden = e);
    }
    async function bd(t, e, { content: n, duration: o, velocity: l, transition: c }) {
      var d;
      n = ((d = t._wrapper) == null ? void 0 : d.firstElementChild) || V(n, t), t._wrapper || (t._wrapper = xi(n, "<div>"));
      const p = t._wrapper;
      w(p, "overflow", "hidden");
      const m = G(w(p, "height"));
      await ht.cancel(p), Wi(n, !1);
      const y = Be(["marginTop", "marginBottom"], (O) => w(n, O)) + N(n).height, $ = m / y;
      o = (l * y + o) * (e ? 1 - $ : $), w(p, "height", m), await ht.start(p, { height: e ? y : 0 }, o, c), Fn(n), delete t._wrapper, e || Wi(n, !0);
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
      mixins: [Wt, ze],
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
      return w(t, "height", c), ht.start(
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
    var qa = {
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
        this.autoplay === "inview" && !$e(this.$el, "preload") && (this.$el.preload = "none"), bt(this.$el, "iframe") && !$e(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && (bt(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = !0), this.automute && kr(this.$el);
      },
      events: [
        {
          name: `${De} focusin`,
          filter: ({ autoplay: t }) => S(t, "hover"),
          handler(t) {
            !le(t) || !$d(this.$el) ? js(this.$el) : Ti(this.$el);
          }
        },
        {
          name: `${rn} focusout`,
          filter: ({ autoplay: t }) => S(t, "hover"),
          handler(t) {
            le(t) || Ti(this.$el);
          }
        }
      ],
      observe: [
        dn({
          filter: ({ $el: t, autoplay: e }) => e !== "hover" && $r(t),
          handler([{ isIntersecting: t }]) {
            document.fullscreenElement || (t ? this.autoplay && js(this.$el) : Ti(this.$el));
          },
          args: { intersecting: !1 },
          options: ({ $el: t, autoplay: e }) => ({ root: e === "inview" ? null : ct(t) })
        })
      ]
    };
    function $d(t) {
      return !t.paused && !t.ended;
    }
    var xd = {
      mixins: [qa],
      props: {
        width: Number,
        height: Number
      },
      data: {
        automute: !0
      },
      created() {
        this.useObjectFit = bt(this.$el, "img", "video");
      },
      observe: ae({
        target: ({ $el: t }) => Wa(t) || ct(t),
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
          const { offsetHeight: d, offsetWidth: p } = Wa(n) || ct(n), m = e(c, { width: p, height: d });
          return !m.width || !m.height ? !1 : m;
        },
        write({ height: t, width: e }) {
          w(this.$el, { height: t, width: e });
        },
        events: ["resize"]
      }
    };
    function Wa(t) {
      for (; t = ct(t); )
        if (w(t, "position") !== "static")
          return t;
    }
    let Ft;
    var Va = {
      mixins: [Hn, Da, ze],
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
        this.tracker = new br();
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
            t.preventDefault(), it(this.$el, ":focus,:hover") || this.hide();
          }
        },
        {
          name: `${De} focusin`,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            le(t) || this.clearTimers();
          }
        },
        {
          name: `${rn} focusout`,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            !le(t) && t.relatedTarget && this.hide();
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
              this.autoUpdate && Ja(this),
              this.closeOnScroll && Td(this)
            ];
            vt(this.$el, "hide", () => t.forEach((e) => e && e()), {
              self: !0
            }), this.bgScroll || vt(this.$el, "hidden", Jr(this.$el), { self: !0 });
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
                this.showTimer = setTimeout(() => it(t, ":hover") && this.show(), 10);
                return;
              }
              let n;
              for (; Ft && n !== Ft && !Ft.$el.contains(this.$el); )
                n = Ft, Ft.hide(!1, !1);
            }
            this.container && ct(this.$el) !== this.container && St(this.container, this.$el), this.showTimer = setTimeout(
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
          return [this.$el, ...pt(".uk-drop", this.$el)].some((t) => this.tracker.movesTo(t));
        },
        position() {
          const t = ja(this.$el);
          ot(this.$el, "uk-drop-stack"), w(this.$el, this._style), this.$el.hidden = !0;
          const e = this.target.map((c) => Sd(this.$el, c)), n = this.getViewportOffset(this.$el), o = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]]
          ];
          for (const [c, [d, p]] of o)
            this.axis !== d && S([d, !0], this.stretch) && w(this.$el, {
              [p]: Math.min(
                tt(this.boundary[c])[p],
                e[c][p] - 2 * n
              ),
              [`overflow-${d}`]: "auto"
            });
          const l = e[0].width - 2 * n;
          this.$el.hidden = !1, w(this.$el, "maxWidth", ""), this.$el.offsetWidth > l && X(this.$el, "uk-drop-stack"), w(this.$el, "maxWidth", l), this.positionAt(this.$el, this.target, this.boundary);
          for (const [c, [d, p, m, y]] of o)
            if (this.axis === d && S([d, !0], this.stretch)) {
              const $ = Math.abs(this.getPositionOffset()), O = tt(this.target[c]), R = tt(this.$el);
              w(this.$el, {
                [p]: (O[m] > R[m] ? O[this.inset ? y : m] - Math.max(
                  tt(this.boundary[c])[m],
                  e[c][m] + n
                ) : Math.min(
                  tt(this.boundary[c])[y],
                  e[c][y] - n
                ) - O[this.inset ? m : y]) - $,
                [`overflow-${d}`]: "auto"
              }), this.positionAt(this.$el, this.target, this.boundary);
            }
          t();
        }
      }
    };
    function Sd(t, e) {
      return Qt(Me(e).find((n) => n.contains(t)));
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
    function Ja(t, e = () => t.$emit()) {
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
      return Ja(t, () => t.hide(!1));
    }
    function Cd(t) {
      return W(document, re, ({ target: e }) => {
        t.$el.contains(e) || vt(
          document,
          `${xe} ${mi} scroll`,
          ({ defaultPrevented: n, type: o, target: l }) => {
            var c;
            !n && o === xe && e === l && !((c = t.targetEl) != null && c.contains(e)) && t.hide(!1);
          },
          !0
        );
      });
    }
    var Ka = {
      mixins: [Wt, Hn],
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
        align: Ot ? "right" : "left",
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
          const o = pt(`.${t}`, e);
          if (this.dropContainer !== e)
            for (const l of pt(`.${t}`, this.dropContainer)) {
              const c = (n = this.getDropdown(l)) == null ? void 0 : n.targetEl;
              !S(o, l) && c && this.$el.contains(c) && o.push(l);
            }
          return o;
        },
        items({ selNavItem: t }, e) {
          return pt(t, e);
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
        Yt(this._dropbar), delete this._dropbar;
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
            o === at.DOWN && (l == null ? void 0 : l.targetEl) === n && (t.preventDefault(), (e = V(Cn, l.$el)) == null || e.focus()), Ga(t, this.items, l);
          }
        },
        {
          name: "keydown",
          el: ({ dropContainer: t }) => t,
          delegate: ({ clsDrop: t }) => `.${t}`,
          handler(t) {
            var e;
            const { current: n, keyCode: o, target: l } = t;
            if (gi(l) || !S(this.dropdowns, n))
              return;
            const c = this.getActive();
            let d = -1;
            if (o === at.HOME ? d = 0 : o === at.END ? d = "last" : o === at.UP ? d = "previous" : o === at.DOWN ? d = "next" : o === at.ESC && ((e = c.targetEl) == null || e.focus()), ~d) {
              t.preventDefault();
              const p = pt(Cn, n);
              p[Xt(
                d,
                p,
                P(p, (m) => it(m, ":focus"))
              )].focus();
            }
            Ga(t, this.items, c);
          }
        },
        {
          name: "mouseleave",
          el: ({ dropbar: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler() {
            const t = this.getActive();
            t && S(t.mode, "hover") && !this.dropdowns.some((e) => it(e, ":hover")) && t.hide();
          }
        },
        {
          name: "beforeshow",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler({ target: t }) {
            this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && ki(this.dropbarAnchor, this.dropbar), X(t, `${this.clsDrop}-dropbar`));
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
                ...Pn(t, `.${this.clsDrop}`).concat(t).map((l) => tt(l).bottom)
              );
              tt(this.dropbar, {
                left: tt(this.dropbar).left,
                top: this.getDropbarOffset(e.getPositionOffset())
              }), this.transitionTo(
                o - tt(this.dropbar).top + G(w(t, "marginBottom")),
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
            it(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && S(e.mode, "hover") && e.isDelayedHide && !this.items.some((n) => e.targetEl !== n && it(n, ":focus")) && t.preventDefault();
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
          const { dropbar: n } = this, o = qt(n);
          if (e = o < t && e, await ht.cancel([e, n]), e) {
            const l = tt(e).top - tt(n).top - o;
            l > 0 && w(e, "transitionDelay", `${l / t * this.duration}ms`);
          }
          w(e, "clipPath", `polygon(0 0,100% 0,100% ${o}px,0 ${o}px)`), qt(n, o), await Promise.all([
            ht.start(n, { height: t }, this.duration),
            ht.start(
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
          const { $el: e, target: n, targetY: o } = this, { top: l, height: c } = tt(Mt(o || n || e, e));
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
    function Ga(t, e, n) {
      var o, l, c;
      const { current: d, keyCode: p } = t;
      let m = -1;
      p === at.HOME ? m = 0 : p === at.END ? m = "last" : p === at.LEFT ? m = "previous" : p === at.RIGHT ? m = "next" : p === at.TAB && ((o = n.targetEl) == null || o.focus(), (l = n.hide) == null || l.call(n, !1)), ~m && (t.preventDefault(), (c = n.hide) == null || c.call(n, !1), e[Xt(m, e, e.indexOf(n.targetEl || d))].focus());
    }
    var Ad = {
      mixins: [Wt],
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
          return t && (t === !0 && ct(this.input) === e && this.input.nextElementSibling || V(t, e));
        }
      },
      update() {
        var t;
        const { target: e, input: n } = this;
        if (!e)
          return;
        let o;
        const l = gi(e) ? "value" : "textContent", c = e[l], d = (t = n.files) != null && t[0] ? n.files[0].name : it(n, "select") && (o = pt("option", n).filter((p) => p.selected)[0]) ? o.textContent : n.value;
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
      extends: jr,
      mixins: [Wt],
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
            if (o = Math.max(0, Rt(o)), !(n || o || l) || Xa(e) || e[0].some(
              (U, Q) => e.some((st) => st[Q] && st[Q].offsetWidth !== U.offsetWidth)
            ))
              return t.translates = t.scrollColumns = !1;
            let d = Id(e, c), p, m;
            n ? [p, m] = Rd(e, d, n === "next") : p = Bd(e);
            const y = p.map(
              (U) => Be(U, "offsetHeight") + d * (U.length - 1)
            ), $ = Math.max(0, ...y);
            let O, R, B;
            return (o || l) && (O = y.map(
              (U, Q) => l ? $ - U + o : o / (Q % 2 || 8)
            ), l || (o = Math.max(
              ...y.map((U, Q) => U + O[Q] - $)
            )), R = Rt(this.parallaxStart, "height", this.$el, !0), B = Rt(this.parallaxEnd, "height", this.$el, !0)), {
              columns: p,
              translates: m,
              scrollColumns: O,
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
              scrolled: e && !Xa(t) ? Pi(this.$el, n, o) : !1
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
    function Xa(t) {
      return t.flat().some((e) => w(e, "position") === "absolute");
    }
    function Rd(t, e, n) {
      const o = [], l = [], c = Array(t[0].length).fill(0);
      let d = 0;
      for (let p of t) {
        Ot && (p = p.reverse());
        let m = 0;
        for (const y in p) {
          const { offsetWidth: $, offsetHeight: O } = p[y], R = n ? y : c.indexOf(Math.min(...c));
          ao(o, R, p[y]), ao(l, R, [
            (R - y) * $ * (Ot ? -1 : 1),
            c[R] - d
          ]), c[R] += O + e, m = Math.max(m, O);
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
        elements: ({ target: t }, e) => pt(t, e)
      },
      observe: ae({
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
      const n = N(t).height - cn(t, "height", "content-box");
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
      observe: ae({ target: ({ target: t }) => t }),
      update: {
        read() {
          return this.target ? { height: this.target.offsetHeight } : !1;
        },
        write({ height: t }) {
          w(this.$el, { minHeight: t });
        },
        events: ["resize"]
      }
    }, Ld = {
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
        ae({ target: ({ $el: t }) => Ue(t) })
      ],
      update: {
        read() {
          if (!xt(this.$el))
            return !1;
          let t = "";
          const e = cn(this.$el, "height", "content-box"), { body: n, scrollingElement: o } = document, l = Ce(this.$el), { height: c } = Qt(
            l === n ? o : l
          ), d = o === l || n === l;
          if (t = `calc(${d ? "100vh" : `${c}px`}`, this.expand) {
            const p = N(l).height - N(this.$el).height;
            t += ` - ${p}px`;
          } else {
            if (this.offsetTop)
              if (d) {
                const p = this.offsetTop === !0 ? this.$el : Mt(this.offsetTop, this.$el), { top: m } = tt(p);
                t += m > 0 && m < c / 2 ? ` - ${m}px` : "";
              } else
                t += ` - ${cn(l, "height", w(l, "boxSizing"))}px`;
            this.offsetBottom === !0 ? t += ` - ${N(this.$el.nextElementSibling).height}px` : fe(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && A(this.offsetBottom, "px") ? t += ` - ${G(this.offsetBottom)}px` : ft(this.offsetBottom) && (t += ` - ${N(Mt(this.offsetBottom, this.$el)).height}px`);
          }
          return t += `${e ? ` - ${e}px` : ""})`, { minHeight: t };
        },
        write({ minHeight: t }) {
          w(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"]
      }
    }, Ud = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', Md = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', zd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Hd = '<svg width="20" height="20" viewBox="0 0 20 20"><rect width="1" height="11" x="9" y="4"/><rect width="11" height="1" x="4" y="9"/></svg>', qd = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', Wd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Vd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Jd = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1"/><rect width="20" height="2" y="9" class="line-2"/><rect width="20" height="2" y="9" class="line-3"/><rect width="20" height="2" y="15" class="line-4"/></svg>', Kd = '<svg width="40" height="40" viewBox="0 0 40 40"><rect width="1" height="40" x="19" y="0"/><rect width="40" height="1" x="0" y="19"/></svg>', Gd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', Xd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Ya = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', Yd = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', Qd = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', Zd = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', tf = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', ef = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', nf = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', sf = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', of = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>', Qa = {
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
          return this.svgEl && e !== this.svgEl && Yt(this.svgEl), af.call(this, e, t), this.svgEl = e;
        }, rt);
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected || ($s(this.$el) && (this.$el.hidden = !1), Yt(t), this.svgEl = null);
        }), this.svg = null;
      },
      methods: {
        async getSvg() {
        }
      }
    };
    function rf(t, e) {
      if ($s(e) || bt(e, "canvas")) {
        e.hidden = !0;
        const o = e.nextElementSibling;
        return Za(t, o) ? o : ki(e, t);
      }
      const n = e.lastElementChild;
      return Za(t, n) ? n : St(e, t);
    }
    function Za(t, e) {
      return bt(t, "svg") && bt(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function af(t, e) {
      const n = ["width", "height"];
      let o = n.map((c) => this[c]);
      o.some((c) => c) || (o = n.map((c) => F(e, c)));
      const l = F(e, "viewBox");
      l && !o.some((c) => c) && (o = l.split(" ").slice(2)), o.forEach((c, d) => F(t, n[d], G(c) * this.ratio || null));
    }
    var lf = {
      mixins: [Qa],
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
        Ii({
          async handler() {
            const t = await this.svg;
            t && tl.call(this, t);
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
        t && (tl.call(this, t), this.strokeAnimation && df(t));
      },
      methods: {
        async getSvg() {
          return bt(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t) => vt(this.$el, "load", t)), uf(await cf(this.src), this.icon) || Promise.reject("SVG not found.");
        }
      }
    };
    function tl(t) {
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
    const cf = oe(async (t) => t ? v(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function uf(t, e) {
      return e && S(t, "<symbol") && (t = hf(t)[e] || t), nl(t);
    }
    const el = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, hf = oe(function(t) {
      const e = {};
      el.lastIndex = 0;
      let n;
      for (; n = el.exec(t); )
        e[n[3]] = `<svg ${n[1]}svg>`;
      return e;
    });
    function df(t) {
      const e = ga(t);
      e && w(t, "--uk-animation-stroke", e);
    }
    function nl(t) {
      const e = document.createElement("template");
      return e.innerHTML = t, e.content.firstElementChild;
    }
    const Vi = {
      spinner: sf,
      totop: of,
      marker: Hd,
      "close-icon": Ud,
      "close-large": Md,
      "drop-parent-icon": zd,
      "nav-parent-icon": Wd,
      "nav-parent-icon-large": qd,
      "navbar-parent-icon": Vd,
      "navbar-toggle-icon": Jd,
      "overlay-icon": Kd,
      "pagination-next": Gd,
      "pagination-previous": Xd,
      "search-icon": Ya,
      "search-medium": Qd,
      "search-large": Yd,
      "search-toggle-icon": Ya,
      "slidenav-next": tf,
      "slidenav-next-large": Zd,
      "slidenav-previous": nf,
      "slidenav-previous-large": ef
    }, lo = {
      install: $f,
      mixins: [Qa],
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
      mixins: [Ni],
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
      mixins: [Ni],
      beforeConnect() {
        const t = this.$el.closest("a,button");
        F(t, "role", this.role !== null && bt(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !$e(t, "aria-label") && F(t, "aria-label", e);
      }
    }, il = {
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
    }, Ji = {};
    function $f(t) {
      t.icon.add = (e, n) => {
        const o = ft(e) ? { [e]: n } : e;
        nn(o, (l, c) => {
          Vi[c] = l, delete Ji[c];
        }), t._initialized && Oe(
          document.body,
          (l) => nn(t.getComponents(l), (c) => {
            c.$options.isIcon && c.icon in o && c.$reset();
          })
        );
      };
    }
    const xf = { twitter: "x" };
    function Sf(t) {
      return t = xf[t] || t, Vi[t] ? (Ji[t] || (Ji[t] = nl(Vi[_f(t)] || Vi[t])), Ji[t].cloneNode(!0)) : null;
    }
    function _f(t) {
      return Ot ? bs(bs(t, "left", "right"), "previous", "next") : t;
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
          const t = uo(this.$el) ? this.$el : Tf(this.$el, this.dataSrc, this.sources);
          return On(t, "loading"), co(this.$el, t.currentSrc), this.img = t;
        }
      }
    };
    function co(t, e) {
      if (uo(t)) {
        const n = ct(t);
        (bt(n, "picture") ? ut(n) : [t]).forEach((l) => sl(l, l));
      } else e && !S(t.style.backgroundImage, e) && (w(t, "backgroundImage", `url(${Es(e)})`), D(t, ln("load", !1)));
    }
    const Of = ["data-src", "data-srcset", "sizes"];
    function sl(t, e) {
      for (const n of Of) {
        const o = Bt(t, n);
        o && F(e, n.replace(/^(data-)+/, ""), o);
      }
    }
    function Tf(t, e, n) {
      const o = new Image();
      return Cf(o, n), sl(t, o), o.onload = () => {
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
        t = hn(t);
      return C(t) || (t = [t]), t.filter((e) => !ui(e));
    }
    function uo(t) {
      return bt(t, "img");
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
        target: ({ target: t }, e) => t ? pt(t, e) : e
      },
      observe: [
        dn({
          handler(t) {
            this.isIntersecting = t.some(({ isIntersecting: e }) => e), this.$emit();
          },
          target: ({ target: t }) => t,
          args: { intersecting: !1 }
        }),
        Ii({
          target: ({ target: t }) => t,
          options: { attributes: !0, attributeFilter: ["class"], attributeOldValue: !0 }
        }),
        {
          target: ({ target: t }) => t,
          observe: (t, e) => {
            const n = jn(
              [...et(t), document.documentElement],
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
          for (const t of et(this.target)) {
            let e = !this.selActive || it(t, this.selActive) ? Rf(t) : "";
            e !== !1 && fi(t, "uk-light uk-dark", e);
          }
        }
      }
    };
    function Rf(t) {
      const e = N(t), n = N(window);
      if (!hi(e, n))
        return !1;
      const { left: o, top: l, height: c, width: d } = e;
      let p;
      for (const m of [0.25, 0.5, 0.75]) {
        const y = t.ownerDocument.elementsFromPoint(
          Math.max(0, Math.min(o + d * m, n.width - 1)),
          Math.max(0, Math.min(l + c / 2, n.height - 1))
        );
        for (const $ of y) {
          if (t.contains($) || !If($) || $.closest('[class*="-leave"]') && y.some((R) => $ !== R && it(R, '[class*="-enter"]')))
            continue;
          const O = w($, "--uk-inverse");
          if (O) {
            if (O === p)
              return `uk-${O}`;
            p = O;
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
        t = ct(t);
      }
      return !0;
    }
    var Bf = {
      mixins: [Wt, ji],
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
      observe: ae(),
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
            bt(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            H(this.panel, "uk-margin-auto-vertical") ? X(this.$el, "uk-flex") : w(this.$el, "display", "block"), qt(this.$el);
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            w(this.$el, "display", ""), ot(this.$el, "uk-flex");
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
        return M(
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
      extends: Ha,
      data: {
        targets: "> .uk-parent",
        toggle: "> a",
        content: "> ul"
      }
    };
    const ho = "uk-navbar-transparent";
    var jf = {
      extends: Ka,
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
          const t = H(this.$el, "uk-navbar-justify"), e = pt(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
          for (const n of e) {
            const o = t ? pt(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", n).length : "";
            w(n, "flexGrow", o);
          }
        }
      },
      events: [
        {
          name: "show",
          el: ({ dropContainer: t }) => t,
          handler({ target: t }) {
            this.getTransparentMode(t) === "remove" && H(this.navbarContainer, ho) && (ot(this.navbarContainer, ho), this._transparent = !0);
          }
        },
        {
          name: "hide",
          el: ({ dropContainer: t }) => t,
          async handler() {
            await Lf(), !this.getActive() && this._transparent && (X(this.navbarContainer, ho), this._transparent = null);
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
          const { top: e, height: n } = tt(this.navbarContainer);
          return e + (this.dropbarTransparentMode === "behind" ? 0 : n + t);
        }
      }
    };
    function Lf() {
      return new Promise((t) => setTimeout(t));
    }
    var Uf = {
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
          return t === "reveal" ? ct(this.panel) : this.panel;
        }
      },
      observe: Dr({ filter: ({ swiping: t }) => t }),
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
            this.mode === "reveal" && !H(ct(this.panel), this.clsMode) && X(xi(this.panel, "<div>"), this.clsMode);
            const { body: t, scrollingElement: e } = document;
            X(t, this.clsContainer, this.clsFlip), w(t, "touchAction", "pan-y pinch-zoom"), w(this.$el, "display", "block"), w(this.panel, "maxWidth", e.clientWidth), X(this.$el, this.clsOverlay), X(
              this.panel,
              this.clsSidebarAnimation,
              this.mode === "reveal" ? "" : this.clsMode
            ), qt(t), X(t, this.clsContainerAnimation), this.clsContainerAnimation && Mf();
          }
        },
        {
          name: "hide",
          self: !0,
          handler() {
            ot(document.body, this.clsContainerAnimation), w(document.body, "touchAction", "");
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.clsContainerAnimation && zf(), this.mode === "reveal" && H(ct(this.panel), this.clsMode) && Fn(this.panel), ot(this.panel, this.clsSidebarAnimation, this.clsMode), ot(this.$el, this.clsOverlay), w(this.$el, "display", ""), w(this.panel, "maxWidth", ""), ot(document.body, this.clsContainer, this.clsFlip);
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
      ol().content += ",user-scalable=0";
    }
    function zf() {
      const t = ol();
      t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function ol() {
      return V('meta[name="viewport"]', document.head) || St(document.head, '<meta name="viewport">');
    }
    var Hf = {
      mixins: [Wt],
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
      observe: ae({
        target: ({ container: t, content: e }) => [t, e]
      }),
      update: {
        read() {
          return !this.content || !this.container || !xt(this.$el) ? !1 : {
            max: Math.max(
              this.minHeight,
              qt(this.container) - (N(this.content).height - qt(this.$el))
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
          t = t && V(t) || document.body, D(this.$el, "beforescroll", [this, t]) && (await Er(t, { offset: this.offset }), D(this.$el, "scrolled", [this, t]));
        }
      }
    };
    const Qn = /* @__PURE__ */ new Set();
    function Vf(t) {
      Qn.size || W(document, "click", rl), Qn.add(t);
    }
    function Jf(t) {
      Qn.delete(t), Qn.size || Se(document, "click", rl);
    }
    function rl(t) {
      if (!t.defaultPrevented)
        for (const e of Qn)
          e.$el.contains(t.target) && an(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(xs(e.$el)));
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
        elements: ({ target: t }, e) => t ? pt(t, e) : [e]
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
          ot(t, fo, (e == null ? void 0 : e.cls) || "");
        delete this.elementData;
      },
      observe: dn({
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
            const d = () => ot(t, c);
            e ? l.off = vt(t, "animationcancel animationend", d, {
              self: !0
            }) : d();
          }
          D(t, e ? "inview" : "outview"), l.inview = e;
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
        links: ({ target: t }, e) => pt(t, e).filter((n) => an(n)),
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
            const t = this.links.map((m) => xs(m) || m.ownerDocument), { length: e } = t;
            if (!e || !xt(this.$el))
              return !1;
            const n = Ce(t, !0), { scrollTop: o, scrollHeight: l } = n, c = Qt(n), d = l - c.height;
            let p = !1;
            if (o >= d)
              p = e - 1;
            else {
              const m = this.offset + N(Ms()).height + c.height * 0.1;
              for (let y = 0; y < t.length && !(tt(t[y]).top - c.top - m > 0); y++)
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
    }, Xf = {
      mixins: [Wt, ji],
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
        this.start = al(this.start || this.top), this.end = al(this.end || this.bottom), this.placeholder = V("+ .uk-sticky-placeholder", this.$el) || V('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
      },
      beforeDisconnect() {
        this.isFixed && (this.hide(), ot(this.target, this.clsInactive)), ll(this.$el), Yt(this.placeholder), this.placeholder = null;
      },
      observe: [
        Js(),
        Mn({ target: () => document.scrollingElement }),
        ae({
          target: ({ $el: t }) => [t, Ki(t), document.scrollingElement],
          handler(t) {
            this.$emit(
              this._data.resized && t.some(({ target: e }) => e === Ki(this.$el)) ? "update" : "resize"
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
              const e = tt(V(location.hash)), n = tt(this.$el);
              this.isFixed && hi(e, n) && (t.scrollTop = Math.ceil(
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
            const c = qt(window), d = Math.max(
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
            let O = Rt(this.offset, "height", o ? this.$el : $);
            y === "bottom" && (t < c || this.overflowFlip) && (O += c - t);
            const R = this.overflowFlip ? 0 : Math.max(0, t + O - m), B = tt($).top - // offset possible `transform: translateY` animation 'uk-animation-slide-top' while hiding
            new DOMMatrix(w($, "transform")).m42, U = N(this.$el).height, Q = (this.start === !1 ? B : po(this.start, this.$el, B)) - O, st = this.end === !1 ? d : Math.min(
              d,
              po(this.end, this.$el, B + t, !0) - U - O + R
            );
            return o = !this.showOnUp && Q + O === B && st === Math.min(
              d,
              po(!0, this.$el, 0, !0) - U - O + R
            ) && w(Ki(this.$el), "overflowY") !== "hidden", {
              start: Q,
              end: st,
              offset: O,
              overflow: R,
              height: t,
              elHeight: U,
              width: e,
              margin: n,
              top: Nn($)[0],
              sticky: o,
              viewport: m,
              maxScrollHeight: d
            };
          },
          write({ height: t, width: e, margin: n, offset: o, sticky: l }) {
            if ((this.inactive || l || !this.isFixed) && ll(this.$el), this.inactive)
              return;
            l && (t = e = n = 0, w(this.$el, { position: "sticky", top: o }));
            const { placeholder: c } = this;
            w(c, { height: t, width: e, margin: n }), (ct(c) !== ct(this.$el) || l ^ be(c) < be(this.$el)) && ((l ? yi : ki)(this.$el, c), c.hidden = !0);
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
            const $ = Math.min(document.scrollingElement.scrollTop, y), O = t <= $ ? "down" : "up", R = this.isFixed ? this.placeholder : this.$el;
            return {
              dir: O,
              prevDir: e,
              scroll: $,
              prevScroll: t,
              below: $ > tt(R).top + (m ? Math.min(p, d) : p),
              offsetParentTop: tt(R.offsetParent).top,
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
            const O = Date.now();
            if ((O - o > 300 || l !== c) && (t.initScroll = d, t.initTimestamp = O), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - d) <= 30 && Math.abs(p - d) <= 10))
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
          this.setActive(!1), ot(this.$el, this.clsFixed, this.clsBelow), e ? w(this.$el, "top", t) : w(this.$el, {
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
            let O = "fixed";
            e > c && (d += c - p + o - n, O = "absolute"), w(this.$el, { position: O, width: t, marginTop: 0 }, "important");
          }
          w(this.$el, "top", d - o), this.setActive($), $t(this.$el, this.clsBelow, y), X(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          this.active = t, t ? (fi(this.target, this.clsInactive, this.clsActive), e !== t && D(this.$el, "active")) : (fi(this.target, this.clsActive, this.clsInactive), e !== t && (go(this.target), D(this.$el, "inactive")));
        }
      }
    };
    function po(t, e, n, o) {
      if (!t)
        return 0;
      if (fe(t) || ft(t) && t.match(/^-?\d/))
        return n + Rt(t, "height", e, !0);
      {
        const l = t === !0 ? Ki(e) : Mt(t, e);
        return tt(l).bottom - (o && (l != null && l.contains(e)) ? G(w(l, "paddingBottom")) + G(w(l, "borderBottomWidth")) : 0);
      }
    }
    function al(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function ll(t) {
      w(t, { position: "", top: "", marginTop: "", width: "" });
    }
    const mo = "uk-transition-disable";
    function go(t) {
      H(t, mo) || (X(t, mo), requestAnimationFrame(() => ot(t, mo)));
    }
    function Ki(t) {
      for (; t = ct(t); )
        if (xt(t))
          return t;
    }
    const vo = ".uk-disabled *, .uk-disabled, [disabled]";
    var cl = {
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
          return this.connects.map((t) => ut(t)).flat();
        },
        toggles: ({ toggle: t }, e) => pt(t, e),
        children(t, e) {
          return ut(e).filter(
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
            ut(e).forEach((n, o) => $t(n, this.cls, o === t));
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
        Bi({ targets: ({ connectChildren: t }) => t }),
        Dr({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })
      ],
      events: [
        {
          name: "click keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            !it(t.current, vo) && (t.type === "click" || t.keyCode === at.SPACE) && (t.preventDefault(), this.show(t.current));
          }
        },
        {
          name: "keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            const { current: e, keyCode: n } = t, o = it(this.$el, this.selVertical);
            let l = n === at.HOME ? 0 : n === at.END ? "last" : n === at.LEFT && !o || n === at.UP && o ? "previous" : n === at.RIGHT && !o || n === at.DOWN && o ? "next" : -1;
            if (~l) {
              t.preventDefault();
              const c = this.toggles.filter((p) => !it(p, vo)), d = c[Xt(l, c, c.indexOf(e))];
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
          bt(e, "ul") && F(e, "role", "presentation");
        F(ut(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const n = this.toggles[e], o = (t = this.connects[0]) == null ? void 0 : t.children[e];
          F(n, "role", "tab"), o && (n.id = We(this, n), o.id = We(this, o), F(n, "aria-controls", o.id), F(o, { role: "tabpanel", "aria-labelledby": n.id }));
        }
        F(this.$el, "aria-orientation", it(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return P(this.children, (t) => H(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter((d) => !it(d, vo)), n = this.index(), o = Xt(
            !yt(t) || S(e, t) ? t : 0,
            e,
            Xt(this.toggles[n], e)
          ), l = Xt(e[o], this.toggles);
          this.children.forEach((d, p) => {
            $t(d, this.cls, l === p), F(this.toggles[p], {
              "aria-selected": l === p,
              tabindex: l === p ? null : -1
            });
          });
          const c = n >= 0 && n !== o;
          this.connects.forEach(async ({ children: d }) => {
            const p = T(d).filter(
              (m, y) => y !== l && H(m, this.cls)
            );
            await this.toggleElement(p, !1, c) && await this.toggleElement(d[l], !0, c);
          });
        }
      }
    }, Yf = {
      mixins: [Wt],
      extends: cl,
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
      mixins: [ji, ze],
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
        S(this.mode, "media") || (vi(this.$el) || F(this.$el, "tabindex", "0"), !this.cls && bt(this.$el, "a") && F(this.$el, "role", "button"));
      },
      observe: Bi({ targets: ({ target: t }) => t }),
      events: [
        {
          name: re,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            this._preventClick = null, !(!le(t) || Ht(this._showState) || this.$el.disabled) && (D(this.$el, "focus"), vt(
              document,
              re,
              () => D(this.$el, "blur"),
              !0,
              (e) => !this.$el.contains(e.target)
            ), S(this.mode, "click") && (this._preventClick = !0));
          }
        },
        {
          // mouseenter mouseleave are added because of Firefox bug,
          // where pointerleave is triggered immediately after pointerenter on scroll
          name: `mouseenter mouseleave ${De} ${rn} focus blur`,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            if (le(t) || this.$el.disabled)
              return;
            const e = S(["mouseenter", De, "focus"], t.type), n = this.isToggled(this.target);
            if (!e && (!Ht(this._showState) || t.type !== "blur" && it(this.$el, ":focus") || t.type === "blur" && it(this.$el, ":hover"))) {
              n === this._showState && (this._showState = null);
              return;
            }
            e && Ht(this._showState) && n !== this._showState || (this._showState = e ? n : null, this.toggle(`toggle${e ? "show" : "hide"}`));
          }
        },
        {
          name: "keydown",
          filter: ({ $el: t, mode: e }) => S(e, "click") && !bt(t, "input"),
          handler(t) {
            t.keyCode === Qf && (t.preventDefault(), this.$el.click());
          }
        },
        {
          name: "click",
          filter: ({ mode: t }) => ["click", "hover"].some((e) => S(t, e)),
          handler(t) {
            let e;
            (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && it(this.target, e.hash))) && t.preventDefault(), !this._preventClick && S(this.mode, "click") && this.toggle();
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
          if (!D(this.target, t || "toggle", [this]))
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
      Accordion: Ha,
      Alert: yd,
      Close: vf,
      Cover: xd,
      Drop: Va,
      DropParentIcon: Je,
      Dropdown: Va,
      Dropnav: Ka,
      FormCustom: Ad,
      Grid: Pd,
      HeightMatch: Fd,
      HeightPlaceholder: jd,
      HeightViewport: Ld,
      Icon: lo,
      Img: Ef,
      Inverse: Pf,
      Leader: Bf,
      Margin: jr,
      Marker: bf,
      Modal: Ff,
      Nav: Df,
      NavParentIcon: ff,
      Navbar: jf,
      NavbarParentIcon: Je,
      NavbarToggleIcon: gf,
      Offcanvas: Uf,
      OverflowAuto: Hf,
      OverlayIcon: Je,
      PaginationNext: yf,
      PaginationPrevious: kf,
      Responsive: qf,
      Scroll: Wf,
      Scrollspy: Kf,
      ScrollspyNav: Gf,
      SearchIcon: pf,
      SlidenavNext: il,
      SlidenavPrevious: il,
      Spinner: mf,
      Sticky: Xf,
      Svg: lf,
      Switcher: cl,
      Tab: Yf,
      Toggle: Zf,
      Totop: wf,
      Video: qa
    });
    return nn(tp, (t, e) => te.component(e, t)), pd(te), nn(fd, (t, e) => te.component(e, t)), te;
  });
})(ql);
var Jp = ql.exports;
const Wl = /* @__PURE__ */ Vp(Jp);
function Vl(i, s) {
  return function() {
    return i.apply(s, arguments);
  };
}
const { toString: Kp } = Object.prototype, { getPrototypeOf: qo } = Object, as = /* @__PURE__ */ ((i) => (s) => {
  const a = Kp.call(s);
  return i[a] || (i[a] = a.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), he = (i) => (i = i.toLowerCase(), (s) => as(s) === i), ls = (i) => (s) => typeof s === i, { isArray: kn } = Array, ni = ls("undefined");
function Gp(i) {
  return i !== null && !ni(i) && i.constructor !== null && !ni(i.constructor) && ne(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const Jl = he("ArrayBuffer");
function Xp(i) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(i) : s = i && i.buffer && Jl(i.buffer), s;
}
const Yp = ls("string"), ne = ls("function"), Kl = ls("number"), cs = (i) => i !== null && typeof i == "object", Qp = (i) => i === !0 || i === !1, Xi = (i) => {
  if (as(i) !== "object")
    return !1;
  const s = qo(i);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
}, Zp = he("Date"), tm = he("File"), em = he("Blob"), nm = he("FileList"), im = (i) => cs(i) && ne(i.pipe), sm = (i) => {
  let s;
  return i && (typeof FormData == "function" && i instanceof FormData || ne(i.append) && ((s = as(i)) === "formdata" || // detect form-data instance
  s === "object" && ne(i.toString) && i.toString() === "[object FormData]"));
}, om = he("URLSearchParams"), [rm, am, lm, cm] = ["ReadableStream", "Request", "Response", "Headers"].map(he), um = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ri(i, s, { allOwnKeys: a = !1 } = {}) {
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
const Xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xl = (i) => !ni(i) && i !== Xe;
function To() {
  const { caseless: i } = Xl(this) && this || {}, s = {}, a = (r, u) => {
    const h = i && Gl(s, u) || u;
    Xi(s[h]) && Xi(r) ? s[h] = To(s[h], r) : Xi(r) ? s[h] = To({}, r) : kn(r) ? s[h] = r.slice() : s[h] = r;
  };
  for (let r = 0, u = arguments.length; r < u; r++)
    arguments[r] && ri(arguments[r], a);
  return s;
}
const hm = (i, s, a, { allOwnKeys: r } = {}) => (ri(s, (u, h) => {
  a && ne(u) ? i[h] = Vl(u, a) : i[h] = u;
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
    i = a !== !1 && qo(i);
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
}, vm = /* @__PURE__ */ ((i) => (s) => i && s instanceof i)(typeof Uint8Array < "u" && qo(Uint8Array)), bm = (i, s) => {
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
), pl = (({ hasOwnProperty: i }) => (s, a) => i.call(s, a))(Object.prototype), $m = he("RegExp"), Yl = (i, s) => {
  const a = Object.getOwnPropertyDescriptors(i), r = {};
  ri(a, (u, h) => {
    let f;
    (f = s(u, h, i)) !== !1 && (r[h] = f || u);
  }), Object.defineProperties(i, r);
}, xm = (i) => {
  Yl(i, (s, a) => {
    if (ne(i) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
      return !1;
    const r = i[a];
    if (ne(r)) {
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
}, Em = (i, s) => i != null && Number.isFinite(i = +i) ? i : s, wo = "abcdefghijklmnopqrstuvwxyz", ml = "0123456789", Ql = {
  DIGIT: ml,
  ALPHA: wo,
  ALPHA_DIGIT: wo + wo.toUpperCase() + ml
}, Om = (i = 16, s = Ql.ALPHA_DIGIT) => {
  let a = "";
  const { length: r } = s;
  for (; i--; )
    a += s[Math.random() * r | 0];
  return a;
};
function Tm(i) {
  return !!(i && ne(i.append) && i[Symbol.toStringTag] === "FormData" && i[Symbol.iterator]);
}
const Cm = (i) => {
  const s = new Array(10), a = (r, u) => {
    if (cs(r)) {
      if (s.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        s[u] = r;
        const h = kn(r) ? [] : {};
        return ri(r, (f, g) => {
          const k = a(f, u + 1);
          !ni(k) && (h[g] = k);
        }), s[u] = void 0, h;
      }
    }
    return r;
  };
  return a(i, 0);
}, Am = he("AsyncFunction"), Pm = (i) => i && (cs(i) || ne(i)) && ne(i.then) && ne(i.catch), Zl = ((i, s) => i ? setImmediate : s ? ((a, r) => (Xe.addEventListener("message", ({ source: u, data: h }) => {
  u === Xe && h === a && r.length && r.shift()();
}, !1), (u) => {
  r.push(u), Xe.postMessage(a, "*");
}))(`axios@${Math.random()}`, []) : (a) => setTimeout(a))(
  typeof setImmediate == "function",
  ne(Xe.postMessage)
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
  isPlainObject: Xi,
  isReadableStream: rm,
  isRequest: am,
  isResponse: lm,
  isHeaders: cm,
  isUndefined: ni,
  isDate: Zp,
  isFile: tm,
  isBlob: em,
  isRegExp: $m,
  isFunction: ne,
  isStream: im,
  isURLSearchParams: om,
  isTypedArray: vm,
  isFileList: nm,
  forEach: ri,
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
  hasOwnProperty: pl,
  hasOwnProp: pl,
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
function gl(i, s, a) {
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
  function b(P, C, T) {
    let M = P;
    if (P && !T && typeof P == "object") {
      if (_.endsWith(C, "{}"))
        C = r ? C : C.slice(0, -2), P = JSON.stringify(P);
      else if (_.isArray(P) && Bm(P) || (_.isFileList(P) || _.endsWith(C, "[]")) && (M = _.toArray(P)))
        return C = nc(C), M.forEach(function(q, z) {
          !(_.isUndefined(q) || q === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? gl([C], z, h) : f === null ? C : C + "[]",
            k(q)
          );
        }), !1;
    }
    return Co(P) ? !0 : (s.append(gl(T, C, h), k(P)), !1);
  }
  const v = [], A = Object.assign(Fm, {
    defaultVisitor: b,
    convertValue: k,
    isVisitable: Co
  });
  function S(P, C) {
    if (!_.isUndefined(P)) {
      if (v.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      v.push(P), _.forEach(P, function(T, M) {
        (!(_.isUndefined(T) || T === null) && u.call(
          s,
          T,
          _.isString(M) ? M.trim() : M,
          C,
          A
        )) === !0 && S(T, C ? C.concat(M) : [M]);
      }), v.pop();
    }
  }
  if (!_.isObject(i))
    throw new TypeError("data must be an object");
  return S(i), s;
}
function vl(i) {
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
function Wo(i, s) {
  this._pairs = [], i && us(i, this, s);
}
const ic = Wo.prototype;
ic.append = function(i, s) {
  this._pairs.push([i, s]);
};
ic.toString = function(i) {
  const s = i ? function(a) {
    return i.call(this, a, vl);
  } : vl;
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
  if (u ? h = u(s, a) : h = _.isURLSearchParams(s) ? s.toString() : new Wo(s, a).toString(r), h) {
    const f = i.indexOf("#");
    f !== -1 && (i = i.slice(0, f)), i += (i.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return i;
}
let bl = class {
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
}, Dm = typeof URLSearchParams < "u" ? URLSearchParams : Wo, jm = typeof FormData < "u" ? FormData : null, Lm = typeof Blob < "u" ? Blob : null, Um = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Dm,
    FormData: jm,
    Blob: Lm
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Vo = typeof window < "u" && typeof document < "u", Ao = typeof navigator == "object" && navigator || void 0, Mm = Vo && (!Ao || ["ReactNative", "NativeScript", "NS"].indexOf(Ao.product) < 0), zm = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Hm = Vo && window.location.href || "http://localhost", qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Vo,
  hasStandardBrowserEnv: Mm,
  hasStandardBrowserWebWorkerEnv: zm,
  navigator: Ao,
  origin: Hm
}, Symbol.toStringTag, { value: "Module" })), Jt = {
  ...qm,
  ...Um
};
function Wm(i, s) {
  return us(i, new Jt.classes.URLSearchParams(), Object.assign({
    visitor: function(a, r, u, h) {
      return Jt.isNode && _.isBuffer(a) ? (this.append(r, a.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
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
const ai = {
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
    const s = this.transitional || ai.transitional, a = s && s.forcedJSONParsing, r = this.responseType === "json";
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
_.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  ai.headers[i] = {};
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
}, wl = Symbol("internals");
function Zn(i) {
  return i && String(i).trim().toLowerCase();
}
function Yi(i) {
  return i === !1 || i == null ? i : _.isArray(i) ? i.map(Yi) : String(i);
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
let Kt = class {
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
      (!A || u[A] === void 0 || b === !0 || b === void 0 && u[A] !== !1) && (u[A || k] = Yi(g));
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
        a[f] = Yi(u), delete a[h];
        return;
      }
      const g = s ? Zm(h) : String(h).trim();
      g !== h && delete a[h], a[g] = Yi(u), r[g] = !0;
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
    const a = (this[wl] = this[wl] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function u(h) {
      const f = Zn(h);
      a[f] || (tg(r, h), a[f] = !0);
    }
    return _.isArray(s) ? s.forEach(u) : u(s), this;
  }
};
Kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(Kt.prototype, ({ value: i }, s) => {
  let a = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => i,
    set(r) {
      this[a] = r;
    }
  };
});
_.freezeMethods(Kt);
function ko(i, s) {
  const a = this || ai, r = s || a, u = Kt.from(r.headers);
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
const ts = (i, s, a = 3) => {
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
}, yl = (i, s) => {
  const a = i != null;
  return [(r) => s[0]({
    lengthComputable: a,
    total: i,
    loaded: r
  }), s[1]];
}, kl = (i) => (...s) => _.asap(() => i(...s)), sg = Jt.hasStandardBrowserEnv ? (
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
), og = Jt.hasStandardBrowserEnv ? (
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
const $l = (i) => i instanceof Kt ? { ...i } : i;
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
const uc = (i) => {
  const s = tn({}, i);
  let { data: a, withXSRFToken: r, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = s;
  s.headers = f = Kt.from(f), s.url = sc(cc(s.baseURL, s.url), i.params, i.paramsSerializer), g && f.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let k;
  if (_.isFormData(a)) {
    if (Jt.hasStandardBrowserEnv || Jt.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if ((k = f.getContentType()) !== !1) {
      const [b, ...v] = k ? k.split(";").map((A) => A.trim()).filter(Boolean) : [];
      f.setContentType([b || "multipart/form-data", ...v].join("; "));
    }
  }
  if (Jt.hasStandardBrowserEnv && (r && _.isFunction(r) && (r = r(s)), r || r !== !1 && sg(s.url))) {
    const b = u && h && og.read(h);
    b && f.set(u, b);
  }
  return s;
}, lg = typeof XMLHttpRequest < "u", cg = lg && function(i) {
  return new Promise(function(s, a) {
    const r = uc(i);
    let u = r.data;
    const h = Kt.from(r.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: k } = r, b, v, A, S, P;
    function C() {
      S && S(), P && P(), r.cancelToken && r.cancelToken.unsubscribe(b), r.signal && r.signal.removeEventListener("abort", b);
    }
    let T = new XMLHttpRequest();
    T.open(r.method.toUpperCase(), r.url, !0), T.timeout = r.timeout;
    function M() {
      if (!T)
        return;
      const z = Kt.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), Y = {
        data: !f || f === "text" || f === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: z,
        config: i,
        request: T
      };
      lc(function(Pt) {
        s(Pt), C();
      }, function(Pt) {
        a(Pt), C();
      }, Y), T = null;
    }
    "onloadend" in T ? T.onloadend = M : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(M);
    }, T.onabort = function() {
      T && (a(new J("Request aborted", J.ECONNABORTED, i, T)), T = null);
    }, T.onerror = function() {
      a(new J("Network Error", J.ERR_NETWORK, i, T)), T = null;
    }, T.ontimeout = function() {
      let z = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const Y = r.transitional || oc;
      r.timeoutErrorMessage && (z = r.timeoutErrorMessage), a(new J(
        z,
        Y.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
        i,
        T
      )), T = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in T && _.forEach(h.toJSON(), function(z, Y) {
      T.setRequestHeader(Y, z);
    }), _.isUndefined(r.withCredentials) || (T.withCredentials = !!r.withCredentials), f && f !== "json" && (T.responseType = r.responseType), k && ([A, P] = ts(k, !0), T.addEventListener("progress", A)), g && T.upload && ([v, S] = ts(g), T.upload.addEventListener("progress", v), T.upload.addEventListener("loadend", S)), (r.cancelToken || r.signal) && (b = (z) => {
      T && (a(!z || z.type ? new $n(null, i, T) : z), T.abort(), T = null);
    }, r.cancelToken && r.cancelToken.subscribe(b), r.signal && (r.signal.aborted ? b() : r.signal.addEventListener("abort", b)));
    const q = eg(r.url);
    if (q && Jt.protocols.indexOf(q) === -1) {
      a(new J("Unsupported protocol " + q + ":", J.ERR_BAD_REQUEST, i));
      return;
    }
    T.send(u || null);
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
}, xl = (i, s, a, r) => {
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
  const s = new Request(Jt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return i = !0, "half";
    }
  }).headers.has("Content-Type");
  return i && !s;
}), Sl = 64 * 1024, Po = hc && dc(() => _.isReadableStream(new Response("").body)), es = {
  stream: Po && ((i) => i.body)
};
hs && ((i) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !es[s] && (es[s] = _.isFunction(i[s]) ? (a) => a[s]() : (a, r) => {
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
    return (await new Request(Jt.origin, {
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
  let P = ug([u, h && h.toAbortSignal()], f), C;
  const T = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let M;
  try {
    if (k && mg && a !== "get" && a !== "head" && (M = await vg(v, r)) !== 0) {
      let jt = new Request(s, {
        method: "POST",
        body: r,
        duplex: "half"
      }), yt;
      if (_.isFormData(r) && (yt = jt.headers.get("content-type")) && v.setContentType(yt), jt.body) {
        const [Lt, se] = yl(
          M,
          ts(kl(k))
        );
        r = xl(jt.body, Sl, Lt, se);
      }
    }
    _.isString(A) || (A = A ? "include" : "omit");
    const q = "credentials" in Request.prototype;
    C = new Request(s, {
      ...S,
      signal: P,
      method: a.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: q ? A : void 0
    });
    let z = await fetch(C);
    const Y = Po && (b === "stream" || b === "response");
    if (Po && (g || Y && T)) {
      const jt = {};
      ["status", "statusText", "headers"].forEach((Ht) => {
        jt[Ht] = z[Ht];
      });
      const yt = _.toFiniteNumber(z.headers.get("content-length")), [Lt, se] = g && yl(
        yt,
        ts(kl(g), !0)
      ) || [];
      z = new Response(
        xl(z.body, Sl, Lt, () => {
          se && se(), T && T();
        }),
        jt
      );
    }
    b = b || "text";
    let Pt = await es[_.findKey(es, b) || "text"](z, i);
    return !Y && T && T(), await new Promise((jt, yt) => {
      lc(jt, yt, {
        data: Pt,
        headers: Kt.from(z.headers),
        status: z.status,
        statusText: z.statusText,
        config: i,
        request: C
      });
    });
  } catch (q) {
    throw T && T(), q && q.name === "TypeError" && /fetch/i.test(q.message) ? Object.assign(
      new J("Network Error", J.ERR_NETWORK, i, C),
      {
        cause: q.cause || q
      }
    ) : J.from(q, q && q.code, i, C);
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
const _l = (i) => `- ${i}`, wg = (i) => _.isFunction(i) || i === null || i === !1, fc = {
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
` + h.map(_l).join(`
`) : " " + _l(h[0]) : "as no adapter specified";
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
function El(i) {
  return $o(i), i.headers = Kt.from(i.headers), i.data = ko.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), fc.getAdapter(i.adapter || ai.adapter)(i).then(function(s) {
    return $o(i), s.data = ko.call(
      i,
      i.transformResponse,
      s
    ), s.headers = Kt.from(s.headers), s;
  }, function(s) {
    return ac(s) || ($o(i), s && s.response && (s.response.data = ko.call(
      i,
      i.transformResponse,
      s.response
    ), s.response.headers = Kt.from(s.response.headers))), Promise.reject(s);
  });
}
const pc = "1.7.7", Jo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, s) => {
  Jo[i] = function(a) {
    return typeof a === i || "a" + (s < 1 ? "n " : " ") + i;
  };
});
const Ol = {};
Jo.transitional = function(i, s, a) {
  function r(u, h) {
    return "[Axios v" + pc + "] Transitional option '" + u + "'" + h + (a ? ". " + a : "");
  }
  return (u, h, f) => {
    if (i === !1)
      throw new J(
        r(h, " has been removed" + (s ? " in " + s : "")),
        J.ERR_DEPRECATED
      );
    return s && !Ol[h] && (Ol[h] = !0, console.warn(
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
  validators: Jo
}, Ae = Io.validators;
let Qe = class {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new bl(),
      response: new bl()
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
      (C) => {
        delete h[C];
      }
    ), a.headers = Kt.concat(f, h);
    const g = [];
    let k = !0;
    this.interceptors.request.forEach(function(C) {
      typeof C.runWhen == "function" && C.runWhen(a) === !1 || (k = k && C.synchronous, g.unshift(C.fulfilled, C.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(C) {
      b.push(C.fulfilled, C.rejected);
    });
    let v, A = 0, S;
    if (!k) {
      const C = [El.bind(this), void 0];
      for (C.unshift.apply(C, g), C.push.apply(C, b), S = C.length, v = Promise.resolve(a); A < S; )
        v = v.then(C[A++], C[A++]);
      return v;
    }
    S = g.length;
    let P = a;
    for (A = 0; A < S; ) {
      const C = g[A++], T = g[A++];
      try {
        P = C(P);
      } catch (M) {
        T.call(this, M);
        break;
      }
    }
    try {
      v = El.call(this, P);
    } catch (C) {
      return Promise.reject(C);
    }
    for (A = 0, S = b.length; A < S; )
      v = v.then(b[A++], b[A++]);
    return v;
  }
  getUri(s) {
    s = tn(this.defaults, s);
    const a = cc(s.baseURL, s.url);
    return sc(a, s.params, s.paramsSerializer);
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
  const s = new Qe(i), a = Vl(Qe.prototype.request, s);
  return _.extend(a, Qe.prototype, s, { allOwnKeys: !0 }), _.extend(a, s, null, { allOwnKeys: !0 }), a.create = function(r) {
    return gc(tn(i, r));
  }, a;
}
const mt = gc(ai);
mt.Axios = Qe;
mt.CanceledError = $n;
mt.CancelToken = kg;
mt.isCancel = ac;
mt.VERSION = pc;
mt.toFormData = us;
mt.AxiosError = J;
mt.Cancel = mt.CanceledError;
mt.all = function(i) {
  return Promise.all(i);
};
mt.spread = $g;
mt.isAxiosError = xg;
mt.mergeConfig = tn;
mt.AxiosHeaders = Kt;
mt.formToJSON = (i) => rc(_.isHTMLForm(i) ? new FormData(i) : i);
mt.getAdapter = fc.getAdapter;
mt.HttpStatusCode = Bo;
mt.default = mt;
var ke = /* @__PURE__ */ ((i) => (i.Primary = "Primary", i.Success = "Success", i.Warning = "Warning", i.Danger = "Danger", i))(ke || {});
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
      return mt.post("/account/login", i).then((s) => (this.setUser(s.data), this.user)).catch((s) => {
        throw {
          description: "An error as occurred",
          style: ke.Danger,
          closeBtn: !0,
          ...s.response.data
        };
      });
    },
    async check() {
      return mt.get("/account/auth-check").then((i) => (this.setUser(i.data.user), this.user)).catch((i) => {
        throw this.unsetUser(), {
          description: "An error as occurred",
          style: ke.Danger,
          closeBtn: !0,
          ...i.response.data
        };
      });
    },
    async logout() {
      return this.unsetUser(), mt.get("/account/logout").catch((i) => {
        throw {
          description: "An error as occurred",
          style: ke.Danger,
          closeBtn: !0,
          ...i.response.data
        };
      });
    }
  }
}), _g = { class: "uk-fieldset" }, Eg = { class: "uk-margin" }, Og = { class: "uk-inline uk-width-1-1" }, Tg = { class: "uk-margin" }, Cg = { class: "uk-inline uk-width-1-1" }, Ag = { class: "uk-text-center" }, Pg = ["disabled"], Ko = /* @__PURE__ */ dt({
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
      const g = At("UFAlert");
      return I(), j("form", {
        onSubmit: f[2] || (f[2] = ss((k) => u(), ["prevent"]))
      }, [
        x("fieldset", _g, [
          a.value ? (I(), gt(g, {
            key: 0,
            "data-test": "error",
            alert: a.value
          }, null, 8, ["alert"])) : nt("", !0),
          x("div", Eg, [
            x("div", Og, [
              f[3] || (f[3] = x("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: user"
              }, null, -1)),
              zt(x("input", {
                class: "uk-input",
                type: "text",
                placeholder: "Username",
                "aria-label": "Username",
                "data-test": "username",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => L(r).user_name = k)
              }, null, 512), [
                [ee, L(r).user_name]
              ])
            ])
          ]),
          x("div", Tg, [
            x("div", Cg, [
              f[4] || (f[4] = x("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: lock"
              }, null, -1)),
              zt(x("input", {
                class: "uk-input",
                type: "password",
                placeholder: "Password",
                "aria-label": "Password",
                "data-test": "password",
                "onUpdate:modelValue": f[1] || (f[1] = (k) => L(r).password = k)
              }, null, 512), [
                [ee, L(r).password]
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
const { toString: Rg } = Object.prototype, { getPrototypeOf: Go } = Object, ds = /* @__PURE__ */ ((i) => (s) => {
  const a = Rg.call(s);
  return i[a] || (i[a] = a.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), de = (i) => (i = i.toLowerCase(), (s) => ds(s) === i), fs = (i) => (s) => typeof s === i, { isArray: xn } = Array, ii = fs("undefined");
function Ig(i) {
  return i !== null && !ii(i) && i.constructor !== null && !ii(i.constructor) && ie(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const bc = de("ArrayBuffer");
function Bg(i) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(i) : s = i && i.buffer && bc(i.buffer), s;
}
const Fg = fs("string"), ie = fs("function"), wc = fs("number"), ps = (i) => i !== null && typeof i == "object", Ng = (i) => i === !0 || i === !1, Qi = (i) => {
  if (ds(i) !== "object")
    return !1;
  const s = Go(i);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
}, Dg = de("Date"), jg = de("File"), Lg = de("Blob"), Ug = de("FileList"), Mg = (i) => ps(i) && ie(i.pipe), zg = (i) => {
  let s;
  return i && (typeof FormData == "function" && i instanceof FormData || ie(i.append) && ((s = ds(i)) === "formdata" || // detect form-data instance
  s === "object" && ie(i.toString) && i.toString() === "[object FormData]"));
}, Hg = de("URLSearchParams"), [qg, Wg, Vg, Jg] = ["ReadableStream", "Request", "Response", "Headers"].map(de), Kg = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function li(i, s, { allOwnKeys: a = !1 } = {}) {
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
const Ye = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, kc = (i) => !ii(i) && i !== Ye;
function Fo() {
  const { caseless: i } = kc(this) && this || {}, s = {}, a = (r, u) => {
    const h = i && yc(s, u) || u;
    Qi(s[h]) && Qi(r) ? s[h] = Fo(s[h], r) : Qi(r) ? s[h] = Fo({}, r) : xn(r) ? s[h] = r.slice() : s[h] = r;
  };
  for (let r = 0, u = arguments.length; r < u; r++)
    arguments[r] && li(arguments[r], a);
  return s;
}
const Gg = (i, s, a, { allOwnKeys: r } = {}) => (li(s, (u, h) => {
  a && ie(u) ? i[h] = vc(u, a) : i[h] = u;
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
    i = a !== !1 && Go(i);
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
}, ev = /* @__PURE__ */ ((i) => (s) => i && s instanceof i)(typeof Uint8Array < "u" && Go(Uint8Array)), nv = (i, s) => {
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
), Tl = (({ hasOwnProperty: i }) => (s, a) => i.call(s, a))(Object.prototype), rv = de("RegExp"), $c = (i, s) => {
  const a = Object.getOwnPropertyDescriptors(i), r = {};
  li(a, (u, h) => {
    let f;
    (f = s(u, h, i)) !== !1 && (r[h] = f || u);
  }), Object.defineProperties(i, r);
}, av = (i) => {
  $c(i, (s, a) => {
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
}, lv = (i, s) => {
  const a = {}, r = (u) => {
    u.forEach((h) => {
      a[h] = !0;
    });
  };
  return xn(i) ? r(i) : r(String(i).split(s)), a;
}, cv = () => {
}, uv = (i, s) => i != null && Number.isFinite(i = +i) ? i : s, xo = "abcdefghijklmnopqrstuvwxyz", Cl = "0123456789", xc = {
  DIGIT: Cl,
  ALPHA: xo,
  ALPHA_DIGIT: xo + xo.toUpperCase() + Cl
}, hv = (i = 16, s = xc.ALPHA_DIGIT) => {
  let a = "";
  const { length: r } = s;
  for (; i--; )
    a += s[Math.random() * r | 0];
  return a;
};
function dv(i) {
  return !!(i && ie(i.append) && i[Symbol.toStringTag] === "FormData" && i[Symbol.iterator]);
}
const fv = (i) => {
  const s = new Array(10), a = (r, u) => {
    if (ps(r)) {
      if (s.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        s[u] = r;
        const h = xn(r) ? [] : {};
        return li(r, (f, g) => {
          const k = a(f, u + 1);
          !ii(k) && (h[g] = k);
        }), s[u] = void 0, h;
      }
    }
    return r;
  };
  return a(i, 0);
}, pv = de("AsyncFunction"), mv = (i) => i && (ps(i) || ie(i)) && ie(i.then) && ie(i.catch), Sc = ((i, s) => i ? setImmediate : s ? ((a, r) => (Ye.addEventListener("message", ({ source: u, data: h }) => {
  u === Ye && h === a && r.length && r.shift()();
}, !1), (u) => {
  r.push(u), Ye.postMessage(a, "*");
}))(`axios@${Math.random()}`, []) : (a) => setTimeout(a))(
  typeof setImmediate == "function",
  ie(Ye.postMessage)
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
  isPlainObject: Qi,
  isReadableStream: qg,
  isRequest: Wg,
  isResponse: Vg,
  isHeaders: Jg,
  isUndefined: ii,
  isDate: Dg,
  isFile: jg,
  isBlob: Lg,
  isRegExp: rv,
  isFunction: ie,
  isStream: Mg,
  isURLSearchParams: Hg,
  isTypedArray: ev,
  isFileList: Ug,
  forEach: li,
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
  hasOwnProperty: Tl,
  hasOwnProp: Tl,
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
function Al(i, s, a) {
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
  function b(P, C, T) {
    let M = P;
    if (P && !T && typeof P == "object") {
      if (E.endsWith(C, "{}"))
        C = r ? C : C.slice(0, -2), P = JSON.stringify(P);
      else if (E.isArray(P) && bv(P) || (E.isFileList(P) || E.endsWith(C, "[]")) && (M = E.toArray(P)))
        return C = Oc(C), M.forEach(function(q, z) {
          !(E.isUndefined(q) || q === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? Al([C], z, h) : f === null ? C : C + "[]",
            k(q)
          );
        }), !1;
    }
    return No(P) ? !0 : (s.append(Al(T, C, h), k(P)), !1);
  }
  const v = [], A = Object.assign(wv, {
    defaultVisitor: b,
    convertValue: k,
    isVisitable: No
  });
  function S(P, C) {
    if (!E.isUndefined(P)) {
      if (v.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      v.push(P), E.forEach(P, function(T, M) {
        (!(E.isUndefined(T) || T === null) && u.call(
          s,
          T,
          E.isString(M) ? M.trim() : M,
          C,
          A
        )) === !0 && S(T, C ? C.concat(M) : [M]);
      }), v.pop();
    }
  }
  if (!E.isObject(i))
    throw new TypeError("data must be an object");
  return S(i), s;
}
function Pl(i) {
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
function Xo(i, s) {
  this._pairs = [], i && ms(i, this, s);
}
const Tc = Xo.prototype;
Tc.append = function(i, s) {
  this._pairs.push([i, s]);
};
Tc.toString = function(i) {
  const s = i ? function(a) {
    return i.call(this, a, Pl);
  } : Pl;
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
  if (u ? h = u(s, a) : h = E.isURLSearchParams(s) ? s.toString() : new Xo(s, a).toString(r), h) {
    const f = i.indexOf("#");
    f !== -1 && (i = i.slice(0, f)), i += (i.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return i;
}
class Rl {
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
}, kv = typeof URLSearchParams < "u" ? URLSearchParams : Xo, $v = typeof FormData < "u" ? FormData : null, xv = typeof Blob < "u" ? Blob : null, Sv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kv,
    FormData: $v,
    Blob: xv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Yo = typeof window < "u" && typeof document < "u", _v = ((i) => Yo && ["ReactNative", "NativeScript", "NS"].indexOf(i) < 0)(typeof navigator < "u" && navigator.product), Ev = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ov = Yo && window.location.href || "http://localhost", Tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Yo,
  hasStandardBrowserEnv: _v,
  hasStandardBrowserWebWorkerEnv: Ev,
  origin: Ov
}, Symbol.toStringTag, { value: "Module" })), ue = {
  ...Tv,
  ...Sv
};
function Cv(i, s) {
  return ms(i, new ue.classes.URLSearchParams(), Object.assign({
    visitor: function(a, r, u, h) {
      return ue.isNode && E.isBuffer(a) ? (this.append(r, a.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
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
const ci = {
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
    const s = this.transitional || ci.transitional, a = s && s.forcedJSONParsing, r = this.responseType === "json";
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
    FormData: ue.classes.FormData,
    Blob: ue.classes.Blob
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
  ci.headers[i] = {};
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
}, Il = Symbol("internals");
function ti(i) {
  return i && String(i).trim().toLowerCase();
}
function Zi(i) {
  return i === !1 || i == null ? i : E.isArray(i) ? i.map(Zi) : String(i);
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
class Gt {
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
      (!A || u[A] === void 0 || b === !0 || b === void 0 && u[A] !== !1) && (u[A || k] = Zi(g));
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
        a[f] = Zi(u), delete a[h];
        return;
      }
      const g = s ? Dv(h) : String(h).trim();
      g !== h && delete a[h], a[g] = Zi(u), r[g] = !0;
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
    const a = (this[Il] = this[Il] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function u(h) {
      const f = ti(h);
      a[f] || (jv(r, h), a[f] = !0);
    }
    return E.isArray(s) ? s.forEach(u) : u(s), this;
  }
}
Gt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Gt.prototype, ({ value: i }, s) => {
  let a = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => i,
    set(r) {
      this[a] = r;
    }
  };
});
E.freezeMethods(Gt);
function _o(i, s) {
  const a = this || ci, r = s || a, u = Gt.from(r.headers);
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
function Lv(i) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return s && s[1] || "";
}
function Uv(i, s) {
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
const ns = (i, s, a = 3) => {
  let r = 0;
  const u = Uv(50, 250);
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
}, Bl = (i, s) => {
  const a = i != null;
  return [(r) => s[0]({
    lengthComputable: a,
    total: i,
    loaded: r
  }), s[1]];
}, Fl = (i) => (...s) => E.asap(() => i(...s)), zv = ue.hasStandardBrowserEnv ? (
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
), Hv = ue.hasStandardBrowserEnv ? (
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
const Nl = (i) => i instanceof Gt ? { ...i } : i;
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
const Fc = (i) => {
  const s = en({}, i);
  let { data: a, withXSRFToken: r, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = s;
  s.headers = f = Gt.from(f), s.url = Cc(Bc(s.baseURL, s.url), i.params, i.paramsSerializer), g && f.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let k;
  if (E.isFormData(a)) {
    if (ue.hasStandardBrowserEnv || ue.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if ((k = f.getContentType()) !== !1) {
      const [b, ...v] = k ? k.split(";").map((A) => A.trim()).filter(Boolean) : [];
      f.setContentType([b || "multipart/form-data", ...v].join("; "));
    }
  }
  if (ue.hasStandardBrowserEnv && (r && E.isFunction(r) && (r = r(s)), r || r !== !1 && zv(s.url))) {
    const b = u && h && Hv.read(h);
    b && f.set(u, b);
  }
  return s;
}, Vv = typeof XMLHttpRequest < "u", Jv = Vv && function(i) {
  return new Promise(function(s, a) {
    const r = Fc(i);
    let u = r.data;
    const h = Gt.from(r.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: k } = r, b, v, A, S, P;
    function C() {
      S && S(), P && P(), r.cancelToken && r.cancelToken.unsubscribe(b), r.signal && r.signal.removeEventListener("abort", b);
    }
    let T = new XMLHttpRequest();
    T.open(r.method.toUpperCase(), r.url, !0), T.timeout = r.timeout;
    function M() {
      if (!T)
        return;
      const z = Gt.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), Y = {
        data: !f || f === "text" || f === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: z,
        config: i,
        request: T
      };
      Ic(function(Pt) {
        s(Pt), C();
      }, function(Pt) {
        a(Pt), C();
      }, Y), T = null;
    }
    "onloadend" in T ? T.onloadend = M : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(M);
    }, T.onabort = function() {
      T && (a(new K("Request aborted", K.ECONNABORTED, i, T)), T = null);
    }, T.onerror = function() {
      a(new K("Network Error", K.ERR_NETWORK, i, T)), T = null;
    }, T.ontimeout = function() {
      let z = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const Y = r.transitional || Ac;
      r.timeoutErrorMessage && (z = r.timeoutErrorMessage), a(new K(
        z,
        Y.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        i,
        T
      )), T = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in T && E.forEach(h.toJSON(), function(z, Y) {
      T.setRequestHeader(Y, z);
    }), E.isUndefined(r.withCredentials) || (T.withCredentials = !!r.withCredentials), f && f !== "json" && (T.responseType = r.responseType), k && ([A, P] = ns(k, !0), T.addEventListener("progress", A)), g && T.upload && ([v, S] = ns(g), T.upload.addEventListener("progress", v), T.upload.addEventListener("loadend", S)), (r.cancelToken || r.signal) && (b = (z) => {
      T && (a(!z || z.type ? new Sn(null, i, T) : z), T.abort(), T = null);
    }, r.cancelToken && r.cancelToken.subscribe(b), r.signal && (r.signal.aborted ? b() : r.signal.addEventListener("abort", b)));
    const q = Lv(r.url);
    if (q && ue.protocols.indexOf(q) === -1) {
      a(new K("Unsupported protocol " + q + ":", K.ERR_BAD_REQUEST, i));
      return;
    }
    T.send(u || null);
  });
}, Kv = (i, s) => {
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
}, Gv = function* (i, s) {
  let a = i.byteLength;
  if (a < s) {
    yield i;
    return;
  }
  let r = 0, u;
  for (; r < a; )
    u = r + s, yield i.slice(r, u), r = u;
}, Xv = async function* (i, s, a) {
  for await (const r of i)
    yield* Gv(ArrayBuffer.isView(r) ? r : await a(String(r)), s);
}, Dl = (i, s, a, r, u) => {
  const h = Xv(i, s, u);
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
        let S = A.byteLength;
        if (a) {
          let P = f += S;
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
}, gs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Nc = gs && typeof ReadableStream == "function", Do = gs && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((i) => (s) => i.encode(s))(new TextEncoder()) : async (i) => new Uint8Array(await new Response(i).arrayBuffer())), Dc = (i, ...s) => {
  try {
    return !!i(...s);
  } catch {
    return !1;
  }
}, Yv = Nc && Dc(() => {
  let i = !1;
  const s = new Request(ue.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return i = !0, "half";
    }
  }).headers.has("Content-Type");
  return i && !s;
}), jl = 64 * 1024, jo = Nc && Dc(() => E.isReadableStream(new Response("").body)), is = {
  stream: jo && ((i) => i.body)
};
gs && ((i) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !is[s] && (is[s] = E.isFunction(i[s]) ? (a) => a[s]() : (a, r) => {
      throw new K(`Response type '${s}' is not supported`, K.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Qv = async (i) => {
  if (i == null)
    return 0;
  if (E.isBlob(i))
    return i.size;
  if (E.isSpecCompliantForm(i))
    return (await new Request(i).arrayBuffer()).byteLength;
  if (E.isArrayBufferView(i) || E.isArrayBuffer(i))
    return i.byteLength;
  if (E.isURLSearchParams(i) && (i = i + ""), E.isString(i))
    return (await Do(i)).byteLength;
}, Zv = async (i, s) => E.toFiniteNumber(i.getContentLength()) ?? Qv(s), tb = gs && (async (i) => {
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
  let [P, C] = u || h || f ? Kv([u, h], f) : [], T, M;
  const q = () => {
    !T && setTimeout(() => {
      P && P.unsubscribe();
    }), T = !0;
  };
  let z;
  try {
    if (k && Yv && a !== "get" && a !== "head" && (z = await Zv(v, r)) !== 0) {
      let yt = new Request(s, {
        method: "POST",
        body: r,
        duplex: "half"
      }), Lt;
      if (E.isFormData(r) && (Lt = yt.headers.get("content-type")) && v.setContentType(Lt), yt.body) {
        const [se, Ht] = Bl(
          z,
          ns(Fl(k))
        );
        r = Dl(yt.body, jl, se, Ht, Do);
      }
    }
    E.isString(A) || (A = A ? "include" : "omit"), M = new Request(s, {
      ...S,
      signal: P,
      method: a.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: A
    });
    let Y = await fetch(M);
    const Pt = jo && (b === "stream" || b === "response");
    if (jo && (g || Pt)) {
      const yt = {};
      ["status", "statusText", "headers"].forEach((ft) => {
        yt[ft] = Y[ft];
      });
      const Lt = E.toFiniteNumber(Y.headers.get("content-length")), [se, Ht] = g && Bl(
        Lt,
        ns(Fl(g), !0)
      ) || [];
      Y = new Response(
        Dl(Y.body, jl, se, () => {
          Ht && Ht(), Pt && q();
        }, Do),
        yt
      );
    }
    b = b || "text";
    let jt = await is[E.findKey(is, b) || "text"](Y, i);
    return !Pt && q(), C && C(), await new Promise((yt, Lt) => {
      Ic(yt, Lt, {
        data: jt,
        headers: Gt.from(Y.headers),
        status: Y.status,
        statusText: Y.statusText,
        config: i,
        request: M
      });
    });
  } catch (Y) {
    throw q(), Y && Y.name === "TypeError" && /fetch/i.test(Y.message) ? Object.assign(
      new K("Network Error", K.ERR_NETWORK, i, M),
      {
        cause: Y.cause || Y
      }
    ) : K.from(Y, Y && Y.code, i, M);
  }
}), Lo = {
  http: vv,
  xhr: Jv,
  fetch: tb
};
E.forEach(Lo, (i, s) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: s });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: s });
  }
});
const Ll = (i) => `- ${i}`, eb = (i) => E.isFunction(i) || i === null || i === !1, jc = {
  getAdapter: (i) => {
    i = E.isArray(i) ? i : [i];
    const { length: s } = i;
    let a, r;
    const u = {};
    for (let h = 0; h < s; h++) {
      a = i[h];
      let f;
      if (r = a, !eb(a) && (r = Lo[(f = String(a)).toLowerCase()], r === void 0))
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
  adapters: Lo
};
function Eo(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new Sn(null, i);
}
function Ul(i) {
  return Eo(i), i.headers = Gt.from(i.headers), i.data = _o.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), jc.getAdapter(i.adapter || ci.adapter)(i).then(function(s) {
    return Eo(i), s.data = _o.call(
      i,
      i.transformResponse,
      s
    ), s.headers = Gt.from(s.headers), s;
  }, function(s) {
    return Rc(s) || (Eo(i), s && s.response && (s.response.data = _o.call(
      i,
      i.transformResponse,
      s.response
    ), s.response.headers = Gt.from(s.response.headers))), Promise.reject(s);
  });
}
const Lc = "1.7.3", Qo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, s) => {
  Qo[i] = function(a) {
    return typeof a === i || "a" + (s < 1 ? "n " : " ") + i;
  };
});
const Ml = {};
Qo.transitional = function(i, s, a) {
  function r(u, h) {
    return "[Axios v" + Lc + "] Transitional option '" + u + "'" + h + (a ? ". " + a : "");
  }
  return (u, h, f) => {
    if (i === !1)
      throw new K(
        r(h, " has been removed" + (s ? " in " + s : "")),
        K.ERR_DEPRECATED
      );
    return s && !Ml[h] && (Ml[h] = !0, console.warn(
      r(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), i ? i(u, h, f) : !0;
  };
};
function nb(i, s, a) {
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
const Uo = {
  assertOptions: nb,
  validators: Qo
}, Pe = Uo.validators;
class Ze {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new Rl(),
      response: new Rl()
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
    r !== void 0 && Uo.assertOptions(r, {
      silentJSONParsing: Pe.transitional(Pe.boolean),
      forcedJSONParsing: Pe.transitional(Pe.boolean),
      clarifyTimeoutError: Pe.transitional(Pe.boolean)
    }, !1), u != null && (E.isFunction(u) ? a.paramsSerializer = {
      serialize: u
    } : Uo.assertOptions(u, {
      encode: Pe.function,
      serialize: Pe.function
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
    ), a.headers = Gt.concat(f, h);
    const g = [];
    let k = !0;
    this.interceptors.request.forEach(function(C) {
      typeof C.runWhen == "function" && C.runWhen(a) === !1 || (k = k && C.synchronous, g.unshift(C.fulfilled, C.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(C) {
      b.push(C.fulfilled, C.rejected);
    });
    let v, A = 0, S;
    if (!k) {
      const C = [Ul.bind(this), void 0];
      for (C.unshift.apply(C, g), C.push.apply(C, b), S = C.length, v = Promise.resolve(a); A < S; )
        v = v.then(C[A++], C[A++]);
      return v;
    }
    S = g.length;
    let P = a;
    for (A = 0; A < S; ) {
      const C = g[A++], T = g[A++];
      try {
        P = C(P);
      } catch (M) {
        T.call(this, M);
        break;
      }
    }
    try {
      v = Ul.call(this, P);
    } catch (C) {
      return Promise.reject(C);
    }
    for (A = 0, S = b.length; A < S; )
      v = v.then(b[A++], b[A++]);
    return v;
  }
  getUri(s) {
    s = en(this.defaults, s);
    const a = Bc(s.baseURL, s.url);
    return Cc(a, s.params, s.paramsSerializer);
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
class Zo {
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
      token: new Zo(function(a) {
        s = a;
      }),
      cancel: s
    };
  }
}
function ib(i) {
  return function(s) {
    return i.apply(null, s);
  };
}
function sb(i) {
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
function Uc(i) {
  const s = new Ze(i), a = vc(Ze.prototype.request, s);
  return E.extend(a, Ze.prototype, s, { allOwnKeys: !0 }), E.extend(a, s, null, { allOwnKeys: !0 }), a.create = function(r) {
    return Uc(en(i, r));
  }, a;
}
const Et = Uc(ci);
Et.Axios = Ze;
Et.CanceledError = Sn;
Et.CancelToken = Zo;
Et.isCancel = Rc;
Et.VERSION = Lc;
Et.toFormData = ms;
Et.AxiosError = K;
Et.Cancel = Et.CanceledError;
Et.all = function(i) {
  return Promise.all(i);
};
Et.spread = ib;
Et.isAxiosError = sb;
Et.mergeConfig = en;
Et.AxiosHeaders = Gt;
Et.formToJSON = (i) => Pc(E.isHTMLForm(i) ? new FormData(i) : i);
Et.getAdapter = jc.getAdapter;
Et.HttpStatusCode = Mo;
Et.default = Et;
const ob = (i) => {
  const s = typeof i;
  return i !== null && (s === "object" || s === "function");
}, Oo = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), rb = new Set("0123456789");
function ab(i) {
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
        if (r === "index" && !rb.has(h))
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
function lb(i, s) {
  if (typeof s != "number" && Array.isArray(i)) {
    const a = Number.parseInt(s, 10);
    return Number.isInteger(a) && i[a] === i[s];
  }
  return !1;
}
function cb(i, s, a) {
  if (!ob(i) || typeof s != "string")
    return a === void 0 ? i : a;
  const r = ab(s);
  if (r.length === 0)
    return a;
  for (let u = 0; u < r.length; u++) {
    const h = r[u];
    if (lb(i, h) ? i = u === r.length - 1 ? void 0 : null : i = i[h], i == null) {
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
    get: (i) => (s, a) => cb(i.config, s, a)
  },
  actions: {
    async load() {
      Et.get("/api/config").then((i) => {
        this.config = i.data;
      });
    }
  }
});
function ub() {
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
function hb() {
  return Mc().get("locales.available");
}
function db() {
  return "/account/captcha";
}
async function fb(i) {
  return mt.post("/account/register", i).then((s) => s.data).catch((s) => {
    throw {
      description: "An error as occurred",
      style: ke.Danger,
      closeBtn: !0,
      ...s.response.data
    };
  });
}
const pb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  doRegister: fb,
  getAvailableLocales: hb,
  getCaptchaUrl: db,
  getDefaultForm: ub
}, Symbol.toStringTag, { value: "Module" }));
async function mb(i) {
  return mt.post("/account/forgot-password", { email: i }).then((s) => ({
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
async function gb(i) {
  return mt.post("/account/resend-verification", { email: i }).then((s) => ({
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
const vb = { class: "uk-fieldset uk-form-stacked" }, bb = { class: "uk-margin" }, wb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, yb = { class: "uk-width-1-2" }, kb = { class: "uk-width-1-2" }, $b = { class: "uk-width-1-1" }, xb = { class: "uk-margin" }, Sb = { class: "uk-margin" }, _b = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Eb = { class: "uk-width-1-2" }, Ob = { class: "uk-width-1-2" }, Tb = { class: "uk-margin" }, Cb = ["value"], Ab = { class: "uk-margin" }, Pb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Rb = { class: "uk-width-2-3" }, Ib = { class: "uk-width-1-3" }, Bb = ["src"], Fb = { class: "uk-text-center" }, Nb = ["disabled"], zc = /* @__PURE__ */ dt({
  __name: "FormRegister",
  setup(i) {
    const { getDefaultForm: s, doRegister: a, getAvailableLocales: r, getCaptchaUrl: u } = pb, h = ge(!1), f = ge();
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
      const A = At("UFAlert");
      return I(), j("form", {
        onSubmit: v[8] || (v[8] = ss((S) => k(), ["prevent"]))
      }, [
        x("fieldset", vb, [
          f.value ? (I(), gt(A, {
            key: 0,
            "data-test": "error",
            alert: f.value
          }, null, 8, ["alert"])) : nt("", !0),
          x("div", bb, [
            v[9] || (v[9] = x("label", {
              class: "uk-form-label",
              for: "first_name"
            }, "Name and email", -1)),
            x("div", wb, [
              x("div", yb, [
                zt(x("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "First Name",
                  "aria-label": "First Name",
                  id: "first_name",
                  "data-test": "first_name",
                  "onUpdate:modelValue": v[0] || (v[0] = (S) => L(g).first_name = S)
                }, null, 512), [
                  [ee, L(g).first_name]
                ])
              ]),
              x("div", kb, [
                zt(x("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "Last Name",
                  "aria-label": "Last Name",
                  "data-test": "last_name",
                  "onUpdate:modelValue": v[1] || (v[1] = (S) => L(g).last_name = S)
                }, null, 512), [
                  [ee, L(g).last_name]
                ])
              ]),
              x("div", $b, [
                zt(x("input", {
                  class: "uk-input",
                  type: "email",
                  placeholder: "Email",
                  "aria-label": "Email",
                  "data-test": "email",
                  "onUpdate:modelValue": v[2] || (v[2] = (S) => L(g).email = S)
                }, null, 512), [
                  [ee, L(g).email]
                ])
              ])
            ])
          ]),
          x("div", xb, [
            v[10] || (v[10] = x("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Username", -1)),
            zt(x("input", {
              class: "uk-input",
              type: "text",
              placeholder: "Username",
              "aria-label": "Username",
              "data-test": "username",
              "onUpdate:modelValue": v[3] || (v[3] = (S) => L(g).user_name = S)
            }, null, 512), [
              [ee, L(g).user_name]
            ])
          ]),
          x("div", Sb, [
            v[11] || (v[11] = x("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Password", -1)),
            x("div", _b, [
              x("div", Eb, [
                zt(x("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Password",
                  "aria-label": "Password",
                  "data-test": "password",
                  "onUpdate:modelValue": v[4] || (v[4] = (S) => L(g).password = S)
                }, null, 512), [
                  [ee, L(g).password]
                ])
              ]),
              x("div", Ob, [
                zt(x("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Confirm Password",
                  "aria-label": "Confirm Password",
                  "data-test": "passwordc",
                  "onUpdate:modelValue": v[5] || (v[5] = (S) => L(g).passwordc = S)
                }, null, 512), [
                  [ee, L(g).passwordc]
                ])
              ])
            ])
          ]),
          x("div", Tb, [
            v[12] || (v[12] = x("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Locale", -1)),
            zt(x("select", {
              class: "uk-select",
              id: "form-stacked-select",
              "data-test": "locale",
              "onUpdate:modelValue": v[6] || (v[6] = (S) => L(g).locale = S)
            }, [
              (I(!0), j(yn, null, os(L(r)(), (S, P) => (I(), j("option", {
                value: P,
                key: P
              }, lt(S), 9, Cb))), 128))
            ], 512), [
              [zl, L(g).locale]
            ])
          ]),
          x("div", Ab, [
            v[13] || (v[13] = x("label", {
              class: "uk-form-label",
              for: "r-form-captcha"
            }, "Captcha", -1)),
            x("div", Pb, [
              x("div", Rb, [
                zt(x("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Captcha",
                  "aria-label": "Captcha",
                  id: "r-form-captcha",
                  "data-test": "captcha",
                  "onUpdate:modelValue": v[7] || (v[7] = (S) => L(g).captcha = S)
                }, null, 512), [
                  [ee, L(g).captcha]
                ])
              ]),
              x("div", Ib, [
                x("img", {
                  src: L(u)(),
                  id: "captcha",
                  "data-target": "#r-form-captcha"
                }, null, 8, Bb)
              ])
            ])
          ]),
          v[14] || (v[14] = x("p", null, [
            _t(" By registering an account with UserFrosting, you accept "),
            x("a", null, "the terms and conditions"),
            _t(". ")
          ], -1)),
          x("div", Fb, [
            x("button", {
              class: "uk-button uk-button-primary",
              disabled: h.value
            }, "Sign me up", 8, Nb)
          ])
        ])
      ], 32);
    };
  }
}), Db = { class: "uk-fieldset" }, jb = { class: "uk-margin" }, Lb = { class: "uk-inline uk-width-1-1" }, Ub = { class: "uk-text-center" }, Mb = ["disabled"], Hc = /* @__PURE__ */ dt({
  __name: "FormForgotPassword",
  setup(i) {
    const s = ge(!1), a = ge();
    let r = "";
    async function u() {
      s.value = !0, a.value = null, await mb(r).then((h) => {
        a.value = h;
      }).catch((h) => {
        a.value = h;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (h, f) => {
      const g = At("UFAlert");
      return I(), j("form", {
        onSubmit: f[1] || (f[1] = ss((k) => u(), ["prevent"]))
      }, [
        x("fieldset", Db, [
          a.value ? (I(), gt(g, {
            key: 0,
            "data-test": "error",
            alert: a.value
          }, null, 8, ["alert"])) : nt("", !0),
          x("div", jb, [
            x("div", Lb, [
              f[2] || (f[2] = x("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              zt(x("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => zo(r) ? r.value = k : r = k)
              }, null, 512), [
                [ee, L(r)]
              ])
            ])
          ]),
          x("div", Ub, [
            x("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Email Password Reset Link ", 8, Mb)
          ])
        ])
      ], 32);
    };
  }
}), zb = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, Hb = { class: "uk-navbar-container" }, qb = { class: "uk-container uk-container-expand" }, Wb = {
  class: "uk-navbar",
  "uk-navbar": ""
}, Vb = {
  class: "uk-navbar-left",
  "data-test": "navbar-left"
}, Jb = {
  class: "uk-navbar-right",
  "data-test": "navbar-right"
}, Kb = { class: "uk-navbar-nav" }, Gb = /* @__PURE__ */ dt({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), j("header", null, [
      x("div", zb, [
        x("div", Hb, [
          x("div", qb, [
            x("nav", Wb, [
              x("div", Vb, [
                Ct(Ho, {
                  to: s.to,
                  class: "uk-navbar-item uk-logo",
                  label: ""
                }, {
                  default: Dt(() => [
                    Z(s.$slots, "title", {}, () => [
                      _t(lt(s.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              x("div", Jb, [
                x("ul", Kb, [
                  Z(s.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), Xb = { "data-test": "label" }, Yb = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0px"
}, Qb = {
  class: "uk-nav uk-navbar-dropdown-nav",
  "data-test": "slot"
}, tr = /* @__PURE__ */ dt({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), j("li", null, [
      x("a", Xb, [
        Z(s.$slots, "label", {}, () => [
          _t(lt(s.label), 1)
        ]),
        a[0] || (a[0] = _t()),
        a[1] || (a[1] = x("span", { "uk-navbar-parent-icon": "" }, null, -1))
      ]),
      x("div", Yb, [
        x("ul", Qb, [
          Z(s.$slots, "default")
        ])
      ])
    ]));
  }
}), Zb = {}, tw = { class: "uk-nav-divider" };
function ew(i, s) {
  return I(), j("li", tw);
}
const nw = /* @__PURE__ */ oi(Zb, [["render", ew]]), iw = { key: 0 }, sw = ["href"], ow = ["href", "onClick"], rw = /* @__PURE__ */ dt({
  __name: "NavBarItem",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, a = ce(() => s.to === "" || typeof s.to == "string" && s.to.startsWith("http"));
    return (r, u) => a.value ? (I(), j("li", iw, [
      x("a", {
        href: r.to.toString(),
        target: "_blank"
      }, [
        Z(r.$slots, "default", {}, () => [
          _t(lt(r.label), 1)
        ])
      ], 8, sw)
    ])) : (I(), gt(L(si), ei({
      key: 1,
      to: r.to
    }, r.$props, { custom: "" }), {
      default: Dt(({ isActive: h, href: f, navigate: g }) => [
        x("li", {
          class: ye({ "uk-active": h })
        }, [
          x("a", ei(r.$attrs, {
            href: f,
            onClick: g
          }), [
            Z(r.$slots, "default", {}, () => [
              _t(lt(r.label), 1)
            ])
          ], 16, ow)
        ], 2)
      ]),
      _: 3
    }, 16, ["to"]));
  }
}), aw = { class: "uk-text-center" }, lw = /* @__PURE__ */ dt({
  __name: "NavBarLogin",
  setup(i) {
    return (s, a) => (I(), gt(tr, {
      label: "Login",
      class: "uf-nav-login uk-text-center"
    }, {
      default: Dt(() => [
        Ct(Ko),
        x("div", aw, [
          x("button", {
            class: "uk-button uk-button-default",
            onClick: a[0] || (a[0] = (r) => s.$emit("gotoRegistration")),
            "data-test": "gotoRegistration"
          }, " Register ")
        ]),
        Z(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}), cw = {
  key: 0,
  "data-test": "username"
}, uw = ["src"], hw = { class: "uk-margin" }, dw = ["src"], fw = {
  key: 1,
  class: "uk-margin-remove",
  "data-test": "username"
}, pw = {
  key: 2,
  class: "uk-margin-remove uk-text-meta",
  "data-test": "meta"
}, mw = /* @__PURE__ */ dt({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(i) {
    return (s, a) => (I(), gt(tr, { class: "uf-nav-user uk-text-center" }, {
      label: Dt(() => [
        s.username ? (I(), j("span", cw, lt(s.username), 1)) : nt("", !0),
        s.avatar ? (I(), j("img", {
          key: 1,
          src: s.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, uw)) : nt("", !0)
      ]),
      default: Dt(() => [
        x("div", hw, [
          s.avatar ? (I(), j("img", {
            key: 0,
            src: s.avatar,
            alt: "avatar",
            class: "uk-border-circle",
            "uk-height-match": ""
          }, null, 8, dw)) : nt("", !0),
          s.username ? (I(), j("p", fw, lt(s.username), 1)) : nt("", !0),
          s.meta ? (I(), j("p", pw, "(" + lt(s.meta) + ")", 1)) : nt("", !0)
        ]),
        Z(s.$slots, "default", { dataTest: "slot" })
      ]),
      _: 3
    }));
  }
}), gw = { key: 0 }, vw = ["href"], bw = { key: 1 }, ww = /* @__PURE__ */ dt({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, a = ce(() => typeof s.to == "string" && s.to.startsWith("http"));
    return (r, u) => a.value ? (I(), j("li", gw, [
      x("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: r.to.toString(),
        target: "_blank"
      }, [
        Z(r.$slots, "default", {}, () => [
          _t(lt(r.label), 1)
        ])
      ], 8, vw)
    ])) : (I(), j("li", bw, [
      Ct(L(si), {
        to: r.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: Dt(() => [
          Z(r.$slots, "default", {}, () => [
            _t(lt(r.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["to"])
    ]));
  }
}), yw = { class: "uk-list" }, kw = { class: "uk-text-center" }, $w = /* @__PURE__ */ dt({
  __name: "PageLogin",
  setup(i) {
    return (s, a) => {
      const r = At("font-awesome-icon"), u = At("UFCardBoxBig");
      return I(), gt(u, null, {
        default: Dt(() => [
          a[5] || (a[5] = x("h3", { class: "uk-card-title" }, "Login", -1)),
          Ct(Ko),
          x("ul", yw, [
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
          x("div", kw, [
            a[4] || (a[4] = x("p", null, "You don't have an account yet?", -1)),
            x("button", {
              class: "uk-button uk-button-default",
              onClick: a[2] || (a[2] = (h) => s.$emit("gotoRegistration")),
              "data-test": "gotoRegistration"
            }, [
              Ct(r, { icon: ["fas", "user-plus"] }),
              a[3] || (a[3] = _t(" Register "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), xw = { class: "uk-text-center" }, Sw = /* @__PURE__ */ dt({
  __name: "PageRegister",
  setup(i) {
    return (s, a) => {
      const r = At("font-awesome-icon"), u = At("UFCardBoxBig");
      return I(), gt(u, null, {
        default: Dt(() => [
          a[3] || (a[3] = x("h3", { class: "uk-card-title" }, "Register", -1)),
          Ct(zc),
          a[4] || (a[4] = x("hr", null, null, -1)),
          x("div", xw, [
            a[2] || (a[2] = x("p", null, "Already have an account ?", -1)),
            x("button", {
              class: "uk-button uk-button-default",
              onClick: a[0] || (a[0] = (h) => s.$emit("gotoLogin")),
              "data-test": "gotoLogin"
            }, [
              Ct(r, { icon: ["fas", "right-to-bracket"] }),
              a[1] || (a[1] = _t(" Login "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), _w = /* @__PURE__ */ dt({
  __name: "PageForgotPassword",
  setup(i) {
    return (s, a) => {
      const r = At("UFCardBoxBig");
      return I(), gt(r, null, {
        default: Dt(() => [
          a[0] || (a[0] = x("h3", { class: "uk-card-title" }, "Forgotten Password", -1)),
          a[1] || (a[1] = x("p", null, " Please enter the email address you used to sign up. A link with instructions to reset your password will be emailed to you. ", -1)),
          Ct(Hc)
        ]),
        _: 1
      });
    };
  }
}), Ew = { class: "uk-fieldset" }, Ow = { class: "uk-margin" }, Tw = { class: "uk-inline uk-width-1-1" }, Cw = { class: "uk-text-center" }, Aw = ["disabled"], Pw = /* @__PURE__ */ dt({
  __name: "FormResendVerification",
  setup(i) {
    const s = ge(!1), a = ge();
    let r = "";
    async function u() {
      s.value = !0, a.value = null, await gb(r).then((h) => {
        a.value = h;
      }).catch((h) => {
        a.value = h;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (h, f) => {
      const g = At("UFAlert");
      return I(), j("form", {
        onSubmit: f[1] || (f[1] = ss((k) => u(), ["prevent"]))
      }, [
        x("fieldset", Ew, [
          a.value ? (I(), gt(g, {
            key: 0,
            "data-test": "error",
            alert: a.value
          }, null, 8, ["alert"])) : nt("", !0),
          x("div", Ow, [
            x("div", Tw, [
              f[2] || (f[2] = x("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              zt(x("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => zo(r) ? r.value = k : r = k)
              }, null, 512), [
                [ee, L(r)]
              ])
            ])
          ]),
          x("div", Cw, [
            x("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Email the verification link for my account ", 8, Aw)
          ])
        ])
      ], 32);
    };
  }
}), Rw = /* @__PURE__ */ dt({
  __name: "PageResendVerification",
  setup(i) {
    return (s, a) => {
      const r = At("UFCardBoxBig");
      return I(), gt(r, null, {
        default: Dt(() => [
          a[0] || (a[0] = x("h3", { class: "uk-card-title" }, "Resend Verification Email", -1)),
          a[1] || (a[1] = x("p", null, " Please enter the email address you used to sign up, and your verification email will be resent. ", -1)),
          Ct(Pw)
        ]),
        _: 1
      });
    };
  }
}), Iw = {}, Bw = { class: "uf-sidebar-left uk-light uk-visible@m" }, Fw = { class: "left-nav-wrap" }, Nw = {
  class: "uk-nav uk-nav-default",
  "data-uk-nav": ""
};
function Dw(i, s) {
  return I(), j("aside", Bw, [
    x("div", Fw, [
      x("ul", Nw, [
        Z(i.$slots, "default")
      ])
    ])
  ]);
}
const jw = /* @__PURE__ */ oi(Iw, [["render", Dw]]), Lw = ["data-uk-icon"], Uw = {
  key: 2,
  "uk-nav-parent-icon": "",
  "data-test": "caret"
}, Mw = {
  class: "uk-nav-sub",
  "data-test": "slot"
}, zw = /* @__PURE__ */ dt({
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
      const r = At("font-awesome-icon");
      return I(), gt(L(si), ei({ to: s.to }, s.$props, { custom: "" }), {
        default: Dt(({ isActive: u }) => [
          x("li", {
            class: ye(["uk-parent", { "uk-open": u }])
          }, [
            x("a", ip(sp(s.$attrs)), [
              s.icon ? (I(), j("span", {
                key: 0,
                "data-uk-icon": s.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, Lw)) : nt("", !0),
              s.faIcon ? (I(), gt(r, {
                key: 1,
                class: "uk-margin-small-right",
                icon: s.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : nt("", !0),
              Z(s.$slots, "label", {}, () => [
                _t(lt(s.label), 1)
              ]),
              s.hideCaret ? nt("", !0) : (I(), j("span", Uw))
            ], 16),
            x("ul", Mw, [
              Z(s.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]);
    };
  }
}), Hw = { key: 0 }, qw = ["href"], Ww = ["data-uk-icon"], Vw = ["href", "onClick"], Jw = ["data-uk-icon"], Kw = /* @__PURE__ */ dt({
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
      const h = At("font-awesome-icon");
      return a.value ? (I(), j("li", Hw, [
        x("a", {
          href: r.to.toString(),
          target: "_blank"
        }, [
          r.icon ? (I(), j("span", {
            key: 0,
            "data-uk-icon": r.icon,
            class: "uk-margin-small-right",
            "data-test": "icon"
          }, null, 8, Ww)) : nt("", !0),
          r.faIcon ? (I(), gt(h, {
            key: 1,
            class: "uk-margin-small-right",
            icon: r.faIcon,
            "data-test": "faIcon"
          }, null, 8, ["icon"])) : nt("", !0),
          Z(r.$slots, "default", {}, () => [
            _t(lt(r.label), 1)
          ])
        ], 8, qw)
      ])) : (I(), gt(L(si), ei({
        key: 1,
        to: r.to
      }, r.$props, { custom: "" }), {
        default: Dt(({ isActive: f, href: g, navigate: k }) => [
          x("li", {
            class: ye({ "uk-active": f })
          }, [
            x("a", ei(r.$attrs, {
              href: g,
              onClick: k
            }), [
              r.icon ? (I(), j("span", {
                key: 0,
                "data-uk-icon": r.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, Jw)) : nt("", !0),
              r.faIcon ? (I(), gt(h, {
                key: 1,
                class: "uk-margin-small-right",
                icon: r.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : nt("", !0),
              Z(r.$slots, "default", {}, () => [
                _t(lt(r.label), 1)
              ])
            ], 16, Vw)
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]));
    };
  }
}), Gw = { class: "uk-nav-header" }, Xw = /* @__PURE__ */ dt({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(i) {
    return (s, a) => (I(), j("li", Gw, lt(s.label), 1));
  }
}), Yw = {};
function Qw(i, s) {
  return I(), j("td", null, [
    Z(i.$slots, "default")
  ]);
}
const Zw = /* @__PURE__ */ oi(Yw, [["render", Qw]]), ty = {
  key: 0,
  class: "uk-table-link uk-padding-small"
}, ey = {
  key: 1,
  class: "uk-padding-small"
}, ny = /* @__PURE__ */ dt({
  __name: "SprunjeHeader",
  props: {
    sort: {}
  },
  setup(i) {
    const s = rs("sprunjer"), { sorts: a, toggleSort: r } = s;
    return (u, h) => {
      const f = At("font-awesome-icon");
      return u.sort ? (I(), j("th", ty, [
        x("a", {
          class: "uk-link-reset",
          onClick: h[0] || (h[0] = (g) => L(r)(u.sort))
        }, [
          Z(u.$slots, "default"),
          L(a)[u.sort] === "asc" ? (I(), gt(f, {
            key: 0,
            icon: ["fas", "sort-up"],
            "fixed-width": "",
            class: "uk-align-right uk-margin-remove"
          })) : L(a)[u.sort] === "desc" ? (I(), gt(f, {
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
      ])) : (I(), j("th", ey, [
        Z(u.$slots, "default")
      ]));
    };
  }
}), iy = {
  class: "uk-child-width-auto",
  "uk-grid": ""
}, sy = { class: "uk-text-left uk-text-meta" }, oy = { class: "uk-text-center uk-width-expand" }, ry = ["value"], ay = { class: "uk-text-right" }, ly = { "aria-label": "Pagination" }, cy = {
  class: "uk-pagination uk-flex-right",
  "uk-margin": ""
}, qc = /* @__PURE__ */ dt({
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
      const A = At("font-awesome-icon");
      return I(), j("div", iy, [
        x("div", sy, [
          x("span", null, "Showing " + lt(L(f)) + " - " + lt(L(g)) + " of " + lt(L(h)), 1)
        ]),
        x("div", oy, [
          zt(x("select", {
            class: "uk-select uk-form-small uk-form-width-small",
            "aria-label": "Select per page",
            "onUpdate:modelValue": v[0] || (v[0] = (S) => zo(a) ? a.value = S : null)
          }, [
            (I(!0), j(yn, null, os(b.rowsPerPageOptions, (S) => (I(), j("option", {
              key: S,
              value: S
            }, lt(S) + " per page ", 9, ry))), 128))
          ], 512), [
            [zl, L(a)]
          ])
        ]),
        x("div", ay, [
          x("nav", ly, [
            x("ul", cy, [
              x("li", null, [
                x("a", {
                  onClick: v[1] || (v[1] = (S) => k(0)),
                  class: ye(["uk-icon-link", { "uk-disabled": L(r) === 0 }])
                }, [
                  Ct(A, {
                    icon: "angles-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              x("li", null, [
                x("a", {
                  onClick: v[2] || (v[2] = (S) => k(L(r) - 1)),
                  class: ye(["uk-icon-link", { "uk-disabled": L(r) === 0 }])
                }, [
                  Ct(A, {
                    icon: "angle-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              x("li", null, "Page " + lt(L(r) + 1) + " of " + lt(L(u) + 1), 1),
              x("li", null, [
                x("a", {
                  onClick: v[3] || (v[3] = (S) => k(L(r) + 1)),
                  class: ye(["uk-icon-link", { "uk-disabled": L(r) === L(u) }])
                }, [
                  Ct(A, {
                    icon: "angle-right",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              x("li", null, [
                x("a", {
                  onClick: v[4] || (v[4] = (S) => k(L(u))),
                  class: ye(["uk-icon-link", { "uk-disabled": L(r) === L(u) }])
                }, [
                  Ct(A, {
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
}), uy = {
  key: 0,
  class: "uk-search uk-search-default"
}, hy = ["placeholder"], dy = /* @__PURE__ */ dt({
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
    return (h, f) => i.column ? (I(), j("div", uy, [
      zt(x("input", {
        class: "uk-search-input uk-form-small",
        type: "search",
        placeholder: u.value,
        "aria-label": "Search",
        "onUpdate:modelValue": f[0] || (f[0] = (g) => L(r)[i.column] = g)
      }, null, 8, hy), [
        [ee, L(r)[i.column]]
      ]),
      f[1] || (f[1] = x("span", {
        class: "uk-search-icon-flip",
        "uk-search-icon": ""
      }, null, -1))
    ])) : nt("", !0);
  }
}), fy = ["placeholder", "onUpdate:modelValue"], py = /* @__PURE__ */ dt({
  __name: "SprunjeFilters",
  setup(i) {
    const s = rs("sprunjer"), { data: a, filters: r } = s, u = ce(() => a.value.filterable), h = () => {
      r.value = {};
    };
    return (f, g) => {
      const k = At("font-awesome-icon");
      return I(), j(yn, null, [
        g[1] || (g[1] = x("h3", { class: "uk-heading-divider" }, "Filters", -1)),
        (I(!0), j(yn, null, os(u.value, (b, v) => (I(), j("dl", {
          class: "uk-description-list",
          key: v
        }, [
          x("dt", null, lt(b), 1),
          x("dd", null, [
            zt(x("input", {
              class: "uk-input",
              type: "text",
              placeholder: b,
              "onUpdate:modelValue": (A) => L(r)[b] = A
            }, null, 8, fy), [
              [ee, L(r)[b]]
            ])
          ])
        ]))), 128)),
        x("button", {
          class: "uk-button uk-button-default uk-button-small",
          onClick: h
        }, [
          Ct(k, {
            icon: "xmark",
            "fixed-width": ""
          }),
          g[0] || (g[0] = _t(" Clear filters "))
        ])
      ], 64);
    };
  }
}), my = {
  "uk-grid": "",
  class: "uk-child-width-1-2"
}, gy = { class: "uk-text-left" }, vy = { class: "uk-text-right" }, by = {
  "uk-grid": "",
  class: "uk-grid-small uk-grid-divider"
}, wy = { class: "uk-width-expand" }, yy = { class: "uk-table uk-table-striped uk-table-small" }, ky = {
  key: 0,
  class: "uk-width-1-4"
}, $y = /* @__PURE__ */ dt({
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
      const f = At("font-awesome-icon");
      return I(), j(yn, null, [
        x("div", my, [
          x("div", gy, [
            Z(u.$slots, "actions")
          ]),
          x("div", vy, [
            Z(u.$slots, "filters"),
            u.searchColumn ? (I(), gt(dy, {
              key: 0,
              column: u.searchColumn
            }, null, 8, ["column"])) : nt("", !0),
            u.hideFilters ? nt("", !0) : (I(), j("a", {
              key: 1,
              class: "uk-button uk-button-default uk-button-small",
              onClick: h[0] || (h[0] = (g) => s.value = !s.value)
            }, [
              Ct(f, { icon: "filter" })
            ]))
          ])
        ]),
        x("div", by, [
          x("div", wy, [
            x("table", yy, [
              x("thead", null, [
                x("tr", null, [
                  Z(u.$slots, "header")
                ])
              ]),
              x("tbody", null, [
                (I(!0), j(yn, null, os(L(r), (g) => (I(), j("tr", {
                  key: g.id
                }, [
                  Z(u.$slots, "body", { item: g })
                ]))), 128))
              ])
            ])
          ]),
          s.value === !0 ? (I(), j("div", ky, [
            Ct(py),
            Z(u.$slots, "filterPanel")
          ])) : nt("", !0)
        ]),
        u.hidePagination ? nt("", !0) : Z(u.$slots, "paginator", { key: 0 }, () => [
          Ct(qc)
        ])
      ], 64);
    };
  }
}), Ay = {
  install: (i) => {
    i.component("UFAlert", up).component("UFLabel", hp).component("UFAppLink", Ho).component("UFInfoBox", kp).component("UFCardBox", Op).component("UFCardBoxBig", Ap).component("UFMainContent", Fp).component("UFHeaderPage", Lp).component("UFFooterContent", qp).component("UFFormLogin", Ko).component("UFFormRegister", zc).component("UFFormForgotPassword", Hc).component("UFNavBar", Gb).component("UFNavBarDropdown", tr).component("UFNavBarDropdownSeparator", nw).component("UFNavBarItem", rw).component("UFNavBarLogin", lw).component("UFNavBarUserCard", mw).component("UFNavBarUserCardButton", ww).component("UFPageLogin", $w).component("UFPageRegister", Sw).component("UFPageForgotPassword", _w).component("UFPageResendVerification", Rw).component("UFSideBar", jw).component("UFSideBarDropdown", zw).component("UFSideBarItem", Kw).component("UFSideBarLabel", Xw).component("UFSprunjeColumn", Zw).component("UFSprunjeHeader", ny).component("UFSprunjePaginator", qc).component("UFSprunjeTable", $y);
  }
};
export {
  qc as A,
  $y as B,
  qp as F,
  Fp as M,
  nw as N,
  Ay as P,
  jw as S,
  Wl as U,
  up as _,
  hp as a,
  Ho as b,
  Wp as c,
  kp as d,
  Op as e,
  Ap as f,
  Vp as g,
  Lp as h,
  Ko as i,
  zc as j,
  Hc as k,
  Gb as l,
  tr as m,
  rw as n,
  lw as o,
  mw as p,
  ww as q,
  $w as r,
  Sw as s,
  _w as t,
  Rw as u,
  zw as v,
  Kw as w,
  Xw as x,
  Zw as y,
  ny as z
};
