import { defineComponent as wt, computed as Gt, resolveComponent as qt, openBlock as B, createElementBlock as z, normalizeClass as Le, createCommentVNode as ft, createBlock as Ct, createTextVNode as At, toDisplayString as dt, renderSlot as ot, unref as W, withCtx as Mt, createElementVNode as T, createVNode as Wt, createSlots as _m, ref as Xt, withModifiers as Es, withDirectives as ae, vModelText as me, Fragment as vs, renderList as xr, vModelSelect as zc, isRef as Sr, mergeProps as mi, normalizeProps as Om, guardReactiveProps as Tm, watchEffect as Cm, toValue as Am } from "vue";
import { RouterLink as wi } from "vue-router";
import { defineStore as qc } from "pinia";
var _e = /* @__PURE__ */ ((n) => (n.Primary = "Primary", n.Success = "Success", n.Warning = "Warning", n.Danger = "Danger", n))(_e || {});
const Rm = {
  key: 1,
  "data-test": "title"
}, Pm = {
  key: 2,
  "data-test": "description"
}, Nm = ["innerHTML"], Bm = /* @__PURE__ */ wt({
  __name: "AlertContainer",
  props: {
    alert: {}
  },
  setup(n) {
    const i = n, r = Gt(() => {
      switch (i.alert.style) {
        case _e.Success:
          return "uk-alert-success";
        case _e.Warning:
          return "uk-alert-warning";
        case _e.Danger:
          return "uk-alert-danger";
        case _e.Primary:
        default:
          return "uk-alert-primary";
      }
    }), o = Gt(() => {
      switch (i.alert.style) {
        case _e.Success:
          return "fa-solid fa-circle-check";
        case _e.Warning:
          return "fa-solid fa-circle-exclamation";
        case _e.Danger:
          return "fa-solid fa-triangle-exclamation";
        case _e.Primary:
        default:
          return "fa-solid fa-circle-info";
      }
    });
    return (l, c) => {
      const h = qt("font-awesome-icon");
      return B(), z("div", {
        class: Le([r.value, "uk-alert"]),
        "uk-alert": ""
      }, [
        l.alert.closeBtn ? (B(), z("a", {
          key: 0,
          "data-test": "closeBtn",
          class: "uk-alert-close",
          "uk-close": "",
          onClick: c[0] || (c[0] = (m) => l.$emit("close"))
        })) : ft("", !0),
        l.alert.title ? (B(), z("h3", Rm, [
          l.alert.hideIcon ? ft("", !0) : (B(), Ct(h, {
            key: 0,
            icon: o.value,
            class: "uk-icon"
          }, null, 8, ["icon"])),
          At(" " + dt(l.alert.title), 1)
        ])) : ft("", !0),
        l.$slots.default ? (B(), z("p", Pm, [
          ot(l.$slots, "default")
        ])) : l.alert.description ? (B(), z("p", {
          key: 3,
          innerHTML: l.alert.description,
          "data-test": "description"
        }, null, 8, Nm)) : ft("", !0)
      ], 2);
    };
  }
}), Fm = ["href"], Im = { key: 1 }, Er = /* @__PURE__ */ wt({
  __name: "AppLink",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const i = n, r = Gt(() => typeof i.to == "string" && i.to.startsWith("http")), o = Gt(() => i.to), l = Gt(() => i.to === "");
    return (c, h) => r.value ? (B(), z("a", {
      key: 0,
      href: o.value,
      target: "_blank"
    }, [
      ot(c.$slots, "default", {}, () => [
        At(dt(c.label), 1)
      ])
    ], 8, Fm)) : l.value ? (B(), z("div", Im, [
      ot(c.$slots, "default", {}, () => [
        At(dt(c.label), 1)
      ])
    ])) : (B(), Ct(W(wi), {
      key: 2,
      to: c.to
    }, {
      default: Mt(() => [
        ot(c.$slots, "default", {}, () => [
          At(dt(c.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["to"]));
  }
}), Dm = { class: "uk-card uk-card-default uk-card-body uk-card-small" }, jm = {
  class: "uk-grid-small uk-flex-middle",
  "uk-grid": ""
}, Lm = {
  key: 0,
  class: "uk-width-auto"
}, Um = ["data-uk-icon"], Mm = { class: "uk-width-expand" }, zm = {
  key: 0,
  class: "uk-margin-remove"
}, qm = {
  key: 1,
  class: "uk-text-meta uk-text-uppercase"
}, Hm = /* @__PURE__ */ wt({
  __name: "InfoBox",
  props: {
    to: { default: "" },
    label: { default: null },
    value: { default: null },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(n) {
    return (i, r) => {
      const o = qt("font-awesome-icon");
      return B(), Ct(Er, {
        to: i.to,
        class: "uk-text-decoration-none"
      }, {
        default: Mt(() => [
          T("div", Dm, [
            T("div", jm, [
              i.icon || i.faIcon ? (B(), z("div", Lm, [
                i.icon ? (B(), z("span", {
                  key: 0,
                  "data-uk-icon": "icon: " + i.icon + "; ratio: 2",
                  class: "uk-margin-small-right"
                }, null, 8, Um)) : ft("", !0),
                i.faIcon ? (B(), Ct(o, {
                  key: 1,
                  icon: i.faIcon,
                  size: "2xl",
                  "fixed-width": ""
                }, null, 8, ["icon"])) : ft("", !0)
              ])) : ft("", !0),
              T("div", Mm, [
                i.value !== null ? (B(), z("h4", zm, dt(i.value), 1)) : ft("", !0),
                i.label !== null ? (B(), z("span", qm, dt(i.label), 1)) : ft("", !0)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
}), Wm = { class: "uk-card uk-card-default uk-card-small" }, Vm = {
  key: 0,
  class: "uk-card-header"
}, Jm = { "data-test": "title" }, Km = {
  class: "uk-card-body",
  "data-test": "slot"
}, Gm = {
  key: 1,
  class: "uk-card-footer"
}, Xm = /* @__PURE__ */ wt({
  __name: "CardBox",
  props: {
    title: String
  },
  setup(n) {
    return (i, r) => (B(), z("div", Wm, [
      n.title || i.$slots.header ? (B(), z("div", Vm, [
        T("h4", Jm, [
          ot(i.$slots, "header", {}, () => [
            At(dt(n.title), 1)
          ])
        ])
      ])) : ft("", !0),
      T("div", Km, [
        ot(i.$slots, "default")
      ]),
      i.$slots.footer ? (B(), z("div", Gm, [
        ot(i.$slots, "footer")
      ])) : ft("", !0)
    ]));
  }
}), Ym = { class: "uk-flex uk-flex-center uk-flex-middle" }, Qm = { class: "uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl" }, Zm = /* @__PURE__ */ wt({
  __name: "CardBoxBig",
  props: {
    title: String
  },
  setup(n) {
    return (i, r) => {
      const o = qt("UFCardBox");
      return B(), z("div", Ym, [
        T("div", Qm, [
          Wt(o, null, _m({
            default: Mt(() => [
              ot(i.$slots, "default")
            ]),
            _: 2
          }, [
            i.$slots.header || n.title ? {
              name: "header",
              fn: Mt(() => [
                ot(i.$slots, "header", {}, () => [
                  At(dt(n.title), 1)
                ])
              ]),
              key: "0"
            } : void 0,
            i.$slots.footer ? {
              name: "footer",
              fn: Mt(() => [
                ot(i.$slots, "footer")
              ]),
              key: "1"
            } : void 0
          ]), 1024)
        ])
      ]);
    };
  }
}), Rn = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [o, l] of i)
    r[o] = l;
  return r;
}, tg = {}, eg = {
  class: "uf-main uk-section uk-section-default uk-section-muted",
  "uk-height-viewport": "expand: true"
}, ng = {
  class: "uk-container",
  "data-test": "slot"
};
function ig(n, i) {
  return B(), z("div", eg, [
    T("div", ng, [
      ot(n.$slots, "default")
    ])
  ]);
}
const sg = /* @__PURE__ */ Rn(tg, [["render", ig]]), og = { class: "uf-page-header" }, rg = { class: "uk-margin-remove" }, ag = {
  key: 0,
  class: "uk-text-meta uk-margin-remove"
}, lg = /* @__PURE__ */ wt({
  __name: "HeaderPage",
  props: {
    title: {},
    caption: { default: "" }
  },
  setup(n) {
    return (i, r) => (B(), z("div", og, [
      T("h3", rg, dt(i.title), 1),
      i.caption ? (B(), z("p", ag, dt(i.caption), 1)) : ft("", !0)
    ]));
  }
}), cg = {}, ug = { class: "uf-main uk-section uk-section-small uk-section-muted uk-text-center" }, hg = {
  class: "uk-text-small uk-text-center",
  "data-test": "slot"
};
function dg(n, i) {
  return B(), z("footer", ug, [
    i[0] || (i[0] = T("hr", null, null, -1)),
    T("p", hg, [
      ot(n.$slots, "default")
    ])
  ]);
}
const fg = /* @__PURE__ */ Rn(cg, [["render", dg]]);
var pg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mg(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Hc = { exports: {} };
/*! UIkit 3.21.13 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */
(function(n, i) {
  (function(r, o) {
    n.exports = o();
  })(pg, function() {
    const { hasOwnProperty: r, toString: o } = Object.prototype;
    function l(t, e) {
      return r.call(t, e);
    }
    const c = /\B([A-Z])/g, h = he((t) => t.replace(c, "-$1").toLowerCase()), m = /-(\w)/g, w = he(
      (t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(m, (e, s) => s.toUpperCase())
    ), g = he((t) => t.charAt(0).toUpperCase() + t.slice(1));
    function v(t, e) {
      var s;
      return (s = t == null ? void 0 : t.startsWith) == null ? void 0 : s.call(t, e);
    }
    function _(t, e) {
      var s;
      return (s = t == null ? void 0 : t.endsWith) == null ? void 0 : s.call(t, e);
    }
    function S(t, e) {
      var s;
      return (s = t == null ? void 0 : t.includes) == null ? void 0 : s.call(t, e);
    }
    function O(t, e) {
      var s;
      return (s = t == null ? void 0 : t.findIndex) == null ? void 0 : s.call(t, e);
    }
    const { isArray: x, from: y } = Array, { assign: j } = Object;
    function L(t) {
      return typeof t == "function";
    }
    function F(t) {
      return t !== null && typeof t == "object";
    }
    function H(t) {
      return o.call(t) === "[object Object]";
    }
    function yt(t) {
      return F(t) && t === t.window;
    }
    function bt(t) {
      return It(t) === 9;
    }
    function pt(t) {
      return It(t) >= 1;
    }
    function Tt(t) {
      return It(t) === 1;
    }
    function It(t) {
      return !yt(t) && F(t) && t.nodeType;
    }
    function Dt(t) {
      return typeof t == "boolean";
    }
    function mt(t) {
      return typeof t == "string";
    }
    function jn(t) {
      return typeof t == "number";
    }
    function ye(t) {
      return jn(t) || mt(t) && !isNaN(t - parseFloat(t));
    }
    function _i(t) {
      return !(x(t) ? t.length : F(t) && Object.keys(t).length);
    }
    function jt(t) {
      return t === void 0;
    }
    function Ms(t) {
      return Dt(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function xe(t) {
      const e = Number(t);
      return isNaN(e) ? !1 : e;
    }
    function Q(t) {
      return parseFloat(t) || 0;
    }
    function St(t) {
      return t && nt(t)[0];
    }
    function nt(t) {
      return pt(t) ? [t] : Array.from(t || []).filter(pt);
    }
    function Ue(t) {
      if (yt(t))
        return t;
      t = St(t);
      const e = bt(t) ? t : t == null ? void 0 : t.ownerDocument;
      return (e == null ? void 0 : e.defaultView) || window;
    }
    function Ln(t, e) {
      return t === e || F(t) && F(e) && Object.keys(t).length === Object.keys(e).length && pn(t, (s, a) => s === e[a]);
    }
    function zs(t, e, s) {
      return t.replace(new RegExp(`${e}|${s}`, "g"), (a) => a === e ? s : e);
    }
    function Me(t) {
      return t[t.length - 1];
    }
    function pn(t, e) {
      for (const s in t)
        if (e(t[s], s) === !1)
          return !1;
      return !0;
    }
    function Mr(t, e) {
      return t.slice().sort(
        ({ [e]: s = 0 }, { [e]: a = 0 }) => s > a ? 1 : a > s ? -1 : 0
      );
    }
    function ze(t, e) {
      return t.reduce(
        (s, a) => s + Q(L(e) ? e(a) : a[e]),
        0
      );
    }
    function zr(t, e) {
      const s = /* @__PURE__ */ new Set();
      return t.filter(({ [e]: a }) => s.has(a) ? !1 : s.add(a));
    }
    function qs(t, e) {
      return e.reduce((s, a) => ({ ...s, [a]: t[a] }), {});
    }
    function zt(t, e = 0, s = 1) {
      return Math.min(Math.max(xe(t) || 0, e), s);
    }
    function at() {
    }
    function Oi(...t) {
      return [
        ["bottom", "top"],
        ["right", "left"]
      ].every(
        ([e, s]) => Math.min(...t.map(({ [e]: a }) => a)) - Math.max(...t.map(({ [s]: a }) => a)) > 0
      );
    }
    function Ti(t, e) {
      return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function Hs(t, e, s) {
      const a = e === "width" ? "height" : "width";
      return {
        [a]: t[e] ? Math.round(s * t[a] / t[e]) : t[a],
        [e]: s
      };
    }
    function qr(t, e) {
      t = { ...t };
      for (const s in t)
        t = t[s] > e[s] ? Hs(t, s, e[s]) : t;
      return t;
    }
    function gh(t, e) {
      t = qr(t, e);
      for (const s in t)
        t = t[s] < e[s] ? Hs(t, s, e[s]) : t;
      return t;
    }
    const Ws = { ratio: Hs, contain: qr, cover: gh };
    function ne(t, e, s = 0, a = !1) {
      e = nt(e);
      const { length: u } = e;
      return u ? (t = ye(t) ? xe(t) : t === "next" ? s + 1 : t === "previous" ? s - 1 : t === "last" ? u - 1 : e.indexOf(St(t)), a ? zt(t, 0, u - 1) : (t %= u, t < 0 ? t + u : t)) : -1;
    }
    function he(t) {
      const e = /* @__PURE__ */ Object.create(null);
      return (s, ...a) => e[s] || (e[s] = t(s, ...a));
    }
    function Z(t, ...e) {
      for (const s of nt(t)) {
        const a = qe(e).filter((u) => !V(s, u));
        a.length && s.classList.add(...a);
      }
    }
    function rt(t, ...e) {
      for (const s of nt(t)) {
        const a = qe(e).filter((u) => V(s, u));
        a.length && s.classList.remove(...a);
      }
    }
    function Ci(t, e, s) {
      s = qe(s), e = qe(e).filter((a) => !S(s, a)), rt(t, e), Z(t, s);
    }
    function V(t, e) {
      return [e] = qe(e), nt(t).some((s) => s.classList.contains(e));
    }
    function Et(t, e, s) {
      const a = qe(e);
      jt(s) || (s = !!s);
      for (const u of nt(t))
        for (const d of a)
          u.classList.toggle(d, s);
    }
    function qe(t) {
      return t ? x(t) ? t.map(qe).flat() : String(t).split(" ").filter(Boolean) : [];
    }
    function D(t, e, s) {
      var a;
      if (F(e)) {
        for (const u in e)
          D(t, u, e[u]);
        return;
      }
      if (jt(s))
        return (a = St(t)) == null ? void 0 : a.getAttribute(e);
      for (const u of nt(t))
        L(s) && (s = s.call(u, D(u, e))), s === null ? Un(u, e) : u.setAttribute(e, s);
    }
    function Te(t, e) {
      return nt(t).some((s) => s.hasAttribute(e));
    }
    function Un(t, e) {
      nt(t).forEach((s) => s.removeAttribute(e));
    }
    function Lt(t, e) {
      for (const s of [e, `data-${e}`])
        if (Te(t, s))
          return D(t, s);
    }
    const He = typeof window < "u", Nt = He && document.dir === "rtl", mn = He && "ontouchstart" in window, gn = He && window.PointerEvent, de = gn ? "pointerdown" : mn ? "touchstart" : "mousedown", Ai = gn ? "pointermove" : mn ? "touchmove" : "mousemove", Ce = gn ? "pointerup" : mn ? "touchend" : "mouseup", We = gn ? "pointerenter" : mn ? "" : "mouseenter", bn = gn ? "pointerleave" : mn ? "" : "mouseleave", Ri = gn ? "pointercancel" : "touchcancel", bh = {
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
    function Vs(t) {
      return nt(t).some((e) => bh[e.tagName.toLowerCase()]);
    }
    const vh = He && Element.prototype.checkVisibility || function() {
      return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
    };
    function _t(t) {
      return nt(t).some((e) => vh.call(e));
    }
    const Mn = "input,select,textarea,button";
    function Pi(t) {
      return nt(t).some((e) => it(e, Mn));
    }
    const zn = `${Mn},a[href],[tabindex]`;
    function Ni(t) {
      return it(t, zn);
    }
    function ct(t) {
      var e;
      return (e = St(t)) == null ? void 0 : e.parentElement;
    }
    function qn(t, e) {
      return nt(t).filter((s) => it(s, e));
    }
    function it(t, e) {
      return nt(t).some((s) => s.matches(e));
    }
    function Hn(t, e) {
      const s = [];
      for (; t = ct(t); )
        (!e || it(t, e)) && s.push(t);
      return s;
    }
    function ut(t, e) {
      t = St(t);
      const s = t ? y(t.children) : [];
      return e ? qn(s, e) : s;
    }
    function Se(t, e) {
      return e ? nt(t).indexOf(St(e)) : ut(ct(t)).indexOf(t);
    }
    function vn(t) {
      return t = St(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
    }
    function Js(t) {
      if (vn(t)) {
        const { hash: e, ownerDocument: s } = St(t), a = decodeURIComponent(e).slice(1);
        return s.getElementById(a) || s.getElementsByName(a)[0];
      }
    }
    function Ht(t, e) {
      return Ks(t, Hr(t, e));
    }
    function Wn(t, e) {
      return Vn(t, Hr(t, e));
    }
    function Ks(t, e) {
      return St(Jr(t, St(e), "querySelector"));
    }
    function Vn(t, e) {
      return nt(Jr(t, St(e), "querySelectorAll"));
    }
    function Hr(t, e = document) {
      return bt(e) || Wr(t).isContextSelector ? e : e.ownerDocument;
    }
    const wh = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, yh = /(\([^)]*\)|[^,])+/g, Wr = he((t) => {
      let e = !1;
      if (!t || !mt(t))
        return {};
      const s = [];
      for (let a of t.match(yh))
        a = a.trim().replace(wh, "$1 *"), e || (e = ["!", "+", "~", "-", ">"].includes(a[0])), s.push(a);
      return {
        selector: s.join(","),
        selectors: s,
        isContextSelector: e
      };
    }), $h = /(\([^)]*\)|\S)*/, Vr = he((t) => {
      t = t.slice(1).trim();
      const [e] = t.match($h);
      return [e, t.slice(e.length + 1)];
    });
    function Jr(t, e = document, s) {
      const a = Wr(t);
      if (!a.isContextSelector)
        return a.selector ? Gs(e, s, a.selector) : t;
      t = "";
      const u = a.selectors.length === 1;
      for (let d of a.selectors) {
        let f, p = e;
        if (d[0] === "!" && ([f, d] = Vr(d), p = e.parentElement.closest(f), !d && u) || p && d[0] === "-" && ([f, d] = Vr(d), p = p.previousElementSibling, p = it(p, f) ? p : null, !d && u))
          return p;
        if (p) {
          if (u)
            return d[0] === "~" || d[0] === "+" ? (d = `:scope > :nth-child(${Se(p) + 1}) ${d}`, p = p.parentElement) : d[0] === ">" && (d = `:scope ${d}`), Gs(p, s, d);
          t += `${t ? "," : ""}${kh(p)} ${d}`;
        }
      }
      return bt(e) || (e = e.ownerDocument), Gs(e, s, t);
    }
    function Gs(t, e, s) {
      try {
        return t[e](s);
      } catch {
        return null;
      }
    }
    function kh(t) {
      const e = [];
      for (; t.parentNode; ) {
        const s = D(t, "id");
        if (s) {
          e.unshift(`#${Xs(s)}`);
          break;
        } else {
          let { tagName: a } = t;
          a !== "HTML" && (a += `:nth-child(${Se(t) + 1})`), e.unshift(a), t = t.parentNode;
        }
      }
      return e.join(" > ");
    }
    function Xs(t) {
      return mt(t) ? CSS.escape(t) : "";
    }
    function J(...t) {
      let [e, s, a, u, d = !1] = Ys(t);
      u.length > 1 && (u = Sh(u)), d != null && d.self && (u = Eh(u)), a && (u = xh(a, u));
      for (const f of s)
        for (const p of e)
          p.addEventListener(f, u, d);
      return () => Ae(e, s, u, d);
    }
    function Ae(...t) {
      let [e, s, , a, u = !1] = Ys(t);
      for (const d of s)
        for (const f of e)
          f.removeEventListener(d, a, u);
    }
    function $t(...t) {
      const [e, s, a, u, d = !1, f] = Ys(t), p = J(
        e,
        s,
        a,
        (b) => {
          const k = !f || f(b);
          k && (p(), u(b, k));
        },
        d
      );
      return p;
    }
    function M(t, e, s) {
      return Qs(t).every(
        (a) => a.dispatchEvent(wn(e, !0, !0, s))
      );
    }
    function wn(t, e = !0, s = !1, a) {
      return mt(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: s, detail: a })), t;
    }
    function Ys(t) {
      return t[0] = Qs(t[0]), mt(t[1]) && (t[1] = t[1].split(" ")), L(t[2]) && t.splice(2, 0, !1), t;
    }
    function xh(t, e) {
      return (s) => {
        const a = t[0] === ">" ? Vn(t, s.currentTarget).reverse().find((u) => u.contains(s.target)) : s.target.closest(t);
        a && (s.current = a, e.call(this, s), delete s.current);
      };
    }
    function Sh(t) {
      return (e) => x(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function Eh(t) {
      return function(e) {
        if (e.target === e.currentTarget || e.target === e.current)
          return t.call(null, e);
      };
    }
    function Kr(t) {
      return t && "addEventListener" in t;
    }
    function _h(t) {
      return Kr(t) ? t : St(t);
    }
    function Qs(t) {
      return x(t) ? t.map(_h).filter(Boolean) : mt(t) ? Vn(t) : Kr(t) ? [t] : nt(t);
    }
    function pe(t) {
      return t.pointerType === "touch" || !!t.touches;
    }
    function Ee(t) {
      var e, s;
      const { clientX: a, clientY: u } = ((e = t.touches) == null ? void 0 : e[0]) || ((s = t.changedTouches) == null ? void 0 : s[0]) || t;
      return { x: a, y: u };
    }
    const Oh = {
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
    function $(t, e, s, a) {
      const u = nt(t);
      for (const d of u)
        if (mt(e)) {
          if (e = Bi(e), jt(s))
            return getComputedStyle(d).getPropertyValue(e);
          d.style.setProperty(
            e,
            ye(s) && !Oh[e] ? `${s}px` : s || jn(s) ? s : "",
            a
          );
        } else if (x(e)) {
          const f = {};
          for (const p of e)
            f[p] = $(d, p);
          return f;
        } else if (F(e))
          for (const f in e)
            $(d, f, e[f], s);
      return u[0];
    }
    const Bi = he((t) => {
      if (v(t, "--"))
        return t;
      t = h(t);
      const { style: e } = document.documentElement;
      if (t in e)
        return t;
      for (const s of ["webkit", "moz"]) {
        const a = `-${s}-${t}`;
        if (a in e)
          return a;
      }
    }), Zs = "uk-transition", to = "transitionend", eo = "transitioncanceled";
    function Th(t, e, s = 400, a = "linear") {
      return s = Math.round(s), Promise.all(
        nt(t).map(
          (u) => new Promise((d, f) => {
            for (const b in e)
              $(u, b);
            const p = setTimeout(() => M(u, to), s);
            $t(
              u,
              [to, eo],
              ({ type: b }) => {
                clearTimeout(p), rt(u, Zs), $(u, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
                }), b === eo ? f() : d(u);
              },
              { self: !0 }
            ), Z(u, Zs), $(u, {
              transitionProperty: Object.keys(e).map(Bi).join(","),
              transitionDuration: `${s}ms`,
              transitionTimingFunction: a,
              ...e
            });
          })
        )
      );
    }
    const ht = {
      start: Th,
      async stop(t) {
        M(t, to), await Promise.resolve();
      },
      async cancel(t) {
        M(t, eo), await Promise.resolve();
      },
      inProgress(t) {
        return V(t, Zs);
      }
    }, Jn = "uk-animation", Gr = "animationend", Fi = "animationcanceled";
    function Xr(t, e, s = 200, a, u) {
      return Promise.all(
        nt(t).map(
          (d) => new Promise((f, p) => {
            V(d, Jn) && M(d, Fi);
            const b = [
              e,
              Jn,
              `${Jn}-${u ? "leave" : "enter"}`,
              a && `uk-transform-origin-${a}`,
              u && `${Jn}-reverse`
            ], k = setTimeout(() => M(d, Gr), s);
            $t(
              d,
              [Gr, Fi],
              ({ type: E }) => {
                clearTimeout(k), E === Fi ? p() : f(d), $(d, "animationDuration", ""), rt(d, b);
              },
              { self: !0 }
            ), $(d, "animationDuration", `${s}ms`), Z(d, b);
          })
        )
      );
    }
    const Re = {
      in: Xr,
      out(t, e, s, a) {
        return Xr(t, e, s, a, !0);
      },
      inProgress(t) {
        return V(t, Jn);
      },
      cancel(t) {
        M(t, Fi);
      }
    };
    function Ch(t) {
      if (document.readyState !== "loading") {
        t();
        return;
      }
      $t(document, "DOMContentLoaded", t);
    }
    function kt(t, ...e) {
      return e.some((s) => {
        var a;
        return ((a = t == null ? void 0 : t.tagName) == null ? void 0 : a.toLowerCase()) === s.toLowerCase();
      });
    }
    function Yr(t) {
      return t = K(t), t.innerHTML = "", t;
    }
    function Pe(t, e) {
      return jt(e) ? K(t).innerHTML : Ot(Yr(t), e);
    }
    const Ah = ji("prepend"), Ot = ji("append"), Ii = ji("before"), Di = ji("after");
    function ji(t) {
      return function(e, s) {
        var a;
        const u = nt(mt(s) ? Ve(s) : s);
        return (a = K(e)) == null || a[t](...u), Qr(u);
      };
    }
    function ie(t) {
      nt(t).forEach((e) => e.remove());
    }
    function Li(t, e) {
      for (e = St(Ii(t, e)); e.firstElementChild; )
        e = e.firstElementChild;
      return Ot(e, t), e;
    }
    function no(t, e) {
      return nt(
        nt(t).map(
          (s) => s.hasChildNodes() ? Li(y(s.childNodes), e) : Ot(s, e)
        )
      );
    }
    function Kn(t) {
      nt(t).map(ct).filter((e, s, a) => a.indexOf(e) === s).forEach((e) => e.replaceWith(...e.childNodes));
    }
    const Rh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function Ve(t) {
      const e = Rh.exec(t);
      if (e)
        return document.createElement(e[1]);
      const s = document.createElement("template");
      return s.innerHTML = t.trim(), Qr(s.content.childNodes);
    }
    function Qr(t) {
      return t.length > 1 ? t : t[0];
    }
    function Ne(t, e) {
      if (Tt(t))
        for (e(t), t = t.firstElementChild; t; )
          Ne(t, e), t = t.nextElementSibling;
    }
    function K(t, e) {
      return Zr(t) ? St(Ve(t)) : Ks(t, e);
    }
    function gt(t, e) {
      return Zr(t) ? nt(Ve(t)) : Vn(t, e);
    }
    function Zr(t) {
      return mt(t) && v(t.trim(), "<");
    }
    const Je = {
      width: ["left", "right"],
      height: ["top", "bottom"]
    };
    function U(t) {
      const e = Tt(t) ? St(t).getBoundingClientRect() : { height: Vt(t), width: Ui(t), top: 0, left: 0 };
      return {
        height: e.height,
        width: e.width,
        top: e.top,
        left: e.left,
        bottom: e.top + e.height,
        right: e.left + e.width
      };
    }
    function et(t, e) {
      e && $(t, { left: 0, top: 0 });
      const s = U(t);
      if (t) {
        const { scrollY: a, scrollX: u } = Ue(t), d = { height: a, width: u };
        for (const f in Je)
          for (const p of Je[f])
            s[p] += d[f];
      }
      if (!e)
        return s;
      for (const a of ["left", "top"])
        $(t, a, e[a] - s[a]);
    }
    function io(t) {
      let { top: e, left: s } = et(t);
      const {
        ownerDocument: { body: a, documentElement: u },
        offsetParent: d
      } = St(t);
      let f = d || u;
      for (; f && (f === a || f === u) && $(f, "position") === "static"; )
        f = f.parentNode;
      if (Tt(f)) {
        const p = et(f);
        e -= p.top + Q($(f, "borderTopWidth")), s -= p.left + Q($(f, "borderLeftWidth"));
      }
      return {
        top: e - Q($(t, "marginTop")),
        left: s - Q($(t, "marginLeft"))
      };
    }
    function Gn(t) {
      t = St(t);
      const e = [t.offsetTop, t.offsetLeft];
      for (; t = t.offsetParent; )
        if (e[0] += t.offsetTop + Q($(t, "borderTopWidth")), e[1] += t.offsetLeft + Q($(t, "borderLeftWidth")), $(t, "position") === "fixed") {
          const s = Ue(t);
          return e[0] += s.scrollY, e[1] += s.scrollX, e;
        }
      return e;
    }
    const Vt = ta("height"), Ui = ta("width");
    function ta(t) {
      const e = g(t);
      return (s, a) => {
        if (jt(a)) {
          if (yt(s))
            return s[`inner${e}`];
          if (bt(s)) {
            const u = s.documentElement;
            return Math.max(u[`offset${e}`], u[`scroll${e}`]);
          }
          return s = St(s), a = $(s, t), a = a === "auto" ? s[`offset${e}`] : Q(a) || 0, a - yn(s, t);
        } else
          return $(
            s,
            t,
            !a && a !== 0 ? "" : +a + yn(s, t) + "px"
          );
      };
    }
    function yn(t, e, s = "border-box") {
      return $(t, "boxSizing") === s ? ze(
        Je[e],
        (a) => Q($(t, `padding-${a}`)) + Q($(t, `border-${a}-width`))
      ) : 0;
    }
    function Mi(t) {
      for (const e in Je)
        for (const s in Je[e])
          if (Je[e][s] === t)
            return Je[e][1 - s];
      return t;
    }
    function Ft(t, e = "width", s = window, a = !1) {
      return mt(t) ? ze(Nh(t), (u) => {
        const d = Fh(u);
        return d ? Ih(
          d === "vh" ? Dh() : d === "vw" ? Ui(Ue(s)) : a ? s[`offset${g(e)}`] : U(s)[e],
          u
        ) : u;
      }) : Q(t);
    }
    const Ph = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, Nh = he((t) => t.toString().replace(/\s/g, "").match(Ph) || []), Bh = /(?:v[hw]|%)$/, Fh = he((t) => (t.match(Bh) || [])[0]);
    function Ih(t, e) {
      return t * Q(e) / 100;
    }
    let Xn, $n;
    function Dh() {
      return Xn || ($n || ($n = K("<div>"), $($n, {
        height: "100vh",
        position: "fixed"
      }), J(window, "resize", () => Xn = null)), Ot(document.body, $n), Xn = $n.clientHeight, ie($n), Xn);
    }
    const Be = { read: jh, write: Lh, clear: Uh, flush: ea }, zi = [], qi = [];
    function jh(t) {
      return zi.push(t), oo(), t;
    }
    function Lh(t) {
      return qi.push(t), oo(), t;
    }
    function Uh(t) {
      ia(zi, t), ia(qi, t);
    }
    let so = !1;
    function ea() {
      na(zi), na(qi.splice(0)), so = !1, (zi.length || qi.length) && oo();
    }
    function oo() {
      so || (so = !0, queueMicrotask(ea));
    }
    function na(t) {
      let e;
      for (; e = t.shift(); )
        try {
          e();
        } catch (s) {
          console.error(s);
        }
    }
    function ia(t, e) {
      const s = t.indexOf(e);
      return ~s && t.splice(s, 1);
    }
    class sa {
      init() {
        this.positions = [];
        let e;
        this.unbind = J(document, "mousemove", (s) => e = Ee(s)), this.interval = setInterval(() => {
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
        const s = U(e), { left: a, right: u, top: d, bottom: f } = s, [p] = this.positions, b = Me(this.positions), k = [p, b];
        return Ti(b, s) ? !1 : [
          [
            { x: a, y: d },
            { x: u, y: f }
          ],
          [
            { x: a, y: f },
            { x: u, y: d }
          ]
        ].some((P) => {
          const N = Mh(k, P);
          return N && Ti(N, s);
        });
      }
    }
    function Mh([{ x: t, y: e }, { x: s, y: a }], [{ x: u, y: d }, { x: f, y: p }]) {
      const b = (p - d) * (s - t) - (f - u) * (a - e);
      if (b === 0)
        return !1;
      const k = ((f - u) * (e - d) - (p - d) * (t - u)) / b;
      return k < 0 ? !1 : { x: t + k * (s - t), y: e + k * (a - e) };
    }
    function oa(t, e, s = {}, { intersecting: a = !0 } = {}) {
      const u = new IntersectionObserver(
        a ? (d, f) => {
          d.some((p) => p.isIntersecting) && e(d, f);
        } : e,
        s
      );
      for (const d of nt(t))
        u.observe(d);
      return u;
    }
    const zh = He && window.ResizeObserver;
    function Yn(t, e, s = { box: "border-box" }) {
      if (zh)
        return ra(ResizeObserver, t, e, s);
      const a = [J(window, "load resize", e), J(document, "loadedmetadata load", e, !0)];
      return { disconnect: () => a.map((u) => u()) };
    }
    function ro(t) {
      return { disconnect: J([window, window.visualViewport], "resize", t) };
    }
    function ao(t, e, s) {
      return ra(MutationObserver, t, e, s);
    }
    function ra(t, e, s, a) {
      const u = new t(s);
      for (const d of nt(e))
        u.observe(d, a);
      return u;
    }
    function lo(t) {
      Vi(t) && co(t, { func: "playVideo", method: "play" }), Wi(t) && t.play().catch(at);
    }
    function Hi(t) {
      Vi(t) && co(t, { func: "pauseVideo", method: "pause" }), Wi(t) && t.pause();
    }
    function aa(t) {
      Vi(t) && co(t, { func: "mute", method: "setVolume", value: 0 }), Wi(t) && (t.muted = !0);
    }
    function la(t) {
      return Wi(t) || Vi(t);
    }
    function Wi(t) {
      return kt(t, "video");
    }
    function Vi(t) {
      return kt(t, "iframe") && (ca(t) || ua(t));
    }
    function ca(t) {
      return !!t.src.match(
        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
      );
    }
    function ua(t) {
      return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function co(t, e) {
      await Hh(t), ha(t, e);
    }
    function ha(t, e) {
      t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
    }
    const uo = "_ukPlayer";
    let qh = 0;
    function Hh(t) {
      if (t[uo])
        return t[uo];
      const e = ca(t), s = ua(t), a = ++qh;
      let u;
      return t[uo] = new Promise((d) => {
        e && $t(t, "load", () => {
          const f = () => ha(t, { event: "listening", id: a });
          u = setInterval(f, 100), f();
        }), $t(window, "message", d, !1, ({ data: f }) => {
          try {
            return f = JSON.parse(f), e && (f == null ? void 0 : f.id) === a && f.event === "onReady" || s && Number(f == null ? void 0 : f.player_id) === a;
          } catch {
          }
        }), t.src = `${t.src}${S(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${a}`}`;
      }).then(() => clearInterval(u));
    }
    function Wh(t, e = 0, s = 0) {
      return _t(t) ? Oi(
        ...Ge(t).map((a) => {
          const { top: u, left: d, bottom: f, right: p } = se(a);
          return {
            top: u - e,
            left: d - s,
            bottom: f + e,
            right: p + s
          };
        }).concat(et(t))
      ) : !1;
    }
    function da(t, { offset: e = 0 } = {}) {
      const s = _t(t) ? Ke(t, !1, ["hidden"]) : [];
      return s.reduce(
        (f, p, b) => {
          const { scrollTop: k, scrollHeight: E, offsetHeight: P } = p, N = se(p), I = E - N.height, { height: q, top: tt } = s[b - 1] ? se(s[b - 1]) : et(t);
          let st = Math.ceil(tt - N.top - e + k);
          return e > 0 && P < q + e ? st += e : e = 0, st > I ? (e -= st - I, st = I) : st < 0 && (e -= st, st = 0), () => a(p, st - k, t, I).then(f);
        },
        () => Promise.resolve()
      )();
      function a(f, p, b, k) {
        return new Promise((E) => {
          const P = f.scrollTop, N = u(Math.abs(p)), I = Date.now(), q = po(f) === f, tt = et(b).top + (q ? 0 : P);
          let st = 0, $e = 15;
          (function Cn() {
            const An = d(zt((Date.now() - I) / N));
            let ke = 0;
            s[0] === f && P + p < k && (ke = et(b).top + (q ? 0 : f.scrollTop) - tt - U(ho(b)).height), $(f, "scrollBehavior") !== "auto" && $(f, "scrollBehavior", "auto"), f.scrollTop = P + (p + ke) * An, $(f, "scrollBehavior", ""), An === 1 && (st === ke || !$e--) ? E() : (st = ke, requestAnimationFrame(Cn));
          })();
        });
      }
      function u(f) {
        return 40 * Math.pow(f, 0.375);
      }
      function d(f) {
        return 0.5 * (1 - Math.cos(Math.PI * f));
      }
    }
    function Ji(t, e = 0, s = 0) {
      if (!_t(t))
        return 0;
      const a = Fe(t, !0), { scrollHeight: u, scrollTop: d } = a, { height: f } = se(a), p = u - f, b = Gn(t)[0] - Gn(a)[0], k = Math.max(0, b - f + e), E = Math.min(p, b + t.offsetHeight - s);
      return k < E ? zt((d - k) / (E - k)) : 1;
    }
    function Ke(t, e = !1, s = []) {
      const a = po(t);
      let u = Hn(t).reverse();
      u = u.slice(u.indexOf(a) + 1);
      const d = O(u, (f) => $(f, "position") === "fixed");
      return ~d && (u = u.slice(d)), [a].concat(
        u.filter(
          (f) => $(f, "overflow").split(" ").some((p) => S(["auto", "scroll", ...s], p)) && (!e || f.scrollHeight > se(f).height)
        )
      ).reverse();
    }
    function Fe(...t) {
      return Ke(...t)[0];
    }
    function Ge(t) {
      return Ke(t, !1, ["hidden", "clip"]);
    }
    function se(t) {
      const e = Ue(t), s = po(t), a = !pt(t) || t.contains(s);
      if (a && e.visualViewport) {
        let { height: b, width: k, scale: E, pageTop: P, pageLeft: N } = e.visualViewport;
        return b = Math.round(b * E), k = Math.round(k * E), { height: b, width: k, top: P, left: N, bottom: P + b, right: N + k };
      }
      let u = et(a ? e : t);
      if ($(t, "display") === "inline")
        return u;
      const { body: d, documentElement: f } = e.document, p = a ? s === f || // In quirks mode the scrolling element is body, even though the viewport is html
      s.clientHeight < d.clientHeight ? s : d : t;
      for (let [b, k, E, P] of [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
      ]) {
        const N = u[b] % 1;
        u[E] += Q($(p, `border-${E}-width`)), u[b] = u[k] = p[`client${g(b)}`] - (N ? N < 0.5 ? -N : 1 - N : 0), u[P] = u[b] + u[E];
      }
      return u;
    }
    function ho(t) {
      const { left: e, width: s, top: a } = U(t);
      for (const u of a ? [0, a] : [0]) {
        let d;
        for (const f of Ue(t).document.elementsFromPoint(e + s / 2, u))
          !f.contains(t) && // If e.g. Offcanvas is not yet closed
          !V(f, "uk-togglable-leave") && (fo(f, "fixed") && fa(
            Hn(t).reverse().find(
              (p) => !p.contains(f) && !fo(p, "static")
            )
          ) < fa(f) || fo(f, "sticky") && ct(f).contains(t)) && (!d || U(d).height < U(f).height) && (d = f);
        if (d)
          return d;
      }
    }
    function fa(t) {
      return Q($(t, "zIndex"));
    }
    function fo(t, e) {
      return $(t, "position") === e;
    }
    function po(t) {
      return Ue(t).document.scrollingElement;
    }
    const oe = [
      ["width", "x", "left", "right"],
      ["height", "y", "top", "bottom"]
    ];
    function pa(t, e, s) {
      s = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...s.attach
        },
        offset: [0, 0],
        placement: [],
        ...s
      }, x(e) || (e = [e, e]), et(t, ma(t, e, s));
    }
    function ma(t, e, s) {
      const a = ga(t, e, s), { boundary: u, viewportOffset: d = 0, placement: f } = s;
      let p = a;
      for (const [b, [k, , E, P]] of Object.entries(oe)) {
        const N = Vh(t, e[b], d, u, b);
        if (Ki(a, N, b))
          continue;
        let I = 0;
        if (f[b] === "flip") {
          const q = s.attach.target[b];
          if (q === P && a[P] <= N[P] || q === E && a[E] >= N[E])
            continue;
          I = Kh(t, e, s, b)[E] - a[E];
          const tt = Jh(t, e[b], d, b);
          if (!Ki(mo(a, I, b), tt, b)) {
            if (Ki(a, tt, b))
              continue;
            if (s.recursion)
              return !1;
            const st = Gh(t, e, s);
            if (st && Ki(st, tt, 1 - b))
              return st;
            continue;
          }
        } else if (f[b] === "shift") {
          const q = et(e[b]), { offset: tt } = s;
          I = zt(
            zt(a[E], N[E], N[P] - a[k]),
            q[E] - a[k] + tt[b],
            q[P] - tt[b]
          ) - a[E];
        }
        p = mo(p, I, b);
      }
      return p;
    }
    function ga(t, e, s) {
      let { attach: a, offset: u } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...s.attach
        },
        offset: [0, 0],
        ...s
      }, d = et(t);
      for (const [f, [p, , b, k]] of Object.entries(oe)) {
        const E = a.target[f] === a.element[f] ? se(e[f]) : et(e[f]);
        d = mo(
          d,
          E[b] - d[b] + ba(a.target[f], k, E[p]) - ba(a.element[f], k, d[p]) + +u[f],
          f
        );
      }
      return d;
    }
    function mo(t, e, s) {
      const [, a, u, d] = oe[s], f = { ...t };
      return f[u] = t[a] = t[u] + e, f[d] += e, f;
    }
    function ba(t, e, s) {
      return t === "center" ? s / 2 : t === e ? s : 0;
    }
    function Vh(t, e, s, a, u) {
      let d = wa(...va(t, e).map(se));
      return s && (d[oe[u][2]] += s, d[oe[u][3]] -= s), a && (d = wa(
        d,
        et(x(a) ? a[u] : a)
      )), d;
    }
    function Jh(t, e, s, a) {
      const [u, d, f, p] = oe[a], [b] = va(t, e), k = se(b);
      return ["auto", "scroll"].includes($(b, `overflow-${d}`)) && (k[f] -= b[`scroll${g(f)}`], k[p] = k[f] + b[`scroll${g(u)}`]), k[f] += s, k[p] -= s, k;
    }
    function va(t, e) {
      return Ge(e).filter((s) => s.contains(t));
    }
    function wa(...t) {
      let e = {};
      for (const s of t)
        for (const [, , a, u] of oe)
          e[a] = Math.max(e[a] || 0, s[a]), e[u] = Math.min(...[e[u], s[u]].filter(Boolean));
      return e;
    }
    function Ki(t, e, s) {
      const [, , a, u] = oe[s];
      return t[a] >= e[a] && t[u] <= e[u];
    }
    function Kh(t, e, { offset: s, attach: a }, u) {
      return ga(t, e, {
        attach: {
          element: ya(a.element, u),
          target: ya(a.target, u)
        },
        offset: Xh(s, u)
      });
    }
    function Gh(t, e, s) {
      return ma(t, e, {
        ...s,
        attach: {
          element: s.attach.element.map($a).reverse(),
          target: s.attach.target.map($a).reverse()
        },
        offset: s.offset.reverse(),
        placement: s.placement.reverse(),
        recursion: !0
      });
    }
    function ya(t, e) {
      const s = [...t], a = oe[e].indexOf(t[e]);
      return ~a && (s[e] = oe[e][1 - a % 2 + 2]), s;
    }
    function $a(t) {
      for (let e = 0; e < oe.length; e++) {
        const s = oe[e].indexOf(t);
        if (~s)
          return oe[1 - e][s % 2 + 2];
      }
    }
    function Xh(t, e) {
      return t = [...t], t[e] *= -1, t;
    }
    var Yh = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $: K,
      $$: gt,
      Animation: Re,
      Dimensions: Ws,
      MouseTracker: sa,
      Transition: ht,
      addClass: Z,
      after: Di,
      append: Ot,
      apply: Ne,
      assign: j,
      attr: D,
      before: Ii,
      boxModelAdjust: yn,
      camelize: w,
      children: ut,
      clamp: zt,
      createEvent: wn,
      css: $,
      data: Lt,
      dimensions: U,
      each: pn,
      empty: Yr,
      endsWith: _,
      escape: Xs,
      fastdom: Be,
      filter: qn,
      find: Ks,
      findAll: Vn,
      findIndex: O,
      flipPosition: Mi,
      fragment: Ve,
      getCoveringElement: ho,
      getEventPos: Ee,
      getIndex: ne,
      getTargetedElement: Js,
      hasAttr: Te,
      hasClass: V,
      hasOwn: l,
      hasTouch: mn,
      height: Vt,
      html: Pe,
      hyphenate: h,
      inBrowser: He,
      includes: S,
      index: Se,
      intersectRect: Oi,
      isArray: x,
      isBoolean: Dt,
      isDocument: bt,
      isElement: Tt,
      isEmpty: _i,
      isEqual: Ln,
      isFocusable: Ni,
      isFunction: L,
      isInView: Wh,
      isInput: Pi,
      isNode: pt,
      isNumber: jn,
      isNumeric: ye,
      isObject: F,
      isPlainObject: H,
      isRtl: Nt,
      isSameSiteAnchor: vn,
      isString: mt,
      isTag: kt,
      isTouch: pe,
      isUndefined: jt,
      isVideo: la,
      isVisible: _t,
      isVoidElement: Vs,
      isWindow: yt,
      last: Me,
      matches: it,
      memoize: he,
      mute: aa,
      noop: at,
      observeIntersection: oa,
      observeMutation: ao,
      observeResize: Yn,
      observeViewportResize: ro,
      off: Ae,
      offset: et,
      offsetPosition: Gn,
      offsetViewport: se,
      on: J,
      once: $t,
      overflowParents: Ge,
      parent: ct,
      parents: Hn,
      pause: Hi,
      pick: qs,
      play: lo,
      pointInRect: Ti,
      pointerCancel: Ri,
      pointerDown: de,
      pointerEnter: We,
      pointerLeave: bn,
      pointerMove: Ai,
      pointerUp: Ce,
      position: io,
      positionAt: pa,
      prepend: Ah,
      propName: Bi,
      query: Ht,
      queryAll: Wn,
      ready: Ch,
      remove: ie,
      removeAttr: Un,
      removeClass: rt,
      replaceClass: Ci,
      scrollIntoView: da,
      scrollParent: Fe,
      scrollParents: Ke,
      scrolledOver: Ji,
      selFocusable: zn,
      selInput: Mn,
      sortBy: Mr,
      startsWith: v,
      sumBy: ze,
      swap: zs,
      toArray: y,
      toBoolean: Ms,
      toEventTargets: Qs,
      toFloat: Q,
      toNode: St,
      toNodes: nt,
      toNumber: xe,
      toPx: Ft,
      toWindow: Ue,
      toggleClass: Et,
      trigger: M,
      ucfirst: g,
      uniqueBy: zr,
      unwrap: Kn,
      width: Ui,
      wrapAll: Li,
      wrapInner: no
    }), Jt = {
      connected() {
        Z(this.$el, this.$options.id);
      }
    };
    const Qh = ["days", "hours", "minutes", "seconds"];
    var Zh = {
      mixins: [Jt],
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
        D(this.$el, "role", this.role), this.date = Q(Date.parse(this.$props.date)), this.end = !1, this.start();
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
          this.stop(), this.update(), this.timer || (M(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3));
        },
        stop() {
          this.timer && (clearInterval(this.timer), M(this.$el, "countdownstop"), this.timer = null);
        },
        update() {
          const t = td(this.date);
          t.total || (this.stop(), this.end || (M(this.$el, "countdownend"), this.end = !0));
          for (const e of Qh) {
            const s = K(this.clsWrapper.replace("%unit%", e), this.$el);
            if (!s)
              continue;
            let a = Math.trunc(t[e]).toString().padStart(2, "0");
            s.textContent !== a && (a = a.split(""), a.length !== s.children.length && Pe(s, a.map(() => "<span></span>").join("")), a.forEach((u, d) => s.children[d].textContent = u));
          }
        }
      }
    };
    function td(t) {
      const e = Math.max(0, t - Date.now()) / 1e3;
      return {
        total: e,
        seconds: e % 60,
        minutes: e / 60 % 60,
        hours: e / 60 / 60 % 24,
        days: e / 60 / 60 / 24
      };
    }
    const Bt = {};
    Bt.events = Bt.watch = Bt.observe = Bt.created = Bt.beforeConnect = Bt.connected = Bt.beforeDisconnect = Bt.disconnected = Bt.destroy = go, Bt.args = function(t, e) {
      return e !== !1 && go(e || t);
    }, Bt.update = function(t, e) {
      return Mr(
        go(t, L(e) ? { read: e } : e),
        "order"
      );
    }, Bt.props = function(t, e) {
      if (x(e)) {
        const s = {};
        for (const a of e)
          s[a] = String;
        e = s;
      }
      return Bt.methods(t, e);
    }, Bt.computed = Bt.methods = function(t, e) {
      return e ? t ? { ...t, ...e } : e : t;
    }, Bt.i18n = Bt.data = function(t, e, s) {
      return s ? ka(t, e, s) : e ? t ? function(a) {
        return ka(t, e, a);
      } : e : t;
    };
    function ka(t, e, s) {
      return Bt.computed(
        L(t) ? t.call(s, s) : t,
        L(e) ? e.call(s, s) : e
      );
    }
    function go(t, e) {
      return t = t && !x(t) ? [t] : t, e ? t ? t.concat(e) : x(e) ? e : [e] : t;
    }
    function ed(t, e) {
      return jt(e) ? t : e;
    }
    function Qn(t, e, s) {
      const a = {};
      if (L(e) && (e = e.options), e.extends && (t = Qn(t, e.extends, s)), e.mixins)
        for (const d of e.mixins)
          t = Qn(t, d, s);
      for (const d in t)
        u(d);
      for (const d in e)
        l(t, d) || u(d);
      function u(d) {
        a[d] = (Bt[d] || ed)(t[d], e[d], s);
      }
      return a;
    }
    function kn(t, e = []) {
      try {
        return t ? v(t, "{") ? JSON.parse(t) : e.length && !S(t, ":") ? { [e[0]]: t } : t.split(";").reduce((s, a) => {
          const [u, d] = a.split(/:(.*)/);
          return u && !jt(d) && (s[u.trim()] = d.trim()), s;
        }, {}) : {};
      } catch {
        return {};
      }
    }
    function bo(t, e) {
      return t === Boolean ? Ms(e) : t === Number ? xe(e) : t === "list" ? id(e) : t === Object && mt(e) ? kn(e) : t ? t(e) : e;
    }
    const nd = /,(?![^(]*\))/;
    function id(t) {
      return x(t) ? t : mt(t) ? t.split(nd).map((e) => ye(e) ? xe(e) : Ms(e.trim())) : [t];
    }
    function sd(t) {
      t._data = {}, t._updates = [...t.$options.update || []], t._disconnect.push(() => t._updates = t._data = null);
    }
    function od(t, e) {
      t._updates.unshift(e);
    }
    function Zn(t, e = "update") {
      t._connected && t._updates.length && (t._queued || (t._queued = /* @__PURE__ */ new Set(), Be.read(() => {
        t._connected && rd(t, t._queued), t._queued = null;
      })), t._queued.add(e.type || e));
    }
    function rd(t, e) {
      for (const { read: s, write: a, events: u = [] } of t._updates) {
        if (!e.has("update") && !u.some((f) => e.has(f)))
          continue;
        let d;
        s && (d = s.call(t, t._data, e), d && H(d) && j(t._data, d)), a && d !== !1 && Be.write(() => {
          t._connected && a.call(t, t._data, e);
        });
      }
    }
    function fe(t) {
      return ei(Yn, t, "resize");
    }
    function xn(t) {
      return ei(oa, t);
    }
    function Gi(t) {
      return ei(ao, t);
    }
    function Xi(t = {}) {
      return xn({
        handler: function(e, s) {
          const { targets: a = this.$el, preload: u = 5 } = t;
          for (const d of nt(L(a) ? a(this) : a))
            gt('[loading="lazy"]', d).slice(0, u - 1).forEach((f) => Un(f, "loading"));
          for (const d of e.filter(({ isIntersecting: f }) => f).map(({ target: f }) => f))
            s.unobserve(d);
        },
        ...t
      });
    }
    function vo(t) {
      return ei((e, s) => ro(s), t, "resize");
    }
    function ti(t) {
      return ei(
        (e, s) => ({
          disconnect: J(ld(e), "scroll", s, { passive: !0 })
        }),
        t,
        "scroll"
      );
    }
    function xa(t) {
      return {
        observe(e, s) {
          return {
            observe: at,
            unobserve: at,
            disconnect: J(e, de, s, { passive: !0 })
          };
        },
        handler(e) {
          if (!pe(e))
            return;
          const s = Ee(e), a = "tagName" in e.target ? e.target : ct(e.target);
          $t(document, `${Ce} ${Ri} scroll`, (u) => {
            const { x: d, y: f } = Ee(u);
            (u.type !== "scroll" && a && d && Math.abs(s.x - d) > 100 || f && Math.abs(s.y - f) > 100) && setTimeout(() => {
              M(a, "swipe"), M(a, `swipe${ad(s.x, s.y, d, f)}`);
            });
          });
        },
        ...t
      };
    }
    function ei(t, e, s) {
      return {
        observe: t,
        handler() {
          Zn(this, s);
        },
        ...e
      };
    }
    function ad(t, e, s, a) {
      return Math.abs(t - s) >= Math.abs(e - a) ? t - s > 0 ? "Left" : "Right" : e - a > 0 ? "Up" : "Down";
    }
    function ld(t) {
      return nt(t).map((e) => {
        const { ownerDocument: s } = e, a = Fe(e, !0);
        return a === s.scrollingElement ? s : a;
      });
    }
    var Sa = {
      props: {
        margin: String,
        firstColumn: Boolean
      },
      data: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column"
      },
      observe: [
        Gi({
          options: {
            childList: !0
          }
        }),
        Gi({
          options: {
            attributes: !0,
            attributeFilter: ["style"]
          },
          target: ({ $el: t }) => [t, ...ut(t)]
        }),
        fe({
          target: ({ $el: t }) => [t, ...ut(t)]
        })
      ],
      update: {
        read() {
          return {
            rows: wo(ut(this.$el))
          };
        },
        write({ rows: t }) {
          for (const e of t)
            for (const s of e)
              Et(s, this.margin, t[0] !== e), Et(s, this.firstColumn, e[Nt ? e.length - 1 : 0] === s);
        },
        events: ["resize"]
      }
    };
    function wo(t) {
      const e = [[]], s = t.some(
        (a, u) => u && t[u - 1].offsetParent !== a.offsetParent
      );
      for (const a of t) {
        if (!_t(a))
          continue;
        const u = yo(a, s);
        for (let d = e.length - 1; d >= 0; d--) {
          const f = e[d];
          if (!f[0]) {
            f.push(a);
            break;
          }
          const p = yo(f[0], s);
          if (u.top >= p.bottom - 1 && u.top !== p.top) {
            e.push([a]);
            break;
          }
          if (u.bottom - 1 > p.top || u.top === p.top) {
            let b = f.length - 1;
            for (; b >= 0; b--) {
              const k = yo(f[b], s);
              if (u.left >= k.left)
                break;
            }
            f.splice(b + 1, 0, a);
            break;
          }
          if (d === 0) {
            e.unshift([a]);
            break;
          }
        }
      }
      return e;
    }
    function yo(t, e = !1) {
      let { offsetTop: s, offsetLeft: a, offsetHeight: u, offsetWidth: d } = t;
      return e && ([s, a] = Gn(t)), {
        top: s,
        left: a,
        bottom: s + u,
        right: a + d
      };
    }
    async function cd(t, e, s) {
      await $o();
      let a = ut(e);
      const u = a.map((I) => Ea(I, !0)), d = { ...$(e, ["height", "padding"]), display: "block" }, f = a.concat(e);
      await Promise.all(f.map(ht.cancel)), $(f, "transitionProperty", "none"), await t(), a = a.concat(ut(e).filter((I) => !S(a, I))), await Promise.resolve(), $(f, "transitionProperty", "");
      const p = D(e, "style"), b = $(e, ["height", "padding"]), [k, E] = ud(e, a, u), P = a.map((I) => ({ style: D(I, "style") }));
      a.forEach((I, q) => E[q] && $(I, E[q])), $(e, d), M(e, "scroll"), await $o();
      const N = a.map((I, q) => ct(I) === e && ht.start(I, k[q], s, "ease")).concat(ht.start(e, b, s, "ease"));
      try {
        await Promise.all(N), a.forEach((I, q) => {
          D(I, P[q]), ct(I) === e && $(I, "display", k[q].opacity === 0 ? "none" : "");
        }), D(e, "style", p);
      } catch {
        D(a, "style", ""), hd(e, d);
      }
    }
    function Ea(t, e) {
      const s = $(t, "zIndex");
      return _t(t) ? {
        display: "",
        opacity: e ? $(t, "opacity") : "0",
        pointerEvents: "none",
        position: "absolute",
        zIndex: s === "auto" ? Se(t) : s,
        ..._a(t)
      } : !1;
    }
    function ud(t, e, s) {
      const a = e.map(
        (d, f) => ct(d) && f in s ? s[f] ? _t(d) ? _a(d) : { opacity: 0 } : { opacity: _t(d) ? 1 : 0 } : !1
      ), u = a.map((d, f) => {
        const p = ct(e[f]) === t && (s[f] || Ea(e[f]));
        if (!p)
          return !1;
        if (!d)
          delete p.opacity;
        else if (!("opacity" in d)) {
          const { opacity: b } = p;
          b % 1 ? d.opacity = 1 : delete p.opacity;
        }
        return p;
      });
      return [a, u];
    }
    function hd(t, e) {
      for (const s in e)
        $(t, s, "");
    }
    function _a(t) {
      const { height: e, width: s } = U(t);
      return {
        height: e,
        width: s,
        transform: "",
        ...io(t),
        ...$(t, ["marginTop", "marginLeft"])
      };
    }
    function $o() {
      return new Promise((t) => requestAnimationFrame(t));
    }
    const ko = "uk-transition-leave", xo = "uk-transition-enter";
    function Oa(t, e, s, a = 0) {
      const u = Yi(e, !0), d = { opacity: 1 }, f = { opacity: 0 }, p = (E) => () => u === Yi(e) ? E() : Promise.reject(), b = p(async () => {
        Z(e, ko), await Promise.all(
          Ca(e).map(
            (E, P) => new Promise(
              (N) => setTimeout(
                () => ht.start(E, f, s / 2, "ease").then(
                  N
                ),
                P * a
              )
            )
          )
        ), rt(e, ko);
      }), k = p(async () => {
        const E = Vt(e);
        Z(e, xo), t(), $(ut(e), { opacity: 0 }), await $o();
        const P = ut(e), N = Vt(e);
        $(e, "alignContent", "flex-start"), Vt(e, E);
        const I = Ca(e);
        $(P, f);
        const q = I.map(async (tt, st) => {
          await dd(st * a), await ht.start(tt, d, s / 2, "ease");
        });
        E !== N && q.push(
          ht.start(
            e,
            { height: N },
            s / 2 + I.length * a,
            "ease"
          )
        ), await Promise.all(q).then(() => {
          rt(e, xo), u === Yi(e) && ($(e, { height: "", alignContent: "" }), $(P, { opacity: "" }), delete e.dataset.transition);
        });
      });
      return V(e, ko) ? Ta(e).then(k) : V(e, xo) ? Ta(e).then(b).then(k) : b().then(k);
    }
    function Yi(t, e) {
      return e && (t.dataset.transition = 1 + Yi(t)), xe(t.dataset.transition) || 0;
    }
    function Ta(t) {
      return Promise.all(
        ut(t).filter(ht.inProgress).map(
          (e) => new Promise((s) => $t(e, "transitionend transitioncanceled", s))
        )
      );
    }
    function Ca(t) {
      return wo(ut(t)).flat().filter(_t);
    }
    function dd(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    var Aa = {
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
          const s = this.animation;
          return (s === "fade" ? Oa : s === "delayed-fade" ? (...u) => Oa(...u, 40) : s ? cd : () => (t(), Promise.resolve()))(t, e, this.duration).catch(at);
        }
      }
    };
    const lt = {
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
    var fd = {
      mixins: [Aa],
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
        children: ({ target: t }, e) => gt(`${t} > *`, e),
        toggles: ({ attrItem: t }, e) => gt(`[${t}],[data-${t}]`, e)
      },
      watch: {
        toggles(t) {
          this.updateState();
          const e = gt(this.selActive, this.$el);
          for (const s of t) {
            this.selActive !== !1 && Et(s, this.cls, S(e, s));
            const a = vd(s);
            kt(a, "a") && D(a, "role", "button");
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
          t.type === "keydown" && t.keyCode !== lt.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current));
        }
      },
      methods: {
        apply(t) {
          const e = this.getState(), s = Pa(t, this.attrItem, this.getState());
          pd(e, s) || this.setState(s);
        },
        getState() {
          return this.toggles.filter((t) => V(t, this.cls)).reduce((t, e) => Pa(e, this.attrItem, t), {
            filter: { "": "" },
            sort: []
          });
        },
        async setState(t, e = !0) {
          t = { filter: { "": "" }, sort: [], ...t }, M(this.$el, "beforeFilter", [this, t]);
          for (const s of this.toggles)
            Et(s, this.cls, gd(s, this.attrItem, t));
          await Promise.all(
            gt(this.target, this.$el).map((s) => {
              const a = () => md(t, s, ut(s));
              return e ? this.animate(a, s) : a();
            })
          ), M(this.$el, "afterFilter", [this]);
        },
        updateState() {
          Be.write(() => this.setState(this.getState(), !1));
        }
      }
    };
    function Ra(t, e) {
      return kn(Lt(t, e), ["filter"]);
    }
    function pd(t, e) {
      return ["filter", "sort"].every((s) => Ln(t[s], e[s]));
    }
    function md(t, e, s) {
      for (const d of s)
        $(
          d,
          "display",
          Object.values(t.filter).every((f) => !f || it(d, f)) ? "" : "none"
        );
      const [a, u] = t.sort;
      if (a) {
        const d = bd(s, a, u);
        Ln(d, s) || Ot(e, d);
      }
    }
    function Pa(t, e, s) {
      const { filter: a, group: u, sort: d, order: f = "asc" } = Ra(t, e);
      return (a || jt(d)) && (u ? a ? (delete s.filter[""], s.filter[u] = a) : (delete s.filter[u], (_i(s.filter) || "" in s.filter) && (s.filter = { "": a || "" })) : s.filter = { "": a || "" }), jt(d) || (s.sort = [d, f]), s;
    }
    function gd(t, e, { filter: s = { "": "" }, sort: [a, u] }) {
      const { filter: d = "", group: f = "", sort: p, order: b = "asc" } = Ra(t, e);
      return jt(p) ? f in s && d === s[f] || !d && f && !(f in s) && !s[""] : a === p && u === b;
    }
    function bd(t, e, s) {
      return [...t].sort(
        (a, u) => Lt(a, e).localeCompare(Lt(u, e), void 0, { numeric: !0 }) * (s === "asc" || -1)
      );
    }
    function vd(t) {
      return K("a,button", t) || t;
    }
    let So;
    function Na(t) {
      const e = J(
        t,
        "touchstart",
        (a) => {
          if (a.targetTouches.length !== 1 || it(a.target, 'input[type="range"'))
            return;
          let u = Ee(a).y;
          const d = J(
            t,
            "touchmove",
            (f) => {
              const p = Ee(f).y;
              p !== u && (u = p, Ke(f.target).some((b) => {
                if (!t.contains(b))
                  return !1;
                let { scrollHeight: k, clientHeight: E } = b;
                return E < k;
              }) || f.preventDefault());
            },
            { passive: !1 }
          );
          $t(t, "scroll touchend touchcanel", d, { capture: !0 });
        },
        { passive: !0 }
      );
      if (So)
        return e;
      So = !0;
      const { scrollingElement: s } = document;
      return $(s, {
        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
        touchAction: "none",
        paddingRight: Ui(window) - s.clientWidth || ""
      }), () => {
        So = !1, e(), $(s, { overflowY: "", touchAction: "", paddingRight: "" });
      };
    }
    var ni = {
      props: {
        container: Boolean
      },
      data: {
        container: !0
      },
      computed: {
        container({ container: t }) {
          return t === !0 && this.$container || t && K(t);
        }
      }
    }, Xe = {
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
        async toggleElement(t, e, s) {
          try {
            return await Promise.all(
              nt(t).map((a) => {
                const u = Dt(e) ? e : !this.isToggled(a);
                if (!M(a, `before${u ? "show" : "hide"}`, [this]))
                  return Promise.reject();
                const d = (L(s) ? s : s === !1 || !this.hasAnimation ? wd : this.hasTransition ? yd : $d)(a, u, this), f = u ? this.clsEnter : this.clsLeave;
                Z(a, f), M(a, u ? "show" : "hide", [this]);
                const p = () => {
                  rt(a, f), M(a, u ? "shown" : "hidden", [this]);
                };
                return d ? d.then(p, () => (rt(a, f), Promise.reject())) : p();
              })
            ), !0;
          } catch {
            return !1;
          }
        },
        isToggled(t = this.$el) {
          return t = St(t), V(t, this.clsEnter) ? !0 : V(t, this.clsLeave) ? !1 : this.cls ? V(t, this.cls.split(" ")[0]) : _t(t);
        },
        _toggle(t, e) {
          if (!t)
            return;
          e = !!e;
          let s;
          this.cls ? (s = S(this.cls, " ") || e !== V(t, this.cls), s && Et(t, this.cls, S(this.cls, " ") ? void 0 : e)) : (s = e === t.hidden, s && (t.hidden = !e)), s && M(t, "toggled", [e, this]), gt("[autofocus]", t).some((a) => _t(a) ? a.focus() || !0 : a.blur());
        }
      }
    };
    function wd(t, e, { _toggle: s }) {
      return Re.cancel(t), ht.cancel(t), s(t, e);
    }
    async function yd(t, e, { animation: s, duration: a, velocity: u, transition: d, _toggle: f }) {
      var p;
      const [b = "reveal", k = "top"] = ((p = s[0]) == null ? void 0 : p.split("-")) || [], E = [
        ["left", "right"],
        ["top", "bottom"]
      ], P = E[S(E[0], k) ? 0 : 1], N = P[1] === k, q = ["width", "height"][E.indexOf(P)], tt = `margin-${P[0]}`, st = `margin-${k}`;
      let $e = U(t)[q];
      const Cn = ht.inProgress(t);
      await ht.cancel(t), e && f(t, !0);
      const An = Object.fromEntries(
        [
          "padding",
          "border",
          "width",
          "height",
          "minWidth",
          "minHeight",
          "overflowY",
          "overflowX",
          tt,
          st
        ].map((Zl) => [Zl, t.style[Zl]])
      ), ke = U(t), zo = Q($(t, tt)), Xl = Q($(t, st)), sn = ke[q] + Xl;
      !Cn && !e && ($e += Xl);
      const [hs] = no(t, "<div>");
      $(hs, {
        boxSizing: "border-box",
        height: ke.height,
        width: ke.width,
        ...$(t, [
          "overflow",
          "padding",
          "borderTop",
          "borderRight",
          "borderBottom",
          "borderLeft",
          "borderImage",
          st
        ])
      }), $(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [st]: 0,
        width: ke.width,
        height: ke.height,
        overflow: "hidden",
        [q]: $e
      });
      const Yl = $e / sn;
      a = (u * sn + a) * (e ? 1 - Yl : Yl);
      const Ql = { [q]: e ? sn : 0 };
      N && ($(t, tt, sn - $e + zo), Ql[tt] = e ? zo : sn + zo), !N ^ b === "reveal" && ($(hs, tt, -sn + $e), ht.start(hs, { [tt]: e ? 0 : -sn }, a, d));
      try {
        await ht.start(t, Ql, a, d);
      } finally {
        $(t, An), Kn(hs.firstChild), e || f(t, !1);
      }
    }
    function $d(t, e, s) {
      const { animation: a, duration: u, _toggle: d } = s;
      return e ? (d(t, !0), Re.in(t, a[0], u, s.origin)) : Re.out(t, a[1] || a[0], u, s.origin).then(
        () => d(t, !1)
      );
    }
    const Kt = [];
    var Eo = {
      mixins: [Jt, ni, Xe],
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
        panel: ({ selPanel: t }, e) => K(t, e),
        transitionElement() {
          return this.panel;
        },
        bgClose({ bgClose: t }) {
          return t && this.panel;
        }
      },
      connected() {
        D(this.panel || this.$el, "role", this.role), this.overlay && D(this.panel || this.$el, "aria-modal", !0);
      },
      beforeDisconnect() {
        S(Kt, this) && this.toggleElement(this.$el, !1, !1);
      },
      events: [
        {
          name: "click",
          delegate: ({ selClose: t }) => `${t},a[href*="#"]`,
          handler(t) {
            const { current: e, defaultPrevented: s } = t, { hash: a } = e;
            !s && a && vn(e) && !this.$el.contains(K(a)) ? this.hide() : it(e, this.selClose) && (t.preventDefault(), this.hide());
          }
        },
        {
          name: "toggle",
          self: !0,
          handler(t) {
            t.defaultPrevented || (t.preventDefault(), this.isToggled() === S(Kt, this) && this.toggle());
          }
        },
        {
          name: "beforeshow",
          self: !0,
          handler(t) {
            if (S(Kt, this))
              return !1;
            !this.stack && Kt.length ? (Promise.all(Kt.map((e) => e.hide())).then(this.show), t.preventDefault()) : Kt.push(this);
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            this.stack && $(this.$el, "zIndex", Q($(this.$el, "zIndex")) + Kt.length);
            const t = [
              this.overlay && xd(this),
              this.overlay && Na(this.$el),
              this.bgClose && Sd(this),
              this.escClose && Ed(this)
            ];
            $t(
              this.$el,
              "hidden",
              () => t.forEach((e) => e && e()),
              { self: !0 }
            ), Z(document.documentElement, this.clsPage);
          }
        },
        {
          name: "shown",
          self: !0,
          handler() {
            Ni(this.$el) || D(this.$el, "tabindex", "-1"), it(this.$el, ":focus-within") || this.$el.focus();
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            S(Kt, this) && Kt.splice(Kt.indexOf(this), 1), $(this.$el, "zIndex", ""), Kt.some((t) => t.clsPage === this.clsPage) || rt(document.documentElement, this.clsPage);
          }
        }
      ],
      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },
        show() {
          return this.container && ct(this.$el) !== this.container ? (Ot(this.container, this.$el), new Promise(
            (t) => requestAnimationFrame(() => this.show().then(t))
          )) : this.toggleElement(this.$el, !0, Ba);
        },
        hide() {
          return this.toggleElement(this.$el, !1, Ba);
        }
      }
    };
    function Ba(t, e, { transitionElement: s, _toggle: a }) {
      return new Promise(
        (u, d) => $t(t, "show hide", () => {
          var f;
          (f = t._reject) == null || f.call(t), t._reject = d, a(t, e);
          const p = $t(
            s,
            "transitionstart",
            () => {
              $t(s, "transitionend transitioncancel", u, {
                self: !0
              }), clearTimeout(b);
            },
            { self: !0 }
          ), b = setTimeout(
            () => {
              p(), u();
            },
            kd($(s, "transitionDuration"))
          );
        })
      ).then(() => delete t._reject);
    }
    function kd(t) {
      return t ? _(t, "ms") ? Q(t) : Q(t) * 1e3 : 0;
    }
    function xd(t) {
      return J(document, "focusin", (e) => {
        Me(Kt) === t && !t.$el.contains(e.target) && t.$el.focus();
      });
    }
    function Sd(t) {
      return J(document, de, ({ target: e }) => {
        Me(Kt) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || $t(
          document,
          `${Ce} ${Ri} scroll`,
          ({ defaultPrevented: s, type: a, target: u }) => {
            !s && a === Ce && e === u && t.hide();
          },
          !0
        );
      });
    }
    function Ed(t) {
      return J(document, "keydown", (e) => {
        e.keyCode === 27 && Me(Kt) === t && t.hide();
      });
    }
    var _o = {
      slide: {
        show(t) {
          return [{ transform: xt(t * -100) }, { transform: xt() }];
        },
        percent(t) {
          return ii(t);
        },
        translate(t, e) {
          return [
            { transform: xt(e * -100 * t) },
            { transform: xt(e * 100 * (1 - t)) }
          ];
        }
      }
    };
    function ii(t) {
      return Math.abs(new DOMMatrix($(t, "transform")).m41 / t.offsetWidth);
    }
    function xt(t = 0, e = "%") {
      return t += t ? e : "", `translate3d(${t}, 0, 0)`;
    }
    function Sn(t) {
      return `scale3d(${t}, ${t}, 1)`;
    }
    function _d(t, e, s, { animation: a, easing: u }) {
      const { percent: d, translate: f, show: p = at } = a, b = p(s), { promise: k, resolve: E } = Fa();
      return {
        dir: s,
        show(P, N = 0, I) {
          const q = I ? "linear" : u;
          return P -= Math.round(P * zt(N, -1, 1)), this.translate(N), Ye(e, "itemin", { percent: N, duration: P, timing: q, dir: s }), Ye(t, "itemout", { percent: 1 - N, duration: P, timing: q, dir: s }), Promise.all([
            ht.start(e, b[1], P, q),
            ht.start(t, b[0], P, q)
          ]).then(() => {
            this.reset(), E();
          }, at), k;
        },
        cancel() {
          return ht.cancel([e, t]);
        },
        reset() {
          for (const P in b[0])
            $([e, t], P, "");
        },
        async forward(P, N = this.percent()) {
          return await this.cancel(), this.show(P, N, !0);
        },
        translate(P) {
          this.reset();
          const N = f(P, s);
          $(e, N[1]), $(t, N[0]), Ye(e, "itemtranslatein", { percent: P, dir: s }), Ye(t, "itemtranslateout", { percent: 1 - P, dir: s });
        },
        percent() {
          return d(t || e, e, s);
        },
        getDistance() {
          return t == null ? void 0 : t.offsetWidth;
        }
      };
    }
    function Ye(t, e, s) {
      M(t, wn(e, !1, !1, s));
    }
    function Fa() {
      let t;
      return { promise: new Promise((e) => t = e), resolve: t };
    }
    var Qi = {
      props: {
        i18n: Object
      },
      data: {
        i18n: null
      },
      methods: {
        t(t, ...e) {
          var s, a, u;
          let d = 0;
          return ((u = ((s = this.i18n) == null ? void 0 : s[t]) || ((a = this.$options.i18n) == null ? void 0 : a[t])) == null ? void 0 : u.replace(
            /%s/g,
            () => e[d++] || ""
          )) || "";
        }
      }
    }, Od = {
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
        D(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
      },
      disconnected() {
        this.stopAutoplay();
      },
      update() {
        D(this.slides, "tabindex", "-1");
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
    const si = { passive: !1, capture: !0 }, Ia = { passive: !0, capture: !0 }, Td = "touchstart mousedown", Oo = "touchmove mousemove", Da = "touchend touchcancel mouseup click input scroll", ja = (t) => t.preventDefault();
    var Cd = {
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
          this[t] = (s) => {
            const a = Ee(s).x * (Nt ? -1 : 1);
            this.prevPos = a === this.pos ? this.prevPos : this.pos, this.pos = a, e(s);
          };
        }
      },
      events: [
        {
          name: Td,
          passive: !0,
          delegate: ({ selList: t }) => `${t} > *`,
          handler(t) {
            !this.draggable || this.parallax || !pe(t) && Ad(t.target) || t.target.closest(Mn) || t.button > 0 || this.length < 2 || this.start(t);
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
          name: Oo,
          el: ({ list: t }) => t,
          handler: at,
          ...si
        }
      ],
      methods: {
        start() {
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, J(document, Oo, this.move, si), J(document, Da, this.end, Ia), $(this.list, "userSelect", "none");
        },
        move(t) {
          const e = this.pos - this.drag;
          if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
            return;
          this.dragging || J(this.list, "click", ja, si), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
          let { slides: s, prevIndex: a } = this, u = Math.abs(e), d = this.getIndex(a + this.dir), f = La.call(this, a, d);
          for (; d !== a && u > f; )
            this.drag -= f * this.dir, a = d, u -= f, d = this.getIndex(a + this.dir), f = La.call(this, a, d);
          this.percent = u / f;
          const p = s[a], b = s[d], k = this.index !== d, E = a === d;
          let P;
          for (const N of [this.index, this.prevIndex])
            S([d, a], N) || (M(s[N], "itemhidden", [this]), E && (P = !0, this.prevIndex = a));
          (this.index === a && this.prevIndex !== a || P) && M(s[this.index], "itemshown", [this]), k && (this.prevIndex = a, this.index = d, E || (M(p, "beforeitemhide", [this]), M(p, "itemhide", [this])), M(b, "beforeitemshow", [this]), M(b, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), p, !E && b);
        },
        end() {
          if (Ae(document, Oo, this.move, si), Ae(document, Da, this.end, Ia), this.dragging)
            if (this.dragging = null, this.index === this.prevIndex)
              this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
            else {
              const t = (Nt ? this.dir * (Nt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
              this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(
                this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous",
                !0
              );
            }
          setTimeout(() => Ae(this.list, "click", ja, si)), $(this.list, { userSelect: "" }), this.drag = this.percent = null;
        }
      }
    };
    function La(t, e) {
      return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
    }
    function Ad(t) {
      return $(t, "userSelect") !== "none" && y(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
    }
    function Rd(t) {
      t._watches = [];
      for (const e of t.$options.watch || [])
        for (const [s, a] of Object.entries(e))
          Ua(t, a, s);
      t._initial = !0;
    }
    function Ua(t, e, s) {
      t._watches.push({
        name: s,
        ...H(e) ? e : { handler: e }
      });
    }
    function Pd(t, e) {
      for (const { name: s, handler: a, immediate: u = !0 } of t._watches)
        (t._initial && u || l(e, s) && !Ln(e[s], t[s])) && a.call(t, t[s], e[s]);
      t._initial = !1;
    }
    function Nd(t) {
      const { computed: e } = t.$options;
      if (t._computed = {}, e)
        for (const s in e)
          za(t, s, e[s]);
    }
    const Ma = { subtree: !0, childList: !0 };
    function za(t, e, s) {
      t._hasComputed = !0, Object.defineProperty(t, e, {
        enumerable: !0,
        get() {
          const { _computed: a, $props: u, $el: d } = t;
          if (!l(a, e) && (a[e] = (s.get || s).call(t, u, d), s.observe && t._computedObserver)) {
            const f = s.observe.call(t, u);
            t._computedObserver.observe(
              ["~", "+", "-"].includes(f[0]) ? d.parentElement : d.getRootNode(),
              Ma
            );
          }
          return a[e];
        },
        set(a) {
          const { _computed: u } = t;
          u[e] = s.set ? s.set.call(t, a) : a, jt(u[e]) && delete u[e];
        }
      });
    }
    function Bd(t) {
      t._hasComputed && (od(t, {
        read: () => Pd(t, qa(t)),
        events: ["resize", "computed"]
      }), t._computedObserver = ao(
        t.$el,
        () => Zn(t, "computed"),
        Ma
      ), t._disconnect.push(() => {
        t._computedObserver.disconnect(), t._computedObserver = null, qa(t);
      }));
    }
    function qa(t) {
      const e = { ...t._computed };
      return t._computed = {}, e;
    }
    function Fd(t) {
      for (const e of t.$options.events || [])
        if (l(e, "handler"))
          Ha(t, e);
        else
          for (const s in e)
            Ha(t, e[s], s);
    }
    function Ha(t, e, s) {
      let { name: a, el: u, handler: d, capture: f, passive: p, delegate: b, filter: k, self: E } = H(e) ? e : { name: s, handler: e };
      u = L(u) ? u.call(t, t) : u || t.$el, !(!u || x(u) && !u.length || k && !k.call(t, t)) && t._disconnect.push(
        J(
          u,
          a,
          b ? mt(b) ? b : b.call(t, t) : null,
          mt(d) ? t[d] : d.bind(t),
          { passive: p, capture: f, self: E }
        )
      );
    }
    function Id(t) {
      for (const e of t.$options.observe || [])
        Dd(t, e);
    }
    function Dd(t, e) {
      let { observe: s, target: a = t.$el, handler: u, options: d, filter: f, args: p } = e;
      if (f && !f.call(t, t))
        return;
      const b = `_observe${t._disconnect.length}`;
      L(a) && !l(t, b) && za(t, b, () => {
        const P = a.call(t, t);
        return x(P) ? nt(P) : P;
      }), u = mt(u) ? t[u] : u.bind(t), L(d) && (d = d.call(t, t));
      const k = l(t, b) ? t[b] : a, E = s(k, u, d, p);
      L(a) && x(t[b]) && Ua(
        t,
        { handler: jd(E, d), immediate: !1 },
        b
      ), t._disconnect.push(() => E.disconnect());
    }
    function jd(t, e) {
      return (s, a) => {
        for (const u of a)
          S(s, u) || (t.unobserve ? t.unobserve(u) : t.observe && t.disconnect());
        for (const u of s)
          (!S(a, u) || !t.unobserve) && t.observe(u, e);
      };
    }
    function Ld(t) {
      const { $options: e, $props: s } = t, a = Wa(e);
      j(s, a);
      const { computed: u, methods: d } = e;
      for (let f in s)
        f in a && (!u || !l(u, f)) && (!d || !l(d, f)) && (t[f] = s[f]);
    }
    function Wa(t) {
      const e = {}, { args: s = [], props: a = {}, el: u, id: d } = t;
      if (!a)
        return e;
      for (const p in a) {
        const b = h(p);
        let k = Lt(u, b);
        jt(k) || (k = a[p] === Boolean && k === "" ? !0 : bo(a[p], k), !(b === "target" && v(k, "_")) && (e[p] = k));
      }
      const f = kn(Lt(u, d), s);
      for (const p in f) {
        const b = w(p);
        jt(a[b]) || (e[b] = bo(a[b], f[p]));
      }
      return e;
    }
    const Ud = he((t, e) => {
      const s = Object.keys(e), a = s.concat(t).map((u) => [h(u), `data-${h(u)}`]).flat();
      return { attributes: s, filter: a };
    });
    function Md(t) {
      const { $options: e, $props: s } = t, { id: a, props: u, el: d } = e;
      if (!u)
        return;
      const { attributes: f, filter: p } = Ud(a, u), b = new MutationObserver((k) => {
        const E = Wa(e);
        k.some(({ attributeName: P }) => {
          const N = P.replace("data-", "");
          return (N === a ? f : [w(N), w(P)]).some(
            (I) => !jt(E[I]) && E[I] !== s[I]
          );
        }) && t.$reset();
      });
      b.observe(d, {
        attributes: !0,
        attributeFilter: p
      }), t._disconnect.push(() => b.disconnect());
    }
    function En(t, e) {
      var s;
      (s = t.$options[e]) == null || s.forEach((a) => a.call(t));
    }
    function To(t) {
      t._connected || (Ld(t), En(t, "beforeConnect"), t._connected = !0, t._disconnect = [], Fd(t), sd(t), Rd(t), Id(t), Md(t), Bd(t), En(t, "connected"), Zn(t));
    }
    function Co(t) {
      t._connected && (En(t, "beforeDisconnect"), t._disconnect.forEach((e) => e()), t._disconnect = null, En(t, "disconnected"), t._connected = !1);
    }
    let zd = 0;
    function Va(t, e = {}) {
      e.data = Wd(e, t.constructor.options), t.$options = Qn(t.constructor.options, e, t), t.$props = {}, t._uid = zd++, qd(t), Hd(t), Nd(t), En(t, "created"), e.el && t.$mount(e.el);
    }
    function qd(t) {
      const { data: e = {} } = t.$options;
      for (const s in e)
        t.$props[s] = t[s] = e[s];
    }
    function Hd(t) {
      const { methods: e } = t.$options;
      if (e)
        for (const s in e)
          t[s] = e[s].bind(t);
    }
    function Wd({ data: t = {} }, { args: e = [], props: s = {} }) {
      x(t) && (t = t.slice(0, e.length).reduce((a, u, d) => (H(u) ? j(a, u) : a[e[d]] = u, a), {}));
      for (const a in t)
        jt(t[a]) ? delete t[a] : s[a] && (t[a] = bo(s[a], t[a]));
      return t;
    }
    const re = function(t) {
      Va(this, t);
    };
    re.util = Yh, re.options = {}, re.version = "3.21.13";
    const Vd = "uk-", Qe = "__uikit__", _n = {};
    function Ja(t, e) {
      var s, a;
      const u = Vd + h(t);
      if (!e)
        return _n[u].options || (_n[u] = re.extend(_n[u])), _n[u];
      t = w(t), re[t] = (f, p) => oi(t, f, p);
      const d = (s = e.options) != null ? s : { ...e };
      return d.id = u, d.name = t, (a = d.install) == null || a.call(d, re, d, t), re._initialized && !d.functional && requestAnimationFrame(() => oi(t, `[${u}],[data-${u}]`)), _n[u] = d;
    }
    function oi(t, e, s, ...a) {
      const u = Ja(t);
      return u.options.functional ? new u({ data: H(e) ? e : [e, s, ...a] }) : e ? gt(e).map(d)[0] : d();
      function d(f) {
        const p = Zi(f, t);
        if (p)
          if (s)
            p.$destroy();
          else
            return p;
        return new u({ el: f, data: s });
      }
    }
    function ri(t) {
      return (t == null ? void 0 : t[Qe]) || {};
    }
    function Zi(t, e) {
      return ri(t)[e];
    }
    function Jd(t, e) {
      t[Qe] || (t[Qe] = {}), t[Qe][e.$options.name] = e;
    }
    function Kd(t, e) {
      var s;
      (s = t[Qe]) == null || delete s[e.$options.name], _i(t[Qe]) && delete t[Qe];
    }
    function Gd(t) {
      t.component = Ja, t.getComponents = ri, t.getComponent = Zi, t.update = Ka, t.use = function(s) {
        if (!s.installed)
          return s.call(null, this), s.installed = !0, this;
      }, t.mixin = function(s, a) {
        a = (mt(a) ? this.component(a) : a) || this, a.options = Qn(a.options, s);
      }, t.extend = function(s) {
        s || (s = {});
        const a = this, u = function(f) {
          Va(this, f);
        };
        return u.prototype = Object.create(a.prototype), u.prototype.constructor = u, u.options = Qn(a.options, s), u.super = a, u.extend = a.extend, u;
      };
      let e;
      Object.defineProperty(t, "container", {
        get() {
          return e || document.body;
        },
        set(s) {
          e = K(s);
        }
      });
    }
    function Ka(t, e) {
      t = t ? St(t) : document.body;
      for (const s of Hn(t).reverse())
        Ga(s, e);
      Ne(t, (s) => Ga(s, e));
    }
    function Ga(t, e) {
      const s = ri(t);
      for (const a in s)
        Zn(s[a], e);
    }
    function Xd(t) {
      t.prototype.$mount = function(e) {
        const s = this;
        Jd(e, s), s.$options.el = e, document.contains(e) && To(s);
      }, t.prototype.$destroy = function(e = !1) {
        const s = this, { el: a } = s.$options;
        a && Co(s), En(s, "destroy"), Kd(a, s), e && ie(s.$el);
      }, t.prototype.$create = oi, t.prototype.$emit = function(e) {
        Zn(this, e);
      }, t.prototype.$update = function(e = this.$el, s) {
        Ka(e, s);
      }, t.prototype.$reset = function() {
        Co(this), To(this);
      }, t.prototype.$getComponent = Zi, Object.defineProperties(t.prototype, {
        $el: {
          get() {
            return this.$options.el;
          }
        },
        $container: Object.getOwnPropertyDescriptor(t, "container")
      });
    }
    let Yd = 1;
    function Ze(t, e = null) {
      return (e == null ? void 0 : e.id) || `${t.$options.id}-${Yd++}`;
    }
    var Qd = {
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
        nav: ({ selNav: t }, e) => K(t, e),
        navChildren() {
          return ut(this.nav);
        },
        selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`,
        navItems(t, e) {
          return gt(this.selNavItem, e);
        }
      },
      watch: {
        nav(t, e) {
          D(t, "role", "tablist"), this.padNavitems(), e && this.$emit();
        },
        list(t) {
          kt(t, "ul") && D(t, "role", "presentation");
        },
        navChildren(t) {
          D(t, "role", "presentation"), this.padNavitems(), this.updateNav();
        },
        navItems(t) {
          for (const e of t) {
            const s = Lt(e, this.attrItem), a = K("a,button", e) || e;
            let u, d = null;
            if (ye(s)) {
              const f = xe(s), p = this.slides[f];
              p && (p.id || (p.id = Ze(this, p)), d = p.id), u = this.t("slideX", Q(s) + 1), D(a, "role", "tab");
            } else
              this.list && (this.list.id || (this.list.id = Ze(this, this.list)), d = this.list.id), u = this.t(s);
            D(a, {
              "aria-controls": d,
              "aria-label": D(a, "aria-label") || u
            });
          }
        },
        slides(t) {
          t.forEach(
            (e, s) => D(e, {
              role: this.nav ? "tabpanel" : "group",
              "aria-label": this.t("slideLabel", s + 1, this.length),
              "aria-roledescription": this.nav ? null : "slide"
            })
          ), this.padNavitems();
        }
      },
      connected() {
        D(this.$el, {
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
            t.target.closest("a,button") && (t.type === "click" || t.keyCode === lt.SPACE) && (t.preventDefault(), this.show(Lt(t.current, this.attrItem)));
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
            const { current: e, keyCode: s } = t, a = Lt(e, this.attrItem);
            if (!ye(a))
              return;
            let u = s === lt.HOME ? 0 : s === lt.END ? "last" : s === lt.LEFT ? "previous" : s === lt.RIGHT ? "next" : -1;
            ~u && (t.preventDefault(), this.show(u));
          }
        }
      ],
      methods: {
        updateNav() {
          const t = this.getValidIndex();
          for (const e of this.navItems) {
            const s = Lt(e, this.attrItem), a = K("a,button", e) || e;
            if (ye(s)) {
              const d = xe(s) === t;
              Et(e, this.clsActive, d), Et(a, "uk-disabled", this.parallax), D(a, {
                "aria-selected": d,
                tabindex: d && !this.parallax ? null : -1
              }), d && a && it(ct(e), ":focus-within") && a.focus();
            } else
              Et(
                e,
                "uk-invisible",
                this.finite && (s === "previous" && t === 0 || s === "next" && t >= this.maxIndex)
              );
          }
        },
        padNavitems() {
          if (!this.nav)
            return;
          const t = [];
          for (let e = 0; e < this.length; e++) {
            const s = `${this.attrItem}="${e}"`;
            t[e] = this.navChildren.findLast((a) => a.matches(`[${s}]`)) || K(`<li ${s}><a href></a></li>`);
          }
          Ln(t, this.navChildren) || Pe(this.nav, t);
        }
      }
    };
    const Zd = "cubic-bezier(0.25, 0.46, 0.45, 0.94)", tf = "cubic-bezier(0.165, 0.84, 0.44, 1)";
    var Xa = {
      mixins: [Od, Cd, Qd, Qi],
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
        rt(this.slides, this.clsActive);
      },
      computed: {
        duration: ({ velocity: t }, e) => Ya(e.offsetWidth / t),
        list: ({ selList: t }, e) => K(t, e),
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
          Z(t, this.clsEnter, this.clsSlideActive);
        },
        itemshown({ target: t }) {
          rt(t, this.clsEnter);
        },
        itemhide({ target: t }) {
          Z(t, this.clsLeave);
        },
        itemhidden({ target: t }) {
          rt(t, this.clsLeave, this.clsSlideActive);
        }
      },
      methods: {
        show(t, e = !1) {
          var s;
          if (this.dragging || !this.length || this.parallax)
            return;
          const { stack: a } = this, u = e ? 0 : a.length, d = () => {
            a.splice(u, 1), a.length && this.show(a.shift(), !0);
          };
          if (a[e ? "unshift" : "push"](t), !e && a.length > 1) {
            a.length === 2 && ((s = this._transitioner) == null || s.forward(Math.min(this.duration, 200)));
            return;
          }
          const f = this.getIndex(this.index), p = V(this.slides, this.clsActive) && this.slides[f], b = this.getIndex(t, this.index), k = this.slides[b];
          if (p === k) {
            d();
            return;
          }
          if (this.dir = ef(t, f), this.prevIndex = f, this.index = b, p && !M(p, "beforeitemhide", [this]) || !M(k, "beforeitemshow", [this, p])) {
            this.index = this.prevIndex, d();
            return;
          }
          const E = this._show(p, k, e).then(() => {
            p && M(p, "itemhidden", [this]), M(k, "itemshown", [this]), a.shift(), this._transitioner = null, a.length && requestAnimationFrame(() => a.length && this.show(a.shift(), !0));
          });
          return p && M(p, "itemhide", [this]), M(k, "itemshow", [this]), E;
        },
        getIndex(t = this.index, e = this.index) {
          return zt(
            ne(t, this.slides, e, this.finite),
            0,
            Math.max(0, this.maxIndex)
          );
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          return this.getIndex(t, e);
        },
        async _show(t, e, s) {
          if (this._transitioner = this._getTransitioner(t, e, this.dir, {
            easing: s ? e.offsetWidth < 600 ? Zd : tf : this.easing,
            ...this.transitionOptions
          }), !s && !t) {
            this._translate(1);
            return;
          }
          const { length: a } = this.stack;
          return this._transitioner[a > 1 ? "forward" : "show"](
            a > 1 ? Math.min(this.duration, 75 + 75 / (a - 1)) : this.duration,
            this.percent
          );
        },
        _translate(t, e = this.prevIndex, s = this.index) {
          const a = this._getTransitioner(e === s ? !1 : e, s);
          return a.translate(t), a;
        },
        _getTransitioner(t = this.prevIndex, e = this.index, s = this.dir || 1, a = this.transitionOptions) {
          return new this.Transitioner(
            jn(t) ? this.slides[t] : t,
            jn(e) ? this.slides[e] : e,
            s * (Nt ? -1 : 1),
            a
          );
        }
      }
    };
    function ef(t, e) {
      return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
    }
    function Ya(t) {
      return 0.5 * t + 300;
    }
    var Qa = {
      mixins: [Xa],
      props: {
        animation: String
      },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: _o,
        Transitioner: _d
      },
      computed: {
        animation({ animation: t, Animations: e }) {
          return { ...e[t] || e.slide, name: t };
        },
        transitionOptions() {
          return { animation: this.animation };
        }
      },
      observe: fe(),
      events: {
        beforeitemshow({ target: t }) {
          Z(t, this.clsActive);
        },
        itemshown({ target: t }) {
          Z(t, this.clsActivated);
        },
        itemhidden({ target: t }) {
          rt(t, this.clsActive, this.clsActivated);
        }
      }
    }, Za = {
      ..._o,
      fade: {
        show() {
          return [{ opacity: 0 }, { opacity: 1 }];
        },
        percent(t) {
          return 1 - $(t, "opacity");
        },
        translate(t) {
          return [{ opacity: 1 - t }, { opacity: t }];
        }
      },
      scale: {
        show() {
          return [
            { opacity: 0, transform: Sn(1 - 0.2) },
            { opacity: 1, transform: Sn(1) }
          ];
        },
        percent(t) {
          return 1 - $(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: Sn(1 - 0.2 * t) },
            { opacity: t, transform: Sn(1 - 0.2 + 0.2 * t) }
          ];
        }
      }
    }, tl = {
      mixins: [Eo, Qa],
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
        Animations: Za,
        template: '<div class="uk-lightbox uk-overflow-hidden"> <div class="uk-lightbox-items"></div> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
      }),
      created() {
        const t = K(this.template), e = K(this.selList, t);
        this.items.forEach(() => Ot(e, "<div>"));
        const s = K("[uk-close]", t), a = this.t("close");
        s && a && (s.dataset.i18n = JSON.stringify({ label: a })), this.$mount(Ot(this.container, t));
      },
      events: [
        {
          name: `${Ai} ${de} keydown`,
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
            this.hideControls(), rt(this.slides, this.clsActive), ht.stop(this.slides);
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
            t === lt.LEFT ? e = "previous" : t === lt.RIGHT ? e = "next" : t === lt.HOME ? e = 0 : t === lt.END && (e = "last"), ~e && this.show(e);
          }
        },
        {
          name: "beforeitemshow",
          handler(t) {
            this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Za.scale, rt(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
          }
        },
        {
          name: "itemshow",
          handler() {
            Pe(K(this.selCaption, this.$el), this.getItem().caption || "");
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
            const { source: s, type: a, alt: u = "", poster: d, attrs: f = {} } = e;
            if (this.setItem(e, "<span uk-spinner></span>"), !s)
              return;
            let p;
            const b = {
              allowfullscreen: "",
              style: "max-width: 100%; box-sizing: border-box;",
              "uk-responsive": "",
              "uk-video": `${this.videoAutoplay}`
            };
            if (a === "image" || s.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
              const k = ai("img", { src: s, alt: u, ...f });
              J(k, "load", () => this.setItem(e, k)), J(k, "error", () => this.setError(e));
            } else if (a === "video" || s.match(/\.(mp4|webm|ogv)($|\?)/i)) {
              const k = ai("video", {
                src: s,
                poster: d,
                controls: "",
                playsinline: "",
                "uk-video": `${this.videoAutoplay}`,
                ...f
              });
              J(k, "loadedmetadata", () => this.setItem(e, k)), J(k, "error", () => this.setError(e));
            } else if (a === "iframe" || s.match(/\.(html|php)($|\?)/i))
              this.setItem(
                e,
                ai("iframe", {
                  src: s,
                  allowfullscreen: "",
                  class: "uk-lightbox-iframe",
                  ...f
                })
              );
            else if (p = s.match(
              /\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
            ))
              this.setItem(
                e,
                ai("iframe", {
                  src: `https://www.youtube${p[1] || ""}.com/embed/${p[2]}${p[3] ? `?${p[3]}` : ""}`,
                  width: 1920,
                  height: 1080,
                  ...b,
                  ...f
                })
              );
            else if (p = s.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
              try {
                const { height: k, width: E } = await (await fetch(
                  `https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(
                    s
                  )}`,
                  { credentials: "omit" }
                )).json();
                this.setItem(
                  e,
                  ai("iframe", {
                    src: `https://player.vimeo.com/video/${p[1]}${p[2] ? `?${p[2]}` : ""}`,
                    width: E,
                    height: k,
                    ...b,
                    ...f
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
          this.getSlide(e).childElementCount || M(this.$el, "itemload", [e]);
        },
        getItem(t = this.index) {
          return this.items[ne(t, this.slides)];
        },
        setItem(t, e) {
          M(this.$el, "itemloaded", [this, Pe(this.getSlide(t), e)]);
        },
        getSlide(t) {
          return this.slides[this.items.indexOf(t)];
        },
        setError(t) {
          this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },
        showControls() {
          clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), Z(this.$el, "uk-active", "uk-transition-active");
        },
        hideControls() {
          rt(this.$el, "uk-active", "uk-transition-active");
        }
      }
    };
    function ai(t, e) {
      const s = Ve(`<${t}>`);
      return D(s, e), s;
    }
    var nf = {
      install: sf,
      props: { toggle: String },
      data: { toggle: "a" },
      computed: {
        toggles: ({ toggle: t }, e) => gt(t, e)
      },
      watch: {
        toggles(t) {
          this.hide();
          for (const e of t)
            kt(e, "a") && D(e, "role", "button");
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
          const e = zr(this.toggles.map(el), "source");
          if (Tt(t)) {
            const { source: s } = el(t);
            t = O(e, ({ source: a }) => s === a);
          }
          return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items: e }), J(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t);
        },
        hide() {
          var t;
          return (t = this.panel) == null ? void 0 : t.hide();
        }
      }
    };
    function sf(t, e) {
      t.lightboxPanel || t.component("lightboxPanel", tl), j(e.props, t.component("lightboxPanel").options.props);
    }
    function el(t) {
      const e = {};
      for (const s of ["href", "caption", "type", "poster", "alt", "attrs"])
        e[s === "href" ? "source" : s] = Lt(t, s);
      return e.attrs = kn(e.attrs), e;
    }
    var of = {
      mixins: [ni],
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
      install: rf,
      computed: {
        marginProp: ({ pos: t }) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`,
        startProps() {
          return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
        }
      },
      created() {
        const t = `${this.clsContainer}-${this.pos}`, e = `data-${this.clsContainer}-container`, s = K(`.${t}[${e}]`, this.container) || Ot(
          this.container,
          `<div class="${this.clsContainer} ${t}" ${e}></div>`
        );
        this.$mount(
          Ot(
            s,
            `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`
          )
        );
      },
      async connected() {
        const t = Q($(this.$el, this.marginProp));
        await ht.start($(this.$el, this.startProps), {
          opacity: 1,
          [this.marginProp]: t
        }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      },
      events: {
        click(t) {
          t.target.closest('a[href="#"],a[href=""]') && t.preventDefault(), this.close();
        },
        [We]() {
          this.timer && clearTimeout(this.timer);
        },
        [bn]() {
          this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        }
      },
      methods: {
        async close(t) {
          const e = (s) => {
            const a = ct(s);
            M(s, "close", [this]), ie(s), a != null && a.hasChildNodes() || ie(a);
          };
          this.timer && clearTimeout(this.timer), t || await ht.start(this.$el, this.startProps), e(this.$el);
        }
      }
    };
    function rf(t) {
      t.notification.closeAll = function(e, s) {
        Ne(document.body, (a) => {
          const u = t.getComponent(a, "notification");
          u && (!e || e === u.group) && u.close(s);
        });
      };
    }
    var ts = {
      props: {
        media: Boolean
      },
      data: {
        media: !1
      },
      connected() {
        const t = af(this.media, this.$el);
        if (this.matchMedia = !0, t) {
          this.mediaObj = window.matchMedia(t);
          const e = () => {
            this.matchMedia = this.mediaObj.matches, M(this.$el, wn("mediachange", !1, !0, [this.mediaObj]));
          };
          this.offMediaObj = J(this.mediaObj, "change", () => {
            e(), this.$emit("resize");
          }), e();
        }
      },
      disconnected() {
        var t;
        (t = this.offMediaObj) == null || t.call(this);
      }
    };
    function af(t, e) {
      if (mt(t)) {
        if (v(t, "@"))
          t = Q($(e, `--uk-breakpoint-${t.slice(1)}`));
        else if (isNaN(t))
          return t;
      }
      return t && ye(t) ? `(min-width: ${t}px)` : "";
    }
    function nl(t) {
      return _t(t) ? Math.ceil(
        Math.max(0, ...gt("[stroke]", t).map((e) => {
          var s;
          return ((s = e.getTotalLength) == null ? void 0 : s.call(e)) || 0;
        }))
      ) : 0;
    }
    const es = {
      x: ns,
      y: ns,
      rotate: ns,
      scale: ns,
      color: Ao,
      backgroundColor: Ao,
      borderColor: Ao,
      blur: tn,
      hue: tn,
      fopacity: tn,
      grayscale: tn,
      invert: tn,
      saturate: tn,
      sepia: tn,
      opacity: cf,
      stroke: uf,
      bgx: ol,
      bgy: ol
    }, { keys: il } = Object;
    var sl = {
      mixins: [ts],
      props: ul(il(es), "list"),
      data: ul(il(es), void 0),
      computed: {
        props(t, e) {
          const s = {};
          for (const u in t)
            u in es && !jt(t[u]) && (s[u] = t[u].slice());
          const a = {};
          for (const u in s)
            a[u] = es[u](u, e, s[u], s);
          return a;
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
            $(this.$el, t, "");
        },
        getCss(t) {
          const e = {};
          for (const s in this.props)
            this.props[s](e, zt(t));
          return e.willChange = Object.keys(e).map(Bi).join(","), e;
        }
      }
    };
    function ns(t, e, s) {
      let a = ss(s) || { x: "px", y: "px", rotate: "deg" }[t] || "", u;
      return t === "x" || t === "y" ? (t = `translate${g(t)}`, u = (d) => Q(Q(d).toFixed(a === "px" ? 0 : 6))) : t === "scale" && (a = "", u = (d) => {
        var f;
        return ss([d]) ? Ft(d, "width", e, !0) / e[`offset${(f = d.endsWith) != null && f.call(d, "vh") ? "Height" : "Width"}`] : Q(d);
      }), s.length === 1 && s.unshift(t === "scale" ? 1 : 0), s = On(s, u), (d, f) => {
        d.transform = `${d.transform || ""} ${t}(${li(s, f)}${a})`;
      };
    }
    function Ao(t, e, s) {
      return s.length === 1 && s.unshift(ci(e, t, "")), s = On(s, (a) => lf(e, a)), (a, u) => {
        const [d, f, p] = cl(s, u), b = d.map((k, E) => (k += p * (f[E] - k), E === 3 ? Q(k) : parseInt(k, 10))).join(",");
        a[t] = `rgba(${b})`;
      };
    }
    function lf(t, e) {
      return ci(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(Q);
    }
    function tn(t, e, s) {
      s.length === 1 && s.unshift(0);
      const a = ss(s) || { blur: "px", hue: "deg" }[t] || "%";
      return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, s = On(s), (u, d) => {
        const f = li(s, d);
        u.filter = `${u.filter || ""} ${t}(${f + a})`;
      };
    }
    function cf(t, e, s) {
      return s.length === 1 && s.unshift(ci(e, t, "")), s = On(s), (a, u) => {
        a[t] = li(s, u);
      };
    }
    function uf(t, e, s) {
      s.length === 1 && s.unshift(0);
      const a = ss(s), u = nl(e);
      return s = On(s.reverse(), (d) => (d = Q(d), a === "%" ? d * u / 100 : d)), s.some(([d]) => d) ? ($(e, "strokeDasharray", u), (d, f) => {
        d.strokeDashoffset = li(s, f);
      }) : at;
    }
    function ol(t, e, s, a) {
      s.length === 1 && s.unshift(0);
      const u = t === "bgy" ? "height" : "width";
      a[t] = On(s, (p) => Ft(p, u, e));
      const d = ["bgx", "bgy"].filter((p) => p in a);
      if (d.length === 2 && t === "bgx")
        return at;
      if (ci(e, "backgroundSize", "") === "cover")
        return hf(t, e, s, a);
      const f = {};
      for (const p of d)
        f[p] = rl(e, p);
      return al(d, f, a);
    }
    function hf(t, e, s, a) {
      const u = df(e);
      if (!u.width)
        return at;
      const d = {
        width: e.offsetWidth,
        height: e.offsetHeight
      }, f = ["bgx", "bgy"].filter((E) => E in a), p = {};
      for (const E of f) {
        const P = a[E].map(([st]) => st), N = Math.min(...P), I = Math.max(...P), q = P.indexOf(N) < P.indexOf(I), tt = I - N;
        p[E] = `${(q ? -tt : 0) - (q ? N : I)}px`, d[E === "bgy" ? "height" : "width"] += tt;
      }
      const b = Ws.cover(u, d);
      for (const E of f) {
        const P = E === "bgy" ? "height" : "width", N = b[P] - d[P];
        p[E] = `max(${rl(e, E)},-${N}px) + ${p[E]}`;
      }
      const k = al(f, p, a);
      return (E, P) => {
        k(E, P), E.backgroundSize = `${b.width}px ${b.height}px`, E.backgroundRepeat = "no-repeat";
      };
    }
    function rl(t, e) {
      return ci(t, `background-position-${e.slice(-1)}`, "");
    }
    function al(t, e, s) {
      return function(a, u) {
        for (const d of t) {
          const f = li(s[d], u);
          a[`background-position-${d.slice(-1)}`] = `calc(${e[d]} + ${f}px)`;
        }
      };
    }
    const ll = {}, is = {};
    function df(t) {
      const e = $(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
      if (is[e])
        return is[e];
      const s = new Image();
      return e && (s.src = e, !s.naturalWidth && !ll[e]) ? ($t(s, "error load", () => {
        is[e] = Ro(s), M(t, wn("load", !1));
      }), ll[e] = !0, Ro(s)) : is[e] = Ro(s);
    }
    function Ro(t) {
      return {
        width: t.naturalWidth,
        height: t.naturalHeight
      };
    }
    function On(t, e = Q) {
      const s = [], { length: a } = t;
      let u = 0;
      for (let d = 0; d < a; d++) {
        let [f, p] = mt(t[d]) ? t[d].trim().split(/ (?![^(]*\))/) : [t[d]];
        if (f = e(f), p = p ? Q(p) / 100 : null, d === 0 ? p === null ? p = 0 : p && s.push([f, 0]) : d === a - 1 && (p === null ? p = 1 : p !== 1 && (s.push([f, p]), p = 1)), s.push([f, p]), p === null)
          u++;
        else if (u) {
          const b = s[d - u - 1][1], k = (p - b) / (u + 1);
          for (let E = u; E > 0; E--)
            s[d - E][1] = b + k * (u - E + 1);
          u = 0;
        }
      }
      return s;
    }
    function cl(t, e) {
      const s = O(t.slice(1), ([, a]) => e <= a) + 1;
      return [
        t[s - 1][0],
        t[s][0],
        (e - t[s - 1][1]) / (t[s][1] - t[s - 1][1])
      ];
    }
    function li(t, e) {
      const [s, a, u] = cl(t, e);
      return s + Math.abs(s - a) * u * (s < a ? 1 : -1);
    }
    const ff = /^-?\d+(?:\.\d+)?(\S+)?/;
    function ss(t, e) {
      var s;
      for (const a of t) {
        const u = (s = a.match) == null ? void 0 : s.call(a, ff);
        if (u)
          return u[1];
      }
      return e;
    }
    function ci(t, e, s) {
      const a = t.style[e], u = $($(t, e, s), e);
      return t.style[e] = a, u;
    }
    function ul(t, e) {
      return t.reduce((s, a) => (s[a] = e, s), {});
    }
    function hl(t, e) {
      return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    var pf = {
      mixins: [sl],
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
        target: ({ target: t }, e) => dl(t && Ht(t, e) || e),
        start({ start: t }) {
          return Ft(t, "height", this.target, !0);
        },
        end({ end: t, viewport: e }) {
          return Ft(
            t || (e = (1 - e) * 100) && `${e}vh+${e}%`,
            "height",
            this.target,
            !0
          );
        }
      },
      observe: [
        vo(),
        ti({ target: ({ target: t }) => t }),
        fe({ target: ({ $el: t, target: e }) => [t, e, Fe(e, !0)] })
      ],
      update: {
        read({ percent: t }, e) {
          if (e.has("scroll") || (t = !1), !_t(this.$el))
            return !1;
          if (!this.matchMedia)
            return;
          const s = t;
          return t = hl(Ji(this.target, this.start, this.end), this.easing), {
            percent: t,
            style: s === t ? !1 : this.getCss(t)
          };
        },
        write({ style: t }) {
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          t && $(this.$el, t);
        },
        events: ["scroll", "resize"]
      }
    };
    function dl(t) {
      return t ? "offsetTop" in t ? t : dl(ct(t)) : document.documentElement;
    }
    var fl = {
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
        fe({
          target: ({ $el: t, parallaxTarget: e }) => [t, e],
          filter: ({ parallax: t }) => t
        }),
        ti({ filter: ({ parallax: t }) => t })
      ],
      computed: {
        parallaxTarget({ parallaxTarget: t }, e) {
          return t && Ht(t, e) || this.list;
        }
      },
      update: {
        read() {
          if (!this.parallax)
            return !1;
          const t = this.parallaxTarget;
          if (!t)
            return !1;
          const e = Ft(this.parallaxStart, "height", t, !0), s = Ft(this.parallaxEnd, "height", t, !0), a = hl(Ji(t, e, s), this.parallaxEasing);
          return { parallax: this.getIndexAt(a) };
        },
        write({ parallax: t }) {
          const [e, s] = t, a = this.getValidIndex(e + Math.ceil(s)), u = this.slides[e], d = this.slides[a], { triggerShow: f, triggerShown: p, triggerHide: b, triggerHidden: k } = mf(this);
          if (~this.prevIndex)
            for (const P of /* @__PURE__ */ new Set([this.index, this.prevIndex]))
              S([a, e], P) || (b(this.slides[P]), k(this.slides[P]));
          const E = this.prevIndex !== e || this.index !== a;
          this.dir = 1, this.prevIndex = e, this.index = a, u !== d && b(u), f(d), E && p(u), this._translate(u === d ? 1 : s, u, d);
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
    function mf(t) {
      const { clsSlideActive: e, clsEnter: s, clsLeave: a } = t;
      return { triggerShow: u, triggerShown: d, triggerHide: f, triggerHidden: p };
      function u(b) {
        V(b, a) && (f(b), p(b)), V(b, e) || (M(b, "beforeitemshow", [t]), M(b, "itemshow", [t]));
      }
      function d(b) {
        V(b, s) && M(b, "itemshown", [t]);
      }
      function f(b) {
        V(b, e) || u(b), V(b, s) && d(b), V(b, a) || (M(b, "beforeitemhide", [t]), M(b, "itemhide", [t]));
      }
      function p(b) {
        V(b, a) && M(b, "itemhidden", [t]);
      }
    }
    var pl = {
      update: {
        write() {
          if (this.stack.length || this.dragging || this.parallax)
            return;
          const t = this.getValidIndex();
          !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1);
        },
        events: ["resize"]
      }
    }, ml = {
      observe: Xi({
        target: ({ slides: t }) => t,
        targets: (t) => t.getAdjacentSlides()
      }),
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        }
      }
    };
    function gf(t, e, s, { center: a, easing: u, list: d }) {
      const f = t ? ui(t, d, a) : ui(e, d, a) + U(e).width * s, p = e ? ui(e, d, a) : f + U(t).width * s * (Nt ? -1 : 1), { promise: b, resolve: k } = Fa();
      return {
        dir: s,
        show(E, P = 0, N) {
          const I = N ? "linear" : u;
          return E -= Math.round(E * zt(P, -1, 1)), $(d, "transitionProperty", "none"), this.translate(P), $(d, "transitionProperty", ""), P = t ? P : zt(P, 0, 1), Ye(this.getItemIn(), "itemin", { percent: P, duration: E, timing: I, dir: s }), t && Ye(this.getItemIn(!0), "itemout", {
            percent: 1 - P,
            duration: E,
            timing: I,
            dir: s
          }), ht.start(
            d,
            { transform: xt(-p * (Nt ? -1 : 1), "px") },
            E,
            I
          ).then(k, at), b;
        },
        cancel() {
          return ht.cancel(d);
        },
        reset() {
          $(d, "transform", "");
        },
        async forward(E, P = this.percent()) {
          return await this.cancel(), this.show(E, P, !0);
        },
        translate(E) {
          if (E === this.percent())
            return;
          const P = this.getDistance() * s * (Nt ? -1 : 1);
          $(
            d,
            "transform",
            xt(
              zt(
                -p + (P - P * E),
                -Tn(d),
                U(d).width
              ) * (Nt ? -1 : 1),
              "px"
            )
          );
          const N = this.getActives(), I = this.getItemIn(), q = this.getItemIn(!0);
          E = t ? zt(E, -1, 1) : 0;
          for (const tt of ut(d)) {
            const st = S(N, tt), $e = tt === I, Cn = tt === q, An = $e || !Cn && (st || s * (Nt ? -1 : 1) === -1 ^ os(tt, d) > os(t || e));
            Ye(tt, `itemtranslate${An ? "in" : "out"}`, {
              dir: s,
              percent: Cn ? 1 - E : $e ? E : st ? 1 : 0
            });
          }
        },
        percent() {
          return Math.abs(
            (new DOMMatrix($(d, "transform")).m41 * (Nt ? -1 : 1) + f) / (p - f)
          );
        },
        getDistance() {
          return Math.abs(p - f);
        },
        getItemIn(E = !1) {
          let P = this.getActives(), N = bl(d, ui(e || t, d, a));
          if (E) {
            const I = P;
            P = N, N = I;
          }
          return N[O(N, (I) => !S(P, I))];
        },
        getActives() {
          return bl(d, ui(t || e, d, a));
        }
      };
    }
    function ui(t, e, s) {
      const a = os(t, e);
      return s ? a - bf(t, e) : Math.min(a, gl(e));
    }
    function gl(t) {
      return Math.max(0, Tn(t) - U(t).width);
    }
    function Tn(t, e) {
      return ze(ut(t).slice(0, e), (s) => U(s).width);
    }
    function bf(t, e) {
      return U(e).width / 2 - U(t).width / 2;
    }
    function os(t, e) {
      return t && (io(t).left + (Nt ? U(t).width - U(e).width : 0)) * (Nt ? -1 : 1) || 0;
    }
    function bl(t, e) {
      e -= 1;
      const s = U(t).width, a = e + s + 2;
      return ut(t).filter((u) => {
        const d = os(u, t), f = d + Math.min(U(u).width, s);
        return d >= e && f <= a;
      });
    }
    var vf = {
      mixins: [Jt, Xa, pl, fl, ml],
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
        Transitioner: gf
      },
      computed: {
        finite({ finite: t }) {
          return t || wf(this.list, this.center);
        },
        maxIndex() {
          if (!this.finite || this.center && !this.sets)
            return this.length - 1;
          if (this.center)
            return Me(this.sets);
          let t = 0;
          const e = gl(this.list), s = O(this.slides, (a) => {
            if (t >= e - 5e-3)
              return !0;
            t += U(a).width;
          });
          return ~s ? s : this.length - 1;
        },
        sets({ sets: t }) {
          if (!t || this.parallax)
            return;
          let e = 0;
          const s = [], a = U(this.list).width;
          for (let u = 0; u < this.length; u++) {
            const d = U(this.slides[u]).width;
            e + d > a && (e = 0), this.center ? e < a / 2 && e + d + U(this.slides[ne(u + 1, this.slides)]).width / 2 > a / 2 && (s.push(u), e = a / 2 - d / 2) : e === 0 && s.push(Math.min(u, this.maxIndex)), e += d;
          }
          if (s.length)
            return s;
        },
        transitionOptions() {
          return {
            center: this.center,
            list: this.list
          };
        },
        slides() {
          return ut(this.list).filter(_t);
        }
      },
      connected() {
        Et(this.$el, this.clsContainer, !K(`.${this.clsContainer}`, this.$el));
      },
      observe: fe({
        target: ({ slides: t, $el: e }) => [e, ...t]
      }),
      update: {
        write() {
          for (const t of this.navItems) {
            const e = xe(Lt(t, this.attrItem));
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
            for (let u = 0; u < e; u++)
              this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
            t.preventDefault();
            return;
          }
          const s = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex, a = Tn(this.list) / this.length;
          this.duration = Ya(a / this.velocity) * (U(this.slides[s]).width / a), this.reorder();
        },
        itemshow() {
          ~this.prevIndex && Z(this._getTransitioner().getItemIn(), this.clsActive), this.updateActiveClasses(this.prevIndex);
        },
        itemshown() {
          this.updateActiveClasses();
        }
      },
      methods: {
        reorder() {
          if (this.finite) {
            $(this.slides, "order", "");
            return;
          }
          const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
          if (this.slides.forEach(
            (u, d) => $(
              u,
              "order",
              this.dir > 0 && d < t ? 1 : this.dir < 0 && d >= this.index ? -1 : ""
            )
          ), !this.center || !this.length)
            return;
          const e = this.slides[t];
          let s = U(this.list).width / 2 - U(e).width / 2, a = 0;
          for (; s > 0; ) {
            const u = this.getIndex(--a + t, t), d = this.slides[u];
            $(d, "order", u > t ? -2 : -1), s -= U(d).width;
          }
        },
        updateActiveClasses(t = this.index) {
          let e = this._getTransitioner(t).getActives();
          this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
          const s = [
            this.clsActive,
            !this.sets || S(this.sets, Q(this.index)) ? this.clsActivated : ""
          ];
          for (const a of this.slides) {
            const u = S(e, a);
            Et(a, s, u), D(a, "aria-hidden", !u);
            for (const d of gt(zn, a))
              l(d, "_tabindex") || (d._tabindex = D(d, "tabindex")), D(d, "tabindex", u ? d._tabindex : -1);
          }
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          if (t = this.getIndex(t, e), !this.sets)
            return t;
          let s;
          do {
            if (S(this.sets, t))
              return t;
            s = t, t = this.getIndex(t + this.dir, e);
          } while (t !== s);
          return t;
        },
        getAdjacentSlides() {
          const { width: t } = U(this.list), e = -t, s = t * 2, a = U(this.slides[this.index]).width, u = this.center ? t / 2 - a / 2 : 0, d = /* @__PURE__ */ new Set();
          for (const f of [-1, 1]) {
            let p = u + (f > 0 ? a : 0), b = 0;
            do {
              const k = this.slides[this.getIndex(this.index + f + b++ * f)];
              p += U(k).width * f, d.add(k);
            } while (this.length > b && p > e && p < s);
          }
          return Array.from(d);
        },
        getIndexAt(t) {
          let e = -1;
          const s = this.center ? Tn(this.list) - (U(this.slides[0]).width / 2 + U(Me(this.slides)).width / 2) : Tn(this.list, this.maxIndex);
          let a = t * s, u = 0;
          do {
            const d = U(this.slides[++e]).width, f = this.center ? d / 2 + U(this.slides[e + 1]).width / 2 : d;
            u = a / f % 1, a -= f;
          } while (a >= 0 && e < this.maxIndex);
          return [e, u];
        }
      }
    };
    function wf(t, e) {
      if (!t || t.length < 2)
        return !0;
      const { width: s } = U(t);
      if (!e)
        return Math.ceil(Tn(t)) < Math.trunc(s + yf(t));
      const a = ut(t), u = Math.trunc(s / 2);
      for (const d in a) {
        const f = a[d], p = U(f).width, b = /* @__PURE__ */ new Set([f]);
        let k = 0;
        for (const E of [-1, 1]) {
          let P = p / 2, N = 0;
          for (; P < u; ) {
            const I = a[ne(+d + E + N++ * E, a)];
            if (b.has(I))
              return !0;
            P += U(I).width, b.add(I);
          }
          k = Math.max(
            k,
            p / 2 + U(a[ne(+d + E, a)]).width / 2 - (P - u)
          );
        }
        if (Math.trunc(k) > ze(
          a.filter((E) => !b.has(E)),
          (E) => U(E).width
        ))
          return !0;
      }
      return !1;
    }
    function yf(t) {
      return Math.max(0, ...ut(t).map((e) => U(e).width));
    }
    var vl = {
      mixins: [sl],
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
          handler({ type: t, detail: { percent: e, duration: s, timing: a, dir: u } }) {
            Be.read(() => {
              if (!this.matchMedia)
                return;
              const d = this.getCss(yl(t, u, e)), f = this.getCss(wl(t) ? 0.5 : u > 0 ? 1 : 0);
              Be.write(() => {
                $(this.$el, d), ht.start(this.$el, f, s, a).catch(at);
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
          handler({ type: t, detail: { percent: e, dir: s } }) {
            Be.read(() => {
              if (!this.matchMedia) {
                this.reset();
                return;
              }
              const a = this.getCss(yl(t, s, e));
              Be.write(() => $(this.$el, a));
            });
          }
        }
      ]
    };
    function wl(t) {
      return _(t, "in");
    }
    function yl(t, e, s) {
      return s /= 2, wl(t) ^ e < 0 ? s : 1 - s;
    }
    var $f = {
      ..._o,
      fade: {
        show() {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - $(t, "opacity");
        },
        translate(t) {
          return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
        }
      },
      scale: {
        show() {
          return [{ opacity: 0, transform: Sn(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - $(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: Sn(1 + 0.5 * t), zIndex: 0 },
            { zIndex: -1 }
          ];
        }
      },
      pull: {
        show(t) {
          return t < 0 ? [
            { transform: xt(30), zIndex: -1 },
            { transform: xt(), zIndex: 0 }
          ] : [
            { transform: xt(-100), zIndex: 0 },
            { transform: xt(), zIndex: -1 }
          ];
        },
        percent(t, e, s) {
          return s < 0 ? 1 - ii(e) : ii(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: xt(30 * t), zIndex: -1 },
            { transform: xt(-100 * (1 - t)), zIndex: 0 }
          ] : [
            { transform: xt(-t * 100), zIndex: 0 },
            { transform: xt(30 * (1 - t)), zIndex: -1 }
          ];
        }
      },
      push: {
        show(t) {
          return t < 0 ? [
            { transform: xt(100), zIndex: 0 },
            { transform: xt(), zIndex: -1 }
          ] : [
            { transform: xt(-30), zIndex: -1 },
            { transform: xt(), zIndex: 0 }
          ];
        },
        percent(t, e, s) {
          return s > 0 ? 1 - ii(e) : ii(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: xt(t * 100), zIndex: 0 },
            { transform: xt(-30 * (1 - t)), zIndex: -1 }
          ] : [
            { transform: xt(-30 * t), zIndex: -1 },
            { transform: xt(100 * (1 - t)), zIndex: 0 }
          ];
        }
      }
    }, kf = {
      mixins: [Jt, Qa, pl, fl, ml],
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
        Animations: $f
      },
      watch: {
        list(t) {
          $(t, {
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
    }, xf = {
      mixins: [Jt, Aa],
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
        name: de,
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
          return t ? gt(t, e) : this.items;
        }
      },
      watch: {
        isEmpty(t) {
          Et(this.target, this.clsEmpty, t);
        },
        handles(t, e) {
          $(e, { touchAction: "", userSelect: "" }), $(t, { touchAction: "none", userSelect: "none" });
        }
      },
      update: {
        write(t) {
          if (!this.drag || !ct(this.placeholder))
            return;
          const {
            pos: { x: e, y: s },
            origin: { offsetTop: a, offsetLeft: u },
            placeholder: d
          } = this;
          $(this.drag, {
            top: s - a,
            left: e - u
          });
          const f = this.getSortable(document.elementFromPoint(e, s));
          if (!f)
            return;
          const { items: p } = f;
          if (p.some(ht.inProgress))
            return;
          const b = Of(p, { x: e, y: s });
          if (p.length && (!b || b === d))
            return;
          const k = this.getSortable(d), E = Tf(
            f.target,
            b,
            d,
            e,
            s,
            f === k && t.moved !== b
          );
          E !== !1 && (E && d === E || (f !== k ? (k.remove(d), t.moved = b) : delete t.moved, f.insert(d, E), this.touched.add(f)));
        },
        events: ["move"]
      },
      methods: {
        init(t) {
          const { target: e, button: s, defaultPrevented: a } = t, [u] = this.items.filter((d) => d.contains(e));
          !u || a || s > 0 || Pi(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = Ee(t), this.touched = /* @__PURE__ */ new Set([this]), this.placeholder = u, this.origin = { target: e, index: Se(u), ...this.pos }, J(document, Ai, this.move), J(document, Ce, this.end), this.threshold || this.start(t));
        },
        start(t) {
          this.drag = _f(this.$container, this.placeholder);
          const { left: e, top: s } = U(this.placeholder);
          j(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - s }), Z(this.drag, this.clsDrag, this.clsCustom), Z(this.placeholder, this.clsPlaceholder), Z(this.items, this.clsItem), Z(document.documentElement, this.clsDragState), M(this.$el, "start", [this, this.placeholder]), Sf(this.pos), this.move(t);
        },
        move: Af(function(t) {
          j(this.pos, Ee(t)), !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t), this.$emit("move");
        }),
        end() {
          if (Ae(document, Ai, this.move), Ae(document, Ce, this.end), !this.drag)
            return;
          Ef();
          const t = this.getSortable(this.placeholder);
          this === t ? this.origin.index !== Se(this.placeholder) && M(this.$el, "moved", [this, this.placeholder]) : (M(t.$el, "added", [t, this.placeholder]), M(this.$el, "removed", [this, this.placeholder])), M(this.$el, "stop", [this, this.placeholder]), ie(this.drag), this.drag = null;
          for (const { clsPlaceholder: e, clsItem: s } of this.touched)
            for (const a of this.touched)
              rt(a.items, e, s);
          this.touched = null, rt(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          Z(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => Ii(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => Ot(this.target, t));
        },
        remove(t) {
          this.target.contains(t) && this.animate(() => ie(t));
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
    let $l;
    function Sf(t) {
      let e = Date.now();
      $l = setInterval(() => {
        let { x: s, y: a } = t;
        a += document.scrollingElement.scrollTop;
        const u = (Date.now() - e) * 0.3;
        e = Date.now(), Ke(document.elementFromPoint(s, t.y)).reverse().some((d) => {
          let { scrollTop: f, scrollHeight: p } = d;
          const { top: b, bottom: k, height: E } = se(d);
          if (b < a && b + 35 > a)
            f -= u;
          else if (k > a && k - 35 < a)
            f += u;
          else
            return;
          if (f > 0 && f < p - E)
            return d.scrollTop = f, !0;
        });
      }, 15);
    }
    function Ef() {
      clearInterval($l);
    }
    function _f(t, e) {
      let s;
      if (kt(e, "li", "tr")) {
        s = K("<div>"), Ot(s, e.cloneNode(!0).children);
        for (const a of e.getAttributeNames())
          D(s, a, e.getAttribute(a));
      } else
        s = e.cloneNode(!0);
      return Ot(t, s), $(s, "margin", "0", "important"), $(s, {
        boxSizing: "border-box",
        width: e.offsetWidth,
        height: e.offsetHeight,
        padding: $(e, "padding")
      }), Vt(s.firstElementChild, Vt(e.firstElementChild)), s;
    }
    function Of(t, e) {
      return t[O(t, (s) => Ti(e, U(s)))];
    }
    function Tf(t, e, s, a, u, d) {
      if (!ut(t).length)
        return;
      const f = U(e);
      if (!d)
        return Cf(t, s) || u < f.top + f.height / 2 ? e : e.nextElementSibling;
      const p = U(s), b = kl(
        [f.top, f.bottom],
        [p.top, p.bottom]
      ), [k, E, P, N] = b ? [a, "width", "left", "right"] : [u, "height", "top", "bottom"], I = p[E] < f[E] ? f[E] - p[E] : 0;
      return p[P] < f[P] ? I && k < f[P] + I ? !1 : e.nextElementSibling : I && k > f[N] - I ? !1 : e;
    }
    function Cf(t, e) {
      const s = ut(t).length === 1;
      s && Ot(t, e);
      const a = ut(t), u = a.some((d, f) => {
        const p = U(d);
        return a.slice(f + 1).some((b) => {
          const k = U(b);
          return !kl([p.left, p.right], [k.left, k.right]);
        });
      });
      return s && ie(e), u;
    }
    function kl(t, e) {
      return t[1] > e[0] && e[1] > t[0];
    }
    function Af(t) {
      let e;
      return function(...s) {
        e || (e = !0, t.call(this, ...s), requestAnimationFrame(() => e = !1));
      };
    }
    var xl = {
      props: {
        pos: String,
        offset: Boolean,
        flip: Boolean,
        shift: Boolean,
        inset: Boolean
      },
      data: {
        pos: `bottom-${Nt ? "right" : "left"}`,
        offset: !1,
        flip: !0,
        shift: !0,
        inset: !1
      },
      connected() {
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = S(["top", "bottom"], this.dir) ? "y" : "x";
      },
      methods: {
        positionAt(t, e, s) {
          let a = [this.getPositionOffset(t), this.getShiftOffset(t)];
          const u = [this.flip && "flip", this.shift && "shift"], d = {
            element: [this.inset ? this.dir : Mi(this.dir), this.align],
            target: [this.dir, this.align]
          };
          if (this.axis === "y") {
            for (const b in d)
              d[b].reverse();
            a.reverse(), u.reverse();
          }
          const f = Sl(t), p = U(t);
          $(t, { top: -p.height, left: -p.width }), pa(t, e, {
            attach: d,
            offset: a,
            boundary: s,
            placement: u,
            viewportOffset: this.getViewportOffset(t)
          }), f();
        },
        getPositionOffset(t = this.$el) {
          return Ft(
            this.offset === !1 ? $(t, "--uk-position-offset") : this.offset,
            this.axis === "x" ? "width" : "height",
            t
          ) * (S(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
        },
        getShiftOffset(t = this.$el) {
          return this.align === "center" ? 0 : Ft(
            $(t, "--uk-position-shift-offset"),
            this.axis === "y" ? "width" : "height",
            t
          ) * (S(["left", "top"], this.align) ? 1 : -1);
        },
        getViewportOffset(t) {
          return Ft($(t, "--uk-position-viewport-offset"));
        }
      }
    };
    function Sl(t) {
      const e = Fe(t), { scrollTop: s } = e;
      return () => {
        s !== e.scrollTop && (e.scrollTop = s);
      };
    }
    var Rf = {
      mixins: [ni, Xe, xl],
      data: {
        pos: "top",
        animation: ["uk-animation-scale-up"],
        duration: 100,
        cls: "uk-active"
      },
      connected() {
        Pf(this.$el);
      },
      disconnected() {
        this.hide();
      },
      methods: {
        show() {
          if (this.isToggled(this.tooltip || null))
            return;
          const { delay: t = 0, title: e } = Bf(this.$options);
          if (!e)
            return;
          const s = D(this.$el, "title"), a = J(this.$el, ["blur", bn], (d) => !pe(d) && this.hide());
          this.reset = () => {
            D(this.$el, { title: s, "aria-describedby": null }), a();
          };
          const u = Ze(this);
          D(this.$el, { title: null, "aria-describedby": u }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, u), t);
        },
        async hide() {
          var t;
          it(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), (t = this.reset) == null || t.call(this), ie(this.tooltip), this.tooltip = null);
        },
        async _show(t, e) {
          this.tooltip = Ot(
            this.container,
            `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`
          ), J(this.tooltip, "toggled", (s, a) => {
            if (!a)
              return;
            const u = () => this.positionAt(this.tooltip, this.$el);
            u();
            const [d, f] = Nf(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? `${Mi(d)}-${f}` : `${f}-${Mi(d)}`;
            const p = [
              $t(
                document,
                `keydown ${de}`,
                this.hide,
                !1,
                (b) => b.type === de && !this.$el.contains(b.target) || b.type === "keydown" && b.keyCode === lt.ESC
              ),
              J([document, ...Ge(this.$el)], "scroll", u, {
                passive: !0
              })
            ];
            $t(this.tooltip, "hide", () => p.forEach((b) => b()), {
              self: !0
            });
          }), await this.toggleElement(this.tooltip, !0) || this.hide();
        }
      },
      events: {
        // Clicking a button does not give it focus on all browsers and platforms
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
        [`focus ${We} ${de}`](t) {
          (!pe(t) || t.type === de) && this.show();
        }
      }
    };
    function Pf(t) {
      Ni(t) || D(t, "tabindex", "0");
    }
    function Nf(t, e, [s, a]) {
      const u = et(t), d = et(e), f = [
        ["left", "right"],
        ["top", "bottom"]
      ];
      for (const b of f) {
        if (u[b[0]] >= d[b[1]]) {
          s = b[1];
          break;
        }
        if (u[b[1]] <= d[b[0]]) {
          s = b[0];
          break;
        }
      }
      return a = (S(f[0], s) ? f[1] : f[0]).find((b) => u[b] === d[b]) || "center", [s, a];
    }
    function Bf(t) {
      const { el: e, id: s, data: a } = t;
      return ["delay", "title"].reduce((u, d) => ({ [d]: Lt(e, d), ...u }), {
        ...kn(Lt(e, s), ["title"]),
        ...a
      });
    }
    var Ff = {
      mixins: [Qi],
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
        abort: at,
        beforeAll: at,
        beforeSend: at,
        complete: at,
        completeAll: at,
        error: at,
        fail: at,
        load: at,
        loadEnd: at,
        loadStart: at,
        progress: at
      },
      events: {
        change(t) {
          it(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
        },
        drop(t) {
          rs(t);
          const e = t.dataTransfer;
          e != null && e.files && (rt(this.$el, this.clsDragover), this.upload(e.files));
        },
        dragenter(t) {
          rs(t);
        },
        dragover(t) {
          rs(t), Z(this.$el, this.clsDragover);
        },
        dragleave(t) {
          rs(t), rt(this.$el, this.clsDragover);
        }
      },
      methods: {
        async upload(t) {
          if (t = y(t), !t.length)
            return;
          M(this.$el, "upload", [t]);
          for (const a of t) {
            if (this.maxSize && this.maxSize * 1e3 < a.size) {
              this.fail(this.t("invalidSize", this.maxSize));
              return;
            }
            if (this.allow && !El(this.allow, a.name)) {
              this.fail(this.t("invalidName", this.allow));
              return;
            }
            if (this.mime && !El(this.mime, a.type)) {
              this.fail(this.t("invalidMime", this.mime));
              return;
            }
          }
          this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
          const e = If(t, this.concurrent), s = async (a) => {
            const u = new FormData();
            a.forEach((d) => u.append(this.name, d));
            for (const d in this.params)
              u.append(d, this.params[d]);
            try {
              const d = await Df(this.url, {
                data: u,
                method: this.method,
                responseType: this.type,
                beforeSend: (f) => {
                  const { xhr: p } = f;
                  J(p.upload, "progress", this.progress);
                  for (const b of ["loadStart", "load", "loadEnd", "abort"])
                    J(p, b.toLowerCase(), this[b]);
                  return this.beforeSend(f);
                }
              });
              this.complete(d), e.length ? await s(e.shift()) : this.completeAll(d);
            } catch (d) {
              this.error(d);
            }
          };
          await s(e.shift());
        }
      }
    };
    function El(t, e) {
      return e.match(
        new RegExp(
          `^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`,
          "i"
        )
      );
    }
    function If(t, e) {
      const s = [];
      for (let a = 0; a < t.length; a += e)
        s.push(t.slice(a, a + e));
      return s;
    }
    function rs(t) {
      t.preventDefault(), t.stopPropagation();
    }
    async function Df(t, e) {
      const s = {
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: at,
        responseType: "",
        ...e
      };
      return await s.beforeSend(s), jf(t, s);
    }
    function jf(t, e) {
      return new Promise((s, a) => {
        const { xhr: u } = e;
        for (const d in e)
          if (d in u)
            try {
              u[d] = e[d];
            } catch {
            }
        u.open(e.method.toUpperCase(), t);
        for (const d in e.headers)
          u.setRequestHeader(d, e.headers[d]);
        J(u, "load", () => {
          u.status === 0 || u.status >= 200 && u.status < 300 || u.status === 304 ? s(u) : a(
            j(Error(u.statusText), {
              xhr: u,
              status: u.status
            })
          );
        }), J(u, "error", () => a(j(Error("Network Error"), { xhr: u }))), J(u, "timeout", () => a(j(Error("Network Timeout"), { xhr: u }))), u.send(e.data);
      });
    }
    var Lf = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Countdown: Zh,
      Filter: fd,
      Lightbox: nf,
      LightboxPanel: tl,
      Notification: of,
      Parallax: pf,
      Slider: vf,
      SliderParallax: vl,
      Slideshow: kf,
      SlideshowParallax: vl,
      Sortable: xf,
      Tooltip: Rf,
      Upload: Ff
    });
    function Uf(t) {
      He && window.MutationObserver && (document.body ? requestAnimationFrame(() => _l(t)) : new MutationObserver((e, s) => {
        document.body && (_l(t), s.disconnect());
      }).observe(document.documentElement, { childList: !0 }));
    }
    function _l(t) {
      M(document, "uikit:init", t), document.body && Ne(document.body, Ol), new MutationObserver((e) => e.forEach(Mf)).observe(document, {
        subtree: !0,
        childList: !0
      }), new MutationObserver((e) => e.forEach(zf)).observe(document, {
        subtree: !0,
        attributes: !0
      }), t._initialized = !0;
    }
    function Mf({ addedNodes: t, removedNodes: e }) {
      for (const s of t)
        Ne(s, Ol);
      for (const s of e)
        Ne(s, qf);
    }
    function zf({ target: t, attributeName: e }) {
      var s;
      const a = Tl(e);
      a && (Te(t, e) ? oi(a, t) : (s = Zi(t, a)) == null || s.$destroy());
    }
    function Ol(t) {
      const e = ri(t);
      for (const s in e)
        To(e[s]);
      for (const s of t.getAttributeNames()) {
        const a = Tl(s);
        a && oi(a, t);
      }
    }
    function qf(t) {
      const e = ri(t);
      for (const s in e)
        Co(e[s]);
    }
    function Tl(t) {
      v(t, "data-") && (t = t.slice(5));
      const e = _n[t];
      return e && (e.options || e).name;
    }
    Gd(re), Xd(re);
    var Cl = {
      mixins: [Jt, Xe],
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
        items: ({ targets: t }, e) => gt(t, e),
        toggles({ toggle: t }) {
          return this.items.map((e) => K(t, e));
        },
        contents({ content: t }) {
          return this.items.map((e) => {
            var s;
            return ((s = e._wrapper) == null ? void 0 : s.firstElementChild) || K(t, e);
          });
        }
      },
      watch: {
        items(t, e) {
          if (e || V(t, this.clsOpen))
            return;
          const s = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
          s && this.toggle(s, !1);
        },
        toggles() {
          this.$emit();
        },
        contents(t) {
          for (const e of t) {
            const s = V(
              this.items.find((a) => a.contains(e)),
              this.clsOpen
            );
            as(e, !s);
          }
          this.$emit();
        }
      },
      observe: Xi(),
      events: [
        {
          name: "click keydown",
          delegate: ({ targets: t, $props: e }) => `${t} ${e.toggle}`,
          async handler(t) {
            var e;
            t.type === "keydown" && t.keyCode !== lt.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = Wf(t.target), await this.toggle(Se(this.toggles, t.current)), this._off());
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
        const t = qn(this.items, `.${this.clsOpen}`);
        for (const e in this.items) {
          const s = this.toggles[e], a = this.contents[e];
          if (!s || !a)
            continue;
          s.id = Ze(this, s), a.id = Ze(this, a);
          const u = S(t, this.items[e]);
          D(s, {
            role: kt(s, "a") ? "button" : null,
            "aria-controls": a.id,
            "aria-expanded": u,
            "aria-disabled": !this.collapsible && t.length < 2 && u
          }), D(a, { role: "region", "aria-labelledby": s.id }), kt(a, "ul") && D(ut(a), "role", "presentation");
        }
      },
      methods: {
        toggle(t, e) {
          t = this.items[ne(t, this.items)];
          let s = [t];
          const a = qn(this.items, `.${this.clsOpen}`);
          if (!this.multiple && !S(a, s[0]) && (s = s.concat(a)), !(!this.collapsible && a.length < 2 && S(a, t)))
            return Promise.all(
              s.map(
                (u) => this.toggleElement(u, !S(a, u), (d, f) => {
                  if (Et(d, this.clsOpen, f), e === !1 || !this.animation) {
                    as(K(this.content, d), !f);
                    return;
                  }
                  return Hf(d, f, this);
                })
              )
            );
        }
      }
    };
    function as(t, e) {
      t && (t.hidden = e);
    }
    async function Hf(t, e, { content: s, duration: a, velocity: u, transition: d }) {
      var f;
      s = ((f = t._wrapper) == null ? void 0 : f.firstElementChild) || K(s, t), t._wrapper || (t._wrapper = Li(s, "<div>"));
      const p = t._wrapper;
      $(p, "overflow", "hidden");
      const b = Q($(p, "height"));
      await ht.cancel(p), as(s, !1);
      const k = ze(["marginTop", "marginBottom"], (P) => $(s, P)) + U(s).height, E = b / k;
      a = (u * k + a) * (e ? 1 - E : E), $(p, "height", b), await ht.start(p, { height: e ? k : 0 }, a, d), Kn(s), delete t._wrapper, e || as(s, !0);
    }
    function Wf(t) {
      const e = Fe(t, !0);
      let s;
      return function a() {
        s = requestAnimationFrame(() => {
          const { top: u } = U(t);
          u < 0 && (e.scrollTop += u), a();
        });
      }(), () => requestAnimationFrame(() => cancelAnimationFrame(s));
    }
    var Vf = {
      mixins: [Jt, Xe],
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
          await this.toggleElement(this.$el, !1, Jf), this.$destroy(!0);
        }
      }
    };
    function Jf(t, e, { duration: s, transition: a, velocity: u }) {
      const d = Q($(t, "height"));
      return $(t, "height", d), ht.start(
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
        u * d + s,
        a
      );
    }
    var Al = {
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
        this.autoplay === "inview" && !Te(this.$el, "preload") && (this.$el.preload = "none"), kt(this.$el, "iframe") && !Te(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && (kt(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = !0), this.automute && aa(this.$el);
      },
      events: [
        {
          name: `${We} focusin`,
          filter: ({ autoplay: t }) => S(t, "hover"),
          handler(t) {
            !pe(t) || !Kf(this.$el) ? lo(this.$el) : Hi(this.$el);
          }
        },
        {
          name: `${bn} focusout`,
          filter: ({ autoplay: t }) => S(t, "hover"),
          handler(t) {
            pe(t) || Hi(this.$el);
          }
        }
      ],
      observe: [
        xn({
          filter: ({ $el: t, autoplay: e }) => e !== "hover" && la(t),
          handler([{ isIntersecting: t }]) {
            document.fullscreenElement || (t ? this.autoplay && lo(this.$el) : Hi(this.$el));
          },
          args: { intersecting: !1 },
          options: ({ $el: t, autoplay: e }) => ({ root: e === "inview" ? null : ct(t) })
        })
      ]
    };
    function Kf(t) {
      return !t.paused && !t.ended;
    }
    var Gf = {
      mixins: [Al],
      props: {
        width: Number,
        height: Number
      },
      data: {
        automute: !0
      },
      created() {
        this.useObjectFit = kt(this.$el, "img", "video");
      },
      observe: fe({
        target: ({ $el: t }) => Rl(t) || ct(t),
        filter: ({ useObjectFit: t }) => !t
      }),
      update: {
        read() {
          if (this.useObjectFit)
            return !1;
          const { ratio: t, cover: e } = Ws, { $el: s, width: a, height: u } = this;
          let d = { width: a, height: u };
          if (!a || !u) {
            const k = {
              width: s.naturalWidth || s.videoWidth || s.clientWidth,
              height: s.naturalHeight || s.videoHeight || s.clientHeight
            };
            a ? d = t(k, "width", a) : u ? d = t(k, "height", u) : d = k;
          }
          const { offsetHeight: f, offsetWidth: p } = Rl(s) || ct(s), b = e(d, { width: p, height: f });
          return !b.width || !b.height ? !1 : b;
        },
        write({ height: t, width: e }) {
          $(this.$el, { height: t, width: e });
        },
        events: ["resize"]
      }
    };
    function Rl(t) {
      for (; t = ct(t); )
        if ($(t, "position") !== "static")
          return t;
    }
    let Ut;
    var Pl = {
      mixins: [ni, xl, Xe],
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
        boundary({ boundary: t, boundaryX: e, boundaryY: s }, a) {
          return [
            Ht(e || t, a) || window,
            Ht(s || t, a) || window
          ];
        },
        target({ target: t, targetX: e, targetY: s }, a) {
          return e || (e = t || this.targetEl), s || (s = t || this.targetEl), [
            e === !0 ? window : Ht(e, a),
            s === !0 ? window : Ht(s, a)
          ];
        }
      },
      created() {
        this.tracker = new sa();
      },
      beforeConnect() {
        this.clsDrop = this.$props.clsDrop || this.$options.id;
      },
      connected() {
        Z(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = Yf(this)), this._style = qs(this.$el.style, ["width", "height"]);
      },
      disconnected() {
        this.isActive() && (this.hide(!1), Ut = null), $(this.$el, this._style);
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
            const { hash: s } = e;
            !t && s && vn(e) && !this.$el.contains(K(s)) && this.hide(!1);
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
          name: `${We} focusin`,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            pe(t) || this.clearTimers();
          }
        },
        {
          name: `${bn} focusout`,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            !pe(t) && t.relatedTarget && this.hide();
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
            Ut = this, this.tracker.init(), D(this.targetEl, "aria-expanded", !0);
            const t = [
              Qf(this),
              Zf(this),
              ep(this),
              this.autoUpdate && Nl(this),
              this.closeOnScroll && tp(this)
            ];
            $t(this.$el, "hide", () => t.forEach((e) => e && e()), {
              self: !0
            }), this.bgScroll || $t(this.$el, "hidden", Na(this.$el), { self: !0 });
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
              Ut = Ut === null && this.$el.contains(t) && this.isToggled() ? this : Ut;
              return;
            }
            Ut = this.isActive() ? null : Ut, this.tracker.cancel(), D(this.targetEl, "aria-expanded", null);
          }
        }
      ],
      update: {
        write() {
          this.isToggled() && !V(this.$el, this.clsEnter) && this.position();
        }
      },
      methods: {
        show(t = this.targetEl, e = !0) {
          if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
            if (Ut) {
              if (e && Ut.isDelaying()) {
                this.showTimer = setTimeout(() => it(t, ":hover") && this.show(), 10);
                return;
              }
              let s;
              for (; Ut && s !== Ut && !Ut.$el.contains(this.$el); )
                s = Ut, Ut.hide(!1, !1);
            }
            this.container && ct(this.$el) !== this.container && Ot(this.container, this.$el), this.showTimer = setTimeout(
              () => this.toggleElement(this.$el, !0),
              e && this.delayShow || 0
            );
          }
        },
        hide(t = !0, e = !0) {
          const s = () => this.toggleElement(this.$el, !1, this.animateOut && e);
          this.clearTimers(), this.isDelayedHide = t, t && this.isDelaying() ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(s, this.delayHide) : s();
        },
        clearTimers() {
          clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null;
        },
        isActive() {
          return Ut === this;
        },
        isDelaying() {
          return [this.$el, ...gt(".uk-drop", this.$el)].some((t) => this.tracker.movesTo(t));
        },
        position() {
          const t = Sl(this.$el);
          rt(this.$el, "uk-drop-stack"), $(this.$el, this._style), this.$el.hidden = !0;
          const e = this.target.map((d) => Xf(this.$el, d)), s = this.getViewportOffset(this.$el), a = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]]
          ];
          for (const [d, [f, p]] of a)
            this.axis !== f && S([f, !0], this.stretch) && $(this.$el, {
              [p]: Math.min(
                et(this.boundary[d])[p],
                e[d][p] - 2 * s
              ),
              [`overflow-${f}`]: "auto"
            });
          const u = e[0].width - 2 * s;
          this.$el.hidden = !1, $(this.$el, "maxWidth", ""), this.$el.offsetWidth > u && Z(this.$el, "uk-drop-stack"), $(this.$el, "maxWidth", u), this.positionAt(this.$el, this.target, this.boundary);
          for (const [d, [f, p, b, k]] of a)
            if (this.axis === f && S([f, !0], this.stretch)) {
              const E = Math.abs(this.getPositionOffset()), P = et(this.target[d]), N = et(this.$el);
              $(this.$el, {
                [p]: (P[b] > N[b] ? P[this.inset ? k : b] - Math.max(
                  et(this.boundary[d])[b],
                  e[d][b] + s
                ) : Math.min(
                  et(this.boundary[d])[k],
                  e[d][k] - s
                ) - P[this.inset ? b : k]) - E,
                [`overflow-${f}`]: "auto"
              }), this.positionAt(this.$el, this.target, this.boundary);
            }
          t();
        }
      }
    };
    function Xf(t, e) {
      return se(Ge(e).find((s) => s.contains(t)));
    }
    function Yf(t) {
      const { $el: e } = t.$create("toggle", Ht(t.toggle, t.$el), {
        target: t.$el,
        mode: t.mode
      });
      return D(e, "aria-haspopup", !0), e;
    }
    function Qf(t) {
      const e = () => t.$emit(), s = [
        ro(e),
        Yn(Ge(t.$el).concat(t.target), e)
      ];
      return () => s.map((a) => a.disconnect());
    }
    function Nl(t, e = () => t.$emit()) {
      return J([document, ...Ge(t.$el)], "scroll", e, {
        passive: !0
      });
    }
    function Zf(t) {
      return J(document, "keydown", (e) => {
        e.keyCode === lt.ESC && t.hide(!1);
      });
    }
    function tp(t) {
      return Nl(t, () => t.hide(!1));
    }
    function ep(t) {
      return J(document, de, ({ target: e }) => {
        t.$el.contains(e) || $t(
          document,
          `${Ce} ${Ri} scroll`,
          ({ defaultPrevented: s, type: a, target: u }) => {
            var d;
            !s && a === Ce && e === u && !((d = t.targetEl) != null && d.contains(e)) && t.hide(!1);
          },
          !0
        );
      });
    }
    var Bl = {
      mixins: [Jt, ni],
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
        align: Nt ? "right" : "left",
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
        dropbarAnchor: ({ dropbarAnchor: t }, e) => Ht(t, e) || e,
        dropbar({ dropbar: t }) {
          return t ? (t = this._dropbar || Ht(t, this.$el) || K(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = K("<div></div>"))) : null;
        },
        dropContainer(t, e) {
          return this.container || e;
        },
        dropdowns({ clsDrop: t }, e) {
          var s;
          const a = gt(`.${t}`, e);
          if (this.dropContainer !== e)
            for (const u of gt(`.${t}`, this.dropContainer)) {
              const d = (s = this.getDropdown(u)) == null ? void 0 : s.targetEl;
              !S(a, u) && d && this.$el.contains(d) && a.push(u);
            }
          return a;
        },
        items({ selNavItem: t }, e) {
          return gt(t, e);
        }
      },
      watch: {
        dropbar(t) {
          Z(
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
        ie(this._dropbar), delete this._dropbar;
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
            const { current: s, keyCode: a } = t, u = this.getActive();
            a === lt.DOWN && (u == null ? void 0 : u.targetEl) === s && (t.preventDefault(), (e = K(zn, u.$el)) == null || e.focus()), Fl(t, this.items, u);
          }
        },
        {
          name: "keydown",
          el: ({ dropContainer: t }) => t,
          delegate: ({ clsDrop: t }) => `.${t}`,
          handler(t) {
            var e;
            const { current: s, keyCode: a, target: u } = t;
            if (Pi(u) || !S(this.dropdowns, s))
              return;
            const d = this.getActive();
            let f = -1;
            if (a === lt.HOME ? f = 0 : a === lt.END ? f = "last" : a === lt.UP ? f = "previous" : a === lt.DOWN ? f = "next" : a === lt.ESC && ((e = d.targetEl) == null || e.focus()), ~f) {
              t.preventDefault();
              const p = gt(zn, s);
              p[ne(
                f,
                p,
                O(p, (b) => it(b, ":focus"))
              )].focus();
            }
            Fl(t, this.items, d);
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
            this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && Di(this.dropbarAnchor, this.dropbar), Z(t, `${this.clsDrop}-dropbar`));
          }
        },
        {
          name: "show",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler({ target: t }) {
            if (!this.isDropbarDrop(t))
              return;
            const e = this.getDropdown(t), s = () => {
              const a = Math.max(
                ...Hn(t, `.${this.clsDrop}`).concat(t).map((u) => et(u).bottom)
              );
              et(this.dropbar, {
                left: et(this.dropbar).left,
                top: this.getDropbarOffset(e.getPositionOffset())
              }), this.transitionTo(
                a - et(this.dropbar).top + Q($(t, "marginBottom")),
                t
              );
            };
            this._observer = Yn([e.$el, ...e.target], s), s();
          }
        },
        {
          name: "beforehide",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler(t) {
            const e = this.getActive();
            it(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && S(e.mode, "hover") && e.isDelayedHide && !this.items.some((s) => e.targetEl !== s && it(s, ":focus")) && t.preventDefault();
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
            const s = this.getActive();
            (!s || s.$el === t) && this.transitionTo(0);
          }
        }
      ],
      methods: {
        getActive() {
          var t;
          return S(this.dropdowns, (t = Ut) == null ? void 0 : t.$el) && Ut;
        },
        async transitionTo(t, e) {
          const { dropbar: s } = this, a = Vt(s);
          if (e = a < t && e, await ht.cancel([e, s]), e) {
            const u = et(e).top - et(s).top - a;
            u > 0 && $(e, "transitionDelay", `${u / t * this.duration}ms`);
          }
          $(e, "clipPath", `polygon(0 0,100% 0,100% ${a}px,0 ${a}px)`), Vt(s, a), await Promise.all([
            ht.start(s, { height: t }, this.duration),
            ht.start(
              e,
              { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` },
              this.duration
            ).finally(() => $(e, { clipPath: "", transitionDelay: "" }))
          ]).catch(at);
        },
        getDropdown(t) {
          return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
        },
        isDropbarDrop(t) {
          return S(this.dropdowns, t) && V(t, this.clsDrop);
        },
        getDropbarOffset(t) {
          const { $el: e, target: s, targetY: a } = this, { top: u, height: d } = et(Ht(a || s || e, e));
          return u + d + t;
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
    function Fl(t, e, s) {
      var a, u, d;
      const { current: f, keyCode: p } = t;
      let b = -1;
      p === lt.HOME ? b = 0 : p === lt.END ? b = "last" : p === lt.LEFT ? b = "previous" : p === lt.RIGHT ? b = "next" : p === lt.TAB && ((a = s.targetEl) == null || a.focus(), (u = s.hide) == null || u.call(s, !1)), ~b && (t.preventDefault(), (d = s.hide) == null || d.call(s, !1), e[ne(b, e, e.indexOf(s.targetEl || f))].focus());
    }
    var np = {
      mixins: [Jt],
      args: "target",
      props: {
        target: Boolean
      },
      data: {
        target: !1
      },
      computed: {
        input: (t, e) => K(Mn, e),
        state() {
          return this.input.nextElementSibling;
        },
        target({ target: t }, e) {
          return t && (t === !0 && ct(this.input) === e && this.input.nextElementSibling || K(t, e));
        }
      },
      update() {
        var t;
        const { target: e, input: s } = this;
        if (!e)
          return;
        let a;
        const u = Pi(e) ? "value" : "textContent", d = e[u], f = (t = s.files) != null && t[0] ? s.files[0].name : it(s, "select") && (a = gt("option", s).filter((p) => p.selected)[0]) ? a.textContent : s.value;
        d !== f && (e[u] = f);
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
    }, ip = {
      extends: Sa,
      mixins: [Jt],
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
        this.masonry && Z(this.$el, "uk-flex-top", "uk-flex-wrap-top");
      },
      observe: ti({ filter: ({ parallax: t, parallaxJustify: e }) => t || e }),
      update: [
        {
          write({ rows: t }) {
            Et(this.$el, this.clsStack, !t.some((e) => e.length > 1));
          },
          events: ["resize"]
        },
        {
          read(t) {
            const { rows: e } = t;
            let { masonry: s, parallax: a, parallaxJustify: u, margin: d } = this;
            if (a = Math.max(0, Ft(a)), !(s || a || u) || Il(e) || e[0].some(
              (q, tt) => e.some((st) => st[tt] && st[tt].offsetWidth !== q.offsetWidth)
            ))
              return t.translates = t.scrollColumns = !1;
            let f = op(e, d), p, b;
            s ? [p, b] = sp(e, f, s === "next") : p = rp(e);
            const k = p.map(
              (q) => ze(q, "offsetHeight") + f * (q.length - 1)
            ), E = Math.max(0, ...k);
            let P, N, I;
            return (a || u) && (P = k.map(
              (q, tt) => u ? E - q + a : a / (tt % 2 || 8)
            ), u || (a = Math.max(
              ...k.map((q, tt) => q + P[tt] - E)
            )), N = Ft(this.parallaxStart, "height", this.$el, !0), I = Ft(this.parallaxEnd, "height", this.$el, !0)), {
              columns: p,
              translates: b,
              scrollColumns: P,
              parallaxStart: N,
              parallaxEnd: I,
              padding: a,
              height: b ? E : ""
            };
          },
          write({ height: t, padding: e }) {
            $(this.$el, "paddingBottom", e || ""), t !== !1 && $(this.$el, "height", t);
          },
          events: ["resize"]
        },
        {
          read({ rows: t, scrollColumns: e, parallaxStart: s, parallaxEnd: a }) {
            return {
              scrolled: e && !Il(t) ? Ji(this.$el, s, a) : !1
            };
          },
          write({ columns: t, scrolled: e, scrollColumns: s, translates: a }) {
            !e && !a || t.forEach(
              (u, d) => u.forEach((f, p) => {
                let [b, k] = a && a[d][p] || [0, 0];
                e && (k += e * s[d]), $(f, "transform", `translate(${b}px, ${k}px)`);
              })
            );
          },
          events: ["scroll", "resize"]
        }
      ]
    };
    function Il(t) {
      return t.flat().some((e) => $(e, "position") === "absolute");
    }
    function sp(t, e, s) {
      const a = [], u = [], d = Array(t[0].length).fill(0);
      let f = 0;
      for (let p of t) {
        Nt && (p = p.reverse());
        let b = 0;
        for (const k in p) {
          const { offsetWidth: E, offsetHeight: P } = p[k], N = s ? k : d.indexOf(Math.min(...d));
          Po(a, N, p[k]), Po(u, N, [
            (N - k) * E * (Nt ? -1 : 1),
            d[N] - f
          ]), d[N] += P + e, b = Math.max(b, P);
        }
        f += b + e;
      }
      return [a, u];
    }
    function op(t, e) {
      const s = t.flat().find((a) => V(a, e));
      return Q(s ? $(s, "marginTop") : $(t[0][0], "paddingLeft"));
    }
    function rp(t) {
      const e = [];
      for (const s of t)
        for (const a in s)
          Po(e, a, s[a]);
      return e;
    }
    function Po(t, e, s) {
      t[e] || (t[e] = []), t[e].push(s);
    }
    var ap = {
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
        elements: ({ target: t }, e) => gt(t, e)
      },
      observe: fe({
        target: ({ $el: t, elements: e }) => e.reduce((s, a) => s.concat(a, ...a.children), [t])
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
            rows: (this.row ? wo(this.elements) : [this.elements]).map(lp)
          };
        },
        write({ rows: t }) {
          for (const { heights: e, elements: s } of t)
            s.forEach((a, u) => $(a, "minHeight", e[u]));
        },
        events: ["resize"]
      }
    };
    function lp(t) {
      if (t.length < 2)
        return { heights: [""], elements: t };
      let e = t.map(cp);
      const s = Math.max(...e);
      return {
        heights: t.map((a, u) => e[u].toFixed(2) === s.toFixed(2) ? "" : s),
        elements: t
      };
    }
    function cp(t) {
      const e = qs(t.style, ["display", "minHeight"]);
      _t(t) || $(t, "display", "block", "important"), $(t, "minHeight", "");
      const s = U(t).height - yn(t, "height", "content-box");
      return $(t, e), s;
    }
    var up = {
      args: "target",
      props: {
        target: String
      },
      data: {
        target: ""
      },
      computed: {
        target: {
          get: ({ target: t }, e) => Ht(t, e),
          observe: ({ target: t }) => t
        }
      },
      observe: fe({ target: ({ target: t }) => t }),
      update: {
        read() {
          return this.target ? { height: this.target.offsetHeight } : !1;
        },
        write({ height: t }) {
          $(this.$el, { minHeight: t });
        },
        events: ["resize"]
      }
    }, hp = {
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
        vo({ filter: ({ expand: t }) => t }),
        fe({ target: ({ $el: t }) => Ke(t) })
      ],
      update: {
        read() {
          if (!_t(this.$el))
            return !1;
          let t = "";
          const e = yn(this.$el, "height", "content-box"), { body: s, scrollingElement: a } = document, u = Fe(this.$el), { height: d } = se(
            u === s ? a : u
          ), f = a === u || s === u;
          if (t = `calc(${f ? "100vh" : `${d}px`}`, this.expand) {
            const p = U(u).height - U(this.$el).height;
            t += ` - ${p}px`;
          } else {
            if (this.offsetTop)
              if (f) {
                const p = this.offsetTop === !0 ? this.$el : Ht(this.offsetTop, this.$el), { top: b } = et(p);
                t += b > 0 && b < d / 2 ? ` - ${b}px` : "";
              } else
                t += ` - ${yn(u, "height", $(u, "boxSizing"))}px`;
            this.offsetBottom === !0 ? t += ` - ${U(this.$el.nextElementSibling).height}px` : ye(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && _(this.offsetBottom, "px") ? t += ` - ${Q(this.offsetBottom)}px` : mt(this.offsetBottom) && (t += ` - ${U(Ht(this.offsetBottom, this.$el)).height}px`);
          }
          return t += `${e ? ` - ${e}px` : ""})`, { minHeight: t };
        },
        write({ minHeight: t }) {
          $(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"]
      }
    }, dp = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', fp = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', pp = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', mp = '<svg width="20" height="20" viewBox="0 0 20 20"><rect width="1" height="11" x="9" y="4"/><rect width="11" height="1" x="4" y="9"/></svg>', gp = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', bp = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', vp = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', wp = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1"/><rect width="20" height="2" y="9" class="line-2"/><rect width="20" height="2" y="9" class="line-3"/><rect width="20" height="2" y="15" class="line-4"/></svg>', yp = '<svg width="40" height="40" viewBox="0 0 40 40"><rect width="1" height="40" x="19" y="0"/><rect width="40" height="1" x="0" y="19"/></svg>', $p = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', kp = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Dl = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', xp = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', Sp = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', Ep = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', _p = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', Op = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', Tp = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', Cp = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', Ap = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>', jl = {
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
          const e = Rp(t, this.$el);
          return this.svgEl && e !== this.svgEl && ie(this.svgEl), Pp.call(this, e, t), this.svgEl = e;
        }, at);
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected || (Vs(this.$el) && (this.$el.hidden = !1), ie(t), this.svgEl = null);
        }), this.svg = null;
      },
      methods: {
        async getSvg() {
        }
      }
    };
    function Rp(t, e) {
      if (Vs(e) || kt(e, "canvas")) {
        e.hidden = !0;
        const a = e.nextElementSibling;
        return Ll(t, a) ? a : Di(e, t);
      }
      const s = e.lastElementChild;
      return Ll(t, s) ? s : Ot(e, t);
    }
    function Ll(t, e) {
      return kt(t, "svg") && kt(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function Pp(t, e) {
      const s = ["width", "height"];
      let a = s.map((d) => this[d]);
      a.some((d) => d) || (a = s.map((d) => D(e, d)));
      const u = D(e, "viewBox");
      u && !a.some((d) => d) && (a = u.split(" ").slice(2)), a.forEach((d, f) => D(t, s[f], Q(d) * this.ratio || null));
    }
    var Np = {
      mixins: [jl],
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
        Gi({
          async handler() {
            const t = await this.svg;
            t && Ul.call(this, t);
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
        t && (Ul.call(this, t), this.strokeAnimation && Dp(t));
      },
      methods: {
        async getSvg() {
          return kt(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t) => $t(this.$el, "load", t)), Fp(await Bp(this.src), this.icon) || Promise.reject("SVG not found.");
        }
      }
    };
    function Ul(t) {
      const { $el: e } = this;
      Z(t, D(e, "class"), "uk-svg");
      for (let s = 0; s < e.style.length; s++) {
        const a = e.style[s];
        $(t, a, $(e, a));
      }
      for (const s in this.attributes) {
        const [a, u] = this.attributes[s].split(":", 2);
        D(t, a, u);
      }
      this.$el.id || Un(t, "id");
    }
    const Bp = he(async (t) => t ? v(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function Fp(t, e) {
      return e && S(t, "<symbol") && (t = Ip(t)[e] || t), zl(t);
    }
    const Ml = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, Ip = he(function(t) {
      const e = {};
      Ml.lastIndex = 0;
      let s;
      for (; s = Ml.exec(t); )
        e[s[3]] = `<svg ${s[1]}svg>`;
      return e;
    });
    function Dp(t) {
      const e = nl(t);
      e && $(t, "--uk-animation-stroke", e);
    }
    function zl(t) {
      const e = document.createElement("template");
      return e.innerHTML = t, e.content.firstElementChild;
    }
    const ls = {
      spinner: Cp,
      totop: Ap,
      marker: mp,
      "close-icon": dp,
      "close-large": fp,
      "drop-parent-icon": pp,
      "nav-parent-icon": bp,
      "nav-parent-icon-large": gp,
      "navbar-parent-icon": vp,
      "navbar-toggle-icon": wp,
      "overlay-icon": yp,
      "pagination-next": $p,
      "pagination-previous": kp,
      "search-icon": Dl,
      "search-medium": Sp,
      "search-large": xp,
      "search-toggle-icon": Dl,
      "slidenav-next": _p,
      "slidenav-next-large": Ep,
      "slidenav-previous": Tp,
      "slidenav-previous-large": Op
    }, No = {
      install: Jp,
      mixins: [jl],
      args: "icon",
      props: { icon: String },
      isIcon: !0,
      beforeConnect() {
        Z(this.$el, "uk-icon");
      },
      methods: {
        async getSvg() {
          const t = Gp(this.icon);
          if (!t)
            throw "Icon not found.";
          return t;
        }
      }
    }, en = {
      args: !1,
      extends: No,
      data: (t) => ({
        icon: h(t.constructor.options.name)
      }),
      beforeConnect() {
        Z(this.$el, this.$options.id);
      }
    }, jp = {
      extends: en,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      }
    }, Lp = {
      extends: en,
      mixins: [Qi],
      i18n: { toggle: "Open Search", submit: "Submit Search" },
      beforeConnect() {
        const t = V(this.$el, "uk-search-toggle") || V(this.$el, "uk-navbar-toggle");
        if (this.icon = t ? "search-toggle-icon" : V(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-medium") ? "search-medium" : this.$props.icon, !Te(this.$el, "aria-label"))
          if (t) {
            const e = this.t("toggle");
            D(this.$el, "aria-label", e);
          } else {
            const e = this.$el.closest("a,button");
            if (e) {
              const s = this.t("submit");
              D(e, "aria-label", s);
            }
          }
      }
    }, Up = {
      extends: en,
      beforeConnect() {
        D(this.$el, "role", "status");
      },
      methods: {
        async getSvg() {
          const t = await No.methods.getSvg.call(this);
          return this.ratio !== 1 && $(K("circle", t), "strokeWidth", 1 / this.ratio), t;
        }
      }
    }, nn = {
      extends: en,
      mixins: [Qi],
      beforeConnect() {
        const t = this.$el.closest("a,button");
        D(t, "role", this.role !== null && kt(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !Te(t, "aria-label") && D(t, "aria-label", e);
      }
    }, ql = {
      extends: nn,
      beforeConnect() {
        Z(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = V(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      }
    }, Mp = {
      extends: nn,
      i18n: { label: "Open menu" }
    }, zp = {
      extends: nn,
      i18n: { label: "Close" },
      beforeConnect() {
        this.icon = `close-${V(this.$el, "uk-close-large") ? "large" : "icon"}`;
      }
    }, qp = {
      extends: nn,
      i18n: { label: "Open" }
    }, Hp = {
      extends: nn,
      i18n: { label: "Back to top" }
    }, Wp = {
      extends: nn,
      i18n: { label: "Next page" },
      data: { role: null }
    }, Vp = {
      extends: nn,
      i18n: { label: "Previous page" },
      data: { role: null }
    }, cs = {};
    function Jp(t) {
      t.icon.add = (e, s) => {
        const a = mt(e) ? { [e]: s } : e;
        pn(a, (u, d) => {
          ls[d] = u, delete cs[d];
        }), t._initialized && Ne(
          document.body,
          (u) => pn(t.getComponents(u), (d) => {
            d.$options.isIcon && d.icon in a && d.$reset();
          })
        );
      };
    }
    const Kp = { twitter: "x" };
    function Gp(t) {
      return t = Kp[t] || t, ls[t] ? (cs[t] || (cs[t] = zl(ls[Xp(t)] || ls[t])), cs[t].cloneNode(!0)) : null;
    }
    function Xp(t) {
      return Nt ? zs(zs(t, "left", "right"), "previous", "next") : t;
    }
    var Yp = {
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
        this.loading !== "lazy" ? this.load() : Fo(this.$el) && (this.$el.loading = "lazy", Bo(this.$el));
      },
      disconnected() {
        this.img && (this.img.onload = ""), delete this.img;
      },
      observe: xn({
        handler(t, e) {
          this.load(), e.disconnect();
        },
        options: ({ margin: t }) => ({ rootMargin: t }),
        filter: ({ loading: t }) => t === "lazy",
        target: ({ $el: t, $props: e }) => e.target ? [t, ...Wn(e.target, t)] : t
      }),
      methods: {
        load() {
          if (this.img)
            return this.img;
          const t = Fo(this.$el) ? this.$el : Zp(this.$el, this.dataSrc, this.sources);
          return Un(t, "loading"), Bo(this.$el, t.currentSrc), this.img = t;
        }
      }
    };
    function Bo(t, e) {
      if (Fo(t)) {
        const s = ct(t);
        (kt(s, "picture") ? ut(s) : [t]).forEach((u) => Hl(u, u));
      } else e && !S(t.style.backgroundImage, e) && ($(t, "backgroundImage", `url(${Xs(e)})`), M(t, wn("load", !1)));
    }
    const Qp = ["data-src", "data-srcset", "sizes"];
    function Hl(t, e) {
      for (const s of Qp) {
        const a = Lt(t, s);
        a && D(e, s.replace(/^(data-)+/, ""), a);
      }
    }
    function Zp(t, e, s) {
      const a = new Image();
      return tm(a, s), Hl(t, a), a.onload = () => {
        Bo(t, a.currentSrc);
      }, D(a, "src", e), a;
    }
    function tm(t, e) {
      if (e = em(e), e.length) {
        const s = Ve("<picture>");
        for (const a of e) {
          const u = Ve("<source>");
          D(u, a), Ot(s, u);
        }
        Ot(s, t);
      }
    }
    function em(t) {
      if (!t)
        return [];
      if (v(t, "["))
        try {
          t = JSON.parse(t);
        } catch {
          t = [];
        }
      else
        t = kn(t);
      return x(t) || (t = [t]), t.filter((e) => !_i(e));
    }
    function Fo(t) {
      return kt(t, "img");
    }
    var nm = {
      props: {
        target: String,
        selActive: String
      },
      data: {
        target: !1,
        selActive: !1
      },
      computed: {
        target: ({ target: t }, e) => t ? gt(t, e) : e
      },
      observe: [
        xn({
          handler(t) {
            this.isIntersecting = t.some(({ isIntersecting: e }) => e), this.$emit();
          },
          target: ({ target: t }) => t,
          args: { intersecting: !1 }
        }),
        Gi({
          target: ({ target: t }) => t,
          options: { attributes: !0, attributeFilter: ["class"], attributeOldValue: !0 }
        }),
        {
          target: ({ target: t }) => t,
          observe: (t, e) => {
            const s = Yn(
              [...nt(t), document.documentElement],
              e
            ), a = [
              J(document, "scroll itemshown itemhidden", e, {
                passive: !0,
                capture: !0
              }),
              J(document, "show hide transitionstart", (u) => (e(), s.observe(u.target))),
              J(document, "shown hidden transitionend transitioncancel", (u) => (e(), s.unobserve(u.target)))
            ];
            return {
              observe: s.observe.bind(s),
              unobserve: s.unobserve.bind(s),
              disconnect() {
                s.disconnect(), a.map((u) => u());
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
          for (const t of nt(this.target)) {
            let e = !this.selActive || it(t, this.selActive) ? im(t) : "";
            e !== !1 && Ci(t, "uk-light uk-dark", e);
          }
        }
      }
    };
    function im(t) {
      const e = U(t), s = U(window);
      if (!Oi(e, s))
        return !1;
      const { left: a, top: u, height: d, width: f } = e;
      let p;
      for (const b of [0.25, 0.5, 0.75]) {
        const k = t.ownerDocument.elementsFromPoint(
          Math.max(0, Math.min(a + f * b, s.width - 1)),
          Math.max(0, Math.min(u + d / 2, s.height - 1))
        );
        for (const E of k) {
          if (t.contains(E) || !sm(E) || E.closest('[class*="-leave"]') && k.some((N) => E !== N && it(N, '[class*="-enter"]')))
            continue;
          const P = $(E, "--uk-inverse");
          if (P) {
            if (P === p)
              return `uk-${P}`;
            p = P;
            break;
          }
        }
      }
      return p ? `uk-${p}` : "";
    }
    function sm(t) {
      if ($(t, "visibility") !== "visible")
        return !1;
      for (; t; ) {
        if ($(t, "opacity") === "0")
          return !1;
        t = ct(t);
      }
      return !0;
    }
    var om = {
      mixins: [Jt, ts],
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
        fill: ({ fill: t }, e) => t || $(e, "--uk-leader-fill-content")
      },
      connected() {
        [this.wrapper] = no(this.$el, `<span class="${this.clsWrapper}">`);
      },
      disconnected() {
        Kn(this.wrapper.childNodes);
      },
      observe: fe(),
      update: {
        read() {
          return {
            width: Math.trunc(this.$el.offsetWidth / 2),
            fill: this.fill,
            hide: !this.matchMedia
          };
        },
        write({ width: t, fill: e, hide: s }) {
          Et(this.wrapper, this.clsHide, s), D(this.wrapper, this.attrFill, new Array(t).join(e));
        },
        events: ["resize"]
      }
    }, rm = {
      install: am,
      mixins: [Eo],
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
            kt(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            V(this.panel, "uk-margin-auto-vertical") ? Z(this.$el, "uk-flex") : $(this.$el, "display", "block"), Vt(this.$el);
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            $(this.$el, "display", ""), rt(this.$el, "uk-flex");
          }
        }
      ]
    };
    function am({ modal: t }) {
      t.dialog = function(s, a) {
        const u = t(K(`<div><div class="uk-modal-dialog">${s}</div></div>`), {
          stack: !0,
          role: "alertdialog",
          ...a
        });
        return u.show(), J(
          u.$el,
          "hidden",
          async () => {
            await Promise.resolve(), u.$destroy(!0);
          },
          { self: !0 }
        ), u;
      }, t.alert = function(s, a) {
        return e(
          ({ i18n: u }) => `<div class="uk-modal-body">${mt(s) ? s : Pe(s)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${u.ok}</button> </div>`,
          a
        );
      }, t.confirm = function(s, a) {
        return e(
          ({ i18n: u }) => `<form> <div class="uk-modal-body">${mt(s) ? s : Pe(s)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${u.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${u.ok}</button> </div> </form>`,
          a,
          () => Promise.reject()
        );
      }, t.prompt = function(s, a, u) {
        const d = e(
          ({ i18n: b }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${mt(s) ? s : Pe(s)}</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${b.cancel}</button> <button class="uk-button uk-button-primary">${b.ok}</button> </div> </form>`,
          u,
          () => null,
          () => p.value
        ), { $el: f } = d.dialog, p = K("input", f);
        return p.value = a || "", J(f, "show", () => p.select()), d;
      }, t.i18n = {
        ok: "Ok",
        cancel: "Cancel"
      };
      function e(s, a, u = at, d = at) {
        a = {
          bgClose: !1,
          escClose: !0,
          ...a,
          i18n: { ...t.i18n, ...a == null ? void 0 : a.i18n }
        };
        const f = t.dialog(s(a), a);
        return j(
          new Promise((p) => {
            const b = J(f.$el, "hide", () => p(u()));
            J(f.$el, "submit", "form", (k) => {
              k.preventDefault(), p(d(f)), b(), f.hide();
            });
          }),
          { dialog: f }
        );
      }
    }
    var lm = {
      extends: Cl,
      data: {
        targets: "> .uk-parent",
        toggle: "> a",
        content: "> ul"
      }
    };
    const Io = "uk-navbar-transparent";
    var cm = {
      extends: Bl,
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
          const t = V(this.$el, "uk-navbar-justify"), e = gt(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
          for (const s of e) {
            const a = t ? gt(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", s).length : "";
            $(s, "flexGrow", a);
          }
        }
      },
      events: [
        {
          name: "show",
          el: ({ dropContainer: t }) => t,
          handler({ target: t }) {
            this.getTransparentMode(t) === "remove" && V(this.navbarContainer, Io) && (rt(this.navbarContainer, Io), this._transparent = !0);
          }
        },
        {
          name: "hide",
          el: ({ dropContainer: t }) => t,
          async handler() {
            await um(), !this.getActive() && this._transparent && (Z(this.navbarContainer, Io), this._transparent = null);
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
          if (e && V(t, "uk-dropbar"))
            return e.inset ? "behind" : "remove";
        },
        getDropbarOffset(t) {
          const { top: e, height: s } = et(this.navbarContainer);
          return e + (this.dropbarTransparentMode === "behind" ? 0 : s + t);
        }
      }
    };
    function um() {
      return new Promise((t) => setTimeout(t));
    }
    var hm = {
      mixins: [Eo],
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
      observe: xa({ filter: ({ swiping: t }) => t }),
      update: {
        read() {
          this.isToggled() && !_t(this.$el) && this.hide();
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
            this.mode === "reveal" && !V(ct(this.panel), this.clsMode) && Z(Li(this.panel, "<div>"), this.clsMode);
            const { body: t, scrollingElement: e } = document;
            Z(t, this.clsContainer, this.clsFlip), $(t, "touchAction", "pan-y pinch-zoom"), $(this.$el, "display", "block"), $(this.panel, "maxWidth", e.clientWidth), Z(this.$el, this.clsOverlay), Z(
              this.panel,
              this.clsSidebarAnimation,
              this.mode === "reveal" ? "" : this.clsMode
            ), Vt(t), Z(t, this.clsContainerAnimation), this.clsContainerAnimation && dm();
          }
        },
        {
          name: "hide",
          self: !0,
          handler() {
            rt(document.body, this.clsContainerAnimation), $(document.body, "touchAction", "");
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.clsContainerAnimation && fm(), this.mode === "reveal" && V(ct(this.panel), this.clsMode) && Kn(this.panel), rt(this.panel, this.clsSidebarAnimation, this.clsMode), rt(this.$el, this.clsOverlay), $(this.$el, "display", ""), $(this.panel, "maxWidth", ""), rt(document.body, this.clsContainer, this.clsFlip);
          }
        },
        {
          name: "swipeLeft swipeRight",
          handler(t) {
            this.isToggled() && _(t.type, "Left") ^ this.flip && this.hide();
          }
        }
      ]
    };
    function dm() {
      Wl().content += ",user-scalable=0";
    }
    function fm() {
      const t = Wl();
      t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function Wl() {
      return K('meta[name="viewport"]', document.head) || Ot(document.head, '<meta name="viewport">');
    }
    var pm = {
      mixins: [Jt],
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
      observe: fe({
        target: ({ container: t, content: e }) => [t, e]
      }),
      update: {
        read() {
          return !this.content || !this.container || !_t(this.$el) ? !1 : {
            max: Math.max(
              this.minHeight,
              Vt(this.container) - (U(this.content).height - Vt(this.$el))
            )
          };
        },
        write({ max: t }) {
          $(this.$el, { minHeight: this.minHeight, maxHeight: t });
        },
        events: ["resize"]
      }
    }, mm = {
      props: ["width", "height"],
      connected() {
        Z(this.$el, "uk-responsive-width"), $(this.$el, "aspectRatio", `${this.width}/${this.height}`);
      }
    }, gm = {
      props: {
        offset: Number
      },
      data: {
        offset: 0
      },
      connected() {
        bm(this);
      },
      disconnected() {
        vm(this);
      },
      methods: {
        async scrollTo(t) {
          t = t && K(t) || document.body, M(this.$el, "beforescroll", [this, t]) && (await da(t, { offset: this.offset }), M(this.$el, "scrolled", [this, t]));
        }
      }
    };
    const hi = /* @__PURE__ */ new Set();
    function bm(t) {
      hi.size || J(document, "click", Vl), hi.add(t);
    }
    function vm(t) {
      hi.delete(t), hi.size || Ae(document, "click", Vl);
    }
    function Vl(t) {
      if (!t.defaultPrevented)
        for (const e of hi)
          e.$el.contains(t.target) && vn(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(Js(e.$el)));
    }
    const Do = "uk-scrollspy-inview";
    var wm = {
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
        elements: ({ target: t }, e) => t ? gt(t, e) : [e]
      },
      watch: {
        elements(t) {
          this.hidden && $(qn(t, `:not(.${Do})`), "opacity", 0);
        }
      },
      connected() {
        this.elementData = /* @__PURE__ */ new Map();
      },
      disconnected() {
        for (const [t, e] of this.elementData.entries())
          rt(t, Do, (e == null ? void 0 : e.cls) || "");
        delete this.elementData;
      },
      observe: xn({
        target: ({ elements: t }) => t,
        handler(t) {
          const e = this.elementData;
          for (const { target: s, isIntersecting: a } of t) {
            e.has(s) || e.set(s, {
              cls: Lt(s, "uk-scrollspy-class") || this.cls
            });
            const u = e.get(s);
            !this.repeat && u.show || (u.show = a);
          }
          this.$emit();
        },
        options: ({ margin: t }) => ({ rootMargin: t }),
        args: { intersecting: !1 }
      }),
      update: [
        {
          write(t) {
            for (const [e, s] of this.elementData.entries())
              s.show && !s.inview && !s.queued ? (s.queued = !0, t.promise = (t.promise || Promise.resolve()).then(() => new Promise((a) => setTimeout(a, this.delay))).then(() => {
                this.toggle(e, !0), setTimeout(() => {
                  s.queued = !1, this.$emit();
                }, 300);
              })) : !s.show && s.inview && !s.queued && this.repeat && this.toggle(e, !1);
          }
        }
      ],
      methods: {
        toggle(t, e) {
          var s, a;
          const u = (s = this.elementData) == null ? void 0 : s.get(t);
          if (!u)
            return;
          (a = u.off) == null || a.call(u), $(t, "opacity", !e && this.hidden ? 0 : ""), Et(t, Do, e), Et(t, u.cls);
          let d;
          if (d = u.cls.match(/\buk-animation-[\w-]+/g)) {
            const f = () => rt(t, d);
            e ? u.off = $t(t, "animationcancel animationend", f, {
              self: !0
            }) : f();
          }
          M(t, e ? "inview" : "outview"), u.inview = e;
        }
      }
    }, ym = {
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
        links: ({ target: t }, e) => gt(t, e).filter((s) => vn(s)),
        elements({ closest: t }) {
          return this.links.map((e) => e.closest(t || "*"));
        }
      },
      watch: {
        links(t) {
          this.scroll && this.$create("scroll", t, { offset: this.offset });
        }
      },
      observe: [xn(), ti()],
      update: [
        {
          read() {
            const t = this.links.map((b) => Js(b) || b.ownerDocument), { length: e } = t;
            if (!e || !_t(this.$el))
              return !1;
            const s = Fe(t, !0), { scrollTop: a, scrollHeight: u } = s, d = se(s), f = u - d.height;
            let p = !1;
            if (a >= f)
              p = e - 1;
            else {
              const b = this.offset + U(ho()).height + d.height * 0.1;
              for (let k = 0; k < t.length && !(et(t[k]).top - d.top - b > 0); k++)
                p = +k;
            }
            return { active: p };
          },
          write({ active: t }) {
            const e = t !== !1 && !V(this.elements[t], this.cls);
            this.links.forEach((s) => s.blur());
            for (let s = 0; s < this.elements.length; s++)
              Et(this.elements[s], this.cls, +s === t);
            e && M(this.$el, "active", [t, this.elements[t]]);
          },
          events: ["scroll", "resize"]
        }
      ]
    }, $m = {
      mixins: [Jt, ts],
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
        target: ({ selTarget: t }, e) => t && K(t, e) || e
      },
      connected() {
        this.start = Jl(this.start || this.top), this.end = Jl(this.end || this.bottom), this.placeholder = K("+ .uk-sticky-placeholder", this.$el) || K('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
      },
      beforeDisconnect() {
        this.isFixed && (this.hide(), rt(this.target, this.clsInactive)), Kl(this.$el), ie(this.placeholder), this.placeholder = null;
      },
      observe: [
        vo(),
        ti({ target: () => document.scrollingElement }),
        fe({
          target: ({ $el: t }) => [t, us(t), document.scrollingElement],
          handler(t) {
            this.$emit(
              this._data.resized && t.some(({ target: e }) => e === us(this.$el)) ? "update" : "resize"
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
              const e = et(K(location.hash)), s = et(this.$el);
              this.isFixed && Oi(e, s) && (t.scrollTop = Math.ceil(
                e.top - s.height - Ft(this.targetOffset, "height", this.placeholder) - Ft(this.offset, "height", this.placeholder)
              ));
            });
          }
        }
      ],
      update: [
        {
          read({ height: t, width: e, margin: s, sticky: a }, u) {
            if (this.inactive = !this.matchMedia || !_t(this.$el) || !this.$el.offsetHeight, this.inactive)
              return;
            const d = Vt(window), f = Math.max(
              0,
              document.scrollingElement.scrollHeight - d
            );
            if (!f) {
              this.inactive = !0;
              return;
            }
            const p = this.isFixed && u.has("update");
            p && (Uo(this.target), this.hide()), this.active || ({ height: t, width: e } = U(this.$el), s = $(this.$el, "margin")), p && this.show();
            const b = Ft("100vh", "height");
            let k = this.position;
            this.overflowFlip && t > b && (k = k === "top" ? "bottom" : "top");
            const E = this.isFixed ? this.placeholder : this.$el;
            let P = Ft(this.offset, "height", a ? this.$el : E);
            k === "bottom" && (t < d || this.overflowFlip) && (P += d - t);
            const N = this.overflowFlip ? 0 : Math.max(0, t + P - b), I = et(E).top - // offset possible `transform: translateY` animation 'uk-animation-slide-top' while hiding
            new DOMMatrix($(E, "transform")).m42, q = U(this.$el).height, tt = (this.start === !1 ? I : jo(this.start, this.$el, I)) - P, st = this.end === !1 ? f : Math.min(
              f,
              jo(this.end, this.$el, I + t, !0) - q - P + N
            );
            return a = !this.showOnUp && tt + P === I && st === Math.min(
              f,
              jo(!0, this.$el, 0, !0) - q - P + N
            ) && $(us(this.$el), "overflowY") !== "hidden", {
              start: tt,
              end: st,
              offset: P,
              overflow: N,
              height: t,
              elHeight: q,
              width: e,
              margin: s,
              top: Gn(E)[0],
              sticky: a,
              viewport: b,
              maxScrollHeight: f
            };
          },
          write({ height: t, width: e, margin: s, offset: a, sticky: u }) {
            if ((this.inactive || u || !this.isFixed) && Kl(this.$el), this.inactive)
              return;
            u && (t = e = s = 0, $(this.$el, { position: "sticky", top: a }));
            const { placeholder: d } = this;
            $(d, { height: t, width: e, margin: s }), (ct(d) !== ct(this.$el) || u ^ Se(d) < Se(this.$el)) && ((u ? Ii : Di)(this.$el, d), d.hidden = !0);
          },
          events: ["resize"]
        },
        {
          read({
            scroll: t = 0,
            dir: e = "down",
            overflow: s,
            overflowScroll: a = 0,
            start: u,
            end: d,
            elHeight: f,
            height: p,
            sticky: b,
            maxScrollHeight: k
          }) {
            const E = Math.min(document.scrollingElement.scrollTop, k), P = t <= E ? "down" : "up", N = this.isFixed ? this.placeholder : this.$el;
            return {
              dir: P,
              prevDir: e,
              scroll: E,
              prevScroll: t,
              below: E > et(N).top + (b ? Math.min(p, f) : p),
              offsetParentTop: et(N.offsetParent).top,
              overflowScroll: zt(
                a + zt(E, u, d) - zt(t, u, d),
                0,
                s
              )
            };
          },
          write(t, e) {
            const s = e.has("scroll"), {
              initTimestamp: a = 0,
              dir: u,
              prevDir: d,
              scroll: f,
              prevScroll: p = 0,
              top: b,
              start: k,
              below: E
            } = t;
            if (f < 0 || f === p && s || this.showOnUp && !s && !this.isFixed)
              return;
            const P = Date.now();
            if ((P - a > 300 || u !== d) && (t.initScroll = f, t.initTimestamp = P), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - f) <= 30 && Math.abs(p - f) <= 10))
              if (this.inactive || f < k || this.showOnUp && (f <= k || u === "down" && s || u === "up" && !this.isFixed && !E)) {
                if (!this.isFixed) {
                  Re.inProgress(this.$el) && b > f && (Re.cancel(this.$el), this.hide());
                  return;
                }
                if (this.animation && E) {
                  if (V(this.$el, "uk-animation-leave"))
                    return;
                  Re.out(this.$el, this.animation).then(() => this.hide(), at);
                } else
                  this.hide();
              } else this.isFixed ? this.update() : this.animation && E ? (this.show(), Re.in(this.$el, this.animation).catch(at)) : (Uo(this.target), this.show());
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
          this.setActive(!1), rt(this.$el, this.clsFixed, this.clsBelow), e ? $(this.$el, "top", t) : $(this.$el, {
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
            overflow: s,
            overflowScroll: a = 0,
            start: u,
            end: d,
            offset: f,
            offsetParentTop: p,
            sticky: b,
            below: k
          } = this._data;
          const E = u !== 0 || e > u;
          if (!b) {
            let P = "fixed";
            e > d && (f += d - p + a - s, P = "absolute"), $(this.$el, { position: P, width: t, marginTop: 0 }, "important");
          }
          $(this.$el, "top", f - a), this.setActive(E), Et(this.$el, this.clsBelow, k), Z(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          this.active = t, t ? (Ci(this.target, this.clsInactive, this.clsActive), e !== t && M(this.$el, "active")) : (Ci(this.target, this.clsActive, this.clsInactive), e !== t && (Uo(this.target), M(this.$el, "inactive")));
        }
      }
    };
    function jo(t, e, s, a) {
      if (!t)
        return 0;
      if (ye(t) || mt(t) && t.match(/^-?\d/))
        return s + Ft(t, "height", e, !0);
      {
        const u = t === !0 ? us(e) : Ht(t, e);
        return et(u).bottom - (a && (u != null && u.contains(e)) ? Q($(u, "paddingBottom")) + Q($(u, "borderBottomWidth")) : 0);
      }
    }
    function Jl(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function Kl(t) {
      $(t, { position: "", top: "", marginTop: "", width: "" });
    }
    const Lo = "uk-transition-disable";
    function Uo(t) {
      V(t, Lo) || (Z(t, Lo), requestAnimationFrame(() => rt(t, Lo)));
    }
    function us(t) {
      for (; t = ct(t); )
        if (_t(t))
          return t;
    }
    const Mo = ".uk-disabled *, .uk-disabled, [disabled]";
    var Gl = {
      mixins: [Xe],
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
          get: ({ connect: t }, e) => Wn(t, e),
          observe: ({ connect: t }) => t
        },
        connectChildren() {
          return this.connects.map((t) => ut(t)).flat();
        },
        toggles: ({ toggle: t }, e) => gt(t, e),
        children(t, e) {
          return ut(e).filter(
            (s) => this.toggles.some((a) => s.contains(a))
          );
        }
      },
      watch: {
        connects(t) {
          this.swiping && $(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
        },
        connectChildren() {
          let t = Math.max(0, this.index());
          for (const e of this.connects)
            ut(e).forEach((s, a) => Et(s, this.cls, a === t));
          this.$emit();
        },
        toggles(t) {
          this.$emit();
          const e = this.index();
          this.show(~e ? e : t[this.active] || t[0]);
        }
      },
      connected() {
        D(this.$el, "role", "tablist");
      },
      observe: [
        Xi({ targets: ({ connectChildren: t }) => t }),
        xa({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })
      ],
      events: [
        {
          name: "click keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            !it(t.current, Mo) && (t.type === "click" || t.keyCode === lt.SPACE) && (t.preventDefault(), this.show(t.current));
          }
        },
        {
          name: "keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            const { current: e, keyCode: s } = t, a = it(this.$el, this.selVertical);
            let u = s === lt.HOME ? 0 : s === lt.END ? "last" : s === lt.LEFT && !a || s === lt.UP && a ? "previous" : s === lt.RIGHT && !a || s === lt.DOWN && a ? "next" : -1;
            if (~u) {
              t.preventDefault();
              const d = this.toggles.filter((p) => !it(p, Mo)), f = d[ne(u, d, d.indexOf(e))];
              f.focus(), this.followFocus && this.show(f);
            }
          }
        },
        {
          name: "click",
          el: ({ $el: t, connects: e, itemNav: s }) => e.concat(s ? Wn(s, t) : []),
          delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`,
          handler(t) {
            t.target.closest("a,button") && (t.preventDefault(), this.show(Lt(t.current, this.attrItem)));
          }
        },
        {
          name: "swipeRight swipeLeft",
          filter: ({ swiping: t }) => t,
          el: ({ connects: t }) => t,
          handler({ type: t }) {
            this.show(_(t, "Left") ? "next" : "previous");
          }
        }
      ],
      update() {
        var t;
        for (const e of this.connects)
          kt(e, "ul") && D(e, "role", "presentation");
        D(ut(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const s = this.toggles[e], a = (t = this.connects[0]) == null ? void 0 : t.children[e];
          D(s, "role", "tab"), a && (s.id = Ze(this, s), a.id = Ze(this, a), D(s, "aria-controls", a.id), D(a, { role: "tabpanel", "aria-labelledby": s.id }));
        }
        D(this.$el, "aria-orientation", it(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return O(this.children, (t) => V(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter((f) => !it(f, Mo)), s = this.index(), a = ne(
            !pt(t) || S(e, t) ? t : 0,
            e,
            ne(this.toggles[s], e)
          ), u = ne(e[a], this.toggles);
          this.children.forEach((f, p) => {
            Et(f, this.cls, u === p), D(this.toggles[p], {
              "aria-selected": u === p,
              tabindex: u === p ? null : -1
            });
          });
          const d = s >= 0 && s !== a;
          this.connects.forEach(async ({ children: f }) => {
            const p = y(f).filter(
              (b, k) => k !== u && V(b, this.cls)
            );
            await this.toggleElement(p, !1, d) && await this.toggleElement(f[u], !0, d);
          });
        }
      }
    }, km = {
      mixins: [Jt],
      extends: Gl,
      props: {
        media: Boolean
      },
      data: {
        media: 960,
        attrItem: "uk-tab-item",
        selVertical: ".uk-tab-left,.uk-tab-right"
      },
      connected() {
        const t = V(this.$el, "uk-tab-left") ? "uk-tab-left" : V(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
        t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
      }
    };
    const xm = 32;
    var Sm = {
      mixins: [ts, Xe],
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
          get: ({ target: t }, e) => (t = Wn(t || e.hash, e), t.length ? t : [e]),
          observe: ({ target: t }) => t
        }
      },
      connected() {
        S(this.mode, "media") || (Ni(this.$el) || D(this.$el, "tabindex", "0"), !this.cls && kt(this.$el, "a") && D(this.$el, "role", "button"));
      },
      observe: Xi({ targets: ({ target: t }) => t }),
      events: [
        {
          name: de,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            this._preventClick = null, !(!pe(t) || Dt(this._showState) || this.$el.disabled) && (M(this.$el, "focus"), $t(
              document,
              de,
              () => M(this.$el, "blur"),
              !0,
              (e) => !this.$el.contains(e.target)
            ), S(this.mode, "click") && (this._preventClick = !0));
          }
        },
        {
          // mouseenter mouseleave are added because of Firefox bug,
          // where pointerleave is triggered immediately after pointerenter on scroll
          name: `mouseenter mouseleave ${We} ${bn} focus blur`,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            if (pe(t) || this.$el.disabled)
              return;
            const e = S(["mouseenter", We, "focus"], t.type), s = this.isToggled(this.target);
            if (!e && (!Dt(this._showState) || t.type !== "blur" && it(this.$el, ":focus") || t.type === "blur" && it(this.$el, ":hover"))) {
              s === this._showState && (this._showState = null);
              return;
            }
            e && Dt(this._showState) && s !== this._showState || (this._showState = e ? s : null, this.toggle(`toggle${e ? "show" : "hide"}`));
          }
        },
        {
          name: "keydown",
          filter: ({ $el: t, mode: e }) => S(e, "click") && !kt(t, "input"),
          handler(t) {
            t.keyCode === xm && (t.preventDefault(), this.$el.click());
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
          if (!M(this.target, t || "toggle", [this]))
            return;
          if (Te(this.$el, "aria-expanded") && D(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
            return this.toggleElement(this.target);
          const e = this.target.filter((a) => V(a, this.clsLeave));
          if (e.length) {
            for (const a of this.target) {
              const u = S(e, a);
              this.toggleElement(a, u, u);
            }
            return;
          }
          const s = this.target.filter(this.isToggled);
          await this.toggleElement(s, !1) && await this.toggleElement(
            this.target.filter((a) => !S(s, a)),
            !0
          );
        }
      }
    }, Em = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Accordion: Cl,
      Alert: Vf,
      Close: zp,
      Cover: Gf,
      Drop: Pl,
      DropParentIcon: en,
      Dropdown: Pl,
      Dropnav: Bl,
      FormCustom: np,
      Grid: ip,
      HeightMatch: ap,
      HeightPlaceholder: up,
      HeightViewport: hp,
      Icon: No,
      Img: Yp,
      Inverse: nm,
      Leader: om,
      Margin: Sa,
      Marker: qp,
      Modal: rm,
      Nav: lm,
      NavParentIcon: jp,
      Navbar: cm,
      NavbarParentIcon: en,
      NavbarToggleIcon: Mp,
      Offcanvas: hm,
      OverflowAuto: pm,
      OverlayIcon: en,
      PaginationNext: Wp,
      PaginationPrevious: Vp,
      Responsive: mm,
      Scroll: gm,
      Scrollspy: wm,
      ScrollspyNav: ym,
      SearchIcon: Lp,
      SlidenavNext: ql,
      SlidenavPrevious: ql,
      Spinner: Up,
      Sticky: $m,
      Svg: Np,
      Switcher: Gl,
      Tab: km,
      Toggle: Sm,
      Totop: Hp,
      Video: Al
    });
    return pn(Em, (t, e) => re.component(e, t)), Uf(re), pn(Lf, (t, e) => re.component(e, t)), re;
  });
})(Hc);
var gg = Hc.exports;
const Wc = /* @__PURE__ */ mg(gg);
function Vc(n, i) {
  return function() {
    return n.apply(i, arguments);
  };
}
const { toString: bg } = Object.prototype, { getPrototypeOf: _r } = Object, _s = /* @__PURE__ */ ((n) => (i) => {
  const r = bg.call(i);
  return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), be = (n) => (n = n.toLowerCase(), (i) => _s(i) === n), Os = (n) => (i) => typeof i === n, { isArray: Pn } = Array, gi = Os("undefined");
function vg(n) {
  return n !== null && !gi(n) && n.constructor !== null && !gi(n.constructor) && le(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Jc = be("ArrayBuffer");
function wg(n) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && Jc(n.buffer), i;
}
const yg = Os("string"), le = Os("function"), Kc = Os("number"), Ts = (n) => n !== null && typeof n == "object", $g = (n) => n === !0 || n === !1, ds = (n) => {
  if (_s(n) !== "object")
    return !1;
  const i = _r(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}, kg = be("Date"), xg = be("File"), Sg = be("Blob"), Eg = be("FileList"), _g = (n) => Ts(n) && le(n.pipe), Og = (n) => {
  let i;
  return n && (typeof FormData == "function" && n instanceof FormData || le(n.append) && ((i = _s(n)) === "formdata" || // detect form-data instance
  i === "object" && le(n.toString) && n.toString() === "[object FormData]"));
}, Tg = be("URLSearchParams"), [Cg, Ag, Rg, Pg] = ["ReadableStream", "Request", "Response", "Headers"].map(be), Ng = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function yi(n, i, { allOwnKeys: r = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let o, l;
  if (typeof n != "object" && (n = [n]), Pn(n))
    for (o = 0, l = n.length; o < l; o++)
      i.call(null, n[o], o, n);
  else {
    const c = r ? Object.getOwnPropertyNames(n) : Object.keys(n), h = c.length;
    let m;
    for (o = 0; o < h; o++)
      m = c[o], i.call(null, n[m], m, n);
  }
}
function Gc(n, i) {
  i = i.toLowerCase();
  const r = Object.keys(n);
  let o = r.length, l;
  for (; o-- > 0; )
    if (l = r[o], i === l.toLowerCase())
      return l;
  return null;
}
const on = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xc = (n) => !gi(n) && n !== on;
function nr() {
  const { caseless: n } = Xc(this) && this || {}, i = {}, r = (o, l) => {
    const c = n && Gc(i, l) || l;
    ds(i[c]) && ds(o) ? i[c] = nr(i[c], o) : ds(o) ? i[c] = nr({}, o) : Pn(o) ? i[c] = o.slice() : i[c] = o;
  };
  for (let o = 0, l = arguments.length; o < l; o++)
    arguments[o] && yi(arguments[o], r);
  return i;
}
const Bg = (n, i, r, { allOwnKeys: o } = {}) => (yi(i, (l, c) => {
  r && le(l) ? n[c] = Vc(l, r) : n[c] = l;
}, { allOwnKeys: o }), n), Fg = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), Ig = (n, i, r, o) => {
  n.prototype = Object.create(i.prototype, o), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: i.prototype
  }), r && Object.assign(n.prototype, r);
}, Dg = (n, i, r, o) => {
  let l, c, h;
  const m = {};
  if (i = i || {}, n == null) return i;
  do {
    for (l = Object.getOwnPropertyNames(n), c = l.length; c-- > 0; )
      h = l[c], (!o || o(h, n, i)) && !m[h] && (i[h] = n[h], m[h] = !0);
    n = r !== !1 && _r(n);
  } while (n && (!r || r(n, i)) && n !== Object.prototype);
  return i;
}, jg = (n, i, r) => {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= i.length;
  const o = n.indexOf(i, r);
  return o !== -1 && o === r;
}, Lg = (n) => {
  if (!n) return null;
  if (Pn(n)) return n;
  let i = n.length;
  if (!Kc(i)) return null;
  const r = new Array(i);
  for (; i-- > 0; )
    r[i] = n[i];
  return r;
}, Ug = /* @__PURE__ */ ((n) => (i) => n && i instanceof n)(typeof Uint8Array < "u" && _r(Uint8Array)), Mg = (n, i) => {
  const r = (n && n[Symbol.iterator]).call(n);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const l = o.value;
    i.call(n, l[0], l[1]);
  }
}, zg = (n, i) => {
  let r;
  const o = [];
  for (; (r = n.exec(i)) !== null; )
    o.push(r);
  return o;
}, qg = be("HTMLFormElement"), Hg = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, r, o) {
    return r.toUpperCase() + o;
  }
), tc = (({ hasOwnProperty: n }) => (i, r) => n.call(i, r))(Object.prototype), Wg = be("RegExp"), Yc = (n, i) => {
  const r = Object.getOwnPropertyDescriptors(n), o = {};
  yi(r, (l, c) => {
    let h;
    (h = i(l, c, n)) !== !1 && (o[c] = h || l);
  }), Object.defineProperties(n, o);
}, Vg = (n) => {
  Yc(n, (i, r) => {
    if (le(n) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = n[r];
    if (le(o)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Jg = (n, i) => {
  const r = {}, o = (l) => {
    l.forEach((c) => {
      r[c] = !0;
    });
  };
  return Pn(n) ? o(n) : o(String(n).split(i)), r;
}, Kg = () => {
}, Gg = (n, i) => n != null && Number.isFinite(n = +n) ? n : i, qo = "abcdefghijklmnopqrstuvwxyz", ec = "0123456789", Qc = {
  DIGIT: ec,
  ALPHA: qo,
  ALPHA_DIGIT: qo + qo.toUpperCase() + ec
}, Xg = (n = 16, i = Qc.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = i;
  for (; n--; )
    r += i[Math.random() * o | 0];
  return r;
};
function Yg(n) {
  return !!(n && le(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator]);
}
const Qg = (n) => {
  const i = new Array(10), r = (o, l) => {
    if (Ts(o)) {
      if (i.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        i[l] = o;
        const c = Pn(o) ? [] : {};
        return yi(o, (h, m) => {
          const w = r(h, l + 1);
          !gi(w) && (c[m] = w);
        }), i[l] = void 0, c;
      }
    }
    return o;
  };
  return r(n, 0);
}, Zg = be("AsyncFunction"), tb = (n) => n && (Ts(n) || le(n)) && le(n.then) && le(n.catch), Zc = ((n, i) => n ? setImmediate : i ? ((r, o) => (on.addEventListener("message", ({ source: l, data: c }) => {
  l === on && c === r && o.length && o.shift()();
}, !1), (l) => {
  o.push(l), on.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  le(on.postMessage)
), eb = typeof queueMicrotask < "u" ? queueMicrotask.bind(on) : typeof process < "u" && process.nextTick || Zc, C = {
  isArray: Pn,
  isArrayBuffer: Jc,
  isBuffer: vg,
  isFormData: Og,
  isArrayBufferView: wg,
  isString: yg,
  isNumber: Kc,
  isBoolean: $g,
  isObject: Ts,
  isPlainObject: ds,
  isReadableStream: Cg,
  isRequest: Ag,
  isResponse: Rg,
  isHeaders: Pg,
  isUndefined: gi,
  isDate: kg,
  isFile: xg,
  isBlob: Sg,
  isRegExp: Wg,
  isFunction: le,
  isStream: _g,
  isURLSearchParams: Tg,
  isTypedArray: Ug,
  isFileList: Eg,
  forEach: yi,
  merge: nr,
  extend: Bg,
  trim: Ng,
  stripBOM: Fg,
  inherits: Ig,
  toFlatObject: Dg,
  kindOf: _s,
  kindOfTest: be,
  endsWith: jg,
  toArray: Lg,
  forEachEntry: Mg,
  matchAll: zg,
  isHTMLForm: qg,
  hasOwnProperty: tc,
  hasOwnProp: tc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Yc,
  freezeMethods: Vg,
  toObjectSet: Jg,
  toCamelCase: Hg,
  noop: Kg,
  toFiniteNumber: Gg,
  findKey: Gc,
  global: on,
  isContextDefined: Xc,
  ALPHABET: Qc,
  generateString: Xg,
  isSpecCompliantForm: Yg,
  toJSONObject: Qg,
  isAsyncFn: Zg,
  isThenable: tb,
  setImmediate: Zc,
  asap: eb
};
function G(n, i, r, o, l) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), o && (this.request = o), l && (this.response = l, this.status = l.status ? l.status : null);
}
C.inherits(G, Error, {
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
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const tu = G.prototype, eu = {};
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
].forEach((n) => {
  eu[n] = { value: n };
});
Object.defineProperties(G, eu);
Object.defineProperty(tu, "isAxiosError", { value: !0 });
G.from = (n, i, r, o, l, c) => {
  const h = Object.create(tu);
  return C.toFlatObject(n, h, function(m) {
    return m !== Error.prototype;
  }, (m) => m !== "isAxiosError"), G.call(h, n.message, i, r, o, l), h.cause = n, h.name = n.name, c && Object.assign(h, c), h;
};
const nb = null;
function ir(n) {
  return C.isPlainObject(n) || C.isArray(n);
}
function nu(n) {
  return C.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function nc(n, i, r) {
  return n ? n.concat(i).map(function(o, l) {
    return o = nu(o), !r && l ? "[" + o + "]" : o;
  }).join(r ? "." : "") : i;
}
function ib(n) {
  return C.isArray(n) && !n.some(ir);
}
const sb = C.toFlatObject(C, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Cs(n, i, r) {
  if (!C.isObject(n))
    throw new TypeError("target must be an object");
  i = i || new FormData(), r = C.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(O, x) {
    return !C.isUndefined(x[O]);
  });
  const o = r.metaTokens, l = r.visitor || g, c = r.dots, h = r.indexes, m = (r.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(i);
  if (!C.isFunction(l))
    throw new TypeError("visitor must be a function");
  function w(O) {
    if (O === null) return "";
    if (C.isDate(O))
      return O.toISOString();
    if (!m && C.isBlob(O))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(O) || C.isTypedArray(O) ? m && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O;
  }
  function g(O, x, y) {
    let j = O;
    if (O && !y && typeof O == "object") {
      if (C.endsWith(x, "{}"))
        x = o ? x : x.slice(0, -2), O = JSON.stringify(O);
      else if (C.isArray(O) && ib(O) || (C.isFileList(O) || C.endsWith(x, "[]")) && (j = C.toArray(O)))
        return x = nu(x), j.forEach(function(L, F) {
          !(C.isUndefined(L) || L === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? nc([x], F, c) : h === null ? x : x + "[]",
            w(L)
          );
        }), !1;
    }
    return ir(O) ? !0 : (i.append(nc(y, x, c), w(O)), !1);
  }
  const v = [], _ = Object.assign(sb, {
    defaultVisitor: g,
    convertValue: w,
    isVisitable: ir
  });
  function S(O, x) {
    if (!C.isUndefined(O)) {
      if (v.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      v.push(O), C.forEach(O, function(y, j) {
        (!(C.isUndefined(y) || y === null) && l.call(
          i,
          y,
          C.isString(j) ? j.trim() : j,
          x,
          _
        )) === !0 && S(y, x ? x.concat(j) : [j]);
      }), v.pop();
    }
  }
  if (!C.isObject(n))
    throw new TypeError("data must be an object");
  return S(n), i;
}
function ic(n) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(r) {
    return i[r];
  });
}
function Or(n, i) {
  this._pairs = [], n && Cs(n, this, i);
}
const iu = Or.prototype;
iu.append = function(n, i) {
  this._pairs.push([n, i]);
};
iu.toString = function(n) {
  const i = n ? function(r) {
    return n.call(this, r, ic);
  } : ic;
  return this._pairs.map(function(r) {
    return i(r[0]) + "=" + i(r[1]);
  }, "").join("&");
};
function ob(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function su(n, i, r) {
  if (!i)
    return n;
  const o = r && r.encode || ob, l = r && r.serialize;
  let c;
  if (l ? c = l(i, r) : c = C.isURLSearchParams(i) ? i.toString() : new Or(i, r).toString(o), c) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)), n += (n.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return n;
}
let sc = class {
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
  use(i, r, o) {
    return this.handlers.push({
      fulfilled: i,
      rejected: r,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
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
  forEach(i) {
    C.forEach(this.handlers, function(r) {
      r !== null && i(r);
    });
  }
};
const ou = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rb = typeof URLSearchParams < "u" ? URLSearchParams : Or, ab = typeof FormData < "u" ? FormData : null, lb = typeof Blob < "u" ? Blob : null, cb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rb,
    FormData: ab,
    Blob: lb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Tr = typeof window < "u" && typeof document < "u", sr = typeof navigator == "object" && navigator || void 0, ub = Tr && (!sr || ["ReactNative", "NativeScript", "NS"].indexOf(sr.product) < 0), hb = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", db = Tr && window.location.href || "http://localhost", fb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Tr,
  hasStandardBrowserEnv: ub,
  hasStandardBrowserWebWorkerEnv: hb,
  navigator: sr,
  origin: db
}, Symbol.toStringTag, { value: "Module" })), Yt = {
  ...fb,
  ...cb
};
function pb(n, i) {
  return Cs(n, new Yt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, l, c) {
      return Yt.isNode && C.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function mb(n) {
  return C.matchAll(/\w+|\[(\w*)]/g, n).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function gb(n) {
  const i = {}, r = Object.keys(n);
  let o;
  const l = r.length;
  let c;
  for (o = 0; o < l; o++)
    c = r[o], i[c] = n[c];
  return i;
}
function ru(n) {
  function i(r, o, l, c) {
    let h = r[c++];
    if (h === "__proto__") return !0;
    const m = Number.isFinite(+h), w = c >= r.length;
    return h = !h && C.isArray(l) ? l.length : h, w ? (C.hasOwnProp(l, h) ? l[h] = [l[h], o] : l[h] = o, !m) : ((!l[h] || !C.isObject(l[h])) && (l[h] = []), i(r, o, l[h], c) && C.isArray(l[h]) && (l[h] = gb(l[h])), !m);
  }
  if (C.isFormData(n) && C.isFunction(n.entries)) {
    const r = {};
    return C.forEachEntry(n, (o, l) => {
      i(mb(o), l, r, 0);
    }), r;
  }
  return null;
}
function bb(n, i, r) {
  if (C.isString(n))
    try {
      return (i || JSON.parse)(n), C.trim(n);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (0, JSON.stringify)(n);
}
const $i = {
  transitional: ou,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, i) {
    const r = i.getContentType() || "", o = r.indexOf("application/json") > -1, l = C.isObject(n);
    if (l && C.isHTMLForm(n) && (n = new FormData(n)), C.isFormData(n))
      return o ? JSON.stringify(ru(n)) : n;
    if (C.isArrayBuffer(n) || C.isBuffer(n) || C.isStream(n) || C.isFile(n) || C.isBlob(n) || C.isReadableStream(n))
      return n;
    if (C.isArrayBufferView(n))
      return n.buffer;
    if (C.isURLSearchParams(n))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let c;
    if (l) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return pb(n, this.formSerializer).toString();
      if ((c = C.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return Cs(
          c ? { "files[]": n } : n,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return l || o ? (i.setContentType("application/json", !1), bb(n)) : n;
  }],
  transformResponse: [function(n) {
    const i = this.transitional || $i.transitional, r = i && i.forcedJSONParsing, o = this.responseType === "json";
    if (C.isResponse(n) || C.isReadableStream(n))
      return n;
    if (n && C.isString(n) && (r && !this.responseType || o)) {
      const l = !(i && i.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (c) {
        if (l)
          throw c.name === "SyntaxError" ? G.from(c, G.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return n;
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
    FormData: Yt.classes.FormData,
    Blob: Yt.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  $i.headers[n] = {};
});
const vb = C.toObjectSet([
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
]), wb = (n) => {
  const i = {};
  let r, o, l;
  return n && n.split(`
`).forEach(function(c) {
    l = c.indexOf(":"), r = c.substring(0, l).trim().toLowerCase(), o = c.substring(l + 1).trim(), !(!r || i[r] && vb[r]) && (r === "set-cookie" ? i[r] ? i[r].push(o) : i[r] = [o] : i[r] = i[r] ? i[r] + ", " + o : o);
  }), i;
}, oc = Symbol("internals");
function di(n) {
  return n && String(n).trim().toLowerCase();
}
function fs(n) {
  return n === !1 || n == null ? n : C.isArray(n) ? n.map(fs) : String(n);
}
function yb(n) {
  const i = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(n); )
    i[o[1]] = o[2];
  return i;
}
const $b = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Ho(n, i, r, o, l) {
  if (C.isFunction(o))
    return o.call(this, i, r);
  if (l && (i = r), !!C.isString(i)) {
    if (C.isString(o))
      return i.indexOf(o) !== -1;
    if (C.isRegExp(o))
      return o.test(i);
  }
}
function kb(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, r, o) => r.toUpperCase() + o);
}
function xb(n, i) {
  const r = C.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(n, o + r, {
      value: function(l, c, h) {
        return this[o].call(this, i, l, c, h);
      },
      configurable: !0
    });
  });
}
let Qt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, r, o) {
    const l = this;
    function c(m, w, g) {
      const v = di(w);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const _ = C.findKey(l, v);
      (!_ || l[_] === void 0 || g === !0 || g === void 0 && l[_] !== !1) && (l[_ || w] = fs(m));
    }
    const h = (m, w) => C.forEach(m, (g, v) => c(g, v, w));
    if (C.isPlainObject(i) || i instanceof this.constructor)
      h(i, r);
    else if (C.isString(i) && (i = i.trim()) && !$b(i))
      h(wb(i), r);
    else if (C.isHeaders(i))
      for (const [m, w] of i.entries())
        c(w, m, o);
    else
      i != null && c(r, i, o);
    return this;
  }
  get(i, r) {
    if (i = di(i), i) {
      const o = C.findKey(this, i);
      if (o) {
        const l = this[o];
        if (!r)
          return l;
        if (r === !0)
          return yb(l);
        if (C.isFunction(r))
          return r.call(this, l, o);
        if (C.isRegExp(r))
          return r.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, r) {
    if (i = di(i), i) {
      const o = C.findKey(this, i);
      return !!(o && this[o] !== void 0 && (!r || Ho(this, this[o], o, r)));
    }
    return !1;
  }
  delete(i, r) {
    const o = this;
    let l = !1;
    function c(h) {
      if (h = di(h), h) {
        const m = C.findKey(o, h);
        m && (!r || Ho(o, o[m], m, r)) && (delete o[m], l = !0);
      }
    }
    return C.isArray(i) ? i.forEach(c) : c(i), l;
  }
  clear(i) {
    const r = Object.keys(this);
    let o = r.length, l = !1;
    for (; o--; ) {
      const c = r[o];
      (!i || Ho(this, this[c], c, i, !0)) && (delete this[c], l = !0);
    }
    return l;
  }
  normalize(i) {
    const r = this, o = {};
    return C.forEach(this, (l, c) => {
      const h = C.findKey(o, c);
      if (h) {
        r[h] = fs(l), delete r[c];
        return;
      }
      const m = i ? kb(c) : String(c).trim();
      m !== c && delete r[c], r[m] = fs(l), o[m] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const r = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (o, l) => {
      o != null && o !== !1 && (r[l] = i && C.isArray(o) ? o.join(", ") : o);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, r]) => i + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...r) {
    const o = new this(i);
    return r.forEach((l) => o.set(l)), o;
  }
  static accessor(i) {
    const r = (this[oc] = this[oc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function l(c) {
      const h = di(c);
      r[h] || (xb(o, c), r[h] = !0);
    }
    return C.isArray(i) ? i.forEach(l) : l(i), this;
  }
};
Qt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(Qt.prototype, ({ value: n }, i) => {
  let r = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(o) {
      this[r] = o;
    }
  };
});
C.freezeMethods(Qt);
function Wo(n, i) {
  const r = this || $i, o = i || r, l = Qt.from(o.headers);
  let c = o.data;
  return C.forEach(n, function(h) {
    c = h.call(r, c, l.normalize(), i ? i.status : void 0);
  }), l.normalize(), c;
}
function au(n) {
  return !!(n && n.__CANCEL__);
}
function Nn(n, i, r) {
  G.call(this, n ?? "canceled", G.ERR_CANCELED, i, r), this.name = "CanceledError";
}
C.inherits(Nn, G, {
  __CANCEL__: !0
});
function lu(n, i, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? n(r) : i(new G(
    "Request failed with status code " + r.status,
    [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Sb(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return i && i[1] || "";
}
function Eb(n, i) {
  n = n || 10;
  const r = new Array(n), o = new Array(n);
  let l = 0, c = 0, h;
  return i = i !== void 0 ? i : 1e3, function(m) {
    const w = Date.now(), g = o[c];
    h || (h = w), r[l] = m, o[l] = w;
    let v = c, _ = 0;
    for (; v !== l; )
      _ += r[v++], v = v % n;
    if (l = (l + 1) % n, l === c && (c = (c + 1) % n), w - h < i)
      return;
    const S = g && w - g;
    return S ? Math.round(_ * 1e3 / S) : void 0;
  };
}
function _b(n, i) {
  let r = 0, o = 1e3 / i, l, c;
  const h = (m, w = Date.now()) => {
    r = w, l = null, c && (clearTimeout(c), c = null), n.apply(null, m);
  };
  return [(...m) => {
    const w = Date.now(), g = w - r;
    g >= o ? h(m, w) : (l = m, c || (c = setTimeout(() => {
      c = null, h(l);
    }, o - g)));
  }, () => l && h(l)];
}
const ws = (n, i, r = 3) => {
  let o = 0;
  const l = Eb(50, 250);
  return _b((c) => {
    const h = c.loaded, m = c.lengthComputable ? c.total : void 0, w = h - o, g = l(w), v = h <= m;
    o = h;
    const _ = {
      loaded: h,
      total: m,
      progress: m ? h / m : void 0,
      bytes: w,
      rate: g || void 0,
      estimated: g && m && v ? (m - h) / g : void 0,
      event: c,
      lengthComputable: m != null,
      [i ? "download" : "upload"]: !0
    };
    n(_);
  }, r);
}, rc = (n, i) => {
  const r = n != null;
  return [(o) => i[0]({
    lengthComputable: r,
    total: n,
    loaded: o
  }), i[1]];
}, ac = (n) => (...i) => C.asap(() => n(...i)), Ob = Yt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = Yt.navigator && /(msie|trident)/i.test(Yt.navigator.userAgent), i = document.createElement("a");
    let r;
    function o(l) {
      let c = l;
      return n && (i.setAttribute("href", c), c = i.href), i.setAttribute("href", c), {
        href: i.href,
        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
        host: i.host,
        search: i.search ? i.search.replace(/^\?/, "") : "",
        hash: i.hash ? i.hash.replace(/^#/, "") : "",
        hostname: i.hostname,
        port: i.port,
        pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
      };
    }
    return r = o(window.location.href), function(l) {
      const c = C.isString(l) ? o(l) : l;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Tb = Yt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, i, r, o, l, c) {
      const h = [n + "=" + encodeURIComponent(i)];
      C.isNumber(r) && h.push("expires=" + new Date(r).toGMTString()), C.isString(o) && h.push("path=" + o), C.isString(l) && h.push("domain=" + l), c === !0 && h.push("secure"), document.cookie = h.join("; ");
    },
    read(n) {
      const i = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return i ? decodeURIComponent(i[3]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5);
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
function Cb(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function Ab(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function cu(n, i) {
  return n && !Cb(i) ? Ab(n, i) : i;
}
const lc = (n) => n instanceof Qt ? { ...n } : n;
function hn(n, i) {
  i = i || {};
  const r = {};
  function o(g, v, _) {
    return C.isPlainObject(g) && C.isPlainObject(v) ? C.merge.call({ caseless: _ }, g, v) : C.isPlainObject(v) ? C.merge({}, v) : C.isArray(v) ? v.slice() : v;
  }
  function l(g, v, _) {
    if (C.isUndefined(v)) {
      if (!C.isUndefined(g))
        return o(void 0, g, _);
    } else return o(g, v, _);
  }
  function c(g, v) {
    if (!C.isUndefined(v))
      return o(void 0, v);
  }
  function h(g, v) {
    if (C.isUndefined(v)) {
      if (!C.isUndefined(g))
        return o(void 0, g);
    } else return o(void 0, v);
  }
  function m(g, v, _) {
    if (_ in i)
      return o(g, v);
    if (_ in n)
      return o(void 0, g);
  }
  const w = {
    url: c,
    method: c,
    data: c,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: m,
    headers: (g, v) => l(lc(g), lc(v), !0)
  };
  return C.forEach(Object.keys(Object.assign({}, n, i)), function(g) {
    const v = w[g] || l, _ = v(n[g], i[g], g);
    C.isUndefined(_) && v !== m || (r[g] = _);
  }), r;
}
const uu = (n) => {
  const i = hn({}, n);
  let { data: r, withXSRFToken: o, xsrfHeaderName: l, xsrfCookieName: c, headers: h, auth: m } = i;
  i.headers = h = Qt.from(h), i.url = su(cu(i.baseURL, i.url), n.params, n.paramsSerializer), m && h.set(
    "Authorization",
    "Basic " + btoa((m.username || "") + ":" + (m.password ? unescape(encodeURIComponent(m.password)) : ""))
  );
  let w;
  if (C.isFormData(r)) {
    if (Yt.hasStandardBrowserEnv || Yt.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if ((w = h.getContentType()) !== !1) {
      const [g, ...v] = w ? w.split(";").map((_) => _.trim()).filter(Boolean) : [];
      h.setContentType([g || "multipart/form-data", ...v].join("; "));
    }
  }
  if (Yt.hasStandardBrowserEnv && (o && C.isFunction(o) && (o = o(i)), o || o !== !1 && Ob(i.url))) {
    const g = l && c && Tb.read(c);
    g && h.set(l, g);
  }
  return i;
}, Rb = typeof XMLHttpRequest < "u", Pb = Rb && function(n) {
  return new Promise(function(i, r) {
    const o = uu(n);
    let l = o.data;
    const c = Qt.from(o.headers).normalize();
    let { responseType: h, onUploadProgress: m, onDownloadProgress: w } = o, g, v, _, S, O;
    function x() {
      S && S(), O && O(), o.cancelToken && o.cancelToken.unsubscribe(g), o.signal && o.signal.removeEventListener("abort", g);
    }
    let y = new XMLHttpRequest();
    y.open(o.method.toUpperCase(), o.url, !0), y.timeout = o.timeout;
    function j() {
      if (!y)
        return;
      const F = Qt.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), H = {
        data: !h || h === "text" || h === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: F,
        config: n,
        request: y
      };
      lu(function(yt) {
        i(yt), x();
      }, function(yt) {
        r(yt), x();
      }, H), y = null;
    }
    "onloadend" in y ? y.onloadend = j : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(j);
    }, y.onabort = function() {
      y && (r(new G("Request aborted", G.ECONNABORTED, n, y)), y = null);
    }, y.onerror = function() {
      r(new G("Network Error", G.ERR_NETWORK, n, y)), y = null;
    }, y.ontimeout = function() {
      let F = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const H = o.transitional || ou;
      o.timeoutErrorMessage && (F = o.timeoutErrorMessage), r(new G(
        F,
        H.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
        n,
        y
      )), y = null;
    }, l === void 0 && c.setContentType(null), "setRequestHeader" in y && C.forEach(c.toJSON(), function(F, H) {
      y.setRequestHeader(H, F);
    }), C.isUndefined(o.withCredentials) || (y.withCredentials = !!o.withCredentials), h && h !== "json" && (y.responseType = o.responseType), w && ([_, O] = ws(w, !0), y.addEventListener("progress", _)), m && y.upload && ([v, S] = ws(m), y.upload.addEventListener("progress", v), y.upload.addEventListener("loadend", S)), (o.cancelToken || o.signal) && (g = (F) => {
      y && (r(!F || F.type ? new Nn(null, n, y) : F), y.abort(), y = null);
    }, o.cancelToken && o.cancelToken.subscribe(g), o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
    const L = Sb(o.url);
    if (L && Yt.protocols.indexOf(L) === -1) {
      r(new G("Unsupported protocol " + L + ":", G.ERR_BAD_REQUEST, n));
      return;
    }
    y.send(l || null);
  });
}, Nb = (n, i) => {
  const { length: r } = n = n ? n.filter(Boolean) : [];
  if (i || r) {
    let o = new AbortController(), l;
    const c = function(g) {
      if (!l) {
        l = !0, m();
        const v = g instanceof Error ? g : this.reason;
        o.abort(v instanceof G ? v : new Nn(v instanceof Error ? v.message : v));
      }
    };
    let h = i && setTimeout(() => {
      h = null, c(new G(`timeout ${i} of ms exceeded`, G.ETIMEDOUT));
    }, i);
    const m = () => {
      n && (h && clearTimeout(h), h = null, n.forEach((g) => {
        g.unsubscribe ? g.unsubscribe(c) : g.removeEventListener("abort", c);
      }), n = null);
    };
    n.forEach((g) => g.addEventListener("abort", c));
    const { signal: w } = o;
    return w.unsubscribe = () => C.asap(m), w;
  }
}, Bb = function* (n, i) {
  let r = n.byteLength;
  if (r < i) {
    yield n;
    return;
  }
  let o = 0, l;
  for (; o < r; )
    l = o + i, yield n.slice(o, l), o = l;
}, Fb = async function* (n, i) {
  for await (const r of Ib(n))
    yield* Bb(r, i);
}, Ib = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const i = n.getReader();
  try {
    for (; ; ) {
      const { done: r, value: o } = await i.read();
      if (r)
        break;
      yield o;
    }
  } finally {
    await i.cancel();
  }
}, cc = (n, i, r, o) => {
  const l = Fb(n, i);
  let c = 0, h, m = (w) => {
    h || (h = !0, o && o(w));
  };
  return new ReadableStream({
    async pull(w) {
      try {
        const { done: g, value: v } = await l.next();
        if (g) {
          m(), w.close();
          return;
        }
        let _ = v.byteLength;
        if (r) {
          let S = c += _;
          r(S);
        }
        w.enqueue(new Uint8Array(v));
      } catch (g) {
        throw m(g), g;
      }
    },
    cancel(w) {
      return m(w), l.return();
    }
  }, {
    highWaterMark: 2
  });
}, As = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", hu = As && typeof ReadableStream == "function", Db = As && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (i) => n.encode(i))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), du = (n, ...i) => {
  try {
    return !!n(...i);
  } catch {
    return !1;
  }
}, jb = hu && du(() => {
  let n = !1;
  const i = new Request(Yt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !i;
}), uc = 64 * 1024, or = hu && du(() => C.isReadableStream(new Response("").body)), ys = {
  stream: or && ((n) => n.body)
};
As && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !ys[i] && (ys[i] = C.isFunction(n[i]) ? (r) => r[i]() : (r, o) => {
      throw new G(`Response type '${i}' is not supported`, G.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const Lb = async (n) => {
  if (n == null)
    return 0;
  if (C.isBlob(n))
    return n.size;
  if (C.isSpecCompliantForm(n))
    return (await new Request(Yt.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (C.isArrayBufferView(n) || C.isArrayBuffer(n))
    return n.byteLength;
  if (C.isURLSearchParams(n) && (n = n + ""), C.isString(n))
    return (await Db(n)).byteLength;
}, Ub = async (n, i) => C.toFiniteNumber(n.getContentLength()) ?? Lb(i), Mb = As && (async (n) => {
  let {
    url: i,
    method: r,
    data: o,
    signal: l,
    cancelToken: c,
    timeout: h,
    onDownloadProgress: m,
    onUploadProgress: w,
    responseType: g,
    headers: v,
    withCredentials: _ = "same-origin",
    fetchOptions: S
  } = uu(n);
  g = g ? (g + "").toLowerCase() : "text";
  let O = Nb([l, c && c.toAbortSignal()], h), x;
  const y = O && O.unsubscribe && (() => {
    O.unsubscribe();
  });
  let j;
  try {
    if (w && jb && r !== "get" && r !== "head" && (j = await Ub(v, o)) !== 0) {
      let bt = new Request(i, {
        method: "POST",
        body: o,
        duplex: "half"
      }), pt;
      if (C.isFormData(o) && (pt = bt.headers.get("content-type")) && v.setContentType(pt), bt.body) {
        const [Tt, It] = rc(
          j,
          ws(ac(w))
        );
        o = cc(bt.body, uc, Tt, It);
      }
    }
    C.isString(_) || (_ = _ ? "include" : "omit");
    const L = "credentials" in Request.prototype;
    x = new Request(i, {
      ...S,
      signal: O,
      method: r.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: L ? _ : void 0
    });
    let F = await fetch(x);
    const H = or && (g === "stream" || g === "response");
    if (or && (m || H && y)) {
      const bt = {};
      ["status", "statusText", "headers"].forEach((Dt) => {
        bt[Dt] = F[Dt];
      });
      const pt = C.toFiniteNumber(F.headers.get("content-length")), [Tt, It] = m && rc(
        pt,
        ws(ac(m), !0)
      ) || [];
      F = new Response(
        cc(F.body, uc, Tt, () => {
          It && It(), y && y();
        }),
        bt
      );
    }
    g = g || "text";
    let yt = await ys[C.findKey(ys, g) || "text"](F, n);
    return !H && y && y(), await new Promise((bt, pt) => {
      lu(bt, pt, {
        data: yt,
        headers: Qt.from(F.headers),
        status: F.status,
        statusText: F.statusText,
        config: n,
        request: x
      });
    });
  } catch (L) {
    throw y && y(), L && L.name === "TypeError" && /fetch/i.test(L.message) ? Object.assign(
      new G("Network Error", G.ERR_NETWORK, n, x),
      {
        cause: L.cause || L
      }
    ) : G.from(L, L && L.code, n, x);
  }
}), rr = {
  http: nb,
  xhr: Pb,
  fetch: Mb
};
C.forEach(rr, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const hc = (n) => `- ${n}`, zb = (n) => C.isFunction(n) || n === null || n === !1, fu = {
  getAdapter: (n) => {
    n = C.isArray(n) ? n : [n];
    const { length: i } = n;
    let r, o;
    const l = {};
    for (let c = 0; c < i; c++) {
      r = n[c];
      let h;
      if (o = r, !zb(r) && (o = rr[(h = String(r)).toLowerCase()], o === void 0))
        throw new G(`Unknown adapter '${h}'`);
      if (o)
        break;
      l[h || "#" + c] = o;
    }
    if (!o) {
      const c = Object.entries(l).map(
        ([m, w]) => `adapter ${m} ` + (w === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let h = i ? c.length > 1 ? `since :
` + c.map(hc).join(`
`) : " " + hc(c[0]) : "as no adapter specified";
      throw new G(
        "There is no suitable adapter to dispatch the request " + h,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: rr
};
function Vo(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Nn(null, n);
}
function dc(n) {
  return Vo(n), n.headers = Qt.from(n.headers), n.data = Wo.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), fu.getAdapter(n.adapter || $i.adapter)(n).then(function(i) {
    return Vo(n), i.data = Wo.call(
      n,
      n.transformResponse,
      i
    ), i.headers = Qt.from(i.headers), i;
  }, function(i) {
    return au(i) || (Vo(n), i && i.response && (i.response.data = Wo.call(
      n,
      n.transformResponse,
      i.response
    ), i.response.headers = Qt.from(i.response.headers))), Promise.reject(i);
  });
}
const pu = "1.7.7", Cr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, i) => {
  Cr[n] = function(r) {
    return typeof r === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
const fc = {};
Cr.transitional = function(n, i, r) {
  function o(l, c) {
    return "[Axios v" + pu + "] Transitional option '" + l + "'" + c + (r ? ". " + r : "");
  }
  return (l, c, h) => {
    if (n === !1)
      throw new G(
        o(c, " has been removed" + (i ? " in " + i : "")),
        G.ERR_DEPRECATED
      );
    return i && !fc[c] && (fc[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), n ? n(l, c, h) : !0;
  };
};
function qb(n, i, r) {
  if (typeof n != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(n);
  let l = o.length;
  for (; l-- > 0; ) {
    const c = o[l], h = i[c];
    if (h) {
      const m = n[c], w = m === void 0 || h(m, c, n);
      if (w !== !0)
        throw new G("option " + c + " must be " + w, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new G("Unknown option " + c, G.ERR_BAD_OPTION);
  }
}
const ar = {
  assertOptions: qb,
  validators: Cr
}, Ie = ar.validators;
let ln = class {
  constructor(i) {
    this.defaults = i, this.interceptors = {
      request: new sc(),
      response: new sc()
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
  async request(i, r) {
    try {
      return await this._request(i, r);
    } catch (o) {
      if (o instanceof Error) {
        let l;
        Error.captureStackTrace ? Error.captureStackTrace(l = {}) : l = new Error();
        const c = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? c && !String(o.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + c) : o.stack = c;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(i, r) {
    typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = hn(this.defaults, r);
    const { transitional: o, paramsSerializer: l, headers: c } = r;
    o !== void 0 && ar.assertOptions(o, {
      silentJSONParsing: Ie.transitional(Ie.boolean),
      forcedJSONParsing: Ie.transitional(Ie.boolean),
      clarifyTimeoutError: Ie.transitional(Ie.boolean)
    }, !1), l != null && (C.isFunction(l) ? r.paramsSerializer = {
      serialize: l
    } : ar.assertOptions(l, {
      encode: Ie.function,
      serialize: Ie.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let h = c && C.merge(
      c.common,
      c[r.method]
    );
    c && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (x) => {
        delete c[x];
      }
    ), r.headers = Qt.concat(h, c);
    const m = [];
    let w = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(r) === !1 || (w = w && x.synchronous, m.unshift(x.fulfilled, x.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(x) {
      g.push(x.fulfilled, x.rejected);
    });
    let v, _ = 0, S;
    if (!w) {
      const x = [dc.bind(this), void 0];
      for (x.unshift.apply(x, m), x.push.apply(x, g), S = x.length, v = Promise.resolve(r); _ < S; )
        v = v.then(x[_++], x[_++]);
      return v;
    }
    S = m.length;
    let O = r;
    for (_ = 0; _ < S; ) {
      const x = m[_++], y = m[_++];
      try {
        O = x(O);
      } catch (j) {
        y.call(this, j);
        break;
      }
    }
    try {
      v = dc.call(this, O);
    } catch (x) {
      return Promise.reject(x);
    }
    for (_ = 0, S = g.length; _ < S; )
      v = v.then(g[_++], g[_++]);
    return v;
  }
  getUri(i) {
    i = hn(this.defaults, i);
    const r = cu(i.baseURL, i.url);
    return su(r, i.params, i.paramsSerializer);
  }
};
C.forEach(["delete", "get", "head", "options"], function(n) {
  ln.prototype[n] = function(i, r) {
    return this.request(hn(r || {}, {
      method: n,
      url: i,
      data: (r || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(n) {
  function i(r) {
    return function(o, l, c) {
      return this.request(hn(c || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: l
      }));
    };
  }
  ln.prototype[n] = i(), ln.prototype[n + "Form"] = i(!0);
});
let Hb = class mu {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(l) {
      r = l;
    });
    const o = this;
    this.promise.then((l) => {
      if (!o._listeners) return;
      let c = o._listeners.length;
      for (; c-- > 0; )
        o._listeners[c](l);
      o._listeners = null;
    }), this.promise.then = (l) => {
      let c;
      const h = new Promise((m) => {
        o.subscribe(m), c = m;
      }).then(l);
      return h.cancel = function() {
        o.unsubscribe(c);
      }, h;
    }, i(function(l, c, h) {
      o.reason || (o.reason = new Nn(l, c, h), r(o.reason));
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
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(i) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(i);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const i = new AbortController(), r = (o) => {
      i.abort(o);
    };
    return this.subscribe(r), i.signal.unsubscribe = () => this.unsubscribe(r), i.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let i;
    return {
      token: new mu(function(r) {
        i = r;
      }),
      cancel: i
    };
  }
};
function Wb(n) {
  return function(i) {
    return n.apply(null, i);
  };
}
function Vb(n) {
  return C.isObject(n) && n.isAxiosError === !0;
}
const lr = {
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
Object.entries(lr).forEach(([n, i]) => {
  lr[i] = n;
});
function gu(n) {
  const i = new ln(n), r = Vc(ln.prototype.request, i);
  return C.extend(r, ln.prototype, i, { allOwnKeys: !0 }), C.extend(r, i, null, { allOwnKeys: !0 }), r.create = function(o) {
    return gu(hn(n, o));
  }, r;
}
const vt = gu($i);
vt.Axios = ln;
vt.CanceledError = Nn;
vt.CancelToken = Hb;
vt.isCancel = au;
vt.VERSION = pu;
vt.toFormData = Cs;
vt.AxiosError = G;
vt.Cancel = vt.CanceledError;
vt.all = function(n) {
  return Promise.all(n);
};
vt.spread = Wb;
vt.isAxiosError = Vb;
vt.mergeConfig = hn;
vt.AxiosHeaders = Qt;
vt.formToJSON = (n) => ru(C.isHTMLForm(n) ? new FormData(n) : n);
vt.getAdapter = fu.getAdapter;
vt.HttpStatusCode = lr;
vt.default = vt;
var Oe = /* @__PURE__ */ ((n) => (n.Primary = "Primary", n.Success = "Success", n.Warning = "Warning", n.Danger = "Danger", n))(Oe || {});
const Jb = qc("auth", {
  persist: !0,
  state: () => ({
    user: null
  }),
  getters: {
    isAuthenticated: (n) => n.user !== null
  },
  actions: {
    setUser(n) {
      this.user = n;
    },
    unsetUser() {
      this.user = null;
    },
    async login(n) {
      return vt.post("/account/login", n).then((i) => (this.setUser(i.data), this.user)).catch((i) => {
        throw {
          description: "An error as occurred",
          style: Oe.Danger,
          closeBtn: !0,
          ...i.response.data
        };
      });
    },
    async check() {
      return vt.get("/account/auth-check").then((n) => (this.setUser(n.data.user), this.user)).catch((n) => {
        throw this.unsetUser(), {
          description: "An error as occurred",
          style: Oe.Danger,
          closeBtn: !0,
          ...n.response.data
        };
      });
    },
    async logout() {
      return this.unsetUser(), vt.get("/account/logout").catch((n) => {
        throw {
          description: "An error as occurred",
          style: Oe.Danger,
          closeBtn: !0,
          ...n.response.data
        };
      });
    }
  }
}), Kb = { class: "uk-fieldset" }, Gb = { class: "uk-margin" }, Xb = { class: "uk-inline uk-width-1-1" }, Yb = { class: "uk-margin" }, Qb = { class: "uk-inline uk-width-1-1" }, Zb = { class: "uk-text-center" }, tv = ["disabled"], Ar = /* @__PURE__ */ wt({
  __name: "FormLogin",
  setup(n) {
    const i = Xt(!1), r = Xt();
    let o = {
      user_name: "",
      password: ""
    };
    async function l() {
      i.value = !0, r.value = null, await Jb().login(o).then((h) => {
        Wc.notification({
          message: "Welcome back " + (h == null ? void 0 : h.full_name) + "!",
          status: "success",
          pos: "bottom-right",
          timeout: 4e3
        });
      }).catch((h) => {
        r.value = h;
      }).finally(() => {
        i.value = !1;
      });
    }
    return (c, h) => {
      const m = qt("UFAlertContainer");
      return B(), z("form", {
        onSubmit: h[2] || (h[2] = Es((w) => l(), ["prevent"]))
      }, [
        T("fieldset", Kb, [
          r.value ? (B(), Ct(m, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : ft("", !0),
          T("div", Gb, [
            T("div", Xb, [
              h[3] || (h[3] = T("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: user"
              }, null, -1)),
              ae(T("input", {
                class: "uk-input",
                type: "text",
                placeholder: "Username",
                "aria-label": "Username",
                "data-test": "username",
                "onUpdate:modelValue": h[0] || (h[0] = (w) => W(o).user_name = w)
              }, null, 512), [
                [me, W(o).user_name]
              ])
            ])
          ]),
          T("div", Yb, [
            T("div", Qb, [
              h[4] || (h[4] = T("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: lock"
              }, null, -1)),
              ae(T("input", {
                class: "uk-input",
                type: "password",
                placeholder: "Password",
                "aria-label": "Password",
                "data-test": "password",
                "onUpdate:modelValue": h[1] || (h[1] = (w) => W(o).password = w)
              }, null, 512), [
                [me, W(o).password]
              ])
            ])
          ]),
          T("div", Zb, [
            T("button", {
              class: "uk-button uk-button-primary",
              disabled: i.value,
              "data-test": "submit"
            }, " Login ", 8, tv)
          ])
        ])
      ], 32);
    };
  }
});
function bu(n, i) {
  return function() {
    return n.apply(i, arguments);
  };
}
const { toString: ev } = Object.prototype, { getPrototypeOf: Rr } = Object, Rs = /* @__PURE__ */ ((n) => (i) => {
  const r = ev.call(i);
  return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ve = (n) => (n = n.toLowerCase(), (i) => Rs(i) === n), Ps = (n) => (i) => typeof i === n, { isArray: Bn } = Array, bi = Ps("undefined");
function nv(n) {
  return n !== null && !bi(n) && n.constructor !== null && !bi(n.constructor) && ce(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const vu = ve("ArrayBuffer");
function iv(n) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && vu(n.buffer), i;
}
const sv = Ps("string"), ce = Ps("function"), wu = Ps("number"), Ns = (n) => n !== null && typeof n == "object", ov = (n) => n === !0 || n === !1, ps = (n) => {
  if (Rs(n) !== "object")
    return !1;
  const i = Rr(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}, rv = ve("Date"), av = ve("File"), lv = ve("Blob"), cv = ve("FileList"), uv = (n) => Ns(n) && ce(n.pipe), hv = (n) => {
  let i;
  return n && (typeof FormData == "function" && n instanceof FormData || ce(n.append) && ((i = Rs(n)) === "formdata" || // detect form-data instance
  i === "object" && ce(n.toString) && n.toString() === "[object FormData]"));
}, dv = ve("URLSearchParams"), [fv, pv, mv, gv] = ["ReadableStream", "Request", "Response", "Headers"].map(ve), bv = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ki(n, i, { allOwnKeys: r = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let o, l;
  if (typeof n != "object" && (n = [n]), Bn(n))
    for (o = 0, l = n.length; o < l; o++)
      i.call(null, n[o], o, n);
  else {
    const c = r ? Object.getOwnPropertyNames(n) : Object.keys(n), h = c.length;
    let m;
    for (o = 0; o < h; o++)
      m = c[o], i.call(null, n[m], m, n);
  }
}
function yu(n, i) {
  i = i.toLowerCase();
  const r = Object.keys(n);
  let o = r.length, l;
  for (; o-- > 0; )
    if (l = r[o], i === l.toLowerCase())
      return l;
  return null;
}
const rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, $u = (n) => !bi(n) && n !== rn;
function cr() {
  const { caseless: n } = $u(this) && this || {}, i = {}, r = (o, l) => {
    const c = n && yu(i, l) || l;
    ps(i[c]) && ps(o) ? i[c] = cr(i[c], o) : ps(o) ? i[c] = cr({}, o) : Bn(o) ? i[c] = o.slice() : i[c] = o;
  };
  for (let o = 0, l = arguments.length; o < l; o++)
    arguments[o] && ki(arguments[o], r);
  return i;
}
const vv = (n, i, r, { allOwnKeys: o } = {}) => (ki(i, (l, c) => {
  r && ce(l) ? n[c] = bu(l, r) : n[c] = l;
}, { allOwnKeys: o }), n), wv = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), yv = (n, i, r, o) => {
  n.prototype = Object.create(i.prototype, o), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: i.prototype
  }), r && Object.assign(n.prototype, r);
}, $v = (n, i, r, o) => {
  let l, c, h;
  const m = {};
  if (i = i || {}, n == null) return i;
  do {
    for (l = Object.getOwnPropertyNames(n), c = l.length; c-- > 0; )
      h = l[c], (!o || o(h, n, i)) && !m[h] && (i[h] = n[h], m[h] = !0);
    n = r !== !1 && Rr(n);
  } while (n && (!r || r(n, i)) && n !== Object.prototype);
  return i;
}, kv = (n, i, r) => {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= i.length;
  const o = n.indexOf(i, r);
  return o !== -1 && o === r;
}, xv = (n) => {
  if (!n) return null;
  if (Bn(n)) return n;
  let i = n.length;
  if (!wu(i)) return null;
  const r = new Array(i);
  for (; i-- > 0; )
    r[i] = n[i];
  return r;
}, Sv = /* @__PURE__ */ ((n) => (i) => n && i instanceof n)(typeof Uint8Array < "u" && Rr(Uint8Array)), Ev = (n, i) => {
  const r = (n && n[Symbol.iterator]).call(n);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const l = o.value;
    i.call(n, l[0], l[1]);
  }
}, _v = (n, i) => {
  let r;
  const o = [];
  for (; (r = n.exec(i)) !== null; )
    o.push(r);
  return o;
}, Ov = ve("HTMLFormElement"), Tv = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, r, o) {
    return r.toUpperCase() + o;
  }
), pc = (({ hasOwnProperty: n }) => (i, r) => n.call(i, r))(Object.prototype), Cv = ve("RegExp"), ku = (n, i) => {
  const r = Object.getOwnPropertyDescriptors(n), o = {};
  ki(r, (l, c) => {
    let h;
    (h = i(l, c, n)) !== !1 && (o[c] = h || l);
  }), Object.defineProperties(n, o);
}, Av = (n) => {
  ku(n, (i, r) => {
    if (ce(n) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = n[r];
    if (ce(o)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Rv = (n, i) => {
  const r = {}, o = (l) => {
    l.forEach((c) => {
      r[c] = !0;
    });
  };
  return Bn(n) ? o(n) : o(String(n).split(i)), r;
}, Pv = () => {
}, Nv = (n, i) => n != null && Number.isFinite(n = +n) ? n : i, Jo = "abcdefghijklmnopqrstuvwxyz", mc = "0123456789", xu = {
  DIGIT: mc,
  ALPHA: Jo,
  ALPHA_DIGIT: Jo + Jo.toUpperCase() + mc
}, Bv = (n = 16, i = xu.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = i;
  for (; n--; )
    r += i[Math.random() * o | 0];
  return r;
};
function Fv(n) {
  return !!(n && ce(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator]);
}
const Iv = (n) => {
  const i = new Array(10), r = (o, l) => {
    if (Ns(o)) {
      if (i.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        i[l] = o;
        const c = Bn(o) ? [] : {};
        return ki(o, (h, m) => {
          const w = r(h, l + 1);
          !bi(w) && (c[m] = w);
        }), i[l] = void 0, c;
      }
    }
    return o;
  };
  return r(n, 0);
}, Dv = ve("AsyncFunction"), jv = (n) => n && (Ns(n) || ce(n)) && ce(n.then) && ce(n.catch), Su = ((n, i) => n ? setImmediate : i ? ((r, o) => (rn.addEventListener("message", ({ source: l, data: c }) => {
  l === rn && c === r && o.length && o.shift()();
}, !1), (l) => {
  o.push(l), rn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ce(rn.postMessage)
), Lv = typeof queueMicrotask < "u" ? queueMicrotask.bind(rn) : typeof process < "u" && process.nextTick || Su, R = {
  isArray: Bn,
  isArrayBuffer: vu,
  isBuffer: nv,
  isFormData: hv,
  isArrayBufferView: iv,
  isString: sv,
  isNumber: wu,
  isBoolean: ov,
  isObject: Ns,
  isPlainObject: ps,
  isReadableStream: fv,
  isRequest: pv,
  isResponse: mv,
  isHeaders: gv,
  isUndefined: bi,
  isDate: rv,
  isFile: av,
  isBlob: lv,
  isRegExp: Cv,
  isFunction: ce,
  isStream: uv,
  isURLSearchParams: dv,
  isTypedArray: Sv,
  isFileList: cv,
  forEach: ki,
  merge: cr,
  extend: vv,
  trim: bv,
  stripBOM: wv,
  inherits: yv,
  toFlatObject: $v,
  kindOf: Rs,
  kindOfTest: ve,
  endsWith: kv,
  toArray: xv,
  forEachEntry: Ev,
  matchAll: _v,
  isHTMLForm: Ov,
  hasOwnProperty: pc,
  hasOwnProp: pc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ku,
  freezeMethods: Av,
  toObjectSet: Rv,
  toCamelCase: Tv,
  noop: Pv,
  toFiniteNumber: Nv,
  findKey: yu,
  global: rn,
  isContextDefined: $u,
  ALPHABET: xu,
  generateString: Bv,
  isSpecCompliantForm: Fv,
  toJSONObject: Iv,
  isAsyncFn: Dv,
  isThenable: jv,
  setImmediate: Su,
  asap: Lv
};
function X(n, i, r, o, l) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), o && (this.request = o), l && (this.response = l);
}
R.inherits(X, Error, {
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
      config: R.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Eu = X.prototype, _u = {};
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
].forEach((n) => {
  _u[n] = { value: n };
});
Object.defineProperties(X, _u);
Object.defineProperty(Eu, "isAxiosError", { value: !0 });
X.from = (n, i, r, o, l, c) => {
  const h = Object.create(Eu);
  return R.toFlatObject(n, h, function(m) {
    return m !== Error.prototype;
  }, (m) => m !== "isAxiosError"), X.call(h, n.message, i, r, o, l), h.cause = n, h.name = n.name, c && Object.assign(h, c), h;
};
const Uv = null;
function ur(n) {
  return R.isPlainObject(n) || R.isArray(n);
}
function Ou(n) {
  return R.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function gc(n, i, r) {
  return n ? n.concat(i).map(function(o, l) {
    return o = Ou(o), !r && l ? "[" + o + "]" : o;
  }).join(r ? "." : "") : i;
}
function Mv(n) {
  return R.isArray(n) && !n.some(ur);
}
const zv = R.toFlatObject(R, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Bs(n, i, r) {
  if (!R.isObject(n))
    throw new TypeError("target must be an object");
  i = i || new FormData(), r = R.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(O, x) {
    return !R.isUndefined(x[O]);
  });
  const o = r.metaTokens, l = r.visitor || g, c = r.dots, h = r.indexes, m = (r.Blob || typeof Blob < "u" && Blob) && R.isSpecCompliantForm(i);
  if (!R.isFunction(l))
    throw new TypeError("visitor must be a function");
  function w(O) {
    if (O === null) return "";
    if (R.isDate(O))
      return O.toISOString();
    if (!m && R.isBlob(O))
      throw new X("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(O) || R.isTypedArray(O) ? m && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O;
  }
  function g(O, x, y) {
    let j = O;
    if (O && !y && typeof O == "object") {
      if (R.endsWith(x, "{}"))
        x = o ? x : x.slice(0, -2), O = JSON.stringify(O);
      else if (R.isArray(O) && Mv(O) || (R.isFileList(O) || R.endsWith(x, "[]")) && (j = R.toArray(O)))
        return x = Ou(x), j.forEach(function(L, F) {
          !(R.isUndefined(L) || L === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? gc([x], F, c) : h === null ? x : x + "[]",
            w(L)
          );
        }), !1;
    }
    return ur(O) ? !0 : (i.append(gc(y, x, c), w(O)), !1);
  }
  const v = [], _ = Object.assign(zv, {
    defaultVisitor: g,
    convertValue: w,
    isVisitable: ur
  });
  function S(O, x) {
    if (!R.isUndefined(O)) {
      if (v.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      v.push(O), R.forEach(O, function(y, j) {
        (!(R.isUndefined(y) || y === null) && l.call(
          i,
          y,
          R.isString(j) ? j.trim() : j,
          x,
          _
        )) === !0 && S(y, x ? x.concat(j) : [j]);
      }), v.pop();
    }
  }
  if (!R.isObject(n))
    throw new TypeError("data must be an object");
  return S(n), i;
}
function bc(n) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(r) {
    return i[r];
  });
}
function Pr(n, i) {
  this._pairs = [], n && Bs(n, this, i);
}
const Tu = Pr.prototype;
Tu.append = function(n, i) {
  this._pairs.push([n, i]);
};
Tu.toString = function(n) {
  const i = n ? function(r) {
    return n.call(this, r, bc);
  } : bc;
  return this._pairs.map(function(r) {
    return i(r[0]) + "=" + i(r[1]);
  }, "").join("&");
};
function qv(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cu(n, i, r) {
  if (!i)
    return n;
  const o = r && r.encode || qv, l = r && r.serialize;
  let c;
  if (l ? c = l(i, r) : c = R.isURLSearchParams(i) ? i.toString() : new Pr(i, r).toString(o), c) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)), n += (n.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return n;
}
let vc = class {
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
  use(i, r, o) {
    return this.handlers.push({
      fulfilled: i,
      rejected: r,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
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
  forEach(i) {
    R.forEach(this.handlers, function(r) {
      r !== null && i(r);
    });
  }
};
const Au = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Hv = typeof URLSearchParams < "u" ? URLSearchParams : Pr, Wv = typeof FormData < "u" ? FormData : null, Vv = typeof Blob < "u" ? Blob : null, Jv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Hv,
    FormData: Wv,
    Blob: Vv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Nr = typeof window < "u" && typeof document < "u", Kv = ((n) => Nr && ["ReactNative", "NativeScript", "NS"].indexOf(n) < 0)(typeof navigator < "u" && navigator.product), Gv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Xv = Nr && window.location.href || "http://localhost", Yv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Nr,
  hasStandardBrowserEnv: Kv,
  hasStandardBrowserWebWorkerEnv: Gv,
  origin: Xv
}, Symbol.toStringTag, { value: "Module" })), ge = {
  ...Yv,
  ...Jv
};
function Qv(n, i) {
  return Bs(n, new ge.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, l, c) {
      return ge.isNode && R.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function Zv(n) {
  return R.matchAll(/\w+|\[(\w*)]/g, n).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function tw(n) {
  const i = {}, r = Object.keys(n);
  let o;
  const l = r.length;
  let c;
  for (o = 0; o < l; o++)
    c = r[o], i[c] = n[c];
  return i;
}
function Ru(n) {
  function i(r, o, l, c) {
    let h = r[c++];
    if (h === "__proto__") return !0;
    const m = Number.isFinite(+h), w = c >= r.length;
    return h = !h && R.isArray(l) ? l.length : h, w ? (R.hasOwnProp(l, h) ? l[h] = [l[h], o] : l[h] = o, !m) : ((!l[h] || !R.isObject(l[h])) && (l[h] = []), i(r, o, l[h], c) && R.isArray(l[h]) && (l[h] = tw(l[h])), !m);
  }
  if (R.isFormData(n) && R.isFunction(n.entries)) {
    const r = {};
    return R.forEachEntry(n, (o, l) => {
      i(Zv(o), l, r, 0);
    }), r;
  }
  return null;
}
function ew(n, i, r) {
  if (R.isString(n))
    try {
      return (i || JSON.parse)(n), R.trim(n);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (0, JSON.stringify)(n);
}
const xi = {
  transitional: Au,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, i) {
    const r = i.getContentType() || "", o = r.indexOf("application/json") > -1, l = R.isObject(n);
    if (l && R.isHTMLForm(n) && (n = new FormData(n)), R.isFormData(n))
      return o ? JSON.stringify(Ru(n)) : n;
    if (R.isArrayBuffer(n) || R.isBuffer(n) || R.isStream(n) || R.isFile(n) || R.isBlob(n) || R.isReadableStream(n))
      return n;
    if (R.isArrayBufferView(n))
      return n.buffer;
    if (R.isURLSearchParams(n))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let c;
    if (l) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Qv(n, this.formSerializer).toString();
      if ((c = R.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return Bs(
          c ? { "files[]": n } : n,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return l || o ? (i.setContentType("application/json", !1), ew(n)) : n;
  }],
  transformResponse: [function(n) {
    const i = this.transitional || xi.transitional, r = i && i.forcedJSONParsing, o = this.responseType === "json";
    if (R.isResponse(n) || R.isReadableStream(n))
      return n;
    if (n && R.isString(n) && (r && !this.responseType || o)) {
      const l = !(i && i.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (c) {
        if (l)
          throw c.name === "SyntaxError" ? X.from(c, X.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return n;
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
    FormData: ge.classes.FormData,
    Blob: ge.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
R.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  xi.headers[n] = {};
});
const nw = R.toObjectSet([
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
]), iw = (n) => {
  const i = {};
  let r, o, l;
  return n && n.split(`
`).forEach(function(c) {
    l = c.indexOf(":"), r = c.substring(0, l).trim().toLowerCase(), o = c.substring(l + 1).trim(), !(!r || i[r] && nw[r]) && (r === "set-cookie" ? i[r] ? i[r].push(o) : i[r] = [o] : i[r] = i[r] ? i[r] + ", " + o : o);
  }), i;
}, wc = Symbol("internals");
function fi(n) {
  return n && String(n).trim().toLowerCase();
}
function ms(n) {
  return n === !1 || n == null ? n : R.isArray(n) ? n.map(ms) : String(n);
}
function sw(n) {
  const i = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(n); )
    i[o[1]] = o[2];
  return i;
}
const ow = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Ko(n, i, r, o, l) {
  if (R.isFunction(o))
    return o.call(this, i, r);
  if (l && (i = r), !!R.isString(i)) {
    if (R.isString(o))
      return i.indexOf(o) !== -1;
    if (R.isRegExp(o))
      return o.test(i);
  }
}
function rw(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, r, o) => r.toUpperCase() + o);
}
function aw(n, i) {
  const r = R.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(n, o + r, {
      value: function(l, c, h) {
        return this[o].call(this, i, l, c, h);
      },
      configurable: !0
    });
  });
}
let Zt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, r, o) {
    const l = this;
    function c(m, w, g) {
      const v = fi(w);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const _ = R.findKey(l, v);
      (!_ || l[_] === void 0 || g === !0 || g === void 0 && l[_] !== !1) && (l[_ || w] = ms(m));
    }
    const h = (m, w) => R.forEach(m, (g, v) => c(g, v, w));
    if (R.isPlainObject(i) || i instanceof this.constructor)
      h(i, r);
    else if (R.isString(i) && (i = i.trim()) && !ow(i))
      h(iw(i), r);
    else if (R.isHeaders(i))
      for (const [m, w] of i.entries())
        c(w, m, o);
    else
      i != null && c(r, i, o);
    return this;
  }
  get(i, r) {
    if (i = fi(i), i) {
      const o = R.findKey(this, i);
      if (o) {
        const l = this[o];
        if (!r)
          return l;
        if (r === !0)
          return sw(l);
        if (R.isFunction(r))
          return r.call(this, l, o);
        if (R.isRegExp(r))
          return r.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, r) {
    if (i = fi(i), i) {
      const o = R.findKey(this, i);
      return !!(o && this[o] !== void 0 && (!r || Ko(this, this[o], o, r)));
    }
    return !1;
  }
  delete(i, r) {
    const o = this;
    let l = !1;
    function c(h) {
      if (h = fi(h), h) {
        const m = R.findKey(o, h);
        m && (!r || Ko(o, o[m], m, r)) && (delete o[m], l = !0);
      }
    }
    return R.isArray(i) ? i.forEach(c) : c(i), l;
  }
  clear(i) {
    const r = Object.keys(this);
    let o = r.length, l = !1;
    for (; o--; ) {
      const c = r[o];
      (!i || Ko(this, this[c], c, i, !0)) && (delete this[c], l = !0);
    }
    return l;
  }
  normalize(i) {
    const r = this, o = {};
    return R.forEach(this, (l, c) => {
      const h = R.findKey(o, c);
      if (h) {
        r[h] = ms(l), delete r[c];
        return;
      }
      const m = i ? rw(c) : String(c).trim();
      m !== c && delete r[c], r[m] = ms(l), o[m] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const r = /* @__PURE__ */ Object.create(null);
    return R.forEach(this, (o, l) => {
      o != null && o !== !1 && (r[l] = i && R.isArray(o) ? o.join(", ") : o);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, r]) => i + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...r) {
    const o = new this(i);
    return r.forEach((l) => o.set(l)), o;
  }
  static accessor(i) {
    const r = (this[wc] = this[wc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function l(c) {
      const h = fi(c);
      r[h] || (aw(o, c), r[h] = !0);
    }
    return R.isArray(i) ? i.forEach(l) : l(i), this;
  }
};
Zt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
R.reduceDescriptors(Zt.prototype, ({ value: n }, i) => {
  let r = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(o) {
      this[r] = o;
    }
  };
});
R.freezeMethods(Zt);
function Go(n, i) {
  const r = this || xi, o = i || r, l = Zt.from(o.headers);
  let c = o.data;
  return R.forEach(n, function(h) {
    c = h.call(r, c, l.normalize(), i ? i.status : void 0);
  }), l.normalize(), c;
}
function Pu(n) {
  return !!(n && n.__CANCEL__);
}
function Fn(n, i, r) {
  X.call(this, n ?? "canceled", X.ERR_CANCELED, i, r), this.name = "CanceledError";
}
R.inherits(Fn, X, {
  __CANCEL__: !0
});
function Nu(n, i, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? n(r) : i(new X(
    "Request failed with status code " + r.status,
    [X.ERR_BAD_REQUEST, X.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function lw(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return i && i[1] || "";
}
function cw(n, i) {
  n = n || 10;
  const r = new Array(n), o = new Array(n);
  let l = 0, c = 0, h;
  return i = i !== void 0 ? i : 1e3, function(m) {
    const w = Date.now(), g = o[c];
    h || (h = w), r[l] = m, o[l] = w;
    let v = c, _ = 0;
    for (; v !== l; )
      _ += r[v++], v = v % n;
    if (l = (l + 1) % n, l === c && (c = (c + 1) % n), w - h < i)
      return;
    const S = g && w - g;
    return S ? Math.round(_ * 1e3 / S) : void 0;
  };
}
function uw(n, i) {
  let r = 0, o = 1e3 / i, l, c;
  const h = (m, w = Date.now()) => {
    r = w, l = null, c && (clearTimeout(c), c = null), n.apply(null, m);
  };
  return [(...m) => {
    const w = Date.now(), g = w - r;
    g >= o ? h(m, w) : (l = m, c || (c = setTimeout(() => {
      c = null, h(l);
    }, o - g)));
  }, () => l && h(l)];
}
const $s = (n, i, r = 3) => {
  let o = 0;
  const l = cw(50, 250);
  return uw((c) => {
    const h = c.loaded, m = c.lengthComputable ? c.total : void 0, w = h - o, g = l(w), v = h <= m;
    o = h;
    const _ = {
      loaded: h,
      total: m,
      progress: m ? h / m : void 0,
      bytes: w,
      rate: g || void 0,
      estimated: g && m && v ? (m - h) / g : void 0,
      event: c,
      lengthComputable: m != null,
      [i ? "download" : "upload"]: !0
    };
    n(_);
  }, r);
}, yc = (n, i) => {
  const r = n != null;
  return [(o) => i[0]({
    lengthComputable: r,
    total: n,
    loaded: o
  }), i[1]];
}, $c = (n) => (...i) => R.asap(() => n(...i)), hw = ge.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
    let r;
    function o(l) {
      let c = l;
      return n && (i.setAttribute("href", c), c = i.href), i.setAttribute("href", c), {
        href: i.href,
        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
        host: i.host,
        search: i.search ? i.search.replace(/^\?/, "") : "",
        hash: i.hash ? i.hash.replace(/^#/, "") : "",
        hostname: i.hostname,
        port: i.port,
        pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
      };
    }
    return r = o(window.location.href), function(l) {
      const c = R.isString(l) ? o(l) : l;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), dw = ge.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, i, r, o, l, c) {
      const h = [n + "=" + encodeURIComponent(i)];
      R.isNumber(r) && h.push("expires=" + new Date(r).toGMTString()), R.isString(o) && h.push("path=" + o), R.isString(l) && h.push("domain=" + l), c === !0 && h.push("secure"), document.cookie = h.join("; ");
    },
    read(n) {
      const i = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return i ? decodeURIComponent(i[3]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5);
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
function fw(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function pw(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function Bu(n, i) {
  return n && !fw(i) ? pw(n, i) : i;
}
const kc = (n) => n instanceof Zt ? { ...n } : n;
function dn(n, i) {
  i = i || {};
  const r = {};
  function o(g, v, _) {
    return R.isPlainObject(g) && R.isPlainObject(v) ? R.merge.call({ caseless: _ }, g, v) : R.isPlainObject(v) ? R.merge({}, v) : R.isArray(v) ? v.slice() : v;
  }
  function l(g, v, _) {
    if (R.isUndefined(v)) {
      if (!R.isUndefined(g))
        return o(void 0, g, _);
    } else return o(g, v, _);
  }
  function c(g, v) {
    if (!R.isUndefined(v))
      return o(void 0, v);
  }
  function h(g, v) {
    if (R.isUndefined(v)) {
      if (!R.isUndefined(g))
        return o(void 0, g);
    } else return o(void 0, v);
  }
  function m(g, v, _) {
    if (_ in i)
      return o(g, v);
    if (_ in n)
      return o(void 0, g);
  }
  const w = {
    url: c,
    method: c,
    data: c,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: m,
    headers: (g, v) => l(kc(g), kc(v), !0)
  };
  return R.forEach(Object.keys(Object.assign({}, n, i)), function(g) {
    const v = w[g] || l, _ = v(n[g], i[g], g);
    R.isUndefined(_) && v !== m || (r[g] = _);
  }), r;
}
const Fu = (n) => {
  const i = dn({}, n);
  let { data: r, withXSRFToken: o, xsrfHeaderName: l, xsrfCookieName: c, headers: h, auth: m } = i;
  i.headers = h = Zt.from(h), i.url = Cu(Bu(i.baseURL, i.url), n.params, n.paramsSerializer), m && h.set(
    "Authorization",
    "Basic " + btoa((m.username || "") + ":" + (m.password ? unescape(encodeURIComponent(m.password)) : ""))
  );
  let w;
  if (R.isFormData(r)) {
    if (ge.hasStandardBrowserEnv || ge.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if ((w = h.getContentType()) !== !1) {
      const [g, ...v] = w ? w.split(";").map((_) => _.trim()).filter(Boolean) : [];
      h.setContentType([g || "multipart/form-data", ...v].join("; "));
    }
  }
  if (ge.hasStandardBrowserEnv && (o && R.isFunction(o) && (o = o(i)), o || o !== !1 && hw(i.url))) {
    const g = l && c && dw.read(c);
    g && h.set(l, g);
  }
  return i;
}, mw = typeof XMLHttpRequest < "u", gw = mw && function(n) {
  return new Promise(function(i, r) {
    const o = Fu(n);
    let l = o.data;
    const c = Zt.from(o.headers).normalize();
    let { responseType: h, onUploadProgress: m, onDownloadProgress: w } = o, g, v, _, S, O;
    function x() {
      S && S(), O && O(), o.cancelToken && o.cancelToken.unsubscribe(g), o.signal && o.signal.removeEventListener("abort", g);
    }
    let y = new XMLHttpRequest();
    y.open(o.method.toUpperCase(), o.url, !0), y.timeout = o.timeout;
    function j() {
      if (!y)
        return;
      const F = Zt.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), H = {
        data: !h || h === "text" || h === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: F,
        config: n,
        request: y
      };
      Nu(function(yt) {
        i(yt), x();
      }, function(yt) {
        r(yt), x();
      }, H), y = null;
    }
    "onloadend" in y ? y.onloadend = j : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(j);
    }, y.onabort = function() {
      y && (r(new X("Request aborted", X.ECONNABORTED, n, y)), y = null);
    }, y.onerror = function() {
      r(new X("Network Error", X.ERR_NETWORK, n, y)), y = null;
    }, y.ontimeout = function() {
      let F = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const H = o.transitional || Au;
      o.timeoutErrorMessage && (F = o.timeoutErrorMessage), r(new X(
        F,
        H.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED,
        n,
        y
      )), y = null;
    }, l === void 0 && c.setContentType(null), "setRequestHeader" in y && R.forEach(c.toJSON(), function(F, H) {
      y.setRequestHeader(H, F);
    }), R.isUndefined(o.withCredentials) || (y.withCredentials = !!o.withCredentials), h && h !== "json" && (y.responseType = o.responseType), w && ([_, O] = $s(w, !0), y.addEventListener("progress", _)), m && y.upload && ([v, S] = $s(m), y.upload.addEventListener("progress", v), y.upload.addEventListener("loadend", S)), (o.cancelToken || o.signal) && (g = (F) => {
      y && (r(!F || F.type ? new Fn(null, n, y) : F), y.abort(), y = null);
    }, o.cancelToken && o.cancelToken.subscribe(g), o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
    const L = lw(o.url);
    if (L && ge.protocols.indexOf(L) === -1) {
      r(new X("Unsupported protocol " + L + ":", X.ERR_BAD_REQUEST, n));
      return;
    }
    y.send(l || null);
  });
}, bw = (n, i) => {
  let r = new AbortController(), o;
  const l = function(w) {
    if (!o) {
      o = !0, h();
      const g = w instanceof Error ? w : this.reason;
      r.abort(g instanceof X ? g : new Fn(g instanceof Error ? g.message : g));
    }
  };
  let c = i && setTimeout(() => {
    l(new X(`timeout ${i} of ms exceeded`, X.ETIMEDOUT));
  }, i);
  const h = () => {
    n && (c && clearTimeout(c), c = null, n.forEach((w) => {
      w && (w.removeEventListener ? w.removeEventListener("abort", l) : w.unsubscribe(l));
    }), n = null);
  };
  n.forEach((w) => w && w.addEventListener && w.addEventListener("abort", l));
  const { signal: m } = r;
  return m.unsubscribe = h, [m, () => {
    c && clearTimeout(c), c = null;
  }];
}, vw = function* (n, i) {
  let r = n.byteLength;
  if (r < i) {
    yield n;
    return;
  }
  let o = 0, l;
  for (; o < r; )
    l = o + i, yield n.slice(o, l), o = l;
}, ww = async function* (n, i, r) {
  for await (const o of n)
    yield* vw(ArrayBuffer.isView(o) ? o : await r(String(o)), i);
}, xc = (n, i, r, o, l) => {
  const c = ww(n, i, l);
  let h = 0, m, w = (g) => {
    m || (m = !0, o && o(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: v, value: _ } = await c.next();
        if (v) {
          w(), g.close();
          return;
        }
        let S = _.byteLength;
        if (r) {
          let O = h += S;
          r(O);
        }
        g.enqueue(new Uint8Array(_));
      } catch (v) {
        throw w(v), v;
      }
    },
    cancel(g) {
      return w(g), c.return();
    }
  }, {
    highWaterMark: 2
  });
}, Fs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Iu = Fs && typeof ReadableStream == "function", hr = Fs && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (i) => n.encode(i))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), Du = (n, ...i) => {
  try {
    return !!n(...i);
  } catch {
    return !1;
  }
}, yw = Iu && Du(() => {
  let n = !1;
  const i = new Request(ge.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !i;
}), Sc = 64 * 1024, dr = Iu && Du(() => R.isReadableStream(new Response("").body)), ks = {
  stream: dr && ((n) => n.body)
};
Fs && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !ks[i] && (ks[i] = R.isFunction(n[i]) ? (r) => r[i]() : (r, o) => {
      throw new X(`Response type '${i}' is not supported`, X.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const $w = async (n) => {
  if (n == null)
    return 0;
  if (R.isBlob(n))
    return n.size;
  if (R.isSpecCompliantForm(n))
    return (await new Request(n).arrayBuffer()).byteLength;
  if (R.isArrayBufferView(n) || R.isArrayBuffer(n))
    return n.byteLength;
  if (R.isURLSearchParams(n) && (n = n + ""), R.isString(n))
    return (await hr(n)).byteLength;
}, kw = async (n, i) => R.toFiniteNumber(n.getContentLength()) ?? $w(i), xw = Fs && (async (n) => {
  let {
    url: i,
    method: r,
    data: o,
    signal: l,
    cancelToken: c,
    timeout: h,
    onDownloadProgress: m,
    onUploadProgress: w,
    responseType: g,
    headers: v,
    withCredentials: _ = "same-origin",
    fetchOptions: S
  } = Fu(n);
  g = g ? (g + "").toLowerCase() : "text";
  let [O, x] = l || c || h ? bw([l, c], h) : [], y, j;
  const L = () => {
    !y && setTimeout(() => {
      O && O.unsubscribe();
    }), y = !0;
  };
  let F;
  try {
    if (w && yw && r !== "get" && r !== "head" && (F = await kw(v, o)) !== 0) {
      let pt = new Request(i, {
        method: "POST",
        body: o,
        duplex: "half"
      }), Tt;
      if (R.isFormData(o) && (Tt = pt.headers.get("content-type")) && v.setContentType(Tt), pt.body) {
        const [It, Dt] = yc(
          F,
          $s($c(w))
        );
        o = xc(pt.body, Sc, It, Dt, hr);
      }
    }
    R.isString(_) || (_ = _ ? "include" : "omit"), j = new Request(i, {
      ...S,
      signal: O,
      method: r.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: _
    });
    let H = await fetch(j);
    const yt = dr && (g === "stream" || g === "response");
    if (dr && (m || yt)) {
      const pt = {};
      ["status", "statusText", "headers"].forEach((mt) => {
        pt[mt] = H[mt];
      });
      const Tt = R.toFiniteNumber(H.headers.get("content-length")), [It, Dt] = m && yc(
        Tt,
        $s($c(m), !0)
      ) || [];
      H = new Response(
        xc(H.body, Sc, It, () => {
          Dt && Dt(), yt && L();
        }, hr),
        pt
      );
    }
    g = g || "text";
    let bt = await ks[R.findKey(ks, g) || "text"](H, n);
    return !yt && L(), x && x(), await new Promise((pt, Tt) => {
      Nu(pt, Tt, {
        data: bt,
        headers: Zt.from(H.headers),
        status: H.status,
        statusText: H.statusText,
        config: n,
        request: j
      });
    });
  } catch (H) {
    throw L(), H && H.name === "TypeError" && /fetch/i.test(H.message) ? Object.assign(
      new X("Network Error", X.ERR_NETWORK, n, j),
      {
        cause: H.cause || H
      }
    ) : X.from(H, H && H.code, n, j);
  }
}), fr = {
  http: Uv,
  xhr: gw,
  fetch: xw
};
R.forEach(fr, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const Ec = (n) => `- ${n}`, Sw = (n) => R.isFunction(n) || n === null || n === !1, ju = {
  getAdapter: (n) => {
    n = R.isArray(n) ? n : [n];
    const { length: i } = n;
    let r, o;
    const l = {};
    for (let c = 0; c < i; c++) {
      r = n[c];
      let h;
      if (o = r, !Sw(r) && (o = fr[(h = String(r)).toLowerCase()], o === void 0))
        throw new X(`Unknown adapter '${h}'`);
      if (o)
        break;
      l[h || "#" + c] = o;
    }
    if (!o) {
      const c = Object.entries(l).map(
        ([m, w]) => `adapter ${m} ` + (w === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let h = i ? c.length > 1 ? `since :
` + c.map(Ec).join(`
`) : " " + Ec(c[0]) : "as no adapter specified";
      throw new X(
        "There is no suitable adapter to dispatch the request " + h,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: fr
};
function Xo(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Fn(null, n);
}
function _c(n) {
  return Xo(n), n.headers = Zt.from(n.headers), n.data = Go.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), ju.getAdapter(n.adapter || xi.adapter)(n).then(function(i) {
    return Xo(n), i.data = Go.call(
      n,
      n.transformResponse,
      i
    ), i.headers = Zt.from(i.headers), i;
  }, function(i) {
    return Pu(i) || (Xo(n), i && i.response && (i.response.data = Go.call(
      n,
      n.transformResponse,
      i.response
    ), i.response.headers = Zt.from(i.response.headers))), Promise.reject(i);
  });
}
const Lu = "1.7.3", Br = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, i) => {
  Br[n] = function(r) {
    return typeof r === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
const Oc = {};
Br.transitional = function(n, i, r) {
  function o(l, c) {
    return "[Axios v" + Lu + "] Transitional option '" + l + "'" + c + (r ? ". " + r : "");
  }
  return (l, c, h) => {
    if (n === !1)
      throw new X(
        o(c, " has been removed" + (i ? " in " + i : "")),
        X.ERR_DEPRECATED
      );
    return i && !Oc[c] && (Oc[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), n ? n(l, c, h) : !0;
  };
};
function Ew(n, i, r) {
  if (typeof n != "object")
    throw new X("options must be an object", X.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(n);
  let l = o.length;
  for (; l-- > 0; ) {
    const c = o[l], h = i[c];
    if (h) {
      const m = n[c], w = m === void 0 || h(m, c, n);
      if (w !== !0)
        throw new X("option " + c + " must be " + w, X.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new X("Unknown option " + c, X.ERR_BAD_OPTION);
  }
}
const pr = {
  assertOptions: Ew,
  validators: Br
}, De = pr.validators;
let cn = class {
  constructor(i) {
    this.defaults = i, this.interceptors = {
      request: new vc(),
      response: new vc()
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
  async request(i, r) {
    try {
      return await this._request(i, r);
    } catch (o) {
      if (o instanceof Error) {
        let l;
        Error.captureStackTrace ? Error.captureStackTrace(l = {}) : l = new Error();
        const c = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? c && !String(o.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + c) : o.stack = c;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(i, r) {
    typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = dn(this.defaults, r);
    const { transitional: o, paramsSerializer: l, headers: c } = r;
    o !== void 0 && pr.assertOptions(o, {
      silentJSONParsing: De.transitional(De.boolean),
      forcedJSONParsing: De.transitional(De.boolean),
      clarifyTimeoutError: De.transitional(De.boolean)
    }, !1), l != null && (R.isFunction(l) ? r.paramsSerializer = {
      serialize: l
    } : pr.assertOptions(l, {
      encode: De.function,
      serialize: De.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let h = c && R.merge(
      c.common,
      c[r.method]
    );
    c && R.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (x) => {
        delete c[x];
      }
    ), r.headers = Zt.concat(h, c);
    const m = [];
    let w = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(r) === !1 || (w = w && x.synchronous, m.unshift(x.fulfilled, x.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(x) {
      g.push(x.fulfilled, x.rejected);
    });
    let v, _ = 0, S;
    if (!w) {
      const x = [_c.bind(this), void 0];
      for (x.unshift.apply(x, m), x.push.apply(x, g), S = x.length, v = Promise.resolve(r); _ < S; )
        v = v.then(x[_++], x[_++]);
      return v;
    }
    S = m.length;
    let O = r;
    for (_ = 0; _ < S; ) {
      const x = m[_++], y = m[_++];
      try {
        O = x(O);
      } catch (j) {
        y.call(this, j);
        break;
      }
    }
    try {
      v = _c.call(this, O);
    } catch (x) {
      return Promise.reject(x);
    }
    for (_ = 0, S = g.length; _ < S; )
      v = v.then(g[_++], g[_++]);
    return v;
  }
  getUri(i) {
    i = dn(this.defaults, i);
    const r = Bu(i.baseURL, i.url);
    return Cu(r, i.params, i.paramsSerializer);
  }
};
R.forEach(["delete", "get", "head", "options"], function(n) {
  cn.prototype[n] = function(i, r) {
    return this.request(dn(r || {}, {
      method: n,
      url: i,
      data: (r || {}).data
    }));
  };
});
R.forEach(["post", "put", "patch"], function(n) {
  function i(r) {
    return function(o, l, c) {
      return this.request(dn(c || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: l
      }));
    };
  }
  cn.prototype[n] = i(), cn.prototype[n + "Form"] = i(!0);
});
let _w = class Uu {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(l) {
      r = l;
    });
    const o = this;
    this.promise.then((l) => {
      if (!o._listeners) return;
      let c = o._listeners.length;
      for (; c-- > 0; )
        o._listeners[c](l);
      o._listeners = null;
    }), this.promise.then = (l) => {
      let c;
      const h = new Promise((m) => {
        o.subscribe(m), c = m;
      }).then(l);
      return h.cancel = function() {
        o.unsubscribe(c);
      }, h;
    }, i(function(l, c, h) {
      o.reason || (o.reason = new Fn(l, c, h), r(o.reason));
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
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(i) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(i);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let i;
    return {
      token: new Uu(function(r) {
        i = r;
      }),
      cancel: i
    };
  }
};
function Ow(n) {
  return function(i) {
    return n.apply(null, i);
  };
}
function Tw(n) {
  return R.isObject(n) && n.isAxiosError === !0;
}
const mr = {
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
Object.entries(mr).forEach(([n, i]) => {
  mr[i] = n;
});
function Mu(n) {
  const i = new cn(n), r = bu(cn.prototype.request, i);
  return R.extend(r, cn.prototype, i, { allOwnKeys: !0 }), R.extend(r, i, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Mu(dn(n, o));
  }, r;
}
const Rt = Mu(xi);
Rt.Axios = cn;
Rt.CanceledError = Fn;
Rt.CancelToken = _w;
Rt.isCancel = Pu;
Rt.VERSION = Lu;
Rt.toFormData = Bs;
Rt.AxiosError = X;
Rt.Cancel = Rt.CanceledError;
Rt.all = function(n) {
  return Promise.all(n);
};
Rt.spread = Ow;
Rt.isAxiosError = Tw;
Rt.mergeConfig = dn;
Rt.AxiosHeaders = Zt;
Rt.formToJSON = (n) => Ru(R.isHTMLForm(n) ? new FormData(n) : n);
Rt.getAdapter = ju.getAdapter;
Rt.HttpStatusCode = mr;
Rt.default = Rt;
const Cw = (n) => {
  const i = typeof n;
  return n !== null && (i === "object" || i === "function");
}, Yo = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), Aw = new Set("0123456789");
function Rw(n) {
  const i = [];
  let r = "", o = "start", l = !1;
  for (const c of n)
    switch (c) {
      case "\\": {
        if (o === "index")
          throw new Error("Invalid character in an index");
        if (o === "indexEnd")
          throw new Error("Invalid character after an index");
        l && (r += c), o = "property", l = !l;
        break;
      }
      case ".": {
        if (o === "index")
          throw new Error("Invalid character in an index");
        if (o === "indexEnd") {
          o = "property";
          break;
        }
        if (l) {
          l = !1, r += c;
          break;
        }
        if (Yo.has(r))
          return [];
        i.push(r), r = "", o = "property";
        break;
      }
      case "[": {
        if (o === "index")
          throw new Error("Invalid character in an index");
        if (o === "indexEnd") {
          o = "index";
          break;
        }
        if (l) {
          l = !1, r += c;
          break;
        }
        if (o === "property") {
          if (Yo.has(r))
            return [];
          i.push(r), r = "";
        }
        o = "index";
        break;
      }
      case "]": {
        if (o === "index") {
          i.push(Number.parseInt(r, 10)), r = "", o = "indexEnd";
          break;
        }
        if (o === "indexEnd")
          throw new Error("Invalid character after an index");
      }
      default: {
        if (o === "index" && !Aw.has(c))
          throw new Error("Invalid character in an index");
        if (o === "indexEnd")
          throw new Error("Invalid character after an index");
        o === "start" && (o = "property"), l && (l = !1, r += "\\"), r += c;
      }
    }
  switch (l && (r += "\\"), o) {
    case "property": {
      if (Yo.has(r))
        return [];
      i.push(r);
      break;
    }
    case "index":
      throw new Error("Index was not closed");
    case "start": {
      i.push("");
      break;
    }
  }
  return i;
}
function Pw(n, i) {
  if (typeof i != "number" && Array.isArray(n)) {
    const r = Number.parseInt(i, 10);
    return Number.isInteger(r) && n[r] === n[i];
  }
  return !1;
}
function Nw(n, i, r) {
  if (!Cw(n) || typeof i != "string")
    return r === void 0 ? n : r;
  const o = Rw(i);
  if (o.length === 0)
    return r;
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    if (Pw(n, c) ? n = l === o.length - 1 ? void 0 : null : n = n[c], n == null) {
      if (l !== o.length - 1)
        return r;
      break;
    }
  }
  return n === void 0 ? r : n;
}
const zu = qc("config", {
  persist: !0,
  state: () => ({
    config: {}
  }),
  getters: {
    get: (n) => (i, r) => Nw(n.config, i, r)
  },
  actions: {
    async load() {
      Rt.get("/api/config").then((n) => {
        this.config = n.data;
      });
    }
  }
});
function Bw() {
  return {
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    password: "",
    passwordc: "",
    locale: zu().get("site.registration.user_defaults.locale", "en_US"),
    captcha: "",
    spiderbro: "http://"
  };
}
function Fw() {
  return zu().get("locales.available");
}
function Iw() {
  return "/account/captcha";
}
async function Dw(n) {
  return vt.post("/account/register", n).then((i) => i.data).catch((i) => {
    throw {
      description: "An error as occurred",
      style: Oe.Danger,
      closeBtn: !0,
      ...i.response.data
    };
  });
}
const jw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  doRegister: Dw,
  getAvailableLocales: Fw,
  getCaptchaUrl: Iw,
  getDefaultForm: Bw
}, Symbol.toStringTag, { value: "Module" }));
async function Lw(n) {
  return vt.post("/account/forgot-password", { email: n }).then((i) => ({
    description: i.data.message,
    style: Oe.Success,
    closeBtn: !0
  })).catch((i) => {
    throw {
      description: "An error as occurred",
      style: Oe.Danger,
      closeBtn: !0,
      ...i.response.data
    };
  });
}
async function Uw(n) {
  return vt.post("/account/resend-verification", { email: n }).then((i) => ({
    description: i.data.message,
    style: Oe.Success,
    closeBtn: !0
  })).catch((i) => {
    throw {
      description: "An error as occurred",
      style: Oe.Danger,
      closeBtn: !0,
      ...i.response.data
    };
  });
}
const Mw = { class: "uk-fieldset uk-form-stacked" }, zw = { class: "uk-margin" }, qw = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Hw = { class: "uk-width-1-2" }, Ww = { class: "uk-width-1-2" }, Vw = { class: "uk-width-1-1" }, Jw = { class: "uk-margin" }, Kw = { class: "uk-margin" }, Gw = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Xw = { class: "uk-width-1-2" }, Yw = { class: "uk-width-1-2" }, Qw = { class: "uk-margin" }, Zw = ["value"], ty = { class: "uk-margin" }, ey = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, ny = { class: "uk-width-2-3" }, iy = { class: "uk-width-1-3" }, sy = ["src"], oy = { class: "uk-text-center" }, ry = ["disabled"], qu = /* @__PURE__ */ wt({
  __name: "FormRegister",
  setup(n) {
    const { getDefaultForm: i, doRegister: r, getAvailableLocales: o, getCaptchaUrl: l } = jw, c = Xt(!1), h = Xt();
    let m = i();
    async function w() {
      c.value = !0, h.value = null, await r(m).then((g) => {
        Wc.notification({
          message: "Succesfully registered " + (g == null ? void 0 : g.full_name) + "!",
          status: "success",
          pos: "bottom-right",
          timeout: 4e3
        });
      }).catch((g) => {
        h.value = g;
      }).finally(() => {
        c.value = !1;
      });
    }
    return (g, v) => {
      const _ = qt("UFAlertContainer");
      return B(), z("form", {
        onSubmit: v[8] || (v[8] = Es((S) => w(), ["prevent"]))
      }, [
        T("fieldset", Mw, [
          h.value ? (B(), Ct(_, {
            key: 0,
            "data-test": "error",
            alert: h.value
          }, null, 8, ["alert"])) : ft("", !0),
          T("div", zw, [
            v[9] || (v[9] = T("label", {
              class: "uk-form-label",
              for: "first_name"
            }, "Name and email", -1)),
            T("div", qw, [
              T("div", Hw, [
                ae(T("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "First Name",
                  "aria-label": "First Name",
                  id: "first_name",
                  "data-test": "first_name",
                  "onUpdate:modelValue": v[0] || (v[0] = (S) => W(m).first_name = S)
                }, null, 512), [
                  [me, W(m).first_name]
                ])
              ]),
              T("div", Ww, [
                ae(T("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "Last Name",
                  "aria-label": "Last Name",
                  "data-test": "last_name",
                  "onUpdate:modelValue": v[1] || (v[1] = (S) => W(m).last_name = S)
                }, null, 512), [
                  [me, W(m).last_name]
                ])
              ]),
              T("div", Vw, [
                ae(T("input", {
                  class: "uk-input",
                  type: "email",
                  placeholder: "Email",
                  "aria-label": "Email",
                  "data-test": "email",
                  "onUpdate:modelValue": v[2] || (v[2] = (S) => W(m).email = S)
                }, null, 512), [
                  [me, W(m).email]
                ])
              ])
            ])
          ]),
          T("div", Jw, [
            v[10] || (v[10] = T("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Username", -1)),
            ae(T("input", {
              class: "uk-input",
              type: "text",
              placeholder: "Username",
              "aria-label": "Username",
              "data-test": "username",
              "onUpdate:modelValue": v[3] || (v[3] = (S) => W(m).user_name = S)
            }, null, 512), [
              [me, W(m).user_name]
            ])
          ]),
          T("div", Kw, [
            v[11] || (v[11] = T("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Password", -1)),
            T("div", Gw, [
              T("div", Xw, [
                ae(T("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Password",
                  "aria-label": "Password",
                  "data-test": "password",
                  "onUpdate:modelValue": v[4] || (v[4] = (S) => W(m).password = S)
                }, null, 512), [
                  [me, W(m).password]
                ])
              ]),
              T("div", Yw, [
                ae(T("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Confirm Password",
                  "aria-label": "Confirm Password",
                  "data-test": "passwordc",
                  "onUpdate:modelValue": v[5] || (v[5] = (S) => W(m).passwordc = S)
                }, null, 512), [
                  [me, W(m).passwordc]
                ])
              ])
            ])
          ]),
          T("div", Qw, [
            v[12] || (v[12] = T("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Locale", -1)),
            ae(T("select", {
              class: "uk-select",
              id: "form-stacked-select",
              "data-test": "locale",
              "onUpdate:modelValue": v[6] || (v[6] = (S) => W(m).locale = S)
            }, [
              (B(!0), z(vs, null, xr(W(o)(), (S, O) => (B(), z("option", {
                value: O,
                key: O
              }, dt(S), 9, Zw))), 128))
            ], 512), [
              [zc, W(m).locale]
            ])
          ]),
          T("div", ty, [
            v[13] || (v[13] = T("label", {
              class: "uk-form-label",
              for: "r-form-captcha"
            }, "Captcha", -1)),
            T("div", ey, [
              T("div", ny, [
                ae(T("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Captcha",
                  "aria-label": "Captcha",
                  id: "r-form-captcha",
                  "data-test": "captcha",
                  "onUpdate:modelValue": v[7] || (v[7] = (S) => W(m).captcha = S)
                }, null, 512), [
                  [me, W(m).captcha]
                ])
              ]),
              T("div", iy, [
                T("img", {
                  src: W(l)(),
                  id: "captcha",
                  "data-target": "#r-form-captcha"
                }, null, 8, sy)
              ])
            ])
          ]),
          v[14] || (v[14] = T("p", null, [
            At(" By registering an account with UserFrosting, you accept "),
            T("a", null, "the terms and conditions"),
            At(". ")
          ], -1)),
          T("div", oy, [
            T("button", {
              class: "uk-button uk-button-primary",
              disabled: c.value
            }, "Sign me up", 8, ry)
          ])
        ])
      ], 32);
    };
  }
}), ay = { class: "uk-fieldset" }, ly = { class: "uk-margin" }, cy = { class: "uk-inline uk-width-1-1" }, uy = { class: "uk-text-center" }, hy = ["disabled"], Hu = /* @__PURE__ */ wt({
  __name: "FormForgotPassword",
  setup(n) {
    const i = Xt(!1), r = Xt();
    let o = "";
    async function l() {
      i.value = !0, r.value = null, await Lw(o).then((c) => {
        r.value = c;
      }).catch((c) => {
        r.value = c;
      }).finally(() => {
        i.value = !1;
      });
    }
    return (c, h) => {
      const m = qt("UFAlertContainer");
      return B(), z("form", {
        onSubmit: h[1] || (h[1] = Es((w) => l(), ["prevent"]))
      }, [
        T("fieldset", ay, [
          r.value ? (B(), Ct(m, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : ft("", !0),
          T("div", ly, [
            T("div", cy, [
              h[2] || (h[2] = T("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              ae(T("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": h[0] || (h[0] = (w) => Sr(o) ? o.value = w : o = w)
              }, null, 512), [
                [me, W(o)]
              ])
            ])
          ]),
          T("div", uy, [
            T("button", {
              class: "uk-button uk-button-primary",
              disabled: i.value,
              "data-test": "submit"
            }, " Email Password Reset Link ", 8, hy)
          ])
        ])
      ], 32);
    };
  }
}), dy = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, fy = { class: "uk-navbar-container" }, py = { class: "uk-container uk-container-expand" }, my = {
  class: "uk-navbar",
  "uk-navbar": ""
}, gy = {
  class: "uk-navbar-left",
  "data-test": "navbar-left"
}, by = {
  class: "uk-navbar-right",
  "data-test": "navbar-right"
}, vy = { class: "uk-navbar-nav" }, wy = /* @__PURE__ */ wt({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(n) {
    return (i, r) => (B(), z("header", null, [
      T("div", dy, [
        T("div", fy, [
          T("div", py, [
            T("nav", my, [
              T("div", gy, [
                Wt(Er, {
                  to: i.to,
                  class: "uk-navbar-item uk-logo",
                  label: ""
                }, {
                  default: Mt(() => [
                    ot(i.$slots, "title", {}, () => [
                      At(dt(i.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              T("div", by, [
                T("ul", vy, [
                  ot(i.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), yy = { "data-test": "label" }, $y = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0px"
}, ky = {
  class: "uk-nav uk-navbar-dropdown-nav",
  "data-test": "slot"
}, Fr = /* @__PURE__ */ wt({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(n) {
    return (i, r) => (B(), z("li", null, [
      T("a", yy, [
        ot(i.$slots, "label", {}, () => [
          At(dt(i.label), 1)
        ]),
        r[0] || (r[0] = At()),
        r[1] || (r[1] = T("span", { "uk-navbar-parent-icon": "" }, null, -1))
      ]),
      T("div", $y, [
        T("ul", ky, [
          ot(i.$slots, "default")
        ])
      ])
    ]));
  }
}), xy = {}, Sy = { class: "uk-nav-divider" };
function Ey(n, i) {
  return B(), z("li", Sy);
}
const _y = /* @__PURE__ */ Rn(xy, [["render", Ey]]), Oy = { key: 0 }, Ty = ["href"], Cy = ["href", "onClick"], Ay = /* @__PURE__ */ wt({
  __name: "NavBarItem",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const i = n, r = Gt(() => i.to === "" || typeof i.to == "string" && i.to.startsWith("http"));
    return (o, l) => r.value ? (B(), z("li", Oy, [
      T("a", {
        href: o.to.toString(),
        target: "_blank"
      }, [
        ot(o.$slots, "default", {}, () => [
          At(dt(o.label), 1)
        ])
      ], 8, Ty)
    ])) : (B(), Ct(W(wi), mi({
      key: 1,
      to: o.to
    }, o.$props, { custom: "" }), {
      default: Mt(({ isActive: c, href: h, navigate: m }) => [
        T("li", {
          class: Le({ "uk-active": c })
        }, [
          T("a", mi(o.$attrs, {
            href: h,
            onClick: m
          }), [
            ot(o.$slots, "default", {}, () => [
              At(dt(o.label), 1)
            ])
          ], 16, Cy)
        ], 2)
      ]),
      _: 3
    }, 16, ["to"]));
  }
}), Ry = { class: "uk-text-center" }, Py = /* @__PURE__ */ wt({
  __name: "NavBarLogin",
  setup(n) {
    return (i, r) => (B(), Ct(Fr, {
      label: "Login",
      class: "uf-nav-login uk-text-center"
    }, {
      default: Mt(() => [
        Wt(Ar),
        T("div", Ry, [
          T("button", {
            class: "uk-button uk-button-default",
            onClick: r[0] || (r[0] = (o) => i.$emit("gotoRegistration")),
            "data-test": "gotoRegistration"
          }, " Register ")
        ]),
        ot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ny = {
  key: 0,
  "data-test": "username"
}, By = ["src"], Fy = { class: "uk-margin" }, Iy = ["src"], Dy = {
  key: 1,
  class: "uk-margin-remove",
  "data-test": "username"
}, jy = {
  key: 2,
  class: "uk-margin-remove uk-text-meta",
  "data-test": "meta"
}, Ly = /* @__PURE__ */ wt({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(n) {
    return (i, r) => (B(), Ct(Fr, { class: "uf-nav-user uk-text-center" }, {
      label: Mt(() => [
        i.username ? (B(), z("span", Ny, dt(i.username), 1)) : ft("", !0),
        i.avatar ? (B(), z("img", {
          key: 1,
          src: i.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, By)) : ft("", !0)
      ]),
      default: Mt(() => [
        T("div", Fy, [
          i.avatar ? (B(), z("img", {
            key: 0,
            src: i.avatar,
            alt: "avatar",
            class: "uk-border-circle",
            "uk-height-match": ""
          }, null, 8, Iy)) : ft("", !0),
          i.username ? (B(), z("p", Dy, dt(i.username), 1)) : ft("", !0),
          i.meta ? (B(), z("p", jy, "(" + dt(i.meta) + ")", 1)) : ft("", !0)
        ]),
        ot(i.$slots, "default", { dataTest: "slot" })
      ]),
      _: 3
    }));
  }
}), Uy = { key: 0 }, My = ["href"], zy = { key: 1 }, qy = /* @__PURE__ */ wt({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const i = n, r = Gt(() => typeof i.to == "string" && i.to.startsWith("http"));
    return (o, l) => r.value ? (B(), z("li", Uy, [
      T("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: o.to.toString(),
        target: "_blank"
      }, [
        ot(o.$slots, "default", {}, () => [
          At(dt(o.label), 1)
        ])
      ], 8, My)
    ])) : (B(), z("li", zy, [
      Wt(W(wi), {
        to: o.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: Mt(() => [
          ot(o.$slots, "default", {}, () => [
            At(dt(o.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["to"])
    ]));
  }
}), Hy = { class: "uk-list" }, Wy = { class: "uk-text-center" }, Vy = /* @__PURE__ */ wt({
  __name: "PageLogin",
  setup(n) {
    return (i, r) => {
      const o = qt("font-awesome-icon"), l = qt("UFCardBoxBig");
      return B(), Ct(l, null, {
        default: Mt(() => [
          r[5] || (r[5] = T("h3", { class: "uk-card-title" }, "Login", -1)),
          Wt(Ar),
          T("ul", Hy, [
            T("li", null, [
              T("a", {
                onClick: r[0] || (r[0] = (c) => i.$emit("gotoForgotPassword")),
                "data-test": "gotoForgotPassword"
              }, "Forgot your password?")
            ]),
            T("li", null, [
              T("a", {
                onClick: r[1] || (r[1] = (c) => i.$emit("gotoResendVerification")),
                "data-test": "gotoResendVerification"
              }, "Resend verification email")
            ])
          ]),
          r[6] || (r[6] = T("hr", null, null, -1)),
          T("div", Wy, [
            r[4] || (r[4] = T("p", null, "You don't have an account yet?", -1)),
            T("button", {
              class: "uk-button uk-button-default",
              onClick: r[2] || (r[2] = (c) => i.$emit("gotoRegistration")),
              "data-test": "gotoRegistration"
            }, [
              Wt(o, { icon: ["fas", "user-plus"] }),
              r[3] || (r[3] = At(" Register "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), Jy = { class: "uk-text-center" }, Ky = /* @__PURE__ */ wt({
  __name: "PageRegister",
  setup(n) {
    return (i, r) => {
      const o = qt("font-awesome-icon"), l = qt("UFCardBoxBig");
      return B(), Ct(l, null, {
        default: Mt(() => [
          r[3] || (r[3] = T("h3", { class: "uk-card-title" }, "Register", -1)),
          Wt(qu),
          r[4] || (r[4] = T("hr", null, null, -1)),
          T("div", Jy, [
            r[2] || (r[2] = T("p", null, "Already have an account ?", -1)),
            T("button", {
              class: "uk-button uk-button-default",
              onClick: r[0] || (r[0] = (c) => i.$emit("gotoLogin")),
              "data-test": "gotoLogin"
            }, [
              Wt(o, { icon: ["fas", "right-to-bracket"] }),
              r[1] || (r[1] = At(" Login "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), Gy = /* @__PURE__ */ wt({
  __name: "PageForgotPassword",
  setup(n) {
    return (i, r) => {
      const o = qt("UFCardBoxBig");
      return B(), Ct(o, null, {
        default: Mt(() => [
          r[0] || (r[0] = T("h3", { class: "uk-card-title" }, "Forgotten Password", -1)),
          r[1] || (r[1] = T("p", null, " Please enter the email address you used to sign up. A link with instructions to reset your password will be emailed to you. ", -1)),
          Wt(Hu)
        ]),
        _: 1
      });
    };
  }
}), Xy = { class: "uk-fieldset" }, Yy = { class: "uk-margin" }, Qy = { class: "uk-inline uk-width-1-1" }, Zy = { class: "uk-text-center" }, t0 = ["disabled"], e0 = /* @__PURE__ */ wt({
  __name: "FormResendVerification",
  setup(n) {
    const i = Xt(!1), r = Xt();
    let o = "";
    async function l() {
      i.value = !0, r.value = null, await Uw(o).then((c) => {
        r.value = c;
      }).catch((c) => {
        r.value = c;
      }).finally(() => {
        i.value = !1;
      });
    }
    return (c, h) => {
      const m = qt("UFAlertContainer");
      return B(), z("form", {
        onSubmit: h[1] || (h[1] = Es((w) => l(), ["prevent"]))
      }, [
        T("fieldset", Xy, [
          r.value ? (B(), Ct(m, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : ft("", !0),
          T("div", Yy, [
            T("div", Qy, [
              h[2] || (h[2] = T("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              ae(T("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": h[0] || (h[0] = (w) => Sr(o) ? o.value = w : o = w)
              }, null, 512), [
                [me, W(o)]
              ])
            ])
          ]),
          T("div", Zy, [
            T("button", {
              class: "uk-button uk-button-primary",
              disabled: i.value,
              "data-test": "submit"
            }, " Email the verification link for my account ", 8, t0)
          ])
        ])
      ], 32);
    };
  }
}), n0 = /* @__PURE__ */ wt({
  __name: "PageResendVerification",
  setup(n) {
    return (i, r) => {
      const o = qt("UFCardBoxBig");
      return B(), Ct(o, null, {
        default: Mt(() => [
          r[0] || (r[0] = T("h3", { class: "uk-card-title" }, "Resend Verification Email", -1)),
          r[1] || (r[1] = T("p", null, " Please enter the email address you used to sign up, and your verification email will be resent. ", -1)),
          Wt(e0)
        ]),
        _: 1
      });
    };
  }
}), i0 = {}, s0 = { class: "uf-sidebar-left uk-light uk-visible@m" }, o0 = { class: "left-nav-wrap" }, r0 = {
  class: "uk-nav uk-nav-default",
  "data-uk-nav": ""
};
function a0(n, i) {
  return B(), z("aside", s0, [
    T("div", o0, [
      T("ul", r0, [
        ot(n.$slots, "default")
      ])
    ])
  ]);
}
const l0 = /* @__PURE__ */ Rn(i0, [["render", a0]]), c0 = ["data-uk-icon"], u0 = {
  key: 2,
  "uk-nav-parent-icon": "",
  "data-test": "caret"
}, h0 = {
  class: "uk-nav-sub",
  "data-test": "slot"
}, d0 = /* @__PURE__ */ wt({
  __name: "SideBarDropdown",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" },
    hideCaret: { type: Boolean, default: !1 }
  },
  setup(n) {
    return (i, r) => {
      const o = qt("font-awesome-icon");
      return B(), Ct(W(wi), mi({ to: i.to }, i.$props, { custom: "" }), {
        default: Mt(({ isActive: l }) => [
          T("li", {
            class: Le(["uk-parent", { "uk-open": l }])
          }, [
            T("a", Om(Tm(i.$attrs)), [
              i.icon ? (B(), z("span", {
                key: 0,
                "data-uk-icon": i.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, c0)) : ft("", !0),
              i.faIcon ? (B(), Ct(o, {
                key: 1,
                class: "uk-margin-small-right",
                icon: i.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : ft("", !0),
              ot(i.$slots, "label", {}, () => [
                At(dt(i.label), 1)
              ]),
              i.hideCaret ? ft("", !0) : (B(), z("span", u0))
            ], 16),
            T("ul", h0, [
              ot(i.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]);
    };
  }
}), f0 = { key: 0 }, p0 = ["href"], m0 = ["data-uk-icon"], g0 = ["href", "onClick"], b0 = ["data-uk-icon"], v0 = /* @__PURE__ */ wt({
  __name: "SideBarItem",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(n) {
    const i = n, r = Gt(() => i.to === "" || typeof i.to == "string" && i.to.startsWith("http"));
    return (o, l) => {
      const c = qt("font-awesome-icon");
      return r.value ? (B(), z("li", f0, [
        T("a", {
          href: o.to.toString(),
          target: "_blank"
        }, [
          o.icon ? (B(), z("span", {
            key: 0,
            "data-uk-icon": o.icon,
            class: "uk-margin-small-right",
            "data-test": "icon"
          }, null, 8, m0)) : ft("", !0),
          o.faIcon ? (B(), Ct(c, {
            key: 1,
            class: "uk-margin-small-right",
            icon: o.faIcon,
            "data-test": "faIcon"
          }, null, 8, ["icon"])) : ft("", !0),
          ot(o.$slots, "default", {}, () => [
            At(dt(o.label), 1)
          ])
        ], 8, p0)
      ])) : (B(), Ct(W(wi), mi({
        key: 1,
        to: o.to
      }, o.$props, { custom: "" }), {
        default: Mt(({ isExactActive: h, href: m, navigate: w }) => [
          T("li", {
            class: Le({ "uk-active": h })
          }, [
            T("a", mi(o.$attrs, {
              href: m,
              onClick: w
            }), [
              o.icon ? (B(), z("span", {
                key: 0,
                "data-uk-icon": o.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, b0)) : ft("", !0),
              o.faIcon ? (B(), Ct(c, {
                key: 1,
                class: "uk-margin-small-right",
                icon: o.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : ft("", !0),
              ot(o.$slots, "default", {}, () => [
                At(dt(o.label), 1)
              ])
            ], 16, g0)
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]));
    };
  }
}), w0 = { class: "uk-nav-header" }, y0 = /* @__PURE__ */ wt({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(n) {
    return (i, r) => (B(), z("li", w0, dt(i.label), 1));
  }
}), $0 = {};
function k0(n, i) {
  return B(), z("td", null, [
    ot(n.$slots, "default")
  ]);
}
const x0 = /* @__PURE__ */ Rn($0, [["render", k0]]), S0 = {};
function E0(n, i) {
  return B(), z("th", null, [
    ot(n.$slots, "default")
  ]);
}
const _0 = /* @__PURE__ */ Rn(S0, [["render", E0]]), O0 = {
  class: "uk-child-width-expand",
  "uk-grid": ""
}, T0 = { class: "uk-text-left uk-text-meta" }, C0 = { class: "uk-text-center" }, A0 = ["value"], R0 = { class: "uk-text-right" }, P0 = { "aria-label": "Pagination" }, N0 = {
  class: "uk-pagination uk-flex-right",
  "uk-margin": ""
}, Wu = /* @__PURE__ */ wt({
  __name: "SprunjePaginator",
  props: {
    sprunjer: {},
    rowsPerPageOptions: { default: () => [5, 10, 20, 50] }
  },
  setup(n) {
    const i = n, { size: r, page: o, totalPages: l, countFiltered: c, first: h, last: m } = i.sprunjer;
    function w(g) {
      o.value = g;
    }
    return (g, v) => {
      const _ = qt("font-awesome-icon");
      return B(), z("div", O0, [
        T("div", T0, [
          T("span", null, "Showing " + dt(W(h)) + " - " + dt(W(m)) + " of " + dt(W(c)), 1)
        ]),
        T("div", C0, [
          ae(T("select", {
            class: "uk-select uk-form-small uk-form-width-small",
            "aria-label": "Select per page",
            "onUpdate:modelValue": v[0] || (v[0] = (S) => Sr(r) ? r.value = S : null)
          }, [
            (B(!0), z(vs, null, xr(g.rowsPerPageOptions, (S) => (B(), z("option", {
              key: S,
              value: S
            }, dt(S) + " per page ", 9, A0))), 128))
          ], 512), [
            [zc, W(r)]
          ])
        ]),
        T("div", R0, [
          T("nav", P0, [
            T("ul", N0, [
              T("li", null, [
                T("a", {
                  onClick: v[1] || (v[1] = (S) => w(0)),
                  class: Le(["uk-icon-link", { "uk-disabled": W(o) === 0 }])
                }, [
                  Wt(_, {
                    icon: "angles-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              T("li", null, [
                T("a", {
                  onClick: v[2] || (v[2] = (S) => w(W(o) - 1)),
                  class: Le(["uk-icon-link", { "uk-disabled": W(o) === 0 }])
                }, [
                  Wt(_, {
                    icon: "angle-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              T("li", null, "Page " + dt(W(o) + 1) + " of " + dt(W(l) + 1), 1),
              T("li", null, [
                T("a", {
                  onClick: v[3] || (v[3] = (S) => w(W(o) + 1)),
                  class: Le(["uk-icon-link", { "uk-disabled": W(o) === W(l) }])
                }, [
                  Wt(_, {
                    icon: "angle-right",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              T("li", null, [
                T("a", {
                  onClick: v[4] || (v[4] = (S) => w(W(l))),
                  class: Le(["uk-icon-link", { "uk-disabled": W(o) === W(l) }])
                }, [
                  Wt(_, {
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
});
function Vu(n, i) {
  return function() {
    return n.apply(i, arguments);
  };
}
const { toString: B0 } = Object.prototype, { getPrototypeOf: Ir } = Object, Is = /* @__PURE__ */ ((n) => (i) => {
  const r = B0.call(i);
  return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), we = (n) => (n = n.toLowerCase(), (i) => Is(i) === n), Ds = (n) => (i) => typeof i === n, { isArray: In } = Array, vi = Ds("undefined");
function F0(n) {
  return n !== null && !vi(n) && n.constructor !== null && !vi(n.constructor) && ue(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Ju = we("ArrayBuffer");
function I0(n) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && Ju(n.buffer), i;
}
const D0 = Ds("string"), ue = Ds("function"), Ku = Ds("number"), js = (n) => n !== null && typeof n == "object", j0 = (n) => n === !0 || n === !1, gs = (n) => {
  if (Is(n) !== "object")
    return !1;
  const i = Ir(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}, L0 = we("Date"), U0 = we("File"), M0 = we("Blob"), z0 = we("FileList"), q0 = (n) => js(n) && ue(n.pipe), H0 = (n) => {
  let i;
  return n && (typeof FormData == "function" && n instanceof FormData || ue(n.append) && ((i = Is(n)) === "formdata" || // detect form-data instance
  i === "object" && ue(n.toString) && n.toString() === "[object FormData]"));
}, W0 = we("URLSearchParams"), [V0, J0, K0, G0] = ["ReadableStream", "Request", "Response", "Headers"].map(we), X0 = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Si(n, i, { allOwnKeys: r = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let o, l;
  if (typeof n != "object" && (n = [n]), In(n))
    for (o = 0, l = n.length; o < l; o++)
      i.call(null, n[o], o, n);
  else {
    const c = r ? Object.getOwnPropertyNames(n) : Object.keys(n), h = c.length;
    let m;
    for (o = 0; o < h; o++)
      m = c[o], i.call(null, n[m], m, n);
  }
}
function Gu(n, i) {
  i = i.toLowerCase();
  const r = Object.keys(n);
  let o = r.length, l;
  for (; o-- > 0; )
    if (l = r[o], i === l.toLowerCase())
      return l;
  return null;
}
const an = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xu = (n) => !vi(n) && n !== an;
function gr() {
  const { caseless: n } = Xu(this) && this || {}, i = {}, r = (o, l) => {
    const c = n && Gu(i, l) || l;
    gs(i[c]) && gs(o) ? i[c] = gr(i[c], o) : gs(o) ? i[c] = gr({}, o) : In(o) ? i[c] = o.slice() : i[c] = o;
  };
  for (let o = 0, l = arguments.length; o < l; o++)
    arguments[o] && Si(arguments[o], r);
  return i;
}
const Y0 = (n, i, r, { allOwnKeys: o } = {}) => (Si(i, (l, c) => {
  r && ue(l) ? n[c] = Vu(l, r) : n[c] = l;
}, { allOwnKeys: o }), n), Q0 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), Z0 = (n, i, r, o) => {
  n.prototype = Object.create(i.prototype, o), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: i.prototype
  }), r && Object.assign(n.prototype, r);
}, t1 = (n, i, r, o) => {
  let l, c, h;
  const m = {};
  if (i = i || {}, n == null) return i;
  do {
    for (l = Object.getOwnPropertyNames(n), c = l.length; c-- > 0; )
      h = l[c], (!o || o(h, n, i)) && !m[h] && (i[h] = n[h], m[h] = !0);
    n = r !== !1 && Ir(n);
  } while (n && (!r || r(n, i)) && n !== Object.prototype);
  return i;
}, e1 = (n, i, r) => {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= i.length;
  const o = n.indexOf(i, r);
  return o !== -1 && o === r;
}, n1 = (n) => {
  if (!n) return null;
  if (In(n)) return n;
  let i = n.length;
  if (!Ku(i)) return null;
  const r = new Array(i);
  for (; i-- > 0; )
    r[i] = n[i];
  return r;
}, i1 = /* @__PURE__ */ ((n) => (i) => n && i instanceof n)(typeof Uint8Array < "u" && Ir(Uint8Array)), s1 = (n, i) => {
  const r = (n && n[Symbol.iterator]).call(n);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const l = o.value;
    i.call(n, l[0], l[1]);
  }
}, o1 = (n, i) => {
  let r;
  const o = [];
  for (; (r = n.exec(i)) !== null; )
    o.push(r);
  return o;
}, r1 = we("HTMLFormElement"), a1 = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, r, o) {
    return r.toUpperCase() + o;
  }
), Tc = (({ hasOwnProperty: n }) => (i, r) => n.call(i, r))(Object.prototype), l1 = we("RegExp"), Yu = (n, i) => {
  const r = Object.getOwnPropertyDescriptors(n), o = {};
  Si(r, (l, c) => {
    let h;
    (h = i(l, c, n)) !== !1 && (o[c] = h || l);
  }), Object.defineProperties(n, o);
}, c1 = (n) => {
  Yu(n, (i, r) => {
    if (ue(n) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = n[r];
    if (ue(o)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, u1 = (n, i) => {
  const r = {}, o = (l) => {
    l.forEach((c) => {
      r[c] = !0;
    });
  };
  return In(n) ? o(n) : o(String(n).split(i)), r;
}, h1 = () => {
}, d1 = (n, i) => n != null && Number.isFinite(n = +n) ? n : i, Qo = "abcdefghijklmnopqrstuvwxyz", Cc = "0123456789", Qu = {
  DIGIT: Cc,
  ALPHA: Qo,
  ALPHA_DIGIT: Qo + Qo.toUpperCase() + Cc
}, f1 = (n = 16, i = Qu.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = i;
  for (; n--; )
    r += i[Math.random() * o | 0];
  return r;
};
function p1(n) {
  return !!(n && ue(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator]);
}
const m1 = (n) => {
  const i = new Array(10), r = (o, l) => {
    if (js(o)) {
      if (i.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        i[l] = o;
        const c = In(o) ? [] : {};
        return Si(o, (h, m) => {
          const w = r(h, l + 1);
          !vi(w) && (c[m] = w);
        }), i[l] = void 0, c;
      }
    }
    return o;
  };
  return r(n, 0);
}, g1 = we("AsyncFunction"), b1 = (n) => n && (js(n) || ue(n)) && ue(n.then) && ue(n.catch), Zu = ((n, i) => n ? setImmediate : i ? ((r, o) => (an.addEventListener("message", ({ source: l, data: c }) => {
  l === an && c === r && o.length && o.shift()();
}, !1), (l) => {
  o.push(l), an.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ue(an.postMessage)
), v1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(an) : typeof process < "u" && process.nextTick || Zu, A = {
  isArray: In,
  isArrayBuffer: Ju,
  isBuffer: F0,
  isFormData: H0,
  isArrayBufferView: I0,
  isString: D0,
  isNumber: Ku,
  isBoolean: j0,
  isObject: js,
  isPlainObject: gs,
  isReadableStream: V0,
  isRequest: J0,
  isResponse: K0,
  isHeaders: G0,
  isUndefined: vi,
  isDate: L0,
  isFile: U0,
  isBlob: M0,
  isRegExp: l1,
  isFunction: ue,
  isStream: q0,
  isURLSearchParams: W0,
  isTypedArray: i1,
  isFileList: z0,
  forEach: Si,
  merge: gr,
  extend: Y0,
  trim: X0,
  stripBOM: Q0,
  inherits: Z0,
  toFlatObject: t1,
  kindOf: Is,
  kindOfTest: we,
  endsWith: e1,
  toArray: n1,
  forEachEntry: s1,
  matchAll: o1,
  isHTMLForm: r1,
  hasOwnProperty: Tc,
  hasOwnProp: Tc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Yu,
  freezeMethods: c1,
  toObjectSet: u1,
  toCamelCase: a1,
  noop: h1,
  toFiniteNumber: d1,
  findKey: Gu,
  global: an,
  isContextDefined: Xu,
  ALPHABET: Qu,
  generateString: f1,
  isSpecCompliantForm: p1,
  toJSONObject: m1,
  isAsyncFn: g1,
  isThenable: b1,
  setImmediate: Zu,
  asap: v1
};
function Y(n, i, r, o, l) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), o && (this.request = o), l && (this.response = l, this.status = l.status ? l.status : null);
}
A.inherits(Y, Error, {
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
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const th = Y.prototype, eh = {};
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
].forEach((n) => {
  eh[n] = { value: n };
});
Object.defineProperties(Y, eh);
Object.defineProperty(th, "isAxiosError", { value: !0 });
Y.from = (n, i, r, o, l, c) => {
  const h = Object.create(th);
  return A.toFlatObject(n, h, function(m) {
    return m !== Error.prototype;
  }, (m) => m !== "isAxiosError"), Y.call(h, n.message, i, r, o, l), h.cause = n, h.name = n.name, c && Object.assign(h, c), h;
};
const w1 = null;
function br(n) {
  return A.isPlainObject(n) || A.isArray(n);
}
function nh(n) {
  return A.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Ac(n, i, r) {
  return n ? n.concat(i).map(function(o, l) {
    return o = nh(o), !r && l ? "[" + o + "]" : o;
  }).join(r ? "." : "") : i;
}
function y1(n) {
  return A.isArray(n) && !n.some(br);
}
const $1 = A.toFlatObject(A, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Ls(n, i, r) {
  if (!A.isObject(n))
    throw new TypeError("target must be an object");
  i = i || new FormData(), r = A.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(O, x) {
    return !A.isUndefined(x[O]);
  });
  const o = r.metaTokens, l = r.visitor || g, c = r.dots, h = r.indexes, m = (r.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(i);
  if (!A.isFunction(l))
    throw new TypeError("visitor must be a function");
  function w(O) {
    if (O === null) return "";
    if (A.isDate(O))
      return O.toISOString();
    if (!m && A.isBlob(O))
      throw new Y("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(O) || A.isTypedArray(O) ? m && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O;
  }
  function g(O, x, y) {
    let j = O;
    if (O && !y && typeof O == "object") {
      if (A.endsWith(x, "{}"))
        x = o ? x : x.slice(0, -2), O = JSON.stringify(O);
      else if (A.isArray(O) && y1(O) || (A.isFileList(O) || A.endsWith(x, "[]")) && (j = A.toArray(O)))
        return x = nh(x), j.forEach(function(L, F) {
          !(A.isUndefined(L) || L === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? Ac([x], F, c) : h === null ? x : x + "[]",
            w(L)
          );
        }), !1;
    }
    return br(O) ? !0 : (i.append(Ac(y, x, c), w(O)), !1);
  }
  const v = [], _ = Object.assign($1, {
    defaultVisitor: g,
    convertValue: w,
    isVisitable: br
  });
  function S(O, x) {
    if (!A.isUndefined(O)) {
      if (v.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      v.push(O), A.forEach(O, function(y, j) {
        (!(A.isUndefined(y) || y === null) && l.call(
          i,
          y,
          A.isString(j) ? j.trim() : j,
          x,
          _
        )) === !0 && S(y, x ? x.concat(j) : [j]);
      }), v.pop();
    }
  }
  if (!A.isObject(n))
    throw new TypeError("data must be an object");
  return S(n), i;
}
function Rc(n) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(r) {
    return i[r];
  });
}
function Dr(n, i) {
  this._pairs = [], n && Ls(n, this, i);
}
const ih = Dr.prototype;
ih.append = function(n, i) {
  this._pairs.push([n, i]);
};
ih.toString = function(n) {
  const i = n ? function(r) {
    return n.call(this, r, Rc);
  } : Rc;
  return this._pairs.map(function(r) {
    return i(r[0]) + "=" + i(r[1]);
  }, "").join("&");
};
function k1(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function sh(n, i, r) {
  if (!i)
    return n;
  const o = r && r.encode || k1, l = r && r.serialize;
  let c;
  if (l ? c = l(i, r) : c = A.isURLSearchParams(i) ? i.toString() : new Dr(i, r).toString(o), c) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)), n += (n.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return n;
}
class Pc {
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
  use(i, r, o) {
    return this.handlers.push({
      fulfilled: i,
      rejected: r,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
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
  forEach(i) {
    A.forEach(this.handlers, function(r) {
      r !== null && i(r);
    });
  }
}
const oh = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, x1 = typeof URLSearchParams < "u" ? URLSearchParams : Dr, S1 = typeof FormData < "u" ? FormData : null, E1 = typeof Blob < "u" ? Blob : null, _1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: x1,
    FormData: S1,
    Blob: E1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, jr = typeof window < "u" && typeof document < "u", vr = typeof navigator == "object" && navigator || void 0, O1 = jr && (!vr || ["ReactNative", "NativeScript", "NS"].indexOf(vr.product) < 0), T1 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", C1 = jr && window.location.href || "http://localhost", A1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: jr,
  hasStandardBrowserEnv: O1,
  hasStandardBrowserWebWorkerEnv: T1,
  navigator: vr,
  origin: C1
}, Symbol.toStringTag, { value: "Module" })), te = {
  ...A1,
  ..._1
};
function R1(n, i) {
  return Ls(n, new te.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, l, c) {
      return te.isNode && A.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function P1(n) {
  return A.matchAll(/\w+|\[(\w*)]/g, n).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function N1(n) {
  const i = {}, r = Object.keys(n);
  let o;
  const l = r.length;
  let c;
  for (o = 0; o < l; o++)
    c = r[o], i[c] = n[c];
  return i;
}
function rh(n) {
  function i(r, o, l, c) {
    let h = r[c++];
    if (h === "__proto__") return !0;
    const m = Number.isFinite(+h), w = c >= r.length;
    return h = !h && A.isArray(l) ? l.length : h, w ? (A.hasOwnProp(l, h) ? l[h] = [l[h], o] : l[h] = o, !m) : ((!l[h] || !A.isObject(l[h])) && (l[h] = []), i(r, o, l[h], c) && A.isArray(l[h]) && (l[h] = N1(l[h])), !m);
  }
  if (A.isFormData(n) && A.isFunction(n.entries)) {
    const r = {};
    return A.forEachEntry(n, (o, l) => {
      i(P1(o), l, r, 0);
    }), r;
  }
  return null;
}
function B1(n, i, r) {
  if (A.isString(n))
    try {
      return (i || JSON.parse)(n), A.trim(n);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (0, JSON.stringify)(n);
}
const Ei = {
  transitional: oh,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, i) {
    const r = i.getContentType() || "", o = r.indexOf("application/json") > -1, l = A.isObject(n);
    if (l && A.isHTMLForm(n) && (n = new FormData(n)), A.isFormData(n))
      return o ? JSON.stringify(rh(n)) : n;
    if (A.isArrayBuffer(n) || A.isBuffer(n) || A.isStream(n) || A.isFile(n) || A.isBlob(n) || A.isReadableStream(n))
      return n;
    if (A.isArrayBufferView(n))
      return n.buffer;
    if (A.isURLSearchParams(n))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let c;
    if (l) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return R1(n, this.formSerializer).toString();
      if ((c = A.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return Ls(
          c ? { "files[]": n } : n,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return l || o ? (i.setContentType("application/json", !1), B1(n)) : n;
  }],
  transformResponse: [function(n) {
    const i = this.transitional || Ei.transitional, r = i && i.forcedJSONParsing, o = this.responseType === "json";
    if (A.isResponse(n) || A.isReadableStream(n))
      return n;
    if (n && A.isString(n) && (r && !this.responseType || o)) {
      const l = !(i && i.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (c) {
        if (l)
          throw c.name === "SyntaxError" ? Y.from(c, Y.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return n;
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
    FormData: te.classes.FormData,
    Blob: te.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Ei.headers[n] = {};
});
const F1 = A.toObjectSet([
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
]), I1 = (n) => {
  const i = {};
  let r, o, l;
  return n && n.split(`
`).forEach(function(c) {
    l = c.indexOf(":"), r = c.substring(0, l).trim().toLowerCase(), o = c.substring(l + 1).trim(), !(!r || i[r] && F1[r]) && (r === "set-cookie" ? i[r] ? i[r].push(o) : i[r] = [o] : i[r] = i[r] ? i[r] + ", " + o : o);
  }), i;
}, Nc = Symbol("internals");
function pi(n) {
  return n && String(n).trim().toLowerCase();
}
function bs(n) {
  return n === !1 || n == null ? n : A.isArray(n) ? n.map(bs) : String(n);
}
function D1(n) {
  const i = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(n); )
    i[o[1]] = o[2];
  return i;
}
const j1 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Zo(n, i, r, o, l) {
  if (A.isFunction(o))
    return o.call(this, i, r);
  if (l && (i = r), !!A.isString(i)) {
    if (A.isString(o))
      return i.indexOf(o) !== -1;
    if (A.isRegExp(o))
      return o.test(i);
  }
}
function L1(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, r, o) => r.toUpperCase() + o);
}
function U1(n, i) {
  const r = A.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(n, o + r, {
      value: function(l, c, h) {
        return this[o].call(this, i, l, c, h);
      },
      configurable: !0
    });
  });
}
class ee {
  constructor(i) {
    i && this.set(i);
  }
  set(i, r, o) {
    const l = this;
    function c(m, w, g) {
      const v = pi(w);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const _ = A.findKey(l, v);
      (!_ || l[_] === void 0 || g === !0 || g === void 0 && l[_] !== !1) && (l[_ || w] = bs(m));
    }
    const h = (m, w) => A.forEach(m, (g, v) => c(g, v, w));
    if (A.isPlainObject(i) || i instanceof this.constructor)
      h(i, r);
    else if (A.isString(i) && (i = i.trim()) && !j1(i))
      h(I1(i), r);
    else if (A.isHeaders(i))
      for (const [m, w] of i.entries())
        c(w, m, o);
    else
      i != null && c(r, i, o);
    return this;
  }
  get(i, r) {
    if (i = pi(i), i) {
      const o = A.findKey(this, i);
      if (o) {
        const l = this[o];
        if (!r)
          return l;
        if (r === !0)
          return D1(l);
        if (A.isFunction(r))
          return r.call(this, l, o);
        if (A.isRegExp(r))
          return r.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, r) {
    if (i = pi(i), i) {
      const o = A.findKey(this, i);
      return !!(o && this[o] !== void 0 && (!r || Zo(this, this[o], o, r)));
    }
    return !1;
  }
  delete(i, r) {
    const o = this;
    let l = !1;
    function c(h) {
      if (h = pi(h), h) {
        const m = A.findKey(o, h);
        m && (!r || Zo(o, o[m], m, r)) && (delete o[m], l = !0);
      }
    }
    return A.isArray(i) ? i.forEach(c) : c(i), l;
  }
  clear(i) {
    const r = Object.keys(this);
    let o = r.length, l = !1;
    for (; o--; ) {
      const c = r[o];
      (!i || Zo(this, this[c], c, i, !0)) && (delete this[c], l = !0);
    }
    return l;
  }
  normalize(i) {
    const r = this, o = {};
    return A.forEach(this, (l, c) => {
      const h = A.findKey(o, c);
      if (h) {
        r[h] = bs(l), delete r[c];
        return;
      }
      const m = i ? L1(c) : String(c).trim();
      m !== c && delete r[c], r[m] = bs(l), o[m] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const r = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (o, l) => {
      o != null && o !== !1 && (r[l] = i && A.isArray(o) ? o.join(", ") : o);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, r]) => i + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...r) {
    const o = new this(i);
    return r.forEach((l) => o.set(l)), o;
  }
  static accessor(i) {
    const r = (this[Nc] = this[Nc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function l(c) {
      const h = pi(c);
      r[h] || (U1(o, c), r[h] = !0);
    }
    return A.isArray(i) ? i.forEach(l) : l(i), this;
  }
}
ee.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(ee.prototype, ({ value: n }, i) => {
  let r = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(o) {
      this[r] = o;
    }
  };
});
A.freezeMethods(ee);
function tr(n, i) {
  const r = this || Ei, o = i || r, l = ee.from(o.headers);
  let c = o.data;
  return A.forEach(n, function(h) {
    c = h.call(r, c, l.normalize(), i ? i.status : void 0);
  }), l.normalize(), c;
}
function ah(n) {
  return !!(n && n.__CANCEL__);
}
function Dn(n, i, r) {
  Y.call(this, n ?? "canceled", Y.ERR_CANCELED, i, r), this.name = "CanceledError";
}
A.inherits(Dn, Y, {
  __CANCEL__: !0
});
function lh(n, i, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? n(r) : i(new Y(
    "Request failed with status code " + r.status,
    [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function M1(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return i && i[1] || "";
}
function z1(n, i) {
  n = n || 10;
  const r = new Array(n), o = new Array(n);
  let l = 0, c = 0, h;
  return i = i !== void 0 ? i : 1e3, function(m) {
    const w = Date.now(), g = o[c];
    h || (h = w), r[l] = m, o[l] = w;
    let v = c, _ = 0;
    for (; v !== l; )
      _ += r[v++], v = v % n;
    if (l = (l + 1) % n, l === c && (c = (c + 1) % n), w - h < i)
      return;
    const S = g && w - g;
    return S ? Math.round(_ * 1e3 / S) : void 0;
  };
}
function q1(n, i) {
  let r = 0, o = 1e3 / i, l, c;
  const h = (m, w = Date.now()) => {
    r = w, l = null, c && (clearTimeout(c), c = null), n.apply(null, m);
  };
  return [(...m) => {
    const w = Date.now(), g = w - r;
    g >= o ? h(m, w) : (l = m, c || (c = setTimeout(() => {
      c = null, h(l);
    }, o - g)));
  }, () => l && h(l)];
}
const xs = (n, i, r = 3) => {
  let o = 0;
  const l = z1(50, 250);
  return q1((c) => {
    const h = c.loaded, m = c.lengthComputable ? c.total : void 0, w = h - o, g = l(w), v = h <= m;
    o = h;
    const _ = {
      loaded: h,
      total: m,
      progress: m ? h / m : void 0,
      bytes: w,
      rate: g || void 0,
      estimated: g && m && v ? (m - h) / g : void 0,
      event: c,
      lengthComputable: m != null,
      [i ? "download" : "upload"]: !0
    };
    n(_);
  }, r);
}, Bc = (n, i) => {
  const r = n != null;
  return [(o) => i[0]({
    lengthComputable: r,
    total: n,
    loaded: o
  }), i[1]];
}, Fc = (n) => (...i) => A.asap(() => n(...i)), H1 = te.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = te.navigator && /(msie|trident)/i.test(te.navigator.userAgent), i = document.createElement("a");
    let r;
    function o(l) {
      let c = l;
      return n && (i.setAttribute("href", c), c = i.href), i.setAttribute("href", c), {
        href: i.href,
        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
        host: i.host,
        search: i.search ? i.search.replace(/^\?/, "") : "",
        hash: i.hash ? i.hash.replace(/^#/, "") : "",
        hostname: i.hostname,
        port: i.port,
        pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
      };
    }
    return r = o(window.location.href), function(l) {
      const c = A.isString(l) ? o(l) : l;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), W1 = te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, i, r, o, l, c) {
      const h = [n + "=" + encodeURIComponent(i)];
      A.isNumber(r) && h.push("expires=" + new Date(r).toGMTString()), A.isString(o) && h.push("path=" + o), A.isString(l) && h.push("domain=" + l), c === !0 && h.push("secure"), document.cookie = h.join("; ");
    },
    read(n) {
      const i = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return i ? decodeURIComponent(i[3]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5);
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
function V1(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function J1(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function ch(n, i) {
  return n && !V1(i) ? J1(n, i) : i;
}
const Ic = (n) => n instanceof ee ? { ...n } : n;
function fn(n, i) {
  i = i || {};
  const r = {};
  function o(g, v, _) {
    return A.isPlainObject(g) && A.isPlainObject(v) ? A.merge.call({ caseless: _ }, g, v) : A.isPlainObject(v) ? A.merge({}, v) : A.isArray(v) ? v.slice() : v;
  }
  function l(g, v, _) {
    if (A.isUndefined(v)) {
      if (!A.isUndefined(g))
        return o(void 0, g, _);
    } else return o(g, v, _);
  }
  function c(g, v) {
    if (!A.isUndefined(v))
      return o(void 0, v);
  }
  function h(g, v) {
    if (A.isUndefined(v)) {
      if (!A.isUndefined(g))
        return o(void 0, g);
    } else return o(void 0, v);
  }
  function m(g, v, _) {
    if (_ in i)
      return o(g, v);
    if (_ in n)
      return o(void 0, g);
  }
  const w = {
    url: c,
    method: c,
    data: c,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: m,
    headers: (g, v) => l(Ic(g), Ic(v), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, n, i)), function(g) {
    const v = w[g] || l, _ = v(n[g], i[g], g);
    A.isUndefined(_) && v !== m || (r[g] = _);
  }), r;
}
const uh = (n) => {
  const i = fn({}, n);
  let { data: r, withXSRFToken: o, xsrfHeaderName: l, xsrfCookieName: c, headers: h, auth: m } = i;
  i.headers = h = ee.from(h), i.url = sh(ch(i.baseURL, i.url), n.params, n.paramsSerializer), m && h.set(
    "Authorization",
    "Basic " + btoa((m.username || "") + ":" + (m.password ? unescape(encodeURIComponent(m.password)) : ""))
  );
  let w;
  if (A.isFormData(r)) {
    if (te.hasStandardBrowserEnv || te.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if ((w = h.getContentType()) !== !1) {
      const [g, ...v] = w ? w.split(";").map((_) => _.trim()).filter(Boolean) : [];
      h.setContentType([g || "multipart/form-data", ...v].join("; "));
    }
  }
  if (te.hasStandardBrowserEnv && (o && A.isFunction(o) && (o = o(i)), o || o !== !1 && H1(i.url))) {
    const g = l && c && W1.read(c);
    g && h.set(l, g);
  }
  return i;
}, K1 = typeof XMLHttpRequest < "u", G1 = K1 && function(n) {
  return new Promise(function(i, r) {
    const o = uh(n);
    let l = o.data;
    const c = ee.from(o.headers).normalize();
    let { responseType: h, onUploadProgress: m, onDownloadProgress: w } = o, g, v, _, S, O;
    function x() {
      S && S(), O && O(), o.cancelToken && o.cancelToken.unsubscribe(g), o.signal && o.signal.removeEventListener("abort", g);
    }
    let y = new XMLHttpRequest();
    y.open(o.method.toUpperCase(), o.url, !0), y.timeout = o.timeout;
    function j() {
      if (!y)
        return;
      const F = ee.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), H = {
        data: !h || h === "text" || h === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: F,
        config: n,
        request: y
      };
      lh(function(yt) {
        i(yt), x();
      }, function(yt) {
        r(yt), x();
      }, H), y = null;
    }
    "onloadend" in y ? y.onloadend = j : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(j);
    }, y.onabort = function() {
      y && (r(new Y("Request aborted", Y.ECONNABORTED, n, y)), y = null);
    }, y.onerror = function() {
      r(new Y("Network Error", Y.ERR_NETWORK, n, y)), y = null;
    }, y.ontimeout = function() {
      let F = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const H = o.transitional || oh;
      o.timeoutErrorMessage && (F = o.timeoutErrorMessage), r(new Y(
        F,
        H.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
        n,
        y
      )), y = null;
    }, l === void 0 && c.setContentType(null), "setRequestHeader" in y && A.forEach(c.toJSON(), function(F, H) {
      y.setRequestHeader(H, F);
    }), A.isUndefined(o.withCredentials) || (y.withCredentials = !!o.withCredentials), h && h !== "json" && (y.responseType = o.responseType), w && ([_, O] = xs(w, !0), y.addEventListener("progress", _)), m && y.upload && ([v, S] = xs(m), y.upload.addEventListener("progress", v), y.upload.addEventListener("loadend", S)), (o.cancelToken || o.signal) && (g = (F) => {
      y && (r(!F || F.type ? new Dn(null, n, y) : F), y.abort(), y = null);
    }, o.cancelToken && o.cancelToken.subscribe(g), o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
    const L = M1(o.url);
    if (L && te.protocols.indexOf(L) === -1) {
      r(new Y("Unsupported protocol " + L + ":", Y.ERR_BAD_REQUEST, n));
      return;
    }
    y.send(l || null);
  });
}, X1 = (n, i) => {
  const { length: r } = n = n ? n.filter(Boolean) : [];
  if (i || r) {
    let o = new AbortController(), l;
    const c = function(g) {
      if (!l) {
        l = !0, m();
        const v = g instanceof Error ? g : this.reason;
        o.abort(v instanceof Y ? v : new Dn(v instanceof Error ? v.message : v));
      }
    };
    let h = i && setTimeout(() => {
      h = null, c(new Y(`timeout ${i} of ms exceeded`, Y.ETIMEDOUT));
    }, i);
    const m = () => {
      n && (h && clearTimeout(h), h = null, n.forEach((g) => {
        g.unsubscribe ? g.unsubscribe(c) : g.removeEventListener("abort", c);
      }), n = null);
    };
    n.forEach((g) => g.addEventListener("abort", c));
    const { signal: w } = o;
    return w.unsubscribe = () => A.asap(m), w;
  }
}, Y1 = function* (n, i) {
  let r = n.byteLength;
  if (r < i) {
    yield n;
    return;
  }
  let o = 0, l;
  for (; o < r; )
    l = o + i, yield n.slice(o, l), o = l;
}, Q1 = async function* (n, i) {
  for await (const r of Z1(n))
    yield* Y1(r, i);
}, Z1 = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const i = n.getReader();
  try {
    for (; ; ) {
      const { done: r, value: o } = await i.read();
      if (r)
        break;
      yield o;
    }
  } finally {
    await i.cancel();
  }
}, Dc = (n, i, r, o) => {
  const l = Q1(n, i);
  let c = 0, h, m = (w) => {
    h || (h = !0, o && o(w));
  };
  return new ReadableStream({
    async pull(w) {
      try {
        const { done: g, value: v } = await l.next();
        if (g) {
          m(), w.close();
          return;
        }
        let _ = v.byteLength;
        if (r) {
          let S = c += _;
          r(S);
        }
        w.enqueue(new Uint8Array(v));
      } catch (g) {
        throw m(g), g;
      }
    },
    cancel(w) {
      return m(w), l.return();
    }
  }, {
    highWaterMark: 2
  });
}, Us = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", hh = Us && typeof ReadableStream == "function", t$ = Us && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (i) => n.encode(i))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), dh = (n, ...i) => {
  try {
    return !!n(...i);
  } catch {
    return !1;
  }
}, e$ = hh && dh(() => {
  let n = !1;
  const i = new Request(te.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !i;
}), jc = 64 * 1024, wr = hh && dh(() => A.isReadableStream(new Response("").body)), Ss = {
  stream: wr && ((n) => n.body)
};
Us && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !Ss[i] && (Ss[i] = A.isFunction(n[i]) ? (r) => r[i]() : (r, o) => {
      throw new Y(`Response type '${i}' is not supported`, Y.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const n$ = async (n) => {
  if (n == null)
    return 0;
  if (A.isBlob(n))
    return n.size;
  if (A.isSpecCompliantForm(n))
    return (await new Request(te.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (A.isArrayBufferView(n) || A.isArrayBuffer(n))
    return n.byteLength;
  if (A.isURLSearchParams(n) && (n = n + ""), A.isString(n))
    return (await t$(n)).byteLength;
}, i$ = async (n, i) => A.toFiniteNumber(n.getContentLength()) ?? n$(i), s$ = Us && (async (n) => {
  let {
    url: i,
    method: r,
    data: o,
    signal: l,
    cancelToken: c,
    timeout: h,
    onDownloadProgress: m,
    onUploadProgress: w,
    responseType: g,
    headers: v,
    withCredentials: _ = "same-origin",
    fetchOptions: S
  } = uh(n);
  g = g ? (g + "").toLowerCase() : "text";
  let O = X1([l, c && c.toAbortSignal()], h), x;
  const y = O && O.unsubscribe && (() => {
    O.unsubscribe();
  });
  let j;
  try {
    if (w && e$ && r !== "get" && r !== "head" && (j = await i$(v, o)) !== 0) {
      let bt = new Request(i, {
        method: "POST",
        body: o,
        duplex: "half"
      }), pt;
      if (A.isFormData(o) && (pt = bt.headers.get("content-type")) && v.setContentType(pt), bt.body) {
        const [Tt, It] = Bc(
          j,
          xs(Fc(w))
        );
        o = Dc(bt.body, jc, Tt, It);
      }
    }
    A.isString(_) || (_ = _ ? "include" : "omit");
    const L = "credentials" in Request.prototype;
    x = new Request(i, {
      ...S,
      signal: O,
      method: r.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: L ? _ : void 0
    });
    let F = await fetch(x);
    const H = wr && (g === "stream" || g === "response");
    if (wr && (m || H && y)) {
      const bt = {};
      ["status", "statusText", "headers"].forEach((Dt) => {
        bt[Dt] = F[Dt];
      });
      const pt = A.toFiniteNumber(F.headers.get("content-length")), [Tt, It] = m && Bc(
        pt,
        xs(Fc(m), !0)
      ) || [];
      F = new Response(
        Dc(F.body, jc, Tt, () => {
          It && It(), y && y();
        }),
        bt
      );
    }
    g = g || "text";
    let yt = await Ss[A.findKey(Ss, g) || "text"](F, n);
    return !H && y && y(), await new Promise((bt, pt) => {
      lh(bt, pt, {
        data: yt,
        headers: ee.from(F.headers),
        status: F.status,
        statusText: F.statusText,
        config: n,
        request: x
      });
    });
  } catch (L) {
    throw y && y(), L && L.name === "TypeError" && /fetch/i.test(L.message) ? Object.assign(
      new Y("Network Error", Y.ERR_NETWORK, n, x),
      {
        cause: L.cause || L
      }
    ) : Y.from(L, L && L.code, n, x);
  }
}), yr = {
  http: w1,
  xhr: G1,
  fetch: s$
};
A.forEach(yr, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const Lc = (n) => `- ${n}`, o$ = (n) => A.isFunction(n) || n === null || n === !1, fh = {
  getAdapter: (n) => {
    n = A.isArray(n) ? n : [n];
    const { length: i } = n;
    let r, o;
    const l = {};
    for (let c = 0; c < i; c++) {
      r = n[c];
      let h;
      if (o = r, !o$(r) && (o = yr[(h = String(r)).toLowerCase()], o === void 0))
        throw new Y(`Unknown adapter '${h}'`);
      if (o)
        break;
      l[h || "#" + c] = o;
    }
    if (!o) {
      const c = Object.entries(l).map(
        ([m, w]) => `adapter ${m} ` + (w === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let h = i ? c.length > 1 ? `since :
` + c.map(Lc).join(`
`) : " " + Lc(c[0]) : "as no adapter specified";
      throw new Y(
        "There is no suitable adapter to dispatch the request " + h,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: yr
};
function er(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Dn(null, n);
}
function Uc(n) {
  return er(n), n.headers = ee.from(n.headers), n.data = tr.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), fh.getAdapter(n.adapter || Ei.adapter)(n).then(function(i) {
    return er(n), i.data = tr.call(
      n,
      n.transformResponse,
      i
    ), i.headers = ee.from(i.headers), i;
  }, function(i) {
    return ah(i) || (er(n), i && i.response && (i.response.data = tr.call(
      n,
      n.transformResponse,
      i.response
    ), i.response.headers = ee.from(i.response.headers))), Promise.reject(i);
  });
}
const ph = "1.7.7", Lr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, i) => {
  Lr[n] = function(r) {
    return typeof r === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
const Mc = {};
Lr.transitional = function(n, i, r) {
  function o(l, c) {
    return "[Axios v" + ph + "] Transitional option '" + l + "'" + c + (r ? ". " + r : "");
  }
  return (l, c, h) => {
    if (n === !1)
      throw new Y(
        o(c, " has been removed" + (i ? " in " + i : "")),
        Y.ERR_DEPRECATED
      );
    return i && !Mc[c] && (Mc[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), n ? n(l, c, h) : !0;
  };
};
function r$(n, i, r) {
  if (typeof n != "object")
    throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(n);
  let l = o.length;
  for (; l-- > 0; ) {
    const c = o[l], h = i[c];
    if (h) {
      const m = n[c], w = m === void 0 || h(m, c, n);
      if (w !== !0)
        throw new Y("option " + c + " must be " + w, Y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Y("Unknown option " + c, Y.ERR_BAD_OPTION);
  }
}
const $r = {
  assertOptions: r$,
  validators: Lr
}, je = $r.validators;
class un {
  constructor(i) {
    this.defaults = i, this.interceptors = {
      request: new Pc(),
      response: new Pc()
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
  async request(i, r) {
    try {
      return await this._request(i, r);
    } catch (o) {
      if (o instanceof Error) {
        let l;
        Error.captureStackTrace ? Error.captureStackTrace(l = {}) : l = new Error();
        const c = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? c && !String(o.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + c) : o.stack = c;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(i, r) {
    typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = fn(this.defaults, r);
    const { transitional: o, paramsSerializer: l, headers: c } = r;
    o !== void 0 && $r.assertOptions(o, {
      silentJSONParsing: je.transitional(je.boolean),
      forcedJSONParsing: je.transitional(je.boolean),
      clarifyTimeoutError: je.transitional(je.boolean)
    }, !1), l != null && (A.isFunction(l) ? r.paramsSerializer = {
      serialize: l
    } : $r.assertOptions(l, {
      encode: je.function,
      serialize: je.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let h = c && A.merge(
      c.common,
      c[r.method]
    );
    c && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (x) => {
        delete c[x];
      }
    ), r.headers = ee.concat(h, c);
    const m = [];
    let w = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(r) === !1 || (w = w && x.synchronous, m.unshift(x.fulfilled, x.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(x) {
      g.push(x.fulfilled, x.rejected);
    });
    let v, _ = 0, S;
    if (!w) {
      const x = [Uc.bind(this), void 0];
      for (x.unshift.apply(x, m), x.push.apply(x, g), S = x.length, v = Promise.resolve(r); _ < S; )
        v = v.then(x[_++], x[_++]);
      return v;
    }
    S = m.length;
    let O = r;
    for (_ = 0; _ < S; ) {
      const x = m[_++], y = m[_++];
      try {
        O = x(O);
      } catch (j) {
        y.call(this, j);
        break;
      }
    }
    try {
      v = Uc.call(this, O);
    } catch (x) {
      return Promise.reject(x);
    }
    for (_ = 0, S = g.length; _ < S; )
      v = v.then(g[_++], g[_++]);
    return v;
  }
  getUri(i) {
    i = fn(this.defaults, i);
    const r = ch(i.baseURL, i.url);
    return sh(r, i.params, i.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(n) {
  un.prototype[n] = function(i, r) {
    return this.request(fn(r || {}, {
      method: n,
      url: i,
      data: (r || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(n) {
  function i(r) {
    return function(o, l, c) {
      return this.request(fn(c || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: l
      }));
    };
  }
  un.prototype[n] = i(), un.prototype[n + "Form"] = i(!0);
});
class Ur {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(l) {
      r = l;
    });
    const o = this;
    this.promise.then((l) => {
      if (!o._listeners) return;
      let c = o._listeners.length;
      for (; c-- > 0; )
        o._listeners[c](l);
      o._listeners = null;
    }), this.promise.then = (l) => {
      let c;
      const h = new Promise((m) => {
        o.subscribe(m), c = m;
      }).then(l);
      return h.cancel = function() {
        o.unsubscribe(c);
      }, h;
    }, i(function(l, c, h) {
      o.reason || (o.reason = new Dn(l, c, h), r(o.reason));
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
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(i) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(i);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const i = new AbortController(), r = (o) => {
      i.abort(o);
    };
    return this.subscribe(r), i.signal.unsubscribe = () => this.unsubscribe(r), i.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let i;
    return {
      token: new Ur(function(r) {
        i = r;
      }),
      cancel: i
    };
  }
}
function a$(n) {
  return function(i) {
    return n.apply(null, i);
  };
}
function l$(n) {
  return A.isObject(n) && n.isAxiosError === !0;
}
const kr = {
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
Object.entries(kr).forEach(([n, i]) => {
  kr[i] = n;
});
function mh(n) {
  const i = new un(n), r = Vu(un.prototype.request, i);
  return A.extend(r, un.prototype, i, { allOwnKeys: !0 }), A.extend(r, i, null, { allOwnKeys: !0 }), r.create = function(o) {
    return mh(fn(n, o));
  }, r;
}
const Pt = mh(Ei);
Pt.Axios = un;
Pt.CanceledError = Dn;
Pt.CancelToken = Ur;
Pt.isCancel = ah;
Pt.VERSION = ph;
Pt.toFormData = Ls;
Pt.AxiosError = Y;
Pt.Cancel = Pt.CanceledError;
Pt.all = function(n) {
  return Promise.all(n);
};
Pt.spread = a$;
Pt.isAxiosError = l$;
Pt.mergeConfig = fn;
Pt.AxiosHeaders = ee;
Pt.formToJSON = (n) => rh(A.isHTMLForm(n) ? new FormData(n) : n);
Pt.getAdapter = fh.getAdapter;
Pt.HttpStatusCode = kr;
Pt.default = Pt;
const c$ = (n) => {
  const i = Xt(10), r = Xt(0), o = Xt({}), l = Xt({}), c = Xt({}), h = Xt(!1);
  async function m() {
    h.value = !0, Pt.get(Am(n), {
      params: {
        size: i.value,
        page: r.value,
        sorts: o.value,
        filters: l.value
      }
    }).then((y) => {
      c.value = y.data, h.value = !1;
    }).catch((y) => {
      console.error(y);
    });
  }
  const w = Gt(() => Math.ceil(c.value.count_filtered / i.value) - 1), g = Gt(() => c.value.count), v = Gt(() => r.value * i.value + 1), _ = Gt(() => Math.min((r.value + 1) * i.value, g.value)), S = Gt(() => c.value.count_filtered), O = Gt(() => c.value.rows);
  function x() {
    console.log("Not yet implemented");
  }
  return Cm(() => {
    m();
  }), {
    dataUrl: n,
    size: i,
    page: r,
    sorts: o,
    filters: l,
    data: c,
    fetch: m,
    loading: h,
    downloadCsv: x,
    totalPages: w,
    countFiltered: S,
    count: g,
    rows: O,
    first: v,
    last: _
  };
}, u$ = { class: "uk-table uk-table-striped" }, h$ = /* @__PURE__ */ wt({
  __name: "SprunjeTable",
  props: {
    dataUrl: {
      type: String,
      required: !0
    },
    hidePagination: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    const r = c$(n.dataUrl), { rows: o, fetch: l, loading: c } = r;
    return (h, m) => (B(), z(vs, null, [
      ot(h.$slots, "actions", {
        sprunjer: { fetch: W(l), loading: W(c) }
      }),
      T("table", u$, [
        T("thead", null, [
          T("tr", null, [
            ot(h.$slots, "header")
          ])
        ]),
        T("tbody", null, [
          (B(!0), z(vs, null, xr(W(o), (w) => (B(), z("tr", {
            key: w.id
          }, [
            ot(h.$slots, "body", { item: w })
          ]))), 128))
        ])
      ]),
      n.hidePagination ? ft("", !0) : ot(h.$slots, "paginator", { key: 0 }, () => [
        Wt(Wu, { sprunjer: W(r) }, null, 8, ["sprunjer"])
      ])
    ], 64));
  }
}), $$ = {
  install: (n) => {
    n.component("UFAlertContainer", Bm).component("UFAppLink", Er).component("UFInfoBox", Hm).component("UFCardBox", Xm).component("UFCardBoxBig", Zm).component("UFMainContent", sg).component("UFHeaderPage", lg).component("UFFooterContent", fg).component("UFFormLogin", Ar).component("UFFormRegister", qu).component("UFFormForgotPassword", Hu).component("UFNavBar", wy).component("UFNavBarDropdown", Fr).component("UFNavBarDropdownSeparator", _y).component("UFNavBarItem", Ay).component("UFNavBarLogin", Py).component("UFNavBarUserCard", Ly).component("UFNavBarUserCardButton", qy).component("UFPageLogin", Vy).component("UFPageRegister", Ky).component("UFPageForgotPassword", Gy).component("UFPageResendVerification", n0).component("UFSideBar", l0).component("UFSideBarDropdown", d0).component("UFSideBarItem", v0).component("UFSideBarLabel", y0).component("UFSprunjeColumn", x0).component("UFSprunjeHeader", _0).component("UFSprunjePaginator", Wu).component("UFSprunjeTable", h$);
  }
};
export {
  h$ as A,
  fg as F,
  sg as M,
  _y as N,
  $$ as P,
  l0 as S,
  Wc as U,
  Bm as _,
  Er as a,
  Hm as b,
  pg as c,
  Xm as d,
  Zm as e,
  lg as f,
  mg as g,
  Ar as h,
  qu as i,
  Hu as j,
  wy as k,
  Fr as l,
  Ay as m,
  Py as n,
  Ly as o,
  qy as p,
  Vy as q,
  Ky as r,
  Gy as s,
  n0 as t,
  d0 as u,
  v0 as v,
  y0 as w,
  x0 as x,
  _0 as y,
  Wu as z
};
