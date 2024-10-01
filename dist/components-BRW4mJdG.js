import { defineComponent as vt, computed as Ce, resolveComponent as Mt, openBlock as D, createElementBlock as q, normalizeClass as es, createCommentVNode as ut, createBlock as St, createTextVNode as Et, toDisplayString as pt, renderSlot as dt, unref as lt, withCtx as Bt, createElementVNode as C, createVNode as fe, createSlots as Xf, ref as Ae, withModifiers as ns, withDirectives as se, vModelText as re, Fragment as Yf, renderList as Qf, vModelSelect as Zf, isRef as Ll, mergeProps as Zn, normalizeProps as tp, guardReactiveProps as ep } from "vue";
import { RouterLink as ni } from "vue-router";
import { defineStore as Ml } from "pinia";
var ve = /* @__PURE__ */ ((i) => (i.Primary = "Primary", i.Success = "Success", i.Warning = "Warning", i.Danger = "Danger", i))(ve || {});
const np = {
  key: 1,
  "data-test": "title"
}, ip = {
  key: 2,
  "data-test": "description"
}, sp = ["innerHTML"], op = /* @__PURE__ */ vt({
  __name: "AlertContainer",
  props: {
    alert: {}
  },
  setup(i) {
    const s = i, r = Ce(() => {
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
    }), a = Ce(() => {
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
      const f = Mt("font-awesome-icon");
      return D(), q("div", {
        class: es([r.value, "uk-alert"]),
        "uk-alert": ""
      }, [
        u.alert.closeBtn ? (D(), q("a", {
          key: 0,
          "data-test": "closeBtn",
          class: "uk-alert-close",
          "uk-close": "",
          onClick: h[0] || (h[0] = (g) => u.$emit("close"))
        })) : ut("", !0),
        u.alert.title ? (D(), q("h3", np, [
          u.alert.hideIcon ? ut("", !0) : (D(), St(f, {
            key: 0,
            icon: a.value,
            class: "uk-icon"
          }, null, 8, ["icon"])),
          Et(" " + pt(u.alert.title), 1)
        ])) : ut("", !0),
        u.$slots.default ? (D(), q("p", ip, [
          dt(u.$slots, "default")
        ])) : u.alert.description ? (D(), q("p", {
          key: 3,
          innerHTML: u.alert.description,
          "data-test": "description"
        }, null, 8, sp)) : ut("", !0)
      ], 2);
    };
  }
}), rp = ["href"], ap = { key: 1 }, Mo = /* @__PURE__ */ vt({
  __name: "AppLink",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, r = Ce(() => typeof s.to == "string" && s.to.startsWith("http")), a = Ce(() => s.to), u = Ce(() => s.to === "");
    return (h, f) => r.value ? (D(), q("a", {
      key: 0,
      href: a.value,
      target: "_blank"
    }, [
      dt(h.$slots, "default", {}, () => [
        Et(pt(h.label), 1)
      ])
    ], 8, rp)) : u.value ? (D(), q("div", ap, [
      dt(h.$slots, "default", {}, () => [
        Et(pt(h.label), 1)
      ])
    ])) : (D(), St(lt(ni), {
      key: 2,
      to: h.to
    }, {
      default: Bt(() => [
        dt(h.$slots, "default", {}, () => [
          Et(pt(h.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["to"]));
  }
}), lp = { class: "uk-card uk-card-default uk-card-body uk-card-small" }, cp = {
  class: "uk-grid-small uk-flex-middle",
  "uk-grid": ""
}, up = {
  key: 0,
  class: "uk-width-auto"
}, hp = ["data-uk-icon"], dp = { class: "uk-width-expand" }, fp = {
  key: 0,
  class: "uk-margin-remove"
}, pp = {
  key: 1,
  class: "uk-text-meta uk-text-uppercase"
}, mp = /* @__PURE__ */ vt({
  __name: "InfoBox",
  props: {
    to: { default: "" },
    label: { default: null },
    value: { default: null },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(i) {
    return (s, r) => {
      const a = Mt("font-awesome-icon");
      return D(), St(Mo, {
        to: s.to,
        class: "uk-text-decoration-none"
      }, {
        default: Bt(() => [
          C("div", lp, [
            C("div", cp, [
              s.icon || s.faIcon ? (D(), q("div", up, [
                s.icon ? (D(), q("span", {
                  key: 0,
                  "data-uk-icon": "icon: " + s.icon + "; ratio: 2",
                  class: "uk-margin-small-right"
                }, null, 8, hp)) : ut("", !0),
                s.faIcon ? (D(), St(a, {
                  key: 1,
                  icon: s.faIcon,
                  size: "2xl",
                  "fixed-width": ""
                }, null, 8, ["icon"])) : ut("", !0)
              ])) : ut("", !0),
              C("div", dp, [
                s.value !== null ? (D(), q("h4", fp, pt(s.value), 1)) : ut("", !0),
                s.label !== null ? (D(), q("span", pp, pt(s.label), 1)) : ut("", !0)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
}), gp = { class: "uk-card uk-card-default uk-card-small" }, vp = {
  key: 0,
  class: "uk-card-header"
}, bp = { "data-test": "title" }, wp = {
  class: "uk-card-body",
  "data-test": "slot"
}, yp = {
  key: 1,
  class: "uk-card-footer"
}, $p = /* @__PURE__ */ vt({
  __name: "CardBox",
  props: {
    title: String
  },
  setup(i) {
    return (s, r) => (D(), q("div", gp, [
      i.title || s.$slots.header ? (D(), q("div", vp, [
        C("h4", bp, [
          dt(s.$slots, "header", {}, () => [
            Et(pt(i.title), 1)
          ])
        ])
      ])) : ut("", !0),
      C("div", wp, [
        dt(s.$slots, "default")
      ]),
      s.$slots.footer ? (D(), q("div", yp, [
        dt(s.$slots, "footer")
      ])) : ut("", !0)
    ]));
  }
}), kp = { class: "uk-flex uk-flex-center uk-flex-middle" }, xp = { class: "uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl" }, Sp = /* @__PURE__ */ vt({
  __name: "CardBoxBig",
  props: {
    title: String
  },
  setup(i) {
    return (s, r) => {
      const a = Mt("UFCardBox");
      return D(), q("div", kp, [
        C("div", xp, [
          fe(a, null, Xf({
            default: Bt(() => [
              dt(s.$slots, "default")
            ]),
            _: 2
          }, [
            s.$slots.header || i.title ? {
              name: "header",
              fn: Bt(() => [
                dt(s.$slots, "header", {}, () => [
                  Et(pt(i.title), 1)
                ])
              ]),
              key: "0"
            } : void 0,
            s.$slots.footer ? {
              name: "footer",
              fn: Bt(() => [
                dt(s.$slots, "footer")
              ]),
              key: "1"
            } : void 0
          ]), 1024)
        ])
      ]);
    };
  }
}), is = (i, s) => {
  const r = i.__vccOpts || i;
  for (const [a, u] of s)
    r[a] = u;
  return r;
}, Ep = {}, _p = {
  class: "uf-main uk-section uk-section-default uk-section-muted",
  "uk-height-viewport": "expand: true"
}, Op = {
  class: "uk-container",
  "data-test": "slot"
};
function Tp(i, s) {
  return D(), q("div", _p, [
    C("div", Op, [
      dt(i.$slots, "default")
    ])
  ]);
}
const Cp = /* @__PURE__ */ is(Ep, [["render", Tp]]), Ap = { class: "uf-page-header" }, Pp = { class: "uk-margin-remove" }, Rp = {
  key: 0,
  class: "uk-text-meta uk-margin-remove"
}, Ip = /* @__PURE__ */ vt({
  __name: "HeaderPage",
  props: {
    title: {},
    caption: { default: "" }
  },
  setup(i) {
    return (s, r) => (D(), q("div", Ap, [
      C("h3", Pp, pt(s.title), 1),
      s.caption ? (D(), q("p", Rp, pt(s.caption), 1)) : ut("", !0)
    ]));
  }
}), Bp = {}, Np = { class: "uf-main uk-section uk-section-small uk-section-muted uk-text-center" }, Dp = {
  class: "uk-text-small uk-text-center",
  "data-test": "slot"
};
function Fp(i, s) {
  return D(), q("footer", Np, [
    s[0] || (s[0] = C("hr", null, null, -1)),
    C("p", Dp, [
      dt(i.$slots, "default")
    ])
  ]);
}
const Lp = /* @__PURE__ */ is(Bp, [["render", Fp]]);
var Mp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jp(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var jl = { exports: {} };
/*! UIkit 3.21.12 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */
(function(i, s) {
  (function(r, a) {
    i.exports = a();
  })(Mp, function() {
    const { hasOwnProperty: r, toString: a } = Object.prototype;
    function u(t, e) {
      return r.call(t, e);
    }
    const h = /\B([A-Z])/g, f = ee((t) => t.replace(h, "-$1").toLowerCase()), g = /-(\w)/g, k = ee(
      (t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(g, (e, n) => n.toUpperCase())
    ), v = ee((t) => t.charAt(0).toUpperCase() + t.slice(1));
    function b(t, e) {
      var n;
      return (n = t == null ? void 0 : t.startsWith) == null ? void 0 : n.call(t, e);
    }
    function A(t, e) {
      var n;
      return (n = t == null ? void 0 : t.endsWith) == null ? void 0 : n.call(t, e);
    }
    function _(t, e) {
      var n;
      return (n = t == null ? void 0 : t.includes) == null ? void 0 : n.call(t, e);
    }
    function P(t, e) {
      var n;
      return (n = t == null ? void 0 : t.findIndex) == null ? void 0 : n.call(t, e);
    }
    const { isArray: T, from: O } = Array, { assign: M } = Object;
    function U(t) {
      return typeof t == "function";
    }
    function j(t) {
      return t !== null && typeof t == "object";
    }
    function X(t) {
      return a.call(t) === "[object Object]";
    }
    function Ct(t) {
      return j(t) && t === t.window;
    }
    function Nt(t) {
      return te(t) === 9;
    }
    function wt(t) {
      return te(t) >= 1;
    }
    function Dt(t) {
      return te(t) === 1;
    }
    function te(t) {
      return !Ct(t) && j(t) && t.nodeType;
    }
    function jt(t) {
      return typeof t == "boolean";
    }
    function ct(t) {
      return typeof t == "string";
    }
    function xn(t) {
      return typeof t == "number";
    }
    function ue(t) {
      return xn(t) || ct(t) && !isNaN(t - parseFloat(t));
    }
    function ai(t) {
      return !(T(t) ? t.length : j(t) && Object.keys(t).length);
    }
    function Pt(t) {
      return t === void 0;
    }
    function ps(t) {
      return jt(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function pe(t) {
      const e = Number(t);
      return isNaN(e) ? !1 : e;
    }
    function K(t) {
      return parseFloat(t) || 0;
    }
    function yt(t) {
      return t && Z(t)[0];
    }
    function Z(t) {
      return wt(t) ? [t] : Array.from(t || []).filter(wt);
    }
    function Pe(t) {
      if (Ct(t))
        return t;
      t = yt(t);
      const e = Nt(t) ? t : t == null ? void 0 : t.ownerDocument;
      return (e == null ? void 0 : e.defaultView) || window;
    }
    function Sn(t, e) {
      return t === e || j(t) && j(e) && Object.keys(t).length === Object.keys(e).length && en(t, (n, o) => n === e[o]);
    }
    function ms(t, e, n) {
      return t.replace(new RegExp(`${e}|${n}`, "g"), (o) => o === e ? n : e);
    }
    function Re(t) {
      return t[t.length - 1];
    }
    function en(t, e) {
      for (const n in t)
        if (e(t[n], n) === !1)
          return !1;
      return !0;
    }
    function Yo(t, e) {
      return t.slice().sort(
        ({ [e]: n = 0 }, { [e]: o = 0 }) => n > o ? 1 : o > n ? -1 : 0
      );
    }
    function Ie(t, e) {
      return t.reduce(
        (n, o) => n + K(U(e) ? e(o) : o[e]),
        0
      );
    }
    function Qo(t, e) {
      const n = /* @__PURE__ */ new Set();
      return t.filter(({ [e]: o }) => n.has(o) ? !1 : n.add(o));
    }
    function gs(t, e) {
      return e.reduce((n, o) => ({ ...n, [o]: t[o] }), {});
    }
    function Ft(t, e = 0, n = 1) {
      return Math.min(Math.max(pe(t) || 0, e), n);
    }
    function it() {
    }
    function li(...t) {
      return [
        ["bottom", "top"],
        ["right", "left"]
      ].every(
        ([e, n]) => Math.min(...t.map(({ [e]: o }) => o)) - Math.max(...t.map(({ [n]: o }) => o)) > 0
      );
    }
    function ci(t, e) {
      return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function vs(t, e, n) {
      const o = e === "width" ? "height" : "width";
      return {
        [o]: t[e] ? Math.round(n * t[o] / t[e]) : t[o],
        [e]: n
      };
    }
    function Zo(t, e) {
      t = { ...t };
      for (const n in t)
        t = t[n] > e[n] ? vs(t, n, e[n]) : t;
      return t;
    }
    function jc(t, e) {
      t = Zo(t, e);
      for (const n in t)
        t = t[n] < e[n] ? vs(t, n, e[n]) : t;
      return t;
    }
    const bs = { ratio: vs, contain: Zo, cover: jc };
    function Jt(t, e, n = 0, o = !1) {
      e = Z(e);
      const { length: l } = e;
      return l ? (t = ue(t) ? pe(t) : t === "next" ? n + 1 : t === "previous" ? n - 1 : t === "last" ? l - 1 : e.indexOf(yt(t)), o ? Ft(t, 0, l - 1) : (t %= l, t < 0 ? t + l : t)) : -1;
    }
    function ee(t) {
      const e = /* @__PURE__ */ Object.create(null);
      return (n, ...o) => e[n] || (e[n] = t(n, ...o));
    }
    function G(t, ...e) {
      for (const n of Z(t)) {
        const o = Be(e).filter((l) => !z(n, l));
        o.length && n.classList.add(...o);
      }
    }
    function nt(t, ...e) {
      for (const n of Z(t)) {
        const o = Be(e).filter((l) => z(n, l));
        o.length && n.classList.remove(...o);
      }
    }
    function ui(t, e, n) {
      n = Be(n), e = Be(e).filter((o) => !_(n, o)), nt(t, e), G(t, n);
    }
    function z(t, e) {
      return [e] = Be(e), Z(t).some((n) => n.classList.contains(e));
    }
    function $t(t, e, n) {
      const o = Be(e);
      Pt(n) || (n = !!n);
      for (const l of Z(t))
        for (const c of o)
          l.classList.toggle(c, n);
    }
    function Be(t) {
      return t ? T(t) ? t.map(Be).flat() : String(t).split(" ").filter(Boolean) : [];
    }
    function B(t, e, n) {
      var o;
      if (j(e)) {
        for (const l in e)
          B(t, l, e[l]);
        return;
      }
      if (Pt(n))
        return (o = yt(t)) == null ? void 0 : o.getAttribute(e);
      for (const l of Z(t))
        U(n) && (n = n.call(l, B(l, e))), n === null ? En(l, e) : l.setAttribute(e, n);
    }
    function we(t, e) {
      return Z(t).some((n) => n.hasAttribute(e));
    }
    function En(t, e) {
      Z(t).forEach((n) => n.removeAttribute(e));
    }
    function Rt(t, e) {
      for (const n of [e, `data-${e}`])
        if (we(t, n))
          return B(t, n);
    }
    const Ne = typeof window < "u", Ot = Ne && document.dir === "rtl", nn = Ne && "ontouchstart" in window, sn = Ne && window.PointerEvent, ne = sn ? "pointerdown" : nn ? "touchstart" : "mousedown", hi = sn ? "pointermove" : nn ? "touchmove" : "mousemove", ye = sn ? "pointerup" : nn ? "touchend" : "mouseup", De = sn ? "pointerenter" : nn ? "" : "mouseenter", on = sn ? "pointerleave" : nn ? "" : "mouseleave", di = sn ? "pointercancel" : "touchcancel", Uc = {
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
    function ws(t) {
      return Z(t).some((e) => Uc[e.tagName.toLowerCase()]);
    }
    const zc = Ne && Element.prototype.checkVisibility || function() {
      return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
    };
    function kt(t) {
      return Z(t).some((e) => zc.call(e));
    }
    const _n = "input,select,textarea,button";
    function fi(t) {
      return Z(t).some((e) => tt(e, _n));
    }
    const On = `${_n},a[href],[tabindex]`;
    function pi(t) {
      return tt(t, On);
    }
    function ot(t) {
      var e;
      return (e = yt(t)) == null ? void 0 : e.parentElement;
    }
    function Tn(t, e) {
      return Z(t).filter((n) => tt(n, e));
    }
    function tt(t, e) {
      return Z(t).some((n) => n.matches(e));
    }
    function Cn(t, e) {
      const n = [];
      for (; t = ot(t); )
        (!e || tt(t, e)) && n.push(t);
      return n;
    }
    function rt(t, e) {
      t = yt(t);
      const n = t ? O(t.children) : [];
      return e ? Tn(n, e) : n;
    }
    function me(t, e) {
      return e ? Z(t).indexOf(yt(e)) : rt(ot(t)).indexOf(t);
    }
    function rn(t) {
      return t = yt(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
    }
    function ys(t) {
      if (rn(t)) {
        const { hash: e, ownerDocument: n } = yt(t), o = decodeURIComponent(e).slice(1);
        return n.getElementById(o) || n.getElementsByName(o)[0];
      }
    }
    function Lt(t, e) {
      return $s(t, tr(t, e));
    }
    function An(t, e) {
      return Pn(t, tr(t, e));
    }
    function $s(t, e) {
      return yt(ir(t, yt(e), "querySelector"));
    }
    function Pn(t, e) {
      return Z(ir(t, yt(e), "querySelectorAll"));
    }
    function tr(t, e = document) {
      return Nt(e) || er(t).isContextSelector ? e : e.ownerDocument;
    }
    const Hc = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, qc = /(\([^)]*\)|[^,])+/g, er = ee((t) => {
      let e = !1;
      if (!t || !ct(t))
        return {};
      const n = [];
      for (let o of t.match(qc))
        o = o.trim().replace(Hc, "$1 *"), e || (e = ["!", "+", "~", "-", ">"].includes(o[0])), n.push(o);
      return {
        selector: n.join(","),
        selectors: n,
        isContextSelector: e
      };
    }), Wc = /(\([^)]*\)|\S)*/, nr = ee((t) => {
      t = t.slice(1).trim();
      const [e] = t.match(Wc);
      return [e, t.slice(e.length + 1)];
    });
    function ir(t, e = document, n) {
      const o = er(t);
      if (!o.isContextSelector)
        return o.selector ? ks(e, n, o.selector) : t;
      t = "";
      const l = o.selectors.length === 1;
      for (let c of o.selectors) {
        let d, p = e;
        if (c[0] === "!" && ([d, c] = nr(c), p = e.parentElement.closest(d), !c && l) || p && c[0] === "-" && ([d, c] = nr(c), p = p.previousElementSibling, p = tt(p, d) ? p : null, !c && l))
          return p;
        if (p) {
          if (l)
            return c[0] === "~" || c[0] === "+" ? (c = `:scope > :nth-child(${me(p) + 1}) ${c}`, p = p.parentElement) : c[0] === ">" && (c = `:scope ${c}`), ks(p, n, c);
          t += `${t ? "," : ""}${Vc(p)} ${c}`;
        }
      }
      return Nt(e) || (e = e.ownerDocument), ks(e, n, t);
    }
    function ks(t, e, n) {
      try {
        return t[e](n);
      } catch {
        return null;
      }
    }
    function Vc(t) {
      const e = [];
      for (; t.parentNode; ) {
        const n = B(t, "id");
        if (n) {
          e.unshift(`#${xs(n)}`);
          break;
        } else {
          let { tagName: o } = t;
          o !== "HTML" && (o += `:nth-child(${me(t) + 1})`), e.unshift(o), t = t.parentNode;
        }
      }
      return e.join(" > ");
    }
    function xs(t) {
      return ct(t) ? CSS.escape(t) : "";
    }
    function H(...t) {
      let [e, n, o, l, c = !1] = Ss(t);
      l.length > 1 && (l = Kc(l)), c != null && c.self && (l = Gc(l)), o && (l = Jc(o, l));
      for (const d of n)
        for (const p of e)
          p.addEventListener(d, l, c);
      return () => $e(e, n, l, c);
    }
    function $e(...t) {
      let [e, n, , o, l = !1] = Ss(t);
      for (const c of n)
        for (const d of e)
          d.removeEventListener(c, o, l);
    }
    function mt(...t) {
      const [e, n, o, l, c = !1, d] = Ss(t), p = H(
        e,
        n,
        o,
        (m) => {
          const w = !d || d(m);
          w && (p(), l(m, w));
        },
        c
      );
      return p;
    }
    function F(t, e, n) {
      return Es(t).every(
        (o) => o.dispatchEvent(an(e, !0, !0, n))
      );
    }
    function an(t, e = !0, n = !1, o) {
      return ct(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: n, detail: o })), t;
    }
    function Ss(t) {
      return t[0] = Es(t[0]), ct(t[1]) && (t[1] = t[1].split(" ")), U(t[2]) && t.splice(2, 0, !1), t;
    }
    function Jc(t, e) {
      return (n) => {
        const o = t[0] === ">" ? Pn(t, n.currentTarget).reverse().find((l) => l.contains(n.target)) : n.target.closest(t);
        o && (n.current = o, e.call(this, n), delete n.current);
      };
    }
    function Kc(t) {
      return (e) => T(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function Gc(t) {
      return function(e) {
        if (e.target === e.currentTarget || e.target === e.current)
          return t.call(null, e);
      };
    }
    function sr(t) {
      return t && "addEventListener" in t;
    }
    function Xc(t) {
      return sr(t) ? t : yt(t);
    }
    function Es(t) {
      return T(t) ? t.map(Xc).filter(Boolean) : ct(t) ? Pn(t) : sr(t) ? [t] : Z(t);
    }
    function oe(t) {
      return t.pointerType === "touch" || !!t.touches;
    }
    function ge(t) {
      var e, n;
      const { clientX: o, clientY: l } = ((e = t.touches) == null ? void 0 : e[0]) || ((n = t.changedTouches) == null ? void 0 : n[0]) || t;
      return { x: o, y: l };
    }
    const Yc = {
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
    function y(t, e, n, o) {
      const l = Z(t);
      for (const c of l)
        if (ct(e)) {
          if (e = mi(e), Pt(n))
            return getComputedStyle(c).getPropertyValue(e);
          c.style.setProperty(
            e,
            ue(n) && !Yc[e] ? `${n}px` : n || xn(n) ? n : "",
            o
          );
        } else if (T(e)) {
          const d = {};
          for (const p of e)
            d[p] = y(c, p);
          return d;
        } else if (j(e))
          for (const d in e)
            y(c, d, e[d], n);
      return l[0];
    }
    const mi = ee((t) => {
      if (b(t, "--"))
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
    }), _s = "uk-transition", Os = "transitionend", Ts = "transitioncanceled";
    function Qc(t, e, n = 400, o = "linear") {
      return n = Math.round(n), Promise.all(
        Z(t).map(
          (l) => new Promise((c, d) => {
            for (const m in e)
              y(l, m);
            const p = setTimeout(() => F(l, Os), n);
            mt(
              l,
              [Os, Ts],
              ({ type: m }) => {
                clearTimeout(p), nt(l, _s), y(l, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
                }), m === Ts ? d() : c(l);
              },
              { self: !0 }
            ), G(l, _s), y(l, {
              transitionProperty: Object.keys(e).map(mi).join(","),
              transitionDuration: `${n}ms`,
              transitionTimingFunction: o,
              ...e
            });
          })
        )
      );
    }
    const at = {
      start: Qc,
      async stop(t) {
        F(t, Os), await Promise.resolve();
      },
      async cancel(t) {
        F(t, Ts), await Promise.resolve();
      },
      inProgress(t) {
        return z(t, _s);
      }
    }, Rn = "uk-animation", or = "animationend", gi = "animationcanceled";
    function rr(t, e, n = 200, o, l) {
      return Promise.all(
        Z(t).map(
          (c) => new Promise((d, p) => {
            z(c, Rn) && F(c, gi);
            const m = [
              e,
              Rn,
              `${Rn}-${l ? "leave" : "enter"}`,
              o && `uk-transform-origin-${o}`,
              l && `${Rn}-reverse`
            ], w = setTimeout(() => F(c, or), n);
            mt(
              c,
              [or, gi],
              ({ type: $ }) => {
                clearTimeout(w), $ === gi ? p() : d(c), y(c, "animationDuration", ""), nt(c, m);
              },
              { self: !0 }
            ), y(c, "animationDuration", `${n}ms`), G(c, m);
          })
        )
      );
    }
    const ke = {
      in: rr,
      out(t, e, n, o) {
        return rr(t, e, n, o, !0);
      },
      inProgress(t) {
        return z(t, Rn);
      },
      cancel(t) {
        F(t, gi);
      }
    };
    function Zc(t) {
      if (document.readyState !== "loading") {
        t();
        return;
      }
      mt(document, "DOMContentLoaded", t);
    }
    function gt(t, ...e) {
      return e.some((n) => {
        var o;
        return ((o = t == null ? void 0 : t.tagName) == null ? void 0 : o.toLowerCase()) === n.toLowerCase();
      });
    }
    function ar(t) {
      return t = W(t), t.innerHTML = "", t;
    }
    function xe(t, e) {
      return Pt(e) ? W(t).innerHTML : xt(ar(t), e);
    }
    const tu = wi("prepend"), xt = wi("append"), vi = wi("before"), bi = wi("after");
    function wi(t) {
      return function(e, n) {
        var o;
        const l = Z(ct(n) ? Fe(n) : n);
        return (o = W(e)) == null || o[t](...l), lr(l);
      };
    }
    function Kt(t) {
      Z(t).forEach((e) => e.remove());
    }
    function yi(t, e) {
      for (e = yt(vi(t, e)); e.firstElementChild; )
        e = e.firstElementChild;
      return xt(e, t), e;
    }
    function Cs(t, e) {
      return Z(
        Z(t).map(
          (n) => n.hasChildNodes() ? yi(O(n.childNodes), e) : xt(n, e)
        )
      );
    }
    function In(t) {
      Z(t).map(ot).filter((e, n, o) => o.indexOf(e) === n).forEach((e) => e.replaceWith(...e.childNodes));
    }
    const eu = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function Fe(t) {
      const e = eu.exec(t);
      if (e)
        return document.createElement(e[1]);
      const n = document.createElement("template");
      return n.innerHTML = t.trim(), lr(n.content.childNodes);
    }
    function lr(t) {
      return t.length > 1 ? t : t[0];
    }
    function Se(t, e) {
      if (Dt(t))
        for (e(t), t = t.firstElementChild; t; )
          Se(t, e), t = t.nextElementSibling;
    }
    function W(t, e) {
      return cr(t) ? yt(Fe(t)) : $s(t, e);
    }
    function ht(t, e) {
      return cr(t) ? Z(Fe(t)) : Pn(t, e);
    }
    function cr(t) {
      return ct(t) && b(t.trim(), "<");
    }
    const Le = {
      width: ["left", "right"],
      height: ["top", "bottom"]
    };
    function N(t) {
      const e = Dt(t) ? yt(t).getBoundingClientRect() : { height: Ut(t), width: $i(t), top: 0, left: 0 };
      return {
        height: e.height,
        width: e.width,
        top: e.top,
        left: e.left,
        bottom: e.top + e.height,
        right: e.left + e.width
      };
    }
    function Q(t, e) {
      e && y(t, { left: 0, top: 0 });
      const n = N(t);
      if (t) {
        const { scrollY: o, scrollX: l } = Pe(t), c = { height: o, width: l };
        for (const d in Le)
          for (const p of Le[d])
            n[p] += c[d];
      }
      if (!e)
        return n;
      for (const o of ["left", "top"])
        y(t, o, e[o] - n[o]);
    }
    function As(t) {
      let { top: e, left: n } = Q(t);
      const {
        ownerDocument: { body: o, documentElement: l },
        offsetParent: c
      } = yt(t);
      let d = c || l;
      for (; d && (d === o || d === l) && y(d, "position") === "static"; )
        d = d.parentNode;
      if (Dt(d)) {
        const p = Q(d);
        e -= p.top + K(y(d, "borderTopWidth")), n -= p.left + K(y(d, "borderLeftWidth"));
      }
      return {
        top: e - K(y(t, "marginTop")),
        left: n - K(y(t, "marginLeft"))
      };
    }
    function Bn(t) {
      t = yt(t);
      const e = [t.offsetTop, t.offsetLeft];
      for (; t = t.offsetParent; )
        if (e[0] += t.offsetTop + K(y(t, "borderTopWidth")), e[1] += t.offsetLeft + K(y(t, "borderLeftWidth")), y(t, "position") === "fixed") {
          const n = Pe(t);
          return e[0] += n.scrollY, e[1] += n.scrollX, e;
        }
      return e;
    }
    const Ut = ur("height"), $i = ur("width");
    function ur(t) {
      const e = v(t);
      return (n, o) => {
        if (Pt(o)) {
          if (Ct(n))
            return n[`inner${e}`];
          if (Nt(n)) {
            const l = n.documentElement;
            return Math.max(l[`offset${e}`], l[`scroll${e}`]);
          }
          return n = yt(n), o = y(n, t), o = o === "auto" ? n[`offset${e}`] : K(o) || 0, o - ln(n, t);
        } else
          return y(
            n,
            t,
            !o && o !== 0 ? "" : +o + ln(n, t) + "px"
          );
      };
    }
    function ln(t, e, n = "border-box") {
      return y(t, "boxSizing") === n ? Ie(
        Le[e],
        (o) => K(y(t, `padding-${o}`)) + K(y(t, `border-${o}-width`))
      ) : 0;
    }
    function ki(t) {
      for (const e in Le)
        for (const n in Le[e])
          if (Le[e][n] === t)
            return Le[e][1 - n];
      return t;
    }
    function At(t, e = "width", n = window, o = !1) {
      return ct(t) ? Ie(iu(t), (l) => {
        const c = ou(l);
        return c ? ru(
          c === "vh" ? au() : c === "vw" ? $i(Pe(n)) : o ? n[`offset${v(e)}`] : N(n)[e],
          l
        ) : l;
      }) : K(t);
    }
    const nu = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, iu = ee((t) => t.toString().replace(/\s/g, "").match(nu) || []), su = /(?:v[hw]|%)$/, ou = ee((t) => (t.match(su) || [])[0]);
    function ru(t, e) {
      return t * K(e) / 100;
    }
    let Nn, cn;
    function au() {
      return Nn || (cn || (cn = W("<div>"), y(cn, {
        height: "100vh",
        position: "fixed"
      }), H(window, "resize", () => Nn = null)), xt(document.body, cn), Nn = cn.clientHeight, Kt(cn), Nn);
    }
    const Ee = { read: lu, write: cu, clear: uu, flush: hr }, xi = [], Si = [];
    function lu(t) {
      return xi.push(t), Rs(), t;
    }
    function cu(t) {
      return Si.push(t), Rs(), t;
    }
    function uu(t) {
      fr(xi, t), fr(Si, t);
    }
    let Ps = !1;
    function hr() {
      dr(xi), dr(Si.splice(0)), Ps = !1, (xi.length || Si.length) && Rs();
    }
    function Rs() {
      Ps || (Ps = !0, queueMicrotask(hr));
    }
    function dr(t) {
      let e;
      for (; e = t.shift(); )
        try {
          e();
        } catch (n) {
          console.error(n);
        }
    }
    function fr(t, e) {
      const n = t.indexOf(e);
      return ~n && t.splice(n, 1);
    }
    class pr {
      init() {
        this.positions = [];
        let e;
        this.unbind = H(document, "mousemove", (n) => e = ge(n)), this.interval = setInterval(() => {
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
        const n = N(e), { left: o, right: l, top: c, bottom: d } = n, [p] = this.positions, m = Re(this.positions), w = [p, m];
        return ci(m, n) ? !1 : [
          [
            { x: o, y: c },
            { x: l, y: d }
          ],
          [
            { x: o, y: d },
            { x: l, y: c }
          ]
        ].some((E) => {
          const R = hu(w, E);
          return R && ci(R, n);
        });
      }
    }
    function hu([{ x: t, y: e }, { x: n, y: o }], [{ x: l, y: c }, { x: d, y: p }]) {
      const m = (p - c) * (n - t) - (d - l) * (o - e);
      if (m === 0)
        return !1;
      const w = ((d - l) * (e - c) - (p - c) * (t - l)) / m;
      return w < 0 ? !1 : { x: t + w * (n - t), y: e + w * (o - e) };
    }
    function mr(t, e, n = {}, { intersecting: o = !0 } = {}) {
      const l = new IntersectionObserver(
        o ? (c, d) => {
          c.some((p) => p.isIntersecting) && e(c, d);
        } : e,
        n
      );
      for (const c of Z(t))
        l.observe(c);
      return l;
    }
    const du = Ne && window.ResizeObserver;
    function Dn(t, e, n = { box: "border-box" }) {
      if (du)
        return gr(ResizeObserver, t, e, n);
      const o = [H(window, "load resize", e), H(document, "loadedmetadata load", e, !0)];
      return { disconnect: () => o.map((l) => l()) };
    }
    function Is(t) {
      return { disconnect: H([window, window.visualViewport], "resize", t) };
    }
    function Bs(t, e, n) {
      return gr(MutationObserver, t, e, n);
    }
    function gr(t, e, n, o) {
      const l = new t(n);
      for (const c of Z(e))
        l.observe(c, o);
      return l;
    }
    function Ns(t) {
      Oi(t) && Ds(t, { func: "playVideo", method: "play" }), _i(t) && t.play().catch(it);
    }
    function Ei(t) {
      Oi(t) && Ds(t, { func: "pauseVideo", method: "pause" }), _i(t) && t.pause();
    }
    function vr(t) {
      Oi(t) && Ds(t, { func: "mute", method: "setVolume", value: 0 }), _i(t) && (t.muted = !0);
    }
    function br(t) {
      return _i(t) || Oi(t);
    }
    function _i(t) {
      return gt(t, "video");
    }
    function Oi(t) {
      return gt(t, "iframe") && (wr(t) || yr(t));
    }
    function wr(t) {
      return !!t.src.match(
        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
      );
    }
    function yr(t) {
      return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function Ds(t, e) {
      await pu(t), $r(t, e);
    }
    function $r(t, e) {
      t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
    }
    const Fs = "_ukPlayer";
    let fu = 0;
    function pu(t) {
      if (t[Fs])
        return t[Fs];
      const e = wr(t), n = yr(t), o = ++fu;
      let l;
      return t[Fs] = new Promise((c) => {
        e && mt(t, "load", () => {
          const d = () => $r(t, { event: "listening", id: o });
          l = setInterval(d, 100), d();
        }), mt(window, "message", c, !1, ({ data: d }) => {
          try {
            return d = JSON.parse(d), e && (d == null ? void 0 : d.id) === o && d.event === "onReady" || n && Number(d == null ? void 0 : d.player_id) === o;
          } catch {
          }
        }), t.src = `${t.src}${_(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${o}`}`;
      }).then(() => clearInterval(l));
    }
    function mu(t, e = 0, n = 0) {
      return kt(t) ? li(
        ...je(t).map((o) => {
          const { top: l, left: c, bottom: d, right: p } = Gt(o);
          return {
            top: l - e,
            left: c - n,
            bottom: d + e,
            right: p + n
          };
        }).concat(Q(t))
      ) : !1;
    }
    function kr(t, { offset: e = 0 } = {}) {
      const n = kt(t) ? Me(t, !1, ["hidden"]) : [];
      return n.reduce(
        (d, p, m) => {
          const { scrollTop: w, scrollHeight: $, offsetHeight: E } = p, R = Gt(p), I = $ - R.height, { height: L, top: Y } = n[m - 1] ? Gt(n[m - 1]) : Q(t);
          let et = Math.ceil(Y - R.top - e + w);
          return e > 0 && E < L + e ? et += e : e = 0, et > I ? (e -= et - I, et = I) : et < 0 && (e -= et, et = 0), () => o(p, et - w, t, I).then(d);
        },
        () => Promise.resolve()
      )();
      function o(d, p, m, w) {
        return new Promise(($) => {
          const E = d.scrollTop, R = l(Math.abs(p)), I = Date.now(), L = js(d) === d, Y = Q(m).top + (L ? 0 : E);
          let et = 0, he = 15;
          (function vn() {
            const bn = c(Ft((Date.now() - I) / R));
            let de = 0;
            n[0] === d && E + p < w && (de = Q(m).top + (L ? 0 : d.scrollTop) - Y - N(Ls(m)).height), d.scrollTop = E + (p + de) * bn, bn === 1 && (et === de || !he--) ? $() : (et = de, requestAnimationFrame(vn));
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
    function Ti(t, e = 0, n = 0) {
      if (!kt(t))
        return 0;
      const o = _e(t, !0), { scrollHeight: l, scrollTop: c } = o, { height: d } = Gt(o), p = l - d, m = Bn(t)[0] - Bn(o)[0], w = Math.max(0, m - d + e), $ = Math.min(p, m + t.offsetHeight - n);
      return w < $ ? Ft((c - w) / ($ - w)) : 1;
    }
    function Me(t, e = !1, n = []) {
      const o = js(t);
      let l = Cn(t).reverse();
      l = l.slice(l.indexOf(o) + 1);
      const c = P(l, (d) => y(d, "position") === "fixed");
      return ~c && (l = l.slice(c)), [o].concat(
        l.filter(
          (d) => y(d, "overflow").split(" ").some((p) => _(["auto", "scroll", ...n], p)) && (!e || d.scrollHeight > Gt(d).height)
        )
      ).reverse();
    }
    function _e(...t) {
      return Me(...t)[0];
    }
    function je(t) {
      return Me(t, !1, ["hidden", "clip"]);
    }
    function Gt(t) {
      const e = Pe(t), n = js(t), o = !wt(t) || t.contains(n);
      if (o && e.visualViewport) {
        let { height: m, width: w, scale: $, pageTop: E, pageLeft: R } = e.visualViewport;
        return m = Math.round(m * $), w = Math.round(w * $), { height: m, width: w, top: E, left: R, bottom: E + m, right: R + w };
      }
      let l = Q(o ? e : t);
      if (y(t, "display") === "inline")
        return l;
      const { body: c, documentElement: d } = e.document, p = o ? n === d || // In quirks mode the scrolling element is body, even though the viewport is html
      n.clientHeight < c.clientHeight ? n : c : t;
      for (let [m, w, $, E] of [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
      ]) {
        const R = l[m] % 1;
        l[$] += K(y(p, `border-${$}-width`)), l[m] = l[w] = p[`client${v(m)}`] - (R ? R < 0.5 ? -R : 1 - R : 0), l[E] = l[m] + l[$];
      }
      return l;
    }
    function Ls(t) {
      const { left: e, width: n, top: o } = N(t);
      for (const l of o ? [0, o] : [0]) {
        let c;
        for (const d of Pe(t).document.elementsFromPoint(e + n / 2, l))
          !d.contains(t) && // If e.g. Offcanvas is not yet closed
          !z(d, "uk-togglable-leave") && (Ms(d, "fixed") && xr(
            Cn(t).reverse().find(
              (p) => !p.contains(d) && !Ms(p, "static")
            )
          ) < xr(d) || Ms(d, "sticky") && ot(d).contains(t)) && (!c || N(c).height < N(d).height) && (c = d);
        if (c)
          return c;
      }
    }
    function xr(t) {
      return K(y(t, "zIndex"));
    }
    function Ms(t, e) {
      return y(t, "position") === e;
    }
    function js(t) {
      return Pe(t).document.scrollingElement;
    }
    const Xt = [
      ["width", "x", "left", "right"],
      ["height", "y", "top", "bottom"]
    ];
    function Sr(t, e, n) {
      n = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...n.attach
        },
        offset: [0, 0],
        placement: [],
        ...n
      }, T(e) || (e = [e, e]), Q(t, Er(t, e, n));
    }
    function Er(t, e, n) {
      const o = _r(t, e, n), { boundary: l, viewportOffset: c = 0, placement: d } = n;
      let p = o;
      for (const [m, [w, , $, E]] of Object.entries(Xt)) {
        const R = gu(t, e[m], c, l, m);
        if (Ci(o, R, m))
          continue;
        let I = 0;
        if (d[m] === "flip") {
          const L = n.attach.target[m];
          if (L === E && o[E] <= R[E] || L === $ && o[$] >= R[$])
            continue;
          I = bu(t, e, n, m)[$] - o[$];
          const Y = vu(t, e[m], c, m);
          if (!Ci(Us(o, I, m), Y, m)) {
            if (Ci(o, Y, m))
              continue;
            if (n.recursion)
              return !1;
            const et = wu(t, e, n);
            if (et && Ci(et, Y, 1 - m))
              return et;
            continue;
          }
        } else if (d[m] === "shift") {
          const L = Q(e[m]), { offset: Y } = n;
          I = Ft(
            Ft(o[$], R[$], R[E] - o[w]),
            L[$] - o[w] + Y[m],
            L[E] - Y[m]
          ) - o[$];
        }
        p = Us(p, I, m);
      }
      return p;
    }
    function _r(t, e, n) {
      let { attach: o, offset: l } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...n.attach
        },
        offset: [0, 0],
        ...n
      }, c = Q(t);
      for (const [d, [p, , m, w]] of Object.entries(Xt)) {
        const $ = o.target[d] === o.element[d] ? Gt(e[d]) : Q(e[d]);
        c = Us(
          c,
          $[m] - c[m] + Or(o.target[d], w, $[p]) - Or(o.element[d], w, c[p]) + +l[d],
          d
        );
      }
      return c;
    }
    function Us(t, e, n) {
      const [, o, l, c] = Xt[n], d = { ...t };
      return d[l] = t[o] = t[l] + e, d[c] += e, d;
    }
    function Or(t, e, n) {
      return t === "center" ? n / 2 : t === e ? n : 0;
    }
    function gu(t, e, n, o, l) {
      let c = Cr(...Tr(t, e).map(Gt));
      return n && (c[Xt[l][2]] += n, c[Xt[l][3]] -= n), o && (c = Cr(
        c,
        Q(T(o) ? o[l] : o)
      )), c;
    }
    function vu(t, e, n, o) {
      const [l, c, d, p] = Xt[o], [m] = Tr(t, e), w = Gt(m);
      return ["auto", "scroll"].includes(y(m, `overflow-${c}`)) && (w[d] -= m[`scroll${v(d)}`], w[p] = w[d] + m[`scroll${v(l)}`]), w[d] += n, w[p] -= n, w;
    }
    function Tr(t, e) {
      return je(e).filter((n) => n.contains(t));
    }
    function Cr(...t) {
      let e = {};
      for (const n of t)
        for (const [, , o, l] of Xt)
          e[o] = Math.max(e[o] || 0, n[o]), e[l] = Math.min(...[e[l], n[l]].filter(Boolean));
      return e;
    }
    function Ci(t, e, n) {
      const [, , o, l] = Xt[n];
      return t[o] >= e[o] && t[l] <= e[l];
    }
    function bu(t, e, { offset: n, attach: o }, l) {
      return _r(t, e, {
        attach: {
          element: Ar(o.element, l),
          target: Ar(o.target, l)
        },
        offset: yu(n, l)
      });
    }
    function wu(t, e, n) {
      return Er(t, e, {
        ...n,
        attach: {
          element: n.attach.element.map(Pr).reverse(),
          target: n.attach.target.map(Pr).reverse()
        },
        offset: n.offset.reverse(),
        placement: n.placement.reverse(),
        recursion: !0
      });
    }
    function Ar(t, e) {
      const n = [...t], o = Xt[e].indexOf(t[e]);
      return ~o && (n[e] = Xt[e][1 - o % 2 + 2]), n;
    }
    function Pr(t) {
      for (let e = 0; e < Xt.length; e++) {
        const n = Xt[e].indexOf(t);
        if (~n)
          return Xt[1 - e][n % 2 + 2];
      }
    }
    function yu(t, e) {
      return t = [...t], t[e] *= -1, t;
    }
    var $u = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $: W,
      $$: ht,
      Animation: ke,
      Dimensions: bs,
      MouseTracker: pr,
      Transition: at,
      addClass: G,
      after: bi,
      append: xt,
      apply: Se,
      assign: M,
      attr: B,
      before: vi,
      boxModelAdjust: ln,
      camelize: k,
      children: rt,
      clamp: Ft,
      createEvent: an,
      css: y,
      data: Rt,
      dimensions: N,
      each: en,
      empty: ar,
      endsWith: A,
      escape: xs,
      fastdom: Ee,
      filter: Tn,
      find: $s,
      findAll: Pn,
      findIndex: P,
      flipPosition: ki,
      fragment: Fe,
      getCoveringElement: Ls,
      getEventPos: ge,
      getIndex: Jt,
      getTargetedElement: ys,
      hasAttr: we,
      hasClass: z,
      hasOwn: u,
      hasTouch: nn,
      height: Ut,
      html: xe,
      hyphenate: f,
      inBrowser: Ne,
      includes: _,
      index: me,
      intersectRect: li,
      isArray: T,
      isBoolean: jt,
      isDocument: Nt,
      isElement: Dt,
      isEmpty: ai,
      isEqual: Sn,
      isFocusable: pi,
      isFunction: U,
      isInView: mu,
      isInput: fi,
      isNode: wt,
      isNumber: xn,
      isNumeric: ue,
      isObject: j,
      isPlainObject: X,
      isRtl: Ot,
      isSameSiteAnchor: rn,
      isString: ct,
      isTag: gt,
      isTouch: oe,
      isUndefined: Pt,
      isVideo: br,
      isVisible: kt,
      isVoidElement: ws,
      isWindow: Ct,
      last: Re,
      matches: tt,
      memoize: ee,
      mute: vr,
      noop: it,
      observeIntersection: mr,
      observeMutation: Bs,
      observeResize: Dn,
      observeViewportResize: Is,
      off: $e,
      offset: Q,
      offsetPosition: Bn,
      offsetViewport: Gt,
      on: H,
      once: mt,
      overflowParents: je,
      parent: ot,
      parents: Cn,
      pause: Ei,
      pick: gs,
      play: Ns,
      pointInRect: ci,
      pointerCancel: di,
      pointerDown: ne,
      pointerEnter: De,
      pointerLeave: on,
      pointerMove: hi,
      pointerUp: ye,
      position: As,
      positionAt: Sr,
      prepend: tu,
      propName: mi,
      query: Lt,
      queryAll: An,
      ready: Zc,
      remove: Kt,
      removeAttr: En,
      removeClass: nt,
      replaceClass: ui,
      scrollIntoView: kr,
      scrollParent: _e,
      scrollParents: Me,
      scrolledOver: Ti,
      selFocusable: On,
      selInput: _n,
      sortBy: Yo,
      startsWith: b,
      sumBy: Ie,
      swap: ms,
      toArray: O,
      toBoolean: ps,
      toEventTargets: Es,
      toFloat: K,
      toNode: yt,
      toNodes: Z,
      toNumber: pe,
      toPx: At,
      toWindow: Pe,
      toggleClass: $t,
      trigger: F,
      ucfirst: v,
      uniqueBy: Qo,
      unwrap: In,
      width: $i,
      wrapAll: yi,
      wrapInner: Cs
    }), zt = {
      connected() {
        G(this.$el, this.$options.id);
      }
    };
    const ku = ["days", "hours", "minutes", "seconds"];
    var xu = {
      mixins: [zt],
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
        B(this.$el, "role", this.role), this.date = K(Date.parse(this.$props.date)), this.end = !1, this.start();
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
          this.stop(), this.update(), this.timer || (F(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3));
        },
        stop() {
          this.timer && (clearInterval(this.timer), F(this.$el, "countdownstop"), this.timer = null);
        },
        update() {
          const t = Su(this.date);
          t.total || (this.stop(), this.end || (F(this.$el, "countdownend"), this.end = !0));
          for (const e of ku) {
            const n = W(this.clsWrapper.replace("%unit%", e), this.$el);
            if (!n)
              continue;
            let o = Math.trunc(t[e]).toString().padStart(2, "0");
            n.textContent !== o && (o = o.split(""), o.length !== n.children.length && xe(n, o.map(() => "<span></span>").join("")), o.forEach((l, c) => n.children[c].textContent = l));
          }
        }
      }
    };
    function Su(t) {
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
    Tt.events = Tt.watch = Tt.observe = Tt.created = Tt.beforeConnect = Tt.connected = Tt.beforeDisconnect = Tt.disconnected = Tt.destroy = zs, Tt.args = function(t, e) {
      return e !== !1 && zs(e || t);
    }, Tt.update = function(t, e) {
      return Yo(
        zs(t, U(e) ? { read: e } : e),
        "order"
      );
    }, Tt.props = function(t, e) {
      if (T(e)) {
        const n = {};
        for (const o of e)
          n[o] = String;
        e = n;
      }
      return Tt.methods(t, e);
    }, Tt.computed = Tt.methods = function(t, e) {
      return e ? t ? { ...t, ...e } : e : t;
    }, Tt.i18n = Tt.data = function(t, e, n) {
      return n ? Rr(t, e, n) : e ? t ? function(o) {
        return Rr(t, e, o);
      } : e : t;
    };
    function Rr(t, e, n) {
      return Tt.computed(
        U(t) ? t.call(n, n) : t,
        U(e) ? e.call(n, n) : e
      );
    }
    function zs(t, e) {
      return t = t && !T(t) ? [t] : t, e ? t ? t.concat(e) : T(e) ? e : [e] : t;
    }
    function Eu(t, e) {
      return Pt(e) ? t : e;
    }
    function Fn(t, e, n) {
      const o = {};
      if (U(e) && (e = e.options), e.extends && (t = Fn(t, e.extends, n)), e.mixins)
        for (const c of e.mixins)
          t = Fn(t, c, n);
      for (const c in t)
        l(c);
      for (const c in e)
        u(t, c) || l(c);
      function l(c) {
        o[c] = (Tt[c] || Eu)(t[c], e[c], n);
      }
      return o;
    }
    function un(t, e = []) {
      try {
        return t ? b(t, "{") ? JSON.parse(t) : e.length && !_(t, ":") ? { [e[0]]: t } : t.split(";").reduce((n, o) => {
          const [l, c] = o.split(/:(.*)/);
          return l && !Pt(c) && (n[l.trim()] = c.trim()), n;
        }, {}) : {};
      } catch {
        return {};
      }
    }
    function Hs(t, e) {
      return t === Boolean ? ps(e) : t === Number ? pe(e) : t === "list" ? Ou(e) : t === Object && ct(e) ? un(e) : t ? t(e) : e;
    }
    const _u = /,(?![^(]*\))/;
    function Ou(t) {
      return T(t) ? t : ct(t) ? t.split(_u).map((e) => ue(e) ? pe(e) : ps(e.trim())) : [t];
    }
    function Tu(t) {
      t._data = {}, t._updates = [...t.$options.update || []], t._disconnect.push(() => t._updates = t._data = null);
    }
    function Cu(t, e) {
      t._updates.unshift(e);
    }
    function Ln(t, e = "update") {
      t._connected && t._updates.length && (t._queued || (t._queued = /* @__PURE__ */ new Set(), Ee.read(() => {
        t._connected && Au(t, t._queued), t._queued = null;
      })), t._queued.add(e.type || e));
    }
    function Au(t, e) {
      for (const { read: n, write: o, events: l = [] } of t._updates) {
        if (!e.has("update") && !l.some((d) => e.has(d)))
          continue;
        let c;
        n && (c = n.call(t, t._data, e), c && X(c) && M(t._data, c)), o && c !== !1 && Ee.write(() => {
          t._connected && o.call(t, t._data, e);
        });
      }
    }
    function ie(t) {
      return jn(Dn, t, "resize");
    }
    function hn(t) {
      return jn(mr, t);
    }
    function Ai(t) {
      return jn(Bs, t);
    }
    function Pi(t = {}) {
      return hn({
        handler: function(e, n) {
          const { targets: o = this.$el, preload: l = 5 } = t;
          for (const c of Z(U(o) ? o(this) : o))
            ht('[loading="lazy"]', c).slice(0, l - 1).forEach((d) => En(d, "loading"));
          for (const c of e.filter(({ isIntersecting: d }) => d).map(({ target: d }) => d))
            n.unobserve(c);
        },
        ...t
      });
    }
    function qs(t) {
      return jn((e, n) => Is(n), t, "resize");
    }
    function Mn(t) {
      return jn(
        (e, n) => ({
          disconnect: H(Ru(e), "scroll", n, { passive: !0 })
        }),
        t,
        "scroll"
      );
    }
    function Ir(t) {
      return {
        observe(e, n) {
          return {
            observe: it,
            unobserve: it,
            disconnect: H(e, ne, n, { passive: !0 })
          };
        },
        handler(e) {
          if (!oe(e))
            return;
          const n = ge(e), o = "tagName" in e.target ? e.target : ot(e.target);
          mt(document, `${ye} ${di} scroll`, (l) => {
            const { x: c, y: d } = ge(l);
            (l.type !== "scroll" && o && c && Math.abs(n.x - c) > 100 || d && Math.abs(n.y - d) > 100) && setTimeout(() => {
              F(o, "swipe"), F(o, `swipe${Pu(n.x, n.y, c, d)}`);
            });
          });
        },
        ...t
      };
    }
    function jn(t, e, n) {
      return {
        observe: t,
        handler() {
          Ln(this, n);
        },
        ...e
      };
    }
    function Pu(t, e, n, o) {
      return Math.abs(t - n) >= Math.abs(e - o) ? t - n > 0 ? "Left" : "Right" : e - o > 0 ? "Up" : "Down";
    }
    function Ru(t) {
      return Z(t).map((e) => {
        const { ownerDocument: n } = e, o = _e(e, !0);
        return o === n.scrollingElement ? n : o;
      });
    }
    var Br = {
      props: {
        margin: String,
        firstColumn: Boolean
      },
      data: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column"
      },
      observe: [
        Ai({
          options: {
            childList: !0
          }
        }),
        Ai({
          options: {
            attributes: !0,
            attributeFilter: ["style"]
          },
          target: ({ $el: t }) => [t, ...rt(t)]
        }),
        ie({
          target: ({ $el: t }) => [t, ...rt(t)]
        })
      ],
      update: {
        read() {
          return {
            rows: Ws(rt(this.$el))
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
    function Ws(t) {
      const e = [[]], n = t.some(
        (o, l) => l && t[l - 1].offsetParent !== o.offsetParent
      );
      for (const o of t) {
        if (!kt(o))
          continue;
        const l = Vs(o, n);
        for (let c = e.length - 1; c >= 0; c--) {
          const d = e[c];
          if (!d[0]) {
            d.push(o);
            break;
          }
          const p = Vs(d[0], n);
          if (l.top >= p.bottom - 1 && l.top !== p.top) {
            e.push([o]);
            break;
          }
          if (l.bottom - 1 > p.top || l.top === p.top) {
            let m = d.length - 1;
            for (; m >= 0; m--) {
              const w = Vs(d[m], n);
              if (l.left >= w.left)
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
    function Vs(t, e = !1) {
      let { offsetTop: n, offsetLeft: o, offsetHeight: l, offsetWidth: c } = t;
      return e && ([n, o] = Bn(t)), {
        top: n,
        left: o,
        bottom: n + l,
        right: o + c
      };
    }
    async function Iu(t, e, n) {
      await Js();
      let o = rt(e);
      const l = o.map((I) => Nr(I, !0)), c = { ...y(e, ["height", "padding"]), display: "block" }, d = o.concat(e);
      await Promise.all(d.map(at.cancel)), y(d, "transitionProperty", "none"), await t(), o = o.concat(rt(e).filter((I) => !_(o, I))), await Promise.resolve(), y(d, "transitionProperty", "");
      const p = B(e, "style"), m = y(e, ["height", "padding"]), [w, $] = Bu(e, o, l), E = o.map((I) => ({ style: B(I, "style") }));
      o.forEach((I, L) => $[L] && y(I, $[L])), y(e, c), F(e, "scroll"), await Js();
      const R = o.map((I, L) => ot(I) === e && at.start(I, w[L], n, "ease")).concat(at.start(e, m, n, "ease"));
      try {
        await Promise.all(R), o.forEach((I, L) => {
          B(I, E[L]), ot(I) === e && y(I, "display", w[L].opacity === 0 ? "none" : "");
        }), B(e, "style", p);
      } catch {
        B(o, "style", ""), Nu(e, c);
      }
    }
    function Nr(t, e) {
      const n = y(t, "zIndex");
      return kt(t) ? {
        display: "",
        opacity: e ? y(t, "opacity") : "0",
        pointerEvents: "none",
        position: "absolute",
        zIndex: n === "auto" ? me(t) : n,
        ...Dr(t)
      } : !1;
    }
    function Bu(t, e, n) {
      const o = e.map(
        (c, d) => ot(c) && d in n ? n[d] ? kt(c) ? Dr(c) : { opacity: 0 } : { opacity: kt(c) ? 1 : 0 } : !1
      ), l = o.map((c, d) => {
        const p = ot(e[d]) === t && (n[d] || Nr(e[d]));
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
    function Nu(t, e) {
      for (const n in e)
        y(t, n, "");
    }
    function Dr(t) {
      const { height: e, width: n } = N(t);
      return {
        height: e,
        width: n,
        transform: "",
        ...As(t),
        ...y(t, ["marginTop", "marginLeft"])
      };
    }
    function Js() {
      return new Promise((t) => requestAnimationFrame(t));
    }
    const Ks = "uk-transition-leave", Gs = "uk-transition-enter";
    function Fr(t, e, n, o = 0) {
      const l = Ri(e, !0), c = { opacity: 1 }, d = { opacity: 0 }, p = ($) => () => l === Ri(e) ? $() : Promise.reject(), m = p(async () => {
        G(e, Ks), await Promise.all(
          Mr(e).map(
            ($, E) => new Promise(
              (R) => setTimeout(
                () => at.start($, d, n / 2, "ease").then(
                  R
                ),
                E * o
              )
            )
          )
        ), nt(e, Ks);
      }), w = p(async () => {
        const $ = Ut(e);
        G(e, Gs), t(), y(rt(e), { opacity: 0 }), await Js();
        const E = rt(e), R = Ut(e);
        y(e, "alignContent", "flex-start"), Ut(e, $);
        const I = Mr(e);
        y(E, d);
        const L = I.map(async (Y, et) => {
          await Du(et * o), await at.start(Y, c, n / 2, "ease");
        });
        $ !== R && L.push(
          at.start(
            e,
            { height: R },
            n / 2 + I.length * o,
            "ease"
          )
        ), await Promise.all(L).then(() => {
          nt(e, Gs), l === Ri(e) && (y(e, { height: "", alignContent: "" }), y(E, { opacity: "" }), delete e.dataset.transition);
        });
      });
      return z(e, Ks) ? Lr(e).then(w) : z(e, Gs) ? Lr(e).then(m).then(w) : m().then(w);
    }
    function Ri(t, e) {
      return e && (t.dataset.transition = 1 + Ri(t)), pe(t.dataset.transition) || 0;
    }
    function Lr(t) {
      return Promise.all(
        rt(t).filter(at.inProgress).map(
          (e) => new Promise((n) => mt(e, "transitionend transitioncanceled", n))
        )
      );
    }
    function Mr(t) {
      return Ws(rt(t)).flat().filter(kt);
    }
    function Du(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    var jr = {
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
          return (n === "fade" ? Fr : n === "delayed-fade" ? (...l) => Fr(...l, 40) : n ? Iu : () => (t(), Promise.resolve()))(t, e, this.duration).catch(it);
        }
      }
    };
    const st = {
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
    var Fu = {
      mixins: [jr],
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
        children: ({ target: t }, e) => ht(`${t} > *`, e),
        toggles: ({ attrItem: t }, e) => ht(`[${t}],[data-${t}]`, e)
      },
      watch: {
        toggles(t) {
          this.updateState();
          const e = ht(this.selActive, this.$el);
          for (const n of t) {
            this.selActive !== !1 && $t(n, this.cls, _(e, n));
            const o = zu(n);
            gt(o, "a") && B(o, "role", "button");
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
          t.type === "keydown" && t.keyCode !== st.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current));
        }
      },
      methods: {
        apply(t) {
          const e = this.getState(), n = zr(t, this.attrItem, this.getState());
          Lu(e, n) || this.setState(n);
        },
        getState() {
          return this.toggles.filter((t) => z(t, this.cls)).reduce((t, e) => zr(e, this.attrItem, t), {
            filter: { "": "" },
            sort: []
          });
        },
        async setState(t, e = !0) {
          t = { filter: { "": "" }, sort: [], ...t }, F(this.$el, "beforeFilter", [this, t]);
          for (const n of this.toggles)
            $t(n, this.cls, ju(n, this.attrItem, t));
          await Promise.all(
            ht(this.target, this.$el).map((n) => {
              const o = () => Mu(t, n, rt(n));
              return e ? this.animate(o, n) : o();
            })
          ), F(this.$el, "afterFilter", [this]);
        },
        updateState() {
          Ee.write(() => this.setState(this.getState(), !1));
        }
      }
    };
    function Ur(t, e) {
      return un(Rt(t, e), ["filter"]);
    }
    function Lu(t, e) {
      return ["filter", "sort"].every((n) => Sn(t[n], e[n]));
    }
    function Mu(t, e, n) {
      for (const c of n)
        y(
          c,
          "display",
          Object.values(t.filter).every((d) => !d || tt(c, d)) ? "" : "none"
        );
      const [o, l] = t.sort;
      if (o) {
        const c = Uu(n, o, l);
        Sn(c, n) || xt(e, c);
      }
    }
    function zr(t, e, n) {
      const { filter: o, group: l, sort: c, order: d = "asc" } = Ur(t, e);
      return (o || Pt(c)) && (l ? o ? (delete n.filter[""], n.filter[l] = o) : (delete n.filter[l], (ai(n.filter) || "" in n.filter) && (n.filter = { "": o || "" })) : n.filter = { "": o || "" }), Pt(c) || (n.sort = [c, d]), n;
    }
    function ju(t, e, { filter: n = { "": "" }, sort: [o, l] }) {
      const { filter: c = "", group: d = "", sort: p, order: m = "asc" } = Ur(t, e);
      return Pt(p) ? d in n && c === n[d] || !c && d && !(d in n) && !n[""] : o === p && l === m;
    }
    function Uu(t, e, n) {
      return [...t].sort(
        (o, l) => Rt(o, e).localeCompare(Rt(l, e), void 0, { numeric: !0 }) * (n === "asc" || -1)
      );
    }
    function zu(t) {
      return W("a,button", t) || t;
    }
    let Xs;
    function Hr(t) {
      const e = H(
        t,
        "touchstart",
        (o) => {
          if (o.targetTouches.length !== 1 || tt(o.target, 'input[type="range"'))
            return;
          let l = ge(o).y;
          const c = H(
            t,
            "touchmove",
            (d) => {
              const p = ge(d).y;
              p !== l && (l = p, Me(d.target).some((m) => {
                if (!t.contains(m))
                  return !1;
                let { scrollHeight: w, clientHeight: $ } = m;
                return $ < w;
              }) || d.preventDefault());
            },
            { passive: !1 }
          );
          mt(t, "scroll touchend touchcanel", c, { capture: !0 });
        },
        { passive: !0 }
      );
      if (Xs)
        return e;
      Xs = !0;
      const { scrollingElement: n } = document;
      return y(n, {
        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
        touchAction: "none",
        paddingRight: $i(window) - n.clientWidth || ""
      }), () => {
        Xs = !1, e(), y(n, { overflowY: "", touchAction: "", paddingRight: "" });
      };
    }
    var Un = {
      props: {
        container: Boolean
      },
      data: {
        container: !0
      },
      computed: {
        container({ container: t }) {
          return t === !0 && this.$container || t && W(t);
        }
      }
    }, Ue = {
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
        hasTransition: ({ animation: t }) => ["slide", "reveal"].some((e) => b(t[0], e))
      },
      methods: {
        async toggleElement(t, e, n) {
          try {
            return await Promise.all(
              Z(t).map((o) => {
                const l = jt(e) ? e : !this.isToggled(o);
                if (!F(o, `before${l ? "show" : "hide"}`, [this]))
                  return Promise.reject();
                const c = (U(n) ? n : n === !1 || !this.hasAnimation ? Hu : this.hasTransition ? qu : Wu)(o, l, this), d = l ? this.clsEnter : this.clsLeave;
                G(o, d), F(o, l ? "show" : "hide", [this]);
                const p = () => {
                  nt(o, d), F(o, l ? "shown" : "hidden", [this]);
                };
                return c ? c.then(p, () => (nt(o, d), Promise.reject())) : p();
              })
            ), !0;
          } catch {
            return !1;
          }
        },
        isToggled(t = this.$el) {
          return t = yt(t), z(t, this.clsEnter) ? !0 : z(t, this.clsLeave) ? !1 : this.cls ? z(t, this.cls.split(" ")[0]) : kt(t);
        },
        _toggle(t, e) {
          if (!t)
            return;
          e = !!e;
          let n;
          this.cls ? (n = _(this.cls, " ") || e !== z(t, this.cls), n && $t(t, this.cls, _(this.cls, " ") ? void 0 : e)) : (n = e === t.hidden, n && (t.hidden = !e)), n && F(t, "toggled", [e, this]), ht("[autofocus]", t).some((o) => kt(o) ? o.focus() || !0 : o.blur());
        }
      }
    };
    function Hu(t, e, { _toggle: n }) {
      return ke.cancel(t), at.cancel(t), n(t, e);
    }
    async function qu(t, e, { animation: n, duration: o, velocity: l, transition: c, _toggle: d }) {
      var p;
      const [m = "reveal", w = "top"] = ((p = n[0]) == null ? void 0 : p.split("-")) || [], $ = [
        ["left", "right"],
        ["top", "bottom"]
      ], E = $[_($[0], w) ? 0 : 1], R = E[1] === w, L = ["width", "height"][$.indexOf(E)], Y = `margin-${E[0]}`, et = `margin-${w}`;
      let he = N(t)[L];
      const vn = at.inProgress(t);
      await at.cancel(t), e && d(t, !0);
      const bn = Object.fromEntries(
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
          et
        ].map((cl) => [cl, t.style[cl]])
      ), de = N(t), mo = K(y(t, Y)), rl = K(y(t, et)), Ke = de[L] + rl;
      !vn && !e && (he += rl);
      const [Vi] = Cs(t, "<div>");
      y(Vi, {
        boxSizing: "border-box",
        height: de.height,
        width: de.width,
        ...y(t, [
          "overflow",
          "padding",
          "borderTop",
          "borderRight",
          "borderBottom",
          "borderLeft",
          "borderImage",
          et
        ])
      }), y(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [et]: 0,
        width: de.width,
        height: de.height,
        overflow: "hidden",
        [L]: he
      });
      const al = he / Ke;
      o = (l * Ke + o) * (e ? 1 - al : al);
      const ll = { [L]: e ? Ke : 0 };
      R && (y(t, Y, Ke - he + mo), ll[Y] = e ? mo : Ke + mo), !R ^ m === "reveal" && (y(Vi, Y, -Ke + he), at.start(Vi, { [Y]: e ? 0 : -Ke }, o, c));
      try {
        await at.start(t, ll, o, c);
      } finally {
        y(t, bn), In(Vi.firstChild), e || d(t, !1);
      }
    }
    function Wu(t, e, n) {
      const { animation: o, duration: l, _toggle: c } = n;
      return e ? (c(t, !0), ke.in(t, o[0], l, n.origin)) : ke.out(t, o[1] || o[0], l, n.origin).then(
        () => c(t, !1)
      );
    }
    const Ht = [];
    var Ys = {
      mixins: [zt, Un, Ue],
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
        panel: ({ selPanel: t }, e) => W(t, e),
        transitionElement() {
          return this.panel;
        },
        bgClose({ bgClose: t }) {
          return t && this.panel;
        }
      },
      connected() {
        B(this.panel || this.$el, "role", this.role), this.overlay && B(this.panel || this.$el, "aria-modal", !0);
      },
      beforeDisconnect() {
        _(Ht, this) && this.toggleElement(this.$el, !1, !1);
      },
      events: [
        {
          name: "click",
          delegate: ({ selClose: t }) => `${t},a[href*="#"]`,
          handler(t) {
            const { current: e, defaultPrevented: n } = t, { hash: o } = e;
            !n && o && rn(e) && !this.$el.contains(W(o)) ? this.hide() : tt(e, this.selClose) && (t.preventDefault(), this.hide());
          }
        },
        {
          name: "toggle",
          self: !0,
          handler(t) {
            t.defaultPrevented || (t.preventDefault(), this.isToggled() === _(Ht, this) && this.toggle());
          }
        },
        {
          name: "beforeshow",
          self: !0,
          handler(t) {
            if (_(Ht, this))
              return !1;
            !this.stack && Ht.length ? (Promise.all(Ht.map((e) => e.hide())).then(this.show), t.preventDefault()) : Ht.push(this);
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            this.stack && y(this.$el, "zIndex", K(y(this.$el, "zIndex")) + Ht.length);
            const t = [
              this.overlay && Ju(this),
              this.overlay && Hr(this.$el),
              this.bgClose && Ku(this),
              this.escClose && Gu(this)
            ];
            mt(
              this.$el,
              "hidden",
              () => t.forEach((e) => e && e()),
              { self: !0 }
            ), G(document.documentElement, this.clsPage);
          }
        },
        {
          name: "shown",
          self: !0,
          handler() {
            pi(this.$el) || B(this.$el, "tabindex", "-1"), tt(this.$el, ":focus-within") || this.$el.focus();
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            _(Ht, this) && Ht.splice(Ht.indexOf(this), 1), y(this.$el, "zIndex", ""), Ht.some((t) => t.clsPage === this.clsPage) || nt(document.documentElement, this.clsPage);
          }
        }
      ],
      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },
        show() {
          return this.container && ot(this.$el) !== this.container ? (xt(this.container, this.$el), new Promise(
            (t) => requestAnimationFrame(() => this.show().then(t))
          )) : this.toggleElement(this.$el, !0, qr);
        },
        hide() {
          return this.toggleElement(this.$el, !1, qr);
        }
      }
    };
    function qr(t, e, { transitionElement: n, _toggle: o }) {
      return new Promise(
        (l, c) => mt(t, "show hide", () => {
          var d;
          (d = t._reject) == null || d.call(t), t._reject = c, o(t, e);
          const p = mt(
            n,
            "transitionstart",
            () => {
              mt(n, "transitionend transitioncancel", l, {
                self: !0
              }), clearTimeout(m);
            },
            { self: !0 }
          ), m = setTimeout(
            () => {
              p(), l();
            },
            Vu(y(n, "transitionDuration"))
          );
        })
      ).then(() => delete t._reject);
    }
    function Vu(t) {
      return t ? A(t, "ms") ? K(t) : K(t) * 1e3 : 0;
    }
    function Ju(t) {
      return H(document, "focusin", (e) => {
        Re(Ht) === t && !t.$el.contains(e.target) && t.$el.focus();
      });
    }
    function Ku(t) {
      return H(document, ne, ({ target: e }) => {
        Re(Ht) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || mt(
          document,
          `${ye} ${di} scroll`,
          ({ defaultPrevented: n, type: o, target: l }) => {
            !n && o === ye && e === l && t.hide();
          },
          !0
        );
      });
    }
    function Gu(t) {
      return H(document, "keydown", (e) => {
        e.keyCode === 27 && Re(Ht) === t && t.hide();
      });
    }
    var Qs = {
      slide: {
        show(t) {
          return [{ transform: bt(t * -100) }, { transform: bt() }];
        },
        percent(t) {
          return zn(t);
        },
        translate(t, e) {
          return [
            { transform: bt(e * -100 * t) },
            { transform: bt(e * 100 * (1 - t)) }
          ];
        }
      }
    };
    function zn(t) {
      return Math.abs(new DOMMatrix(y(t, "transform")).m41 / t.offsetWidth);
    }
    function bt(t = 0, e = "%") {
      return t += t ? e : "", `translate3d(${t}, 0, 0)`;
    }
    function dn(t) {
      return `scale3d(${t}, ${t}, 1)`;
    }
    function Xu(t, e, n, { animation: o, easing: l }) {
      const { percent: c, translate: d, show: p = it } = o, m = p(n), { promise: w, resolve: $ } = Wr();
      return {
        dir: n,
        show(E, R = 0, I) {
          const L = I ? "linear" : l;
          return E -= Math.round(E * Ft(R, -1, 1)), this.translate(R), ze(e, "itemin", { percent: R, duration: E, timing: L, dir: n }), ze(t, "itemout", { percent: 1 - R, duration: E, timing: L, dir: n }), Promise.all([
            at.start(e, m[1], E, L),
            at.start(t, m[0], E, L)
          ]).then(() => {
            this.reset(), $();
          }, it), w;
        },
        cancel() {
          return at.cancel([e, t]);
        },
        reset() {
          for (const E in m[0])
            y([e, t], E, "");
        },
        async forward(E, R = this.percent()) {
          return await this.cancel(), this.show(E, R, !0);
        },
        translate(E) {
          this.reset();
          const R = d(E, n);
          y(e, R[1]), y(t, R[0]), ze(e, "itemtranslatein", { percent: E, dir: n }), ze(t, "itemtranslateout", { percent: 1 - E, dir: n });
        },
        percent() {
          return c(t || e, e, n);
        },
        getDistance() {
          return t == null ? void 0 : t.offsetWidth;
        }
      };
    }
    function ze(t, e, n) {
      F(t, an(e, !1, !1, n));
    }
    function Wr() {
      let t;
      return { promise: new Promise((e) => t = e), resolve: t };
    }
    var Ii = {
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
    }, Yu = {
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
        B(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
      },
      disconnected() {
        this.stopAutoplay();
      },
      update() {
        B(this.slides, "tabindex", "-1");
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
            this.stack.length || this.draggable && tt(this.$el, ":focus-within") && !tt(this.$el, ":focus") || this.pauseOnHover && tt(this.$el, ":hover") || this.show("next");
          }, this.autoplayInterval);
        },
        stopAutoplay() {
          clearInterval(this.interval);
        }
      }
    };
    const Hn = { passive: !1, capture: !0 }, Vr = { passive: !0, capture: !0 }, Qu = "touchstart mousedown", Zs = "touchmove mousemove", Jr = "touchend touchcancel mouseup click input scroll", Kr = (t) => t.preventDefault();
    var Zu = {
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
            const o = ge(n).x * (Ot ? -1 : 1);
            this.prevPos = o === this.pos ? this.prevPos : this.pos, this.pos = o, e(n);
          };
        }
      },
      events: [
        {
          name: Qu,
          passive: !0,
          delegate: ({ selList: t }) => `${t} > *`,
          handler(t) {
            !this.draggable || this.parallax || !oe(t) && th(t.target) || t.target.closest(_n) || t.button > 0 || this.length < 2 || this.start(t);
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
          name: Zs,
          el: ({ list: t }) => t,
          handler: it,
          ...Hn
        }
      ],
      methods: {
        start() {
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, H(document, Zs, this.move, Hn), H(document, Jr, this.end, Vr), y(this.list, "userSelect", "none");
        },
        move(t) {
          const e = this.pos - this.drag;
          if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
            return;
          this.dragging || H(this.list, "click", Kr, Hn), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
          let { slides: n, prevIndex: o } = this, l = Math.abs(e), c = this.getIndex(o + this.dir), d = Gr.call(this, o, c);
          for (; c !== o && l > d; )
            this.drag -= d * this.dir, o = c, l -= d, c = this.getIndex(o + this.dir), d = Gr.call(this, o, c);
          this.percent = l / d;
          const p = n[o], m = n[c], w = this.index !== c, $ = o === c;
          let E;
          for (const R of [this.index, this.prevIndex])
            _([c, o], R) || (F(n[R], "itemhidden", [this]), $ && (E = !0, this.prevIndex = o));
          (this.index === o && this.prevIndex !== o || E) && F(n[this.index], "itemshown", [this]), w && (this.prevIndex = o, this.index = c, $ || (F(p, "beforeitemhide", [this]), F(p, "itemhide", [this])), F(m, "beforeitemshow", [this]), F(m, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), p, !$ && m);
        },
        end() {
          if ($e(document, Zs, this.move, Hn), $e(document, Jr, this.end, Vr), this.dragging)
            if (this.dragging = null, this.index === this.prevIndex)
              this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
            else {
              const t = (Ot ? this.dir * (Ot ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
              this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(
                this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous",
                !0
              );
            }
          setTimeout(() => $e(this.list, "click", Kr, Hn)), y(this.list, { userSelect: "" }), this.drag = this.percent = null;
        }
      }
    };
    function Gr(t, e) {
      return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
    }
    function th(t) {
      return y(t, "userSelect") !== "none" && O(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
    }
    function eh(t) {
      t._watches = [];
      for (const e of t.$options.watch || [])
        for (const [n, o] of Object.entries(e))
          Xr(t, o, n);
      t._initial = !0;
    }
    function Xr(t, e, n) {
      t._watches.push({
        name: n,
        ...X(e) ? e : { handler: e }
      });
    }
    function nh(t, e) {
      for (const { name: n, handler: o, immediate: l = !0 } of t._watches)
        (t._initial && l || u(e, n) && !Sn(e[n], t[n])) && o.call(t, t[n], e[n]);
      t._initial = !1;
    }
    function ih(t) {
      const { computed: e } = t.$options;
      if (t._computed = {}, e)
        for (const n in e)
          Qr(t, n, e[n]);
    }
    const Yr = { subtree: !0, childList: !0 };
    function Qr(t, e, n) {
      t._hasComputed = !0, Object.defineProperty(t, e, {
        enumerable: !0,
        get() {
          const { _computed: o, $props: l, $el: c } = t;
          if (!u(o, e) && (o[e] = (n.get || n).call(t, l, c), n.observe && t._computedObserver)) {
            const d = n.observe.call(t, l);
            t._computedObserver.observe(
              ["~", "+", "-"].includes(d[0]) ? c.parentElement : c.getRootNode(),
              Yr
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
    function sh(t) {
      t._hasComputed && (Cu(t, {
        read: () => nh(t, Zr(t)),
        events: ["resize", "computed"]
      }), t._computedObserver = Bs(
        t.$el,
        () => Ln(t, "computed"),
        Yr
      ), t._disconnect.push(() => {
        t._computedObserver.disconnect(), t._computedObserver = null, Zr(t);
      }));
    }
    function Zr(t) {
      const e = { ...t._computed };
      return t._computed = {}, e;
    }
    function oh(t) {
      for (const e of t.$options.events || [])
        if (u(e, "handler"))
          ta(t, e);
        else
          for (const n in e)
            ta(t, e[n], n);
    }
    function ta(t, e, n) {
      let { name: o, el: l, handler: c, capture: d, passive: p, delegate: m, filter: w, self: $ } = X(e) ? e : { name: n, handler: e };
      l = U(l) ? l.call(t, t) : l || t.$el, !(!l || T(l) && !l.length || w && !w.call(t, t)) && t._disconnect.push(
        H(
          l,
          o,
          m ? ct(m) ? m : m.call(t, t) : null,
          ct(c) ? t[c] : c.bind(t),
          { passive: p, capture: d, self: $ }
        )
      );
    }
    function rh(t) {
      for (const e of t.$options.observe || [])
        ah(t, e);
    }
    function ah(t, e) {
      let { observe: n, target: o = t.$el, handler: l, options: c, filter: d, args: p } = e;
      if (d && !d.call(t, t))
        return;
      const m = `_observe${t._disconnect.length}`;
      U(o) && !u(t, m) && Qr(t, m, () => {
        const E = o.call(t, t);
        return T(E) ? Z(E) : E;
      }), l = ct(l) ? t[l] : l.bind(t), U(c) && (c = c.call(t, t));
      const w = u(t, m) ? t[m] : o, $ = n(w, l, c, p);
      U(o) && T(t[m]) && Xr(
        t,
        { handler: lh($, c), immediate: !1 },
        m
      ), t._disconnect.push(() => $.disconnect());
    }
    function lh(t, e) {
      return (n, o) => {
        for (const l of o)
          _(n, l) || (t.unobserve ? t.unobserve(l) : t.observe && t.disconnect());
        for (const l of n)
          (!_(o, l) || !t.unobserve) && t.observe(l, e);
      };
    }
    function ch(t) {
      const { $options: e, $props: n } = t, o = ea(e);
      M(n, o);
      const { computed: l, methods: c } = e;
      for (let d in n)
        d in o && (!l || !u(l, d)) && (!c || !u(c, d)) && (t[d] = n[d]);
    }
    function ea(t) {
      const e = {}, { args: n = [], props: o = {}, el: l, id: c } = t;
      if (!o)
        return e;
      for (const p in o) {
        const m = f(p);
        let w = Rt(l, m);
        Pt(w) || (w = o[p] === Boolean && w === "" ? !0 : Hs(o[p], w), !(m === "target" && b(w, "_")) && (e[p] = w));
      }
      const d = un(Rt(l, c), n);
      for (const p in d) {
        const m = k(p);
        Pt(o[m]) || (e[m] = Hs(o[m], d[p]));
      }
      return e;
    }
    const uh = ee((t, e) => {
      const n = Object.keys(e), o = n.concat(t).map((l) => [f(l), `data-${f(l)}`]).flat();
      return { attributes: n, filter: o };
    });
    function hh(t) {
      const { $options: e, $props: n } = t, { id: o, props: l, el: c } = e;
      if (!l)
        return;
      const { attributes: d, filter: p } = uh(o, l), m = new MutationObserver((w) => {
        const $ = ea(e);
        w.some(({ attributeName: E }) => {
          const R = E.replace("data-", "");
          return (R === o ? d : [k(R), k(E)]).some(
            (I) => !Pt($[I]) && $[I] !== n[I]
          );
        }) && t.$reset();
      });
      m.observe(c, {
        attributes: !0,
        attributeFilter: p
      }), t._disconnect.push(() => m.disconnect());
    }
    function fn(t, e) {
      var n;
      (n = t.$options[e]) == null || n.forEach((o) => o.call(t));
    }
    function to(t) {
      t._connected || (ch(t), fn(t, "beforeConnect"), t._connected = !0, t._disconnect = [], oh(t), Tu(t), eh(t), rh(t), hh(t), sh(t), fn(t, "connected"), Ln(t));
    }
    function eo(t) {
      t._connected && (fn(t, "beforeDisconnect"), t._disconnect.forEach((e) => e()), t._disconnect = null, fn(t, "disconnected"), t._connected = !1);
    }
    let dh = 0;
    function na(t, e = {}) {
      e.data = mh(e, t.constructor.options), t.$options = Fn(t.constructor.options, e, t), t.$props = {}, t._uid = dh++, fh(t), ph(t), ih(t), fn(t, "created"), e.el && t.$mount(e.el);
    }
    function fh(t) {
      const { data: e = {} } = t.$options;
      for (const n in e)
        t.$props[n] = t[n] = e[n];
    }
    function ph(t) {
      const { methods: e } = t.$options;
      if (e)
        for (const n in e)
          t[n] = e[n].bind(t);
    }
    function mh({ data: t = {} }, { args: e = [], props: n = {} }) {
      T(t) && (t = t.slice(0, e.length).reduce((o, l, c) => (X(l) ? M(o, l) : o[e[c]] = l, o), {}));
      for (const o in t)
        Pt(t[o]) ? delete t[o] : n[o] && (t[o] = Hs(n[o], t[o]));
      return t;
    }
    const Yt = function(t) {
      na(this, t);
    };
    Yt.util = $u, Yt.options = {}, Yt.version = "3.21.12";
    const gh = "uk-", He = "__uikit__", pn = {};
    function ia(t, e) {
      var n, o;
      const l = gh + f(t);
      if (!e)
        return pn[l].options || (pn[l] = Yt.extend(pn[l])), pn[l];
      t = k(t), Yt[t] = (d, p) => qn(t, d, p);
      const c = (n = e.options) != null ? n : { ...e };
      return c.id = l, c.name = t, (o = c.install) == null || o.call(c, Yt, c, t), Yt._initialized && !c.functional && requestAnimationFrame(() => qn(t, `[${l}],[data-${l}]`)), pn[l] = c;
    }
    function qn(t, e, n, ...o) {
      const l = ia(t);
      return l.options.functional ? new l({ data: X(e) ? e : [e, n, ...o] }) : e ? ht(e).map(c)[0] : c();
      function c(d) {
        const p = Bi(d, t);
        if (p)
          if (n)
            p.$destroy();
          else
            return p;
        return new l({ el: d, data: n });
      }
    }
    function Wn(t) {
      return (t == null ? void 0 : t[He]) || {};
    }
    function Bi(t, e) {
      return Wn(t)[e];
    }
    function vh(t, e) {
      t[He] || (t[He] = {}), t[He][e.$options.name] = e;
    }
    function bh(t, e) {
      var n;
      (n = t[He]) == null || delete n[e.$options.name], ai(t[He]) && delete t[He];
    }
    function wh(t) {
      t.component = ia, t.getComponents = Wn, t.getComponent = Bi, t.update = sa, t.use = function(n) {
        if (!n.installed)
          return n.call(null, this), n.installed = !0, this;
      }, t.mixin = function(n, o) {
        o = (ct(o) ? this.component(o) : o) || this, o.options = Fn(o.options, n);
      }, t.extend = function(n) {
        n || (n = {});
        const o = this, l = function(d) {
          na(this, d);
        };
        return l.prototype = Object.create(o.prototype), l.prototype.constructor = l, l.options = Fn(o.options, n), l.super = o, l.extend = o.extend, l;
      };
      let e;
      Object.defineProperty(t, "container", {
        get() {
          return e || document.body;
        },
        set(n) {
          e = W(n);
        }
      });
    }
    function sa(t, e) {
      t = t ? yt(t) : document.body;
      for (const n of Cn(t).reverse())
        oa(n, e);
      Se(t, (n) => oa(n, e));
    }
    function oa(t, e) {
      const n = Wn(t);
      for (const o in n)
        Ln(n[o], e);
    }
    function yh(t) {
      t.prototype.$mount = function(e) {
        const n = this;
        vh(e, n), n.$options.el = e, document.contains(e) && to(n);
      }, t.prototype.$destroy = function(e = !1) {
        const n = this, { el: o } = n.$options;
        o && eo(n), fn(n, "destroy"), bh(o, n), e && Kt(n.$el);
      }, t.prototype.$create = qn, t.prototype.$emit = function(e) {
        Ln(this, e);
      }, t.prototype.$update = function(e = this.$el, n) {
        sa(e, n);
      }, t.prototype.$reset = function() {
        eo(this), to(this);
      }, t.prototype.$getComponent = Bi, Object.defineProperties(t.prototype, {
        $el: {
          get() {
            return this.$options.el;
          }
        },
        $container: Object.getOwnPropertyDescriptor(t, "container")
      });
    }
    let $h = 1;
    function qe(t, e = null) {
      return (e == null ? void 0 : e.id) || `${t.$options.id}-${$h++}`;
    }
    var kh = {
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
        nav: ({ selNav: t }, e) => W(t, e),
        navChildren() {
          return rt(this.nav);
        },
        selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`,
        navItems(t, e) {
          return ht(this.selNavItem, e);
        }
      },
      watch: {
        nav(t, e) {
          B(t, "role", "tablist"), this.padNavitems(), e && this.$emit();
        },
        list(t) {
          gt(t, "ul") && B(t, "role", "presentation");
        },
        navChildren(t) {
          B(t, "role", "presentation"), this.padNavitems(), this.updateNav();
        },
        navItems(t) {
          for (const e of t) {
            const n = Rt(e, this.attrItem), o = W("a,button", e) || e;
            let l, c = null;
            if (ue(n)) {
              const d = pe(n), p = this.slides[d];
              p && (p.id || (p.id = qe(this, p)), c = p.id), l = this.t("slideX", K(n) + 1), B(o, "role", "tab");
            } else
              this.list && (this.list.id || (this.list.id = qe(this, this.list)), c = this.list.id), l = this.t(n);
            B(o, {
              "aria-controls": c,
              "aria-label": B(o, "aria-label") || l
            });
          }
        },
        slides(t) {
          t.forEach(
            (e, n) => B(e, {
              role: this.nav ? "tabpanel" : "group",
              "aria-label": this.t("slideLabel", n + 1, this.length),
              "aria-roledescription": this.nav ? null : "slide"
            })
          ), this.padNavitems();
        }
      },
      connected() {
        B(this.$el, {
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
            t.target.closest("a,button") && (t.type === "click" || t.keyCode === st.SPACE) && (t.preventDefault(), this.show(Rt(t.current, this.attrItem)));
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
            if (!ue(o))
              return;
            let l = n === st.HOME ? 0 : n === st.END ? "last" : n === st.LEFT ? "previous" : n === st.RIGHT ? "next" : -1;
            ~l && (t.preventDefault(), this.show(l));
          }
        }
      ],
      methods: {
        updateNav() {
          const t = this.getValidIndex();
          for (const e of this.navItems) {
            const n = Rt(e, this.attrItem), o = W("a,button", e) || e;
            if (ue(n)) {
              const c = pe(n) === t;
              $t(e, this.clsActive, c), $t(o, "uk-disabled", this.parallax), B(o, {
                "aria-selected": c,
                tabindex: c && !this.parallax ? null : -1
              }), c && o && tt(ot(e), ":focus-within") && o.focus();
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
            t[e] = this.navChildren.findLast((o) => o.matches(`[${n}]`)) || W(`<li ${n}><a href></a></li>`);
          }
          Sn(t, this.navChildren) || xe(this.nav, t);
        }
      }
    };
    const xh = "cubic-bezier(0.25, 0.46, 0.45, 0.94)", Sh = "cubic-bezier(0.165, 0.84, 0.44, 1)";
    var ra = {
      mixins: [Yu, Zu, kh, Ii],
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
        nt(this.slides, this.clsActive);
      },
      computed: {
        duration: ({ velocity: t }, e) => aa(e.offsetWidth / t),
        list: ({ selList: t }, e) => W(t, e),
        maxIndex() {
          return this.length - 1;
        },
        slides() {
          return rt(this.list);
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
          G(t, this.clsEnter, this.clsSlideActive);
        },
        itemshown({ target: t }) {
          nt(t, this.clsEnter);
        },
        itemhide({ target: t }) {
          G(t, this.clsLeave);
        },
        itemhidden({ target: t }) {
          nt(t, this.clsLeave, this.clsSlideActive);
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
          const d = this.getIndex(this.index), p = z(this.slides, this.clsActive) && this.slides[d], m = this.getIndex(t, this.index), w = this.slides[m];
          if (p === w) {
            c();
            return;
          }
          if (this.dir = Eh(t, d), this.prevIndex = d, this.index = m, p && !F(p, "beforeitemhide", [this]) || !F(w, "beforeitemshow", [this, p])) {
            this.index = this.prevIndex, c();
            return;
          }
          const $ = this._show(p, w, e).then(() => {
            p && F(p, "itemhidden", [this]), F(w, "itemshown", [this]), o.shift(), this._transitioner = null, o.length && requestAnimationFrame(() => o.length && this.show(o.shift(), !0));
          });
          return p && F(p, "itemhide", [this]), F(w, "itemshow", [this]), $;
        },
        getIndex(t = this.index, e = this.index) {
          return Ft(
            Jt(t, this.slides, e, this.finite),
            0,
            Math.max(0, this.maxIndex)
          );
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          return this.getIndex(t, e);
        },
        async _show(t, e, n) {
          if (this._transitioner = this._getTransitioner(t, e, this.dir, {
            easing: n ? e.offsetWidth < 600 ? xh : Sh : this.easing,
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
            xn(t) ? this.slides[t] : t,
            xn(e) ? this.slides[e] : e,
            n * (Ot ? -1 : 1),
            o
          );
        }
      }
    };
    function Eh(t, e) {
      return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
    }
    function aa(t) {
      return 0.5 * t + 300;
    }
    var la = {
      mixins: [ra],
      props: {
        animation: String
      },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: Qs,
        Transitioner: Xu
      },
      computed: {
        animation({ animation: t, Animations: e }) {
          return { ...e[t] || e.slide, name: t };
        },
        transitionOptions() {
          return { animation: this.animation };
        }
      },
      observe: ie(),
      events: {
        beforeitemshow({ target: t }) {
          G(t, this.clsActive);
        },
        itemshown({ target: t }) {
          G(t, this.clsActivated);
        },
        itemhidden({ target: t }) {
          nt(t, this.clsActive, this.clsActivated);
        }
      }
    }, ca = {
      ...Qs,
      fade: {
        show() {
          return [{ opacity: 0 }, { opacity: 1 }];
        },
        percent(t) {
          return 1 - y(t, "opacity");
        },
        translate(t) {
          return [{ opacity: 1 - t }, { opacity: t }];
        }
      },
      scale: {
        show() {
          return [
            { opacity: 0, transform: dn(1 - 0.2) },
            { opacity: 1, transform: dn(1) }
          ];
        },
        percent(t) {
          return 1 - y(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: dn(1 - 0.2 * t) },
            { opacity: t, transform: dn(1 - 0.2 + 0.2 * t) }
          ];
        }
      }
    }, ua = {
      mixins: [Ys, la],
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
        Animations: ca,
        template: '<div class="uk-lightbox uk-overflow-hidden"> <div class="uk-lightbox-items"></div> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
      }),
      created() {
        const t = W(this.template), e = W(this.selList, t);
        this.items.forEach(() => xt(e, "<div>"));
        const n = W("[uk-close]", t), o = this.t("close");
        n && o && (n.dataset.i18n = JSON.stringify({ label: o })), this.$mount(xt(this.container, t));
      },
      events: [
        {
          name: `${hi} ${ne} keydown`,
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
            this.hideControls(), nt(this.slides, this.clsActive), at.stop(this.slides);
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
            t === st.LEFT ? e = "previous" : t === st.RIGHT ? e = "next" : t === st.HOME ? e = 0 : t === st.END && (e = "last"), ~e && this.show(e);
          }
        },
        {
          name: "beforeitemshow",
          handler(t) {
            this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = ca.scale, nt(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
          }
        },
        {
          name: "itemshow",
          handler() {
            xe(W(this.selCaption, this.$el), this.getItem().caption || "");
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
              const w = Vn("img", { src: n, alt: l, ...d });
              H(w, "load", () => this.setItem(e, w)), H(w, "error", () => this.setError(e));
            } else if (o === "video" || n.match(/\.(mp4|webm|ogv)($|\?)/i)) {
              const w = Vn("video", {
                src: n,
                poster: c,
                controls: "",
                playsinline: "",
                "uk-video": `${this.videoAutoplay}`,
                ...d
              });
              H(w, "loadedmetadata", () => this.setItem(e, w)), H(w, "error", () => this.setError(e));
            } else if (o === "iframe" || n.match(/\.(html|php)($|\?)/i))
              this.setItem(
                e,
                Vn("iframe", {
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
                Vn("iframe", {
                  src: `https://www.youtube${p[1] || ""}.com/embed/${p[2]}${p[3] ? `?${p[3]}` : ""}`,
                  width: 1920,
                  height: 1080,
                  ...m,
                  ...d
                })
              );
            else if (p = n.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
              try {
                const { height: w, width: $ } = await (await fetch(
                  `https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(
                    n
                  )}`,
                  { credentials: "omit" }
                )).json();
                this.setItem(
                  e,
                  Vn("iframe", {
                    src: `https://player.vimeo.com/video/${p[1]}${p[2] ? `?${p[2]}` : ""}`,
                    width: $,
                    height: w,
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
          this.getSlide(e).childElementCount || F(this.$el, "itemload", [e]);
        },
        getItem(t = this.index) {
          return this.items[Jt(t, this.slides)];
        },
        setItem(t, e) {
          F(this.$el, "itemloaded", [this, xe(this.getSlide(t), e)]);
        },
        getSlide(t) {
          return this.slides[this.items.indexOf(t)];
        },
        setError(t) {
          this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },
        showControls() {
          clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), G(this.$el, "uk-active", "uk-transition-active");
        },
        hideControls() {
          nt(this.$el, "uk-active", "uk-transition-active");
        }
      }
    };
    function Vn(t, e) {
      const n = Fe(`<${t}>`);
      return B(n, e), n;
    }
    var _h = {
      install: Oh,
      props: { toggle: String },
      data: { toggle: "a" },
      computed: {
        toggles: ({ toggle: t }, e) => ht(t, e)
      },
      watch: {
        toggles(t) {
          this.hide();
          for (const e of t)
            gt(e, "a") && B(e, "role", "button");
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
          const e = Qo(this.toggles.map(ha), "source");
          if (Dt(t)) {
            const { source: n } = ha(t);
            t = P(e, ({ source: o }) => n === o);
          }
          return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items: e }), H(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t);
        },
        hide() {
          var t;
          return (t = this.panel) == null ? void 0 : t.hide();
        }
      }
    };
    function Oh(t, e) {
      t.lightboxPanel || t.component("lightboxPanel", ua), M(e.props, t.component("lightboxPanel").options.props);
    }
    function ha(t) {
      const e = {};
      for (const n of ["href", "caption", "type", "poster", "alt", "attrs"])
        e[n === "href" ? "source" : n] = Rt(t, n);
      return e.attrs = un(e.attrs), e;
    }
    var Th = {
      mixins: [Un],
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
      install: Ch,
      computed: {
        marginProp: ({ pos: t }) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`,
        startProps() {
          return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
        }
      },
      created() {
        const t = `${this.clsContainer}-${this.pos}`, e = `data-${this.clsContainer}-container`, n = W(`.${t}[${e}]`, this.container) || xt(
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
        const t = K(y(this.$el, this.marginProp));
        await at.start(y(this.$el, this.startProps), {
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
        [on]() {
          this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        }
      },
      methods: {
        async close(t) {
          const e = (n) => {
            const o = ot(n);
            F(n, "close", [this]), Kt(n), o != null && o.hasChildNodes() || Kt(o);
          };
          this.timer && clearTimeout(this.timer), t || await at.start(this.$el, this.startProps), e(this.$el);
        }
      }
    };
    function Ch(t) {
      t.notification.closeAll = function(e, n) {
        Se(document.body, (o) => {
          const l = t.getComponent(o, "notification");
          l && (!e || e === l.group) && l.close(n);
        });
      };
    }
    var Ni = {
      props: {
        media: Boolean
      },
      data: {
        media: !1
      },
      connected() {
        const t = Ah(this.media, this.$el);
        if (this.matchMedia = !0, t) {
          this.mediaObj = window.matchMedia(t);
          const e = () => {
            this.matchMedia = this.mediaObj.matches, F(this.$el, an("mediachange", !1, !0, [this.mediaObj]));
          };
          this.offMediaObj = H(this.mediaObj, "change", () => {
            e(), this.$emit("resize");
          }), e();
        }
      },
      disconnected() {
        var t;
        (t = this.offMediaObj) == null || t.call(this);
      }
    };
    function Ah(t, e) {
      if (ct(t)) {
        if (b(t, "@"))
          t = K(y(e, `--uk-breakpoint-${t.slice(1)}`));
        else if (isNaN(t))
          return t;
      }
      return t && ue(t) ? `(min-width: ${t}px)` : "";
    }
    function da(t) {
      return kt(t) ? Math.ceil(
        Math.max(0, ...ht("[stroke]", t).map((e) => {
          var n;
          return ((n = e.getTotalLength) == null ? void 0 : n.call(e)) || 0;
        }))
      ) : 0;
    }
    const Di = {
      x: Fi,
      y: Fi,
      rotate: Fi,
      scale: Fi,
      color: no,
      backgroundColor: no,
      borderColor: no,
      blur: We,
      hue: We,
      fopacity: We,
      grayscale: We,
      invert: We,
      saturate: We,
      sepia: We,
      opacity: Rh,
      stroke: Ih,
      bgx: ma,
      bgy: ma
    }, { keys: fa } = Object;
    var pa = {
      mixins: [Ni],
      props: ya(fa(Di), "list"),
      data: ya(fa(Di), void 0),
      computed: {
        props(t, e) {
          const n = {};
          for (const l in t)
            l in Di && !Pt(t[l]) && (n[l] = t[l].slice());
          const o = {};
          for (const l in n)
            o[l] = Di[l](l, e, n[l], n);
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
            y(this.$el, t, "");
        },
        getCss(t) {
          const e = {};
          for (const n in this.props)
            this.props[n](e, Ft(t));
          return e.willChange = Object.keys(e).map(mi).join(","), e;
        }
      }
    };
    function Fi(t, e, n) {
      let o = Mi(n) || { x: "px", y: "px", rotate: "deg" }[t] || "", l;
      return t === "x" || t === "y" ? (t = `translate${v(t)}`, l = (c) => K(K(c).toFixed(o === "px" ? 0 : 6))) : t === "scale" && (o = "", l = (c) => {
        var d;
        return Mi([c]) ? At(c, "width", e, !0) / e[`offset${(d = c.endsWith) != null && d.call(c, "vh") ? "Height" : "Width"}`] : K(c);
      }), n.length === 1 && n.unshift(t === "scale" ? 1 : 0), n = mn(n, l), (c, d) => {
        c.transform = `${c.transform || ""} ${t}(${Jn(n, d)}${o})`;
      };
    }
    function no(t, e, n) {
      return n.length === 1 && n.unshift(Kn(e, t, "")), n = mn(n, (o) => Ph(e, o)), (o, l) => {
        const [c, d, p] = wa(n, l), m = c.map((w, $) => (w += p * (d[$] - w), $ === 3 ? K(w) : parseInt(w, 10))).join(",");
        o[t] = `rgba(${m})`;
      };
    }
    function Ph(t, e) {
      return Kn(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(K);
    }
    function We(t, e, n) {
      n.length === 1 && n.unshift(0);
      const o = Mi(n) || { blur: "px", hue: "deg" }[t] || "%";
      return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, n = mn(n), (l, c) => {
        const d = Jn(n, c);
        l.filter = `${l.filter || ""} ${t}(${d + o})`;
      };
    }
    function Rh(t, e, n) {
      return n.length === 1 && n.unshift(Kn(e, t, "")), n = mn(n), (o, l) => {
        o[t] = Jn(n, l);
      };
    }
    function Ih(t, e, n) {
      n.length === 1 && n.unshift(0);
      const o = Mi(n), l = da(e);
      return n = mn(n.reverse(), (c) => (c = K(c), o === "%" ? c * l / 100 : c)), n.some(([c]) => c) ? (y(e, "strokeDasharray", l), (c, d) => {
        c.strokeDashoffset = Jn(n, d);
      }) : it;
    }
    function ma(t, e, n, o) {
      n.length === 1 && n.unshift(0);
      const l = t === "bgy" ? "height" : "width";
      o[t] = mn(n, (p) => At(p, l, e));
      const c = ["bgx", "bgy"].filter((p) => p in o);
      if (c.length === 2 && t === "bgx")
        return it;
      if (Kn(e, "backgroundSize", "") === "cover")
        return Bh(t, e, n, o);
      const d = {};
      for (const p of c)
        d[p] = ga(e, p);
      return va(c, d, o);
    }
    function Bh(t, e, n, o) {
      const l = Nh(e);
      if (!l.width)
        return it;
      const c = {
        width: e.offsetWidth,
        height: e.offsetHeight
      }, d = ["bgx", "bgy"].filter(($) => $ in o), p = {};
      for (const $ of d) {
        const E = o[$].map(([et]) => et), R = Math.min(...E), I = Math.max(...E), L = E.indexOf(R) < E.indexOf(I), Y = I - R;
        p[$] = `${(L ? -Y : 0) - (L ? R : I)}px`, c[$ === "bgy" ? "height" : "width"] += Y;
      }
      const m = bs.cover(l, c);
      for (const $ of d) {
        const E = $ === "bgy" ? "height" : "width", R = m[E] - c[E];
        p[$] = `max(${ga(e, $)},-${R}px) + ${p[$]}`;
      }
      const w = va(d, p, o);
      return ($, E) => {
        w($, E), $.backgroundSize = `${m.width}px ${m.height}px`, $.backgroundRepeat = "no-repeat";
      };
    }
    function ga(t, e) {
      return Kn(t, `background-position-${e.slice(-1)}`, "");
    }
    function va(t, e, n) {
      return function(o, l) {
        for (const c of t) {
          const d = Jn(n[c], l);
          o[`background-position-${c.slice(-1)}`] = `calc(${e[c]} + ${d}px)`;
        }
      };
    }
    const ba = {}, Li = {};
    function Nh(t) {
      const e = y(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
      if (Li[e])
        return Li[e];
      const n = new Image();
      return e && (n.src = e, !n.naturalWidth && !ba[e]) ? (mt(n, "error load", () => {
        Li[e] = io(n), F(t, an("load", !1));
      }), ba[e] = !0, io(n)) : Li[e] = io(n);
    }
    function io(t) {
      return {
        width: t.naturalWidth,
        height: t.naturalHeight
      };
    }
    function mn(t, e = K) {
      const n = [], { length: o } = t;
      let l = 0;
      for (let c = 0; c < o; c++) {
        let [d, p] = ct(t[c]) ? t[c].trim().split(/ (?![^(]*\))/) : [t[c]];
        if (d = e(d), p = p ? K(p) / 100 : null, c === 0 ? p === null ? p = 0 : p && n.push([d, 0]) : c === o - 1 && (p === null ? p = 1 : p !== 1 && (n.push([d, p]), p = 1)), n.push([d, p]), p === null)
          l++;
        else if (l) {
          const m = n[c - l - 1][1], w = (p - m) / (l + 1);
          for (let $ = l; $ > 0; $--)
            n[c - $][1] = m + w * (l - $ + 1);
          l = 0;
        }
      }
      return n;
    }
    function wa(t, e) {
      const n = P(t.slice(1), ([, o]) => e <= o) + 1;
      return [
        t[n - 1][0],
        t[n][0],
        (e - t[n - 1][1]) / (t[n][1] - t[n - 1][1])
      ];
    }
    function Jn(t, e) {
      const [n, o, l] = wa(t, e);
      return n + Math.abs(n - o) * l * (n < o ? 1 : -1);
    }
    const Dh = /^-?\d+(?:\.\d+)?(\S+)?/;
    function Mi(t, e) {
      var n;
      for (const o of t) {
        const l = (n = o.match) == null ? void 0 : n.call(o, Dh);
        if (l)
          return l[1];
      }
      return e;
    }
    function Kn(t, e, n) {
      const o = t.style[e], l = y(y(t, e, n), e);
      return t.style[e] = o, l;
    }
    function ya(t, e) {
      return t.reduce((n, o) => (n[o] = e, n), {});
    }
    function $a(t, e) {
      return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    var Fh = {
      mixins: [pa],
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
        target: ({ target: t }, e) => ka(t && Lt(t, e) || e),
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
        qs(),
        Mn({ target: ({ target: t }) => t }),
        ie({ target: ({ $el: t, target: e }) => [t, e, _e(e, !0)] })
      ],
      update: {
        read({ percent: t }, e) {
          if (e.has("scroll") || (t = !1), !kt(this.$el))
            return !1;
          if (!this.matchMedia)
            return;
          const n = t;
          return t = $a(Ti(this.target, this.start, this.end), this.easing), {
            percent: t,
            style: n === t ? !1 : this.getCss(t)
          };
        },
        write({ style: t }) {
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          t && y(this.$el, t);
        },
        events: ["scroll", "resize"]
      }
    };
    function ka(t) {
      return t ? "offsetTop" in t ? t : ka(ot(t)) : document.documentElement;
    }
    var xa = {
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
        ie({
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
          const e = At(this.parallaxStart, "height", t, !0), n = At(this.parallaxEnd, "height", t, !0), o = $a(Ti(t, e, n), this.parallaxEasing);
          return { parallax: this.getIndexAt(o) };
        },
        write({ parallax: t }) {
          const [e, n] = t, o = this.getValidIndex(e + Math.ceil(n)), l = this.slides[e], c = this.slides[o], { triggerShow: d, triggerShown: p, triggerHide: m, triggerHidden: w } = Lh(this);
          if (~this.prevIndex)
            for (const E of /* @__PURE__ */ new Set([this.index, this.prevIndex]))
              _([o, e], E) || (m(this.slides[E]), w(this.slides[E]));
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
    function Lh(t) {
      const { clsSlideActive: e, clsEnter: n, clsLeave: o } = t;
      return { triggerShow: l, triggerShown: c, triggerHide: d, triggerHidden: p };
      function l(m) {
        z(m, o) && (d(m), p(m)), z(m, e) || (F(m, "beforeitemshow", [t]), F(m, "itemshow", [t]));
      }
      function c(m) {
        z(m, n) && F(m, "itemshown", [t]);
      }
      function d(m) {
        z(m, e) || l(m), z(m, n) && c(m), z(m, o) || (F(m, "beforeitemhide", [t]), F(m, "itemhide", [t]));
      }
      function p(m) {
        z(m, o) && F(m, "itemhidden", [t]);
      }
    }
    var Sa = {
      update: {
        write() {
          if (this.stack.length || this.dragging || this.parallax)
            return;
          const t = this.getValidIndex();
          !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1);
        },
        events: ["resize"]
      }
    }, Ea = {
      observe: Pi({
        target: ({ slides: t }) => t,
        targets: (t) => t.getAdjacentSlides()
      }),
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        }
      }
    };
    function Mh(t, e, n, { center: o, easing: l, list: c }) {
      const d = t ? Gn(t, c, o) : Gn(e, c, o) + N(e).width * n, p = e ? Gn(e, c, o) : d + N(t).width * n * (Ot ? -1 : 1), { promise: m, resolve: w } = Wr();
      return {
        dir: n,
        show($, E = 0, R) {
          const I = R ? "linear" : l;
          return $ -= Math.round($ * Ft(E, -1, 1)), y(c, "transitionProperty", "none"), this.translate(E), y(c, "transitionProperty", ""), E = t ? E : Ft(E, 0, 1), ze(this.getItemIn(), "itemin", { percent: E, duration: $, timing: I, dir: n }), t && ze(this.getItemIn(!0), "itemout", {
            percent: 1 - E,
            duration: $,
            timing: I,
            dir: n
          }), at.start(
            c,
            { transform: bt(-p * (Ot ? -1 : 1), "px") },
            $,
            I
          ).then(w, it), m;
        },
        cancel() {
          return at.cancel(c);
        },
        reset() {
          y(c, "transform", "");
        },
        async forward($, E = this.percent()) {
          return await this.cancel(), this.show($, E, !0);
        },
        translate($) {
          if ($ === this.percent())
            return;
          const E = this.getDistance() * n * (Ot ? -1 : 1);
          y(
            c,
            "transform",
            bt(
              Ft(
                -p + (E - E * $),
                -gn(c),
                N(c).width
              ) * (Ot ? -1 : 1),
              "px"
            )
          );
          const R = this.getActives(), I = this.getItemIn(), L = this.getItemIn(!0);
          $ = t ? Ft($, -1, 1) : 0;
          for (const Y of rt(c)) {
            const et = _(R, Y), he = Y === I, vn = Y === L, bn = he || !vn && (et || n * (Ot ? -1 : 1) === -1 ^ ji(Y, c) > ji(t || e));
            ze(Y, `itemtranslate${bn ? "in" : "out"}`, {
              dir: n,
              percent: vn ? 1 - $ : he ? $ : et ? 1 : 0
            });
          }
        },
        percent() {
          return Math.abs(
            (new DOMMatrix(y(c, "transform")).m41 * (Ot ? -1 : 1) + d) / (p - d)
          );
        },
        getDistance() {
          return Math.abs(p - d);
        },
        getItemIn($ = !1) {
          let E = this.getActives(), R = Oa(c, Gn(e || t, c, o));
          if ($) {
            const I = E;
            E = R, R = I;
          }
          return R[P(R, (I) => !_(E, I))];
        },
        getActives() {
          return Oa(c, Gn(t || e, c, o));
        }
      };
    }
    function Gn(t, e, n) {
      const o = ji(t, e);
      return n ? o - jh(t, e) : Math.min(o, _a(e));
    }
    function _a(t) {
      return Math.max(0, gn(t) - N(t).width);
    }
    function gn(t, e) {
      return Ie(rt(t).slice(0, e), (n) => N(n).width);
    }
    function jh(t, e) {
      return N(e).width / 2 - N(t).width / 2;
    }
    function ji(t, e) {
      return t && (As(t).left + (Ot ? N(t).width - N(e).width : 0)) * (Ot ? -1 : 1) || 0;
    }
    function Oa(t, e) {
      e -= 1;
      const n = N(t).width, o = e + n + 2;
      return rt(t).filter((l) => {
        const c = ji(l, t), d = c + Math.min(N(l).width, n);
        return c >= e && d <= o;
      });
    }
    var Uh = {
      mixins: [zt, ra, Sa, xa, Ea],
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
        Transitioner: Mh
      },
      computed: {
        finite({ finite: t }) {
          return t || zh(this.list, this.center);
        },
        maxIndex() {
          if (!this.finite || this.center && !this.sets)
            return this.length - 1;
          if (this.center)
            return Re(this.sets);
          let t = 0;
          const e = _a(this.list), n = P(this.slides, (o) => {
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
            e + c > o && (e = 0), this.center ? e < o / 2 && e + c + N(this.slides[Jt(l + 1, this.slides)]).width / 2 > o / 2 && (n.push(l), e = o / 2 - c / 2) : e === 0 && n.push(Math.min(l, this.maxIndex)), e += c;
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
          return rt(this.list).filter(kt);
        }
      },
      connected() {
        $t(this.$el, this.clsContainer, !W(`.${this.clsContainer}`, this.$el));
      },
      observe: ie({
        target: ({ slides: t, $el: e }) => [e, ...t]
      }),
      update: {
        write() {
          for (const t of this.navItems) {
            const e = pe(Rt(t, this.attrItem));
            e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !_(this.sets, e));
          }
          this.reorder(), this.parallax || this._translate(1), this.updateActiveClasses();
        },
        events: ["resize"]
      },
      events: {
        beforeitemshow(t) {
          !this.dragging && this.sets && this.stack.length < 2 && !_(this.sets, this.index) && (this.index = this.getValidIndex());
          const e = Math.abs(
            this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
          );
          if (!this.dragging && e > 1) {
            for (let l = 0; l < e; l++)
              this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
            t.preventDefault();
            return;
          }
          const n = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex, o = gn(this.list) / this.length;
          this.duration = aa(o / this.velocity) * (N(this.slides[n]).width / o), this.reorder();
        },
        itemshow() {
          ~this.prevIndex && G(this._getTransitioner().getItemIn(), this.clsActive), this.updateActiveClasses(this.prevIndex);
        },
        itemshown() {
          this.updateActiveClasses();
        }
      },
      methods: {
        reorder() {
          if (this.finite) {
            y(this.slides, "order", "");
            return;
          }
          const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
          if (this.slides.forEach(
            (l, c) => y(
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
            y(c, "order", l > t ? -2 : -1), n -= N(c).width;
          }
        },
        updateActiveClasses(t = this.index) {
          let e = this._getTransitioner(t).getActives();
          this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
          const n = [
            this.clsActive,
            !this.sets || _(this.sets, K(this.index)) ? this.clsActivated : ""
          ];
          for (const o of this.slides) {
            const l = _(e, o);
            $t(o, n, l), B(o, "aria-hidden", !l);
            for (const c of ht(On, o))
              u(c, "_tabindex") || (c._tabindex = B(c, "tabindex")), B(c, "tabindex", l ? c._tabindex : -1);
          }
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          if (t = this.getIndex(t, e), !this.sets)
            return t;
          let n;
          do {
            if (_(this.sets, t))
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
              const w = this.slides[this.getIndex(this.index + d + m++ * d)];
              p += N(w).width * d, c.add(w);
            } while (this.length > m && p > e && p < n);
          }
          return Array.from(c);
        },
        getIndexAt(t) {
          let e = -1;
          const n = this.center ? gn(this.list) - (N(this.slides[0]).width / 2 + N(Re(this.slides)).width / 2) : gn(this.list, this.maxIndex);
          let o = t * n, l = 0;
          do {
            const c = N(this.slides[++e]).width, d = this.center ? c / 2 + N(this.slides[e + 1]).width / 2 : c;
            l = o / d % 1, o -= d;
          } while (o >= 0 && e < this.maxIndex);
          return [e, l];
        }
      }
    };
    function zh(t, e) {
      if (!t || t.length < 2)
        return !0;
      const { width: n } = N(t);
      if (!e)
        return Math.ceil(gn(t)) < Math.trunc(n + Hh(t));
      const o = rt(t), l = Math.trunc(n / 2);
      for (const c in o) {
        const d = o[c], p = N(d).width, m = /* @__PURE__ */ new Set([d]);
        let w = 0;
        for (const $ of [-1, 1]) {
          let E = p / 2, R = 0;
          for (; E < l; ) {
            const I = o[Jt(+c + $ + R++ * $, o)];
            if (m.has(I))
              return !0;
            E += N(I).width, m.add(I);
          }
          w = Math.max(
            w,
            p / 2 + N(o[Jt(+c + $, o)]).width / 2 - (E - l)
          );
        }
        if (Math.trunc(w) > Ie(
          o.filter(($) => !m.has($)),
          ($) => N($).width
        ))
          return !0;
      }
      return !1;
    }
    function Hh(t) {
      return Math.max(0, ...rt(t).map((e) => N(e).width));
    }
    var Ta = {
      mixins: [pa],
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
            Ee.read(() => {
              if (!this.matchMedia)
                return;
              const c = this.getCss(Aa(t, l, e)), d = this.getCss(Ca(t) ? 0.5 : l > 0 ? 1 : 0);
              Ee.write(() => {
                y(this.$el, c), at.start(this.$el, d, n, o).catch(it);
              });
            });
          }
        },
        {
          name: "transitioncanceled transitionend",
          self: !0,
          el: ({ item: t }) => t,
          handler() {
            at.cancel(this.$el);
          }
        },
        {
          name: "itemtranslatein itemtranslateout",
          self: !0,
          el: ({ item: t }) => t,
          handler({ type: t, detail: { percent: e, dir: n } }) {
            Ee.read(() => {
              if (!this.matchMedia) {
                this.reset();
                return;
              }
              const o = this.getCss(Aa(t, n, e));
              Ee.write(() => y(this.$el, o));
            });
          }
        }
      ]
    };
    function Ca(t) {
      return A(t, "in");
    }
    function Aa(t, e, n) {
      return n /= 2, Ca(t) ^ e < 0 ? n : 1 - n;
    }
    var qh = {
      ...Qs,
      fade: {
        show() {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - y(t, "opacity");
        },
        translate(t) {
          return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
        }
      },
      scale: {
        show() {
          return [{ opacity: 0, transform: dn(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - y(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: dn(1 + 0.5 * t), zIndex: 0 },
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
          return n < 0 ? 1 - zn(e) : zn(t);
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
          return n > 0 ? 1 - zn(e) : zn(t);
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
    }, Wh = {
      mixins: [zt, la, Sa, xa, Ea],
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
        Animations: qh
      },
      watch: {
        list(t) {
          y(t, {
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
    }, Vh = {
      mixins: [zt, jr],
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
        name: ne,
        passive: !1,
        handler: "init"
      },
      computed: {
        target: (t, e) => (e.tBodies || [e])[0],
        items() {
          return rt(this.target);
        },
        isEmpty() {
          return !this.items.length;
        },
        handles({ handle: t }, e) {
          return t ? ht(t, e) : this.items;
        }
      },
      watch: {
        isEmpty(t) {
          $t(this.target, this.clsEmpty, t);
        },
        handles(t, e) {
          y(e, { touchAction: "", userSelect: "" }), y(t, { touchAction: "none", userSelect: "none" });
        }
      },
      update: {
        write(t) {
          if (!this.drag || !ot(this.placeholder))
            return;
          const {
            pos: { x: e, y: n },
            origin: { offsetTop: o, offsetLeft: l },
            placeholder: c
          } = this;
          y(this.drag, {
            top: n - o,
            left: e - l
          });
          const d = this.getSortable(document.elementFromPoint(e, n));
          if (!d)
            return;
          const { items: p } = d;
          if (p.some(at.inProgress))
            return;
          const m = Xh(p, { x: e, y: n });
          if (p.length && (!m || m === c))
            return;
          const w = this.getSortable(c), $ = Yh(
            d.target,
            m,
            c,
            e,
            n,
            d === w && t.moved !== m
          );
          $ !== !1 && ($ && c === $ || (d !== w ? (w.remove(c), t.moved = m) : delete t.moved, d.insert(c, $), this.touched.add(d)));
        },
        events: ["move"]
      },
      methods: {
        init(t) {
          const { target: e, button: n, defaultPrevented: o } = t, [l] = this.items.filter((c) => c.contains(e));
          !l || o || n > 0 || fi(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = ge(t), this.touched = /* @__PURE__ */ new Set([this]), this.placeholder = l, this.origin = { target: e, index: me(l), ...this.pos }, H(document, hi, this.move), H(document, ye, this.end), this.threshold || this.start(t));
        },
        start(t) {
          this.drag = Gh(this.$container, this.placeholder);
          const { left: e, top: n } = N(this.placeholder);
          M(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - n }), G(this.drag, this.clsDrag, this.clsCustom), G(this.placeholder, this.clsPlaceholder), G(this.items, this.clsItem), G(document.documentElement, this.clsDragState), F(this.$el, "start", [this, this.placeholder]), Jh(this.pos), this.move(t);
        },
        move: Zh(function(t) {
          M(this.pos, ge(t)), !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t), this.$emit("move");
        }),
        end() {
          if ($e(document, hi, this.move), $e(document, ye, this.end), !this.drag)
            return;
          Kh();
          const t = this.getSortable(this.placeholder);
          this === t ? this.origin.index !== me(this.placeholder) && F(this.$el, "moved", [this, this.placeholder]) : (F(t.$el, "added", [t, this.placeholder]), F(this.$el, "removed", [this, this.placeholder])), F(this.$el, "stop", [this, this.placeholder]), Kt(this.drag), this.drag = null;
          for (const { clsPlaceholder: e, clsItem: n } of this.touched)
            for (const o of this.touched)
              nt(o.items, e, n);
          this.touched = null, nt(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          G(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => vi(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => xt(this.target, t));
        },
        remove(t) {
          this.target.contains(t) && this.animate(() => Kt(t));
        },
        getSortable(t) {
          do {
            const e = this.$getComponent(t, "sortable");
            if (e && (e === this || this.group !== !1 && e.group === this.group))
              return e;
          } while (t = ot(t));
        }
      }
    };
    let Pa;
    function Jh(t) {
      let e = Date.now();
      Pa = setInterval(() => {
        let { x: n, y: o } = t;
        o += document.scrollingElement.scrollTop;
        const l = (Date.now() - e) * 0.3;
        e = Date.now(), Me(document.elementFromPoint(n, t.y)).reverse().some((c) => {
          let { scrollTop: d, scrollHeight: p } = c;
          const { top: m, bottom: w, height: $ } = Gt(c);
          if (m < o && m + 35 > o)
            d -= l;
          else if (w > o && w - 35 < o)
            d += l;
          else
            return;
          if (d > 0 && d < p - $)
            return c.scrollTop = d, !0;
        });
      }, 15);
    }
    function Kh() {
      clearInterval(Pa);
    }
    function Gh(t, e) {
      let n;
      if (gt(e, "li", "tr")) {
        n = W("<div>"), xt(n, e.cloneNode(!0).children);
        for (const o of e.getAttributeNames())
          B(n, o, e.getAttribute(o));
      } else
        n = e.cloneNode(!0);
      return xt(t, n), y(n, "margin", "0", "important"), y(n, {
        boxSizing: "border-box",
        width: e.offsetWidth,
        height: e.offsetHeight,
        padding: y(e, "padding")
      }), Ut(n.firstElementChild, Ut(e.firstElementChild)), n;
    }
    function Xh(t, e) {
      return t[P(t, (n) => ci(e, N(n)))];
    }
    function Yh(t, e, n, o, l, c) {
      if (!rt(t).length)
        return;
      const d = N(e);
      if (!c)
        return Qh(t, n) || l < d.top + d.height / 2 ? e : e.nextElementSibling;
      const p = N(n), m = Ra(
        [d.top, d.bottom],
        [p.top, p.bottom]
      ), [w, $, E, R] = m ? [o, "width", "left", "right"] : [l, "height", "top", "bottom"], I = p[$] < d[$] ? d[$] - p[$] : 0;
      return p[E] < d[E] ? I && w < d[E] + I ? !1 : e.nextElementSibling : I && w > d[R] - I ? !1 : e;
    }
    function Qh(t, e) {
      const n = rt(t).length === 1;
      n && xt(t, e);
      const o = rt(t), l = o.some((c, d) => {
        const p = N(c);
        return o.slice(d + 1).some((m) => {
          const w = N(m);
          return !Ra([p.left, p.right], [w.left, w.right]);
        });
      });
      return n && Kt(e), l;
    }
    function Ra(t, e) {
      return t[1] > e[0] && e[1] > t[0];
    }
    function Zh(t) {
      let e;
      return function(...n) {
        e || (e = !0, t.call(this, ...n), requestAnimationFrame(() => e = !1));
      };
    }
    var Ia = {
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
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = _(["top", "bottom"], this.dir) ? "y" : "x";
      },
      methods: {
        positionAt(t, e, n) {
          let o = [this.getPositionOffset(t), this.getShiftOffset(t)];
          const l = [this.flip && "flip", this.shift && "shift"], c = {
            element: [this.inset ? this.dir : ki(this.dir), this.align],
            target: [this.dir, this.align]
          };
          if (this.axis === "y") {
            for (const m in c)
              c[m].reverse();
            o.reverse(), l.reverse();
          }
          const d = Ba(t), p = N(t);
          y(t, { top: -p.height, left: -p.width }), Sr(t, e, {
            attach: c,
            offset: o,
            boundary: n,
            placement: l,
            viewportOffset: this.getViewportOffset(t)
          }), d();
        },
        getPositionOffset(t = this.$el) {
          return At(
            this.offset === !1 ? y(t, "--uk-position-offset") : this.offset,
            this.axis === "x" ? "width" : "height",
            t
          ) * (_(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
        },
        getShiftOffset(t = this.$el) {
          return this.align === "center" ? 0 : At(
            y(t, "--uk-position-shift-offset"),
            this.axis === "y" ? "width" : "height",
            t
          ) * (_(["left", "top"], this.align) ? 1 : -1);
        },
        getViewportOffset(t) {
          return At(y(t, "--uk-position-viewport-offset"));
        }
      }
    };
    function Ba(t) {
      const e = _e(t), { scrollTop: n } = e;
      return () => {
        n !== e.scrollTop && (e.scrollTop = n);
      };
    }
    var td = {
      mixins: [Un, Ue, Ia],
      data: {
        pos: "top",
        animation: ["uk-animation-scale-up"],
        duration: 100,
        cls: "uk-active"
      },
      connected() {
        ed(this.$el);
      },
      disconnected() {
        this.hide();
      },
      methods: {
        show() {
          if (this.isToggled(this.tooltip || null))
            return;
          const { delay: t = 0, title: e } = id(this.$options);
          if (!e)
            return;
          const n = B(this.$el, "title"), o = H(this.$el, ["blur", on], (c) => !oe(c) && this.hide());
          this.reset = () => {
            B(this.$el, { title: n, "aria-describedby": null }), o();
          };
          const l = qe(this);
          B(this.$el, { title: null, "aria-describedby": l }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, l), t);
        },
        async hide() {
          var t;
          tt(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), (t = this.reset) == null || t.call(this), Kt(this.tooltip), this.tooltip = null);
        },
        async _show(t, e) {
          this.tooltip = xt(
            this.container,
            `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`
          ), H(this.tooltip, "toggled", (n, o) => {
            if (!o)
              return;
            const l = () => this.positionAt(this.tooltip, this.$el);
            l();
            const [c, d] = nd(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? `${ki(c)}-${d}` : `${d}-${ki(c)}`;
            const p = [
              mt(
                document,
                `keydown ${ne}`,
                this.hide,
                !1,
                (m) => m.type === ne && !this.$el.contains(m.target) || m.type === "keydown" && m.keyCode === st.ESC
              ),
              H([document, ...je(this.$el)], "scroll", l, {
                passive: !0
              })
            ];
            mt(this.tooltip, "hide", () => p.forEach((m) => m()), {
              self: !0
            });
          }), await this.toggleElement(this.tooltip, !0) || this.hide();
        }
      },
      events: {
        // Clicking a button does not give it focus on all browsers and platforms
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
        [`focus ${De} ${ne}`](t) {
          (!oe(t) || t.type === ne) && this.show();
        }
      }
    };
    function ed(t) {
      pi(t) || B(t, "tabindex", "0");
    }
    function nd(t, e, [n, o]) {
      const l = Q(t), c = Q(e), d = [
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
      return o = (_(d[0], n) ? d[1] : d[0]).find((m) => l[m] === c[m]) || "center", [n, o];
    }
    function id(t) {
      const { el: e, id: n, data: o } = t;
      return ["delay", "title"].reduce((l, c) => ({ [c]: Rt(e, c), ...l }), {
        ...un(Rt(e, n), ["title"]),
        ...o
      });
    }
    var sd = {
      mixins: [Ii],
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
        abort: it,
        beforeAll: it,
        beforeSend: it,
        complete: it,
        completeAll: it,
        error: it,
        fail: it,
        load: it,
        loadEnd: it,
        loadStart: it,
        progress: it
      },
      events: {
        change(t) {
          tt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
        },
        drop(t) {
          Ui(t);
          const e = t.dataTransfer;
          e != null && e.files && (nt(this.$el, this.clsDragover), this.upload(e.files));
        },
        dragenter(t) {
          Ui(t);
        },
        dragover(t) {
          Ui(t), G(this.$el, this.clsDragover);
        },
        dragleave(t) {
          Ui(t), nt(this.$el, this.clsDragover);
        }
      },
      methods: {
        async upload(t) {
          if (t = O(t), !t.length)
            return;
          F(this.$el, "upload", [t]);
          for (const o of t) {
            if (this.maxSize && this.maxSize * 1e3 < o.size) {
              this.fail(this.t("invalidSize", this.maxSize));
              return;
            }
            if (this.allow && !Na(this.allow, o.name)) {
              this.fail(this.t("invalidName", this.allow));
              return;
            }
            if (this.mime && !Na(this.mime, o.type)) {
              this.fail(this.t("invalidMime", this.mime));
              return;
            }
          }
          this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
          const e = od(t, this.concurrent), n = async (o) => {
            const l = new FormData();
            o.forEach((c) => l.append(this.name, c));
            for (const c in this.params)
              l.append(c, this.params[c]);
            try {
              const c = await rd(this.url, {
                data: l,
                method: this.method,
                responseType: this.type,
                beforeSend: (d) => {
                  const { xhr: p } = d;
                  H(p.upload, "progress", this.progress);
                  for (const m of ["loadStart", "load", "loadEnd", "abort"])
                    H(p, m.toLowerCase(), this[m]);
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
    function Na(t, e) {
      return e.match(
        new RegExp(
          `^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`,
          "i"
        )
      );
    }
    function od(t, e) {
      const n = [];
      for (let o = 0; o < t.length; o += e)
        n.push(t.slice(o, o + e));
      return n;
    }
    function Ui(t) {
      t.preventDefault(), t.stopPropagation();
    }
    async function rd(t, e) {
      const n = {
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: it,
        responseType: "",
        ...e
      };
      return await n.beforeSend(n), ad(t, n);
    }
    function ad(t, e) {
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
        H(l, "load", () => {
          l.status === 0 || l.status >= 200 && l.status < 300 || l.status === 304 ? n(l) : o(
            M(Error(l.statusText), {
              xhr: l,
              status: l.status
            })
          );
        }), H(l, "error", () => o(M(Error("Network Error"), { xhr: l }))), H(l, "timeout", () => o(M(Error("Network Timeout"), { xhr: l }))), l.send(e.data);
      });
    }
    var ld = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Countdown: xu,
      Filter: Fu,
      Lightbox: _h,
      LightboxPanel: ua,
      Notification: Th,
      Parallax: Fh,
      Slider: Uh,
      SliderParallax: Ta,
      Slideshow: Wh,
      SlideshowParallax: Ta,
      Sortable: Vh,
      Tooltip: td,
      Upload: sd
    });
    function cd(t) {
      Ne && window.MutationObserver && (document.body ? requestAnimationFrame(() => Da(t)) : new MutationObserver((e, n) => {
        document.body && (Da(t), n.disconnect());
      }).observe(document.documentElement, { childList: !0 }));
    }
    function Da(t) {
      F(document, "uikit:init", t), document.body && Se(document.body, Fa), new MutationObserver((e) => e.forEach(ud)).observe(document, {
        subtree: !0,
        childList: !0
      }), new MutationObserver((e) => e.forEach(hd)).observe(document, {
        subtree: !0,
        attributes: !0
      }), t._initialized = !0;
    }
    function ud({ addedNodes: t, removedNodes: e }) {
      for (const n of t)
        Se(n, Fa);
      for (const n of e)
        Se(n, dd);
    }
    function hd({ target: t, attributeName: e }) {
      var n;
      const o = La(e);
      o && (we(t, e) ? qn(o, t) : (n = Bi(t, o)) == null || n.$destroy());
    }
    function Fa(t) {
      const e = Wn(t);
      for (const n in e)
        to(e[n]);
      for (const n of t.getAttributeNames()) {
        const o = La(n);
        o && qn(o, t);
      }
    }
    function dd(t) {
      const e = Wn(t);
      for (const n in e)
        eo(e[n]);
    }
    function La(t) {
      b(t, "data-") && (t = t.slice(5));
      const e = pn[t];
      return e && (e.options || e).name;
    }
    wh(Yt), yh(Yt);
    var Ma = {
      mixins: [zt, Ue],
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
        items: ({ targets: t }, e) => ht(t, e),
        toggles({ toggle: t }) {
          return this.items.map((e) => W(t, e));
        },
        contents({ content: t }) {
          return this.items.map((e) => {
            var n;
            return ((n = e._wrapper) == null ? void 0 : n.firstElementChild) || W(t, e);
          });
        }
      },
      watch: {
        items(t, e) {
          if (e || z(t, this.clsOpen))
            return;
          const n = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
          n && this.toggle(n, !1);
        },
        toggles() {
          this.$emit();
        },
        contents(t) {
          for (const e of t) {
            const n = z(
              this.items.find((o) => o.contains(e)),
              this.clsOpen
            );
            zi(e, !n);
          }
          this.$emit();
        }
      },
      observe: Pi(),
      events: [
        {
          name: "click keydown",
          delegate: ({ targets: t, $props: e }) => `${t} ${e.toggle}`,
          async handler(t) {
            var e;
            t.type === "keydown" && t.keyCode !== st.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = pd(t.target), await this.toggle(me(this.toggles, t.current)), this._off());
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
        const t = Tn(this.items, `.${this.clsOpen}`);
        for (const e in this.items) {
          const n = this.toggles[e], o = this.contents[e];
          if (!n || !o)
            continue;
          n.id = qe(this, n), o.id = qe(this, o);
          const l = _(t, this.items[e]);
          B(n, {
            role: gt(n, "a") ? "button" : null,
            "aria-controls": o.id,
            "aria-expanded": l,
            "aria-disabled": !this.collapsible && t.length < 2 && l
          }), B(o, { role: "region", "aria-labelledby": n.id }), gt(o, "ul") && B(rt(o), "role", "presentation");
        }
      },
      methods: {
        toggle(t, e) {
          t = this.items[Jt(t, this.items)];
          let n = [t];
          const o = Tn(this.items, `.${this.clsOpen}`);
          if (!this.multiple && !_(o, n[0]) && (n = n.concat(o)), !(!this.collapsible && o.length < 2 && _(o, t)))
            return Promise.all(
              n.map(
                (l) => this.toggleElement(l, !_(o, l), (c, d) => {
                  if ($t(c, this.clsOpen, d), e === !1 || !this.animation) {
                    zi(W(this.content, c), !d);
                    return;
                  }
                  return fd(c, d, this);
                })
              )
            );
        }
      }
    };
    function zi(t, e) {
      t && (t.hidden = e);
    }
    async function fd(t, e, { content: n, duration: o, velocity: l, transition: c }) {
      var d;
      n = ((d = t._wrapper) == null ? void 0 : d.firstElementChild) || W(n, t), t._wrapper || (t._wrapper = yi(n, "<div>"));
      const p = t._wrapper;
      y(p, "overflow", "hidden");
      const m = K(y(p, "height"));
      await at.cancel(p), zi(n, !1);
      const w = Ie(["marginTop", "marginBottom"], (E) => y(n, E)) + N(n).height, $ = m / w;
      o = (l * w + o) * (e ? 1 - $ : $), y(p, "height", m), await at.start(p, { height: e ? w : 0 }, o, c), In(n), delete t._wrapper, e || zi(n, !0);
    }
    function pd(t) {
      const e = _e(t, !0);
      let n;
      return function o() {
        n = requestAnimationFrame(() => {
          const { top: l } = N(t);
          l < 0 && (e.scrollTop += l), o();
        });
      }(), () => requestAnimationFrame(() => cancelAnimationFrame(n));
    }
    var md = {
      mixins: [zt, Ue],
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
          await this.toggleElement(this.$el, !1, gd), this.$destroy(!0);
        }
      }
    };
    function gd(t, e, { duration: n, transition: o, velocity: l }) {
      const c = K(y(t, "height"));
      return y(t, "height", c), at.start(
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
    var ja = {
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
        this.autoplay === "inview" && !we(this.$el, "preload") && (this.$el.preload = "none"), gt(this.$el, "iframe") && !we(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && (gt(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = !0), this.automute && vr(this.$el);
      },
      events: [
        {
          name: `${De} focusin`,
          filter: ({ autoplay: t }) => _(t, "hover"),
          handler(t) {
            !oe(t) || !vd(this.$el) ? Ns(this.$el) : Ei(this.$el);
          }
        },
        {
          name: `${on} focusout`,
          filter: ({ autoplay: t }) => _(t, "hover"),
          handler(t) {
            oe(t) || Ei(this.$el);
          }
        }
      ],
      observe: [
        hn({
          filter: ({ $el: t, autoplay: e }) => e !== "hover" && br(t),
          handler([{ isIntersecting: t }]) {
            document.fullscreenElement || (t ? this.autoplay && Ns(this.$el) : Ei(this.$el));
          },
          args: { intersecting: !1 },
          options: ({ $el: t, autoplay: e }) => ({ root: e === "inview" ? null : ot(t) })
        })
      ]
    };
    function vd(t) {
      return !t.paused && !t.ended;
    }
    var bd = {
      mixins: [ja],
      props: {
        width: Number,
        height: Number
      },
      data: {
        automute: !0
      },
      created() {
        this.useObjectFit = gt(this.$el, "img", "video");
      },
      observe: ie({
        target: ({ $el: t }) => Ua(t) || ot(t),
        filter: ({ useObjectFit: t }) => !t
      }),
      update: {
        read() {
          if (this.useObjectFit)
            return !1;
          const { ratio: t, cover: e } = bs, { $el: n, width: o, height: l } = this;
          let c = { width: o, height: l };
          if (!o || !l) {
            const w = {
              width: n.naturalWidth || n.videoWidth || n.clientWidth,
              height: n.naturalHeight || n.videoHeight || n.clientHeight
            };
            o ? c = t(w, "width", o) : l ? c = t(w, "height", l) : c = w;
          }
          const { offsetHeight: d, offsetWidth: p } = Ua(n) || ot(n), m = e(c, { width: p, height: d });
          return !m.width || !m.height ? !1 : m;
        },
        write({ height: t, width: e }) {
          y(this.$el, { height: t, width: e });
        },
        events: ["resize"]
      }
    };
    function Ua(t) {
      for (; t = ot(t); )
        if (y(t, "position") !== "static")
          return t;
    }
    let It;
    var za = {
      mixins: [Un, Ia, Ue],
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
        this.tracker = new pr();
      },
      beforeConnect() {
        this.clsDrop = this.$props.clsDrop || this.$options.id;
      },
      connected() {
        G(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = yd(this)), this._style = gs(this.$el.style, ["width", "height"]);
      },
      disconnected() {
        this.isActive() && (this.hide(!1), It = null), y(this.$el, this._style);
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
            !t && n && rn(e) && !this.$el.contains(W(n)) && this.hide(!1);
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
            t.preventDefault(), tt(this.$el, ":focus,:hover") || this.hide();
          }
        },
        {
          name: `${De} focusin`,
          filter: ({ mode: t }) => _(t, "hover"),
          handler(t) {
            oe(t) || this.clearTimers();
          }
        },
        {
          name: `${on} focusout`,
          filter: ({ mode: t }) => _(t, "hover"),
          handler(t) {
            !oe(t) && t.relatedTarget && this.hide();
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
            It = this, this.tracker.init(), B(this.targetEl, "aria-expanded", !0);
            const t = [
              $d(this),
              kd(this),
              Sd(this),
              this.autoUpdate && Ha(this),
              this.closeOnScroll && xd(this)
            ];
            mt(this.$el, "hide", () => t.forEach((e) => e && e()), {
              self: !0
            }), this.bgScroll || mt(this.$el, "hidden", Hr(this.$el), { self: !0 });
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
            It = this.isActive() ? null : It, this.tracker.cancel(), B(this.targetEl, "aria-expanded", null);
          }
        }
      ],
      update: {
        write() {
          this.isToggled() && !z(this.$el, this.clsEnter) && this.position();
        }
      },
      methods: {
        show(t = this.targetEl, e = !0) {
          if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
            if (It) {
              if (e && It.isDelaying()) {
                this.showTimer = setTimeout(() => tt(t, ":hover") && this.show(), 10);
                return;
              }
              let n;
              for (; It && n !== It && !It.$el.contains(this.$el); )
                n = It, It.hide(!1, !1);
            }
            this.container && ot(this.$el) !== this.container && xt(this.container, this.$el), this.showTimer = setTimeout(
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
          return [this.$el, ...ht(".uk-drop", this.$el)].some((t) => this.tracker.movesTo(t));
        },
        position() {
          const t = Ba(this.$el);
          nt(this.$el, "uk-drop-stack"), y(this.$el, this._style), this.$el.hidden = !0;
          const e = this.target.map((c) => wd(this.$el, c)), n = this.getViewportOffset(this.$el), o = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]]
          ];
          for (const [c, [d, p]] of o)
            this.axis !== d && _([d, !0], this.stretch) && y(this.$el, {
              [p]: Math.min(
                Q(this.boundary[c])[p],
                e[c][p] - 2 * n
              ),
              [`overflow-${d}`]: "auto"
            });
          const l = e[0].width - 2 * n;
          this.$el.hidden = !1, y(this.$el, "maxWidth", ""), this.$el.offsetWidth > l && G(this.$el, "uk-drop-stack"), y(this.$el, "maxWidth", l), this.positionAt(this.$el, this.target, this.boundary);
          for (const [c, [d, p, m, w]] of o)
            if (this.axis === d && _([d, !0], this.stretch)) {
              const $ = Math.abs(this.getPositionOffset()), E = Q(this.target[c]), R = Q(this.$el);
              y(this.$el, {
                [p]: (E[m] > R[m] ? E[this.inset ? w : m] - Math.max(
                  Q(this.boundary[c])[m],
                  e[c][m] + n
                ) : Math.min(
                  Q(this.boundary[c])[w],
                  e[c][w] - n
                ) - E[this.inset ? m : w]) - $,
                [`overflow-${d}`]: "auto"
              }), this.positionAt(this.$el, this.target, this.boundary);
            }
          t();
        }
      }
    };
    function wd(t, e) {
      return Gt(je(e).find((n) => n.contains(t)));
    }
    function yd(t) {
      const { $el: e } = t.$create("toggle", Lt(t.toggle, t.$el), {
        target: t.$el,
        mode: t.mode
      });
      return B(e, "aria-haspopup", !0), e;
    }
    function $d(t) {
      const e = () => t.$emit(), n = [
        Is(e),
        Dn(je(t.$el).concat(t.target), e)
      ];
      return () => n.map((o) => o.disconnect());
    }
    function Ha(t, e = () => t.$emit()) {
      return H([document, ...je(t.$el)], "scroll", e, {
        passive: !0
      });
    }
    function kd(t) {
      return H(document, "keydown", (e) => {
        e.keyCode === st.ESC && t.hide(!1);
      });
    }
    function xd(t) {
      return Ha(t, () => t.hide(!1));
    }
    function Sd(t) {
      return H(document, ne, ({ target: e }) => {
        t.$el.contains(e) || mt(
          document,
          `${ye} ${di} scroll`,
          ({ defaultPrevented: n, type: o, target: l }) => {
            var c;
            !n && o === ye && e === l && !((c = t.targetEl) != null && c.contains(e)) && t.hide(!1);
          },
          !0
        );
      });
    }
    var qa = {
      mixins: [zt, Un],
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
        dropbarAnchor: ({ dropbarAnchor: t }, e) => Lt(t, e) || e,
        dropbar({ dropbar: t }) {
          return t ? (t = this._dropbar || Lt(t, this.$el) || W(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = W("<div></div>"))) : null;
        },
        dropContainer(t, e) {
          return this.container || e;
        },
        dropdowns({ clsDrop: t }, e) {
          var n;
          const o = ht(`.${t}`, e);
          if (this.dropContainer !== e)
            for (const l of ht(`.${t}`, this.dropContainer)) {
              const c = (n = this.getDropdown(l)) == null ? void 0 : n.targetEl;
              !_(o, l) && c && this.$el.contains(c) && o.push(l);
            }
          return o;
        },
        items({ selNavItem: t }, e) {
          return ht(t, e);
        }
      },
      watch: {
        dropbar(t) {
          G(
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
        Kt(this._dropbar), delete this._dropbar;
      },
      events: [
        {
          name: "mouseover focusin",
          delegate: ({ selNavItem: t }) => t,
          handler({ current: t }) {
            const e = this.getActive();
            e && _(e.mode, "hover") && e.targetEl && !t.contains(e.targetEl) && !e.isDelaying() && e.hide(!1);
          }
        },
        {
          name: "keydown",
          self: !0,
          delegate: ({ selNavItem: t }) => t,
          handler(t) {
            var e;
            const { current: n, keyCode: o } = t, l = this.getActive();
            o === st.DOWN && (l == null ? void 0 : l.targetEl) === n && (t.preventDefault(), (e = W(On, l.$el)) == null || e.focus()), Wa(t, this.items, l);
          }
        },
        {
          name: "keydown",
          el: ({ dropContainer: t }) => t,
          delegate: ({ clsDrop: t }) => `.${t}`,
          handler(t) {
            var e;
            const { current: n, keyCode: o, target: l } = t;
            if (fi(l) || !_(this.dropdowns, n))
              return;
            const c = this.getActive();
            let d = -1;
            if (o === st.HOME ? d = 0 : o === st.END ? d = "last" : o === st.UP ? d = "previous" : o === st.DOWN ? d = "next" : o === st.ESC && ((e = c.targetEl) == null || e.focus()), ~d) {
              t.preventDefault();
              const p = ht(On, n);
              p[Jt(
                d,
                p,
                P(p, (m) => tt(m, ":focus"))
              )].focus();
            }
            Wa(t, this.items, c);
          }
        },
        {
          name: "mouseleave",
          el: ({ dropbar: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler() {
            const t = this.getActive();
            t && _(t.mode, "hover") && !this.dropdowns.some((e) => tt(e, ":hover")) && t.hide();
          }
        },
        {
          name: "beforeshow",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler({ target: t }) {
            this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && bi(this.dropbarAnchor, this.dropbar), G(t, `${this.clsDrop}-dropbar`));
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
                ...Cn(t, `.${this.clsDrop}`).concat(t).map((l) => Q(l).bottom)
              );
              Q(this.dropbar, {
                left: Q(this.dropbar).left,
                top: this.getDropbarOffset(e.getPositionOffset())
              }), this.transitionTo(
                o - Q(this.dropbar).top + K(y(t, "marginBottom")),
                t
              );
            };
            this._observer = Dn([e.$el, ...e.target], n), n();
          }
        },
        {
          name: "beforehide",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler(t) {
            const e = this.getActive();
            tt(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && _(e.mode, "hover") && e.isDelayedHide && !this.items.some((n) => e.targetEl !== n && tt(n, ":focus")) && t.preventDefault();
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
          return _(this.dropdowns, (t = It) == null ? void 0 : t.$el) && It;
        },
        async transitionTo(t, e) {
          const { dropbar: n } = this, o = Ut(n);
          if (e = o < t && e, await at.cancel([e, n]), e) {
            const l = Q(e).top - Q(n).top - o;
            l > 0 && y(e, "transitionDelay", `${l / t * this.duration}ms`);
          }
          y(e, "clipPath", `polygon(0 0,100% 0,100% ${o}px,0 ${o}px)`), Ut(n, o), await Promise.all([
            at.start(n, { height: t }, this.duration),
            at.start(
              e,
              { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` },
              this.duration
            ).finally(() => y(e, { clipPath: "", transitionDelay: "" }))
          ]).catch(it);
        },
        getDropdown(t) {
          return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
        },
        isDropbarDrop(t) {
          return _(this.dropdowns, t) && z(t, this.clsDrop);
        },
        getDropbarOffset(t) {
          const { $el: e, target: n, targetY: o } = this, { top: l, height: c } = Q(Lt(o || n || e, e));
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
    function Wa(t, e, n) {
      var o, l, c;
      const { current: d, keyCode: p } = t;
      let m = -1;
      p === st.HOME ? m = 0 : p === st.END ? m = "last" : p === st.LEFT ? m = "previous" : p === st.RIGHT ? m = "next" : p === st.TAB && ((o = n.targetEl) == null || o.focus(), (l = n.hide) == null || l.call(n, !1)), ~m && (t.preventDefault(), (c = n.hide) == null || c.call(n, !1), e[Jt(m, e, e.indexOf(n.targetEl || d))].focus());
    }
    var Ed = {
      mixins: [zt],
      args: "target",
      props: {
        target: Boolean
      },
      data: {
        target: !1
      },
      computed: {
        input: (t, e) => W(_n, e),
        state() {
          return this.input.nextElementSibling;
        },
        target({ target: t }, e) {
          return t && (t === !0 && ot(this.input) === e && this.input.nextElementSibling || W(t, e));
        }
      },
      update() {
        var t;
        const { target: e, input: n } = this;
        if (!e)
          return;
        let o;
        const l = fi(e) ? "value" : "textContent", c = e[l], d = (t = n.files) != null && t[0] ? n.files[0].name : tt(n, "select") && (o = ht("option", n).filter((p) => p.selected)[0]) ? o.textContent : n.value;
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
    }, _d = {
      extends: Br,
      mixins: [zt],
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
        this.masonry && G(this.$el, "uk-flex-top", "uk-flex-wrap-top");
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
            if (o = Math.max(0, At(o)), !(n || o || l) || Va(e) || e[0].some(
              (L, Y) => e.some((et) => et[Y] && et[Y].offsetWidth !== L.offsetWidth)
            ))
              return t.translates = t.scrollColumns = !1;
            let d = Td(e, c), p, m;
            n ? [p, m] = Od(e, d, n === "next") : p = Cd(e);
            const w = p.map(
              (L) => Ie(L, "offsetHeight") + d * (L.length - 1)
            ), $ = Math.max(0, ...w);
            let E, R, I;
            return (o || l) && (E = w.map(
              (L, Y) => l ? $ - L + o : o / (Y % 2 || 8)
            ), l || (o = Math.max(
              ...w.map((L, Y) => L + E[Y] - $)
            )), R = At(this.parallaxStart, "height", this.$el, !0), I = At(this.parallaxEnd, "height", this.$el, !0)), {
              columns: p,
              translates: m,
              scrollColumns: E,
              parallaxStart: R,
              parallaxEnd: I,
              padding: o,
              height: m ? $ : ""
            };
          },
          write({ height: t, padding: e }) {
            y(this.$el, "paddingBottom", e || ""), t !== !1 && y(this.$el, "height", t);
          },
          events: ["resize"]
        },
        {
          read({ rows: t, scrollColumns: e, parallaxStart: n, parallaxEnd: o }) {
            return {
              scrolled: e && !Va(t) ? Ti(this.$el, n, o) : !1
            };
          },
          write({ columns: t, scrolled: e, scrollColumns: n, translates: o }) {
            !e && !o || t.forEach(
              (l, c) => l.forEach((d, p) => {
                let [m, w] = o && o[c][p] || [0, 0];
                e && (w += e * n[c]), y(d, "transform", `translate(${m}px, ${w}px)`);
              })
            );
          },
          events: ["scroll", "resize"]
        }
      ]
    };
    function Va(t) {
      return t.flat().some((e) => y(e, "position") === "absolute");
    }
    function Od(t, e, n) {
      const o = [], l = [], c = Array(t[0].length).fill(0);
      let d = 0;
      for (let p of t) {
        Ot && (p = p.reverse());
        let m = 0;
        for (const w in p) {
          const { offsetWidth: $, offsetHeight: E } = p[w], R = n ? w : c.indexOf(Math.min(...c));
          so(o, R, p[w]), so(l, R, [
            (R - w) * $ * (Ot ? -1 : 1),
            c[R] - d
          ]), c[R] += E + e, m = Math.max(m, E);
        }
        d += m + e;
      }
      return [o, l];
    }
    function Td(t, e) {
      const n = t.flat().find((o) => z(o, e));
      return K(n ? y(n, "marginTop") : y(t[0][0], "paddingLeft"));
    }
    function Cd(t) {
      const e = [];
      for (const n of t)
        for (const o in n)
          so(e, o, n[o]);
      return e;
    }
    function so(t, e, n) {
      t[e] || (t[e] = []), t[e].push(n);
    }
    var Ad = {
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
        elements: ({ target: t }, e) => ht(t, e)
      },
      observe: ie({
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
            rows: (this.row ? Ws(this.elements) : [this.elements]).map(Pd)
          };
        },
        write({ rows: t }) {
          for (const { heights: e, elements: n } of t)
            n.forEach((o, l) => y(o, "minHeight", e[l]));
        },
        events: ["resize"]
      }
    };
    function Pd(t) {
      if (t.length < 2)
        return { heights: [""], elements: t };
      let e = t.map(Rd);
      const n = Math.max(...e);
      return {
        heights: t.map((o, l) => e[l].toFixed(2) === n.toFixed(2) ? "" : n),
        elements: t
      };
    }
    function Rd(t) {
      const e = gs(t.style, ["display", "minHeight"]);
      kt(t) || y(t, "display", "block", "important"), y(t, "minHeight", "");
      const n = N(t).height - ln(t, "height", "content-box");
      return y(t, e), n;
    }
    var Id = {
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
      observe: ie({ target: ({ target: t }) => t }),
      update: {
        read() {
          return this.target ? { height: this.target.offsetHeight } : !1;
        },
        write({ height: t }) {
          y(this.$el, { minHeight: t });
        },
        events: ["resize"]
      }
    }, Bd = {
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
        qs({ filter: ({ expand: t }) => t }),
        ie({ target: ({ $el: t }) => Me(t) })
      ],
      update: {
        read() {
          if (!kt(this.$el))
            return !1;
          let t = "";
          const e = ln(this.$el, "height", "content-box"), { body: n, scrollingElement: o } = document, l = _e(this.$el), { height: c } = Gt(
            l === n ? o : l
          ), d = o === l || n === l;
          if (t = `calc(${d ? "100vh" : `${c}px`}`, this.expand) {
            const p = N(l).height - N(this.$el).height;
            t += ` - ${p}px`;
          } else {
            if (this.offsetTop)
              if (d) {
                const p = this.offsetTop === !0 ? this.$el : Lt(this.offsetTop, this.$el), { top: m } = Q(p);
                t += m > 0 && m < c / 2 ? ` - ${m}px` : "";
              } else
                t += ` - ${ln(l, "height", y(l, "boxSizing"))}px`;
            this.offsetBottom === !0 ? t += ` - ${N(this.$el.nextElementSibling).height}px` : ue(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && A(this.offsetBottom, "px") ? t += ` - ${K(this.offsetBottom)}px` : ct(this.offsetBottom) && (t += ` - ${N(Lt(this.offsetBottom, this.$el)).height}px`);
          }
          return t += `${e ? ` - ${e}px` : ""})`, { minHeight: t };
        },
        write({ minHeight: t }) {
          y(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"]
      }
    }, Nd = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', Dd = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', Fd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Ld = '<svg width="20" height="20" viewBox="0 0 20 20"><rect width="1" height="11" x="9" y="4"/><rect width="11" height="1" x="4" y="9"/></svg>', Md = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', jd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Ud = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', zd = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1"/><rect width="20" height="2" y="9" class="line-2"/><rect width="20" height="2" y="9" class="line-3"/><rect width="20" height="2" y="15" class="line-4"/></svg>', Hd = '<svg width="40" height="40" viewBox="0 0 40 40"><rect width="1" height="40" x="19" y="0"/><rect width="40" height="1" x="0" y="19"/></svg>', qd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', Wd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Ja = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', Vd = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', Jd = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', Kd = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', Gd = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', Xd = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', Yd = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', Qd = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', Zd = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>', Ka = {
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
          const e = tf(t, this.$el);
          return this.svgEl && e !== this.svgEl && Kt(this.svgEl), ef.call(this, e, t), this.svgEl = e;
        }, it);
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected || (ws(this.$el) && (this.$el.hidden = !1), Kt(t), this.svgEl = null);
        }), this.svg = null;
      },
      methods: {
        async getSvg() {
        }
      }
    };
    function tf(t, e) {
      if (ws(e) || gt(e, "canvas")) {
        e.hidden = !0;
        const o = e.nextElementSibling;
        return Ga(t, o) ? o : bi(e, t);
      }
      const n = e.lastElementChild;
      return Ga(t, n) ? n : xt(e, t);
    }
    function Ga(t, e) {
      return gt(t, "svg") && gt(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function ef(t, e) {
      const n = ["width", "height"];
      let o = n.map((c) => this[c]);
      o.some((c) => c) || (o = n.map((c) => B(e, c)));
      const l = B(e, "viewBox");
      l && !o.some((c) => c) && (o = l.split(" ").slice(2)), o.forEach((c, d) => B(t, n[d], K(c) * this.ratio || null));
    }
    var nf = {
      mixins: [Ka],
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
        Ai({
          async handler() {
            const t = await this.svg;
            t && Xa.call(this, t);
          },
          options: {
            attributes: !0,
            attributeFilter: ["id", "class", "style"]
          }
        })
      ],
      async connected() {
        _(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
        const t = await this.svg;
        t && (Xa.call(this, t), this.strokeAnimation && af(t));
      },
      methods: {
        async getSvg() {
          return gt(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t) => mt(this.$el, "load", t)), of(await sf(this.src), this.icon) || Promise.reject("SVG not found.");
        }
      }
    };
    function Xa(t) {
      const { $el: e } = this;
      G(t, B(e, "class"), "uk-svg");
      for (let n = 0; n < e.style.length; n++) {
        const o = e.style[n];
        y(t, o, y(e, o));
      }
      for (const n in this.attributes) {
        const [o, l] = this.attributes[n].split(":", 2);
        B(t, o, l);
      }
      this.$el.id || En(t, "id");
    }
    const sf = ee(async (t) => t ? b(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function of(t, e) {
      return e && _(t, "<symbol") && (t = rf(t)[e] || t), Qa(t);
    }
    const Ya = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, rf = ee(function(t) {
      const e = {};
      Ya.lastIndex = 0;
      let n;
      for (; n = Ya.exec(t); )
        e[n[3]] = `<svg ${n[1]}svg>`;
      return e;
    });
    function af(t) {
      const e = da(t);
      e && y(t, "--uk-animation-stroke", e);
    }
    function Qa(t) {
      const e = document.createElement("template");
      return e.innerHTML = t, e.content.firstElementChild;
    }
    const Hi = {
      spinner: Qd,
      totop: Zd,
      marker: Ld,
      "close-icon": Nd,
      "close-large": Dd,
      "drop-parent-icon": Fd,
      "nav-parent-icon": jd,
      "nav-parent-icon-large": Md,
      "navbar-parent-icon": Ud,
      "navbar-toggle-icon": zd,
      "overlay-icon": Hd,
      "pagination-next": qd,
      "pagination-previous": Wd,
      "search-icon": Ja,
      "search-medium": Jd,
      "search-large": Vd,
      "search-toggle-icon": Ja,
      "slidenav-next": Gd,
      "slidenav-next-large": Kd,
      "slidenav-previous": Yd,
      "slidenav-previous-large": Xd
    }, oo = {
      install: vf,
      mixins: [Ka],
      args: "icon",
      props: { icon: String },
      isIcon: !0,
      beforeConnect() {
        G(this.$el, "uk-icon");
      },
      methods: {
        async getSvg() {
          const t = wf(this.icon);
          if (!t)
            throw "Icon not found.";
          return t;
        }
      }
    }, Ve = {
      args: !1,
      extends: oo,
      data: (t) => ({
        icon: f(t.constructor.options.name)
      }),
      beforeConnect() {
        G(this.$el, this.$options.id);
      }
    }, lf = {
      extends: Ve,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      }
    }, cf = {
      extends: Ve,
      mixins: [Ii],
      i18n: { toggle: "Open Search", submit: "Submit Search" },
      beforeConnect() {
        const t = z(this.$el, "uk-search-toggle") || z(this.$el, "uk-navbar-toggle");
        if (this.icon = t ? "search-toggle-icon" : z(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-medium") ? "search-medium" : this.$props.icon, !we(this.$el, "aria-label"))
          if (t) {
            const e = this.t("toggle");
            B(this.$el, "aria-label", e);
          } else {
            const e = this.$el.closest("a,button");
            if (e) {
              const n = this.t("submit");
              B(e, "aria-label", n);
            }
          }
      }
    }, uf = {
      extends: Ve,
      beforeConnect() {
        B(this.$el, "role", "status");
      },
      methods: {
        async getSvg() {
          const t = await oo.methods.getSvg.call(this);
          return this.ratio !== 1 && y(W("circle", t), "strokeWidth", 1 / this.ratio), t;
        }
      }
    }, Je = {
      extends: Ve,
      mixins: [Ii],
      beforeConnect() {
        const t = this.$el.closest("a,button");
        B(t, "role", this.role !== null && gt(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !we(t, "aria-label") && B(t, "aria-label", e);
      }
    }, Za = {
      extends: Je,
      beforeConnect() {
        G(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = z(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      }
    }, hf = {
      extends: Je,
      i18n: { label: "Open menu" }
    }, df = {
      extends: Je,
      i18n: { label: "Close" },
      beforeConnect() {
        this.icon = `close-${z(this.$el, "uk-close-large") ? "large" : "icon"}`;
      }
    }, ff = {
      extends: Je,
      i18n: { label: "Open" }
    }, pf = {
      extends: Je,
      i18n: { label: "Back to top" }
    }, mf = {
      extends: Je,
      i18n: { label: "Next page" },
      data: { role: null }
    }, gf = {
      extends: Je,
      i18n: { label: "Previous page" },
      data: { role: null }
    }, qi = {};
    function vf(t) {
      t.icon.add = (e, n) => {
        const o = ct(e) ? { [e]: n } : e;
        en(o, (l, c) => {
          Hi[c] = l, delete qi[c];
        }), t._initialized && Se(
          document.body,
          (l) => en(t.getComponents(l), (c) => {
            c.$options.isIcon && c.icon in o && c.$reset();
          })
        );
      };
    }
    const bf = { twitter: "x" };
    function wf(t) {
      return t = bf[t] || t, Hi[t] ? (qi[t] || (qi[t] = Qa(Hi[yf(t)] || Hi[t])), qi[t].cloneNode(!0)) : null;
    }
    function yf(t) {
      return Ot ? ms(ms(t, "left", "right"), "previous", "next") : t;
    }
    var $f = {
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
        this.loading !== "lazy" ? this.load() : ao(this.$el) && (this.$el.loading = "lazy", ro(this.$el));
      },
      disconnected() {
        this.img && (this.img.onload = ""), delete this.img;
      },
      observe: hn({
        handler(t, e) {
          this.load(), e.disconnect();
        },
        options: ({ margin: t }) => ({ rootMargin: t }),
        filter: ({ loading: t }) => t === "lazy",
        target: ({ $el: t, $props: e }) => e.target ? [t, ...An(e.target, t)] : t
      }),
      methods: {
        load() {
          if (this.img)
            return this.img;
          const t = ao(this.$el) ? this.$el : xf(this.$el, this.dataSrc, this.sources);
          return En(t, "loading"), ro(this.$el, t.currentSrc), this.img = t;
        }
      }
    };
    function ro(t, e) {
      if (ao(t)) {
        const n = ot(t);
        (gt(n, "picture") ? rt(n) : [t]).forEach((l) => tl(l, l));
      } else e && !_(t.style.backgroundImage, e) && (y(t, "backgroundImage", `url(${xs(e)})`), F(t, an("load", !1)));
    }
    const kf = ["data-src", "data-srcset", "sizes"];
    function tl(t, e) {
      for (const n of kf) {
        const o = Rt(t, n);
        o && B(e, n.replace(/^(data-)+/, ""), o);
      }
    }
    function xf(t, e, n) {
      const o = new Image();
      return Sf(o, n), tl(t, o), o.onload = () => {
        ro(t, o.currentSrc);
      }, B(o, "src", e), o;
    }
    function Sf(t, e) {
      if (e = Ef(e), e.length) {
        const n = Fe("<picture>");
        for (const o of e) {
          const l = Fe("<source>");
          B(l, o), xt(n, l);
        }
        xt(n, t);
      }
    }
    function Ef(t) {
      if (!t)
        return [];
      if (b(t, "["))
        try {
          t = JSON.parse(t);
        } catch {
          t = [];
        }
      else
        t = un(t);
      return T(t) || (t = [t]), t.filter((e) => !ai(e));
    }
    function ao(t) {
      return gt(t, "img");
    }
    var _f = {
      props: {
        target: String,
        selActive: String
      },
      data: {
        target: !1,
        selActive: !1
      },
      computed: {
        target: ({ target: t }, e) => t ? ht(t, e) : e
      },
      observe: [
        hn({
          handler(t) {
            this.isIntersecting = t.some(({ isIntersecting: e }) => e), this.$emit();
          },
          target: ({ target: t }) => t,
          args: { intersecting: !1 }
        }),
        Ai({
          target: ({ target: t }) => t,
          options: { attributes: !0, attributeFilter: ["class"], attributeOldValue: !0 }
        }),
        {
          target: ({ target: t }) => t,
          observe: (t, e) => {
            const n = Dn(
              [...Z(t), document.documentElement],
              e
            ), o = [
              H(document, "scroll itemshown itemhidden", e, {
                passive: !0,
                capture: !0
              }),
              H(document, "show hide transitionstart", (l) => (e(), n.observe(l.target))),
              H(document, "shown hidden transitionend transitioncancel", (l) => (e(), n.unobserve(l.target)))
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
          for (const t of Z(this.target)) {
            let e = !this.selActive || tt(t, this.selActive) ? Of(t) : "";
            e !== !1 && ui(t, "uk-light uk-dark", e);
          }
        }
      }
    };
    function Of(t) {
      const e = N(t), n = N(window);
      if (!li(e, n))
        return !1;
      const { left: o, top: l, height: c, width: d } = e;
      let p;
      for (const m of [0.25, 0.5, 0.75]) {
        const w = t.ownerDocument.elementsFromPoint(
          Math.max(0, Math.min(o + d * m, n.width - 1)),
          Math.max(0, Math.min(l + c / 2, n.height - 1))
        );
        for (const $ of w) {
          if (t.contains($) || !Tf($) || $.closest('[class*="-leave"]') && w.some((R) => $ !== R && tt(R, '[class*="-enter"]')))
            continue;
          const E = y($, "--uk-inverse");
          if (E) {
            if (E === p)
              return `uk-${E}`;
            p = E;
            break;
          }
        }
      }
      return p ? `uk-${p}` : "";
    }
    function Tf(t) {
      if (y(t, "visibility") !== "visible")
        return !1;
      for (; t; ) {
        if (y(t, "opacity") === "0")
          return !1;
        t = ot(t);
      }
      return !0;
    }
    var Cf = {
      mixins: [zt, Ni],
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
        fill: ({ fill: t }, e) => t || y(e, "--uk-leader-fill-content")
      },
      connected() {
        [this.wrapper] = Cs(this.$el, `<span class="${this.clsWrapper}">`);
      },
      disconnected() {
        In(this.wrapper.childNodes);
      },
      observe: ie(),
      update: {
        read() {
          return {
            width: Math.trunc(this.$el.offsetWidth / 2),
            fill: this.fill,
            hide: !this.matchMedia
          };
        },
        write({ width: t, fill: e, hide: n }) {
          $t(this.wrapper, this.clsHide, n), B(this.wrapper, this.attrFill, new Array(t).join(e));
        },
        events: ["resize"]
      }
    }, Af = {
      install: Pf,
      mixins: [Ys],
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
            gt(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            z(this.panel, "uk-margin-auto-vertical") ? G(this.$el, "uk-flex") : y(this.$el, "display", "block"), Ut(this.$el);
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            y(this.$el, "display", ""), nt(this.$el, "uk-flex");
          }
        }
      ]
    };
    function Pf({ modal: t }) {
      t.dialog = function(n, o) {
        const l = t(W(`<div><div class="uk-modal-dialog">${n}</div></div>`), {
          stack: !0,
          role: "alertdialog",
          ...o
        });
        return l.show(), H(
          l.$el,
          "hidden",
          async () => {
            await Promise.resolve(), l.$destroy(!0);
          },
          { self: !0 }
        ), l;
      }, t.alert = function(n, o) {
        return e(
          ({ i18n: l }) => `<div class="uk-modal-body">${ct(n) ? n : xe(n)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${l.ok}</button> </div>`,
          o
        );
      }, t.confirm = function(n, o) {
        return e(
          ({ i18n: l }) => `<form> <div class="uk-modal-body">${ct(n) ? n : xe(n)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${l.ok}</button> </div> </form>`,
          o,
          () => Promise.reject()
        );
      }, t.prompt = function(n, o, l) {
        const c = e(
          ({ i18n: m }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${ct(n) ? n : xe(n)}</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${m.cancel}</button> <button class="uk-button uk-button-primary">${m.ok}</button> </div> </form>`,
          l,
          () => null,
          () => p.value
        ), { $el: d } = c.dialog, p = W("input", d);
        return p.value = o || "", H(d, "show", () => p.select()), c;
      }, t.i18n = {
        ok: "Ok",
        cancel: "Cancel"
      };
      function e(n, o, l = it, c = it) {
        o = {
          bgClose: !1,
          escClose: !0,
          ...o,
          i18n: { ...t.i18n, ...o == null ? void 0 : o.i18n }
        };
        const d = t.dialog(n(o), o);
        return M(
          new Promise((p) => {
            const m = H(d.$el, "hide", () => p(l()));
            H(d.$el, "submit", "form", (w) => {
              w.preventDefault(), p(c(d)), m(), d.hide();
            });
          }),
          { dialog: d }
        );
      }
    }
    var Rf = {
      extends: Ma,
      data: {
        targets: "> .uk-parent",
        toggle: "> a",
        content: "> ul"
      }
    };
    const lo = "uk-navbar-transparent";
    var If = {
      extends: qa,
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
          const t = z(this.$el, "uk-navbar-justify"), e = ht(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
          for (const n of e) {
            const o = t ? ht(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", n).length : "";
            y(n, "flexGrow", o);
          }
        }
      },
      events: [
        {
          name: "show",
          el: ({ dropContainer: t }) => t,
          handler({ target: t }) {
            this.getTransparentMode(t) === "remove" && z(this.navbarContainer, lo) && (nt(this.navbarContainer, lo), this._transparent = !0);
          }
        },
        {
          name: "hide",
          el: ({ dropContainer: t }) => t,
          async handler() {
            await Bf(), !this.getActive() && this._transparent && (G(this.navbarContainer, lo), this._transparent = null);
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
          if (e && z(t, "uk-dropbar"))
            return e.inset ? "behind" : "remove";
        },
        getDropbarOffset(t) {
          const { top: e, height: n } = Q(this.navbarContainer);
          return e + (this.dropbarTransparentMode === "behind" ? 0 : n + t);
        }
      }
    };
    function Bf() {
      return new Promise((t) => setTimeout(t));
    }
    var Nf = {
      mixins: [Ys],
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
          return t === "reveal" ? ot(this.panel) : this.panel;
        }
      },
      observe: Ir({ filter: ({ swiping: t }) => t }),
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
            this.mode === "reveal" && !z(ot(this.panel), this.clsMode) && (yi(this.panel, "<div>"), G(ot(this.panel), this.clsMode));
            const { body: t, scrollingElement: e } = document;
            G(t, this.clsContainer, this.clsFlip), y(t, "touchAction", "pan-y pinch-zoom"), y(this.$el, "display", "block"), y(this.panel, "maxWidth", e.clientWidth), G(this.$el, this.clsOverlay), G(
              this.panel,
              this.clsSidebarAnimation,
              this.mode === "reveal" ? "" : this.clsMode
            ), Ut(t), G(t, this.clsContainerAnimation), this.clsContainerAnimation && Df();
          }
        },
        {
          name: "hide",
          self: !0,
          handler() {
            nt(document.body, this.clsContainerAnimation), y(document.body, "touchAction", "");
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.clsContainerAnimation && Ff(), this.mode === "reveal" && In(this.panel), nt(this.panel, this.clsSidebarAnimation, this.clsMode), nt(this.$el, this.clsOverlay), y(this.$el, "display", ""), y(this.panel, "maxWidth", ""), nt(document.body, this.clsContainer, this.clsFlip);
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
    function Df() {
      el().content += ",user-scalable=0";
    }
    function Ff() {
      const t = el();
      t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function el() {
      return W('meta[name="viewport"]', document.head) || xt(document.head, '<meta name="viewport">');
    }
    var Lf = {
      mixins: [zt],
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
      observe: ie({
        target: ({ container: t, content: e }) => [t, e]
      }),
      update: {
        read() {
          return !this.content || !this.container || !kt(this.$el) ? !1 : {
            max: Math.max(
              this.minHeight,
              Ut(this.container) - (N(this.content).height - Ut(this.$el))
            )
          };
        },
        write({ max: t }) {
          y(this.$el, { minHeight: this.minHeight, maxHeight: t });
        },
        events: ["resize"]
      }
    }, Mf = {
      props: ["width", "height"],
      connected() {
        G(this.$el, "uk-responsive-width"), y(this.$el, "aspectRatio", `${this.width}/${this.height}`);
      }
    }, jf = {
      props: {
        offset: Number
      },
      data: {
        offset: 0
      },
      connected() {
        Uf(this);
      },
      disconnected() {
        zf(this);
      },
      methods: {
        async scrollTo(t) {
          t = t && W(t) || document.body, F(this.$el, "beforescroll", [this, t]) && (await kr(t, { offset: this.offset }), F(this.$el, "scrolled", [this, t]));
        }
      }
    };
    const Xn = /* @__PURE__ */ new Set();
    function Uf(t) {
      Xn.size || H(document, "click", nl), Xn.add(t);
    }
    function zf(t) {
      Xn.delete(t), Xn.size || $e(document, "click", nl);
    }
    function nl(t) {
      if (!t.defaultPrevented)
        for (const e of Xn)
          e.$el.contains(t.target) && rn(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(ys(e.$el)));
    }
    const co = "uk-scrollspy-inview";
    var Hf = {
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
        elements: ({ target: t }, e) => t ? ht(t, e) : [e]
      },
      watch: {
        elements(t) {
          this.hidden && y(Tn(t, `:not(.${co})`), "opacity", 0);
        }
      },
      connected() {
        this.elementData = /* @__PURE__ */ new Map();
      },
      disconnected() {
        for (const [t, e] of this.elementData.entries())
          nt(t, co, (e == null ? void 0 : e.cls) || "");
        delete this.elementData;
      },
      observe: hn({
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
          (o = l.off) == null || o.call(l), y(t, "opacity", !e && this.hidden ? 0 : ""), $t(t, co, e), $t(t, l.cls);
          let c;
          if (c = l.cls.match(/\buk-animation-[\w-]+/g)) {
            const d = () => nt(t, c);
            e ? l.off = mt(t, "animationcancel animationend", d, {
              self: !0
            }) : d();
          }
          F(t, e ? "inview" : "outview"), l.inview = e;
        }
      }
    }, qf = {
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
        links: ({ target: t }, e) => ht(t, e).filter((n) => rn(n)),
        elements({ closest: t }) {
          return this.links.map((e) => e.closest(t || "*"));
        }
      },
      watch: {
        links(t) {
          this.scroll && this.$create("scroll", t, { offset: this.offset });
        }
      },
      observe: [hn(), Mn()],
      update: [
        {
          read() {
            const t = this.links.map((m) => ys(m) || m.ownerDocument), { length: e } = t;
            if (!e || !kt(this.$el))
              return !1;
            const n = _e(t, !0), { scrollTop: o, scrollHeight: l } = n, c = Gt(n), d = l - c.height;
            let p = !1;
            if (o >= d)
              p = e - 1;
            else {
              const m = this.offset + N(Ls()).height + c.height * 0.1;
              for (let w = 0; w < t.length && !(Q(t[w]).top - c.top - m > 0); w++)
                p = +w;
            }
            return { active: p };
          },
          write({ active: t }) {
            const e = t !== !1 && !z(this.elements[t], this.cls);
            this.links.forEach((n) => n.blur());
            for (let n = 0; n < this.elements.length; n++)
              $t(this.elements[n], this.cls, +n === t);
            e && F(this.$el, "active", [t, this.elements[t]]);
          },
          events: ["scroll", "resize"]
        }
      ]
    }, Wf = {
      mixins: [zt, Ni],
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
        target: ({ selTarget: t }, e) => t && W(t, e) || e
      },
      connected() {
        this.start = il(this.start || this.top), this.end = il(this.end || this.bottom), this.placeholder = W("+ .uk-sticky-placeholder", this.$el) || W('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
      },
      beforeDisconnect() {
        this.isFixed && (this.hide(), nt(this.target, this.clsInactive)), sl(this.$el), Kt(this.placeholder), this.placeholder = null;
      },
      observe: [
        qs(),
        Mn({ target: () => document.scrollingElement }),
        ie({
          target: ({ $el: t }) => [t, Wi(t), document.scrollingElement],
          handler(t) {
            this.$emit(
              this._data.resized && t.some(({ target: e }) => e === Wi(this.$el)) ? "update" : "resize"
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
              const e = Q(W(location.hash)), n = Q(this.$el);
              this.isFixed && li(e, n) && (t.scrollTop = Math.ceil(
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
            const c = Ut(window), d = Math.max(
              0,
              document.scrollingElement.scrollHeight - c
            );
            if (!d) {
              this.inactive = !0;
              return;
            }
            const p = this.isFixed && l.has("update");
            p && (fo(this.target), this.hide()), this.active || ({ height: t, width: e } = N(this.$el), n = y(this.$el, "margin")), p && this.show();
            const m = At("100vh", "height");
            let w = this.position;
            this.overflowFlip && t > m && (w = w === "top" ? "bottom" : "top");
            const $ = this.isFixed ? this.placeholder : this.$el;
            let E = At(this.offset, "height", o ? this.$el : $);
            w === "bottom" && (t < c || this.overflowFlip) && (E += c - t);
            const R = this.overflowFlip ? 0 : Math.max(0, t + E - m), I = Q($).top - // offset possible `transform: translateY` animation 'uk-animation-slide-top' while hiding
            new DOMMatrix(y($, "transform")).m42, L = N(this.$el).height, Y = (this.start === !1 ? I : uo(this.start, this.$el, I)) - E, et = this.end === !1 ? d : Math.min(
              d,
              uo(this.end, this.$el, I + t, !0) - L - E + R
            );
            return o = !this.showOnUp && Y + E === I && et === Math.min(
              d,
              uo(!0, this.$el, 0, !0) - L - E + R
            ) && y(Wi(this.$el), "overflowY") !== "hidden", {
              start: Y,
              end: et,
              offset: E,
              overflow: R,
              height: t,
              elHeight: L,
              width: e,
              margin: n,
              top: Bn($)[0],
              sticky: o,
              viewport: m,
              maxScrollHeight: d
            };
          },
          write({ height: t, width: e, margin: n, offset: o, sticky: l }) {
            if ((this.inactive || l || !this.isFixed) && sl(this.$el), this.inactive)
              return;
            l && (t = e = n = 0, y(this.$el, { position: "sticky", top: o }));
            const { placeholder: c } = this;
            y(c, { height: t, width: e, margin: n }), (ot(c) !== ot(this.$el) || l ^ me(c) < me(this.$el)) && ((l ? vi : bi)(this.$el, c), c.hidden = !0);
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
            maxScrollHeight: w
          }) {
            const $ = Math.min(document.scrollingElement.scrollTop, w), E = t <= $ ? "down" : "up", R = this.isFixed ? this.placeholder : this.$el;
            return {
              dir: E,
              prevDir: e,
              scroll: $,
              prevScroll: t,
              below: $ > Q(R).top + (m ? Math.min(p, d) : p),
              offsetParentTop: Q(R.offsetParent).top,
              overflowScroll: Ft(
                o + Ft($, l, c) - Ft(t, l, c),
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
              start: w,
              below: $
            } = t;
            if (d < 0 || d === p && n || this.showOnUp && !n && !this.isFixed)
              return;
            const E = Date.now();
            if ((E - o > 300 || l !== c) && (t.initScroll = d, t.initTimestamp = E), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - d) <= 30 && Math.abs(p - d) <= 10))
              if (this.inactive || d < w || this.showOnUp && (d <= w || l === "down" && n || l === "up" && !this.isFixed && !$)) {
                if (!this.isFixed) {
                  ke.inProgress(this.$el) && m > d && (ke.cancel(this.$el), this.hide());
                  return;
                }
                if (this.animation && $) {
                  if (z(this.$el, "uk-animation-leave"))
                    return;
                  ke.out(this.$el, this.animation).then(() => this.hide(), it);
                } else
                  this.hide();
              } else this.isFixed ? this.update() : this.animation && $ ? (this.show(), ke.in(this.$el, this.animation).catch(it)) : (fo(this.target), this.show());
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
          this.setActive(!1), nt(this.$el, this.clsFixed, this.clsBelow), e ? y(this.$el, "top", t) : y(this.$el, {
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
            below: w
          } = this._data;
          const $ = l !== 0 || e > l;
          if (!m) {
            let E = "fixed";
            e > c && (d += c - p + o - n, E = "absolute"), y(this.$el, { position: E, width: t, marginTop: 0 }, "important");
          }
          y(this.$el, "top", d - o), this.setActive($), $t(this.$el, this.clsBelow, w), G(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          this.active = t, t ? (ui(this.target, this.clsInactive, this.clsActive), e !== t && F(this.$el, "active")) : (ui(this.target, this.clsActive, this.clsInactive), e !== t && (fo(this.target), F(this.$el, "inactive")));
        }
      }
    };
    function uo(t, e, n, o) {
      if (!t)
        return 0;
      if (ue(t) || ct(t) && t.match(/^-?\d/))
        return n + At(t, "height", e, !0);
      {
        const l = t === !0 ? Wi(e) : Lt(t, e);
        return Q(l).bottom - (o && (l != null && l.contains(e)) ? K(y(l, "paddingBottom")) + K(y(l, "borderBottomWidth")) : 0);
      }
    }
    function il(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function sl(t) {
      y(t, { position: "", top: "", marginTop: "", width: "" });
    }
    const ho = "uk-transition-disable";
    function fo(t) {
      z(t, ho) || (G(t, ho), requestAnimationFrame(() => nt(t, ho)));
    }
    function Wi(t) {
      for (; t = ot(t); )
        if (kt(t))
          return t;
    }
    const po = ".uk-disabled *, .uk-disabled, [disabled]";
    var ol = {
      mixins: [Ue],
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
          get: ({ connect: t }, e) => An(t, e),
          observe: ({ connect: t }) => t
        },
        connectChildren() {
          return this.connects.map((t) => rt(t)).flat();
        },
        toggles: ({ toggle: t }, e) => ht(t, e),
        children(t, e) {
          return rt(e).filter(
            (n) => this.toggles.some((o) => n.contains(o))
          );
        }
      },
      watch: {
        connects(t) {
          this.swiping && y(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
        },
        connectChildren() {
          let t = Math.max(0, this.index());
          for (const e of this.connects)
            rt(e).forEach((n, o) => $t(n, this.cls, o === t));
          this.$emit();
        },
        toggles(t) {
          this.$emit();
          const e = this.index();
          this.show(~e ? e : t[this.active] || t[0]);
        }
      },
      connected() {
        B(this.$el, "role", "tablist");
      },
      observe: [
        Pi({ targets: ({ connectChildren: t }) => t }),
        Ir({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })
      ],
      events: [
        {
          name: "click keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            !tt(t.current, po) && (t.type === "click" || t.keyCode === st.SPACE) && (t.preventDefault(), this.show(t.current));
          }
        },
        {
          name: "keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            const { current: e, keyCode: n } = t, o = tt(this.$el, this.selVertical);
            let l = n === st.HOME ? 0 : n === st.END ? "last" : n === st.LEFT && !o || n === st.UP && o ? "previous" : n === st.RIGHT && !o || n === st.DOWN && o ? "next" : -1;
            if (~l) {
              t.preventDefault();
              const c = this.toggles.filter((p) => !tt(p, po)), d = c[Jt(l, c, c.indexOf(e))];
              d.focus(), this.followFocus && this.show(d);
            }
          }
        },
        {
          name: "click",
          el: ({ $el: t, connects: e, itemNav: n }) => e.concat(n ? An(n, t) : []),
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
          gt(e, "ul") && B(e, "role", "presentation");
        B(rt(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const n = this.toggles[e], o = (t = this.connects[0]) == null ? void 0 : t.children[e];
          B(n, "role", "tab"), o && (n.id = qe(this, n), o.id = qe(this, o), B(n, "aria-controls", o.id), B(o, { role: "tabpanel", "aria-labelledby": n.id }));
        }
        B(this.$el, "aria-orientation", tt(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return P(this.children, (t) => z(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter((d) => !tt(d, po)), n = this.index(), o = Jt(
            !wt(t) || _(e, t) ? t : 0,
            e,
            Jt(this.toggles[n], e)
          ), l = Jt(e[o], this.toggles);
          this.children.forEach((d, p) => {
            $t(d, this.cls, l === p), B(this.toggles[p], {
              "aria-selected": l === p,
              tabindex: l === p ? null : -1
            });
          });
          const c = n >= 0 && n !== o;
          this.connects.forEach(async ({ children: d }) => {
            const p = O(d).filter(
              (m, w) => w !== l && z(m, this.cls)
            );
            await this.toggleElement(p, !1, c) && await this.toggleElement(d[l], !0, c);
          });
        }
      }
    }, Vf = {
      mixins: [zt],
      extends: ol,
      props: {
        media: Boolean
      },
      data: {
        media: 960,
        attrItem: "uk-tab-item",
        selVertical: ".uk-tab-left,.uk-tab-right"
      },
      connected() {
        const t = z(this.$el, "uk-tab-left") ? "uk-tab-left" : z(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
        t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
      }
    };
    const Jf = 32;
    var Kf = {
      mixins: [Ni, Ue],
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
          get: ({ target: t }, e) => (t = An(t || e.hash, e), t.length ? t : [e]),
          observe: ({ target: t }) => t
        }
      },
      connected() {
        _(this.mode, "media") || (pi(this.$el) || B(this.$el, "tabindex", "0"), !this.cls && gt(this.$el, "a") && B(this.$el, "role", "button"));
      },
      observe: Pi({ targets: ({ target: t }) => t }),
      events: [
        {
          name: ne,
          filter: ({ mode: t }) => _(t, "hover"),
          handler(t) {
            this._preventClick = null, !(!oe(t) || jt(this._showState) || this.$el.disabled) && (F(this.$el, "focus"), mt(
              document,
              ne,
              () => F(this.$el, "blur"),
              !0,
              (e) => !this.$el.contains(e.target)
            ), _(this.mode, "click") && (this._preventClick = !0));
          }
        },
        {
          // mouseenter mouseleave are added because of Firefox bug,
          // where pointerleave is triggered immediately after pointerenter on scroll
          name: `mouseenter mouseleave ${De} ${on} focus blur`,
          filter: ({ mode: t }) => _(t, "hover"),
          handler(t) {
            if (oe(t) || this.$el.disabled)
              return;
            const e = _(["mouseenter", De, "focus"], t.type), n = this.isToggled(this.target);
            if (!e && (!jt(this._showState) || t.type !== "blur" && tt(this.$el, ":focus") || t.type === "blur" && tt(this.$el, ":hover"))) {
              n === this._showState && (this._showState = null);
              return;
            }
            e && jt(this._showState) && n !== this._showState || (this._showState = e ? n : null, this.toggle(`toggle${e ? "show" : "hide"}`));
          }
        },
        {
          name: "keydown",
          filter: ({ $el: t, mode: e }) => _(e, "click") && !gt(t, "input"),
          handler(t) {
            t.keyCode === Jf && (t.preventDefault(), this.$el.click());
          }
        },
        {
          name: "click",
          filter: ({ mode: t }) => ["click", "hover"].some((e) => _(t, e)),
          handler(t) {
            let e;
            (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && tt(this.target, e.hash))) && t.preventDefault(), !this._preventClick && _(this.mode, "click") && this.toggle();
          }
        },
        {
          name: "mediachange",
          filter: ({ mode: t }) => _(t, "media"),
          el: ({ target: t }) => t,
          handler(t, e) {
            e.matches ^ this.isToggled(this.target) && this.toggle();
          }
        }
      ],
      methods: {
        async toggle(t) {
          if (!F(this.target, t || "toggle", [this]))
            return;
          if (we(this.$el, "aria-expanded") && B(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
            return this.toggleElement(this.target);
          const e = this.target.filter((o) => z(o, this.clsLeave));
          if (e.length) {
            for (const o of this.target) {
              const l = _(e, o);
              this.toggleElement(o, l, l);
            }
            return;
          }
          const n = this.target.filter(this.isToggled);
          await this.toggleElement(n, !1) && await this.toggleElement(
            this.target.filter((o) => !_(n, o)),
            !0
          );
        }
      }
    }, Gf = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Accordion: Ma,
      Alert: md,
      Close: df,
      Cover: bd,
      Drop: za,
      DropParentIcon: Ve,
      Dropdown: za,
      Dropnav: qa,
      FormCustom: Ed,
      Grid: _d,
      HeightMatch: Ad,
      HeightPlaceholder: Id,
      HeightViewport: Bd,
      Icon: oo,
      Img: $f,
      Inverse: _f,
      Leader: Cf,
      Margin: Br,
      Marker: ff,
      Modal: Af,
      Nav: Rf,
      NavParentIcon: lf,
      Navbar: If,
      NavbarParentIcon: Ve,
      NavbarToggleIcon: hf,
      Offcanvas: Nf,
      OverflowAuto: Lf,
      OverlayIcon: Ve,
      PaginationNext: mf,
      PaginationPrevious: gf,
      Responsive: Mf,
      Scroll: jf,
      Scrollspy: Hf,
      ScrollspyNav: qf,
      SearchIcon: cf,
      SlidenavNext: Za,
      SlidenavPrevious: Za,
      Spinner: uf,
      Sticky: Wf,
      Svg: nf,
      Switcher: ol,
      Tab: Vf,
      Toggle: Kf,
      Totop: pf,
      Video: ja
    });
    return en(Gf, (t, e) => Yt.component(e, t)), cd(Yt), en(ld, (t, e) => Yt.component(e, t)), Yt;
  });
})(jl);
var Up = jl.exports;
const Ul = /* @__PURE__ */ jp(Up);
function zl(i, s) {
  return function() {
    return i.apply(s, arguments);
  };
}
const { toString: zp } = Object.prototype, { getPrototypeOf: jo } = Object, ss = /* @__PURE__ */ ((i) => (s) => {
  const r = zp.call(s);
  return i[r] || (i[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), le = (i) => (i = i.toLowerCase(), (s) => ss(s) === i), os = (i) => (s) => typeof s === i, { isArray: wn } = Array, ti = os("undefined");
function Hp(i) {
  return i !== null && !ti(i) && i.constructor !== null && !ti(i.constructor) && Qt(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const Hl = le("ArrayBuffer");
function qp(i) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(i) : s = i && i.buffer && Hl(i.buffer), s;
}
const Wp = os("string"), Qt = os("function"), ql = os("number"), rs = (i) => i !== null && typeof i == "object", Vp = (i) => i === !0 || i === !1, Ji = (i) => {
  if (ss(i) !== "object")
    return !1;
  const s = jo(i);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
}, Jp = le("Date"), Kp = le("File"), Gp = le("Blob"), Xp = le("FileList"), Yp = (i) => rs(i) && Qt(i.pipe), Qp = (i) => {
  let s;
  return i && (typeof FormData == "function" && i instanceof FormData || Qt(i.append) && ((s = ss(i)) === "formdata" || // detect form-data instance
  s === "object" && Qt(i.toString) && i.toString() === "[object FormData]"));
}, Zp = le("URLSearchParams"), [tm, em, nm, im] = ["ReadableStream", "Request", "Response", "Headers"].map(le), sm = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ii(i, s, { allOwnKeys: r = !1 } = {}) {
  if (i === null || typeof i > "u")
    return;
  let a, u;
  if (typeof i != "object" && (i = [i]), wn(i))
    for (a = 0, u = i.length; a < u; a++)
      s.call(null, i[a], a, i);
  else {
    const h = r ? Object.getOwnPropertyNames(i) : Object.keys(i), f = h.length;
    let g;
    for (a = 0; a < f; a++)
      g = h[a], s.call(null, i[g], g, i);
  }
}
function Wl(i, s) {
  s = s.toLowerCase();
  const r = Object.keys(i);
  let a = r.length, u;
  for (; a-- > 0; )
    if (u = r[a], s === u.toLowerCase())
      return u;
  return null;
}
const Ge = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Vl = (i) => !ti(i) && i !== Ge;
function Eo() {
  const { caseless: i } = Vl(this) && this || {}, s = {}, r = (a, u) => {
    const h = i && Wl(s, u) || u;
    Ji(s[h]) && Ji(a) ? s[h] = Eo(s[h], a) : Ji(a) ? s[h] = Eo({}, a) : wn(a) ? s[h] = a.slice() : s[h] = a;
  };
  for (let a = 0, u = arguments.length; a < u; a++)
    arguments[a] && ii(arguments[a], r);
  return s;
}
const om = (i, s, r, { allOwnKeys: a } = {}) => (ii(s, (u, h) => {
  r && Qt(u) ? i[h] = zl(u, r) : i[h] = u;
}, { allOwnKeys: a }), i), rm = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i), am = (i, s, r, a) => {
  i.prototype = Object.create(s.prototype, a), i.prototype.constructor = i, Object.defineProperty(i, "super", {
    value: s.prototype
  }), r && Object.assign(i.prototype, r);
}, lm = (i, s, r, a) => {
  let u, h, f;
  const g = {};
  if (s = s || {}, i == null) return s;
  do {
    for (u = Object.getOwnPropertyNames(i), h = u.length; h-- > 0; )
      f = u[h], (!a || a(f, i, s)) && !g[f] && (s[f] = i[f], g[f] = !0);
    i = r !== !1 && jo(i);
  } while (i && (!r || r(i, s)) && i !== Object.prototype);
  return s;
}, cm = (i, s, r) => {
  i = String(i), (r === void 0 || r > i.length) && (r = i.length), r -= s.length;
  const a = i.indexOf(s, r);
  return a !== -1 && a === r;
}, um = (i) => {
  if (!i) return null;
  if (wn(i)) return i;
  let s = i.length;
  if (!ql(s)) return null;
  const r = new Array(s);
  for (; s-- > 0; )
    r[s] = i[s];
  return r;
}, hm = /* @__PURE__ */ ((i) => (s) => i && s instanceof i)(typeof Uint8Array < "u" && jo(Uint8Array)), dm = (i, s) => {
  const r = (i && i[Symbol.iterator]).call(i);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const u = a.value;
    s.call(i, u[0], u[1]);
  }
}, fm = (i, s) => {
  let r;
  const a = [];
  for (; (r = i.exec(s)) !== null; )
    a.push(r);
  return a;
}, pm = le("HTMLFormElement"), mm = (i) => i.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, r, a) {
    return r.toUpperCase() + a;
  }
), ul = (({ hasOwnProperty: i }) => (s, r) => i.call(s, r))(Object.prototype), gm = le("RegExp"), Jl = (i, s) => {
  const r = Object.getOwnPropertyDescriptors(i), a = {};
  ii(r, (u, h) => {
    let f;
    (f = s(u, h, i)) !== !1 && (a[h] = f || u);
  }), Object.defineProperties(i, a);
}, vm = (i) => {
  Jl(i, (s, r) => {
    if (Qt(i) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const a = i[r];
    if (Qt(a)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, bm = (i, s) => {
  const r = {}, a = (u) => {
    u.forEach((h) => {
      r[h] = !0;
    });
  };
  return wn(i) ? a(i) : a(String(i).split(s)), r;
}, wm = () => {
}, ym = (i, s) => i != null && Number.isFinite(i = +i) ? i : s, go = "abcdefghijklmnopqrstuvwxyz", hl = "0123456789", Kl = {
  DIGIT: hl,
  ALPHA: go,
  ALPHA_DIGIT: go + go.toUpperCase() + hl
}, $m = (i = 16, s = Kl.ALPHA_DIGIT) => {
  let r = "";
  const { length: a } = s;
  for (; i--; )
    r += s[Math.random() * a | 0];
  return r;
};
function km(i) {
  return !!(i && Qt(i.append) && i[Symbol.toStringTag] === "FormData" && i[Symbol.iterator]);
}
const xm = (i) => {
  const s = new Array(10), r = (a, u) => {
    if (rs(a)) {
      if (s.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        s[u] = a;
        const h = wn(a) ? [] : {};
        return ii(a, (f, g) => {
          const k = r(f, u + 1);
          !ti(k) && (h[g] = k);
        }), s[u] = void 0, h;
      }
    }
    return a;
  };
  return r(i, 0);
}, Sm = le("AsyncFunction"), Em = (i) => i && (rs(i) || Qt(i)) && Qt(i.then) && Qt(i.catch), Gl = ((i, s) => i ? setImmediate : s ? ((r, a) => (Ge.addEventListener("message", ({ source: u, data: h }) => {
  u === Ge && h === r && a.length && a.shift()();
}, !1), (u) => {
  a.push(u), Ge.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Qt(Ge.postMessage)
), _m = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ge) : typeof process < "u" && process.nextTick || Gl, x = {
  isArray: wn,
  isArrayBuffer: Hl,
  isBuffer: Hp,
  isFormData: Qp,
  isArrayBufferView: qp,
  isString: Wp,
  isNumber: ql,
  isBoolean: Vp,
  isObject: rs,
  isPlainObject: Ji,
  isReadableStream: tm,
  isRequest: em,
  isResponse: nm,
  isHeaders: im,
  isUndefined: ti,
  isDate: Jp,
  isFile: Kp,
  isBlob: Gp,
  isRegExp: gm,
  isFunction: Qt,
  isStream: Yp,
  isURLSearchParams: Zp,
  isTypedArray: hm,
  isFileList: Xp,
  forEach: ii,
  merge: Eo,
  extend: om,
  trim: sm,
  stripBOM: rm,
  inherits: am,
  toFlatObject: lm,
  kindOf: ss,
  kindOfTest: le,
  endsWith: cm,
  toArray: um,
  forEachEntry: dm,
  matchAll: fm,
  isHTMLForm: pm,
  hasOwnProperty: ul,
  hasOwnProp: ul,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Jl,
  freezeMethods: vm,
  toObjectSet: bm,
  toCamelCase: mm,
  noop: wm,
  toFiniteNumber: ym,
  findKey: Wl,
  global: Ge,
  isContextDefined: Vl,
  ALPHABET: Kl,
  generateString: $m,
  isSpecCompliantForm: km,
  toJSONObject: xm,
  isAsyncFn: Sm,
  isThenable: Em,
  setImmediate: Gl,
  asap: _m
};
function V(i, s, r, a, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = i, this.name = "AxiosError", s && (this.code = s), r && (this.config = r), a && (this.request = a), u && (this.response = u, this.status = u.status ? u.status : null);
}
x.inherits(V, Error, {
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
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Xl = V.prototype, Yl = {};
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
  Yl[i] = { value: i };
});
Object.defineProperties(V, Yl);
Object.defineProperty(Xl, "isAxiosError", { value: !0 });
V.from = (i, s, r, a, u, h) => {
  const f = Object.create(Xl);
  return x.toFlatObject(i, f, function(g) {
    return g !== Error.prototype;
  }, (g) => g !== "isAxiosError"), V.call(f, i.message, s, r, a, u), f.cause = i, f.name = i.name, h && Object.assign(f, h), f;
};
const Om = null;
function _o(i) {
  return x.isPlainObject(i) || x.isArray(i);
}
function Ql(i) {
  return x.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function dl(i, s, r) {
  return i ? i.concat(s).map(function(a, u) {
    return a = Ql(a), !r && u ? "[" + a + "]" : a;
  }).join(r ? "." : "") : s;
}
function Tm(i) {
  return x.isArray(i) && !i.some(_o);
}
const Cm = x.toFlatObject(x, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function as(i, s, r) {
  if (!x.isObject(i))
    throw new TypeError("target must be an object");
  s = s || new FormData(), r = x.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, T) {
    return !x.isUndefined(T[P]);
  });
  const a = r.metaTokens, u = r.visitor || v, h = r.dots, f = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(s);
  if (!x.isFunction(u))
    throw new TypeError("visitor must be a function");
  function k(P) {
    if (P === null) return "";
    if (x.isDate(P))
      return P.toISOString();
    if (!g && x.isBlob(P))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(P) || x.isTypedArray(P) ? g && typeof Blob == "function" ? new Blob([P]) : Buffer.from(P) : P;
  }
  function v(P, T, O) {
    let M = P;
    if (P && !O && typeof P == "object") {
      if (x.endsWith(T, "{}"))
        T = a ? T : T.slice(0, -2), P = JSON.stringify(P);
      else if (x.isArray(P) && Tm(P) || (x.isFileList(P) || x.endsWith(T, "[]")) && (M = x.toArray(P)))
        return T = Ql(T), M.forEach(function(U, j) {
          !(x.isUndefined(U) || U === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? dl([T], j, h) : f === null ? T : T + "[]",
            k(U)
          );
        }), !1;
    }
    return _o(P) ? !0 : (s.append(dl(O, T, h), k(P)), !1);
  }
  const b = [], A = Object.assign(Cm, {
    defaultVisitor: v,
    convertValue: k,
    isVisitable: _o
  });
  function _(P, T) {
    if (!x.isUndefined(P)) {
      if (b.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      b.push(P), x.forEach(P, function(O, M) {
        (!(x.isUndefined(O) || O === null) && u.call(
          s,
          O,
          x.isString(M) ? M.trim() : M,
          T,
          A
        )) === !0 && _(O, T ? T.concat(M) : [M]);
      }), b.pop();
    }
  }
  if (!x.isObject(i))
    throw new TypeError("data must be an object");
  return _(i), s;
}
function fl(i) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function(r) {
    return s[r];
  });
}
function Uo(i, s) {
  this._pairs = [], i && as(i, this, s);
}
const Zl = Uo.prototype;
Zl.append = function(i, s) {
  this._pairs.push([i, s]);
};
Zl.toString = function(i) {
  const s = i ? function(r) {
    return i.call(this, r, fl);
  } : fl;
  return this._pairs.map(function(r) {
    return s(r[0]) + "=" + s(r[1]);
  }, "").join("&");
};
function Am(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function tc(i, s, r) {
  if (!s)
    return i;
  const a = r && r.encode || Am, u = r && r.serialize;
  let h;
  if (u ? h = u(s, r) : h = x.isURLSearchParams(s) ? s.toString() : new Uo(s, r).toString(a), h) {
    const f = i.indexOf("#");
    f !== -1 && (i = i.slice(0, f)), i += (i.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return i;
}
let pl = class {
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
  use(s, r, a) {
    return this.handlers.push({
      fulfilled: s,
      rejected: r,
      synchronous: a ? a.synchronous : !1,
      runWhen: a ? a.runWhen : null
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
    x.forEach(this.handlers, function(r) {
      r !== null && s(r);
    });
  }
};
const ec = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Pm = typeof URLSearchParams < "u" ? URLSearchParams : Uo, Rm = typeof FormData < "u" ? FormData : null, Im = typeof Blob < "u" ? Blob : null, Bm = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Pm,
    FormData: Rm,
    Blob: Im
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, zo = typeof window < "u" && typeof document < "u", Oo = typeof navigator == "object" && navigator || void 0, Nm = zo && (!Oo || ["ReactNative", "NativeScript", "NS"].indexOf(Oo.product) < 0), Dm = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Fm = zo && window.location.href || "http://localhost", Lm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: zo,
  hasStandardBrowserEnv: Nm,
  hasStandardBrowserWebWorkerEnv: Dm,
  navigator: Oo,
  origin: Fm
}, Symbol.toStringTag, { value: "Module" })), qt = {
  ...Lm,
  ...Bm
};
function Mm(i, s) {
  return as(i, new qt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, a, u, h) {
      return qt.isNode && x.isBuffer(r) ? (this.append(a, r.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function jm(i) {
  return x.matchAll(/\w+|\[(\w*)]/g, i).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function Um(i) {
  const s = {}, r = Object.keys(i);
  let a;
  const u = r.length;
  let h;
  for (a = 0; a < u; a++)
    h = r[a], s[h] = i[h];
  return s;
}
function nc(i) {
  function s(r, a, u, h) {
    let f = r[h++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f), k = h >= r.length;
    return f = !f && x.isArray(u) ? u.length : f, k ? (x.hasOwnProp(u, f) ? u[f] = [u[f], a] : u[f] = a, !g) : ((!u[f] || !x.isObject(u[f])) && (u[f] = []), s(r, a, u[f], h) && x.isArray(u[f]) && (u[f] = Um(u[f])), !g);
  }
  if (x.isFormData(i) && x.isFunction(i.entries)) {
    const r = {};
    return x.forEachEntry(i, (a, u) => {
      s(jm(a), u, r, 0);
    }), r;
  }
  return null;
}
function zm(i, s, r) {
  if (x.isString(i))
    try {
      return (s || JSON.parse)(i), x.trim(i);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (0, JSON.stringify)(i);
}
const si = {
  transitional: ec,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, s) {
    const r = s.getContentType() || "", a = r.indexOf("application/json") > -1, u = x.isObject(i);
    if (u && x.isHTMLForm(i) && (i = new FormData(i)), x.isFormData(i))
      return a ? JSON.stringify(nc(i)) : i;
    if (x.isArrayBuffer(i) || x.isBuffer(i) || x.isStream(i) || x.isFile(i) || x.isBlob(i) || x.isReadableStream(i))
      return i;
    if (x.isArrayBufferView(i))
      return i.buffer;
    if (x.isURLSearchParams(i))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let h;
    if (u) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Mm(i, this.formSerializer).toString();
      if ((h = x.isFileList(i)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return as(
          h ? { "files[]": i } : i,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return u || a ? (s.setContentType("application/json", !1), zm(i)) : i;
  }],
  transformResponse: [function(i) {
    const s = this.transitional || si.transitional, r = s && s.forcedJSONParsing, a = this.responseType === "json";
    if (x.isResponse(i) || x.isReadableStream(i))
      return i;
    if (i && x.isString(i) && (r && !this.responseType || a)) {
      const u = !(s && s.silentJSONParsing) && a;
      try {
        return JSON.parse(i);
      } catch (h) {
        if (u)
          throw h.name === "SyntaxError" ? V.from(h, V.ERR_BAD_RESPONSE, this, null, this.response) : h;
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
    FormData: qt.classes.FormData,
    Blob: qt.classes.Blob
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
x.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  si.headers[i] = {};
});
const Hm = x.toObjectSet([
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
]), qm = (i) => {
  const s = {};
  let r, a, u;
  return i && i.split(`
`).forEach(function(h) {
    u = h.indexOf(":"), r = h.substring(0, u).trim().toLowerCase(), a = h.substring(u + 1).trim(), !(!r || s[r] && Hm[r]) && (r === "set-cookie" ? s[r] ? s[r].push(a) : s[r] = [a] : s[r] = s[r] ? s[r] + ", " + a : a);
  }), s;
}, ml = Symbol("internals");
function Yn(i) {
  return i && String(i).trim().toLowerCase();
}
function Ki(i) {
  return i === !1 || i == null ? i : x.isArray(i) ? i.map(Ki) : String(i);
}
function Wm(i) {
  const s = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = r.exec(i); )
    s[a[1]] = a[2];
  return s;
}
const Vm = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function vo(i, s, r, a, u) {
  if (x.isFunction(a))
    return a.call(this, s, r);
  if (u && (s = r), !!x.isString(s)) {
    if (x.isString(a))
      return s.indexOf(a) !== -1;
    if (x.isRegExp(a))
      return a.test(s);
  }
}
function Jm(i) {
  return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, r, a) => r.toUpperCase() + a);
}
function Km(i, s) {
  const r = x.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(i, a + r, {
      value: function(u, h, f) {
        return this[a].call(this, s, u, h, f);
      },
      configurable: !0
    });
  });
}
let Wt = class {
  constructor(s) {
    s && this.set(s);
  }
  set(s, r, a) {
    const u = this;
    function h(g, k, v) {
      const b = Yn(k);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const A = x.findKey(u, b);
      (!A || u[A] === void 0 || v === !0 || v === void 0 && u[A] !== !1) && (u[A || k] = Ki(g));
    }
    const f = (g, k) => x.forEach(g, (v, b) => h(v, b, k));
    if (x.isPlainObject(s) || s instanceof this.constructor)
      f(s, r);
    else if (x.isString(s) && (s = s.trim()) && !Vm(s))
      f(qm(s), r);
    else if (x.isHeaders(s))
      for (const [g, k] of s.entries())
        h(k, g, a);
    else
      s != null && h(r, s, a);
    return this;
  }
  get(s, r) {
    if (s = Yn(s), s) {
      const a = x.findKey(this, s);
      if (a) {
        const u = this[a];
        if (!r)
          return u;
        if (r === !0)
          return Wm(u);
        if (x.isFunction(r))
          return r.call(this, u, a);
        if (x.isRegExp(r))
          return r.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, r) {
    if (s = Yn(s), s) {
      const a = x.findKey(this, s);
      return !!(a && this[a] !== void 0 && (!r || vo(this, this[a], a, r)));
    }
    return !1;
  }
  delete(s, r) {
    const a = this;
    let u = !1;
    function h(f) {
      if (f = Yn(f), f) {
        const g = x.findKey(a, f);
        g && (!r || vo(a, a[g], g, r)) && (delete a[g], u = !0);
      }
    }
    return x.isArray(s) ? s.forEach(h) : h(s), u;
  }
  clear(s) {
    const r = Object.keys(this);
    let a = r.length, u = !1;
    for (; a--; ) {
      const h = r[a];
      (!s || vo(this, this[h], h, s, !0)) && (delete this[h], u = !0);
    }
    return u;
  }
  normalize(s) {
    const r = this, a = {};
    return x.forEach(this, (u, h) => {
      const f = x.findKey(a, h);
      if (f) {
        r[f] = Ki(u), delete r[h];
        return;
      }
      const g = s ? Jm(h) : String(h).trim();
      g !== h && delete r[h], r[g] = Ki(u), a[g] = !0;
    }), this;
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const r = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (a, u) => {
      a != null && a !== !1 && (r[u] = s && x.isArray(a) ? a.join(", ") : a);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, r]) => s + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...r) {
    const a = new this(s);
    return r.forEach((u) => a.set(u)), a;
  }
  static accessor(s) {
    const r = (this[ml] = this[ml] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function u(h) {
      const f = Yn(h);
      r[f] || (Km(a, h), r[f] = !0);
    }
    return x.isArray(s) ? s.forEach(u) : u(s), this;
  }
};
Wt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(Wt.prototype, ({ value: i }, s) => {
  let r = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => i,
    set(a) {
      this[r] = a;
    }
  };
});
x.freezeMethods(Wt);
function bo(i, s) {
  const r = this || si, a = s || r, u = Wt.from(a.headers);
  let h = a.data;
  return x.forEach(i, function(f) {
    h = f.call(r, h, u.normalize(), s ? s.status : void 0);
  }), u.normalize(), h;
}
function ic(i) {
  return !!(i && i.__CANCEL__);
}
function yn(i, s, r) {
  V.call(this, i ?? "canceled", V.ERR_CANCELED, s, r), this.name = "CanceledError";
}
x.inherits(yn, V, {
  __CANCEL__: !0
});
function sc(i, s, r) {
  const a = r.config.validateStatus;
  !r.status || !a || a(r.status) ? i(r) : s(new V(
    "Request failed with status code " + r.status,
    [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Gm(i) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return s && s[1] || "";
}
function Xm(i, s) {
  i = i || 10;
  const r = new Array(i), a = new Array(i);
  let u = 0, h = 0, f;
  return s = s !== void 0 ? s : 1e3, function(g) {
    const k = Date.now(), v = a[h];
    f || (f = k), r[u] = g, a[u] = k;
    let b = h, A = 0;
    for (; b !== u; )
      A += r[b++], b = b % i;
    if (u = (u + 1) % i, u === h && (h = (h + 1) % i), k - f < s)
      return;
    const _ = v && k - v;
    return _ ? Math.round(A * 1e3 / _) : void 0;
  };
}
function Ym(i, s) {
  let r = 0, a = 1e3 / s, u, h;
  const f = (g, k = Date.now()) => {
    r = k, u = null, h && (clearTimeout(h), h = null), i.apply(null, g);
  };
  return [(...g) => {
    const k = Date.now(), v = k - r;
    v >= a ? f(g, k) : (u = g, h || (h = setTimeout(() => {
      h = null, f(u);
    }, a - v)));
  }, () => u && f(u)];
}
const Yi = (i, s, r = 3) => {
  let a = 0;
  const u = Xm(50, 250);
  return Ym((h) => {
    const f = h.loaded, g = h.lengthComputable ? h.total : void 0, k = f - a, v = u(k), b = f <= g;
    a = f;
    const A = {
      loaded: f,
      total: g,
      progress: g ? f / g : void 0,
      bytes: k,
      rate: v || void 0,
      estimated: v && g && b ? (g - f) / v : void 0,
      event: h,
      lengthComputable: g != null,
      [s ? "download" : "upload"]: !0
    };
    i(A);
  }, r);
}, gl = (i, s) => {
  const r = i != null;
  return [(a) => s[0]({
    lengthComputable: r,
    total: i,
    loaded: a
  }), s[1]];
}, vl = (i) => (...s) => x.asap(() => i(...s)), Qm = qt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const i = qt.navigator && /(msie|trident)/i.test(qt.navigator.userAgent), s = document.createElement("a");
    let r;
    function a(u) {
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
    return r = a(window.location.href), function(u) {
      const h = x.isString(u) ? a(u) : u;
      return h.protocol === r.protocol && h.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Zm = qt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(i, s, r, a, u, h) {
      const f = [i + "=" + encodeURIComponent(s)];
      x.isNumber(r) && f.push("expires=" + new Date(r).toGMTString()), x.isString(a) && f.push("path=" + a), x.isString(u) && f.push("domain=" + u), h === !0 && f.push("secure"), document.cookie = f.join("; ");
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
function tg(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function eg(i, s) {
  return s ? i.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : i;
}
function oc(i, s) {
  return i && !tg(s) ? eg(i, s) : s;
}
const bl = (i) => i instanceof Wt ? { ...i } : i;
function Ze(i, s) {
  s = s || {};
  const r = {};
  function a(v, b, A) {
    return x.isPlainObject(v) && x.isPlainObject(b) ? x.merge.call({ caseless: A }, v, b) : x.isPlainObject(b) ? x.merge({}, b) : x.isArray(b) ? b.slice() : b;
  }
  function u(v, b, A) {
    if (x.isUndefined(b)) {
      if (!x.isUndefined(v))
        return a(void 0, v, A);
    } else return a(v, b, A);
  }
  function h(v, b) {
    if (!x.isUndefined(b))
      return a(void 0, b);
  }
  function f(v, b) {
    if (x.isUndefined(b)) {
      if (!x.isUndefined(v))
        return a(void 0, v);
    } else return a(void 0, b);
  }
  function g(v, b, A) {
    if (A in s)
      return a(v, b);
    if (A in i)
      return a(void 0, v);
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
    headers: (v, b) => u(bl(v), bl(b), !0)
  };
  return x.forEach(Object.keys(Object.assign({}, i, s)), function(v) {
    const b = k[v] || u, A = b(i[v], s[v], v);
    x.isUndefined(A) && b !== g || (r[v] = A);
  }), r;
}
const rc = (i) => {
  const s = Ze({}, i);
  let { data: r, withXSRFToken: a, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = s;
  s.headers = f = Wt.from(f), s.url = tc(oc(s.baseURL, s.url), i.params, i.paramsSerializer), g && f.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let k;
  if (x.isFormData(r)) {
    if (qt.hasStandardBrowserEnv || qt.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if ((k = f.getContentType()) !== !1) {
      const [v, ...b] = k ? k.split(";").map((A) => A.trim()).filter(Boolean) : [];
      f.setContentType([v || "multipart/form-data", ...b].join("; "));
    }
  }
  if (qt.hasStandardBrowserEnv && (a && x.isFunction(a) && (a = a(s)), a || a !== !1 && Qm(s.url))) {
    const v = u && h && Zm.read(h);
    v && f.set(u, v);
  }
  return s;
}, ng = typeof XMLHttpRequest < "u", ig = ng && function(i) {
  return new Promise(function(s, r) {
    const a = rc(i);
    let u = a.data;
    const h = Wt.from(a.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: k } = a, v, b, A, _, P;
    function T() {
      _ && _(), P && P(), a.cancelToken && a.cancelToken.unsubscribe(v), a.signal && a.signal.removeEventListener("abort", v);
    }
    let O = new XMLHttpRequest();
    O.open(a.method.toUpperCase(), a.url, !0), O.timeout = a.timeout;
    function M() {
      if (!O)
        return;
      const j = Wt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), X = {
        data: !f || f === "text" || f === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: j,
        config: i,
        request: O
      };
      sc(function(Ct) {
        s(Ct), T();
      }, function(Ct) {
        r(Ct), T();
      }, X), O = null;
    }
    "onloadend" in O ? O.onloadend = M : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(M);
    }, O.onabort = function() {
      O && (r(new V("Request aborted", V.ECONNABORTED, i, O)), O = null);
    }, O.onerror = function() {
      r(new V("Network Error", V.ERR_NETWORK, i, O)), O = null;
    }, O.ontimeout = function() {
      let j = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const X = a.transitional || ec;
      a.timeoutErrorMessage && (j = a.timeoutErrorMessage), r(new V(
        j,
        X.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        i,
        O
      )), O = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in O && x.forEach(h.toJSON(), function(j, X) {
      O.setRequestHeader(X, j);
    }), x.isUndefined(a.withCredentials) || (O.withCredentials = !!a.withCredentials), f && f !== "json" && (O.responseType = a.responseType), k && ([A, P] = Yi(k, !0), O.addEventListener("progress", A)), g && O.upload && ([b, _] = Yi(g), O.upload.addEventListener("progress", b), O.upload.addEventListener("loadend", _)), (a.cancelToken || a.signal) && (v = (j) => {
      O && (r(!j || j.type ? new yn(null, i, O) : j), O.abort(), O = null);
    }, a.cancelToken && a.cancelToken.subscribe(v), a.signal && (a.signal.aborted ? v() : a.signal.addEventListener("abort", v)));
    const U = Gm(a.url);
    if (U && qt.protocols.indexOf(U) === -1) {
      r(new V("Unsupported protocol " + U + ":", V.ERR_BAD_REQUEST, i));
      return;
    }
    O.send(u || null);
  });
}, sg = (i, s) => {
  const { length: r } = i = i ? i.filter(Boolean) : [];
  if (s || r) {
    let a = new AbortController(), u;
    const h = function(v) {
      if (!u) {
        u = !0, g();
        const b = v instanceof Error ? v : this.reason;
        a.abort(b instanceof V ? b : new yn(b instanceof Error ? b.message : b));
      }
    };
    let f = s && setTimeout(() => {
      f = null, h(new V(`timeout ${s} of ms exceeded`, V.ETIMEDOUT));
    }, s);
    const g = () => {
      i && (f && clearTimeout(f), f = null, i.forEach((v) => {
        v.unsubscribe ? v.unsubscribe(h) : v.removeEventListener("abort", h);
      }), i = null);
    };
    i.forEach((v) => v.addEventListener("abort", h));
    const { signal: k } = a;
    return k.unsubscribe = () => x.asap(g), k;
  }
}, og = function* (i, s) {
  let r = i.byteLength;
  if (r < s) {
    yield i;
    return;
  }
  let a = 0, u;
  for (; a < r; )
    u = a + s, yield i.slice(a, u), a = u;
}, rg = async function* (i, s) {
  for await (const r of ag(i))
    yield* og(r, s);
}, ag = async function* (i) {
  if (i[Symbol.asyncIterator]) {
    yield* i;
    return;
  }
  const s = i.getReader();
  try {
    for (; ; ) {
      const { done: r, value: a } = await s.read();
      if (r)
        break;
      yield a;
    }
  } finally {
    await s.cancel();
  }
}, wl = (i, s, r, a) => {
  const u = rg(i, s);
  let h = 0, f, g = (k) => {
    f || (f = !0, a && a(k));
  };
  return new ReadableStream({
    async pull(k) {
      try {
        const { done: v, value: b } = await u.next();
        if (v) {
          g(), k.close();
          return;
        }
        let A = b.byteLength;
        if (r) {
          let _ = h += A;
          r(_);
        }
        k.enqueue(new Uint8Array(b));
      } catch (v) {
        throw g(v), v;
      }
    },
    cancel(k) {
      return g(k), u.return();
    }
  }, {
    highWaterMark: 2
  });
}, ls = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ac = ls && typeof ReadableStream == "function", lg = ls && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((i) => (s) => i.encode(s))(new TextEncoder()) : async (i) => new Uint8Array(await new Response(i).arrayBuffer())), lc = (i, ...s) => {
  try {
    return !!i(...s);
  } catch {
    return !1;
  }
}, cg = ac && lc(() => {
  let i = !1;
  const s = new Request(qt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return i = !0, "half";
    }
  }).headers.has("Content-Type");
  return i && !s;
}), yl = 64 * 1024, To = ac && lc(() => x.isReadableStream(new Response("").body)), Qi = {
  stream: To && ((i) => i.body)
};
ls && ((i) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !Qi[s] && (Qi[s] = x.isFunction(i[s]) ? (r) => r[s]() : (r, a) => {
      throw new V(`Response type '${s}' is not supported`, V.ERR_NOT_SUPPORT, a);
    });
  });
})(new Response());
const ug = async (i) => {
  if (i == null)
    return 0;
  if (x.isBlob(i))
    return i.size;
  if (x.isSpecCompliantForm(i))
    return (await new Request(qt.origin, {
      method: "POST",
      body: i
    }).arrayBuffer()).byteLength;
  if (x.isArrayBufferView(i) || x.isArrayBuffer(i))
    return i.byteLength;
  if (x.isURLSearchParams(i) && (i = i + ""), x.isString(i))
    return (await lg(i)).byteLength;
}, hg = async (i, s) => x.toFiniteNumber(i.getContentLength()) ?? ug(s), dg = ls && (async (i) => {
  let {
    url: s,
    method: r,
    data: a,
    signal: u,
    cancelToken: h,
    timeout: f,
    onDownloadProgress: g,
    onUploadProgress: k,
    responseType: v,
    headers: b,
    withCredentials: A = "same-origin",
    fetchOptions: _
  } = rc(i);
  v = v ? (v + "").toLowerCase() : "text";
  let P = sg([u, h && h.toAbortSignal()], f), T;
  const O = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let M;
  try {
    if (k && cg && r !== "get" && r !== "head" && (M = await hg(b, a)) !== 0) {
      let Nt = new Request(s, {
        method: "POST",
        body: a,
        duplex: "half"
      }), wt;
      if (x.isFormData(a) && (wt = Nt.headers.get("content-type")) && b.setContentType(wt), Nt.body) {
        const [Dt, te] = gl(
          M,
          Yi(vl(k))
        );
        a = wl(Nt.body, yl, Dt, te);
      }
    }
    x.isString(A) || (A = A ? "include" : "omit");
    const U = "credentials" in Request.prototype;
    T = new Request(s, {
      ..._,
      signal: P,
      method: r.toUpperCase(),
      headers: b.normalize().toJSON(),
      body: a,
      duplex: "half",
      credentials: U ? A : void 0
    });
    let j = await fetch(T);
    const X = To && (v === "stream" || v === "response");
    if (To && (g || X && O)) {
      const Nt = {};
      ["status", "statusText", "headers"].forEach((jt) => {
        Nt[jt] = j[jt];
      });
      const wt = x.toFiniteNumber(j.headers.get("content-length")), [Dt, te] = g && gl(
        wt,
        Yi(vl(g), !0)
      ) || [];
      j = new Response(
        wl(j.body, yl, Dt, () => {
          te && te(), O && O();
        }),
        Nt
      );
    }
    v = v || "text";
    let Ct = await Qi[x.findKey(Qi, v) || "text"](j, i);
    return !X && O && O(), await new Promise((Nt, wt) => {
      sc(Nt, wt, {
        data: Ct,
        headers: Wt.from(j.headers),
        status: j.status,
        statusText: j.statusText,
        config: i,
        request: T
      });
    });
  } catch (U) {
    throw O && O(), U && U.name === "TypeError" && /fetch/i.test(U.message) ? Object.assign(
      new V("Network Error", V.ERR_NETWORK, i, T),
      {
        cause: U.cause || U
      }
    ) : V.from(U, U && U.code, i, T);
  }
}), Co = {
  http: Om,
  xhr: ig,
  fetch: dg
};
x.forEach(Co, (i, s) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: s });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: s });
  }
});
const $l = (i) => `- ${i}`, fg = (i) => x.isFunction(i) || i === null || i === !1, cc = {
  getAdapter: (i) => {
    i = x.isArray(i) ? i : [i];
    const { length: s } = i;
    let r, a;
    const u = {};
    for (let h = 0; h < s; h++) {
      r = i[h];
      let f;
      if (a = r, !fg(r) && (a = Co[(f = String(r)).toLowerCase()], a === void 0))
        throw new V(`Unknown adapter '${f}'`);
      if (a)
        break;
      u[f || "#" + h] = a;
    }
    if (!a) {
      const h = Object.entries(u).map(
        ([g, k]) => `adapter ${g} ` + (k === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let f = s ? h.length > 1 ? `since :
` + h.map($l).join(`
`) : " " + $l(h[0]) : "as no adapter specified";
      throw new V(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return a;
  },
  adapters: Co
};
function wo(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new yn(null, i);
}
function kl(i) {
  return wo(i), i.headers = Wt.from(i.headers), i.data = bo.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), cc.getAdapter(i.adapter || si.adapter)(i).then(function(s) {
    return wo(i), s.data = bo.call(
      i,
      i.transformResponse,
      s
    ), s.headers = Wt.from(s.headers), s;
  }, function(s) {
    return ic(s) || (wo(i), s && s.response && (s.response.data = bo.call(
      i,
      i.transformResponse,
      s.response
    ), s.response.headers = Wt.from(s.response.headers))), Promise.reject(s);
  });
}
const uc = "1.7.7", Ho = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, s) => {
  Ho[i] = function(r) {
    return typeof r === i || "a" + (s < 1 ? "n " : " ") + i;
  };
});
const xl = {};
Ho.transitional = function(i, s, r) {
  function a(u, h) {
    return "[Axios v" + uc + "] Transitional option '" + u + "'" + h + (r ? ". " + r : "");
  }
  return (u, h, f) => {
    if (i === !1)
      throw new V(
        a(h, " has been removed" + (s ? " in " + s : "")),
        V.ERR_DEPRECATED
      );
    return s && !xl[h] && (xl[h] = !0, console.warn(
      a(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), i ? i(u, h, f) : !0;
  };
};
function pg(i, s, r) {
  if (typeof i != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(i);
  let u = a.length;
  for (; u-- > 0; ) {
    const h = a[u], f = s[h];
    if (f) {
      const g = i[h], k = g === void 0 || f(g, h, i);
      if (k !== !0)
        throw new V("option " + h + " must be " + k, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new V("Unknown option " + h, V.ERR_BAD_OPTION);
  }
}
const Ao = {
  assertOptions: pg,
  validators: Ho
}, Oe = Ao.validators;
let Ye = class {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new pl(),
      response: new pl()
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
  async request(s, r) {
    try {
      return await this._request(s, r);
    } catch (a) {
      if (a instanceof Error) {
        let u;
        Error.captureStackTrace ? Error.captureStackTrace(u = {}) : u = new Error();
        const h = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          a.stack ? h && !String(a.stack).endsWith(h.replace(/^.+\n.+\n/, "")) && (a.stack += `
` + h) : a.stack = h;
        } catch {
        }
      }
      throw a;
    }
  }
  _request(s, r) {
    typeof s == "string" ? (r = r || {}, r.url = s) : r = s || {}, r = Ze(this.defaults, r);
    const { transitional: a, paramsSerializer: u, headers: h } = r;
    a !== void 0 && Ao.assertOptions(a, {
      silentJSONParsing: Oe.transitional(Oe.boolean),
      forcedJSONParsing: Oe.transitional(Oe.boolean),
      clarifyTimeoutError: Oe.transitional(Oe.boolean)
    }, !1), u != null && (x.isFunction(u) ? r.paramsSerializer = {
      serialize: u
    } : Ao.assertOptions(u, {
      encode: Oe.function,
      serialize: Oe.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let f = h && x.merge(
      h.common,
      h[r.method]
    );
    h && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (T) => {
        delete h[T];
      }
    ), r.headers = Wt.concat(f, h);
    const g = [];
    let k = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(r) === !1 || (k = k && T.synchronous, g.unshift(T.fulfilled, T.rejected));
    });
    const v = [];
    this.interceptors.response.forEach(function(T) {
      v.push(T.fulfilled, T.rejected);
    });
    let b, A = 0, _;
    if (!k) {
      const T = [kl.bind(this), void 0];
      for (T.unshift.apply(T, g), T.push.apply(T, v), _ = T.length, b = Promise.resolve(r); A < _; )
        b = b.then(T[A++], T[A++]);
      return b;
    }
    _ = g.length;
    let P = r;
    for (A = 0; A < _; ) {
      const T = g[A++], O = g[A++];
      try {
        P = T(P);
      } catch (M) {
        O.call(this, M);
        break;
      }
    }
    try {
      b = kl.call(this, P);
    } catch (T) {
      return Promise.reject(T);
    }
    for (A = 0, _ = v.length; A < _; )
      b = b.then(v[A++], v[A++]);
    return b;
  }
  getUri(s) {
    s = Ze(this.defaults, s);
    const r = oc(s.baseURL, s.url);
    return tc(r, s.params, s.paramsSerializer);
  }
};
x.forEach(["delete", "get", "head", "options"], function(i) {
  Ye.prototype[i] = function(s, r) {
    return this.request(Ze(r || {}, {
      method: i,
      url: s,
      data: (r || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(i) {
  function s(r) {
    return function(a, u, h) {
      return this.request(Ze(h || {}, {
        method: i,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: u
      }));
    };
  }
  Ye.prototype[i] = s(), Ye.prototype[i + "Form"] = s(!0);
});
let mg = class hc {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(u) {
      r = u;
    });
    const a = this;
    this.promise.then((u) => {
      if (!a._listeners) return;
      let h = a._listeners.length;
      for (; h-- > 0; )
        a._listeners[h](u);
      a._listeners = null;
    }), this.promise.then = (u) => {
      let h;
      const f = new Promise((g) => {
        a.subscribe(g), h = g;
      }).then(u);
      return f.cancel = function() {
        a.unsubscribe(h);
      }, f;
    }, s(function(u, h, f) {
      a.reason || (a.reason = new yn(u, h, f), r(a.reason));
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
    const r = this._listeners.indexOf(s);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const s = new AbortController(), r = (a) => {
      s.abort(a);
    };
    return this.subscribe(r), s.signal.unsubscribe = () => this.unsubscribe(r), s.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let s;
    return {
      token: new hc(function(r) {
        s = r;
      }),
      cancel: s
    };
  }
};
function gg(i) {
  return function(s) {
    return i.apply(null, s);
  };
}
function vg(i) {
  return x.isObject(i) && i.isAxiosError === !0;
}
const Po = {
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
Object.entries(Po).forEach(([i, s]) => {
  Po[s] = i;
});
function dc(i) {
  const s = new Ye(i), r = zl(Ye.prototype.request, s);
  return x.extend(r, Ye.prototype, s, { allOwnKeys: !0 }), x.extend(r, s, null, { allOwnKeys: !0 }), r.create = function(a) {
    return dc(Ze(i, a));
  }, r;
}
const ft = dc(si);
ft.Axios = Ye;
ft.CanceledError = yn;
ft.CancelToken = mg;
ft.isCancel = ic;
ft.VERSION = uc;
ft.toFormData = as;
ft.AxiosError = V;
ft.Cancel = ft.CanceledError;
ft.all = function(i) {
  return Promise.all(i);
};
ft.spread = gg;
ft.isAxiosError = vg;
ft.mergeConfig = Ze;
ft.AxiosHeaders = Wt;
ft.formToJSON = (i) => nc(x.isHTMLForm(i) ? new FormData(i) : i);
ft.getAdapter = cc.getAdapter;
ft.HttpStatusCode = Po;
ft.default = ft;
var be = /* @__PURE__ */ ((i) => (i.Primary = "Primary", i.Success = "Success", i.Warning = "Warning", i.Danger = "Danger", i))(be || {});
const bg = Ml("auth", {
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
      return ft.post("/account/login", i).then((s) => (this.setUser(s.data), this.user)).catch((s) => {
        throw {
          description: "An error as occurred",
          style: be.Danger,
          closeBtn: !0,
          ...s.response.data
        };
      });
    },
    async check() {
      return ft.get("/account/auth-check").then((i) => (this.setUser(i.data.user), this.user)).catch((i) => {
        throw this.unsetUser(), {
          description: "An error as occurred",
          style: be.Danger,
          closeBtn: !0,
          ...i.response.data
        };
      });
    },
    async logout() {
      return this.unsetUser(), ft.get("/account/logout").catch((i) => {
        throw {
          description: "An error as occurred",
          style: be.Danger,
          closeBtn: !0,
          ...i.response.data
        };
      });
    }
  }
}), wg = { class: "uk-fieldset" }, yg = { class: "uk-margin" }, $g = { class: "uk-inline uk-width-1-1" }, kg = { class: "uk-margin" }, xg = { class: "uk-inline uk-width-1-1" }, Sg = { class: "uk-text-center" }, Eg = ["disabled"], qo = /* @__PURE__ */ vt({
  __name: "FormLogin",
  setup(i) {
    const s = Ae(!1), r = Ae();
    let a = {
      user_name: "",
      password: ""
    };
    async function u() {
      s.value = !0, r.value = null, await bg().login(a).then((f) => {
        Ul.notification({
          message: "Welcome back " + (f == null ? void 0 : f.full_name) + "!",
          status: "success",
          pos: "bottom-right",
          timeout: 4e3
        });
      }).catch((f) => {
        r.value = f;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (h, f) => {
      const g = Mt("UFAlertContainer");
      return D(), q("form", {
        onSubmit: f[2] || (f[2] = ns((k) => u(), ["prevent"]))
      }, [
        C("fieldset", wg, [
          r.value ? (D(), St(g, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : ut("", !0),
          C("div", yg, [
            C("div", $g, [
              f[3] || (f[3] = C("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: user"
              }, null, -1)),
              se(C("input", {
                class: "uk-input",
                type: "text",
                placeholder: "Username",
                "aria-label": "Username",
                "data-test": "username",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => lt(a).user_name = k)
              }, null, 512), [
                [re, lt(a).user_name]
              ])
            ])
          ]),
          C("div", kg, [
            C("div", xg, [
              f[4] || (f[4] = C("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: lock"
              }, null, -1)),
              se(C("input", {
                class: "uk-input",
                type: "password",
                placeholder: "Password",
                "aria-label": "Password",
                "data-test": "password",
                "onUpdate:modelValue": f[1] || (f[1] = (k) => lt(a).password = k)
              }, null, 512), [
                [re, lt(a).password]
              ])
            ])
          ]),
          C("div", Sg, [
            C("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Login ", 8, Eg)
          ])
        ])
      ], 32);
    };
  }
});
function fc(i, s) {
  return function() {
    return i.apply(s, arguments);
  };
}
const { toString: _g } = Object.prototype, { getPrototypeOf: Wo } = Object, cs = /* @__PURE__ */ ((i) => (s) => {
  const r = _g.call(s);
  return i[r] || (i[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ce = (i) => (i = i.toLowerCase(), (s) => cs(s) === i), us = (i) => (s) => typeof s === i, { isArray: $n } = Array, ei = us("undefined");
function Og(i) {
  return i !== null && !ei(i) && i.constructor !== null && !ei(i.constructor) && Zt(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const pc = ce("ArrayBuffer");
function Tg(i) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(i) : s = i && i.buffer && pc(i.buffer), s;
}
const Cg = us("string"), Zt = us("function"), mc = us("number"), hs = (i) => i !== null && typeof i == "object", Ag = (i) => i === !0 || i === !1, Gi = (i) => {
  if (cs(i) !== "object")
    return !1;
  const s = Wo(i);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
}, Pg = ce("Date"), Rg = ce("File"), Ig = ce("Blob"), Bg = ce("FileList"), Ng = (i) => hs(i) && Zt(i.pipe), Dg = (i) => {
  let s;
  return i && (typeof FormData == "function" && i instanceof FormData || Zt(i.append) && ((s = cs(i)) === "formdata" || // detect form-data instance
  s === "object" && Zt(i.toString) && i.toString() === "[object FormData]"));
}, Fg = ce("URLSearchParams"), [Lg, Mg, jg, Ug] = ["ReadableStream", "Request", "Response", "Headers"].map(ce), zg = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function oi(i, s, { allOwnKeys: r = !1 } = {}) {
  if (i === null || typeof i > "u")
    return;
  let a, u;
  if (typeof i != "object" && (i = [i]), $n(i))
    for (a = 0, u = i.length; a < u; a++)
      s.call(null, i[a], a, i);
  else {
    const h = r ? Object.getOwnPropertyNames(i) : Object.keys(i), f = h.length;
    let g;
    for (a = 0; a < f; a++)
      g = h[a], s.call(null, i[g], g, i);
  }
}
function gc(i, s) {
  s = s.toLowerCase();
  const r = Object.keys(i);
  let a = r.length, u;
  for (; a-- > 0; )
    if (u = r[a], s === u.toLowerCase())
      return u;
  return null;
}
const Xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, vc = (i) => !ei(i) && i !== Xe;
function Ro() {
  const { caseless: i } = vc(this) && this || {}, s = {}, r = (a, u) => {
    const h = i && gc(s, u) || u;
    Gi(s[h]) && Gi(a) ? s[h] = Ro(s[h], a) : Gi(a) ? s[h] = Ro({}, a) : $n(a) ? s[h] = a.slice() : s[h] = a;
  };
  for (let a = 0, u = arguments.length; a < u; a++)
    arguments[a] && oi(arguments[a], r);
  return s;
}
const Hg = (i, s, r, { allOwnKeys: a } = {}) => (oi(s, (u, h) => {
  r && Zt(u) ? i[h] = fc(u, r) : i[h] = u;
}, { allOwnKeys: a }), i), qg = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i), Wg = (i, s, r, a) => {
  i.prototype = Object.create(s.prototype, a), i.prototype.constructor = i, Object.defineProperty(i, "super", {
    value: s.prototype
  }), r && Object.assign(i.prototype, r);
}, Vg = (i, s, r, a) => {
  let u, h, f;
  const g = {};
  if (s = s || {}, i == null) return s;
  do {
    for (u = Object.getOwnPropertyNames(i), h = u.length; h-- > 0; )
      f = u[h], (!a || a(f, i, s)) && !g[f] && (s[f] = i[f], g[f] = !0);
    i = r !== !1 && Wo(i);
  } while (i && (!r || r(i, s)) && i !== Object.prototype);
  return s;
}, Jg = (i, s, r) => {
  i = String(i), (r === void 0 || r > i.length) && (r = i.length), r -= s.length;
  const a = i.indexOf(s, r);
  return a !== -1 && a === r;
}, Kg = (i) => {
  if (!i) return null;
  if ($n(i)) return i;
  let s = i.length;
  if (!mc(s)) return null;
  const r = new Array(s);
  for (; s-- > 0; )
    r[s] = i[s];
  return r;
}, Gg = /* @__PURE__ */ ((i) => (s) => i && s instanceof i)(typeof Uint8Array < "u" && Wo(Uint8Array)), Xg = (i, s) => {
  const r = (i && i[Symbol.iterator]).call(i);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const u = a.value;
    s.call(i, u[0], u[1]);
  }
}, Yg = (i, s) => {
  let r;
  const a = [];
  for (; (r = i.exec(s)) !== null; )
    a.push(r);
  return a;
}, Qg = ce("HTMLFormElement"), Zg = (i) => i.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, r, a) {
    return r.toUpperCase() + a;
  }
), Sl = (({ hasOwnProperty: i }) => (s, r) => i.call(s, r))(Object.prototype), tv = ce("RegExp"), bc = (i, s) => {
  const r = Object.getOwnPropertyDescriptors(i), a = {};
  oi(r, (u, h) => {
    let f;
    (f = s(u, h, i)) !== !1 && (a[h] = f || u);
  }), Object.defineProperties(i, a);
}, ev = (i) => {
  bc(i, (s, r) => {
    if (Zt(i) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const a = i[r];
    if (Zt(a)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, nv = (i, s) => {
  const r = {}, a = (u) => {
    u.forEach((h) => {
      r[h] = !0;
    });
  };
  return $n(i) ? a(i) : a(String(i).split(s)), r;
}, iv = () => {
}, sv = (i, s) => i != null && Number.isFinite(i = +i) ? i : s, yo = "abcdefghijklmnopqrstuvwxyz", El = "0123456789", wc = {
  DIGIT: El,
  ALPHA: yo,
  ALPHA_DIGIT: yo + yo.toUpperCase() + El
}, ov = (i = 16, s = wc.ALPHA_DIGIT) => {
  let r = "";
  const { length: a } = s;
  for (; i--; )
    r += s[Math.random() * a | 0];
  return r;
};
function rv(i) {
  return !!(i && Zt(i.append) && i[Symbol.toStringTag] === "FormData" && i[Symbol.iterator]);
}
const av = (i) => {
  const s = new Array(10), r = (a, u) => {
    if (hs(a)) {
      if (s.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        s[u] = a;
        const h = $n(a) ? [] : {};
        return oi(a, (f, g) => {
          const k = r(f, u + 1);
          !ei(k) && (h[g] = k);
        }), s[u] = void 0, h;
      }
    }
    return a;
  };
  return r(i, 0);
}, lv = ce("AsyncFunction"), cv = (i) => i && (hs(i) || Zt(i)) && Zt(i.then) && Zt(i.catch), yc = ((i, s) => i ? setImmediate : s ? ((r, a) => (Xe.addEventListener("message", ({ source: u, data: h }) => {
  u === Xe && h === r && a.length && a.shift()();
}, !1), (u) => {
  a.push(u), Xe.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Zt(Xe.postMessage)
), uv = typeof queueMicrotask < "u" ? queueMicrotask.bind(Xe) : typeof process < "u" && process.nextTick || yc, S = {
  isArray: $n,
  isArrayBuffer: pc,
  isBuffer: Og,
  isFormData: Dg,
  isArrayBufferView: Tg,
  isString: Cg,
  isNumber: mc,
  isBoolean: Ag,
  isObject: hs,
  isPlainObject: Gi,
  isReadableStream: Lg,
  isRequest: Mg,
  isResponse: jg,
  isHeaders: Ug,
  isUndefined: ei,
  isDate: Pg,
  isFile: Rg,
  isBlob: Ig,
  isRegExp: tv,
  isFunction: Zt,
  isStream: Ng,
  isURLSearchParams: Fg,
  isTypedArray: Gg,
  isFileList: Bg,
  forEach: oi,
  merge: Ro,
  extend: Hg,
  trim: zg,
  stripBOM: qg,
  inherits: Wg,
  toFlatObject: Vg,
  kindOf: cs,
  kindOfTest: ce,
  endsWith: Jg,
  toArray: Kg,
  forEachEntry: Xg,
  matchAll: Yg,
  isHTMLForm: Qg,
  hasOwnProperty: Sl,
  hasOwnProp: Sl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: bc,
  freezeMethods: ev,
  toObjectSet: nv,
  toCamelCase: Zg,
  noop: iv,
  toFiniteNumber: sv,
  findKey: gc,
  global: Xe,
  isContextDefined: vc,
  ALPHABET: wc,
  generateString: ov,
  isSpecCompliantForm: rv,
  toJSONObject: av,
  isAsyncFn: lv,
  isThenable: cv,
  setImmediate: yc,
  asap: uv
};
function J(i, s, r, a, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = i, this.name = "AxiosError", s && (this.code = s), r && (this.config = r), a && (this.request = a), u && (this.response = u);
}
S.inherits(J, Error, {
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
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const $c = J.prototype, kc = {};
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
  kc[i] = { value: i };
});
Object.defineProperties(J, kc);
Object.defineProperty($c, "isAxiosError", { value: !0 });
J.from = (i, s, r, a, u, h) => {
  const f = Object.create($c);
  return S.toFlatObject(i, f, function(g) {
    return g !== Error.prototype;
  }, (g) => g !== "isAxiosError"), J.call(f, i.message, s, r, a, u), f.cause = i, f.name = i.name, h && Object.assign(f, h), f;
};
const hv = null;
function Io(i) {
  return S.isPlainObject(i) || S.isArray(i);
}
function xc(i) {
  return S.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function _l(i, s, r) {
  return i ? i.concat(s).map(function(a, u) {
    return a = xc(a), !r && u ? "[" + a + "]" : a;
  }).join(r ? "." : "") : s;
}
function dv(i) {
  return S.isArray(i) && !i.some(Io);
}
const fv = S.toFlatObject(S, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function ds(i, s, r) {
  if (!S.isObject(i))
    throw new TypeError("target must be an object");
  s = s || new FormData(), r = S.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, T) {
    return !S.isUndefined(T[P]);
  });
  const a = r.metaTokens, u = r.visitor || v, h = r.dots, f = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(s);
  if (!S.isFunction(u))
    throw new TypeError("visitor must be a function");
  function k(P) {
    if (P === null) return "";
    if (S.isDate(P))
      return P.toISOString();
    if (!g && S.isBlob(P))
      throw new J("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(P) || S.isTypedArray(P) ? g && typeof Blob == "function" ? new Blob([P]) : Buffer.from(P) : P;
  }
  function v(P, T, O) {
    let M = P;
    if (P && !O && typeof P == "object") {
      if (S.endsWith(T, "{}"))
        T = a ? T : T.slice(0, -2), P = JSON.stringify(P);
      else if (S.isArray(P) && dv(P) || (S.isFileList(P) || S.endsWith(T, "[]")) && (M = S.toArray(P)))
        return T = xc(T), M.forEach(function(U, j) {
          !(S.isUndefined(U) || U === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? _l([T], j, h) : f === null ? T : T + "[]",
            k(U)
          );
        }), !1;
    }
    return Io(P) ? !0 : (s.append(_l(O, T, h), k(P)), !1);
  }
  const b = [], A = Object.assign(fv, {
    defaultVisitor: v,
    convertValue: k,
    isVisitable: Io
  });
  function _(P, T) {
    if (!S.isUndefined(P)) {
      if (b.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      b.push(P), S.forEach(P, function(O, M) {
        (!(S.isUndefined(O) || O === null) && u.call(
          s,
          O,
          S.isString(M) ? M.trim() : M,
          T,
          A
        )) === !0 && _(O, T ? T.concat(M) : [M]);
      }), b.pop();
    }
  }
  if (!S.isObject(i))
    throw new TypeError("data must be an object");
  return _(i), s;
}
function Ol(i) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function(r) {
    return s[r];
  });
}
function Vo(i, s) {
  this._pairs = [], i && ds(i, this, s);
}
const Sc = Vo.prototype;
Sc.append = function(i, s) {
  this._pairs.push([i, s]);
};
Sc.toString = function(i) {
  const s = i ? function(r) {
    return i.call(this, r, Ol);
  } : Ol;
  return this._pairs.map(function(r) {
    return s(r[0]) + "=" + s(r[1]);
  }, "").join("&");
};
function pv(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ec(i, s, r) {
  if (!s)
    return i;
  const a = r && r.encode || pv, u = r && r.serialize;
  let h;
  if (u ? h = u(s, r) : h = S.isURLSearchParams(s) ? s.toString() : new Vo(s, r).toString(a), h) {
    const f = i.indexOf("#");
    f !== -1 && (i = i.slice(0, f)), i += (i.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return i;
}
class Tl {
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
  use(s, r, a) {
    return this.handlers.push({
      fulfilled: s,
      rejected: r,
      synchronous: a ? a.synchronous : !1,
      runWhen: a ? a.runWhen : null
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
    S.forEach(this.handlers, function(r) {
      r !== null && s(r);
    });
  }
}
const _c = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, mv = typeof URLSearchParams < "u" ? URLSearchParams : Vo, gv = typeof FormData < "u" ? FormData : null, vv = typeof Blob < "u" ? Blob : null, bv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: mv,
    FormData: gv,
    Blob: vv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Jo = typeof window < "u" && typeof document < "u", wv = ((i) => Jo && ["ReactNative", "NativeScript", "NS"].indexOf(i) < 0)(typeof navigator < "u" && navigator.product), yv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", $v = Jo && window.location.href || "http://localhost", kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Jo,
  hasStandardBrowserEnv: wv,
  hasStandardBrowserWebWorkerEnv: yv,
  origin: $v
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...kv,
  ...bv
};
function xv(i, s) {
  return ds(i, new ae.classes.URLSearchParams(), Object.assign({
    visitor: function(r, a, u, h) {
      return ae.isNode && S.isBuffer(r) ? (this.append(a, r.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function Sv(i) {
  return S.matchAll(/\w+|\[(\w*)]/g, i).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function Ev(i) {
  const s = {}, r = Object.keys(i);
  let a;
  const u = r.length;
  let h;
  for (a = 0; a < u; a++)
    h = r[a], s[h] = i[h];
  return s;
}
function Oc(i) {
  function s(r, a, u, h) {
    let f = r[h++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f), k = h >= r.length;
    return f = !f && S.isArray(u) ? u.length : f, k ? (S.hasOwnProp(u, f) ? u[f] = [u[f], a] : u[f] = a, !g) : ((!u[f] || !S.isObject(u[f])) && (u[f] = []), s(r, a, u[f], h) && S.isArray(u[f]) && (u[f] = Ev(u[f])), !g);
  }
  if (S.isFormData(i) && S.isFunction(i.entries)) {
    const r = {};
    return S.forEachEntry(i, (a, u) => {
      s(Sv(a), u, r, 0);
    }), r;
  }
  return null;
}
function _v(i, s, r) {
  if (S.isString(i))
    try {
      return (s || JSON.parse)(i), S.trim(i);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (0, JSON.stringify)(i);
}
const ri = {
  transitional: _c,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, s) {
    const r = s.getContentType() || "", a = r.indexOf("application/json") > -1, u = S.isObject(i);
    if (u && S.isHTMLForm(i) && (i = new FormData(i)), S.isFormData(i))
      return a ? JSON.stringify(Oc(i)) : i;
    if (S.isArrayBuffer(i) || S.isBuffer(i) || S.isStream(i) || S.isFile(i) || S.isBlob(i) || S.isReadableStream(i))
      return i;
    if (S.isArrayBufferView(i))
      return i.buffer;
    if (S.isURLSearchParams(i))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let h;
    if (u) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return xv(i, this.formSerializer).toString();
      if ((h = S.isFileList(i)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ds(
          h ? { "files[]": i } : i,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return u || a ? (s.setContentType("application/json", !1), _v(i)) : i;
  }],
  transformResponse: [function(i) {
    const s = this.transitional || ri.transitional, r = s && s.forcedJSONParsing, a = this.responseType === "json";
    if (S.isResponse(i) || S.isReadableStream(i))
      return i;
    if (i && S.isString(i) && (r && !this.responseType || a)) {
      const u = !(s && s.silentJSONParsing) && a;
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
    FormData: ae.classes.FormData,
    Blob: ae.classes.Blob
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
S.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  ri.headers[i] = {};
});
const Ov = S.toObjectSet([
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
]), Tv = (i) => {
  const s = {};
  let r, a, u;
  return i && i.split(`
`).forEach(function(h) {
    u = h.indexOf(":"), r = h.substring(0, u).trim().toLowerCase(), a = h.substring(u + 1).trim(), !(!r || s[r] && Ov[r]) && (r === "set-cookie" ? s[r] ? s[r].push(a) : s[r] = [a] : s[r] = s[r] ? s[r] + ", " + a : a);
  }), s;
}, Cl = Symbol("internals");
function Qn(i) {
  return i && String(i).trim().toLowerCase();
}
function Xi(i) {
  return i === !1 || i == null ? i : S.isArray(i) ? i.map(Xi) : String(i);
}
function Cv(i) {
  const s = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = r.exec(i); )
    s[a[1]] = a[2];
  return s;
}
const Av = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function $o(i, s, r, a, u) {
  if (S.isFunction(a))
    return a.call(this, s, r);
  if (u && (s = r), !!S.isString(s)) {
    if (S.isString(a))
      return s.indexOf(a) !== -1;
    if (S.isRegExp(a))
      return a.test(s);
  }
}
function Pv(i) {
  return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, r, a) => r.toUpperCase() + a);
}
function Rv(i, s) {
  const r = S.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(i, a + r, {
      value: function(u, h, f) {
        return this[a].call(this, s, u, h, f);
      },
      configurable: !0
    });
  });
}
class Vt {
  constructor(s) {
    s && this.set(s);
  }
  set(s, r, a) {
    const u = this;
    function h(g, k, v) {
      const b = Qn(k);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const A = S.findKey(u, b);
      (!A || u[A] === void 0 || v === !0 || v === void 0 && u[A] !== !1) && (u[A || k] = Xi(g));
    }
    const f = (g, k) => S.forEach(g, (v, b) => h(v, b, k));
    if (S.isPlainObject(s) || s instanceof this.constructor)
      f(s, r);
    else if (S.isString(s) && (s = s.trim()) && !Av(s))
      f(Tv(s), r);
    else if (S.isHeaders(s))
      for (const [g, k] of s.entries())
        h(k, g, a);
    else
      s != null && h(r, s, a);
    return this;
  }
  get(s, r) {
    if (s = Qn(s), s) {
      const a = S.findKey(this, s);
      if (a) {
        const u = this[a];
        if (!r)
          return u;
        if (r === !0)
          return Cv(u);
        if (S.isFunction(r))
          return r.call(this, u, a);
        if (S.isRegExp(r))
          return r.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, r) {
    if (s = Qn(s), s) {
      const a = S.findKey(this, s);
      return !!(a && this[a] !== void 0 && (!r || $o(this, this[a], a, r)));
    }
    return !1;
  }
  delete(s, r) {
    const a = this;
    let u = !1;
    function h(f) {
      if (f = Qn(f), f) {
        const g = S.findKey(a, f);
        g && (!r || $o(a, a[g], g, r)) && (delete a[g], u = !0);
      }
    }
    return S.isArray(s) ? s.forEach(h) : h(s), u;
  }
  clear(s) {
    const r = Object.keys(this);
    let a = r.length, u = !1;
    for (; a--; ) {
      const h = r[a];
      (!s || $o(this, this[h], h, s, !0)) && (delete this[h], u = !0);
    }
    return u;
  }
  normalize(s) {
    const r = this, a = {};
    return S.forEach(this, (u, h) => {
      const f = S.findKey(a, h);
      if (f) {
        r[f] = Xi(u), delete r[h];
        return;
      }
      const g = s ? Pv(h) : String(h).trim();
      g !== h && delete r[h], r[g] = Xi(u), a[g] = !0;
    }), this;
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const r = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (a, u) => {
      a != null && a !== !1 && (r[u] = s && S.isArray(a) ? a.join(", ") : a);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, r]) => s + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...r) {
    const a = new this(s);
    return r.forEach((u) => a.set(u)), a;
  }
  static accessor(s) {
    const r = (this[Cl] = this[Cl] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function u(h) {
      const f = Qn(h);
      r[f] || (Rv(a, h), r[f] = !0);
    }
    return S.isArray(s) ? s.forEach(u) : u(s), this;
  }
}
Vt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.reduceDescriptors(Vt.prototype, ({ value: i }, s) => {
  let r = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => i,
    set(a) {
      this[r] = a;
    }
  };
});
S.freezeMethods(Vt);
function ko(i, s) {
  const r = this || ri, a = s || r, u = Vt.from(a.headers);
  let h = a.data;
  return S.forEach(i, function(f) {
    h = f.call(r, h, u.normalize(), s ? s.status : void 0);
  }), u.normalize(), h;
}
function Tc(i) {
  return !!(i && i.__CANCEL__);
}
function kn(i, s, r) {
  J.call(this, i ?? "canceled", J.ERR_CANCELED, s, r), this.name = "CanceledError";
}
S.inherits(kn, J, {
  __CANCEL__: !0
});
function Cc(i, s, r) {
  const a = r.config.validateStatus;
  !r.status || !a || a(r.status) ? i(r) : s(new J(
    "Request failed with status code " + r.status,
    [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Iv(i) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return s && s[1] || "";
}
function Bv(i, s) {
  i = i || 10;
  const r = new Array(i), a = new Array(i);
  let u = 0, h = 0, f;
  return s = s !== void 0 ? s : 1e3, function(g) {
    const k = Date.now(), v = a[h];
    f || (f = k), r[u] = g, a[u] = k;
    let b = h, A = 0;
    for (; b !== u; )
      A += r[b++], b = b % i;
    if (u = (u + 1) % i, u === h && (h = (h + 1) % i), k - f < s)
      return;
    const _ = v && k - v;
    return _ ? Math.round(A * 1e3 / _) : void 0;
  };
}
function Nv(i, s) {
  let r = 0, a = 1e3 / s, u, h;
  const f = (g, k = Date.now()) => {
    r = k, u = null, h && (clearTimeout(h), h = null), i.apply(null, g);
  };
  return [(...g) => {
    const k = Date.now(), v = k - r;
    v >= a ? f(g, k) : (u = g, h || (h = setTimeout(() => {
      h = null, f(u);
    }, a - v)));
  }, () => u && f(u)];
}
const Zi = (i, s, r = 3) => {
  let a = 0;
  const u = Bv(50, 250);
  return Nv((h) => {
    const f = h.loaded, g = h.lengthComputable ? h.total : void 0, k = f - a, v = u(k), b = f <= g;
    a = f;
    const A = {
      loaded: f,
      total: g,
      progress: g ? f / g : void 0,
      bytes: k,
      rate: v || void 0,
      estimated: v && g && b ? (g - f) / v : void 0,
      event: h,
      lengthComputable: g != null,
      [s ? "download" : "upload"]: !0
    };
    i(A);
  }, r);
}, Al = (i, s) => {
  const r = i != null;
  return [(a) => s[0]({
    lengthComputable: r,
    total: i,
    loaded: a
  }), s[1]];
}, Pl = (i) => (...s) => S.asap(() => i(...s)), Dv = ae.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const i = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");
    let r;
    function a(u) {
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
    return r = a(window.location.href), function(u) {
      const h = S.isString(u) ? a(u) : u;
      return h.protocol === r.protocol && h.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Fv = ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(i, s, r, a, u, h) {
      const f = [i + "=" + encodeURIComponent(s)];
      S.isNumber(r) && f.push("expires=" + new Date(r).toGMTString()), S.isString(a) && f.push("path=" + a), S.isString(u) && f.push("domain=" + u), h === !0 && f.push("secure"), document.cookie = f.join("; ");
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
function Lv(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function Mv(i, s) {
  return s ? i.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : i;
}
function Ac(i, s) {
  return i && !Lv(s) ? Mv(i, s) : s;
}
const Rl = (i) => i instanceof Vt ? { ...i } : i;
function tn(i, s) {
  s = s || {};
  const r = {};
  function a(v, b, A) {
    return S.isPlainObject(v) && S.isPlainObject(b) ? S.merge.call({ caseless: A }, v, b) : S.isPlainObject(b) ? S.merge({}, b) : S.isArray(b) ? b.slice() : b;
  }
  function u(v, b, A) {
    if (S.isUndefined(b)) {
      if (!S.isUndefined(v))
        return a(void 0, v, A);
    } else return a(v, b, A);
  }
  function h(v, b) {
    if (!S.isUndefined(b))
      return a(void 0, b);
  }
  function f(v, b) {
    if (S.isUndefined(b)) {
      if (!S.isUndefined(v))
        return a(void 0, v);
    } else return a(void 0, b);
  }
  function g(v, b, A) {
    if (A in s)
      return a(v, b);
    if (A in i)
      return a(void 0, v);
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
    headers: (v, b) => u(Rl(v), Rl(b), !0)
  };
  return S.forEach(Object.keys(Object.assign({}, i, s)), function(v) {
    const b = k[v] || u, A = b(i[v], s[v], v);
    S.isUndefined(A) && b !== g || (r[v] = A);
  }), r;
}
const Pc = (i) => {
  const s = tn({}, i);
  let { data: r, withXSRFToken: a, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = s;
  s.headers = f = Vt.from(f), s.url = Ec(Ac(s.baseURL, s.url), i.params, i.paramsSerializer), g && f.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let k;
  if (S.isFormData(r)) {
    if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if ((k = f.getContentType()) !== !1) {
      const [v, ...b] = k ? k.split(";").map((A) => A.trim()).filter(Boolean) : [];
      f.setContentType([v || "multipart/form-data", ...b].join("; "));
    }
  }
  if (ae.hasStandardBrowserEnv && (a && S.isFunction(a) && (a = a(s)), a || a !== !1 && Dv(s.url))) {
    const v = u && h && Fv.read(h);
    v && f.set(u, v);
  }
  return s;
}, jv = typeof XMLHttpRequest < "u", Uv = jv && function(i) {
  return new Promise(function(s, r) {
    const a = Pc(i);
    let u = a.data;
    const h = Vt.from(a.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: k } = a, v, b, A, _, P;
    function T() {
      _ && _(), P && P(), a.cancelToken && a.cancelToken.unsubscribe(v), a.signal && a.signal.removeEventListener("abort", v);
    }
    let O = new XMLHttpRequest();
    O.open(a.method.toUpperCase(), a.url, !0), O.timeout = a.timeout;
    function M() {
      if (!O)
        return;
      const j = Vt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), X = {
        data: !f || f === "text" || f === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: j,
        config: i,
        request: O
      };
      Cc(function(Ct) {
        s(Ct), T();
      }, function(Ct) {
        r(Ct), T();
      }, X), O = null;
    }
    "onloadend" in O ? O.onloadend = M : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(M);
    }, O.onabort = function() {
      O && (r(new J("Request aborted", J.ECONNABORTED, i, O)), O = null);
    }, O.onerror = function() {
      r(new J("Network Error", J.ERR_NETWORK, i, O)), O = null;
    }, O.ontimeout = function() {
      let j = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const X = a.transitional || _c;
      a.timeoutErrorMessage && (j = a.timeoutErrorMessage), r(new J(
        j,
        X.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
        i,
        O
      )), O = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in O && S.forEach(h.toJSON(), function(j, X) {
      O.setRequestHeader(X, j);
    }), S.isUndefined(a.withCredentials) || (O.withCredentials = !!a.withCredentials), f && f !== "json" && (O.responseType = a.responseType), k && ([A, P] = Zi(k, !0), O.addEventListener("progress", A)), g && O.upload && ([b, _] = Zi(g), O.upload.addEventListener("progress", b), O.upload.addEventListener("loadend", _)), (a.cancelToken || a.signal) && (v = (j) => {
      O && (r(!j || j.type ? new kn(null, i, O) : j), O.abort(), O = null);
    }, a.cancelToken && a.cancelToken.subscribe(v), a.signal && (a.signal.aborted ? v() : a.signal.addEventListener("abort", v)));
    const U = Iv(a.url);
    if (U && ae.protocols.indexOf(U) === -1) {
      r(new J("Unsupported protocol " + U + ":", J.ERR_BAD_REQUEST, i));
      return;
    }
    O.send(u || null);
  });
}, zv = (i, s) => {
  let r = new AbortController(), a;
  const u = function(k) {
    if (!a) {
      a = !0, f();
      const v = k instanceof Error ? k : this.reason;
      r.abort(v instanceof J ? v : new kn(v instanceof Error ? v.message : v));
    }
  };
  let h = s && setTimeout(() => {
    u(new J(`timeout ${s} of ms exceeded`, J.ETIMEDOUT));
  }, s);
  const f = () => {
    i && (h && clearTimeout(h), h = null, i.forEach((k) => {
      k && (k.removeEventListener ? k.removeEventListener("abort", u) : k.unsubscribe(u));
    }), i = null);
  };
  i.forEach((k) => k && k.addEventListener && k.addEventListener("abort", u));
  const { signal: g } = r;
  return g.unsubscribe = f, [g, () => {
    h && clearTimeout(h), h = null;
  }];
}, Hv = function* (i, s) {
  let r = i.byteLength;
  if (r < s) {
    yield i;
    return;
  }
  let a = 0, u;
  for (; a < r; )
    u = a + s, yield i.slice(a, u), a = u;
}, qv = async function* (i, s, r) {
  for await (const a of i)
    yield* Hv(ArrayBuffer.isView(a) ? a : await r(String(a)), s);
}, Il = (i, s, r, a, u) => {
  const h = qv(i, s, u);
  let f = 0, g, k = (v) => {
    g || (g = !0, a && a(v));
  };
  return new ReadableStream({
    async pull(v) {
      try {
        const { done: b, value: A } = await h.next();
        if (b) {
          k(), v.close();
          return;
        }
        let _ = A.byteLength;
        if (r) {
          let P = f += _;
          r(P);
        }
        v.enqueue(new Uint8Array(A));
      } catch (b) {
        throw k(b), b;
      }
    },
    cancel(v) {
      return k(v), h.return();
    }
  }, {
    highWaterMark: 2
  });
}, fs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Rc = fs && typeof ReadableStream == "function", Bo = fs && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((i) => (s) => i.encode(s))(new TextEncoder()) : async (i) => new Uint8Array(await new Response(i).arrayBuffer())), Ic = (i, ...s) => {
  try {
    return !!i(...s);
  } catch {
    return !1;
  }
}, Wv = Rc && Ic(() => {
  let i = !1;
  const s = new Request(ae.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return i = !0, "half";
    }
  }).headers.has("Content-Type");
  return i && !s;
}), Bl = 64 * 1024, No = Rc && Ic(() => S.isReadableStream(new Response("").body)), ts = {
  stream: No && ((i) => i.body)
};
fs && ((i) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !ts[s] && (ts[s] = S.isFunction(i[s]) ? (r) => r[s]() : (r, a) => {
      throw new J(`Response type '${s}' is not supported`, J.ERR_NOT_SUPPORT, a);
    });
  });
})(new Response());
const Vv = async (i) => {
  if (i == null)
    return 0;
  if (S.isBlob(i))
    return i.size;
  if (S.isSpecCompliantForm(i))
    return (await new Request(i).arrayBuffer()).byteLength;
  if (S.isArrayBufferView(i) || S.isArrayBuffer(i))
    return i.byteLength;
  if (S.isURLSearchParams(i) && (i = i + ""), S.isString(i))
    return (await Bo(i)).byteLength;
}, Jv = async (i, s) => S.toFiniteNumber(i.getContentLength()) ?? Vv(s), Kv = fs && (async (i) => {
  let {
    url: s,
    method: r,
    data: a,
    signal: u,
    cancelToken: h,
    timeout: f,
    onDownloadProgress: g,
    onUploadProgress: k,
    responseType: v,
    headers: b,
    withCredentials: A = "same-origin",
    fetchOptions: _
  } = Pc(i);
  v = v ? (v + "").toLowerCase() : "text";
  let [P, T] = u || h || f ? zv([u, h], f) : [], O, M;
  const U = () => {
    !O && setTimeout(() => {
      P && P.unsubscribe();
    }), O = !0;
  };
  let j;
  try {
    if (k && Wv && r !== "get" && r !== "head" && (j = await Jv(b, a)) !== 0) {
      let wt = new Request(s, {
        method: "POST",
        body: a,
        duplex: "half"
      }), Dt;
      if (S.isFormData(a) && (Dt = wt.headers.get("content-type")) && b.setContentType(Dt), wt.body) {
        const [te, jt] = Al(
          j,
          Zi(Pl(k))
        );
        a = Il(wt.body, Bl, te, jt, Bo);
      }
    }
    S.isString(A) || (A = A ? "include" : "omit"), M = new Request(s, {
      ..._,
      signal: P,
      method: r.toUpperCase(),
      headers: b.normalize().toJSON(),
      body: a,
      duplex: "half",
      credentials: A
    });
    let X = await fetch(M);
    const Ct = No && (v === "stream" || v === "response");
    if (No && (g || Ct)) {
      const wt = {};
      ["status", "statusText", "headers"].forEach((ct) => {
        wt[ct] = X[ct];
      });
      const Dt = S.toFiniteNumber(X.headers.get("content-length")), [te, jt] = g && Al(
        Dt,
        Zi(Pl(g), !0)
      ) || [];
      X = new Response(
        Il(X.body, Bl, te, () => {
          jt && jt(), Ct && U();
        }, Bo),
        wt
      );
    }
    v = v || "text";
    let Nt = await ts[S.findKey(ts, v) || "text"](X, i);
    return !Ct && U(), T && T(), await new Promise((wt, Dt) => {
      Cc(wt, Dt, {
        data: Nt,
        headers: Vt.from(X.headers),
        status: X.status,
        statusText: X.statusText,
        config: i,
        request: M
      });
    });
  } catch (X) {
    throw U(), X && X.name === "TypeError" && /fetch/i.test(X.message) ? Object.assign(
      new J("Network Error", J.ERR_NETWORK, i, M),
      {
        cause: X.cause || X
      }
    ) : J.from(X, X && X.code, i, M);
  }
}), Do = {
  http: hv,
  xhr: Uv,
  fetch: Kv
};
S.forEach(Do, (i, s) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: s });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: s });
  }
});
const Nl = (i) => `- ${i}`, Gv = (i) => S.isFunction(i) || i === null || i === !1, Bc = {
  getAdapter: (i) => {
    i = S.isArray(i) ? i : [i];
    const { length: s } = i;
    let r, a;
    const u = {};
    for (let h = 0; h < s; h++) {
      r = i[h];
      let f;
      if (a = r, !Gv(r) && (a = Do[(f = String(r)).toLowerCase()], a === void 0))
        throw new J(`Unknown adapter '${f}'`);
      if (a)
        break;
      u[f || "#" + h] = a;
    }
    if (!a) {
      const h = Object.entries(u).map(
        ([g, k]) => `adapter ${g} ` + (k === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let f = s ? h.length > 1 ? `since :
` + h.map(Nl).join(`
`) : " " + Nl(h[0]) : "as no adapter specified";
      throw new J(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return a;
  },
  adapters: Do
};
function xo(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new kn(null, i);
}
function Dl(i) {
  return xo(i), i.headers = Vt.from(i.headers), i.data = ko.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), Bc.getAdapter(i.adapter || ri.adapter)(i).then(function(s) {
    return xo(i), s.data = ko.call(
      i,
      i.transformResponse,
      s
    ), s.headers = Vt.from(s.headers), s;
  }, function(s) {
    return Tc(s) || (xo(i), s && s.response && (s.response.data = ko.call(
      i,
      i.transformResponse,
      s.response
    ), s.response.headers = Vt.from(s.response.headers))), Promise.reject(s);
  });
}
const Nc = "1.7.3", Ko = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, s) => {
  Ko[i] = function(r) {
    return typeof r === i || "a" + (s < 1 ? "n " : " ") + i;
  };
});
const Fl = {};
Ko.transitional = function(i, s, r) {
  function a(u, h) {
    return "[Axios v" + Nc + "] Transitional option '" + u + "'" + h + (r ? ". " + r : "");
  }
  return (u, h, f) => {
    if (i === !1)
      throw new J(
        a(h, " has been removed" + (s ? " in " + s : "")),
        J.ERR_DEPRECATED
      );
    return s && !Fl[h] && (Fl[h] = !0, console.warn(
      a(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), i ? i(u, h, f) : !0;
  };
};
function Xv(i, s, r) {
  if (typeof i != "object")
    throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(i);
  let u = a.length;
  for (; u-- > 0; ) {
    const h = a[u], f = s[h];
    if (f) {
      const g = i[h], k = g === void 0 || f(g, h, i);
      if (k !== !0)
        throw new J("option " + h + " must be " + k, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new J("Unknown option " + h, J.ERR_BAD_OPTION);
  }
}
const Fo = {
  assertOptions: Xv,
  validators: Ko
}, Te = Fo.validators;
class Qe {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new Tl(),
      response: new Tl()
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
  async request(s, r) {
    try {
      return await this._request(s, r);
    } catch (a) {
      if (a instanceof Error) {
        let u;
        Error.captureStackTrace ? Error.captureStackTrace(u = {}) : u = new Error();
        const h = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          a.stack ? h && !String(a.stack).endsWith(h.replace(/^.+\n.+\n/, "")) && (a.stack += `
` + h) : a.stack = h;
        } catch {
        }
      }
      throw a;
    }
  }
  _request(s, r) {
    typeof s == "string" ? (r = r || {}, r.url = s) : r = s || {}, r = tn(this.defaults, r);
    const { transitional: a, paramsSerializer: u, headers: h } = r;
    a !== void 0 && Fo.assertOptions(a, {
      silentJSONParsing: Te.transitional(Te.boolean),
      forcedJSONParsing: Te.transitional(Te.boolean),
      clarifyTimeoutError: Te.transitional(Te.boolean)
    }, !1), u != null && (S.isFunction(u) ? r.paramsSerializer = {
      serialize: u
    } : Fo.assertOptions(u, {
      encode: Te.function,
      serialize: Te.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let f = h && S.merge(
      h.common,
      h[r.method]
    );
    h && S.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (T) => {
        delete h[T];
      }
    ), r.headers = Vt.concat(f, h);
    const g = [];
    let k = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(r) === !1 || (k = k && T.synchronous, g.unshift(T.fulfilled, T.rejected));
    });
    const v = [];
    this.interceptors.response.forEach(function(T) {
      v.push(T.fulfilled, T.rejected);
    });
    let b, A = 0, _;
    if (!k) {
      const T = [Dl.bind(this), void 0];
      for (T.unshift.apply(T, g), T.push.apply(T, v), _ = T.length, b = Promise.resolve(r); A < _; )
        b = b.then(T[A++], T[A++]);
      return b;
    }
    _ = g.length;
    let P = r;
    for (A = 0; A < _; ) {
      const T = g[A++], O = g[A++];
      try {
        P = T(P);
      } catch (M) {
        O.call(this, M);
        break;
      }
    }
    try {
      b = Dl.call(this, P);
    } catch (T) {
      return Promise.reject(T);
    }
    for (A = 0, _ = v.length; A < _; )
      b = b.then(v[A++], v[A++]);
    return b;
  }
  getUri(s) {
    s = tn(this.defaults, s);
    const r = Ac(s.baseURL, s.url);
    return Ec(r, s.params, s.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function(i) {
  Qe.prototype[i] = function(s, r) {
    return this.request(tn(r || {}, {
      method: i,
      url: s,
      data: (r || {}).data
    }));
  };
});
S.forEach(["post", "put", "patch"], function(i) {
  function s(r) {
    return function(a, u, h) {
      return this.request(tn(h || {}, {
        method: i,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: u
      }));
    };
  }
  Qe.prototype[i] = s(), Qe.prototype[i + "Form"] = s(!0);
});
class Go {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(u) {
      r = u;
    });
    const a = this;
    this.promise.then((u) => {
      if (!a._listeners) return;
      let h = a._listeners.length;
      for (; h-- > 0; )
        a._listeners[h](u);
      a._listeners = null;
    }), this.promise.then = (u) => {
      let h;
      const f = new Promise((g) => {
        a.subscribe(g), h = g;
      }).then(u);
      return f.cancel = function() {
        a.unsubscribe(h);
      }, f;
    }, s(function(u, h, f) {
      a.reason || (a.reason = new kn(u, h, f), r(a.reason));
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
    const r = this._listeners.indexOf(s);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let s;
    return {
      token: new Go(function(r) {
        s = r;
      }),
      cancel: s
    };
  }
}
function Yv(i) {
  return function(s) {
    return i.apply(null, s);
  };
}
function Qv(i) {
  return S.isObject(i) && i.isAxiosError === !0;
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
function Dc(i) {
  const s = new Qe(i), r = fc(Qe.prototype.request, s);
  return S.extend(r, Qe.prototype, s, { allOwnKeys: !0 }), S.extend(r, s, null, { allOwnKeys: !0 }), r.create = function(a) {
    return Dc(tn(i, a));
  }, r;
}
const _t = Dc(ri);
_t.Axios = Qe;
_t.CanceledError = kn;
_t.CancelToken = Go;
_t.isCancel = Tc;
_t.VERSION = Nc;
_t.toFormData = ds;
_t.AxiosError = J;
_t.Cancel = _t.CanceledError;
_t.all = function(i) {
  return Promise.all(i);
};
_t.spread = Yv;
_t.isAxiosError = Qv;
_t.mergeConfig = tn;
_t.AxiosHeaders = Vt;
_t.formToJSON = (i) => Oc(S.isHTMLForm(i) ? new FormData(i) : i);
_t.getAdapter = Bc.getAdapter;
_t.HttpStatusCode = Lo;
_t.default = _t;
const Zv = (i) => {
  const s = typeof i;
  return i !== null && (s === "object" || s === "function");
}, So = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), tb = new Set("0123456789");
function eb(i) {
  const s = [];
  let r = "", a = "start", u = !1;
  for (const h of i)
    switch (h) {
      case "\\": {
        if (a === "index")
          throw new Error("Invalid character in an index");
        if (a === "indexEnd")
          throw new Error("Invalid character after an index");
        u && (r += h), a = "property", u = !u;
        break;
      }
      case ".": {
        if (a === "index")
          throw new Error("Invalid character in an index");
        if (a === "indexEnd") {
          a = "property";
          break;
        }
        if (u) {
          u = !1, r += h;
          break;
        }
        if (So.has(r))
          return [];
        s.push(r), r = "", a = "property";
        break;
      }
      case "[": {
        if (a === "index")
          throw new Error("Invalid character in an index");
        if (a === "indexEnd") {
          a = "index";
          break;
        }
        if (u) {
          u = !1, r += h;
          break;
        }
        if (a === "property") {
          if (So.has(r))
            return [];
          s.push(r), r = "";
        }
        a = "index";
        break;
      }
      case "]": {
        if (a === "index") {
          s.push(Number.parseInt(r, 10)), r = "", a = "indexEnd";
          break;
        }
        if (a === "indexEnd")
          throw new Error("Invalid character after an index");
      }
      default: {
        if (a === "index" && !tb.has(h))
          throw new Error("Invalid character in an index");
        if (a === "indexEnd")
          throw new Error("Invalid character after an index");
        a === "start" && (a = "property"), u && (u = !1, r += "\\"), r += h;
      }
    }
  switch (u && (r += "\\"), a) {
    case "property": {
      if (So.has(r))
        return [];
      s.push(r);
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
function nb(i, s) {
  if (typeof s != "number" && Array.isArray(i)) {
    const r = Number.parseInt(s, 10);
    return Number.isInteger(r) && i[r] === i[s];
  }
  return !1;
}
function ib(i, s, r) {
  if (!Zv(i) || typeof s != "string")
    return r === void 0 ? i : r;
  const a = eb(s);
  if (a.length === 0)
    return r;
  for (let u = 0; u < a.length; u++) {
    const h = a[u];
    if (nb(i, h) ? i = u === a.length - 1 ? void 0 : null : i = i[h], i == null) {
      if (u !== a.length - 1)
        return r;
      break;
    }
  }
  return i === void 0 ? r : i;
}
const Fc = Ml("config", {
  persist: !0,
  state: () => ({
    config: {}
  }),
  getters: {
    get: (i) => (s, r) => ib(i.config, s, r)
  },
  actions: {
    async load() {
      _t.get("/api/config").then((i) => {
        this.config = i.data;
      });
    }
  }
});
function sb() {
  return {
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    password: "",
    passwordc: "",
    locale: Fc().get("site.registration.user_defaults.locale", "en_US"),
    captcha: "",
    spiderbro: "http://"
  };
}
function ob() {
  return Fc().get("locales.available");
}
function rb() {
  return "/account/captcha";
}
async function ab(i) {
  return ft.post("/account/register", i).then((s) => s.data).catch((s) => {
    throw {
      description: "An error as occurred",
      style: be.Danger,
      closeBtn: !0,
      ...s.response.data
    };
  });
}
const lb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  doRegister: ab,
  getAvailableLocales: ob,
  getCaptchaUrl: rb,
  getDefaultForm: sb
}, Symbol.toStringTag, { value: "Module" }));
async function cb(i) {
  return ft.post("/account/forgot-password", { email: i }).then((s) => ({
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
async function ub(i) {
  return ft.post("/account/resend-verification", { email: i }).then((s) => ({
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
const hb = { class: "uk-fieldset uk-form-stacked" }, db = { class: "uk-margin" }, fb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, pb = { class: "uk-width-1-2" }, mb = { class: "uk-width-1-2" }, gb = { class: "uk-width-1-1" }, vb = { class: "uk-margin" }, bb = { class: "uk-margin" }, wb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, yb = { class: "uk-width-1-2" }, $b = { class: "uk-width-1-2" }, kb = { class: "uk-margin" }, xb = ["value"], Sb = { class: "uk-margin" }, Eb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, _b = { class: "uk-width-2-3" }, Ob = { class: "uk-width-1-3" }, Tb = ["src"], Cb = { class: "uk-text-center" }, Ab = ["disabled"], Lc = /* @__PURE__ */ vt({
  __name: "FormRegister",
  setup(i) {
    const { getDefaultForm: s, doRegister: r, getAvailableLocales: a, getCaptchaUrl: u } = lb, h = Ae(!1), f = Ae();
    let g = s();
    async function k() {
      h.value = !0, f.value = null, await r(g).then((v) => {
        Ul.notification({
          message: "Succesfully registered " + (v == null ? void 0 : v.full_name) + "!",
          status: "success",
          pos: "bottom-right",
          timeout: 4e3
        });
      }).catch((v) => {
        f.value = v;
      }).finally(() => {
        h.value = !1;
      });
    }
    return (v, b) => {
      const A = Mt("UFAlertContainer");
      return D(), q("form", {
        onSubmit: b[8] || (b[8] = ns((_) => k(), ["prevent"]))
      }, [
        C("fieldset", hb, [
          f.value ? (D(), St(A, {
            key: 0,
            "data-test": "error",
            alert: f.value
          }, null, 8, ["alert"])) : ut("", !0),
          C("div", db, [
            b[9] || (b[9] = C("label", {
              class: "uk-form-label",
              for: "first_name"
            }, "Name and email", -1)),
            C("div", fb, [
              C("div", pb, [
                se(C("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "First Name",
                  "aria-label": "First Name",
                  id: "first_name",
                  "data-test": "first_name",
                  "onUpdate:modelValue": b[0] || (b[0] = (_) => lt(g).first_name = _)
                }, null, 512), [
                  [re, lt(g).first_name]
                ])
              ]),
              C("div", mb, [
                se(C("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "Last Name",
                  "aria-label": "Last Name",
                  "data-test": "last_name",
                  "onUpdate:modelValue": b[1] || (b[1] = (_) => lt(g).last_name = _)
                }, null, 512), [
                  [re, lt(g).last_name]
                ])
              ]),
              C("div", gb, [
                se(C("input", {
                  class: "uk-input",
                  type: "email",
                  placeholder: "Email",
                  "aria-label": "Email",
                  "data-test": "email",
                  "onUpdate:modelValue": b[2] || (b[2] = (_) => lt(g).email = _)
                }, null, 512), [
                  [re, lt(g).email]
                ])
              ])
            ])
          ]),
          C("div", vb, [
            b[10] || (b[10] = C("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Username", -1)),
            se(C("input", {
              class: "uk-input",
              type: "text",
              placeholder: "Username",
              "aria-label": "Username",
              "data-test": "username",
              "onUpdate:modelValue": b[3] || (b[3] = (_) => lt(g).user_name = _)
            }, null, 512), [
              [re, lt(g).user_name]
            ])
          ]),
          C("div", bb, [
            b[11] || (b[11] = C("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Password", -1)),
            C("div", wb, [
              C("div", yb, [
                se(C("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Password",
                  "aria-label": "Password",
                  "data-test": "password",
                  "onUpdate:modelValue": b[4] || (b[4] = (_) => lt(g).password = _)
                }, null, 512), [
                  [re, lt(g).password]
                ])
              ]),
              C("div", $b, [
                se(C("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Confirm Password",
                  "aria-label": "Confirm Password",
                  "data-test": "passwordc",
                  "onUpdate:modelValue": b[5] || (b[5] = (_) => lt(g).passwordc = _)
                }, null, 512), [
                  [re, lt(g).passwordc]
                ])
              ])
            ])
          ]),
          C("div", kb, [
            b[12] || (b[12] = C("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Locale", -1)),
            se(C("select", {
              class: "uk-select",
              id: "form-stacked-select",
              "data-test": "locale",
              "onUpdate:modelValue": b[6] || (b[6] = (_) => lt(g).locale = _)
            }, [
              (D(!0), q(Yf, null, Qf(lt(a)(), (_, P) => (D(), q("option", {
                value: P,
                key: P
              }, pt(_), 9, xb))), 128))
            ], 512), [
              [Zf, lt(g).locale]
            ])
          ]),
          C("div", Sb, [
            b[13] || (b[13] = C("label", {
              class: "uk-form-label",
              for: "r-form-captcha"
            }, "Captcha", -1)),
            C("div", Eb, [
              C("div", _b, [
                se(C("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Captcha",
                  "aria-label": "Captcha",
                  id: "r-form-captcha",
                  "data-test": "captcha",
                  "onUpdate:modelValue": b[7] || (b[7] = (_) => lt(g).captcha = _)
                }, null, 512), [
                  [re, lt(g).captcha]
                ])
              ]),
              C("div", Ob, [
                C("img", {
                  src: lt(u)(),
                  id: "captcha",
                  "data-target": "#r-form-captcha"
                }, null, 8, Tb)
              ])
            ])
          ]),
          b[14] || (b[14] = C("p", null, [
            Et(" By registering an account with UserFrosting, you accept "),
            C("a", null, "the terms and conditions"),
            Et(". ")
          ], -1)),
          C("div", Cb, [
            C("button", {
              class: "uk-button uk-button-primary",
              disabled: h.value
            }, "Sign me up", 8, Ab)
          ])
        ])
      ], 32);
    };
  }
}), Pb = { class: "uk-fieldset" }, Rb = { class: "uk-margin" }, Ib = { class: "uk-inline uk-width-1-1" }, Bb = { class: "uk-text-center" }, Nb = ["disabled"], Mc = /* @__PURE__ */ vt({
  __name: "FormForgotPassword",
  setup(i) {
    const s = Ae(!1), r = Ae();
    let a = "";
    async function u() {
      s.value = !0, r.value = null, await cb(a).then((h) => {
        r.value = h;
      }).catch((h) => {
        r.value = h;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (h, f) => {
      const g = Mt("UFAlertContainer");
      return D(), q("form", {
        onSubmit: f[1] || (f[1] = ns((k) => u(), ["prevent"]))
      }, [
        C("fieldset", Pb, [
          r.value ? (D(), St(g, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : ut("", !0),
          C("div", Rb, [
            C("div", Ib, [
              f[2] || (f[2] = C("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              se(C("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => Ll(a) ? a.value = k : a = k)
              }, null, 512), [
                [re, lt(a)]
              ])
            ])
          ]),
          C("div", Bb, [
            C("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Email Password Reset Link ", 8, Nb)
          ])
        ])
      ], 32);
    };
  }
}), Db = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, Fb = { class: "uk-navbar-container" }, Lb = { class: "uk-container uk-container-expand" }, Mb = {
  class: "uk-navbar",
  "uk-navbar": ""
}, jb = {
  class: "uk-navbar-left",
  "data-test": "navbar-left"
}, Ub = {
  class: "uk-navbar-right",
  "data-test": "navbar-right"
}, zb = { class: "uk-navbar-nav" }, Hb = /* @__PURE__ */ vt({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(i) {
    return (s, r) => (D(), q("header", null, [
      C("div", Db, [
        C("div", Fb, [
          C("div", Lb, [
            C("nav", Mb, [
              C("div", jb, [
                fe(Mo, {
                  to: s.to,
                  class: "uk-navbar-item uk-logo",
                  label: ""
                }, {
                  default: Bt(() => [
                    dt(s.$slots, "title", {}, () => [
                      Et(pt(s.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              C("div", Ub, [
                C("ul", zb, [
                  dt(s.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), qb = { "data-test": "label" }, Wb = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0px"
}, Vb = {
  class: "uk-nav uk-navbar-dropdown-nav",
  "data-test": "slot"
}, Xo = /* @__PURE__ */ vt({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(i) {
    return (s, r) => (D(), q("li", null, [
      C("a", qb, [
        dt(s.$slots, "label", {}, () => [
          Et(pt(s.label), 1)
        ]),
        r[0] || (r[0] = Et()),
        r[1] || (r[1] = C("span", { "uk-navbar-parent-icon": "" }, null, -1))
      ]),
      C("div", Wb, [
        C("ul", Vb, [
          dt(s.$slots, "default")
        ])
      ])
    ]));
  }
}), Jb = {}, Kb = { class: "uk-nav-divider" };
function Gb(i, s) {
  return D(), q("li", Kb);
}
const Xb = /* @__PURE__ */ is(Jb, [["render", Gb]]), Yb = { key: 0 }, Qb = ["href"], Zb = ["href", "onClick"], tw = /* @__PURE__ */ vt({
  __name: "NavBarItem",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, r = Ce(() => s.to === "" || typeof s.to == "string" && s.to.startsWith("http"));
    return (a, u) => r.value ? (D(), q("li", Yb, [
      C("a", {
        href: a.to.toString(),
        target: "_blank"
      }, [
        dt(a.$slots, "default", {}, () => [
          Et(pt(a.label), 1)
        ])
      ], 8, Qb)
    ])) : (D(), St(lt(ni), Zn({
      key: 1,
      to: a.to
    }, a.$props, { custom: "" }), {
      default: Bt(({ isActive: h, href: f, navigate: g }) => [
        C("li", {
          class: es({ "uk-active": h })
        }, [
          C("a", Zn(a.$attrs, {
            href: f,
            onClick: g
          }), [
            dt(a.$slots, "default", {}, () => [
              Et(pt(a.label), 1)
            ])
          ], 16, Zb)
        ], 2)
      ]),
      _: 3
    }, 16, ["to"]));
  }
}), ew = { class: "uk-text-center" }, nw = /* @__PURE__ */ vt({
  __name: "NavBarLogin",
  setup(i) {
    return (s, r) => (D(), St(Xo, {
      label: "Login",
      class: "uf-nav-login uk-text-center"
    }, {
      default: Bt(() => [
        fe(qo),
        C("div", ew, [
          C("button", {
            class: "uk-button uk-button-default",
            onClick: r[0] || (r[0] = (a) => s.$emit("gotoRegistration")),
            "data-test": "gotoRegistration"
          }, " Register ")
        ]),
        dt(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}), iw = {
  key: 0,
  "data-test": "username"
}, sw = ["src"], ow = { class: "uk-margin" }, rw = ["src"], aw = {
  key: 1,
  class: "uk-margin-remove",
  "data-test": "username"
}, lw = {
  key: 2,
  class: "uk-margin-remove uk-text-meta",
  "data-test": "meta"
}, cw = /* @__PURE__ */ vt({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(i) {
    return (s, r) => (D(), St(Xo, { class: "uf-nav-user uk-text-center" }, {
      label: Bt(() => [
        s.username ? (D(), q("span", iw, pt(s.username), 1)) : ut("", !0),
        s.avatar ? (D(), q("img", {
          key: 1,
          src: s.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, sw)) : ut("", !0)
      ]),
      default: Bt(() => [
        C("div", ow, [
          s.avatar ? (D(), q("img", {
            key: 0,
            src: s.avatar,
            alt: "avatar",
            class: "uk-border-circle",
            "uk-height-match": ""
          }, null, 8, rw)) : ut("", !0),
          s.username ? (D(), q("p", aw, pt(s.username), 1)) : ut("", !0),
          s.meta ? (D(), q("p", lw, "(" + pt(s.meta) + ")", 1)) : ut("", !0)
        ]),
        dt(s.$slots, "default", { dataTest: "slot" })
      ]),
      _: 3
    }));
  }
}), uw = { key: 0 }, hw = ["href"], dw = { key: 1 }, fw = /* @__PURE__ */ vt({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(i) {
    const s = i, r = Ce(() => typeof s.to == "string" && s.to.startsWith("http"));
    return (a, u) => r.value ? (D(), q("li", uw, [
      C("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: a.to.toString(),
        target: "_blank"
      }, [
        dt(a.$slots, "default", {}, () => [
          Et(pt(a.label), 1)
        ])
      ], 8, hw)
    ])) : (D(), q("li", dw, [
      fe(lt(ni), {
        to: a.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: Bt(() => [
          dt(a.$slots, "default", {}, () => [
            Et(pt(a.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["to"])
    ]));
  }
}), pw = { class: "uk-list" }, mw = { class: "uk-text-center" }, gw = /* @__PURE__ */ vt({
  __name: "PageLogin",
  setup(i) {
    return (s, r) => {
      const a = Mt("font-awesome-icon"), u = Mt("UFCardBoxBig");
      return D(), St(u, null, {
        default: Bt(() => [
          r[5] || (r[5] = C("h3", { class: "uk-card-title" }, "Login", -1)),
          fe(qo),
          C("ul", pw, [
            C("li", null, [
              C("a", {
                onClick: r[0] || (r[0] = (h) => s.$emit("gotoForgotPassword")),
                "data-test": "gotoForgotPassword"
              }, "Forgot your password?")
            ]),
            C("li", null, [
              C("a", {
                onClick: r[1] || (r[1] = (h) => s.$emit("gotoResendVerification")),
                "data-test": "gotoResendVerification"
              }, "Resend verification email")
            ])
          ]),
          r[6] || (r[6] = C("hr", null, null, -1)),
          C("div", mw, [
            r[4] || (r[4] = C("p", null, "You don't have an account yet?", -1)),
            C("button", {
              class: "uk-button uk-button-default",
              onClick: r[2] || (r[2] = (h) => s.$emit("gotoRegistration")),
              "data-test": "gotoRegistration"
            }, [
              fe(a, { icon: ["fas", "user-plus"] }),
              r[3] || (r[3] = Et(" Register "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), vw = { class: "uk-text-center" }, bw = /* @__PURE__ */ vt({
  __name: "PageRegister",
  setup(i) {
    return (s, r) => {
      const a = Mt("font-awesome-icon"), u = Mt("UFCardBoxBig");
      return D(), St(u, null, {
        default: Bt(() => [
          r[3] || (r[3] = C("h3", { class: "uk-card-title" }, "Register", -1)),
          fe(Lc),
          r[4] || (r[4] = C("hr", null, null, -1)),
          C("div", vw, [
            r[2] || (r[2] = C("p", null, "Already have an account ?", -1)),
            C("button", {
              class: "uk-button uk-button-default",
              onClick: r[0] || (r[0] = (h) => s.$emit("gotoLogin")),
              "data-test": "gotoLogin"
            }, [
              fe(a, { icon: ["fas", "right-to-bracket"] }),
              r[1] || (r[1] = Et(" Login "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), ww = /* @__PURE__ */ vt({
  __name: "PageForgotPassword",
  setup(i) {
    return (s, r) => {
      const a = Mt("UFCardBoxBig");
      return D(), St(a, null, {
        default: Bt(() => [
          r[0] || (r[0] = C("h3", { class: "uk-card-title" }, "Forgotten Password", -1)),
          r[1] || (r[1] = C("p", null, " Please enter the email address you used to sign up. A link with instructions to reset your password will be emailed to you. ", -1)),
          fe(Mc)
        ]),
        _: 1
      });
    };
  }
}), yw = { class: "uk-fieldset" }, $w = { class: "uk-margin" }, kw = { class: "uk-inline uk-width-1-1" }, xw = { class: "uk-text-center" }, Sw = ["disabled"], Ew = /* @__PURE__ */ vt({
  __name: "FormResendVerification",
  setup(i) {
    const s = Ae(!1), r = Ae();
    let a = "";
    async function u() {
      s.value = !0, r.value = null, await ub(a).then((h) => {
        r.value = h;
      }).catch((h) => {
        r.value = h;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (h, f) => {
      const g = Mt("UFAlertContainer");
      return D(), q("form", {
        onSubmit: f[1] || (f[1] = ns((k) => u(), ["prevent"]))
      }, [
        C("fieldset", yw, [
          r.value ? (D(), St(g, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : ut("", !0),
          C("div", $w, [
            C("div", kw, [
              f[2] || (f[2] = C("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              se(C("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": f[0] || (f[0] = (k) => Ll(a) ? a.value = k : a = k)
              }, null, 512), [
                [re, lt(a)]
              ])
            ])
          ]),
          C("div", xw, [
            C("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Email the verification link for my account ", 8, Sw)
          ])
        ])
      ], 32);
    };
  }
}), _w = /* @__PURE__ */ vt({
  __name: "PageResendVerification",
  setup(i) {
    return (s, r) => {
      const a = Mt("UFCardBoxBig");
      return D(), St(a, null, {
        default: Bt(() => [
          r[0] || (r[0] = C("h3", { class: "uk-card-title" }, "Resend Verification Email", -1)),
          r[1] || (r[1] = C("p", null, " Please enter the email address you used to sign up, and your verification email will be resent. ", -1)),
          fe(Ew)
        ]),
        _: 1
      });
    };
  }
}), Ow = {}, Tw = { class: "uf-sidebar-left uk-light uk-visible@m" }, Cw = { class: "left-nav-wrap" }, Aw = {
  class: "uk-nav uk-nav-default",
  "data-uk-nav": ""
};
function Pw(i, s) {
  return D(), q("aside", Tw, [
    C("div", Cw, [
      C("ul", Aw, [
        dt(i.$slots, "default")
      ])
    ])
  ]);
}
const Rw = /* @__PURE__ */ is(Ow, [["render", Pw]]), Iw = ["data-uk-icon"], Bw = {
  key: 2,
  "uk-nav-parent-icon": "",
  "data-test": "caret"
}, Nw = {
  class: "uk-nav-sub",
  "data-test": "slot"
}, Dw = /* @__PURE__ */ vt({
  __name: "SideBarDropdown",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" },
    hideCaret: { type: Boolean, default: !1 }
  },
  setup(i) {
    return (s, r) => {
      const a = Mt("font-awesome-icon");
      return D(), St(lt(ni), Zn({ to: s.to }, s.$props, { custom: "" }), {
        default: Bt(({ isActive: u }) => [
          C("li", {
            class: es(["uk-parent", { "uk-open": u }])
          }, [
            C("a", tp(ep(s.$attrs)), [
              s.icon ? (D(), q("span", {
                key: 0,
                "data-uk-icon": s.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, Iw)) : ut("", !0),
              s.faIcon ? (D(), St(a, {
                key: 1,
                class: "uk-margin-small-right",
                icon: s.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : ut("", !0),
              dt(s.$slots, "label", {}, () => [
                Et(pt(s.label), 1)
              ]),
              s.hideCaret ? ut("", !0) : (D(), q("span", Bw))
            ], 16),
            C("ul", Nw, [
              dt(s.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]);
    };
  }
}), Fw = { key: 0 }, Lw = ["href"], Mw = ["data-uk-icon"], jw = ["href", "onClick"], Uw = ["data-uk-icon"], zw = /* @__PURE__ */ vt({
  __name: "SideBarItem",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(i) {
    const s = i, r = Ce(() => s.to === "" || typeof s.to == "string" && s.to.startsWith("http"));
    return (a, u) => {
      const h = Mt("font-awesome-icon");
      return r.value ? (D(), q("li", Fw, [
        C("a", {
          href: a.to.toString(),
          target: "_blank"
        }, [
          a.icon ? (D(), q("span", {
            key: 0,
            "data-uk-icon": a.icon,
            class: "uk-margin-small-right",
            "data-test": "icon"
          }, null, 8, Mw)) : ut("", !0),
          a.faIcon ? (D(), St(h, {
            key: 1,
            class: "uk-margin-small-right",
            icon: a.faIcon,
            "data-test": "faIcon"
          }, null, 8, ["icon"])) : ut("", !0),
          dt(a.$slots, "default", {}, () => [
            Et(pt(a.label), 1)
          ])
        ], 8, Lw)
      ])) : (D(), St(lt(ni), Zn({
        key: 1,
        to: a.to
      }, a.$props, { custom: "" }), {
        default: Bt(({ isExactActive: f, href: g, navigate: k }) => [
          C("li", {
            class: es({ "uk-active": f })
          }, [
            C("a", Zn(a.$attrs, {
              href: g,
              onClick: k
            }), [
              a.icon ? (D(), q("span", {
                key: 0,
                "data-uk-icon": a.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, Uw)) : ut("", !0),
              a.faIcon ? (D(), St(h, {
                key: 1,
                class: "uk-margin-small-right",
                icon: a.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : ut("", !0),
              dt(a.$slots, "default", {}, () => [
                Et(pt(a.label), 1)
              ])
            ], 16, jw)
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]));
    };
  }
}), Hw = { class: "uk-nav-header" }, qw = /* @__PURE__ */ vt({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(i) {
    return (s, r) => (D(), q("li", Hw, pt(s.label), 1));
  }
}), Yw = {
  install: (i) => {
    i.component("UFAlertContainer", op).component("UFAppLink", Mo).component("UFInfoBox", mp).component("UFCardBox", $p).component("UFCardBoxBig", Sp).component("UFMainContent", Cp).component("UFHeaderPage", Ip).component("UFFooterContent", Lp).component("UFFormLogin", qo).component("UFFormRegister", Lc).component("UFFormForgotPassword", Mc).component("UFNavBar", Hb).component("UFNavBarDropdown", Xo).component("UFNavBarDropdownSeparator", Xb).component("UFNavBarItem", tw).component("UFNavBarLogin", nw).component("UFNavBarUserCard", cw).component("UFNavBarUserCardButton", fw).component("UFPageLogin", gw).component("UFPageRegister", bw).component("UFPageForgotPassword", ww).component("UFPageResendVerification", _w).component("UFSideBar", Rw).component("UFSideBarDropdown", Dw).component("UFSideBarItem", zw).component("UFSideBarLabel", qw);
  }
};
export {
  Lp as F,
  Cp as M,
  Xb as N,
  Yw as P,
  Rw as S,
  Ul as U,
  op as _,
  Mo as a,
  mp as b,
  Mp as c,
  $p as d,
  Sp as e,
  Ip as f,
  jp as g,
  qo as h,
  Lc as i,
  Mc as j,
  Hb as k,
  Xo as l,
  tw as m,
  nw as n,
  cw as o,
  fw as p,
  gw as q,
  bw as r,
  ww as s,
  _w as t,
  Dw as u,
  zw as v,
  qw as w
};
