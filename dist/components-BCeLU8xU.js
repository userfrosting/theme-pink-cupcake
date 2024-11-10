import { defineComponent as st, ref as ve, watch as np, computed as ce, resolveComponent as xt, openBlock as R, createElementBlock as B, normalizeClass as he, createBlock as dt, createCommentVNode as Q, createTextVNode as pt, toDisplayString as X, createVNode as Ct, renderSlot as z, createElementVNode as k, createSlots as oi, withCtx as gt, mergeModels as sp, useModel as ip, useTemplateRef as op, withDirectives as jt, vModelText as Wt, unref as U, withModifiers as ri, Fragment as Qe, renderList as es, vModelSelect as Ho, isRef as qo, mergeProps as ns, normalizeProps as rp, guardReactiveProps as ap, inject as os, provide as lp } from "vue";
import { RouterLink as rs } from "vue-router";
import { defineStore as ql } from "pinia";
import { useSprunjer as cp } from "@userfrosting/sprinkle-core/sprunjer";
var mt = /* @__PURE__ */ ((s) => (s.Primary = "Primary", s.Secondary = "Secondary", s.Success = "Success", s.Warning = "Warning", s.Danger = "Danger", s.Info = "Info", s.Muted = "Muted", s.Default = "Default", s))(mt || {});
const up = {
  key: 0,
  "data-test": "title"
}, hp = {
  key: 1,
  "data-test": "description"
}, dp = ["innerHTML"], fp = /* @__PURE__ */ st({
  __name: "UFAlert",
  props: {
    alert: {}
  },
  emits: ["close"],
  setup(s, { emit: i }) {
    const r = i, a = ve(!0);
    np(
      () => s.alert,
      () => {
        g();
      }
    );
    const u = ce(() => {
      switch (s.alert.style) {
        case mt.Success:
          return "uk-alert-success";
        case mt.Warning:
          return "uk-alert-warning";
        case mt.Danger:
          return "uk-alert-danger";
        case mt.Info:
          return "uk-alert-info";
        case mt.Secondary:
          return "uk-alert-secondary";
        case mt.Muted:
          return "uk-alert-muted";
        default:
          return "uk-alert-primary";
      }
    }), h = ce(() => {
      switch (s.alert.style) {
        case mt.Success:
          return "fa-solid fa-circle-check";
        case mt.Warning:
          return "fa-solid fa-circle-exclamation";
        case mt.Danger:
          return "fa-solid fa-triangle-exclamation";
        default:
          return "fa-solid fa-circle-info";
      }
    }), f = () => {
      r("close"), a.value = !1;
    }, g = () => {
      a.value = !0;
    };
    return ($, b) => {
      const v = xt("font-awesome-icon");
      return a.value ? (R(), B("div", {
        key: 0,
        class: he([u.value, "uk-alert"]),
        "uk-alert": ""
      }, [
        $.alert.title ? (R(), B("h3", up, [
          $.alert.hideIcon ? Q("", !0) : (R(), dt(v, {
            key: 0,
            icon: h.value,
            class: "uk-icon"
          }, null, 8, ["icon"])),
          pt(" " + X($.alert.title) + " ", 1),
          $.alert.closeBtn ? (R(), B("a", {
            key: 1,
            "data-test": "closeBtn",
            onClick: f,
            class: "uk-alert-close"
          }, [
            Ct(v, { icon: "xmark" })
          ])) : Q("", !0)
        ])) : Q("", !0),
        $.$slots.default ? (R(), B("p", hp, [
          z($.$slots, "default")
        ])) : $.alert.description ? (R(), B("p", {
          key: 2,
          innerHTML: $.alert.description,
          "data-test": "description"
        }, null, 8, dp)) : Q("", !0)
      ], 2)) : Q("", !0);
    };
  }
}), pp = /* @__PURE__ */ st({
  __name: "UFLabel",
  props: {
    severity: { default: "" }
  },
  setup(s) {
    const i = ce(() => {
      switch (s.severity) {
        case mt.Success:
          return "uk-label-success";
        case mt.Warning:
          return "uk-label-warning";
        case mt.Danger:
          return "uk-label-danger";
        case mt.Info:
          return "uk-label-info";
        case mt.Muted:
          return "uk-label-muted";
        case mt.Secondary:
          return "uk-label-secondary";
        case mt.Primary:
        default:
          return "uk-label-primary";
      }
    });
    return (r, a) => (R(), B("span", {
      class: he(["uk-label", i.value])
    }, [
      z(r.$slots, "default")
    ], 2));
  }
}), mp = ["esc-close", "bg-close"], gp = { class: "uk-modal-dialog" }, vp = {
  key: 0,
  class: "uk-modal-close-default",
  type: "button",
  "uk-close": ""
}, bp = {
  key: 1,
  class: "uk-modal-header"
}, wp = { class: "uk-modal-title" }, yp = { class: "uk-modal-body" }, kp = {
  key: 2,
  class: "uk-modal-footer uk-text-right"
}, $p = /* @__PURE__ */ st({
  __name: "UFModal",
  props: {
    closable: {
      type: Boolean,
      default: !1
    },
    escClose: {
      type: Boolean,
      default: !0
    },
    bgClose: {
      type: Boolean,
      default: !0
    }
  },
  setup(s) {
    return (i, r) => (R(), B("div", {
      ref: "modal",
      "uk-modal": "",
      "esc-close": s.escClose,
      "bg-close": s.bgClose
    }, [
      k("div", gp, [
        s.closable ? (R(), B("button", vp)) : Q("", !0),
        i.$slots.header ? (R(), B("div", bp, [
          k("h2", wp, [
            z(i.$slots, "header")
          ])
        ])) : Q("", !0),
        k("div", yp, [
          z(i.$slots, "default")
        ]),
        i.$slots.footer ? (R(), B("div", kp, [
          z(i.$slots, "footer")
        ])) : Q("", !0)
      ])
    ], 8, mp));
  }
}), xp = { class: "uk-text-center" }, Sp = {
  class: "uk-button uk-button-primary uk-modal-close",
  type: "button",
  autofocus: ""
}, _p = /* @__PURE__ */ st({
  __name: "UFModalAlert",
  props: {
    btnLabel: {
      type: String,
      default: "Ok"
    },
    title: {
      type: [String, null],
      default: ""
    },
    prompt: {
      type: String,
      default: "Something happened that requires your attention."
    }
  },
  setup(s) {
    return (i, r) => {
      const a = xt("UFModal");
      return R(), dt(a, null, oi({
        footer: gt(() => [
          z(i.$slots, "footer", {}, () => [
            k("button", Sp, X(s.btnLabel), 1)
          ])
        ]),
        default: gt(() => [
          z(i.$slots, "default", {}, () => [
            k("div", xp, X(s.prompt), 1)
          ])
        ]),
        _: 2
      }, [
        s.title || i.$slots.header ? {
          name: "header",
          fn: gt(() => [
            z(i.$slots, "header", {}, () => [
              pt(X(s.title), 1)
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1024);
    };
  }
}), Ep = { class: "uk-text-center" }, Op = { key: 0 }, Tp = /* @__PURE__ */ st({
  __name: "UFModalConfirmation",
  props: {
    closable: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    bgClose: { type: Boolean, default: !0 },
    icon: { default: "triangle-exclamation" },
    acceptIcon: { default: "check" },
    rejectIcon: { default: "xmark" },
    acceptLabel: { default: "Confirm" },
    rejectLabel: { default: "Cancel" },
    acceptSeverity: { default: () => mt.Primary },
    rejectSeverity: { default: () => mt.Default },
    cancelBtn: { type: Boolean, default: !0 },
    title: { default: "Confirmation" },
    prompt: { default: "Please confirm to proceed moving forward." }
  },
  emits: ["confirmed", "cancelled"],
  setup(s) {
    const i = (r) => {
      switch (r) {
        case mt.Success:
          return "uk-button-success";
        case mt.Warning:
          return "uk-button-warning";
        case mt.Danger:
          return "uk-button-danger";
        case mt.Info:
          return "uk-button-info";
        case mt.Secondary:
          return "uk-button-secondary";
        case mt.Muted:
          return "uk-button-muted";
        case mt.Primary:
          return "uk-button-primary";
        default:
          return "uk-button-default";
      }
    };
    return (r, a) => {
      const u = xt("font-awesome-icon"), h = xt("UFModal");
      return R(), dt(h, {
        closable: r.closable,
        bgClose: r.bgClose,
        escClose: r.escClose
      }, oi({
        footer: gt(() => [
          z(r.$slots, "footer", {}, () => [
            r.cancelBtn ? (R(), B("button", {
              key: 0,
              class: he(["uk-button uk-modal-close", i(r.rejectSeverity)]),
              type: "button",
              onClick: a[0] || (a[0] = (f) => r.$emit("cancelled"))
            }, [
              r.rejectIcon ? (R(), dt(u, {
                key: 0,
                icon: r.rejectIcon
              }, null, 8, ["icon"])) : Q("", !0),
              pt(" " + X(r.rejectLabel), 1)
            ], 2)) : Q("", !0),
            k("button", {
              class: he(["uk-button uk-modal-close", i(r.acceptSeverity)]),
              type: "button",
              onClick: a[1] || (a[1] = (f) => r.$emit("confirmed")),
              autofocus: ""
            }, [
              r.acceptIcon ? (R(), dt(u, {
                key: 0,
                icon: r.acceptIcon
              }, null, 8, ["icon"])) : Q("", !0),
              pt(" " + X(r.acceptLabel), 1)
            ], 2)
          ])
        ]),
        default: gt(() => [
          z(r.$slots, "default", {}, () => [
            k("div", Ep, [
              r.icon ? (R(), B("p", Op, [
                Ct(u, {
                  icon: r.icon,
                  class: "uk-text-warning fa-4x"
                }, null, 8, ["icon"])
              ])) : Q("", !0),
              z(r.$slots, "prompt", {}, () => [
                pt(X(r.prompt), 1)
              ])
            ])
          ])
        ]),
        _: 2
      }, [
        r.title || r.$slots.header ? {
          name: "header",
          fn: gt(() => [
            z(r.$slots, "header", {}, () => [
              pt(X(r.title), 1)
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["closable", "bgClose", "escClose"]);
    };
  }
}), Cp = {
  class: "uk-form-label",
  for: "prompt-text"
}, Pp = { class: "uk-form-controls" }, Ap = ["placeholder"], Rp = /* @__PURE__ */ st({
  __name: "UFModalPrompt",
  props: /* @__PURE__ */ sp({
    btnLabel: {
      type: String,
      default: "Ok"
    },
    title: {
      type: [String, null],
      default: ""
    },
    prompt: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const i = ip(s, "modelValue"), r = op("ok-btn");
    function a() {
      r.value && r.value.click();
    }
    return (u, h) => {
      const f = xt("UFModal");
      return R(), dt(f, null, oi({
        footer: gt(() => [
          z(u.$slots, "footer", {}, () => [
            k("button", {
              class: "uk-button uk-button-primary uk-modal-close",
              type: "button",
              tabindex: "2",
              ref: "ok-btn"
            }, X(s.btnLabel), 513)
          ])
        ]),
        default: gt(() => [
          z(u.$slots, "default", {}, () => [
            k("form", {
              class: "uk-form-stacked",
              onSubmit: h[1] || (h[1] = (g) => a())
            }, [
              k("label", Cp, X(s.prompt), 1),
              k("div", Pp, [
                jt(k("input", {
                  type: "text",
                  class: "uk-input",
                  id: "prompt-text",
                  placeholder: s.placeholder,
                  "onUpdate:modelValue": h[0] || (h[0] = (g) => i.value = g),
                  autofocus: "",
                  tabindex: "1"
                }, null, 8, Ap), [
                  [Wt, i.value]
                ])
              ])
            ], 32)
          ])
        ]),
        _: 2
      }, [
        s.title || u.$slots.header ? {
          name: "header",
          fn: gt(() => [
            z(u.$slots, "header", {}, () => [
              pt(X(s.title), 1)
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1024);
    };
  }
}), Ip = ["href"], Bp = { key: 1 }, Wo = /* @__PURE__ */ st({
  __name: "AppLink",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(s) {
    const i = s, r = ce(() => typeof i.to == "string" && i.to.startsWith("http")), a = ce(() => i.to), u = ce(() => i.to === "");
    return (h, f) => r.value ? (R(), B("a", {
      key: 0,
      href: a.value,
      target: "_blank"
    }, [
      z(h.$slots, "default", {}, () => [
        pt(X(h.label), 1)
      ])
    ], 8, Ip)) : u.value ? (R(), B("div", Bp, [
      z(h.$slots, "default", {}, () => [
        pt(X(h.label), 1)
      ])
    ])) : (R(), dt(U(rs), {
      key: 2,
      to: h.to
    }, {
      default: gt(() => [
        z(h.$slots, "default", {}, () => [
          pt(X(h.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["to"]));
  }
}), Fp = { class: "uk-card uk-card-default uk-card-body uk-card-small" }, Np = {
  class: "uk-grid-small uk-flex-middle",
  "uk-grid": ""
}, Dp = {
  key: 0,
  class: "uk-width-auto"
}, jp = ["data-uk-icon"], Up = { class: "uk-width-expand" }, Mp = {
  key: 0,
  class: "uk-margin-remove"
}, Lp = {
  key: 1,
  class: "uk-text-meta uk-text-uppercase"
}, zp = /* @__PURE__ */ st({
  __name: "InfoBox",
  props: {
    to: { default: "" },
    label: { default: null },
    value: { default: null },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(s) {
    return (i, r) => {
      const a = xt("font-awesome-icon");
      return R(), dt(Wo, {
        to: i.to,
        class: "uk-text-decoration-none"
      }, {
        default: gt(() => [
          k("div", Fp, [
            k("div", Np, [
              i.icon || i.faIcon ? (R(), B("div", Dp, [
                i.icon ? (R(), B("span", {
                  key: 0,
                  "data-uk-icon": "icon: " + i.icon + "; ratio: 2",
                  class: "uk-margin-small-right"
                }, null, 8, jp)) : Q("", !0),
                i.faIcon ? (R(), dt(a, {
                  key: 1,
                  icon: i.faIcon,
                  size: "2xl",
                  "fixed-width": ""
                }, null, 8, ["icon"])) : Q("", !0)
              ])) : Q("", !0),
              k("div", Up, [
                i.value !== null ? (R(), B("h4", Mp, X(i.value), 1)) : Q("", !0),
                i.label !== null ? (R(), B("span", Lp, X(i.label), 1)) : Q("", !0)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
}), Hp = { class: "uk-card uk-card-default uk-card-small" }, qp = {
  key: 0,
  class: "uk-card-header"
}, Wp = { "data-test": "title" }, Vp = {
  class: "uk-card-body",
  "data-test": "slot"
}, Jp = {
  key: 1,
  class: "uk-card-footer"
}, Kp = /* @__PURE__ */ st({
  __name: "CardBox",
  props: {
    title: String
  },
  setup(s) {
    return (i, r) => (R(), B("div", Hp, [
      s.title || i.$slots.header ? (R(), B("div", qp, [
        k("h4", Wp, [
          z(i.$slots, "header", {}, () => [
            pt(X(s.title), 1)
          ])
        ])
      ])) : Q("", !0),
      k("div", Vp, [
        z(i.$slots, "default")
      ]),
      i.$slots.footer ? (R(), B("div", Jp, [
        z(i.$slots, "footer")
      ])) : Q("", !0)
    ]));
  }
}), Gp = { class: "uk-flex uk-flex-center uk-flex-middle" }, Xp = { class: "uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl" }, Yp = /* @__PURE__ */ st({
  __name: "CardBoxBig",
  props: {
    title: String
  },
  setup(s) {
    return (i, r) => {
      const a = xt("UFCardBox");
      return R(), B("div", Gp, [
        k("div", Xp, [
          Ct(a, null, oi({
            default: gt(() => [
              z(i.$slots, "default")
            ]),
            _: 2
          }, [
            i.$slots.header || s.title ? {
              name: "header",
              fn: gt(() => [
                z(i.$slots, "header", {}, () => [
                  pt(X(s.title), 1)
                ])
              ]),
              key: "0"
            } : void 0,
            i.$slots.footer ? {
              name: "footer",
              fn: gt(() => [
                z(i.$slots, "footer")
              ]),
              key: "1"
            } : void 0
          ]), 1024)
        ])
      ]);
    };
  }
}), ai = (s, i) => {
  const r = s.__vccOpts || s;
  for (const [a, u] of i)
    r[a] = u;
  return r;
}, Qp = {}, Zp = {
  class: "uf-main uk-section uk-section-default uk-section-muted",
  "uk-height-viewport": "expand: true"
}, tm = {
  class: "uk-container",
  "data-test": "slot"
};
function em(s, i) {
  return R(), B("div", Zp, [
    k("div", tm, [
      z(s.$slots, "default")
    ])
  ]);
}
const nm = /* @__PURE__ */ ai(Qp, [["render", em]]), sm = { class: "uf-page-header" }, im = { class: "uk-margin-remove" }, om = {
  key: 0,
  class: "uk-text-meta uk-margin-remove"
}, rm = /* @__PURE__ */ st({
  __name: "HeaderPage",
  props: {
    title: {},
    caption: { default: "" }
  },
  setup(s) {
    return (i, r) => (R(), B("div", sm, [
      k("h3", im, X(i.title), 1),
      i.caption ? (R(), B("p", om, X(i.caption), 1)) : Q("", !0)
    ]));
  }
}), am = {}, lm = { class: "uf-main uk-section uk-section-small uk-section-muted uk-text-center" }, cm = {
  class: "uk-text-small uk-text-center",
  "data-test": "slot"
};
function um(s, i) {
  return R(), B("footer", lm, [
    i[0] || (i[0] = k("hr", null, null, -1)),
    k("p", cm, [
      z(s.$slots, "default")
    ])
  ]);
}
const hm = /* @__PURE__ */ ai(am, [["render", um]]);
var dm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fm(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Wl = { exports: {} };
/*! UIkit 3.21.13 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */
(function(s, i) {
  (function(r, a) {
    s.exports = a();
  })(dm, function() {
    const { hasOwnProperty: r, toString: a } = Object.prototype;
    function u(t, e) {
      return r.call(t, e);
    }
    const h = /\B([A-Z])/g, f = re((t) => t.replace(h, "-$1").toLowerCase()), g = /-(\w)/g, $ = re(
      (t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(g, (e, n) => n.toUpperCase())
    ), b = re((t) => t.charAt(0).toUpperCase() + t.slice(1));
    function v(t, e) {
      var n;
      return (n = t == null ? void 0 : t.startsWith) == null ? void 0 : n.call(t, e);
    }
    function P(t, e) {
      var n;
      return (n = t == null ? void 0 : t.endsWith) == null ? void 0 : n.call(t, e);
    }
    function S(t, e) {
      var n;
      return (n = t == null ? void 0 : t.includes) == null ? void 0 : n.call(t, e);
    }
    function A(t, e) {
      var n;
      return (n = t == null ? void 0 : t.findIndex) == null ? void 0 : n.call(t, e);
    }
    const { isArray: T, from: O } = Array, { assign: W } = Object;
    function M(t) {
      return typeof t == "function";
    }
    function L(t) {
      return t !== null && typeof t == "object";
    }
    function wt(t) {
      return a.call(t) === "[object Object]";
    }
    function Ut(t) {
      return L(t) && t === t.window;
    }
    function yt(t) {
      return Yt(t) === 9;
    }
    function At(t) {
      return Yt(t) >= 1;
    }
    function Xt(t) {
      return Yt(t) === 1;
    }
    function Yt(t) {
      return !Ut(t) && L(t) && t.nodeType;
    }
    function oe(t) {
      return typeof t == "boolean";
    }
    function vt(t) {
      return typeof t == "string";
    }
    function _n(t) {
      return typeof t == "number";
    }
    function pe(t) {
      return _n(t) || vt(t) && !isNaN(t - parseFloat(t));
    }
    function hs(t) {
      return !(T(t) ? t.length : L(t) && Object.keys(t).length);
    }
    function Ft(t) {
      return t === void 0;
    }
    function bi(t) {
      return oe(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function be(t) {
      const e = Number(t);
      return isNaN(e) ? !1 : e;
    }
    function Y(t) {
      return parseFloat(t) || 0;
    }
    function _t(t) {
      return t && nt(t)[0];
    }
    function nt(t) {
      return At(t) ? [t] : Array.from(t || []).filter(At);
    }
    function Re(t) {
      if (Ut(t))
        return t;
      t = _t(t);
      const e = yt(t) ? t : t == null ? void 0 : t.ownerDocument;
      return (e == null ? void 0 : e.defaultView) || window;
    }
    function En(t, e) {
      return t === e || L(t) && L(e) && Object.keys(t).length === Object.keys(e).length && sn(t, (n, o) => n === e[o]);
    }
    function wi(t, e, n) {
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
    function sr(t, e) {
      return t.slice().sort(
        ({ [e]: n = 0 }, { [e]: o = 0 }) => n > o ? 1 : o > n ? -1 : 0
      );
    }
    function Be(t, e) {
      return t.reduce(
        (n, o) => n + Y(M(e) ? e(o) : o[e]),
        0
      );
    }
    function ir(t, e) {
      const n = /* @__PURE__ */ new Set();
      return t.filter(({ [e]: o }) => n.has(o) ? !1 : n.add(o));
    }
    function yi(t, e) {
      return e.reduce((n, o) => ({ ...n, [o]: t[o] }), {});
    }
    function Mt(t, e = 0, n = 1) {
      return Math.min(Math.max(be(t) || 0, e), n);
    }
    function at() {
    }
    function ds(...t) {
      return [
        ["bottom", "top"],
        ["right", "left"]
      ].every(
        ([e, n]) => Math.min(...t.map(({ [e]: o }) => o)) - Math.max(...t.map(({ [n]: o }) => o)) > 0
      );
    }
    function fs(t, e) {
      return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function ki(t, e, n) {
      const o = e === "width" ? "height" : "width";
      return {
        [o]: t[e] ? Math.round(n * t[o] / t[e]) : t[o],
        [e]: n
      };
    }
    function or(t, e) {
      t = { ...t };
      for (const n in t)
        t = t[n] > e[n] ? ki(t, n, e[n]) : t;
      return t;
    }
    function Vc(t, e) {
      t = or(t, e);
      for (const n in t)
        t = t[n] < e[n] ? ki(t, n, e[n]) : t;
      return t;
    }
    const $i = { ratio: ki, contain: or, cover: Vc };
    function Qt(t, e, n = 0, o = !1) {
      e = nt(e);
      const { length: l } = e;
      return l ? (t = pe(t) ? be(t) : t === "next" ? n + 1 : t === "previous" ? n - 1 : t === "last" ? l - 1 : e.indexOf(_t(t)), o ? Mt(t, 0, l - 1) : (t %= l, t < 0 ? t + l : t)) : -1;
    }
    function re(t) {
      const e = /* @__PURE__ */ Object.create(null);
      return (n, ...o) => e[n] || (e[n] = t(n, ...o));
    }
    function Z(t, ...e) {
      for (const n of nt(t)) {
        const o = Fe(e).filter((l) => !q(n, l));
        o.length && n.classList.add(...o);
      }
    }
    function rt(t, ...e) {
      for (const n of nt(t)) {
        const o = Fe(e).filter((l) => q(n, l));
        o.length && n.classList.remove(...o);
      }
    }
    function ps(t, e, n) {
      n = Fe(n), e = Fe(e).filter((o) => !S(n, o)), rt(t, e), Z(t, n);
    }
    function q(t, e) {
      return [e] = Fe(e), nt(t).some((n) => n.classList.contains(e));
    }
    function Et(t, e, n) {
      const o = Fe(e);
      Ft(n) || (n = !!n);
      for (const l of nt(t))
        for (const c of o)
          l.classList.toggle(c, n);
    }
    function Fe(t) {
      return t ? T(t) ? t.map(Fe).flat() : String(t).split(" ").filter(Boolean) : [];
    }
    function N(t, e, n) {
      var o;
      if (L(e)) {
        for (const l in e)
          N(t, l, e[l]);
        return;
      }
      if (Ft(n))
        return (o = _t(t)) == null ? void 0 : o.getAttribute(e);
      for (const l of nt(t))
        M(n) && (n = n.call(l, N(l, e))), n === null ? On(l, e) : l.setAttribute(e, n);
    }
    function $e(t, e) {
      return nt(t).some((n) => n.hasAttribute(e));
    }
    function On(t, e) {
      nt(t).forEach((n) => n.removeAttribute(e));
    }
    function Nt(t, e) {
      for (const n of [e, `data-${e}`])
        if ($e(t, n))
          return N(t, n);
    }
    const Ne = typeof window < "u", Rt = Ne && document.dir === "rtl", on = Ne && "ontouchstart" in window, rn = Ne && window.PointerEvent, ae = rn ? "pointerdown" : on ? "touchstart" : "mousedown", ms = rn ? "pointermove" : on ? "touchmove" : "mousemove", xe = rn ? "pointerup" : on ? "touchend" : "mouseup", De = rn ? "pointerenter" : on ? "" : "mouseenter", an = rn ? "pointerleave" : on ? "" : "mouseleave", gs = rn ? "pointercancel" : "touchcancel", Jc = {
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
    function xi(t) {
      return nt(t).some((e) => Jc[e.tagName.toLowerCase()]);
    }
    const Kc = Ne && Element.prototype.checkVisibility || function() {
      return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
    };
    function Ot(t) {
      return nt(t).some((e) => Kc.call(e));
    }
    const Tn = "input,select,textarea,button";
    function vs(t) {
      return nt(t).some((e) => it(e, Tn));
    }
    const Cn = `${Tn},a[href],[tabindex]`;
    function bs(t) {
      return it(t, Cn);
    }
    function ct(t) {
      var e;
      return (e = _t(t)) == null ? void 0 : e.parentElement;
    }
    function Pn(t, e) {
      return nt(t).filter((n) => it(n, e));
    }
    function it(t, e) {
      return nt(t).some((n) => n.matches(e));
    }
    function An(t, e) {
      const n = [];
      for (; t = ct(t); )
        (!e || it(t, e)) && n.push(t);
      return n;
    }
    function ut(t, e) {
      t = _t(t);
      const n = t ? O(t.children) : [];
      return e ? Pn(n, e) : n;
    }
    function we(t, e) {
      return e ? nt(t).indexOf(_t(e)) : ut(ct(t)).indexOf(t);
    }
    function ln(t) {
      return t = _t(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
    }
    function Si(t) {
      if (ln(t)) {
        const { hash: e, ownerDocument: n } = _t(t), o = decodeURIComponent(e).slice(1);
        return n.getElementById(o) || n.getElementsByName(o)[0];
      }
    }
    function Lt(t, e) {
      return _i(t, rr(t, e));
    }
    function Rn(t, e) {
      return In(t, rr(t, e));
    }
    function _i(t, e) {
      return _t(cr(t, _t(e), "querySelector"));
    }
    function In(t, e) {
      return nt(cr(t, _t(e), "querySelectorAll"));
    }
    function rr(t, e = document) {
      return yt(e) || ar(t).isContextSelector ? e : e.ownerDocument;
    }
    const Gc = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, Xc = /(\([^)]*\)|[^,])+/g, ar = re((t) => {
      let e = !1;
      if (!t || !vt(t))
        return {};
      const n = [];
      for (let o of t.match(Xc))
        o = o.trim().replace(Gc, "$1 *"), e || (e = ["!", "+", "~", "-", ">"].includes(o[0])), n.push(o);
      return {
        selector: n.join(","),
        selectors: n,
        isContextSelector: e
      };
    }), Yc = /(\([^)]*\)|\S)*/, lr = re((t) => {
      t = t.slice(1).trim();
      const [e] = t.match(Yc);
      return [e, t.slice(e.length + 1)];
    });
    function cr(t, e = document, n) {
      const o = ar(t);
      if (!o.isContextSelector)
        return o.selector ? Ei(e, n, o.selector) : t;
      t = "";
      const l = o.selectors.length === 1;
      for (let c of o.selectors) {
        let d, p = e;
        if (c[0] === "!" && ([d, c] = lr(c), p = e.parentElement.closest(d), !c && l) || p && c[0] === "-" && ([d, c] = lr(c), p = p.previousElementSibling, p = it(p, d) ? p : null, !c && l))
          return p;
        if (p) {
          if (l)
            return c[0] === "~" || c[0] === "+" ? (c = `:scope > :nth-child(${we(p) + 1}) ${c}`, p = p.parentElement) : c[0] === ">" && (c = `:scope ${c}`), Ei(p, n, c);
          t += `${t ? "," : ""}${Qc(p)} ${c}`;
        }
      }
      return yt(e) || (e = e.ownerDocument), Ei(e, n, t);
    }
    function Ei(t, e, n) {
      try {
        return t[e](n);
      } catch {
        return null;
      }
    }
    function Qc(t) {
      const e = [];
      for (; t.parentNode; ) {
        const n = N(t, "id");
        if (n) {
          e.unshift(`#${Oi(n)}`);
          break;
        } else {
          let { tagName: o } = t;
          o !== "HTML" && (o += `:nth-child(${we(t) + 1})`), e.unshift(o), t = t.parentNode;
        }
      }
      return e.join(" > ");
    }
    function Oi(t) {
      return vt(t) ? CSS.escape(t) : "";
    }
    function V(...t) {
      let [e, n, o, l, c = !1] = Ti(t);
      l.length > 1 && (l = tu(l)), c != null && c.self && (l = eu(l)), o && (l = Zc(o, l));
      for (const d of n)
        for (const p of e)
          p.addEventListener(d, l, c);
      return () => Se(e, n, l, c);
    }
    function Se(...t) {
      let [e, n, , o, l = !1] = Ti(t);
      for (const c of n)
        for (const d of e)
          d.removeEventListener(c, o, l);
    }
    function kt(...t) {
      const [e, n, o, l, c = !1, d] = Ti(t), p = V(
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
      return Ci(t).every(
        (o) => o.dispatchEvent(cn(e, !0, !0, n))
      );
    }
    function cn(t, e = !0, n = !1, o) {
      return vt(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: n, detail: o })), t;
    }
    function Ti(t) {
      return t[0] = Ci(t[0]), vt(t[1]) && (t[1] = t[1].split(" ")), M(t[2]) && t.splice(2, 0, !1), t;
    }
    function Zc(t, e) {
      return (n) => {
        const o = t[0] === ">" ? In(t, n.currentTarget).reverse().find((l) => l.contains(n.target)) : n.target.closest(t);
        o && (n.current = o, e.call(this, n), delete n.current);
      };
    }
    function tu(t) {
      return (e) => T(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function eu(t) {
      return function(e) {
        if (e.target === e.currentTarget || e.target === e.current)
          return t.call(null, e);
      };
    }
    function ur(t) {
      return t && "addEventListener" in t;
    }
    function nu(t) {
      return ur(t) ? t : _t(t);
    }
    function Ci(t) {
      return T(t) ? t.map(nu).filter(Boolean) : vt(t) ? In(t) : ur(t) ? [t] : nt(t);
    }
    function ue(t) {
      return t.pointerType === "touch" || !!t.touches;
    }
    function ye(t) {
      var e, n;
      const { clientX: o, clientY: l } = ((e = t.touches) == null ? void 0 : e[0]) || ((n = t.changedTouches) == null ? void 0 : n[0]) || t;
      return { x: o, y: l };
    }
    const su = {
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
      const l = nt(t);
      for (const c of l)
        if (vt(e)) {
          if (e = ws(e), Ft(n))
            return getComputedStyle(c).getPropertyValue(e);
          c.style.setProperty(
            e,
            pe(n) && !su[e] ? `${n}px` : n || _n(n) ? n : "",
            o
          );
        } else if (T(e)) {
          const d = {};
          for (const p of e)
            d[p] = w(c, p);
          return d;
        } else if (L(e))
          for (const d in e)
            w(c, d, e[d], n);
      return l[0];
    }
    const ws = re((t) => {
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
    }), Pi = "uk-transition", Ai = "transitionend", Ri = "transitioncanceled";
    function iu(t, e, n = 400, o = "linear") {
      return n = Math.round(n), Promise.all(
        nt(t).map(
          (l) => new Promise((c, d) => {
            for (const m in e)
              w(l, m);
            const p = setTimeout(() => j(l, Ai), n);
            kt(
              l,
              [Ai, Ri],
              ({ type: m }) => {
                clearTimeout(p), rt(l, Pi), w(l, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
                }), m === Ri ? d() : c(l);
              },
              { self: !0 }
            ), Z(l, Pi), w(l, {
              transitionProperty: Object.keys(e).map(ws).join(","),
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
        j(t, Ai), await Promise.resolve();
      },
      async cancel(t) {
        j(t, Ri), await Promise.resolve();
      },
      inProgress(t) {
        return q(t, Pi);
      }
    }, Bn = "uk-animation", hr = "animationend", ys = "animationcanceled";
    function dr(t, e, n = 200, o, l) {
      return Promise.all(
        nt(t).map(
          (c) => new Promise((d, p) => {
            q(c, Bn) && j(c, ys);
            const m = [
              e,
              Bn,
              `${Bn}-${l ? "leave" : "enter"}`,
              o && `uk-transform-origin-${o}`,
              l && `${Bn}-reverse`
            ], y = setTimeout(() => j(c, hr), n);
            kt(
              c,
              [hr, ys],
              ({ type: x }) => {
                clearTimeout(y), x === ys ? p() : d(c), w(c, "animationDuration", ""), rt(c, m);
              },
              { self: !0 }
            ), w(c, "animationDuration", `${n}ms`), Z(c, m);
          })
        )
      );
    }
    const _e = {
      in: dr,
      out(t, e, n, o) {
        return dr(t, e, n, o, !0);
      },
      inProgress(t) {
        return q(t, Bn);
      },
      cancel(t) {
        j(t, ys);
      }
    };
    function ou(t) {
      if (document.readyState !== "loading") {
        t();
        return;
      }
      kt(document, "DOMContentLoaded", t);
    }
    function $t(t, ...e) {
      return e.some((n) => {
        var o;
        return ((o = t == null ? void 0 : t.tagName) == null ? void 0 : o.toLowerCase()) === n.toLowerCase();
      });
    }
    function fr(t) {
      return t = J(t), t.innerHTML = "", t;
    }
    function Ee(t, e) {
      return Ft(e) ? J(t).innerHTML : Tt(fr(t), e);
    }
    const ru = xs("prepend"), Tt = xs("append"), ks = xs("before"), $s = xs("after");
    function xs(t) {
      return function(e, n) {
        var o;
        const l = nt(vt(n) ? je(n) : n);
        return (o = J(e)) == null || o[t](...l), pr(l);
      };
    }
    function Zt(t) {
      nt(t).forEach((e) => e.remove());
    }
    function Ss(t, e) {
      for (e = _t(ks(t, e)); e.firstElementChild; )
        e = e.firstElementChild;
      return Tt(e, t), e;
    }
    function Ii(t, e) {
      return nt(
        nt(t).map(
          (n) => n.hasChildNodes() ? Ss(O(n.childNodes), e) : Tt(n, e)
        )
      );
    }
    function Fn(t) {
      nt(t).map(ct).filter((e, n, o) => o.indexOf(e) === n).forEach((e) => e.replaceWith(...e.childNodes));
    }
    const au = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function je(t) {
      const e = au.exec(t);
      if (e)
        return document.createElement(e[1]);
      const n = document.createElement("template");
      return n.innerHTML = t.trim(), pr(n.content.childNodes);
    }
    function pr(t) {
      return t.length > 1 ? t : t[0];
    }
    function Oe(t, e) {
      if (Xt(t))
        for (e(t), t = t.firstElementChild; t; )
          Oe(t, e), t = t.nextElementSibling;
    }
    function J(t, e) {
      return mr(t) ? _t(je(t)) : _i(t, e);
    }
    function ft(t, e) {
      return mr(t) ? nt(je(t)) : In(t, e);
    }
    function mr(t) {
      return vt(t) && v(t.trim(), "<");
    }
    const Ue = {
      width: ["left", "right"],
      height: ["top", "bottom"]
    };
    function D(t) {
      const e = Xt(t) ? _t(t).getBoundingClientRect() : { height: zt(t), width: _s(t), top: 0, left: 0 };
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
      e && w(t, { left: 0, top: 0 });
      const n = D(t);
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
    function Bi(t) {
      let { top: e, left: n } = et(t);
      const {
        ownerDocument: { body: o, documentElement: l },
        offsetParent: c
      } = _t(t);
      let d = c || l;
      for (; d && (d === o || d === l) && w(d, "position") === "static"; )
        d = d.parentNode;
      if (Xt(d)) {
        const p = et(d);
        e -= p.top + Y(w(d, "borderTopWidth")), n -= p.left + Y(w(d, "borderLeftWidth"));
      }
      return {
        top: e - Y(w(t, "marginTop")),
        left: n - Y(w(t, "marginLeft"))
      };
    }
    function Nn(t) {
      t = _t(t);
      const e = [t.offsetTop, t.offsetLeft];
      for (; t = t.offsetParent; )
        if (e[0] += t.offsetTop + Y(w(t, "borderTopWidth")), e[1] += t.offsetLeft + Y(w(t, "borderLeftWidth")), w(t, "position") === "fixed") {
          const n = Re(t);
          return e[0] += n.scrollY, e[1] += n.scrollX, e;
        }
      return e;
    }
    const zt = gr("height"), _s = gr("width");
    function gr(t) {
      const e = b(t);
      return (n, o) => {
        if (Ft(o)) {
          if (Ut(n))
            return n[`inner${e}`];
          if (yt(n)) {
            const l = n.documentElement;
            return Math.max(l[`offset${e}`], l[`scroll${e}`]);
          }
          return n = _t(n), o = w(n, t), o = o === "auto" ? n[`offset${e}`] : Y(o) || 0, o - un(n, t);
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
        (o) => Y(w(t, `padding-${o}`)) + Y(w(t, `border-${o}-width`))
      ) : 0;
    }
    function Es(t) {
      for (const e in Ue)
        for (const n in Ue[e])
          if (Ue[e][n] === t)
            return Ue[e][1 - n];
      return t;
    }
    function Bt(t, e = "width", n = window, o = !1) {
      return vt(t) ? Be(cu(t), (l) => {
        const c = hu(l);
        return c ? du(
          c === "vh" ? fu() : c === "vw" ? _s(Re(n)) : o ? n[`offset${b(e)}`] : D(n)[e],
          l
        ) : l;
      }) : Y(t);
    }
    const lu = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, cu = re((t) => t.toString().replace(/\s/g, "").match(lu) || []), uu = /(?:v[hw]|%)$/, hu = re((t) => (t.match(uu) || [])[0]);
    function du(t, e) {
      return t * Y(e) / 100;
    }
    let Dn, hn;
    function fu() {
      return Dn || (hn || (hn = J("<div>"), w(hn, {
        height: "100vh",
        position: "fixed"
      }), V(window, "resize", () => Dn = null)), Tt(document.body, hn), Dn = hn.clientHeight, Zt(hn), Dn);
    }
    const Te = { read: pu, write: mu, clear: gu, flush: vr }, Os = [], Ts = [];
    function pu(t) {
      return Os.push(t), Ni(), t;
    }
    function mu(t) {
      return Ts.push(t), Ni(), t;
    }
    function gu(t) {
      wr(Os, t), wr(Ts, t);
    }
    let Fi = !1;
    function vr() {
      br(Os), br(Ts.splice(0)), Fi = !1, (Os.length || Ts.length) && Ni();
    }
    function Ni() {
      Fi || (Fi = !0, queueMicrotask(vr));
    }
    function br(t) {
      let e;
      for (; e = t.shift(); )
        try {
          e();
        } catch (n) {
          console.error(n);
        }
    }
    function wr(t, e) {
      const n = t.indexOf(e);
      return ~n && t.splice(n, 1);
    }
    class yr {
      init() {
        this.positions = [];
        let e;
        this.unbind = V(document, "mousemove", (n) => e = ye(n)), this.interval = setInterval(() => {
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
        const n = D(e), { left: o, right: l, top: c, bottom: d } = n, [p] = this.positions, m = Ie(this.positions), y = [p, m];
        return fs(m, n) ? !1 : [
          [
            { x: o, y: c },
            { x: l, y: d }
          ],
          [
            { x: o, y: d },
            { x: l, y: c }
          ]
        ].some((C) => {
          const I = vu(y, C);
          return I && fs(I, n);
        });
      }
    }
    function vu([{ x: t, y: e }, { x: n, y: o }], [{ x: l, y: c }, { x: d, y: p }]) {
      const m = (p - c) * (n - t) - (d - l) * (o - e);
      if (m === 0)
        return !1;
      const y = ((d - l) * (e - c) - (p - c) * (t - l)) / m;
      return y < 0 ? !1 : { x: t + y * (n - t), y: e + y * (o - e) };
    }
    function kr(t, e, n = {}, { intersecting: o = !0 } = {}) {
      const l = new IntersectionObserver(
        o ? (c, d) => {
          c.some((p) => p.isIntersecting) && e(c, d);
        } : e,
        n
      );
      for (const c of nt(t))
        l.observe(c);
      return l;
    }
    const bu = Ne && window.ResizeObserver;
    function jn(t, e, n = { box: "border-box" }) {
      if (bu)
        return $r(ResizeObserver, t, e, n);
      const o = [V(window, "load resize", e), V(document, "loadedmetadata load", e, !0)];
      return { disconnect: () => o.map((l) => l()) };
    }
    function Di(t) {
      return { disconnect: V([window, window.visualViewport], "resize", t) };
    }
    function ji(t, e, n) {
      return $r(MutationObserver, t, e, n);
    }
    function $r(t, e, n, o) {
      const l = new t(n);
      for (const c of nt(e))
        l.observe(c, o);
      return l;
    }
    function Ui(t) {
      As(t) && Mi(t, { func: "playVideo", method: "play" }), Ps(t) && t.play().catch(at);
    }
    function Cs(t) {
      As(t) && Mi(t, { func: "pauseVideo", method: "pause" }), Ps(t) && t.pause();
    }
    function xr(t) {
      As(t) && Mi(t, { func: "mute", method: "setVolume", value: 0 }), Ps(t) && (t.muted = !0);
    }
    function Sr(t) {
      return Ps(t) || As(t);
    }
    function Ps(t) {
      return $t(t, "video");
    }
    function As(t) {
      return $t(t, "iframe") && (_r(t) || Er(t));
    }
    function _r(t) {
      return !!t.src.match(
        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
      );
    }
    function Er(t) {
      return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function Mi(t, e) {
      await yu(t), Or(t, e);
    }
    function Or(t, e) {
      t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
    }
    const Li = "_ukPlayer";
    let wu = 0;
    function yu(t) {
      if (t[Li])
        return t[Li];
      const e = _r(t), n = Er(t), o = ++wu;
      let l;
      return t[Li] = new Promise((c) => {
        e && kt(t, "load", () => {
          const d = () => Or(t, { event: "listening", id: o });
          l = setInterval(d, 100), d();
        }), kt(window, "message", c, !1, ({ data: d }) => {
          try {
            return d = JSON.parse(d), e && (d == null ? void 0 : d.id) === o && d.event === "onReady" || n && Number(d == null ? void 0 : d.player_id) === o;
          } catch {
          }
        }), t.src = `${t.src}${S(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${o}`}`;
      }).then(() => clearInterval(l));
    }
    function ku(t, e = 0, n = 0) {
      return Ot(t) ? ds(
        ...Le(t).map((o) => {
          const { top: l, left: c, bottom: d, right: p } = te(o);
          return {
            top: l - e,
            left: c - n,
            bottom: d + e,
            right: p + n
          };
        }).concat(et(t))
      ) : !1;
    }
    function Tr(t, { offset: e = 0 } = {}) {
      const n = Ot(t) ? Me(t, !1, ["hidden"]) : [];
      return n.reduce(
        (d, p, m) => {
          const { scrollTop: y, scrollHeight: x, offsetHeight: C } = p, I = te(p), F = x - I.height, { height: H, top: tt } = n[m - 1] ? te(n[m - 1]) : et(t);
          let ot = Math.ceil(tt - I.top - e + y);
          return e > 0 && C < H + e ? ot += e : e = 0, ot > F ? (e -= ot - F, ot = F) : ot < 0 && (e -= ot, ot = 0), () => o(p, ot - y, t, F).then(d);
        },
        () => Promise.resolve()
      )();
      function o(d, p, m, y) {
        return new Promise((x) => {
          const C = d.scrollTop, I = l(Math.abs(p)), F = Date.now(), H = qi(d) === d, tt = et(m).top + (H ? 0 : C);
          let ot = 0, me = 15;
          (function wn() {
            const yn = c(Mt((Date.now() - F) / I));
            let ge = 0;
            n[0] === d && C + p < y && (ge = et(m).top + (H ? 0 : d.scrollTop) - tt - D(zi(m)).height), w(d, "scrollBehavior") !== "auto" && w(d, "scrollBehavior", "auto"), d.scrollTop = C + (p + ge) * yn, w(d, "scrollBehavior", ""), yn === 1 && (ot === ge || !me--) ? x() : (ot = ge, requestAnimationFrame(wn));
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
    function Rs(t, e = 0, n = 0) {
      if (!Ot(t))
        return 0;
      const o = Ce(t, !0), { scrollHeight: l, scrollTop: c } = o, { height: d } = te(o), p = l - d, m = Nn(t)[0] - Nn(o)[0], y = Math.max(0, m - d + e), x = Math.min(p, m + t.offsetHeight - n);
      return y < x ? Mt((c - y) / (x - y)) : 1;
    }
    function Me(t, e = !1, n = []) {
      const o = qi(t);
      let l = An(t).reverse();
      l = l.slice(l.indexOf(o) + 1);
      const c = A(l, (d) => w(d, "position") === "fixed");
      return ~c && (l = l.slice(c)), [o].concat(
        l.filter(
          (d) => w(d, "overflow").split(" ").some((p) => S(["auto", "scroll", ...n], p)) && (!e || d.scrollHeight > te(d).height)
        )
      ).reverse();
    }
    function Ce(...t) {
      return Me(...t)[0];
    }
    function Le(t) {
      return Me(t, !1, ["hidden", "clip"]);
    }
    function te(t) {
      const e = Re(t), n = qi(t), o = !At(t) || t.contains(n);
      if (o && e.visualViewport) {
        let { height: m, width: y, scale: x, pageTop: C, pageLeft: I } = e.visualViewport;
        return m = Math.round(m * x), y = Math.round(y * x), { height: m, width: y, top: C, left: I, bottom: C + m, right: I + y };
      }
      let l = et(o ? e : t);
      if (w(t, "display") === "inline")
        return l;
      const { body: c, documentElement: d } = e.document, p = o ? n === d || // In quirks mode the scrolling element is body, even though the viewport is html
      n.clientHeight < c.clientHeight ? n : c : t;
      for (let [m, y, x, C] of [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
      ]) {
        const I = l[m] % 1;
        l[x] += Y(w(p, `border-${x}-width`)), l[m] = l[y] = p[`client${b(m)}`] - (I ? I < 0.5 ? -I : 1 - I : 0), l[C] = l[m] + l[x];
      }
      return l;
    }
    function zi(t) {
      const { left: e, width: n, top: o } = D(t);
      for (const l of o ? [0, o] : [0]) {
        let c;
        for (const d of Re(t).document.elementsFromPoint(e + n / 2, l))
          !d.contains(t) && // If e.g. Offcanvas is not yet closed
          !q(d, "uk-togglable-leave") && (Hi(d, "fixed") && Cr(
            An(t).reverse().find(
              (p) => !p.contains(d) && !Hi(p, "static")
            )
          ) < Cr(d) || Hi(d, "sticky") && ct(d).contains(t)) && (!c || D(c).height < D(d).height) && (c = d);
        if (c)
          return c;
      }
    }
    function Cr(t) {
      return Y(w(t, "zIndex"));
    }
    function Hi(t, e) {
      return w(t, "position") === e;
    }
    function qi(t) {
      return Re(t).document.scrollingElement;
    }
    const ee = [
      ["width", "x", "left", "right"],
      ["height", "y", "top", "bottom"]
    ];
    function Pr(t, e, n) {
      n = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...n.attach
        },
        offset: [0, 0],
        placement: [],
        ...n
      }, T(e) || (e = [e, e]), et(t, Ar(t, e, n));
    }
    function Ar(t, e, n) {
      const o = Rr(t, e, n), { boundary: l, viewportOffset: c = 0, placement: d } = n;
      let p = o;
      for (const [m, [y, , x, C]] of Object.entries(ee)) {
        const I = $u(t, e[m], c, l, m);
        if (Is(o, I, m))
          continue;
        let F = 0;
        if (d[m] === "flip") {
          const H = n.attach.target[m];
          if (H === C && o[C] <= I[C] || H === x && o[x] >= I[x])
            continue;
          F = Su(t, e, n, m)[x] - o[x];
          const tt = xu(t, e[m], c, m);
          if (!Is(Wi(o, F, m), tt, m)) {
            if (Is(o, tt, m))
              continue;
            if (n.recursion)
              return !1;
            const ot = _u(t, e, n);
            if (ot && Is(ot, tt, 1 - m))
              return ot;
            continue;
          }
        } else if (d[m] === "shift") {
          const H = et(e[m]), { offset: tt } = n;
          F = Mt(
            Mt(o[x], I[x], I[C] - o[y]),
            H[x] - o[y] + tt[m],
            H[C] - tt[m]
          ) - o[x];
        }
        p = Wi(p, F, m);
      }
      return p;
    }
    function Rr(t, e, n) {
      let { attach: o, offset: l } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...n.attach
        },
        offset: [0, 0],
        ...n
      }, c = et(t);
      for (const [d, [p, , m, y]] of Object.entries(ee)) {
        const x = o.target[d] === o.element[d] ? te(e[d]) : et(e[d]);
        c = Wi(
          c,
          x[m] - c[m] + Ir(o.target[d], y, x[p]) - Ir(o.element[d], y, c[p]) + +l[d],
          d
        );
      }
      return c;
    }
    function Wi(t, e, n) {
      const [, o, l, c] = ee[n], d = { ...t };
      return d[l] = t[o] = t[l] + e, d[c] += e, d;
    }
    function Ir(t, e, n) {
      return t === "center" ? n / 2 : t === e ? n : 0;
    }
    function $u(t, e, n, o, l) {
      let c = Fr(...Br(t, e).map(te));
      return n && (c[ee[l][2]] += n, c[ee[l][3]] -= n), o && (c = Fr(
        c,
        et(T(o) ? o[l] : o)
      )), c;
    }
    function xu(t, e, n, o) {
      const [l, c, d, p] = ee[o], [m] = Br(t, e), y = te(m);
      return ["auto", "scroll"].includes(w(m, `overflow-${c}`)) && (y[d] -= m[`scroll${b(d)}`], y[p] = y[d] + m[`scroll${b(l)}`]), y[d] += n, y[p] -= n, y;
    }
    function Br(t, e) {
      return Le(e).filter((n) => n.contains(t));
    }
    function Fr(...t) {
      let e = {};
      for (const n of t)
        for (const [, , o, l] of ee)
          e[o] = Math.max(e[o] || 0, n[o]), e[l] = Math.min(...[e[l], n[l]].filter(Boolean));
      return e;
    }
    function Is(t, e, n) {
      const [, , o, l] = ee[n];
      return t[o] >= e[o] && t[l] <= e[l];
    }
    function Su(t, e, { offset: n, attach: o }, l) {
      return Rr(t, e, {
        attach: {
          element: Nr(o.element, l),
          target: Nr(o.target, l)
        },
        offset: Eu(n, l)
      });
    }
    function _u(t, e, n) {
      return Ar(t, e, {
        ...n,
        attach: {
          element: n.attach.element.map(Dr).reverse(),
          target: n.attach.target.map(Dr).reverse()
        },
        offset: n.offset.reverse(),
        placement: n.placement.reverse(),
        recursion: !0
      });
    }
    function Nr(t, e) {
      const n = [...t], o = ee[e].indexOf(t[e]);
      return ~o && (n[e] = ee[e][1 - o % 2 + 2]), n;
    }
    function Dr(t) {
      for (let e = 0; e < ee.length; e++) {
        const n = ee[e].indexOf(t);
        if (~n)
          return ee[1 - e][n % 2 + 2];
      }
    }
    function Eu(t, e) {
      return t = [...t], t[e] *= -1, t;
    }
    var Ou = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $: J,
      $$: ft,
      Animation: _e,
      Dimensions: $i,
      MouseTracker: yr,
      Transition: ht,
      addClass: Z,
      after: $s,
      append: Tt,
      apply: Oe,
      assign: W,
      attr: N,
      before: ks,
      boxModelAdjust: un,
      camelize: $,
      children: ut,
      clamp: Mt,
      createEvent: cn,
      css: w,
      data: Nt,
      dimensions: D,
      each: sn,
      empty: fr,
      endsWith: P,
      escape: Oi,
      fastdom: Te,
      filter: Pn,
      find: _i,
      findAll: In,
      findIndex: A,
      flipPosition: Es,
      fragment: je,
      getCoveringElement: zi,
      getEventPos: ye,
      getIndex: Qt,
      getTargetedElement: Si,
      hasAttr: $e,
      hasClass: q,
      hasOwn: u,
      hasTouch: on,
      height: zt,
      html: Ee,
      hyphenate: f,
      inBrowser: Ne,
      includes: S,
      index: we,
      intersectRect: ds,
      isArray: T,
      isBoolean: oe,
      isDocument: yt,
      isElement: Xt,
      isEmpty: hs,
      isEqual: En,
      isFocusable: bs,
      isFunction: M,
      isInView: ku,
      isInput: vs,
      isNode: At,
      isNumber: _n,
      isNumeric: pe,
      isObject: L,
      isPlainObject: wt,
      isRtl: Rt,
      isSameSiteAnchor: ln,
      isString: vt,
      isTag: $t,
      isTouch: ue,
      isUndefined: Ft,
      isVideo: Sr,
      isVisible: Ot,
      isVoidElement: xi,
      isWindow: Ut,
      last: Ie,
      matches: it,
      memoize: re,
      mute: xr,
      noop: at,
      observeIntersection: kr,
      observeMutation: ji,
      observeResize: jn,
      observeViewportResize: Di,
      off: Se,
      offset: et,
      offsetPosition: Nn,
      offsetViewport: te,
      on: V,
      once: kt,
      overflowParents: Le,
      parent: ct,
      parents: An,
      pause: Cs,
      pick: yi,
      play: Ui,
      pointInRect: fs,
      pointerCancel: gs,
      pointerDown: ae,
      pointerEnter: De,
      pointerLeave: an,
      pointerMove: ms,
      pointerUp: xe,
      position: Bi,
      positionAt: Pr,
      prepend: ru,
      propName: ws,
      query: Lt,
      queryAll: Rn,
      ready: ou,
      remove: Zt,
      removeAttr: On,
      removeClass: rt,
      replaceClass: ps,
      scrollIntoView: Tr,
      scrollParent: Ce,
      scrollParents: Me,
      scrolledOver: Rs,
      selFocusable: Cn,
      selInput: Tn,
      sortBy: sr,
      startsWith: v,
      sumBy: Be,
      swap: wi,
      toArray: O,
      toBoolean: bi,
      toEventTargets: Ci,
      toFloat: Y,
      toNode: _t,
      toNodes: nt,
      toNumber: be,
      toPx: Bt,
      toWindow: Re,
      toggleClass: Et,
      trigger: j,
      ucfirst: b,
      uniqueBy: ir,
      unwrap: Fn,
      width: _s,
      wrapAll: Ss,
      wrapInner: Ii
    }), Ht = {
      connected() {
        Z(this.$el, this.$options.id);
      }
    };
    const Tu = ["days", "hours", "minutes", "seconds"];
    var Cu = {
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
        N(this.$el, "role", this.role), this.date = Y(Date.parse(this.$props.date)), this.end = !1, this.start();
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
          const t = Pu(this.date);
          t.total || (this.stop(), this.end || (j(this.$el, "countdownend"), this.end = !0));
          for (const e of Tu) {
            const n = J(this.clsWrapper.replace("%unit%", e), this.$el);
            if (!n)
              continue;
            let o = Math.trunc(t[e]).toString().padStart(2, "0");
            n.textContent !== o && (o = o.split(""), o.length !== n.children.length && Ee(n, o.map(() => "<span></span>").join("")), o.forEach((l, c) => n.children[c].textContent = l));
          }
        }
      }
    };
    function Pu(t) {
      const e = Math.max(0, t - Date.now()) / 1e3;
      return {
        total: e,
        seconds: e % 60,
        minutes: e / 60 % 60,
        hours: e / 60 / 60 % 24,
        days: e / 60 / 60 / 24
      };
    }
    const It = {};
    It.events = It.watch = It.observe = It.created = It.beforeConnect = It.connected = It.beforeDisconnect = It.disconnected = It.destroy = Vi, It.args = function(t, e) {
      return e !== !1 && Vi(e || t);
    }, It.update = function(t, e) {
      return sr(
        Vi(t, M(e) ? { read: e } : e),
        "order"
      );
    }, It.props = function(t, e) {
      if (T(e)) {
        const n = {};
        for (const o of e)
          n[o] = String;
        e = n;
      }
      return It.methods(t, e);
    }, It.computed = It.methods = function(t, e) {
      return e ? t ? { ...t, ...e } : e : t;
    }, It.i18n = It.data = function(t, e, n) {
      return n ? jr(t, e, n) : e ? t ? function(o) {
        return jr(t, e, o);
      } : e : t;
    };
    function jr(t, e, n) {
      return It.computed(
        M(t) ? t.call(n, n) : t,
        M(e) ? e.call(n, n) : e
      );
    }
    function Vi(t, e) {
      return t = t && !T(t) ? [t] : t, e ? t ? t.concat(e) : T(e) ? e : [e] : t;
    }
    function Au(t, e) {
      return Ft(e) ? t : e;
    }
    function Un(t, e, n) {
      const o = {};
      if (M(e) && (e = e.options), e.extends && (t = Un(t, e.extends, n)), e.mixins)
        for (const c of e.mixins)
          t = Un(t, c, n);
      for (const c in t)
        l(c);
      for (const c in e)
        u(t, c) || l(c);
      function l(c) {
        o[c] = (It[c] || Au)(t[c], e[c], n);
      }
      return o;
    }
    function dn(t, e = []) {
      try {
        return t ? v(t, "{") ? JSON.parse(t) : e.length && !S(t, ":") ? { [e[0]]: t } : t.split(";").reduce((n, o) => {
          const [l, c] = o.split(/:(.*)/);
          return l && !Ft(c) && (n[l.trim()] = c.trim()), n;
        }, {}) : {};
      } catch {
        return {};
      }
    }
    function Ji(t, e) {
      return t === Boolean ? bi(e) : t === Number ? be(e) : t === "list" ? Iu(e) : t === Object && vt(e) ? dn(e) : t ? t(e) : e;
    }
    const Ru = /,(?![^(]*\))/;
    function Iu(t) {
      return T(t) ? t : vt(t) ? t.split(Ru).map((e) => pe(e) ? be(e) : bi(e.trim())) : [t];
    }
    function Bu(t) {
      t._data = {}, t._updates = [...t.$options.update || []], t._disconnect.push(() => t._updates = t._data = null);
    }
    function Fu(t, e) {
      t._updates.unshift(e);
    }
    function Mn(t, e = "update") {
      t._connected && t._updates.length && (t._queued || (t._queued = /* @__PURE__ */ new Set(), Te.read(() => {
        t._connected && Nu(t, t._queued), t._queued = null;
      })), t._queued.add(e.type || e));
    }
    function Nu(t, e) {
      for (const { read: n, write: o, events: l = [] } of t._updates) {
        if (!e.has("update") && !l.some((d) => e.has(d)))
          continue;
        let c;
        n && (c = n.call(t, t._data, e), c && wt(c) && W(t._data, c)), o && c !== !1 && Te.write(() => {
          t._connected && o.call(t, t._data, e);
        });
      }
    }
    function le(t) {
      return zn(jn, t, "resize");
    }
    function fn(t) {
      return zn(kr, t);
    }
    function Bs(t) {
      return zn(ji, t);
    }
    function Fs(t = {}) {
      return fn({
        handler: function(e, n) {
          const { targets: o = this.$el, preload: l = 5 } = t;
          for (const c of nt(M(o) ? o(this) : o))
            ft('[loading="lazy"]', c).slice(0, l - 1).forEach((d) => On(d, "loading"));
          for (const c of e.filter(({ isIntersecting: d }) => d).map(({ target: d }) => d))
            n.unobserve(c);
        },
        ...t
      });
    }
    function Ki(t) {
      return zn((e, n) => Di(n), t, "resize");
    }
    function Ln(t) {
      return zn(
        (e, n) => ({
          disconnect: V(ju(e), "scroll", n, { passive: !0 })
        }),
        t,
        "scroll"
      );
    }
    function Ur(t) {
      return {
        observe(e, n) {
          return {
            observe: at,
            unobserve: at,
            disconnect: V(e, ae, n, { passive: !0 })
          };
        },
        handler(e) {
          if (!ue(e))
            return;
          const n = ye(e), o = "tagName" in e.target ? e.target : ct(e.target);
          kt(document, `${xe} ${gs} scroll`, (l) => {
            const { x: c, y: d } = ye(l);
            (l.type !== "scroll" && o && c && Math.abs(n.x - c) > 100 || d && Math.abs(n.y - d) > 100) && setTimeout(() => {
              j(o, "swipe"), j(o, `swipe${Du(n.x, n.y, c, d)}`);
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
          Mn(this, n);
        },
        ...e
      };
    }
    function Du(t, e, n, o) {
      return Math.abs(t - n) >= Math.abs(e - o) ? t - n > 0 ? "Left" : "Right" : e - o > 0 ? "Up" : "Down";
    }
    function ju(t) {
      return nt(t).map((e) => {
        const { ownerDocument: n } = e, o = Ce(e, !0);
        return o === n.scrollingElement ? n : o;
      });
    }
    var Mr = {
      props: {
        margin: String,
        firstColumn: Boolean
      },
      data: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column"
      },
      observe: [
        Bs({
          options: {
            childList: !0
          }
        }),
        Bs({
          options: {
            attributes: !0,
            attributeFilter: ["style"]
          },
          target: ({ $el: t }) => [t, ...ut(t)]
        }),
        le({
          target: ({ $el: t }) => [t, ...ut(t)]
        })
      ],
      update: {
        read() {
          return {
            rows: Gi(ut(this.$el))
          };
        },
        write({ rows: t }) {
          for (const e of t)
            for (const n of e)
              Et(n, this.margin, t[0] !== e), Et(n, this.firstColumn, e[Rt ? e.length - 1 : 0] === n);
        },
        events: ["resize"]
      }
    };
    function Gi(t) {
      const e = [[]], n = t.some(
        (o, l) => l && t[l - 1].offsetParent !== o.offsetParent
      );
      for (const o of t) {
        if (!Ot(o))
          continue;
        const l = Xi(o, n);
        for (let c = e.length - 1; c >= 0; c--) {
          const d = e[c];
          if (!d[0]) {
            d.push(o);
            break;
          }
          const p = Xi(d[0], n);
          if (l.top >= p.bottom - 1 && l.top !== p.top) {
            e.push([o]);
            break;
          }
          if (l.bottom - 1 > p.top || l.top === p.top) {
            let m = d.length - 1;
            for (; m >= 0; m--) {
              const y = Xi(d[m], n);
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
    function Xi(t, e = !1) {
      let { offsetTop: n, offsetLeft: o, offsetHeight: l, offsetWidth: c } = t;
      return e && ([n, o] = Nn(t)), {
        top: n,
        left: o,
        bottom: n + l,
        right: o + c
      };
    }
    async function Uu(t, e, n) {
      await Yi();
      let o = ut(e);
      const l = o.map((F) => Lr(F, !0)), c = { ...w(e, ["height", "padding"]), display: "block" }, d = o.concat(e);
      await Promise.all(d.map(ht.cancel)), w(d, "transitionProperty", "none"), await t(), o = o.concat(ut(e).filter((F) => !S(o, F))), await Promise.resolve(), w(d, "transitionProperty", "");
      const p = N(e, "style"), m = w(e, ["height", "padding"]), [y, x] = Mu(e, o, l), C = o.map((F) => ({ style: N(F, "style") }));
      o.forEach((F, H) => x[H] && w(F, x[H])), w(e, c), j(e, "scroll"), await Yi();
      const I = o.map((F, H) => ct(F) === e && ht.start(F, y[H], n, "ease")).concat(ht.start(e, m, n, "ease"));
      try {
        await Promise.all(I), o.forEach((F, H) => {
          N(F, C[H]), ct(F) === e && w(F, "display", y[H].opacity === 0 ? "none" : "");
        }), N(e, "style", p);
      } catch {
        N(o, "style", ""), Lu(e, c);
      }
    }
    function Lr(t, e) {
      const n = w(t, "zIndex");
      return Ot(t) ? {
        display: "",
        opacity: e ? w(t, "opacity") : "0",
        pointerEvents: "none",
        position: "absolute",
        zIndex: n === "auto" ? we(t) : n,
        ...zr(t)
      } : !1;
    }
    function Mu(t, e, n) {
      const o = e.map(
        (c, d) => ct(c) && d in n ? n[d] ? Ot(c) ? zr(c) : { opacity: 0 } : { opacity: Ot(c) ? 1 : 0 } : !1
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
    function Lu(t, e) {
      for (const n in e)
        w(t, n, "");
    }
    function zr(t) {
      const { height: e, width: n } = D(t);
      return {
        height: e,
        width: n,
        transform: "",
        ...Bi(t),
        ...w(t, ["marginTop", "marginLeft"])
      };
    }
    function Yi() {
      return new Promise((t) => requestAnimationFrame(t));
    }
    const Qi = "uk-transition-leave", Zi = "uk-transition-enter";
    function Hr(t, e, n, o = 0) {
      const l = Ns(e, !0), c = { opacity: 1 }, d = { opacity: 0 }, p = (x) => () => l === Ns(e) ? x() : Promise.reject(), m = p(async () => {
        Z(e, Qi), await Promise.all(
          Wr(e).map(
            (x, C) => new Promise(
              (I) => setTimeout(
                () => ht.start(x, d, n / 2, "ease").then(
                  I
                ),
                C * o
              )
            )
          )
        ), rt(e, Qi);
      }), y = p(async () => {
        const x = zt(e);
        Z(e, Zi), t(), w(ut(e), { opacity: 0 }), await Yi();
        const C = ut(e), I = zt(e);
        w(e, "alignContent", "flex-start"), zt(e, x);
        const F = Wr(e);
        w(C, d);
        const H = F.map(async (tt, ot) => {
          await zu(ot * o), await ht.start(tt, c, n / 2, "ease");
        });
        x !== I && H.push(
          ht.start(
            e,
            { height: I },
            n / 2 + F.length * o,
            "ease"
          )
        ), await Promise.all(H).then(() => {
          rt(e, Zi), l === Ns(e) && (w(e, { height: "", alignContent: "" }), w(C, { opacity: "" }), delete e.dataset.transition);
        });
      });
      return q(e, Qi) ? qr(e).then(y) : q(e, Zi) ? qr(e).then(m).then(y) : m().then(y);
    }
    function Ns(t, e) {
      return e && (t.dataset.transition = 1 + Ns(t)), be(t.dataset.transition) || 0;
    }
    function qr(t) {
      return Promise.all(
        ut(t).filter(ht.inProgress).map(
          (e) => new Promise((n) => kt(e, "transitionend transitioncanceled", n))
        )
      );
    }
    function Wr(t) {
      return Gi(ut(t)).flat().filter(Ot);
    }
    function zu(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    var Vr = {
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
          return (n === "fade" ? Hr : n === "delayed-fade" ? (...l) => Hr(...l, 40) : n ? Uu : () => (t(), Promise.resolve()))(t, e, this.duration).catch(at);
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
    var Hu = {
      mixins: [Vr],
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
            this.selActive !== !1 && Et(n, this.cls, S(e, n));
            const o = Ku(n);
            $t(o, "a") && N(o, "role", "button");
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
          const e = this.getState(), n = Kr(t, this.attrItem, this.getState());
          qu(e, n) || this.setState(n);
        },
        getState() {
          return this.toggles.filter((t) => q(t, this.cls)).reduce((t, e) => Kr(e, this.attrItem, t), {
            filter: { "": "" },
            sort: []
          });
        },
        async setState(t, e = !0) {
          t = { filter: { "": "" }, sort: [], ...t }, j(this.$el, "beforeFilter", [this, t]);
          for (const n of this.toggles)
            Et(n, this.cls, Vu(n, this.attrItem, t));
          await Promise.all(
            ft(this.target, this.$el).map((n) => {
              const o = () => Wu(t, n, ut(n));
              return e ? this.animate(o, n) : o();
            })
          ), j(this.$el, "afterFilter", [this]);
        },
        updateState() {
          Te.write(() => this.setState(this.getState(), !1));
        }
      }
    };
    function Jr(t, e) {
      return dn(Nt(t, e), ["filter"]);
    }
    function qu(t, e) {
      return ["filter", "sort"].every((n) => En(t[n], e[n]));
    }
    function Wu(t, e, n) {
      for (const c of n)
        w(
          c,
          "display",
          Object.values(t.filter).every((d) => !d || it(c, d)) ? "" : "none"
        );
      const [o, l] = t.sort;
      if (o) {
        const c = Ju(n, o, l);
        En(c, n) || Tt(e, c);
      }
    }
    function Kr(t, e, n) {
      const { filter: o, group: l, sort: c, order: d = "asc" } = Jr(t, e);
      return (o || Ft(c)) && (l ? o ? (delete n.filter[""], n.filter[l] = o) : (delete n.filter[l], (hs(n.filter) || "" in n.filter) && (n.filter = { "": o || "" })) : n.filter = { "": o || "" }), Ft(c) || (n.sort = [c, d]), n;
    }
    function Vu(t, e, { filter: n = { "": "" }, sort: [o, l] }) {
      const { filter: c = "", group: d = "", sort: p, order: m = "asc" } = Jr(t, e);
      return Ft(p) ? d in n && c === n[d] || !c && d && !(d in n) && !n[""] : o === p && l === m;
    }
    function Ju(t, e, n) {
      return [...t].sort(
        (o, l) => Nt(o, e).localeCompare(Nt(l, e), void 0, { numeric: !0 }) * (n === "asc" || -1)
      );
    }
    function Ku(t) {
      return J("a,button", t) || t;
    }
    let to;
    function Gr(t) {
      const e = V(
        t,
        "touchstart",
        (o) => {
          if (o.targetTouches.length !== 1 || it(o.target, 'input[type="range"'))
            return;
          let l = ye(o).y;
          const c = V(
            t,
            "touchmove",
            (d) => {
              const p = ye(d).y;
              p !== l && (l = p, Me(d.target).some((m) => {
                if (!t.contains(m))
                  return !1;
                let { scrollHeight: y, clientHeight: x } = m;
                return x < y;
              }) || d.preventDefault());
            },
            { passive: !1 }
          );
          kt(t, "scroll touchend touchcanel", c, { capture: !0 });
        },
        { passive: !0 }
      );
      if (to)
        return e;
      to = !0;
      const { scrollingElement: n } = document;
      return w(n, {
        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
        touchAction: "none",
        paddingRight: _s(window) - n.clientWidth || ""
      }), () => {
        to = !1, e(), w(n, { overflowY: "", touchAction: "", paddingRight: "" });
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
          return t === !0 && this.$container || t && J(t);
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
              nt(t).map((o) => {
                const l = oe(e) ? e : !this.isToggled(o);
                if (!j(o, `before${l ? "show" : "hide"}`, [this]))
                  return Promise.reject();
                const c = (M(n) ? n : n === !1 || !this.hasAnimation ? Gu : this.hasTransition ? Xu : Yu)(o, l, this), d = l ? this.clsEnter : this.clsLeave;
                Z(o, d), j(o, l ? "show" : "hide", [this]);
                const p = () => {
                  rt(o, d), j(o, l ? "shown" : "hidden", [this]);
                };
                return c ? c.then(p, () => (rt(o, d), Promise.reject())) : p();
              })
            ), !0;
          } catch {
            return !1;
          }
        },
        isToggled(t = this.$el) {
          return t = _t(t), q(t, this.clsEnter) ? !0 : q(t, this.clsLeave) ? !1 : this.cls ? q(t, this.cls.split(" ")[0]) : Ot(t);
        },
        _toggle(t, e) {
          if (!t)
            return;
          e = !!e;
          let n;
          this.cls ? (n = S(this.cls, " ") || e !== q(t, this.cls), n && Et(t, this.cls, S(this.cls, " ") ? void 0 : e)) : (n = e === t.hidden, n && (t.hidden = !e)), n && j(t, "toggled", [e, this]), ft("[autofocus]", t).some((o) => Ot(o) ? o.focus() || !0 : o.blur());
        }
      }
    };
    function Gu(t, e, { _toggle: n }) {
      return _e.cancel(t), ht.cancel(t), n(t, e);
    }
    async function Xu(t, e, { animation: n, duration: o, velocity: l, transition: c, _toggle: d }) {
      var p;
      const [m = "reveal", y = "top"] = ((p = n[0]) == null ? void 0 : p.split("-")) || [], x = [
        ["left", "right"],
        ["top", "bottom"]
      ], C = x[S(x[0], y) ? 0 : 1], I = C[1] === y, H = ["width", "height"][x.indexOf(C)], tt = `margin-${C[0]}`, ot = `margin-${y}`;
      let me = D(t)[H];
      const wn = ht.inProgress(t);
      await ht.cancel(t), e && d(t, !0);
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
          tt,
          ot
        ].map((ml) => [ml, t.style[ml]])
      ), ge = D(t), wo = Y(w(t, tt)), dl = Y(w(t, ot)), Ge = ge[H] + dl;
      !wn && !e && (me += dl);
      const [Xs] = Ii(t, "<div>");
      w(Xs, {
        boxSizing: "border-box",
        height: ge.height,
        width: ge.width,
        ...w(t, [
          "overflow",
          "padding",
          "borderTop",
          "borderRight",
          "borderBottom",
          "borderLeft",
          "borderImage",
          ot
        ])
      }), w(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [ot]: 0,
        width: ge.width,
        height: ge.height,
        overflow: "hidden",
        [H]: me
      });
      const fl = me / Ge;
      o = (l * Ge + o) * (e ? 1 - fl : fl);
      const pl = { [H]: e ? Ge : 0 };
      I && (w(t, tt, Ge - me + wo), pl[tt] = e ? wo : Ge + wo), !I ^ m === "reveal" && (w(Xs, tt, -Ge + me), ht.start(Xs, { [tt]: e ? 0 : -Ge }, o, c));
      try {
        await ht.start(t, pl, o, c);
      } finally {
        w(t, yn), Fn(Xs.firstChild), e || d(t, !1);
      }
    }
    function Yu(t, e, n) {
      const { animation: o, duration: l, _toggle: c } = n;
      return e ? (c(t, !0), _e.in(t, o[0], l, n.origin)) : _e.out(t, o[1] || o[0], l, n.origin).then(
        () => c(t, !1)
      );
    }
    const qt = [];
    var eo = {
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
        panel: ({ selPanel: t }, e) => J(t, e),
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
        S(qt, this) && this.toggleElement(this.$el, !1, !1);
      },
      events: [
        {
          name: "click",
          delegate: ({ selClose: t }) => `${t},a[href*="#"]`,
          handler(t) {
            const { current: e, defaultPrevented: n } = t, { hash: o } = e;
            !n && o && ln(e) && !this.$el.contains(J(o)) ? this.hide() : it(e, this.selClose) && (t.preventDefault(), this.hide());
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
            this.stack && w(this.$el, "zIndex", Y(w(this.$el, "zIndex")) + qt.length);
            const t = [
              this.overlay && Zu(this),
              this.overlay && Gr(this.$el),
              this.bgClose && th(this),
              this.escClose && eh(this)
            ];
            kt(
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
            bs(this.$el) || N(this.$el, "tabindex", "-1"), it(this.$el, ":focus-within") || this.$el.focus();
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            S(qt, this) && qt.splice(qt.indexOf(this), 1), w(this.$el, "zIndex", ""), qt.some((t) => t.clsPage === this.clsPage) || rt(document.documentElement, this.clsPage);
          }
        }
      ],
      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },
        show() {
          return this.container && ct(this.$el) !== this.container ? (Tt(this.container, this.$el), new Promise(
            (t) => requestAnimationFrame(() => this.show().then(t))
          )) : this.toggleElement(this.$el, !0, Xr);
        },
        hide() {
          return this.toggleElement(this.$el, !1, Xr);
        }
      }
    };
    function Xr(t, e, { transitionElement: n, _toggle: o }) {
      return new Promise(
        (l, c) => kt(t, "show hide", () => {
          var d;
          (d = t._reject) == null || d.call(t), t._reject = c, o(t, e);
          const p = kt(
            n,
            "transitionstart",
            () => {
              kt(n, "transitionend transitioncancel", l, {
                self: !0
              }), clearTimeout(m);
            },
            { self: !0 }
          ), m = setTimeout(
            () => {
              p(), l();
            },
            Qu(w(n, "transitionDuration"))
          );
        })
      ).then(() => delete t._reject);
    }
    function Qu(t) {
      return t ? P(t, "ms") ? Y(t) : Y(t) * 1e3 : 0;
    }
    function Zu(t) {
      return V(document, "focusin", (e) => {
        Ie(qt) === t && !t.$el.contains(e.target) && t.$el.focus();
      });
    }
    function th(t) {
      return V(document, ae, ({ target: e }) => {
        Ie(qt) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || kt(
          document,
          `${xe} ${gs} scroll`,
          ({ defaultPrevented: n, type: o, target: l }) => {
            !n && o === xe && e === l && t.hide();
          },
          !0
        );
      });
    }
    function eh(t) {
      return V(document, "keydown", (e) => {
        e.keyCode === 27 && Ie(qt) === t && t.hide();
      });
    }
    var no = {
      slide: {
        show(t) {
          return [{ transform: St(t * -100) }, { transform: St() }];
        },
        percent(t) {
          return qn(t);
        },
        translate(t, e) {
          return [
            { transform: St(e * -100 * t) },
            { transform: St(e * 100 * (1 - t)) }
          ];
        }
      }
    };
    function qn(t) {
      return Math.abs(new DOMMatrix(w(t, "transform")).m41 / t.offsetWidth);
    }
    function St(t = 0, e = "%") {
      return t += t ? e : "", `translate3d(${t}, 0, 0)`;
    }
    function pn(t) {
      return `scale3d(${t}, ${t}, 1)`;
    }
    function nh(t, e, n, { animation: o, easing: l }) {
      const { percent: c, translate: d, show: p = at } = o, m = p(n), { promise: y, resolve: x } = Yr();
      return {
        dir: n,
        show(C, I = 0, F) {
          const H = F ? "linear" : l;
          return C -= Math.round(C * Mt(I, -1, 1)), this.translate(I), He(e, "itemin", { percent: I, duration: C, timing: H, dir: n }), He(t, "itemout", { percent: 1 - I, duration: C, timing: H, dir: n }), Promise.all([
            ht.start(e, m[1], C, H),
            ht.start(t, m[0], C, H)
          ]).then(() => {
            this.reset(), x();
          }, at), y;
        },
        cancel() {
          return ht.cancel([e, t]);
        },
        reset() {
          for (const C in m[0])
            w([e, t], C, "");
        },
        async forward(C, I = this.percent()) {
          return await this.cancel(), this.show(C, I, !0);
        },
        translate(C) {
          this.reset();
          const I = d(C, n);
          w(e, I[1]), w(t, I[0]), He(e, "itemtranslatein", { percent: C, dir: n }), He(t, "itemtranslateout", { percent: 1 - C, dir: n });
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
    function Yr() {
      let t;
      return { promise: new Promise((e) => t = e), resolve: t };
    }
    var Ds = {
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
    }, sh = {
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
            this.stack.length || this.draggable && it(this.$el, ":focus-within") && !it(this.$el, ":focus") || this.pauseOnHover && it(this.$el, ":hover") || this.show("next");
          }, this.autoplayInterval);
        },
        stopAutoplay() {
          clearInterval(this.interval);
        }
      }
    };
    const Wn = { passive: !1, capture: !0 }, Qr = { passive: !0, capture: !0 }, ih = "touchstart mousedown", so = "touchmove mousemove", Zr = "touchend touchcancel mouseup click input scroll", ta = (t) => t.preventDefault();
    var oh = {
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
            const o = ye(n).x * (Rt ? -1 : 1);
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
            !this.draggable || this.parallax || !ue(t) && rh(t.target) || t.target.closest(Tn) || t.button > 0 || this.length < 2 || this.start(t);
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
          name: so,
          el: ({ list: t }) => t,
          handler: at,
          ...Wn
        }
      ],
      methods: {
        start() {
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, V(document, so, this.move, Wn), V(document, Zr, this.end, Qr), w(this.list, "userSelect", "none");
        },
        move(t) {
          const e = this.pos - this.drag;
          if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
            return;
          this.dragging || V(this.list, "click", ta, Wn), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
          let { slides: n, prevIndex: o } = this, l = Math.abs(e), c = this.getIndex(o + this.dir), d = ea.call(this, o, c);
          for (; c !== o && l > d; )
            this.drag -= d * this.dir, o = c, l -= d, c = this.getIndex(o + this.dir), d = ea.call(this, o, c);
          this.percent = l / d;
          const p = n[o], m = n[c], y = this.index !== c, x = o === c;
          let C;
          for (const I of [this.index, this.prevIndex])
            S([c, o], I) || (j(n[I], "itemhidden", [this]), x && (C = !0, this.prevIndex = o));
          (this.index === o && this.prevIndex !== o || C) && j(n[this.index], "itemshown", [this]), y && (this.prevIndex = o, this.index = c, x || (j(p, "beforeitemhide", [this]), j(p, "itemhide", [this])), j(m, "beforeitemshow", [this]), j(m, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), p, !x && m);
        },
        end() {
          if (Se(document, so, this.move, Wn), Se(document, Zr, this.end, Qr), this.dragging)
            if (this.dragging = null, this.index === this.prevIndex)
              this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
            else {
              const t = (Rt ? this.dir * (Rt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
              this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(
                this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous",
                !0
              );
            }
          setTimeout(() => Se(this.list, "click", ta, Wn)), w(this.list, { userSelect: "" }), this.drag = this.percent = null;
        }
      }
    };
    function ea(t, e) {
      return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
    }
    function rh(t) {
      return w(t, "userSelect") !== "none" && O(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
    }
    function ah(t) {
      t._watches = [];
      for (const e of t.$options.watch || [])
        for (const [n, o] of Object.entries(e))
          na(t, o, n);
      t._initial = !0;
    }
    function na(t, e, n) {
      t._watches.push({
        name: n,
        ...wt(e) ? e : { handler: e }
      });
    }
    function lh(t, e) {
      for (const { name: n, handler: o, immediate: l = !0 } of t._watches)
        (t._initial && l || u(e, n) && !En(e[n], t[n])) && o.call(t, t[n], e[n]);
      t._initial = !1;
    }
    function ch(t) {
      const { computed: e } = t.$options;
      if (t._computed = {}, e)
        for (const n in e)
          ia(t, n, e[n]);
    }
    const sa = { subtree: !0, childList: !0 };
    function ia(t, e, n) {
      t._hasComputed = !0, Object.defineProperty(t, e, {
        enumerable: !0,
        get() {
          const { _computed: o, $props: l, $el: c } = t;
          if (!u(o, e) && (o[e] = (n.get || n).call(t, l, c), n.observe && t._computedObserver)) {
            const d = n.observe.call(t, l);
            t._computedObserver.observe(
              ["~", "+", "-"].includes(d[0]) ? c.parentElement : c.getRootNode(),
              sa
            );
          }
          return o[e];
        },
        set(o) {
          const { _computed: l } = t;
          l[e] = n.set ? n.set.call(t, o) : o, Ft(l[e]) && delete l[e];
        }
      });
    }
    function uh(t) {
      t._hasComputed && (Fu(t, {
        read: () => lh(t, oa(t)),
        events: ["resize", "computed"]
      }), t._computedObserver = ji(
        t.$el,
        () => Mn(t, "computed"),
        sa
      ), t._disconnect.push(() => {
        t._computedObserver.disconnect(), t._computedObserver = null, oa(t);
      }));
    }
    function oa(t) {
      const e = { ...t._computed };
      return t._computed = {}, e;
    }
    function hh(t) {
      for (const e of t.$options.events || [])
        if (u(e, "handler"))
          ra(t, e);
        else
          for (const n in e)
            ra(t, e[n], n);
    }
    function ra(t, e, n) {
      let { name: o, el: l, handler: c, capture: d, passive: p, delegate: m, filter: y, self: x } = wt(e) ? e : { name: n, handler: e };
      l = M(l) ? l.call(t, t) : l || t.$el, !(!l || T(l) && !l.length || y && !y.call(t, t)) && t._disconnect.push(
        V(
          l,
          o,
          m ? vt(m) ? m : m.call(t, t) : null,
          vt(c) ? t[c] : c.bind(t),
          { passive: p, capture: d, self: x }
        )
      );
    }
    function dh(t) {
      for (const e of t.$options.observe || [])
        fh(t, e);
    }
    function fh(t, e) {
      let { observe: n, target: o = t.$el, handler: l, options: c, filter: d, args: p } = e;
      if (d && !d.call(t, t))
        return;
      const m = `_observe${t._disconnect.length}`;
      M(o) && !u(t, m) && ia(t, m, () => {
        const C = o.call(t, t);
        return T(C) ? nt(C) : C;
      }), l = vt(l) ? t[l] : l.bind(t), M(c) && (c = c.call(t, t));
      const y = u(t, m) ? t[m] : o, x = n(y, l, c, p);
      M(o) && T(t[m]) && na(
        t,
        { handler: ph(x, c), immediate: !1 },
        m
      ), t._disconnect.push(() => x.disconnect());
    }
    function ph(t, e) {
      return (n, o) => {
        for (const l of o)
          S(n, l) || (t.unobserve ? t.unobserve(l) : t.observe && t.disconnect());
        for (const l of n)
          (!S(o, l) || !t.unobserve) && t.observe(l, e);
      };
    }
    function mh(t) {
      const { $options: e, $props: n } = t, o = aa(e);
      W(n, o);
      const { computed: l, methods: c } = e;
      for (let d in n)
        d in o && (!l || !u(l, d)) && (!c || !u(c, d)) && (t[d] = n[d]);
    }
    function aa(t) {
      const e = {}, { args: n = [], props: o = {}, el: l, id: c } = t;
      if (!o)
        return e;
      for (const p in o) {
        const m = f(p);
        let y = Nt(l, m);
        Ft(y) || (y = o[p] === Boolean && y === "" ? !0 : Ji(o[p], y), !(m === "target" && v(y, "_")) && (e[p] = y));
      }
      const d = dn(Nt(l, c), n);
      for (const p in d) {
        const m = $(p);
        Ft(o[m]) || (e[m] = Ji(o[m], d[p]));
      }
      return e;
    }
    const gh = re((t, e) => {
      const n = Object.keys(e), o = n.concat(t).map((l) => [f(l), `data-${f(l)}`]).flat();
      return { attributes: n, filter: o };
    });
    function vh(t) {
      const { $options: e, $props: n } = t, { id: o, props: l, el: c } = e;
      if (!l)
        return;
      const { attributes: d, filter: p } = gh(o, l), m = new MutationObserver((y) => {
        const x = aa(e);
        y.some(({ attributeName: C }) => {
          const I = C.replace("data-", "");
          return (I === o ? d : [$(I), $(C)]).some(
            (F) => !Ft(x[F]) && x[F] !== n[F]
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
      t._connected || (mh(t), mn(t, "beforeConnect"), t._connected = !0, t._disconnect = [], hh(t), Bu(t), ah(t), dh(t), vh(t), uh(t), mn(t, "connected"), Mn(t));
    }
    function oo(t) {
      t._connected && (mn(t, "beforeDisconnect"), t._disconnect.forEach((e) => e()), t._disconnect = null, mn(t, "disconnected"), t._connected = !1);
    }
    let bh = 0;
    function la(t, e = {}) {
      e.data = kh(e, t.constructor.options), t.$options = Un(t.constructor.options, e, t), t.$props = {}, t._uid = bh++, wh(t), yh(t), ch(t), mn(t, "created"), e.el && t.$mount(e.el);
    }
    function wh(t) {
      const { data: e = {} } = t.$options;
      for (const n in e)
        t.$props[n] = t[n] = e[n];
    }
    function yh(t) {
      const { methods: e } = t.$options;
      if (e)
        for (const n in e)
          t[n] = e[n].bind(t);
    }
    function kh({ data: t = {} }, { args: e = [], props: n = {} }) {
      T(t) && (t = t.slice(0, e.length).reduce((o, l, c) => (wt(l) ? W(o, l) : o[e[c]] = l, o), {}));
      for (const o in t)
        Ft(t[o]) ? delete t[o] : n[o] && (t[o] = Ji(n[o], t[o]));
      return t;
    }
    const ne = function(t) {
      la(this, t);
    };
    ne.util = Ou, ne.options = {}, ne.version = "3.21.13";
    const $h = "uk-", qe = "__uikit__", gn = {};
    function ca(t, e) {
      var n, o;
      const l = $h + f(t);
      if (!e)
        return gn[l].options || (gn[l] = ne.extend(gn[l])), gn[l];
      t = $(t), ne[t] = (d, p) => Vn(t, d, p);
      const c = (n = e.options) != null ? n : { ...e };
      return c.id = l, c.name = t, (o = c.install) == null || o.call(c, ne, c, t), ne._initialized && !c.functional && requestAnimationFrame(() => Vn(t, `[${l}],[data-${l}]`)), gn[l] = c;
    }
    function Vn(t, e, n, ...o) {
      const l = ca(t);
      return l.options.functional ? new l({ data: wt(e) ? e : [e, n, ...o] }) : e ? ft(e).map(c)[0] : c();
      function c(d) {
        const p = js(d, t);
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
    function js(t, e) {
      return Jn(t)[e];
    }
    function xh(t, e) {
      t[qe] || (t[qe] = {}), t[qe][e.$options.name] = e;
    }
    function Sh(t, e) {
      var n;
      (n = t[qe]) == null || delete n[e.$options.name], hs(t[qe]) && delete t[qe];
    }
    function _h(t) {
      t.component = ca, t.getComponents = Jn, t.getComponent = js, t.update = ua, t.use = function(n) {
        if (!n.installed)
          return n.call(null, this), n.installed = !0, this;
      }, t.mixin = function(n, o) {
        o = (vt(o) ? this.component(o) : o) || this, o.options = Un(o.options, n);
      }, t.extend = function(n) {
        n || (n = {});
        const o = this, l = function(d) {
          la(this, d);
        };
        return l.prototype = Object.create(o.prototype), l.prototype.constructor = l, l.options = Un(o.options, n), l.super = o, l.extend = o.extend, l;
      };
      let e;
      Object.defineProperty(t, "container", {
        get() {
          return e || document.body;
        },
        set(n) {
          e = J(n);
        }
      });
    }
    function ua(t, e) {
      t = t ? _t(t) : document.body;
      for (const n of An(t).reverse())
        ha(n, e);
      Oe(t, (n) => ha(n, e));
    }
    function ha(t, e) {
      const n = Jn(t);
      for (const o in n)
        Mn(n[o], e);
    }
    function Eh(t) {
      t.prototype.$mount = function(e) {
        const n = this;
        xh(e, n), n.$options.el = e, document.contains(e) && io(n);
      }, t.prototype.$destroy = function(e = !1) {
        const n = this, { el: o } = n.$options;
        o && oo(n), mn(n, "destroy"), Sh(o, n), e && Zt(n.$el);
      }, t.prototype.$create = Vn, t.prototype.$emit = function(e) {
        Mn(this, e);
      }, t.prototype.$update = function(e = this.$el, n) {
        ua(e, n);
      }, t.prototype.$reset = function() {
        oo(this), io(this);
      }, t.prototype.$getComponent = js, Object.defineProperties(t.prototype, {
        $el: {
          get() {
            return this.$options.el;
          }
        },
        $container: Object.getOwnPropertyDescriptor(t, "container")
      });
    }
    let Oh = 1;
    function We(t, e = null) {
      return (e == null ? void 0 : e.id) || `${t.$options.id}-${Oh++}`;
    }
    var Th = {
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
        nav: ({ selNav: t }, e) => J(t, e),
        navChildren() {
          return ut(this.nav);
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
          $t(t, "ul") && N(t, "role", "presentation");
        },
        navChildren(t) {
          N(t, "role", "presentation"), this.padNavitems(), this.updateNav();
        },
        navItems(t) {
          for (const e of t) {
            const n = Nt(e, this.attrItem), o = J("a,button", e) || e;
            let l, c = null;
            if (pe(n)) {
              const d = be(n), p = this.slides[d];
              p && (p.id || (p.id = We(this, p)), c = p.id), l = this.t("slideX", Y(n) + 1), N(o, "role", "tab");
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
            t.target.closest("a,button") && (t.type === "click" || t.keyCode === lt.SPACE) && (t.preventDefault(), this.show(Nt(t.current, this.attrItem)));
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
            const { current: e, keyCode: n } = t, o = Nt(e, this.attrItem);
            if (!pe(o))
              return;
            let l = n === lt.HOME ? 0 : n === lt.END ? "last" : n === lt.LEFT ? "previous" : n === lt.RIGHT ? "next" : -1;
            ~l && (t.preventDefault(), this.show(l));
          }
        }
      ],
      methods: {
        updateNav() {
          const t = this.getValidIndex();
          for (const e of this.navItems) {
            const n = Nt(e, this.attrItem), o = J("a,button", e) || e;
            if (pe(n)) {
              const c = be(n) === t;
              Et(e, this.clsActive, c), Et(o, "uk-disabled", this.parallax), N(o, {
                "aria-selected": c,
                tabindex: c && !this.parallax ? null : -1
              }), c && o && it(ct(e), ":focus-within") && o.focus();
            } else
              Et(
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
            t[e] = this.navChildren.findLast((o) => o.matches(`[${n}]`)) || J(`<li ${n}><a href></a></li>`);
          }
          En(t, this.navChildren) || Ee(this.nav, t);
        }
      }
    };
    const Ch = "cubic-bezier(0.25, 0.46, 0.45, 0.94)", Ph = "cubic-bezier(0.165, 0.84, 0.44, 1)";
    var da = {
      mixins: [sh, oh, Th, Ds],
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
        duration: ({ velocity: t }, e) => fa(e.offsetWidth / t),
        list: ({ selList: t }, e) => J(t, e),
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
          const d = this.getIndex(this.index), p = q(this.slides, this.clsActive) && this.slides[d], m = this.getIndex(t, this.index), y = this.slides[m];
          if (p === y) {
            c();
            return;
          }
          if (this.dir = Ah(t, d), this.prevIndex = d, this.index = m, p && !j(p, "beforeitemhide", [this]) || !j(y, "beforeitemshow", [this, p])) {
            this.index = this.prevIndex, c();
            return;
          }
          const x = this._show(p, y, e).then(() => {
            p && j(p, "itemhidden", [this]), j(y, "itemshown", [this]), o.shift(), this._transitioner = null, o.length && requestAnimationFrame(() => o.length && this.show(o.shift(), !0));
          });
          return p && j(p, "itemhide", [this]), j(y, "itemshow", [this]), x;
        },
        getIndex(t = this.index, e = this.index) {
          return Mt(
            Qt(t, this.slides, e, this.finite),
            0,
            Math.max(0, this.maxIndex)
          );
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          return this.getIndex(t, e);
        },
        async _show(t, e, n) {
          if (this._transitioner = this._getTransitioner(t, e, this.dir, {
            easing: n ? e.offsetWidth < 600 ? Ch : Ph : this.easing,
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
            n * (Rt ? -1 : 1),
            o
          );
        }
      }
    };
    function Ah(t, e) {
      return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
    }
    function fa(t) {
      return 0.5 * t + 300;
    }
    var pa = {
      mixins: [da],
      props: {
        animation: String
      },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: no,
        Transitioner: nh
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
          Z(t, this.clsActive);
        },
        itemshown({ target: t }) {
          Z(t, this.clsActivated);
        },
        itemhidden({ target: t }) {
          rt(t, this.clsActive, this.clsActivated);
        }
      }
    }, ma = {
      ...no,
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
    }, ga = {
      mixins: [eo, pa],
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
        Animations: ma,
        template: '<div class="uk-lightbox uk-overflow-hidden"> <div class="uk-lightbox-items"></div> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
      }),
      created() {
        const t = J(this.template), e = J(this.selList, t);
        this.items.forEach(() => Tt(e, "<div>"));
        const n = J("[uk-close]", t), o = this.t("close");
        n && o && (n.dataset.i18n = JSON.stringify({ label: o })), this.$mount(Tt(this.container, t));
      },
      events: [
        {
          name: `${ms} ${ae} keydown`,
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
            this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = ma.scale, rt(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
          }
        },
        {
          name: "itemshow",
          handler() {
            Ee(J(this.selCaption, this.$el), this.getItem().caption || "");
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
              V(y, "load", () => this.setItem(e, y)), V(y, "error", () => this.setError(e));
            } else if (o === "video" || n.match(/\.(mp4|webm|ogv)($|\?)/i)) {
              const y = Kn("video", {
                src: n,
                poster: c,
                controls: "",
                playsinline: "",
                "uk-video": `${this.videoAutoplay}`,
                ...d
              });
              V(y, "loadedmetadata", () => this.setItem(e, y)), V(y, "error", () => this.setError(e));
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
                const { height: y, width: x } = await (await fetch(
                  `https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(
                    n
                  )}`,
                  { credentials: "omit" }
                )).json();
                this.setItem(
                  e,
                  Kn("iframe", {
                    src: `https://player.vimeo.com/video/${p[1]}${p[2] ? `?${p[2]}` : ""}`,
                    width: x,
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
          return this.items[Qt(t, this.slides)];
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
          clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), Z(this.$el, "uk-active", "uk-transition-active");
        },
        hideControls() {
          rt(this.$el, "uk-active", "uk-transition-active");
        }
      }
    };
    function Kn(t, e) {
      const n = je(`<${t}>`);
      return N(n, e), n;
    }
    var Rh = {
      install: Ih,
      props: { toggle: String },
      data: { toggle: "a" },
      computed: {
        toggles: ({ toggle: t }, e) => ft(t, e)
      },
      watch: {
        toggles(t) {
          this.hide();
          for (const e of t)
            $t(e, "a") && N(e, "role", "button");
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
          const e = ir(this.toggles.map(va), "source");
          if (Xt(t)) {
            const { source: n } = va(t);
            t = A(e, ({ source: o }) => n === o);
          }
          return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items: e }), V(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t);
        },
        hide() {
          var t;
          return (t = this.panel) == null ? void 0 : t.hide();
        }
      }
    };
    function Ih(t, e) {
      t.lightboxPanel || t.component("lightboxPanel", ga), W(e.props, t.component("lightboxPanel").options.props);
    }
    function va(t) {
      const e = {};
      for (const n of ["href", "caption", "type", "poster", "alt", "attrs"])
        e[n === "href" ? "source" : n] = Nt(t, n);
      return e.attrs = dn(e.attrs), e;
    }
    var Bh = {
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
      install: Fh,
      computed: {
        marginProp: ({ pos: t }) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`,
        startProps() {
          return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
        }
      },
      created() {
        const t = `${this.clsContainer}-${this.pos}`, e = `data-${this.clsContainer}-container`, n = J(`.${t}[${e}]`, this.container) || Tt(
          this.container,
          `<div class="${this.clsContainer} ${t}" ${e}></div>`
        );
        this.$mount(
          Tt(
            n,
            `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`
          )
        );
      },
      async connected() {
        const t = Y(w(this.$el, this.marginProp));
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
        [an]() {
          this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        }
      },
      methods: {
        async close(t) {
          const e = (n) => {
            const o = ct(n);
            j(n, "close", [this]), Zt(n), o != null && o.hasChildNodes() || Zt(o);
          };
          this.timer && clearTimeout(this.timer), t || await ht.start(this.$el, this.startProps), e(this.$el);
        }
      }
    };
    function Fh(t) {
      t.notification.closeAll = function(e, n) {
        Oe(document.body, (o) => {
          const l = t.getComponent(o, "notification");
          l && (!e || e === l.group) && l.close(n);
        });
      };
    }
    var Us = {
      props: {
        media: Boolean
      },
      data: {
        media: !1
      },
      connected() {
        const t = Nh(this.media, this.$el);
        if (this.matchMedia = !0, t) {
          this.mediaObj = window.matchMedia(t);
          const e = () => {
            this.matchMedia = this.mediaObj.matches, j(this.$el, cn("mediachange", !1, !0, [this.mediaObj]));
          };
          this.offMediaObj = V(this.mediaObj, "change", () => {
            e(), this.$emit("resize");
          }), e();
        }
      },
      disconnected() {
        var t;
        (t = this.offMediaObj) == null || t.call(this);
      }
    };
    function Nh(t, e) {
      if (vt(t)) {
        if (v(t, "@"))
          t = Y(w(e, `--uk-breakpoint-${t.slice(1)}`));
        else if (isNaN(t))
          return t;
      }
      return t && pe(t) ? `(min-width: ${t}px)` : "";
    }
    function ba(t) {
      return Ot(t) ? Math.ceil(
        Math.max(0, ...ft("[stroke]", t).map((e) => {
          var n;
          return ((n = e.getTotalLength) == null ? void 0 : n.call(e)) || 0;
        }))
      ) : 0;
    }
    const Ms = {
      x: Ls,
      y: Ls,
      rotate: Ls,
      scale: Ls,
      color: ro,
      backgroundColor: ro,
      borderColor: ro,
      blur: Ve,
      hue: Ve,
      fopacity: Ve,
      grayscale: Ve,
      invert: Ve,
      saturate: Ve,
      sepia: Ve,
      opacity: jh,
      stroke: Uh,
      bgx: ka,
      bgy: ka
    }, { keys: wa } = Object;
    var ya = {
      mixins: [Us],
      props: Ea(wa(Ms), "list"),
      data: Ea(wa(Ms), void 0),
      computed: {
        props(t, e) {
          const n = {};
          for (const l in t)
            l in Ms && !Ft(t[l]) && (n[l] = t[l].slice());
          const o = {};
          for (const l in n)
            o[l] = Ms[l](l, e, n[l], n);
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
            this.props[n](e, Mt(t));
          return e.willChange = Object.keys(e).map(ws).join(","), e;
        }
      }
    };
    function Ls(t, e, n) {
      let o = Hs(n) || { x: "px", y: "px", rotate: "deg" }[t] || "", l;
      return t === "x" || t === "y" ? (t = `translate${b(t)}`, l = (c) => Y(Y(c).toFixed(o === "px" ? 0 : 6))) : t === "scale" && (o = "", l = (c) => {
        var d;
        return Hs([c]) ? Bt(c, "width", e, !0) / e[`offset${(d = c.endsWith) != null && d.call(c, "vh") ? "Height" : "Width"}`] : Y(c);
      }), n.length === 1 && n.unshift(t === "scale" ? 1 : 0), n = vn(n, l), (c, d) => {
        c.transform = `${c.transform || ""} ${t}(${Gn(n, d)}${o})`;
      };
    }
    function ro(t, e, n) {
      return n.length === 1 && n.unshift(Xn(e, t, "")), n = vn(n, (o) => Dh(e, o)), (o, l) => {
        const [c, d, p] = _a(n, l), m = c.map((y, x) => (y += p * (d[x] - y), x === 3 ? Y(y) : parseInt(y, 10))).join(",");
        o[t] = `rgba(${m})`;
      };
    }
    function Dh(t, e) {
      return Xn(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(Y);
    }
    function Ve(t, e, n) {
      n.length === 1 && n.unshift(0);
      const o = Hs(n) || { blur: "px", hue: "deg" }[t] || "%";
      return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, n = vn(n), (l, c) => {
        const d = Gn(n, c);
        l.filter = `${l.filter || ""} ${t}(${d + o})`;
      };
    }
    function jh(t, e, n) {
      return n.length === 1 && n.unshift(Xn(e, t, "")), n = vn(n), (o, l) => {
        o[t] = Gn(n, l);
      };
    }
    function Uh(t, e, n) {
      n.length === 1 && n.unshift(0);
      const o = Hs(n), l = ba(e);
      return n = vn(n.reverse(), (c) => (c = Y(c), o === "%" ? c * l / 100 : c)), n.some(([c]) => c) ? (w(e, "strokeDasharray", l), (c, d) => {
        c.strokeDashoffset = Gn(n, d);
      }) : at;
    }
    function ka(t, e, n, o) {
      n.length === 1 && n.unshift(0);
      const l = t === "bgy" ? "height" : "width";
      o[t] = vn(n, (p) => Bt(p, l, e));
      const c = ["bgx", "bgy"].filter((p) => p in o);
      if (c.length === 2 && t === "bgx")
        return at;
      if (Xn(e, "backgroundSize", "") === "cover")
        return Mh(t, e, n, o);
      const d = {};
      for (const p of c)
        d[p] = $a(e, p);
      return xa(c, d, o);
    }
    function Mh(t, e, n, o) {
      const l = Lh(e);
      if (!l.width)
        return at;
      const c = {
        width: e.offsetWidth,
        height: e.offsetHeight
      }, d = ["bgx", "bgy"].filter((x) => x in o), p = {};
      for (const x of d) {
        const C = o[x].map(([ot]) => ot), I = Math.min(...C), F = Math.max(...C), H = C.indexOf(I) < C.indexOf(F), tt = F - I;
        p[x] = `${(H ? -tt : 0) - (H ? I : F)}px`, c[x === "bgy" ? "height" : "width"] += tt;
      }
      const m = $i.cover(l, c);
      for (const x of d) {
        const C = x === "bgy" ? "height" : "width", I = m[C] - c[C];
        p[x] = `max(${$a(e, x)},-${I}px) + ${p[x]}`;
      }
      const y = xa(d, p, o);
      return (x, C) => {
        y(x, C), x.backgroundSize = `${m.width}px ${m.height}px`, x.backgroundRepeat = "no-repeat";
      };
    }
    function $a(t, e) {
      return Xn(t, `background-position-${e.slice(-1)}`, "");
    }
    function xa(t, e, n) {
      return function(o, l) {
        for (const c of t) {
          const d = Gn(n[c], l);
          o[`background-position-${c.slice(-1)}`] = `calc(${e[c]} + ${d}px)`;
        }
      };
    }
    const Sa = {}, zs = {};
    function Lh(t) {
      const e = w(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
      if (zs[e])
        return zs[e];
      const n = new Image();
      return e && (n.src = e, !n.naturalWidth && !Sa[e]) ? (kt(n, "error load", () => {
        zs[e] = ao(n), j(t, cn("load", !1));
      }), Sa[e] = !0, ao(n)) : zs[e] = ao(n);
    }
    function ao(t) {
      return {
        width: t.naturalWidth,
        height: t.naturalHeight
      };
    }
    function vn(t, e = Y) {
      const n = [], { length: o } = t;
      let l = 0;
      for (let c = 0; c < o; c++) {
        let [d, p] = vt(t[c]) ? t[c].trim().split(/ (?![^(]*\))/) : [t[c]];
        if (d = e(d), p = p ? Y(p) / 100 : null, c === 0 ? p === null ? p = 0 : p && n.push([d, 0]) : c === o - 1 && (p === null ? p = 1 : p !== 1 && (n.push([d, p]), p = 1)), n.push([d, p]), p === null)
          l++;
        else if (l) {
          const m = n[c - l - 1][1], y = (p - m) / (l + 1);
          for (let x = l; x > 0; x--)
            n[c - x][1] = m + y * (l - x + 1);
          l = 0;
        }
      }
      return n;
    }
    function _a(t, e) {
      const n = A(t.slice(1), ([, o]) => e <= o) + 1;
      return [
        t[n - 1][0],
        t[n][0],
        (e - t[n - 1][1]) / (t[n][1] - t[n - 1][1])
      ];
    }
    function Gn(t, e) {
      const [n, o, l] = _a(t, e);
      return n + Math.abs(n - o) * l * (n < o ? 1 : -1);
    }
    const zh = /^-?\d+(?:\.\d+)?(\S+)?/;
    function Hs(t, e) {
      var n;
      for (const o of t) {
        const l = (n = o.match) == null ? void 0 : n.call(o, zh);
        if (l)
          return l[1];
      }
      return e;
    }
    function Xn(t, e, n) {
      const o = t.style[e], l = w(w(t, e, n), e);
      return t.style[e] = o, l;
    }
    function Ea(t, e) {
      return t.reduce((n, o) => (n[o] = e, n), {});
    }
    function Oa(t, e) {
      return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    var Hh = {
      mixins: [ya],
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
        target: ({ target: t }, e) => Ta(t && Lt(t, e) || e),
        start({ start: t }) {
          return Bt(t, "height", this.target, !0);
        },
        end({ end: t, viewport: e }) {
          return Bt(
            t || (e = (1 - e) * 100) && `${e}vh+${e}%`,
            "height",
            this.target,
            !0
          );
        }
      },
      observe: [
        Ki(),
        Ln({ target: ({ target: t }) => t }),
        le({ target: ({ $el: t, target: e }) => [t, e, Ce(e, !0)] })
      ],
      update: {
        read({ percent: t }, e) {
          if (e.has("scroll") || (t = !1), !Ot(this.$el))
            return !1;
          if (!this.matchMedia)
            return;
          const n = t;
          return t = Oa(Rs(this.target, this.start, this.end), this.easing), {
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
    function Ta(t) {
      return t ? "offsetTop" in t ? t : Ta(ct(t)) : document.documentElement;
    }
    var Ca = {
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
        Ln({ filter: ({ parallax: t }) => t })
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
          const e = Bt(this.parallaxStart, "height", t, !0), n = Bt(this.parallaxEnd, "height", t, !0), o = Oa(Rs(t, e, n), this.parallaxEasing);
          return { parallax: this.getIndexAt(o) };
        },
        write({ parallax: t }) {
          const [e, n] = t, o = this.getValidIndex(e + Math.ceil(n)), l = this.slides[e], c = this.slides[o], { triggerShow: d, triggerShown: p, triggerHide: m, triggerHidden: y } = qh(this);
          if (~this.prevIndex)
            for (const C of /* @__PURE__ */ new Set([this.index, this.prevIndex]))
              S([o, e], C) || (m(this.slides[C]), y(this.slides[C]));
          const x = this.prevIndex !== e || this.index !== o;
          this.dir = 1, this.prevIndex = e, this.index = o, l !== c && m(l), d(c), x && p(l), this._translate(l === c ? 1 : n, l, c);
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
    function qh(t) {
      const { clsSlideActive: e, clsEnter: n, clsLeave: o } = t;
      return { triggerShow: l, triggerShown: c, triggerHide: d, triggerHidden: p };
      function l(m) {
        q(m, o) && (d(m), p(m)), q(m, e) || (j(m, "beforeitemshow", [t]), j(m, "itemshow", [t]));
      }
      function c(m) {
        q(m, n) && j(m, "itemshown", [t]);
      }
      function d(m) {
        q(m, e) || l(m), q(m, n) && c(m), q(m, o) || (j(m, "beforeitemhide", [t]), j(m, "itemhide", [t]));
      }
      function p(m) {
        q(m, o) && j(m, "itemhidden", [t]);
      }
    }
    var Pa = {
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
      observe: Fs({
        target: ({ slides: t }) => t,
        targets: (t) => t.getAdjacentSlides()
      }),
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        }
      }
    };
    function Wh(t, e, n, { center: o, easing: l, list: c }) {
      const d = t ? Yn(t, c, o) : Yn(e, c, o) + D(e).width * n, p = e ? Yn(e, c, o) : d + D(t).width * n * (Rt ? -1 : 1), { promise: m, resolve: y } = Yr();
      return {
        dir: n,
        show(x, C = 0, I) {
          const F = I ? "linear" : l;
          return x -= Math.round(x * Mt(C, -1, 1)), w(c, "transitionProperty", "none"), this.translate(C), w(c, "transitionProperty", ""), C = t ? C : Mt(C, 0, 1), He(this.getItemIn(), "itemin", { percent: C, duration: x, timing: F, dir: n }), t && He(this.getItemIn(!0), "itemout", {
            percent: 1 - C,
            duration: x,
            timing: F,
            dir: n
          }), ht.start(
            c,
            { transform: St(-p * (Rt ? -1 : 1), "px") },
            x,
            F
          ).then(y, at), m;
        },
        cancel() {
          return ht.cancel(c);
        },
        reset() {
          w(c, "transform", "");
        },
        async forward(x, C = this.percent()) {
          return await this.cancel(), this.show(x, C, !0);
        },
        translate(x) {
          if (x === this.percent())
            return;
          const C = this.getDistance() * n * (Rt ? -1 : 1);
          w(
            c,
            "transform",
            St(
              Mt(
                -p + (C - C * x),
                -bn(c),
                D(c).width
              ) * (Rt ? -1 : 1),
              "px"
            )
          );
          const I = this.getActives(), F = this.getItemIn(), H = this.getItemIn(!0);
          x = t ? Mt(x, -1, 1) : 0;
          for (const tt of ut(c)) {
            const ot = S(I, tt), me = tt === F, wn = tt === H, yn = me || !wn && (ot || n * (Rt ? -1 : 1) === -1 ^ qs(tt, c) > qs(t || e));
            He(tt, `itemtranslate${yn ? "in" : "out"}`, {
              dir: n,
              percent: wn ? 1 - x : me ? x : ot ? 1 : 0
            });
          }
        },
        percent() {
          return Math.abs(
            (new DOMMatrix(w(c, "transform")).m41 * (Rt ? -1 : 1) + d) / (p - d)
          );
        },
        getDistance() {
          return Math.abs(p - d);
        },
        getItemIn(x = !1) {
          let C = this.getActives(), I = Ia(c, Yn(e || t, c, o));
          if (x) {
            const F = C;
            C = I, I = F;
          }
          return I[A(I, (F) => !S(C, F))];
        },
        getActives() {
          return Ia(c, Yn(t || e, c, o));
        }
      };
    }
    function Yn(t, e, n) {
      const o = qs(t, e);
      return n ? o - Vh(t, e) : Math.min(o, Ra(e));
    }
    function Ra(t) {
      return Math.max(0, bn(t) - D(t).width);
    }
    function bn(t, e) {
      return Be(ut(t).slice(0, e), (n) => D(n).width);
    }
    function Vh(t, e) {
      return D(e).width / 2 - D(t).width / 2;
    }
    function qs(t, e) {
      return t && (Bi(t).left + (Rt ? D(t).width - D(e).width : 0)) * (Rt ? -1 : 1) || 0;
    }
    function Ia(t, e) {
      e -= 1;
      const n = D(t).width, o = e + n + 2;
      return ut(t).filter((l) => {
        const c = qs(l, t), d = c + Math.min(D(l).width, n);
        return c >= e && d <= o;
      });
    }
    var Jh = {
      mixins: [Ht, da, Pa, Ca, Aa],
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
        Transitioner: Wh
      },
      computed: {
        finite({ finite: t }) {
          return t || Kh(this.list, this.center);
        },
        maxIndex() {
          if (!this.finite || this.center && !this.sets)
            return this.length - 1;
          if (this.center)
            return Ie(this.sets);
          let t = 0;
          const e = Ra(this.list), n = A(this.slides, (o) => {
            if (t >= e - 5e-3)
              return !0;
            t += D(o).width;
          });
          return ~n ? n : this.length - 1;
        },
        sets({ sets: t }) {
          if (!t || this.parallax)
            return;
          let e = 0;
          const n = [], o = D(this.list).width;
          for (let l = 0; l < this.length; l++) {
            const c = D(this.slides[l]).width;
            e + c > o && (e = 0), this.center ? e < o / 2 && e + c + D(this.slides[Qt(l + 1, this.slides)]).width / 2 > o / 2 && (n.push(l), e = o / 2 - c / 2) : e === 0 && n.push(Math.min(l, this.maxIndex)), e += c;
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
          return ut(this.list).filter(Ot);
        }
      },
      connected() {
        Et(this.$el, this.clsContainer, !J(`.${this.clsContainer}`, this.$el));
      },
      observe: le({
        target: ({ slides: t, $el: e }) => [e, ...t]
      }),
      update: {
        write() {
          for (const t of this.navItems) {
            const e = be(Nt(t, this.attrItem));
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
          this.duration = fa(o / this.velocity) * (D(this.slides[n]).width / o), this.reorder();
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
          let n = D(this.list).width / 2 - D(e).width / 2, o = 0;
          for (; n > 0; ) {
            const l = this.getIndex(--o + t, t), c = this.slides[l];
            w(c, "order", l > t ? -2 : -1), n -= D(c).width;
          }
        },
        updateActiveClasses(t = this.index) {
          let e = this._getTransitioner(t).getActives();
          this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
          const n = [
            this.clsActive,
            !this.sets || S(this.sets, Y(this.index)) ? this.clsActivated : ""
          ];
          for (const o of this.slides) {
            const l = S(e, o);
            Et(o, n, l), N(o, "aria-hidden", !l);
            for (const c of ft(Cn, o))
              u(c, "_tabindex") || (c._tabindex = N(c, "tabindex")), N(c, "tabindex", l ? c._tabindex : -1);
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
          const { width: t } = D(this.list), e = -t, n = t * 2, o = D(this.slides[this.index]).width, l = this.center ? t / 2 - o / 2 : 0, c = /* @__PURE__ */ new Set();
          for (const d of [-1, 1]) {
            let p = l + (d > 0 ? o : 0), m = 0;
            do {
              const y = this.slides[this.getIndex(this.index + d + m++ * d)];
              p += D(y).width * d, c.add(y);
            } while (this.length > m && p > e && p < n);
          }
          return Array.from(c);
        },
        getIndexAt(t) {
          let e = -1;
          const n = this.center ? bn(this.list) - (D(this.slides[0]).width / 2 + D(Ie(this.slides)).width / 2) : bn(this.list, this.maxIndex);
          let o = t * n, l = 0;
          do {
            const c = D(this.slides[++e]).width, d = this.center ? c / 2 + D(this.slides[e + 1]).width / 2 : c;
            l = o / d % 1, o -= d;
          } while (o >= 0 && e < this.maxIndex);
          return [e, l];
        }
      }
    };
    function Kh(t, e) {
      if (!t || t.length < 2)
        return !0;
      const { width: n } = D(t);
      if (!e)
        return Math.ceil(bn(t)) < Math.trunc(n + Gh(t));
      const o = ut(t), l = Math.trunc(n / 2);
      for (const c in o) {
        const d = o[c], p = D(d).width, m = /* @__PURE__ */ new Set([d]);
        let y = 0;
        for (const x of [-1, 1]) {
          let C = p / 2, I = 0;
          for (; C < l; ) {
            const F = o[Qt(+c + x + I++ * x, o)];
            if (m.has(F))
              return !0;
            C += D(F).width, m.add(F);
          }
          y = Math.max(
            y,
            p / 2 + D(o[Qt(+c + x, o)]).width / 2 - (C - l)
          );
        }
        if (Math.trunc(y) > Be(
          o.filter((x) => !m.has(x)),
          (x) => D(x).width
        ))
          return !0;
      }
      return !1;
    }
    function Gh(t) {
      return Math.max(0, ...ut(t).map((e) => D(e).width));
    }
    var Ba = {
      mixins: [ya],
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
              const c = this.getCss(Na(t, l, e)), d = this.getCss(Fa(t) ? 0.5 : l > 0 ? 1 : 0);
              Te.write(() => {
                w(this.$el, c), ht.start(this.$el, d, n, o).catch(at);
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
              const o = this.getCss(Na(t, n, e));
              Te.write(() => w(this.$el, o));
            });
          }
        }
      ]
    };
    function Fa(t) {
      return P(t, "in");
    }
    function Na(t, e, n) {
      return n /= 2, Fa(t) ^ e < 0 ? n : 1 - n;
    }
    var Xh = {
      ...no,
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
            { transform: St(30), zIndex: -1 },
            { transform: St(), zIndex: 0 }
          ] : [
            { transform: St(-100), zIndex: 0 },
            { transform: St(), zIndex: -1 }
          ];
        },
        percent(t, e, n) {
          return n < 0 ? 1 - qn(e) : qn(t);
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
        percent(t, e, n) {
          return n > 0 ? 1 - qn(e) : qn(t);
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
    }, Yh = {
      mixins: [Ht, pa, Pa, Ca, Aa],
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
        Animations: Xh
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
    }, Qh = {
      mixins: [Ht, Vr],
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
          return ut(this.target);
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
          Et(this.target, this.clsEmpty, t);
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
          const m = nd(p, { x: e, y: n });
          if (p.length && (!m || m === c))
            return;
          const y = this.getSortable(c), x = sd(
            d.target,
            m,
            c,
            e,
            n,
            d === y && t.moved !== m
          );
          x !== !1 && (x && c === x || (d !== y ? (y.remove(c), t.moved = m) : delete t.moved, d.insert(c, x), this.touched.add(d)));
        },
        events: ["move"]
      },
      methods: {
        init(t) {
          const { target: e, button: n, defaultPrevented: o } = t, [l] = this.items.filter((c) => c.contains(e));
          !l || o || n > 0 || vs(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = ye(t), this.touched = /* @__PURE__ */ new Set([this]), this.placeholder = l, this.origin = { target: e, index: we(l), ...this.pos }, V(document, ms, this.move), V(document, xe, this.end), this.threshold || this.start(t));
        },
        start(t) {
          this.drag = ed(this.$container, this.placeholder);
          const { left: e, top: n } = D(this.placeholder);
          W(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - n }), Z(this.drag, this.clsDrag, this.clsCustom), Z(this.placeholder, this.clsPlaceholder), Z(this.items, this.clsItem), Z(document.documentElement, this.clsDragState), j(this.$el, "start", [this, this.placeholder]), Zh(this.pos), this.move(t);
        },
        move: od(function(t) {
          W(this.pos, ye(t)), !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t), this.$emit("move");
        }),
        end() {
          if (Se(document, ms, this.move), Se(document, xe, this.end), !this.drag)
            return;
          td();
          const t = this.getSortable(this.placeholder);
          this === t ? this.origin.index !== we(this.placeholder) && j(this.$el, "moved", [this, this.placeholder]) : (j(t.$el, "added", [t, this.placeholder]), j(this.$el, "removed", [this, this.placeholder])), j(this.$el, "stop", [this, this.placeholder]), Zt(this.drag), this.drag = null;
          for (const { clsPlaceholder: e, clsItem: n } of this.touched)
            for (const o of this.touched)
              rt(o.items, e, n);
          this.touched = null, rt(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          Z(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => ks(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => Tt(this.target, t));
        },
        remove(t) {
          this.target.contains(t) && this.animate(() => Zt(t));
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
    let Da;
    function Zh(t) {
      let e = Date.now();
      Da = setInterval(() => {
        let { x: n, y: o } = t;
        o += document.scrollingElement.scrollTop;
        const l = (Date.now() - e) * 0.3;
        e = Date.now(), Me(document.elementFromPoint(n, t.y)).reverse().some((c) => {
          let { scrollTop: d, scrollHeight: p } = c;
          const { top: m, bottom: y, height: x } = te(c);
          if (m < o && m + 35 > o)
            d -= l;
          else if (y > o && y - 35 < o)
            d += l;
          else
            return;
          if (d > 0 && d < p - x)
            return c.scrollTop = d, !0;
        });
      }, 15);
    }
    function td() {
      clearInterval(Da);
    }
    function ed(t, e) {
      let n;
      if ($t(e, "li", "tr")) {
        n = J("<div>"), Tt(n, e.cloneNode(!0).children);
        for (const o of e.getAttributeNames())
          N(n, o, e.getAttribute(o));
      } else
        n = e.cloneNode(!0);
      return Tt(t, n), w(n, "margin", "0", "important"), w(n, {
        boxSizing: "border-box",
        width: e.offsetWidth,
        height: e.offsetHeight,
        padding: w(e, "padding")
      }), zt(n.firstElementChild, zt(e.firstElementChild)), n;
    }
    function nd(t, e) {
      return t[A(t, (n) => fs(e, D(n)))];
    }
    function sd(t, e, n, o, l, c) {
      if (!ut(t).length)
        return;
      const d = D(e);
      if (!c)
        return id(t, n) || l < d.top + d.height / 2 ? e : e.nextElementSibling;
      const p = D(n), m = ja(
        [d.top, d.bottom],
        [p.top, p.bottom]
      ), [y, x, C, I] = m ? [o, "width", "left", "right"] : [l, "height", "top", "bottom"], F = p[x] < d[x] ? d[x] - p[x] : 0;
      return p[C] < d[C] ? F && y < d[C] + F ? !1 : e.nextElementSibling : F && y > d[I] - F ? !1 : e;
    }
    function id(t, e) {
      const n = ut(t).length === 1;
      n && Tt(t, e);
      const o = ut(t), l = o.some((c, d) => {
        const p = D(c);
        return o.slice(d + 1).some((m) => {
          const y = D(m);
          return !ja([p.left, p.right], [y.left, y.right]);
        });
      });
      return n && Zt(e), l;
    }
    function ja(t, e) {
      return t[1] > e[0] && e[1] > t[0];
    }
    function od(t) {
      let e;
      return function(...n) {
        e || (e = !0, t.call(this, ...n), requestAnimationFrame(() => e = !1));
      };
    }
    var Ua = {
      props: {
        pos: String,
        offset: Boolean,
        flip: Boolean,
        shift: Boolean,
        inset: Boolean
      },
      data: {
        pos: `bottom-${Rt ? "right" : "left"}`,
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
            element: [this.inset ? this.dir : Es(this.dir), this.align],
            target: [this.dir, this.align]
          };
          if (this.axis === "y") {
            for (const m in c)
              c[m].reverse();
            o.reverse(), l.reverse();
          }
          const d = Ma(t), p = D(t);
          w(t, { top: -p.height, left: -p.width }), Pr(t, e, {
            attach: c,
            offset: o,
            boundary: n,
            placement: l,
            viewportOffset: this.getViewportOffset(t)
          }), d();
        },
        getPositionOffset(t = this.$el) {
          return Bt(
            this.offset === !1 ? w(t, "--uk-position-offset") : this.offset,
            this.axis === "x" ? "width" : "height",
            t
          ) * (S(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
        },
        getShiftOffset(t = this.$el) {
          return this.align === "center" ? 0 : Bt(
            w(t, "--uk-position-shift-offset"),
            this.axis === "y" ? "width" : "height",
            t
          ) * (S(["left", "top"], this.align) ? 1 : -1);
        },
        getViewportOffset(t) {
          return Bt(w(t, "--uk-position-viewport-offset"));
        }
      }
    };
    function Ma(t) {
      const e = Ce(t), { scrollTop: n } = e;
      return () => {
        n !== e.scrollTop && (e.scrollTop = n);
      };
    }
    var rd = {
      mixins: [Hn, ze, Ua],
      data: {
        pos: "top",
        animation: ["uk-animation-scale-up"],
        duration: 100,
        cls: "uk-active"
      },
      connected() {
        ad(this.$el);
      },
      disconnected() {
        this.hide();
      },
      methods: {
        show() {
          if (this.isToggled(this.tooltip || null))
            return;
          const { delay: t = 0, title: e } = cd(this.$options);
          if (!e)
            return;
          const n = N(this.$el, "title"), o = V(this.$el, ["blur", an], (c) => !ue(c) && this.hide());
          this.reset = () => {
            N(this.$el, { title: n, "aria-describedby": null }), o();
          };
          const l = We(this);
          N(this.$el, { title: null, "aria-describedby": l }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, l), t);
        },
        async hide() {
          var t;
          it(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), (t = this.reset) == null || t.call(this), Zt(this.tooltip), this.tooltip = null);
        },
        async _show(t, e) {
          this.tooltip = Tt(
            this.container,
            `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`
          ), V(this.tooltip, "toggled", (n, o) => {
            if (!o)
              return;
            const l = () => this.positionAt(this.tooltip, this.$el);
            l();
            const [c, d] = ld(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? `${Es(c)}-${d}` : `${d}-${Es(c)}`;
            const p = [
              kt(
                document,
                `keydown ${ae}`,
                this.hide,
                !1,
                (m) => m.type === ae && !this.$el.contains(m.target) || m.type === "keydown" && m.keyCode === lt.ESC
              ),
              V([document, ...Le(this.$el)], "scroll", l, {
                passive: !0
              })
            ];
            kt(this.tooltip, "hide", () => p.forEach((m) => m()), {
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
    function ad(t) {
      bs(t) || N(t, "tabindex", "0");
    }
    function ld(t, e, [n, o]) {
      const l = et(t), c = et(e), d = [
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
    function cd(t) {
      const { el: e, id: n, data: o } = t;
      return ["delay", "title"].reduce((l, c) => ({ [c]: Nt(e, c), ...l }), {
        ...dn(Nt(e, n), ["title"]),
        ...o
      });
    }
    var ud = {
      mixins: [Ds],
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
          Ws(t);
          const e = t.dataTransfer;
          e != null && e.files && (rt(this.$el, this.clsDragover), this.upload(e.files));
        },
        dragenter(t) {
          Ws(t);
        },
        dragover(t) {
          Ws(t), Z(this.$el, this.clsDragover);
        },
        dragleave(t) {
          Ws(t), rt(this.$el, this.clsDragover);
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
          const e = hd(t, this.concurrent), n = async (o) => {
            const l = new FormData();
            o.forEach((c) => l.append(this.name, c));
            for (const c in this.params)
              l.append(c, this.params[c]);
            try {
              const c = await dd(this.url, {
                data: l,
                method: this.method,
                responseType: this.type,
                beforeSend: (d) => {
                  const { xhr: p } = d;
                  V(p.upload, "progress", this.progress);
                  for (const m of ["loadStart", "load", "loadEnd", "abort"])
                    V(p, m.toLowerCase(), this[m]);
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
    function hd(t, e) {
      const n = [];
      for (let o = 0; o < t.length; o += e)
        n.push(t.slice(o, o + e));
      return n;
    }
    function Ws(t) {
      t.preventDefault(), t.stopPropagation();
    }
    async function dd(t, e) {
      const n = {
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: at,
        responseType: "",
        ...e
      };
      return await n.beforeSend(n), fd(t, n);
    }
    function fd(t, e) {
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
        V(l, "load", () => {
          l.status === 0 || l.status >= 200 && l.status < 300 || l.status === 304 ? n(l) : o(
            W(Error(l.statusText), {
              xhr: l,
              status: l.status
            })
          );
        }), V(l, "error", () => o(W(Error("Network Error"), { xhr: l }))), V(l, "timeout", () => o(W(Error("Network Timeout"), { xhr: l }))), l.send(e.data);
      });
    }
    var pd = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Countdown: Cu,
      Filter: Hu,
      Lightbox: Rh,
      LightboxPanel: ga,
      Notification: Bh,
      Parallax: Hh,
      Slider: Jh,
      SliderParallax: Ba,
      Slideshow: Yh,
      SlideshowParallax: Ba,
      Sortable: Qh,
      Tooltip: rd,
      Upload: ud
    });
    function md(t) {
      Ne && window.MutationObserver && (document.body ? requestAnimationFrame(() => za(t)) : new MutationObserver((e, n) => {
        document.body && (za(t), n.disconnect());
      }).observe(document.documentElement, { childList: !0 }));
    }
    function za(t) {
      j(document, "uikit:init", t), document.body && Oe(document.body, Ha), new MutationObserver((e) => e.forEach(gd)).observe(document, {
        subtree: !0,
        childList: !0
      }), new MutationObserver((e) => e.forEach(vd)).observe(document, {
        subtree: !0,
        attributes: !0
      }), t._initialized = !0;
    }
    function gd({ addedNodes: t, removedNodes: e }) {
      for (const n of t)
        Oe(n, Ha);
      for (const n of e)
        Oe(n, bd);
    }
    function vd({ target: t, attributeName: e }) {
      var n;
      const o = qa(e);
      o && ($e(t, e) ? Vn(o, t) : (n = js(t, o)) == null || n.$destroy());
    }
    function Ha(t) {
      const e = Jn(t);
      for (const n in e)
        io(e[n]);
      for (const n of t.getAttributeNames()) {
        const o = qa(n);
        o && Vn(o, t);
      }
    }
    function bd(t) {
      const e = Jn(t);
      for (const n in e)
        oo(e[n]);
    }
    function qa(t) {
      v(t, "data-") && (t = t.slice(5));
      const e = gn[t];
      return e && (e.options || e).name;
    }
    _h(ne), Eh(ne);
    var Wa = {
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
          return this.items.map((e) => J(t, e));
        },
        contents({ content: t }) {
          return this.items.map((e) => {
            var n;
            return ((n = e._wrapper) == null ? void 0 : n.firstElementChild) || J(t, e);
          });
        }
      },
      watch: {
        items(t, e) {
          if (e || q(t, this.clsOpen))
            return;
          const n = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
          n && this.toggle(n, !1);
        },
        toggles() {
          this.$emit();
        },
        contents(t) {
          for (const e of t) {
            const n = q(
              this.items.find((o) => o.contains(e)),
              this.clsOpen
            );
            Vs(e, !n);
          }
          this.$emit();
        }
      },
      observe: Fs(),
      events: [
        {
          name: "click keydown",
          delegate: ({ targets: t, $props: e }) => `${t} ${e.toggle}`,
          async handler(t) {
            var e;
            t.type === "keydown" && t.keyCode !== lt.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = yd(t.target), await this.toggle(we(this.toggles, t.current)), this._off());
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
        const t = Pn(this.items, `.${this.clsOpen}`);
        for (const e in this.items) {
          const n = this.toggles[e], o = this.contents[e];
          if (!n || !o)
            continue;
          n.id = We(this, n), o.id = We(this, o);
          const l = S(t, this.items[e]);
          N(n, {
            role: $t(n, "a") ? "button" : null,
            "aria-controls": o.id,
            "aria-expanded": l,
            "aria-disabled": !this.collapsible && t.length < 2 && l
          }), N(o, { role: "region", "aria-labelledby": n.id }), $t(o, "ul") && N(ut(o), "role", "presentation");
        }
      },
      methods: {
        toggle(t, e) {
          t = this.items[Qt(t, this.items)];
          let n = [t];
          const o = Pn(this.items, `.${this.clsOpen}`);
          if (!this.multiple && !S(o, n[0]) && (n = n.concat(o)), !(!this.collapsible && o.length < 2 && S(o, t)))
            return Promise.all(
              n.map(
                (l) => this.toggleElement(l, !S(o, l), (c, d) => {
                  if (Et(c, this.clsOpen, d), e === !1 || !this.animation) {
                    Vs(J(this.content, c), !d);
                    return;
                  }
                  return wd(c, d, this);
                })
              )
            );
        }
      }
    };
    function Vs(t, e) {
      t && (t.hidden = e);
    }
    async function wd(t, e, { content: n, duration: o, velocity: l, transition: c }) {
      var d;
      n = ((d = t._wrapper) == null ? void 0 : d.firstElementChild) || J(n, t), t._wrapper || (t._wrapper = Ss(n, "<div>"));
      const p = t._wrapper;
      w(p, "overflow", "hidden");
      const m = Y(w(p, "height"));
      await ht.cancel(p), Vs(n, !1);
      const y = Be(["marginTop", "marginBottom"], (C) => w(n, C)) + D(n).height, x = m / y;
      o = (l * y + o) * (e ? 1 - x : x), w(p, "height", m), await ht.start(p, { height: e ? y : 0 }, o, c), Fn(n), delete t._wrapper, e || Vs(n, !0);
    }
    function yd(t) {
      const e = Ce(t, !0);
      let n;
      return function o() {
        n = requestAnimationFrame(() => {
          const { top: l } = D(t);
          l < 0 && (e.scrollTop += l), o();
        });
      }(), () => requestAnimationFrame(() => cancelAnimationFrame(n));
    }
    var kd = {
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
          await this.toggleElement(this.$el, !1, $d), this.$destroy(!0);
        }
      }
    };
    function $d(t, e, { duration: n, transition: o, velocity: l }) {
      const c = Y(w(t, "height"));
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
    var Va = {
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
        this.autoplay === "inview" && !$e(this.$el, "preload") && (this.$el.preload = "none"), $t(this.$el, "iframe") && !$e(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && ($t(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = !0), this.automute && xr(this.$el);
      },
      events: [
        {
          name: `${De} focusin`,
          filter: ({ autoplay: t }) => S(t, "hover"),
          handler(t) {
            !ue(t) || !xd(this.$el) ? Ui(this.$el) : Cs(this.$el);
          }
        },
        {
          name: `${an} focusout`,
          filter: ({ autoplay: t }) => S(t, "hover"),
          handler(t) {
            ue(t) || Cs(this.$el);
          }
        }
      ],
      observe: [
        fn({
          filter: ({ $el: t, autoplay: e }) => e !== "hover" && Sr(t),
          handler([{ isIntersecting: t }]) {
            document.fullscreenElement || (t ? this.autoplay && Ui(this.$el) : Cs(this.$el));
          },
          args: { intersecting: !1 },
          options: ({ $el: t, autoplay: e }) => ({ root: e === "inview" ? null : ct(t) })
        })
      ]
    };
    function xd(t) {
      return !t.paused && !t.ended;
    }
    var Sd = {
      mixins: [Va],
      props: {
        width: Number,
        height: Number
      },
      data: {
        automute: !0
      },
      created() {
        this.useObjectFit = $t(this.$el, "img", "video");
      },
      observe: le({
        target: ({ $el: t }) => Ja(t) || ct(t),
        filter: ({ useObjectFit: t }) => !t
      }),
      update: {
        read() {
          if (this.useObjectFit)
            return !1;
          const { ratio: t, cover: e } = $i, { $el: n, width: o, height: l } = this;
          let c = { width: o, height: l };
          if (!o || !l) {
            const y = {
              width: n.naturalWidth || n.videoWidth || n.clientWidth,
              height: n.naturalHeight || n.videoHeight || n.clientHeight
            };
            o ? c = t(y, "width", o) : l ? c = t(y, "height", l) : c = y;
          }
          const { offsetHeight: d, offsetWidth: p } = Ja(n) || ct(n), m = e(c, { width: p, height: d });
          return !m.width || !m.height ? !1 : m;
        },
        write({ height: t, width: e }) {
          w(this.$el, { height: t, width: e });
        },
        events: ["resize"]
      }
    };
    function Ja(t) {
      for (; t = ct(t); )
        if (w(t, "position") !== "static")
          return t;
    }
    let Dt;
    var Ka = {
      mixins: [Hn, Ua, ze],
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
        this.tracker = new yr();
      },
      beforeConnect() {
        this.clsDrop = this.$props.clsDrop || this.$options.id;
      },
      connected() {
        Z(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = Ed(this)), this._style = yi(this.$el.style, ["width", "height"]);
      },
      disconnected() {
        this.isActive() && (this.hide(!1), Dt = null), w(this.$el, this._style);
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
            !t && n && ln(e) && !this.$el.contains(J(n)) && this.hide(!1);
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
            Dt = this, this.tracker.init(), N(this.targetEl, "aria-expanded", !0);
            const t = [
              Od(this),
              Td(this),
              Pd(this),
              this.autoUpdate && Ga(this),
              this.closeOnScroll && Cd(this)
            ];
            kt(this.$el, "hide", () => t.forEach((e) => e && e()), {
              self: !0
            }), this.bgScroll || kt(this.$el, "hidden", Gr(this.$el), { self: !0 });
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
              Dt = Dt === null && this.$el.contains(t) && this.isToggled() ? this : Dt;
              return;
            }
            Dt = this.isActive() ? null : Dt, this.tracker.cancel(), N(this.targetEl, "aria-expanded", null);
          }
        }
      ],
      update: {
        write() {
          this.isToggled() && !q(this.$el, this.clsEnter) && this.position();
        }
      },
      methods: {
        show(t = this.targetEl, e = !0) {
          if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
            if (Dt) {
              if (e && Dt.isDelaying()) {
                this.showTimer = setTimeout(() => it(t, ":hover") && this.show(), 10);
                return;
              }
              let n;
              for (; Dt && n !== Dt && !Dt.$el.contains(this.$el); )
                n = Dt, Dt.hide(!1, !1);
            }
            this.container && ct(this.$el) !== this.container && Tt(this.container, this.$el), this.showTimer = setTimeout(
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
          return Dt === this;
        },
        isDelaying() {
          return [this.$el, ...ft(".uk-drop", this.$el)].some((t) => this.tracker.movesTo(t));
        },
        position() {
          const t = Ma(this.$el);
          rt(this.$el, "uk-drop-stack"), w(this.$el, this._style), this.$el.hidden = !0;
          const e = this.target.map((c) => _d(this.$el, c)), n = this.getViewportOffset(this.$el), o = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]]
          ];
          for (const [c, [d, p]] of o)
            this.axis !== d && S([d, !0], this.stretch) && w(this.$el, {
              [p]: Math.min(
                et(this.boundary[c])[p],
                e[c][p] - 2 * n
              ),
              [`overflow-${d}`]: "auto"
            });
          const l = e[0].width - 2 * n;
          this.$el.hidden = !1, w(this.$el, "maxWidth", ""), this.$el.offsetWidth > l && Z(this.$el, "uk-drop-stack"), w(this.$el, "maxWidth", l), this.positionAt(this.$el, this.target, this.boundary);
          for (const [c, [d, p, m, y]] of o)
            if (this.axis === d && S([d, !0], this.stretch)) {
              const x = Math.abs(this.getPositionOffset()), C = et(this.target[c]), I = et(this.$el);
              w(this.$el, {
                [p]: (C[m] > I[m] ? C[this.inset ? y : m] - Math.max(
                  et(this.boundary[c])[m],
                  e[c][m] + n
                ) : Math.min(
                  et(this.boundary[c])[y],
                  e[c][y] - n
                ) - C[this.inset ? m : y]) - x,
                [`overflow-${d}`]: "auto"
              }), this.positionAt(this.$el, this.target, this.boundary);
            }
          t();
        }
      }
    };
    function _d(t, e) {
      return te(Le(e).find((n) => n.contains(t)));
    }
    function Ed(t) {
      const { $el: e } = t.$create("toggle", Lt(t.toggle, t.$el), {
        target: t.$el,
        mode: t.mode
      });
      return N(e, "aria-haspopup", !0), e;
    }
    function Od(t) {
      const e = () => t.$emit(), n = [
        Di(e),
        jn(Le(t.$el).concat(t.target), e)
      ];
      return () => n.map((o) => o.disconnect());
    }
    function Ga(t, e = () => t.$emit()) {
      return V([document, ...Le(t.$el)], "scroll", e, {
        passive: !0
      });
    }
    function Td(t) {
      return V(document, "keydown", (e) => {
        e.keyCode === lt.ESC && t.hide(!1);
      });
    }
    function Cd(t) {
      return Ga(t, () => t.hide(!1));
    }
    function Pd(t) {
      return V(document, ae, ({ target: e }) => {
        t.$el.contains(e) || kt(
          document,
          `${xe} ${gs} scroll`,
          ({ defaultPrevented: n, type: o, target: l }) => {
            var c;
            !n && o === xe && e === l && !((c = t.targetEl) != null && c.contains(e)) && t.hide(!1);
          },
          !0
        );
      });
    }
    var Xa = {
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
        align: Rt ? "right" : "left",
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
          return t ? (t = this._dropbar || Lt(t, this.$el) || J(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = J("<div></div>"))) : null;
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
              !S(o, l) && c && this.$el.contains(c) && o.push(l);
            }
          return o;
        },
        items({ selNavItem: t }, e) {
          return ft(t, e);
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
        Zt(this._dropbar), delete this._dropbar;
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
            o === lt.DOWN && (l == null ? void 0 : l.targetEl) === n && (t.preventDefault(), (e = J(Cn, l.$el)) == null || e.focus()), Ya(t, this.items, l);
          }
        },
        {
          name: "keydown",
          el: ({ dropContainer: t }) => t,
          delegate: ({ clsDrop: t }) => `.${t}`,
          handler(t) {
            var e;
            const { current: n, keyCode: o, target: l } = t;
            if (vs(l) || !S(this.dropdowns, n))
              return;
            const c = this.getActive();
            let d = -1;
            if (o === lt.HOME ? d = 0 : o === lt.END ? d = "last" : o === lt.UP ? d = "previous" : o === lt.DOWN ? d = "next" : o === lt.ESC && ((e = c.targetEl) == null || e.focus()), ~d) {
              t.preventDefault();
              const p = ft(Cn, n);
              p[Qt(
                d,
                p,
                A(p, (m) => it(m, ":focus"))
              )].focus();
            }
            Ya(t, this.items, c);
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
            this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && $s(this.dropbarAnchor, this.dropbar), Z(t, `${this.clsDrop}-dropbar`));
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
                ...An(t, `.${this.clsDrop}`).concat(t).map((l) => et(l).bottom)
              );
              et(this.dropbar, {
                left: et(this.dropbar).left,
                top: this.getDropbarOffset(e.getPositionOffset())
              }), this.transitionTo(
                o - et(this.dropbar).top + Y(w(t, "marginBottom")),
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
          return S(this.dropdowns, (t = Dt) == null ? void 0 : t.$el) && Dt;
        },
        async transitionTo(t, e) {
          const { dropbar: n } = this, o = zt(n);
          if (e = o < t && e, await ht.cancel([e, n]), e) {
            const l = et(e).top - et(n).top - o;
            l > 0 && w(e, "transitionDelay", `${l / t * this.duration}ms`);
          }
          w(e, "clipPath", `polygon(0 0,100% 0,100% ${o}px,0 ${o}px)`), zt(n, o), await Promise.all([
            ht.start(n, { height: t }, this.duration),
            ht.start(
              e,
              { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` },
              this.duration
            ).finally(() => w(e, { clipPath: "", transitionDelay: "" }))
          ]).catch(at);
        },
        getDropdown(t) {
          return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
        },
        isDropbarDrop(t) {
          return S(this.dropdowns, t) && q(t, this.clsDrop);
        },
        getDropbarOffset(t) {
          const { $el: e, target: n, targetY: o } = this, { top: l, height: c } = et(Lt(o || n || e, e));
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
    function Ya(t, e, n) {
      var o, l, c;
      const { current: d, keyCode: p } = t;
      let m = -1;
      p === lt.HOME ? m = 0 : p === lt.END ? m = "last" : p === lt.LEFT ? m = "previous" : p === lt.RIGHT ? m = "next" : p === lt.TAB && ((o = n.targetEl) == null || o.focus(), (l = n.hide) == null || l.call(n, !1)), ~m && (t.preventDefault(), (c = n.hide) == null || c.call(n, !1), e[Qt(m, e, e.indexOf(n.targetEl || d))].focus());
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
        input: (t, e) => J(Tn, e),
        state() {
          return this.input.nextElementSibling;
        },
        target({ target: t }, e) {
          return t && (t === !0 && ct(this.input) === e && this.input.nextElementSibling || J(t, e));
        }
      },
      update() {
        var t;
        const { target: e, input: n } = this;
        if (!e)
          return;
        let o;
        const l = vs(e) ? "value" : "textContent", c = e[l], d = (t = n.files) != null && t[0] ? n.files[0].name : it(n, "select") && (o = ft("option", n).filter((p) => p.selected)[0]) ? o.textContent : n.value;
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
    }, Rd = {
      extends: Mr,
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
        this.masonry && Z(this.$el, "uk-flex-top", "uk-flex-wrap-top");
      },
      observe: Ln({ filter: ({ parallax: t, parallaxJustify: e }) => t || e }),
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
            let { masonry: n, parallax: o, parallaxJustify: l, margin: c } = this;
            if (o = Math.max(0, Bt(o)), !(n || o || l) || Qa(e) || e[0].some(
              (H, tt) => e.some((ot) => ot[tt] && ot[tt].offsetWidth !== H.offsetWidth)
            ))
              return t.translates = t.scrollColumns = !1;
            let d = Bd(e, c), p, m;
            n ? [p, m] = Id(e, d, n === "next") : p = Fd(e);
            const y = p.map(
              (H) => Be(H, "offsetHeight") + d * (H.length - 1)
            ), x = Math.max(0, ...y);
            let C, I, F;
            return (o || l) && (C = y.map(
              (H, tt) => l ? x - H + o : o / (tt % 2 || 8)
            ), l || (o = Math.max(
              ...y.map((H, tt) => H + C[tt] - x)
            )), I = Bt(this.parallaxStart, "height", this.$el, !0), F = Bt(this.parallaxEnd, "height", this.$el, !0)), {
              columns: p,
              translates: m,
              scrollColumns: C,
              parallaxStart: I,
              parallaxEnd: F,
              padding: o,
              height: m ? x : ""
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
              scrolled: e && !Qa(t) ? Rs(this.$el, n, o) : !1
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
    function Qa(t) {
      return t.flat().some((e) => w(e, "position") === "absolute");
    }
    function Id(t, e, n) {
      const o = [], l = [], c = Array(t[0].length).fill(0);
      let d = 0;
      for (let p of t) {
        Rt && (p = p.reverse());
        let m = 0;
        for (const y in p) {
          const { offsetWidth: x, offsetHeight: C } = p[y], I = n ? y : c.indexOf(Math.min(...c));
          lo(o, I, p[y]), lo(l, I, [
            (I - y) * x * (Rt ? -1 : 1),
            c[I] - d
          ]), c[I] += C + e, m = Math.max(m, C);
        }
        d += m + e;
      }
      return [o, l];
    }
    function Bd(t, e) {
      const n = t.flat().find((o) => q(o, e));
      return Y(n ? w(n, "marginTop") : w(t[0][0], "paddingLeft"));
    }
    function Fd(t) {
      const e = [];
      for (const n of t)
        for (const o in n)
          lo(e, o, n[o]);
      return e;
    }
    function lo(t, e, n) {
      t[e] || (t[e] = []), t[e].push(n);
    }
    var Nd = {
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
            rows: (this.row ? Gi(this.elements) : [this.elements]).map(Dd)
          };
        },
        write({ rows: t }) {
          for (const { heights: e, elements: n } of t)
            n.forEach((o, l) => w(o, "minHeight", e[l]));
        },
        events: ["resize"]
      }
    };
    function Dd(t) {
      if (t.length < 2)
        return { heights: [""], elements: t };
      let e = t.map(jd);
      const n = Math.max(...e);
      return {
        heights: t.map((o, l) => e[l].toFixed(2) === n.toFixed(2) ? "" : n),
        elements: t
      };
    }
    function jd(t) {
      const e = yi(t.style, ["display", "minHeight"]);
      Ot(t) || w(t, "display", "block", "important"), w(t, "minHeight", "");
      const n = D(t).height - un(t, "height", "content-box");
      return w(t, e), n;
    }
    var Ud = {
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
    }, Md = {
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
        Ki({ filter: ({ expand: t }) => t }),
        le({ target: ({ $el: t }) => Me(t) })
      ],
      update: {
        read() {
          if (!Ot(this.$el))
            return !1;
          let t = "";
          const e = un(this.$el, "height", "content-box"), { body: n, scrollingElement: o } = document, l = Ce(this.$el), { height: c } = te(
            l === n ? o : l
          ), d = o === l || n === l;
          if (t = `calc(${d ? "100vh" : `${c}px`}`, this.expand) {
            const p = D(l).height - D(this.$el).height;
            t += ` - ${p}px`;
          } else {
            if (this.offsetTop)
              if (d) {
                const p = this.offsetTop === !0 ? this.$el : Lt(this.offsetTop, this.$el), { top: m } = et(p);
                t += m > 0 && m < c / 2 ? ` - ${m}px` : "";
              } else
                t += ` - ${un(l, "height", w(l, "boxSizing"))}px`;
            this.offsetBottom === !0 ? t += ` - ${D(this.$el.nextElementSibling).height}px` : pe(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && P(this.offsetBottom, "px") ? t += ` - ${Y(this.offsetBottom)}px` : vt(this.offsetBottom) && (t += ` - ${D(Lt(this.offsetBottom, this.$el)).height}px`);
          }
          return t += `${e ? ` - ${e}px` : ""})`, { minHeight: t };
        },
        write({ minHeight: t }) {
          w(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"]
      }
    }, Ld = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', zd = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', Hd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', qd = '<svg width="20" height="20" viewBox="0 0 20 20"><rect width="1" height="11" x="9" y="4"/><rect width="11" height="1" x="4" y="9"/></svg>', Wd = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', Vd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Jd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Kd = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1"/><rect width="20" height="2" y="9" class="line-2"/><rect width="20" height="2" y="9" class="line-3"/><rect width="20" height="2" y="15" class="line-4"/></svg>', Gd = '<svg width="40" height="40" viewBox="0 0 40 40"><rect width="1" height="40" x="19" y="0"/><rect width="40" height="1" x="0" y="19"/></svg>', Xd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', Yd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Za = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', Qd = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', Zd = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', tf = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', ef = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', nf = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', sf = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', of = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', rf = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>', tl = {
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
          const e = af(t, this.$el);
          return this.svgEl && e !== this.svgEl && Zt(this.svgEl), lf.call(this, e, t), this.svgEl = e;
        }, at);
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected || (xi(this.$el) && (this.$el.hidden = !1), Zt(t), this.svgEl = null);
        }), this.svg = null;
      },
      methods: {
        async getSvg() {
        }
      }
    };
    function af(t, e) {
      if (xi(e) || $t(e, "canvas")) {
        e.hidden = !0;
        const o = e.nextElementSibling;
        return el(t, o) ? o : $s(e, t);
      }
      const n = e.lastElementChild;
      return el(t, n) ? n : Tt(e, t);
    }
    function el(t, e) {
      return $t(t, "svg") && $t(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function lf(t, e) {
      const n = ["width", "height"];
      let o = n.map((c) => this[c]);
      o.some((c) => c) || (o = n.map((c) => N(e, c)));
      const l = N(e, "viewBox");
      l && !o.some((c) => c) && (o = l.split(" ").slice(2)), o.forEach((c, d) => N(t, n[d], Y(c) * this.ratio || null));
    }
    var cf = {
      mixins: [tl],
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
        Bs({
          async handler() {
            const t = await this.svg;
            t && nl.call(this, t);
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
        t && (nl.call(this, t), this.strokeAnimation && ff(t));
      },
      methods: {
        async getSvg() {
          return $t(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t) => kt(this.$el, "load", t)), hf(await uf(this.src), this.icon) || Promise.reject("SVG not found.");
        }
      }
    };
    function nl(t) {
      const { $el: e } = this;
      Z(t, N(e, "class"), "uk-svg");
      for (let n = 0; n < e.style.length; n++) {
        const o = e.style[n];
        w(t, o, w(e, o));
      }
      for (const n in this.attributes) {
        const [o, l] = this.attributes[n].split(":", 2);
        N(t, o, l);
      }
      this.$el.id || On(t, "id");
    }
    const uf = re(async (t) => t ? v(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function hf(t, e) {
      return e && S(t, "<symbol") && (t = df(t)[e] || t), il(t);
    }
    const sl = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, df = re(function(t) {
      const e = {};
      sl.lastIndex = 0;
      let n;
      for (; n = sl.exec(t); )
        e[n[3]] = `<svg ${n[1]}svg>`;
      return e;
    });
    function ff(t) {
      const e = ba(t);
      e && w(t, "--uk-animation-stroke", e);
    }
    function il(t) {
      const e = document.createElement("template");
      return e.innerHTML = t, e.content.firstElementChild;
    }
    const Js = {
      spinner: of,
      totop: rf,
      marker: qd,
      "close-icon": Ld,
      "close-large": zd,
      "drop-parent-icon": Hd,
      "nav-parent-icon": Vd,
      "nav-parent-icon-large": Wd,
      "navbar-parent-icon": Jd,
      "navbar-toggle-icon": Kd,
      "overlay-icon": Gd,
      "pagination-next": Xd,
      "pagination-previous": Yd,
      "search-icon": Za,
      "search-medium": Zd,
      "search-large": Qd,
      "search-toggle-icon": Za,
      "slidenav-next": ef,
      "slidenav-next-large": tf,
      "slidenav-previous": sf,
      "slidenav-previous-large": nf
    }, co = {
      install: xf,
      mixins: [tl],
      args: "icon",
      props: { icon: String },
      isIcon: !0,
      beforeConnect() {
        Z(this.$el, "uk-icon");
      },
      methods: {
        async getSvg() {
          const t = _f(this.icon);
          if (!t)
            throw "Icon not found.";
          return t;
        }
      }
    }, Je = {
      args: !1,
      extends: co,
      data: (t) => ({
        icon: f(t.constructor.options.name)
      }),
      beforeConnect() {
        Z(this.$el, this.$options.id);
      }
    }, pf = {
      extends: Je,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      }
    }, mf = {
      extends: Je,
      mixins: [Ds],
      i18n: { toggle: "Open Search", submit: "Submit Search" },
      beforeConnect() {
        const t = q(this.$el, "uk-search-toggle") || q(this.$el, "uk-navbar-toggle");
        if (this.icon = t ? "search-toggle-icon" : q(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-medium") ? "search-medium" : this.$props.icon, !$e(this.$el, "aria-label"))
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
    }, gf = {
      extends: Je,
      beforeConnect() {
        N(this.$el, "role", "status");
      },
      methods: {
        async getSvg() {
          const t = await co.methods.getSvg.call(this);
          return this.ratio !== 1 && w(J("circle", t), "strokeWidth", 1 / this.ratio), t;
        }
      }
    }, Ke = {
      extends: Je,
      mixins: [Ds],
      beforeConnect() {
        const t = this.$el.closest("a,button");
        N(t, "role", this.role !== null && $t(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !$e(t, "aria-label") && N(t, "aria-label", e);
      }
    }, ol = {
      extends: Ke,
      beforeConnect() {
        Z(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = q(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      }
    }, vf = {
      extends: Ke,
      i18n: { label: "Open menu" }
    }, bf = {
      extends: Ke,
      i18n: { label: "Close" },
      beforeConnect() {
        this.icon = `close-${q(this.$el, "uk-close-large") ? "large" : "icon"}`;
      }
    }, wf = {
      extends: Ke,
      i18n: { label: "Open" }
    }, yf = {
      extends: Ke,
      i18n: { label: "Back to top" }
    }, kf = {
      extends: Ke,
      i18n: { label: "Next page" },
      data: { role: null }
    }, $f = {
      extends: Ke,
      i18n: { label: "Previous page" },
      data: { role: null }
    }, Ks = {};
    function xf(t) {
      t.icon.add = (e, n) => {
        const o = vt(e) ? { [e]: n } : e;
        sn(o, (l, c) => {
          Js[c] = l, delete Ks[c];
        }), t._initialized && Oe(
          document.body,
          (l) => sn(t.getComponents(l), (c) => {
            c.$options.isIcon && c.icon in o && c.$reset();
          })
        );
      };
    }
    const Sf = { twitter: "x" };
    function _f(t) {
      return t = Sf[t] || t, Js[t] ? (Ks[t] || (Ks[t] = il(Js[Ef(t)] || Js[t])), Ks[t].cloneNode(!0)) : null;
    }
    function Ef(t) {
      return Rt ? wi(wi(t, "left", "right"), "previous", "next") : t;
    }
    var Of = {
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
        this.loading !== "lazy" ? this.load() : ho(this.$el) && (this.$el.loading = "lazy", uo(this.$el));
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
          const t = ho(this.$el) ? this.$el : Cf(this.$el, this.dataSrc, this.sources);
          return On(t, "loading"), uo(this.$el, t.currentSrc), this.img = t;
        }
      }
    };
    function uo(t, e) {
      if (ho(t)) {
        const n = ct(t);
        ($t(n, "picture") ? ut(n) : [t]).forEach((l) => rl(l, l));
      } else e && !S(t.style.backgroundImage, e) && (w(t, "backgroundImage", `url(${Oi(e)})`), j(t, cn("load", !1)));
    }
    const Tf = ["data-src", "data-srcset", "sizes"];
    function rl(t, e) {
      for (const n of Tf) {
        const o = Nt(t, n);
        o && N(e, n.replace(/^(data-)+/, ""), o);
      }
    }
    function Cf(t, e, n) {
      const o = new Image();
      return Pf(o, n), rl(t, o), o.onload = () => {
        uo(t, o.currentSrc);
      }, N(o, "src", e), o;
    }
    function Pf(t, e) {
      if (e = Af(e), e.length) {
        const n = je("<picture>");
        for (const o of e) {
          const l = je("<source>");
          N(l, o), Tt(n, l);
        }
        Tt(n, t);
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
      return T(t) || (t = [t]), t.filter((e) => !hs(e));
    }
    function ho(t) {
      return $t(t, "img");
    }
    var Rf = {
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
        fn({
          handler(t) {
            this.isIntersecting = t.some(({ isIntersecting: e }) => e), this.$emit();
          },
          target: ({ target: t }) => t,
          args: { intersecting: !1 }
        }),
        Bs({
          target: ({ target: t }) => t,
          options: { attributes: !0, attributeFilter: ["class"], attributeOldValue: !0 }
        }),
        {
          target: ({ target: t }) => t,
          observe: (t, e) => {
            const n = jn(
              [...nt(t), document.documentElement],
              e
            ), o = [
              V(document, "scroll itemshown itemhidden", e, {
                passive: !0,
                capture: !0
              }),
              V(document, "show hide transitionstart", (l) => (e(), n.observe(l.target))),
              V(document, "shown hidden transitionend transitioncancel", (l) => (e(), n.unobserve(l.target)))
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
          for (const t of nt(this.target)) {
            let e = !this.selActive || it(t, this.selActive) ? If(t) : "";
            e !== !1 && ps(t, "uk-light uk-dark", e);
          }
        }
      }
    };
    function If(t) {
      const e = D(t), n = D(window);
      if (!ds(e, n))
        return !1;
      const { left: o, top: l, height: c, width: d } = e;
      let p;
      for (const m of [0.25, 0.5, 0.75]) {
        const y = t.ownerDocument.elementsFromPoint(
          Math.max(0, Math.min(o + d * m, n.width - 1)),
          Math.max(0, Math.min(l + c / 2, n.height - 1))
        );
        for (const x of y) {
          if (t.contains(x) || !Bf(x) || x.closest('[class*="-leave"]') && y.some((I) => x !== I && it(I, '[class*="-enter"]')))
            continue;
          const C = w(x, "--uk-inverse");
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
    function Bf(t) {
      if (w(t, "visibility") !== "visible")
        return !1;
      for (; t; ) {
        if (w(t, "opacity") === "0")
          return !1;
        t = ct(t);
      }
      return !0;
    }
    var Ff = {
      mixins: [Ht, Us],
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
        [this.wrapper] = Ii(this.$el, `<span class="${this.clsWrapper}">`);
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
          Et(this.wrapper, this.clsHide, n), N(this.wrapper, this.attrFill, new Array(t).join(e));
        },
        events: ["resize"]
      }
    }, Nf = {
      install: Df,
      mixins: [eo],
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
            $t(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            q(this.panel, "uk-margin-auto-vertical") ? Z(this.$el, "uk-flex") : w(this.$el, "display", "block"), zt(this.$el);
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            w(this.$el, "display", ""), rt(this.$el, "uk-flex");
          }
        }
      ]
    };
    function Df({ modal: t }) {
      t.dialog = function(n, o) {
        const l = t(J(`<div><div class="uk-modal-dialog">${n}</div></div>`), {
          stack: !0,
          role: "alertdialog",
          ...o
        });
        return l.show(), V(
          l.$el,
          "hidden",
          async () => {
            await Promise.resolve(), l.$destroy(!0);
          },
          { self: !0 }
        ), l;
      }, t.alert = function(n, o) {
        return e(
          ({ i18n: l }) => `<div class="uk-modal-body">${vt(n) ? n : Ee(n)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${l.ok}</button> </div>`,
          o
        );
      }, t.confirm = function(n, o) {
        return e(
          ({ i18n: l }) => `<form> <div class="uk-modal-body">${vt(n) ? n : Ee(n)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${l.ok}</button> </div> </form>`,
          o,
          () => Promise.reject()
        );
      }, t.prompt = function(n, o, l) {
        const c = e(
          ({ i18n: m }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${vt(n) ? n : Ee(n)}</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${m.cancel}</button> <button class="uk-button uk-button-primary">${m.ok}</button> </div> </form>`,
          l,
          () => null,
          () => p.value
        ), { $el: d } = c.dialog, p = J("input", d);
        return p.value = o || "", V(d, "show", () => p.select()), c;
      }, t.i18n = {
        ok: "Ok",
        cancel: "Cancel"
      };
      function e(n, o, l = at, c = at) {
        o = {
          bgClose: !1,
          escClose: !0,
          ...o,
          i18n: { ...t.i18n, ...o == null ? void 0 : o.i18n }
        };
        const d = t.dialog(n(o), o);
        return W(
          new Promise((p) => {
            const m = V(d.$el, "hide", () => p(l()));
            V(d.$el, "submit", "form", (y) => {
              y.preventDefault(), p(c(d)), m(), d.hide();
            });
          }),
          { dialog: d }
        );
      }
    }
    var jf = {
      extends: Wa,
      data: {
        targets: "> .uk-parent",
        toggle: "> a",
        content: "> ul"
      }
    };
    const fo = "uk-navbar-transparent";
    var Uf = {
      extends: Xa,
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
          const t = q(this.$el, "uk-navbar-justify"), e = ft(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
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
            this.getTransparentMode(t) === "remove" && q(this.navbarContainer, fo) && (rt(this.navbarContainer, fo), this._transparent = !0);
          }
        },
        {
          name: "hide",
          el: ({ dropContainer: t }) => t,
          async handler() {
            await Mf(), !this.getActive() && this._transparent && (Z(this.navbarContainer, fo), this._transparent = null);
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
          if (e && q(t, "uk-dropbar"))
            return e.inset ? "behind" : "remove";
        },
        getDropbarOffset(t) {
          const { top: e, height: n } = et(this.navbarContainer);
          return e + (this.dropbarTransparentMode === "behind" ? 0 : n + t);
        }
      }
    };
    function Mf() {
      return new Promise((t) => setTimeout(t));
    }
    var Lf = {
      mixins: [eo],
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
      observe: Ur({ filter: ({ swiping: t }) => t }),
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
            this.mode === "reveal" && !q(ct(this.panel), this.clsMode) && Z(Ss(this.panel, "<div>"), this.clsMode);
            const { body: t, scrollingElement: e } = document;
            Z(t, this.clsContainer, this.clsFlip), w(t, "touchAction", "pan-y pinch-zoom"), w(this.$el, "display", "block"), w(this.panel, "maxWidth", e.clientWidth), Z(this.$el, this.clsOverlay), Z(
              this.panel,
              this.clsSidebarAnimation,
              this.mode === "reveal" ? "" : this.clsMode
            ), zt(t), Z(t, this.clsContainerAnimation), this.clsContainerAnimation && zf();
          }
        },
        {
          name: "hide",
          self: !0,
          handler() {
            rt(document.body, this.clsContainerAnimation), w(document.body, "touchAction", "");
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.clsContainerAnimation && Hf(), this.mode === "reveal" && q(ct(this.panel), this.clsMode) && Fn(this.panel), rt(this.panel, this.clsSidebarAnimation, this.clsMode), rt(this.$el, this.clsOverlay), w(this.$el, "display", ""), w(this.panel, "maxWidth", ""), rt(document.body, this.clsContainer, this.clsFlip);
          }
        },
        {
          name: "swipeLeft swipeRight",
          handler(t) {
            this.isToggled() && P(t.type, "Left") ^ this.flip && this.hide();
          }
        }
      ]
    };
    function zf() {
      al().content += ",user-scalable=0";
    }
    function Hf() {
      const t = al();
      t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function al() {
      return J('meta[name="viewport"]', document.head) || Tt(document.head, '<meta name="viewport">');
    }
    var qf = {
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
          return !this.content || !this.container || !Ot(this.$el) ? !1 : {
            max: Math.max(
              this.minHeight,
              zt(this.container) - (D(this.content).height - zt(this.$el))
            )
          };
        },
        write({ max: t }) {
          w(this.$el, { minHeight: this.minHeight, maxHeight: t });
        },
        events: ["resize"]
      }
    }, Wf = {
      props: ["width", "height"],
      connected() {
        Z(this.$el, "uk-responsive-width"), w(this.$el, "aspectRatio", `${this.width}/${this.height}`);
      }
    }, Vf = {
      props: {
        offset: Number
      },
      data: {
        offset: 0
      },
      connected() {
        Jf(this);
      },
      disconnected() {
        Kf(this);
      },
      methods: {
        async scrollTo(t) {
          t = t && J(t) || document.body, j(this.$el, "beforescroll", [this, t]) && (await Tr(t, { offset: this.offset }), j(this.$el, "scrolled", [this, t]));
        }
      }
    };
    const Qn = /* @__PURE__ */ new Set();
    function Jf(t) {
      Qn.size || V(document, "click", ll), Qn.add(t);
    }
    function Kf(t) {
      Qn.delete(t), Qn.size || Se(document, "click", ll);
    }
    function ll(t) {
      if (!t.defaultPrevented)
        for (const e of Qn)
          e.$el.contains(t.target) && ln(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(Si(e.$el)));
    }
    const po = "uk-scrollspy-inview";
    var Gf = {
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
          this.hidden && w(Pn(t, `:not(.${po})`), "opacity", 0);
        }
      },
      connected() {
        this.elementData = /* @__PURE__ */ new Map();
      },
      disconnected() {
        for (const [t, e] of this.elementData.entries())
          rt(t, po, (e == null ? void 0 : e.cls) || "");
        delete this.elementData;
      },
      observe: fn({
        target: ({ elements: t }) => t,
        handler(t) {
          const e = this.elementData;
          for (const { target: n, isIntersecting: o } of t) {
            e.has(n) || e.set(n, {
              cls: Nt(n, "uk-scrollspy-class") || this.cls
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
          (o = l.off) == null || o.call(l), w(t, "opacity", !e && this.hidden ? 0 : ""), Et(t, po, e), Et(t, l.cls);
          let c;
          if (c = l.cls.match(/\buk-animation-[\w-]+/g)) {
            const d = () => rt(t, c);
            e ? l.off = kt(t, "animationcancel animationend", d, {
              self: !0
            }) : d();
          }
          j(t, e ? "inview" : "outview"), l.inview = e;
        }
      }
    }, Xf = {
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
        links: ({ target: t }, e) => ft(t, e).filter((n) => ln(n)),
        elements({ closest: t }) {
          return this.links.map((e) => e.closest(t || "*"));
        }
      },
      watch: {
        links(t) {
          this.scroll && this.$create("scroll", t, { offset: this.offset });
        }
      },
      observe: [fn(), Ln()],
      update: [
        {
          read() {
            const t = this.links.map((m) => Si(m) || m.ownerDocument), { length: e } = t;
            if (!e || !Ot(this.$el))
              return !1;
            const n = Ce(t, !0), { scrollTop: o, scrollHeight: l } = n, c = te(n), d = l - c.height;
            let p = !1;
            if (o >= d)
              p = e - 1;
            else {
              const m = this.offset + D(zi()).height + c.height * 0.1;
              for (let y = 0; y < t.length && !(et(t[y]).top - c.top - m > 0); y++)
                p = +y;
            }
            return { active: p };
          },
          write({ active: t }) {
            const e = t !== !1 && !q(this.elements[t], this.cls);
            this.links.forEach((n) => n.blur());
            for (let n = 0; n < this.elements.length; n++)
              Et(this.elements[n], this.cls, +n === t);
            e && j(this.$el, "active", [t, this.elements[t]]);
          },
          events: ["scroll", "resize"]
        }
      ]
    }, Yf = {
      mixins: [Ht, Us],
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
        target: ({ selTarget: t }, e) => t && J(t, e) || e
      },
      connected() {
        this.start = cl(this.start || this.top), this.end = cl(this.end || this.bottom), this.placeholder = J("+ .uk-sticky-placeholder", this.$el) || J('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
      },
      beforeDisconnect() {
        this.isFixed && (this.hide(), rt(this.target, this.clsInactive)), ul(this.$el), Zt(this.placeholder), this.placeholder = null;
      },
      observe: [
        Ki(),
        Ln({ target: () => document.scrollingElement }),
        le({
          target: ({ $el: t }) => [t, Gs(t), document.scrollingElement],
          handler(t) {
            this.$emit(
              this._data.resized && t.some(({ target: e }) => e === Gs(this.$el)) ? "update" : "resize"
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
              const e = et(J(location.hash)), n = et(this.$el);
              this.isFixed && ds(e, n) && (t.scrollTop = Math.ceil(
                e.top - n.height - Bt(this.targetOffset, "height", this.placeholder) - Bt(this.offset, "height", this.placeholder)
              ));
            });
          }
        }
      ],
      update: [
        {
          read({ height: t, width: e, margin: n, sticky: o }, l) {
            if (this.inactive = !this.matchMedia || !Ot(this.$el) || !this.$el.offsetHeight, this.inactive)
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
            p && (vo(this.target), this.hide()), this.active || ({ height: t, width: e } = D(this.$el), n = w(this.$el, "margin")), p && this.show();
            const m = Bt("100vh", "height");
            let y = this.position;
            this.overflowFlip && t > m && (y = y === "top" ? "bottom" : "top");
            const x = this.isFixed ? this.placeholder : this.$el;
            let C = Bt(this.offset, "height", o ? this.$el : x);
            y === "bottom" && (t < c || this.overflowFlip) && (C += c - t);
            const I = this.overflowFlip ? 0 : Math.max(0, t + C - m), F = et(x).top - // offset possible `transform: translateY` animation 'uk-animation-slide-top' while hiding
            new DOMMatrix(w(x, "transform")).m42, H = D(this.$el).height, tt = (this.start === !1 ? F : mo(this.start, this.$el, F)) - C, ot = this.end === !1 ? d : Math.min(
              d,
              mo(this.end, this.$el, F + t, !0) - H - C + I
            );
            return o = !this.showOnUp && tt + C === F && ot === Math.min(
              d,
              mo(!0, this.$el, 0, !0) - H - C + I
            ) && w(Gs(this.$el), "overflowY") !== "hidden", {
              start: tt,
              end: ot,
              offset: C,
              overflow: I,
              height: t,
              elHeight: H,
              width: e,
              margin: n,
              top: Nn(x)[0],
              sticky: o,
              viewport: m,
              maxScrollHeight: d
            };
          },
          write({ height: t, width: e, margin: n, offset: o, sticky: l }) {
            if ((this.inactive || l || !this.isFixed) && ul(this.$el), this.inactive)
              return;
            l && (t = e = n = 0, w(this.$el, { position: "sticky", top: o }));
            const { placeholder: c } = this;
            w(c, { height: t, width: e, margin: n }), (ct(c) !== ct(this.$el) || l ^ we(c) < we(this.$el)) && ((l ? ks : $s)(this.$el, c), c.hidden = !0);
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
            const x = Math.min(document.scrollingElement.scrollTop, y), C = t <= x ? "down" : "up", I = this.isFixed ? this.placeholder : this.$el;
            return {
              dir: C,
              prevDir: e,
              scroll: x,
              prevScroll: t,
              below: x > et(I).top + (m ? Math.min(p, d) : p),
              offsetParentTop: et(I.offsetParent).top,
              overflowScroll: Mt(
                o + Mt(x, l, c) - Mt(t, l, c),
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
              below: x
            } = t;
            if (d < 0 || d === p && n || this.showOnUp && !n && !this.isFixed)
              return;
            const C = Date.now();
            if ((C - o > 300 || l !== c) && (t.initScroll = d, t.initTimestamp = C), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - d) <= 30 && Math.abs(p - d) <= 10))
              if (this.inactive || d < y || this.showOnUp && (d <= y || l === "down" && n || l === "up" && !this.isFixed && !x)) {
                if (!this.isFixed) {
                  _e.inProgress(this.$el) && m > d && (_e.cancel(this.$el), this.hide());
                  return;
                }
                if (this.animation && x) {
                  if (q(this.$el, "uk-animation-leave"))
                    return;
                  _e.out(this.$el, this.animation).then(() => this.hide(), at);
                } else
                  this.hide();
              } else this.isFixed ? this.update() : this.animation && x ? (this.show(), _e.in(this.$el, this.animation).catch(at)) : (vo(this.target), this.show());
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
          this.setActive(!1), rt(this.$el, this.clsFixed, this.clsBelow), e ? w(this.$el, "top", t) : w(this.$el, {
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
          const x = l !== 0 || e > l;
          if (!m) {
            let C = "fixed";
            e > c && (d += c - p + o - n, C = "absolute"), w(this.$el, { position: C, width: t, marginTop: 0 }, "important");
          }
          w(this.$el, "top", d - o), this.setActive(x), Et(this.$el, this.clsBelow, y), Z(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          this.active = t, t ? (ps(this.target, this.clsInactive, this.clsActive), e !== t && j(this.$el, "active")) : (ps(this.target, this.clsActive, this.clsInactive), e !== t && (vo(this.target), j(this.$el, "inactive")));
        }
      }
    };
    function mo(t, e, n, o) {
      if (!t)
        return 0;
      if (pe(t) || vt(t) && t.match(/^-?\d/))
        return n + Bt(t, "height", e, !0);
      {
        const l = t === !0 ? Gs(e) : Lt(t, e);
        return et(l).bottom - (o && (l != null && l.contains(e)) ? Y(w(l, "paddingBottom")) + Y(w(l, "borderBottomWidth")) : 0);
      }
    }
    function cl(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function ul(t) {
      w(t, { position: "", top: "", marginTop: "", width: "" });
    }
    const go = "uk-transition-disable";
    function vo(t) {
      q(t, go) || (Z(t, go), requestAnimationFrame(() => rt(t, go)));
    }
    function Gs(t) {
      for (; t = ct(t); )
        if (Ot(t))
          return t;
    }
    const bo = ".uk-disabled *, .uk-disabled, [disabled]";
    var hl = {
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
        toggles: ({ toggle: t }, e) => ft(t, e),
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
            ut(e).forEach((n, o) => Et(n, this.cls, o === t));
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
        Fs({ targets: ({ connectChildren: t }) => t }),
        Ur({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })
      ],
      events: [
        {
          name: "click keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            !it(t.current, bo) && (t.type === "click" || t.keyCode === lt.SPACE) && (t.preventDefault(), this.show(t.current));
          }
        },
        {
          name: "keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            const { current: e, keyCode: n } = t, o = it(this.$el, this.selVertical);
            let l = n === lt.HOME ? 0 : n === lt.END ? "last" : n === lt.LEFT && !o || n === lt.UP && o ? "previous" : n === lt.RIGHT && !o || n === lt.DOWN && o ? "next" : -1;
            if (~l) {
              t.preventDefault();
              const c = this.toggles.filter((p) => !it(p, bo)), d = c[Qt(l, c, c.indexOf(e))];
              d.focus(), this.followFocus && this.show(d);
            }
          }
        },
        {
          name: "click",
          el: ({ $el: t, connects: e, itemNav: n }) => e.concat(n ? Rn(n, t) : []),
          delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`,
          handler(t) {
            t.target.closest("a,button") && (t.preventDefault(), this.show(Nt(t.current, this.attrItem)));
          }
        },
        {
          name: "swipeRight swipeLeft",
          filter: ({ swiping: t }) => t,
          el: ({ connects: t }) => t,
          handler({ type: t }) {
            this.show(P(t, "Left") ? "next" : "previous");
          }
        }
      ],
      update() {
        var t;
        for (const e of this.connects)
          $t(e, "ul") && N(e, "role", "presentation");
        N(ut(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const n = this.toggles[e], o = (t = this.connects[0]) == null ? void 0 : t.children[e];
          N(n, "role", "tab"), o && (n.id = We(this, n), o.id = We(this, o), N(n, "aria-controls", o.id), N(o, { role: "tabpanel", "aria-labelledby": n.id }));
        }
        N(this.$el, "aria-orientation", it(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return A(this.children, (t) => q(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter((d) => !it(d, bo)), n = this.index(), o = Qt(
            !At(t) || S(e, t) ? t : 0,
            e,
            Qt(this.toggles[n], e)
          ), l = Qt(e[o], this.toggles);
          this.children.forEach((d, p) => {
            Et(d, this.cls, l === p), N(this.toggles[p], {
              "aria-selected": l === p,
              tabindex: l === p ? null : -1
            });
          });
          const c = n >= 0 && n !== o;
          this.connects.forEach(async ({ children: d }) => {
            const p = O(d).filter(
              (m, y) => y !== l && q(m, this.cls)
            );
            await this.toggleElement(p, !1, c) && await this.toggleElement(d[l], !0, c);
          });
        }
      }
    }, Qf = {
      mixins: [Ht],
      extends: hl,
      props: {
        media: Boolean
      },
      data: {
        media: 960,
        attrItem: "uk-tab-item",
        selVertical: ".uk-tab-left,.uk-tab-right"
      },
      connected() {
        const t = q(this.$el, "uk-tab-left") ? "uk-tab-left" : q(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
        t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
      }
    };
    const Zf = 32;
    var tp = {
      mixins: [Us, ze],
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
        S(this.mode, "media") || (bs(this.$el) || N(this.$el, "tabindex", "0"), !this.cls && $t(this.$el, "a") && N(this.$el, "role", "button"));
      },
      observe: Fs({ targets: ({ target: t }) => t }),
      events: [
        {
          name: ae,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            this._preventClick = null, !(!ue(t) || oe(this._showState) || this.$el.disabled) && (j(this.$el, "focus"), kt(
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
            if (!e && (!oe(this._showState) || t.type !== "blur" && it(this.$el, ":focus") || t.type === "blur" && it(this.$el, ":hover"))) {
              n === this._showState && (this._showState = null);
              return;
            }
            e && oe(this._showState) && n !== this._showState || (this._showState = e ? n : null, this.toggle(`toggle${e ? "show" : "hide"}`));
          }
        },
        {
          name: "keydown",
          filter: ({ $el: t, mode: e }) => S(e, "click") && !$t(t, "input"),
          handler(t) {
            t.keyCode === Zf && (t.preventDefault(), this.$el.click());
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
          if (!j(this.target, t || "toggle", [this]))
            return;
          if ($e(this.$el, "aria-expanded") && N(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
            return this.toggleElement(this.target);
          const e = this.target.filter((o) => q(o, this.clsLeave));
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
    }, ep = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Accordion: Wa,
      Alert: kd,
      Close: bf,
      Cover: Sd,
      Drop: Ka,
      DropParentIcon: Je,
      Dropdown: Ka,
      Dropnav: Xa,
      FormCustom: Ad,
      Grid: Rd,
      HeightMatch: Nd,
      HeightPlaceholder: Ud,
      HeightViewport: Md,
      Icon: co,
      Img: Of,
      Inverse: Rf,
      Leader: Ff,
      Margin: Mr,
      Marker: wf,
      Modal: Nf,
      Nav: jf,
      NavParentIcon: pf,
      Navbar: Uf,
      NavbarParentIcon: Je,
      NavbarToggleIcon: vf,
      Offcanvas: Lf,
      OverflowAuto: qf,
      OverlayIcon: Je,
      PaginationNext: kf,
      PaginationPrevious: $f,
      Responsive: Wf,
      Scroll: Vf,
      Scrollspy: Gf,
      ScrollspyNav: Xf,
      SearchIcon: mf,
      SlidenavNext: ol,
      SlidenavPrevious: ol,
      Spinner: gf,
      Sticky: Yf,
      Svg: cf,
      Switcher: hl,
      Tab: Qf,
      Toggle: tp,
      Totop: yf,
      Video: Va
    });
    return sn(ep, (t, e) => ne.component(e, t)), md(ne), sn(pd, (t, e) => ne.component(e, t)), ne;
  });
})(Wl);
var pm = Wl.exports;
const Vl = /* @__PURE__ */ fm(pm);
function Jl(s, i) {
  return function() {
    return s.apply(i, arguments);
  };
}
const { toString: mm } = Object.prototype, { getPrototypeOf: Vo } = Object, li = /* @__PURE__ */ ((s) => (i) => {
  const r = mm.call(i);
  return s[r] || (s[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), de = (s) => (s = s.toLowerCase(), (i) => li(i) === s), ci = (s) => (i) => typeof i === s, { isArray: kn } = Array, ss = ci("undefined");
function gm(s) {
  return s !== null && !ss(s) && s.constructor !== null && !ss(s.constructor) && se(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const Kl = de("ArrayBuffer");
function vm(s) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(s) : i = s && s.buffer && Kl(s.buffer), i;
}
const bm = ci("string"), se = ci("function"), Gl = ci("number"), ui = (s) => s !== null && typeof s == "object", wm = (s) => s === !0 || s === !1, Ys = (s) => {
  if (li(s) !== "object")
    return !1;
  const i = Vo(s);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, ym = de("Date"), km = de("File"), $m = de("Blob"), xm = de("FileList"), Sm = (s) => ui(s) && se(s.pipe), _m = (s) => {
  let i;
  return s && (typeof FormData == "function" && s instanceof FormData || se(s.append) && ((i = li(s)) === "formdata" || // detect form-data instance
  i === "object" && se(s.toString) && s.toString() === "[object FormData]"));
}, Em = de("URLSearchParams"), [Om, Tm, Cm, Pm] = ["ReadableStream", "Request", "Response", "Headers"].map(de), Am = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function as(s, i, { allOwnKeys: r = !1 } = {}) {
  if (s === null || typeof s > "u")
    return;
  let a, u;
  if (typeof s != "object" && (s = [s]), kn(s))
    for (a = 0, u = s.length; a < u; a++)
      i.call(null, s[a], a, s);
  else {
    const h = r ? Object.getOwnPropertyNames(s) : Object.keys(s), f = h.length;
    let g;
    for (a = 0; a < f; a++)
      g = h[a], i.call(null, s[g], g, s);
  }
}
function Xl(s, i) {
  i = i.toLowerCase();
  const r = Object.keys(s);
  let a = r.length, u;
  for (; a-- > 0; )
    if (u = r[a], i === u.toLowerCase())
      return u;
  return null;
}
const Xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Yl = (s) => !ss(s) && s !== Xe;
function Co() {
  const { caseless: s } = Yl(this) && this || {}, i = {}, r = (a, u) => {
    const h = s && Xl(i, u) || u;
    Ys(i[h]) && Ys(a) ? i[h] = Co(i[h], a) : Ys(a) ? i[h] = Co({}, a) : kn(a) ? i[h] = a.slice() : i[h] = a;
  };
  for (let a = 0, u = arguments.length; a < u; a++)
    arguments[a] && as(arguments[a], r);
  return i;
}
const Rm = (s, i, r, { allOwnKeys: a } = {}) => (as(i, (u, h) => {
  r && se(u) ? s[h] = Jl(u, r) : s[h] = u;
}, { allOwnKeys: a }), s), Im = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), Bm = (s, i, r, a) => {
  s.prototype = Object.create(i.prototype, a), s.prototype.constructor = s, Object.defineProperty(s, "super", {
    value: i.prototype
  }), r && Object.assign(s.prototype, r);
}, Fm = (s, i, r, a) => {
  let u, h, f;
  const g = {};
  if (i = i || {}, s == null) return i;
  do {
    for (u = Object.getOwnPropertyNames(s), h = u.length; h-- > 0; )
      f = u[h], (!a || a(f, s, i)) && !g[f] && (i[f] = s[f], g[f] = !0);
    s = r !== !1 && Vo(s);
  } while (s && (!r || r(s, i)) && s !== Object.prototype);
  return i;
}, Nm = (s, i, r) => {
  s = String(s), (r === void 0 || r > s.length) && (r = s.length), r -= i.length;
  const a = s.indexOf(i, r);
  return a !== -1 && a === r;
}, Dm = (s) => {
  if (!s) return null;
  if (kn(s)) return s;
  let i = s.length;
  if (!Gl(i)) return null;
  const r = new Array(i);
  for (; i-- > 0; )
    r[i] = s[i];
  return r;
}, jm = /* @__PURE__ */ ((s) => (i) => s && i instanceof s)(typeof Uint8Array < "u" && Vo(Uint8Array)), Um = (s, i) => {
  const r = (s && s[Symbol.iterator]).call(s);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const u = a.value;
    i.call(s, u[0], u[1]);
  }
}, Mm = (s, i) => {
  let r;
  const a = [];
  for (; (r = s.exec(i)) !== null; )
    a.push(r);
  return a;
}, Lm = de("HTMLFormElement"), zm = (s) => s.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, r, a) {
    return r.toUpperCase() + a;
  }
), gl = (({ hasOwnProperty: s }) => (i, r) => s.call(i, r))(Object.prototype), Hm = de("RegExp"), Ql = (s, i) => {
  const r = Object.getOwnPropertyDescriptors(s), a = {};
  as(r, (u, h) => {
    let f;
    (f = i(u, h, s)) !== !1 && (a[h] = f || u);
  }), Object.defineProperties(s, a);
}, qm = (s) => {
  Ql(s, (i, r) => {
    if (se(s) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const a = s[r];
    if (se(a)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Wm = (s, i) => {
  const r = {}, a = (u) => {
    u.forEach((h) => {
      r[h] = !0;
    });
  };
  return kn(s) ? a(s) : a(String(s).split(i)), r;
}, Vm = () => {
}, Jm = (s, i) => s != null && Number.isFinite(s = +s) ? s : i, yo = "abcdefghijklmnopqrstuvwxyz", vl = "0123456789", Zl = {
  DIGIT: vl,
  ALPHA: yo,
  ALPHA_DIGIT: yo + yo.toUpperCase() + vl
}, Km = (s = 16, i = Zl.ALPHA_DIGIT) => {
  let r = "";
  const { length: a } = i;
  for (; s--; )
    r += i[Math.random() * a | 0];
  return r;
};
function Gm(s) {
  return !!(s && se(s.append) && s[Symbol.toStringTag] === "FormData" && s[Symbol.iterator]);
}
const Xm = (s) => {
  const i = new Array(10), r = (a, u) => {
    if (ui(a)) {
      if (i.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        i[u] = a;
        const h = kn(a) ? [] : {};
        return as(a, (f, g) => {
          const $ = r(f, u + 1);
          !ss($) && (h[g] = $);
        }), i[u] = void 0, h;
      }
    }
    return a;
  };
  return r(s, 0);
}, Ym = de("AsyncFunction"), Qm = (s) => s && (ui(s) || se(s)) && se(s.then) && se(s.catch), tc = ((s, i) => s ? setImmediate : i ? ((r, a) => (Xe.addEventListener("message", ({ source: u, data: h }) => {
  u === Xe && h === r && a.length && a.shift()();
}, !1), (u) => {
  a.push(u), Xe.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  se(Xe.postMessage)
), Zm = typeof queueMicrotask < "u" ? queueMicrotask.bind(Xe) : typeof process < "u" && process.nextTick || tc, _ = {
  isArray: kn,
  isArrayBuffer: Kl,
  isBuffer: gm,
  isFormData: _m,
  isArrayBufferView: vm,
  isString: bm,
  isNumber: Gl,
  isBoolean: wm,
  isObject: ui,
  isPlainObject: Ys,
  isReadableStream: Om,
  isRequest: Tm,
  isResponse: Cm,
  isHeaders: Pm,
  isUndefined: ss,
  isDate: ym,
  isFile: km,
  isBlob: $m,
  isRegExp: Hm,
  isFunction: se,
  isStream: Sm,
  isURLSearchParams: Em,
  isTypedArray: jm,
  isFileList: xm,
  forEach: as,
  merge: Co,
  extend: Rm,
  trim: Am,
  stripBOM: Im,
  inherits: Bm,
  toFlatObject: Fm,
  kindOf: li,
  kindOfTest: de,
  endsWith: Nm,
  toArray: Dm,
  forEachEntry: Um,
  matchAll: Mm,
  isHTMLForm: Lm,
  hasOwnProperty: gl,
  hasOwnProp: gl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ql,
  freezeMethods: qm,
  toObjectSet: Wm,
  toCamelCase: zm,
  noop: Vm,
  toFiniteNumber: Jm,
  findKey: Xl,
  global: Xe,
  isContextDefined: Yl,
  ALPHABET: Zl,
  generateString: Km,
  isSpecCompliantForm: Gm,
  toJSONObject: Xm,
  isAsyncFn: Ym,
  isThenable: Qm,
  setImmediate: tc,
  asap: Zm
};
function K(s, i, r, a, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = s, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), a && (this.request = a), u && (this.response = u, this.status = u.status ? u.status : null);
}
_.inherits(K, Error, {
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
const ec = K.prototype, nc = {};
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
].forEach((s) => {
  nc[s] = { value: s };
});
Object.defineProperties(K, nc);
Object.defineProperty(ec, "isAxiosError", { value: !0 });
K.from = (s, i, r, a, u, h) => {
  const f = Object.create(ec);
  return _.toFlatObject(s, f, function(g) {
    return g !== Error.prototype;
  }, (g) => g !== "isAxiosError"), K.call(f, s.message, i, r, a, u), f.cause = s, f.name = s.name, h && Object.assign(f, h), f;
};
const tg = null;
function Po(s) {
  return _.isPlainObject(s) || _.isArray(s);
}
function sc(s) {
  return _.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function bl(s, i, r) {
  return s ? s.concat(i).map(function(a, u) {
    return a = sc(a), !r && u ? "[" + a + "]" : a;
  }).join(r ? "." : "") : i;
}
function eg(s) {
  return _.isArray(s) && !s.some(Po);
}
const ng = _.toFlatObject(_, {}, null, function(s) {
  return /^is[A-Z]/.test(s);
});
function hi(s, i, r) {
  if (!_.isObject(s))
    throw new TypeError("target must be an object");
  i = i || new FormData(), r = _.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, T) {
    return !_.isUndefined(T[A]);
  });
  const a = r.metaTokens, u = r.visitor || b, h = r.dots, f = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(i);
  if (!_.isFunction(u))
    throw new TypeError("visitor must be a function");
  function $(A) {
    if (A === null) return "";
    if (_.isDate(A))
      return A.toISOString();
    if (!g && _.isBlob(A))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(A) || _.isTypedArray(A) ? g && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function b(A, T, O) {
    let W = A;
    if (A && !O && typeof A == "object") {
      if (_.endsWith(T, "{}"))
        T = a ? T : T.slice(0, -2), A = JSON.stringify(A);
      else if (_.isArray(A) && eg(A) || (_.isFileList(A) || _.endsWith(T, "[]")) && (W = _.toArray(A)))
        return T = sc(T), W.forEach(function(M, L) {
          !(_.isUndefined(M) || M === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? bl([T], L, h) : f === null ? T : T + "[]",
            $(M)
          );
        }), !1;
    }
    return Po(A) ? !0 : (i.append(bl(O, T, h), $(A)), !1);
  }
  const v = [], P = Object.assign(ng, {
    defaultVisitor: b,
    convertValue: $,
    isVisitable: Po
  });
  function S(A, T) {
    if (!_.isUndefined(A)) {
      if (v.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      v.push(A), _.forEach(A, function(O, W) {
        (!(_.isUndefined(O) || O === null) && u.call(
          i,
          O,
          _.isString(W) ? W.trim() : W,
          T,
          P
        )) === !0 && S(O, T ? T.concat(W) : [W]);
      }), v.pop();
    }
  }
  if (!_.isObject(s))
    throw new TypeError("data must be an object");
  return S(s), i;
}
function wl(s) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g, function(r) {
    return i[r];
  });
}
function Jo(s, i) {
  this._pairs = [], s && hi(s, this, i);
}
const ic = Jo.prototype;
ic.append = function(s, i) {
  this._pairs.push([s, i]);
};
ic.toString = function(s) {
  const i = s ? function(r) {
    return s.call(this, r, wl);
  } : wl;
  return this._pairs.map(function(r) {
    return i(r[0]) + "=" + i(r[1]);
  }, "").join("&");
};
function sg(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function oc(s, i, r) {
  if (!i)
    return s;
  const a = r && r.encode || sg, u = r && r.serialize;
  let h;
  if (u ? h = u(i, r) : h = _.isURLSearchParams(i) ? i.toString() : new Jo(i, r).toString(a), h) {
    const f = s.indexOf("#");
    f !== -1 && (s = s.slice(0, f)), s += (s.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return s;
}
let yl = class {
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
  use(i, r, a) {
    return this.handlers.push({
      fulfilled: i,
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
    _.forEach(this.handlers, function(r) {
      r !== null && i(r);
    });
  }
};
const rc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ig = typeof URLSearchParams < "u" ? URLSearchParams : Jo, og = typeof FormData < "u" ? FormData : null, rg = typeof Blob < "u" ? Blob : null, ag = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ig,
    FormData: og,
    Blob: rg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ko = typeof window < "u" && typeof document < "u", Ao = typeof navigator == "object" && navigator || void 0, lg = Ko && (!Ao || ["ReactNative", "NativeScript", "NS"].indexOf(Ao.product) < 0), cg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ug = Ko && window.location.href || "http://localhost", hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ko,
  hasStandardBrowserEnv: lg,
  hasStandardBrowserWebWorkerEnv: cg,
  navigator: Ao,
  origin: ug
}, Symbol.toStringTag, { value: "Module" })), Vt = {
  ...hg,
  ...ag
};
function dg(s, i) {
  return hi(s, new Vt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, a, u, h) {
      return Vt.isNode && _.isBuffer(r) ? (this.append(a, r.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function fg(s) {
  return _.matchAll(/\w+|\[(\w*)]/g, s).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function pg(s) {
  const i = {}, r = Object.keys(s);
  let a;
  const u = r.length;
  let h;
  for (a = 0; a < u; a++)
    h = r[a], i[h] = s[h];
  return i;
}
function ac(s) {
  function i(r, a, u, h) {
    let f = r[h++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f), $ = h >= r.length;
    return f = !f && _.isArray(u) ? u.length : f, $ ? (_.hasOwnProp(u, f) ? u[f] = [u[f], a] : u[f] = a, !g) : ((!u[f] || !_.isObject(u[f])) && (u[f] = []), i(r, a, u[f], h) && _.isArray(u[f]) && (u[f] = pg(u[f])), !g);
  }
  if (_.isFormData(s) && _.isFunction(s.entries)) {
    const r = {};
    return _.forEachEntry(s, (a, u) => {
      i(fg(a), u, r, 0);
    }), r;
  }
  return null;
}
function mg(s, i, r) {
  if (_.isString(s))
    try {
      return (i || JSON.parse)(s), _.trim(s);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (0, JSON.stringify)(s);
}
const ls = {
  transitional: rc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(s, i) {
    const r = i.getContentType() || "", a = r.indexOf("application/json") > -1, u = _.isObject(s);
    if (u && _.isHTMLForm(s) && (s = new FormData(s)), _.isFormData(s))
      return a ? JSON.stringify(ac(s)) : s;
    if (_.isArrayBuffer(s) || _.isBuffer(s) || _.isStream(s) || _.isFile(s) || _.isBlob(s) || _.isReadableStream(s))
      return s;
    if (_.isArrayBufferView(s))
      return s.buffer;
    if (_.isURLSearchParams(s))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), s.toString();
    let h;
    if (u) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return dg(s, this.formSerializer).toString();
      if ((h = _.isFileList(s)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return hi(
          h ? { "files[]": s } : s,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return u || a ? (i.setContentType("application/json", !1), mg(s)) : s;
  }],
  transformResponse: [function(s) {
    const i = this.transitional || ls.transitional, r = i && i.forcedJSONParsing, a = this.responseType === "json";
    if (_.isResponse(s) || _.isReadableStream(s))
      return s;
    if (s && _.isString(s) && (r && !this.responseType || a)) {
      const u = !(i && i.silentJSONParsing) && a;
      try {
        return JSON.parse(s);
      } catch (h) {
        if (u)
          throw h.name === "SyntaxError" ? K.from(h, K.ERR_BAD_RESPONSE, this, null, this.response) : h;
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
    FormData: Vt.classes.FormData,
    Blob: Vt.classes.Blob
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
_.forEach(["delete", "get", "head", "post", "put", "patch"], (s) => {
  ls.headers[s] = {};
});
const gg = _.toObjectSet([
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
]), vg = (s) => {
  const i = {};
  let r, a, u;
  return s && s.split(`
`).forEach(function(h) {
    u = h.indexOf(":"), r = h.substring(0, u).trim().toLowerCase(), a = h.substring(u + 1).trim(), !(!r || i[r] && gg[r]) && (r === "set-cookie" ? i[r] ? i[r].push(a) : i[r] = [a] : i[r] = i[r] ? i[r] + ", " + a : a);
  }), i;
}, kl = Symbol("internals");
function Zn(s) {
  return s && String(s).trim().toLowerCase();
}
function Qs(s) {
  return s === !1 || s == null ? s : _.isArray(s) ? s.map(Qs) : String(s);
}
function bg(s) {
  const i = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = r.exec(s); )
    i[a[1]] = a[2];
  return i;
}
const wg = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
function ko(s, i, r, a, u) {
  if (_.isFunction(a))
    return a.call(this, i, r);
  if (u && (i = r), !!_.isString(i)) {
    if (_.isString(a))
      return i.indexOf(a) !== -1;
    if (_.isRegExp(a))
      return a.test(i);
  }
}
function yg(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, r, a) => r.toUpperCase() + a);
}
function kg(s, i) {
  const r = _.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(s, a + r, {
      value: function(u, h, f) {
        return this[a].call(this, i, u, h, f);
      },
      configurable: !0
    });
  });
}
let Jt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, r, a) {
    const u = this;
    function h(g, $, b) {
      const v = Zn($);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const P = _.findKey(u, v);
      (!P || u[P] === void 0 || b === !0 || b === void 0 && u[P] !== !1) && (u[P || $] = Qs(g));
    }
    const f = (g, $) => _.forEach(g, (b, v) => h(b, v, $));
    if (_.isPlainObject(i) || i instanceof this.constructor)
      f(i, r);
    else if (_.isString(i) && (i = i.trim()) && !wg(i))
      f(vg(i), r);
    else if (_.isHeaders(i))
      for (const [g, $] of i.entries())
        h($, g, a);
    else
      i != null && h(r, i, a);
    return this;
  }
  get(i, r) {
    if (i = Zn(i), i) {
      const a = _.findKey(this, i);
      if (a) {
        const u = this[a];
        if (!r)
          return u;
        if (r === !0)
          return bg(u);
        if (_.isFunction(r))
          return r.call(this, u, a);
        if (_.isRegExp(r))
          return r.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, r) {
    if (i = Zn(i), i) {
      const a = _.findKey(this, i);
      return !!(a && this[a] !== void 0 && (!r || ko(this, this[a], a, r)));
    }
    return !1;
  }
  delete(i, r) {
    const a = this;
    let u = !1;
    function h(f) {
      if (f = Zn(f), f) {
        const g = _.findKey(a, f);
        g && (!r || ko(a, a[g], g, r)) && (delete a[g], u = !0);
      }
    }
    return _.isArray(i) ? i.forEach(h) : h(i), u;
  }
  clear(i) {
    const r = Object.keys(this);
    let a = r.length, u = !1;
    for (; a--; ) {
      const h = r[a];
      (!i || ko(this, this[h], h, i, !0)) && (delete this[h], u = !0);
    }
    return u;
  }
  normalize(i) {
    const r = this, a = {};
    return _.forEach(this, (u, h) => {
      const f = _.findKey(a, h);
      if (f) {
        r[f] = Qs(u), delete r[h];
        return;
      }
      const g = i ? yg(h) : String(h).trim();
      g !== h && delete r[h], r[g] = Qs(u), a[g] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const r = /* @__PURE__ */ Object.create(null);
    return _.forEach(this, (a, u) => {
      a != null && a !== !1 && (r[u] = i && _.isArray(a) ? a.join(", ") : a);
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
    const a = new this(i);
    return r.forEach((u) => a.set(u)), a;
  }
  static accessor(i) {
    const r = (this[kl] = this[kl] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function u(h) {
      const f = Zn(h);
      r[f] || (kg(a, h), r[f] = !0);
    }
    return _.isArray(i) ? i.forEach(u) : u(i), this;
  }
};
Jt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(Jt.prototype, ({ value: s }, i) => {
  let r = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => s,
    set(a) {
      this[r] = a;
    }
  };
});
_.freezeMethods(Jt);
function $o(s, i) {
  const r = this || ls, a = i || r, u = Jt.from(a.headers);
  let h = a.data;
  return _.forEach(s, function(f) {
    h = f.call(r, h, u.normalize(), i ? i.status : void 0);
  }), u.normalize(), h;
}
function lc(s) {
  return !!(s && s.__CANCEL__);
}
function $n(s, i, r) {
  K.call(this, s ?? "canceled", K.ERR_CANCELED, i, r), this.name = "CanceledError";
}
_.inherits($n, K, {
  __CANCEL__: !0
});
function cc(s, i, r) {
  const a = r.config.validateStatus;
  !r.status || !a || a(r.status) ? s(r) : i(new K(
    "Request failed with status code " + r.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function $g(s) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return i && i[1] || "";
}
function xg(s, i) {
  s = s || 10;
  const r = new Array(s), a = new Array(s);
  let u = 0, h = 0, f;
  return i = i !== void 0 ? i : 1e3, function(g) {
    const $ = Date.now(), b = a[h];
    f || (f = $), r[u] = g, a[u] = $;
    let v = h, P = 0;
    for (; v !== u; )
      P += r[v++], v = v % s;
    if (u = (u + 1) % s, u === h && (h = (h + 1) % s), $ - f < i)
      return;
    const S = b && $ - b;
    return S ? Math.round(P * 1e3 / S) : void 0;
  };
}
function Sg(s, i) {
  let r = 0, a = 1e3 / i, u, h;
  const f = (g, $ = Date.now()) => {
    r = $, u = null, h && (clearTimeout(h), h = null), s.apply(null, g);
  };
  return [(...g) => {
    const $ = Date.now(), b = $ - r;
    b >= a ? f(g, $) : (u = g, h || (h = setTimeout(() => {
      h = null, f(u);
    }, a - b)));
  }, () => u && f(u)];
}
const ei = (s, i, r = 3) => {
  let a = 0;
  const u = xg(50, 250);
  return Sg((h) => {
    const f = h.loaded, g = h.lengthComputable ? h.total : void 0, $ = f - a, b = u($), v = f <= g;
    a = f;
    const P = {
      loaded: f,
      total: g,
      progress: g ? f / g : void 0,
      bytes: $,
      rate: b || void 0,
      estimated: b && g && v ? (g - f) / b : void 0,
      event: h,
      lengthComputable: g != null,
      [i ? "download" : "upload"]: !0
    };
    s(P);
  }, r);
}, $l = (s, i) => {
  const r = s != null;
  return [(a) => i[0]({
    lengthComputable: r,
    total: s,
    loaded: a
  }), i[1]];
}, xl = (s) => (...i) => _.asap(() => s(...i)), _g = Vt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const s = Vt.navigator && /(msie|trident)/i.test(Vt.navigator.userAgent), i = document.createElement("a");
    let r;
    function a(u) {
      let h = u;
      return s && (i.setAttribute("href", h), h = i.href), i.setAttribute("href", h), {
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
    return r = a(window.location.href), function(u) {
      const h = _.isString(u) ? a(u) : u;
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
), Eg = Vt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(s, i, r, a, u, h) {
      const f = [s + "=" + encodeURIComponent(i)];
      _.isNumber(r) && f.push("expires=" + new Date(r).toGMTString()), _.isString(a) && f.push("path=" + a), _.isString(u) && f.push("domain=" + u), h === !0 && f.push("secure"), document.cookie = f.join("; ");
    },
    read(s) {
      const i = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
      return i ? decodeURIComponent(i[3]) : null;
    },
    remove(s) {
      this.write(s, "", Date.now() - 864e5);
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
function Og(s) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function Tg(s, i) {
  return i ? s.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : s;
}
function uc(s, i) {
  return s && !Og(i) ? Tg(s, i) : i;
}
const Sl = (s) => s instanceof Jt ? { ...s } : s;
function en(s, i) {
  i = i || {};
  const r = {};
  function a(b, v, P) {
    return _.isPlainObject(b) && _.isPlainObject(v) ? _.merge.call({ caseless: P }, b, v) : _.isPlainObject(v) ? _.merge({}, v) : _.isArray(v) ? v.slice() : v;
  }
  function u(b, v, P) {
    if (_.isUndefined(v)) {
      if (!_.isUndefined(b))
        return a(void 0, b, P);
    } else return a(b, v, P);
  }
  function h(b, v) {
    if (!_.isUndefined(v))
      return a(void 0, v);
  }
  function f(b, v) {
    if (_.isUndefined(v)) {
      if (!_.isUndefined(b))
        return a(void 0, b);
    } else return a(void 0, v);
  }
  function g(b, v, P) {
    if (P in i)
      return a(b, v);
    if (P in s)
      return a(void 0, b);
  }
  const $ = {
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
    headers: (b, v) => u(Sl(b), Sl(v), !0)
  };
  return _.forEach(Object.keys(Object.assign({}, s, i)), function(b) {
    const v = $[b] || u, P = v(s[b], i[b], b);
    _.isUndefined(P) && v !== g || (r[b] = P);
  }), r;
}
const hc = (s) => {
  const i = en({}, s);
  let { data: r, withXSRFToken: a, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = i;
  i.headers = f = Jt.from(f), i.url = oc(uc(i.baseURL, i.url), s.params, s.paramsSerializer), g && f.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let $;
  if (_.isFormData(r)) {
    if (Vt.hasStandardBrowserEnv || Vt.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if (($ = f.getContentType()) !== !1) {
      const [b, ...v] = $ ? $.split(";").map((P) => P.trim()).filter(Boolean) : [];
      f.setContentType([b || "multipart/form-data", ...v].join("; "));
    }
  }
  if (Vt.hasStandardBrowserEnv && (a && _.isFunction(a) && (a = a(i)), a || a !== !1 && _g(i.url))) {
    const b = u && h && Eg.read(h);
    b && f.set(u, b);
  }
  return i;
}, Cg = typeof XMLHttpRequest < "u", Pg = Cg && function(s) {
  return new Promise(function(i, r) {
    const a = hc(s);
    let u = a.data;
    const h = Jt.from(a.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: $ } = a, b, v, P, S, A;
    function T() {
      S && S(), A && A(), a.cancelToken && a.cancelToken.unsubscribe(b), a.signal && a.signal.removeEventListener("abort", b);
    }
    let O = new XMLHttpRequest();
    O.open(a.method.toUpperCase(), a.url, !0), O.timeout = a.timeout;
    function W() {
      if (!O)
        return;
      const L = Jt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), wt = {
        data: !f || f === "text" || f === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: L,
        config: s,
        request: O
      };
      cc(function(Ut) {
        i(Ut), T();
      }, function(Ut) {
        r(Ut), T();
      }, wt), O = null;
    }
    "onloadend" in O ? O.onloadend = W : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(W);
    }, O.onabort = function() {
      O && (r(new K("Request aborted", K.ECONNABORTED, s, O)), O = null);
    }, O.onerror = function() {
      r(new K("Network Error", K.ERR_NETWORK, s, O)), O = null;
    }, O.ontimeout = function() {
      let L = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const wt = a.transitional || rc;
      a.timeoutErrorMessage && (L = a.timeoutErrorMessage), r(new K(
        L,
        wt.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        s,
        O
      )), O = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in O && _.forEach(h.toJSON(), function(L, wt) {
      O.setRequestHeader(wt, L);
    }), _.isUndefined(a.withCredentials) || (O.withCredentials = !!a.withCredentials), f && f !== "json" && (O.responseType = a.responseType), $ && ([P, A] = ei($, !0), O.addEventListener("progress", P)), g && O.upload && ([v, S] = ei(g), O.upload.addEventListener("progress", v), O.upload.addEventListener("loadend", S)), (a.cancelToken || a.signal) && (b = (L) => {
      O && (r(!L || L.type ? new $n(null, s, O) : L), O.abort(), O = null);
    }, a.cancelToken && a.cancelToken.subscribe(b), a.signal && (a.signal.aborted ? b() : a.signal.addEventListener("abort", b)));
    const M = $g(a.url);
    if (M && Vt.protocols.indexOf(M) === -1) {
      r(new K("Unsupported protocol " + M + ":", K.ERR_BAD_REQUEST, s));
      return;
    }
    O.send(u || null);
  });
}, Ag = (s, i) => {
  const { length: r } = s = s ? s.filter(Boolean) : [];
  if (i || r) {
    let a = new AbortController(), u;
    const h = function(b) {
      if (!u) {
        u = !0, g();
        const v = b instanceof Error ? b : this.reason;
        a.abort(v instanceof K ? v : new $n(v instanceof Error ? v.message : v));
      }
    };
    let f = i && setTimeout(() => {
      f = null, h(new K(`timeout ${i} of ms exceeded`, K.ETIMEDOUT));
    }, i);
    const g = () => {
      s && (f && clearTimeout(f), f = null, s.forEach((b) => {
        b.unsubscribe ? b.unsubscribe(h) : b.removeEventListener("abort", h);
      }), s = null);
    };
    s.forEach((b) => b.addEventListener("abort", h));
    const { signal: $ } = a;
    return $.unsubscribe = () => _.asap(g), $;
  }
}, Rg = function* (s, i) {
  let r = s.byteLength;
  if (r < i) {
    yield s;
    return;
  }
  let a = 0, u;
  for (; a < r; )
    u = a + i, yield s.slice(a, u), a = u;
}, Ig = async function* (s, i) {
  for await (const r of Bg(s))
    yield* Rg(r, i);
}, Bg = async function* (s) {
  if (s[Symbol.asyncIterator]) {
    yield* s;
    return;
  }
  const i = s.getReader();
  try {
    for (; ; ) {
      const { done: r, value: a } = await i.read();
      if (r)
        break;
      yield a;
    }
  } finally {
    await i.cancel();
  }
}, _l = (s, i, r, a) => {
  const u = Ig(s, i);
  let h = 0, f, g = ($) => {
    f || (f = !0, a && a($));
  };
  return new ReadableStream({
    async pull($) {
      try {
        const { done: b, value: v } = await u.next();
        if (b) {
          g(), $.close();
          return;
        }
        let P = v.byteLength;
        if (r) {
          let S = h += P;
          r(S);
        }
        $.enqueue(new Uint8Array(v));
      } catch (b) {
        throw g(b), b;
      }
    },
    cancel($) {
      return g($), u.return();
    }
  }, {
    highWaterMark: 2
  });
}, di = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", dc = di && typeof ReadableStream == "function", Fg = di && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((s) => (i) => s.encode(i))(new TextEncoder()) : async (s) => new Uint8Array(await new Response(s).arrayBuffer())), fc = (s, ...i) => {
  try {
    return !!s(...i);
  } catch {
    return !1;
  }
}, Ng = dc && fc(() => {
  let s = !1;
  const i = new Request(Vt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return s = !0, "half";
    }
  }).headers.has("Content-Type");
  return s && !i;
}), El = 64 * 1024, Ro = dc && fc(() => _.isReadableStream(new Response("").body)), ni = {
  stream: Ro && ((s) => s.body)
};
di && ((s) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !ni[i] && (ni[i] = _.isFunction(s[i]) ? (r) => r[i]() : (r, a) => {
      throw new K(`Response type '${i}' is not supported`, K.ERR_NOT_SUPPORT, a);
    });
  });
})(new Response());
const Dg = async (s) => {
  if (s == null)
    return 0;
  if (_.isBlob(s))
    return s.size;
  if (_.isSpecCompliantForm(s))
    return (await new Request(Vt.origin, {
      method: "POST",
      body: s
    }).arrayBuffer()).byteLength;
  if (_.isArrayBufferView(s) || _.isArrayBuffer(s))
    return s.byteLength;
  if (_.isURLSearchParams(s) && (s = s + ""), _.isString(s))
    return (await Fg(s)).byteLength;
}, jg = async (s, i) => _.toFiniteNumber(s.getContentLength()) ?? Dg(i), Ug = di && (async (s) => {
  let {
    url: i,
    method: r,
    data: a,
    signal: u,
    cancelToken: h,
    timeout: f,
    onDownloadProgress: g,
    onUploadProgress: $,
    responseType: b,
    headers: v,
    withCredentials: P = "same-origin",
    fetchOptions: S
  } = hc(s);
  b = b ? (b + "").toLowerCase() : "text";
  let A = Ag([u, h && h.toAbortSignal()], f), T;
  const O = A && A.unsubscribe && (() => {
    A.unsubscribe();
  });
  let W;
  try {
    if ($ && Ng && r !== "get" && r !== "head" && (W = await jg(v, a)) !== 0) {
      let yt = new Request(i, {
        method: "POST",
        body: a,
        duplex: "half"
      }), At;
      if (_.isFormData(a) && (At = yt.headers.get("content-type")) && v.setContentType(At), yt.body) {
        const [Xt, Yt] = $l(
          W,
          ei(xl($))
        );
        a = _l(yt.body, El, Xt, Yt);
      }
    }
    _.isString(P) || (P = P ? "include" : "omit");
    const M = "credentials" in Request.prototype;
    T = new Request(i, {
      ...S,
      signal: A,
      method: r.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: a,
      duplex: "half",
      credentials: M ? P : void 0
    });
    let L = await fetch(T);
    const wt = Ro && (b === "stream" || b === "response");
    if (Ro && (g || wt && O)) {
      const yt = {};
      ["status", "statusText", "headers"].forEach((oe) => {
        yt[oe] = L[oe];
      });
      const At = _.toFiniteNumber(L.headers.get("content-length")), [Xt, Yt] = g && $l(
        At,
        ei(xl(g), !0)
      ) || [];
      L = new Response(
        _l(L.body, El, Xt, () => {
          Yt && Yt(), O && O();
        }),
        yt
      );
    }
    b = b || "text";
    let Ut = await ni[_.findKey(ni, b) || "text"](L, s);
    return !wt && O && O(), await new Promise((yt, At) => {
      cc(yt, At, {
        data: Ut,
        headers: Jt.from(L.headers),
        status: L.status,
        statusText: L.statusText,
        config: s,
        request: T
      });
    });
  } catch (M) {
    throw O && O(), M && M.name === "TypeError" && /fetch/i.test(M.message) ? Object.assign(
      new K("Network Error", K.ERR_NETWORK, s, T),
      {
        cause: M.cause || M
      }
    ) : K.from(M, M && M.code, s, T);
  }
}), Io = {
  http: tg,
  xhr: Pg,
  fetch: Ug
};
_.forEach(Io, (s, i) => {
  if (s) {
    try {
      Object.defineProperty(s, "name", { value: i });
    } catch {
    }
    Object.defineProperty(s, "adapterName", { value: i });
  }
});
const Ol = (s) => `- ${s}`, Mg = (s) => _.isFunction(s) || s === null || s === !1, pc = {
  getAdapter: (s) => {
    s = _.isArray(s) ? s : [s];
    const { length: i } = s;
    let r, a;
    const u = {};
    for (let h = 0; h < i; h++) {
      r = s[h];
      let f;
      if (a = r, !Mg(r) && (a = Io[(f = String(r)).toLowerCase()], a === void 0))
        throw new K(`Unknown adapter '${f}'`);
      if (a)
        break;
      u[f || "#" + h] = a;
    }
    if (!a) {
      const h = Object.entries(u).map(
        ([g, $]) => `adapter ${g} ` + ($ === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let f = i ? h.length > 1 ? `since :
` + h.map(Ol).join(`
`) : " " + Ol(h[0]) : "as no adapter specified";
      throw new K(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return a;
  },
  adapters: Io
};
function xo(s) {
  if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
    throw new $n(null, s);
}
function Tl(s) {
  return xo(s), s.headers = Jt.from(s.headers), s.data = $o.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), pc.getAdapter(s.adapter || ls.adapter)(s).then(function(i) {
    return xo(s), i.data = $o.call(
      s,
      s.transformResponse,
      i
    ), i.headers = Jt.from(i.headers), i;
  }, function(i) {
    return lc(i) || (xo(s), i && i.response && (i.response.data = $o.call(
      s,
      s.transformResponse,
      i.response
    ), i.response.headers = Jt.from(i.response.headers))), Promise.reject(i);
  });
}
const mc = "1.7.7", Go = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, i) => {
  Go[s] = function(r) {
    return typeof r === s || "a" + (i < 1 ? "n " : " ") + s;
  };
});
const Cl = {};
Go.transitional = function(s, i, r) {
  function a(u, h) {
    return "[Axios v" + mc + "] Transitional option '" + u + "'" + h + (r ? ". " + r : "");
  }
  return (u, h, f) => {
    if (s === !1)
      throw new K(
        a(h, " has been removed" + (i ? " in " + i : "")),
        K.ERR_DEPRECATED
      );
    return i && !Cl[h] && (Cl[h] = !0, console.warn(
      a(
        h,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), s ? s(u, h, f) : !0;
  };
};
function Lg(s, i, r) {
  if (typeof s != "object")
    throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(s);
  let u = a.length;
  for (; u-- > 0; ) {
    const h = a[u], f = i[h];
    if (f) {
      const g = s[h], $ = g === void 0 || f(g, h, s);
      if ($ !== !0)
        throw new K("option " + h + " must be " + $, K.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new K("Unknown option " + h, K.ERR_BAD_OPTION);
  }
}
const Bo = {
  assertOptions: Lg,
  validators: Go
}, Pe = Bo.validators;
let Ze = class {
  constructor(i) {
    this.defaults = i, this.interceptors = {
      request: new yl(),
      response: new yl()
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
  _request(i, r) {
    typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = en(this.defaults, r);
    const { transitional: a, paramsSerializer: u, headers: h } = r;
    a !== void 0 && Bo.assertOptions(a, {
      silentJSONParsing: Pe.transitional(Pe.boolean),
      forcedJSONParsing: Pe.transitional(Pe.boolean),
      clarifyTimeoutError: Pe.transitional(Pe.boolean)
    }, !1), u != null && (_.isFunction(u) ? r.paramsSerializer = {
      serialize: u
    } : Bo.assertOptions(u, {
      encode: Pe.function,
      serialize: Pe.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let f = h && _.merge(
      h.common,
      h[r.method]
    );
    h && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (T) => {
        delete h[T];
      }
    ), r.headers = Jt.concat(f, h);
    const g = [];
    let $ = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(r) === !1 || ($ = $ && T.synchronous, g.unshift(T.fulfilled, T.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(T) {
      b.push(T.fulfilled, T.rejected);
    });
    let v, P = 0, S;
    if (!$) {
      const T = [Tl.bind(this), void 0];
      for (T.unshift.apply(T, g), T.push.apply(T, b), S = T.length, v = Promise.resolve(r); P < S; )
        v = v.then(T[P++], T[P++]);
      return v;
    }
    S = g.length;
    let A = r;
    for (P = 0; P < S; ) {
      const T = g[P++], O = g[P++];
      try {
        A = T(A);
      } catch (W) {
        O.call(this, W);
        break;
      }
    }
    try {
      v = Tl.call(this, A);
    } catch (T) {
      return Promise.reject(T);
    }
    for (P = 0, S = b.length; P < S; )
      v = v.then(b[P++], b[P++]);
    return v;
  }
  getUri(i) {
    i = en(this.defaults, i);
    const r = uc(i.baseURL, i.url);
    return oc(r, i.params, i.paramsSerializer);
  }
};
_.forEach(["delete", "get", "head", "options"], function(s) {
  Ze.prototype[s] = function(i, r) {
    return this.request(en(r || {}, {
      method: s,
      url: i,
      data: (r || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(s) {
  function i(r) {
    return function(a, u, h) {
      return this.request(en(h || {}, {
        method: s,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: u
      }));
    };
  }
  Ze.prototype[s] = i(), Ze.prototype[s + "Form"] = i(!0);
});
let zg = class gc {
  constructor(i) {
    if (typeof i != "function")
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
    }, i(function(u, h, f) {
      a.reason || (a.reason = new $n(u, h, f), r(a.reason));
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
    const i = new AbortController(), r = (a) => {
      i.abort(a);
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
      token: new gc(function(r) {
        i = r;
      }),
      cancel: i
    };
  }
};
function Hg(s) {
  return function(i) {
    return s.apply(null, i);
  };
}
function qg(s) {
  return _.isObject(s) && s.isAxiosError === !0;
}
const Fo = {
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
Object.entries(Fo).forEach(([s, i]) => {
  Fo[i] = s;
});
function vc(s) {
  const i = new Ze(s), r = Jl(Ze.prototype.request, i);
  return _.extend(r, Ze.prototype, i, { allOwnKeys: !0 }), _.extend(r, i, null, { allOwnKeys: !0 }), r.create = function(a) {
    return vc(en(s, a));
  }, r;
}
const bt = vc(ls);
bt.Axios = Ze;
bt.CanceledError = $n;
bt.CancelToken = zg;
bt.isCancel = lc;
bt.VERSION = mc;
bt.toFormData = hi;
bt.AxiosError = K;
bt.Cancel = bt.CanceledError;
bt.all = function(s) {
  return Promise.all(s);
};
bt.spread = Hg;
bt.isAxiosError = qg;
bt.mergeConfig = en;
bt.AxiosHeaders = Jt;
bt.formToJSON = (s) => ac(_.isHTMLForm(s) ? new FormData(s) : s);
bt.getAdapter = pc.getAdapter;
bt.HttpStatusCode = Fo;
bt.default = bt;
var ke = /* @__PURE__ */ ((s) => (s.Primary = "Primary", s.Secondary = "Secondary", s.Success = "Success", s.Warning = "Warning", s.Danger = "Danger", s.Info = "Info", s.Muted = "Muted", s))(ke || {});
const Wg = ql("auth", {
  persist: !0,
  state: () => ({
    user: null
  }),
  getters: {
    isAuthenticated: (s) => s.user !== null
  },
  actions: {
    setUser(s) {
      this.user = s;
    },
    unsetUser() {
      this.user = null;
    },
    async login(s) {
      return bt.post("/account/login", s).then((i) => (this.setUser(i.data), this.user)).catch((i) => {
        throw {
          description: "An error as occurred",
          style: ke.Danger,
          closeBtn: !0,
          ...i.response.data
        };
      });
    },
    async check() {
      return bt.get("/account/auth-check").then((s) => (this.setUser(s.data.user), this.user)).catch((s) => {
        throw this.unsetUser(), {
          description: "An error as occurred",
          style: ke.Danger,
          closeBtn: !0,
          ...s.response.data
        };
      });
    },
    async logout() {
      return this.unsetUser(), bt.get("/account/logout").catch((s) => {
        throw {
          description: "An error as occurred",
          style: ke.Danger,
          closeBtn: !0,
          ...s.response.data
        };
      });
    }
  }
}), Vg = { class: "uk-fieldset" }, Jg = { class: "uk-margin" }, Kg = { class: "uk-inline uk-width-1-1" }, Gg = { class: "uk-margin" }, Xg = { class: "uk-inline uk-width-1-1" }, Yg = { class: "uk-text-center" }, Qg = ["disabled"], Xo = /* @__PURE__ */ st({
  __name: "FormLogin",
  setup(s) {
    const i = ve(!1), r = ve();
    let a = {
      user_name: "",
      password: ""
    };
    async function u() {
      i.value = !0, r.value = null, await Wg().login(a).then((f) => {
        Vl.notification({
          message: "Welcome back " + (f == null ? void 0 : f.full_name) + "!",
          status: "primary",
          pos: "top-right",
          timeout: 4e3
        });
      }).catch((f) => {
        r.value = f;
      }).finally(() => {
        i.value = !1;
      });
    }
    return (h, f) => {
      const g = xt("UFAlert");
      return R(), B("form", {
        onSubmit: f[2] || (f[2] = ri(($) => u(), ["prevent"]))
      }, [
        k("fieldset", Vg, [
          r.value ? (R(), dt(g, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : Q("", !0),
          k("div", Jg, [
            k("div", Kg, [
              f[3] || (f[3] = k("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: user"
              }, null, -1)),
              jt(k("input", {
                class: "uk-input",
                type: "text",
                placeholder: "Username",
                "aria-label": "Username",
                "data-test": "username",
                "onUpdate:modelValue": f[0] || (f[0] = ($) => U(a).user_name = $)
              }, null, 512), [
                [Wt, U(a).user_name]
              ])
            ])
          ]),
          k("div", Gg, [
            k("div", Xg, [
              f[4] || (f[4] = k("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: lock"
              }, null, -1)),
              jt(k("input", {
                class: "uk-input",
                type: "password",
                placeholder: "Password",
                "aria-label": "Password",
                "data-test": "password",
                "onUpdate:modelValue": f[1] || (f[1] = ($) => U(a).password = $)
              }, null, 512), [
                [Wt, U(a).password]
              ])
            ])
          ]),
          k("div", Yg, [
            k("button", {
              class: "uk-button uk-button-primary",
              disabled: i.value,
              "data-test": "submit"
            }, " Login ", 8, Qg)
          ])
        ])
      ], 32);
    };
  }
});
function bc(s, i) {
  return function() {
    return s.apply(i, arguments);
  };
}
const { toString: Zg } = Object.prototype, { getPrototypeOf: Yo } = Object, fi = /* @__PURE__ */ ((s) => (i) => {
  const r = Zg.call(i);
  return s[r] || (s[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), fe = (s) => (s = s.toLowerCase(), (i) => fi(i) === s), pi = (s) => (i) => typeof i === s, { isArray: xn } = Array, is = pi("undefined");
function tv(s) {
  return s !== null && !is(s) && s.constructor !== null && !is(s.constructor) && ie(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const wc = fe("ArrayBuffer");
function ev(s) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(s) : i = s && s.buffer && wc(s.buffer), i;
}
const nv = pi("string"), ie = pi("function"), yc = pi("number"), mi = (s) => s !== null && typeof s == "object", sv = (s) => s === !0 || s === !1, Zs = (s) => {
  if (fi(s) !== "object")
    return !1;
  const i = Yo(s);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, iv = fe("Date"), ov = fe("File"), rv = fe("Blob"), av = fe("FileList"), lv = (s) => mi(s) && ie(s.pipe), cv = (s) => {
  let i;
  return s && (typeof FormData == "function" && s instanceof FormData || ie(s.append) && ((i = fi(s)) === "formdata" || // detect form-data instance
  i === "object" && ie(s.toString) && s.toString() === "[object FormData]"));
}, uv = fe("URLSearchParams"), [hv, dv, fv, pv] = ["ReadableStream", "Request", "Response", "Headers"].map(fe), mv = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function cs(s, i, { allOwnKeys: r = !1 } = {}) {
  if (s === null || typeof s > "u")
    return;
  let a, u;
  if (typeof s != "object" && (s = [s]), xn(s))
    for (a = 0, u = s.length; a < u; a++)
      i.call(null, s[a], a, s);
  else {
    const h = r ? Object.getOwnPropertyNames(s) : Object.keys(s), f = h.length;
    let g;
    for (a = 0; a < f; a++)
      g = h[a], i.call(null, s[g], g, s);
  }
}
function kc(s, i) {
  i = i.toLowerCase();
  const r = Object.keys(s);
  let a = r.length, u;
  for (; a-- > 0; )
    if (u = r[a], i === u.toLowerCase())
      return u;
  return null;
}
const Ye = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, $c = (s) => !is(s) && s !== Ye;
function No() {
  const { caseless: s } = $c(this) && this || {}, i = {}, r = (a, u) => {
    const h = s && kc(i, u) || u;
    Zs(i[h]) && Zs(a) ? i[h] = No(i[h], a) : Zs(a) ? i[h] = No({}, a) : xn(a) ? i[h] = a.slice() : i[h] = a;
  };
  for (let a = 0, u = arguments.length; a < u; a++)
    arguments[a] && cs(arguments[a], r);
  return i;
}
const gv = (s, i, r, { allOwnKeys: a } = {}) => (cs(i, (u, h) => {
  r && ie(u) ? s[h] = bc(u, r) : s[h] = u;
}, { allOwnKeys: a }), s), vv = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), bv = (s, i, r, a) => {
  s.prototype = Object.create(i.prototype, a), s.prototype.constructor = s, Object.defineProperty(s, "super", {
    value: i.prototype
  }), r && Object.assign(s.prototype, r);
}, wv = (s, i, r, a) => {
  let u, h, f;
  const g = {};
  if (i = i || {}, s == null) return i;
  do {
    for (u = Object.getOwnPropertyNames(s), h = u.length; h-- > 0; )
      f = u[h], (!a || a(f, s, i)) && !g[f] && (i[f] = s[f], g[f] = !0);
    s = r !== !1 && Yo(s);
  } while (s && (!r || r(s, i)) && s !== Object.prototype);
  return i;
}, yv = (s, i, r) => {
  s = String(s), (r === void 0 || r > s.length) && (r = s.length), r -= i.length;
  const a = s.indexOf(i, r);
  return a !== -1 && a === r;
}, kv = (s) => {
  if (!s) return null;
  if (xn(s)) return s;
  let i = s.length;
  if (!yc(i)) return null;
  const r = new Array(i);
  for (; i-- > 0; )
    r[i] = s[i];
  return r;
}, $v = /* @__PURE__ */ ((s) => (i) => s && i instanceof s)(typeof Uint8Array < "u" && Yo(Uint8Array)), xv = (s, i) => {
  const r = (s && s[Symbol.iterator]).call(s);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const u = a.value;
    i.call(s, u[0], u[1]);
  }
}, Sv = (s, i) => {
  let r;
  const a = [];
  for (; (r = s.exec(i)) !== null; )
    a.push(r);
  return a;
}, _v = fe("HTMLFormElement"), Ev = (s) => s.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, r, a) {
    return r.toUpperCase() + a;
  }
), Pl = (({ hasOwnProperty: s }) => (i, r) => s.call(i, r))(Object.prototype), Ov = fe("RegExp"), xc = (s, i) => {
  const r = Object.getOwnPropertyDescriptors(s), a = {};
  cs(r, (u, h) => {
    let f;
    (f = i(u, h, s)) !== !1 && (a[h] = f || u);
  }), Object.defineProperties(s, a);
}, Tv = (s) => {
  xc(s, (i, r) => {
    if (ie(s) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const a = s[r];
    if (ie(a)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Cv = (s, i) => {
  const r = {}, a = (u) => {
    u.forEach((h) => {
      r[h] = !0;
    });
  };
  return xn(s) ? a(s) : a(String(s).split(i)), r;
}, Pv = () => {
}, Av = (s, i) => s != null && Number.isFinite(s = +s) ? s : i, So = "abcdefghijklmnopqrstuvwxyz", Al = "0123456789", Sc = {
  DIGIT: Al,
  ALPHA: So,
  ALPHA_DIGIT: So + So.toUpperCase() + Al
}, Rv = (s = 16, i = Sc.ALPHA_DIGIT) => {
  let r = "";
  const { length: a } = i;
  for (; s--; )
    r += i[Math.random() * a | 0];
  return r;
};
function Iv(s) {
  return !!(s && ie(s.append) && s[Symbol.toStringTag] === "FormData" && s[Symbol.iterator]);
}
const Bv = (s) => {
  const i = new Array(10), r = (a, u) => {
    if (mi(a)) {
      if (i.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        i[u] = a;
        const h = xn(a) ? [] : {};
        return cs(a, (f, g) => {
          const $ = r(f, u + 1);
          !is($) && (h[g] = $);
        }), i[u] = void 0, h;
      }
    }
    return a;
  };
  return r(s, 0);
}, Fv = fe("AsyncFunction"), Nv = (s) => s && (mi(s) || ie(s)) && ie(s.then) && ie(s.catch), _c = ((s, i) => s ? setImmediate : i ? ((r, a) => (Ye.addEventListener("message", ({ source: u, data: h }) => {
  u === Ye && h === r && a.length && a.shift()();
}, !1), (u) => {
  a.push(u), Ye.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ie(Ye.postMessage)
), Dv = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ye) : typeof process < "u" && process.nextTick || _c, E = {
  isArray: xn,
  isArrayBuffer: wc,
  isBuffer: tv,
  isFormData: cv,
  isArrayBufferView: ev,
  isString: nv,
  isNumber: yc,
  isBoolean: sv,
  isObject: mi,
  isPlainObject: Zs,
  isReadableStream: hv,
  isRequest: dv,
  isResponse: fv,
  isHeaders: pv,
  isUndefined: is,
  isDate: iv,
  isFile: ov,
  isBlob: rv,
  isRegExp: Ov,
  isFunction: ie,
  isStream: lv,
  isURLSearchParams: uv,
  isTypedArray: $v,
  isFileList: av,
  forEach: cs,
  merge: No,
  extend: gv,
  trim: mv,
  stripBOM: vv,
  inherits: bv,
  toFlatObject: wv,
  kindOf: fi,
  kindOfTest: fe,
  endsWith: yv,
  toArray: kv,
  forEachEntry: xv,
  matchAll: Sv,
  isHTMLForm: _v,
  hasOwnProperty: Pl,
  hasOwnProp: Pl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: xc,
  freezeMethods: Tv,
  toObjectSet: Cv,
  toCamelCase: Ev,
  noop: Pv,
  toFiniteNumber: Av,
  findKey: kc,
  global: Ye,
  isContextDefined: $c,
  ALPHABET: Sc,
  generateString: Rv,
  isSpecCompliantForm: Iv,
  toJSONObject: Bv,
  isAsyncFn: Fv,
  isThenable: Nv,
  setImmediate: _c,
  asap: Dv
};
function G(s, i, r, a, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = s, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), a && (this.request = a), u && (this.response = u, this.status = u.status ? u.status : null);
}
E.inherits(G, Error, {
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
const Ec = G.prototype, Oc = {};
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
].forEach((s) => {
  Oc[s] = { value: s };
});
Object.defineProperties(G, Oc);
Object.defineProperty(Ec, "isAxiosError", { value: !0 });
G.from = (s, i, r, a, u, h) => {
  const f = Object.create(Ec);
  return E.toFlatObject(s, f, function(g) {
    return g !== Error.prototype;
  }, (g) => g !== "isAxiosError"), G.call(f, s.message, i, r, a, u), f.cause = s, f.name = s.name, h && Object.assign(f, h), f;
};
const jv = null;
function Do(s) {
  return E.isPlainObject(s) || E.isArray(s);
}
function Tc(s) {
  return E.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function Rl(s, i, r) {
  return s ? s.concat(i).map(function(a, u) {
    return a = Tc(a), !r && u ? "[" + a + "]" : a;
  }).join(r ? "." : "") : i;
}
function Uv(s) {
  return E.isArray(s) && !s.some(Do);
}
const Mv = E.toFlatObject(E, {}, null, function(s) {
  return /^is[A-Z]/.test(s);
});
function gi(s, i, r) {
  if (!E.isObject(s))
    throw new TypeError("target must be an object");
  i = i || new FormData(), r = E.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, T) {
    return !E.isUndefined(T[A]);
  });
  const a = r.metaTokens, u = r.visitor || b, h = r.dots, f = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(i);
  if (!E.isFunction(u))
    throw new TypeError("visitor must be a function");
  function $(A) {
    if (A === null) return "";
    if (E.isDate(A))
      return A.toISOString();
    if (!g && E.isBlob(A))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(A) || E.isTypedArray(A) ? g && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function b(A, T, O) {
    let W = A;
    if (A && !O && typeof A == "object") {
      if (E.endsWith(T, "{}"))
        T = a ? T : T.slice(0, -2), A = JSON.stringify(A);
      else if (E.isArray(A) && Uv(A) || (E.isFileList(A) || E.endsWith(T, "[]")) && (W = E.toArray(A)))
        return T = Tc(T), W.forEach(function(M, L) {
          !(E.isUndefined(M) || M === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? Rl([T], L, h) : f === null ? T : T + "[]",
            $(M)
          );
        }), !1;
    }
    return Do(A) ? !0 : (i.append(Rl(O, T, h), $(A)), !1);
  }
  const v = [], P = Object.assign(Mv, {
    defaultVisitor: b,
    convertValue: $,
    isVisitable: Do
  });
  function S(A, T) {
    if (!E.isUndefined(A)) {
      if (v.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      v.push(A), E.forEach(A, function(O, W) {
        (!(E.isUndefined(O) || O === null) && u.call(
          i,
          O,
          E.isString(W) ? W.trim() : W,
          T,
          P
        )) === !0 && S(O, T ? T.concat(W) : [W]);
      }), v.pop();
    }
  }
  if (!E.isObject(s))
    throw new TypeError("data must be an object");
  return S(s), i;
}
function Il(s) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g, function(r) {
    return i[r];
  });
}
function Qo(s, i) {
  this._pairs = [], s && gi(s, this, i);
}
const Cc = Qo.prototype;
Cc.append = function(s, i) {
  this._pairs.push([s, i]);
};
Cc.toString = function(s) {
  const i = s ? function(r) {
    return s.call(this, r, Il);
  } : Il;
  return this._pairs.map(function(r) {
    return i(r[0]) + "=" + i(r[1]);
  }, "").join("&");
};
function Lv(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Pc(s, i, r) {
  if (!i)
    return s;
  const a = r && r.encode || Lv, u = r && r.serialize;
  let h;
  if (u ? h = u(i, r) : h = E.isURLSearchParams(i) ? i.toString() : new Qo(i, r).toString(a), h) {
    const f = s.indexOf("#");
    f !== -1 && (s = s.slice(0, f)), s += (s.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return s;
}
class Bl {
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
  use(i, r, a) {
    return this.handlers.push({
      fulfilled: i,
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
    E.forEach(this.handlers, function(r) {
      r !== null && i(r);
    });
  }
}
const Ac = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, zv = typeof URLSearchParams < "u" ? URLSearchParams : Qo, Hv = typeof FormData < "u" ? FormData : null, qv = typeof Blob < "u" ? Blob : null, Wv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zv,
    FormData: Hv,
    Blob: qv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Zo = typeof window < "u" && typeof document < "u", jo = typeof navigator == "object" && navigator || void 0, Vv = Zo && (!jo || ["ReactNative", "NativeScript", "NS"].indexOf(jo.product) < 0), Jv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Kv = Zo && window.location.href || "http://localhost", Gv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Zo,
  hasStandardBrowserEnv: Vv,
  hasStandardBrowserWebWorkerEnv: Jv,
  navigator: jo,
  origin: Kv
}, Symbol.toStringTag, { value: "Module" })), Kt = {
  ...Gv,
  ...Wv
};
function Xv(s, i) {
  return gi(s, new Kt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, a, u, h) {
      return Kt.isNode && E.isBuffer(r) ? (this.append(a, r.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function Yv(s) {
  return E.matchAll(/\w+|\[(\w*)]/g, s).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function Qv(s) {
  const i = {}, r = Object.keys(s);
  let a;
  const u = r.length;
  let h;
  for (a = 0; a < u; a++)
    h = r[a], i[h] = s[h];
  return i;
}
function Rc(s) {
  function i(r, a, u, h) {
    let f = r[h++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f), $ = h >= r.length;
    return f = !f && E.isArray(u) ? u.length : f, $ ? (E.hasOwnProp(u, f) ? u[f] = [u[f], a] : u[f] = a, !g) : ((!u[f] || !E.isObject(u[f])) && (u[f] = []), i(r, a, u[f], h) && E.isArray(u[f]) && (u[f] = Qv(u[f])), !g);
  }
  if (E.isFormData(s) && E.isFunction(s.entries)) {
    const r = {};
    return E.forEachEntry(s, (a, u) => {
      i(Yv(a), u, r, 0);
    }), r;
  }
  return null;
}
function Zv(s, i, r) {
  if (E.isString(s))
    try {
      return (i || JSON.parse)(s), E.trim(s);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (0, JSON.stringify)(s);
}
const us = {
  transitional: Ac,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(s, i) {
    const r = i.getContentType() || "", a = r.indexOf("application/json") > -1, u = E.isObject(s);
    if (u && E.isHTMLForm(s) && (s = new FormData(s)), E.isFormData(s))
      return a ? JSON.stringify(Rc(s)) : s;
    if (E.isArrayBuffer(s) || E.isBuffer(s) || E.isStream(s) || E.isFile(s) || E.isBlob(s) || E.isReadableStream(s))
      return s;
    if (E.isArrayBufferView(s))
      return s.buffer;
    if (E.isURLSearchParams(s))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), s.toString();
    let h;
    if (u) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Xv(s, this.formSerializer).toString();
      if ((h = E.isFileList(s)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return gi(
          h ? { "files[]": s } : s,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return u || a ? (i.setContentType("application/json", !1), Zv(s)) : s;
  }],
  transformResponse: [function(s) {
    const i = this.transitional || us.transitional, r = i && i.forcedJSONParsing, a = this.responseType === "json";
    if (E.isResponse(s) || E.isReadableStream(s))
      return s;
    if (s && E.isString(s) && (r && !this.responseType || a)) {
      const u = !(i && i.silentJSONParsing) && a;
      try {
        return JSON.parse(s);
      } catch (h) {
        if (u)
          throw h.name === "SyntaxError" ? G.from(h, G.ERR_BAD_RESPONSE, this, null, this.response) : h;
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
    FormData: Kt.classes.FormData,
    Blob: Kt.classes.Blob
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
E.forEach(["delete", "get", "head", "post", "put", "patch"], (s) => {
  us.headers[s] = {};
});
const tb = E.toObjectSet([
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
]), eb = (s) => {
  const i = {};
  let r, a, u;
  return s && s.split(`
`).forEach(function(h) {
    u = h.indexOf(":"), r = h.substring(0, u).trim().toLowerCase(), a = h.substring(u + 1).trim(), !(!r || i[r] && tb[r]) && (r === "set-cookie" ? i[r] ? i[r].push(a) : i[r] = [a] : i[r] = i[r] ? i[r] + ", " + a : a);
  }), i;
}, Fl = Symbol("internals");
function ts(s) {
  return s && String(s).trim().toLowerCase();
}
function ti(s) {
  return s === !1 || s == null ? s : E.isArray(s) ? s.map(ti) : String(s);
}
function nb(s) {
  const i = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = r.exec(s); )
    i[a[1]] = a[2];
  return i;
}
const sb = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
function _o(s, i, r, a, u) {
  if (E.isFunction(a))
    return a.call(this, i, r);
  if (u && (i = r), !!E.isString(i)) {
    if (E.isString(a))
      return i.indexOf(a) !== -1;
    if (E.isRegExp(a))
      return a.test(i);
  }
}
function ib(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, r, a) => r.toUpperCase() + a);
}
function ob(s, i) {
  const r = E.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(s, a + r, {
      value: function(u, h, f) {
        return this[a].call(this, i, u, h, f);
      },
      configurable: !0
    });
  });
}
class Gt {
  constructor(i) {
    i && this.set(i);
  }
  set(i, r, a) {
    const u = this;
    function h(g, $, b) {
      const v = ts($);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const P = E.findKey(u, v);
      (!P || u[P] === void 0 || b === !0 || b === void 0 && u[P] !== !1) && (u[P || $] = ti(g));
    }
    const f = (g, $) => E.forEach(g, (b, v) => h(b, v, $));
    if (E.isPlainObject(i) || i instanceof this.constructor)
      f(i, r);
    else if (E.isString(i) && (i = i.trim()) && !sb(i))
      f(eb(i), r);
    else if (E.isHeaders(i))
      for (const [g, $] of i.entries())
        h($, g, a);
    else
      i != null && h(r, i, a);
    return this;
  }
  get(i, r) {
    if (i = ts(i), i) {
      const a = E.findKey(this, i);
      if (a) {
        const u = this[a];
        if (!r)
          return u;
        if (r === !0)
          return nb(u);
        if (E.isFunction(r))
          return r.call(this, u, a);
        if (E.isRegExp(r))
          return r.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, r) {
    if (i = ts(i), i) {
      const a = E.findKey(this, i);
      return !!(a && this[a] !== void 0 && (!r || _o(this, this[a], a, r)));
    }
    return !1;
  }
  delete(i, r) {
    const a = this;
    let u = !1;
    function h(f) {
      if (f = ts(f), f) {
        const g = E.findKey(a, f);
        g && (!r || _o(a, a[g], g, r)) && (delete a[g], u = !0);
      }
    }
    return E.isArray(i) ? i.forEach(h) : h(i), u;
  }
  clear(i) {
    const r = Object.keys(this);
    let a = r.length, u = !1;
    for (; a--; ) {
      const h = r[a];
      (!i || _o(this, this[h], h, i, !0)) && (delete this[h], u = !0);
    }
    return u;
  }
  normalize(i) {
    const r = this, a = {};
    return E.forEach(this, (u, h) => {
      const f = E.findKey(a, h);
      if (f) {
        r[f] = ti(u), delete r[h];
        return;
      }
      const g = i ? ib(h) : String(h).trim();
      g !== h && delete r[h], r[g] = ti(u), a[g] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const r = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (a, u) => {
      a != null && a !== !1 && (r[u] = i && E.isArray(a) ? a.join(", ") : a);
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
    const a = new this(i);
    return r.forEach((u) => a.set(u)), a;
  }
  static accessor(i) {
    const r = (this[Fl] = this[Fl] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function u(h) {
      const f = ts(h);
      r[f] || (ob(a, h), r[f] = !0);
    }
    return E.isArray(i) ? i.forEach(u) : u(i), this;
  }
}
Gt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Gt.prototype, ({ value: s }, i) => {
  let r = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => s,
    set(a) {
      this[r] = a;
    }
  };
});
E.freezeMethods(Gt);
function Eo(s, i) {
  const r = this || us, a = i || r, u = Gt.from(a.headers);
  let h = a.data;
  return E.forEach(s, function(f) {
    h = f.call(r, h, u.normalize(), i ? i.status : void 0);
  }), u.normalize(), h;
}
function Ic(s) {
  return !!(s && s.__CANCEL__);
}
function Sn(s, i, r) {
  G.call(this, s ?? "canceled", G.ERR_CANCELED, i, r), this.name = "CanceledError";
}
E.inherits(Sn, G, {
  __CANCEL__: !0
});
function Bc(s, i, r) {
  const a = r.config.validateStatus;
  !r.status || !a || a(r.status) ? s(r) : i(new G(
    "Request failed with status code " + r.status,
    [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function rb(s) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return i && i[1] || "";
}
function ab(s, i) {
  s = s || 10;
  const r = new Array(s), a = new Array(s);
  let u = 0, h = 0, f;
  return i = i !== void 0 ? i : 1e3, function(g) {
    const $ = Date.now(), b = a[h];
    f || (f = $), r[u] = g, a[u] = $;
    let v = h, P = 0;
    for (; v !== u; )
      P += r[v++], v = v % s;
    if (u = (u + 1) % s, u === h && (h = (h + 1) % s), $ - f < i)
      return;
    const S = b && $ - b;
    return S ? Math.round(P * 1e3 / S) : void 0;
  };
}
function lb(s, i) {
  let r = 0, a = 1e3 / i, u, h;
  const f = (g, $ = Date.now()) => {
    r = $, u = null, h && (clearTimeout(h), h = null), s.apply(null, g);
  };
  return [(...g) => {
    const $ = Date.now(), b = $ - r;
    b >= a ? f(g, $) : (u = g, h || (h = setTimeout(() => {
      h = null, f(u);
    }, a - b)));
  }, () => u && f(u)];
}
const si = (s, i, r = 3) => {
  let a = 0;
  const u = ab(50, 250);
  return lb((h) => {
    const f = h.loaded, g = h.lengthComputable ? h.total : void 0, $ = f - a, b = u($), v = f <= g;
    a = f;
    const P = {
      loaded: f,
      total: g,
      progress: g ? f / g : void 0,
      bytes: $,
      rate: b || void 0,
      estimated: b && g && v ? (g - f) / b : void 0,
      event: h,
      lengthComputable: g != null,
      [i ? "download" : "upload"]: !0
    };
    s(P);
  }, r);
}, Nl = (s, i) => {
  const r = s != null;
  return [(a) => i[0]({
    lengthComputable: r,
    total: s,
    loaded: a
  }), i[1]];
}, Dl = (s) => (...i) => E.asap(() => s(...i)), cb = Kt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const s = Kt.navigator && /(msie|trident)/i.test(Kt.navigator.userAgent), i = document.createElement("a");
    let r;
    function a(u) {
      let h = u;
      return s && (i.setAttribute("href", h), h = i.href), i.setAttribute("href", h), {
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
    return r = a(window.location.href), function(u) {
      const h = E.isString(u) ? a(u) : u;
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
), ub = Kt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(s, i, r, a, u, h) {
      const f = [s + "=" + encodeURIComponent(i)];
      E.isNumber(r) && f.push("expires=" + new Date(r).toGMTString()), E.isString(a) && f.push("path=" + a), E.isString(u) && f.push("domain=" + u), h === !0 && f.push("secure"), document.cookie = f.join("; ");
    },
    read(s) {
      const i = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
      return i ? decodeURIComponent(i[3]) : null;
    },
    remove(s) {
      this.write(s, "", Date.now() - 864e5);
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
function hb(s) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function db(s, i) {
  return i ? s.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : s;
}
function Fc(s, i) {
  return s && !hb(i) ? db(s, i) : i;
}
const jl = (s) => s instanceof Gt ? { ...s } : s;
function nn(s, i) {
  i = i || {};
  const r = {};
  function a(b, v, P) {
    return E.isPlainObject(b) && E.isPlainObject(v) ? E.merge.call({ caseless: P }, b, v) : E.isPlainObject(v) ? E.merge({}, v) : E.isArray(v) ? v.slice() : v;
  }
  function u(b, v, P) {
    if (E.isUndefined(v)) {
      if (!E.isUndefined(b))
        return a(void 0, b, P);
    } else return a(b, v, P);
  }
  function h(b, v) {
    if (!E.isUndefined(v))
      return a(void 0, v);
  }
  function f(b, v) {
    if (E.isUndefined(v)) {
      if (!E.isUndefined(b))
        return a(void 0, b);
    } else return a(void 0, v);
  }
  function g(b, v, P) {
    if (P in i)
      return a(b, v);
    if (P in s)
      return a(void 0, b);
  }
  const $ = {
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
    headers: (b, v) => u(jl(b), jl(v), !0)
  };
  return E.forEach(Object.keys(Object.assign({}, s, i)), function(b) {
    const v = $[b] || u, P = v(s[b], i[b], b);
    E.isUndefined(P) && v !== g || (r[b] = P);
  }), r;
}
const Nc = (s) => {
  const i = nn({}, s);
  let { data: r, withXSRFToken: a, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = i;
  i.headers = f = Gt.from(f), i.url = Pc(Fc(i.baseURL, i.url), s.params, s.paramsSerializer), g && f.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let $;
  if (E.isFormData(r)) {
    if (Kt.hasStandardBrowserEnv || Kt.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if (($ = f.getContentType()) !== !1) {
      const [b, ...v] = $ ? $.split(";").map((P) => P.trim()).filter(Boolean) : [];
      f.setContentType([b || "multipart/form-data", ...v].join("; "));
    }
  }
  if (Kt.hasStandardBrowserEnv && (a && E.isFunction(a) && (a = a(i)), a || a !== !1 && cb(i.url))) {
    const b = u && h && ub.read(h);
    b && f.set(u, b);
  }
  return i;
}, fb = typeof XMLHttpRequest < "u", pb = fb && function(s) {
  return new Promise(function(i, r) {
    const a = Nc(s);
    let u = a.data;
    const h = Gt.from(a.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: $ } = a, b, v, P, S, A;
    function T() {
      S && S(), A && A(), a.cancelToken && a.cancelToken.unsubscribe(b), a.signal && a.signal.removeEventListener("abort", b);
    }
    let O = new XMLHttpRequest();
    O.open(a.method.toUpperCase(), a.url, !0), O.timeout = a.timeout;
    function W() {
      if (!O)
        return;
      const L = Gt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), wt = {
        data: !f || f === "text" || f === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: L,
        config: s,
        request: O
      };
      Bc(function(Ut) {
        i(Ut), T();
      }, function(Ut) {
        r(Ut), T();
      }, wt), O = null;
    }
    "onloadend" in O ? O.onloadend = W : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(W);
    }, O.onabort = function() {
      O && (r(new G("Request aborted", G.ECONNABORTED, s, O)), O = null);
    }, O.onerror = function() {
      r(new G("Network Error", G.ERR_NETWORK, s, O)), O = null;
    }, O.ontimeout = function() {
      let L = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const wt = a.transitional || Ac;
      a.timeoutErrorMessage && (L = a.timeoutErrorMessage), r(new G(
        L,
        wt.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
        s,
        O
      )), O = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in O && E.forEach(h.toJSON(), function(L, wt) {
      O.setRequestHeader(wt, L);
    }), E.isUndefined(a.withCredentials) || (O.withCredentials = !!a.withCredentials), f && f !== "json" && (O.responseType = a.responseType), $ && ([P, A] = si($, !0), O.addEventListener("progress", P)), g && O.upload && ([v, S] = si(g), O.upload.addEventListener("progress", v), O.upload.addEventListener("loadend", S)), (a.cancelToken || a.signal) && (b = (L) => {
      O && (r(!L || L.type ? new Sn(null, s, O) : L), O.abort(), O = null);
    }, a.cancelToken && a.cancelToken.subscribe(b), a.signal && (a.signal.aborted ? b() : a.signal.addEventListener("abort", b)));
    const M = rb(a.url);
    if (M && Kt.protocols.indexOf(M) === -1) {
      r(new G("Unsupported protocol " + M + ":", G.ERR_BAD_REQUEST, s));
      return;
    }
    O.send(u || null);
  });
}, mb = (s, i) => {
  const { length: r } = s = s ? s.filter(Boolean) : [];
  if (i || r) {
    let a = new AbortController(), u;
    const h = function(b) {
      if (!u) {
        u = !0, g();
        const v = b instanceof Error ? b : this.reason;
        a.abort(v instanceof G ? v : new Sn(v instanceof Error ? v.message : v));
      }
    };
    let f = i && setTimeout(() => {
      f = null, h(new G(`timeout ${i} of ms exceeded`, G.ETIMEDOUT));
    }, i);
    const g = () => {
      s && (f && clearTimeout(f), f = null, s.forEach((b) => {
        b.unsubscribe ? b.unsubscribe(h) : b.removeEventListener("abort", h);
      }), s = null);
    };
    s.forEach((b) => b.addEventListener("abort", h));
    const { signal: $ } = a;
    return $.unsubscribe = () => E.asap(g), $;
  }
}, gb = function* (s, i) {
  let r = s.byteLength;
  if (r < i) {
    yield s;
    return;
  }
  let a = 0, u;
  for (; a < r; )
    u = a + i, yield s.slice(a, u), a = u;
}, vb = async function* (s, i) {
  for await (const r of bb(s))
    yield* gb(r, i);
}, bb = async function* (s) {
  if (s[Symbol.asyncIterator]) {
    yield* s;
    return;
  }
  const i = s.getReader();
  try {
    for (; ; ) {
      const { done: r, value: a } = await i.read();
      if (r)
        break;
      yield a;
    }
  } finally {
    await i.cancel();
  }
}, Ul = (s, i, r, a) => {
  const u = vb(s, i);
  let h = 0, f, g = ($) => {
    f || (f = !0, a && a($));
  };
  return new ReadableStream({
    async pull($) {
      try {
        const { done: b, value: v } = await u.next();
        if (b) {
          g(), $.close();
          return;
        }
        let P = v.byteLength;
        if (r) {
          let S = h += P;
          r(S);
        }
        $.enqueue(new Uint8Array(v));
      } catch (b) {
        throw g(b), b;
      }
    },
    cancel($) {
      return g($), u.return();
    }
  }, {
    highWaterMark: 2
  });
}, vi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Dc = vi && typeof ReadableStream == "function", wb = vi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((s) => (i) => s.encode(i))(new TextEncoder()) : async (s) => new Uint8Array(await new Response(s).arrayBuffer())), jc = (s, ...i) => {
  try {
    return !!s(...i);
  } catch {
    return !1;
  }
}, yb = Dc && jc(() => {
  let s = !1;
  const i = new Request(Kt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return s = !0, "half";
    }
  }).headers.has("Content-Type");
  return s && !i;
}), Ml = 64 * 1024, Uo = Dc && jc(() => E.isReadableStream(new Response("").body)), ii = {
  stream: Uo && ((s) => s.body)
};
vi && ((s) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !ii[i] && (ii[i] = E.isFunction(s[i]) ? (r) => r[i]() : (r, a) => {
      throw new G(`Response type '${i}' is not supported`, G.ERR_NOT_SUPPORT, a);
    });
  });
})(new Response());
const kb = async (s) => {
  if (s == null)
    return 0;
  if (E.isBlob(s))
    return s.size;
  if (E.isSpecCompliantForm(s))
    return (await new Request(Kt.origin, {
      method: "POST",
      body: s
    }).arrayBuffer()).byteLength;
  if (E.isArrayBufferView(s) || E.isArrayBuffer(s))
    return s.byteLength;
  if (E.isURLSearchParams(s) && (s = s + ""), E.isString(s))
    return (await wb(s)).byteLength;
}, $b = async (s, i) => E.toFiniteNumber(s.getContentLength()) ?? kb(i), xb = vi && (async (s) => {
  let {
    url: i,
    method: r,
    data: a,
    signal: u,
    cancelToken: h,
    timeout: f,
    onDownloadProgress: g,
    onUploadProgress: $,
    responseType: b,
    headers: v,
    withCredentials: P = "same-origin",
    fetchOptions: S
  } = Nc(s);
  b = b ? (b + "").toLowerCase() : "text";
  let A = mb([u, h && h.toAbortSignal()], f), T;
  const O = A && A.unsubscribe && (() => {
    A.unsubscribe();
  });
  let W;
  try {
    if ($ && yb && r !== "get" && r !== "head" && (W = await $b(v, a)) !== 0) {
      let yt = new Request(i, {
        method: "POST",
        body: a,
        duplex: "half"
      }), At;
      if (E.isFormData(a) && (At = yt.headers.get("content-type")) && v.setContentType(At), yt.body) {
        const [Xt, Yt] = Nl(
          W,
          si(Dl($))
        );
        a = Ul(yt.body, Ml, Xt, Yt);
      }
    }
    E.isString(P) || (P = P ? "include" : "omit");
    const M = "credentials" in Request.prototype;
    T = new Request(i, {
      ...S,
      signal: A,
      method: r.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: a,
      duplex: "half",
      credentials: M ? P : void 0
    });
    let L = await fetch(T);
    const wt = Uo && (b === "stream" || b === "response");
    if (Uo && (g || wt && O)) {
      const yt = {};
      ["status", "statusText", "headers"].forEach((oe) => {
        yt[oe] = L[oe];
      });
      const At = E.toFiniteNumber(L.headers.get("content-length")), [Xt, Yt] = g && Nl(
        At,
        si(Dl(g), !0)
      ) || [];
      L = new Response(
        Ul(L.body, Ml, Xt, () => {
          Yt && Yt(), O && O();
        }),
        yt
      );
    }
    b = b || "text";
    let Ut = await ii[E.findKey(ii, b) || "text"](L, s);
    return !wt && O && O(), await new Promise((yt, At) => {
      Bc(yt, At, {
        data: Ut,
        headers: Gt.from(L.headers),
        status: L.status,
        statusText: L.statusText,
        config: s,
        request: T
      });
    });
  } catch (M) {
    throw O && O(), M && M.name === "TypeError" && /fetch/i.test(M.message) ? Object.assign(
      new G("Network Error", G.ERR_NETWORK, s, T),
      {
        cause: M.cause || M
      }
    ) : G.from(M, M && M.code, s, T);
  }
}), Mo = {
  http: jv,
  xhr: pb,
  fetch: xb
};
E.forEach(Mo, (s, i) => {
  if (s) {
    try {
      Object.defineProperty(s, "name", { value: i });
    } catch {
    }
    Object.defineProperty(s, "adapterName", { value: i });
  }
});
const Ll = (s) => `- ${s}`, Sb = (s) => E.isFunction(s) || s === null || s === !1, Uc = {
  getAdapter: (s) => {
    s = E.isArray(s) ? s : [s];
    const { length: i } = s;
    let r, a;
    const u = {};
    for (let h = 0; h < i; h++) {
      r = s[h];
      let f;
      if (a = r, !Sb(r) && (a = Mo[(f = String(r)).toLowerCase()], a === void 0))
        throw new G(`Unknown adapter '${f}'`);
      if (a)
        break;
      u[f || "#" + h] = a;
    }
    if (!a) {
      const h = Object.entries(u).map(
        ([g, $]) => `adapter ${g} ` + ($ === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let f = i ? h.length > 1 ? `since :
` + h.map(Ll).join(`
`) : " " + Ll(h[0]) : "as no adapter specified";
      throw new G(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return a;
  },
  adapters: Mo
};
function Oo(s) {
  if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
    throw new Sn(null, s);
}
function zl(s) {
  return Oo(s), s.headers = Gt.from(s.headers), s.data = Eo.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), Uc.getAdapter(s.adapter || us.adapter)(s).then(function(i) {
    return Oo(s), i.data = Eo.call(
      s,
      s.transformResponse,
      i
    ), i.headers = Gt.from(i.headers), i;
  }, function(i) {
    return Ic(i) || (Oo(s), i && i.response && (i.response.data = Eo.call(
      s,
      s.transformResponse,
      i.response
    ), i.response.headers = Gt.from(i.response.headers))), Promise.reject(i);
  });
}
const Mc = "1.7.7", tr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, i) => {
  tr[s] = function(r) {
    return typeof r === s || "a" + (i < 1 ? "n " : " ") + s;
  };
});
const Hl = {};
tr.transitional = function(s, i, r) {
  function a(u, h) {
    return "[Axios v" + Mc + "] Transitional option '" + u + "'" + h + (r ? ". " + r : "");
  }
  return (u, h, f) => {
    if (s === !1)
      throw new G(
        a(h, " has been removed" + (i ? " in " + i : "")),
        G.ERR_DEPRECATED
      );
    return i && !Hl[h] && (Hl[h] = !0, console.warn(
      a(
        h,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), s ? s(u, h, f) : !0;
  };
};
function _b(s, i, r) {
  if (typeof s != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(s);
  let u = a.length;
  for (; u-- > 0; ) {
    const h = a[u], f = i[h];
    if (f) {
      const g = s[h], $ = g === void 0 || f(g, h, s);
      if ($ !== !0)
        throw new G("option " + h + " must be " + $, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new G("Unknown option " + h, G.ERR_BAD_OPTION);
  }
}
const Lo = {
  assertOptions: _b,
  validators: tr
}, Ae = Lo.validators;
class tn {
  constructor(i) {
    this.defaults = i, this.interceptors = {
      request: new Bl(),
      response: new Bl()
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
  _request(i, r) {
    typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = nn(this.defaults, r);
    const { transitional: a, paramsSerializer: u, headers: h } = r;
    a !== void 0 && Lo.assertOptions(a, {
      silentJSONParsing: Ae.transitional(Ae.boolean),
      forcedJSONParsing: Ae.transitional(Ae.boolean),
      clarifyTimeoutError: Ae.transitional(Ae.boolean)
    }, !1), u != null && (E.isFunction(u) ? r.paramsSerializer = {
      serialize: u
    } : Lo.assertOptions(u, {
      encode: Ae.function,
      serialize: Ae.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let f = h && E.merge(
      h.common,
      h[r.method]
    );
    h && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (T) => {
        delete h[T];
      }
    ), r.headers = Gt.concat(f, h);
    const g = [];
    let $ = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(r) === !1 || ($ = $ && T.synchronous, g.unshift(T.fulfilled, T.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(T) {
      b.push(T.fulfilled, T.rejected);
    });
    let v, P = 0, S;
    if (!$) {
      const T = [zl.bind(this), void 0];
      for (T.unshift.apply(T, g), T.push.apply(T, b), S = T.length, v = Promise.resolve(r); P < S; )
        v = v.then(T[P++], T[P++]);
      return v;
    }
    S = g.length;
    let A = r;
    for (P = 0; P < S; ) {
      const T = g[P++], O = g[P++];
      try {
        A = T(A);
      } catch (W) {
        O.call(this, W);
        break;
      }
    }
    try {
      v = zl.call(this, A);
    } catch (T) {
      return Promise.reject(T);
    }
    for (P = 0, S = b.length; P < S; )
      v = v.then(b[P++], b[P++]);
    return v;
  }
  getUri(i) {
    i = nn(this.defaults, i);
    const r = Fc(i.baseURL, i.url);
    return Pc(r, i.params, i.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function(s) {
  tn.prototype[s] = function(i, r) {
    return this.request(nn(r || {}, {
      method: s,
      url: i,
      data: (r || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(s) {
  function i(r) {
    return function(a, u, h) {
      return this.request(nn(h || {}, {
        method: s,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: u
      }));
    };
  }
  tn.prototype[s] = i(), tn.prototype[s + "Form"] = i(!0);
});
class er {
  constructor(i) {
    if (typeof i != "function")
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
    }, i(function(u, h, f) {
      a.reason || (a.reason = new Sn(u, h, f), r(a.reason));
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
    const i = new AbortController(), r = (a) => {
      i.abort(a);
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
      token: new er(function(r) {
        i = r;
      }),
      cancel: i
    };
  }
}
function Eb(s) {
  return function(i) {
    return s.apply(null, i);
  };
}
function Ob(s) {
  return E.isObject(s) && s.isAxiosError === !0;
}
const zo = {
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
Object.entries(zo).forEach(([s, i]) => {
  zo[i] = s;
});
function Lc(s) {
  const i = new tn(s), r = bc(tn.prototype.request, i);
  return E.extend(r, tn.prototype, i, { allOwnKeys: !0 }), E.extend(r, i, null, { allOwnKeys: !0 }), r.create = function(a) {
    return Lc(nn(s, a));
  }, r;
}
const Pt = Lc(us);
Pt.Axios = tn;
Pt.CanceledError = Sn;
Pt.CancelToken = er;
Pt.isCancel = Ic;
Pt.VERSION = Mc;
Pt.toFormData = gi;
Pt.AxiosError = G;
Pt.Cancel = Pt.CanceledError;
Pt.all = function(s) {
  return Promise.all(s);
};
Pt.spread = Eb;
Pt.isAxiosError = Ob;
Pt.mergeConfig = nn;
Pt.AxiosHeaders = Gt;
Pt.formToJSON = (s) => Rc(E.isHTMLForm(s) ? new FormData(s) : s);
Pt.getAdapter = Uc.getAdapter;
Pt.HttpStatusCode = zo;
Pt.default = Pt;
const Tb = (s) => {
  const i = typeof s;
  return s !== null && (i === "object" || i === "function");
}, To = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), Cb = new Set("0123456789");
function Pb(s) {
  const i = [];
  let r = "", a = "start", u = !1;
  for (const h of s)
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
        if (To.has(r))
          return [];
        i.push(r), r = "", a = "property";
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
          if (To.has(r))
            return [];
          i.push(r), r = "";
        }
        a = "index";
        break;
      }
      case "]": {
        if (a === "index") {
          i.push(Number.parseInt(r, 10)), r = "", a = "indexEnd";
          break;
        }
        if (a === "indexEnd")
          throw new Error("Invalid character after an index");
      }
      default: {
        if (a === "index" && !Cb.has(h))
          throw new Error("Invalid character in an index");
        if (a === "indexEnd")
          throw new Error("Invalid character after an index");
        a === "start" && (a = "property"), u && (u = !1, r += "\\"), r += h;
      }
    }
  switch (u && (r += "\\"), a) {
    case "property": {
      if (To.has(r))
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
function Ab(s, i) {
  if (typeof i != "number" && Array.isArray(s)) {
    const r = Number.parseInt(i, 10);
    return Number.isInteger(r) && s[r] === s[i];
  }
  return !1;
}
function Rb(s, i, r) {
  if (!Tb(s) || typeof i != "string")
    return r === void 0 ? s : r;
  const a = Pb(i);
  if (a.length === 0)
    return r;
  for (let u = 0; u < a.length; u++) {
    const h = a[u];
    if (Ab(s, h) ? s = u === a.length - 1 ? void 0 : null : s = s[h], s == null) {
      if (u !== a.length - 1)
        return r;
      break;
    }
  }
  return s === void 0 ? r : s;
}
const zc = ql("config", {
  persist: !0,
  state: () => ({
    config: {}
  }),
  getters: {
    get: (s) => (i, r) => Rb(s.config, i, r)
  },
  actions: {
    async load() {
      Pt.get("/api/config").then((s) => {
        this.config = s.data;
      });
    }
  }
});
function Ib() {
  return {
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    password: "",
    passwordc: "",
    locale: zc().get("site.registration.user_defaults.locale", "en_US"),
    captcha: "",
    spiderbro: "http://"
  };
}
function Bb() {
  return zc().get("locales.available");
}
function Fb() {
  return "/account/captcha";
}
async function Nb(s) {
  return bt.post("/account/register", s).then((i) => i.data).catch((i) => {
    throw {
      description: "An error as occurred",
      style: ke.Danger,
      closeBtn: !0,
      ...i.response.data
    };
  });
}
const Db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  doRegister: Nb,
  getAvailableLocales: Bb,
  getCaptchaUrl: Fb,
  getDefaultForm: Ib
}, Symbol.toStringTag, { value: "Module" }));
async function jb(s) {
  return bt.post("/account/forgot-password", { email: s }).then((i) => ({
    description: i.data.message,
    style: ke.Success,
    closeBtn: !0
  })).catch((i) => {
    throw {
      description: "An error as occurred",
      style: ke.Danger,
      closeBtn: !0,
      ...i.response.data
    };
  });
}
async function Ub(s) {
  return bt.post("/account/resend-verification", { email: s }).then((i) => ({
    description: i.data.message,
    style: ke.Success,
    closeBtn: !0
  })).catch((i) => {
    throw {
      description: "An error as occurred",
      style: ke.Danger,
      closeBtn: !0,
      ...i.response.data
    };
  });
}
const Mb = { class: "uk-fieldset uk-form-stacked" }, Lb = { class: "uk-margin" }, zb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Hb = { class: "uk-width-1-2" }, qb = { class: "uk-width-1-2" }, Wb = { class: "uk-width-1-1" }, Vb = { class: "uk-margin" }, Jb = { class: "uk-margin" }, Kb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Gb = { class: "uk-width-1-2" }, Xb = { class: "uk-width-1-2" }, Yb = { class: "uk-margin" }, Qb = ["value"], Zb = { class: "uk-margin" }, tw = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, ew = { class: "uk-width-2-3" }, nw = { class: "uk-width-1-3" }, sw = ["src"], iw = { class: "uk-text-center" }, ow = ["disabled"], Hc = /* @__PURE__ */ st({
  __name: "FormRegister",
  setup(s) {
    const { getDefaultForm: i, doRegister: r, getAvailableLocales: a, getCaptchaUrl: u } = Db, h = ve(!1), f = ve();
    let g = i();
    async function $() {
      h.value = !0, f.value = null, await r(g).then((b) => {
        Vl.notification({
          message: "Succesfully registered " + (b == null ? void 0 : b.full_name) + "!",
          status: "success",
          pos: "top-right",
          timeout: 4e3
        });
      }).catch((b) => {
        f.value = b;
      }).finally(() => {
        h.value = !1;
      });
    }
    return (b, v) => {
      const P = xt("UFAlert");
      return R(), B("form", {
        onSubmit: v[8] || (v[8] = ri((S) => $(), ["prevent"]))
      }, [
        k("fieldset", Mb, [
          f.value ? (R(), dt(P, {
            key: 0,
            "data-test": "error",
            alert: f.value
          }, null, 8, ["alert"])) : Q("", !0),
          k("div", Lb, [
            v[9] || (v[9] = k("label", {
              class: "uk-form-label",
              for: "first_name"
            }, "Name and email", -1)),
            k("div", zb, [
              k("div", Hb, [
                jt(k("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "First Name",
                  "aria-label": "First Name",
                  id: "first_name",
                  "data-test": "first_name",
                  "onUpdate:modelValue": v[0] || (v[0] = (S) => U(g).first_name = S)
                }, null, 512), [
                  [Wt, U(g).first_name]
                ])
              ]),
              k("div", qb, [
                jt(k("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "Last Name",
                  "aria-label": "Last Name",
                  "data-test": "last_name",
                  "onUpdate:modelValue": v[1] || (v[1] = (S) => U(g).last_name = S)
                }, null, 512), [
                  [Wt, U(g).last_name]
                ])
              ]),
              k("div", Wb, [
                jt(k("input", {
                  class: "uk-input",
                  type: "email",
                  placeholder: "Email",
                  "aria-label": "Email",
                  "data-test": "email",
                  "onUpdate:modelValue": v[2] || (v[2] = (S) => U(g).email = S)
                }, null, 512), [
                  [Wt, U(g).email]
                ])
              ])
            ])
          ]),
          k("div", Vb, [
            v[10] || (v[10] = k("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Username", -1)),
            jt(k("input", {
              class: "uk-input",
              type: "text",
              placeholder: "Username",
              "aria-label": "Username",
              "data-test": "username",
              "onUpdate:modelValue": v[3] || (v[3] = (S) => U(g).user_name = S)
            }, null, 512), [
              [Wt, U(g).user_name]
            ])
          ]),
          k("div", Jb, [
            v[11] || (v[11] = k("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Password", -1)),
            k("div", Kb, [
              k("div", Gb, [
                jt(k("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Password",
                  "aria-label": "Password",
                  "data-test": "password",
                  "onUpdate:modelValue": v[4] || (v[4] = (S) => U(g).password = S)
                }, null, 512), [
                  [Wt, U(g).password]
                ])
              ]),
              k("div", Xb, [
                jt(k("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Confirm Password",
                  "aria-label": "Confirm Password",
                  "data-test": "passwordc",
                  "onUpdate:modelValue": v[5] || (v[5] = (S) => U(g).passwordc = S)
                }, null, 512), [
                  [Wt, U(g).passwordc]
                ])
              ])
            ])
          ]),
          k("div", Yb, [
            v[12] || (v[12] = k("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Locale", -1)),
            jt(k("select", {
              class: "uk-select",
              id: "form-stacked-select",
              "data-test": "locale",
              "onUpdate:modelValue": v[6] || (v[6] = (S) => U(g).locale = S)
            }, [
              (R(!0), B(Qe, null, es(U(a)(), (S, A) => (R(), B("option", {
                value: A,
                key: A
              }, X(S), 9, Qb))), 128))
            ], 512), [
              [Ho, U(g).locale]
            ])
          ]),
          k("div", Zb, [
            v[13] || (v[13] = k("label", {
              class: "uk-form-label",
              for: "r-form-captcha"
            }, "Captcha", -1)),
            k("div", tw, [
              k("div", ew, [
                jt(k("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Captcha",
                  "aria-label": "Captcha",
                  id: "r-form-captcha",
                  "data-test": "captcha",
                  "onUpdate:modelValue": v[7] || (v[7] = (S) => U(g).captcha = S)
                }, null, 512), [
                  [Wt, U(g).captcha]
                ])
              ]),
              k("div", nw, [
                k("img", {
                  src: U(u)(),
                  id: "captcha",
                  "data-target": "#r-form-captcha"
                }, null, 8, sw)
              ])
            ])
          ]),
          v[14] || (v[14] = k("p", null, [
            pt(" By registering an account with UserFrosting, you accept "),
            k("a", null, "the terms and conditions"),
            pt(". ")
          ], -1)),
          k("div", iw, [
            k("button", {
              class: "uk-button uk-button-primary",
              disabled: h.value
            }, "Sign me up", 8, ow)
          ])
        ])
      ], 32);
    };
  }
}), rw = { class: "uk-fieldset" }, aw = { class: "uk-margin" }, lw = { class: "uk-inline uk-width-1-1" }, cw = { class: "uk-text-center" }, uw = ["disabled"], qc = /* @__PURE__ */ st({
  __name: "FormForgotPassword",
  setup(s) {
    const i = ve(!1), r = ve();
    let a = "";
    async function u() {
      i.value = !0, r.value = null, await jb(a).then((h) => {
        r.value = h;
      }).catch((h) => {
        r.value = h;
      }).finally(() => {
        i.value = !1;
      });
    }
    return (h, f) => {
      const g = xt("UFAlert");
      return R(), B("form", {
        onSubmit: f[1] || (f[1] = ri(($) => u(), ["prevent"]))
      }, [
        k("fieldset", rw, [
          r.value ? (R(), dt(g, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : Q("", !0),
          k("div", aw, [
            k("div", lw, [
              f[2] || (f[2] = k("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              jt(k("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": f[0] || (f[0] = ($) => qo(a) ? a.value = $ : a = $)
              }, null, 512), [
                [Wt, U(a)]
              ])
            ])
          ]),
          k("div", cw, [
            k("button", {
              class: "uk-button uk-button-primary",
              disabled: i.value,
              "data-test": "submit"
            }, " Email Password Reset Link ", 8, uw)
          ])
        ])
      ], 32);
    };
  }
}), hw = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, dw = { class: "uk-navbar-container" }, fw = { class: "uk-container uk-container-expand" }, pw = {
  class: "uk-navbar",
  "uk-navbar": ""
}, mw = {
  class: "uk-navbar-left",
  "data-test": "navbar-left"
}, gw = {
  class: "uk-navbar-right",
  "data-test": "navbar-right"
}, vw = { class: "uk-navbar-nav" }, bw = /* @__PURE__ */ st({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(s) {
    return (i, r) => (R(), B("header", null, [
      k("div", hw, [
        k("div", dw, [
          k("div", fw, [
            k("nav", pw, [
              k("div", mw, [
                Ct(Wo, {
                  to: i.to,
                  class: "uk-navbar-item uk-logo",
                  label: ""
                }, {
                  default: gt(() => [
                    z(i.$slots, "title", {}, () => [
                      pt(X(i.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              k("div", gw, [
                k("ul", vw, [
                  z(i.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), ww = { "data-test": "label" }, yw = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0px"
}, kw = {
  class: "uk-nav uk-navbar-dropdown-nav",
  "data-test": "slot"
}, nr = /* @__PURE__ */ st({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(s) {
    return (i, r) => (R(), B("li", null, [
      k("a", ww, [
        z(i.$slots, "label", {}, () => [
          pt(X(i.label), 1)
        ]),
        r[0] || (r[0] = pt()),
        r[1] || (r[1] = k("span", { "uk-navbar-parent-icon": "" }, null, -1))
      ]),
      k("div", yw, [
        k("ul", kw, [
          z(i.$slots, "default")
        ])
      ])
    ]));
  }
}), $w = {}, xw = { class: "uk-nav-divider" };
function Sw(s, i) {
  return R(), B("li", xw);
}
const _w = /* @__PURE__ */ ai($w, [["render", Sw]]), Ew = { key: 0 }, Ow = ["href"], Tw = ["href", "onClick"], Cw = /* @__PURE__ */ st({
  __name: "NavBarItem",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(s) {
    const i = s, r = ce(() => i.to === "" || typeof i.to == "string" && i.to.startsWith("http"));
    return (a, u) => r.value ? (R(), B("li", Ew, [
      k("a", {
        href: a.to.toString(),
        target: "_blank"
      }, [
        z(a.$slots, "default", {}, () => [
          pt(X(a.label), 1)
        ])
      ], 8, Ow)
    ])) : (R(), dt(U(rs), ns({
      key: 1,
      to: a.to
    }, a.$props, { custom: "" }), {
      default: gt(({ isActive: h, href: f, navigate: g }) => [
        k("li", {
          class: he({ "uk-active": h })
        }, [
          k("a", ns(a.$attrs, {
            href: f,
            onClick: g
          }), [
            z(a.$slots, "default", {}, () => [
              pt(X(a.label), 1)
            ])
          ], 16, Tw)
        ], 2)
      ]),
      _: 3
    }, 16, ["to"]));
  }
}), Pw = { class: "uk-text-center" }, Aw = /* @__PURE__ */ st({
  __name: "NavBarLogin",
  setup(s) {
    return (i, r) => (R(), dt(nr, {
      label: "Login",
      class: "uf-nav-login uk-text-center"
    }, {
      default: gt(() => [
        Ct(Xo),
        k("div", Pw, [
          k("button", {
            class: "uk-button uk-button-default",
            onClick: r[0] || (r[0] = (a) => i.$emit("gotoRegistration")),
            "data-test": "gotoRegistration"
          }, " Register ")
        ]),
        z(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Rw = {
  key: 0,
  "data-test": "username"
}, Iw = ["src"], Bw = { class: "uk-margin" }, Fw = ["src"], Nw = {
  key: 1,
  class: "uk-margin-remove",
  "data-test": "username"
}, Dw = {
  key: 2,
  class: "uk-margin-remove uk-text-meta",
  "data-test": "meta"
}, jw = /* @__PURE__ */ st({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(s) {
    return (i, r) => (R(), dt(nr, { class: "uf-nav-user uk-text-center" }, {
      label: gt(() => [
        i.username ? (R(), B("span", Rw, X(i.username), 1)) : Q("", !0),
        i.avatar ? (R(), B("img", {
          key: 1,
          src: i.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, Iw)) : Q("", !0)
      ]),
      default: gt(() => [
        k("div", Bw, [
          i.avatar ? (R(), B("img", {
            key: 0,
            src: i.avatar,
            alt: "avatar",
            class: "uk-border-circle",
            "uk-height-match": ""
          }, null, 8, Fw)) : Q("", !0),
          i.username ? (R(), B("p", Nw, X(i.username), 1)) : Q("", !0),
          i.meta ? (R(), B("p", Dw, "(" + X(i.meta) + ")", 1)) : Q("", !0)
        ]),
        z(i.$slots, "default", { dataTest: "slot" })
      ]),
      _: 3
    }));
  }
}), Uw = { key: 0 }, Mw = ["href"], Lw = { key: 1 }, zw = /* @__PURE__ */ st({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(s) {
    const i = s, r = ce(() => typeof i.to == "string" && i.to.startsWith("http"));
    return (a, u) => r.value ? (R(), B("li", Uw, [
      k("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: a.to.toString(),
        target: "_blank"
      }, [
        z(a.$slots, "default", {}, () => [
          pt(X(a.label), 1)
        ])
      ], 8, Mw)
    ])) : (R(), B("li", Lw, [
      Ct(U(rs), {
        to: a.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: gt(() => [
          z(a.$slots, "default", {}, () => [
            pt(X(a.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["to"])
    ]));
  }
}), Hw = { class: "uk-list" }, qw = { class: "uk-text-center" }, Ww = /* @__PURE__ */ st({
  __name: "PageLogin",
  setup(s) {
    return (i, r) => {
      const a = xt("font-awesome-icon"), u = xt("UFCardBoxBig");
      return R(), dt(u, null, {
        default: gt(() => [
          r[5] || (r[5] = k("h3", { class: "uk-card-title" }, "Login", -1)),
          Ct(Xo),
          k("ul", Hw, [
            k("li", null, [
              k("a", {
                onClick: r[0] || (r[0] = (h) => i.$emit("gotoForgotPassword")),
                "data-test": "gotoForgotPassword"
              }, "Forgot your password?")
            ]),
            k("li", null, [
              k("a", {
                onClick: r[1] || (r[1] = (h) => i.$emit("gotoResendVerification")),
                "data-test": "gotoResendVerification"
              }, "Resend verification email")
            ])
          ]),
          r[6] || (r[6] = k("hr", null, null, -1)),
          k("div", qw, [
            r[4] || (r[4] = k("p", null, "You don't have an account yet?", -1)),
            k("button", {
              class: "uk-button uk-button-default",
              onClick: r[2] || (r[2] = (h) => i.$emit("gotoRegistration")),
              "data-test": "gotoRegistration"
            }, [
              Ct(a, { icon: ["fas", "user-plus"] }),
              r[3] || (r[3] = pt(" Register "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), Vw = { class: "uk-text-center" }, Jw = /* @__PURE__ */ st({
  __name: "PageRegister",
  setup(s) {
    return (i, r) => {
      const a = xt("font-awesome-icon"), u = xt("UFCardBoxBig");
      return R(), dt(u, null, {
        default: gt(() => [
          r[3] || (r[3] = k("h3", { class: "uk-card-title" }, "Register", -1)),
          Ct(Hc),
          r[4] || (r[4] = k("hr", null, null, -1)),
          k("div", Vw, [
            r[2] || (r[2] = k("p", null, "Already have an account ?", -1)),
            k("button", {
              class: "uk-button uk-button-default",
              onClick: r[0] || (r[0] = (h) => i.$emit("gotoLogin")),
              "data-test": "gotoLogin"
            }, [
              Ct(a, { icon: ["fas", "right-to-bracket"] }),
              r[1] || (r[1] = pt(" Login "))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
}), Kw = /* @__PURE__ */ st({
  __name: "PageForgotPassword",
  setup(s) {
    return (i, r) => {
      const a = xt("UFCardBoxBig");
      return R(), dt(a, null, {
        default: gt(() => [
          r[0] || (r[0] = k("h3", { class: "uk-card-title" }, "Forgotten Password", -1)),
          r[1] || (r[1] = k("p", null, " Please enter the email address you used to sign up. A link with instructions to reset your password will be emailed to you. ", -1)),
          Ct(qc)
        ]),
        _: 1
      });
    };
  }
}), Gw = { class: "uk-fieldset" }, Xw = { class: "uk-margin" }, Yw = { class: "uk-inline uk-width-1-1" }, Qw = { class: "uk-text-center" }, Zw = ["disabled"], ty = /* @__PURE__ */ st({
  __name: "FormResendVerification",
  setup(s) {
    const i = ve(!1), r = ve();
    let a = "";
    async function u() {
      i.value = !0, r.value = null, await Ub(a).then((h) => {
        r.value = h;
      }).catch((h) => {
        r.value = h;
      }).finally(() => {
        i.value = !1;
      });
    }
    return (h, f) => {
      const g = xt("UFAlert");
      return R(), B("form", {
        onSubmit: f[1] || (f[1] = ri(($) => u(), ["prevent"]))
      }, [
        k("fieldset", Gw, [
          r.value ? (R(), dt(g, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : Q("", !0),
          k("div", Xw, [
            k("div", Yw, [
              f[2] || (f[2] = k("span", {
                class: "uk-form-icon",
                "uk-icon": "icon: mail"
              }, null, -1)),
              jt(k("input", {
                class: "uk-input",
                type: "email",
                placeholder: "Email",
                "aria-label": "Email",
                "data-test": "email",
                "onUpdate:modelValue": f[0] || (f[0] = ($) => qo(a) ? a.value = $ : a = $)
              }, null, 512), [
                [Wt, U(a)]
              ])
            ])
          ]),
          k("div", Qw, [
            k("button", {
              class: "uk-button uk-button-primary",
              disabled: i.value,
              "data-test": "submit"
            }, " Email the verification link for my account ", 8, Zw)
          ])
        ])
      ], 32);
    };
  }
}), ey = /* @__PURE__ */ st({
  __name: "PageResendVerification",
  setup(s) {
    return (i, r) => {
      const a = xt("UFCardBoxBig");
      return R(), dt(a, null, {
        default: gt(() => [
          r[0] || (r[0] = k("h3", { class: "uk-card-title" }, "Resend Verification Email", -1)),
          r[1] || (r[1] = k("p", null, " Please enter the email address you used to sign up, and your verification email will be resent. ", -1)),
          Ct(ty)
        ]),
        _: 1
      });
    };
  }
}), ny = {}, sy = { class: "uf-sidebar-left uk-light uk-visible@m" }, iy = { class: "left-nav-wrap" }, oy = {
  class: "uk-nav uk-nav-default",
  "data-uk-nav": ""
};
function ry(s, i) {
  return R(), B("aside", sy, [
    k("div", iy, [
      k("ul", oy, [
        z(s.$slots, "default")
      ])
    ])
  ]);
}
const ay = /* @__PURE__ */ ai(ny, [["render", ry]]), ly = ["data-uk-icon"], cy = {
  key: 2,
  "uk-nav-parent-icon": "",
  "data-test": "caret"
}, uy = {
  class: "uk-nav-sub",
  "data-test": "slot"
}, hy = /* @__PURE__ */ st({
  __name: "SideBarDropdown",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" },
    hideCaret: { type: Boolean, default: !1 }
  },
  setup(s) {
    return (i, r) => {
      const a = xt("font-awesome-icon");
      return R(), dt(U(rs), ns({ to: i.to }, i.$props, { custom: "" }), {
        default: gt(({ isActive: u }) => [
          k("li", {
            class: he(["uk-parent", { "uk-open": u }])
          }, [
            k("a", rp(ap(i.$attrs)), [
              i.icon ? (R(), B("span", {
                key: 0,
                "data-uk-icon": i.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, ly)) : Q("", !0),
              i.faIcon ? (R(), dt(a, {
                key: 1,
                class: "uk-margin-small-right",
                icon: i.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : Q("", !0),
              z(i.$slots, "label", {}, () => [
                pt(X(i.label), 1)
              ]),
              i.hideCaret ? Q("", !0) : (R(), B("span", cy))
            ], 16),
            k("ul", uy, [
              z(i.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]);
    };
  }
}), dy = { key: 0 }, fy = ["href"], py = ["data-uk-icon"], my = ["href", "onClick"], gy = ["data-uk-icon"], vy = /* @__PURE__ */ st({
  __name: "SideBarItem",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(s) {
    const i = s, r = ce(() => i.to === "" || typeof i.to == "string" && i.to.startsWith("http"));
    return (a, u) => {
      const h = xt("font-awesome-icon");
      return r.value ? (R(), B("li", dy, [
        k("a", {
          href: a.to.toString(),
          target: "_blank"
        }, [
          a.icon ? (R(), B("span", {
            key: 0,
            "data-uk-icon": a.icon,
            class: "uk-margin-small-right",
            "data-test": "icon"
          }, null, 8, py)) : Q("", !0),
          a.faIcon ? (R(), dt(h, {
            key: 1,
            class: "uk-margin-small-right",
            icon: a.faIcon,
            "data-test": "faIcon"
          }, null, 8, ["icon"])) : Q("", !0),
          z(a.$slots, "default", {}, () => [
            pt(X(a.label), 1)
          ])
        ], 8, fy)
      ])) : (R(), dt(U(rs), ns({
        key: 1,
        to: a.to
      }, a.$props, { custom: "" }), {
        default: gt(({ isActive: f, href: g, navigate: $ }) => [
          k("li", {
            class: he({ "uk-active": f })
          }, [
            k("a", ns(a.$attrs, {
              href: g,
              onClick: $
            }), [
              a.icon ? (R(), B("span", {
                key: 0,
                "data-uk-icon": a.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, gy)) : Q("", !0),
              a.faIcon ? (R(), dt(h, {
                key: 1,
                class: "uk-margin-small-right",
                icon: a.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : Q("", !0),
              z(a.$slots, "default", {}, () => [
                pt(X(a.label), 1)
              ])
            ], 16, my)
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]));
    };
  }
}), by = { class: "uk-nav-header" }, wy = /* @__PURE__ */ st({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(s) {
    return (i, r) => (R(), B("li", by, X(i.label), 1));
  }
}), yy = /* @__PURE__ */ st({
  __name: "SprunjeColumn",
  setup(s) {
    const i = os("sprunjer");
    return (r, a) => (R(), B("td", null, [
      z(r.$slots, "default", { sprunjer: U(i) })
    ]));
  }
}), ky = {
  key: 0,
  class: "uk-table-link uk-padding-small"
}, $y = {
  key: 1,
  class: "uk-padding-small"
}, xy = /* @__PURE__ */ st({
  __name: "SprunjeHeader",
  props: {
    sort: {}
  },
  setup(s) {
    const i = os("sprunjer"), { sorts: r, toggleSort: a } = i;
    return (u, h) => {
      const f = xt("font-awesome-icon");
      return u.sort ? (R(), B("th", ky, [
        k("a", {
          class: "uk-link-reset",
          onClick: h[0] || (h[0] = (g) => U(a)(u.sort))
        }, [
          z(u.$slots, "default"),
          U(r)[u.sort] === "asc" ? (R(), dt(f, {
            key: 0,
            icon: ["fas", "sort-up"],
            "fixed-width": "",
            class: "uk-align-right uk-margin-remove"
          })) : U(r)[u.sort] === "desc" ? (R(), dt(f, {
            key: 1,
            icon: ["fas", "sort-down"],
            "fixed-width": "",
            class: "uk-align-right uk-margin-remove"
          })) : (R(), dt(f, {
            key: 2,
            icon: ["fas", "sort"],
            "fixed-width": "",
            class: "uk-align-right uk-margin-remove"
          }))
        ])
      ])) : (R(), B("th", $y, [
        z(u.$slots, "default")
      ]));
    };
  }
}), Sy = {
  class: "uk-child-width-auto",
  "uk-grid": ""
}, _y = { class: "uk-text-left uk-text-meta" }, Ey = { class: "uk-text-center uk-width-expand" }, Oy = ["value"], Ty = { class: "uk-text-right" }, Cy = { "aria-label": "Pagination" }, Py = {
  class: "uk-pagination uk-flex-right",
  "uk-margin": ""
}, Wc = /* @__PURE__ */ st({
  __name: "SprunjePaginator",
  props: {
    rowsPerPageOptions: { default: () => [5, 10, 20, 50] }
  },
  setup(s) {
    const i = os("sprunjer"), { size: r, page: a, totalPages: u, countFiltered: h, first: f, last: g } = i;
    function $(b) {
      a.value = b;
    }
    return (b, v) => {
      const P = xt("font-awesome-icon");
      return R(), B("div", Sy, [
        k("div", _y, [
          k("span", null, "Showing " + X(U(f)) + " - " + X(U(g)) + " of " + X(U(h)), 1)
        ]),
        k("div", Ey, [
          jt(k("select", {
            class: "uk-select uk-form-small uk-form-width-small",
            "aria-label": "Select per page",
            "onUpdate:modelValue": v[0] || (v[0] = (S) => qo(r) ? r.value = S : null)
          }, [
            (R(!0), B(Qe, null, es(b.rowsPerPageOptions, (S) => (R(), B("option", {
              key: S,
              value: S
            }, X(S) + " per page ", 9, Oy))), 128))
          ], 512), [
            [Ho, U(r)]
          ])
        ]),
        k("div", Ty, [
          k("nav", Cy, [
            k("ul", Py, [
              k("li", null, [
                k("a", {
                  onClick: v[1] || (v[1] = (S) => $(0)),
                  class: he(["uk-icon-link", { "uk-disabled": U(a) === 0 }])
                }, [
                  Ct(P, {
                    icon: "angles-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              k("li", null, [
                k("a", {
                  onClick: v[2] || (v[2] = (S) => $(U(a) - 1)),
                  class: he(["uk-icon-link", { "uk-disabled": U(a) === 0 }])
                }, [
                  Ct(P, {
                    icon: "angle-left",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              k("li", null, "Page " + X(U(a) + 1) + " of " + X(U(u) + 1), 1),
              k("li", null, [
                k("a", {
                  onClick: v[3] || (v[3] = (S) => $(U(a) + 1)),
                  class: he(["uk-icon-link", { "uk-disabled": U(a) === U(u) }])
                }, [
                  Ct(P, {
                    icon: "angle-right",
                    "fixed-width": ""
                  })
                ], 2)
              ]),
              k("li", null, [
                k("a", {
                  onClick: v[4] || (v[4] = (S) => $(U(u))),
                  class: he(["uk-icon-link", { "uk-disabled": U(a) === U(u) }])
                }, [
                  Ct(P, {
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
}), Ay = {
  key: 0,
  class: "uk-search uk-search-default"
}, Ry = ["placeholder"], Iy = /* @__PURE__ */ st({
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
  setup(s) {
    const i = s, r = os("sprunjer"), { filters: a } = r, u = ce(() => i.label ? "Search " + i.label + "..." : "Search " + i.column + "...");
    return (h, f) => s.column ? (R(), B("div", Ay, [
      jt(k("input", {
        class: "uk-search-input uk-form-small",
        type: "search",
        placeholder: u.value,
        "aria-label": "Search",
        "onUpdate:modelValue": f[0] || (f[0] = (g) => U(a)[s.column] = g)
      }, null, 8, Ry), [
        [Wt, U(a)[s.column]]
      ]),
      f[1] || (f[1] = k("span", {
        class: "uk-search-icon-flip",
        "uk-search-icon": ""
      }, null, -1))
    ])) : Q("", !0);
  }
}), By = ["onUpdate:modelValue"], Fy = ["value"], Ny = ["placeholder", "onUpdate:modelValue"], Dy = /* @__PURE__ */ st({
  __name: "SprunjeFilters",
  setup(s) {
    const i = os("sprunjer"), { data: r, filters: a } = i, u = ce(() => r.value.filterable), h = ce(() => r.value.listable), f = () => {
      a.value = {};
    }, g = (b) => h.value[b] !== void 0, $ = (b) => h.value[b];
    return (b, v) => {
      const P = xt("font-awesome-icon");
      return R(), B(Qe, null, [
        v[2] || (v[2] = k("h3", { class: "uk-heading-divider" }, "Filters", -1)),
        (R(!0), B(Qe, null, es(u.value, (S, A) => (R(), B("dl", {
          class: "uk-description-list",
          key: A
        }, [
          k("dt", null, X(S), 1),
          k("dd", null, [
            g(S) ? jt((R(), B("select", {
              key: 0,
              "onUpdate:modelValue": (T) => U(a)[S] = T,
              class: "uk-select"
            }, [
              v[0] || (v[0] = k("option", { value: "" }, null, -1)),
              (R(!0), B(Qe, null, es($(S), (T) => (R(), B("option", {
                key: T.value,
                value: T.value
              }, X(T.text), 9, Fy))), 128))
            ], 8, By)), [
              [Ho, U(a)[S]]
            ]) : jt((R(), B("input", {
              key: 1,
              class: "uk-input",
              type: "text",
              placeholder: S,
              "onUpdate:modelValue": (T) => U(a)[S] = T
            }, null, 8, Ny)), [
              [Wt, U(a)[S]]
            ])
          ])
        ]))), 128)),
        k("button", {
          class: "uk-button uk-button-default uk-button-small",
          onClick: f
        }, [
          Ct(P, {
            icon: "xmark",
            "fixed-width": ""
          }),
          v[1] || (v[1] = pt(" Clear filters "))
        ])
      ], 64);
    };
  }
}), jy = {
  "uk-grid": "",
  class: "uk-child-width-1-2"
}, Uy = { class: "uk-text-left" }, My = { class: "uk-text-right" }, Ly = {
  "uk-grid": "",
  class: "uk-grid-small uk-grid-divider"
}, zy = { class: "uk-width-expand" }, Hy = { class: "uk-table uk-table-striped uk-table-small" }, qy = {
  key: 0,
  class: "uk-width-1-4"
}, Wy = /* @__PURE__ */ st({
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
  setup(s) {
    const i = ve(!1), r = cp(() => s.dataUrl, s.defaultSorts, s.defaultFilters, s.defaultSize, s.defaultPage), { rows: a } = r;
    return lp("sprunjer", r), (u, h) => {
      const f = xt("font-awesome-icon");
      return R(), B(Qe, null, [
        k("div", jy, [
          k("div", Uy, [
            z(u.$slots, "actions")
          ]),
          k("div", My, [
            z(u.$slots, "filters"),
            u.searchColumn ? (R(), dt(Iy, {
              key: 0,
              column: u.searchColumn
            }, null, 8, ["column"])) : Q("", !0),
            u.hideFilters ? Q("", !0) : (R(), B("a", {
              key: 1,
              class: "uk-button uk-button-default uk-button-small",
              onClick: h[0] || (h[0] = (g) => i.value = !i.value)
            }, [
              Ct(f, { icon: "filter" })
            ]))
          ])
        ]),
        k("div", Ly, [
          k("div", zy, [
            k("table", Hy, [
              k("thead", null, [
                k("tr", null, [
                  z(u.$slots, "header")
                ])
              ]),
              k("tbody", null, [
                (R(!0), B(Qe, null, es(U(a), (g) => (R(), B("tr", {
                  key: g.id
                }, [
                  z(u.$slots, "body", { item: g })
                ]))), 128))
              ])
            ])
          ]),
          i.value === !0 ? (R(), B("div", qy, [
            Ct(Dy),
            z(u.$slots, "filterPanel")
          ])) : Q("", !0)
        ]),
        u.hidePagination ? Q("", !0) : z(u.$slots, "paginator", { key: 0 }, () => [
          Ct(Wc)
        ])
      ], 64);
    };
  }
}), Zy = {
  install: (s) => {
    s.component("UFAlert", fp).component("UFLabel", pp).component("UFModal", $p).component("UFModalAlert", _p).component("UFModalConfirmation", Tp).component("UFModalPrompt", Rp).component("UFAppLink", Wo).component("UFInfoBox", zp).component("UFCardBox", Kp).component("UFCardBoxBig", Yp).component("UFMainContent", nm).component("UFHeaderPage", rm).component("UFFooterContent", hm).component("UFFormLogin", Xo).component("UFFormRegister", Hc).component("UFFormForgotPassword", qc).component("UFNavBar", bw).component("UFNavBarDropdown", nr).component("UFNavBarDropdownSeparator", _w).component("UFNavBarItem", Cw).component("UFNavBarLogin", Aw).component("UFNavBarUserCard", jw).component("UFNavBarUserCardButton", zw).component("UFPageLogin", Ww).component("UFPageRegister", Jw).component("UFPageForgotPassword", Kw).component("UFPageResendVerification", ey).component("UFSideBar", ay).component("UFSideBarDropdown", hy).component("UFSideBarItem", vy).component("UFSideBarLabel", wy).component("UFSprunjeColumn", yy).component("UFSprunjeHeader", xy).component("UFSprunjePaginator", Wc).component("UFSprunjeTable", Wy);
  }
};
export {
  ey as A,
  hy as B,
  vy as C,
  wy as D,
  yy as E,
  hm as F,
  xy as G,
  Wc as H,
  Wy as I,
  nm as M,
  _w as N,
  Zy as P,
  ay as S,
  Vl as U,
  ai as _,
  fp as a,
  pp as b,
  dm as c,
  $p as d,
  _p as e,
  Tp as f,
  fm as g,
  Rp as h,
  Wo as i,
  zp as j,
  Kp as k,
  Yp as l,
  rm as m,
  mt as n,
  Xo as o,
  Hc as p,
  qc as q,
  bw as r,
  nr as s,
  Cw as t,
  Aw as u,
  jw as v,
  zw as w,
  Ww as x,
  Jw as y,
  Kw as z
};
