import { defineComponent as yt, computed as Gt, resolveComponent as Ht, openBlock as F, createElementBlock as H, normalizeClass as Ue, createCommentVNode as mt, createBlock as At, createTextVNode as Ct, toDisplayString as pt, renderSlot as ot, unref as W, withCtx as Mt, createElementVNode as O, createVNode as Wt, createSlots as _m, ref as ae, withModifiers as Ei, withDirectives as re, vModelText as me, Fragment as wi, renderList as xr, vModelSelect as Hc, isRef as Sr, mergeProps as ms, normalizeProps as Om, guardReactiveProps as Tm, watchEffect as Am, toValue as Cm } from "vue";
import { RouterLink as vs } from "vue-router";
import { defineStore as qc } from "pinia";
var _e = /* @__PURE__ */ ((n) => (n.Primary = "Primary", n.Success = "Success", n.Warning = "Warning", n.Danger = "Danger", n))(_e || {});
const Rm = {
  key: 1,
  "data-test": "title"
}, Pm = {
  key: 2,
  "data-test": "description"
}, Nm = ["innerHTML"], Bm = /* @__PURE__ */ yt({
  __name: "AlertContainer",
  props: {
    alert: {}
  },
  setup(n) {
    const s = n, o = Gt(() => {
      switch (s.alert.style) {
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
    }), r = Gt(() => {
      switch (s.alert.style) {
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
    return (l, u) => {
      const h = Ht("font-awesome-icon");
      return F(), H("div", {
        class: Ue([o.value, "uk-alert"]),
        "uk-alert": ""
      }, [
        l.alert.closeBtn ? (F(), H("a", {
          key: 0,
          "data-test": "closeBtn",
          class: "uk-alert-close",
          "uk-close": "",
          onClick: u[0] || (u[0] = (p) => l.$emit("close"))
        })) : mt("", !0),
        l.alert.title ? (F(), H("h3", Rm, [
          l.alert.hideIcon ? mt("", !0) : (F(), At(h, {
            key: 0,
            icon: r.value,
            class: "uk-icon"
          }, null, 8, ["icon"])),
          Ct(" " + pt(l.alert.title), 1)
        ])) : mt("", !0),
        l.$slots.default ? (F(), H("p", Pm, [
          ot(l.$slots, "default")
        ])) : l.alert.description ? (F(), H("p", {
          key: 3,
          innerHTML: l.alert.description,
          "data-test": "description"
        }, null, 8, Nm)) : mt("", !0)
      ], 2);
    };
  }
}), Fm = ["href"], Im = { key: 1 }, Er = /* @__PURE__ */ yt({
  __name: "AppLink",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const s = n, o = Gt(() => typeof s.to == "string" && s.to.startsWith("http")), r = Gt(() => s.to), l = Gt(() => s.to === "");
    return (u, h) => o.value ? (F(), H("a", {
      key: 0,
      href: r.value,
      target: "_blank"
    }, [
      ot(u.$slots, "default", {}, () => [
        Ct(pt(u.label), 1)
      ])
    ], 8, Fm)) : l.value ? (F(), H("div", Im, [
      ot(u.$slots, "default", {}, () => [
        Ct(pt(u.label), 1)
      ])
    ])) : (F(), At(W(vs), {
      key: 2,
      to: u.to
    }, {
      default: Mt(() => [
        ot(u.$slots, "default", {}, () => [
          Ct(pt(u.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["to"]));
  }
}), Dm = { class: "uk-card uk-card-default uk-card-body uk-card-small" }, Lm = {
  class: "uk-grid-small uk-flex-middle",
  "uk-grid": ""
}, Um = {
  key: 0,
  class: "uk-width-auto"
}, jm = ["data-uk-icon"], Mm = { class: "uk-width-expand" }, zm = {
  key: 0,
  class: "uk-margin-remove"
}, Hm = {
  key: 1,
  class: "uk-text-meta uk-text-uppercase"
}, qm = /* @__PURE__ */ yt({
  __name: "InfoBox",
  props: {
    to: { default: "" },
    label: { default: null },
    value: { default: null },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(n) {
    return (s, o) => {
      const r = Ht("font-awesome-icon");
      return F(), At(Er, {
        to: s.to,
        class: "uk-text-decoration-none"
      }, {
        default: Mt(() => [
          O("div", Dm, [
            O("div", Lm, [
              s.icon || s.faIcon ? (F(), H("div", Um, [
                s.icon ? (F(), H("span", {
                  key: 0,
                  "data-uk-icon": "icon: " + s.icon + "; ratio: 2",
                  class: "uk-margin-small-right"
                }, null, 8, jm)) : mt("", !0),
                s.faIcon ? (F(), At(r, {
                  key: 1,
                  icon: s.faIcon,
                  size: "2xl",
                  "fixed-width": ""
                }, null, 8, ["icon"])) : mt("", !0)
              ])) : mt("", !0),
              O("div", Mm, [
                s.value !== null ? (F(), H("h4", zm, pt(s.value), 1)) : mt("", !0),
                s.label !== null ? (F(), H("span", Hm, pt(s.label), 1)) : mt("", !0)
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
}, Xm = /* @__PURE__ */ yt({
  __name: "CardBox",
  props: {
    title: String
  },
  setup(n) {
    return (s, o) => (F(), H("div", Wm, [
      n.title || s.$slots.header ? (F(), H("div", Vm, [
        O("h4", Jm, [
          ot(s.$slots, "header", {}, () => [
            Ct(pt(n.title), 1)
          ])
        ])
      ])) : mt("", !0),
      O("div", Km, [
        ot(s.$slots, "default")
      ]),
      s.$slots.footer ? (F(), H("div", Gm, [
        ot(s.$slots, "footer")
      ])) : mt("", !0)
    ]));
  }
}), Ym = { class: "uk-flex uk-flex-center uk-flex-middle" }, Qm = { class: "uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl" }, Zm = /* @__PURE__ */ yt({
  __name: "CardBoxBig",
  props: {
    title: String
  },
  setup(n) {
    return (s, o) => {
      const r = Ht("UFCardBox");
      return F(), H("div", Ym, [
        O("div", Qm, [
          Wt(r, null, _m({
            default: Mt(() => [
              ot(s.$slots, "default")
            ]),
            _: 2
          }, [
            s.$slots.header || n.title ? {
              name: "header",
              fn: Mt(() => [
                ot(s.$slots, "header", {}, () => [
                  Ct(pt(n.title), 1)
                ])
              ]),
              key: "0"
            } : void 0,
            s.$slots.footer ? {
              name: "footer",
              fn: Mt(() => [
                ot(s.$slots, "footer")
              ]),
              key: "1"
            } : void 0
          ]), 1024)
        ])
      ]);
    };
  }
}), Rn = (n, s) => {
  const o = n.__vccOpts || n;
  for (const [r, l] of s)
    o[r] = l;
  return o;
}, tg = {}, eg = {
  class: "uf-main uk-section uk-section-default uk-section-muted",
  "uk-height-viewport": "expand: true"
}, ng = {
  class: "uk-container",
  "data-test": "slot"
};
function sg(n, s) {
  return F(), H("div", eg, [
    O("div", ng, [
      ot(n.$slots, "default")
    ])
  ]);
}
const ig = /* @__PURE__ */ Rn(tg, [["render", sg]]), og = { class: "uf-page-header" }, rg = { class: "uk-margin-remove" }, ag = {
  key: 0,
  class: "uk-text-meta uk-margin-remove"
}, lg = /* @__PURE__ */ yt({
  __name: "HeaderPage",
  props: {
    title: {},
    caption: { default: "" }
  },
  setup(n) {
    return (s, o) => (F(), H("div", og, [
      O("h3", rg, pt(s.title), 1),
      s.caption ? (F(), H("p", ag, pt(s.caption), 1)) : mt("", !0)
    ]));
  }
}), cg = {}, ug = { class: "uf-main uk-section uk-section-small uk-section-muted uk-text-center" }, hg = {
  class: "uk-text-small uk-text-center",
  "data-test": "slot"
};
function dg(n, s) {
  return F(), H("footer", ug, [
    s[0] || (s[0] = O("hr", null, null, -1)),
    O("p", hg, [
      ot(n.$slots, "default")
    ])
  ]);
}
const fg = /* @__PURE__ */ Rn(cg, [["render", dg]]);
var pg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mg(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Wc = { exports: {} };
/*! UIkit 3.21.13 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */
(function(n, s) {
  (function(o, r) {
    n.exports = r();
  })(pg, function() {
    const { hasOwnProperty: o, toString: r } = Object.prototype;
    function l(t, e) {
      return o.call(t, e);
    }
    const u = /\B([A-Z])/g, h = he((t) => t.replace(u, "-$1").toLowerCase()), p = /-(\w)/g, v = he(
      (t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(p, (e, i) => i.toUpperCase())
    ), g = he((t) => t.charAt(0).toUpperCase() + t.slice(1));
    function b(t, e) {
      var i;
      return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e);
    }
    function x(t, e) {
      var i;
      return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e);
    }
    function E(t, e) {
      var i;
      return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e);
    }
    function P(t, e) {
      var i;
      return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e);
    }
    const { isArray: y, from: S } = Array, { assign: N } = Object;
    function D(t) {
      return typeof t == "function";
    }
    function U(t) {
      return t !== null && typeof t == "object";
    }
    function z(t) {
      return r.call(t) === "[object Object]";
    }
    function gt(t) {
      return U(t) && t === t.window;
    }
    function at(t) {
      return It(t) === 9;
    }
    function ut(t) {
      return It(t) >= 1;
    }
    function kt(t) {
      return It(t) === 1;
    }
    function It(t) {
      return !gt(t) && U(t) && t.nodeType;
    }
    function Dt(t) {
      return typeof t == "boolean";
    }
    function bt(t) {
      return typeof t == "string";
    }
    function Ln(t) {
      return typeof t == "number";
    }
    function ye(t) {
      return Ln(t) || bt(t) && !isNaN(t - parseFloat(t));
    }
    function _s(t) {
      return !(y(t) ? t.length : U(t) && Object.keys(t).length);
    }
    function Lt(t) {
      return t === void 0;
    }
    function Mi(t) {
      return Dt(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function xe(t) {
      const e = Number(t);
      return isNaN(e) ? !1 : e;
    }
    function Q(t) {
      return parseFloat(t) || 0;
    }
    function Et(t) {
      return t && nt(t)[0];
    }
    function nt(t) {
      return ut(t) ? [t] : Array.from(t || []).filter(ut);
    }
    function je(t) {
      if (gt(t))
        return t;
      t = Et(t);
      const e = at(t) ? t : t == null ? void 0 : t.ownerDocument;
      return (e == null ? void 0 : e.defaultView) || window;
    }
    function Un(t, e) {
      return t === e || U(t) && U(e) && Object.keys(t).length === Object.keys(e).length && pn(t, (i, a) => i === e[a]);
    }
    function zi(t, e, i) {
      return t.replace(new RegExp(`${e}|${i}`, "g"), (a) => a === e ? i : e);
    }
    function Me(t) {
      return t[t.length - 1];
    }
    function pn(t, e) {
      for (const i in t)
        if (e(t[i], i) === !1)
          return !1;
      return !0;
    }
    function zr(t, e) {
      return t.slice().sort(
        ({ [e]: i = 0 }, { [e]: a = 0 }) => i > a ? 1 : a > i ? -1 : 0
      );
    }
    function ze(t, e) {
      return t.reduce(
        (i, a) => i + Q(D(e) ? e(a) : a[e]),
        0
      );
    }
    function Hr(t, e) {
      const i = /* @__PURE__ */ new Set();
      return t.filter(({ [e]: a }) => i.has(a) ? !1 : i.add(a));
    }
    function Hi(t, e) {
      return e.reduce((i, a) => ({ ...i, [a]: t[a] }), {});
    }
    function zt(t, e = 0, i = 1) {
      return Math.min(Math.max(xe(t) || 0, e), i);
    }
    function lt() {
    }
    function Os(...t) {
      return [
        ["bottom", "top"],
        ["right", "left"]
      ].every(
        ([e, i]) => Math.min(...t.map(({ [e]: a }) => a)) - Math.max(...t.map(({ [i]: a }) => a)) > 0
      );
    }
    function Ts(t, e) {
      return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function qi(t, e, i) {
      const a = e === "width" ? "height" : "width";
      return {
        [a]: t[e] ? Math.round(i * t[a] / t[e]) : t[a],
        [e]: i
      };
    }
    function qr(t, e) {
      t = { ...t };
      for (const i in t)
        t = t[i] > e[i] ? qi(t, i, e[i]) : t;
      return t;
    }
    function gh(t, e) {
      t = qr(t, e);
      for (const i in t)
        t = t[i] < e[i] ? qi(t, i, e[i]) : t;
      return t;
    }
    const Wi = { ratio: qi, contain: qr, cover: gh };
    function ee(t, e, i = 0, a = !1) {
      e = nt(e);
      const { length: c } = e;
      return c ? (t = ye(t) ? xe(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? c - 1 : e.indexOf(Et(t)), a ? zt(t, 0, c - 1) : (t %= c, t < 0 ? t + c : t)) : -1;
    }
    function he(t) {
      const e = /* @__PURE__ */ Object.create(null);
      return (i, ...a) => e[i] || (e[i] = t(i, ...a));
    }
    function Z(t, ...e) {
      for (const i of nt(t)) {
        const a = He(e).filter((c) => !V(i, c));
        a.length && i.classList.add(...a);
      }
    }
    function rt(t, ...e) {
      for (const i of nt(t)) {
        const a = He(e).filter((c) => V(i, c));
        a.length && i.classList.remove(...a);
      }
    }
    function As(t, e, i) {
      i = He(i), e = He(e).filter((a) => !E(i, a)), rt(t, e), Z(t, i);
    }
    function V(t, e) {
      return [e] = He(e), nt(t).some((i) => i.classList.contains(e));
    }
    function _t(t, e, i) {
      const a = He(e);
      Lt(i) || (i = !!i);
      for (const c of nt(t))
        for (const d of a)
          c.classList.toggle(d, i);
    }
    function He(t) {
      return t ? y(t) ? t.map(He).flat() : String(t).split(" ").filter(Boolean) : [];
    }
    function L(t, e, i) {
      var a;
      if (U(e)) {
        for (const c in e)
          L(t, c, e[c]);
        return;
      }
      if (Lt(i))
        return (a = Et(t)) == null ? void 0 : a.getAttribute(e);
      for (const c of nt(t))
        D(i) && (i = i.call(c, L(c, e))), i === null ? jn(c, e) : c.setAttribute(e, i);
    }
    function Te(t, e) {
      return nt(t).some((i) => i.hasAttribute(e));
    }
    function jn(t, e) {
      nt(t).forEach((i) => i.removeAttribute(e));
    }
    function Ut(t, e) {
      for (const i of [e, `data-${e}`])
        if (Te(t, i))
          return L(t, i);
    }
    const qe = typeof window < "u", Nt = qe && document.dir === "rtl", mn = qe && "ontouchstart" in window, gn = qe && window.PointerEvent, de = gn ? "pointerdown" : mn ? "touchstart" : "mousedown", Cs = gn ? "pointermove" : mn ? "touchmove" : "mousemove", Ae = gn ? "pointerup" : mn ? "touchend" : "mouseup", We = gn ? "pointerenter" : mn ? "" : "mouseenter", bn = gn ? "pointerleave" : mn ? "" : "mouseleave", Rs = gn ? "pointercancel" : "touchcancel", bh = {
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
    function Vi(t) {
      return nt(t).some((e) => bh[e.tagName.toLowerCase()]);
    }
    const wh = qe && Element.prototype.checkVisibility || function() {
      return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
    };
    function Ot(t) {
      return nt(t).some((e) => wh.call(e));
    }
    const Mn = "input,select,textarea,button";
    function Ps(t) {
      return nt(t).some((e) => st(e, Mn));
    }
    const zn = `${Mn},a[href],[tabindex]`;
    function Ns(t) {
      return st(t, zn);
    }
    function ht(t) {
      var e;
      return (e = Et(t)) == null ? void 0 : e.parentElement;
    }
    function Hn(t, e) {
      return nt(t).filter((i) => st(i, e));
    }
    function st(t, e) {
      return nt(t).some((i) => i.matches(e));
    }
    function qn(t, e) {
      const i = [];
      for (; t = ht(t); )
        (!e || st(t, e)) && i.push(t);
      return i;
    }
    function dt(t, e) {
      t = Et(t);
      const i = t ? S(t.children) : [];
      return e ? Hn(i, e) : i;
    }
    function Se(t, e) {
      return e ? nt(t).indexOf(Et(e)) : dt(ht(t)).indexOf(t);
    }
    function wn(t) {
      return t = Et(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
    }
    function Ji(t) {
      if (wn(t)) {
        const { hash: e, ownerDocument: i } = Et(t), a = decodeURIComponent(e).slice(1);
        return i.getElementById(a) || i.getElementsByName(a)[0];
      }
    }
    function qt(t, e) {
      return Ki(t, Wr(t, e));
    }
    function Wn(t, e) {
      return Vn(t, Wr(t, e));
    }
    function Ki(t, e) {
      return Et(Kr(t, Et(e), "querySelector"));
    }
    function Vn(t, e) {
      return nt(Kr(t, Et(e), "querySelectorAll"));
    }
    function Wr(t, e = document) {
      return at(e) || Vr(t).isContextSelector ? e : e.ownerDocument;
    }
    const vh = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, yh = /(\([^)]*\)|[^,])+/g, Vr = he((t) => {
      let e = !1;
      if (!t || !bt(t))
        return {};
      const i = [];
      for (let a of t.match(yh))
        a = a.trim().replace(vh, "$1 *"), e || (e = ["!", "+", "~", "-", ">"].includes(a[0])), i.push(a);
      return {
        selector: i.join(","),
        selectors: i,
        isContextSelector: e
      };
    }), kh = /(\([^)]*\)|\S)*/, Jr = he((t) => {
      t = t.slice(1).trim();
      const [e] = t.match(kh);
      return [e, t.slice(e.length + 1)];
    });
    function Kr(t, e = document, i) {
      const a = Vr(t);
      if (!a.isContextSelector)
        return a.selector ? Gi(e, i, a.selector) : t;
      t = "";
      const c = a.selectors.length === 1;
      for (let d of a.selectors) {
        let f, m = e;
        if (d[0] === "!" && ([f, d] = Jr(d), m = e.parentElement.closest(f), !d && c) || m && d[0] === "-" && ([f, d] = Jr(d), m = m.previousElementSibling, m = st(m, f) ? m : null, !d && c))
          return m;
        if (m) {
          if (c)
            return d[0] === "~" || d[0] === "+" ? (d = `:scope > :nth-child(${Se(m) + 1}) ${d}`, m = m.parentElement) : d[0] === ">" && (d = `:scope ${d}`), Gi(m, i, d);
          t += `${t ? "," : ""}${$h(m)} ${d}`;
        }
      }
      return at(e) || (e = e.ownerDocument), Gi(e, i, t);
    }
    function Gi(t, e, i) {
      try {
        return t[e](i);
      } catch {
        return null;
      }
    }
    function $h(t) {
      const e = [];
      for (; t.parentNode; ) {
        const i = L(t, "id");
        if (i) {
          e.unshift(`#${Xi(i)}`);
          break;
        } else {
          let { tagName: a } = t;
          a !== "HTML" && (a += `:nth-child(${Se(t) + 1})`), e.unshift(a), t = t.parentNode;
        }
      }
      return e.join(" > ");
    }
    function Xi(t) {
      return bt(t) ? CSS.escape(t) : "";
    }
    function J(...t) {
      let [e, i, a, c, d = !1] = Yi(t);
      c.length > 1 && (c = Sh(c)), d != null && d.self && (c = Eh(c)), a && (c = xh(a, c));
      for (const f of i)
        for (const m of e)
          m.addEventListener(f, c, d);
      return () => Ce(e, i, c, d);
    }
    function Ce(...t) {
      let [e, i, , a, c = !1] = Yi(t);
      for (const d of i)
        for (const f of e)
          f.removeEventListener(d, a, c);
    }
    function $t(...t) {
      const [e, i, a, c, d = !1, f] = Yi(t), m = J(
        e,
        i,
        a,
        (w) => {
          const $ = !f || f(w);
          $ && (m(), c(w, $));
        },
        d
      );
      return m;
    }
    function M(t, e, i) {
      return Qi(t).every(
        (a) => a.dispatchEvent(vn(e, !0, !0, i))
      );
    }
    function vn(t, e = !0, i = !1, a) {
      return bt(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: i, detail: a })), t;
    }
    function Yi(t) {
      return t[0] = Qi(t[0]), bt(t[1]) && (t[1] = t[1].split(" ")), D(t[2]) && t.splice(2, 0, !1), t;
    }
    function xh(t, e) {
      return (i) => {
        const a = t[0] === ">" ? Vn(t, i.currentTarget).reverse().find((c) => c.contains(i.target)) : i.target.closest(t);
        a && (i.current = a, e.call(this, i), delete i.current);
      };
    }
    function Sh(t) {
      return (e) => y(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function Eh(t) {
      return function(e) {
        if (e.target === e.currentTarget || e.target === e.current)
          return t.call(null, e);
      };
    }
    function Gr(t) {
      return t && "addEventListener" in t;
    }
    function _h(t) {
      return Gr(t) ? t : Et(t);
    }
    function Qi(t) {
      return y(t) ? t.map(_h).filter(Boolean) : bt(t) ? Vn(t) : Gr(t) ? [t] : nt(t);
    }
    function pe(t) {
      return t.pointerType === "touch" || !!t.touches;
    }
    function Ee(t) {
      var e, i;
      const { clientX: a, clientY: c } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
      return { x: a, y: c };
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
    function k(t, e, i, a) {
      const c = nt(t);
      for (const d of c)
        if (bt(e)) {
          if (e = Bs(e), Lt(i))
            return getComputedStyle(d).getPropertyValue(e);
          d.style.setProperty(
            e,
            ye(i) && !Oh[e] ? `${i}px` : i || Ln(i) ? i : "",
            a
          );
        } else if (y(e)) {
          const f = {};
          for (const m of e)
            f[m] = k(d, m);
          return f;
        } else if (U(e))
          for (const f in e)
            k(d, f, e[f], i);
      return c[0];
    }
    const Bs = he((t) => {
      if (b(t, "--"))
        return t;
      t = h(t);
      const { style: e } = document.documentElement;
      if (t in e)
        return t;
      for (const i of ["webkit", "moz"]) {
        const a = `-${i}-${t}`;
        if (a in e)
          return a;
      }
    }), Zi = "uk-transition", to = "transitionend", eo = "transitioncanceled";
    function Th(t, e, i = 400, a = "linear") {
      return i = Math.round(i), Promise.all(
        nt(t).map(
          (c) => new Promise((d, f) => {
            for (const w in e)
              k(c, w);
            const m = setTimeout(() => M(c, to), i);
            $t(
              c,
              [to, eo],
              ({ type: w }) => {
                clearTimeout(m), rt(c, Zi), k(c, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
                }), w === eo ? f() : d(c);
              },
              { self: !0 }
            ), Z(c, Zi), k(c, {
              transitionProperty: Object.keys(e).map(Bs).join(","),
              transitionDuration: `${i}ms`,
              transitionTimingFunction: a,
              ...e
            });
          })
        )
      );
    }
    const ft = {
      start: Th,
      async stop(t) {
        M(t, to), await Promise.resolve();
      },
      async cancel(t) {
        M(t, eo), await Promise.resolve();
      },
      inProgress(t) {
        return V(t, Zi);
      }
    }, Jn = "uk-animation", Xr = "animationend", Fs = "animationcanceled";
    function Yr(t, e, i = 200, a, c) {
      return Promise.all(
        nt(t).map(
          (d) => new Promise((f, m) => {
            V(d, Jn) && M(d, Fs);
            const w = [
              e,
              Jn,
              `${Jn}-${c ? "leave" : "enter"}`,
              a && `uk-transform-origin-${a}`,
              c && `${Jn}-reverse`
            ], $ = setTimeout(() => M(d, Xr), i);
            $t(
              d,
              [Xr, Fs],
              ({ type: _ }) => {
                clearTimeout($), _ === Fs ? m() : f(d), k(d, "animationDuration", ""), rt(d, w);
              },
              { self: !0 }
            ), k(d, "animationDuration", `${i}ms`), Z(d, w);
          })
        )
      );
    }
    const Re = {
      in: Yr,
      out(t, e, i, a) {
        return Yr(t, e, i, a, !0);
      },
      inProgress(t) {
        return V(t, Jn);
      },
      cancel(t) {
        M(t, Fs);
      }
    };
    function Ah(t) {
      if (document.readyState !== "loading") {
        t();
        return;
      }
      $t(document, "DOMContentLoaded", t);
    }
    function xt(t, ...e) {
      return e.some((i) => {
        var a;
        return ((a = t == null ? void 0 : t.tagName) == null ? void 0 : a.toLowerCase()) === i.toLowerCase();
      });
    }
    function Qr(t) {
      return t = K(t), t.innerHTML = "", t;
    }
    function Pe(t, e) {
      return Lt(e) ? K(t).innerHTML : Tt(Qr(t), e);
    }
    const Ch = Ls("prepend"), Tt = Ls("append"), Is = Ls("before"), Ds = Ls("after");
    function Ls(t) {
      return function(e, i) {
        var a;
        const c = nt(bt(i) ? Ve(i) : i);
        return (a = K(e)) == null || a[t](...c), Zr(c);
      };
    }
    function ne(t) {
      nt(t).forEach((e) => e.remove());
    }
    function Us(t, e) {
      for (e = Et(Is(t, e)); e.firstElementChild; )
        e = e.firstElementChild;
      return Tt(e, t), e;
    }
    function no(t, e) {
      return nt(
        nt(t).map(
          (i) => i.hasChildNodes() ? Us(S(i.childNodes), e) : Tt(i, e)
        )
      );
    }
    function Kn(t) {
      nt(t).map(ht).filter((e, i, a) => a.indexOf(e) === i).forEach((e) => e.replaceWith(...e.childNodes));
    }
    const Rh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function Ve(t) {
      const e = Rh.exec(t);
      if (e)
        return document.createElement(e[1]);
      const i = document.createElement("template");
      return i.innerHTML = t.trim(), Zr(i.content.childNodes);
    }
    function Zr(t) {
      return t.length > 1 ? t : t[0];
    }
    function Ne(t, e) {
      if (kt(t))
        for (e(t), t = t.firstElementChild; t; )
          Ne(t, e), t = t.nextElementSibling;
    }
    function K(t, e) {
      return ta(t) ? Et(Ve(t)) : Ki(t, e);
    }
    function wt(t, e) {
      return ta(t) ? nt(Ve(t)) : Vn(t, e);
    }
    function ta(t) {
      return bt(t) && b(t.trim(), "<");
    }
    const Je = {
      width: ["left", "right"],
      height: ["top", "bottom"]
    };
    function j(t) {
      const e = kt(t) ? Et(t).getBoundingClientRect() : { height: Vt(t), width: js(t), top: 0, left: 0 };
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
      e && k(t, { left: 0, top: 0 });
      const i = j(t);
      if (t) {
        const { scrollY: a, scrollX: c } = je(t), d = { height: a, width: c };
        for (const f in Je)
          for (const m of Je[f])
            i[m] += d[f];
      }
      if (!e)
        return i;
      for (const a of ["left", "top"])
        k(t, a, e[a] - i[a]);
    }
    function so(t) {
      let { top: e, left: i } = et(t);
      const {
        ownerDocument: { body: a, documentElement: c },
        offsetParent: d
      } = Et(t);
      let f = d || c;
      for (; f && (f === a || f === c) && k(f, "position") === "static"; )
        f = f.parentNode;
      if (kt(f)) {
        const m = et(f);
        e -= m.top + Q(k(f, "borderTopWidth")), i -= m.left + Q(k(f, "borderLeftWidth"));
      }
      return {
        top: e - Q(k(t, "marginTop")),
        left: i - Q(k(t, "marginLeft"))
      };
    }
    function Gn(t) {
      t = Et(t);
      const e = [t.offsetTop, t.offsetLeft];
      for (; t = t.offsetParent; )
        if (e[0] += t.offsetTop + Q(k(t, "borderTopWidth")), e[1] += t.offsetLeft + Q(k(t, "borderLeftWidth")), k(t, "position") === "fixed") {
          const i = je(t);
          return e[0] += i.scrollY, e[1] += i.scrollX, e;
        }
      return e;
    }
    const Vt = ea("height"), js = ea("width");
    function ea(t) {
      const e = g(t);
      return (i, a) => {
        if (Lt(a)) {
          if (gt(i))
            return i[`inner${e}`];
          if (at(i)) {
            const c = i.documentElement;
            return Math.max(c[`offset${e}`], c[`scroll${e}`]);
          }
          return i = Et(i), a = k(i, t), a = a === "auto" ? i[`offset${e}`] : Q(a) || 0, a - yn(i, t);
        } else
          return k(
            i,
            t,
            !a && a !== 0 ? "" : +a + yn(i, t) + "px"
          );
      };
    }
    function yn(t, e, i = "border-box") {
      return k(t, "boxSizing") === i ? ze(
        Je[e],
        (a) => Q(k(t, `padding-${a}`)) + Q(k(t, `border-${a}-width`))
      ) : 0;
    }
    function Ms(t) {
      for (const e in Je)
        for (const i in Je[e])
          if (Je[e][i] === t)
            return Je[e][1 - i];
      return t;
    }
    function Ft(t, e = "width", i = window, a = !1) {
      return bt(t) ? ze(Nh(t), (c) => {
        const d = Fh(c);
        return d ? Ih(
          d === "vh" ? Dh() : d === "vw" ? js(je(i)) : a ? i[`offset${g(e)}`] : j(i)[e],
          c
        ) : c;
      }) : Q(t);
    }
    const Ph = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, Nh = he((t) => t.toString().replace(/\s/g, "").match(Ph) || []), Bh = /(?:v[hw]|%)$/, Fh = he((t) => (t.match(Bh) || [])[0]);
    function Ih(t, e) {
      return t * Q(e) / 100;
    }
    let Xn, kn;
    function Dh() {
      return Xn || (kn || (kn = K("<div>"), k(kn, {
        height: "100vh",
        position: "fixed"
      }), J(window, "resize", () => Xn = null)), Tt(document.body, kn), Xn = kn.clientHeight, ne(kn), Xn);
    }
    const Be = { read: Lh, write: Uh, clear: jh, flush: na }, zs = [], Hs = [];
    function Lh(t) {
      return zs.push(t), oo(), t;
    }
    function Uh(t) {
      return Hs.push(t), oo(), t;
    }
    function jh(t) {
      ia(zs, t), ia(Hs, t);
    }
    let io = !1;
    function na() {
      sa(zs), sa(Hs.splice(0)), io = !1, (zs.length || Hs.length) && oo();
    }
    function oo() {
      io || (io = !0, queueMicrotask(na));
    }
    function sa(t) {
      let e;
      for (; e = t.shift(); )
        try {
          e();
        } catch (i) {
          console.error(i);
        }
    }
    function ia(t, e) {
      const i = t.indexOf(e);
      return ~i && t.splice(i, 1);
    }
    class oa {
      init() {
        this.positions = [];
        let e;
        this.unbind = J(document, "mousemove", (i) => e = Ee(i)), this.interval = setInterval(() => {
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
        const i = j(e), { left: a, right: c, top: d, bottom: f } = i, [m] = this.positions, w = Me(this.positions), $ = [m, w];
        return Ts(w, i) ? !1 : [
          [
            { x: a, y: d },
            { x: c, y: f }
          ],
          [
            { x: a, y: f },
            { x: c, y: d }
          ]
        ].some((R) => {
          const B = Mh($, R);
          return B && Ts(B, i);
        });
      }
    }
    function Mh([{ x: t, y: e }, { x: i, y: a }], [{ x: c, y: d }, { x: f, y: m }]) {
      const w = (m - d) * (i - t) - (f - c) * (a - e);
      if (w === 0)
        return !1;
      const $ = ((f - c) * (e - d) - (m - d) * (t - c)) / w;
      return $ < 0 ? !1 : { x: t + $ * (i - t), y: e + $ * (a - e) };
    }
    function ra(t, e, i = {}, { intersecting: a = !0 } = {}) {
      const c = new IntersectionObserver(
        a ? (d, f) => {
          d.some((m) => m.isIntersecting) && e(d, f);
        } : e,
        i
      );
      for (const d of nt(t))
        c.observe(d);
      return c;
    }
    const zh = qe && window.ResizeObserver;
    function Yn(t, e, i = { box: "border-box" }) {
      if (zh)
        return aa(ResizeObserver, t, e, i);
      const a = [J(window, "load resize", e), J(document, "loadedmetadata load", e, !0)];
      return { disconnect: () => a.map((c) => c()) };
    }
    function ro(t) {
      return { disconnect: J([window, window.visualViewport], "resize", t) };
    }
    function ao(t, e, i) {
      return aa(MutationObserver, t, e, i);
    }
    function aa(t, e, i, a) {
      const c = new t(i);
      for (const d of nt(e))
        c.observe(d, a);
      return c;
    }
    function lo(t) {
      Vs(t) && co(t, { func: "playVideo", method: "play" }), Ws(t) && t.play().catch(lt);
    }
    function qs(t) {
      Vs(t) && co(t, { func: "pauseVideo", method: "pause" }), Ws(t) && t.pause();
    }
    function la(t) {
      Vs(t) && co(t, { func: "mute", method: "setVolume", value: 0 }), Ws(t) && (t.muted = !0);
    }
    function ca(t) {
      return Ws(t) || Vs(t);
    }
    function Ws(t) {
      return xt(t, "video");
    }
    function Vs(t) {
      return xt(t, "iframe") && (ua(t) || ha(t));
    }
    function ua(t) {
      return !!t.src.match(
        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
      );
    }
    function ha(t) {
      return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function co(t, e) {
      await qh(t), da(t, e);
    }
    function da(t, e) {
      t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
    }
    const uo = "_ukPlayer";
    let Hh = 0;
    function qh(t) {
      if (t[uo])
        return t[uo];
      const e = ua(t), i = ha(t), a = ++Hh;
      let c;
      return t[uo] = new Promise((d) => {
        e && $t(t, "load", () => {
          const f = () => da(t, { event: "listening", id: a });
          c = setInterval(f, 100), f();
        }), $t(window, "message", d, !1, ({ data: f }) => {
          try {
            return f = JSON.parse(f), e && (f == null ? void 0 : f.id) === a && f.event === "onReady" || i && Number(f == null ? void 0 : f.player_id) === a;
          } catch {
          }
        }), t.src = `${t.src}${E(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${a}`}`;
      }).then(() => clearInterval(c));
    }
    function Wh(t, e = 0, i = 0) {
      return Ot(t) ? Os(
        ...Ge(t).map((a) => {
          const { top: c, left: d, bottom: f, right: m } = se(a);
          return {
            top: c - e,
            left: d - i,
            bottom: f + e,
            right: m + i
          };
        }).concat(et(t))
      ) : !1;
    }
    function fa(t, { offset: e = 0 } = {}) {
      const i = Ot(t) ? Ke(t, !1, ["hidden"]) : [];
      return i.reduce(
        (f, m, w) => {
          const { scrollTop: $, scrollHeight: _, offsetHeight: R } = m, B = se(m), I = _ - B.height, { height: q, top: tt } = i[w - 1] ? se(i[w - 1]) : et(t);
          let it = Math.ceil(tt - B.top - e + $);
          return e > 0 && R < q + e ? it += e : e = 0, it > I ? (e -= it - I, it = I) : it < 0 && (e -= it, it = 0), () => a(m, it - $, t, I).then(f);
        },
        () => Promise.resolve()
      )();
      function a(f, m, w, $) {
        return new Promise((_) => {
          const R = f.scrollTop, B = c(Math.abs(m)), I = Date.now(), q = po(f) === f, tt = et(w).top + (q ? 0 : R);
          let it = 0, ke = 15;
          (function An() {
            const Cn = d(zt((Date.now() - I) / B));
            let $e = 0;
            i[0] === f && R + m < $ && ($e = et(w).top + (q ? 0 : f.scrollTop) - tt - j(ho(w)).height), k(f, "scrollBehavior") !== "auto" && k(f, "scrollBehavior", "auto"), f.scrollTop = R + (m + $e) * Cn, k(f, "scrollBehavior", ""), Cn === 1 && (it === $e || !ke--) ? _() : (it = $e, requestAnimationFrame(An));
          })();
        });
      }
      function c(f) {
        return 40 * Math.pow(f, 0.375);
      }
      function d(f) {
        return 0.5 * (1 - Math.cos(Math.PI * f));
      }
    }
    function Js(t, e = 0, i = 0) {
      if (!Ot(t))
        return 0;
      const a = Fe(t, !0), { scrollHeight: c, scrollTop: d } = a, { height: f } = se(a), m = c - f, w = Gn(t)[0] - Gn(a)[0], $ = Math.max(0, w - f + e), _ = Math.min(m, w + t.offsetHeight - i);
      return $ < _ ? zt((d - $) / (_ - $)) : 1;
    }
    function Ke(t, e = !1, i = []) {
      const a = po(t);
      let c = qn(t).reverse();
      c = c.slice(c.indexOf(a) + 1);
      const d = P(c, (f) => k(f, "position") === "fixed");
      return ~d && (c = c.slice(d)), [a].concat(
        c.filter(
          (f) => k(f, "overflow").split(" ").some((m) => E(["auto", "scroll", ...i], m)) && (!e || f.scrollHeight > se(f).height)
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
      const e = je(t), i = po(t), a = !ut(t) || t.contains(i);
      if (a && e.visualViewport) {
        let { height: w, width: $, scale: _, pageTop: R, pageLeft: B } = e.visualViewport;
        return w = Math.round(w * _), $ = Math.round($ * _), { height: w, width: $, top: R, left: B, bottom: R + w, right: B + $ };
      }
      let c = et(a ? e : t);
      if (k(t, "display") === "inline")
        return c;
      const { body: d, documentElement: f } = e.document, m = a ? i === f || // In quirks mode the scrolling element is body, even though the viewport is html
      i.clientHeight < d.clientHeight ? i : d : t;
      for (let [w, $, _, R] of [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
      ]) {
        const B = c[w] % 1;
        c[_] += Q(k(m, `border-${_}-width`)), c[w] = c[$] = m[`client${g(w)}`] - (B ? B < 0.5 ? -B : 1 - B : 0), c[R] = c[w] + c[_];
      }
      return c;
    }
    function ho(t) {
      const { left: e, width: i, top: a } = j(t);
      for (const c of a ? [0, a] : [0]) {
        let d;
        for (const f of je(t).document.elementsFromPoint(e + i / 2, c))
          !f.contains(t) && // If e.g. Offcanvas is not yet closed
          !V(f, "uk-togglable-leave") && (fo(f, "fixed") && pa(
            qn(t).reverse().find(
              (m) => !m.contains(f) && !fo(m, "static")
            )
          ) < pa(f) || fo(f, "sticky") && ht(f).contains(t)) && (!d || j(d).height < j(f).height) && (d = f);
        if (d)
          return d;
      }
    }
    function pa(t) {
      return Q(k(t, "zIndex"));
    }
    function fo(t, e) {
      return k(t, "position") === e;
    }
    function po(t) {
      return je(t).document.scrollingElement;
    }
    const ie = [
      ["width", "x", "left", "right"],
      ["height", "y", "top", "bottom"]
    ];
    function ma(t, e, i) {
      i = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...i.attach
        },
        offset: [0, 0],
        placement: [],
        ...i
      }, y(e) || (e = [e, e]), et(t, ga(t, e, i));
    }
    function ga(t, e, i) {
      const a = ba(t, e, i), { boundary: c, viewportOffset: d = 0, placement: f } = i;
      let m = a;
      for (const [w, [$, , _, R]] of Object.entries(ie)) {
        const B = Vh(t, e[w], d, c, w);
        if (Ks(a, B, w))
          continue;
        let I = 0;
        if (f[w] === "flip") {
          const q = i.attach.target[w];
          if (q === R && a[R] <= B[R] || q === _ && a[_] >= B[_])
            continue;
          I = Kh(t, e, i, w)[_] - a[_];
          const tt = Jh(t, e[w], d, w);
          if (!Ks(mo(a, I, w), tt, w)) {
            if (Ks(a, tt, w))
              continue;
            if (i.recursion)
              return !1;
            const it = Gh(t, e, i);
            if (it && Ks(it, tt, 1 - w))
              return it;
            continue;
          }
        } else if (f[w] === "shift") {
          const q = et(e[w]), { offset: tt } = i;
          I = zt(
            zt(a[_], B[_], B[R] - a[$]),
            q[_] - a[$] + tt[w],
            q[R] - tt[w]
          ) - a[_];
        }
        m = mo(m, I, w);
      }
      return m;
    }
    function ba(t, e, i) {
      let { attach: a, offset: c } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...i.attach
        },
        offset: [0, 0],
        ...i
      }, d = et(t);
      for (const [f, [m, , w, $]] of Object.entries(ie)) {
        const _ = a.target[f] === a.element[f] ? se(e[f]) : et(e[f]);
        d = mo(
          d,
          _[w] - d[w] + wa(a.target[f], $, _[m]) - wa(a.element[f], $, d[m]) + +c[f],
          f
        );
      }
      return d;
    }
    function mo(t, e, i) {
      const [, a, c, d] = ie[i], f = { ...t };
      return f[c] = t[a] = t[c] + e, f[d] += e, f;
    }
    function wa(t, e, i) {
      return t === "center" ? i / 2 : t === e ? i : 0;
    }
    function Vh(t, e, i, a, c) {
      let d = ya(...va(t, e).map(se));
      return i && (d[ie[c][2]] += i, d[ie[c][3]] -= i), a && (d = ya(
        d,
        et(y(a) ? a[c] : a)
      )), d;
    }
    function Jh(t, e, i, a) {
      const [c, d, f, m] = ie[a], [w] = va(t, e), $ = se(w);
      return ["auto", "scroll"].includes(k(w, `overflow-${d}`)) && ($[f] -= w[`scroll${g(f)}`], $[m] = $[f] + w[`scroll${g(c)}`]), $[f] += i, $[m] -= i, $;
    }
    function va(t, e) {
      return Ge(e).filter((i) => i.contains(t));
    }
    function ya(...t) {
      let e = {};
      for (const i of t)
        for (const [, , a, c] of ie)
          e[a] = Math.max(e[a] || 0, i[a]), e[c] = Math.min(...[e[c], i[c]].filter(Boolean));
      return e;
    }
    function Ks(t, e, i) {
      const [, , a, c] = ie[i];
      return t[a] >= e[a] && t[c] <= e[c];
    }
    function Kh(t, e, { offset: i, attach: a }, c) {
      return ba(t, e, {
        attach: {
          element: ka(a.element, c),
          target: ka(a.target, c)
        },
        offset: Xh(i, c)
      });
    }
    function Gh(t, e, i) {
      return ga(t, e, {
        ...i,
        attach: {
          element: i.attach.element.map($a).reverse(),
          target: i.attach.target.map($a).reverse()
        },
        offset: i.offset.reverse(),
        placement: i.placement.reverse(),
        recursion: !0
      });
    }
    function ka(t, e) {
      const i = [...t], a = ie[e].indexOf(t[e]);
      return ~a && (i[e] = ie[e][1 - a % 2 + 2]), i;
    }
    function $a(t) {
      for (let e = 0; e < ie.length; e++) {
        const i = ie[e].indexOf(t);
        if (~i)
          return ie[1 - e][i % 2 + 2];
      }
    }
    function Xh(t, e) {
      return t = [...t], t[e] *= -1, t;
    }
    var Yh = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $: K,
      $$: wt,
      Animation: Re,
      Dimensions: Wi,
      MouseTracker: oa,
      Transition: ft,
      addClass: Z,
      after: Ds,
      append: Tt,
      apply: Ne,
      assign: N,
      attr: L,
      before: Is,
      boxModelAdjust: yn,
      camelize: v,
      children: dt,
      clamp: zt,
      createEvent: vn,
      css: k,
      data: Ut,
      dimensions: j,
      each: pn,
      empty: Qr,
      endsWith: x,
      escape: Xi,
      fastdom: Be,
      filter: Hn,
      find: Ki,
      findAll: Vn,
      findIndex: P,
      flipPosition: Ms,
      fragment: Ve,
      getCoveringElement: ho,
      getEventPos: Ee,
      getIndex: ee,
      getTargetedElement: Ji,
      hasAttr: Te,
      hasClass: V,
      hasOwn: l,
      hasTouch: mn,
      height: Vt,
      html: Pe,
      hyphenate: h,
      inBrowser: qe,
      includes: E,
      index: Se,
      intersectRect: Os,
      isArray: y,
      isBoolean: Dt,
      isDocument: at,
      isElement: kt,
      isEmpty: _s,
      isEqual: Un,
      isFocusable: Ns,
      isFunction: D,
      isInView: Wh,
      isInput: Ps,
      isNode: ut,
      isNumber: Ln,
      isNumeric: ye,
      isObject: U,
      isPlainObject: z,
      isRtl: Nt,
      isSameSiteAnchor: wn,
      isString: bt,
      isTag: xt,
      isTouch: pe,
      isUndefined: Lt,
      isVideo: ca,
      isVisible: Ot,
      isVoidElement: Vi,
      isWindow: gt,
      last: Me,
      matches: st,
      memoize: he,
      mute: la,
      noop: lt,
      observeIntersection: ra,
      observeMutation: ao,
      observeResize: Yn,
      observeViewportResize: ro,
      off: Ce,
      offset: et,
      offsetPosition: Gn,
      offsetViewport: se,
      on: J,
      once: $t,
      overflowParents: Ge,
      parent: ht,
      parents: qn,
      pause: qs,
      pick: Hi,
      play: lo,
      pointInRect: Ts,
      pointerCancel: Rs,
      pointerDown: de,
      pointerEnter: We,
      pointerLeave: bn,
      pointerMove: Cs,
      pointerUp: Ae,
      position: so,
      positionAt: ma,
      prepend: Ch,
      propName: Bs,
      query: qt,
      queryAll: Wn,
      ready: Ah,
      remove: ne,
      removeAttr: jn,
      removeClass: rt,
      replaceClass: As,
      scrollIntoView: fa,
      scrollParent: Fe,
      scrollParents: Ke,
      scrolledOver: Js,
      selFocusable: zn,
      selInput: Mn,
      sortBy: zr,
      startsWith: b,
      sumBy: ze,
      swap: zi,
      toArray: S,
      toBoolean: Mi,
      toEventTargets: Qi,
      toFloat: Q,
      toNode: Et,
      toNodes: nt,
      toNumber: xe,
      toPx: Ft,
      toWindow: je,
      toggleClass: _t,
      trigger: M,
      ucfirst: g,
      uniqueBy: Hr,
      unwrap: Kn,
      width: js,
      wrapAll: Us,
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
        L(this.$el, "role", this.role), this.date = Q(Date.parse(this.$props.date)), this.end = !1, this.start();
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
            const i = K(this.clsWrapper.replace("%unit%", e), this.$el);
            if (!i)
              continue;
            let a = Math.trunc(t[e]).toString().padStart(2, "0");
            i.textContent !== a && (a = a.split(""), a.length !== i.children.length && Pe(i, a.map(() => "<span></span>").join("")), a.forEach((c, d) => i.children[d].textContent = c));
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
      return zr(
        go(t, D(e) ? { read: e } : e),
        "order"
      );
    }, Bt.props = function(t, e) {
      if (y(e)) {
        const i = {};
        for (const a of e)
          i[a] = String;
        e = i;
      }
      return Bt.methods(t, e);
    }, Bt.computed = Bt.methods = function(t, e) {
      return e ? t ? { ...t, ...e } : e : t;
    }, Bt.i18n = Bt.data = function(t, e, i) {
      return i ? xa(t, e, i) : e ? t ? function(a) {
        return xa(t, e, a);
      } : e : t;
    };
    function xa(t, e, i) {
      return Bt.computed(
        D(t) ? t.call(i, i) : t,
        D(e) ? e.call(i, i) : e
      );
    }
    function go(t, e) {
      return t = t && !y(t) ? [t] : t, e ? t ? t.concat(e) : y(e) ? e : [e] : t;
    }
    function ed(t, e) {
      return Lt(e) ? t : e;
    }
    function Qn(t, e, i) {
      const a = {};
      if (D(e) && (e = e.options), e.extends && (t = Qn(t, e.extends, i)), e.mixins)
        for (const d of e.mixins)
          t = Qn(t, d, i);
      for (const d in t)
        c(d);
      for (const d in e)
        l(t, d) || c(d);
      function c(d) {
        a[d] = (Bt[d] || ed)(t[d], e[d], i);
      }
      return a;
    }
    function $n(t, e = []) {
      try {
        return t ? b(t, "{") ? JSON.parse(t) : e.length && !E(t, ":") ? { [e[0]]: t } : t.split(";").reduce((i, a) => {
          const [c, d] = a.split(/:(.*)/);
          return c && !Lt(d) && (i[c.trim()] = d.trim()), i;
        }, {}) : {};
      } catch {
        return {};
      }
    }
    function bo(t, e) {
      return t === Boolean ? Mi(e) : t === Number ? xe(e) : t === "list" ? sd(e) : t === Object && bt(e) ? $n(e) : t ? t(e) : e;
    }
    const nd = /,(?![^(]*\))/;
    function sd(t) {
      return y(t) ? t : bt(t) ? t.split(nd).map((e) => ye(e) ? xe(e) : Mi(e.trim())) : [t];
    }
    function id(t) {
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
      for (const { read: i, write: a, events: c = [] } of t._updates) {
        if (!e.has("update") && !c.some((f) => e.has(f)))
          continue;
        let d;
        i && (d = i.call(t, t._data, e), d && z(d) && N(t._data, d)), a && d !== !1 && Be.write(() => {
          t._connected && a.call(t, t._data, e);
        });
      }
    }
    function fe(t) {
      return es(Yn, t, "resize");
    }
    function xn(t) {
      return es(ra, t);
    }
    function Gs(t) {
      return es(ao, t);
    }
    function Xs(t = {}) {
      return xn({
        handler: function(e, i) {
          const { targets: a = this.$el, preload: c = 5 } = t;
          for (const d of nt(D(a) ? a(this) : a))
            wt('[loading="lazy"]', d).slice(0, c - 1).forEach((f) => jn(f, "loading"));
          for (const d of e.filter(({ isIntersecting: f }) => f).map(({ target: f }) => f))
            i.unobserve(d);
        },
        ...t
      });
    }
    function wo(t) {
      return es((e, i) => ro(i), t, "resize");
    }
    function ts(t) {
      return es(
        (e, i) => ({
          disconnect: J(ld(e), "scroll", i, { passive: !0 })
        }),
        t,
        "scroll"
      );
    }
    function Sa(t) {
      return {
        observe(e, i) {
          return {
            observe: lt,
            unobserve: lt,
            disconnect: J(e, de, i, { passive: !0 })
          };
        },
        handler(e) {
          if (!pe(e))
            return;
          const i = Ee(e), a = "tagName" in e.target ? e.target : ht(e.target);
          $t(document, `${Ae} ${Rs} scroll`, (c) => {
            const { x: d, y: f } = Ee(c);
            (c.type !== "scroll" && a && d && Math.abs(i.x - d) > 100 || f && Math.abs(i.y - f) > 100) && setTimeout(() => {
              M(a, "swipe"), M(a, `swipe${ad(i.x, i.y, d, f)}`);
            });
          });
        },
        ...t
      };
    }
    function es(t, e, i) {
      return {
        observe: t,
        handler() {
          Zn(this, i);
        },
        ...e
      };
    }
    function ad(t, e, i, a) {
      return Math.abs(t - i) >= Math.abs(e - a) ? t - i > 0 ? "Left" : "Right" : e - a > 0 ? "Up" : "Down";
    }
    function ld(t) {
      return nt(t).map((e) => {
        const { ownerDocument: i } = e, a = Fe(e, !0);
        return a === i.scrollingElement ? i : a;
      });
    }
    var Ea = {
      props: {
        margin: String,
        firstColumn: Boolean
      },
      data: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column"
      },
      observe: [
        Gs({
          options: {
            childList: !0
          }
        }),
        Gs({
          options: {
            attributes: !0,
            attributeFilter: ["style"]
          },
          target: ({ $el: t }) => [t, ...dt(t)]
        }),
        fe({
          target: ({ $el: t }) => [t, ...dt(t)]
        })
      ],
      update: {
        read() {
          return {
            rows: vo(dt(this.$el))
          };
        },
        write({ rows: t }) {
          for (const e of t)
            for (const i of e)
              _t(i, this.margin, t[0] !== e), _t(i, this.firstColumn, e[Nt ? e.length - 1 : 0] === i);
        },
        events: ["resize"]
      }
    };
    function vo(t) {
      const e = [[]], i = t.some(
        (a, c) => c && t[c - 1].offsetParent !== a.offsetParent
      );
      for (const a of t) {
        if (!Ot(a))
          continue;
        const c = yo(a, i);
        for (let d = e.length - 1; d >= 0; d--) {
          const f = e[d];
          if (!f[0]) {
            f.push(a);
            break;
          }
          const m = yo(f[0], i);
          if (c.top >= m.bottom - 1 && c.top !== m.top) {
            e.push([a]);
            break;
          }
          if (c.bottom - 1 > m.top || c.top === m.top) {
            let w = f.length - 1;
            for (; w >= 0; w--) {
              const $ = yo(f[w], i);
              if (c.left >= $.left)
                break;
            }
            f.splice(w + 1, 0, a);
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
      let { offsetTop: i, offsetLeft: a, offsetHeight: c, offsetWidth: d } = t;
      return e && ([i, a] = Gn(t)), {
        top: i,
        left: a,
        bottom: i + c,
        right: a + d
      };
    }
    async function cd(t, e, i) {
      await ko();
      let a = dt(e);
      const c = a.map((I) => _a(I, !0)), d = { ...k(e, ["height", "padding"]), display: "block" }, f = a.concat(e);
      await Promise.all(f.map(ft.cancel)), k(f, "transitionProperty", "none"), await t(), a = a.concat(dt(e).filter((I) => !E(a, I))), await Promise.resolve(), k(f, "transitionProperty", "");
      const m = L(e, "style"), w = k(e, ["height", "padding"]), [$, _] = ud(e, a, c), R = a.map((I) => ({ style: L(I, "style") }));
      a.forEach((I, q) => _[q] && k(I, _[q])), k(e, d), M(e, "scroll"), await ko();
      const B = a.map((I, q) => ht(I) === e && ft.start(I, $[q], i, "ease")).concat(ft.start(e, w, i, "ease"));
      try {
        await Promise.all(B), a.forEach((I, q) => {
          L(I, R[q]), ht(I) === e && k(I, "display", $[q].opacity === 0 ? "none" : "");
        }), L(e, "style", m);
      } catch {
        L(a, "style", ""), hd(e, d);
      }
    }
    function _a(t, e) {
      const i = k(t, "zIndex");
      return Ot(t) ? {
        display: "",
        opacity: e ? k(t, "opacity") : "0",
        pointerEvents: "none",
        position: "absolute",
        zIndex: i === "auto" ? Se(t) : i,
        ...Oa(t)
      } : !1;
    }
    function ud(t, e, i) {
      const a = e.map(
        (d, f) => ht(d) && f in i ? i[f] ? Ot(d) ? Oa(d) : { opacity: 0 } : { opacity: Ot(d) ? 1 : 0 } : !1
      ), c = a.map((d, f) => {
        const m = ht(e[f]) === t && (i[f] || _a(e[f]));
        if (!m)
          return !1;
        if (!d)
          delete m.opacity;
        else if (!("opacity" in d)) {
          const { opacity: w } = m;
          w % 1 ? d.opacity = 1 : delete m.opacity;
        }
        return m;
      });
      return [a, c];
    }
    function hd(t, e) {
      for (const i in e)
        k(t, i, "");
    }
    function Oa(t) {
      const { height: e, width: i } = j(t);
      return {
        height: e,
        width: i,
        transform: "",
        ...so(t),
        ...k(t, ["marginTop", "marginLeft"])
      };
    }
    function ko() {
      return new Promise((t) => requestAnimationFrame(t));
    }
    const $o = "uk-transition-leave", xo = "uk-transition-enter";
    function Ta(t, e, i, a = 0) {
      const c = Ys(e, !0), d = { opacity: 1 }, f = { opacity: 0 }, m = (_) => () => c === Ys(e) ? _() : Promise.reject(), w = m(async () => {
        Z(e, $o), await Promise.all(
          Ca(e).map(
            (_, R) => new Promise(
              (B) => setTimeout(
                () => ft.start(_, f, i / 2, "ease").then(
                  B
                ),
                R * a
              )
            )
          )
        ), rt(e, $o);
      }), $ = m(async () => {
        const _ = Vt(e);
        Z(e, xo), t(), k(dt(e), { opacity: 0 }), await ko();
        const R = dt(e), B = Vt(e);
        k(e, "alignContent", "flex-start"), Vt(e, _);
        const I = Ca(e);
        k(R, f);
        const q = I.map(async (tt, it) => {
          await dd(it * a), await ft.start(tt, d, i / 2, "ease");
        });
        _ !== B && q.push(
          ft.start(
            e,
            { height: B },
            i / 2 + I.length * a,
            "ease"
          )
        ), await Promise.all(q).then(() => {
          rt(e, xo), c === Ys(e) && (k(e, { height: "", alignContent: "" }), k(R, { opacity: "" }), delete e.dataset.transition);
        });
      });
      return V(e, $o) ? Aa(e).then($) : V(e, xo) ? Aa(e).then(w).then($) : w().then($);
    }
    function Ys(t, e) {
      return e && (t.dataset.transition = 1 + Ys(t)), xe(t.dataset.transition) || 0;
    }
    function Aa(t) {
      return Promise.all(
        dt(t).filter(ft.inProgress).map(
          (e) => new Promise((i) => $t(e, "transitionend transitioncanceled", i))
        )
      );
    }
    function Ca(t) {
      return vo(dt(t)).flat().filter(Ot);
    }
    function dd(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    var Ra = {
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
          const i = this.animation;
          return (i === "fade" ? Ta : i === "delayed-fade" ? (...c) => Ta(...c, 40) : i ? cd : () => (t(), Promise.resolve()))(t, e, this.duration).catch(lt);
        }
      }
    };
    const ct = {
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
      mixins: [Ra],
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
        children: ({ target: t }, e) => wt(`${t} > *`, e),
        toggles: ({ attrItem: t }, e) => wt(`[${t}],[data-${t}]`, e)
      },
      watch: {
        toggles(t) {
          this.updateState();
          const e = wt(this.selActive, this.$el);
          for (const i of t) {
            this.selActive !== !1 && _t(i, this.cls, E(e, i));
            const a = wd(i);
            xt(a, "a") && L(a, "role", "button");
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
          t.type === "keydown" && t.keyCode !== ct.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current));
        }
      },
      methods: {
        apply(t) {
          const e = this.getState(), i = Na(t, this.attrItem, this.getState());
          pd(e, i) || this.setState(i);
        },
        getState() {
          return this.toggles.filter((t) => V(t, this.cls)).reduce((t, e) => Na(e, this.attrItem, t), {
            filter: { "": "" },
            sort: []
          });
        },
        async setState(t, e = !0) {
          t = { filter: { "": "" }, sort: [], ...t }, M(this.$el, "beforeFilter", [this, t]);
          for (const i of this.toggles)
            _t(i, this.cls, gd(i, this.attrItem, t));
          await Promise.all(
            wt(this.target, this.$el).map((i) => {
              const a = () => md(t, i, dt(i));
              return e ? this.animate(a, i) : a();
            })
          ), M(this.$el, "afterFilter", [this]);
        },
        updateState() {
          Be.write(() => this.setState(this.getState(), !1));
        }
      }
    };
    function Pa(t, e) {
      return $n(Ut(t, e), ["filter"]);
    }
    function pd(t, e) {
      return ["filter", "sort"].every((i) => Un(t[i], e[i]));
    }
    function md(t, e, i) {
      for (const d of i)
        k(
          d,
          "display",
          Object.values(t.filter).every((f) => !f || st(d, f)) ? "" : "none"
        );
      const [a, c] = t.sort;
      if (a) {
        const d = bd(i, a, c);
        Un(d, i) || Tt(e, d);
      }
    }
    function Na(t, e, i) {
      const { filter: a, group: c, sort: d, order: f = "asc" } = Pa(t, e);
      return (a || Lt(d)) && (c ? a ? (delete i.filter[""], i.filter[c] = a) : (delete i.filter[c], (_s(i.filter) || "" in i.filter) && (i.filter = { "": a || "" })) : i.filter = { "": a || "" }), Lt(d) || (i.sort = [d, f]), i;
    }
    function gd(t, e, { filter: i = { "": "" }, sort: [a, c] }) {
      const { filter: d = "", group: f = "", sort: m, order: w = "asc" } = Pa(t, e);
      return Lt(m) ? f in i && d === i[f] || !d && f && !(f in i) && !i[""] : a === m && c === w;
    }
    function bd(t, e, i) {
      return [...t].sort(
        (a, c) => Ut(a, e).localeCompare(Ut(c, e), void 0, { numeric: !0 }) * (i === "asc" || -1)
      );
    }
    function wd(t) {
      return K("a,button", t) || t;
    }
    let So;
    function Ba(t) {
      const e = J(
        t,
        "touchstart",
        (a) => {
          if (a.targetTouches.length !== 1 || st(a.target, 'input[type="range"'))
            return;
          let c = Ee(a).y;
          const d = J(
            t,
            "touchmove",
            (f) => {
              const m = Ee(f).y;
              m !== c && (c = m, Ke(f.target).some((w) => {
                if (!t.contains(w))
                  return !1;
                let { scrollHeight: $, clientHeight: _ } = w;
                return _ < $;
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
      const { scrollingElement: i } = document;
      return k(i, {
        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
        touchAction: "none",
        paddingRight: js(window) - i.clientWidth || ""
      }), () => {
        So = !1, e(), k(i, { overflowY: "", touchAction: "", paddingRight: "" });
      };
    }
    var ns = {
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
        hasTransition: ({ animation: t }) => ["slide", "reveal"].some((e) => b(t[0], e))
      },
      methods: {
        async toggleElement(t, e, i) {
          try {
            return await Promise.all(
              nt(t).map((a) => {
                const c = Dt(e) ? e : !this.isToggled(a);
                if (!M(a, `before${c ? "show" : "hide"}`, [this]))
                  return Promise.reject();
                const d = (D(i) ? i : i === !1 || !this.hasAnimation ? vd : this.hasTransition ? yd : kd)(a, c, this), f = c ? this.clsEnter : this.clsLeave;
                Z(a, f), M(a, c ? "show" : "hide", [this]);
                const m = () => {
                  rt(a, f), M(a, c ? "shown" : "hidden", [this]);
                };
                return d ? d.then(m, () => (rt(a, f), Promise.reject())) : m();
              })
            ), !0;
          } catch {
            return !1;
          }
        },
        isToggled(t = this.$el) {
          return t = Et(t), V(t, this.clsEnter) ? !0 : V(t, this.clsLeave) ? !1 : this.cls ? V(t, this.cls.split(" ")[0]) : Ot(t);
        },
        _toggle(t, e) {
          if (!t)
            return;
          e = !!e;
          let i;
          this.cls ? (i = E(this.cls, " ") || e !== V(t, this.cls), i && _t(t, this.cls, E(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), i && M(t, "toggled", [e, this]), wt("[autofocus]", t).some((a) => Ot(a) ? a.focus() || !0 : a.blur());
        }
      }
    };
    function vd(t, e, { _toggle: i }) {
      return Re.cancel(t), ft.cancel(t), i(t, e);
    }
    async function yd(t, e, { animation: i, duration: a, velocity: c, transition: d, _toggle: f }) {
      var m;
      const [w = "reveal", $ = "top"] = ((m = i[0]) == null ? void 0 : m.split("-")) || [], _ = [
        ["left", "right"],
        ["top", "bottom"]
      ], R = _[E(_[0], $) ? 0 : 1], B = R[1] === $, q = ["width", "height"][_.indexOf(R)], tt = `margin-${R[0]}`, it = `margin-${$}`;
      let ke = j(t)[q];
      const An = ft.inProgress(t);
      await ft.cancel(t), e && f(t, !0);
      const Cn = Object.fromEntries(
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
          it
        ].map((tc) => [tc, t.style[tc]])
      ), $e = j(t), zo = Q(k(t, tt)), Yl = Q(k(t, it)), sn = $e[q] + Yl;
      !An && !e && (ke += Yl);
      const [hi] = no(t, "<div>");
      k(hi, {
        boxSizing: "border-box",
        height: $e.height,
        width: $e.width,
        ...k(t, [
          "overflow",
          "padding",
          "borderTop",
          "borderRight",
          "borderBottom",
          "borderLeft",
          "borderImage",
          it
        ])
      }), k(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [it]: 0,
        width: $e.width,
        height: $e.height,
        overflow: "hidden",
        [q]: ke
      });
      const Ql = ke / sn;
      a = (c * sn + a) * (e ? 1 - Ql : Ql);
      const Zl = { [q]: e ? sn : 0 };
      B && (k(t, tt, sn - ke + zo), Zl[tt] = e ? zo : sn + zo), !B ^ w === "reveal" && (k(hi, tt, -sn + ke), ft.start(hi, { [tt]: e ? 0 : -sn }, a, d));
      try {
        await ft.start(t, Zl, a, d);
      } finally {
        k(t, Cn), Kn(hi.firstChild), e || f(t, !1);
      }
    }
    function kd(t, e, i) {
      const { animation: a, duration: c, _toggle: d } = i;
      return e ? (d(t, !0), Re.in(t, a[0], c, i.origin)) : Re.out(t, a[1] || a[0], c, i.origin).then(
        () => d(t, !1)
      );
    }
    const Kt = [];
    var Eo = {
      mixins: [Jt, ns, Xe],
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
        L(this.panel || this.$el, "role", this.role), this.overlay && L(this.panel || this.$el, "aria-modal", !0);
      },
      beforeDisconnect() {
        E(Kt, this) && this.toggleElement(this.$el, !1, !1);
      },
      events: [
        {
          name: "click",
          delegate: ({ selClose: t }) => `${t},a[href*="#"]`,
          handler(t) {
            const { current: e, defaultPrevented: i } = t, { hash: a } = e;
            !i && a && wn(e) && !this.$el.contains(K(a)) ? this.hide() : st(e, this.selClose) && (t.preventDefault(), this.hide());
          }
        },
        {
          name: "toggle",
          self: !0,
          handler(t) {
            t.defaultPrevented || (t.preventDefault(), this.isToggled() === E(Kt, this) && this.toggle());
          }
        },
        {
          name: "beforeshow",
          self: !0,
          handler(t) {
            if (E(Kt, this))
              return !1;
            !this.stack && Kt.length ? (Promise.all(Kt.map((e) => e.hide())).then(this.show), t.preventDefault()) : Kt.push(this);
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            this.stack && k(this.$el, "zIndex", Q(k(this.$el, "zIndex")) + Kt.length);
            const t = [
              this.overlay && xd(this),
              this.overlay && Ba(this.$el),
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
            Ns(this.$el) || L(this.$el, "tabindex", "-1"), st(this.$el, ":focus-within") || this.$el.focus();
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            E(Kt, this) && Kt.splice(Kt.indexOf(this), 1), k(this.$el, "zIndex", ""), Kt.some((t) => t.clsPage === this.clsPage) || rt(document.documentElement, this.clsPage);
          }
        }
      ],
      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },
        show() {
          return this.container && ht(this.$el) !== this.container ? (Tt(this.container, this.$el), new Promise(
            (t) => requestAnimationFrame(() => this.show().then(t))
          )) : this.toggleElement(this.$el, !0, Fa);
        },
        hide() {
          return this.toggleElement(this.$el, !1, Fa);
        }
      }
    };
    function Fa(t, e, { transitionElement: i, _toggle: a }) {
      return new Promise(
        (c, d) => $t(t, "show hide", () => {
          var f;
          (f = t._reject) == null || f.call(t), t._reject = d, a(t, e);
          const m = $t(
            i,
            "transitionstart",
            () => {
              $t(i, "transitionend transitioncancel", c, {
                self: !0
              }), clearTimeout(w);
            },
            { self: !0 }
          ), w = setTimeout(
            () => {
              m(), c();
            },
            $d(k(i, "transitionDuration"))
          );
        })
      ).then(() => delete t._reject);
    }
    function $d(t) {
      return t ? x(t, "ms") ? Q(t) : Q(t) * 1e3 : 0;
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
          `${Ae} ${Rs} scroll`,
          ({ defaultPrevented: i, type: a, target: c }) => {
            !i && a === Ae && e === c && t.hide();
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
          return [{ transform: St(t * -100) }, { transform: St() }];
        },
        percent(t) {
          return ss(t);
        },
        translate(t, e) {
          return [
            { transform: St(e * -100 * t) },
            { transform: St(e * 100 * (1 - t)) }
          ];
        }
      }
    };
    function ss(t) {
      return Math.abs(new DOMMatrix(k(t, "transform")).m41 / t.offsetWidth);
    }
    function St(t = 0, e = "%") {
      return t += t ? e : "", `translate3d(${t}, 0, 0)`;
    }
    function Sn(t) {
      return `scale3d(${t}, ${t}, 1)`;
    }
    function _d(t, e, i, { animation: a, easing: c }) {
      const { percent: d, translate: f, show: m = lt } = a, w = m(i), { promise: $, resolve: _ } = Ia();
      return {
        dir: i,
        show(R, B = 0, I) {
          const q = I ? "linear" : c;
          return R -= Math.round(R * zt(B, -1, 1)), this.translate(B), Ye(e, "itemin", { percent: B, duration: R, timing: q, dir: i }), Ye(t, "itemout", { percent: 1 - B, duration: R, timing: q, dir: i }), Promise.all([
            ft.start(e, w[1], R, q),
            ft.start(t, w[0], R, q)
          ]).then(() => {
            this.reset(), _();
          }, lt), $;
        },
        cancel() {
          return ft.cancel([e, t]);
        },
        reset() {
          for (const R in w[0])
            k([e, t], R, "");
        },
        async forward(R, B = this.percent()) {
          return await this.cancel(), this.show(R, B, !0);
        },
        translate(R) {
          this.reset();
          const B = f(R, i);
          k(e, B[1]), k(t, B[0]), Ye(e, "itemtranslatein", { percent: R, dir: i }), Ye(t, "itemtranslateout", { percent: 1 - R, dir: i });
        },
        percent() {
          return d(t || e, e, i);
        },
        getDistance() {
          return t == null ? void 0 : t.offsetWidth;
        }
      };
    }
    function Ye(t, e, i) {
      M(t, vn(e, !1, !1, i));
    }
    function Ia() {
      let t;
      return { promise: new Promise((e) => t = e), resolve: t };
    }
    var Qs = {
      props: {
        i18n: Object
      },
      data: {
        i18n: null
      },
      methods: {
        t(t, ...e) {
          var i, a, c;
          let d = 0;
          return ((c = ((i = this.i18n) == null ? void 0 : i[t]) || ((a = this.$options.i18n) == null ? void 0 : a[t])) == null ? void 0 : c.replace(
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
        L(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
      },
      disconnected() {
        this.stopAutoplay();
      },
      update() {
        L(this.slides, "tabindex", "-1");
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
            this.stack.length || this.draggable && st(this.$el, ":focus-within") && !st(this.$el, ":focus") || this.pauseOnHover && st(this.$el, ":hover") || this.show("next");
          }, this.autoplayInterval);
        },
        stopAutoplay() {
          clearInterval(this.interval);
        }
      }
    };
    const is = { passive: !1, capture: !0 }, Da = { passive: !0, capture: !0 }, Td = "touchstart mousedown", Oo = "touchmove mousemove", La = "touchend touchcancel mouseup click input scroll", Ua = (t) => t.preventDefault();
    var Ad = {
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
          this[t] = (i) => {
            const a = Ee(i).x * (Nt ? -1 : 1);
            this.prevPos = a === this.pos ? this.prevPos : this.pos, this.pos = a, e(i);
          };
        }
      },
      events: [
        {
          name: Td,
          passive: !0,
          delegate: ({ selList: t }) => `${t} > *`,
          handler(t) {
            !this.draggable || this.parallax || !pe(t) && Cd(t.target) || t.target.closest(Mn) || t.button > 0 || this.length < 2 || this.start(t);
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
          handler: lt,
          ...is
        }
      ],
      methods: {
        start() {
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, J(document, Oo, this.move, is), J(document, La, this.end, Da), k(this.list, "userSelect", "none");
        },
        move(t) {
          const e = this.pos - this.drag;
          if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
            return;
          this.dragging || J(this.list, "click", Ua, is), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
          let { slides: i, prevIndex: a } = this, c = Math.abs(e), d = this.getIndex(a + this.dir), f = ja.call(this, a, d);
          for (; d !== a && c > f; )
            this.drag -= f * this.dir, a = d, c -= f, d = this.getIndex(a + this.dir), f = ja.call(this, a, d);
          this.percent = c / f;
          const m = i[a], w = i[d], $ = this.index !== d, _ = a === d;
          let R;
          for (const B of [this.index, this.prevIndex])
            E([d, a], B) || (M(i[B], "itemhidden", [this]), _ && (R = !0, this.prevIndex = a));
          (this.index === a && this.prevIndex !== a || R) && M(i[this.index], "itemshown", [this]), $ && (this.prevIndex = a, this.index = d, _ || (M(m, "beforeitemhide", [this]), M(m, "itemhide", [this])), M(w, "beforeitemshow", [this]), M(w, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), m, !_ && w);
        },
        end() {
          if (Ce(document, Oo, this.move, is), Ce(document, La, this.end, Da), this.dragging)
            if (this.dragging = null, this.index === this.prevIndex)
              this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
            else {
              const t = (Nt ? this.dir * (Nt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
              this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(
                this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous",
                !0
              );
            }
          setTimeout(() => Ce(this.list, "click", Ua, is)), k(this.list, { userSelect: "" }), this.drag = this.percent = null;
        }
      }
    };
    function ja(t, e) {
      return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
    }
    function Cd(t) {
      return k(t, "userSelect") !== "none" && S(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
    }
    function Rd(t) {
      t._watches = [];
      for (const e of t.$options.watch || [])
        for (const [i, a] of Object.entries(e))
          Ma(t, a, i);
      t._initial = !0;
    }
    function Ma(t, e, i) {
      t._watches.push({
        name: i,
        ...z(e) ? e : { handler: e }
      });
    }
    function Pd(t, e) {
      for (const { name: i, handler: a, immediate: c = !0 } of t._watches)
        (t._initial && c || l(e, i) && !Un(e[i], t[i])) && a.call(t, t[i], e[i]);
      t._initial = !1;
    }
    function Nd(t) {
      const { computed: e } = t.$options;
      if (t._computed = {}, e)
        for (const i in e)
          Ha(t, i, e[i]);
    }
    const za = { subtree: !0, childList: !0 };
    function Ha(t, e, i) {
      t._hasComputed = !0, Object.defineProperty(t, e, {
        enumerable: !0,
        get() {
          const { _computed: a, $props: c, $el: d } = t;
          if (!l(a, e) && (a[e] = (i.get || i).call(t, c, d), i.observe && t._computedObserver)) {
            const f = i.observe.call(t, c);
            t._computedObserver.observe(
              ["~", "+", "-"].includes(f[0]) ? d.parentElement : d.getRootNode(),
              za
            );
          }
          return a[e];
        },
        set(a) {
          const { _computed: c } = t;
          c[e] = i.set ? i.set.call(t, a) : a, Lt(c[e]) && delete c[e];
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
        za
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
          Wa(t, e);
        else
          for (const i in e)
            Wa(t, e[i], i);
    }
    function Wa(t, e, i) {
      let { name: a, el: c, handler: d, capture: f, passive: m, delegate: w, filter: $, self: _ } = z(e) ? e : { name: i, handler: e };
      c = D(c) ? c.call(t, t) : c || t.$el, !(!c || y(c) && !c.length || $ && !$.call(t, t)) && t._disconnect.push(
        J(
          c,
          a,
          w ? bt(w) ? w : w.call(t, t) : null,
          bt(d) ? t[d] : d.bind(t),
          { passive: m, capture: f, self: _ }
        )
      );
    }
    function Id(t) {
      for (const e of t.$options.observe || [])
        Dd(t, e);
    }
    function Dd(t, e) {
      let { observe: i, target: a = t.$el, handler: c, options: d, filter: f, args: m } = e;
      if (f && !f.call(t, t))
        return;
      const w = `_observe${t._disconnect.length}`;
      D(a) && !l(t, w) && Ha(t, w, () => {
        const R = a.call(t, t);
        return y(R) ? nt(R) : R;
      }), c = bt(c) ? t[c] : c.bind(t), D(d) && (d = d.call(t, t));
      const $ = l(t, w) ? t[w] : a, _ = i($, c, d, m);
      D(a) && y(t[w]) && Ma(
        t,
        { handler: Ld(_, d), immediate: !1 },
        w
      ), t._disconnect.push(() => _.disconnect());
    }
    function Ld(t, e) {
      return (i, a) => {
        for (const c of a)
          E(i, c) || (t.unobserve ? t.unobserve(c) : t.observe && t.disconnect());
        for (const c of i)
          (!E(a, c) || !t.unobserve) && t.observe(c, e);
      };
    }
    function Ud(t) {
      const { $options: e, $props: i } = t, a = Va(e);
      N(i, a);
      const { computed: c, methods: d } = e;
      for (let f in i)
        f in a && (!c || !l(c, f)) && (!d || !l(d, f)) && (t[f] = i[f]);
    }
    function Va(t) {
      const e = {}, { args: i = [], props: a = {}, el: c, id: d } = t;
      if (!a)
        return e;
      for (const m in a) {
        const w = h(m);
        let $ = Ut(c, w);
        Lt($) || ($ = a[m] === Boolean && $ === "" ? !0 : bo(a[m], $), !(w === "target" && b($, "_")) && (e[m] = $));
      }
      const f = $n(Ut(c, d), i);
      for (const m in f) {
        const w = v(m);
        Lt(a[w]) || (e[w] = bo(a[w], f[m]));
      }
      return e;
    }
    const jd = he((t, e) => {
      const i = Object.keys(e), a = i.concat(t).map((c) => [h(c), `data-${h(c)}`]).flat();
      return { attributes: i, filter: a };
    });
    function Md(t) {
      const { $options: e, $props: i } = t, { id: a, props: c, el: d } = e;
      if (!c)
        return;
      const { attributes: f, filter: m } = jd(a, c), w = new MutationObserver(($) => {
        const _ = Va(e);
        $.some(({ attributeName: R }) => {
          const B = R.replace("data-", "");
          return (B === a ? f : [v(B), v(R)]).some(
            (I) => !Lt(_[I]) && _[I] !== i[I]
          );
        }) && t.$reset();
      });
      w.observe(d, {
        attributes: !0,
        attributeFilter: m
      }), t._disconnect.push(() => w.disconnect());
    }
    function En(t, e) {
      var i;
      (i = t.$options[e]) == null || i.forEach((a) => a.call(t));
    }
    function To(t) {
      t._connected || (Ud(t), En(t, "beforeConnect"), t._connected = !0, t._disconnect = [], Fd(t), id(t), Rd(t), Id(t), Md(t), Bd(t), En(t, "connected"), Zn(t));
    }
    function Ao(t) {
      t._connected && (En(t, "beforeDisconnect"), t._disconnect.forEach((e) => e()), t._disconnect = null, En(t, "disconnected"), t._connected = !1);
    }
    let zd = 0;
    function Ja(t, e = {}) {
      e.data = Wd(e, t.constructor.options), t.$options = Qn(t.constructor.options, e, t), t.$props = {}, t._uid = zd++, Hd(t), qd(t), Nd(t), En(t, "created"), e.el && t.$mount(e.el);
    }
    function Hd(t) {
      const { data: e = {} } = t.$options;
      for (const i in e)
        t.$props[i] = t[i] = e[i];
    }
    function qd(t) {
      const { methods: e } = t.$options;
      if (e)
        for (const i in e)
          t[i] = e[i].bind(t);
    }
    function Wd({ data: t = {} }, { args: e = [], props: i = {} }) {
      y(t) && (t = t.slice(0, e.length).reduce((a, c, d) => (z(c) ? N(a, c) : a[e[d]] = c, a), {}));
      for (const a in t)
        Lt(t[a]) ? delete t[a] : i[a] && (t[a] = bo(i[a], t[a]));
      return t;
    }
    const oe = function(t) {
      Ja(this, t);
    };
    oe.util = Yh, oe.options = {}, oe.version = "3.21.13";
    const Vd = "uk-", Qe = "__uikit__", _n = {};
    function Ka(t, e) {
      var i, a;
      const c = Vd + h(t);
      if (!e)
        return _n[c].options || (_n[c] = oe.extend(_n[c])), _n[c];
      t = v(t), oe[t] = (f, m) => os(t, f, m);
      const d = (i = e.options) != null ? i : { ...e };
      return d.id = c, d.name = t, (a = d.install) == null || a.call(d, oe, d, t), oe._initialized && !d.functional && requestAnimationFrame(() => os(t, `[${c}],[data-${c}]`)), _n[c] = d;
    }
    function os(t, e, i, ...a) {
      const c = Ka(t);
      return c.options.functional ? new c({ data: z(e) ? e : [e, i, ...a] }) : e ? wt(e).map(d)[0] : d();
      function d(f) {
        const m = Zs(f, t);
        if (m)
          if (i)
            m.$destroy();
          else
            return m;
        return new c({ el: f, data: i });
      }
    }
    function rs(t) {
      return (t == null ? void 0 : t[Qe]) || {};
    }
    function Zs(t, e) {
      return rs(t)[e];
    }
    function Jd(t, e) {
      t[Qe] || (t[Qe] = {}), t[Qe][e.$options.name] = e;
    }
    function Kd(t, e) {
      var i;
      (i = t[Qe]) == null || delete i[e.$options.name], _s(t[Qe]) && delete t[Qe];
    }
    function Gd(t) {
      t.component = Ka, t.getComponents = rs, t.getComponent = Zs, t.update = Ga, t.use = function(i) {
        if (!i.installed)
          return i.call(null, this), i.installed = !0, this;
      }, t.mixin = function(i, a) {
        a = (bt(a) ? this.component(a) : a) || this, a.options = Qn(a.options, i);
      }, t.extend = function(i) {
        i || (i = {});
        const a = this, c = function(f) {
          Ja(this, f);
        };
        return c.prototype = Object.create(a.prototype), c.prototype.constructor = c, c.options = Qn(a.options, i), c.super = a, c.extend = a.extend, c;
      };
      let e;
      Object.defineProperty(t, "container", {
        get() {
          return e || document.body;
        },
        set(i) {
          e = K(i);
        }
      });
    }
    function Ga(t, e) {
      t = t ? Et(t) : document.body;
      for (const i of qn(t).reverse())
        Xa(i, e);
      Ne(t, (i) => Xa(i, e));
    }
    function Xa(t, e) {
      const i = rs(t);
      for (const a in i)
        Zn(i[a], e);
    }
    function Xd(t) {
      t.prototype.$mount = function(e) {
        const i = this;
        Jd(e, i), i.$options.el = e, document.contains(e) && To(i);
      }, t.prototype.$destroy = function(e = !1) {
        const i = this, { el: a } = i.$options;
        a && Ao(i), En(i, "destroy"), Kd(a, i), e && ne(i.$el);
      }, t.prototype.$create = os, t.prototype.$emit = function(e) {
        Zn(this, e);
      }, t.prototype.$update = function(e = this.$el, i) {
        Ga(e, i);
      }, t.prototype.$reset = function() {
        Ao(this), To(this);
      }, t.prototype.$getComponent = Zs, Object.defineProperties(t.prototype, {
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
          return dt(this.nav);
        },
        selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`,
        navItems(t, e) {
          return wt(this.selNavItem, e);
        }
      },
      watch: {
        nav(t, e) {
          L(t, "role", "tablist"), this.padNavitems(), e && this.$emit();
        },
        list(t) {
          xt(t, "ul") && L(t, "role", "presentation");
        },
        navChildren(t) {
          L(t, "role", "presentation"), this.padNavitems(), this.updateNav();
        },
        navItems(t) {
          for (const e of t) {
            const i = Ut(e, this.attrItem), a = K("a,button", e) || e;
            let c, d = null;
            if (ye(i)) {
              const f = xe(i), m = this.slides[f];
              m && (m.id || (m.id = Ze(this, m)), d = m.id), c = this.t("slideX", Q(i) + 1), L(a, "role", "tab");
            } else
              this.list && (this.list.id || (this.list.id = Ze(this, this.list)), d = this.list.id), c = this.t(i);
            L(a, {
              "aria-controls": d,
              "aria-label": L(a, "aria-label") || c
            });
          }
        },
        slides(t) {
          t.forEach(
            (e, i) => L(e, {
              role: this.nav ? "tabpanel" : "group",
              "aria-label": this.t("slideLabel", i + 1, this.length),
              "aria-roledescription": this.nav ? null : "slide"
            })
          ), this.padNavitems();
        }
      },
      connected() {
        L(this.$el, {
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
            t.target.closest("a,button") && (t.type === "click" || t.keyCode === ct.SPACE) && (t.preventDefault(), this.show(Ut(t.current, this.attrItem)));
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
            const { current: e, keyCode: i } = t, a = Ut(e, this.attrItem);
            if (!ye(a))
              return;
            let c = i === ct.HOME ? 0 : i === ct.END ? "last" : i === ct.LEFT ? "previous" : i === ct.RIGHT ? "next" : -1;
            ~c && (t.preventDefault(), this.show(c));
          }
        }
      ],
      methods: {
        updateNav() {
          const t = this.getValidIndex();
          for (const e of this.navItems) {
            const i = Ut(e, this.attrItem), a = K("a,button", e) || e;
            if (ye(i)) {
              const d = xe(i) === t;
              _t(e, this.clsActive, d), _t(a, "uk-disabled", this.parallax), L(a, {
                "aria-selected": d,
                tabindex: d && !this.parallax ? null : -1
              }), d && a && st(ht(e), ":focus-within") && a.focus();
            } else
              _t(
                e,
                "uk-invisible",
                this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex)
              );
          }
        },
        padNavitems() {
          if (!this.nav)
            return;
          const t = [];
          for (let e = 0; e < this.length; e++) {
            const i = `${this.attrItem}="${e}"`;
            t[e] = this.navChildren.findLast((a) => a.matches(`[${i}]`)) || K(`<li ${i}><a href></a></li>`);
          }
          Un(t, this.navChildren) || Pe(this.nav, t);
        }
      }
    };
    const Zd = "cubic-bezier(0.25, 0.46, 0.45, 0.94)", tf = "cubic-bezier(0.165, 0.84, 0.44, 1)";
    var Ya = {
      mixins: [Od, Ad, Qd, Qs],
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
        duration: ({ velocity: t }, e) => Qa(e.offsetWidth / t),
        list: ({ selList: t }, e) => K(t, e),
        maxIndex() {
          return this.length - 1;
        },
        slides() {
          return dt(this.list);
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
          var i;
          if (this.dragging || !this.length || this.parallax)
            return;
          const { stack: a } = this, c = e ? 0 : a.length, d = () => {
            a.splice(c, 1), a.length && this.show(a.shift(), !0);
          };
          if (a[e ? "unshift" : "push"](t), !e && a.length > 1) {
            a.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
            return;
          }
          const f = this.getIndex(this.index), m = V(this.slides, this.clsActive) && this.slides[f], w = this.getIndex(t, this.index), $ = this.slides[w];
          if (m === $) {
            d();
            return;
          }
          if (this.dir = ef(t, f), this.prevIndex = f, this.index = w, m && !M(m, "beforeitemhide", [this]) || !M($, "beforeitemshow", [this, m])) {
            this.index = this.prevIndex, d();
            return;
          }
          const _ = this._show(m, $, e).then(() => {
            m && M(m, "itemhidden", [this]), M($, "itemshown", [this]), a.shift(), this._transitioner = null, a.length && requestAnimationFrame(() => a.length && this.show(a.shift(), !0));
          });
          return m && M(m, "itemhide", [this]), M($, "itemshow", [this]), _;
        },
        getIndex(t = this.index, e = this.index) {
          return zt(
            ee(t, this.slides, e, this.finite),
            0,
            Math.max(0, this.maxIndex)
          );
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          return this.getIndex(t, e);
        },
        async _show(t, e, i) {
          if (this._transitioner = this._getTransitioner(t, e, this.dir, {
            easing: i ? e.offsetWidth < 600 ? Zd : tf : this.easing,
            ...this.transitionOptions
          }), !i && !t) {
            this._translate(1);
            return;
          }
          const { length: a } = this.stack;
          return this._transitioner[a > 1 ? "forward" : "show"](
            a > 1 ? Math.min(this.duration, 75 + 75 / (a - 1)) : this.duration,
            this.percent
          );
        },
        _translate(t, e = this.prevIndex, i = this.index) {
          const a = this._getTransitioner(e === i ? !1 : e, i);
          return a.translate(t), a;
        },
        _getTransitioner(t = this.prevIndex, e = this.index, i = this.dir || 1, a = this.transitionOptions) {
          return new this.Transitioner(
            Ln(t) ? this.slides[t] : t,
            Ln(e) ? this.slides[e] : e,
            i * (Nt ? -1 : 1),
            a
          );
        }
      }
    };
    function ef(t, e) {
      return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
    }
    function Qa(t) {
      return 0.5 * t + 300;
    }
    var Za = {
      mixins: [Ya],
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
    }, tl = {
      ..._o,
      fade: {
        show() {
          return [{ opacity: 0 }, { opacity: 1 }];
        },
        percent(t) {
          return 1 - k(t, "opacity");
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
          return 1 - k(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: Sn(1 - 0.2 * t) },
            { opacity: t, transform: Sn(1 - 0.2 + 0.2 * t) }
          ];
        }
      }
    }, el = {
      mixins: [Eo, Za],
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
        Animations: tl,
        template: '<div class="uk-lightbox uk-overflow-hidden"> <div class="uk-lightbox-items"></div> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
      }),
      created() {
        const t = K(this.template), e = K(this.selList, t);
        this.items.forEach(() => Tt(e, "<div>"));
        const i = K("[uk-close]", t), a = this.t("close");
        i && a && (i.dataset.i18n = JSON.stringify({ label: a })), this.$mount(Tt(this.container, t));
      },
      events: [
        {
          name: `${Cs} ${de} keydown`,
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
            this.hideControls(), rt(this.slides, this.clsActive), ft.stop(this.slides);
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
            t === ct.LEFT ? e = "previous" : t === ct.RIGHT ? e = "next" : t === ct.HOME ? e = 0 : t === ct.END && (e = "last"), ~e && this.show(e);
          }
        },
        {
          name: "beforeitemshow",
          handler(t) {
            this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = tl.scale, rt(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
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
            const { source: i, type: a, alt: c = "", poster: d, attrs: f = {} } = e;
            if (this.setItem(e, "<span uk-spinner></span>"), !i)
              return;
            let m;
            const w = {
              allowfullscreen: "",
              style: "max-width: 100%; box-sizing: border-box;",
              "uk-responsive": "",
              "uk-video": `${this.videoAutoplay}`
            };
            if (a === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
              const $ = as("img", { src: i, alt: c, ...f });
              J($, "load", () => this.setItem(e, $)), J($, "error", () => this.setError(e));
            } else if (a === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
              const $ = as("video", {
                src: i,
                poster: d,
                controls: "",
                playsinline: "",
                "uk-video": `${this.videoAutoplay}`,
                ...f
              });
              J($, "loadedmetadata", () => this.setItem(e, $)), J($, "error", () => this.setError(e));
            } else if (a === "iframe" || i.match(/\.(html|php)($|\?)/i))
              this.setItem(
                e,
                as("iframe", {
                  src: i,
                  allowfullscreen: "",
                  class: "uk-lightbox-iframe",
                  ...f
                })
              );
            else if (m = i.match(
              /\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
            ))
              this.setItem(
                e,
                as("iframe", {
                  src: `https://www.youtube${m[1] || ""}.com/embed/${m[2]}${m[3] ? `?${m[3]}` : ""}`,
                  width: 1920,
                  height: 1080,
                  ...w,
                  ...f
                })
              );
            else if (m = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
              try {
                const { height: $, width: _ } = await (await fetch(
                  `https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(
                    i
                  )}`,
                  { credentials: "omit" }
                )).json();
                this.setItem(
                  e,
                  as("iframe", {
                    src: `https://player.vimeo.com/video/${m[1]}${m[2] ? `?${m[2]}` : ""}`,
                    width: _,
                    height: $,
                    ...w,
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
          return this.items[ee(t, this.slides)];
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
    function as(t, e) {
      const i = Ve(`<${t}>`);
      return L(i, e), i;
    }
    var nf = {
      install: sf,
      props: { toggle: String },
      data: { toggle: "a" },
      computed: {
        toggles: ({ toggle: t }, e) => wt(t, e)
      },
      watch: {
        toggles(t) {
          this.hide();
          for (const e of t)
            xt(e, "a") && L(e, "role", "button");
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
          const e = Hr(this.toggles.map(nl), "source");
          if (kt(t)) {
            const { source: i } = nl(t);
            t = P(e, ({ source: a }) => i === a);
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
      t.lightboxPanel || t.component("lightboxPanel", el), N(e.props, t.component("lightboxPanel").options.props);
    }
    function nl(t) {
      const e = {};
      for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
        e[i === "href" ? "source" : i] = Ut(t, i);
      return e.attrs = $n(e.attrs), e;
    }
    var of = {
      mixins: [ns],
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
        const t = `${this.clsContainer}-${this.pos}`, e = `data-${this.clsContainer}-container`, i = K(`.${t}[${e}]`, this.container) || Tt(
          this.container,
          `<div class="${this.clsContainer} ${t}" ${e}></div>`
        );
        this.$mount(
          Tt(
            i,
            `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`
          )
        );
      },
      async connected() {
        const t = Q(k(this.$el, this.marginProp));
        await ft.start(k(this.$el, this.startProps), {
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
          const e = (i) => {
            const a = ht(i);
            M(i, "close", [this]), ne(i), a != null && a.hasChildNodes() || ne(a);
          };
          this.timer && clearTimeout(this.timer), t || await ft.start(this.$el, this.startProps), e(this.$el);
        }
      }
    };
    function rf(t) {
      t.notification.closeAll = function(e, i) {
        Ne(document.body, (a) => {
          const c = t.getComponent(a, "notification");
          c && (!e || e === c.group) && c.close(i);
        });
      };
    }
    var ti = {
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
            this.matchMedia = this.mediaObj.matches, M(this.$el, vn("mediachange", !1, !0, [this.mediaObj]));
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
      if (bt(t)) {
        if (b(t, "@"))
          t = Q(k(e, `--uk-breakpoint-${t.slice(1)}`));
        else if (isNaN(t))
          return t;
      }
      return t && ye(t) ? `(min-width: ${t}px)` : "";
    }
    function sl(t) {
      return Ot(t) ? Math.ceil(
        Math.max(0, ...wt("[stroke]", t).map((e) => {
          var i;
          return ((i = e.getTotalLength) == null ? void 0 : i.call(e)) || 0;
        }))
      ) : 0;
    }
    const ei = {
      x: ni,
      y: ni,
      rotate: ni,
      scale: ni,
      color: Co,
      backgroundColor: Co,
      borderColor: Co,
      blur: tn,
      hue: tn,
      fopacity: tn,
      grayscale: tn,
      invert: tn,
      saturate: tn,
      sepia: tn,
      opacity: cf,
      stroke: uf,
      bgx: rl,
      bgy: rl
    }, { keys: il } = Object;
    var ol = {
      mixins: [ti],
      props: hl(il(ei), "list"),
      data: hl(il(ei), void 0),
      computed: {
        props(t, e) {
          const i = {};
          for (const c in t)
            c in ei && !Lt(t[c]) && (i[c] = t[c].slice());
          const a = {};
          for (const c in i)
            a[c] = ei[c](c, e, i[c], i);
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
            k(this.$el, t, "");
        },
        getCss(t) {
          const e = {};
          for (const i in this.props)
            this.props[i](e, zt(t));
          return e.willChange = Object.keys(e).map(Bs).join(","), e;
        }
      }
    };
    function ni(t, e, i) {
      let a = ii(i) || { x: "px", y: "px", rotate: "deg" }[t] || "", c;
      return t === "x" || t === "y" ? (t = `translate${g(t)}`, c = (d) => Q(Q(d).toFixed(a === "px" ? 0 : 6))) : t === "scale" && (a = "", c = (d) => {
        var f;
        return ii([d]) ? Ft(d, "width", e, !0) / e[`offset${(f = d.endsWith) != null && f.call(d, "vh") ? "Height" : "Width"}`] : Q(d);
      }), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = On(i, c), (d, f) => {
        d.transform = `${d.transform || ""} ${t}(${ls(i, f)}${a})`;
      };
    }
    function Co(t, e, i) {
      return i.length === 1 && i.unshift(cs(e, t, "")), i = On(i, (a) => lf(e, a)), (a, c) => {
        const [d, f, m] = ul(i, c), w = d.map(($, _) => ($ += m * (f[_] - $), _ === 3 ? Q($) : parseInt($, 10))).join(",");
        a[t] = `rgba(${w})`;
      };
    }
    function lf(t, e) {
      return cs(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(Q);
    }
    function tn(t, e, i) {
      i.length === 1 && i.unshift(0);
      const a = ii(i) || { blur: "px", hue: "deg" }[t] || "%";
      return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, i = On(i), (c, d) => {
        const f = ls(i, d);
        c.filter = `${c.filter || ""} ${t}(${f + a})`;
      };
    }
    function cf(t, e, i) {
      return i.length === 1 && i.unshift(cs(e, t, "")), i = On(i), (a, c) => {
        a[t] = ls(i, c);
      };
    }
    function uf(t, e, i) {
      i.length === 1 && i.unshift(0);
      const a = ii(i), c = sl(e);
      return i = On(i.reverse(), (d) => (d = Q(d), a === "%" ? d * c / 100 : d)), i.some(([d]) => d) ? (k(e, "strokeDasharray", c), (d, f) => {
        d.strokeDashoffset = ls(i, f);
      }) : lt;
    }
    function rl(t, e, i, a) {
      i.length === 1 && i.unshift(0);
      const c = t === "bgy" ? "height" : "width";
      a[t] = On(i, (m) => Ft(m, c, e));
      const d = ["bgx", "bgy"].filter((m) => m in a);
      if (d.length === 2 && t === "bgx")
        return lt;
      if (cs(e, "backgroundSize", "") === "cover")
        return hf(t, e, i, a);
      const f = {};
      for (const m of d)
        f[m] = al(e, m);
      return ll(d, f, a);
    }
    function hf(t, e, i, a) {
      const c = df(e);
      if (!c.width)
        return lt;
      const d = {
        width: e.offsetWidth,
        height: e.offsetHeight
      }, f = ["bgx", "bgy"].filter((_) => _ in a), m = {};
      for (const _ of f) {
        const R = a[_].map(([it]) => it), B = Math.min(...R), I = Math.max(...R), q = R.indexOf(B) < R.indexOf(I), tt = I - B;
        m[_] = `${(q ? -tt : 0) - (q ? B : I)}px`, d[_ === "bgy" ? "height" : "width"] += tt;
      }
      const w = Wi.cover(c, d);
      for (const _ of f) {
        const R = _ === "bgy" ? "height" : "width", B = w[R] - d[R];
        m[_] = `max(${al(e, _)},-${B}px) + ${m[_]}`;
      }
      const $ = ll(f, m, a);
      return (_, R) => {
        $(_, R), _.backgroundSize = `${w.width}px ${w.height}px`, _.backgroundRepeat = "no-repeat";
      };
    }
    function al(t, e) {
      return cs(t, `background-position-${e.slice(-1)}`, "");
    }
    function ll(t, e, i) {
      return function(a, c) {
        for (const d of t) {
          const f = ls(i[d], c);
          a[`background-position-${d.slice(-1)}`] = `calc(${e[d]} + ${f}px)`;
        }
      };
    }
    const cl = {}, si = {};
    function df(t) {
      const e = k(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
      if (si[e])
        return si[e];
      const i = new Image();
      return e && (i.src = e, !i.naturalWidth && !cl[e]) ? ($t(i, "error load", () => {
        si[e] = Ro(i), M(t, vn("load", !1));
      }), cl[e] = !0, Ro(i)) : si[e] = Ro(i);
    }
    function Ro(t) {
      return {
        width: t.naturalWidth,
        height: t.naturalHeight
      };
    }
    function On(t, e = Q) {
      const i = [], { length: a } = t;
      let c = 0;
      for (let d = 0; d < a; d++) {
        let [f, m] = bt(t[d]) ? t[d].trim().split(/ (?![^(]*\))/) : [t[d]];
        if (f = e(f), m = m ? Q(m) / 100 : null, d === 0 ? m === null ? m = 0 : m && i.push([f, 0]) : d === a - 1 && (m === null ? m = 1 : m !== 1 && (i.push([f, m]), m = 1)), i.push([f, m]), m === null)
          c++;
        else if (c) {
          const w = i[d - c - 1][1], $ = (m - w) / (c + 1);
          for (let _ = c; _ > 0; _--)
            i[d - _][1] = w + $ * (c - _ + 1);
          c = 0;
        }
      }
      return i;
    }
    function ul(t, e) {
      const i = P(t.slice(1), ([, a]) => e <= a) + 1;
      return [
        t[i - 1][0],
        t[i][0],
        (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])
      ];
    }
    function ls(t, e) {
      const [i, a, c] = ul(t, e);
      return i + Math.abs(i - a) * c * (i < a ? 1 : -1);
    }
    const ff = /^-?\d+(?:\.\d+)?(\S+)?/;
    function ii(t, e) {
      var i;
      for (const a of t) {
        const c = (i = a.match) == null ? void 0 : i.call(a, ff);
        if (c)
          return c[1];
      }
      return e;
    }
    function cs(t, e, i) {
      const a = t.style[e], c = k(k(t, e, i), e);
      return t.style[e] = a, c;
    }
    function hl(t, e) {
      return t.reduce((i, a) => (i[a] = e, i), {});
    }
    function dl(t, e) {
      return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    var pf = {
      mixins: [ol],
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
        target: ({ target: t }, e) => fl(t && qt(t, e) || e),
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
        wo(),
        ts({ target: ({ target: t }) => t }),
        fe({ target: ({ $el: t, target: e }) => [t, e, Fe(e, !0)] })
      ],
      update: {
        read({ percent: t }, e) {
          if (e.has("scroll") || (t = !1), !Ot(this.$el))
            return !1;
          if (!this.matchMedia)
            return;
          const i = t;
          return t = dl(Js(this.target, this.start, this.end), this.easing), {
            percent: t,
            style: i === t ? !1 : this.getCss(t)
          };
        },
        write({ style: t }) {
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          t && k(this.$el, t);
        },
        events: ["scroll", "resize"]
      }
    };
    function fl(t) {
      return t ? "offsetTop" in t ? t : fl(ht(t)) : document.documentElement;
    }
    var pl = {
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
        ts({ filter: ({ parallax: t }) => t })
      ],
      computed: {
        parallaxTarget({ parallaxTarget: t }, e) {
          return t && qt(t, e) || this.list;
        }
      },
      update: {
        read() {
          if (!this.parallax)
            return !1;
          const t = this.parallaxTarget;
          if (!t)
            return !1;
          const e = Ft(this.parallaxStart, "height", t, !0), i = Ft(this.parallaxEnd, "height", t, !0), a = dl(Js(t, e, i), this.parallaxEasing);
          return { parallax: this.getIndexAt(a) };
        },
        write({ parallax: t }) {
          const [e, i] = t, a = this.getValidIndex(e + Math.ceil(i)), c = this.slides[e], d = this.slides[a], { triggerShow: f, triggerShown: m, triggerHide: w, triggerHidden: $ } = mf(this);
          if (~this.prevIndex)
            for (const R of /* @__PURE__ */ new Set([this.index, this.prevIndex]))
              E([a, e], R) || (w(this.slides[R]), $(this.slides[R]));
          const _ = this.prevIndex !== e || this.index !== a;
          this.dir = 1, this.prevIndex = e, this.index = a, c !== d && w(c), f(d), _ && m(c), this._translate(c === d ? 1 : i, c, d);
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
      const { clsSlideActive: e, clsEnter: i, clsLeave: a } = t;
      return { triggerShow: c, triggerShown: d, triggerHide: f, triggerHidden: m };
      function c(w) {
        V(w, a) && (f(w), m(w)), V(w, e) || (M(w, "beforeitemshow", [t]), M(w, "itemshow", [t]));
      }
      function d(w) {
        V(w, i) && M(w, "itemshown", [t]);
      }
      function f(w) {
        V(w, e) || c(w), V(w, i) && d(w), V(w, a) || (M(w, "beforeitemhide", [t]), M(w, "itemhide", [t]));
      }
      function m(w) {
        V(w, a) && M(w, "itemhidden", [t]);
      }
    }
    var ml = {
      update: {
        write() {
          if (this.stack.length || this.dragging || this.parallax)
            return;
          const t = this.getValidIndex();
          !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1);
        },
        events: ["resize"]
      }
    }, gl = {
      observe: Xs({
        target: ({ slides: t }) => t,
        targets: (t) => t.getAdjacentSlides()
      }),
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        }
      }
    };
    function gf(t, e, i, { center: a, easing: c, list: d }) {
      const f = t ? us(t, d, a) : us(e, d, a) + j(e).width * i, m = e ? us(e, d, a) : f + j(t).width * i * (Nt ? -1 : 1), { promise: w, resolve: $ } = Ia();
      return {
        dir: i,
        show(_, R = 0, B) {
          const I = B ? "linear" : c;
          return _ -= Math.round(_ * zt(R, -1, 1)), k(d, "transitionProperty", "none"), this.translate(R), k(d, "transitionProperty", ""), R = t ? R : zt(R, 0, 1), Ye(this.getItemIn(), "itemin", { percent: R, duration: _, timing: I, dir: i }), t && Ye(this.getItemIn(!0), "itemout", {
            percent: 1 - R,
            duration: _,
            timing: I,
            dir: i
          }), ft.start(
            d,
            { transform: St(-m * (Nt ? -1 : 1), "px") },
            _,
            I
          ).then($, lt), w;
        },
        cancel() {
          return ft.cancel(d);
        },
        reset() {
          k(d, "transform", "");
        },
        async forward(_, R = this.percent()) {
          return await this.cancel(), this.show(_, R, !0);
        },
        translate(_) {
          if (_ === this.percent())
            return;
          const R = this.getDistance() * i * (Nt ? -1 : 1);
          k(
            d,
            "transform",
            St(
              zt(
                -m + (R - R * _),
                -Tn(d),
                j(d).width
              ) * (Nt ? -1 : 1),
              "px"
            )
          );
          const B = this.getActives(), I = this.getItemIn(), q = this.getItemIn(!0);
          _ = t ? zt(_, -1, 1) : 0;
          for (const tt of dt(d)) {
            const it = E(B, tt), ke = tt === I, An = tt === q, Cn = ke || !An && (it || i * (Nt ? -1 : 1) === -1 ^ oi(tt, d) > oi(t || e));
            Ye(tt, `itemtranslate${Cn ? "in" : "out"}`, {
              dir: i,
              percent: An ? 1 - _ : ke ? _ : it ? 1 : 0
            });
          }
        },
        percent() {
          return Math.abs(
            (new DOMMatrix(k(d, "transform")).m41 * (Nt ? -1 : 1) + f) / (m - f)
          );
        },
        getDistance() {
          return Math.abs(m - f);
        },
        getItemIn(_ = !1) {
          let R = this.getActives(), B = wl(d, us(e || t, d, a));
          if (_) {
            const I = R;
            R = B, B = I;
          }
          return B[P(B, (I) => !E(R, I))];
        },
        getActives() {
          return wl(d, us(t || e, d, a));
        }
      };
    }
    function us(t, e, i) {
      const a = oi(t, e);
      return i ? a - bf(t, e) : Math.min(a, bl(e));
    }
    function bl(t) {
      return Math.max(0, Tn(t) - j(t).width);
    }
    function Tn(t, e) {
      return ze(dt(t).slice(0, e), (i) => j(i).width);
    }
    function bf(t, e) {
      return j(e).width / 2 - j(t).width / 2;
    }
    function oi(t, e) {
      return t && (so(t).left + (Nt ? j(t).width - j(e).width : 0)) * (Nt ? -1 : 1) || 0;
    }
    function wl(t, e) {
      e -= 1;
      const i = j(t).width, a = e + i + 2;
      return dt(t).filter((c) => {
        const d = oi(c, t), f = d + Math.min(j(c).width, i);
        return d >= e && f <= a;
      });
    }
    var wf = {
      mixins: [Jt, Ya, ml, pl, gl],
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
          return t || vf(this.list, this.center);
        },
        maxIndex() {
          if (!this.finite || this.center && !this.sets)
            return this.length - 1;
          if (this.center)
            return Me(this.sets);
          let t = 0;
          const e = bl(this.list), i = P(this.slides, (a) => {
            if (t >= e - 5e-3)
              return !0;
            t += j(a).width;
          });
          return ~i ? i : this.length - 1;
        },
        sets({ sets: t }) {
          if (!t || this.parallax)
            return;
          let e = 0;
          const i = [], a = j(this.list).width;
          for (let c = 0; c < this.length; c++) {
            const d = j(this.slides[c]).width;
            e + d > a && (e = 0), this.center ? e < a / 2 && e + d + j(this.slides[ee(c + 1, this.slides)]).width / 2 > a / 2 && (i.push(c), e = a / 2 - d / 2) : e === 0 && i.push(Math.min(c, this.maxIndex)), e += d;
          }
          if (i.length)
            return i;
        },
        transitionOptions() {
          return {
            center: this.center,
            list: this.list
          };
        },
        slides() {
          return dt(this.list).filter(Ot);
        }
      },
      connected() {
        _t(this.$el, this.clsContainer, !K(`.${this.clsContainer}`, this.$el));
      },
      observe: fe({
        target: ({ slides: t, $el: e }) => [e, ...t]
      }),
      update: {
        write() {
          for (const t of this.navItems) {
            const e = xe(Ut(t, this.attrItem));
            e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !E(this.sets, e));
          }
          this.reorder(), this.parallax || this._translate(1), this.updateActiveClasses();
        },
        events: ["resize"]
      },
      events: {
        beforeitemshow(t) {
          !this.dragging && this.sets && this.stack.length < 2 && !E(this.sets, this.index) && (this.index = this.getValidIndex());
          const e = Math.abs(
            this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
          );
          if (!this.dragging && e > 1) {
            for (let c = 0; c < e; c++)
              this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
            t.preventDefault();
            return;
          }
          const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex, a = Tn(this.list) / this.length;
          this.duration = Qa(a / this.velocity) * (j(this.slides[i]).width / a), this.reorder();
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
            k(this.slides, "order", "");
            return;
          }
          const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
          if (this.slides.forEach(
            (c, d) => k(
              c,
              "order",
              this.dir > 0 && d < t ? 1 : this.dir < 0 && d >= this.index ? -1 : ""
            )
          ), !this.center || !this.length)
            return;
          const e = this.slides[t];
          let i = j(this.list).width / 2 - j(e).width / 2, a = 0;
          for (; i > 0; ) {
            const c = this.getIndex(--a + t, t), d = this.slides[c];
            k(d, "order", c > t ? -2 : -1), i -= j(d).width;
          }
        },
        updateActiveClasses(t = this.index) {
          let e = this._getTransitioner(t).getActives();
          this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
          const i = [
            this.clsActive,
            !this.sets || E(this.sets, Q(this.index)) ? this.clsActivated : ""
          ];
          for (const a of this.slides) {
            const c = E(e, a);
            _t(a, i, c), L(a, "aria-hidden", !c);
            for (const d of wt(zn, a))
              l(d, "_tabindex") || (d._tabindex = L(d, "tabindex")), L(d, "tabindex", c ? d._tabindex : -1);
          }
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          if (t = this.getIndex(t, e), !this.sets)
            return t;
          let i;
          do {
            if (E(this.sets, t))
              return t;
            i = t, t = this.getIndex(t + this.dir, e);
          } while (t !== i);
          return t;
        },
        getAdjacentSlides() {
          const { width: t } = j(this.list), e = -t, i = t * 2, a = j(this.slides[this.index]).width, c = this.center ? t / 2 - a / 2 : 0, d = /* @__PURE__ */ new Set();
          for (const f of [-1, 1]) {
            let m = c + (f > 0 ? a : 0), w = 0;
            do {
              const $ = this.slides[this.getIndex(this.index + f + w++ * f)];
              m += j($).width * f, d.add($);
            } while (this.length > w && m > e && m < i);
          }
          return Array.from(d);
        },
        getIndexAt(t) {
          let e = -1;
          const i = this.center ? Tn(this.list) - (j(this.slides[0]).width / 2 + j(Me(this.slides)).width / 2) : Tn(this.list, this.maxIndex);
          let a = t * i, c = 0;
          do {
            const d = j(this.slides[++e]).width, f = this.center ? d / 2 + j(this.slides[e + 1]).width / 2 : d;
            c = a / f % 1, a -= f;
          } while (a >= 0 && e < this.maxIndex);
          return [e, c];
        }
      }
    };
    function vf(t, e) {
      if (!t || t.length < 2)
        return !0;
      const { width: i } = j(t);
      if (!e)
        return Math.ceil(Tn(t)) < Math.trunc(i + yf(t));
      const a = dt(t), c = Math.trunc(i / 2);
      for (const d in a) {
        const f = a[d], m = j(f).width, w = /* @__PURE__ */ new Set([f]);
        let $ = 0;
        for (const _ of [-1, 1]) {
          let R = m / 2, B = 0;
          for (; R < c; ) {
            const I = a[ee(+d + _ + B++ * _, a)];
            if (w.has(I))
              return !0;
            R += j(I).width, w.add(I);
          }
          $ = Math.max(
            $,
            m / 2 + j(a[ee(+d + _, a)]).width / 2 - (R - c)
          );
        }
        if (Math.trunc($) > ze(
          a.filter((_) => !w.has(_)),
          (_) => j(_).width
        ))
          return !0;
      }
      return !1;
    }
    function yf(t) {
      return Math.max(0, ...dt(t).map((e) => j(e).width));
    }
    var vl = {
      mixins: [ol],
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
          handler({ type: t, detail: { percent: e, duration: i, timing: a, dir: c } }) {
            Be.read(() => {
              if (!this.matchMedia)
                return;
              const d = this.getCss(kl(t, c, e)), f = this.getCss(yl(t) ? 0.5 : c > 0 ? 1 : 0);
              Be.write(() => {
                k(this.$el, d), ft.start(this.$el, f, i, a).catch(lt);
              });
            });
          }
        },
        {
          name: "transitioncanceled transitionend",
          self: !0,
          el: ({ item: t }) => t,
          handler() {
            ft.cancel(this.$el);
          }
        },
        {
          name: "itemtranslatein itemtranslateout",
          self: !0,
          el: ({ item: t }) => t,
          handler({ type: t, detail: { percent: e, dir: i } }) {
            Be.read(() => {
              if (!this.matchMedia) {
                this.reset();
                return;
              }
              const a = this.getCss(kl(t, i, e));
              Be.write(() => k(this.$el, a));
            });
          }
        }
      ]
    };
    function yl(t) {
      return x(t, "in");
    }
    function kl(t, e, i) {
      return i /= 2, yl(t) ^ e < 0 ? i : 1 - i;
    }
    var kf = {
      ..._o,
      fade: {
        show() {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - k(t, "opacity");
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
          return 1 - k(t, "opacity");
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
            { transform: St(30), zIndex: -1 },
            { transform: St(), zIndex: 0 }
          ] : [
            { transform: St(-100), zIndex: 0 },
            { transform: St(), zIndex: -1 }
          ];
        },
        percent(t, e, i) {
          return i < 0 ? 1 - ss(e) : ss(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: St(30 * t), zIndex: -1 },
            { transform: St(-100 * (1 - t)), zIndex: 0 }
          ] : [
            { transform: St(-t * 100), zIndex: 0 },
            { transform: St(30 * (1 - t)), zIndex: -1 }
          ];
        }
      },
      push: {
        show(t) {
          return t < 0 ? [
            { transform: St(100), zIndex: 0 },
            { transform: St(), zIndex: -1 }
          ] : [
            { transform: St(-30), zIndex: -1 },
            { transform: St(), zIndex: 0 }
          ];
        },
        percent(t, e, i) {
          return i > 0 ? 1 - ss(e) : ss(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: St(t * 100), zIndex: 0 },
            { transform: St(-30 * (1 - t)), zIndex: -1 }
          ] : [
            { transform: St(-30 * t), zIndex: -1 },
            { transform: St(100 * (1 - t)), zIndex: 0 }
          ];
        }
      }
    }, $f = {
      mixins: [Jt, Za, ml, pl, gl],
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
        Animations: kf
      },
      watch: {
        list(t) {
          k(t, {
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
      mixins: [Jt, Ra],
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
          return dt(this.target);
        },
        isEmpty() {
          return !this.items.length;
        },
        handles({ handle: t }, e) {
          return t ? wt(t, e) : this.items;
        }
      },
      watch: {
        isEmpty(t) {
          _t(this.target, this.clsEmpty, t);
        },
        handles(t, e) {
          k(e, { touchAction: "", userSelect: "" }), k(t, { touchAction: "none", userSelect: "none" });
        }
      },
      update: {
        write(t) {
          if (!this.drag || !ht(this.placeholder))
            return;
          const {
            pos: { x: e, y: i },
            origin: { offsetTop: a, offsetLeft: c },
            placeholder: d
          } = this;
          k(this.drag, {
            top: i - a,
            left: e - c
          });
          const f = this.getSortable(document.elementFromPoint(e, i));
          if (!f)
            return;
          const { items: m } = f;
          if (m.some(ft.inProgress))
            return;
          const w = Of(m, { x: e, y: i });
          if (m.length && (!w || w === d))
            return;
          const $ = this.getSortable(d), _ = Tf(
            f.target,
            w,
            d,
            e,
            i,
            f === $ && t.moved !== w
          );
          _ !== !1 && (_ && d === _ || (f !== $ ? ($.remove(d), t.moved = w) : delete t.moved, f.insert(d, _), this.touched.add(f)));
        },
        events: ["move"]
      },
      methods: {
        init(t) {
          const { target: e, button: i, defaultPrevented: a } = t, [c] = this.items.filter((d) => d.contains(e));
          !c || a || i > 0 || Ps(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = Ee(t), this.touched = /* @__PURE__ */ new Set([this]), this.placeholder = c, this.origin = { target: e, index: Se(c), ...this.pos }, J(document, Cs, this.move), J(document, Ae, this.end), this.threshold || this.start(t));
        },
        start(t) {
          this.drag = _f(this.$container, this.placeholder);
          const { left: e, top: i } = j(this.placeholder);
          N(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - i }), Z(this.drag, this.clsDrag, this.clsCustom), Z(this.placeholder, this.clsPlaceholder), Z(this.items, this.clsItem), Z(document.documentElement, this.clsDragState), M(this.$el, "start", [this, this.placeholder]), Sf(this.pos), this.move(t);
        },
        move: Cf(function(t) {
          N(this.pos, Ee(t)), !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t), this.$emit("move");
        }),
        end() {
          if (Ce(document, Cs, this.move), Ce(document, Ae, this.end), !this.drag)
            return;
          Ef();
          const t = this.getSortable(this.placeholder);
          this === t ? this.origin.index !== Se(this.placeholder) && M(this.$el, "moved", [this, this.placeholder]) : (M(t.$el, "added", [t, this.placeholder]), M(this.$el, "removed", [this, this.placeholder])), M(this.$el, "stop", [this, this.placeholder]), ne(this.drag), this.drag = null;
          for (const { clsPlaceholder: e, clsItem: i } of this.touched)
            for (const a of this.touched)
              rt(a.items, e, i);
          this.touched = null, rt(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          Z(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => Is(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => Tt(this.target, t));
        },
        remove(t) {
          this.target.contains(t) && this.animate(() => ne(t));
        },
        getSortable(t) {
          do {
            const e = this.$getComponent(t, "sortable");
            if (e && (e === this || this.group !== !1 && e.group === this.group))
              return e;
          } while (t = ht(t));
        }
      }
    };
    let $l;
    function Sf(t) {
      let e = Date.now();
      $l = setInterval(() => {
        let { x: i, y: a } = t;
        a += document.scrollingElement.scrollTop;
        const c = (Date.now() - e) * 0.3;
        e = Date.now(), Ke(document.elementFromPoint(i, t.y)).reverse().some((d) => {
          let { scrollTop: f, scrollHeight: m } = d;
          const { top: w, bottom: $, height: _ } = se(d);
          if (w < a && w + 35 > a)
            f -= c;
          else if ($ > a && $ - 35 < a)
            f += c;
          else
            return;
          if (f > 0 && f < m - _)
            return d.scrollTop = f, !0;
        });
      }, 15);
    }
    function Ef() {
      clearInterval($l);
    }
    function _f(t, e) {
      let i;
      if (xt(e, "li", "tr")) {
        i = K("<div>"), Tt(i, e.cloneNode(!0).children);
        for (const a of e.getAttributeNames())
          L(i, a, e.getAttribute(a));
      } else
        i = e.cloneNode(!0);
      return Tt(t, i), k(i, "margin", "0", "important"), k(i, {
        boxSizing: "border-box",
        width: e.offsetWidth,
        height: e.offsetHeight,
        padding: k(e, "padding")
      }), Vt(i.firstElementChild, Vt(e.firstElementChild)), i;
    }
    function Of(t, e) {
      return t[P(t, (i) => Ts(e, j(i)))];
    }
    function Tf(t, e, i, a, c, d) {
      if (!dt(t).length)
        return;
      const f = j(e);
      if (!d)
        return Af(t, i) || c < f.top + f.height / 2 ? e : e.nextElementSibling;
      const m = j(i), w = xl(
        [f.top, f.bottom],
        [m.top, m.bottom]
      ), [$, _, R, B] = w ? [a, "width", "left", "right"] : [c, "height", "top", "bottom"], I = m[_] < f[_] ? f[_] - m[_] : 0;
      return m[R] < f[R] ? I && $ < f[R] + I ? !1 : e.nextElementSibling : I && $ > f[B] - I ? !1 : e;
    }
    function Af(t, e) {
      const i = dt(t).length === 1;
      i && Tt(t, e);
      const a = dt(t), c = a.some((d, f) => {
        const m = j(d);
        return a.slice(f + 1).some((w) => {
          const $ = j(w);
          return !xl([m.left, m.right], [$.left, $.right]);
        });
      });
      return i && ne(e), c;
    }
    function xl(t, e) {
      return t[1] > e[0] && e[1] > t[0];
    }
    function Cf(t) {
      let e;
      return function(...i) {
        e || (e = !0, t.call(this, ...i), requestAnimationFrame(() => e = !1));
      };
    }
    var Sl = {
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
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = E(["top", "bottom"], this.dir) ? "y" : "x";
      },
      methods: {
        positionAt(t, e, i) {
          let a = [this.getPositionOffset(t), this.getShiftOffset(t)];
          const c = [this.flip && "flip", this.shift && "shift"], d = {
            element: [this.inset ? this.dir : Ms(this.dir), this.align],
            target: [this.dir, this.align]
          };
          if (this.axis === "y") {
            for (const w in d)
              d[w].reverse();
            a.reverse(), c.reverse();
          }
          const f = El(t), m = j(t);
          k(t, { top: -m.height, left: -m.width }), ma(t, e, {
            attach: d,
            offset: a,
            boundary: i,
            placement: c,
            viewportOffset: this.getViewportOffset(t)
          }), f();
        },
        getPositionOffset(t = this.$el) {
          return Ft(
            this.offset === !1 ? k(t, "--uk-position-offset") : this.offset,
            this.axis === "x" ? "width" : "height",
            t
          ) * (E(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
        },
        getShiftOffset(t = this.$el) {
          return this.align === "center" ? 0 : Ft(
            k(t, "--uk-position-shift-offset"),
            this.axis === "y" ? "width" : "height",
            t
          ) * (E(["left", "top"], this.align) ? 1 : -1);
        },
        getViewportOffset(t) {
          return Ft(k(t, "--uk-position-viewport-offset"));
        }
      }
    };
    function El(t) {
      const e = Fe(t), { scrollTop: i } = e;
      return () => {
        i !== e.scrollTop && (e.scrollTop = i);
      };
    }
    var Rf = {
      mixins: [ns, Xe, Sl],
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
          const i = L(this.$el, "title"), a = J(this.$el, ["blur", bn], (d) => !pe(d) && this.hide());
          this.reset = () => {
            L(this.$el, { title: i, "aria-describedby": null }), a();
          };
          const c = Ze(this);
          L(this.$el, { title: null, "aria-describedby": c }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, c), t);
        },
        async hide() {
          var t;
          st(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), (t = this.reset) == null || t.call(this), ne(this.tooltip), this.tooltip = null);
        },
        async _show(t, e) {
          this.tooltip = Tt(
            this.container,
            `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`
          ), J(this.tooltip, "toggled", (i, a) => {
            if (!a)
              return;
            const c = () => this.positionAt(this.tooltip, this.$el);
            c();
            const [d, f] = Nf(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? `${Ms(d)}-${f}` : `${f}-${Ms(d)}`;
            const m = [
              $t(
                document,
                `keydown ${de}`,
                this.hide,
                !1,
                (w) => w.type === de && !this.$el.contains(w.target) || w.type === "keydown" && w.keyCode === ct.ESC
              ),
              J([document, ...Ge(this.$el)], "scroll", c, {
                passive: !0
              })
            ];
            $t(this.tooltip, "hide", () => m.forEach((w) => w()), {
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
      Ns(t) || L(t, "tabindex", "0");
    }
    function Nf(t, e, [i, a]) {
      const c = et(t), d = et(e), f = [
        ["left", "right"],
        ["top", "bottom"]
      ];
      for (const w of f) {
        if (c[w[0]] >= d[w[1]]) {
          i = w[1];
          break;
        }
        if (c[w[1]] <= d[w[0]]) {
          i = w[0];
          break;
        }
      }
      return a = (E(f[0], i) ? f[1] : f[0]).find((w) => c[w] === d[w]) || "center", [i, a];
    }
    function Bf(t) {
      const { el: e, id: i, data: a } = t;
      return ["delay", "title"].reduce((c, d) => ({ [d]: Ut(e, d), ...c }), {
        ...$n(Ut(e, i), ["title"]),
        ...a
      });
    }
    var Ff = {
      mixins: [Qs],
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
        abort: lt,
        beforeAll: lt,
        beforeSend: lt,
        complete: lt,
        completeAll: lt,
        error: lt,
        fail: lt,
        load: lt,
        loadEnd: lt,
        loadStart: lt,
        progress: lt
      },
      events: {
        change(t) {
          st(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
        },
        drop(t) {
          ri(t);
          const e = t.dataTransfer;
          e != null && e.files && (rt(this.$el, this.clsDragover), this.upload(e.files));
        },
        dragenter(t) {
          ri(t);
        },
        dragover(t) {
          ri(t), Z(this.$el, this.clsDragover);
        },
        dragleave(t) {
          ri(t), rt(this.$el, this.clsDragover);
        }
      },
      methods: {
        async upload(t) {
          if (t = S(t), !t.length)
            return;
          M(this.$el, "upload", [t]);
          for (const a of t) {
            if (this.maxSize && this.maxSize * 1e3 < a.size) {
              this.fail(this.t("invalidSize", this.maxSize));
              return;
            }
            if (this.allow && !_l(this.allow, a.name)) {
              this.fail(this.t("invalidName", this.allow));
              return;
            }
            if (this.mime && !_l(this.mime, a.type)) {
              this.fail(this.t("invalidMime", this.mime));
              return;
            }
          }
          this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
          const e = If(t, this.concurrent), i = async (a) => {
            const c = new FormData();
            a.forEach((d) => c.append(this.name, d));
            for (const d in this.params)
              c.append(d, this.params[d]);
            try {
              const d = await Df(this.url, {
                data: c,
                method: this.method,
                responseType: this.type,
                beforeSend: (f) => {
                  const { xhr: m } = f;
                  J(m.upload, "progress", this.progress);
                  for (const w of ["loadStart", "load", "loadEnd", "abort"])
                    J(m, w.toLowerCase(), this[w]);
                  return this.beforeSend(f);
                }
              });
              this.complete(d), e.length ? await i(e.shift()) : this.completeAll(d);
            } catch (d) {
              this.error(d);
            }
          };
          await i(e.shift());
        }
      }
    };
    function _l(t, e) {
      return e.match(
        new RegExp(
          `^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`,
          "i"
        )
      );
    }
    function If(t, e) {
      const i = [];
      for (let a = 0; a < t.length; a += e)
        i.push(t.slice(a, a + e));
      return i;
    }
    function ri(t) {
      t.preventDefault(), t.stopPropagation();
    }
    async function Df(t, e) {
      const i = {
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: lt,
        responseType: "",
        ...e
      };
      return await i.beforeSend(i), Lf(t, i);
    }
    function Lf(t, e) {
      return new Promise((i, a) => {
        const { xhr: c } = e;
        for (const d in e)
          if (d in c)
            try {
              c[d] = e[d];
            } catch {
            }
        c.open(e.method.toUpperCase(), t);
        for (const d in e.headers)
          c.setRequestHeader(d, e.headers[d]);
        J(c, "load", () => {
          c.status === 0 || c.status >= 200 && c.status < 300 || c.status === 304 ? i(c) : a(
            N(Error(c.statusText), {
              xhr: c,
              status: c.status
            })
          );
        }), J(c, "error", () => a(N(Error("Network Error"), { xhr: c }))), J(c, "timeout", () => a(N(Error("Network Timeout"), { xhr: c }))), c.send(e.data);
      });
    }
    var Uf = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Countdown: Zh,
      Filter: fd,
      Lightbox: nf,
      LightboxPanel: el,
      Notification: of,
      Parallax: pf,
      Slider: wf,
      SliderParallax: vl,
      Slideshow: $f,
      SlideshowParallax: vl,
      Sortable: xf,
      Tooltip: Rf,
      Upload: Ff
    });
    function jf(t) {
      qe && window.MutationObserver && (document.body ? requestAnimationFrame(() => Ol(t)) : new MutationObserver((e, i) => {
        document.body && (Ol(t), i.disconnect());
      }).observe(document.documentElement, { childList: !0 }));
    }
    function Ol(t) {
      M(document, "uikit:init", t), document.body && Ne(document.body, Tl), new MutationObserver((e) => e.forEach(Mf)).observe(document, {
        subtree: !0,
        childList: !0
      }), new MutationObserver((e) => e.forEach(zf)).observe(document, {
        subtree: !0,
        attributes: !0
      }), t._initialized = !0;
    }
    function Mf({ addedNodes: t, removedNodes: e }) {
      for (const i of t)
        Ne(i, Tl);
      for (const i of e)
        Ne(i, Hf);
    }
    function zf({ target: t, attributeName: e }) {
      var i;
      const a = Al(e);
      a && (Te(t, e) ? os(a, t) : (i = Zs(t, a)) == null || i.$destroy());
    }
    function Tl(t) {
      const e = rs(t);
      for (const i in e)
        To(e[i]);
      for (const i of t.getAttributeNames()) {
        const a = Al(i);
        a && os(a, t);
      }
    }
    function Hf(t) {
      const e = rs(t);
      for (const i in e)
        Ao(e[i]);
    }
    function Al(t) {
      b(t, "data-") && (t = t.slice(5));
      const e = _n[t];
      return e && (e.options || e).name;
    }
    Gd(oe), Xd(oe);
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
        items: ({ targets: t }, e) => wt(t, e),
        toggles({ toggle: t }) {
          return this.items.map((e) => K(t, e));
        },
        contents({ content: t }) {
          return this.items.map((e) => {
            var i;
            return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || K(t, e);
          });
        }
      },
      watch: {
        items(t, e) {
          if (e || V(t, this.clsOpen))
            return;
          const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
          i && this.toggle(i, !1);
        },
        toggles() {
          this.$emit();
        },
        contents(t) {
          for (const e of t) {
            const i = V(
              this.items.find((a) => a.contains(e)),
              this.clsOpen
            );
            ai(e, !i);
          }
          this.$emit();
        }
      },
      observe: Xs(),
      events: [
        {
          name: "click keydown",
          delegate: ({ targets: t, $props: e }) => `${t} ${e.toggle}`,
          async handler(t) {
            var e;
            t.type === "keydown" && t.keyCode !== ct.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = Wf(t.target), await this.toggle(Se(this.toggles, t.current)), this._off());
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
        const t = Hn(this.items, `.${this.clsOpen}`);
        for (const e in this.items) {
          const i = this.toggles[e], a = this.contents[e];
          if (!i || !a)
            continue;
          i.id = Ze(this, i), a.id = Ze(this, a);
          const c = E(t, this.items[e]);
          L(i, {
            role: xt(i, "a") ? "button" : null,
            "aria-controls": a.id,
            "aria-expanded": c,
            "aria-disabled": !this.collapsible && t.length < 2 && c
          }), L(a, { role: "region", "aria-labelledby": i.id }), xt(a, "ul") && L(dt(a), "role", "presentation");
        }
      },
      methods: {
        toggle(t, e) {
          t = this.items[ee(t, this.items)];
          let i = [t];
          const a = Hn(this.items, `.${this.clsOpen}`);
          if (!this.multiple && !E(a, i[0]) && (i = i.concat(a)), !(!this.collapsible && a.length < 2 && E(a, t)))
            return Promise.all(
              i.map(
                (c) => this.toggleElement(c, !E(a, c), (d, f) => {
                  if (_t(d, this.clsOpen, f), e === !1 || !this.animation) {
                    ai(K(this.content, d), !f);
                    return;
                  }
                  return qf(d, f, this);
                })
              )
            );
        }
      }
    };
    function ai(t, e) {
      t && (t.hidden = e);
    }
    async function qf(t, e, { content: i, duration: a, velocity: c, transition: d }) {
      var f;
      i = ((f = t._wrapper) == null ? void 0 : f.firstElementChild) || K(i, t), t._wrapper || (t._wrapper = Us(i, "<div>"));
      const m = t._wrapper;
      k(m, "overflow", "hidden");
      const w = Q(k(m, "height"));
      await ft.cancel(m), ai(i, !1);
      const $ = ze(["marginTop", "marginBottom"], (R) => k(i, R)) + j(i).height, _ = w / $;
      a = (c * $ + a) * (e ? 1 - _ : _), k(m, "height", w), await ft.start(m, { height: e ? $ : 0 }, a, d), Kn(i), delete t._wrapper, e || ai(i, !0);
    }
    function Wf(t) {
      const e = Fe(t, !0);
      let i;
      return function a() {
        i = requestAnimationFrame(() => {
          const { top: c } = j(t);
          c < 0 && (e.scrollTop += c), a();
        });
      }(), () => requestAnimationFrame(() => cancelAnimationFrame(i));
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
    function Jf(t, e, { duration: i, transition: a, velocity: c }) {
      const d = Q(k(t, "height"));
      return k(t, "height", d), ft.start(
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
        c * d + i,
        a
      );
    }
    var Rl = {
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
        this.autoplay === "inview" && !Te(this.$el, "preload") && (this.$el.preload = "none"), xt(this.$el, "iframe") && !Te(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && (xt(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = !0), this.automute && la(this.$el);
      },
      events: [
        {
          name: `${We} focusin`,
          filter: ({ autoplay: t }) => E(t, "hover"),
          handler(t) {
            !pe(t) || !Kf(this.$el) ? lo(this.$el) : qs(this.$el);
          }
        },
        {
          name: `${bn} focusout`,
          filter: ({ autoplay: t }) => E(t, "hover"),
          handler(t) {
            pe(t) || qs(this.$el);
          }
        }
      ],
      observe: [
        xn({
          filter: ({ $el: t, autoplay: e }) => e !== "hover" && ca(t),
          handler([{ isIntersecting: t }]) {
            document.fullscreenElement || (t ? this.autoplay && lo(this.$el) : qs(this.$el));
          },
          args: { intersecting: !1 },
          options: ({ $el: t, autoplay: e }) => ({ root: e === "inview" ? null : ht(t) })
        })
      ]
    };
    function Kf(t) {
      return !t.paused && !t.ended;
    }
    var Gf = {
      mixins: [Rl],
      props: {
        width: Number,
        height: Number
      },
      data: {
        automute: !0
      },
      created() {
        this.useObjectFit = xt(this.$el, "img", "video");
      },
      observe: fe({
        target: ({ $el: t }) => Pl(t) || ht(t),
        filter: ({ useObjectFit: t }) => !t
      }),
      update: {
        read() {
          if (this.useObjectFit)
            return !1;
          const { ratio: t, cover: e } = Wi, { $el: i, width: a, height: c } = this;
          let d = { width: a, height: c };
          if (!a || !c) {
            const $ = {
              width: i.naturalWidth || i.videoWidth || i.clientWidth,
              height: i.naturalHeight || i.videoHeight || i.clientHeight
            };
            a ? d = t($, "width", a) : c ? d = t($, "height", c) : d = $;
          }
          const { offsetHeight: f, offsetWidth: m } = Pl(i) || ht(i), w = e(d, { width: m, height: f });
          return !w.width || !w.height ? !1 : w;
        },
        write({ height: t, width: e }) {
          k(this.$el, { height: t, width: e });
        },
        events: ["resize"]
      }
    };
    function Pl(t) {
      for (; t = ht(t); )
        if (k(t, "position") !== "static")
          return t;
    }
    let jt;
    var Nl = {
      mixins: [ns, Sl, Xe],
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
        boundary({ boundary: t, boundaryX: e, boundaryY: i }, a) {
          return [
            qt(e || t, a) || window,
            qt(i || t, a) || window
          ];
        },
        target({ target: t, targetX: e, targetY: i }, a) {
          return e || (e = t || this.targetEl), i || (i = t || this.targetEl), [
            e === !0 ? window : qt(e, a),
            i === !0 ? window : qt(i, a)
          ];
        }
      },
      created() {
        this.tracker = new oa();
      },
      beforeConnect() {
        this.clsDrop = this.$props.clsDrop || this.$options.id;
      },
      connected() {
        Z(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = Yf(this)), this._style = Hi(this.$el.style, ["width", "height"]);
      },
      disconnected() {
        this.isActive() && (this.hide(!1), jt = null), k(this.$el, this._style);
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
            const { hash: i } = e;
            !t && i && wn(e) && !this.$el.contains(K(i)) && this.hide(!1);
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
            t.preventDefault(), st(this.$el, ":focus,:hover") || this.hide();
          }
        },
        {
          name: `${We} focusin`,
          filter: ({ mode: t }) => E(t, "hover"),
          handler(t) {
            pe(t) || this.clearTimers();
          }
        },
        {
          name: `${bn} focusout`,
          filter: ({ mode: t }) => E(t, "hover"),
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
            jt = this, this.tracker.init(), L(this.targetEl, "aria-expanded", !0);
            const t = [
              Qf(this),
              Zf(this),
              ep(this),
              this.autoUpdate && Bl(this),
              this.closeOnScroll && tp(this)
            ];
            $t(this.$el, "hide", () => t.forEach((e) => e && e()), {
              self: !0
            }), this.bgScroll || $t(this.$el, "hidden", Ba(this.$el), { self: !0 });
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
              jt = jt === null && this.$el.contains(t) && this.isToggled() ? this : jt;
              return;
            }
            jt = this.isActive() ? null : jt, this.tracker.cancel(), L(this.targetEl, "aria-expanded", null);
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
            if (jt) {
              if (e && jt.isDelaying()) {
                this.showTimer = setTimeout(() => st(t, ":hover") && this.show(), 10);
                return;
              }
              let i;
              for (; jt && i !== jt && !jt.$el.contains(this.$el); )
                i = jt, jt.hide(!1, !1);
            }
            this.container && ht(this.$el) !== this.container && Tt(this.container, this.$el), this.showTimer = setTimeout(
              () => this.toggleElement(this.$el, !0),
              e && this.delayShow || 0
            );
          }
        },
        hide(t = !0, e = !0) {
          const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
          this.clearTimers(), this.isDelayedHide = t, t && this.isDelaying() ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
        },
        clearTimers() {
          clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null;
        },
        isActive() {
          return jt === this;
        },
        isDelaying() {
          return [this.$el, ...wt(".uk-drop", this.$el)].some((t) => this.tracker.movesTo(t));
        },
        position() {
          const t = El(this.$el);
          rt(this.$el, "uk-drop-stack"), k(this.$el, this._style), this.$el.hidden = !0;
          const e = this.target.map((d) => Xf(this.$el, d)), i = this.getViewportOffset(this.$el), a = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]]
          ];
          for (const [d, [f, m]] of a)
            this.axis !== f && E([f, !0], this.stretch) && k(this.$el, {
              [m]: Math.min(
                et(this.boundary[d])[m],
                e[d][m] - 2 * i
              ),
              [`overflow-${f}`]: "auto"
            });
          const c = e[0].width - 2 * i;
          this.$el.hidden = !1, k(this.$el, "maxWidth", ""), this.$el.offsetWidth > c && Z(this.$el, "uk-drop-stack"), k(this.$el, "maxWidth", c), this.positionAt(this.$el, this.target, this.boundary);
          for (const [d, [f, m, w, $]] of a)
            if (this.axis === f && E([f, !0], this.stretch)) {
              const _ = Math.abs(this.getPositionOffset()), R = et(this.target[d]), B = et(this.$el);
              k(this.$el, {
                [m]: (R[w] > B[w] ? R[this.inset ? $ : w] - Math.max(
                  et(this.boundary[d])[w],
                  e[d][w] + i
                ) : Math.min(
                  et(this.boundary[d])[$],
                  e[d][$] - i
                ) - R[this.inset ? w : $]) - _,
                [`overflow-${f}`]: "auto"
              }), this.positionAt(this.$el, this.target, this.boundary);
            }
          t();
        }
      }
    };
    function Xf(t, e) {
      return se(Ge(e).find((i) => i.contains(t)));
    }
    function Yf(t) {
      const { $el: e } = t.$create("toggle", qt(t.toggle, t.$el), {
        target: t.$el,
        mode: t.mode
      });
      return L(e, "aria-haspopup", !0), e;
    }
    function Qf(t) {
      const e = () => t.$emit(), i = [
        ro(e),
        Yn(Ge(t.$el).concat(t.target), e)
      ];
      return () => i.map((a) => a.disconnect());
    }
    function Bl(t, e = () => t.$emit()) {
      return J([document, ...Ge(t.$el)], "scroll", e, {
        passive: !0
      });
    }
    function Zf(t) {
      return J(document, "keydown", (e) => {
        e.keyCode === ct.ESC && t.hide(!1);
      });
    }
    function tp(t) {
      return Bl(t, () => t.hide(!1));
    }
    function ep(t) {
      return J(document, de, ({ target: e }) => {
        t.$el.contains(e) || $t(
          document,
          `${Ae} ${Rs} scroll`,
          ({ defaultPrevented: i, type: a, target: c }) => {
            var d;
            !i && a === Ae && e === c && !((d = t.targetEl) != null && d.contains(e)) && t.hide(!1);
          },
          !0
        );
      });
    }
    var Fl = {
      mixins: [Jt, ns],
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
        dropbarAnchor: ({ dropbarAnchor: t }, e) => qt(t, e) || e,
        dropbar({ dropbar: t }) {
          return t ? (t = this._dropbar || qt(t, this.$el) || K(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = K("<div></div>"))) : null;
        },
        dropContainer(t, e) {
          return this.container || e;
        },
        dropdowns({ clsDrop: t }, e) {
          var i;
          const a = wt(`.${t}`, e);
          if (this.dropContainer !== e)
            for (const c of wt(`.${t}`, this.dropContainer)) {
              const d = (i = this.getDropdown(c)) == null ? void 0 : i.targetEl;
              !E(a, c) && d && this.$el.contains(d) && a.push(c);
            }
          return a;
        },
        items({ selNavItem: t }, e) {
          return wt(t, e);
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
        ne(this._dropbar), delete this._dropbar;
      },
      events: [
        {
          name: "mouseover focusin",
          delegate: ({ selNavItem: t }) => t,
          handler({ current: t }) {
            const e = this.getActive();
            e && E(e.mode, "hover") && e.targetEl && !t.contains(e.targetEl) && !e.isDelaying() && e.hide(!1);
          }
        },
        {
          name: "keydown",
          self: !0,
          delegate: ({ selNavItem: t }) => t,
          handler(t) {
            var e;
            const { current: i, keyCode: a } = t, c = this.getActive();
            a === ct.DOWN && (c == null ? void 0 : c.targetEl) === i && (t.preventDefault(), (e = K(zn, c.$el)) == null || e.focus()), Il(t, this.items, c);
          }
        },
        {
          name: "keydown",
          el: ({ dropContainer: t }) => t,
          delegate: ({ clsDrop: t }) => `.${t}`,
          handler(t) {
            var e;
            const { current: i, keyCode: a, target: c } = t;
            if (Ps(c) || !E(this.dropdowns, i))
              return;
            const d = this.getActive();
            let f = -1;
            if (a === ct.HOME ? f = 0 : a === ct.END ? f = "last" : a === ct.UP ? f = "previous" : a === ct.DOWN ? f = "next" : a === ct.ESC && ((e = d.targetEl) == null || e.focus()), ~f) {
              t.preventDefault();
              const m = wt(zn, i);
              m[ee(
                f,
                m,
                P(m, (w) => st(w, ":focus"))
              )].focus();
            }
            Il(t, this.items, d);
          }
        },
        {
          name: "mouseleave",
          el: ({ dropbar: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler() {
            const t = this.getActive();
            t && E(t.mode, "hover") && !this.dropdowns.some((e) => st(e, ":hover")) && t.hide();
          }
        },
        {
          name: "beforeshow",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler({ target: t }) {
            this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && Ds(this.dropbarAnchor, this.dropbar), Z(t, `${this.clsDrop}-dropbar`));
          }
        },
        {
          name: "show",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler({ target: t }) {
            if (!this.isDropbarDrop(t))
              return;
            const e = this.getDropdown(t), i = () => {
              const a = Math.max(
                ...qn(t, `.${this.clsDrop}`).concat(t).map((c) => et(c).bottom)
              );
              et(this.dropbar, {
                left: et(this.dropbar).left,
                top: this.getDropbarOffset(e.getPositionOffset())
              }), this.transitionTo(
                a - et(this.dropbar).top + Q(k(t, "marginBottom")),
                t
              );
            };
            this._observer = Yn([e.$el, ...e.target], i), i();
          }
        },
        {
          name: "beforehide",
          el: ({ dropContainer: t }) => t,
          filter: ({ dropbar: t }) => t,
          handler(t) {
            const e = this.getActive();
            st(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && E(e.mode, "hover") && e.isDelayedHide && !this.items.some((i) => e.targetEl !== i && st(i, ":focus")) && t.preventDefault();
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
            const i = this.getActive();
            (!i || i.$el === t) && this.transitionTo(0);
          }
        }
      ],
      methods: {
        getActive() {
          var t;
          return E(this.dropdowns, (t = jt) == null ? void 0 : t.$el) && jt;
        },
        async transitionTo(t, e) {
          const { dropbar: i } = this, a = Vt(i);
          if (e = a < t && e, await ft.cancel([e, i]), e) {
            const c = et(e).top - et(i).top - a;
            c > 0 && k(e, "transitionDelay", `${c / t * this.duration}ms`);
          }
          k(e, "clipPath", `polygon(0 0,100% 0,100% ${a}px,0 ${a}px)`), Vt(i, a), await Promise.all([
            ft.start(i, { height: t }, this.duration),
            ft.start(
              e,
              { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` },
              this.duration
            ).finally(() => k(e, { clipPath: "", transitionDelay: "" }))
          ]).catch(lt);
        },
        getDropdown(t) {
          return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
        },
        isDropbarDrop(t) {
          return E(this.dropdowns, t) && V(t, this.clsDrop);
        },
        getDropbarOffset(t) {
          const { $el: e, target: i, targetY: a } = this, { top: c, height: d } = et(qt(a || i || e, e));
          return c + d + t;
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
    function Il(t, e, i) {
      var a, c, d;
      const { current: f, keyCode: m } = t;
      let w = -1;
      m === ct.HOME ? w = 0 : m === ct.END ? w = "last" : m === ct.LEFT ? w = "previous" : m === ct.RIGHT ? w = "next" : m === ct.TAB && ((a = i.targetEl) == null || a.focus(), (c = i.hide) == null || c.call(i, !1)), ~w && (t.preventDefault(), (d = i.hide) == null || d.call(i, !1), e[ee(w, e, e.indexOf(i.targetEl || f))].focus());
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
          return t && (t === !0 && ht(this.input) === e && this.input.nextElementSibling || K(t, e));
        }
      },
      update() {
        var t;
        const { target: e, input: i } = this;
        if (!e)
          return;
        let a;
        const c = Ps(e) ? "value" : "textContent", d = e[c], f = (t = i.files) != null && t[0] ? i.files[0].name : st(i, "select") && (a = wt("option", i).filter((m) => m.selected)[0]) ? a.textContent : i.value;
        d !== f && (e[c] = f);
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
    }, sp = {
      extends: Ea,
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
      observe: ts({ filter: ({ parallax: t, parallaxJustify: e }) => t || e }),
      update: [
        {
          write({ rows: t }) {
            _t(this.$el, this.clsStack, !t.some((e) => e.length > 1));
          },
          events: ["resize"]
        },
        {
          read(t) {
            const { rows: e } = t;
            let { masonry: i, parallax: a, parallaxJustify: c, margin: d } = this;
            if (a = Math.max(0, Ft(a)), !(i || a || c) || Dl(e) || e[0].some(
              (q, tt) => e.some((it) => it[tt] && it[tt].offsetWidth !== q.offsetWidth)
            ))
              return t.translates = t.scrollColumns = !1;
            let f = op(e, d), m, w;
            i ? [m, w] = ip(e, f, i === "next") : m = rp(e);
            const $ = m.map(
              (q) => ze(q, "offsetHeight") + f * (q.length - 1)
            ), _ = Math.max(0, ...$);
            let R, B, I;
            return (a || c) && (R = $.map(
              (q, tt) => c ? _ - q + a : a / (tt % 2 || 8)
            ), c || (a = Math.max(
              ...$.map((q, tt) => q + R[tt] - _)
            )), B = Ft(this.parallaxStart, "height", this.$el, !0), I = Ft(this.parallaxEnd, "height", this.$el, !0)), {
              columns: m,
              translates: w,
              scrollColumns: R,
              parallaxStart: B,
              parallaxEnd: I,
              padding: a,
              height: w ? _ : ""
            };
          },
          write({ height: t, padding: e }) {
            k(this.$el, "paddingBottom", e || ""), t !== !1 && k(this.$el, "height", t);
          },
          events: ["resize"]
        },
        {
          read({ rows: t, scrollColumns: e, parallaxStart: i, parallaxEnd: a }) {
            return {
              scrolled: e && !Dl(t) ? Js(this.$el, i, a) : !1
            };
          },
          write({ columns: t, scrolled: e, scrollColumns: i, translates: a }) {
            !e && !a || t.forEach(
              (c, d) => c.forEach((f, m) => {
                let [w, $] = a && a[d][m] || [0, 0];
                e && ($ += e * i[d]), k(f, "transform", `translate(${w}px, ${$}px)`);
              })
            );
          },
          events: ["scroll", "resize"]
        }
      ]
    };
    function Dl(t) {
      return t.flat().some((e) => k(e, "position") === "absolute");
    }
    function ip(t, e, i) {
      const a = [], c = [], d = Array(t[0].length).fill(0);
      let f = 0;
      for (let m of t) {
        Nt && (m = m.reverse());
        let w = 0;
        for (const $ in m) {
          const { offsetWidth: _, offsetHeight: R } = m[$], B = i ? $ : d.indexOf(Math.min(...d));
          Po(a, B, m[$]), Po(c, B, [
            (B - $) * _ * (Nt ? -1 : 1),
            d[B] - f
          ]), d[B] += R + e, w = Math.max(w, R);
        }
        f += w + e;
      }
      return [a, c];
    }
    function op(t, e) {
      const i = t.flat().find((a) => V(a, e));
      return Q(i ? k(i, "marginTop") : k(t[0][0], "paddingLeft"));
    }
    function rp(t) {
      const e = [];
      for (const i of t)
        for (const a in i)
          Po(e, a, i[a]);
      return e;
    }
    function Po(t, e, i) {
      t[e] || (t[e] = []), t[e].push(i);
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
        elements: ({ target: t }, e) => wt(t, e)
      },
      observe: fe({
        target: ({ $el: t, elements: e }) => e.reduce((i, a) => i.concat(a, ...a.children), [t])
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
            rows: (this.row ? vo(this.elements) : [this.elements]).map(lp)
          };
        },
        write({ rows: t }) {
          for (const { heights: e, elements: i } of t)
            i.forEach((a, c) => k(a, "minHeight", e[c]));
        },
        events: ["resize"]
      }
    };
    function lp(t) {
      if (t.length < 2)
        return { heights: [""], elements: t };
      let e = t.map(cp);
      const i = Math.max(...e);
      return {
        heights: t.map((a, c) => e[c].toFixed(2) === i.toFixed(2) ? "" : i),
        elements: t
      };
    }
    function cp(t) {
      const e = Hi(t.style, ["display", "minHeight"]);
      Ot(t) || k(t, "display", "block", "important"), k(t, "minHeight", "");
      const i = j(t).height - yn(t, "height", "content-box");
      return k(t, e), i;
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
          get: ({ target: t }, e) => qt(t, e),
          observe: ({ target: t }) => t
        }
      },
      observe: fe({ target: ({ target: t }) => t }),
      update: {
        read() {
          return this.target ? { height: this.target.offsetHeight } : !1;
        },
        write({ height: t }) {
          k(this.$el, { minHeight: t });
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
        wo({ filter: ({ expand: t }) => t }),
        fe({ target: ({ $el: t }) => Ke(t) })
      ],
      update: {
        read() {
          if (!Ot(this.$el))
            return !1;
          let t = "";
          const e = yn(this.$el, "height", "content-box"), { body: i, scrollingElement: a } = document, c = Fe(this.$el), { height: d } = se(
            c === i ? a : c
          ), f = a === c || i === c;
          if (t = `calc(${f ? "100vh" : `${d}px`}`, this.expand) {
            const m = j(c).height - j(this.$el).height;
            t += ` - ${m}px`;
          } else {
            if (this.offsetTop)
              if (f) {
                const m = this.offsetTop === !0 ? this.$el : qt(this.offsetTop, this.$el), { top: w } = et(m);
                t += w > 0 && w < d / 2 ? ` - ${w}px` : "";
              } else
                t += ` - ${yn(c, "height", k(c, "boxSizing"))}px`;
            this.offsetBottom === !0 ? t += ` - ${j(this.$el.nextElementSibling).height}px` : ye(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && x(this.offsetBottom, "px") ? t += ` - ${Q(this.offsetBottom)}px` : bt(this.offsetBottom) && (t += ` - ${j(qt(this.offsetBottom, this.$el)).height}px`);
          }
          return t += `${e ? ` - ${e}px` : ""})`, { minHeight: t };
        },
        write({ minHeight: t }) {
          k(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"]
      }
    }, dp = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', fp = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', pp = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', mp = '<svg width="20" height="20" viewBox="0 0 20 20"><rect width="1" height="11" x="9" y="4"/><rect width="11" height="1" x="4" y="9"/></svg>', gp = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', bp = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', wp = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', vp = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1"/><rect width="20" height="2" y="9" class="line-2"/><rect width="20" height="2" y="9" class="line-3"/><rect width="20" height="2" y="15" class="line-4"/></svg>', yp = '<svg width="40" height="40" viewBox="0 0 40 40"><rect width="1" height="40" x="19" y="0"/><rect width="40" height="1" x="0" y="19"/></svg>', kp = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', $p = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Ll = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', xp = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', Sp = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', Ep = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', _p = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', Op = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', Tp = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', Ap = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', Cp = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>', Ul = {
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
          return this.svgEl && e !== this.svgEl && ne(this.svgEl), Pp.call(this, e, t), this.svgEl = e;
        }, lt);
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected || (Vi(this.$el) && (this.$el.hidden = !1), ne(t), this.svgEl = null);
        }), this.svg = null;
      },
      methods: {
        async getSvg() {
        }
      }
    };
    function Rp(t, e) {
      if (Vi(e) || xt(e, "canvas")) {
        e.hidden = !0;
        const a = e.nextElementSibling;
        return jl(t, a) ? a : Ds(e, t);
      }
      const i = e.lastElementChild;
      return jl(t, i) ? i : Tt(e, t);
    }
    function jl(t, e) {
      return xt(t, "svg") && xt(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function Pp(t, e) {
      const i = ["width", "height"];
      let a = i.map((d) => this[d]);
      a.some((d) => d) || (a = i.map((d) => L(e, d)));
      const c = L(e, "viewBox");
      c && !a.some((d) => d) && (a = c.split(" ").slice(2)), a.forEach((d, f) => L(t, i[f], Q(d) * this.ratio || null));
    }
    var Np = {
      mixins: [Ul],
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
        Gs({
          async handler() {
            const t = await this.svg;
            t && Ml.call(this, t);
          },
          options: {
            attributes: !0,
            attributeFilter: ["id", "class", "style"]
          }
        })
      ],
      async connected() {
        E(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
        const t = await this.svg;
        t && (Ml.call(this, t), this.strokeAnimation && Dp(t));
      },
      methods: {
        async getSvg() {
          return xt(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t) => $t(this.$el, "load", t)), Fp(await Bp(this.src), this.icon) || Promise.reject("SVG not found.");
        }
      }
    };
    function Ml(t) {
      const { $el: e } = this;
      Z(t, L(e, "class"), "uk-svg");
      for (let i = 0; i < e.style.length; i++) {
        const a = e.style[i];
        k(t, a, k(e, a));
      }
      for (const i in this.attributes) {
        const [a, c] = this.attributes[i].split(":", 2);
        L(t, a, c);
      }
      this.$el.id || jn(t, "id");
    }
    const Bp = he(async (t) => t ? b(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function Fp(t, e) {
      return e && E(t, "<symbol") && (t = Ip(t)[e] || t), Hl(t);
    }
    const zl = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, Ip = he(function(t) {
      const e = {};
      zl.lastIndex = 0;
      let i;
      for (; i = zl.exec(t); )
        e[i[3]] = `<svg ${i[1]}svg>`;
      return e;
    });
    function Dp(t) {
      const e = sl(t);
      e && k(t, "--uk-animation-stroke", e);
    }
    function Hl(t) {
      const e = document.createElement("template");
      return e.innerHTML = t, e.content.firstElementChild;
    }
    const li = {
      spinner: Ap,
      totop: Cp,
      marker: mp,
      "close-icon": dp,
      "close-large": fp,
      "drop-parent-icon": pp,
      "nav-parent-icon": bp,
      "nav-parent-icon-large": gp,
      "navbar-parent-icon": wp,
      "navbar-toggle-icon": vp,
      "overlay-icon": yp,
      "pagination-next": kp,
      "pagination-previous": $p,
      "search-icon": Ll,
      "search-medium": Sp,
      "search-large": xp,
      "search-toggle-icon": Ll,
      "slidenav-next": _p,
      "slidenav-next-large": Ep,
      "slidenav-previous": Tp,
      "slidenav-previous-large": Op
    }, No = {
      install: Jp,
      mixins: [Ul],
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
    }, Lp = {
      extends: en,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      }
    }, Up = {
      extends: en,
      mixins: [Qs],
      i18n: { toggle: "Open Search", submit: "Submit Search" },
      beforeConnect() {
        const t = V(this.$el, "uk-search-toggle") || V(this.$el, "uk-navbar-toggle");
        if (this.icon = t ? "search-toggle-icon" : V(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-medium") ? "search-medium" : this.$props.icon, !Te(this.$el, "aria-label"))
          if (t) {
            const e = this.t("toggle");
            L(this.$el, "aria-label", e);
          } else {
            const e = this.$el.closest("a,button");
            if (e) {
              const i = this.t("submit");
              L(e, "aria-label", i);
            }
          }
      }
    }, jp = {
      extends: en,
      beforeConnect() {
        L(this.$el, "role", "status");
      },
      methods: {
        async getSvg() {
          const t = await No.methods.getSvg.call(this);
          return this.ratio !== 1 && k(K("circle", t), "strokeWidth", 1 / this.ratio), t;
        }
      }
    }, nn = {
      extends: en,
      mixins: [Qs],
      beforeConnect() {
        const t = this.$el.closest("a,button");
        L(t, "role", this.role !== null && xt(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !Te(t, "aria-label") && L(t, "aria-label", e);
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
    }, Hp = {
      extends: nn,
      i18n: { label: "Open" }
    }, qp = {
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
    }, ci = {};
    function Jp(t) {
      t.icon.add = (e, i) => {
        const a = bt(e) ? { [e]: i } : e;
        pn(a, (c, d) => {
          li[d] = c, delete ci[d];
        }), t._initialized && Ne(
          document.body,
          (c) => pn(t.getComponents(c), (d) => {
            d.$options.isIcon && d.icon in a && d.$reset();
          })
        );
      };
    }
    const Kp = { twitter: "x" };
    function Gp(t) {
      return t = Kp[t] || t, li[t] ? (ci[t] || (ci[t] = Hl(li[Xp(t)] || li[t])), ci[t].cloneNode(!0)) : null;
    }
    function Xp(t) {
      return Nt ? zi(zi(t, "left", "right"), "previous", "next") : t;
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
          return jn(t, "loading"), Bo(this.$el, t.currentSrc), this.img = t;
        }
      }
    };
    function Bo(t, e) {
      if (Fo(t)) {
        const i = ht(t);
        (xt(i, "picture") ? dt(i) : [t]).forEach((c) => Wl(c, c));
      } else e && !E(t.style.backgroundImage, e) && (k(t, "backgroundImage", `url(${Xi(e)})`), M(t, vn("load", !1)));
    }
    const Qp = ["data-src", "data-srcset", "sizes"];
    function Wl(t, e) {
      for (const i of Qp) {
        const a = Ut(t, i);
        a && L(e, i.replace(/^(data-)+/, ""), a);
      }
    }
    function Zp(t, e, i) {
      const a = new Image();
      return tm(a, i), Wl(t, a), a.onload = () => {
        Bo(t, a.currentSrc);
      }, L(a, "src", e), a;
    }
    function tm(t, e) {
      if (e = em(e), e.length) {
        const i = Ve("<picture>");
        for (const a of e) {
          const c = Ve("<source>");
          L(c, a), Tt(i, c);
        }
        Tt(i, t);
      }
    }
    function em(t) {
      if (!t)
        return [];
      if (b(t, "["))
        try {
          t = JSON.parse(t);
        } catch {
          t = [];
        }
      else
        t = $n(t);
      return y(t) || (t = [t]), t.filter((e) => !_s(e));
    }
    function Fo(t) {
      return xt(t, "img");
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
        target: ({ target: t }, e) => t ? wt(t, e) : e
      },
      observe: [
        xn({
          handler(t) {
            this.isIntersecting = t.some(({ isIntersecting: e }) => e), this.$emit();
          },
          target: ({ target: t }) => t,
          args: { intersecting: !1 }
        }),
        Gs({
          target: ({ target: t }) => t,
          options: { attributes: !0, attributeFilter: ["class"], attributeOldValue: !0 }
        }),
        {
          target: ({ target: t }) => t,
          observe: (t, e) => {
            const i = Yn(
              [...nt(t), document.documentElement],
              e
            ), a = [
              J(document, "scroll itemshown itemhidden", e, {
                passive: !0,
                capture: !0
              }),
              J(document, "show hide transitionstart", (c) => (e(), i.observe(c.target))),
              J(document, "shown hidden transitionend transitioncancel", (c) => (e(), i.unobserve(c.target)))
            ];
            return {
              observe: i.observe.bind(i),
              unobserve: i.unobserve.bind(i),
              disconnect() {
                i.disconnect(), a.map((c) => c());
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
            let e = !this.selActive || st(t, this.selActive) ? sm(t) : "";
            e !== !1 && As(t, "uk-light uk-dark", e);
          }
        }
      }
    };
    function sm(t) {
      const e = j(t), i = j(window);
      if (!Os(e, i))
        return !1;
      const { left: a, top: c, height: d, width: f } = e;
      let m;
      for (const w of [0.25, 0.5, 0.75]) {
        const $ = t.ownerDocument.elementsFromPoint(
          Math.max(0, Math.min(a + f * w, i.width - 1)),
          Math.max(0, Math.min(c + d / 2, i.height - 1))
        );
        for (const _ of $) {
          if (t.contains(_) || !im(_) || _.closest('[class*="-leave"]') && $.some((B) => _ !== B && st(B, '[class*="-enter"]')))
            continue;
          const R = k(_, "--uk-inverse");
          if (R) {
            if (R === m)
              return `uk-${R}`;
            m = R;
            break;
          }
        }
      }
      return m ? `uk-${m}` : "";
    }
    function im(t) {
      if (k(t, "visibility") !== "visible")
        return !1;
      for (; t; ) {
        if (k(t, "opacity") === "0")
          return !1;
        t = ht(t);
      }
      return !0;
    }
    var om = {
      mixins: [Jt, ti],
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
        fill: ({ fill: t }, e) => t || k(e, "--uk-leader-fill-content")
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
        write({ width: t, fill: e, hide: i }) {
          _t(this.wrapper, this.clsHide, i), L(this.wrapper, this.attrFill, new Array(t).join(e));
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
            xt(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            V(this.panel, "uk-margin-auto-vertical") ? Z(this.$el, "uk-flex") : k(this.$el, "display", "block"), Vt(this.$el);
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            k(this.$el, "display", ""), rt(this.$el, "uk-flex");
          }
        }
      ]
    };
    function am({ modal: t }) {
      t.dialog = function(i, a) {
        const c = t(K(`<div><div class="uk-modal-dialog">${i}</div></div>`), {
          stack: !0,
          role: "alertdialog",
          ...a
        });
        return c.show(), J(
          c.$el,
          "hidden",
          async () => {
            await Promise.resolve(), c.$destroy(!0);
          },
          { self: !0 }
        ), c;
      }, t.alert = function(i, a) {
        return e(
          ({ i18n: c }) => `<div class="uk-modal-body">${bt(i) ? i : Pe(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${c.ok}</button> </div>`,
          a
        );
      }, t.confirm = function(i, a) {
        return e(
          ({ i18n: c }) => `<form> <div class="uk-modal-body">${bt(i) ? i : Pe(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${c.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${c.ok}</button> </div> </form>`,
          a,
          () => Promise.reject()
        );
      }, t.prompt = function(i, a, c) {
        const d = e(
          ({ i18n: w }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${bt(i) ? i : Pe(i)}</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${w.cancel}</button> <button class="uk-button uk-button-primary">${w.ok}</button> </div> </form>`,
          c,
          () => null,
          () => m.value
        ), { $el: f } = d.dialog, m = K("input", f);
        return m.value = a || "", J(f, "show", () => m.select()), d;
      }, t.i18n = {
        ok: "Ok",
        cancel: "Cancel"
      };
      function e(i, a, c = lt, d = lt) {
        a = {
          bgClose: !1,
          escClose: !0,
          ...a,
          i18n: { ...t.i18n, ...a == null ? void 0 : a.i18n }
        };
        const f = t.dialog(i(a), a);
        return N(
          new Promise((m) => {
            const w = J(f.$el, "hide", () => m(c()));
            J(f.$el, "submit", "form", ($) => {
              $.preventDefault(), m(d(f)), w(), f.hide();
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
      extends: Fl,
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
          const t = V(this.$el, "uk-navbar-justify"), e = wt(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
          for (const i of e) {
            const a = t ? wt(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", i).length : "";
            k(i, "flexGrow", a);
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
          const { top: e, height: i } = et(this.navbarContainer);
          return e + (this.dropbarTransparentMode === "behind" ? 0 : i + t);
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
          return t === "reveal" ? ht(this.panel) : this.panel;
        }
      },
      observe: Sa({ filter: ({ swiping: t }) => t }),
      update: {
        read() {
          this.isToggled() && !Ot(this.$el) && this.hide();
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
            this.mode === "reveal" && !V(ht(this.panel), this.clsMode) && Z(Us(this.panel, "<div>"), this.clsMode);
            const { body: t, scrollingElement: e } = document;
            Z(t, this.clsContainer, this.clsFlip), k(t, "touchAction", "pan-y pinch-zoom"), k(this.$el, "display", "block"), k(this.panel, "maxWidth", e.clientWidth), Z(this.$el, this.clsOverlay), Z(
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
            rt(document.body, this.clsContainerAnimation), k(document.body, "touchAction", "");
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.clsContainerAnimation && fm(), this.mode === "reveal" && V(ht(this.panel), this.clsMode) && Kn(this.panel), rt(this.panel, this.clsSidebarAnimation, this.clsMode), rt(this.$el, this.clsOverlay), k(this.$el, "display", ""), k(this.panel, "maxWidth", ""), rt(document.body, this.clsContainer, this.clsFlip);
          }
        },
        {
          name: "swipeLeft swipeRight",
          handler(t) {
            this.isToggled() && x(t.type, "Left") ^ this.flip && this.hide();
          }
        }
      ]
    };
    function dm() {
      Vl().content += ",user-scalable=0";
    }
    function fm() {
      const t = Vl();
      t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function Vl() {
      return K('meta[name="viewport"]', document.head) || Tt(document.head, '<meta name="viewport">');
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
          return !this.content || !this.container || !Ot(this.$el) ? !1 : {
            max: Math.max(
              this.minHeight,
              Vt(this.container) - (j(this.content).height - Vt(this.$el))
            )
          };
        },
        write({ max: t }) {
          k(this.$el, { minHeight: this.minHeight, maxHeight: t });
        },
        events: ["resize"]
      }
    }, mm = {
      props: ["width", "height"],
      connected() {
        Z(this.$el, "uk-responsive-width"), k(this.$el, "aspectRatio", `${this.width}/${this.height}`);
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
        wm(this);
      },
      methods: {
        async scrollTo(t) {
          t = t && K(t) || document.body, M(this.$el, "beforescroll", [this, t]) && (await fa(t, { offset: this.offset }), M(this.$el, "scrolled", [this, t]));
        }
      }
    };
    const hs = /* @__PURE__ */ new Set();
    function bm(t) {
      hs.size || J(document, "click", Jl), hs.add(t);
    }
    function wm(t) {
      hs.delete(t), hs.size || Ce(document, "click", Jl);
    }
    function Jl(t) {
      if (!t.defaultPrevented)
        for (const e of hs)
          e.$el.contains(t.target) && wn(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(Ji(e.$el)));
    }
    const Do = "uk-scrollspy-inview";
    var vm = {
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
        elements: ({ target: t }, e) => t ? wt(t, e) : [e]
      },
      watch: {
        elements(t) {
          this.hidden && k(Hn(t, `:not(.${Do})`), "opacity", 0);
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
          for (const { target: i, isIntersecting: a } of t) {
            e.has(i) || e.set(i, {
              cls: Ut(i, "uk-scrollspy-class") || this.cls
            });
            const c = e.get(i);
            !this.repeat && c.show || (c.show = a);
          }
          this.$emit();
        },
        options: ({ margin: t }) => ({ rootMargin: t }),
        args: { intersecting: !1 }
      }),
      update: [
        {
          write(t) {
            for (const [e, i] of this.elementData.entries())
              i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(() => new Promise((a) => setTimeout(a, this.delay))).then(() => {
                this.toggle(e, !0), setTimeout(() => {
                  i.queued = !1, this.$emit();
                }, 300);
              })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1);
          }
        }
      ],
      methods: {
        toggle(t, e) {
          var i, a;
          const c = (i = this.elementData) == null ? void 0 : i.get(t);
          if (!c)
            return;
          (a = c.off) == null || a.call(c), k(t, "opacity", !e && this.hidden ? 0 : ""), _t(t, Do, e), _t(t, c.cls);
          let d;
          if (d = c.cls.match(/\buk-animation-[\w-]+/g)) {
            const f = () => rt(t, d);
            e ? c.off = $t(t, "animationcancel animationend", f, {
              self: !0
            }) : f();
          }
          M(t, e ? "inview" : "outview"), c.inview = e;
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
        links: ({ target: t }, e) => wt(t, e).filter((i) => wn(i)),
        elements({ closest: t }) {
          return this.links.map((e) => e.closest(t || "*"));
        }
      },
      watch: {
        links(t) {
          this.scroll && this.$create("scroll", t, { offset: this.offset });
        }
      },
      observe: [xn(), ts()],
      update: [
        {
          read() {
            const t = this.links.map((w) => Ji(w) || w.ownerDocument), { length: e } = t;
            if (!e || !Ot(this.$el))
              return !1;
            const i = Fe(t, !0), { scrollTop: a, scrollHeight: c } = i, d = se(i), f = c - d.height;
            let m = !1;
            if (a >= f)
              m = e - 1;
            else {
              const w = this.offset + j(ho()).height + d.height * 0.1;
              for (let $ = 0; $ < t.length && !(et(t[$]).top - d.top - w > 0); $++)
                m = +$;
            }
            return { active: m };
          },
          write({ active: t }) {
            const e = t !== !1 && !V(this.elements[t], this.cls);
            this.links.forEach((i) => i.blur());
            for (let i = 0; i < this.elements.length; i++)
              _t(this.elements[i], this.cls, +i === t);
            e && M(this.$el, "active", [t, this.elements[t]]);
          },
          events: ["scroll", "resize"]
        }
      ]
    }, km = {
      mixins: [Jt, ti],
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
        this.start = Kl(this.start || this.top), this.end = Kl(this.end || this.bottom), this.placeholder = K("+ .uk-sticky-placeholder", this.$el) || K('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
      },
      beforeDisconnect() {
        this.isFixed && (this.hide(), rt(this.target, this.clsInactive)), Gl(this.$el), ne(this.placeholder), this.placeholder = null;
      },
      observe: [
        wo(),
        ts({ target: () => document.scrollingElement }),
        fe({
          target: ({ $el: t }) => [t, ui(t), document.scrollingElement],
          handler(t) {
            this.$emit(
              this._data.resized && t.some(({ target: e }) => e === ui(this.$el)) ? "update" : "resize"
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
              const e = et(K(location.hash)), i = et(this.$el);
              this.isFixed && Os(e, i) && (t.scrollTop = Math.ceil(
                e.top - i.height - Ft(this.targetOffset, "height", this.placeholder) - Ft(this.offset, "height", this.placeholder)
              ));
            });
          }
        }
      ],
      update: [
        {
          read({ height: t, width: e, margin: i, sticky: a }, c) {
            if (this.inactive = !this.matchMedia || !Ot(this.$el) || !this.$el.offsetHeight, this.inactive)
              return;
            const d = Vt(window), f = Math.max(
              0,
              document.scrollingElement.scrollHeight - d
            );
            if (!f) {
              this.inactive = !0;
              return;
            }
            const m = this.isFixed && c.has("update");
            m && (jo(this.target), this.hide()), this.active || ({ height: t, width: e } = j(this.$el), i = k(this.$el, "margin")), m && this.show();
            const w = Ft("100vh", "height");
            let $ = this.position;
            this.overflowFlip && t > w && ($ = $ === "top" ? "bottom" : "top");
            const _ = this.isFixed ? this.placeholder : this.$el;
            let R = Ft(this.offset, "height", a ? this.$el : _);
            $ === "bottom" && (t < d || this.overflowFlip) && (R += d - t);
            const B = this.overflowFlip ? 0 : Math.max(0, t + R - w), I = et(_).top - // offset possible `transform: translateY` animation 'uk-animation-slide-top' while hiding
            new DOMMatrix(k(_, "transform")).m42, q = j(this.$el).height, tt = (this.start === !1 ? I : Lo(this.start, this.$el, I)) - R, it = this.end === !1 ? f : Math.min(
              f,
              Lo(this.end, this.$el, I + t, !0) - q - R + B
            );
            return a = !this.showOnUp && tt + R === I && it === Math.min(
              f,
              Lo(!0, this.$el, 0, !0) - q - R + B
            ) && k(ui(this.$el), "overflowY") !== "hidden", {
              start: tt,
              end: it,
              offset: R,
              overflow: B,
              height: t,
              elHeight: q,
              width: e,
              margin: i,
              top: Gn(_)[0],
              sticky: a,
              viewport: w,
              maxScrollHeight: f
            };
          },
          write({ height: t, width: e, margin: i, offset: a, sticky: c }) {
            if ((this.inactive || c || !this.isFixed) && Gl(this.$el), this.inactive)
              return;
            c && (t = e = i = 0, k(this.$el, { position: "sticky", top: a }));
            const { placeholder: d } = this;
            k(d, { height: t, width: e, margin: i }), (ht(d) !== ht(this.$el) || c ^ Se(d) < Se(this.$el)) && ((c ? Is : Ds)(this.$el, d), d.hidden = !0);
          },
          events: ["resize"]
        },
        {
          read({
            scroll: t = 0,
            dir: e = "down",
            overflow: i,
            overflowScroll: a = 0,
            start: c,
            end: d,
            elHeight: f,
            height: m,
            sticky: w,
            maxScrollHeight: $
          }) {
            const _ = Math.min(document.scrollingElement.scrollTop, $), R = t <= _ ? "down" : "up", B = this.isFixed ? this.placeholder : this.$el;
            return {
              dir: R,
              prevDir: e,
              scroll: _,
              prevScroll: t,
              below: _ > et(B).top + (w ? Math.min(m, f) : m),
              offsetParentTop: et(B.offsetParent).top,
              overflowScroll: zt(
                a + zt(_, c, d) - zt(t, c, d),
                0,
                i
              )
            };
          },
          write(t, e) {
            const i = e.has("scroll"), {
              initTimestamp: a = 0,
              dir: c,
              prevDir: d,
              scroll: f,
              prevScroll: m = 0,
              top: w,
              start: $,
              below: _
            } = t;
            if (f < 0 || f === m && i || this.showOnUp && !i && !this.isFixed)
              return;
            const R = Date.now();
            if ((R - a > 300 || c !== d) && (t.initScroll = f, t.initTimestamp = R), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - f) <= 30 && Math.abs(m - f) <= 10))
              if (this.inactive || f < $ || this.showOnUp && (f <= $ || c === "down" && i || c === "up" && !this.isFixed && !_)) {
                if (!this.isFixed) {
                  Re.inProgress(this.$el) && w > f && (Re.cancel(this.$el), this.hide());
                  return;
                }
                if (this.animation && _) {
                  if (V(this.$el, "uk-animation-leave"))
                    return;
                  Re.out(this.$el, this.animation).then(() => this.hide(), lt);
                } else
                  this.hide();
              } else this.isFixed ? this.update() : this.animation && _ ? (this.show(), Re.in(this.$el, this.animation).catch(lt)) : (jo(this.target), this.show());
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
          this.setActive(!1), rt(this.$el, this.clsFixed, this.clsBelow), e ? k(this.$el, "top", t) : k(this.$el, {
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
            overflow: i,
            overflowScroll: a = 0,
            start: c,
            end: d,
            offset: f,
            offsetParentTop: m,
            sticky: w,
            below: $
          } = this._data;
          const _ = c !== 0 || e > c;
          if (!w) {
            let R = "fixed";
            e > d && (f += d - m + a - i, R = "absolute"), k(this.$el, { position: R, width: t, marginTop: 0 }, "important");
          }
          k(this.$el, "top", f - a), this.setActive(_), _t(this.$el, this.clsBelow, $), Z(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          this.active = t, t ? (As(this.target, this.clsInactive, this.clsActive), e !== t && M(this.$el, "active")) : (As(this.target, this.clsActive, this.clsInactive), e !== t && (jo(this.target), M(this.$el, "inactive")));
        }
      }
    };
    function Lo(t, e, i, a) {
      if (!t)
        return 0;
      if (ye(t) || bt(t) && t.match(/^-?\d/))
        return i + Ft(t, "height", e, !0);
      {
        const c = t === !0 ? ui(e) : qt(t, e);
        return et(c).bottom - (a && (c != null && c.contains(e)) ? Q(k(c, "paddingBottom")) + Q(k(c, "borderBottomWidth")) : 0);
      }
    }
    function Kl(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function Gl(t) {
      k(t, { position: "", top: "", marginTop: "", width: "" });
    }
    const Uo = "uk-transition-disable";
    function jo(t) {
      V(t, Uo) || (Z(t, Uo), requestAnimationFrame(() => rt(t, Uo)));
    }
    function ui(t) {
      for (; t = ht(t); )
        if (Ot(t))
          return t;
    }
    const Mo = ".uk-disabled *, .uk-disabled, [disabled]";
    var Xl = {
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
          return this.connects.map((t) => dt(t)).flat();
        },
        toggles: ({ toggle: t }, e) => wt(t, e),
        children(t, e) {
          return dt(e).filter(
            (i) => this.toggles.some((a) => i.contains(a))
          );
        }
      },
      watch: {
        connects(t) {
          this.swiping && k(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
        },
        connectChildren() {
          let t = Math.max(0, this.index());
          for (const e of this.connects)
            dt(e).forEach((i, a) => _t(i, this.cls, a === t));
          this.$emit();
        },
        toggles(t) {
          this.$emit();
          const e = this.index();
          this.show(~e ? e : t[this.active] || t[0]);
        }
      },
      connected() {
        L(this.$el, "role", "tablist");
      },
      observe: [
        Xs({ targets: ({ connectChildren: t }) => t }),
        Sa({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })
      ],
      events: [
        {
          name: "click keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            !st(t.current, Mo) && (t.type === "click" || t.keyCode === ct.SPACE) && (t.preventDefault(), this.show(t.current));
          }
        },
        {
          name: "keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            const { current: e, keyCode: i } = t, a = st(this.$el, this.selVertical);
            let c = i === ct.HOME ? 0 : i === ct.END ? "last" : i === ct.LEFT && !a || i === ct.UP && a ? "previous" : i === ct.RIGHT && !a || i === ct.DOWN && a ? "next" : -1;
            if (~c) {
              t.preventDefault();
              const d = this.toggles.filter((m) => !st(m, Mo)), f = d[ee(c, d, d.indexOf(e))];
              f.focus(), this.followFocus && this.show(f);
            }
          }
        },
        {
          name: "click",
          el: ({ $el: t, connects: e, itemNav: i }) => e.concat(i ? Wn(i, t) : []),
          delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`,
          handler(t) {
            t.target.closest("a,button") && (t.preventDefault(), this.show(Ut(t.current, this.attrItem)));
          }
        },
        {
          name: "swipeRight swipeLeft",
          filter: ({ swiping: t }) => t,
          el: ({ connects: t }) => t,
          handler({ type: t }) {
            this.show(x(t, "Left") ? "next" : "previous");
          }
        }
      ],
      update() {
        var t;
        for (const e of this.connects)
          xt(e, "ul") && L(e, "role", "presentation");
        L(dt(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const i = this.toggles[e], a = (t = this.connects[0]) == null ? void 0 : t.children[e];
          L(i, "role", "tab"), a && (i.id = Ze(this, i), a.id = Ze(this, a), L(i, "aria-controls", a.id), L(a, { role: "tabpanel", "aria-labelledby": i.id }));
        }
        L(this.$el, "aria-orientation", st(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return P(this.children, (t) => V(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter((f) => !st(f, Mo)), i = this.index(), a = ee(
            !ut(t) || E(e, t) ? t : 0,
            e,
            ee(this.toggles[i], e)
          ), c = ee(e[a], this.toggles);
          this.children.forEach((f, m) => {
            _t(f, this.cls, c === m), L(this.toggles[m], {
              "aria-selected": c === m,
              tabindex: c === m ? null : -1
            });
          });
          const d = i >= 0 && i !== a;
          this.connects.forEach(async ({ children: f }) => {
            const m = S(f).filter(
              (w, $) => $ !== c && V(w, this.cls)
            );
            await this.toggleElement(m, !1, d) && await this.toggleElement(f[c], !0, d);
          });
        }
      }
    }, $m = {
      mixins: [Jt],
      extends: Xl,
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
      mixins: [ti, Xe],
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
        E(this.mode, "media") || (Ns(this.$el) || L(this.$el, "tabindex", "0"), !this.cls && xt(this.$el, "a") && L(this.$el, "role", "button"));
      },
      observe: Xs({ targets: ({ target: t }) => t }),
      events: [
        {
          name: de,
          filter: ({ mode: t }) => E(t, "hover"),
          handler(t) {
            this._preventClick = null, !(!pe(t) || Dt(this._showState) || this.$el.disabled) && (M(this.$el, "focus"), $t(
              document,
              de,
              () => M(this.$el, "blur"),
              !0,
              (e) => !this.$el.contains(e.target)
            ), E(this.mode, "click") && (this._preventClick = !0));
          }
        },
        {
          // mouseenter mouseleave are added because of Firefox bug,
          // where pointerleave is triggered immediately after pointerenter on scroll
          name: `mouseenter mouseleave ${We} ${bn} focus blur`,
          filter: ({ mode: t }) => E(t, "hover"),
          handler(t) {
            if (pe(t) || this.$el.disabled)
              return;
            const e = E(["mouseenter", We, "focus"], t.type), i = this.isToggled(this.target);
            if (!e && (!Dt(this._showState) || t.type !== "blur" && st(this.$el, ":focus") || t.type === "blur" && st(this.$el, ":hover"))) {
              i === this._showState && (this._showState = null);
              return;
            }
            e && Dt(this._showState) && i !== this._showState || (this._showState = e ? i : null, this.toggle(`toggle${e ? "show" : "hide"}`));
          }
        },
        {
          name: "keydown",
          filter: ({ $el: t, mode: e }) => E(e, "click") && !xt(t, "input"),
          handler(t) {
            t.keyCode === xm && (t.preventDefault(), this.$el.click());
          }
        },
        {
          name: "click",
          filter: ({ mode: t }) => ["click", "hover"].some((e) => E(t, e)),
          handler(t) {
            let e;
            (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && st(this.target, e.hash))) && t.preventDefault(), !this._preventClick && E(this.mode, "click") && this.toggle();
          }
        },
        {
          name: "mediachange",
          filter: ({ mode: t }) => E(t, "media"),
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
          if (Te(this.$el, "aria-expanded") && L(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
            return this.toggleElement(this.target);
          const e = this.target.filter((a) => V(a, this.clsLeave));
          if (e.length) {
            for (const a of this.target) {
              const c = E(e, a);
              this.toggleElement(a, c, c);
            }
            return;
          }
          const i = this.target.filter(this.isToggled);
          await this.toggleElement(i, !1) && await this.toggleElement(
            this.target.filter((a) => !E(i, a)),
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
      Drop: Nl,
      DropParentIcon: en,
      Dropdown: Nl,
      Dropnav: Fl,
      FormCustom: np,
      Grid: sp,
      HeightMatch: ap,
      HeightPlaceholder: up,
      HeightViewport: hp,
      Icon: No,
      Img: Yp,
      Inverse: nm,
      Leader: om,
      Margin: Ea,
      Marker: Hp,
      Modal: rm,
      Nav: lm,
      NavParentIcon: Lp,
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
      Scrollspy: vm,
      ScrollspyNav: ym,
      SearchIcon: Up,
      SlidenavNext: ql,
      SlidenavPrevious: ql,
      Spinner: jp,
      Sticky: km,
      Svg: Np,
      Switcher: Xl,
      Tab: $m,
      Toggle: Sm,
      Totop: qp,
      Video: Rl
    });
    return pn(Em, (t, e) => oe.component(e, t)), jf(oe), pn(Uf, (t, e) => oe.component(e, t)), oe;
  });
})(Wc);
var gg = Wc.exports;
const Vc = /* @__PURE__ */ mg(gg);
function Jc(n, s) {
  return function() {
    return n.apply(s, arguments);
  };
}
const { toString: bg } = Object.prototype, { getPrototypeOf: _r } = Object, _i = /* @__PURE__ */ ((n) => (s) => {
  const o = bg.call(s);
  return n[o] || (n[o] = o.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), be = (n) => (n = n.toLowerCase(), (s) => _i(s) === n), Oi = (n) => (s) => typeof s === n, { isArray: Pn } = Array, gs = Oi("undefined");
function wg(n) {
  return n !== null && !gs(n) && n.constructor !== null && !gs(n.constructor) && le(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Kc = be("ArrayBuffer");
function vg(n) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(n) : s = n && n.buffer && Kc(n.buffer), s;
}
const yg = Oi("string"), le = Oi("function"), Gc = Oi("number"), Ti = (n) => n !== null && typeof n == "object", kg = (n) => n === !0 || n === !1, di = (n) => {
  if (_i(n) !== "object")
    return !1;
  const s = _r(n);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}, $g = be("Date"), xg = be("File"), Sg = be("Blob"), Eg = be("FileList"), _g = (n) => Ti(n) && le(n.pipe), Og = (n) => {
  let s;
  return n && (typeof FormData == "function" && n instanceof FormData || le(n.append) && ((s = _i(n)) === "formdata" || // detect form-data instance
  s === "object" && le(n.toString) && n.toString() === "[object FormData]"));
}, Tg = be("URLSearchParams"), [Ag, Cg, Rg, Pg] = ["ReadableStream", "Request", "Response", "Headers"].map(be), Ng = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ys(n, s, { allOwnKeys: o = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let r, l;
  if (typeof n != "object" && (n = [n]), Pn(n))
    for (r = 0, l = n.length; r < l; r++)
      s.call(null, n[r], r, n);
  else {
    const u = o ? Object.getOwnPropertyNames(n) : Object.keys(n), h = u.length;
    let p;
    for (r = 0; r < h; r++)
      p = u[r], s.call(null, n[p], p, n);
  }
}
function Xc(n, s) {
  s = s.toLowerCase();
  const o = Object.keys(n);
  let r = o.length, l;
  for (; r-- > 0; )
    if (l = o[r], s === l.toLowerCase())
      return l;
  return null;
}
const on = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Yc = (n) => !gs(n) && n !== on;
function nr() {
  const { caseless: n } = Yc(this) && this || {}, s = {}, o = (r, l) => {
    const u = n && Xc(s, l) || l;
    di(s[u]) && di(r) ? s[u] = nr(s[u], r) : di(r) ? s[u] = nr({}, r) : Pn(r) ? s[u] = r.slice() : s[u] = r;
  };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && ys(arguments[r], o);
  return s;
}
const Bg = (n, s, o, { allOwnKeys: r } = {}) => (ys(s, (l, u) => {
  o && le(l) ? n[u] = Jc(l, o) : n[u] = l;
}, { allOwnKeys: r }), n), Fg = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), Ig = (n, s, o, r) => {
  n.prototype = Object.create(s.prototype, r), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: s.prototype
  }), o && Object.assign(n.prototype, o);
}, Dg = (n, s, o, r) => {
  let l, u, h;
  const p = {};
  if (s = s || {}, n == null) return s;
  do {
    for (l = Object.getOwnPropertyNames(n), u = l.length; u-- > 0; )
      h = l[u], (!r || r(h, n, s)) && !p[h] && (s[h] = n[h], p[h] = !0);
    n = o !== !1 && _r(n);
  } while (n && (!o || o(n, s)) && n !== Object.prototype);
  return s;
}, Lg = (n, s, o) => {
  n = String(n), (o === void 0 || o > n.length) && (o = n.length), o -= s.length;
  const r = n.indexOf(s, o);
  return r !== -1 && r === o;
}, Ug = (n) => {
  if (!n) return null;
  if (Pn(n)) return n;
  let s = n.length;
  if (!Gc(s)) return null;
  const o = new Array(s);
  for (; s-- > 0; )
    o[s] = n[s];
  return o;
}, jg = /* @__PURE__ */ ((n) => (s) => n && s instanceof n)(typeof Uint8Array < "u" && _r(Uint8Array)), Mg = (n, s) => {
  const o = (n && n[Symbol.iterator]).call(n);
  let r;
  for (; (r = o.next()) && !r.done; ) {
    const l = r.value;
    s.call(n, l[0], l[1]);
  }
}, zg = (n, s) => {
  let o;
  const r = [];
  for (; (o = n.exec(s)) !== null; )
    r.push(o);
  return r;
}, Hg = be("HTMLFormElement"), qg = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, o, r) {
    return o.toUpperCase() + r;
  }
), ec = (({ hasOwnProperty: n }) => (s, o) => n.call(s, o))(Object.prototype), Wg = be("RegExp"), Qc = (n, s) => {
  const o = Object.getOwnPropertyDescriptors(n), r = {};
  ys(o, (l, u) => {
    let h;
    (h = s(l, u, n)) !== !1 && (r[u] = h || l);
  }), Object.defineProperties(n, r);
}, Vg = (n) => {
  Qc(n, (s, o) => {
    if (le(n) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
      return !1;
    const r = n[o];
    if (le(r)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + o + "'");
      });
    }
  });
}, Jg = (n, s) => {
  const o = {}, r = (l) => {
    l.forEach((u) => {
      o[u] = !0;
    });
  };
  return Pn(n) ? r(n) : r(String(n).split(s)), o;
}, Kg = () => {
}, Gg = (n, s) => n != null && Number.isFinite(n = +n) ? n : s, Ho = "abcdefghijklmnopqrstuvwxyz", nc = "0123456789", Zc = {
  DIGIT: nc,
  ALPHA: Ho,
  ALPHA_DIGIT: Ho + Ho.toUpperCase() + nc
}, Xg = (n = 16, s = Zc.ALPHA_DIGIT) => {
  let o = "";
  const { length: r } = s;
  for (; n--; )
    o += s[Math.random() * r | 0];
  return o;
};
function Yg(n) {
  return !!(n && le(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator]);
}
const Qg = (n) => {
  const s = new Array(10), o = (r, l) => {
    if (Ti(r)) {
      if (s.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        s[l] = r;
        const u = Pn(r) ? [] : {};
        return ys(r, (h, p) => {
          const v = o(h, l + 1);
          !gs(v) && (u[p] = v);
        }), s[l] = void 0, u;
      }
    }
    return r;
  };
  return o(n, 0);
}, Zg = be("AsyncFunction"), tb = (n) => n && (Ti(n) || le(n)) && le(n.then) && le(n.catch), tu = ((n, s) => n ? setImmediate : s ? ((o, r) => (on.addEventListener("message", ({ source: l, data: u }) => {
  l === on && u === o && r.length && r.shift()();
}, !1), (l) => {
  r.push(l), on.postMessage(o, "*");
}))(`axios@${Math.random()}`, []) : (o) => setTimeout(o))(
  typeof setImmediate == "function",
  le(on.postMessage)
), eb = typeof queueMicrotask < "u" ? queueMicrotask.bind(on) : typeof process < "u" && process.nextTick || tu, T = {
  isArray: Pn,
  isArrayBuffer: Kc,
  isBuffer: wg,
  isFormData: Og,
  isArrayBufferView: vg,
  isString: yg,
  isNumber: Gc,
  isBoolean: kg,
  isObject: Ti,
  isPlainObject: di,
  isReadableStream: Ag,
  isRequest: Cg,
  isResponse: Rg,
  isHeaders: Pg,
  isUndefined: gs,
  isDate: $g,
  isFile: xg,
  isBlob: Sg,
  isRegExp: Wg,
  isFunction: le,
  isStream: _g,
  isURLSearchParams: Tg,
  isTypedArray: jg,
  isFileList: Eg,
  forEach: ys,
  merge: nr,
  extend: Bg,
  trim: Ng,
  stripBOM: Fg,
  inherits: Ig,
  toFlatObject: Dg,
  kindOf: _i,
  kindOfTest: be,
  endsWith: Lg,
  toArray: Ug,
  forEachEntry: Mg,
  matchAll: zg,
  isHTMLForm: Hg,
  hasOwnProperty: ec,
  hasOwnProp: ec,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Qc,
  freezeMethods: Vg,
  toObjectSet: Jg,
  toCamelCase: qg,
  noop: Kg,
  toFiniteNumber: Gg,
  findKey: Xc,
  global: on,
  isContextDefined: Yc,
  ALPHABET: Zc,
  generateString: Xg,
  isSpecCompliantForm: Yg,
  toJSONObject: Qg,
  isAsyncFn: Zg,
  isThenable: tb,
  setImmediate: tu,
  asap: eb
};
function G(n, s, o, r, l) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", s && (this.code = s), o && (this.config = o), r && (this.request = r), l && (this.response = l, this.status = l.status ? l.status : null);
}
T.inherits(G, Error, {
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
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const eu = G.prototype, nu = {};
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
  nu[n] = { value: n };
});
Object.defineProperties(G, nu);
Object.defineProperty(eu, "isAxiosError", { value: !0 });
G.from = (n, s, o, r, l, u) => {
  const h = Object.create(eu);
  return T.toFlatObject(n, h, function(p) {
    return p !== Error.prototype;
  }, (p) => p !== "isAxiosError"), G.call(h, n.message, s, o, r, l), h.cause = n, h.name = n.name, u && Object.assign(h, u), h;
};
const nb = null;
function sr(n) {
  return T.isPlainObject(n) || T.isArray(n);
}
function su(n) {
  return T.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function sc(n, s, o) {
  return n ? n.concat(s).map(function(r, l) {
    return r = su(r), !o && l ? "[" + r + "]" : r;
  }).join(o ? "." : "") : s;
}
function sb(n) {
  return T.isArray(n) && !n.some(sr);
}
const ib = T.toFlatObject(T, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Ai(n, s, o) {
  if (!T.isObject(n))
    throw new TypeError("target must be an object");
  s = s || new FormData(), o = T.toFlatObject(o, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, y) {
    return !T.isUndefined(y[P]);
  });
  const r = o.metaTokens, l = o.visitor || g, u = o.dots, h = o.indexes, p = (o.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(s);
  if (!T.isFunction(l))
    throw new TypeError("visitor must be a function");
  function v(P) {
    if (P === null) return "";
    if (T.isDate(P))
      return P.toISOString();
    if (!p && T.isBlob(P))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(P) || T.isTypedArray(P) ? p && typeof Blob == "function" ? new Blob([P]) : Buffer.from(P) : P;
  }
  function g(P, y, S) {
    let N = P;
    if (P && !S && typeof P == "object") {
      if (T.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), P = JSON.stringify(P);
      else if (T.isArray(P) && sb(P) || (T.isFileList(P) || T.endsWith(y, "[]")) && (N = T.toArray(P)))
        return y = su(y), N.forEach(function(D, U) {
          !(T.isUndefined(D) || D === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? sc([y], U, u) : h === null ? y : y + "[]",
            v(D)
          );
        }), !1;
    }
    return sr(P) ? !0 : (s.append(sc(S, y, u), v(P)), !1);
  }
  const b = [], x = Object.assign(ib, {
    defaultVisitor: g,
    convertValue: v,
    isVisitable: sr
  });
  function E(P, y) {
    if (!T.isUndefined(P)) {
      if (b.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      b.push(P), T.forEach(P, function(S, N) {
        (!(T.isUndefined(S) || S === null) && l.call(
          s,
          S,
          T.isString(N) ? N.trim() : N,
          y,
          x
        )) === !0 && E(S, y ? y.concat(N) : [N]);
      }), b.pop();
    }
  }
  if (!T.isObject(n))
    throw new TypeError("data must be an object");
  return E(n), s;
}
function ic(n) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(o) {
    return s[o];
  });
}
function Or(n, s) {
  this._pairs = [], n && Ai(n, this, s);
}
const iu = Or.prototype;
iu.append = function(n, s) {
  this._pairs.push([n, s]);
};
iu.toString = function(n) {
  const s = n ? function(o) {
    return n.call(this, o, ic);
  } : ic;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function ob(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ou(n, s, o) {
  if (!s)
    return n;
  const r = o && o.encode || ob, l = o && o.serialize;
  let u;
  if (l ? u = l(s, o) : u = T.isURLSearchParams(s) ? s.toString() : new Or(s, o).toString(r), u) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)), n += (n.indexOf("?") === -1 ? "?" : "&") + u;
  }
  return n;
}
let oc = class {
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
  use(s, o, r) {
    return this.handlers.push({
      fulfilled: s,
      rejected: o,
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
    T.forEach(this.handlers, function(o) {
      o !== null && s(o);
    });
  }
};
const ru = {
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
}, Tr = typeof window < "u" && typeof document < "u", ir = typeof navigator == "object" && navigator || void 0, ub = Tr && (!ir || ["ReactNative", "NativeScript", "NS"].indexOf(ir.product) < 0), hb = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", db = Tr && window.location.href || "http://localhost", fb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Tr,
  hasStandardBrowserEnv: ub,
  hasStandardBrowserWebWorkerEnv: hb,
  navigator: ir,
  origin: db
}, Symbol.toStringTag, { value: "Module" })), Xt = {
  ...fb,
  ...cb
};
function pb(n, s) {
  return Ai(n, new Xt.classes.URLSearchParams(), Object.assign({
    visitor: function(o, r, l, u) {
      return Xt.isNode && T.isBuffer(o) ? (this.append(r, o.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function mb(n) {
  return T.matchAll(/\w+|\[(\w*)]/g, n).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function gb(n) {
  const s = {}, o = Object.keys(n);
  let r;
  const l = o.length;
  let u;
  for (r = 0; r < l; r++)
    u = o[r], s[u] = n[u];
  return s;
}
function au(n) {
  function s(o, r, l, u) {
    let h = o[u++];
    if (h === "__proto__") return !0;
    const p = Number.isFinite(+h), v = u >= o.length;
    return h = !h && T.isArray(l) ? l.length : h, v ? (T.hasOwnProp(l, h) ? l[h] = [l[h], r] : l[h] = r, !p) : ((!l[h] || !T.isObject(l[h])) && (l[h] = []), s(o, r, l[h], u) && T.isArray(l[h]) && (l[h] = gb(l[h])), !p);
  }
  if (T.isFormData(n) && T.isFunction(n.entries)) {
    const o = {};
    return T.forEachEntry(n, (r, l) => {
      s(mb(r), l, o, 0);
    }), o;
  }
  return null;
}
function bb(n, s, o) {
  if (T.isString(n))
    try {
      return (s || JSON.parse)(n), T.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(n);
}
const ks = {
  transitional: ru,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, s) {
    const o = s.getContentType() || "", r = o.indexOf("application/json") > -1, l = T.isObject(n);
    if (l && T.isHTMLForm(n) && (n = new FormData(n)), T.isFormData(n))
      return r ? JSON.stringify(au(n)) : n;
    if (T.isArrayBuffer(n) || T.isBuffer(n) || T.isStream(n) || T.isFile(n) || T.isBlob(n) || T.isReadableStream(n))
      return n;
    if (T.isArrayBufferView(n))
      return n.buffer;
    if (T.isURLSearchParams(n))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let u;
    if (l) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return pb(n, this.formSerializer).toString();
      if ((u = T.isFileList(n)) || o.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return Ai(
          u ? { "files[]": n } : n,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return l || r ? (s.setContentType("application/json", !1), bb(n)) : n;
  }],
  transformResponse: [function(n) {
    const s = this.transitional || ks.transitional, o = s && s.forcedJSONParsing, r = this.responseType === "json";
    if (T.isResponse(n) || T.isReadableStream(n))
      return n;
    if (n && T.isString(n) && (o && !this.responseType || r)) {
      const l = !(s && s.silentJSONParsing) && r;
      try {
        return JSON.parse(n);
      } catch (u) {
        if (l)
          throw u.name === "SyntaxError" ? G.from(u, G.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
    FormData: Xt.classes.FormData,
    Blob: Xt.classes.Blob
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
T.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  ks.headers[n] = {};
});
const wb = T.toObjectSet([
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
]), vb = (n) => {
  const s = {};
  let o, r, l;
  return n && n.split(`
`).forEach(function(u) {
    l = u.indexOf(":"), o = u.substring(0, l).trim().toLowerCase(), r = u.substring(l + 1).trim(), !(!o || s[o] && wb[o]) && (o === "set-cookie" ? s[o] ? s[o].push(r) : s[o] = [r] : s[o] = s[o] ? s[o] + ", " + r : r);
  }), s;
}, rc = Symbol("internals");
function ds(n) {
  return n && String(n).trim().toLowerCase();
}
function fi(n) {
  return n === !1 || n == null ? n : T.isArray(n) ? n.map(fi) : String(n);
}
function yb(n) {
  const s = /* @__PURE__ */ Object.create(null), o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = o.exec(n); )
    s[r[1]] = r[2];
  return s;
}
const kb = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function qo(n, s, o, r, l) {
  if (T.isFunction(r))
    return r.call(this, s, o);
  if (l && (s = o), !!T.isString(s)) {
    if (T.isString(r))
      return s.indexOf(r) !== -1;
    if (T.isRegExp(r))
      return r.test(s);
  }
}
function $b(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, o, r) => o.toUpperCase() + r);
}
function xb(n, s) {
  const o = T.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + o, {
      value: function(l, u, h) {
        return this[r].call(this, s, l, u, h);
      },
      configurable: !0
    });
  });
}
let Yt = class {
  constructor(s) {
    s && this.set(s);
  }
  set(s, o, r) {
    const l = this;
    function u(p, v, g) {
      const b = ds(v);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const x = T.findKey(l, b);
      (!x || l[x] === void 0 || g === !0 || g === void 0 && l[x] !== !1) && (l[x || v] = fi(p));
    }
    const h = (p, v) => T.forEach(p, (g, b) => u(g, b, v));
    if (T.isPlainObject(s) || s instanceof this.constructor)
      h(s, o);
    else if (T.isString(s) && (s = s.trim()) && !kb(s))
      h(vb(s), o);
    else if (T.isHeaders(s))
      for (const [p, v] of s.entries())
        u(v, p, r);
    else
      s != null && u(o, s, r);
    return this;
  }
  get(s, o) {
    if (s = ds(s), s) {
      const r = T.findKey(this, s);
      if (r) {
        const l = this[r];
        if (!o)
          return l;
        if (o === !0)
          return yb(l);
        if (T.isFunction(o))
          return o.call(this, l, r);
        if (T.isRegExp(o))
          return o.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, o) {
    if (s = ds(s), s) {
      const r = T.findKey(this, s);
      return !!(r && this[r] !== void 0 && (!o || qo(this, this[r], r, o)));
    }
    return !1;
  }
  delete(s, o) {
    const r = this;
    let l = !1;
    function u(h) {
      if (h = ds(h), h) {
        const p = T.findKey(r, h);
        p && (!o || qo(r, r[p], p, o)) && (delete r[p], l = !0);
      }
    }
    return T.isArray(s) ? s.forEach(u) : u(s), l;
  }
  clear(s) {
    const o = Object.keys(this);
    let r = o.length, l = !1;
    for (; r--; ) {
      const u = o[r];
      (!s || qo(this, this[u], u, s, !0)) && (delete this[u], l = !0);
    }
    return l;
  }
  normalize(s) {
    const o = this, r = {};
    return T.forEach(this, (l, u) => {
      const h = T.findKey(r, u);
      if (h) {
        o[h] = fi(l), delete o[u];
        return;
      }
      const p = s ? $b(u) : String(u).trim();
      p !== u && delete o[u], o[p] = fi(l), r[p] = !0;
    }), this;
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const o = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (r, l) => {
      r != null && r !== !1 && (o[l] = s && T.isArray(r) ? r.join(", ") : r);
    }), o;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, o]) => s + ": " + o).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...o) {
    const r = new this(s);
    return o.forEach((l) => r.set(l)), r;
  }
  static accessor(s) {
    const o = (this[rc] = this[rc] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function l(u) {
      const h = ds(u);
      o[h] || (xb(r, u), o[h] = !0);
    }
    return T.isArray(s) ? s.forEach(l) : l(s), this;
  }
};
Yt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(Yt.prototype, ({ value: n }, s) => {
  let o = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => n,
    set(r) {
      this[o] = r;
    }
  };
});
T.freezeMethods(Yt);
function Wo(n, s) {
  const o = this || ks, r = s || o, l = Yt.from(r.headers);
  let u = r.data;
  return T.forEach(n, function(h) {
    u = h.call(o, u, l.normalize(), s ? s.status : void 0);
  }), l.normalize(), u;
}
function lu(n) {
  return !!(n && n.__CANCEL__);
}
function Nn(n, s, o) {
  G.call(this, n ?? "canceled", G.ERR_CANCELED, s, o), this.name = "CanceledError";
}
T.inherits(Nn, G, {
  __CANCEL__: !0
});
function cu(n, s, o) {
  const r = o.config.validateStatus;
  !o.status || !r || r(o.status) ? n(o) : s(new G(
    "Request failed with status code " + o.status,
    [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4],
    o.config,
    o.request,
    o
  ));
}
function Sb(n) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return s && s[1] || "";
}
function Eb(n, s) {
  n = n || 10;
  const o = new Array(n), r = new Array(n);
  let l = 0, u = 0, h;
  return s = s !== void 0 ? s : 1e3, function(p) {
    const v = Date.now(), g = r[u];
    h || (h = v), o[l] = p, r[l] = v;
    let b = u, x = 0;
    for (; b !== l; )
      x += o[b++], b = b % n;
    if (l = (l + 1) % n, l === u && (u = (u + 1) % n), v - h < s)
      return;
    const E = g && v - g;
    return E ? Math.round(x * 1e3 / E) : void 0;
  };
}
function _b(n, s) {
  let o = 0, r = 1e3 / s, l, u;
  const h = (p, v = Date.now()) => {
    o = v, l = null, u && (clearTimeout(u), u = null), n.apply(null, p);
  };
  return [(...p) => {
    const v = Date.now(), g = v - o;
    g >= r ? h(p, v) : (l = p, u || (u = setTimeout(() => {
      u = null, h(l);
    }, r - g)));
  }, () => l && h(l)];
}
const vi = (n, s, o = 3) => {
  let r = 0;
  const l = Eb(50, 250);
  return _b((u) => {
    const h = u.loaded, p = u.lengthComputable ? u.total : void 0, v = h - r, g = l(v), b = h <= p;
    r = h;
    const x = {
      loaded: h,
      total: p,
      progress: p ? h / p : void 0,
      bytes: v,
      rate: g || void 0,
      estimated: g && p && b ? (p - h) / g : void 0,
      event: u,
      lengthComputable: p != null,
      [s ? "download" : "upload"]: !0
    };
    n(x);
  }, o);
}, ac = (n, s) => {
  const o = n != null;
  return [(r) => s[0]({
    lengthComputable: o,
    total: n,
    loaded: r
  }), s[1]];
}, lc = (n) => (...s) => T.asap(() => n(...s)), Ob = Xt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = Xt.navigator && /(msie|trident)/i.test(Xt.navigator.userAgent), s = document.createElement("a");
    let o;
    function r(l) {
      let u = l;
      return n && (s.setAttribute("href", u), u = s.href), s.setAttribute("href", u), {
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
    return o = r(window.location.href), function(l) {
      const u = T.isString(l) ? r(l) : l;
      return u.protocol === o.protocol && u.host === o.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Tb = Xt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, s, o, r, l, u) {
      const h = [n + "=" + encodeURIComponent(s)];
      T.isNumber(o) && h.push("expires=" + new Date(o).toGMTString()), T.isString(r) && h.push("path=" + r), T.isString(l) && h.push("domain=" + l), u === !0 && h.push("secure"), document.cookie = h.join("; ");
    },
    read(n) {
      const s = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return s ? decodeURIComponent(s[3]) : null;
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
function Ab(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function Cb(n, s) {
  return s ? n.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : n;
}
function uu(n, s) {
  return n && !Ab(s) ? Cb(n, s) : s;
}
const cc = (n) => n instanceof Yt ? { ...n } : n;
function hn(n, s) {
  s = s || {};
  const o = {};
  function r(g, b, x) {
    return T.isPlainObject(g) && T.isPlainObject(b) ? T.merge.call({ caseless: x }, g, b) : T.isPlainObject(b) ? T.merge({}, b) : T.isArray(b) ? b.slice() : b;
  }
  function l(g, b, x) {
    if (T.isUndefined(b)) {
      if (!T.isUndefined(g))
        return r(void 0, g, x);
    } else return r(g, b, x);
  }
  function u(g, b) {
    if (!T.isUndefined(b))
      return r(void 0, b);
  }
  function h(g, b) {
    if (T.isUndefined(b)) {
      if (!T.isUndefined(g))
        return r(void 0, g);
    } else return r(void 0, b);
  }
  function p(g, b, x) {
    if (x in s)
      return r(g, b);
    if (x in n)
      return r(void 0, g);
  }
  const v = {
    url: u,
    method: u,
    data: u,
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
    validateStatus: p,
    headers: (g, b) => l(cc(g), cc(b), !0)
  };
  return T.forEach(Object.keys(Object.assign({}, n, s)), function(g) {
    const b = v[g] || l, x = b(n[g], s[g], g);
    T.isUndefined(x) && b !== p || (o[g] = x);
  }), o;
}
const hu = (n) => {
  const s = hn({}, n);
  let { data: o, withXSRFToken: r, xsrfHeaderName: l, xsrfCookieName: u, headers: h, auth: p } = s;
  s.headers = h = Yt.from(h), s.url = ou(uu(s.baseURL, s.url), n.params, n.paramsSerializer), p && h.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  );
  let v;
  if (T.isFormData(o)) {
    if (Xt.hasStandardBrowserEnv || Xt.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if ((v = h.getContentType()) !== !1) {
      const [g, ...b] = v ? v.split(";").map((x) => x.trim()).filter(Boolean) : [];
      h.setContentType([g || "multipart/form-data", ...b].join("; "));
    }
  }
  if (Xt.hasStandardBrowserEnv && (r && T.isFunction(r) && (r = r(s)), r || r !== !1 && Ob(s.url))) {
    const g = l && u && Tb.read(u);
    g && h.set(l, g);
  }
  return s;
}, Rb = typeof XMLHttpRequest < "u", Pb = Rb && function(n) {
  return new Promise(function(s, o) {
    const r = hu(n);
    let l = r.data;
    const u = Yt.from(r.headers).normalize();
    let { responseType: h, onUploadProgress: p, onDownloadProgress: v } = r, g, b, x, E, P;
    function y() {
      E && E(), P && P(), r.cancelToken && r.cancelToken.unsubscribe(g), r.signal && r.signal.removeEventListener("abort", g);
    }
    let S = new XMLHttpRequest();
    S.open(r.method.toUpperCase(), r.url, !0), S.timeout = r.timeout;
    function N() {
      if (!S)
        return;
      const U = Yt.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), z = {
        data: !h || h === "text" || h === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: U,
        config: n,
        request: S
      };
      cu(function(gt) {
        s(gt), y();
      }, function(gt) {
        o(gt), y();
      }, z), S = null;
    }
    "onloadend" in S ? S.onloadend = N : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(N);
    }, S.onabort = function() {
      S && (o(new G("Request aborted", G.ECONNABORTED, n, S)), S = null);
    }, S.onerror = function() {
      o(new G("Network Error", G.ERR_NETWORK, n, S)), S = null;
    }, S.ontimeout = function() {
      let U = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const z = r.transitional || ru;
      r.timeoutErrorMessage && (U = r.timeoutErrorMessage), o(new G(
        U,
        z.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
        n,
        S
      )), S = null;
    }, l === void 0 && u.setContentType(null), "setRequestHeader" in S && T.forEach(u.toJSON(), function(U, z) {
      S.setRequestHeader(z, U);
    }), T.isUndefined(r.withCredentials) || (S.withCredentials = !!r.withCredentials), h && h !== "json" && (S.responseType = r.responseType), v && ([x, P] = vi(v, !0), S.addEventListener("progress", x)), p && S.upload && ([b, E] = vi(p), S.upload.addEventListener("progress", b), S.upload.addEventListener("loadend", E)), (r.cancelToken || r.signal) && (g = (U) => {
      S && (o(!U || U.type ? new Nn(null, n, S) : U), S.abort(), S = null);
    }, r.cancelToken && r.cancelToken.subscribe(g), r.signal && (r.signal.aborted ? g() : r.signal.addEventListener("abort", g)));
    const D = Sb(r.url);
    if (D && Xt.protocols.indexOf(D) === -1) {
      o(new G("Unsupported protocol " + D + ":", G.ERR_BAD_REQUEST, n));
      return;
    }
    S.send(l || null);
  });
}, Nb = (n, s) => {
  const { length: o } = n = n ? n.filter(Boolean) : [];
  if (s || o) {
    let r = new AbortController(), l;
    const u = function(g) {
      if (!l) {
        l = !0, p();
        const b = g instanceof Error ? g : this.reason;
        r.abort(b instanceof G ? b : new Nn(b instanceof Error ? b.message : b));
      }
    };
    let h = s && setTimeout(() => {
      h = null, u(new G(`timeout ${s} of ms exceeded`, G.ETIMEDOUT));
    }, s);
    const p = () => {
      n && (h && clearTimeout(h), h = null, n.forEach((g) => {
        g.unsubscribe ? g.unsubscribe(u) : g.removeEventListener("abort", u);
      }), n = null);
    };
    n.forEach((g) => g.addEventListener("abort", u));
    const { signal: v } = r;
    return v.unsubscribe = () => T.asap(p), v;
  }
}, Bb = function* (n, s) {
  let o = n.byteLength;
  if (o < s) {
    yield n;
    return;
  }
  let r = 0, l;
  for (; r < o; )
    l = r + s, yield n.slice(r, l), r = l;
}, Fb = async function* (n, s) {
  for await (const o of Ib(n))
    yield* Bb(o, s);
}, Ib = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const s = n.getReader();
  try {
    for (; ; ) {
      const { done: o, value: r } = await s.read();
      if (o)
        break;
      yield r;
    }
  } finally {
    await s.cancel();
  }
}, uc = (n, s, o, r) => {
  const l = Fb(n, s);
  let u = 0, h, p = (v) => {
    h || (h = !0, r && r(v));
  };
  return new ReadableStream({
    async pull(v) {
      try {
        const { done: g, value: b } = await l.next();
        if (g) {
          p(), v.close();
          return;
        }
        let x = b.byteLength;
        if (o) {
          let E = u += x;
          o(E);
        }
        v.enqueue(new Uint8Array(b));
      } catch (g) {
        throw p(g), g;
      }
    },
    cancel(v) {
      return p(v), l.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ci = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", du = Ci && typeof ReadableStream == "function", Db = Ci && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (s) => n.encode(s))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), fu = (n, ...s) => {
  try {
    return !!n(...s);
  } catch {
    return !1;
  }
}, Lb = du && fu(() => {
  let n = !1;
  const s = new Request(Xt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !s;
}), hc = 64 * 1024, or = du && fu(() => T.isReadableStream(new Response("").body)), yi = {
  stream: or && ((n) => n.body)
};
Ci && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !yi[s] && (yi[s] = T.isFunction(n[s]) ? (o) => o[s]() : (o, r) => {
      throw new G(`Response type '${s}' is not supported`, G.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ub = async (n) => {
  if (n == null)
    return 0;
  if (T.isBlob(n))
    return n.size;
  if (T.isSpecCompliantForm(n))
    return (await new Request(Xt.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (T.isArrayBufferView(n) || T.isArrayBuffer(n))
    return n.byteLength;
  if (T.isURLSearchParams(n) && (n = n + ""), T.isString(n))
    return (await Db(n)).byteLength;
}, jb = async (n, s) => T.toFiniteNumber(n.getContentLength()) ?? Ub(s), Mb = Ci && (async (n) => {
  let {
    url: s,
    method: o,
    data: r,
    signal: l,
    cancelToken: u,
    timeout: h,
    onDownloadProgress: p,
    onUploadProgress: v,
    responseType: g,
    headers: b,
    withCredentials: x = "same-origin",
    fetchOptions: E
  } = hu(n);
  g = g ? (g + "").toLowerCase() : "text";
  let P = Nb([l, u && u.toAbortSignal()], h), y;
  const S = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let N;
  try {
    if (v && Lb && o !== "get" && o !== "head" && (N = await jb(b, r)) !== 0) {
      let at = new Request(s, {
        method: "POST",
        body: r,
        duplex: "half"
      }), ut;
      if (T.isFormData(r) && (ut = at.headers.get("content-type")) && b.setContentType(ut), at.body) {
        const [kt, It] = ac(
          N,
          vi(lc(v))
        );
        r = uc(at.body, hc, kt, It);
      }
    }
    T.isString(x) || (x = x ? "include" : "omit");
    const D = "credentials" in Request.prototype;
    y = new Request(s, {
      ...E,
      signal: P,
      method: o.toUpperCase(),
      headers: b.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: D ? x : void 0
    });
    let U = await fetch(y);
    const z = or && (g === "stream" || g === "response");
    if (or && (p || z && S)) {
      const at = {};
      ["status", "statusText", "headers"].forEach((Dt) => {
        at[Dt] = U[Dt];
      });
      const ut = T.toFiniteNumber(U.headers.get("content-length")), [kt, It] = p && ac(
        ut,
        vi(lc(p), !0)
      ) || [];
      U = new Response(
        uc(U.body, hc, kt, () => {
          It && It(), S && S();
        }),
        at
      );
    }
    g = g || "text";
    let gt = await yi[T.findKey(yi, g) || "text"](U, n);
    return !z && S && S(), await new Promise((at, ut) => {
      cu(at, ut, {
        data: gt,
        headers: Yt.from(U.headers),
        status: U.status,
        statusText: U.statusText,
        config: n,
        request: y
      });
    });
  } catch (D) {
    throw S && S(), D && D.name === "TypeError" && /fetch/i.test(D.message) ? Object.assign(
      new G("Network Error", G.ERR_NETWORK, n, y),
      {
        cause: D.cause || D
      }
    ) : G.from(D, D && D.code, n, y);
  }
}), rr = {
  http: nb,
  xhr: Pb,
  fetch: Mb
};
T.forEach(rr, (n, s) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: s });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: s });
  }
});
const dc = (n) => `- ${n}`, zb = (n) => T.isFunction(n) || n === null || n === !1, pu = {
  getAdapter: (n) => {
    n = T.isArray(n) ? n : [n];
    const { length: s } = n;
    let o, r;
    const l = {};
    for (let u = 0; u < s; u++) {
      o = n[u];
      let h;
      if (r = o, !zb(o) && (r = rr[(h = String(o)).toLowerCase()], r === void 0))
        throw new G(`Unknown adapter '${h}'`);
      if (r)
        break;
      l[h || "#" + u] = r;
    }
    if (!r) {
      const u = Object.entries(l).map(
        ([p, v]) => `adapter ${p} ` + (v === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let h = s ? u.length > 1 ? `since :
` + u.map(dc).join(`
`) : " " + dc(u[0]) : "as no adapter specified";
      throw new G(
        "There is no suitable adapter to dispatch the request " + h,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: rr
};
function Vo(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Nn(null, n);
}
function fc(n) {
  return Vo(n), n.headers = Yt.from(n.headers), n.data = Wo.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), pu.getAdapter(n.adapter || ks.adapter)(n).then(function(s) {
    return Vo(n), s.data = Wo.call(
      n,
      n.transformResponse,
      s
    ), s.headers = Yt.from(s.headers), s;
  }, function(s) {
    return lu(s) || (Vo(n), s && s.response && (s.response.data = Wo.call(
      n,
      n.transformResponse,
      s.response
    ), s.response.headers = Yt.from(s.response.headers))), Promise.reject(s);
  });
}
const mu = "1.7.7", Ar = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, s) => {
  Ar[n] = function(o) {
    return typeof o === n || "a" + (s < 1 ? "n " : " ") + n;
  };
});
const pc = {};
Ar.transitional = function(n, s, o) {
  function r(l, u) {
    return "[Axios v" + mu + "] Transitional option '" + l + "'" + u + (o ? ". " + o : "");
  }
  return (l, u, h) => {
    if (n === !1)
      throw new G(
        r(u, " has been removed" + (s ? " in " + s : "")),
        G.ERR_DEPRECATED
      );
    return s && !pc[u] && (pc[u] = !0, console.warn(
      r(
        u,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), n ? n(l, u, h) : !0;
  };
};
function Hb(n, s, o) {
  if (typeof n != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let l = r.length;
  for (; l-- > 0; ) {
    const u = r[l], h = s[u];
    if (h) {
      const p = n[u], v = p === void 0 || h(p, u, n);
      if (v !== !0)
        throw new G("option " + u + " must be " + v, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new G("Unknown option " + u, G.ERR_BAD_OPTION);
  }
}
const ar = {
  assertOptions: Hb,
  validators: Ar
}, Ie = ar.validators;
let ln = class {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new oc(),
      response: new oc()
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
  async request(s, o) {
    try {
      return await this._request(s, o);
    } catch (r) {
      if (r instanceof Error) {
        let l;
        Error.captureStackTrace ? Error.captureStackTrace(l = {}) : l = new Error();
        const u = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? u && !String(r.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + u) : r.stack = u;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(s, o) {
    typeof s == "string" ? (o = o || {}, o.url = s) : o = s || {}, o = hn(this.defaults, o);
    const { transitional: r, paramsSerializer: l, headers: u } = o;
    r !== void 0 && ar.assertOptions(r, {
      silentJSONParsing: Ie.transitional(Ie.boolean),
      forcedJSONParsing: Ie.transitional(Ie.boolean),
      clarifyTimeoutError: Ie.transitional(Ie.boolean)
    }, !1), l != null && (T.isFunction(l) ? o.paramsSerializer = {
      serialize: l
    } : ar.assertOptions(l, {
      encode: Ie.function,
      serialize: Ie.function
    }, !0)), o.method = (o.method || this.defaults.method || "get").toLowerCase();
    let h = u && T.merge(
      u.common,
      u[o.method]
    );
    u && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete u[y];
      }
    ), o.headers = Yt.concat(h, u);
    const p = [];
    let v = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(o) === !1 || (v = v && y.synchronous, p.unshift(y.fulfilled, y.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(y) {
      g.push(y.fulfilled, y.rejected);
    });
    let b, x = 0, E;
    if (!v) {
      const y = [fc.bind(this), void 0];
      for (y.unshift.apply(y, p), y.push.apply(y, g), E = y.length, b = Promise.resolve(o); x < E; )
        b = b.then(y[x++], y[x++]);
      return b;
    }
    E = p.length;
    let P = o;
    for (x = 0; x < E; ) {
      const y = p[x++], S = p[x++];
      try {
        P = y(P);
      } catch (N) {
        S.call(this, N);
        break;
      }
    }
    try {
      b = fc.call(this, P);
    } catch (y) {
      return Promise.reject(y);
    }
    for (x = 0, E = g.length; x < E; )
      b = b.then(g[x++], g[x++]);
    return b;
  }
  getUri(s) {
    s = hn(this.defaults, s);
    const o = uu(s.baseURL, s.url);
    return ou(o, s.params, s.paramsSerializer);
  }
};
T.forEach(["delete", "get", "head", "options"], function(n) {
  ln.prototype[n] = function(s, o) {
    return this.request(hn(o || {}, {
      method: n,
      url: s,
      data: (o || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(n) {
  function s(o) {
    return function(r, l, u) {
      return this.request(hn(u || {}, {
        method: n,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: l
      }));
    };
  }
  ln.prototype[n] = s(), ln.prototype[n + "Form"] = s(!0);
});
let qb = class gu {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function(l) {
      o = l;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let u = r._listeners.length;
      for (; u-- > 0; )
        r._listeners[u](l);
      r._listeners = null;
    }), this.promise.then = (l) => {
      let u;
      const h = new Promise((p) => {
        r.subscribe(p), u = p;
      }).then(l);
      return h.cancel = function() {
        r.unsubscribe(u);
      }, h;
    }, s(function(l, u, h) {
      r.reason || (r.reason = new Nn(l, u, h), o(r.reason));
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
    const o = this._listeners.indexOf(s);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const s = new AbortController(), o = (r) => {
      s.abort(r);
    };
    return this.subscribe(o), s.signal.unsubscribe = () => this.unsubscribe(o), s.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let s;
    return {
      token: new gu(function(o) {
        s = o;
      }),
      cancel: s
    };
  }
};
function Wb(n) {
  return function(s) {
    return n.apply(null, s);
  };
}
function Vb(n) {
  return T.isObject(n) && n.isAxiosError === !0;
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
Object.entries(lr).forEach(([n, s]) => {
  lr[s] = n;
});
function bu(n) {
  const s = new ln(n), o = Jc(ln.prototype.request, s);
  return T.extend(o, ln.prototype, s, { allOwnKeys: !0 }), T.extend(o, s, null, { allOwnKeys: !0 }), o.create = function(r) {
    return bu(hn(n, r));
  }, o;
}
const vt = bu(ks);
vt.Axios = ln;
vt.CanceledError = Nn;
vt.CancelToken = qb;
vt.isCancel = lu;
vt.VERSION = mu;
vt.toFormData = Ai;
vt.AxiosError = G;
vt.Cancel = vt.CanceledError;
vt.all = function(n) {
  return Promise.all(n);
};
vt.spread = Wb;
vt.isAxiosError = Vb;
vt.mergeConfig = hn;
vt.AxiosHeaders = Yt;
vt.formToJSON = (n) => au(T.isHTMLForm(n) ? new FormData(n) : n);
vt.getAdapter = pu.getAdapter;
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
      return vt.post("/account/login", n).then((s) => (this.setUser(s.data), this.user)).catch((s) => {
        throw {
          description: "An error as occurred",
          style: Oe.Danger,
          closeBtn: !0,
          ...s.response.data
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
}), Kb = { class: "uk-fieldset" }, Gb = { class: "uk-margin" }, Xb = { class: "uk-inline uk-width-1-1" }, Yb = { class: "uk-margin" }, Qb = { class: "uk-inline uk-width-1-1" }, Zb = { class: "uk-text-center" }, tw = ["disabled"], Cr = /* @__PURE__ */ yt({
  __name: "FormLogin",
  setup(n) {
    const s = ae(!1), o = ae();
    let r = {
      user_name: "",
      password: ""
    };
    async function l() {
      s.value = !0, o.value = null, await Jb().login(r).then((h) => {
        Vc.notification({
          message: "Welcome back " + (h == null ? void 0 : h.full_name) + "!",
          status: "success",
          pos: "bottom-right",
          timeout: 4e3
        });
      }).catch((h) => {
        o.value = h;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (u, h) => {
      const p = Ht("UFAlertContainer");
      return F(), H("form", {
        onSubmit: h[2] || (h[2] = Ei((v) => l(), ["prevent"]))
      }, [
        O("fieldset", Kb, [
          o.value ? (F(), At(p, {
            key: 0,
            "data-test": "error",
            alert: o.value
          }, null, 8, ["alert"])) : mt("", !0),
          O("div", Gb, [
            O("div", Xb, [
              h[3] || (h[3] = O("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: user"
              }, null, -1)),
              re(O("input", {
                class: "uk-input",
                type: "text",
                placeholder: "Username",
                "aria-label": "Username",
                "data-test": "username",
                "onUpdate:modelValue": h[0] || (h[0] = (v) => W(r).user_name = v)
              }, null, 512), [
                [me, W(r).user_name]
              ])
            ])
          ]),
          O("div", Yb, [
            O("div", Qb, [
              h[4] || (h[4] = O("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: lock"
              }, null, -1)),
              re(O("input", {
                class: "uk-input",
                type: "password",
                placeholder: "Password",
                "aria-label": "Password",
                "data-test": "password",
                "onUpdate:modelValue": h[1] || (h[1] = (v) => W(r).password = v)
              }, null, 512), [
                [me, W(r).password]
              ])
            ])
          ]),
          O("div", Zb, [
            O("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Login ", 8, tw)
          ])
        ])
      ], 32);
    };
  }
});
function wu(n, s) {
  return function() {
    return n.apply(s, arguments);
  };
}
const { toString: ew } = Object.prototype, { getPrototypeOf: Rr } = Object, Ri = /* @__PURE__ */ ((n) => (s) => {
  const o = ew.call(s);
  return n[o] || (n[o] = o.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), we = (n) => (n = n.toLowerCase(), (s) => Ri(s) === n), Pi = (n) => (s) => typeof s === n, { isArray: Bn } = Array, bs = Pi("undefined");
function nw(n) {
  return n !== null && !bs(n) && n.constructor !== null && !bs(n.constructor) && ce(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const vu = we("ArrayBuffer");
function sw(n) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(n) : s = n && n.buffer && vu(n.buffer), s;
}
const iw = Pi("string"), ce = Pi("function"), yu = Pi("number"), Ni = (n) => n !== null && typeof n == "object", ow = (n) => n === !0 || n === !1, pi = (n) => {
  if (Ri(n) !== "object")
    return !1;
  const s = Rr(n);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}, rw = we("Date"), aw = we("File"), lw = we("Blob"), cw = we("FileList"), uw = (n) => Ni(n) && ce(n.pipe), hw = (n) => {
  let s;
  return n && (typeof FormData == "function" && n instanceof FormData || ce(n.append) && ((s = Ri(n)) === "formdata" || // detect form-data instance
  s === "object" && ce(n.toString) && n.toString() === "[object FormData]"));
}, dw = we("URLSearchParams"), [fw, pw, mw, gw] = ["ReadableStream", "Request", "Response", "Headers"].map(we), bw = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $s(n, s, { allOwnKeys: o = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let r, l;
  if (typeof n != "object" && (n = [n]), Bn(n))
    for (r = 0, l = n.length; r < l; r++)
      s.call(null, n[r], r, n);
  else {
    const u = o ? Object.getOwnPropertyNames(n) : Object.keys(n), h = u.length;
    let p;
    for (r = 0; r < h; r++)
      p = u[r], s.call(null, n[p], p, n);
  }
}
function ku(n, s) {
  s = s.toLowerCase();
  const o = Object.keys(n);
  let r = o.length, l;
  for (; r-- > 0; )
    if (l = o[r], s === l.toLowerCase())
      return l;
  return null;
}
const rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, $u = (n) => !bs(n) && n !== rn;
function cr() {
  const { caseless: n } = $u(this) && this || {}, s = {}, o = (r, l) => {
    const u = n && ku(s, l) || l;
    pi(s[u]) && pi(r) ? s[u] = cr(s[u], r) : pi(r) ? s[u] = cr({}, r) : Bn(r) ? s[u] = r.slice() : s[u] = r;
  };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && $s(arguments[r], o);
  return s;
}
const ww = (n, s, o, { allOwnKeys: r } = {}) => ($s(s, (l, u) => {
  o && ce(l) ? n[u] = wu(l, o) : n[u] = l;
}, { allOwnKeys: r }), n), vw = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), yw = (n, s, o, r) => {
  n.prototype = Object.create(s.prototype, r), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: s.prototype
  }), o && Object.assign(n.prototype, o);
}, kw = (n, s, o, r) => {
  let l, u, h;
  const p = {};
  if (s = s || {}, n == null) return s;
  do {
    for (l = Object.getOwnPropertyNames(n), u = l.length; u-- > 0; )
      h = l[u], (!r || r(h, n, s)) && !p[h] && (s[h] = n[h], p[h] = !0);
    n = o !== !1 && Rr(n);
  } while (n && (!o || o(n, s)) && n !== Object.prototype);
  return s;
}, $w = (n, s, o) => {
  n = String(n), (o === void 0 || o > n.length) && (o = n.length), o -= s.length;
  const r = n.indexOf(s, o);
  return r !== -1 && r === o;
}, xw = (n) => {
  if (!n) return null;
  if (Bn(n)) return n;
  let s = n.length;
  if (!yu(s)) return null;
  const o = new Array(s);
  for (; s-- > 0; )
    o[s] = n[s];
  return o;
}, Sw = /* @__PURE__ */ ((n) => (s) => n && s instanceof n)(typeof Uint8Array < "u" && Rr(Uint8Array)), Ew = (n, s) => {
  const o = (n && n[Symbol.iterator]).call(n);
  let r;
  for (; (r = o.next()) && !r.done; ) {
    const l = r.value;
    s.call(n, l[0], l[1]);
  }
}, _w = (n, s) => {
  let o;
  const r = [];
  for (; (o = n.exec(s)) !== null; )
    r.push(o);
  return r;
}, Ow = we("HTMLFormElement"), Tw = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, o, r) {
    return o.toUpperCase() + r;
  }
), mc = (({ hasOwnProperty: n }) => (s, o) => n.call(s, o))(Object.prototype), Aw = we("RegExp"), xu = (n, s) => {
  const o = Object.getOwnPropertyDescriptors(n), r = {};
  $s(o, (l, u) => {
    let h;
    (h = s(l, u, n)) !== !1 && (r[u] = h || l);
  }), Object.defineProperties(n, r);
}, Cw = (n) => {
  xu(n, (s, o) => {
    if (ce(n) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
      return !1;
    const r = n[o];
    if (ce(r)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + o + "'");
      });
    }
  });
}, Rw = (n, s) => {
  const o = {}, r = (l) => {
    l.forEach((u) => {
      o[u] = !0;
    });
  };
  return Bn(n) ? r(n) : r(String(n).split(s)), o;
}, Pw = () => {
}, Nw = (n, s) => n != null && Number.isFinite(n = +n) ? n : s, Jo = "abcdefghijklmnopqrstuvwxyz", gc = "0123456789", Su = {
  DIGIT: gc,
  ALPHA: Jo,
  ALPHA_DIGIT: Jo + Jo.toUpperCase() + gc
}, Bw = (n = 16, s = Su.ALPHA_DIGIT) => {
  let o = "";
  const { length: r } = s;
  for (; n--; )
    o += s[Math.random() * r | 0];
  return o;
};
function Fw(n) {
  return !!(n && ce(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator]);
}
const Iw = (n) => {
  const s = new Array(10), o = (r, l) => {
    if (Ni(r)) {
      if (s.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        s[l] = r;
        const u = Bn(r) ? [] : {};
        return $s(r, (h, p) => {
          const v = o(h, l + 1);
          !bs(v) && (u[p] = v);
        }), s[l] = void 0, u;
      }
    }
    return r;
  };
  return o(n, 0);
}, Dw = we("AsyncFunction"), Lw = (n) => n && (Ni(n) || ce(n)) && ce(n.then) && ce(n.catch), Eu = ((n, s) => n ? setImmediate : s ? ((o, r) => (rn.addEventListener("message", ({ source: l, data: u }) => {
  l === rn && u === o && r.length && r.shift()();
}, !1), (l) => {
  r.push(l), rn.postMessage(o, "*");
}))(`axios@${Math.random()}`, []) : (o) => setTimeout(o))(
  typeof setImmediate == "function",
  ce(rn.postMessage)
), Uw = typeof queueMicrotask < "u" ? queueMicrotask.bind(rn) : typeof process < "u" && process.nextTick || Eu, C = {
  isArray: Bn,
  isArrayBuffer: vu,
  isBuffer: nw,
  isFormData: hw,
  isArrayBufferView: sw,
  isString: iw,
  isNumber: yu,
  isBoolean: ow,
  isObject: Ni,
  isPlainObject: pi,
  isReadableStream: fw,
  isRequest: pw,
  isResponse: mw,
  isHeaders: gw,
  isUndefined: bs,
  isDate: rw,
  isFile: aw,
  isBlob: lw,
  isRegExp: Aw,
  isFunction: ce,
  isStream: uw,
  isURLSearchParams: dw,
  isTypedArray: Sw,
  isFileList: cw,
  forEach: $s,
  merge: cr,
  extend: ww,
  trim: bw,
  stripBOM: vw,
  inherits: yw,
  toFlatObject: kw,
  kindOf: Ri,
  kindOfTest: we,
  endsWith: $w,
  toArray: xw,
  forEachEntry: Ew,
  matchAll: _w,
  isHTMLForm: Ow,
  hasOwnProperty: mc,
  hasOwnProp: mc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: xu,
  freezeMethods: Cw,
  toObjectSet: Rw,
  toCamelCase: Tw,
  noop: Pw,
  toFiniteNumber: Nw,
  findKey: ku,
  global: rn,
  isContextDefined: $u,
  ALPHABET: Su,
  generateString: Bw,
  isSpecCompliantForm: Fw,
  toJSONObject: Iw,
  isAsyncFn: Dw,
  isThenable: Lw,
  setImmediate: Eu,
  asap: Uw
};
function X(n, s, o, r, l) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", s && (this.code = s), o && (this.config = o), r && (this.request = r), l && (this.response = l);
}
C.inherits(X, Error, {
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
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const _u = X.prototype, Ou = {};
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
  Ou[n] = { value: n };
});
Object.defineProperties(X, Ou);
Object.defineProperty(_u, "isAxiosError", { value: !0 });
X.from = (n, s, o, r, l, u) => {
  const h = Object.create(_u);
  return C.toFlatObject(n, h, function(p) {
    return p !== Error.prototype;
  }, (p) => p !== "isAxiosError"), X.call(h, n.message, s, o, r, l), h.cause = n, h.name = n.name, u && Object.assign(h, u), h;
};
const jw = null;
function ur(n) {
  return C.isPlainObject(n) || C.isArray(n);
}
function Tu(n) {
  return C.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function bc(n, s, o) {
  return n ? n.concat(s).map(function(r, l) {
    return r = Tu(r), !o && l ? "[" + r + "]" : r;
  }).join(o ? "." : "") : s;
}
function Mw(n) {
  return C.isArray(n) && !n.some(ur);
}
const zw = C.toFlatObject(C, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Bi(n, s, o) {
  if (!C.isObject(n))
    throw new TypeError("target must be an object");
  s = s || new FormData(), o = C.toFlatObject(o, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, y) {
    return !C.isUndefined(y[P]);
  });
  const r = o.metaTokens, l = o.visitor || g, u = o.dots, h = o.indexes, p = (o.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(s);
  if (!C.isFunction(l))
    throw new TypeError("visitor must be a function");
  function v(P) {
    if (P === null) return "";
    if (C.isDate(P))
      return P.toISOString();
    if (!p && C.isBlob(P))
      throw new X("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(P) || C.isTypedArray(P) ? p && typeof Blob == "function" ? new Blob([P]) : Buffer.from(P) : P;
  }
  function g(P, y, S) {
    let N = P;
    if (P && !S && typeof P == "object") {
      if (C.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), P = JSON.stringify(P);
      else if (C.isArray(P) && Mw(P) || (C.isFileList(P) || C.endsWith(y, "[]")) && (N = C.toArray(P)))
        return y = Tu(y), N.forEach(function(D, U) {
          !(C.isUndefined(D) || D === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? bc([y], U, u) : h === null ? y : y + "[]",
            v(D)
          );
        }), !1;
    }
    return ur(P) ? !0 : (s.append(bc(S, y, u), v(P)), !1);
  }
  const b = [], x = Object.assign(zw, {
    defaultVisitor: g,
    convertValue: v,
    isVisitable: ur
  });
  function E(P, y) {
    if (!C.isUndefined(P)) {
      if (b.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      b.push(P), C.forEach(P, function(S, N) {
        (!(C.isUndefined(S) || S === null) && l.call(
          s,
          S,
          C.isString(N) ? N.trim() : N,
          y,
          x
        )) === !0 && E(S, y ? y.concat(N) : [N]);
      }), b.pop();
    }
  }
  if (!C.isObject(n))
    throw new TypeError("data must be an object");
  return E(n), s;
}
function wc(n) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(o) {
    return s[o];
  });
}
function Pr(n, s) {
  this._pairs = [], n && Bi(n, this, s);
}
const Au = Pr.prototype;
Au.append = function(n, s) {
  this._pairs.push([n, s]);
};
Au.toString = function(n) {
  const s = n ? function(o) {
    return n.call(this, o, wc);
  } : wc;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function Hw(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cu(n, s, o) {
  if (!s)
    return n;
  const r = o && o.encode || Hw, l = o && o.serialize;
  let u;
  if (l ? u = l(s, o) : u = C.isURLSearchParams(s) ? s.toString() : new Pr(s, o).toString(r), u) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)), n += (n.indexOf("?") === -1 ? "?" : "&") + u;
  }
  return n;
}
class vc {
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
  use(s, o, r) {
    return this.handlers.push({
      fulfilled: s,
      rejected: o,
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
    C.forEach(this.handlers, function(o) {
      o !== null && s(o);
    });
  }
}
const Ru = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qw = typeof URLSearchParams < "u" ? URLSearchParams : Pr, Ww = typeof FormData < "u" ? FormData : null, Vw = typeof Blob < "u" ? Blob : null, Jw = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qw,
    FormData: Ww,
    Blob: Vw
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Nr = typeof window < "u" && typeof document < "u", Kw = ((n) => Nr && ["ReactNative", "NativeScript", "NS"].indexOf(n) < 0)(typeof navigator < "u" && navigator.product), Gw = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Xw = Nr && window.location.href || "http://localhost", Yw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Nr,
  hasStandardBrowserEnv: Kw,
  hasStandardBrowserWebWorkerEnv: Gw,
  origin: Xw
}, Symbol.toStringTag, { value: "Module" })), ge = {
  ...Yw,
  ...Jw
};
function Qw(n, s) {
  return Bi(n, new ge.classes.URLSearchParams(), Object.assign({
    visitor: function(o, r, l, u) {
      return ge.isNode && C.isBuffer(o) ? (this.append(r, o.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function Zw(n) {
  return C.matchAll(/\w+|\[(\w*)]/g, n).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function tv(n) {
  const s = {}, o = Object.keys(n);
  let r;
  const l = o.length;
  let u;
  for (r = 0; r < l; r++)
    u = o[r], s[u] = n[u];
  return s;
}
function Pu(n) {
  function s(o, r, l, u) {
    let h = o[u++];
    if (h === "__proto__") return !0;
    const p = Number.isFinite(+h), v = u >= o.length;
    return h = !h && C.isArray(l) ? l.length : h, v ? (C.hasOwnProp(l, h) ? l[h] = [l[h], r] : l[h] = r, !p) : ((!l[h] || !C.isObject(l[h])) && (l[h] = []), s(o, r, l[h], u) && C.isArray(l[h]) && (l[h] = tv(l[h])), !p);
  }
  if (C.isFormData(n) && C.isFunction(n.entries)) {
    const o = {};
    return C.forEachEntry(n, (r, l) => {
      s(Zw(r), l, o, 0);
    }), o;
  }
  return null;
}
function ev(n, s, o) {
  if (C.isString(n))
    try {
      return (s || JSON.parse)(n), C.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(n);
}
const xs = {
  transitional: Ru,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, s) {
    const o = s.getContentType() || "", r = o.indexOf("application/json") > -1, l = C.isObject(n);
    if (l && C.isHTMLForm(n) && (n = new FormData(n)), C.isFormData(n))
      return r ? JSON.stringify(Pu(n)) : n;
    if (C.isArrayBuffer(n) || C.isBuffer(n) || C.isStream(n) || C.isFile(n) || C.isBlob(n) || C.isReadableStream(n))
      return n;
    if (C.isArrayBufferView(n))
      return n.buffer;
    if (C.isURLSearchParams(n))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let u;
    if (l) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Qw(n, this.formSerializer).toString();
      if ((u = C.isFileList(n)) || o.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return Bi(
          u ? { "files[]": n } : n,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return l || r ? (s.setContentType("application/json", !1), ev(n)) : n;
  }],
  transformResponse: [function(n) {
    const s = this.transitional || xs.transitional, o = s && s.forcedJSONParsing, r = this.responseType === "json";
    if (C.isResponse(n) || C.isReadableStream(n))
      return n;
    if (n && C.isString(n) && (o && !this.responseType || r)) {
      const l = !(s && s.silentJSONParsing) && r;
      try {
        return JSON.parse(n);
      } catch (u) {
        if (l)
          throw u.name === "SyntaxError" ? X.from(u, X.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
C.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  xs.headers[n] = {};
});
const nv = C.toObjectSet([
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
]), sv = (n) => {
  const s = {};
  let o, r, l;
  return n && n.split(`
`).forEach(function(u) {
    l = u.indexOf(":"), o = u.substring(0, l).trim().toLowerCase(), r = u.substring(l + 1).trim(), !(!o || s[o] && nv[o]) && (o === "set-cookie" ? s[o] ? s[o].push(r) : s[o] = [r] : s[o] = s[o] ? s[o] + ", " + r : r);
  }), s;
}, yc = Symbol("internals");
function fs(n) {
  return n && String(n).trim().toLowerCase();
}
function mi(n) {
  return n === !1 || n == null ? n : C.isArray(n) ? n.map(mi) : String(n);
}
function iv(n) {
  const s = /* @__PURE__ */ Object.create(null), o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = o.exec(n); )
    s[r[1]] = r[2];
  return s;
}
const ov = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Ko(n, s, o, r, l) {
  if (C.isFunction(r))
    return r.call(this, s, o);
  if (l && (s = o), !!C.isString(s)) {
    if (C.isString(r))
      return s.indexOf(r) !== -1;
    if (C.isRegExp(r))
      return r.test(s);
  }
}
function rv(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, o, r) => o.toUpperCase() + r);
}
function av(n, s) {
  const o = C.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + o, {
      value: function(l, u, h) {
        return this[r].call(this, s, l, u, h);
      },
      configurable: !0
    });
  });
}
class Qt {
  constructor(s) {
    s && this.set(s);
  }
  set(s, o, r) {
    const l = this;
    function u(p, v, g) {
      const b = fs(v);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const x = C.findKey(l, b);
      (!x || l[x] === void 0 || g === !0 || g === void 0 && l[x] !== !1) && (l[x || v] = mi(p));
    }
    const h = (p, v) => C.forEach(p, (g, b) => u(g, b, v));
    if (C.isPlainObject(s) || s instanceof this.constructor)
      h(s, o);
    else if (C.isString(s) && (s = s.trim()) && !ov(s))
      h(sv(s), o);
    else if (C.isHeaders(s))
      for (const [p, v] of s.entries())
        u(v, p, r);
    else
      s != null && u(o, s, r);
    return this;
  }
  get(s, o) {
    if (s = fs(s), s) {
      const r = C.findKey(this, s);
      if (r) {
        const l = this[r];
        if (!o)
          return l;
        if (o === !0)
          return iv(l);
        if (C.isFunction(o))
          return o.call(this, l, r);
        if (C.isRegExp(o))
          return o.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, o) {
    if (s = fs(s), s) {
      const r = C.findKey(this, s);
      return !!(r && this[r] !== void 0 && (!o || Ko(this, this[r], r, o)));
    }
    return !1;
  }
  delete(s, o) {
    const r = this;
    let l = !1;
    function u(h) {
      if (h = fs(h), h) {
        const p = C.findKey(r, h);
        p && (!o || Ko(r, r[p], p, o)) && (delete r[p], l = !0);
      }
    }
    return C.isArray(s) ? s.forEach(u) : u(s), l;
  }
  clear(s) {
    const o = Object.keys(this);
    let r = o.length, l = !1;
    for (; r--; ) {
      const u = o[r];
      (!s || Ko(this, this[u], u, s, !0)) && (delete this[u], l = !0);
    }
    return l;
  }
  normalize(s) {
    const o = this, r = {};
    return C.forEach(this, (l, u) => {
      const h = C.findKey(r, u);
      if (h) {
        o[h] = mi(l), delete o[u];
        return;
      }
      const p = s ? rv(u) : String(u).trim();
      p !== u && delete o[u], o[p] = mi(l), r[p] = !0;
    }), this;
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const o = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (r, l) => {
      r != null && r !== !1 && (o[l] = s && C.isArray(r) ? r.join(", ") : r);
    }), o;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, o]) => s + ": " + o).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...o) {
    const r = new this(s);
    return o.forEach((l) => r.set(l)), r;
  }
  static accessor(s) {
    const o = (this[yc] = this[yc] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function l(u) {
      const h = fs(u);
      o[h] || (av(r, u), o[h] = !0);
    }
    return C.isArray(s) ? s.forEach(l) : l(s), this;
  }
}
Qt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(Qt.prototype, ({ value: n }, s) => {
  let o = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => n,
    set(r) {
      this[o] = r;
    }
  };
});
C.freezeMethods(Qt);
function Go(n, s) {
  const o = this || xs, r = s || o, l = Qt.from(r.headers);
  let u = r.data;
  return C.forEach(n, function(h) {
    u = h.call(o, u, l.normalize(), s ? s.status : void 0);
  }), l.normalize(), u;
}
function Nu(n) {
  return !!(n && n.__CANCEL__);
}
function Fn(n, s, o) {
  X.call(this, n ?? "canceled", X.ERR_CANCELED, s, o), this.name = "CanceledError";
}
C.inherits(Fn, X, {
  __CANCEL__: !0
});
function Bu(n, s, o) {
  const r = o.config.validateStatus;
  !o.status || !r || r(o.status) ? n(o) : s(new X(
    "Request failed with status code " + o.status,
    [X.ERR_BAD_REQUEST, X.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4],
    o.config,
    o.request,
    o
  ));
}
function lv(n) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return s && s[1] || "";
}
function cv(n, s) {
  n = n || 10;
  const o = new Array(n), r = new Array(n);
  let l = 0, u = 0, h;
  return s = s !== void 0 ? s : 1e3, function(p) {
    const v = Date.now(), g = r[u];
    h || (h = v), o[l] = p, r[l] = v;
    let b = u, x = 0;
    for (; b !== l; )
      x += o[b++], b = b % n;
    if (l = (l + 1) % n, l === u && (u = (u + 1) % n), v - h < s)
      return;
    const E = g && v - g;
    return E ? Math.round(x * 1e3 / E) : void 0;
  };
}
function uv(n, s) {
  let o = 0, r = 1e3 / s, l, u;
  const h = (p, v = Date.now()) => {
    o = v, l = null, u && (clearTimeout(u), u = null), n.apply(null, p);
  };
  return [(...p) => {
    const v = Date.now(), g = v - o;
    g >= r ? h(p, v) : (l = p, u || (u = setTimeout(() => {
      u = null, h(l);
    }, r - g)));
  }, () => l && h(l)];
}
const ki = (n, s, o = 3) => {
  let r = 0;
  const l = cv(50, 250);
  return uv((u) => {
    const h = u.loaded, p = u.lengthComputable ? u.total : void 0, v = h - r, g = l(v), b = h <= p;
    r = h;
    const x = {
      loaded: h,
      total: p,
      progress: p ? h / p : void 0,
      bytes: v,
      rate: g || void 0,
      estimated: g && p && b ? (p - h) / g : void 0,
      event: u,
      lengthComputable: p != null,
      [s ? "download" : "upload"]: !0
    };
    n(x);
  }, o);
}, kc = (n, s) => {
  const o = n != null;
  return [(r) => s[0]({
    lengthComputable: o,
    total: n,
    loaded: r
  }), s[1]];
}, $c = (n) => (...s) => C.asap(() => n(...s)), hv = ge.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");
    let o;
    function r(l) {
      let u = l;
      return n && (s.setAttribute("href", u), u = s.href), s.setAttribute("href", u), {
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
    return o = r(window.location.href), function(l) {
      const u = C.isString(l) ? r(l) : l;
      return u.protocol === o.protocol && u.host === o.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), dv = ge.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, s, o, r, l, u) {
      const h = [n + "=" + encodeURIComponent(s)];
      C.isNumber(o) && h.push("expires=" + new Date(o).toGMTString()), C.isString(r) && h.push("path=" + r), C.isString(l) && h.push("domain=" + l), u === !0 && h.push("secure"), document.cookie = h.join("; ");
    },
    read(n) {
      const s = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return s ? decodeURIComponent(s[3]) : null;
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
function fv(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function pv(n, s) {
  return s ? n.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : n;
}
function Fu(n, s) {
  return n && !fv(s) ? pv(n, s) : s;
}
const xc = (n) => n instanceof Qt ? { ...n } : n;
function dn(n, s) {
  s = s || {};
  const o = {};
  function r(g, b, x) {
    return C.isPlainObject(g) && C.isPlainObject(b) ? C.merge.call({ caseless: x }, g, b) : C.isPlainObject(b) ? C.merge({}, b) : C.isArray(b) ? b.slice() : b;
  }
  function l(g, b, x) {
    if (C.isUndefined(b)) {
      if (!C.isUndefined(g))
        return r(void 0, g, x);
    } else return r(g, b, x);
  }
  function u(g, b) {
    if (!C.isUndefined(b))
      return r(void 0, b);
  }
  function h(g, b) {
    if (C.isUndefined(b)) {
      if (!C.isUndefined(g))
        return r(void 0, g);
    } else return r(void 0, b);
  }
  function p(g, b, x) {
    if (x in s)
      return r(g, b);
    if (x in n)
      return r(void 0, g);
  }
  const v = {
    url: u,
    method: u,
    data: u,
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
    validateStatus: p,
    headers: (g, b) => l(xc(g), xc(b), !0)
  };
  return C.forEach(Object.keys(Object.assign({}, n, s)), function(g) {
    const b = v[g] || l, x = b(n[g], s[g], g);
    C.isUndefined(x) && b !== p || (o[g] = x);
  }), o;
}
const Iu = (n) => {
  const s = dn({}, n);
  let { data: o, withXSRFToken: r, xsrfHeaderName: l, xsrfCookieName: u, headers: h, auth: p } = s;
  s.headers = h = Qt.from(h), s.url = Cu(Fu(s.baseURL, s.url), n.params, n.paramsSerializer), p && h.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  );
  let v;
  if (C.isFormData(o)) {
    if (ge.hasStandardBrowserEnv || ge.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if ((v = h.getContentType()) !== !1) {
      const [g, ...b] = v ? v.split(";").map((x) => x.trim()).filter(Boolean) : [];
      h.setContentType([g || "multipart/form-data", ...b].join("; "));
    }
  }
  if (ge.hasStandardBrowserEnv && (r && C.isFunction(r) && (r = r(s)), r || r !== !1 && hv(s.url))) {
    const g = l && u && dv.read(u);
    g && h.set(l, g);
  }
  return s;
}, mv = typeof XMLHttpRequest < "u", gv = mv && function(n) {
  return new Promise(function(s, o) {
    const r = Iu(n);
    let l = r.data;
    const u = Qt.from(r.headers).normalize();
    let { responseType: h, onUploadProgress: p, onDownloadProgress: v } = r, g, b, x, E, P;
    function y() {
      E && E(), P && P(), r.cancelToken && r.cancelToken.unsubscribe(g), r.signal && r.signal.removeEventListener("abort", g);
    }
    let S = new XMLHttpRequest();
    S.open(r.method.toUpperCase(), r.url, !0), S.timeout = r.timeout;
    function N() {
      if (!S)
        return;
      const U = Qt.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), z = {
        data: !h || h === "text" || h === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: U,
        config: n,
        request: S
      };
      Bu(function(gt) {
        s(gt), y();
      }, function(gt) {
        o(gt), y();
      }, z), S = null;
    }
    "onloadend" in S ? S.onloadend = N : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(N);
    }, S.onabort = function() {
      S && (o(new X("Request aborted", X.ECONNABORTED, n, S)), S = null);
    }, S.onerror = function() {
      o(new X("Network Error", X.ERR_NETWORK, n, S)), S = null;
    }, S.ontimeout = function() {
      let U = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const z = r.transitional || Ru;
      r.timeoutErrorMessage && (U = r.timeoutErrorMessage), o(new X(
        U,
        z.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED,
        n,
        S
      )), S = null;
    }, l === void 0 && u.setContentType(null), "setRequestHeader" in S && C.forEach(u.toJSON(), function(U, z) {
      S.setRequestHeader(z, U);
    }), C.isUndefined(r.withCredentials) || (S.withCredentials = !!r.withCredentials), h && h !== "json" && (S.responseType = r.responseType), v && ([x, P] = ki(v, !0), S.addEventListener("progress", x)), p && S.upload && ([b, E] = ki(p), S.upload.addEventListener("progress", b), S.upload.addEventListener("loadend", E)), (r.cancelToken || r.signal) && (g = (U) => {
      S && (o(!U || U.type ? new Fn(null, n, S) : U), S.abort(), S = null);
    }, r.cancelToken && r.cancelToken.subscribe(g), r.signal && (r.signal.aborted ? g() : r.signal.addEventListener("abort", g)));
    const D = lv(r.url);
    if (D && ge.protocols.indexOf(D) === -1) {
      o(new X("Unsupported protocol " + D + ":", X.ERR_BAD_REQUEST, n));
      return;
    }
    S.send(l || null);
  });
}, bv = (n, s) => {
  let o = new AbortController(), r;
  const l = function(v) {
    if (!r) {
      r = !0, h();
      const g = v instanceof Error ? v : this.reason;
      o.abort(g instanceof X ? g : new Fn(g instanceof Error ? g.message : g));
    }
  };
  let u = s && setTimeout(() => {
    l(new X(`timeout ${s} of ms exceeded`, X.ETIMEDOUT));
  }, s);
  const h = () => {
    n && (u && clearTimeout(u), u = null, n.forEach((v) => {
      v && (v.removeEventListener ? v.removeEventListener("abort", l) : v.unsubscribe(l));
    }), n = null);
  };
  n.forEach((v) => v && v.addEventListener && v.addEventListener("abort", l));
  const { signal: p } = o;
  return p.unsubscribe = h, [p, () => {
    u && clearTimeout(u), u = null;
  }];
}, wv = function* (n, s) {
  let o = n.byteLength;
  if (o < s) {
    yield n;
    return;
  }
  let r = 0, l;
  for (; r < o; )
    l = r + s, yield n.slice(r, l), r = l;
}, vv = async function* (n, s, o) {
  for await (const r of n)
    yield* wv(ArrayBuffer.isView(r) ? r : await o(String(r)), s);
}, Sc = (n, s, o, r, l) => {
  const u = vv(n, s, l);
  let h = 0, p, v = (g) => {
    p || (p = !0, r && r(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: b, value: x } = await u.next();
        if (b) {
          v(), g.close();
          return;
        }
        let E = x.byteLength;
        if (o) {
          let P = h += E;
          o(P);
        }
        g.enqueue(new Uint8Array(x));
      } catch (b) {
        throw v(b), b;
      }
    },
    cancel(g) {
      return v(g), u.return();
    }
  }, {
    highWaterMark: 2
  });
}, Fi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Du = Fi && typeof ReadableStream == "function", hr = Fi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (s) => n.encode(s))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), Lu = (n, ...s) => {
  try {
    return !!n(...s);
  } catch {
    return !1;
  }
}, yv = Du && Lu(() => {
  let n = !1;
  const s = new Request(ge.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !s;
}), Ec = 64 * 1024, dr = Du && Lu(() => C.isReadableStream(new Response("").body)), $i = {
  stream: dr && ((n) => n.body)
};
Fi && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !$i[s] && ($i[s] = C.isFunction(n[s]) ? (o) => o[s]() : (o, r) => {
      throw new X(`Response type '${s}' is not supported`, X.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const kv = async (n) => {
  if (n == null)
    return 0;
  if (C.isBlob(n))
    return n.size;
  if (C.isSpecCompliantForm(n))
    return (await new Request(n).arrayBuffer()).byteLength;
  if (C.isArrayBufferView(n) || C.isArrayBuffer(n))
    return n.byteLength;
  if (C.isURLSearchParams(n) && (n = n + ""), C.isString(n))
    return (await hr(n)).byteLength;
}, $v = async (n, s) => C.toFiniteNumber(n.getContentLength()) ?? kv(s), xv = Fi && (async (n) => {
  let {
    url: s,
    method: o,
    data: r,
    signal: l,
    cancelToken: u,
    timeout: h,
    onDownloadProgress: p,
    onUploadProgress: v,
    responseType: g,
    headers: b,
    withCredentials: x = "same-origin",
    fetchOptions: E
  } = Iu(n);
  g = g ? (g + "").toLowerCase() : "text";
  let [P, y] = l || u || h ? bv([l, u], h) : [], S, N;
  const D = () => {
    !S && setTimeout(() => {
      P && P.unsubscribe();
    }), S = !0;
  };
  let U;
  try {
    if (v && yv && o !== "get" && o !== "head" && (U = await $v(b, r)) !== 0) {
      let ut = new Request(s, {
        method: "POST",
        body: r,
        duplex: "half"
      }), kt;
      if (C.isFormData(r) && (kt = ut.headers.get("content-type")) && b.setContentType(kt), ut.body) {
        const [It, Dt] = kc(
          U,
          ki($c(v))
        );
        r = Sc(ut.body, Ec, It, Dt, hr);
      }
    }
    C.isString(x) || (x = x ? "include" : "omit"), N = new Request(s, {
      ...E,
      signal: P,
      method: o.toUpperCase(),
      headers: b.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: x
    });
    let z = await fetch(N);
    const gt = dr && (g === "stream" || g === "response");
    if (dr && (p || gt)) {
      const ut = {};
      ["status", "statusText", "headers"].forEach((bt) => {
        ut[bt] = z[bt];
      });
      const kt = C.toFiniteNumber(z.headers.get("content-length")), [It, Dt] = p && kc(
        kt,
        ki($c(p), !0)
      ) || [];
      z = new Response(
        Sc(z.body, Ec, It, () => {
          Dt && Dt(), gt && D();
        }, hr),
        ut
      );
    }
    g = g || "text";
    let at = await $i[C.findKey($i, g) || "text"](z, n);
    return !gt && D(), y && y(), await new Promise((ut, kt) => {
      Bu(ut, kt, {
        data: at,
        headers: Qt.from(z.headers),
        status: z.status,
        statusText: z.statusText,
        config: n,
        request: N
      });
    });
  } catch (z) {
    throw D(), z && z.name === "TypeError" && /fetch/i.test(z.message) ? Object.assign(
      new X("Network Error", X.ERR_NETWORK, n, N),
      {
        cause: z.cause || z
      }
    ) : X.from(z, z && z.code, n, N);
  }
}), fr = {
  http: jw,
  xhr: gv,
  fetch: xv
};
C.forEach(fr, (n, s) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: s });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: s });
  }
});
const _c = (n) => `- ${n}`, Sv = (n) => C.isFunction(n) || n === null || n === !1, Uu = {
  getAdapter: (n) => {
    n = C.isArray(n) ? n : [n];
    const { length: s } = n;
    let o, r;
    const l = {};
    for (let u = 0; u < s; u++) {
      o = n[u];
      let h;
      if (r = o, !Sv(o) && (r = fr[(h = String(o)).toLowerCase()], r === void 0))
        throw new X(`Unknown adapter '${h}'`);
      if (r)
        break;
      l[h || "#" + u] = r;
    }
    if (!r) {
      const u = Object.entries(l).map(
        ([p, v]) => `adapter ${p} ` + (v === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let h = s ? u.length > 1 ? `since :
` + u.map(_c).join(`
`) : " " + _c(u[0]) : "as no adapter specified";
      throw new X(
        "There is no suitable adapter to dispatch the request " + h,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: fr
};
function Xo(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Fn(null, n);
}
function Oc(n) {
  return Xo(n), n.headers = Qt.from(n.headers), n.data = Go.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Uu.getAdapter(n.adapter || xs.adapter)(n).then(function(s) {
    return Xo(n), s.data = Go.call(
      n,
      n.transformResponse,
      s
    ), s.headers = Qt.from(s.headers), s;
  }, function(s) {
    return Nu(s) || (Xo(n), s && s.response && (s.response.data = Go.call(
      n,
      n.transformResponse,
      s.response
    ), s.response.headers = Qt.from(s.response.headers))), Promise.reject(s);
  });
}
const ju = "1.7.3", Br = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, s) => {
  Br[n] = function(o) {
    return typeof o === n || "a" + (s < 1 ? "n " : " ") + n;
  };
});
const Tc = {};
Br.transitional = function(n, s, o) {
  function r(l, u) {
    return "[Axios v" + ju + "] Transitional option '" + l + "'" + u + (o ? ". " + o : "");
  }
  return (l, u, h) => {
    if (n === !1)
      throw new X(
        r(u, " has been removed" + (s ? " in " + s : "")),
        X.ERR_DEPRECATED
      );
    return s && !Tc[u] && (Tc[u] = !0, console.warn(
      r(
        u,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), n ? n(l, u, h) : !0;
  };
};
function Ev(n, s, o) {
  if (typeof n != "object")
    throw new X("options must be an object", X.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let l = r.length;
  for (; l-- > 0; ) {
    const u = r[l], h = s[u];
    if (h) {
      const p = n[u], v = p === void 0 || h(p, u, n);
      if (v !== !0)
        throw new X("option " + u + " must be " + v, X.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new X("Unknown option " + u, X.ERR_BAD_OPTION);
  }
}
const pr = {
  assertOptions: Ev,
  validators: Br
}, De = pr.validators;
class cn {
  constructor(s) {
    this.defaults = s, this.interceptors = {
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
  async request(s, o) {
    try {
      return await this._request(s, o);
    } catch (r) {
      if (r instanceof Error) {
        let l;
        Error.captureStackTrace ? Error.captureStackTrace(l = {}) : l = new Error();
        const u = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? u && !String(r.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + u) : r.stack = u;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(s, o) {
    typeof s == "string" ? (o = o || {}, o.url = s) : o = s || {}, o = dn(this.defaults, o);
    const { transitional: r, paramsSerializer: l, headers: u } = o;
    r !== void 0 && pr.assertOptions(r, {
      silentJSONParsing: De.transitional(De.boolean),
      forcedJSONParsing: De.transitional(De.boolean),
      clarifyTimeoutError: De.transitional(De.boolean)
    }, !1), l != null && (C.isFunction(l) ? o.paramsSerializer = {
      serialize: l
    } : pr.assertOptions(l, {
      encode: De.function,
      serialize: De.function
    }, !0)), o.method = (o.method || this.defaults.method || "get").toLowerCase();
    let h = u && C.merge(
      u.common,
      u[o.method]
    );
    u && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete u[y];
      }
    ), o.headers = Qt.concat(h, u);
    const p = [];
    let v = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(o) === !1 || (v = v && y.synchronous, p.unshift(y.fulfilled, y.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(y) {
      g.push(y.fulfilled, y.rejected);
    });
    let b, x = 0, E;
    if (!v) {
      const y = [Oc.bind(this), void 0];
      for (y.unshift.apply(y, p), y.push.apply(y, g), E = y.length, b = Promise.resolve(o); x < E; )
        b = b.then(y[x++], y[x++]);
      return b;
    }
    E = p.length;
    let P = o;
    for (x = 0; x < E; ) {
      const y = p[x++], S = p[x++];
      try {
        P = y(P);
      } catch (N) {
        S.call(this, N);
        break;
      }
    }
    try {
      b = Oc.call(this, P);
    } catch (y) {
      return Promise.reject(y);
    }
    for (x = 0, E = g.length; x < E; )
      b = b.then(g[x++], g[x++]);
    return b;
  }
  getUri(s) {
    s = dn(this.defaults, s);
    const o = Fu(s.baseURL, s.url);
    return Cu(o, s.params, s.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function(n) {
  cn.prototype[n] = function(s, o) {
    return this.request(dn(o || {}, {
      method: n,
      url: s,
      data: (o || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(n) {
  function s(o) {
    return function(r, l, u) {
      return this.request(dn(u || {}, {
        method: n,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: l
      }));
    };
  }
  cn.prototype[n] = s(), cn.prototype[n + "Form"] = s(!0);
});
class Fr {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function(l) {
      o = l;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let u = r._listeners.length;
      for (; u-- > 0; )
        r._listeners[u](l);
      r._listeners = null;
    }), this.promise.then = (l) => {
      let u;
      const h = new Promise((p) => {
        r.subscribe(p), u = p;
      }).then(l);
      return h.cancel = function() {
        r.unsubscribe(u);
      }, h;
    }, s(function(l, u, h) {
      r.reason || (r.reason = new Fn(l, u, h), o(r.reason));
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
    const o = this._listeners.indexOf(s);
    o !== -1 && this._listeners.splice(o, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let s;
    return {
      token: new Fr(function(o) {
        s = o;
      }),
      cancel: s
    };
  }
}
function _v(n) {
  return function(s) {
    return n.apply(null, s);
  };
}
function Ov(n) {
  return C.isObject(n) && n.isAxiosError === !0;
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
Object.entries(mr).forEach(([n, s]) => {
  mr[s] = n;
});
function Mu(n) {
  const s = new cn(n), o = wu(cn.prototype.request, s);
  return C.extend(o, cn.prototype, s, { allOwnKeys: !0 }), C.extend(o, s, null, { allOwnKeys: !0 }), o.create = function(r) {
    return Mu(dn(n, r));
  }, o;
}
const Rt = Mu(xs);
Rt.Axios = cn;
Rt.CanceledError = Fn;
Rt.CancelToken = Fr;
Rt.isCancel = Nu;
Rt.VERSION = ju;
Rt.toFormData = Bi;
Rt.AxiosError = X;
Rt.Cancel = Rt.CanceledError;
Rt.all = function(n) {
  return Promise.all(n);
};
Rt.spread = _v;
Rt.isAxiosError = Ov;
Rt.mergeConfig = dn;
Rt.AxiosHeaders = Qt;
Rt.formToJSON = (n) => Pu(C.isHTMLForm(n) ? new FormData(n) : n);
Rt.getAdapter = Uu.getAdapter;
Rt.HttpStatusCode = mr;
Rt.default = Rt;
const Tv = (n) => {
  const s = typeof n;
  return n !== null && (s === "object" || s === "function");
}, Yo = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), Av = new Set("0123456789");
function Cv(n) {
  const s = [];
  let o = "", r = "start", l = !1;
  for (const u of n)
    switch (u) {
      case "\\": {
        if (r === "index")
          throw new Error("Invalid character in an index");
        if (r === "indexEnd")
          throw new Error("Invalid character after an index");
        l && (o += u), r = "property", l = !l;
        break;
      }
      case ".": {
        if (r === "index")
          throw new Error("Invalid character in an index");
        if (r === "indexEnd") {
          r = "property";
          break;
        }
        if (l) {
          l = !1, o += u;
          break;
        }
        if (Yo.has(o))
          return [];
        s.push(o), o = "", r = "property";
        break;
      }
      case "[": {
        if (r === "index")
          throw new Error("Invalid character in an index");
        if (r === "indexEnd") {
          r = "index";
          break;
        }
        if (l) {
          l = !1, o += u;
          break;
        }
        if (r === "property") {
          if (Yo.has(o))
            return [];
          s.push(o), o = "";
        }
        r = "index";
        break;
      }
      case "]": {
        if (r === "index") {
          s.push(Number.parseInt(o, 10)), o = "", r = "indexEnd";
          break;
        }
        if (r === "indexEnd")
          throw new Error("Invalid character after an index");
      }
      default: {
        if (r === "index" && !Av.has(u))
          throw new Error("Invalid character in an index");
        if (r === "indexEnd")
          throw new Error("Invalid character after an index");
        r === "start" && (r = "property"), l && (l = !1, o += "\\"), o += u;
      }
    }
  switch (l && (o += "\\"), r) {
    case "property": {
      if (Yo.has(o))
        return [];
      s.push(o);
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
function Rv(n, s) {
  if (typeof s != "number" && Array.isArray(n)) {
    const o = Number.parseInt(s, 10);
    return Number.isInteger(o) && n[o] === n[s];
  }
  return !1;
}
function Pv(n, s, o) {
  if (!Tv(n) || typeof s != "string")
    return o === void 0 ? n : o;
  const r = Cv(s);
  if (r.length === 0)
    return o;
  for (let l = 0; l < r.length; l++) {
    const u = r[l];
    if (Rv(n, u) ? n = l === r.length - 1 ? void 0 : null : n = n[u], n == null) {
      if (l !== r.length - 1)
        return o;
      break;
    }
  }
  return n === void 0 ? o : n;
}
const zu = qc("config", {
  persist: !0,
  state: () => ({
    config: {}
  }),
  getters: {
    get: (n) => (s, o) => Pv(n.config, s, o)
  },
  actions: {
    async load() {
      Rt.get("/api/config").then((n) => {
        this.config = n.data;
      });
    }
  }
});
function Nv() {
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
function Bv() {
  return zu().get("locales.available");
}
function Fv() {
  return "/account/captcha";
}
async function Iv(n) {
  return vt.post("/account/register", n).then((s) => s.data).catch((s) => {
    throw {
      description: "An error as occurred",
      style: Oe.Danger,
      closeBtn: !0,
      ...s.response.data
    };
  });
}
const Dv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  doRegister: Iv,
  getAvailableLocales: Bv,
  getCaptchaUrl: Fv,
  getDefaultForm: Nv
}, Symbol.toStringTag, { value: "Module" }));
async function Lv(n) {
  return vt.post("/account/forgot-password", { email: n }).then((s) => ({
    description: s.data.message,
    style: Oe.Success,
    closeBtn: !0
  })).catch((s) => {
    throw {
      description: "An error as occurred",
      style: Oe.Danger,
      closeBtn: !0,
      ...s.response.data
    };
  });
}
async function Uv(n) {
  return vt.post("/account/resend-verification", { email: n }).then((s) => ({
    description: s.data.message,
    style: Oe.Success,
    closeBtn: !0
  })).catch((s) => {
    throw {
      description: "An error as occurred",
      style: Oe.Danger,
      closeBtn: !0,
      ...s.response.data
    };
  });
}
const jv = { class: "uk-fieldset uk-form-stacked" }, Mv = { class: "uk-margin" }, zv = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Hv = { class: "uk-width-1-2" }, qv = { class: "uk-width-1-2" }, Wv = { class: "uk-width-1-1" }, Vv = { class: "uk-margin" }, Jv = { class: "uk-margin" }, Kv = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Gv = { class: "uk-width-1-2" }, Xv = { class: "uk-width-1-2" }, Yv = { class: "uk-margin" }, Qv = ["value"], Zv = { class: "uk-margin" }, ty = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, ey = { class: "uk-width-2-3" }, ny = { class: "uk-width-1-3" }, sy = ["src"], iy = { class: "uk-text-center" }, oy = ["disabled"], Hu = /* @__PURE__ */ yt({
  __name: "FormRegister",
  setup(n) {
    const { getDefaultForm: s, doRegister: o, getAvailableLocales: r, getCaptchaUrl: l } = Dv, u = ae(!1), h = ae();
    let p = s();
    async function v() {
      u.value = !0, h.value = null, await o(p).then((g) => {
        Vc.notification({
          message: "Succesfully registered " + (g == null ? void 0 : g.full_name) + "!",
          status: "success",
          pos: "bottom-right",
          timeout: 4e3
        });
      }).catch((g) => {
        h.value = g;
      }).finally(() => {
        u.value = !1;
      });
    }
    return (g, b) => {
      const x = Ht("UFAlertContainer");
      return F(), H("form", {
        onSubmit: b[8] || (b[8] = Ei((E) => v(), ["prevent"]))
      }, [
        O("fieldset", jv, [
          h.value ? (F(), At(x, {
            key: 0,
            "data-test": "error",
            alert: h.value
          }, null, 8, ["alert"])) : mt("", !0),
          O("div", Mv, [
            b[9] || (b[9] = O("label", {
              class: "uk-form-label",
              for: "first_name"
            }, "Name and email", -1)),
            O("div", zv, [
              O("div", Hv, [
                re(O("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "First Name",
                  "aria-label": "First Name",
                  id: "first_name",
                  "data-test": "first_name",
                  "onUpdate:modelValue": b[0] || (b[0] = (E) => W(p).first_name = E)
                }, null, 512), [
                  [me, W(p).first_name]
                ])
              ]),
              O("div", qv, [
                re(O("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "Last Name",
                  "aria-label": "Last Name",
                  "data-test": "last_name",
                  "onUpdate:modelValue": b[1] || (b[1] = (E) => W(p).last_name = E)
                }, null, 512), [
                  [me, W(p).last_name]
                ])
              ]),
              O("div", Wv, [
                re(O("input", {
                  class: "uk-input",
                  type: "email",
                  placeholder: "Email",
                  "aria-label": "Email",
                  "data-test": "email",
                  "onUpdate:modelValue": b[2] || (b[2] = (E) => W(p).email = E)
                }, null, 512), [
                  [me, W(p).email]
                ])
              ])
            ])
          ]),
          O("div", Vv, [
            b[10] || (b[10] = O("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Username", -1)),
            re(O("input", {
              class: "uk-input",
              type: "text",
              placeholder: "Username",
              "aria-label": "Username",
              "data-test": "username",
              "onUpdate:modelValue": b[3] || (b[3] = (E) => W(p).user_name = E)
            }, null, 512), [
              [me, W(p).user_name]
            ])
          ]),
          O("div", Jv, [
            b[11] || (b[11] = O("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Password", -1)),
            O("div", Kv, [
              O("div", Gv, [
                re(O("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Password",
                  "aria-label": "Password",
                  "data-test": "password",
                  "onUpdate:modelValue": b[4] || (b[4] = (E) => W(p).password = E)
                }, null, 512), [
                  [me, W(p).password]
                ])
              ]),
              O("div", Xv, [
                re(O("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Confirm Password",
                  "aria-label": "Confirm Password",
                  "data-test": "passwordc",
                  "onUpdate:modelValue": b[5] || (b[5] = (E) => W(p).passwordc = E)
                }, null, 512), [
                  [me, W(p).passwordc]
                ])
              ])
            ])
          ]),
          O("div", Yv, [
            b[12] || (b[12] = O("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Locale", -1)),
            re(O("select", {
              class: "uk-select",
              id: "form-stacked-select",
              "data-test": "locale",
              "onUpdate:modelValue": b[6] || (b[6] = (E) => W(p).locale = E)
            }, [
              (F(!0), H(wi, null, xr(W(r)(), (E, P) => (F(), H("option", {
                value: P,
                key: P
              }, pt(E), 9, Qv))), 128))
            ], 512), [
              [Hc, W(p).locale]
            ])
          ]),
          O("div", Zv, [
            b[13] || (b[13] = O("label", {
              class: "uk-form-label",
              for: "r-form-captcha"
            }, "Captcha", -1)),
            O("div", ty, [
              O("div", ey, [
                re(O("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Captcha",
                  "aria-label": "Captcha",
                  id: "r-form-captcha",
                  "data-test": "captcha",
                  "onUpdate:modelValue": b[7] || (b[7] = (E) => W(p).captcha = E)
                }, null, 512), [
                  [me, W(p).captcha]
                ])
              ]),
              O("div", ny, [
                O("img", {
                  src: W(l)(),
                  id: "captcha",
                  "data-target": "#r-form-captcha"
                }, null, 8, sy)
              ])
            ])
          ]),
          b[14] || (b[14] = O("p", null, [
            Ct(" By registering an account with UserFrosting, you accept "),
            O("a", null, "the terms and conditions"),
            Ct(". ")
          ], -1)),
          O("div", iy, [
            O("button", {
              class: "uk-button uk-button-primary",
              disabled: u.value
            }, "Sign me up", 8, oy)
          ])
        ])
      ], 32);
    };
  }
}), ry = { class: "uk-fieldset" }, ay = { class: "uk-margin" }, ly = { class: "uk-inline uk-width-1-1" }, cy = { class: "uk-text-center" }, uy = ["disabled"], qu = /* @__PURE__ */ yt({
  __name: "FormForgotPassword",
  setup(n) {
    const s = ae(!1), o = ae();
    let r = "";
    async function l() {
      s.value = !0, o.value = null, await Lv(r).then((u) => {
        o.value = u;
      }).catch((u) => {
        o.value = u;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (u, h) => {
      const p = Ht("UFAlertContainer");
      return F(), H("form", {
        onSubmit: h[1] || (h[1] = Ei((v) => l(), ["prevent"]))
      }, [
        O("fieldset", ry, [
          o.value ? (F(), At(p, {
            key: 0,
            "data-test": "error",
            alert: o.value
          }, null, 8, ["alert"])) : mt("", !0),
          O("div", ay, [
            O("div", ly, [
              h[2] || (h[2] = O("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              re(O("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": h[0] || (h[0] = (v) => Sr(r) ? r.value = v : r = v)
              }, null, 512), [
                [me, W(r)]
              ])
            ])
          ]),
          O("div", cy, [
            O("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Email Password Reset Link ", 8, uy)
          ])
        ])
      ], 32);
    };
  }
}), hy = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, dy = { class: "uk-navbar-container" }, fy = { class: "uk-container uk-container-expand" }, py = {
  class: "uk-navbar",
  "uk-navbar": ""
}, my = {
  class: "uk-navbar-left",
  "data-test": "navbar-left"
}, gy = {
  class: "uk-navbar-right",
  "data-test": "navbar-right"
}, by = { class: "uk-navbar-nav" }, wy = /* @__PURE__ */ yt({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(n) {
    return (s, o) => (F(), H("header", null, [
      O("div", hy, [
        O("div", dy, [
          O("div", fy, [
            O("nav", py, [
              O("div", my, [
                Wt(Er, {
                  to: s.to,
                  class: "uk-navbar-item uk-logo",
                  label: ""
                }, {
                  default: Mt(() => [
                    ot(s.$slots, "title", {}, () => [
                      Ct(pt(s.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              O("div", gy, [
                O("ul", by, [
                  ot(s.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), vy = { "data-test": "label" }, yy = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0px"
}, ky = {
  class: "uk-nav uk-navbar-dropdown-nav",
  "data-test": "slot"
}, Ir = /* @__PURE__ */ yt({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(n) {
    return (s, o) => (F(), H("li", null, [
      O("a", vy, [
        ot(s.$slots, "label", {}, () => [
          Ct(pt(s.label), 1)
        ]),
        o[0] || (o[0] = Ct()),
        o[1] || (o[1] = O("span", { "uk-navbar-parent-icon": "" }, null, -1))
      ]),
      O("div", yy, [
        O("ul", ky, [
          ot(s.$slots, "default")
        ])
      ])
    ]));
  }
}), $y = {}, xy = { class: "uk-nav-divider" };
function Sy(n, s) {
  return F(), H("li", xy);
}
const Ey = /* @__PURE__ */ Rn($y, [["render", Sy]]), _y = { key: 0 }, Oy = ["href"], Ty = ["href", "onClick"], Ay = /* @__PURE__ */ yt({
  __name: "NavBarItem",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const s = n, o = Gt(() => s.to === "" || typeof s.to == "string" && s.to.startsWith("http"));
    return (r, l) => o.value ? (F(), H("li", _y, [
      O("a", {
        href: r.to.toString(),
        target: "_blank"
      }, [
        ot(r.$slots, "default", {}, () => [
          Ct(pt(r.label), 1)
        ])
      ], 8, Oy)
    ])) : (F(), At(W(vs), ms({
      key: 1,
      to: r.to
    }, r.$props, { custom: "" }), {
      default: Mt(({ isActive: u, href: h, navigate: p }) => [
        O("li", {
          class: Ue({ "uk-active": u })
        }, [
          O("a", ms(r.$attrs, {
            href: h,
            onClick: p
          }), [
            ot(r.$slots, "default", {}, () => [
              Ct(pt(r.label), 1)
            ])
          ], 16, Ty)
        ], 2)
      ]),
      _: 3
    }, 16, ["to"]));
  }
}), Cy = { class: "uk-text-center" }, Ry = /* @__PURE__ */ yt({
  __name: "NavBarLogin",
  setup(n) {
    return (s, o) => (F(), At(Ir, {
      label: "Login",
      class: "uf-nav-login uk-text-center"
    }, {
      default: Mt(() => [
        Wt(Cr),
        O("div", Cy, [
          O("button", {
            class: "uk-button uk-button-default",
            onClick: o[0] || (o[0] = (r) => s.$emit("gotoRegistration")),
            "data-test": "gotoRegistration"
          }, " Register ")
        ]),
        ot(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Py = {
  key: 0,
  "data-test": "username"
}, Ny = ["src"], By = { class: "uk-margin" }, Fy = ["src"], Iy = {
  key: 1,
  class: "uk-margin-remove",
  "data-test": "username"
}, Dy = {
  key: 2,
  class: "uk-margin-remove uk-text-meta",
  "data-test": "meta"
}, Ly = /* @__PURE__ */ yt({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(n) {
    return (s, o) => (F(), At(Ir, { class: "uf-nav-user uk-text-center" }, {
      label: Mt(() => [
        s.username ? (F(), H("span", Py, pt(s.username), 1)) : mt("", !0),
        s.avatar ? (F(), H("img", {
          key: 1,
          src: s.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, Ny)) : mt("", !0)
      ]),
      default: Mt(() => [
        O("div", By, [
          s.avatar ? (F(), H("img", {
            key: 0,
            src: s.avatar,
            alt: "avatar",
            class: "uk-border-circle",
            "uk-height-match": ""
          }, null, 8, Fy)) : mt("", !0),
          s.username ? (F(), H("p", Iy, pt(s.username), 1)) : mt("", !0),
          s.meta ? (F(), H("p", Dy, "(" + pt(s.meta) + ")", 1)) : mt("", !0)
        ]),
        ot(s.$slots, "default", { dataTest: "slot" })
      ]),
      _: 3
    }));
  }
}), Uy = { key: 0 }, jy = ["href"], My = { key: 1 }, zy = /* @__PURE__ */ yt({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const s = n, o = Gt(() => typeof s.to == "string" && s.to.startsWith("http"));
    return (r, l) => o.value ? (F(), H("li", Uy, [
      O("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: r.to.toString(),
        target: "_blank"
      }, [
        ot(r.$slots, "default", {}, () => [
          Ct(pt(r.label), 1)
        ])
      ], 8, jy)
    ])) : (F(), H("li", My, [
      Wt(W(vs), {
        to: r.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: Mt(() => [
          ot(r.$slots, "default", {}, () => [
            Ct(pt(r.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["to"])
    ]));
  }
}), Hy = { class: "uk-list" }, qy = { class: "uk-text-center" }, Wy = /* @__PURE__ */ yt({
  __name: "PageLogin",
  setup(n) {
    return (s, o) => {
      const r = Ht("font-awesome-icon"), l = Ht("UFCardBoxBig");
      return F(), At(l, null, {
        default: Mt(() => [
          o[5] || (o[5] = O("h3", { class: "uk-card-title" }, "Login", -1)),
          Wt(Cr),
          O("ul", Hy, [
            O("li", null, [
              O("a", {
                onClick: o[0] || (o[0] = (u) => s.$emit("gotoForgotPassword")),
                "data-test": "gotoForgotPassword"
              }, "Forgot your password?")
            ]),
            O("li", null, [
              O("a", {
                onClick: o[1] || (o[1] = (u) => s.$emit("gotoResendVerification")),
                "data-test": "gotoResendVerification"
              }, "Resend verification email")
            ])
          ]),
          o[6] || (o[6] = O("hr", null, null, -1)),
          O("div", qy, [
            o[4] || (o[4] = O("p", null, "You don't have an account yet?", -1)),
            O("button", {
              class: "uk-button uk-button-default",
              onClick: o[2] || (o[2] = (u) => s.$emit("gotoRegistration")),
              "data-test": "gotoRegistration"
            }, [
              Wt(r, { icon: ["fas", "user-plus"] }),
              o[3] || (o[3] = Ct(" Register "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), Vy = { class: "uk-text-center" }, Jy = /* @__PURE__ */ yt({
  __name: "PageRegister",
  setup(n) {
    return (s, o) => {
      const r = Ht("font-awesome-icon"), l = Ht("UFCardBoxBig");
      return F(), At(l, null, {
        default: Mt(() => [
          o[3] || (o[3] = O("h3", { class: "uk-card-title" }, "Register", -1)),
          Wt(Hu),
          o[4] || (o[4] = O("hr", null, null, -1)),
          O("div", Vy, [
            o[2] || (o[2] = O("p", null, "Already have an account ?", -1)),
            O("button", {
              class: "uk-button uk-button-default",
              onClick: o[0] || (o[0] = (u) => s.$emit("gotoLogin")),
              "data-test": "gotoLogin"
            }, [
              Wt(r, { icon: ["fas", "right-to-bracket"] }),
              o[1] || (o[1] = Ct(" Login "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), Ky = /* @__PURE__ */ yt({
  __name: "PageForgotPassword",
  setup(n) {
    return (s, o) => {
      const r = Ht("UFCardBoxBig");
      return F(), At(r, null, {
        default: Mt(() => [
          o[0] || (o[0] = O("h3", { class: "uk-card-title" }, "Forgotten Password", -1)),
          o[1] || (o[1] = O("p", null, " Please enter the email address you used to sign up. A link with instructions to reset your password will be emailed to you. ", -1)),
          Wt(qu)
        ]),
        _: 1
      });
    };
  }
}), Gy = { class: "uk-fieldset" }, Xy = { class: "uk-margin" }, Yy = { class: "uk-inline uk-width-1-1" }, Qy = { class: "uk-text-center" }, Zy = ["disabled"], t0 = /* @__PURE__ */ yt({
  __name: "FormResendVerification",
  setup(n) {
    const s = ae(!1), o = ae();
    let r = "";
    async function l() {
      s.value = !0, o.value = null, await Uv(r).then((u) => {
        o.value = u;
      }).catch((u) => {
        o.value = u;
      }).finally(() => {
        s.value = !1;
      });
    }
    return (u, h) => {
      const p = Ht("UFAlertContainer");
      return F(), H("form", {
        onSubmit: h[1] || (h[1] = Ei((v) => l(), ["prevent"]))
      }, [
        O("fieldset", Gy, [
          o.value ? (F(), At(p, {
            key: 0,
            "data-test": "error",
            alert: o.value
          }, null, 8, ["alert"])) : mt("", !0),
          O("div", Xy, [
            O("div", Yy, [
              h[2] || (h[2] = O("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              re(O("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": h[0] || (h[0] = (v) => Sr(r) ? r.value = v : r = v)
              }, null, 512), [
                [me, W(r)]
              ])
            ])
          ]),
          O("div", Qy, [
            O("button", {
              class: "uk-button uk-button-primary",
              disabled: s.value,
              "data-test": "submit"
            }, " Email the verification link for my account ", 8, Zy)
          ])
        ])
      ], 32);
    };
  }
}), e0 = /* @__PURE__ */ yt({
  __name: "PageResendVerification",
  setup(n) {
    return (s, o) => {
      const r = Ht("UFCardBoxBig");
      return F(), At(r, null, {
        default: Mt(() => [
          o[0] || (o[0] = O("h3", { class: "uk-card-title" }, "Resend Verification Email", -1)),
          o[1] || (o[1] = O("p", null, " Please enter the email address you used to sign up, and your verification email will be resent. ", -1)),
          Wt(t0)
        ]),
        _: 1
      });
    };
  }
}), n0 = {}, s0 = { class: "uf-sidebar-left uk-light uk-visible@m" }, i0 = { class: "left-nav-wrap" }, o0 = {
  class: "uk-nav uk-nav-default",
  "data-uk-nav": ""
};
function r0(n, s) {
  return F(), H("aside", s0, [
    O("div", i0, [
      O("ul", o0, [
        ot(n.$slots, "default")
      ])
    ])
  ]);
}
const a0 = /* @__PURE__ */ Rn(n0, [["render", r0]]), l0 = ["data-uk-icon"], c0 = {
  key: 2,
  "uk-nav-parent-icon": "",
  "data-test": "caret"
}, u0 = {
  class: "uk-nav-sub",
  "data-test": "slot"
}, h0 = /* @__PURE__ */ yt({
  __name: "SideBarDropdown",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" },
    hideCaret: { type: Boolean, default: !1 }
  },
  setup(n) {
    return (s, o) => {
      const r = Ht("font-awesome-icon");
      return F(), At(W(vs), ms({ to: s.to }, s.$props, { custom: "" }), {
        default: Mt(({ isActive: l }) => [
          O("li", {
            class: Ue(["uk-parent", { "uk-open": l }])
          }, [
            O("a", Om(Tm(s.$attrs)), [
              s.icon ? (F(), H("span", {
                key: 0,
                "data-uk-icon": s.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, l0)) : mt("", !0),
              s.faIcon ? (F(), At(r, {
                key: 1,
                class: "uk-margin-small-right",
                icon: s.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : mt("", !0),
              ot(s.$slots, "label", {}, () => [
                Ct(pt(s.label), 1)
              ]),
              s.hideCaret ? mt("", !0) : (F(), H("span", c0))
            ], 16),
            O("ul", u0, [
              ot(s.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]);
    };
  }
}), d0 = { key: 0 }, f0 = ["href"], p0 = ["data-uk-icon"], m0 = ["href", "onClick"], g0 = ["data-uk-icon"], b0 = /* @__PURE__ */ yt({
  __name: "SideBarItem",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(n) {
    const s = n, o = Gt(() => s.to === "" || typeof s.to == "string" && s.to.startsWith("http"));
    return (r, l) => {
      const u = Ht("font-awesome-icon");
      return o.value ? (F(), H("li", d0, [
        O("a", {
          href: r.to.toString(),
          target: "_blank"
        }, [
          r.icon ? (F(), H("span", {
            key: 0,
            "data-uk-icon": r.icon,
            class: "uk-margin-small-right",
            "data-test": "icon"
          }, null, 8, p0)) : mt("", !0),
          r.faIcon ? (F(), At(u, {
            key: 1,
            class: "uk-margin-small-right",
            icon: r.faIcon,
            "data-test": "faIcon"
          }, null, 8, ["icon"])) : mt("", !0),
          ot(r.$slots, "default", {}, () => [
            Ct(pt(r.label), 1)
          ])
        ], 8, f0)
      ])) : (F(), At(W(vs), ms({
        key: 1,
        to: r.to
      }, r.$props, { custom: "" }), {
        default: Mt(({ isExactActive: h, href: p, navigate: v }) => [
          O("li", {
            class: Ue({ "uk-active": h })
          }, [
            O("a", ms(r.$attrs, {
              href: p,
              onClick: v
            }), [
              r.icon ? (F(), H("span", {
                key: 0,
                "data-uk-icon": r.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, g0)) : mt("", !0),
              r.faIcon ? (F(), At(u, {
                key: 1,
                class: "uk-margin-small-right",
                icon: r.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : mt("", !0),
              ot(r.$slots, "default", {}, () => [
                Ct(pt(r.label), 1)
              ])
            ], 16, m0)
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]));
    };
  }
}), w0 = { class: "uk-nav-header" }, v0 = /* @__PURE__ */ yt({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(n) {
    return (s, o) => (F(), H("li", w0, pt(s.label), 1));
  }
}), y0 = {};
function k0(n, s) {
  return F(), H("td", null, [
    ot(n.$slots, "default")
  ]);
}
const $0 = /* @__PURE__ */ Rn(y0, [["render", k0]]), x0 = {};
function S0(n, s) {
  return F(), H("th", null, [
    ot(n.$slots, "default")
  ]);
}
const E0 = /* @__PURE__ */ Rn(x0, [["render", S0]]), _0 = {
  class: "uk-child-width-expand",
  "uk-grid": ""
}, O0 = { class: "uk-text-left uk-text-meta" }, T0 = { class: "uk-text-center" }, A0 = ["value"], C0 = { class: "uk-text-right" }, R0 = { "aria-label": "Pagination" }, P0 = {
  class: "uk-pagination uk-flex-right",
  "uk-margin": ""
}, Wu = /* @__PURE__ */ yt({
  __name: "SprunjePaginator",
  props: {
    sprunjer: {},
    rowsPerPageOptions: { default: () => [5, 10, 20, 50] }
  },
  setup(n) {
    const s = n, { size: o, page: r, totalPages: l, countFiltered: u, first: h, last: p } = s.sprunjer;
    function v(g) {
      r.value = g;
    }
    return (g, b) => {
      const x = Ht("font-awesome-icon");
      return F(), H("div", _0, [
        O("div", O0, [
          O("span", null, "Showing " + pt(W(h)) + " - " + pt(W(p)) + " of " + pt(W(u)), 1)
        ]),
        O("div", T0, [
          re(O("select", {
            class: "uk-select uk-form-small uk-form-width-small",
            "aria-label": "Select per page",
            "onUpdate:modelValue": b[0] || (b[0] = (E) => Sr(o) ? o.value = E : null)
          }, [
            (F(!0), H(wi, null, xr(g.rowsPerPageOptions, (E) => (F(), H("option", {
              key: E,
              value: E
            }, pt(E) + " per page ", 9, A0))), 128))
          ], 512), [
            [Hc, W(o)]
          ])
        ]),
        O("div", C0, [
          O("nav", R0, [
            O("ul", P0, [
              O("li", null, [
                O("a", {
                  onClick: b[1] || (b[1] = (E) => v(0)),
                  class: Ue(["uk-icon-link", { "uk-disabled": W(r) === 0 }])
                }, [
                  Wt(x, {
                    icon: "angles-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              O("li", null, [
                O("a", {
                  onClick: b[2] || (b[2] = (E) => v(W(r) - 1)),
                  class: Ue(["uk-icon-link", { "uk-disabled": W(r) === 0 }])
                }, [
                  Wt(x, {
                    icon: "angle-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              O("li", null, "Page " + pt(W(r) + 1) + " of " + pt(W(l) + 1), 1),
              O("li", null, [
                O("a", {
                  onClick: b[3] || (b[3] = (E) => v(W(r) + 1)),
                  class: Ue(["uk-icon-link", { "uk-disabled": W(r) === W(l) }])
                }, [
                  Wt(x, {
                    icon: "angle-right",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              O("li", null, [
                O("a", {
                  onClick: b[4] || (b[4] = (E) => v(W(l))),
                  class: Ue(["uk-icon-link", { "uk-disabled": W(r) === W(l) }])
                }, [
                  Wt(x, {
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
function Vu(n, s) {
  return function() {
    return n.apply(s, arguments);
  };
}
const { toString: N0 } = Object.prototype, { getPrototypeOf: Dr } = Object, Ii = /* @__PURE__ */ ((n) => (s) => {
  const o = N0.call(s);
  return n[o] || (n[o] = o.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ve = (n) => (n = n.toLowerCase(), (s) => Ii(s) === n), Di = (n) => (s) => typeof s === n, { isArray: In } = Array, ws = Di("undefined");
function B0(n) {
  return n !== null && !ws(n) && n.constructor !== null && !ws(n.constructor) && ue(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Ju = ve("ArrayBuffer");
function F0(n) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(n) : s = n && n.buffer && Ju(n.buffer), s;
}
const I0 = Di("string"), ue = Di("function"), Ku = Di("number"), Li = (n) => n !== null && typeof n == "object", D0 = (n) => n === !0 || n === !1, gi = (n) => {
  if (Ii(n) !== "object")
    return !1;
  const s = Dr(n);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}, L0 = ve("Date"), U0 = ve("File"), j0 = ve("Blob"), M0 = ve("FileList"), z0 = (n) => Li(n) && ue(n.pipe), H0 = (n) => {
  let s;
  return n && (typeof FormData == "function" && n instanceof FormData || ue(n.append) && ((s = Ii(n)) === "formdata" || // detect form-data instance
  s === "object" && ue(n.toString) && n.toString() === "[object FormData]"));
}, q0 = ve("URLSearchParams"), [W0, V0, J0, K0] = ["ReadableStream", "Request", "Response", "Headers"].map(ve), G0 = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ss(n, s, { allOwnKeys: o = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let r, l;
  if (typeof n != "object" && (n = [n]), In(n))
    for (r = 0, l = n.length; r < l; r++)
      s.call(null, n[r], r, n);
  else {
    const u = o ? Object.getOwnPropertyNames(n) : Object.keys(n), h = u.length;
    let p;
    for (r = 0; r < h; r++)
      p = u[r], s.call(null, n[p], p, n);
  }
}
function Gu(n, s) {
  s = s.toLowerCase();
  const o = Object.keys(n);
  let r = o.length, l;
  for (; r-- > 0; )
    if (l = o[r], s === l.toLowerCase())
      return l;
  return null;
}
const an = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xu = (n) => !ws(n) && n !== an;
function gr() {
  const { caseless: n } = Xu(this) && this || {}, s = {}, o = (r, l) => {
    const u = n && Gu(s, l) || l;
    gi(s[u]) && gi(r) ? s[u] = gr(s[u], r) : gi(r) ? s[u] = gr({}, r) : In(r) ? s[u] = r.slice() : s[u] = r;
  };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && Ss(arguments[r], o);
  return s;
}
const X0 = (n, s, o, { allOwnKeys: r } = {}) => (Ss(s, (l, u) => {
  o && ue(l) ? n[u] = Vu(l, o) : n[u] = l;
}, { allOwnKeys: r }), n), Y0 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), Q0 = (n, s, o, r) => {
  n.prototype = Object.create(s.prototype, r), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: s.prototype
  }), o && Object.assign(n.prototype, o);
}, Z0 = (n, s, o, r) => {
  let l, u, h;
  const p = {};
  if (s = s || {}, n == null) return s;
  do {
    for (l = Object.getOwnPropertyNames(n), u = l.length; u-- > 0; )
      h = l[u], (!r || r(h, n, s)) && !p[h] && (s[h] = n[h], p[h] = !0);
    n = o !== !1 && Dr(n);
  } while (n && (!o || o(n, s)) && n !== Object.prototype);
  return s;
}, t1 = (n, s, o) => {
  n = String(n), (o === void 0 || o > n.length) && (o = n.length), o -= s.length;
  const r = n.indexOf(s, o);
  return r !== -1 && r === o;
}, e1 = (n) => {
  if (!n) return null;
  if (In(n)) return n;
  let s = n.length;
  if (!Ku(s)) return null;
  const o = new Array(s);
  for (; s-- > 0; )
    o[s] = n[s];
  return o;
}, n1 = /* @__PURE__ */ ((n) => (s) => n && s instanceof n)(typeof Uint8Array < "u" && Dr(Uint8Array)), s1 = (n, s) => {
  const r = (n && n[Symbol.iterator]).call(n);
  let l;
  for (; (l = r.next()) && !l.done; ) {
    const u = l.value;
    s.call(n, u[0], u[1]);
  }
}, i1 = (n, s) => {
  let o;
  const r = [];
  for (; (o = n.exec(s)) !== null; )
    r.push(o);
  return r;
}, o1 = ve("HTMLFormElement"), r1 = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(o, r, l) {
    return r.toUpperCase() + l;
  }
), Ac = (({ hasOwnProperty: n }) => (s, o) => n.call(s, o))(Object.prototype), a1 = ve("RegExp"), Yu = (n, s) => {
  const o = Object.getOwnPropertyDescriptors(n), r = {};
  Ss(o, (l, u) => {
    let h;
    (h = s(l, u, n)) !== !1 && (r[u] = h || l);
  }), Object.defineProperties(n, r);
}, l1 = (n) => {
  Yu(n, (s, o) => {
    if (ue(n) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
      return !1;
    const r = n[o];
    if (ue(r)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + o + "'");
      });
    }
  });
}, c1 = (n, s) => {
  const o = {}, r = (l) => {
    l.forEach((u) => {
      o[u] = !0;
    });
  };
  return In(n) ? r(n) : r(String(n).split(s)), o;
}, u1 = () => {
}, h1 = (n, s) => n != null && Number.isFinite(n = +n) ? n : s, Qo = "abcdefghijklmnopqrstuvwxyz", Cc = "0123456789", Qu = {
  DIGIT: Cc,
  ALPHA: Qo,
  ALPHA_DIGIT: Qo + Qo.toUpperCase() + Cc
}, d1 = (n = 16, s = Qu.ALPHA_DIGIT) => {
  let o = "";
  const { length: r } = s;
  for (; n--; )
    o += s[Math.random() * r | 0];
  return o;
};
function f1(n) {
  return !!(n && ue(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator]);
}
const p1 = (n) => {
  const s = new Array(10), o = (r, l) => {
    if (Li(r)) {
      if (s.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        s[l] = r;
        const u = In(r) ? [] : {};
        return Ss(r, (h, p) => {
          const v = o(h, l + 1);
          !ws(v) && (u[p] = v);
        }), s[l] = void 0, u;
      }
    }
    return r;
  };
  return o(n, 0);
}, m1 = ve("AsyncFunction"), g1 = (n) => n && (Li(n) || ue(n)) && ue(n.then) && ue(n.catch), Zu = ((n, s) => n ? setImmediate : s ? ((o, r) => (an.addEventListener("message", ({ source: l, data: u }) => {
  l === an && u === o && r.length && r.shift()();
}, !1), (l) => {
  r.push(l), an.postMessage(o, "*");
}))(`axios@${Math.random()}`, []) : (o) => setTimeout(o))(
  typeof setImmediate == "function",
  ue(an.postMessage)
), b1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(an) : typeof process < "u" && process.nextTick || Zu, A = {
  isArray: In,
  isArrayBuffer: Ju,
  isBuffer: B0,
  isFormData: H0,
  isArrayBufferView: F0,
  isString: I0,
  isNumber: Ku,
  isBoolean: D0,
  isObject: Li,
  isPlainObject: gi,
  isReadableStream: W0,
  isRequest: V0,
  isResponse: J0,
  isHeaders: K0,
  isUndefined: ws,
  isDate: L0,
  isFile: U0,
  isBlob: j0,
  isRegExp: a1,
  isFunction: ue,
  isStream: z0,
  isURLSearchParams: q0,
  isTypedArray: n1,
  isFileList: M0,
  forEach: Ss,
  merge: gr,
  extend: X0,
  trim: G0,
  stripBOM: Y0,
  inherits: Q0,
  toFlatObject: Z0,
  kindOf: Ii,
  kindOfTest: ve,
  endsWith: t1,
  toArray: e1,
  forEachEntry: s1,
  matchAll: i1,
  isHTMLForm: o1,
  hasOwnProperty: Ac,
  hasOwnProp: Ac,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Yu,
  freezeMethods: l1,
  toObjectSet: c1,
  toCamelCase: r1,
  noop: u1,
  toFiniteNumber: h1,
  findKey: Gu,
  global: an,
  isContextDefined: Xu,
  ALPHABET: Qu,
  generateString: d1,
  isSpecCompliantForm: f1,
  toJSONObject: p1,
  isAsyncFn: m1,
  isThenable: g1,
  setImmediate: Zu,
  asap: b1
};
function Y(n, s, o, r, l) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", s && (this.code = s), o && (this.config = o), r && (this.request = r), l && (this.response = l, this.status = l.status ? l.status : null);
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
Y.from = (n, s, o, r, l, u) => {
  const h = Object.create(th);
  return A.toFlatObject(n, h, function(v) {
    return v !== Error.prototype;
  }, (p) => p !== "isAxiosError"), Y.call(h, n.message, s, o, r, l), h.cause = n, h.name = n.name, u && Object.assign(h, u), h;
};
const w1 = null;
function br(n) {
  return A.isPlainObject(n) || A.isArray(n);
}
function nh(n) {
  return A.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Rc(n, s, o) {
  return n ? n.concat(s).map(function(l, u) {
    return l = nh(l), !o && u ? "[" + l + "]" : l;
  }).join(o ? "." : "") : s;
}
function v1(n) {
  return A.isArray(n) && !n.some(br);
}
const y1 = A.toFlatObject(A, {}, null, function(s) {
  return /^is[A-Z]/.test(s);
});
function Ui(n, s, o) {
  if (!A.isObject(n))
    throw new TypeError("target must be an object");
  s = s || new FormData(), o = A.toFlatObject(o, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(S, N) {
    return !A.isUndefined(N[S]);
  });
  const r = o.metaTokens, l = o.visitor || b, u = o.dots, h = o.indexes, v = (o.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(s);
  if (!A.isFunction(l))
    throw new TypeError("visitor must be a function");
  function g(y) {
    if (y === null) return "";
    if (A.isDate(y))
      return y.toISOString();
    if (!v && A.isBlob(y))
      throw new Y("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(y) || A.isTypedArray(y) ? v && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function b(y, S, N) {
    let D = y;
    if (y && !N && typeof y == "object") {
      if (A.endsWith(S, "{}"))
        S = r ? S : S.slice(0, -2), y = JSON.stringify(y);
      else if (A.isArray(y) && v1(y) || (A.isFileList(y) || A.endsWith(S, "[]")) && (D = A.toArray(y)))
        return S = nh(S), D.forEach(function(z, gt) {
          !(A.isUndefined(z) || z === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? Rc([S], gt, u) : h === null ? S : S + "[]",
            g(z)
          );
        }), !1;
    }
    return br(y) ? !0 : (s.append(Rc(N, S, u), g(y)), !1);
  }
  const x = [], E = Object.assign(y1, {
    defaultVisitor: b,
    convertValue: g,
    isVisitable: br
  });
  function P(y, S) {
    if (!A.isUndefined(y)) {
      if (x.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      x.push(y), A.forEach(y, function(D, U) {
        (!(A.isUndefined(D) || D === null) && l.call(
          s,
          D,
          A.isString(U) ? U.trim() : U,
          S,
          E
        )) === !0 && P(D, S ? S.concat(U) : [U]);
      }), x.pop();
    }
  }
  if (!A.isObject(n))
    throw new TypeError("data must be an object");
  return P(n), s;
}
function Pc(n) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(r) {
    return s[r];
  });
}
function Lr(n, s) {
  this._pairs = [], n && Ui(n, this, s);
}
const sh = Lr.prototype;
sh.append = function(s, o) {
  this._pairs.push([s, o]);
};
sh.toString = function(s) {
  const o = s ? function(r) {
    return s.call(this, r, Pc);
  } : Pc;
  return this._pairs.map(function(l) {
    return o(l[0]) + "=" + o(l[1]);
  }, "").join("&");
};
function k1(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ih(n, s, o) {
  if (!s)
    return n;
  const r = o && o.encode || k1, l = o && o.serialize;
  let u;
  if (l ? u = l(s, o) : u = A.isURLSearchParams(s) ? s.toString() : new Lr(s, o).toString(r), u) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)), n += (n.indexOf("?") === -1 ? "?" : "&") + u;
  }
  return n;
}
class Nc {
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
  use(s, o, r) {
    return this.handlers.push({
      fulfilled: s,
      rejected: o,
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
    A.forEach(this.handlers, function(r) {
      r !== null && s(r);
    });
  }
}
const oh = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, $1 = typeof URLSearchParams < "u" ? URLSearchParams : Lr, x1 = typeof FormData < "u" ? FormData : null, S1 = typeof Blob < "u" ? Blob : null, E1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: $1,
    FormData: x1,
    Blob: S1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ur = typeof window < "u" && typeof document < "u", wr = typeof navigator == "object" && navigator || void 0, _1 = Ur && (!wr || ["ReactNative", "NativeScript", "NS"].indexOf(wr.product) < 0), O1 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", T1 = Ur && window.location.href || "http://localhost", A1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ur,
  hasStandardBrowserEnv: _1,
  hasStandardBrowserWebWorkerEnv: O1,
  navigator: wr,
  origin: T1
}, Symbol.toStringTag, { value: "Module" })), Zt = {
  ...A1,
  ...E1
};
function C1(n, s) {
  return Ui(n, new Zt.classes.URLSearchParams(), Object.assign({
    visitor: function(o, r, l, u) {
      return Zt.isNode && A.isBuffer(o) ? (this.append(r, o.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function R1(n) {
  return A.matchAll(/\w+|\[(\w*)]/g, n).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function P1(n) {
  const s = {}, o = Object.keys(n);
  let r;
  const l = o.length;
  let u;
  for (r = 0; r < l; r++)
    u = o[r], s[u] = n[u];
  return s;
}
function rh(n) {
  function s(o, r, l, u) {
    let h = o[u++];
    if (h === "__proto__") return !0;
    const p = Number.isFinite(+h), v = u >= o.length;
    return h = !h && A.isArray(l) ? l.length : h, v ? (A.hasOwnProp(l, h) ? l[h] = [l[h], r] : l[h] = r, !p) : ((!l[h] || !A.isObject(l[h])) && (l[h] = []), s(o, r, l[h], u) && A.isArray(l[h]) && (l[h] = P1(l[h])), !p);
  }
  if (A.isFormData(n) && A.isFunction(n.entries)) {
    const o = {};
    return A.forEachEntry(n, (r, l) => {
      s(R1(r), l, o, 0);
    }), o;
  }
  return null;
}
function N1(n, s, o) {
  if (A.isString(n))
    try {
      return (s || JSON.parse)(n), A.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(n);
}
const Es = {
  transitional: oh,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(s, o) {
    const r = o.getContentType() || "", l = r.indexOf("application/json") > -1, u = A.isObject(s);
    if (u && A.isHTMLForm(s) && (s = new FormData(s)), A.isFormData(s))
      return l ? JSON.stringify(rh(s)) : s;
    if (A.isArrayBuffer(s) || A.isBuffer(s) || A.isStream(s) || A.isFile(s) || A.isBlob(s) || A.isReadableStream(s))
      return s;
    if (A.isArrayBufferView(s))
      return s.buffer;
    if (A.isURLSearchParams(s))
      return o.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), s.toString();
    let p;
    if (u) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return C1(s, this.formSerializer).toString();
      if ((p = A.isFileList(s)) || r.indexOf("multipart/form-data") > -1) {
        const v = this.env && this.env.FormData;
        return Ui(
          p ? { "files[]": s } : s,
          v && new v(),
          this.formSerializer
        );
      }
    }
    return u || l ? (o.setContentType("application/json", !1), N1(s)) : s;
  }],
  transformResponse: [function(s) {
    const o = this.transitional || Es.transitional, r = o && o.forcedJSONParsing, l = this.responseType === "json";
    if (A.isResponse(s) || A.isReadableStream(s))
      return s;
    if (s && A.isString(s) && (r && !this.responseType || l)) {
      const h = !(o && o.silentJSONParsing) && l;
      try {
        return JSON.parse(s);
      } catch (p) {
        if (h)
          throw p.name === "SyntaxError" ? Y.from(p, Y.ERR_BAD_RESPONSE, this, null, this.response) : p;
      }
    }
    return s;
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
    FormData: Zt.classes.FormData,
    Blob: Zt.classes.Blob
  },
  validateStatus: function(s) {
    return s >= 200 && s < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Es.headers[n] = {};
});
const B1 = A.toObjectSet([
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
]), F1 = (n) => {
  const s = {};
  let o, r, l;
  return n && n.split(`
`).forEach(function(h) {
    l = h.indexOf(":"), o = h.substring(0, l).trim().toLowerCase(), r = h.substring(l + 1).trim(), !(!o || s[o] && B1[o]) && (o === "set-cookie" ? s[o] ? s[o].push(r) : s[o] = [r] : s[o] = s[o] ? s[o] + ", " + r : r);
  }), s;
}, Bc = Symbol("internals");
function ps(n) {
  return n && String(n).trim().toLowerCase();
}
function bi(n) {
  return n === !1 || n == null ? n : A.isArray(n) ? n.map(bi) : String(n);
}
function I1(n) {
  const s = /* @__PURE__ */ Object.create(null), o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = o.exec(n); )
    s[r[1]] = r[2];
  return s;
}
const D1 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Zo(n, s, o, r, l) {
  if (A.isFunction(r))
    return r.call(this, s, o);
  if (l && (s = o), !!A.isString(s)) {
    if (A.isString(r))
      return s.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(s);
  }
}
function L1(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, o, r) => o.toUpperCase() + r);
}
function U1(n, s) {
  const o = A.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + o, {
      value: function(l, u, h) {
        return this[r].call(this, s, l, u, h);
      },
      configurable: !0
    });
  });
}
class te {
  constructor(s) {
    s && this.set(s);
  }
  set(s, o, r) {
    const l = this;
    function u(p, v, g) {
      const b = ps(v);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const x = A.findKey(l, b);
      (!x || l[x] === void 0 || g === !0 || g === void 0 && l[x] !== !1) && (l[x || v] = bi(p));
    }
    const h = (p, v) => A.forEach(p, (g, b) => u(g, b, v));
    if (A.isPlainObject(s) || s instanceof this.constructor)
      h(s, o);
    else if (A.isString(s) && (s = s.trim()) && !D1(s))
      h(F1(s), o);
    else if (A.isHeaders(s))
      for (const [p, v] of s.entries())
        u(v, p, r);
    else
      s != null && u(o, s, r);
    return this;
  }
  get(s, o) {
    if (s = ps(s), s) {
      const r = A.findKey(this, s);
      if (r) {
        const l = this[r];
        if (!o)
          return l;
        if (o === !0)
          return I1(l);
        if (A.isFunction(o))
          return o.call(this, l, r);
        if (A.isRegExp(o))
          return o.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, o) {
    if (s = ps(s), s) {
      const r = A.findKey(this, s);
      return !!(r && this[r] !== void 0 && (!o || Zo(this, this[r], r, o)));
    }
    return !1;
  }
  delete(s, o) {
    const r = this;
    let l = !1;
    function u(h) {
      if (h = ps(h), h) {
        const p = A.findKey(r, h);
        p && (!o || Zo(r, r[p], p, o)) && (delete r[p], l = !0);
      }
    }
    return A.isArray(s) ? s.forEach(u) : u(s), l;
  }
  clear(s) {
    const o = Object.keys(this);
    let r = o.length, l = !1;
    for (; r--; ) {
      const u = o[r];
      (!s || Zo(this, this[u], u, s, !0)) && (delete this[u], l = !0);
    }
    return l;
  }
  normalize(s) {
    const o = this, r = {};
    return A.forEach(this, (l, u) => {
      const h = A.findKey(r, u);
      if (h) {
        o[h] = bi(l), delete o[u];
        return;
      }
      const p = s ? L1(u) : String(u).trim();
      p !== u && delete o[u], o[p] = bi(l), r[p] = !0;
    }), this;
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const o = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (r, l) => {
      r != null && r !== !1 && (o[l] = s && A.isArray(r) ? r.join(", ") : r);
    }), o;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, o]) => s + ": " + o).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...o) {
    const r = new this(s);
    return o.forEach((l) => r.set(l)), r;
  }
  static accessor(s) {
    const r = (this[Bc] = this[Bc] = {
      accessors: {}
    }).accessors, l = this.prototype;
    function u(h) {
      const p = ps(h);
      r[p] || (U1(l, h), r[p] = !0);
    }
    return A.isArray(s) ? s.forEach(u) : u(s), this;
  }
}
te.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(te.prototype, ({ value: n }, s) => {
  let o = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => n,
    set(r) {
      this[o] = r;
    }
  };
});
A.freezeMethods(te);
function tr(n, s) {
  const o = this || Es, r = s || o, l = te.from(r.headers);
  let u = r.data;
  return A.forEach(n, function(p) {
    u = p.call(o, u, l.normalize(), s ? s.status : void 0);
  }), l.normalize(), u;
}
function ah(n) {
  return !!(n && n.__CANCEL__);
}
function Dn(n, s, o) {
  Y.call(this, n ?? "canceled", Y.ERR_CANCELED, s, o), this.name = "CanceledError";
}
A.inherits(Dn, Y, {
  __CANCEL__: !0
});
function lh(n, s, o) {
  const r = o.config.validateStatus;
  !o.status || !r || r(o.status) ? n(o) : s(new Y(
    "Request failed with status code " + o.status,
    [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4],
    o.config,
    o.request,
    o
  ));
}
function j1(n) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return s && s[1] || "";
}
function M1(n, s) {
  n = n || 10;
  const o = new Array(n), r = new Array(n);
  let l = 0, u = 0, h;
  return s = s !== void 0 ? s : 1e3, function(v) {
    const g = Date.now(), b = r[u];
    h || (h = g), o[l] = v, r[l] = g;
    let x = u, E = 0;
    for (; x !== l; )
      E += o[x++], x = x % n;
    if (l = (l + 1) % n, l === u && (u = (u + 1) % n), g - h < s)
      return;
    const P = b && g - b;
    return P ? Math.round(E * 1e3 / P) : void 0;
  };
}
function z1(n, s) {
  let o = 0, r = 1e3 / s, l, u;
  const h = (g, b = Date.now()) => {
    o = b, l = null, u && (clearTimeout(u), u = null), n.apply(null, g);
  };
  return [(...g) => {
    const b = Date.now(), x = b - o;
    x >= r ? h(g, b) : (l = g, u || (u = setTimeout(() => {
      u = null, h(l);
    }, r - x)));
  }, () => l && h(l)];
}
const xi = (n, s, o = 3) => {
  let r = 0;
  const l = M1(50, 250);
  return z1((u) => {
    const h = u.loaded, p = u.lengthComputable ? u.total : void 0, v = h - r, g = l(v), b = h <= p;
    r = h;
    const x = {
      loaded: h,
      total: p,
      progress: p ? h / p : void 0,
      bytes: v,
      rate: g || void 0,
      estimated: g && p && b ? (p - h) / g : void 0,
      event: u,
      lengthComputable: p != null,
      [s ? "download" : "upload"]: !0
    };
    n(x);
  }, o);
}, Fc = (n, s) => {
  const o = n != null;
  return [(r) => s[0]({
    lengthComputable: o,
    total: n,
    loaded: r
  }), s[1]];
}, Ic = (n) => (...s) => A.asap(() => n(...s)), H1 = Zt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const s = Zt.navigator && /(msie|trident)/i.test(Zt.navigator.userAgent), o = document.createElement("a");
    let r;
    function l(u) {
      let h = u;
      return s && (o.setAttribute("href", h), h = o.href), o.setAttribute("href", h), {
        href: o.href,
        protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
        host: o.host,
        search: o.search ? o.search.replace(/^\?/, "") : "",
        hash: o.hash ? o.hash.replace(/^#/, "") : "",
        hostname: o.hostname,
        port: o.port,
        pathname: o.pathname.charAt(0) === "/" ? o.pathname : "/" + o.pathname
      };
    }
    return r = l(window.location.href), function(h) {
      const p = A.isString(h) ? l(h) : h;
      return p.protocol === r.protocol && p.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), q1 = Zt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, s, o, r, l, u) {
      const h = [n + "=" + encodeURIComponent(s)];
      A.isNumber(o) && h.push("expires=" + new Date(o).toGMTString()), A.isString(r) && h.push("path=" + r), A.isString(l) && h.push("domain=" + l), u === !0 && h.push("secure"), document.cookie = h.join("; ");
    },
    read(n) {
      const s = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return s ? decodeURIComponent(s[3]) : null;
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
function W1(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function V1(n, s) {
  return s ? n.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : n;
}
function ch(n, s) {
  return n && !W1(s) ? V1(n, s) : s;
}
const Dc = (n) => n instanceof te ? { ...n } : n;
function fn(n, s) {
  s = s || {};
  const o = {};
  function r(g, b, x) {
    return A.isPlainObject(g) && A.isPlainObject(b) ? A.merge.call({ caseless: x }, g, b) : A.isPlainObject(b) ? A.merge({}, b) : A.isArray(b) ? b.slice() : b;
  }
  function l(g, b, x) {
    if (A.isUndefined(b)) {
      if (!A.isUndefined(g))
        return r(void 0, g, x);
    } else return r(g, b, x);
  }
  function u(g, b) {
    if (!A.isUndefined(b))
      return r(void 0, b);
  }
  function h(g, b) {
    if (A.isUndefined(b)) {
      if (!A.isUndefined(g))
        return r(void 0, g);
    } else return r(void 0, b);
  }
  function p(g, b, x) {
    if (x in s)
      return r(g, b);
    if (x in n)
      return r(void 0, g);
  }
  const v = {
    url: u,
    method: u,
    data: u,
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
    validateStatus: p,
    headers: (g, b) => l(Dc(g), Dc(b), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, n, s)), function(b) {
    const x = v[b] || l, E = x(n[b], s[b], b);
    A.isUndefined(E) && x !== p || (o[b] = E);
  }), o;
}
const uh = (n) => {
  const s = fn({}, n);
  let { data: o, withXSRFToken: r, xsrfHeaderName: l, xsrfCookieName: u, headers: h, auth: p } = s;
  s.headers = h = te.from(h), s.url = ih(ch(s.baseURL, s.url), n.params, n.paramsSerializer), p && h.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  );
  let v;
  if (A.isFormData(o)) {
    if (Zt.hasStandardBrowserEnv || Zt.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if ((v = h.getContentType()) !== !1) {
      const [g, ...b] = v ? v.split(";").map((x) => x.trim()).filter(Boolean) : [];
      h.setContentType([g || "multipart/form-data", ...b].join("; "));
    }
  }
  if (Zt.hasStandardBrowserEnv && (r && A.isFunction(r) && (r = r(s)), r || r !== !1 && H1(s.url))) {
    const g = l && u && q1.read(u);
    g && h.set(l, g);
  }
  return s;
}, J1 = typeof XMLHttpRequest < "u", K1 = J1 && function(n) {
  return new Promise(function(o, r) {
    const l = uh(n);
    let u = l.data;
    const h = te.from(l.headers).normalize();
    let { responseType: p, onUploadProgress: v, onDownloadProgress: g } = l, b, x, E, P, y;
    function S() {
      P && P(), y && y(), l.cancelToken && l.cancelToken.unsubscribe(b), l.signal && l.signal.removeEventListener("abort", b);
    }
    let N = new XMLHttpRequest();
    N.open(l.method.toUpperCase(), l.url, !0), N.timeout = l.timeout;
    function D() {
      if (!N)
        return;
      const z = te.from(
        "getAllResponseHeaders" in N && N.getAllResponseHeaders()
      ), at = {
        data: !p || p === "text" || p === "json" ? N.responseText : N.response,
        status: N.status,
        statusText: N.statusText,
        headers: z,
        config: n,
        request: N
      };
      lh(function(kt) {
        o(kt), S();
      }, function(kt) {
        r(kt), S();
      }, at), N = null;
    }
    "onloadend" in N ? N.onloadend = D : N.onreadystatechange = function() {
      !N || N.readyState !== 4 || N.status === 0 && !(N.responseURL && N.responseURL.indexOf("file:") === 0) || setTimeout(D);
    }, N.onabort = function() {
      N && (r(new Y("Request aborted", Y.ECONNABORTED, n, N)), N = null);
    }, N.onerror = function() {
      r(new Y("Network Error", Y.ERR_NETWORK, n, N)), N = null;
    }, N.ontimeout = function() {
      let gt = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded";
      const at = l.transitional || oh;
      l.timeoutErrorMessage && (gt = l.timeoutErrorMessage), r(new Y(
        gt,
        at.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
        n,
        N
      )), N = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in N && A.forEach(h.toJSON(), function(gt, at) {
      N.setRequestHeader(at, gt);
    }), A.isUndefined(l.withCredentials) || (N.withCredentials = !!l.withCredentials), p && p !== "json" && (N.responseType = l.responseType), g && ([E, y] = xi(g, !0), N.addEventListener("progress", E)), v && N.upload && ([x, P] = xi(v), N.upload.addEventListener("progress", x), N.upload.addEventListener("loadend", P)), (l.cancelToken || l.signal) && (b = (z) => {
      N && (r(!z || z.type ? new Dn(null, n, N) : z), N.abort(), N = null);
    }, l.cancelToken && l.cancelToken.subscribe(b), l.signal && (l.signal.aborted ? b() : l.signal.addEventListener("abort", b)));
    const U = j1(l.url);
    if (U && Zt.protocols.indexOf(U) === -1) {
      r(new Y("Unsupported protocol " + U + ":", Y.ERR_BAD_REQUEST, n));
      return;
    }
    N.send(u || null);
  });
}, G1 = (n, s) => {
  const { length: o } = n = n ? n.filter(Boolean) : [];
  if (s || o) {
    let r = new AbortController(), l;
    const u = function(g) {
      if (!l) {
        l = !0, p();
        const b = g instanceof Error ? g : this.reason;
        r.abort(b instanceof Y ? b : new Dn(b instanceof Error ? b.message : b));
      }
    };
    let h = s && setTimeout(() => {
      h = null, u(new Y(`timeout ${s} of ms exceeded`, Y.ETIMEDOUT));
    }, s);
    const p = () => {
      n && (h && clearTimeout(h), h = null, n.forEach((g) => {
        g.unsubscribe ? g.unsubscribe(u) : g.removeEventListener("abort", u);
      }), n = null);
    };
    n.forEach((g) => g.addEventListener("abort", u));
    const { signal: v } = r;
    return v.unsubscribe = () => A.asap(p), v;
  }
}, X1 = function* (n, s) {
  let o = n.byteLength;
  if (o < s) {
    yield n;
    return;
  }
  let r = 0, l;
  for (; r < o; )
    l = r + s, yield n.slice(r, l), r = l;
}, Y1 = async function* (n, s) {
  for await (const o of Q1(n))
    yield* X1(o, s);
}, Q1 = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const s = n.getReader();
  try {
    for (; ; ) {
      const { done: o, value: r } = await s.read();
      if (o)
        break;
      yield r;
    }
  } finally {
    await s.cancel();
  }
}, Lc = (n, s, o, r) => {
  const l = Y1(n, s);
  let u = 0, h, p = (v) => {
    h || (h = !0, r && r(v));
  };
  return new ReadableStream({
    async pull(v) {
      try {
        const { done: g, value: b } = await l.next();
        if (g) {
          p(), v.close();
          return;
        }
        let x = b.byteLength;
        if (o) {
          let E = u += x;
          o(E);
        }
        v.enqueue(new Uint8Array(b));
      } catch (g) {
        throw p(g), g;
      }
    },
    cancel(v) {
      return p(v), l.return();
    }
  }, {
    highWaterMark: 2
  });
}, ji = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", hh = ji && typeof ReadableStream == "function", Z1 = ji && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (s) => n.encode(s))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), dh = (n, ...s) => {
  try {
    return !!n(...s);
  } catch {
    return !1;
  }
}, tk = hh && dh(() => {
  let n = !1;
  const s = new Request(Zt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !s;
}), Uc = 64 * 1024, vr = hh && dh(() => A.isReadableStream(new Response("").body)), Si = {
  stream: vr && ((n) => n.body)
};
ji && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !Si[s] && (Si[s] = A.isFunction(n[s]) ? (o) => o[s]() : (o, r) => {
      throw new Y(`Response type '${s}' is not supported`, Y.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const ek = async (n) => {
  if (n == null)
    return 0;
  if (A.isBlob(n))
    return n.size;
  if (A.isSpecCompliantForm(n))
    return (await new Request(Zt.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (A.isArrayBufferView(n) || A.isArrayBuffer(n))
    return n.byteLength;
  if (A.isURLSearchParams(n) && (n = n + ""), A.isString(n))
    return (await Z1(n)).byteLength;
}, nk = async (n, s) => {
  const o = A.toFiniteNumber(n.getContentLength());
  return o ?? ek(s);
}, sk = ji && (async (n) => {
  let {
    url: s,
    method: o,
    data: r,
    signal: l,
    cancelToken: u,
    timeout: h,
    onDownloadProgress: p,
    onUploadProgress: v,
    responseType: g,
    headers: b,
    withCredentials: x = "same-origin",
    fetchOptions: E
  } = uh(n);
  g = g ? (g + "").toLowerCase() : "text";
  let P = G1([l, u && u.toAbortSignal()], h), y;
  const S = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let N;
  try {
    if (v && tk && o !== "get" && o !== "head" && (N = await nk(b, r)) !== 0) {
      let at = new Request(s, {
        method: "POST",
        body: r,
        duplex: "half"
      }), ut;
      if (A.isFormData(r) && (ut = at.headers.get("content-type")) && b.setContentType(ut), at.body) {
        const [kt, It] = Fc(
          N,
          xi(Ic(v))
        );
        r = Lc(at.body, Uc, kt, It);
      }
    }
    A.isString(x) || (x = x ? "include" : "omit");
    const D = "credentials" in Request.prototype;
    y = new Request(s, {
      ...E,
      signal: P,
      method: o.toUpperCase(),
      headers: b.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: D ? x : void 0
    });
    let U = await fetch(y);
    const z = vr && (g === "stream" || g === "response");
    if (vr && (p || z && S)) {
      const at = {};
      ["status", "statusText", "headers"].forEach((Dt) => {
        at[Dt] = U[Dt];
      });
      const ut = A.toFiniteNumber(U.headers.get("content-length")), [kt, It] = p && Fc(
        ut,
        xi(Ic(p), !0)
      ) || [];
      U = new Response(
        Lc(U.body, Uc, kt, () => {
          It && It(), S && S();
        }),
        at
      );
    }
    g = g || "text";
    let gt = await Si[A.findKey(Si, g) || "text"](U, n);
    return !z && S && S(), await new Promise((at, ut) => {
      lh(at, ut, {
        data: gt,
        headers: te.from(U.headers),
        status: U.status,
        statusText: U.statusText,
        config: n,
        request: y
      });
    });
  } catch (D) {
    throw S && S(), D && D.name === "TypeError" && /fetch/i.test(D.message) ? Object.assign(
      new Y("Network Error", Y.ERR_NETWORK, n, y),
      {
        cause: D.cause || D
      }
    ) : Y.from(D, D && D.code, n, y);
  }
}), yr = {
  http: w1,
  xhr: K1,
  fetch: sk
};
A.forEach(yr, (n, s) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: s });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: s });
  }
});
const jc = (n) => `- ${n}`, ik = (n) => A.isFunction(n) || n === null || n === !1, fh = {
  getAdapter: (n) => {
    n = A.isArray(n) ? n : [n];
    const { length: s } = n;
    let o, r;
    const l = {};
    for (let u = 0; u < s; u++) {
      o = n[u];
      let h;
      if (r = o, !ik(o) && (r = yr[(h = String(o)).toLowerCase()], r === void 0))
        throw new Y(`Unknown adapter '${h}'`);
      if (r)
        break;
      l[h || "#" + u] = r;
    }
    if (!r) {
      const u = Object.entries(l).map(
        ([p, v]) => `adapter ${p} ` + (v === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let h = s ? u.length > 1 ? `since :
` + u.map(jc).join(`
`) : " " + jc(u[0]) : "as no adapter specified";
      throw new Y(
        "There is no suitable adapter to dispatch the request " + h,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: yr
};
function er(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Dn(null, n);
}
function Mc(n) {
  return er(n), n.headers = te.from(n.headers), n.data = tr.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), fh.getAdapter(n.adapter || Es.adapter)(n).then(function(r) {
    return er(n), r.data = tr.call(
      n,
      n.transformResponse,
      r
    ), r.headers = te.from(r.headers), r;
  }, function(r) {
    return ah(r) || (er(n), r && r.response && (r.response.data = tr.call(
      n,
      n.transformResponse,
      r.response
    ), r.response.headers = te.from(r.response.headers))), Promise.reject(r);
  });
}
const ph = "1.7.7", jr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, s) => {
  jr[n] = function(r) {
    return typeof r === n || "a" + (s < 1 ? "n " : " ") + n;
  };
});
const zc = {};
jr.transitional = function(s, o, r) {
  function l(u, h) {
    return "[Axios v" + ph + "] Transitional option '" + u + "'" + h + (r ? ". " + r : "");
  }
  return (u, h, p) => {
    if (s === !1)
      throw new Y(
        l(h, " has been removed" + (o ? " in " + o : "")),
        Y.ERR_DEPRECATED
      );
    return o && !zc[h] && (zc[h] = !0, console.warn(
      l(
        h,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), s ? s(u, h, p) : !0;
  };
};
function ok(n, s, o) {
  if (typeof n != "object")
    throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let l = r.length;
  for (; l-- > 0; ) {
    const u = r[l], h = s[u];
    if (h) {
      const p = n[u], v = p === void 0 || h(p, u, n);
      if (v !== !0)
        throw new Y("option " + u + " must be " + v, Y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new Y("Unknown option " + u, Y.ERR_BAD_OPTION);
  }
}
const kr = {
  assertOptions: ok,
  validators: jr
}, Le = kr.validators;
class un {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new Nc(),
      response: new Nc()
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
  async request(s, o) {
    try {
      return await this._request(s, o);
    } catch (r) {
      if (r instanceof Error) {
        let l;
        Error.captureStackTrace ? Error.captureStackTrace(l = {}) : l = new Error();
        const u = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? u && !String(r.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + u) : r.stack = u;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(s, o) {
    typeof s == "string" ? (o = o || {}, o.url = s) : o = s || {}, o = fn(this.defaults, o);
    const { transitional: r, paramsSerializer: l, headers: u } = o;
    r !== void 0 && kr.assertOptions(r, {
      silentJSONParsing: Le.transitional(Le.boolean),
      forcedJSONParsing: Le.transitional(Le.boolean),
      clarifyTimeoutError: Le.transitional(Le.boolean)
    }, !1), l != null && (A.isFunction(l) ? o.paramsSerializer = {
      serialize: l
    } : kr.assertOptions(l, {
      encode: Le.function,
      serialize: Le.function
    }, !0)), o.method = (o.method || this.defaults.method || "get").toLowerCase();
    let h = u && A.merge(
      u.common,
      u[o.method]
    );
    u && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete u[y];
      }
    ), o.headers = te.concat(h, u);
    const p = [];
    let v = !0;
    this.interceptors.request.forEach(function(S) {
      typeof S.runWhen == "function" && S.runWhen(o) === !1 || (v = v && S.synchronous, p.unshift(S.fulfilled, S.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(S) {
      g.push(S.fulfilled, S.rejected);
    });
    let b, x = 0, E;
    if (!v) {
      const y = [Mc.bind(this), void 0];
      for (y.unshift.apply(y, p), y.push.apply(y, g), E = y.length, b = Promise.resolve(o); x < E; )
        b = b.then(y[x++], y[x++]);
      return b;
    }
    E = p.length;
    let P = o;
    for (x = 0; x < E; ) {
      const y = p[x++], S = p[x++];
      try {
        P = y(P);
      } catch (N) {
        S.call(this, N);
        break;
      }
    }
    try {
      b = Mc.call(this, P);
    } catch (y) {
      return Promise.reject(y);
    }
    for (x = 0, E = g.length; x < E; )
      b = b.then(g[x++], g[x++]);
    return b;
  }
  getUri(s) {
    s = fn(this.defaults, s);
    const o = ch(s.baseURL, s.url);
    return ih(o, s.params, s.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(s) {
  un.prototype[s] = function(o, r) {
    return this.request(fn(r || {}, {
      method: s,
      url: o,
      data: (r || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(s) {
  function o(r) {
    return function(u, h, p) {
      return this.request(fn(p || {}, {
        method: s,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: h
      }));
    };
  }
  un.prototype[s] = o(), un.prototype[s + "Form"] = o(!0);
});
class Mr {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function(u) {
      o = u;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let u = r._listeners.length;
      for (; u-- > 0; )
        r._listeners[u](l);
      r._listeners = null;
    }), this.promise.then = (l) => {
      let u;
      const h = new Promise((p) => {
        r.subscribe(p), u = p;
      }).then(l);
      return h.cancel = function() {
        r.unsubscribe(u);
      }, h;
    }, s(function(u, h, p) {
      r.reason || (r.reason = new Dn(u, h, p), o(r.reason));
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
    const o = this._listeners.indexOf(s);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const s = new AbortController(), o = (r) => {
      s.abort(r);
    };
    return this.subscribe(o), s.signal.unsubscribe = () => this.unsubscribe(o), s.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let s;
    return {
      token: new Mr(function(l) {
        s = l;
      }),
      cancel: s
    };
  }
}
function rk(n) {
  return function(o) {
    return n.apply(null, o);
  };
}
function ak(n) {
  return A.isObject(n) && n.isAxiosError === !0;
}
const $r = {
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
Object.entries($r).forEach(([n, s]) => {
  $r[s] = n;
});
function mh(n) {
  const s = new un(n), o = Vu(un.prototype.request, s);
  return A.extend(o, un.prototype, s, { allOwnKeys: !0 }), A.extend(o, s, null, { allOwnKeys: !0 }), o.create = function(l) {
    return mh(fn(n, l));
  }, o;
}
const Pt = mh(Es);
Pt.Axios = un;
Pt.CanceledError = Dn;
Pt.CancelToken = Mr;
Pt.isCancel = ah;
Pt.VERSION = ph;
Pt.toFormData = Ui;
Pt.AxiosError = Y;
Pt.Cancel = Pt.CanceledError;
Pt.all = function(s) {
  return Promise.all(s);
};
Pt.spread = rk;
Pt.isAxiosError = ak;
Pt.mergeConfig = fn;
Pt.AxiosHeaders = te;
Pt.formToJSON = (n) => rh(A.isHTMLForm(n) ? new FormData(n) : n);
Pt.getAdapter = fh.getAdapter;
Pt.HttpStatusCode = $r;
Pt.default = Pt;
const lk = (n) => {
  const s = ae(10), o = ae(0), r = ae("[occurred_at]=desc"), l = ae({}), u = ae(!1);
  async function h() {
    u.value = !0, Pt.get(
      Cm(n) + "?size=" + s.value + "&page=" + o.value + "&sorts%5Boccurred_at%5D=desc"
    ).then((y) => {
      l.value = y.data, u.value = !1;
    }).catch((y) => {
      console.error(y);
    });
  }
  const p = Gt(() => Math.ceil(l.value.count_filtered / s.value) - 1), v = Gt(() => l.value.count), g = Gt(() => o.value * s.value + 1), b = Gt(() => Math.min((o.value + 1) * s.value, v.value)), x = Gt(() => l.value.count_filtered), E = Gt(() => l.value.rows);
  function P() {
    console.log("Not yet implemented");
  }
  return Am(() => {
    h();
  }), {
    dataUrl: n,
    size: s,
    page: o,
    sorts: r,
    data: l,
    fetch: h,
    loading: u,
    downloadCsv: P,
    totalPages: p,
    countFiltered: x,
    count: v,
    rows: E,
    first: g,
    last: b
  };
}, ck = { class: "uk-table uk-table-striped" }, uk = /* @__PURE__ */ yt({
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
    const o = lk(n.dataUrl), { rows: r, fetch: l, loading: u } = o;
    return (h, p) => (F(), H(wi, null, [
      ot(h.$slots, "actions", {
        sprunjer: { fetch: W(l), loading: W(u) }
      }),
      O("table", ck, [
        O("thead", null, [
          O("tr", null, [
            ot(h.$slots, "header")
          ])
        ]),
        O("tbody", null, [
          (F(!0), H(wi, null, xr(W(r), (v) => (F(), H("tr", {
            key: v.id
          }, [
            ot(h.$slots, "body", { item: v })
          ]))), 128))
        ])
      ]),
      n.hidePagination ? mt("", !0) : ot(h.$slots, "paginator", { key: 0 }, () => [
        Wt(Wu, { sprunjer: W(o) }, null, 8, ["sprunjer"])
      ])
    ], 64));
  }
}), bk = {
  install: (n) => {
    n.component("UFAlertContainer", Bm).component("UFAppLink", Er).component("UFInfoBox", qm).component("UFCardBox", Xm).component("UFCardBoxBig", Zm).component("UFMainContent", ig).component("UFHeaderPage", lg).component("UFFooterContent", fg).component("UFFormLogin", Cr).component("UFFormRegister", Hu).component("UFFormForgotPassword", qu).component("UFNavBar", wy).component("UFNavBarDropdown", Ir).component("UFNavBarDropdownSeparator", Ey).component("UFNavBarItem", Ay).component("UFNavBarLogin", Ry).component("UFNavBarUserCard", Ly).component("UFNavBarUserCardButton", zy).component("UFPageLogin", Wy).component("UFPageRegister", Jy).component("UFPageForgotPassword", Ky).component("UFPageResendVerification", e0).component("UFSideBar", a0).component("UFSideBarDropdown", h0).component("UFSideBarItem", b0).component("UFSideBarLabel", v0).component("UFSprunjeColumn", $0).component("UFSprunjeHeader", E0).component("UFSprunjePaginator", Wu).component("UFSprunjeTable", uk);
  }
};
export {
  uk as A,
  fg as F,
  ig as M,
  Ey as N,
  bk as P,
  a0 as S,
  Vc as U,
  Bm as _,
  Er as a,
  qm as b,
  pg as c,
  Xm as d,
  Zm as e,
  lg as f,
  mg as g,
  Cr as h,
  Hu as i,
  qu as j,
  wy as k,
  Ir as l,
  Ay as m,
  Ry as n,
  Ly as o,
  zy as p,
  Wy as q,
  Jy as r,
  Ky as s,
  e0 as t,
  h0 as u,
  b0 as v,
  v0 as w,
  $0 as x,
  E0 as y,
  Wu as z
};
