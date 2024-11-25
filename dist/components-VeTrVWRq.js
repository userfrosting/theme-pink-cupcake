import { defineComponent as ot, ref as ve, watch as Zf, computed as ce, resolveComponent as xt, openBlock as R, createElementBlock as B, normalizeClass as he, createBlock as dt, createCommentVNode as Q, createTextVNode as pt, toDisplayString as X, createVNode as Ct, renderSlot as z, createElementVNode as k, createSlots as si, withCtx as gt, mergeModels as tp, useModel as ep, useTemplateRef as np, withDirectives as jt, vModelText as Vt, unref as U, withModifiers as ii, Fragment as Qe, renderList as es, vModelSelect as Ho, isRef as qo, mergeProps as ns, normalizeProps as sp, guardReactiveProps as ip, inject as oi, provide as op } from "vue";
import { RouterLink as os } from "vue-router";
import { defineStore as Hl } from "pinia";
import { useSprunjer as rp } from "@userfrosting/sprinkle-core/sprunjer";
var mt = /* @__PURE__ */ ((s) => (s.Primary = "Primary", s.Secondary = "Secondary", s.Success = "Success", s.Warning = "Warning", s.Danger = "Danger", s.Info = "Info", s.Muted = "Muted", s.Default = "Default", s))(mt || {});
const ap = {
  key: 0,
  "data-test": "title"
}, lp = {
  key: 1,
  "data-test": "description"
}, cp = ["innerHTML"], up = /* @__PURE__ */ ot({
  __name: "UFAlert",
  props: {
    alert: {}
  },
  emits: ["close"],
  setup(s, { emit: i }) {
    const r = i, a = ve(!0);
    Zf(
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
        $.alert.title ? (R(), B("h3", ap, [
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
        $.$slots.default ? (R(), B("p", lp, [
          z($.$slots, "default")
        ])) : $.alert.description ? (R(), B("p", {
          key: 2,
          innerHTML: $.alert.description,
          "data-test": "description"
        }, null, 8, cp)) : Q("", !0)
      ], 2)) : Q("", !0);
    };
  }
}), hp = /* @__PURE__ */ ot({
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
}), dp = ["esc-close", "bg-close"], fp = { class: "uk-modal-dialog" }, pp = {
  key: 0,
  class: "uk-modal-close-default",
  type: "button",
  "uk-close": ""
}, mp = {
  key: 1,
  class: "uk-modal-header"
}, gp = { class: "uk-modal-title" }, vp = { class: "uk-modal-body" }, bp = {
  key: 2,
  class: "uk-modal-footer uk-text-right"
}, wp = /* @__PURE__ */ ot({
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
      k("div", fp, [
        s.closable ? (R(), B("button", pp)) : Q("", !0),
        i.$slots.header ? (R(), B("div", mp, [
          k("h2", gp, [
            z(i.$slots, "header")
          ])
        ])) : Q("", !0),
        k("div", vp, [
          z(i.$slots, "default")
        ]),
        i.$slots.footer ? (R(), B("div", bp, [
          z(i.$slots, "footer")
        ])) : Q("", !0)
      ])
    ], 8, dp));
  }
}), yp = { class: "uk-text-center" }, kp = {
  class: "uk-button uk-button-primary uk-modal-close",
  type: "button",
  autofocus: ""
}, $p = /* @__PURE__ */ ot({
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
      return R(), dt(a, null, si({
        footer: gt(() => [
          z(i.$slots, "footer", {}, () => [
            k("button", kp, X(s.btnLabel), 1)
          ])
        ]),
        default: gt(() => [
          z(i.$slots, "default", {}, () => [
            k("div", yp, X(s.prompt), 1)
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
}), xp = { class: "uk-text-center" }, Sp = { key: 0 }, _p = /* @__PURE__ */ ot({
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
      }, si({
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
            k("div", xp, [
              r.icon ? (R(), B("p", Sp, [
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
}), Ep = {
  class: "uk-form-label",
  for: "prompt-text"
}, Op = { class: "uk-form-controls" }, Tp = ["placeholder"], Cp = /* @__PURE__ */ ot({
  __name: "UFModalPrompt",
  props: /* @__PURE__ */ tp({
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
    const i = ep(s, "modelValue"), r = np("ok-btn");
    function a() {
      r.value && r.value.click();
    }
    return (u, h) => {
      const f = xt("UFModal");
      return R(), dt(f, null, si({
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
              k("label", Ep, X(s.prompt), 1),
              k("div", Op, [
                jt(k("input", {
                  type: "text",
                  class: "uk-input",
                  id: "prompt-text",
                  placeholder: s.placeholder,
                  "onUpdate:modelValue": h[0] || (h[0] = (g) => i.value = g),
                  autofocus: "",
                  tabindex: "1"
                }, null, 8, Tp), [
                  [Vt, i.value]
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
}), Pp = ["href"], Ap = { key: 1 }, Wo = /* @__PURE__ */ ot({
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
    ], 8, Pp)) : u.value ? (R(), B("div", Ap, [
      z(h.$slots, "default", {}, () => [
        pt(X(h.label), 1)
      ])
    ])) : (R(), dt(U(os), {
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
}), Rp = { class: "uk-card uk-card-default uk-card-body uk-card-small" }, Ip = {
  class: "uk-grid-small uk-flex-middle",
  "uk-grid": ""
}, Bp = {
  key: 0,
  class: "uk-width-auto"
}, Fp = ["data-uk-icon"], Np = { class: "uk-width-expand" }, Dp = {
  key: 0,
  class: "uk-margin-remove"
}, jp = {
  key: 1,
  class: "uk-text-meta uk-text-uppercase"
}, Up = /* @__PURE__ */ ot({
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
          k("div", Rp, [
            k("div", Ip, [
              i.icon || i.faIcon ? (R(), B("div", Bp, [
                i.icon ? (R(), B("span", {
                  key: 0,
                  "data-uk-icon": "icon: " + i.icon + "; ratio: 2",
                  class: "uk-margin-small-right"
                }, null, 8, Fp)) : Q("", !0),
                i.faIcon ? (R(), dt(a, {
                  key: 1,
                  icon: i.faIcon,
                  size: "2xl",
                  "fixed-width": ""
                }, null, 8, ["icon"])) : Q("", !0)
              ])) : Q("", !0),
              k("div", Np, [
                i.value !== null ? (R(), B("h4", Dp, X(i.value), 1)) : Q("", !0),
                i.label !== null ? (R(), B("span", jp, X(i.label), 1)) : Q("", !0)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
}), Mp = { class: "uk-card uk-card-default uk-card-small" }, Lp = {
  key: 0,
  class: "uk-card-header"
}, zp = { "data-test": "title" }, Hp = {
  class: "uk-card-body",
  "data-test": "slot"
}, qp = {
  key: 1,
  class: "uk-card-footer"
}, Wp = /* @__PURE__ */ ot({
  __name: "CardBox",
  props: {
    title: String
  },
  setup(s) {
    return (i, r) => (R(), B("div", Mp, [
      s.title || i.$slots.header ? (R(), B("div", Lp, [
        k("h4", zp, [
          z(i.$slots, "header", {}, () => [
            pt(X(s.title), 1)
          ])
        ])
      ])) : Q("", !0),
      k("div", Hp, [
        z(i.$slots, "default")
      ]),
      i.$slots.footer ? (R(), B("div", qp, [
        z(i.$slots, "footer")
      ])) : Q("", !0)
    ]));
  }
}), Vp = { class: "uk-flex uk-flex-center uk-flex-middle" }, Jp = { class: "uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl" }, Kp = /* @__PURE__ */ ot({
  __name: "CardBoxBig",
  props: {
    title: String
  },
  setup(s) {
    return (i, r) => {
      const a = xt("UFCardBox");
      return R(), B("div", Vp, [
        k("div", Jp, [
          Ct(a, null, si({
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
}), rs = (s, i) => {
  const r = s.__vccOpts || s;
  for (const [a, u] of i)
    r[a] = u;
  return r;
}, Gp = {}, Xp = {
  class: "uf-main uk-section uk-section-default uk-section-muted",
  "uk-height-viewport": "expand: true"
}, Yp = {
  class: "uk-container",
  "data-test": "slot"
};
function Qp(s, i) {
  return R(), B("div", Xp, [
    k("div", Yp, [
      z(s.$slots, "default")
    ])
  ]);
}
const Zp = /* @__PURE__ */ rs(Gp, [["render", Qp]]), tm = { class: "uf-page-header" }, em = { class: "uk-margin-remove" }, nm = {
  key: 0,
  class: "uk-text-meta uk-margin-remove"
}, sm = /* @__PURE__ */ ot({
  __name: "HeaderPage",
  props: {
    title: {},
    caption: { default: "" }
  },
  setup(s) {
    return (i, r) => (R(), B("div", tm, [
      k("h3", em, X(i.title), 1),
      i.caption ? (R(), B("p", nm, X(i.caption), 1)) : Q("", !0)
    ]));
  }
}), im = {}, om = { class: "uf-main uk-section uk-section-small uk-section-muted uk-text-center" }, rm = {
  class: "uk-text-small uk-text-center",
  "data-test": "slot"
};
function am(s, i) {
  return R(), B("footer", om, [
    i[0] || (i[0] = k("hr", null, null, -1)),
    k("p", rm, [
      z(s.$slots, "default")
    ])
  ]);
}
const lm = /* @__PURE__ */ rs(im, [["render", am]]);
var cm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function um(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var ql = { exports: {} };
/*! UIkit 3.21.16 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */
(function(s, i) {
  (function(r, a) {
    s.exports = a();
  })(cm, function() {
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
    const { isArray: C, from: O } = Array, { assign: W } = Object;
    function L(t) {
      return typeof t == "function";
    }
    function M(t) {
      return t !== null && typeof t == "object";
    }
    function bt(t) {
      return a.call(t) === "[object Object]";
    }
    function Ut(t) {
      return M(t) && t === t.window;
    }
    function wt(t) {
      return Yt(t) === 9;
    }
    function At(t) {
      return Yt(t) >= 1;
    }
    function zt(t) {
      return Yt(t) === 1;
    }
    function Yt(t) {
      return !Ut(t) && M(t) && t.nodeType;
    }
    function oe(t) {
      return typeof t == "boolean";
    }
    function yt(t) {
      return typeof t == "string";
    }
    function _n(t) {
      return typeof t == "number";
    }
    function pe(t) {
      return _n(t) || yt(t) && !isNaN(t - parseFloat(t));
    }
    function hs(t) {
      return !(C(t) ? t.length : M(t) && Object.keys(t).length);
    }
    function Ft(t) {
      return t === void 0;
    }
    function gi(t) {
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
      return t && et(t)[0];
    }
    function et(t) {
      return At(t) ? [t] : Array.from(t || []).filter(At);
    }
    function Ie(t) {
      if (Ut(t))
        return t;
      t = _t(t);
      const e = wt(t) ? t : t == null ? void 0 : t.ownerDocument;
      return (e == null ? void 0 : e.defaultView) || window;
    }
    function En(t, e) {
      return t === e || M(t) && M(e) && Object.keys(t).length === Object.keys(e).length && sn(t, (n, o) => n === e[o]);
    }
    function vi(t, e, n) {
      return t.replace(new RegExp(`${e}|${n}`, "g"), (o) => o === e ? n : e);
    }
    function Be(t) {
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
    function Fe(t, e) {
      return t.reduce(
        (n, o) => n + Y(L(e) ? e(o) : o[e]),
        0
      );
    }
    function ir(t, e) {
      const n = /* @__PURE__ */ new Set();
      return t.filter(({ [e]: o }) => n.has(o) ? !1 : n.add(o));
    }
    function bi(t, e) {
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
    function wi(t, e, n) {
      const o = e === "width" ? "height" : "width";
      return {
        [o]: t[e] ? Math.round(n * t[o] / t[e]) : t[o],
        [e]: n
      };
    }
    function or(t, e) {
      t = { ...t };
      for (const n in t)
        t = t[n] > e[n] ? wi(t, n, e[n]) : t;
      return t;
    }
    function Wc(t, e) {
      t = or(t, e);
      for (const n in t)
        t = t[n] < e[n] ? wi(t, n, e[n]) : t;
      return t;
    }
    const yi = { ratio: wi, contain: or, cover: Wc };
    function Qt(t, e, n = 0, o = !1) {
      e = et(e);
      const { length: l } = e;
      return l ? (t = pe(t) ? be(t) : t === "next" ? n + 1 : t === "previous" ? n - 1 : t === "last" ? l - 1 : e.indexOf(_t(t)), o ? Mt(t, 0, l - 1) : (t %= l, t < 0 ? t + l : t)) : -1;
    }
    function re(t) {
      const e = /* @__PURE__ */ Object.create(null);
      return (n, ...o) => e[n] || (e[n] = t(n, ...o));
    }
    function Z(t, ...e) {
      for (const n of et(t)) {
        const o = Ne(e).filter((l) => !q(n, l));
        o.length && n.classList.add(...o);
      }
    }
    function rt(t, ...e) {
      for (const n of et(t)) {
        const o = Ne(e).filter((l) => q(n, l));
        o.length && n.classList.remove(...o);
      }
    }
    function ps(t, e, n) {
      n = Ne(n), e = Ne(e).filter((o) => !S(n, o)), rt(t, e), Z(t, n);
    }
    function q(t, e) {
      return [e] = Ne(e), et(t).some((n) => n.classList.contains(e));
    }
    function Et(t, e, n) {
      const o = Ne(e);
      Ft(n) || (n = !!n);
      for (const l of et(t))
        for (const c of o)
          l.classList.toggle(c, n);
    }
    function Ne(t) {
      return t ? C(t) ? t.map(Ne).flat() : String(t).split(" ").filter(Boolean) : [];
    }
    function N(t, e, n) {
      var o;
      if (M(e)) {
        for (const l in e)
          N(t, l, e[l]);
        return;
      }
      if (Ft(n))
        return (o = _t(t)) == null ? void 0 : o.getAttribute(e);
      for (const l of et(t))
        L(n) && (n = n.call(l, N(l, e))), n === null ? On(l, e) : l.setAttribute(e, n);
    }
    function $e(t, e) {
      return et(t).some((n) => n.hasAttribute(e));
    }
    function On(t, e) {
      et(t).forEach((n) => n.removeAttribute(e));
    }
    function Nt(t, e) {
      for (const n of [e, `data-${e}`])
        if ($e(t, n))
          return N(t, n);
    }
    const De = typeof window < "u", Rt = De && document.dir === "rtl", on = De && "ontouchstart" in window, rn = De && window.PointerEvent, ae = rn ? "pointerdown" : on ? "touchstart" : "mousedown", ms = rn ? "pointermove" : on ? "touchmove" : "mousemove", xe = rn ? "pointerup" : on ? "touchend" : "mouseup", je = rn ? "pointerenter" : on ? "" : "mouseenter", an = rn ? "pointerleave" : on ? "" : "mouseleave", gs = rn ? "pointercancel" : "touchcancel", Vc = {
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
    function ki(t) {
      return et(t).some((e) => Vc[e.tagName.toLowerCase()]);
    }
    const Jc = De && Element.prototype.checkVisibility || function() {
      return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
    };
    function Ot(t) {
      return et(t).some((e) => Jc.call(e));
    }
    const Tn = "input,select,textarea,button";
    function vs(t) {
      return et(t).some((e) => st(e, Tn));
    }
    const Cn = `${Tn},a[href],[tabindex]`;
    function bs(t) {
      return st(t, Cn);
    }
    function lt(t) {
      var e;
      return (e = _t(t)) == null ? void 0 : e.parentElement;
    }
    function Pn(t, e) {
      return et(t).filter((n) => st(n, e));
    }
    function st(t, e) {
      return et(t).some((n) => n.matches(e));
    }
    function An(t, e) {
      const n = [];
      for (; t = lt(t); )
        (!e || st(t, e)) && n.push(t);
      return n;
    }
    function ut(t, e) {
      t = _t(t);
      const n = t ? O(t.children) : [];
      return e ? Pn(n, e) : n;
    }
    function we(t, e) {
      return e ? et(t).indexOf(_t(e)) : ut(lt(t)).indexOf(t);
    }
    function ln(t) {
      return t = _t(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
    }
    function $i(t) {
      if (ln(t)) {
        const { hash: e, ownerDocument: n } = _t(t), o = decodeURIComponent(e).slice(1);
        return o ? n.getElementById(o) || n.getElementsByName(o)[0] : n.documentElement;
      }
    }
    function Lt(t, e) {
      return xi(t, rr(t, e));
    }
    function Rn(t, e) {
      return In(t, rr(t, e));
    }
    function xi(t, e) {
      return _t(cr(t, _t(e), "querySelector"));
    }
    function In(t, e) {
      return et(cr(t, _t(e), "querySelectorAll"));
    }
    function rr(t, e = document) {
      return wt(e) || ar(t).isContextSelector ? e : e.ownerDocument;
    }
    const Kc = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, Gc = /(\([^)]*\)|[^,])+/g, ar = re((t) => {
      let e = !1;
      if (!t || !yt(t))
        return {};
      const n = [];
      for (let o of t.match(Gc))
        o = o.trim().replace(Kc, "$1 *"), e || (e = ["!", "+", "~", "-", ">"].includes(o[0])), n.push(o);
      return {
        selector: n.join(","),
        selectors: n,
        isContextSelector: e
      };
    }), Xc = /(\([^)]*\)|\S)*/, lr = re((t) => {
      t = t.slice(1).trim();
      const [e] = t.match(Xc);
      return [e, t.slice(e.length + 1)];
    });
    function cr(t, e = document, n) {
      const o = ar(t);
      if (!o.isContextSelector)
        return o.selector ? Si(e, n, o.selector) : t;
      t = "";
      const l = o.selectors.length === 1;
      for (let c of o.selectors) {
        let d, p = e;
        if (c[0] === "!" && ([d, c] = lr(c), p = e.parentElement.closest(d), !c && l) || p && c[0] === "-" && ([d, c] = lr(c), p = p.previousElementSibling, p = st(p, d) ? p : null, !c && l))
          return p;
        if (p) {
          if (l)
            return c[0] === "~" || c[0] === "+" ? (c = `:scope > :nth-child(${we(p) + 1}) ${c}`, p = p.parentElement) : c[0] === ">" && (c = `:scope ${c}`), Si(p, n, c);
          t += `${t ? "," : ""}${Yc(p)} ${c}`;
        }
      }
      return wt(e) || (e = e.ownerDocument), Si(e, n, t);
    }
    function Si(t, e, n) {
      try {
        return t[e](n);
      } catch {
        return null;
      }
    }
    function Yc(t) {
      const e = [];
      for (; t.parentNode; ) {
        const n = N(t, "id");
        if (n) {
          e.unshift(`#${_i(n)}`);
          break;
        } else {
          let { tagName: o } = t;
          o !== "HTML" && (o += `:nth-child(${we(t) + 1})`), e.unshift(o), t = t.parentNode;
        }
      }
      return e.join(" > ");
    }
    function _i(t) {
      return yt(t) ? CSS.escape(t) : "";
    }
    function V(...t) {
      let [e, n, o, l, c = !1] = Ei(t);
      l.length > 1 && (l = Zc(l)), c != null && c.self && (l = tu(l)), o && (l = Qc(o, l));
      for (const d of n)
        for (const p of e)
          p.addEventListener(d, l, c);
      return () => Se(e, n, l, c);
    }
    function Se(...t) {
      let [e, n, , o, l = !1] = Ei(t);
      for (const c of n)
        for (const d of e)
          d.removeEventListener(c, o, l);
    }
    function kt(...t) {
      const [e, n, o, l, c = !1, d] = Ei(t), p = V(
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
      return Oi(t).every(
        (o) => o.dispatchEvent(cn(e, !0, !0, n))
      );
    }
    function cn(t, e = !0, n = !1, o) {
      return yt(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: n, detail: o })), t;
    }
    function Ei(t) {
      return t[0] = Oi(t[0]), yt(t[1]) && (t[1] = t[1].split(" ")), L(t[2]) && t.splice(2, 0, !1), t;
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
    function ur(t) {
      return t && "addEventListener" in t;
    }
    function eu(t) {
      return ur(t) ? t : _t(t);
    }
    function Oi(t) {
      return C(t) ? t.map(eu).filter(Boolean) : yt(t) ? In(t) : ur(t) ? [t] : et(t);
    }
    function ue(t) {
      return t.pointerType === "touch" || !!t.touches;
    }
    function ye(t) {
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
        if (yt(e)) {
          if (e = ws(e), Ft(n))
            return getComputedStyle(c).getPropertyValue(e);
          c.style.setProperty(
            e,
            pe(n) && !nu[e] ? `${n}px` : n || _n(n) ? n : "",
            o
          );
        } else if (C(e)) {
          const d = {};
          for (const p of e)
            d[p] = w(c, p);
          return d;
        } else if (M(e))
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
    }), Ti = "uk-transition", Ci = "transitionend", Pi = "transitioncanceled";
    function su(t, e, n = 400, o = "linear") {
      return n = Math.round(n), Promise.all(
        et(t).map(
          (l) => new Promise((c, d) => {
            for (const m in e)
              w(l, m);
            const p = setTimeout(() => j(l, Ci), n);
            kt(
              l,
              [Ci, Pi],
              ({ type: m }) => {
                clearTimeout(p), rt(l, Ti), w(l, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
                }), m === Pi ? d() : c(l);
              },
              { self: !0 }
            ), Z(l, Ti), w(l, {
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
      start: su,
      async stop(t) {
        j(t, Ci), await Promise.resolve();
      },
      async cancel(t) {
        j(t, Pi), await Promise.resolve();
      },
      inProgress(t) {
        return q(t, Ti);
      }
    }, Bn = "uk-animation", hr = "animationend", ys = "animationcanceled";
    function dr(t, e, n = 200, o, l) {
      return Promise.all(
        et(t).map(
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
    function iu(t) {
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
    const ou = xs("prepend"), Tt = xs("append"), ks = xs("before"), $s = xs("after");
    function xs(t) {
      return function(e, n) {
        var o;
        const l = et(yt(n) ? Oe(n) : n);
        return (o = J(e)) == null || o[t](...l), pr(l);
      };
    }
    function Zt(t) {
      et(t).forEach((e) => e.remove());
    }
    function Ss(t, e) {
      for (e = _t(ks(t, e)); e.firstElementChild; )
        e = e.firstElementChild;
      return Tt(e, t), e;
    }
    function Ai(t, e) {
      return et(
        et(t).map(
          (n) => n.hasChildNodes() ? Ss(O(n.childNodes), e) : Tt(n, e)
        )
      );
    }
    function Fn(t) {
      et(t).map(lt).filter((e, n, o) => o.indexOf(e) === n).forEach((e) => e.replaceWith(...e.childNodes));
    }
    const ru = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function Oe(t) {
      const e = ru.exec(t);
      if (e)
        return document.createElement(e[1]);
      const n = document.createElement("template");
      return n.innerHTML = t.trim(), pr(n.content.childNodes);
    }
    function pr(t) {
      return t.length > 1 ? t : t[0];
    }
    function Te(t, e) {
      if (zt(t))
        for (e(t), t = t.firstElementChild; t; )
          Te(t, e), t = t.nextElementSibling;
    }
    function J(t, e) {
      return mr(t) ? _t(Oe(t)) : xi(t, e);
    }
    function ft(t, e) {
      return mr(t) ? et(Oe(t)) : In(t, e);
    }
    function mr(t) {
      return yt(t) && v(t.trim(), "<");
    }
    const Ue = {
      width: ["left", "right"],
      height: ["top", "bottom"]
    };
    function D(t) {
      const e = zt(t) ? _t(t).getBoundingClientRect() : { height: Ht(t), width: _s(t), top: 0, left: 0 };
      return {
        height: e.height,
        width: e.width,
        top: e.top,
        left: e.left,
        bottom: e.top + e.height,
        right: e.left + e.width
      };
    }
    function nt(t, e) {
      e && w(t, { left: 0, top: 0 });
      const n = D(t);
      if (t) {
        const { scrollY: o, scrollX: l } = Ie(t), c = { height: o, width: l };
        for (const d in Ue)
          for (const p of Ue[d])
            n[p] += c[d];
      }
      if (!e)
        return n;
      for (const o of ["left", "top"])
        w(t, o, e[o] - n[o]);
    }
    function Ri(t) {
      let { top: e, left: n } = nt(t);
      const {
        ownerDocument: { body: o, documentElement: l },
        offsetParent: c
      } = _t(t);
      let d = c || l;
      for (; d && (d === o || d === l) && w(d, "position") === "static"; )
        d = d.parentNode;
      if (zt(d)) {
        const p = nt(d);
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
          const n = Ie(t);
          return e[0] += n.scrollY, e[1] += n.scrollX, e;
        }
      return e;
    }
    const Ht = gr("height"), _s = gr("width");
    function gr(t) {
      const e = b(t);
      return (n, o) => {
        if (Ft(o)) {
          if (Ut(n))
            return n[`inner${e}`];
          if (wt(n)) {
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
      return w(t, "boxSizing") === n ? Fe(
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
      return yt(t) ? Fe(lu(t), (l) => {
        const c = uu(l);
        return c ? hu(
          c === "vh" ? du() : c === "vw" ? _s(Ie(n)) : o ? n[`offset${b(e)}`] : D(n)[e],
          l
        ) : l;
      }) : Y(t);
    }
    const au = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, lu = re((t) => t.toString().replace(/\s/g, "").match(au) || []), cu = /(?:v[hw]|%)$/, uu = re((t) => (t.match(cu) || [])[0]);
    function hu(t, e) {
      return t * Y(e) / 100;
    }
    let Dn, hn;
    function du() {
      return Dn || (hn || (hn = J("<div>"), w(hn, {
        height: "100vh",
        position: "fixed"
      }), V(window, "resize", () => Dn = null)), Tt(document.body, hn), Dn = hn.clientHeight, Zt(hn), Dn);
    }
    const Ce = { read: fu, write: pu, clear: mu, flush: vr }, Os = [], Ts = [];
    function fu(t) {
      return Os.push(t), Bi(), t;
    }
    function pu(t) {
      return Ts.push(t), Bi(), t;
    }
    function mu(t) {
      wr(Os, t), wr(Ts, t);
    }
    let Ii = !1;
    function vr() {
      br(Os), br(Ts.splice(0)), Ii = !1, (Os.length || Ts.length) && Bi();
    }
    function Bi() {
      Ii || (Ii = !0, queueMicrotask(vr));
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
        const n = D(e), { left: o, right: l, top: c, bottom: d } = n, [p] = this.positions, m = Be(this.positions), y = [p, m];
        return fs(m, n) ? !1 : [
          [
            { x: o, y: c },
            { x: l, y: d }
          ],
          [
            { x: o, y: d },
            { x: l, y: c }
          ]
        ].some((T) => {
          const I = gu(y, T);
          return I && fs(I, n);
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
    function kr(t, e, n = {}, { intersecting: o = !0 } = {}) {
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
    const vu = De && window.ResizeObserver;
    function jn(t, e, n = { box: "border-box" }) {
      if (vu)
        return $r(ResizeObserver, t, e, n);
      const o = [V(window, "load resize", e), V(document, "loadedmetadata load", e, !0)];
      return { disconnect: () => o.map((l) => l()) };
    }
    function Fi(t) {
      return { disconnect: V([window, window.visualViewport], "resize", t) };
    }
    function Ni(t, e, n) {
      return $r(MutationObserver, t, e, n);
    }
    function $r(t, e, n, o) {
      const l = new t(n);
      for (const c of et(e))
        l.observe(c, o);
      return l;
    }
    function Di(t) {
      Ui(t) && Mi(t, { func: "playVideo", method: "play" }), ji(t) && t.play().catch(at);
    }
    function Cs(t) {
      Ui(t) && Mi(t, { func: "pauseVideo", method: "pause" }), ji(t) && t.pause();
    }
    function xr(t) {
      Ui(t) && Mi(t, { func: "mute", method: "setVolume", value: 0 }), ji(t) && (t.muted = !0);
    }
    function ji(t) {
      return $t(t, "video");
    }
    function Ui(t) {
      return $t(t, "iframe") && (Sr(t) || _r(t));
    }
    function Sr(t) {
      return !!t.src.match(
        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
      );
    }
    function _r(t) {
      return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function Mi(t, e) {
      await wu(t), Er(t, e);
    }
    function Er(t, e) {
      t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
    }
    const Li = "_ukPlayer";
    let bu = 0;
    function wu(t) {
      if (t[Li])
        return t[Li];
      const e = Sr(t), n = _r(t), o = ++bu;
      let l;
      return t[Li] = new Promise((c) => {
        e && kt(t, "load", () => {
          const d = () => Er(t, { event: "listening", id: o });
          l = setInterval(d, 100), d();
        }), kt(window, "message", c, !1, ({ data: d }) => {
          try {
            return d = JSON.parse(d), e && (d == null ? void 0 : d.id) === o && d.event === "onReady" || n && Number(d == null ? void 0 : d.player_id) === o;
          } catch {
          }
        }), t.src = `${t.src}${S(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${o}`}`;
      }).then(() => clearInterval(l));
    }
    function yu(t, e = 0, n = 0) {
      return Ot(t) ? ds(
        ...Le(t).map((o) => {
          const { top: l, left: c, bottom: d, right: p } = te(o);
          return {
            top: l - e,
            left: c - n,
            bottom: d + e,
            right: p + n
          };
        }).concat(nt(t))
      ) : !1;
    }
    function Or(t, { offset: e = 0 } = {}) {
      const n = Ot(t) ? Me(t, !1, ["hidden"]) : [];
      return n.reduce(
        (d, p, m) => {
          const { scrollTop: y, scrollHeight: x, offsetHeight: T } = p, I = te(p), F = x - I.height, { height: H, top: tt } = n[m - 1] ? te(n[m - 1]) : nt(t);
          let it = Math.ceil(tt - I.top - e + y);
          return e > 0 && T < H + e ? it += e : e = 0, it > F ? (e -= it - F, it = F) : it < 0 && (e -= it, it = 0), () => o(p, it - y, t, F).then(d);
        },
        () => Promise.resolve()
      )();
      function o(d, p, m, y) {
        return new Promise((x) => {
          const T = d.scrollTop, I = l(Math.abs(p)), F = Date.now(), H = qi(d) === d, tt = nt(m).top + (H ? 0 : T);
          let it = 0, me = 15;
          (function wn() {
            const yn = c(Mt((Date.now() - F) / I));
            let ge = 0;
            n[0] === d && T + p < y && (ge = nt(m).top + (H ? 0 : d.scrollTop) - tt - D(zi(m)).height), w(d, "scrollBehavior") !== "auto" && w(d, "scrollBehavior", "auto"), d.scrollTop = T + (p + ge) * yn, w(d, "scrollBehavior", ""), yn === 1 && (it === ge || !me--) ? x() : (it = ge, requestAnimationFrame(wn));
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
    function Ps(t, e = 0, n = 0) {
      if (!Ot(t))
        return 0;
      const o = Pe(t, !0), { scrollHeight: l, scrollTop: c } = o, { height: d } = te(o), p = l - d, m = Nn(t)[0] - Nn(o)[0], y = Math.max(0, m - d + e), x = Math.min(p, m + t.offsetHeight - n);
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
    function Pe(...t) {
      return Me(...t)[0];
    }
    function Le(t) {
      return Me(t, !1, ["hidden", "clip"]);
    }
    function te(t) {
      const e = Ie(t), n = qi(t), o = !At(t) || t.contains(n);
      if (o && e.visualViewport) {
        let { height: m, width: y, scale: x, pageTop: T, pageLeft: I } = e.visualViewport;
        return m = Math.round(m * x), y = Math.round(y * x), { height: m, width: y, top: T, left: I, bottom: T + m, right: I + y };
      }
      let l = nt(o ? e : t);
      if (w(t, "display") === "inline")
        return l;
      const { body: c, documentElement: d } = e.document, p = o ? n === d || // In quirks mode the scrolling element is body, even though the viewport is html
      n.clientHeight < c.clientHeight ? n : c : t;
      for (let [m, y, x, T] of [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
      ]) {
        const I = l[m] % 1;
        l[x] += Y(w(p, `border-${x}-width`)), l[m] = l[y] = p[`client${b(m)}`] - (I ? I < 0.5 ? -I : 1 - I : 0), l[T] = l[m] + l[x];
      }
      return l;
    }
    function zi(t) {
      const { left: e, width: n, top: o } = D(t);
      for (const l of o ? [0, o] : [0]) {
        let c;
        for (const d of Ie(t).document.elementsFromPoint(e + n / 2, l))
          !d.contains(t) && // If e.g. Offcanvas is not yet closed
          !q(d, "uk-togglable-leave") && (Hi(d, "fixed") && Tr(
            An(t).reverse().find(
              (p) => !p.contains(d) && !Hi(p, "static")
            )
          ) < Tr(d) || Hi(d, "sticky") && lt(d).contains(t)) && (!c || D(c).height < D(d).height) && (c = d);
        if (c)
          return c;
      }
    }
    function Tr(t) {
      return Y(w(t, "zIndex"));
    }
    function Hi(t, e) {
      return w(t, "position") === e;
    }
    function qi(t) {
      return Ie(t).document.scrollingElement;
    }
    const ee = [
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
      }, C(e) || (e = [e, e]), nt(t, Pr(t, e, n));
    }
    function Pr(t, e, n) {
      const o = Ar(t, e, n), { boundary: l, viewportOffset: c = 0, placement: d } = n;
      let p = o;
      for (const [m, [y, , x, T]] of Object.entries(ee)) {
        const I = ku(t, e[m], c, l, m);
        if (As(o, I, m))
          continue;
        let F = 0;
        if (d[m] === "flip") {
          const H = n.attach.target[m];
          if (H === T && o[T] <= I[T] || H === x && o[x] >= I[x])
            continue;
          F = xu(t, e, n, m)[x] - o[x];
          const tt = $u(t, e[m], c, m);
          if (!As(Wi(o, F, m), tt, m)) {
            if (As(o, tt, m))
              continue;
            if (n.recursion)
              return !1;
            const it = Su(t, e, n);
            if (it && As(it, tt, 1 - m))
              return it;
            continue;
          }
        } else if (d[m] === "shift") {
          const H = nt(e[m]), { offset: tt } = n;
          F = Mt(
            Mt(o[x], I[x], I[T] - o[y]),
            H[x] - o[y] + tt[m],
            H[T] - tt[m]
          ) - o[x];
        }
        p = Wi(p, F, m);
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
      }, c = nt(t);
      for (const [d, [p, , m, y]] of Object.entries(ee)) {
        const x = o.target[d] === o.element[d] ? te(e[d]) : nt(e[d]);
        c = Wi(
          c,
          x[m] - c[m] + Rr(o.target[d], y, x[p]) - Rr(o.element[d], y, c[p]) + +l[d],
          d
        );
      }
      return c;
    }
    function Wi(t, e, n) {
      const [, o, l, c] = ee[n], d = { ...t };
      return d[l] = t[o] = t[l] + e, d[c] += e, d;
    }
    function Rr(t, e, n) {
      return t === "center" ? n / 2 : t === e ? n : 0;
    }
    function ku(t, e, n, o, l) {
      let c = Br(...Ir(t, e).map(te));
      return n && (c[ee[l][2]] += n, c[ee[l][3]] -= n), o && (c = Br(
        c,
        nt(C(o) ? o[l] : o)
      )), c;
    }
    function $u(t, e, n, o) {
      const [l, c, d, p] = ee[o], [m] = Ir(t, e), y = te(m);
      return ["auto", "scroll"].includes(w(m, `overflow-${c}`)) && (y[d] -= m[`scroll${b(d)}`], y[p] = y[d] + m[`scroll${b(l)}`]), y[d] += n, y[p] -= n, y;
    }
    function Ir(t, e) {
      return Le(e).filter((n) => n.contains(t));
    }
    function Br(...t) {
      let e = {};
      for (const n of t)
        for (const [, , o, l] of ee)
          e[o] = Math.max(e[o] || 0, n[o]), e[l] = Math.min(...[e[l], n[l]].filter(Boolean));
      return e;
    }
    function As(t, e, n) {
      const [, , o, l] = ee[n];
      return t[o] >= e[o] && t[l] <= e[l];
    }
    function xu(t, e, { offset: n, attach: o }, l) {
      return Ar(t, e, {
        attach: {
          element: Fr(o.element, l),
          target: Fr(o.target, l)
        },
        offset: _u(n, l)
      });
    }
    function Su(t, e, n) {
      return Pr(t, e, {
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
      const n = [...t], o = ee[e].indexOf(t[e]);
      return ~o && (n[e] = ee[e][1 - o % 2 + 2]), n;
    }
    function Nr(t) {
      for (let e = 0; e < ee.length; e++) {
        const n = ee[e].indexOf(t);
        if (~n)
          return ee[1 - e][n % 2 + 2];
      }
    }
    function _u(t, e) {
      return t = [...t], t[e] *= -1, t;
    }
    var Eu = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $: J,
      $$: ft,
      Animation: _e,
      Dimensions: yi,
      MouseTracker: yr,
      Transition: ht,
      addClass: Z,
      after: $s,
      append: Tt,
      apply: Te,
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
      escape: _i,
      fastdom: Ce,
      filter: Pn,
      find: xi,
      findAll: In,
      findIndex: A,
      flipPosition: Es,
      fragment: Oe,
      getCoveringElement: zi,
      getEventPos: ye,
      getIndex: Qt,
      getTargetedElement: $i,
      hasAttr: $e,
      hasClass: q,
      hasOwn: u,
      hasTouch: on,
      height: Ht,
      html: Ee,
      hyphenate: f,
      inBrowser: De,
      includes: S,
      index: we,
      intersectRect: ds,
      isArray: C,
      isBoolean: oe,
      isDocument: wt,
      isElement: zt,
      isEmpty: hs,
      isEqual: En,
      isFocusable: bs,
      isFunction: L,
      isInView: yu,
      isInput: vs,
      isNode: At,
      isNumber: _n,
      isNumeric: pe,
      isObject: M,
      isPlainObject: bt,
      isRtl: Rt,
      isSameSiteAnchor: ln,
      isString: yt,
      isTag: $t,
      isTouch: ue,
      isUndefined: Ft,
      isVisible: Ot,
      isVoidElement: ki,
      isWindow: Ut,
      last: Be,
      matches: st,
      memoize: re,
      mute: xr,
      noop: at,
      observeIntersection: kr,
      observeMutation: Ni,
      observeResize: jn,
      observeViewportResize: Fi,
      off: Se,
      offset: nt,
      offsetPosition: Nn,
      offsetViewport: te,
      on: V,
      once: kt,
      overflowParents: Le,
      parent: lt,
      parents: An,
      pause: Cs,
      pick: bi,
      play: Di,
      pointInRect: fs,
      pointerCancel: gs,
      pointerDown: ae,
      pointerEnter: je,
      pointerLeave: an,
      pointerMove: ms,
      pointerUp: xe,
      position: Ri,
      positionAt: Cr,
      prepend: ou,
      propName: ws,
      query: Lt,
      queryAll: Rn,
      ready: iu,
      remove: Zt,
      removeAttr: On,
      removeClass: rt,
      replaceClass: ps,
      scrollIntoView: Or,
      scrollParent: Pe,
      scrollParents: Me,
      scrolledOver: Ps,
      selFocusable: Cn,
      selInput: Tn,
      sortBy: sr,
      startsWith: v,
      sumBy: Fe,
      swap: vi,
      toArray: O,
      toBoolean: gi,
      toEventTargets: Oi,
      toFloat: Y,
      toNode: _t,
      toNodes: et,
      toNumber: be,
      toPx: Bt,
      toWindow: Ie,
      toggleClass: Et,
      trigger: j,
      ucfirst: b,
      uniqueBy: ir,
      unwrap: Fn,
      width: _s,
      wrapAll: Ss,
      wrapInner: Ai
    }), qt = {
      connected() {
        Z(this.$el, this.$options.id);
      }
    };
    const Ou = ["days", "hours", "minutes", "seconds"];
    var Tu = {
      mixins: [qt],
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
          const t = Cu(this.date);
          t.total || (this.stop(), this.end || (j(this.$el, "countdownend"), this.end = !0));
          for (const e of Ou) {
            const n = J(this.clsWrapper.replace("%unit%", e), this.$el);
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
    const It = {};
    It.events = It.watch = It.observe = It.created = It.beforeConnect = It.connected = It.beforeDisconnect = It.disconnected = It.destroy = Vi, It.args = function(t, e) {
      return e !== !1 && Vi(e || t);
    }, It.update = function(t, e) {
      return sr(
        Vi(t, L(e) ? { read: e } : e),
        "order"
      );
    }, It.props = function(t, e) {
      if (C(e)) {
        const n = {};
        for (const o of e)
          n[o] = String;
        e = n;
      }
      return It.methods(t, e);
    }, It.computed = It.methods = function(t, e) {
      return e ? t ? { ...t, ...e } : e : t;
    }, It.i18n = It.data = function(t, e, n) {
      return n ? Dr(t, e, n) : e ? t ? function(o) {
        return Dr(t, e, o);
      } : e : t;
    };
    function Dr(t, e, n) {
      return It.computed(
        L(t) ? t.call(n, n) : t,
        L(e) ? e.call(n, n) : e
      );
    }
    function Vi(t, e) {
      return t = t && !C(t) ? [t] : t, e ? t ? t.concat(e) : C(e) ? e : [e] : t;
    }
    function Pu(t, e) {
      return Ft(e) ? t : e;
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
        o[c] = (It[c] || Pu)(t[c], e[c], n);
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
      return t === Boolean ? gi(e) : t === Number ? be(e) : t === "list" ? Ru(e) : t === Object && yt(e) ? dn(e) : t ? t(e) : e;
    }
    const Au = /,(?![^(]*\))/;
    function Ru(t) {
      return C(t) ? t : yt(t) ? t.split(Au).map((e) => pe(e) ? be(e) : gi(e.trim())) : [t];
    }
    function Iu(t) {
      t._data = {}, t._updates = [...t.$options.update || []], t._disconnect.push(() => t._updates = t._data = null);
    }
    function Bu(t, e) {
      t._updates.unshift(e);
    }
    function Mn(t, e = "update") {
      t._connected && t._updates.length && (t._queued || (t._queued = /* @__PURE__ */ new Set(), Ce.read(() => {
        t._connected && Fu(t, t._queued), t._queued = null;
      })), t._queued.add(e.type || e));
    }
    function Fu(t, e) {
      for (const { read: n, write: o, events: l = [] } of t._updates) {
        if (!e.has("update") && !l.some((d) => e.has(d)))
          continue;
        let c;
        n && (c = n.call(t, t._data, e), c && bt(c) && W(t._data, c)), o && c !== !1 && Ce.write(() => {
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
    function Rs(t) {
      return zn(Ni, t);
    }
    function Is(t = {}) {
      return fn({
        handler: function(e, n) {
          const { targets: o = this.$el, preload: l = 5 } = t;
          for (const c of et(L(o) ? o(this) : o))
            ft('[loading="lazy"]', c).slice(0, l - 1).forEach((d) => On(d, "loading"));
          for (const c of e.filter(({ isIntersecting: d }) => d).map(({ target: d }) => d))
            n.unobserve(c);
        },
        ...t
      });
    }
    function Ki(t) {
      return zn((e, n) => Fi(n), t, "resize");
    }
    function Ln(t) {
      return zn(
        (e, n) => ({
          disconnect: V(Du(e), "scroll", n, { passive: !0 })
        }),
        t,
        "scroll"
      );
    }
    function jr(t) {
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
          const n = ye(e), o = "tagName" in e.target ? e.target : lt(e.target);
          kt(document, `${xe} ${gs} scroll`, (l) => {
            const { x: c, y: d } = ye(l);
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
          Mn(this, n);
        },
        ...e
      };
    }
    function Nu(t, e, n, o) {
      return Math.abs(t - n) >= Math.abs(e - o) ? t - n > 0 ? "Left" : "Right" : e - o > 0 ? "Up" : "Down";
    }
    function Du(t) {
      return et(t).map((e) => {
        const { ownerDocument: n } = e, o = Pe(e, !0);
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
        Rs({
          options: {
            childList: !0
          }
        }),
        Rs({
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
    async function ju(t, e, n) {
      await Yi();
      let o = ut(e);
      const l = o.map((F) => Mr(F, !0)), c = { ...w(e, ["height", "padding"]), display: "block" }, d = o.concat(e);
      await Promise.all(d.map(ht.cancel)), w(d, "transitionProperty", "none"), await t(), o = o.concat(ut(e).filter((F) => !S(o, F))), await Promise.resolve(), w(d, "transitionProperty", "");
      const p = N(e, "style"), m = w(e, ["height", "padding"]), [y, x] = Uu(e, o, l), T = o.map((F) => ({ style: N(F, "style") }));
      o.forEach((F, H) => x[H] && w(F, x[H])), w(e, c), j(e, "scroll"), await Yi();
      const I = o.map((F, H) => lt(F) === e && ht.start(F, y[H], n, "ease")).concat(ht.start(e, m, n, "ease"));
      try {
        await Promise.all(I), o.forEach((F, H) => {
          N(F, T[H]), lt(F) === e && w(F, "display", y[H].opacity === 0 ? "none" : "");
        }), N(e, "style", p);
      } catch {
        N(o, "style", ""), Mu(e, c);
      }
    }
    function Mr(t, e) {
      const n = w(t, "zIndex");
      return Ot(t) ? {
        display: "",
        opacity: e ? w(t, "opacity") : "0",
        pointerEvents: "none",
        position: "absolute",
        zIndex: n === "auto" ? we(t) : n,
        ...Lr(t)
      } : !1;
    }
    function Uu(t, e, n) {
      const o = e.map(
        (c, d) => lt(c) && d in n ? n[d] ? Ot(c) ? Lr(c) : { opacity: 0 } : { opacity: Ot(c) ? 1 : 0 } : !1
      ), l = o.map((c, d) => {
        const p = lt(e[d]) === t && (n[d] || Mr(e[d]));
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
    function Mu(t, e) {
      for (const n in e)
        w(t, n, "");
    }
    function Lr(t) {
      const { height: e, width: n } = D(t);
      return {
        height: e,
        width: n,
        transform: "",
        ...Ri(t),
        ...w(t, ["marginTop", "marginLeft"])
      };
    }
    function Yi() {
      return new Promise((t) => requestAnimationFrame(t));
    }
    const Qi = "uk-transition-leave", Zi = "uk-transition-enter";
    function zr(t, e, n, o = 0) {
      const l = Bs(e, !0), c = { opacity: 1 }, d = { opacity: 0 }, p = (x) => () => l === Bs(e) ? x() : Promise.reject(), m = p(async () => {
        Z(e, Qi), await Promise.all(
          qr(e).map(
            (x, T) => new Promise(
              (I) => setTimeout(
                () => ht.start(x, d, n / 2, "ease").then(
                  I
                ),
                T * o
              )
            )
          )
        ), rt(e, Qi);
      }), y = p(async () => {
        const x = Ht(e);
        Z(e, Zi), t(), w(ut(e), { opacity: 0 }), await Yi();
        const T = ut(e), I = Ht(e);
        w(e, "alignContent", "flex-start"), Ht(e, x);
        const F = qr(e);
        w(T, d);
        const H = F.map(async (tt, it) => {
          await Lu(it * o), await ht.start(tt, c, n / 2, "ease");
        });
        x !== I && H.push(
          ht.start(
            e,
            { height: I },
            n / 2 + F.length * o,
            "ease"
          )
        ), await Promise.all(H).then(() => {
          rt(e, Zi), l === Bs(e) && (w(e, { height: "", alignContent: "" }), w(T, { opacity: "" }), delete e.dataset.transition);
        });
      });
      return q(e, Qi) ? Hr(e).then(y) : q(e, Zi) ? Hr(e).then(m).then(y) : m().then(y);
    }
    function Bs(t, e) {
      return e && (t.dataset.transition = 1 + Bs(t)), be(t.dataset.transition) || 0;
    }
    function Hr(t) {
      return Promise.all(
        ut(t).filter(ht.inProgress).map(
          (e) => new Promise((n) => kt(e, "transitionend transitioncanceled", n))
        )
      );
    }
    function qr(t) {
      return Gi(ut(t)).flat().filter(Ot);
    }
    function Lu(t) {
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
          return (n === "fade" ? zr : n === "delayed-fade" ? (...l) => zr(...l, 40) : n ? ju : () => (t(), Promise.resolve()))(t, e, this.duration).catch(at);
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
        children: ({ target: t }, e) => ft(`${t} > *`, e),
        toggles: ({ attrItem: t }, e) => ft(`[${t}],[data-${t}]`, e)
      },
      watch: {
        toggles(t) {
          this.updateState();
          const e = ft(this.selActive, this.$el);
          for (const n of t) {
            this.selActive !== !1 && Et(n, this.cls, S(e, n));
            const o = Ju(n);
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
          t.type === "keydown" && t.keyCode !== ct.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current));
        }
      },
      methods: {
        apply(t) {
          const e = this.getState(), n = Jr(t, this.attrItem, this.getState());
          Hu(e, n) || this.setState(n);
        },
        getState() {
          return this.toggles.filter((t) => q(t, this.cls)).reduce((t, e) => Jr(e, this.attrItem, t), {
            filter: { "": "" },
            sort: []
          });
        },
        async setState(t, e = !0) {
          t = { filter: { "": "" }, sort: [], ...t }, j(this.$el, "beforeFilter", [this, t]);
          for (const n of this.toggles)
            Et(n, this.cls, Wu(n, this.attrItem, t));
          await Promise.all(
            ft(this.target, this.$el).map((n) => {
              const o = () => qu(t, n, ut(n));
              return e ? this.animate(o, n) : o();
            })
          ), j(this.$el, "afterFilter", [this]);
        },
        updateState() {
          Ce.write(() => this.setState(this.getState(), !1));
        }
      }
    };
    function Vr(t, e) {
      return dn(Nt(t, e), ["filter"]);
    }
    function Hu(t, e) {
      return ["filter", "sort"].every((n) => En(t[n], e[n]));
    }
    function qu(t, e, n) {
      for (const c of n)
        w(
          c,
          "display",
          Object.values(t.filter).every((d) => !d || st(c, d)) ? "" : "none"
        );
      const [o, l] = t.sort;
      if (o) {
        const c = Vu(n, o, l);
        En(c, n) || Tt(e, c);
      }
    }
    function Jr(t, e, n) {
      const { filter: o, group: l, sort: c, order: d = "asc" } = Vr(t, e);
      return (o || Ft(c)) && (l ? o ? (delete n.filter[""], n.filter[l] = o) : (delete n.filter[l], (hs(n.filter) || "" in n.filter) && (n.filter = { "": o || "" })) : n.filter = { "": o || "" }), Ft(c) || (n.sort = [c, d]), n;
    }
    function Wu(t, e, { filter: n = { "": "" }, sort: [o, l] }) {
      const { filter: c = "", group: d = "", sort: p, order: m = "asc" } = Vr(t, e);
      return Ft(p) ? d in n && c === n[d] || !c && d && !(d in n) && !n[""] : o === p && l === m;
    }
    function Vu(t, e, n) {
      return [...t].sort(
        (o, l) => Nt(o, e).localeCompare(Nt(l, e), void 0, { numeric: !0 }) * (n === "asc" || -1)
      );
    }
    function Ju(t) {
      return J("a,button", t) || t;
    }
    let to;
    function Kr(t) {
      const e = V(
        t,
        "touchstart",
        (o) => {
          if (o.targetTouches.length !== 1 || st(o.target, 'input[type="range"'))
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
              et(t).map((o) => {
                const l = oe(e) ? e : !this.isToggled(o);
                if (!j(o, `before${l ? "show" : "hide"}`, [this]))
                  return Promise.reject();
                const c = (L(n) ? n : n === !1 || !this.hasAnimation ? Ku : this.hasTransition ? Gu : Xu)(o, l, this), d = l ? this.clsEnter : this.clsLeave;
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
    function Ku(t, e, { _toggle: n }) {
      return _e.cancel(t), ht.cancel(t), n(t, e);
    }
    async function Gu(t, e, { animation: n, duration: o, velocity: l, transition: c, _toggle: d }) {
      var p;
      const [m = "reveal", y = "top"] = ((p = n[0]) == null ? void 0 : p.split("-")) || [], x = [
        ["left", "right"],
        ["top", "bottom"]
      ], T = x[S(x[0], y) ? 0 : 1], I = T[1] === y, H = ["width", "height"][x.indexOf(T)], tt = `margin-${T[0]}`, it = `margin-${y}`;
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
          it
        ].map((pl) => [pl, t.style[pl]])
      ), ge = D(t), wo = Y(w(t, tt)), hl = Y(w(t, it)), Ge = ge[H] + hl;
      !wn && !e && (me += hl);
      const [Ks] = Ai(t, "<div>");
      w(Ks, {
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
          it
        ])
      }), w(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [it]: 0,
        width: ge.width,
        height: ge.height,
        overflow: "hidden",
        [H]: me
      });
      const dl = me / Ge;
      o = (l * Ge + o) * (e ? 1 - dl : dl);
      const fl = { [H]: e ? Ge : 0 };
      I && (w(t, tt, Ge - me + wo), fl[tt] = e ? wo : Ge + wo), !I ^ m === "reveal" && (w(Ks, tt, -Ge + me), ht.start(Ks, { [tt]: e ? 0 : -Ge }, o, c));
      try {
        await ht.start(t, fl, o, c);
      } finally {
        w(t, yn), Fn(Ks.firstChild), e || d(t, !1);
      }
    }
    function Xu(t, e, n) {
      const { animation: o, duration: l, _toggle: c } = n;
      return e ? (c(t, !0), _e.in(t, o[0], l, n.origin)) : _e.out(t, o[1] || o[0], l, n.origin).then(
        () => c(t, !1)
      );
    }
    const Wt = [];
    var eo = {
      mixins: [qt, Hn, ze],
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
        S(Wt, this) && this.toggleElement(this.$el, !1, !1);
      },
      events: [
        {
          name: "click",
          delegate: ({ selClose: t }) => `${t},a[href*="#"]`,
          handler(t) {
            const { current: e, defaultPrevented: n } = t, { hash: o } = e;
            !n && o && ln(e) && !this.$el.contains(J(o)) ? this.hide() : st(e, this.selClose) && (t.preventDefault(), this.hide());
          }
        },
        {
          name: "toggle",
          self: !0,
          handler(t) {
            t.defaultPrevented || (t.preventDefault(), this.isToggled() === S(Wt, this) && this.toggle());
          }
        },
        {
          name: "beforeshow",
          self: !0,
          handler(t) {
            if (S(Wt, this))
              return !1;
            !this.stack && Wt.length ? (Promise.all(Wt.map((e) => e.hide())).then(this.show), t.preventDefault()) : Wt.push(this);
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            this.stack && w(this.$el, "zIndex", Y(w(this.$el, "zIndex")) + Wt.length);
            const t = [
              this.overlay && Qu(this),
              this.overlay && Kr(this.$el),
              this.bgClose && Zu(this),
              this.escClose && th(this)
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
            bs(this.$el) || N(this.$el, "tabindex", "-1"), st(this.$el, ":focus-within") || this.$el.focus();
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            S(Wt, this) && Wt.splice(Wt.indexOf(this), 1), w(this.$el, "zIndex", ""), Wt.some((t) => t.clsPage === this.clsPage) || rt(document.documentElement, this.clsPage);
          }
        }
      ],
      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },
        show() {
          return this.container && lt(this.$el) !== this.container ? (Tt(this.container, this.$el), new Promise(
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
            Yu(w(n, "transitionDuration"))
          );
        })
      ).then(() => delete t._reject);
    }
    function Yu(t) {
      return t ? P(t, "ms") ? Y(t) : Y(t) * 1e3 : 0;
    }
    function Qu(t) {
      return V(document, "focusin", (e) => {
        Be(Wt) === t && !t.$el.contains(e.target) && t.$el.focus();
      });
    }
    function Zu(t) {
      return V(document, ae, ({ target: e }) => {
        Be(Wt) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || kt(
          document,
          `${xe} ${gs} scroll`,
          ({ defaultPrevented: n, type: o, target: l }) => {
            !n && o === xe && e === l && t.hide();
          },
          !0
        );
      });
    }
    function th(t) {
      return V(document, "keydown", (e) => {
        e.keyCode === 27 && Be(Wt) === t && t.hide();
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
      return t ? `translate3d(${t + e}, 0, 0)` : "";
    }
    function eh(t, e, n, { animation: o, easing: l }) {
      const { percent: c, translate: d, show: p = at } = o, m = p(n), { promise: y, resolve: x } = Xr();
      return {
        dir: n,
        show(T, I = 0, F) {
          const H = F ? "linear" : l;
          return T -= Math.round(T * Mt(I, -1, 1)), this.translate(I), He(e, "itemin", { percent: I, duration: T, timing: H, dir: n }), He(t, "itemout", { percent: 1 - I, duration: T, timing: H, dir: n }), Promise.all([
            ht.start(e, m[1], T, H),
            ht.start(t, m[0], T, H)
          ]).then(() => {
            this.reset(), x();
          }, at), y;
        },
        cancel() {
          return ht.cancel([e, t]);
        },
        reset() {
          for (const T in m[0])
            w([e, t], T, "");
        },
        async forward(T, I = this.percent()) {
          return await this.cancel(), this.show(T, I, !0);
        },
        translate(T) {
          this.reset();
          const I = d(T, n);
          w(e, I[1]), w(t, I[0]), He(e, "itemtranslatein", { percent: T, dir: n }), He(t, "itemtranslateout", { percent: 1 - T, dir: n });
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
    var Fs = {
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
            this.stack.length || this.draggable && st(this.$el, ":focus-within") && !st(this.$el, ":focus") || this.pauseOnHover && st(this.$el, ":hover") || this.show("next");
          }, this.autoplayInterval);
        },
        stopAutoplay() {
          clearInterval(this.interval);
        }
      }
    };
    const Wn = { passive: !1, capture: !0 }, Yr = { passive: !0, capture: !0 }, sh = "touchstart mousedown", so = "touchmove mousemove", Qr = "touchend touchcancel mouseup click input scroll", Zr = (t) => t.preventDefault();
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
            const o = ye(n).x * (Rt ? -1 : 1);
            this.prevPos = o === this.pos ? this.prevPos : this.pos, this.pos = o, e(n);
          };
        }
      },
      events: [
        {
          name: sh,
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
          name: so,
          el: ({ list: t }) => t,
          handler: at,
          ...Wn
        }
      ],
      methods: {
        start() {
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, V(document, so, this.move, Wn), V(document, Qr, this.end, Yr), w(this.list, "userSelect", "none");
        },
        move(t) {
          const e = this.pos - this.drag;
          if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
            return;
          this.dragging || V(this.list, "click", Zr, Wn), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
          let { slides: n, prevIndex: o } = this, l = Math.abs(e), c = this.getIndex(o + this.dir), d = ta.call(this, o, c);
          for (; c !== o && l > d; )
            this.drag -= d * this.dir, o = c, l -= d, c = this.getIndex(o + this.dir), d = ta.call(this, o, c);
          this.percent = l / d;
          const p = n[o], m = n[c], y = this.index !== c, x = o === c;
          let T;
          for (const I of [this.index, this.prevIndex])
            S([c, o], I) || (j(n[I], "itemhidden", [this]), x && (T = !0, this.prevIndex = o));
          (this.index === o && this.prevIndex !== o || T) && j(n[this.index], "itemshown", [this]), y && (this.prevIndex = o, this.index = c, x || (j(p, "beforeitemhide", [this]), j(p, "itemhide", [this])), j(m, "beforeitemshow", [this]), j(m, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), p, !x && m);
        },
        end() {
          if (Se(document, so, this.move, Wn), Se(document, Qr, this.end, Yr), this.dragging)
            if (this.dragging = null, this.index === this.prevIndex)
              this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
            else {
              const t = (Rt ? this.dir * (Rt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
              this.index = t ? this.index : this.prevIndex, t && (j(this.slides[this.prevIndex], "itemhidden", [this]), j(this.slides[this.index], "itemshown", [this]), this.percent = 1 - this.percent), this.show(
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
        ...bt(e) ? e : { handler: e }
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
          sa(t, n, e[n]);
    }
    const na = { subtree: !0, childList: !0 };
    function sa(t, e, n) {
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
          l[e] = n.set ? n.set.call(t, o) : o, Ft(l[e]) && delete l[e];
        }
      });
    }
    function ch(t) {
      t._hasComputed && (Bu(t, {
        read: () => ah(t, ia(t)),
        events: ["resize", "computed"]
      }), t._computedObserver = Ni(
        t.$el,
        () => Mn(t, "computed"),
        na
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
          oa(t, e);
        else
          for (const n in e)
            oa(t, { name: n, handler: e[n] });
    }
    function oa(t, { name: e, el: n, handler: o, capture: l, passive: c, delegate: d, filter: p, self: m }) {
      p && !p.call(t, t) || t._disconnect.push(
        V(
          n ? n.call(t, t) : t.$el,
          e,
          d == null ? void 0 : d.call(t, t),
          o.bind(t),
          {
            passive: c,
            capture: l,
            self: m
          }
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
      L(o) && !u(t, m) && sa(t, m, () => {
        const T = o.call(t, t);
        return C(T) ? et(T) : T;
      }), l = yt(l) ? t[l] : l.bind(t), L(c) && (c = c.call(t, t));
      const y = u(t, m) ? t[m] : o, x = n(y, l, c, p);
      L(o) && C(t[m]) && ea(
        t,
        { handler: fh(x, c), immediate: !1 },
        m
      ), t._disconnect.push(() => x.disconnect());
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
      W(n, o);
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
    const mh = re((t, e) => {
      const n = Object.keys(e), o = n.concat(t).map((l) => [f(l), `data-${f(l)}`]).flat();
      return { attributes: n, filter: o };
    });
    function gh(t) {
      const { $options: e, $props: n } = t, { id: o, props: l, el: c } = e;
      if (!l)
        return;
      const { attributes: d, filter: p } = mh(o, l), m = new MutationObserver((y) => {
        const x = ra(e);
        y.some(({ attributeName: T }) => {
          const I = T.replace("data-", "");
          return (I === o ? d : [$(I), $(T)]).some(
            (F) => !Ft(x[F]) && x[F] !== n[F]
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
      t._connected || (ph(t), pn(t, "beforeConnect"), t._connected = !0, t._disconnect = [], uh(t), Iu(t), rh(t), hh(t), gh(t), ch(t), pn(t, "connected"), Mn(t));
    }
    function oo(t) {
      t._connected && (pn(t, "beforeDisconnect"), t._disconnect.forEach((e) => e()), t._disconnect = null, pn(t, "disconnected"), t._connected = !1);
    }
    let vh = 0;
    function aa(t, e = {}) {
      e.data = yh(e, t.constructor.options), t.$options = Un(t.constructor.options, e, t), t.$props = {}, t._uid = vh++, bh(t), wh(t), lh(t), pn(t, "created"), e.el && t.$mount(e.el);
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
      C(t) && (t = t.slice(0, e.length).reduce((o, l, c) => (bt(l) ? W(o, l) : o[e[c]] = l, o), {}));
      for (const o in t)
        Ft(t[o]) ? delete t[o] : n[o] && (t[o] = Ji(n[o], t[o]));
      return t;
    }
    const ne = function(t) {
      aa(this, t);
    };
    ne.util = Eu, ne.options = {}, ne.version = "3.21.16";
    const kh = "uk-", qe = "__uikit__", mn = {};
    function la(t, e) {
      var n, o;
      const l = kh + f(t);
      if (!e)
        return mn[l].options || (mn[l] = ne.extend(mn[l])), mn[l];
      t = $(t), ne[t] = (d, p) => Vn(t, d, p);
      const c = (n = e.options) != null ? n : { ...e };
      return c.id = l, c.name = t, (o = c.install) == null || o.call(c, ne, c, t), ne._initialized && !c.functional && requestAnimationFrame(() => Vn(t, `[${l}],[data-${l}]`)), mn[l] = c;
    }
    function Vn(t, e, n, ...o) {
      const l = la(t);
      return l.options.functional ? new l({ data: bt(e) ? e : [e, n, ...o] }) : e ? ft(e).map(c)[0] : c();
      function c(d) {
        const p = Ns(d, t);
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
    function Ns(t, e) {
      return Jn(t)[e];
    }
    function $h(t, e) {
      t[qe] || (t[qe] = {}), t[qe][e.$options.name] = e;
    }
    function xh(t, e) {
      var n;
      (n = t[qe]) == null || delete n[e.$options.name], hs(t[qe]) && delete t[qe];
    }
    function Sh(t) {
      t.component = la, t.getComponents = Jn, t.getComponent = Ns, t.update = ca, t.use = function(n) {
        if (!n.installed)
          return n.call(null, this), n.installed = !0, this;
      }, t.mixin = function(n, o) {
        o = (yt(o) ? this.component(o) : o) || this, o.options = Un(o.options, n);
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
          e = J(n);
        }
      });
    }
    function ca(t, e) {
      t = t ? _t(t) : document.body;
      for (const n of An(t).reverse())
        ua(n, e);
      Te(t, (n) => ua(n, e));
    }
    function ua(t, e) {
      const n = Jn(t);
      for (const o in n)
        Mn(n[o], e);
    }
    function _h(t) {
      t.prototype.$mount = function(e) {
        const n = this;
        $h(e, n), n.$options.el = e, e.isConnected && io(n);
      }, t.prototype.$destroy = function(e = !1) {
        const n = this, { el: o } = n.$options;
        o && oo(n), pn(n, "destroy"), xh(o, n), e && Zt(n.$el);
      }, t.prototype.$create = Vn, t.prototype.$emit = function(e) {
        Mn(this, e);
      }, t.prototype.$update = function(e = this.$el, n) {
        ca(e, n);
      }, t.prototype.$reset = function() {
        oo(this), io(this);
      }, t.prototype.$getComponent = Ns, Object.defineProperties(t.prototype, {
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
            t.target.closest("a,button") && (t.type === "click" || t.keyCode === ct.SPACE) && (t.preventDefault(), this.show(Nt(t.current, this.attrItem)));
          }
        },
        {
          name: "itemshow",
          handler() {
            this.updateNav();
          }
        },
        {
          name: "keydown",
          delegate: ({ selNavItem: t }) => t,
          filter: ({ parallax: t }) => !t,
          handler(t) {
            const { current: e, keyCode: n } = t, o = Nt(e, this.attrItem);
            if (!pe(o))
              return;
            let l = n === ct.HOME ? 0 : n === ct.END ? "last" : n === ct.LEFT ? "previous" : n === ct.RIGHT ? "next" : -1;
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
              }), c && o && st(lt(e), ":focus-within") && o.focus();
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
    const Th = "cubic-bezier(0.25, 0.46, 0.45, 0.94)", Ch = "cubic-bezier(0.165, 0.84, 0.44, 1)";
    var ha = {
      mixins: [nh, ih, Oh, Fs],
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
        duration: ({ velocity: t }, e) => da(e.offsetWidth / t),
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
        async show(t, e = !1) {
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
          if (this.dir = Ph(t, d), this.prevIndex = d, this.index = m, p && !j(p, "beforeitemhide", [this]) || !j(y, "beforeitemshow", [this, p])) {
            this.index = this.prevIndex, c();
            return;
          }
          p && j(p, "itemhide", [this]), j(y, "itemshow", [this]), await this._show(p, y, e), p && j(p, "itemhidden", [this]), j(y, "itemshown", [this]), o.shift(), this._transitioner = null, o.length && requestAnimationFrame(() => o.length && this.show(o.shift(), !0));
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
            n * (Rt ? -1 : 1),
            o
          );
        }
      }
    };
    function Ph(t, e) {
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
        Animations: no,
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
        itemshow({ target: t }) {
          Z(t, this.clsActive);
        },
        itemshown({ target: t }) {
          Z(t, this.clsActivated);
        },
        itemhidden({ target: t }) {
          rt(t, this.clsActive, this.clsActivated);
        }
      }
    }, Ah = {
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
          return [{ opacity: 0, transform: gn(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - w(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: gn(1 + 0.5 * t), zIndex: 0 },
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
    };
    function gn(t) {
      return `scale3d(${t}, ${t}, 1)`;
    }
    var pa = {
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
            { opacity: 0, transform: gn(1 - 0.2) },
            { opacity: 1, transform: gn(1) }
          ];
        },
        percent(t) {
          return 1 - w(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: gn(1 - 0.2 * t) },
            { opacity: t, transform: gn(1 - 0.2 + 0.2 * t) }
          ];
        }
      }
    }, ma = {
      mixins: [eo, fa],
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
        const t = J(this.template), e = J(this.selList, t);
        this.items.forEach(() => Tt(e, "<div>"));
        const n = J("[uk-close]", t), o = this.t("close");
        n && o && (n.dataset.i18n = JSON.stringify({ label: o })), this.$mount(Tt(this.container, t));
      },
      events: [
        {
          name: `${ms} ${ae} keydown`,
          handler() {
            this.showControls();
          }
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
          handler() {
            this.showControls();
          }
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
            t === ct.LEFT ? e = "previous" : t === ct.RIGHT ? e = "next" : t === ct.HOME ? e = 0 : t === ct.END && (e = "last"), ~e && this.show(e);
          }
        },
        {
          name: "beforeitemshow",
          handler(t) {
            this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = pa.scale, rt(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
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
      const n = Oe(`<${t}>`);
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
          const e = ir(this.toggles.map(ga), "source");
          if (zt(t)) {
            const { source: n } = ga(t);
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
      t.lightboxPanel || t.component("lightboxPanel", ma), W(e.props, t.component("lightboxPanel").options.props);
    }
    function ga(t) {
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
        [je]() {
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
            j(n, "close", [this]), Zt(n), o != null && o.hasChildNodes() || Zt(o);
          };
          this.timer && clearTimeout(this.timer), t || await ht.start(this.$el, this.startProps), e(this.$el);
        }
      }
    };
    function Fh(t) {
      t.notification.closeAll = function(e, n) {
        Te(document.body, (o) => {
          const l = t.getComponent(o, "notification");
          l && (!e || e === l.group) && l.close(n);
        });
      };
    }
    var Ds = {
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
      if (yt(t)) {
        if (v(t, "@"))
          t = Y(w(e, `--uk-breakpoint-${t.slice(1)}`));
        else if (isNaN(t))
          return t;
      }
      return t && pe(t) ? `(min-width: ${t}px)` : "";
    }
    function va(t) {
      return Ot(t) ? Math.ceil(
        Math.max(0, ...ft("[stroke]", t).map((e) => {
          var n;
          return ((n = e.getTotalLength) == null ? void 0 : n.call(e)) || 0;
        }))
      ) : 0;
    }
    const js = {
      x: Us,
      y: Us,
      rotate: Us,
      scale: Us,
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
      bgx: ya,
      bgy: ya
    }, { keys: ba } = Object;
    var wa = {
      mixins: [Ds],
      props: _a(ba(js), "list"),
      data: _a(ba(js), void 0),
      computed: {
        props(t, e) {
          const n = {};
          for (const l in t)
            l in js && !Ft(t[l]) && (n[l] = t[l].slice());
          const o = {};
          for (const l in n)
            o[l] = js[l](l, e, n[l], n);
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
    function Us(t, e, n) {
      let o = Ls(n) || { x: "px", y: "px", rotate: "deg" }[t] || "", l;
      return t === "x" || t === "y" ? (t = `translate${b(t)}`, l = (c) => Y(Y(c).toFixed(o === "px" ? 0 : 6))) : t === "scale" && (o = "", l = (c) => {
        var d;
        return Ls([c]) ? Bt(c, "width", e, !0) / e[`offset${(d = c.endsWith) != null && d.call(c, "vh") ? "Height" : "Width"}`] : Y(c);
      }), n.length === 1 && n.unshift(t === "scale" ? 1 : 0), n = vn(n, l), (c, d) => {
        c.transform = `${c.transform || ""} ${t}(${Gn(n, d)}${o})`;
      };
    }
    function ro(t, e, n) {
      return n.length === 1 && n.unshift(Xn(e, t, "")), n = vn(n, (o) => Dh(e, o)), (o, l) => {
        const [c, d, p] = Sa(n, l), m = c.map((y, x) => (y += p * (d[x] - y), x === 3 ? Y(y) : parseInt(y, 10))).join(",");
        o[t] = `rgba(${m})`;
      };
    }
    function Dh(t, e) {
      return Xn(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(Y);
    }
    function Ve(t, e, n) {
      n.length === 1 && n.unshift(0);
      const o = Ls(n) || { blur: "px", hue: "deg" }[t] || "%";
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
      const o = Ls(n), l = va(e);
      return n = vn(n.reverse(), (c) => (c = Y(c), o === "%" ? c * l / 100 : c)), n.some(([c]) => c) ? (w(e, "strokeDasharray", l), (c, d) => {
        c.strokeDashoffset = Gn(n, d);
      }) : at;
    }
    function ya(t, e, n, o) {
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
        d[p] = ka(e, p);
      return $a(c, d, o);
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
        const T = o[x].map(([it]) => it), I = Math.min(...T), F = Math.max(...T), H = T.indexOf(I) < T.indexOf(F), tt = F - I;
        p[x] = `${(H ? -tt : 0) - (H ? I : F)}px`, c[x === "bgy" ? "height" : "width"] += tt;
      }
      const m = yi.cover(l, c);
      for (const x of d) {
        const T = x === "bgy" ? "height" : "width", I = m[T] - c[T];
        p[x] = `max(${ka(e, x)},-${I}px) + ${p[x]}`;
      }
      const y = $a(d, p, o);
      return (x, T) => {
        y(x, T), x.backgroundSize = `${m.width}px ${m.height}px`, x.backgroundRepeat = "no-repeat";
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
    const xa = {}, Ms = {};
    function Lh(t) {
      const e = w(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
      if (Ms[e])
        return Ms[e];
      const n = new Image();
      return e && (n.src = e, !n.naturalWidth && !xa[e]) ? (kt(n, "error load", () => {
        Ms[e] = ao(n), j(t, cn("load", !1));
      }), xa[e] = !0, ao(n)) : Ms[e] = ao(n);
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
        let [d, p] = yt(t[c]) ? t[c].trim().split(/ (?![^(]*\))/) : [t[c]];
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
    function Sa(t, e) {
      const n = A(t.slice(1), ([, o]) => e <= o) + 1;
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
    const zh = /^-?\d+(?:\.\d+)?(\S+)?/;
    function Ls(t, e) {
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
    function _a(t, e) {
      return t.reduce((n, o) => (n[o] = e, n), {});
    }
    function Ea(t, e) {
      return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    var Hh = {
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
        target: ({ target: t }, e) => Oa(t && Lt(t, e) || e),
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
        le({ target: ({ $el: t, target: e }) => [t, e, Pe(e, !0)] })
      ],
      update: {
        read({ percent: t }, e) {
          if (e.has("scroll") || (t = !1), !Ot(this.$el))
            return !1;
          if (!this.matchMedia)
            return;
          const n = t;
          return t = Ea(Ps(this.target, this.start, this.end), this.easing), {
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
          const e = Bt(this.parallaxStart, "height", t, !0), n = Bt(this.parallaxEnd, "height", t, !0), o = Ea(Ps(t, e, n), this.parallaxEasing);
          return { parallax: this.getIndexAt(o) };
        },
        write({ parallax: t }) {
          const [e, n] = t, o = this.getValidIndex(e + Math.ceil(n)), l = this.slides[e], c = this.slides[o], { triggerShow: d, triggerShown: p, triggerHide: m, triggerHidden: y } = qh(this);
          if (~this.prevIndex)
            for (const T of /* @__PURE__ */ new Set([this.index, this.prevIndex]))
              S([o, e], T) || (m(this.slides[T]), y(this.slides[T]));
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
    }, Pa = {
      observe: Is({
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
      const d = t ? Yn(t, c, o) : Yn(e, c, o) + D(e).width * n, p = e ? Yn(e, c, o) : d + D(t).width * n * (Rt ? -1 : 1), { promise: m, resolve: y } = Xr();
      return {
        dir: n,
        show(x, T = 0, I) {
          const F = I ? "linear" : l;
          return x -= Math.round(x * Mt(T, -1, 1)), w(c, "transitionProperty", "none"), this.translate(T), w(c, "transitionProperty", ""), T = t ? T : Mt(T, 0, 1), He(this.getItemIn(), "itemin", { percent: T, duration: x, timing: F, dir: n }), t && He(this.getItemIn(!0), "itemout", {
            percent: 1 - T,
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
        async forward(x, T = this.percent()) {
          return await this.cancel(), this.show(x, T, !0);
        },
        translate(x) {
          if (x === this.percent())
            return;
          const T = this.getDistance() * n * (Rt ? -1 : 1);
          w(
            c,
            "transform",
            St(
              Mt(
                -p + (T - T * x),
                -bn(c),
                D(c).width
              ) * (Rt ? -1 : 1),
              "px"
            )
          );
          const I = this.getActives(), F = this.getItemIn(), H = this.getItemIn(!0);
          x = t ? Mt(x, -1, 1) : 0;
          for (const tt of ut(c)) {
            const it = S(I, tt), me = tt === F, wn = tt === H, yn = me || !wn && (it || n * (Rt ? -1 : 1) === -1 ^ zs(tt, c) > zs(t || e));
            He(tt, `itemtranslate${yn ? "in" : "out"}`, {
              dir: n,
              percent: wn ? 1 - x : me ? x : it ? 1 : 0
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
          let T = this.getActives(), I = Ra(c, Yn(e || t, c, o));
          if (x) {
            const F = T;
            T = I, I = F;
          }
          return I[A(I, (F) => !S(T, F))];
        },
        getActives() {
          return Ra(c, Yn(t || e, c, o));
        }
      };
    }
    function Yn(t, e, n) {
      const o = zs(t, e);
      return n ? o - Vh(t, e) : Math.min(o, Aa(e));
    }
    function Aa(t) {
      return Math.max(0, bn(t) - D(t).width);
    }
    function bn(t, e) {
      return Fe(ut(t).slice(0, e), (n) => D(n).width);
    }
    function Vh(t, e) {
      return D(e).width / 2 - D(t).width / 2;
    }
    function zs(t, e) {
      return t && (Ri(t).left + (Rt ? D(t).width - D(e).width : 0)) * (Rt ? -1 : 1) || 0;
    }
    function Ra(t, e) {
      e -= 1;
      const n = D(t).width, o = e + n + 2;
      return ut(t).filter((l) => {
        const c = zs(l, t), d = c + Math.min(D(l).width, n);
        return c >= e && d <= o;
      });
    }
    var Jh = {
      mixins: [qt, ha, Ca, Ta, Pa],
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
            return Be(this.sets);
          let t = 0;
          const e = Aa(this.list), n = A(this.slides, (o) => {
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
          this.duration = da(o / this.velocity) * (D(this.slides[n]).width / o), this.reorder();
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
          const n = this.center ? bn(this.list) - (D(this.slides[0]).width / 2 + D(Be(this.slides)).width / 2) : bn(this.list, this.maxIndex);
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
          let T = p / 2, I = 0;
          for (; T < l; ) {
            const F = o[Qt(+c + x + I++ * x, o)];
            if (m.has(F))
              return !0;
            T += D(F).width, m.add(F);
          }
          y = Math.max(
            y,
            p / 2 + D(o[Qt(+c + x, o)]).width / 2 - (T - l)
          );
        }
        if (Math.trunc(y) > Fe(
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
            Ce.read(() => {
              if (!this.matchMedia)
                return;
              const c = this.getCss(Fa(t, l, e)), d = this.getCss(Ba(t) ? 0.5 : l > 0 ? 1 : 0);
              Ce.write(() => {
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
            Ce.read(() => {
              if (!this.matchMedia) {
                this.reset();
                return;
              }
              const o = this.getCss(Fa(t, n, e));
              Ce.write(() => w(this.$el, o));
            });
          }
        }
      ]
    };
    function Ba(t) {
      return P(t, "in");
    }
    function Fa(t, e, n) {
      return n /= 2, Ba(t) ^ e < 0 ? n : 1 - n;
    }
    var Xh = {
      mixins: [qt, fa, Ca, Ta, Pa],
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
        Animations: Ah
      },
      watch: {
        list(t) {
          w(t, {
            aspectRatio: this.ratio ? this.ratio.replace(":", "/") : void 0,
            minHeight: this.minHeight,
            maxHeight: this.maxHeight,
            width: "100%"
          });
        }
      },
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        }
      }
    }, Yh = {
      mixins: [qt, Wr],
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
        handler(t) {
          this.init(t);
        }
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
          if (p.some(ht.inProgress))
            return;
          const m = ed(p, { x: e, y: n });
          if (p.length && (!m || m === c))
            return;
          const y = this.getSortable(c), x = nd(
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
          this.drag = td(this.$container, this.placeholder);
          const { left: e, top: n } = D(this.placeholder);
          W(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - n }), Z(this.drag, this.clsDrag, this.clsCustom), Z(this.placeholder, this.clsPlaceholder), Z(this.items, this.clsItem), Z(document.documentElement, this.clsDragState), j(this.$el, "start", [this, this.placeholder]), Qh(this.pos), this.move(t);
        },
        move: id(function(t) {
          W(this.pos, ye(t)), !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t), this.$emit("move");
        }),
        end() {
          if (Se(document, ms, this.move), Se(document, xe, this.end), !this.drag)
            return;
          Zh();
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
    function Zh() {
      clearInterval(Na);
    }
    function td(t, e) {
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
      }), Ht(n.firstElementChild, Ht(e.firstElementChild)), n;
    }
    function ed(t, e) {
      return t[A(t, (n) => fs(e, D(n)))];
    }
    function nd(t, e, n, o, l, c) {
      if (!ut(t).length)
        return;
      const d = D(e);
      if (!c)
        return sd(t, n) || l < d.top + d.height / 2 ? e : e.nextElementSibling;
      const p = D(n), m = Da(
        [d.top, d.bottom],
        [p.top, p.bottom]
      ), [y, x, T, I] = m ? [o, "width", "left", "right"] : [l, "height", "top", "bottom"], F = p[x] < d[x] ? d[x] - p[x] : 0;
      return p[T] < d[T] ? F && y < d[T] + F ? !1 : e.nextElementSibling : F && y > d[I] - F ? !1 : e;
    }
    function sd(t, e) {
      const n = ut(t).length === 1;
      n && Tt(t, e);
      const o = ut(t), l = o.some((c, d) => {
        const p = D(c);
        return o.slice(d + 1).some((m) => {
          const y = D(m);
          return !Da([p.left, p.right], [y.left, y.right]);
        });
      });
      return n && Zt(e), l;
    }
    function Da(t, e) {
      return t[1] > e[0] && e[1] > t[0];
    }
    function id(t) {
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
          const d = Ua(t), p = D(t);
          w(t, { top: -p.height, left: -p.width }), Cr(t, e, {
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
    function Ua(t) {
      const e = Pe(t), { scrollTop: n } = e;
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
          const n = N(this.$el, "title"), o = V(this.$el, ["blur", an], (c) => !ue(c) && this.hide());
          this.reset = () => {
            N(this.$el, { title: n, "aria-describedby": null }), o();
          };
          const l = We(this);
          N(this.$el, { title: null, "aria-describedby": l }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, l), t);
        },
        async hide() {
          var t;
          st(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), (t = this.reset) == null || t.call(this), Zt(this.tooltip), this.tooltip = null);
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
            const [c, d] = ad(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? `${Es(c)}-${d}` : `${d}-${Es(c)}`;
            const p = [
              kt(
                document,
                `keydown ${ae}`,
                this.hide,
                !1,
                (m) => m.type === ae && !this.$el.contains(m.target) || m.type === "keydown" && m.keyCode === ct.ESC
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
        [`focus ${je} ${ae}`](t) {
          (!ue(t) || t.type === ae) && document.readyState !== "loading" && this.show();
        }
      }
    };
    function rd(t) {
      bs(t) || N(t, "tabindex", "0");
    }
    function ad(t, e, [n, o]) {
      const l = nt(t), c = nt(e), d = [
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
      return ["delay", "title"].reduce((l, c) => ({ [c]: Nt(e, c), ...l }), {
        ...dn(Nt(e, n), ["title"]),
        ...o
      });
    }
    var cd = {
      mixins: [Fs],
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
          st(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
        },
        drop(t) {
          Hs(t);
          const e = t.dataTransfer;
          e != null && e.files && (rt(this.$el, this.clsDragover), this.upload(e.files));
        },
        dragenter(t) {
          Hs(t);
        },
        dragover(t) {
          Hs(t), Z(this.$el, this.clsDragover);
        },
        dragleave(t) {
          Hs(t), rt(this.$el, this.clsDragover);
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
            if (this.allow && !Ma(this.allow, o.name)) {
              this.fail(this.t("invalidName", this.allow));
              return;
            }
            if (this.mime && !Ma(this.mime, o.type)) {
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
    function Ma(t, e) {
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
    function Hs(t) {
      t.preventDefault(), t.stopPropagation();
    }
    async function hd(t, e) {
      const n = {
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: at,
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
    var fd = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Countdown: Tu,
      Filter: zu,
      Lightbox: Rh,
      LightboxPanel: ma,
      Notification: Bh,
      Parallax: Hh,
      Slider: Jh,
      SliderParallax: Ia,
      Slideshow: Xh,
      SlideshowParallax: Ia,
      Sortable: Yh,
      Tooltip: od,
      Upload: cd
    });
    function pd(t) {
      De && window.MutationObserver && (document.body ? requestAnimationFrame(() => La(t)) : new MutationObserver((e, n) => {
        document.body && (La(t), n.disconnect());
      }).observe(document.documentElement, { childList: !0 }));
    }
    function La(t) {
      j(document, "uikit:init", t), document.body && Te(document.body, za), new MutationObserver(md).observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0
      }), t._initialized = !0;
    }
    function md(t) {
      var e;
      for (const { addedNodes: n, removedNodes: o, target: l, attributeName: c } of t) {
        for (const p of n)
          Te(p, za);
        for (const p of o)
          Te(p, gd);
        const d = c && Ha(c);
        d && ($e(l, c) ? Vn(d, l) : (e = Ns(l, d)) == null || e.$destroy());
      }
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
    function gd(t) {
      const e = Jn(t);
      for (const n in e)
        oo(e[n]);
    }
    function Ha(t) {
      v(t, "data-") && (t = t.slice(5));
      const e = mn[t];
      return e && (e.options || e).name;
    }
    Sh(ne), _h(ne);
    var qa = {
      mixins: [qt, ze],
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
            qs(e, !n);
          }
          this.$emit();
        }
      },
      observe: Is(),
      events: [
        {
          name: "click keydown",
          delegate: ({ targets: t, $props: e }) => `${t} ${e.toggle}`,
          async handler(t) {
            var e;
            t.type === "keydown" && t.keyCode !== ct.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = bd(t.target), await this.toggle(we(this.toggles, t.current)), this._off());
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
                    qs(J(this.content, c), !d);
                    return;
                  }
                  return vd(c, d, this);
                })
              )
            );
        }
      }
    };
    function qs(t, e) {
      t && (t.hidden = e);
    }
    async function vd(t, e, { content: n, duration: o, velocity: l, transition: c }) {
      var d;
      n = ((d = t._wrapper) == null ? void 0 : d.firstElementChild) || J(n, t), t._wrapper || (t._wrapper = Ss(n, "<div>"));
      const p = t._wrapper;
      w(p, "overflow", "hidden");
      const m = Y(w(p, "height"));
      await ht.cancel(p), qs(n, !1);
      const y = Fe(["marginTop", "marginBottom"], (T) => w(n, T)) + D(n).height, x = m / y;
      o = (l * y + o) * (e ? 1 - x : x), w(p, "height", m), await ht.start(p, { height: e ? y : 0 }, o, c), Fn(n), delete t._wrapper, e || qs(n, !0);
    }
    function bd(t) {
      const e = Pe(t, !0);
      let n;
      return function o() {
        n = requestAnimationFrame(() => {
          const { top: l } = D(t);
          l < 0 && (e.scrollTop += l), o();
        });
      }(), () => requestAnimationFrame(() => cancelAnimationFrame(n));
    }
    var wd = {
      mixins: [qt, ze],
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
        this.autoplay === "inview" && !$e(this.$el, "preload") && (this.$el.preload = "none"), $t(this.$el, "iframe") && !$e(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && ($t(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = !0), this.automute && xr(this.$el);
      },
      events: [
        {
          name: `${je} focusin`,
          filter: ({ autoplay: t }) => S(t, "hover"),
          handler(t) {
            !ue(t) || !kd(this.$el) ? Di(this.$el) : Cs(this.$el);
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
          filter: ({ autoplay: t }) => t !== "hover",
          handler([{ isIntersecting: t }]) {
            document.fullscreenElement || (t ? this.autoplay && Di(this.$el) : Cs(this.$el));
          },
          args: { intersecting: !1 },
          options: ({ $el: t, autoplay: e }) => ({
            root: e === "inview" ? null : lt(t).closest(":not(a)")
          })
        })
      ]
    };
    function kd(t) {
      return !t.paused && !t.ended;
    }
    var $d = {
      mixins: [Wa],
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
        target: ({ $el: t }) => Va(t) || lt(t),
        filter: ({ useObjectFit: t }) => !t
      }),
      update: {
        read() {
          if (this.useObjectFit)
            return !1;
          const { ratio: t, cover: e } = yi, { $el: n, width: o, height: l } = this;
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
    let Dt;
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
        Z(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = Sd(this)), this._style = bi(this.$el.style, ["width", "height"]);
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
            t.preventDefault(), st(this.$el, ":focus,:hover") || this.hide();
          }
        },
        {
          name: `${je} focusin`,
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
              _d(this),
              Ed(this),
              Td(this),
              this.autoUpdate && Ka(this),
              this.closeOnScroll && Od(this)
            ];
            kt(this.$el, "hide", () => t.forEach((e) => e && e()), {
              self: !0
            }), this.bgScroll || kt(this.$el, "hidden", Kr(this.$el), { self: !0 });
          }
        },
        {
          name: "beforehide",
          self: !0,
          handler() {
            this.clearTimers();
          }
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
                this.showTimer = setTimeout(() => st(t, ":hover") && this.show(), 10);
                return;
              }
              let n;
              for (; Dt && n !== Dt && !Dt.$el.contains(this.$el); )
                n = Dt, Dt.hide(!1, !1);
            }
            this.container && lt(this.$el) !== this.container && Tt(this.container, this.$el), this.showTimer = setTimeout(
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
          const t = Ua(this.$el);
          rt(this.$el, "uk-drop-stack"), w(this.$el, this._style), this.$el.hidden = !0;
          const e = this.target.map((c) => xd(this.$el, c)), n = this.getViewportOffset(this.$el), o = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]]
          ];
          for (const [c, [d, p]] of o)
            this.axis !== d && S([d, !0], this.stretch) && w(this.$el, {
              [p]: Math.min(
                nt(this.boundary[c])[p],
                e[c][p] - 2 * n
              ),
              [`overflow-${d}`]: "auto"
            });
          const l = e[0].width - 2 * n;
          this.$el.hidden = !1, w(this.$el, "maxWidth", ""), this.$el.offsetWidth > l && Z(this.$el, "uk-drop-stack"), w(this.$el, "maxWidth", l), this.positionAt(this.$el, this.target, this.boundary);
          for (const [c, [d, p, m, y]] of o)
            if (this.axis === d && S([d, !0], this.stretch)) {
              const x = Math.abs(this.getPositionOffset()), T = nt(this.target[c]), I = nt(this.$el);
              w(this.$el, {
                [p]: (T[m] > I[m] ? T[this.inset ? y : m] - Math.max(
                  nt(this.boundary[c])[m],
                  e[c][m] + n
                ) : Math.min(
                  nt(this.boundary[c])[y],
                  e[c][y] - n
                ) - T[this.inset ? m : y]) - x,
                [`overflow-${d}`]: "auto"
              }), this.positionAt(this.$el, this.target, this.boundary);
            }
          t();
        }
      }
    };
    function xd(t, e) {
      return te(Le(e).find((n) => n.contains(t)));
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
        Fi(e),
        jn(Le(t.$el).concat(t.target), e)
      ];
      return () => n.map((o) => o.disconnect());
    }
    function Ka(t, e = () => t.$emit()) {
      return V([document, ...Le(t.$el)], "scroll", e, {
        passive: !0
      });
    }
    function Ed(t) {
      return V(document, "keydown", (e) => {
        e.keyCode === ct.ESC && t.hide(!1);
      });
    }
    function Od(t) {
      return Ka(t, () => t.hide(!1));
    }
    function Td(t) {
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
    var Ga = {
      mixins: [qt, Hn],
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
            o === ct.DOWN && (l == null ? void 0 : l.targetEl) === n && (t.preventDefault(), (e = J(Cn, l.$el)) == null || e.focus()), Xa(t, this.items, l);
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
            if (o === ct.HOME ? d = 0 : o === ct.END ? d = "last" : o === ct.UP ? d = "previous" : o === ct.DOWN ? d = "next" : o === ct.ESC && ((e = c.targetEl) == null || e.focus()), ~d) {
              t.preventDefault();
              const p = ft(Cn, n);
              p[Qt(
                d,
                p,
                A(p, (m) => st(m, ":focus"))
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
            t && S(t.mode, "hover") && !this.dropdowns.some((e) => st(e, ":hover")) && t.hide();
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
                ...An(t, `.${this.clsDrop}`).concat(t).map((l) => nt(l).bottom)
              );
              nt(this.dropbar, {
                left: nt(this.dropbar).left,
                top: this.getDropbarOffset(e.getPositionOffset())
              }), this.transitionTo(
                o - nt(this.dropbar).top + Y(w(t, "marginBottom")),
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
            st(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && S(e.mode, "hover") && e.isDelayedHide && !this.items.some((n) => e.targetEl !== n && st(n, ":focus")) && t.preventDefault();
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
          const { dropbar: n } = this, o = Ht(n);
          if (e = o < t && e, await ht.cancel([e, n]), e) {
            const l = nt(e).top - nt(n).top - o;
            l > 0 && w(e, "transitionDelay", `${l / t * this.duration}ms`);
          }
          w(e, "clipPath", `polygon(0 0,100% 0,100% ${o}px,0 ${o}px)`), Ht(n, o), await Promise.all([
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
          const { $el: e, target: n, targetY: o } = this, { top: l, height: c } = nt(Lt(o || n || e, e));
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
      p === ct.HOME ? m = 0 : p === ct.END ? m = "last" : p === ct.LEFT ? m = "previous" : p === ct.RIGHT ? m = "next" : p === ct.TAB && ((o = n.targetEl) == null || o.focus(), (l = n.hide) == null || l.call(n, !1)), ~m && (t.preventDefault(), (c = n.hide) == null || c.call(n, !1), e[Qt(m, e, e.indexOf(n.targetEl || d))].focus());
    }
    var Cd = {
      mixins: [qt],
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
          return t && (t === !0 && lt(this.input) === e && this.input.nextElementSibling || J(t, e));
        }
      },
      update() {
        var t;
        const { target: e, input: n } = this;
        if (!e)
          return;
        let o;
        const l = vs(e) ? "value" : "textContent", c = e[l], d = (t = n.files) != null && t[0] ? n.files[0].name : st(n, "select") && (o = ft("option", n).filter((p) => p.selected)[0]) ? o.textContent : n.value;
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
      mixins: [qt],
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
            if (o = Math.max(0, Bt(o)), !(n || o || l) || Ya(e) || e[0].some(
              (H, tt) => e.some((it) => it[tt] && it[tt].offsetWidth !== H.offsetWidth)
            ))
              return t.translates = t.scrollColumns = !1;
            let d = Rd(e, c), p, m;
            n ? [p, m] = Ad(e, d, n === "next") : p = Id(e);
            const y = p.map(
              (H) => Fe(H, "offsetHeight") + d * (H.length - 1)
            ), x = Math.max(0, ...y);
            let T, I, F;
            return (o || l) && (T = y.map(
              (H, tt) => l ? x - H + o : o / (tt % 2 || 8)
            ), l || (o = Math.max(
              ...y.map((H, tt) => H + T[tt] - x)
            )), I = Bt(this.parallaxStart, "height", this.$el, !0), F = Bt(this.parallaxEnd, "height", this.$el, !0)), {
              columns: p,
              translates: m,
              scrollColumns: T,
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
              scrolled: e && !Ya(t) ? Ps(this.$el, n, o) : !1
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
    function Ad(t, e, n) {
      const o = [], l = [], c = Array(t[0].length).fill(0);
      let d = 0;
      for (let p of t) {
        Rt && p.reverse();
        let m = 0;
        for (const y in p) {
          const { offsetWidth: x, offsetHeight: T } = p[y], I = n ? y : c.indexOf(Math.min(...c));
          lo(o, I, p[y]), lo(l, I, [
            (I - y) * x * (Rt ? -1 : 1),
            c[I] - d
          ]), c[I] += T + e, m = Math.max(m, T);
        }
        d += m + e;
      }
      return [o, l];
    }
    function Rd(t, e) {
      const n = t.flat().find((o) => q(o, e));
      return Y(n ? w(n, "marginTop") : w(t[0][0], "paddingLeft"));
    }
    function Id(t) {
      const e = [];
      for (const n of t)
        for (const o in n)
          lo(e, o, n[o]);
      return e;
    }
    function lo(t, e, n) {
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
            rows: (this.row ? Gi(this.elements) : [this.elements]).map(Fd)
          };
        },
        write({ rows: t }) {
          for (const { heights: e, elements: n } of t)
            n.forEach((o, l) => w(o, "minHeight", e[l]));
        },
        events: ["resize"]
      }
    };
    function Fd(t) {
      if (t.length < 2)
        return { heights: [""], elements: t };
      let e = t.map(Nd);
      const n = Math.max(...e);
      return {
        heights: t.map((o, l) => e[l].toFixed(2) === n.toFixed(2) ? "" : n),
        elements: t
      };
    }
    function Nd(t) {
      const e = bi(t.style, ["display", "minHeight"]);
      Ot(t) || w(t, "display", "block", "important"), w(t, "minHeight", "");
      const n = D(t).height - un(t, "height", "content-box");
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
        Ki({ filter: ({ expand: t }) => t }),
        le({ target: ({ $el: t }) => Me(t) })
      ],
      update: {
        read() {
          if (!Ot(this.$el))
            return !1;
          let t = "";
          const e = un(this.$el, "height", "content-box"), { body: n, scrollingElement: o } = document, l = Pe(this.$el), { height: c } = te(
            l === n ? o : l
          ), d = o === l || n === l;
          if (t = `calc(${d ? "100vh" : `${c}px`}`, this.expand) {
            const p = D(l).height - D(this.$el).height;
            t += ` - ${p}px`;
          } else {
            if (this.offsetTop)
              if (d) {
                const p = this.offsetTop === !0 ? this.$el : Lt(this.offsetTop, this.$el), { top: m } = nt(p);
                t += m > 0 && m < c / 2 ? ` - ${m}px` : "";
              } else
                t += ` - ${un(l, "height", w(l, "boxSizing"))}px`;
            this.offsetBottom === !0 ? t += ` - ${D(this.$el.nextElementSibling).height}px` : pe(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && P(this.offsetBottom, "px") ? t += ` - ${Y(this.offsetBottom)}px` : yt(this.offsetBottom) && (t += ` - ${D(Lt(this.offsetBottom, this.$el)).height}px`);
          }
          return t += `${e ? ` - ${e}px` : ""})`, { minHeight: t };
        },
        write({ minHeight: t }) {
          w(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"]
      }
    }, Ud = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', Md = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', Ld = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', zd = '<svg width="20" height="20" viewBox="0 0 20 20"><rect width="1" height="11" x="9" y="4"/><rect width="11" height="1" x="4" y="9"/></svg>', Hd = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', qd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Wd = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Vd = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1"/><rect width="20" height="2" y="9" class="line-2"/><rect width="20" height="2" y="9" class="line-3"/><rect width="20" height="2" y="15" class="line-4"/></svg>', Jd = '<svg width="40" height="40" viewBox="0 0 40 40"><rect width="1" height="40" x="19" y="0"/><rect width="40" height="1" x="0" y="19"/></svg>', Kd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', Gd = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Qa = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', Xd = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', Yd = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', Qd = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', Zd = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', tf = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', ef = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', nf = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', sf = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>', Za = {
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
          return this.svgEl && e !== this.svgEl && Zt(this.svgEl), rf.call(this, e, t), this.svgEl = e;
        }, at);
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected || (ki(this.$el) && (this.$el.hidden = !1), Zt(t), this.svgEl = null);
        }), this.svg = null;
      },
      methods: {
        async getSvg() {
        }
      }
    };
    function of(t, e) {
      if (ki(e) || $t(e, "canvas")) {
        e.hidden = !0;
        const o = e.nextElementSibling;
        return tl(t, o) ? o : $s(e, t);
      }
      const n = e.lastElementChild;
      return tl(t, n) ? n : Tt(e, t);
    }
    function tl(t, e) {
      return $t(t, "svg") && $t(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function rf(t, e) {
      const n = ["width", "height"];
      let o = n.map((c) => this[c]);
      o.some((c) => c) || (o = n.map((c) => N(e, c)));
      const l = N(e, "viewBox");
      l && !o.some((c) => c) && (o = l.split(" ").slice(2)), o.forEach((c, d) => N(t, n[d], Y(c) * this.ratio || null));
    }
    function el(t, e) {
      return e && S(t, "<symbol") && (t = af(t)[e] || t), et(Oe(t)).filter(zt)[0];
    }
    const nl = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, af = re(function(t) {
      const e = {};
      nl.lastIndex = 0;
      let n;
      for (; n = nl.exec(t); )
        e[n[3]] = `<svg ${n[1]}svg>`;
      return e;
    }), Ws = {
      spinner: nf,
      totop: sf,
      marker: zd,
      "close-icon": Ud,
      "close-large": Md,
      "drop-parent-icon": Ld,
      "nav-parent-icon": qd,
      "nav-parent-icon-large": Hd,
      "navbar-parent-icon": Wd,
      "navbar-toggle-icon": Vd,
      "overlay-icon": Jd,
      "pagination-next": Kd,
      "pagination-previous": Gd,
      "search-icon": Qa,
      "search-medium": Yd,
      "search-large": Xd,
      "search-toggle-icon": Qa,
      "slidenav-next": Zd,
      "slidenav-next-large": Qd,
      "slidenav-previous": ef,
      "slidenav-previous-large": tf
    }, co = {
      install: vf,
      mixins: [Za],
      args: "icon",
      props: { icon: String },
      isIcon: !0,
      beforeConnect() {
        Z(this.$el, "uk-icon");
      },
      methods: {
        async getSvg() {
          const t = wf(this.icon);
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
    }, lf = {
      extends: Je,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      }
    }, cf = {
      extends: Je,
      mixins: [Fs],
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
    }, uf = {
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
      mixins: [Fs],
      beforeConnect() {
        const t = this.$el.closest("a,button");
        N(t, "role", this.role !== null && $t(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !$e(t, "aria-label") && N(t, "aria-label", e);
      }
    }, sl = {
      extends: Ke,
      beforeConnect() {
        Z(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = q(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      }
    }, hf = {
      extends: Ke,
      i18n: { label: "Open menu" }
    }, df = {
      extends: Ke,
      i18n: { label: "Close" },
      beforeConnect() {
        this.icon = `close-${q(this.$el, "uk-close-large") ? "large" : "icon"}`;
      }
    }, ff = {
      extends: Ke,
      i18n: { label: "Open" }
    }, pf = {
      extends: Ke,
      i18n: { label: "Back to top" }
    }, mf = {
      extends: Ke,
      i18n: { label: "Next page" },
      data: { role: null }
    }, gf = {
      extends: Ke,
      i18n: { label: "Previous page" },
      data: { role: null }
    }, Vs = {};
    function vf(t) {
      t.icon.add = (e, n) => {
        const o = yt(e) ? { [e]: n } : e;
        sn(o, (l, c) => {
          Ws[c] = l, delete Vs[c];
        }), t._initialized && Te(
          document.body,
          (l) => sn(t.getComponents(l), (c) => {
            c.$options.isIcon && c.icon in o && c.$reset();
          })
        );
      };
    }
    const bf = { twitter: "x" };
    function wf(t) {
      return t = bf[t] || t, Ws[t] ? (Vs[t] || (Vs[t] = el(Ws[yf(t)] || Ws[t])), Vs[t].cloneNode(!0)) : null;
    }
    function yf(t) {
      return Rt ? vi(vi(t, "left", "right"), "previous", "next") : t;
    }
    var kf = {
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
          const t = ho(this.$el) ? this.$el : xf(this.$el, this.dataSrc, this.sources);
          return On(t, "loading"), uo(this.$el, t.currentSrc), this.img = t;
        }
      }
    };
    function uo(t, e) {
      if (ho(t)) {
        const n = lt(t);
        ($t(n, "picture") ? ut(n) : [t]).forEach((l) => il(l, l));
      } else e && !S(t.style.backgroundImage, e) && (w(t, "backgroundImage", `url(${_i(e)})`), j(t, cn("load", !1)));
    }
    const $f = ["data-src", "data-srcset", "sizes"];
    function il(t, e) {
      for (const n of $f) {
        const o = Nt(t, n);
        o && N(e, n.replace(/^(data-)+/, ""), o);
      }
    }
    function xf(t, e, n) {
      const o = new Image();
      return Sf(o, n), il(t, o), o.onload = () => {
        uo(t, o.currentSrc);
      }, N(o, "src", e), o;
    }
    function Sf(t, e) {
      if (e = _f(e), e.length) {
        const n = Oe("<picture>");
        for (const o of e) {
          const l = Oe("<source>");
          N(l, o), Tt(n, l);
        }
        Tt(n, t);
      }
    }
    function _f(t) {
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
      return C(t) || (t = [t]), t.filter((e) => !hs(e));
    }
    function ho(t) {
      return $t(t, "img");
    }
    var Ef = {
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
        Rs({
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
          for (const t of et(this.target)) {
            let e = !this.selActive || st(t, this.selActive) ? Of(t) : "";
            e !== !1 && ps(t, "uk-light uk-dark", e);
          }
        }
      }
    };
    function Of(t) {
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
          if (t.contains(x) || !Tf(x) || x.closest('[class*="-leave"]') && y.some((I) => x !== I && st(I, '[class*="-enter"]')))
            continue;
          const T = w(x, "--uk-inverse");
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
    function Tf(t) {
      if (w(t, "visibility") !== "visible")
        return !1;
      for (; t; ) {
        if (w(t, "opacity") === "0")
          return !1;
        t = lt(t);
      }
      return !0;
    }
    var Cf = {
      mixins: [qt, Ds],
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
        [this.wrapper] = Ai(this.$el, `<span class="${this.clsWrapper}">`);
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
    }, Pf = {
      install: Af,
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
            q(this.panel, "uk-margin-auto-vertical") ? Z(this.$el, "uk-flex") : w(this.$el, "display", "block"), Ht(this.$el);
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
    function Af({ modal: t }) {
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
          ({ i18n: l }) => `<div class="uk-modal-body">${yt(n) ? n : Ee(n)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${l.ok}</button> </div>`,
          o
        );
      }, t.confirm = function(n, o) {
        return e(
          ({ i18n: l }) => `<form> <div class="uk-modal-body">${yt(n) ? n : Ee(n)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${l.ok}</button> </div> </form>`,
          o,
          () => Promise.reject()
        );
      }, t.prompt = function(n, o, l) {
        const c = e(
          ({ i18n: m }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${yt(n) ? n : Ee(n)}</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${m.cancel}</button> <button class="uk-button uk-button-primary">${m.ok}</button> </div> </form>`,
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
    var Rf = {
      extends: qa,
      data: {
        targets: "> .uk-parent",
        toggle: "> a",
        content: "> ul"
      }
    };
    const fo = "uk-navbar-transparent";
    var If = {
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
          async handler(t) {
            lt(t.target) === this.dropContainer && (await Bf(), !this.getActive() && this._transparent && (Z(this.navbarContainer, fo), this._transparent = null));
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
          const { top: e, height: n } = nt(this.navbarContainer);
          return e + (this.dropbarTransparentMode === "behind" ? 0 : n + t);
        }
      }
    };
    function Bf() {
      return new Promise((t) => setTimeout(t));
    }
    var Ff = {
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
          return t === "reveal" ? lt(this.panel) : this.panel;
        }
      },
      observe: jr({ filter: ({ swiping: t }) => t }),
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
            this.mode === "reveal" && !q(lt(this.panel), this.clsMode) && Z(Ss(this.panel, "<div>"), this.clsMode);
            const { body: t, scrollingElement: e } = document;
            Z(t, this.clsContainer, this.clsFlip), w(t, "touchAction", "pan-y pinch-zoom"), w(this.$el, "display", "block"), w(this.panel, "maxWidth", e.clientWidth), Z(this.$el, this.clsOverlay), Z(
              this.panel,
              this.clsSidebarAnimation,
              this.mode === "reveal" ? "" : this.clsMode
            ), Ht(t), Z(t, this.clsContainerAnimation), this.clsContainerAnimation && Nf();
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
            this.clsContainerAnimation && Df(), this.mode === "reveal" && q(lt(this.panel), this.clsMode) && Fn(this.panel), rt(this.panel, this.clsSidebarAnimation, this.clsMode), rt(this.$el, this.clsOverlay), w(this.$el, "display", ""), w(this.panel, "maxWidth", ""), rt(document.body, this.clsContainer, this.clsFlip);
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
    function Nf() {
      ol().content += ",user-scalable=0";
    }
    function Df() {
      const t = ol();
      t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function ol() {
      return J('meta[name="viewport"]', document.head) || Tt(document.head, '<meta name="viewport">');
    }
    var jf = {
      mixins: [qt],
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
              Ht(this.container) - (D(this.content).height - Ht(this.$el))
            )
          };
        },
        write({ max: t }) {
          w(this.$el, { minHeight: this.minHeight, maxHeight: t });
        },
        events: ["resize"]
      }
    }, Uf = {
      props: ["width", "height"],
      connected() {
        Z(this.$el, "uk-responsive-width"), w(this.$el, "aspectRatio", `${this.width}/${this.height}`);
      }
    }, Mf = {
      props: {
        offset: Number
      },
      data: {
        offset: 0
      },
      connected() {
        Lf(this);
      },
      disconnected() {
        zf(this);
      },
      methods: {
        async scrollTo(t) {
          t = t && J(t) || document.body, j(this.$el, "beforescroll", [this, t]) && (await Or(t, { offset: this.offset }), j(this.$el, "scrolled", [this, t]));
        }
      }
    };
    const Qn = /* @__PURE__ */ new Set();
    function Lf(t) {
      Qn.size || V(document, "click", rl), Qn.add(t);
    }
    function zf(t) {
      Qn.delete(t), Qn.size || Se(document, "click", rl);
    }
    function rl(t) {
      if (!t.defaultPrevented)
        for (const e of Qn)
          e.$el.contains(t.target) && ln(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo($i(e.$el)));
    }
    const po = "uk-scrollspy-inview";
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
            const t = this.links.map((m) => $i(m)).filter(Boolean), { length: e } = t;
            if (!e || !Ot(this.$el))
              return !1;
            const n = Pe(t, !0), { scrollTop: o, scrollHeight: l } = n, c = te(n), d = l - c.height;
            let p = !1;
            if (o >= d)
              p = e - 1;
            else {
              const m = this.offset + D(zi()).height + c.height * 0.1;
              for (let y = 0; y < t.length && !(nt(t[y]).top - c.top - m > 0); y++)
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
    }, Wf = {
      mixins: [qt, Ds],
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
        this.start = al(this.start || this.top), this.end = al(this.end || this.bottom), this.placeholder = J("+ .uk-sticky-placeholder", this.$el) || J('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
      },
      beforeDisconnect() {
        this.isFixed && (this.hide(), rt(this.target, this.clsInactive)), ll(this.$el), Zt(this.placeholder), this.placeholder = null;
      },
      observe: [
        Ki(),
        Ln({ target: () => document.scrollingElement }),
        le({
          target: ({ $el: t }) => [t, Js(t), document.scrollingElement],
          handler(t) {
            this.$emit(
              this._data.resized && t.some(({ target: e }) => e === Js(this.$el)) ? "update" : "resize"
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
              const e = nt(J(location.hash)), n = nt(this.$el);
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
            const c = Ht(window), d = Math.max(
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
            let T = Bt(this.offset, "height", o ? this.$el : x);
            y === "bottom" && (t < c || this.overflowFlip) && (T += c - t);
            const I = this.overflowFlip ? 0 : Math.max(0, t + T - m), F = nt(x).top - // offset possible `transform: translateY` animation 'uk-animation-slide-top' while hiding
            new DOMMatrix(w(x, "transform")).m42, H = D(this.$el).height, tt = (this.start === !1 ? F : mo(this.start, this.$el, F)) - T, it = this.end === !1 ? d : Math.min(
              d,
              mo(this.end, this.$el, F + t, !0) - H - T + I
            );
            return o = !this.showOnUp && tt + T === F && it === Math.min(
              d,
              mo(!0, this.$el, 0, !0) - H - T + I
            ) && w(Js(this.$el), "overflowY") !== "hidden", {
              start: tt,
              end: it,
              offset: T,
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
            if ((this.inactive || l || !this.isFixed) && ll(this.$el), this.inactive)
              return;
            l && (t = e = n = 0, w(this.$el, { position: "sticky", top: o }));
            const { placeholder: c } = this;
            w(c, { height: t, width: e, margin: n }), (lt(c) !== lt(this.$el) || l ^ we(c) < we(this.$el)) && ((l ? ks : $s)(this.$el, c), c.hidden = !0);
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
            const x = Math.min(document.scrollingElement.scrollTop, y), T = t <= x ? "down" : "up", I = this.isFixed ? this.placeholder : this.$el;
            return {
              dir: T,
              prevDir: e,
              scroll: x,
              prevScroll: t,
              below: x > nt(I).top + (m ? Math.min(p, d) : p),
              offsetParentTop: nt(I.offsetParent).top,
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
            const T = Date.now();
            if ((T - o > 300 || l !== c) && (t.initScroll = d, t.initTimestamp = T), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - d) <= 30 && Math.abs(p - d) <= 10))
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
            let T = "fixed";
            e > c && (d += c - p + o - n, T = "absolute"), w(this.$el, { position: T, width: t, marginTop: 0 }, "important");
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
      if (pe(t) || yt(t) && t.match(/^-?\d/))
        return n + Bt(t, "height", e, !0);
      {
        const l = t === !0 ? Js(e) : Lt(t, e);
        return nt(l).bottom - (o && (l != null && l.contains(e)) ? Y(w(l, "paddingBottom")) + Y(w(l, "borderBottomWidth")) : 0);
      }
    }
    function al(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function ll(t) {
      w(t, { position: "", top: "", marginTop: "", width: "" });
    }
    const go = "uk-transition-disable";
    function vo(t) {
      q(t, go) || (Z(t, go), requestAnimationFrame(() => rt(t, go)));
    }
    function Js(t) {
      for (; t = lt(t); )
        if (Ot(t))
          return t;
    }
    var Vf = {
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
        Rs({
          async handler() {
            const t = await this.svg;
            t && cl.call(this, t);
          },
          options: {
            attributes: !0,
            attributeFilter: ["id", "class", "style"]
          }
        })
      ],
      async connected() {
        S(this.src, "#") && ([this.src, this.icon] = this.src.split("#", 2));
        const t = await this.svg;
        t && (cl.call(this, t), this.strokeAnimation && Kf(t));
      },
      methods: {
        async getSvg() {
          return $t(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t) => kt(this.$el, "load", t)), el(await Jf(this.src), this.icon) || Promise.reject("SVG not found.");
        }
      }
    };
    function cl(t) {
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
    const Jf = re(async (t) => {
      if (t) {
        if (v(t, "data:"))
          return decodeURIComponent(t.split(",", 2)[1]);
        {
          const e = await fetch(t);
          if (e.headers.get("Content-Type") === "image/svg+xml")
            return e.text();
        }
      }
      return Promise.reject();
    });
    function Kf(t) {
      const e = va(t);
      e && w(t, "--uk-animation-stroke", e);
    }
    const bo = ".uk-disabled *, .uk-disabled, [disabled]";
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
        Is({ targets: ({ connectChildren: t }) => t }),
        jr({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })
      ],
      events: [
        {
          name: "click keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            !st(t.current, bo) && (t.type === "click" || t.keyCode === ct.SPACE) && (t.preventDefault(), this.show(t.current));
          }
        },
        {
          name: "keydown",
          delegate: ({ toggle: t }) => t,
          handler(t) {
            const { current: e, keyCode: n } = t, o = st(this.$el, this.selVertical);
            let l = n === ct.HOME ? 0 : n === ct.END ? "last" : n === ct.LEFT && !o || n === ct.UP && o ? "previous" : n === ct.RIGHT && !o || n === ct.DOWN && o ? "next" : -1;
            if (~l) {
              t.preventDefault();
              const c = this.toggles.filter((p) => !st(p, bo)), d = c[Qt(l, c, c.indexOf(e))];
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
        N(this.$el, "aria-orientation", st(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return A(this.children, (t) => q(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter((d) => !st(d, bo)), n = this.index(), o = Qt(
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
    }, Gf = {
      mixins: [qt],
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
        const t = q(this.$el, "uk-tab-left") ? "uk-tab-left" : q(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
        t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
      }
    };
    const Xf = 32;
    var Yf = {
      mixins: [Ds, ze],
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
      observe: Is({ targets: ({ target: t }) => t }),
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
          name: `mouseenter mouseleave ${je} ${an} focus blur`,
          filter: ({ mode: t }) => S(t, "hover"),
          handler(t) {
            if (ue(t) || this.$el.disabled || document.readyState === "loading")
              return;
            const e = S(["mouseenter", je, "focus"], t.type), n = this.isToggled(this.target);
            if (!e && (!oe(this._showState) || t.type !== "blur" && st(this.$el, ":focus") || t.type === "blur" && st(this.$el, ":hover"))) {
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
            t.keyCode === Xf && (t.preventDefault(), this.$el.click());
          }
        },
        {
          name: "click",
          filter: ({ mode: t }) => ["click", "hover"].some((e) => S(t, e)),
          handler(t) {
            let e;
            (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && st(this.target, e.hash))) && t.preventDefault(), !this._preventClick && S(this.mode, "click") && this.toggle();
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
    }, Qf = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Accordion: qa,
      Alert: wd,
      Close: df,
      Cover: $d,
      Drop: Ja,
      DropParentIcon: Je,
      Dropdown: Ja,
      Dropnav: Ga,
      FormCustom: Cd,
      Grid: Pd,
      HeightMatch: Bd,
      HeightPlaceholder: Dd,
      HeightViewport: jd,
      Icon: co,
      Img: kf,
      Inverse: Ef,
      Leader: Cf,
      Margin: Ur,
      Marker: ff,
      Modal: Pf,
      Nav: Rf,
      NavParentIcon: lf,
      Navbar: If,
      NavbarParentIcon: Je,
      NavbarToggleIcon: hf,
      Offcanvas: Ff,
      OverflowAuto: jf,
      OverlayIcon: Je,
      PaginationNext: mf,
      PaginationPrevious: gf,
      Responsive: Uf,
      Scroll: Mf,
      Scrollspy: Hf,
      ScrollspyNav: qf,
      SearchIcon: cf,
      SlidenavNext: sl,
      SlidenavPrevious: sl,
      Spinner: uf,
      Sticky: Wf,
      Svg: Vf,
      Switcher: ul,
      Tab: Gf,
      Toggle: Yf,
      Totop: pf,
      Video: Wa
    });
    return sn(Qf, (t, e) => ne.component(e, t)), pd(ne), sn(fd, (t, e) => ne.component(e, t)), ne;
  });
})(ql);
var hm = ql.exports;
const Wl = /* @__PURE__ */ um(hm);
function Vl(s, i) {
  return function() {
    return s.apply(i, arguments);
  };
}
const { toString: dm } = Object.prototype, { getPrototypeOf: Vo } = Object, ri = /* @__PURE__ */ ((s) => (i) => {
  const r = dm.call(i);
  return s[r] || (s[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), de = (s) => (s = s.toLowerCase(), (i) => ri(i) === s), ai = (s) => (i) => typeof i === s, { isArray: kn } = Array, ss = ai("undefined");
function fm(s) {
  return s !== null && !ss(s) && s.constructor !== null && !ss(s.constructor) && se(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const Jl = de("ArrayBuffer");
function pm(s) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(s) : i = s && s.buffer && Jl(s.buffer), i;
}
const mm = ai("string"), se = ai("function"), Kl = ai("number"), li = (s) => s !== null && typeof s == "object", gm = (s) => s === !0 || s === !1, Gs = (s) => {
  if (ri(s) !== "object")
    return !1;
  const i = Vo(s);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, vm = de("Date"), bm = de("File"), wm = de("Blob"), ym = de("FileList"), km = (s) => li(s) && se(s.pipe), $m = (s) => {
  let i;
  return s && (typeof FormData == "function" && s instanceof FormData || se(s.append) && ((i = ri(s)) === "formdata" || // detect form-data instance
  i === "object" && se(s.toString) && s.toString() === "[object FormData]"));
}, xm = de("URLSearchParams"), [Sm, _m, Em, Om] = ["ReadableStream", "Request", "Response", "Headers"].map(de), Tm = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function Gl(s, i) {
  i = i.toLowerCase();
  const r = Object.keys(s);
  let a = r.length, u;
  for (; a-- > 0; )
    if (u = r[a], i === u.toLowerCase())
      return u;
  return null;
}
const Xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xl = (s) => !ss(s) && s !== Xe;
function Co() {
  const { caseless: s } = Xl(this) && this || {}, i = {}, r = (a, u) => {
    const h = s && Gl(i, u) || u;
    Gs(i[h]) && Gs(a) ? i[h] = Co(i[h], a) : Gs(a) ? i[h] = Co({}, a) : kn(a) ? i[h] = a.slice() : i[h] = a;
  };
  for (let a = 0, u = arguments.length; a < u; a++)
    arguments[a] && as(arguments[a], r);
  return i;
}
const Cm = (s, i, r, { allOwnKeys: a } = {}) => (as(i, (u, h) => {
  r && se(u) ? s[h] = Vl(u, r) : s[h] = u;
}, { allOwnKeys: a }), s), Pm = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), Am = (s, i, r, a) => {
  s.prototype = Object.create(i.prototype, a), s.prototype.constructor = s, Object.defineProperty(s, "super", {
    value: i.prototype
  }), r && Object.assign(s.prototype, r);
}, Rm = (s, i, r, a) => {
  let u, h, f;
  const g = {};
  if (i = i || {}, s == null) return i;
  do {
    for (u = Object.getOwnPropertyNames(s), h = u.length; h-- > 0; )
      f = u[h], (!a || a(f, s, i)) && !g[f] && (i[f] = s[f], g[f] = !0);
    s = r !== !1 && Vo(s);
  } while (s && (!r || r(s, i)) && s !== Object.prototype);
  return i;
}, Im = (s, i, r) => {
  s = String(s), (r === void 0 || r > s.length) && (r = s.length), r -= i.length;
  const a = s.indexOf(i, r);
  return a !== -1 && a === r;
}, Bm = (s) => {
  if (!s) return null;
  if (kn(s)) return s;
  let i = s.length;
  if (!Kl(i)) return null;
  const r = new Array(i);
  for (; i-- > 0; )
    r[i] = s[i];
  return r;
}, Fm = /* @__PURE__ */ ((s) => (i) => s && i instanceof s)(typeof Uint8Array < "u" && Vo(Uint8Array)), Nm = (s, i) => {
  const r = (s && s[Symbol.iterator]).call(s);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const u = a.value;
    i.call(s, u[0], u[1]);
  }
}, Dm = (s, i) => {
  let r;
  const a = [];
  for (; (r = s.exec(i)) !== null; )
    a.push(r);
  return a;
}, jm = de("HTMLFormElement"), Um = (s) => s.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, r, a) {
    return r.toUpperCase() + a;
  }
), ml = (({ hasOwnProperty: s }) => (i, r) => s.call(i, r))(Object.prototype), Mm = de("RegExp"), Yl = (s, i) => {
  const r = Object.getOwnPropertyDescriptors(s), a = {};
  as(r, (u, h) => {
    let f;
    (f = i(u, h, s)) !== !1 && (a[h] = f || u);
  }), Object.defineProperties(s, a);
}, Lm = (s) => {
  Yl(s, (i, r) => {
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
}, zm = (s, i) => {
  const r = {}, a = (u) => {
    u.forEach((h) => {
      r[h] = !0;
    });
  };
  return kn(s) ? a(s) : a(String(s).split(i)), r;
}, Hm = () => {
}, qm = (s, i) => s != null && Number.isFinite(s = +s) ? s : i, yo = "abcdefghijklmnopqrstuvwxyz", gl = "0123456789", Ql = {
  DIGIT: gl,
  ALPHA: yo,
  ALPHA_DIGIT: yo + yo.toUpperCase() + gl
}, Wm = (s = 16, i = Ql.ALPHA_DIGIT) => {
  let r = "";
  const { length: a } = i;
  for (; s--; )
    r += i[Math.random() * a | 0];
  return r;
};
function Vm(s) {
  return !!(s && se(s.append) && s[Symbol.toStringTag] === "FormData" && s[Symbol.iterator]);
}
const Jm = (s) => {
  const i = new Array(10), r = (a, u) => {
    if (li(a)) {
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
}, Km = de("AsyncFunction"), Gm = (s) => s && (li(s) || se(s)) && se(s.then) && se(s.catch), Zl = ((s, i) => s ? setImmediate : i ? ((r, a) => (Xe.addEventListener("message", ({ source: u, data: h }) => {
  u === Xe && h === r && a.length && a.shift()();
}, !1), (u) => {
  a.push(u), Xe.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  se(Xe.postMessage)
), Xm = typeof queueMicrotask < "u" ? queueMicrotask.bind(Xe) : typeof process < "u" && process.nextTick || Zl, _ = {
  isArray: kn,
  isArrayBuffer: Jl,
  isBuffer: fm,
  isFormData: $m,
  isArrayBufferView: pm,
  isString: mm,
  isNumber: Kl,
  isBoolean: gm,
  isObject: li,
  isPlainObject: Gs,
  isReadableStream: Sm,
  isRequest: _m,
  isResponse: Em,
  isHeaders: Om,
  isUndefined: ss,
  isDate: vm,
  isFile: bm,
  isBlob: wm,
  isRegExp: Mm,
  isFunction: se,
  isStream: km,
  isURLSearchParams: xm,
  isTypedArray: Fm,
  isFileList: ym,
  forEach: as,
  merge: Co,
  extend: Cm,
  trim: Tm,
  stripBOM: Pm,
  inherits: Am,
  toFlatObject: Rm,
  kindOf: ri,
  kindOfTest: de,
  endsWith: Im,
  toArray: Bm,
  forEachEntry: Nm,
  matchAll: Dm,
  isHTMLForm: jm,
  hasOwnProperty: ml,
  hasOwnProp: ml,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Yl,
  freezeMethods: Lm,
  toObjectSet: zm,
  toCamelCase: Um,
  noop: Hm,
  toFiniteNumber: qm,
  findKey: Gl,
  global: Xe,
  isContextDefined: Xl,
  ALPHABET: Ql,
  generateString: Wm,
  isSpecCompliantForm: Vm,
  toJSONObject: Jm,
  isAsyncFn: Km,
  isThenable: Gm,
  setImmediate: Zl,
  asap: Xm
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
const tc = K.prototype, ec = {};
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
  ec[s] = { value: s };
});
Object.defineProperties(K, ec);
Object.defineProperty(tc, "isAxiosError", { value: !0 });
K.from = (s, i, r, a, u, h) => {
  const f = Object.create(tc);
  return _.toFlatObject(s, f, function(g) {
    return g !== Error.prototype;
  }, (g) => g !== "isAxiosError"), K.call(f, s.message, i, r, a, u), f.cause = s, f.name = s.name, h && Object.assign(f, h), f;
};
const Ym = null;
function Po(s) {
  return _.isPlainObject(s) || _.isArray(s);
}
function nc(s) {
  return _.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function vl(s, i, r) {
  return s ? s.concat(i).map(function(a, u) {
    return a = nc(a), !r && u ? "[" + a + "]" : a;
  }).join(r ? "." : "") : i;
}
function Qm(s) {
  return _.isArray(s) && !s.some(Po);
}
const Zm = _.toFlatObject(_, {}, null, function(s) {
  return /^is[A-Z]/.test(s);
});
function ci(s, i, r) {
  if (!_.isObject(s))
    throw new TypeError("target must be an object");
  i = i || new FormData(), r = _.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, C) {
    return !_.isUndefined(C[A]);
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
  function b(A, C, O) {
    let W = A;
    if (A && !O && typeof A == "object") {
      if (_.endsWith(C, "{}"))
        C = a ? C : C.slice(0, -2), A = JSON.stringify(A);
      else if (_.isArray(A) && Qm(A) || (_.isFileList(A) || _.endsWith(C, "[]")) && (W = _.toArray(A)))
        return C = nc(C), W.forEach(function(L, M) {
          !(_.isUndefined(L) || L === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? vl([C], M, h) : f === null ? C : C + "[]",
            $(L)
          );
        }), !1;
    }
    return Po(A) ? !0 : (i.append(vl(O, C, h), $(A)), !1);
  }
  const v = [], P = Object.assign(Zm, {
    defaultVisitor: b,
    convertValue: $,
    isVisitable: Po
  });
  function S(A, C) {
    if (!_.isUndefined(A)) {
      if (v.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      v.push(A), _.forEach(A, function(O, W) {
        (!(_.isUndefined(O) || O === null) && u.call(
          i,
          O,
          _.isString(W) ? W.trim() : W,
          C,
          P
        )) === !0 && S(O, C ? C.concat(W) : [W]);
      }), v.pop();
    }
  }
  if (!_.isObject(s))
    throw new TypeError("data must be an object");
  return S(s), i;
}
function bl(s) {
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
  this._pairs = [], s && ci(s, this, i);
}
const sc = Jo.prototype;
sc.append = function(s, i) {
  this._pairs.push([s, i]);
};
sc.toString = function(s) {
  const i = s ? function(r) {
    return s.call(this, r, bl);
  } : bl;
  return this._pairs.map(function(r) {
    return i(r[0]) + "=" + i(r[1]);
  }, "").join("&");
};
function tg(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ic(s, i, r) {
  if (!i)
    return s;
  const a = r && r.encode || tg, u = r && r.serialize;
  let h;
  if (u ? h = u(i, r) : h = _.isURLSearchParams(i) ? i.toString() : new Jo(i, r).toString(a), h) {
    const f = s.indexOf("#");
    f !== -1 && (s = s.slice(0, f)), s += (s.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return s;
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
const oc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, eg = typeof URLSearchParams < "u" ? URLSearchParams : Jo, ng = typeof FormData < "u" ? FormData : null, sg = typeof Blob < "u" ? Blob : null, ig = {
  isBrowser: !0,
  classes: {
    URLSearchParams: eg,
    FormData: ng,
    Blob: sg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ko = typeof window < "u" && typeof document < "u", Ao = typeof navigator == "object" && navigator || void 0, og = Ko && (!Ao || ["ReactNative", "NativeScript", "NS"].indexOf(Ao.product) < 0), rg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ag = Ko && window.location.href || "http://localhost", lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ko,
  hasStandardBrowserEnv: og,
  hasStandardBrowserWebWorkerEnv: rg,
  navigator: Ao,
  origin: ag
}, Symbol.toStringTag, { value: "Module" })), Jt = {
  ...lg,
  ...ig
};
function cg(s, i) {
  return ci(s, new Jt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, a, u, h) {
      return Jt.isNode && _.isBuffer(r) ? (this.append(a, r.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function ug(s) {
  return _.matchAll(/\w+|\[(\w*)]/g, s).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function hg(s) {
  const i = {}, r = Object.keys(s);
  let a;
  const u = r.length;
  let h;
  for (a = 0; a < u; a++)
    h = r[a], i[h] = s[h];
  return i;
}
function rc(s) {
  function i(r, a, u, h) {
    let f = r[h++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f), $ = h >= r.length;
    return f = !f && _.isArray(u) ? u.length : f, $ ? (_.hasOwnProp(u, f) ? u[f] = [u[f], a] : u[f] = a, !g) : ((!u[f] || !_.isObject(u[f])) && (u[f] = []), i(r, a, u[f], h) && _.isArray(u[f]) && (u[f] = hg(u[f])), !g);
  }
  if (_.isFormData(s) && _.isFunction(s.entries)) {
    const r = {};
    return _.forEachEntry(s, (a, u) => {
      i(ug(a), u, r, 0);
    }), r;
  }
  return null;
}
function dg(s, i, r) {
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
  transitional: oc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(s, i) {
    const r = i.getContentType() || "", a = r.indexOf("application/json") > -1, u = _.isObject(s);
    if (u && _.isHTMLForm(s) && (s = new FormData(s)), _.isFormData(s))
      return a ? JSON.stringify(rc(s)) : s;
    if (_.isArrayBuffer(s) || _.isBuffer(s) || _.isStream(s) || _.isFile(s) || _.isBlob(s) || _.isReadableStream(s))
      return s;
    if (_.isArrayBufferView(s))
      return s.buffer;
    if (_.isURLSearchParams(s))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), s.toString();
    let h;
    if (u) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return cg(s, this.formSerializer).toString();
      if ((h = _.isFileList(s)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ci(
          h ? { "files[]": s } : s,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return u || a ? (i.setContentType("application/json", !1), dg(s)) : s;
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
    FormData: Jt.classes.FormData,
    Blob: Jt.classes.Blob
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
const fg = _.toObjectSet([
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
]), pg = (s) => {
  const i = {};
  let r, a, u;
  return s && s.split(`
`).forEach(function(h) {
    u = h.indexOf(":"), r = h.substring(0, u).trim().toLowerCase(), a = h.substring(u + 1).trim(), !(!r || i[r] && fg[r]) && (r === "set-cookie" ? i[r] ? i[r].push(a) : i[r] = [a] : i[r] = i[r] ? i[r] + ", " + a : a);
  }), i;
}, yl = Symbol("internals");
function Zn(s) {
  return s && String(s).trim().toLowerCase();
}
function Xs(s) {
  return s === !1 || s == null ? s : _.isArray(s) ? s.map(Xs) : String(s);
}
function mg(s) {
  const i = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = r.exec(s); )
    i[a[1]] = a[2];
  return i;
}
const gg = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
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
function vg(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, r, a) => r.toUpperCase() + a);
}
function bg(s, i) {
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
let Kt = class {
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
      (!P || u[P] === void 0 || b === !0 || b === void 0 && u[P] !== !1) && (u[P || $] = Xs(g));
    }
    const f = (g, $) => _.forEach(g, (b, v) => h(b, v, $));
    if (_.isPlainObject(i) || i instanceof this.constructor)
      f(i, r);
    else if (_.isString(i) && (i = i.trim()) && !gg(i))
      f(pg(i), r);
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
          return mg(u);
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
        r[f] = Xs(u), delete r[h];
        return;
      }
      const g = i ? vg(h) : String(h).trim();
      g !== h && delete r[h], r[g] = Xs(u), a[g] = !0;
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
    const r = (this[yl] = this[yl] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function u(h) {
      const f = Zn(h);
      r[f] || (bg(a, h), r[f] = !0);
    }
    return _.isArray(i) ? i.forEach(u) : u(i), this;
  }
};
Kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(Kt.prototype, ({ value: s }, i) => {
  let r = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => s,
    set(a) {
      this[r] = a;
    }
  };
});
_.freezeMethods(Kt);
function $o(s, i) {
  const r = this || ls, a = i || r, u = Kt.from(a.headers);
  let h = a.data;
  return _.forEach(s, function(f) {
    h = f.call(r, h, u.normalize(), i ? i.status : void 0);
  }), u.normalize(), h;
}
function ac(s) {
  return !!(s && s.__CANCEL__);
}
function $n(s, i, r) {
  K.call(this, s ?? "canceled", K.ERR_CANCELED, i, r), this.name = "CanceledError";
}
_.inherits($n, K, {
  __CANCEL__: !0
});
function lc(s, i, r) {
  const a = r.config.validateStatus;
  !r.status || !a || a(r.status) ? s(r) : i(new K(
    "Request failed with status code " + r.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function wg(s) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return i && i[1] || "";
}
function yg(s, i) {
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
function kg(s, i) {
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
const Zs = (s, i, r = 3) => {
  let a = 0;
  const u = yg(50, 250);
  return kg((h) => {
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
}, kl = (s, i) => {
  const r = s != null;
  return [(a) => i[0]({
    lengthComputable: r,
    total: s,
    loaded: a
  }), i[1]];
}, $l = (s) => (...i) => _.asap(() => s(...i)), $g = Jt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const s = Jt.navigator && /(msie|trident)/i.test(Jt.navigator.userAgent), i = document.createElement("a");
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
), xg = Jt.hasStandardBrowserEnv ? (
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
function Sg(s) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function _g(s, i) {
  return i ? s.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : s;
}
function cc(s, i) {
  return s && !Sg(i) ? _g(s, i) : i;
}
const xl = (s) => s instanceof Kt ? { ...s } : s;
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
    headers: (b, v) => u(xl(b), xl(v), !0)
  };
  return _.forEach(Object.keys(Object.assign({}, s, i)), function(b) {
    const v = $[b] || u, P = v(s[b], i[b], b);
    _.isUndefined(P) && v !== g || (r[b] = P);
  }), r;
}
const uc = (s) => {
  const i = en({}, s);
  let { data: r, withXSRFToken: a, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = i;
  i.headers = f = Kt.from(f), i.url = ic(cc(i.baseURL, i.url), s.params, s.paramsSerializer), g && f.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let $;
  if (_.isFormData(r)) {
    if (Jt.hasStandardBrowserEnv || Jt.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if (($ = f.getContentType()) !== !1) {
      const [b, ...v] = $ ? $.split(";").map((P) => P.trim()).filter(Boolean) : [];
      f.setContentType([b || "multipart/form-data", ...v].join("; "));
    }
  }
  if (Jt.hasStandardBrowserEnv && (a && _.isFunction(a) && (a = a(i)), a || a !== !1 && $g(i.url))) {
    const b = u && h && xg.read(h);
    b && f.set(u, b);
  }
  return i;
}, Eg = typeof XMLHttpRequest < "u", Og = Eg && function(s) {
  return new Promise(function(i, r) {
    const a = uc(s);
    let u = a.data;
    const h = Kt.from(a.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: $ } = a, b, v, P, S, A;
    function C() {
      S && S(), A && A(), a.cancelToken && a.cancelToken.unsubscribe(b), a.signal && a.signal.removeEventListener("abort", b);
    }
    let O = new XMLHttpRequest();
    O.open(a.method.toUpperCase(), a.url, !0), O.timeout = a.timeout;
    function W() {
      if (!O)
        return;
      const M = Kt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), bt = {
        data: !f || f === "text" || f === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: M,
        config: s,
        request: O
      };
      lc(function(Ut) {
        i(Ut), C();
      }, function(Ut) {
        r(Ut), C();
      }, bt), O = null;
    }
    "onloadend" in O ? O.onloadend = W : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(W);
    }, O.onabort = function() {
      O && (r(new K("Request aborted", K.ECONNABORTED, s, O)), O = null);
    }, O.onerror = function() {
      r(new K("Network Error", K.ERR_NETWORK, s, O)), O = null;
    }, O.ontimeout = function() {
      let M = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const bt = a.transitional || oc;
      a.timeoutErrorMessage && (M = a.timeoutErrorMessage), r(new K(
        M,
        bt.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        s,
        O
      )), O = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in O && _.forEach(h.toJSON(), function(M, bt) {
      O.setRequestHeader(bt, M);
    }), _.isUndefined(a.withCredentials) || (O.withCredentials = !!a.withCredentials), f && f !== "json" && (O.responseType = a.responseType), $ && ([P, A] = Zs($, !0), O.addEventListener("progress", P)), g && O.upload && ([v, S] = Zs(g), O.upload.addEventListener("progress", v), O.upload.addEventListener("loadend", S)), (a.cancelToken || a.signal) && (b = (M) => {
      O && (r(!M || M.type ? new $n(null, s, O) : M), O.abort(), O = null);
    }, a.cancelToken && a.cancelToken.subscribe(b), a.signal && (a.signal.aborted ? b() : a.signal.addEventListener("abort", b)));
    const L = wg(a.url);
    if (L && Jt.protocols.indexOf(L) === -1) {
      r(new K("Unsupported protocol " + L + ":", K.ERR_BAD_REQUEST, s));
      return;
    }
    O.send(u || null);
  });
}, Tg = (s, i) => {
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
}, Cg = function* (s, i) {
  let r = s.byteLength;
  if (r < i) {
    yield s;
    return;
  }
  let a = 0, u;
  for (; a < r; )
    u = a + i, yield s.slice(a, u), a = u;
}, Pg = async function* (s, i) {
  for await (const r of Ag(s))
    yield* Cg(r, i);
}, Ag = async function* (s) {
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
}, Sl = (s, i, r, a) => {
  const u = Pg(s, i);
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
}, ui = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", hc = ui && typeof ReadableStream == "function", Rg = ui && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((s) => (i) => s.encode(i))(new TextEncoder()) : async (s) => new Uint8Array(await new Response(s).arrayBuffer())), dc = (s, ...i) => {
  try {
    return !!s(...i);
  } catch {
    return !1;
  }
}, Ig = hc && dc(() => {
  let s = !1;
  const i = new Request(Jt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return s = !0, "half";
    }
  }).headers.has("Content-Type");
  return s && !i;
}), _l = 64 * 1024, Ro = hc && dc(() => _.isReadableStream(new Response("").body)), ti = {
  stream: Ro && ((s) => s.body)
};
ui && ((s) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !ti[i] && (ti[i] = _.isFunction(s[i]) ? (r) => r[i]() : (r, a) => {
      throw new K(`Response type '${i}' is not supported`, K.ERR_NOT_SUPPORT, a);
    });
  });
})(new Response());
const Bg = async (s) => {
  if (s == null)
    return 0;
  if (_.isBlob(s))
    return s.size;
  if (_.isSpecCompliantForm(s))
    return (await new Request(Jt.origin, {
      method: "POST",
      body: s
    }).arrayBuffer()).byteLength;
  if (_.isArrayBufferView(s) || _.isArrayBuffer(s))
    return s.byteLength;
  if (_.isURLSearchParams(s) && (s = s + ""), _.isString(s))
    return (await Rg(s)).byteLength;
}, Fg = async (s, i) => _.toFiniteNumber(s.getContentLength()) ?? Bg(i), Ng = ui && (async (s) => {
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
  } = uc(s);
  b = b ? (b + "").toLowerCase() : "text";
  let A = Tg([u, h && h.toAbortSignal()], f), C;
  const O = A && A.unsubscribe && (() => {
    A.unsubscribe();
  });
  let W;
  try {
    if ($ && Ig && r !== "get" && r !== "head" && (W = await Fg(v, a)) !== 0) {
      let wt = new Request(i, {
        method: "POST",
        body: a,
        duplex: "half"
      }), At;
      if (_.isFormData(a) && (At = wt.headers.get("content-type")) && v.setContentType(At), wt.body) {
        const [zt, Yt] = kl(
          W,
          Zs($l($))
        );
        a = Sl(wt.body, _l, zt, Yt);
      }
    }
    _.isString(P) || (P = P ? "include" : "omit");
    const L = "credentials" in Request.prototype;
    C = new Request(i, {
      ...S,
      signal: A,
      method: r.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: a,
      duplex: "half",
      credentials: L ? P : void 0
    });
    let M = await fetch(C);
    const bt = Ro && (b === "stream" || b === "response");
    if (Ro && (g || bt && O)) {
      const wt = {};
      ["status", "statusText", "headers"].forEach((oe) => {
        wt[oe] = M[oe];
      });
      const At = _.toFiniteNumber(M.headers.get("content-length")), [zt, Yt] = g && kl(
        At,
        Zs($l(g), !0)
      ) || [];
      M = new Response(
        Sl(M.body, _l, zt, () => {
          Yt && Yt(), O && O();
        }),
        wt
      );
    }
    b = b || "text";
    let Ut = await ti[_.findKey(ti, b) || "text"](M, s);
    return !bt && O && O(), await new Promise((wt, At) => {
      lc(wt, At, {
        data: Ut,
        headers: Kt.from(M.headers),
        status: M.status,
        statusText: M.statusText,
        config: s,
        request: C
      });
    });
  } catch (L) {
    throw O && O(), L && L.name === "TypeError" && /fetch/i.test(L.message) ? Object.assign(
      new K("Network Error", K.ERR_NETWORK, s, C),
      {
        cause: L.cause || L
      }
    ) : K.from(L, L && L.code, s, C);
  }
}), Io = {
  http: Ym,
  xhr: Og,
  fetch: Ng
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
const El = (s) => `- ${s}`, Dg = (s) => _.isFunction(s) || s === null || s === !1, fc = {
  getAdapter: (s) => {
    s = _.isArray(s) ? s : [s];
    const { length: i } = s;
    let r, a;
    const u = {};
    for (let h = 0; h < i; h++) {
      r = s[h];
      let f;
      if (a = r, !Dg(r) && (a = Io[(f = String(r)).toLowerCase()], a === void 0))
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
` + h.map(El).join(`
`) : " " + El(h[0]) : "as no adapter specified";
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
function Ol(s) {
  return xo(s), s.headers = Kt.from(s.headers), s.data = $o.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), fc.getAdapter(s.adapter || ls.adapter)(s).then(function(i) {
    return xo(s), i.data = $o.call(
      s,
      s.transformResponse,
      i
    ), i.headers = Kt.from(i.headers), i;
  }, function(i) {
    return ac(i) || (xo(s), i && i.response && (i.response.data = $o.call(
      s,
      s.transformResponse,
      i.response
    ), i.response.headers = Kt.from(i.response.headers))), Promise.reject(i);
  });
}
const pc = "1.7.7", Go = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, i) => {
  Go[s] = function(r) {
    return typeof r === s || "a" + (i < 1 ? "n " : " ") + s;
  };
});
const Tl = {};
Go.transitional = function(s, i, r) {
  function a(u, h) {
    return "[Axios v" + pc + "] Transitional option '" + u + "'" + h + (r ? ". " + r : "");
  }
  return (u, h, f) => {
    if (s === !1)
      throw new K(
        a(h, " has been removed" + (i ? " in " + i : "")),
        K.ERR_DEPRECATED
      );
    return i && !Tl[h] && (Tl[h] = !0, console.warn(
      a(
        h,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), s ? s(u, h, f) : !0;
  };
};
function jg(s, i, r) {
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
  assertOptions: jg,
  validators: Go
}, Ae = Bo.validators;
let Ze = class {
  constructor(i) {
    this.defaults = i, this.interceptors = {
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
      silentJSONParsing: Ae.transitional(Ae.boolean),
      forcedJSONParsing: Ae.transitional(Ae.boolean),
      clarifyTimeoutError: Ae.transitional(Ae.boolean)
    }, !1), u != null && (_.isFunction(u) ? r.paramsSerializer = {
      serialize: u
    } : Bo.assertOptions(u, {
      encode: Ae.function,
      serialize: Ae.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let f = h && _.merge(
      h.common,
      h[r.method]
    );
    h && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete h[C];
      }
    ), r.headers = Kt.concat(f, h);
    const g = [];
    let $ = !0;
    this.interceptors.request.forEach(function(C) {
      typeof C.runWhen == "function" && C.runWhen(r) === !1 || ($ = $ && C.synchronous, g.unshift(C.fulfilled, C.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(C) {
      b.push(C.fulfilled, C.rejected);
    });
    let v, P = 0, S;
    if (!$) {
      const C = [Ol.bind(this), void 0];
      for (C.unshift.apply(C, g), C.push.apply(C, b), S = C.length, v = Promise.resolve(r); P < S; )
        v = v.then(C[P++], C[P++]);
      return v;
    }
    S = g.length;
    let A = r;
    for (P = 0; P < S; ) {
      const C = g[P++], O = g[P++];
      try {
        A = C(A);
      } catch (W) {
        O.call(this, W);
        break;
      }
    }
    try {
      v = Ol.call(this, A);
    } catch (C) {
      return Promise.reject(C);
    }
    for (P = 0, S = b.length; P < S; )
      v = v.then(b[P++], b[P++]);
    return v;
  }
  getUri(i) {
    i = en(this.defaults, i);
    const r = cc(i.baseURL, i.url);
    return ic(r, i.params, i.paramsSerializer);
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
let Ug = class mc {
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
      token: new mc(function(r) {
        i = r;
      }),
      cancel: i
    };
  }
};
function Mg(s) {
  return function(i) {
    return s.apply(null, i);
  };
}
function Lg(s) {
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
function gc(s) {
  const i = new Ze(s), r = Vl(Ze.prototype.request, i);
  return _.extend(r, Ze.prototype, i, { allOwnKeys: !0 }), _.extend(r, i, null, { allOwnKeys: !0 }), r.create = function(a) {
    return gc(en(s, a));
  }, r;
}
const vt = gc(ls);
vt.Axios = Ze;
vt.CanceledError = $n;
vt.CancelToken = Ug;
vt.isCancel = ac;
vt.VERSION = pc;
vt.toFormData = ci;
vt.AxiosError = K;
vt.Cancel = vt.CanceledError;
vt.all = function(s) {
  return Promise.all(s);
};
vt.spread = Mg;
vt.isAxiosError = Lg;
vt.mergeConfig = en;
vt.AxiosHeaders = Kt;
vt.formToJSON = (s) => rc(_.isHTMLForm(s) ? new FormData(s) : s);
vt.getAdapter = fc.getAdapter;
vt.HttpStatusCode = Fo;
vt.default = vt;
var ke = /* @__PURE__ */ ((s) => (s.Primary = "Primary", s.Secondary = "Secondary", s.Success = "Success", s.Warning = "Warning", s.Danger = "Danger", s.Info = "Info", s.Muted = "Muted", s))(ke || {});
const zg = Hl("auth", {
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
      return vt.post("/account/login", s).then((i) => (this.setUser(i.data), this.user)).catch((i) => {
        throw {
          description: "An error as occurred",
          style: ke.Danger,
          closeBtn: !0,
          ...i.response.data
        };
      });
    },
    async check() {
      return vt.get("/account/auth-check").then((s) => (this.setUser(s.data.user), this.user)).catch((s) => {
        throw this.unsetUser(), {
          description: "An error as occurred",
          style: ke.Danger,
          closeBtn: !0,
          ...s.response.data
        };
      });
    },
    async logout() {
      return this.unsetUser(), vt.get("/account/logout").catch((s) => {
        throw {
          description: "An error as occurred",
          style: ke.Danger,
          closeBtn: !0,
          ...s.response.data
        };
      });
    }
  }
}), Hg = { class: "uk-fieldset" }, qg = { class: "uk-margin" }, Wg = { class: "uk-inline uk-width-1-1" }, Vg = { class: "uk-margin" }, Jg = { class: "uk-inline uk-width-1-1" }, Kg = { class: "uk-text-center" }, Gg = ["disabled"], Xo = /* @__PURE__ */ ot({
  __name: "FormLogin",
  setup(s) {
    const i = ve(!1), r = ve();
    let a = {
      user_name: "",
      password: ""
    };
    async function u() {
      i.value = !0, r.value = null, await zg().login(a).then((f) => {
        Wl.notification({
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
        onSubmit: f[2] || (f[2] = ii(($) => u(), ["prevent"]))
      }, [
        k("fieldset", Hg, [
          r.value ? (R(), dt(g, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : Q("", !0),
          k("div", qg, [
            k("div", Wg, [
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
                [Vt, U(a).user_name]
              ])
            ])
          ]),
          k("div", Vg, [
            k("div", Jg, [
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
                [Vt, U(a).password]
              ])
            ])
          ]),
          k("div", Kg, [
            k("button", {
              class: "uk-button uk-button-primary",
              disabled: i.value,
              "data-test": "submit"
            }, " Login ", 8, Gg)
          ])
        ])
      ], 32);
    };
  }
});
function vc(s, i) {
  return function() {
    return s.apply(i, arguments);
  };
}
const { toString: Xg } = Object.prototype, { getPrototypeOf: Yo } = Object, hi = /* @__PURE__ */ ((s) => (i) => {
  const r = Xg.call(i);
  return s[r] || (s[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), fe = (s) => (s = s.toLowerCase(), (i) => hi(i) === s), di = (s) => (i) => typeof i === s, { isArray: xn } = Array, is = di("undefined");
function Yg(s) {
  return s !== null && !is(s) && s.constructor !== null && !is(s.constructor) && ie(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const bc = fe("ArrayBuffer");
function Qg(s) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(s) : i = s && s.buffer && bc(s.buffer), i;
}
const Zg = di("string"), ie = di("function"), wc = di("number"), fi = (s) => s !== null && typeof s == "object", tv = (s) => s === !0 || s === !1, Ys = (s) => {
  if (hi(s) !== "object")
    return !1;
  const i = Yo(s);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, ev = fe("Date"), nv = fe("File"), sv = fe("Blob"), iv = fe("FileList"), ov = (s) => fi(s) && ie(s.pipe), rv = (s) => {
  let i;
  return s && (typeof FormData == "function" && s instanceof FormData || ie(s.append) && ((i = hi(s)) === "formdata" || // detect form-data instance
  i === "object" && ie(s.toString) && s.toString() === "[object FormData]"));
}, av = fe("URLSearchParams"), [lv, cv, uv, hv] = ["ReadableStream", "Request", "Response", "Headers"].map(fe), dv = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function yc(s, i) {
  i = i.toLowerCase();
  const r = Object.keys(s);
  let a = r.length, u;
  for (; a-- > 0; )
    if (u = r[a], i === u.toLowerCase())
      return u;
  return null;
}
const Ye = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, kc = (s) => !is(s) && s !== Ye;
function No() {
  const { caseless: s } = kc(this) && this || {}, i = {}, r = (a, u) => {
    const h = s && yc(i, u) || u;
    Ys(i[h]) && Ys(a) ? i[h] = No(i[h], a) : Ys(a) ? i[h] = No({}, a) : xn(a) ? i[h] = a.slice() : i[h] = a;
  };
  for (let a = 0, u = arguments.length; a < u; a++)
    arguments[a] && cs(arguments[a], r);
  return i;
}
const fv = (s, i, r, { allOwnKeys: a } = {}) => (cs(i, (u, h) => {
  r && ie(u) ? s[h] = vc(u, r) : s[h] = u;
}, { allOwnKeys: a }), s), pv = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), mv = (s, i, r, a) => {
  s.prototype = Object.create(i.prototype, a), s.prototype.constructor = s, Object.defineProperty(s, "super", {
    value: i.prototype
  }), r && Object.assign(s.prototype, r);
}, gv = (s, i, r, a) => {
  let u, h, f;
  const g = {};
  if (i = i || {}, s == null) return i;
  do {
    for (u = Object.getOwnPropertyNames(s), h = u.length; h-- > 0; )
      f = u[h], (!a || a(f, s, i)) && !g[f] && (i[f] = s[f], g[f] = !0);
    s = r !== !1 && Yo(s);
  } while (s && (!r || r(s, i)) && s !== Object.prototype);
  return i;
}, vv = (s, i, r) => {
  s = String(s), (r === void 0 || r > s.length) && (r = s.length), r -= i.length;
  const a = s.indexOf(i, r);
  return a !== -1 && a === r;
}, bv = (s) => {
  if (!s) return null;
  if (xn(s)) return s;
  let i = s.length;
  if (!wc(i)) return null;
  const r = new Array(i);
  for (; i-- > 0; )
    r[i] = s[i];
  return r;
}, wv = /* @__PURE__ */ ((s) => (i) => s && i instanceof s)(typeof Uint8Array < "u" && Yo(Uint8Array)), yv = (s, i) => {
  const r = (s && s[Symbol.iterator]).call(s);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const u = a.value;
    i.call(s, u[0], u[1]);
  }
}, kv = (s, i) => {
  let r;
  const a = [];
  for (; (r = s.exec(i)) !== null; )
    a.push(r);
  return a;
}, $v = fe("HTMLFormElement"), xv = (s) => s.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, r, a) {
    return r.toUpperCase() + a;
  }
), Cl = (({ hasOwnProperty: s }) => (i, r) => s.call(i, r))(Object.prototype), Sv = fe("RegExp"), $c = (s, i) => {
  const r = Object.getOwnPropertyDescriptors(s), a = {};
  cs(r, (u, h) => {
    let f;
    (f = i(u, h, s)) !== !1 && (a[h] = f || u);
  }), Object.defineProperties(s, a);
}, _v = (s) => {
  $c(s, (i, r) => {
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
}, Ev = (s, i) => {
  const r = {}, a = (u) => {
    u.forEach((h) => {
      r[h] = !0;
    });
  };
  return xn(s) ? a(s) : a(String(s).split(i)), r;
}, Ov = () => {
}, Tv = (s, i) => s != null && Number.isFinite(s = +s) ? s : i, So = "abcdefghijklmnopqrstuvwxyz", Pl = "0123456789", xc = {
  DIGIT: Pl,
  ALPHA: So,
  ALPHA_DIGIT: So + So.toUpperCase() + Pl
}, Cv = (s = 16, i = xc.ALPHA_DIGIT) => {
  let r = "";
  const { length: a } = i;
  for (; s--; )
    r += i[Math.random() * a | 0];
  return r;
};
function Pv(s) {
  return !!(s && ie(s.append) && s[Symbol.toStringTag] === "FormData" && s[Symbol.iterator]);
}
const Av = (s) => {
  const i = new Array(10), r = (a, u) => {
    if (fi(a)) {
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
}, Rv = fe("AsyncFunction"), Iv = (s) => s && (fi(s) || ie(s)) && ie(s.then) && ie(s.catch), Sc = ((s, i) => s ? setImmediate : i ? ((r, a) => (Ye.addEventListener("message", ({ source: u, data: h }) => {
  u === Ye && h === r && a.length && a.shift()();
}, !1), (u) => {
  a.push(u), Ye.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ie(Ye.postMessage)
), Bv = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ye) : typeof process < "u" && process.nextTick || Sc, E = {
  isArray: xn,
  isArrayBuffer: bc,
  isBuffer: Yg,
  isFormData: rv,
  isArrayBufferView: Qg,
  isString: Zg,
  isNumber: wc,
  isBoolean: tv,
  isObject: fi,
  isPlainObject: Ys,
  isReadableStream: lv,
  isRequest: cv,
  isResponse: uv,
  isHeaders: hv,
  isUndefined: is,
  isDate: ev,
  isFile: nv,
  isBlob: sv,
  isRegExp: Sv,
  isFunction: ie,
  isStream: ov,
  isURLSearchParams: av,
  isTypedArray: wv,
  isFileList: iv,
  forEach: cs,
  merge: No,
  extend: fv,
  trim: dv,
  stripBOM: pv,
  inherits: mv,
  toFlatObject: gv,
  kindOf: hi,
  kindOfTest: fe,
  endsWith: vv,
  toArray: bv,
  forEachEntry: yv,
  matchAll: kv,
  isHTMLForm: $v,
  hasOwnProperty: Cl,
  hasOwnProp: Cl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $c,
  freezeMethods: _v,
  toObjectSet: Ev,
  toCamelCase: xv,
  noop: Ov,
  toFiniteNumber: Tv,
  findKey: yc,
  global: Ye,
  isContextDefined: kc,
  ALPHABET: xc,
  generateString: Cv,
  isSpecCompliantForm: Pv,
  toJSONObject: Av,
  isAsyncFn: Rv,
  isThenable: Iv,
  setImmediate: Sc,
  asap: Bv
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
const _c = G.prototype, Ec = {};
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
  Ec[s] = { value: s };
});
Object.defineProperties(G, Ec);
Object.defineProperty(_c, "isAxiosError", { value: !0 });
G.from = (s, i, r, a, u, h) => {
  const f = Object.create(_c);
  return E.toFlatObject(s, f, function(g) {
    return g !== Error.prototype;
  }, (g) => g !== "isAxiosError"), G.call(f, s.message, i, r, a, u), f.cause = s, f.name = s.name, h && Object.assign(f, h), f;
};
const Fv = null;
function Do(s) {
  return E.isPlainObject(s) || E.isArray(s);
}
function Oc(s) {
  return E.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function Al(s, i, r) {
  return s ? s.concat(i).map(function(a, u) {
    return a = Oc(a), !r && u ? "[" + a + "]" : a;
  }).join(r ? "." : "") : i;
}
function Nv(s) {
  return E.isArray(s) && !s.some(Do);
}
const Dv = E.toFlatObject(E, {}, null, function(s) {
  return /^is[A-Z]/.test(s);
});
function pi(s, i, r) {
  if (!E.isObject(s))
    throw new TypeError("target must be an object");
  i = i || new FormData(), r = E.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, C) {
    return !E.isUndefined(C[A]);
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
  function b(A, C, O) {
    let W = A;
    if (A && !O && typeof A == "object") {
      if (E.endsWith(C, "{}"))
        C = a ? C : C.slice(0, -2), A = JSON.stringify(A);
      else if (E.isArray(A) && Nv(A) || (E.isFileList(A) || E.endsWith(C, "[]")) && (W = E.toArray(A)))
        return C = Oc(C), W.forEach(function(L, M) {
          !(E.isUndefined(L) || L === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? Al([C], M, h) : f === null ? C : C + "[]",
            $(L)
          );
        }), !1;
    }
    return Do(A) ? !0 : (i.append(Al(O, C, h), $(A)), !1);
  }
  const v = [], P = Object.assign(Dv, {
    defaultVisitor: b,
    convertValue: $,
    isVisitable: Do
  });
  function S(A, C) {
    if (!E.isUndefined(A)) {
      if (v.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      v.push(A), E.forEach(A, function(O, W) {
        (!(E.isUndefined(O) || O === null) && u.call(
          i,
          O,
          E.isString(W) ? W.trim() : W,
          C,
          P
        )) === !0 && S(O, C ? C.concat(W) : [W]);
      }), v.pop();
    }
  }
  if (!E.isObject(s))
    throw new TypeError("data must be an object");
  return S(s), i;
}
function Rl(s) {
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
  this._pairs = [], s && pi(s, this, i);
}
const Tc = Qo.prototype;
Tc.append = function(s, i) {
  this._pairs.push([s, i]);
};
Tc.toString = function(s) {
  const i = s ? function(r) {
    return s.call(this, r, Rl);
  } : Rl;
  return this._pairs.map(function(r) {
    return i(r[0]) + "=" + i(r[1]);
  }, "").join("&");
};
function jv(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cc(s, i, r) {
  if (!i)
    return s;
  const a = r && r.encode || jv, u = r && r.serialize;
  let h;
  if (u ? h = u(i, r) : h = E.isURLSearchParams(i) ? i.toString() : new Qo(i, r).toString(a), h) {
    const f = s.indexOf("#");
    f !== -1 && (s = s.slice(0, f)), s += (s.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return s;
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
const Pc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Uv = typeof URLSearchParams < "u" ? URLSearchParams : Qo, Mv = typeof FormData < "u" ? FormData : null, Lv = typeof Blob < "u" ? Blob : null, zv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Uv,
    FormData: Mv,
    Blob: Lv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Zo = typeof window < "u" && typeof document < "u", jo = typeof navigator == "object" && navigator || void 0, Hv = Zo && (!jo || ["ReactNative", "NativeScript", "NS"].indexOf(jo.product) < 0), qv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Wv = Zo && window.location.href || "http://localhost", Vv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Zo,
  hasStandardBrowserEnv: Hv,
  hasStandardBrowserWebWorkerEnv: qv,
  navigator: jo,
  origin: Wv
}, Symbol.toStringTag, { value: "Module" })), Gt = {
  ...Vv,
  ...zv
};
function Jv(s, i) {
  return pi(s, new Gt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, a, u, h) {
      return Gt.isNode && E.isBuffer(r) ? (this.append(a, r.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function Kv(s) {
  return E.matchAll(/\w+|\[(\w*)]/g, s).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function Gv(s) {
  const i = {}, r = Object.keys(s);
  let a;
  const u = r.length;
  let h;
  for (a = 0; a < u; a++)
    h = r[a], i[h] = s[h];
  return i;
}
function Ac(s) {
  function i(r, a, u, h) {
    let f = r[h++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f), $ = h >= r.length;
    return f = !f && E.isArray(u) ? u.length : f, $ ? (E.hasOwnProp(u, f) ? u[f] = [u[f], a] : u[f] = a, !g) : ((!u[f] || !E.isObject(u[f])) && (u[f] = []), i(r, a, u[f], h) && E.isArray(u[f]) && (u[f] = Gv(u[f])), !g);
  }
  if (E.isFormData(s) && E.isFunction(s.entries)) {
    const r = {};
    return E.forEachEntry(s, (a, u) => {
      i(Kv(a), u, r, 0);
    }), r;
  }
  return null;
}
function Xv(s, i, r) {
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
  transitional: Pc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(s, i) {
    const r = i.getContentType() || "", a = r.indexOf("application/json") > -1, u = E.isObject(s);
    if (u && E.isHTMLForm(s) && (s = new FormData(s)), E.isFormData(s))
      return a ? JSON.stringify(Ac(s)) : s;
    if (E.isArrayBuffer(s) || E.isBuffer(s) || E.isStream(s) || E.isFile(s) || E.isBlob(s) || E.isReadableStream(s))
      return s;
    if (E.isArrayBufferView(s))
      return s.buffer;
    if (E.isURLSearchParams(s))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), s.toString();
    let h;
    if (u) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Jv(s, this.formSerializer).toString();
      if ((h = E.isFileList(s)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return pi(
          h ? { "files[]": s } : s,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return u || a ? (i.setContentType("application/json", !1), Xv(s)) : s;
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
    FormData: Gt.classes.FormData,
    Blob: Gt.classes.Blob
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
const Yv = E.toObjectSet([
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
]), Qv = (s) => {
  const i = {};
  let r, a, u;
  return s && s.split(`
`).forEach(function(h) {
    u = h.indexOf(":"), r = h.substring(0, u).trim().toLowerCase(), a = h.substring(u + 1).trim(), !(!r || i[r] && Yv[r]) && (r === "set-cookie" ? i[r] ? i[r].push(a) : i[r] = [a] : i[r] = i[r] ? i[r] + ", " + a : a);
  }), i;
}, Bl = Symbol("internals");
function ts(s) {
  return s && String(s).trim().toLowerCase();
}
function Qs(s) {
  return s === !1 || s == null ? s : E.isArray(s) ? s.map(Qs) : String(s);
}
function Zv(s) {
  const i = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = r.exec(s); )
    i[a[1]] = a[2];
  return i;
}
const tb = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
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
function eb(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, r, a) => r.toUpperCase() + a);
}
function nb(s, i) {
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
class Xt {
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
      (!P || u[P] === void 0 || b === !0 || b === void 0 && u[P] !== !1) && (u[P || $] = Qs(g));
    }
    const f = (g, $) => E.forEach(g, (b, v) => h(b, v, $));
    if (E.isPlainObject(i) || i instanceof this.constructor)
      f(i, r);
    else if (E.isString(i) && (i = i.trim()) && !tb(i))
      f(Qv(i), r);
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
          return Zv(u);
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
        r[f] = Qs(u), delete r[h];
        return;
      }
      const g = i ? eb(h) : String(h).trim();
      g !== h && delete r[h], r[g] = Qs(u), a[g] = !0;
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
    const r = (this[Bl] = this[Bl] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function u(h) {
      const f = ts(h);
      r[f] || (nb(a, h), r[f] = !0);
    }
    return E.isArray(i) ? i.forEach(u) : u(i), this;
  }
}
Xt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Xt.prototype, ({ value: s }, i) => {
  let r = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => s,
    set(a) {
      this[r] = a;
    }
  };
});
E.freezeMethods(Xt);
function Eo(s, i) {
  const r = this || us, a = i || r, u = Xt.from(a.headers);
  let h = a.data;
  return E.forEach(s, function(f) {
    h = f.call(r, h, u.normalize(), i ? i.status : void 0);
  }), u.normalize(), h;
}
function Rc(s) {
  return !!(s && s.__CANCEL__);
}
function Sn(s, i, r) {
  G.call(this, s ?? "canceled", G.ERR_CANCELED, i, r), this.name = "CanceledError";
}
E.inherits(Sn, G, {
  __CANCEL__: !0
});
function Ic(s, i, r) {
  const a = r.config.validateStatus;
  !r.status || !a || a(r.status) ? s(r) : i(new G(
    "Request failed with status code " + r.status,
    [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function sb(s) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return i && i[1] || "";
}
function ib(s, i) {
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
function ob(s, i) {
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
  const u = ib(50, 250);
  return ob((h) => {
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
}, Fl = (s, i) => {
  const r = s != null;
  return [(a) => i[0]({
    lengthComputable: r,
    total: s,
    loaded: a
  }), i[1]];
}, Nl = (s) => (...i) => E.asap(() => s(...i)), rb = Gt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const s = Gt.navigator && /(msie|trident)/i.test(Gt.navigator.userAgent), i = document.createElement("a");
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
), ab = Gt.hasStandardBrowserEnv ? (
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
function lb(s) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function cb(s, i) {
  return i ? s.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : s;
}
function Bc(s, i) {
  return s && !lb(i) ? cb(s, i) : i;
}
const Dl = (s) => s instanceof Xt ? { ...s } : s;
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
    headers: (b, v) => u(Dl(b), Dl(v), !0)
  };
  return E.forEach(Object.keys(Object.assign({}, s, i)), function(b) {
    const v = $[b] || u, P = v(s[b], i[b], b);
    E.isUndefined(P) && v !== g || (r[b] = P);
  }), r;
}
const Fc = (s) => {
  const i = nn({}, s);
  let { data: r, withXSRFToken: a, xsrfHeaderName: u, xsrfCookieName: h, headers: f, auth: g } = i;
  i.headers = f = Xt.from(f), i.url = Cc(Bc(i.baseURL, i.url), s.params, s.paramsSerializer), g && f.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let $;
  if (E.isFormData(r)) {
    if (Gt.hasStandardBrowserEnv || Gt.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if (($ = f.getContentType()) !== !1) {
      const [b, ...v] = $ ? $.split(";").map((P) => P.trim()).filter(Boolean) : [];
      f.setContentType([b || "multipart/form-data", ...v].join("; "));
    }
  }
  if (Gt.hasStandardBrowserEnv && (a && E.isFunction(a) && (a = a(i)), a || a !== !1 && rb(i.url))) {
    const b = u && h && ab.read(h);
    b && f.set(u, b);
  }
  return i;
}, ub = typeof XMLHttpRequest < "u", hb = ub && function(s) {
  return new Promise(function(i, r) {
    const a = Fc(s);
    let u = a.data;
    const h = Xt.from(a.headers).normalize();
    let { responseType: f, onUploadProgress: g, onDownloadProgress: $ } = a, b, v, P, S, A;
    function C() {
      S && S(), A && A(), a.cancelToken && a.cancelToken.unsubscribe(b), a.signal && a.signal.removeEventListener("abort", b);
    }
    let O = new XMLHttpRequest();
    O.open(a.method.toUpperCase(), a.url, !0), O.timeout = a.timeout;
    function W() {
      if (!O)
        return;
      const M = Xt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), bt = {
        data: !f || f === "text" || f === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: M,
        config: s,
        request: O
      };
      Ic(function(Ut) {
        i(Ut), C();
      }, function(Ut) {
        r(Ut), C();
      }, bt), O = null;
    }
    "onloadend" in O ? O.onloadend = W : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(W);
    }, O.onabort = function() {
      O && (r(new G("Request aborted", G.ECONNABORTED, s, O)), O = null);
    }, O.onerror = function() {
      r(new G("Network Error", G.ERR_NETWORK, s, O)), O = null;
    }, O.ontimeout = function() {
      let M = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const bt = a.transitional || Pc;
      a.timeoutErrorMessage && (M = a.timeoutErrorMessage), r(new G(
        M,
        bt.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
        s,
        O
      )), O = null;
    }, u === void 0 && h.setContentType(null), "setRequestHeader" in O && E.forEach(h.toJSON(), function(M, bt) {
      O.setRequestHeader(bt, M);
    }), E.isUndefined(a.withCredentials) || (O.withCredentials = !!a.withCredentials), f && f !== "json" && (O.responseType = a.responseType), $ && ([P, A] = ei($, !0), O.addEventListener("progress", P)), g && O.upload && ([v, S] = ei(g), O.upload.addEventListener("progress", v), O.upload.addEventListener("loadend", S)), (a.cancelToken || a.signal) && (b = (M) => {
      O && (r(!M || M.type ? new Sn(null, s, O) : M), O.abort(), O = null);
    }, a.cancelToken && a.cancelToken.subscribe(b), a.signal && (a.signal.aborted ? b() : a.signal.addEventListener("abort", b)));
    const L = sb(a.url);
    if (L && Gt.protocols.indexOf(L) === -1) {
      r(new G("Unsupported protocol " + L + ":", G.ERR_BAD_REQUEST, s));
      return;
    }
    O.send(u || null);
  });
}, db = (s, i) => {
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
}, fb = function* (s, i) {
  let r = s.byteLength;
  if (r < i) {
    yield s;
    return;
  }
  let a = 0, u;
  for (; a < r; )
    u = a + i, yield s.slice(a, u), a = u;
}, pb = async function* (s, i) {
  for await (const r of mb(s))
    yield* fb(r, i);
}, mb = async function* (s) {
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
}, jl = (s, i, r, a) => {
  const u = pb(s, i);
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
}, mi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Nc = mi && typeof ReadableStream == "function", gb = mi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((s) => (i) => s.encode(i))(new TextEncoder()) : async (s) => new Uint8Array(await new Response(s).arrayBuffer())), Dc = (s, ...i) => {
  try {
    return !!s(...i);
  } catch {
    return !1;
  }
}, vb = Nc && Dc(() => {
  let s = !1;
  const i = new Request(Gt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return s = !0, "half";
    }
  }).headers.has("Content-Type");
  return s && !i;
}), Ul = 64 * 1024, Uo = Nc && Dc(() => E.isReadableStream(new Response("").body)), ni = {
  stream: Uo && ((s) => s.body)
};
mi && ((s) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !ni[i] && (ni[i] = E.isFunction(s[i]) ? (r) => r[i]() : (r, a) => {
      throw new G(`Response type '${i}' is not supported`, G.ERR_NOT_SUPPORT, a);
    });
  });
})(new Response());
const bb = async (s) => {
  if (s == null)
    return 0;
  if (E.isBlob(s))
    return s.size;
  if (E.isSpecCompliantForm(s))
    return (await new Request(Gt.origin, {
      method: "POST",
      body: s
    }).arrayBuffer()).byteLength;
  if (E.isArrayBufferView(s) || E.isArrayBuffer(s))
    return s.byteLength;
  if (E.isURLSearchParams(s) && (s = s + ""), E.isString(s))
    return (await gb(s)).byteLength;
}, wb = async (s, i) => E.toFiniteNumber(s.getContentLength()) ?? bb(i), yb = mi && (async (s) => {
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
  } = Fc(s);
  b = b ? (b + "").toLowerCase() : "text";
  let A = db([u, h && h.toAbortSignal()], f), C;
  const O = A && A.unsubscribe && (() => {
    A.unsubscribe();
  });
  let W;
  try {
    if ($ && vb && r !== "get" && r !== "head" && (W = await wb(v, a)) !== 0) {
      let wt = new Request(i, {
        method: "POST",
        body: a,
        duplex: "half"
      }), At;
      if (E.isFormData(a) && (At = wt.headers.get("content-type")) && v.setContentType(At), wt.body) {
        const [zt, Yt] = Fl(
          W,
          ei(Nl($))
        );
        a = jl(wt.body, Ul, zt, Yt);
      }
    }
    E.isString(P) || (P = P ? "include" : "omit");
    const L = "credentials" in Request.prototype;
    C = new Request(i, {
      ...S,
      signal: A,
      method: r.toUpperCase(),
      headers: v.normalize().toJSON(),
      body: a,
      duplex: "half",
      credentials: L ? P : void 0
    });
    let M = await fetch(C);
    const bt = Uo && (b === "stream" || b === "response");
    if (Uo && (g || bt && O)) {
      const wt = {};
      ["status", "statusText", "headers"].forEach((oe) => {
        wt[oe] = M[oe];
      });
      const At = E.toFiniteNumber(M.headers.get("content-length")), [zt, Yt] = g && Fl(
        At,
        ei(Nl(g), !0)
      ) || [];
      M = new Response(
        jl(M.body, Ul, zt, () => {
          Yt && Yt(), O && O();
        }),
        wt
      );
    }
    b = b || "text";
    let Ut = await ni[E.findKey(ni, b) || "text"](M, s);
    return !bt && O && O(), await new Promise((wt, At) => {
      Ic(wt, At, {
        data: Ut,
        headers: Xt.from(M.headers),
        status: M.status,
        statusText: M.statusText,
        config: s,
        request: C
      });
    });
  } catch (L) {
    throw O && O(), L && L.name === "TypeError" && /fetch/i.test(L.message) ? Object.assign(
      new G("Network Error", G.ERR_NETWORK, s, C),
      {
        cause: L.cause || L
      }
    ) : G.from(L, L && L.code, s, C);
  }
}), Mo = {
  http: Fv,
  xhr: hb,
  fetch: yb
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
const Ml = (s) => `- ${s}`, kb = (s) => E.isFunction(s) || s === null || s === !1, jc = {
  getAdapter: (s) => {
    s = E.isArray(s) ? s : [s];
    const { length: i } = s;
    let r, a;
    const u = {};
    for (let h = 0; h < i; h++) {
      r = s[h];
      let f;
      if (a = r, !kb(r) && (a = Mo[(f = String(r)).toLowerCase()], a === void 0))
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
` + h.map(Ml).join(`
`) : " " + Ml(h[0]) : "as no adapter specified";
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
function Ll(s) {
  return Oo(s), s.headers = Xt.from(s.headers), s.data = Eo.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), jc.getAdapter(s.adapter || us.adapter)(s).then(function(i) {
    return Oo(s), i.data = Eo.call(
      s,
      s.transformResponse,
      i
    ), i.headers = Xt.from(i.headers), i;
  }, function(i) {
    return Rc(i) || (Oo(s), i && i.response && (i.response.data = Eo.call(
      s,
      s.transformResponse,
      i.response
    ), i.response.headers = Xt.from(i.response.headers))), Promise.reject(i);
  });
}
const Uc = "1.7.7", tr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, i) => {
  tr[s] = function(r) {
    return typeof r === s || "a" + (i < 1 ? "n " : " ") + s;
  };
});
const zl = {};
tr.transitional = function(s, i, r) {
  function a(u, h) {
    return "[Axios v" + Uc + "] Transitional option '" + u + "'" + h + (r ? ". " + r : "");
  }
  return (u, h, f) => {
    if (s === !1)
      throw new G(
        a(h, " has been removed" + (i ? " in " + i : "")),
        G.ERR_DEPRECATED
      );
    return i && !zl[h] && (zl[h] = !0, console.warn(
      a(
        h,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), s ? s(u, h, f) : !0;
  };
};
function $b(s, i, r) {
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
  assertOptions: $b,
  validators: tr
}, Re = Lo.validators;
class tn {
  constructor(i) {
    this.defaults = i, this.interceptors = {
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
      silentJSONParsing: Re.transitional(Re.boolean),
      forcedJSONParsing: Re.transitional(Re.boolean),
      clarifyTimeoutError: Re.transitional(Re.boolean)
    }, !1), u != null && (E.isFunction(u) ? r.paramsSerializer = {
      serialize: u
    } : Lo.assertOptions(u, {
      encode: Re.function,
      serialize: Re.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let f = h && E.merge(
      h.common,
      h[r.method]
    );
    h && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete h[C];
      }
    ), r.headers = Xt.concat(f, h);
    const g = [];
    let $ = !0;
    this.interceptors.request.forEach(function(C) {
      typeof C.runWhen == "function" && C.runWhen(r) === !1 || ($ = $ && C.synchronous, g.unshift(C.fulfilled, C.rejected));
    });
    const b = [];
    this.interceptors.response.forEach(function(C) {
      b.push(C.fulfilled, C.rejected);
    });
    let v, P = 0, S;
    if (!$) {
      const C = [Ll.bind(this), void 0];
      for (C.unshift.apply(C, g), C.push.apply(C, b), S = C.length, v = Promise.resolve(r); P < S; )
        v = v.then(C[P++], C[P++]);
      return v;
    }
    S = g.length;
    let A = r;
    for (P = 0; P < S; ) {
      const C = g[P++], O = g[P++];
      try {
        A = C(A);
      } catch (W) {
        O.call(this, W);
        break;
      }
    }
    try {
      v = Ll.call(this, A);
    } catch (C) {
      return Promise.reject(C);
    }
    for (P = 0, S = b.length; P < S; )
      v = v.then(b[P++], b[P++]);
    return v;
  }
  getUri(i) {
    i = nn(this.defaults, i);
    const r = Bc(i.baseURL, i.url);
    return Cc(r, i.params, i.paramsSerializer);
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
function xb(s) {
  return function(i) {
    return s.apply(null, i);
  };
}
function Sb(s) {
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
function Mc(s) {
  const i = new tn(s), r = vc(tn.prototype.request, i);
  return E.extend(r, tn.prototype, i, { allOwnKeys: !0 }), E.extend(r, i, null, { allOwnKeys: !0 }), r.create = function(a) {
    return Mc(nn(s, a));
  }, r;
}
const Pt = Mc(us);
Pt.Axios = tn;
Pt.CanceledError = Sn;
Pt.CancelToken = er;
Pt.isCancel = Rc;
Pt.VERSION = Uc;
Pt.toFormData = pi;
Pt.AxiosError = G;
Pt.Cancel = Pt.CanceledError;
Pt.all = function(s) {
  return Promise.all(s);
};
Pt.spread = xb;
Pt.isAxiosError = Sb;
Pt.mergeConfig = nn;
Pt.AxiosHeaders = Xt;
Pt.formToJSON = (s) => Ac(E.isHTMLForm(s) ? new FormData(s) : s);
Pt.getAdapter = jc.getAdapter;
Pt.HttpStatusCode = zo;
Pt.default = Pt;
const _b = (s) => {
  const i = typeof s;
  return s !== null && (i === "object" || i === "function");
}, To = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), Eb = new Set("0123456789");
function Ob(s) {
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
        if (a === "index" && !Eb.has(h))
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
function Tb(s, i) {
  if (typeof i != "number" && Array.isArray(s)) {
    const r = Number.parseInt(i, 10);
    return Number.isInteger(r) && s[r] === s[i];
  }
  return !1;
}
function Cb(s, i, r) {
  if (!_b(s) || typeof i != "string")
    return r === void 0 ? s : r;
  const a = Ob(i);
  if (a.length === 0)
    return r;
  for (let u = 0; u < a.length; u++) {
    const h = a[u];
    if (Tb(s, h) ? s = u === a.length - 1 ? void 0 : null : s = s[h], s == null) {
      if (u !== a.length - 1)
        return r;
      break;
    }
  }
  return s === void 0 ? r : s;
}
const Lc = Hl("config", {
  persist: !0,
  state: () => ({
    config: {}
  }),
  getters: {
    get: (s) => (i, r) => Cb(s.config, i, r)
  },
  actions: {
    async load() {
      Pt.get("/api/config").then((s) => {
        this.config = s.data;
      });
    }
  }
});
function Pb() {
  return {
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    password: "",
    passwordc: "",
    locale: Lc().get("site.registration.user_defaults.locale", "en_US"),
    captcha: "",
    spiderbro: "http://"
  };
}
function Ab() {
  return Lc().get("locales.available");
}
function Rb() {
  return "/account/captcha";
}
async function Ib(s) {
  return vt.post("/account/register", s).then((i) => i.data).catch((i) => {
    throw {
      description: "An error as occurred",
      style: ke.Danger,
      closeBtn: !0,
      ...i.response.data
    };
  });
}
const Bb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  doRegister: Ib,
  getAvailableLocales: Ab,
  getCaptchaUrl: Rb,
  getDefaultForm: Pb
}, Symbol.toStringTag, { value: "Module" }));
async function Fb(s) {
  return vt.post("/account/forgot-password", { email: s }).then((i) => ({
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
async function Nb(s) {
  return vt.post("/account/resend-verification", { email: s }).then((i) => ({
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
const Db = { class: "uk-fieldset uk-form-stacked" }, jb = { class: "uk-margin" }, Ub = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Mb = { class: "uk-width-1-2" }, Lb = { class: "uk-width-1-2" }, zb = { class: "uk-width-1-1" }, Hb = { class: "uk-margin" }, qb = { class: "uk-margin" }, Wb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Vb = { class: "uk-width-1-2" }, Jb = { class: "uk-width-1-2" }, Kb = { class: "uk-margin" }, Gb = ["value"], Xb = { class: "uk-margin" }, Yb = {
  class: "uk-form-controls uk-grid-small",
  "uk-grid": ""
}, Qb = { class: "uk-width-2-3" }, Zb = { class: "uk-width-1-3" }, tw = ["src"], ew = { class: "uk-text-center" }, nw = ["disabled"], zc = /* @__PURE__ */ ot({
  __name: "FormRegister",
  setup(s) {
    const { getDefaultForm: i, doRegister: r, getAvailableLocales: a, getCaptchaUrl: u } = Bb, h = ve(!1), f = ve();
    let g = i();
    async function $() {
      h.value = !0, f.value = null, await r(g).then((b) => {
        Wl.notification({
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
        onSubmit: v[8] || (v[8] = ii((S) => $(), ["prevent"]))
      }, [
        k("fieldset", Db, [
          f.value ? (R(), dt(P, {
            key: 0,
            "data-test": "error",
            alert: f.value
          }, null, 8, ["alert"])) : Q("", !0),
          k("div", jb, [
            v[9] || (v[9] = k("label", {
              class: "uk-form-label",
              for: "first_name"
            }, "Name and email", -1)),
            k("div", Ub, [
              k("div", Mb, [
                jt(k("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "First Name",
                  "aria-label": "First Name",
                  id: "first_name",
                  "data-test": "first_name",
                  "onUpdate:modelValue": v[0] || (v[0] = (S) => U(g).first_name = S)
                }, null, 512), [
                  [Vt, U(g).first_name]
                ])
              ]),
              k("div", Lb, [
                jt(k("input", {
                  class: "uk-input",
                  type: "text",
                  placeholder: "Last Name",
                  "aria-label": "Last Name",
                  "data-test": "last_name",
                  "onUpdate:modelValue": v[1] || (v[1] = (S) => U(g).last_name = S)
                }, null, 512), [
                  [Vt, U(g).last_name]
                ])
              ]),
              k("div", zb, [
                jt(k("input", {
                  class: "uk-input",
                  type: "email",
                  placeholder: "Email",
                  "aria-label": "Email",
                  "data-test": "email",
                  "onUpdate:modelValue": v[2] || (v[2] = (S) => U(g).email = S)
                }, null, 512), [
                  [Vt, U(g).email]
                ])
              ])
            ])
          ]),
          k("div", Hb, [
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
              [Vt, U(g).user_name]
            ])
          ]),
          k("div", qb, [
            v[11] || (v[11] = k("label", {
              class: "uk-form-label",
              for: "form-stacked-text"
            }, "Password", -1)),
            k("div", Wb, [
              k("div", Vb, [
                jt(k("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Password",
                  "aria-label": "Password",
                  "data-test": "password",
                  "onUpdate:modelValue": v[4] || (v[4] = (S) => U(g).password = S)
                }, null, 512), [
                  [Vt, U(g).password]
                ])
              ]),
              k("div", Jb, [
                jt(k("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Confirm Password",
                  "aria-label": "Confirm Password",
                  "data-test": "passwordc",
                  "onUpdate:modelValue": v[5] || (v[5] = (S) => U(g).passwordc = S)
                }, null, 512), [
                  [Vt, U(g).passwordc]
                ])
              ])
            ])
          ]),
          k("div", Kb, [
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
              }, X(S), 9, Gb))), 128))
            ], 512), [
              [Ho, U(g).locale]
            ])
          ]),
          k("div", Xb, [
            v[13] || (v[13] = k("label", {
              class: "uk-form-label",
              for: "r-form-captcha"
            }, "Captcha", -1)),
            k("div", Yb, [
              k("div", Qb, [
                jt(k("input", {
                  class: "uk-input",
                  type: "password",
                  placeholder: "Captcha",
                  "aria-label": "Captcha",
                  id: "r-form-captcha",
                  "data-test": "captcha",
                  "onUpdate:modelValue": v[7] || (v[7] = (S) => U(g).captcha = S)
                }, null, 512), [
                  [Vt, U(g).captcha]
                ])
              ]),
              k("div", Zb, [
                k("img", {
                  src: U(u)(),
                  id: "captcha",
                  "data-target": "#r-form-captcha"
                }, null, 8, tw)
              ])
            ])
          ]),
          v[14] || (v[14] = k("p", null, [
            pt(" By registering an account with UserFrosting, you accept "),
            k("a", null, "the terms and conditions"),
            pt(". ")
          ], -1)),
          k("div", ew, [
            k("button", {
              class: "uk-button uk-button-primary",
              disabled: h.value
            }, "Sign me up", 8, nw)
          ])
        ])
      ], 32);
    };
  }
}), sw = { class: "uk-fieldset" }, iw = { class: "uk-margin" }, ow = { class: "uk-inline uk-width-1-1" }, rw = { class: "uk-text-center" }, aw = ["disabled"], Hc = /* @__PURE__ */ ot({
  __name: "FormForgotPassword",
  setup(s) {
    const i = ve(!1), r = ve();
    let a = "";
    async function u() {
      i.value = !0, r.value = null, await Fb(a).then((h) => {
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
        onSubmit: f[1] || (f[1] = ii(($) => u(), ["prevent"]))
      }, [
        k("fieldset", sw, [
          r.value ? (R(), dt(g, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : Q("", !0),
          k("div", iw, [
            k("div", ow, [
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
                [Vt, U(a)]
              ])
            ])
          ]),
          k("div", rw, [
            k("button", {
              class: "uk-button uk-button-primary",
              disabled: i.value,
              "data-test": "submit"
            }, " Email Password Reset Link ", 8, aw)
          ])
        ])
      ], 32);
    };
  }
}), lw = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, cw = { class: "uk-navbar-container" }, uw = { class: "uk-container uk-container-expand" }, hw = {
  class: "uk-navbar",
  "uk-navbar": ""
}, dw = {
  class: "uk-navbar-left",
  "data-test": "navbar-left"
}, fw = {
  class: "uk-navbar-right",
  "data-test": "navbar-right"
}, pw = { class: "uk-navbar-nav" }, mw = /* @__PURE__ */ ot({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(s) {
    return (i, r) => (R(), B("header", null, [
      k("div", lw, [
        k("div", cw, [
          k("div", uw, [
            k("nav", hw, [
              k("div", dw, [
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
              k("div", fw, [
                k("ul", pw, [
                  z(i.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), gw = { "data-test": "label" }, vw = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0px"
}, bw = {
  class: "uk-nav uk-navbar-dropdown-nav",
  "data-test": "slot"
}, nr = /* @__PURE__ */ ot({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(s) {
    return (i, r) => (R(), B("li", null, [
      k("a", gw, [
        z(i.$slots, "label", {}, () => [
          pt(X(i.label), 1)
        ]),
        r[0] || (r[0] = pt()),
        r[1] || (r[1] = k("span", { "uk-navbar-parent-icon": "" }, null, -1))
      ]),
      k("div", vw, [
        k("ul", bw, [
          z(i.$slots, "default")
        ])
      ])
    ]));
  }
}), ww = {}, yw = { class: "uk-nav-divider" };
function kw(s, i) {
  return R(), B("li", yw);
}
const $w = /* @__PURE__ */ rs(ww, [["render", kw]]), xw = { key: 0 }, Sw = ["href"], _w = ["href", "onClick"], Ew = /* @__PURE__ */ ot({
  __name: "NavBarItem",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(s) {
    const i = s, r = ce(() => i.to === "" || typeof i.to == "string" && i.to.startsWith("http"));
    return (a, u) => r.value ? (R(), B("li", xw, [
      k("a", {
        href: a.to.toString(),
        target: "_blank"
      }, [
        z(a.$slots, "default", {}, () => [
          pt(X(a.label), 1)
        ])
      ], 8, Sw)
    ])) : (R(), dt(U(os), ns({
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
          ], 16, _w)
        ], 2)
      ]),
      _: 3
    }, 16, ["to"]));
  }
}), Ow = { class: "uk-text-center" }, Tw = /* @__PURE__ */ ot({
  __name: "NavBarLogin",
  setup(s) {
    return (i, r) => (R(), dt(nr, {
      label: "Login",
      class: "uf-nav-login uk-text-center"
    }, {
      default: gt(() => [
        Ct(Xo),
        k("div", Ow, [
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
}), Cw = {
  key: 0,
  "data-test": "username"
}, Pw = ["src"], Aw = { class: "uk-margin" }, Rw = ["src"], Iw = {
  key: 1,
  class: "uk-margin-remove",
  "data-test": "username"
}, Bw = {
  key: 2,
  class: "uk-margin-remove uk-text-meta",
  "data-test": "meta"
}, Fw = /* @__PURE__ */ ot({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(s) {
    return (i, r) => (R(), dt(nr, { class: "uf-nav-user uk-text-center" }, {
      label: gt(() => [
        i.username ? (R(), B("span", Cw, X(i.username), 1)) : Q("", !0),
        i.avatar ? (R(), B("img", {
          key: 1,
          src: i.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, Pw)) : Q("", !0)
      ]),
      default: gt(() => [
        k("div", Aw, [
          i.avatar ? (R(), B("img", {
            key: 0,
            src: i.avatar,
            alt: "avatar",
            class: "uk-border-circle",
            "uk-height-match": ""
          }, null, 8, Rw)) : Q("", !0),
          i.username ? (R(), B("p", Iw, X(i.username), 1)) : Q("", !0),
          i.meta ? (R(), B("p", Bw, "(" + X(i.meta) + ")", 1)) : Q("", !0)
        ]),
        z(i.$slots, "default", { dataTest: "slot" })
      ]),
      _: 3
    }));
  }
}), Nw = { key: 0 }, Dw = ["href"], jw = { key: 1 }, Uw = /* @__PURE__ */ ot({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(s) {
    const i = s, r = ce(() => typeof i.to == "string" && i.to.startsWith("http"));
    return (a, u) => r.value ? (R(), B("li", Nw, [
      k("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: a.to.toString(),
        target: "_blank"
      }, [
        z(a.$slots, "default", {}, () => [
          pt(X(a.label), 1)
        ])
      ], 8, Dw)
    ])) : (R(), B("li", jw, [
      Ct(U(os), {
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
}), Mw = { class: "uk-list" }, Lw = { class: "uk-text-center" }, zw = /* @__PURE__ */ ot({
  __name: "PageLogin",
  setup(s) {
    return (i, r) => {
      const a = xt("font-awesome-icon"), u = xt("UFCardBoxBig");
      return R(), dt(u, null, {
        default: gt(() => [
          r[5] || (r[5] = k("h3", { class: "uk-card-title" }, "Login", -1)),
          Ct(Xo),
          k("ul", Mw, [
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
          k("div", Lw, [
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
}), Hw = { class: "uk-text-center" }, qw = /* @__PURE__ */ ot({
  __name: "PageRegister",
  setup(s) {
    return (i, r) => {
      const a = xt("font-awesome-icon"), u = xt("UFCardBoxBig");
      return R(), dt(u, null, {
        default: gt(() => [
          r[3] || (r[3] = k("h3", { class: "uk-card-title" }, "Register", -1)),
          Ct(zc),
          r[4] || (r[4] = k("hr", null, null, -1)),
          k("div", Hw, [
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
}), Ww = /* @__PURE__ */ ot({
  __name: "PageForgotPassword",
  setup(s) {
    return (i, r) => {
      const a = xt("UFCardBoxBig");
      return R(), dt(a, null, {
        default: gt(() => [
          r[0] || (r[0] = k("h3", { class: "uk-card-title" }, "Forgotten Password", -1)),
          r[1] || (r[1] = k("p", null, " Please enter the email address you used to sign up. A link with instructions to reset your password will be emailed to you. ", -1)),
          Ct(Hc)
        ]),
        _: 1
      });
    };
  }
}), Vw = { class: "uk-fieldset" }, Jw = { class: "uk-margin" }, Kw = { class: "uk-inline uk-width-1-1" }, Gw = { class: "uk-text-center" }, Xw = ["disabled"], Yw = /* @__PURE__ */ ot({
  __name: "FormResendVerification",
  setup(s) {
    const i = ve(!1), r = ve();
    let a = "";
    async function u() {
      i.value = !0, r.value = null, await Nb(a).then((h) => {
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
        onSubmit: f[1] || (f[1] = ii(($) => u(), ["prevent"]))
      }, [
        k("fieldset", Vw, [
          r.value ? (R(), dt(g, {
            key: 0,
            "data-test": "error",
            alert: r.value
          }, null, 8, ["alert"])) : Q("", !0),
          k("div", Jw, [
            k("div", Kw, [
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
                [Vt, U(a)]
              ])
            ])
          ]),
          k("div", Gw, [
            k("button", {
              class: "uk-button uk-button-primary",
              disabled: i.value,
              "data-test": "submit"
            }, " Email the verification link for my account ", 8, Xw)
          ])
        ])
      ], 32);
    };
  }
}), Qw = /* @__PURE__ */ ot({
  __name: "PageResendVerification",
  setup(s) {
    return (i, r) => {
      const a = xt("UFCardBoxBig");
      return R(), dt(a, null, {
        default: gt(() => [
          r[0] || (r[0] = k("h3", { class: "uk-card-title" }, "Resend Verification Email", -1)),
          r[1] || (r[1] = k("p", null, " Please enter the email address you used to sign up, and your verification email will be resent. ", -1)),
          Ct(Yw)
        ]),
        _: 1
      });
    };
  }
}), Zw = {}, ty = { class: "uf-sidebar-left uk-light uk-visible@m" }, ey = { class: "left-nav-wrap" }, ny = {
  class: "uk-nav uk-nav-default",
  "data-uk-nav": ""
};
function sy(s, i) {
  return R(), B("aside", ty, [
    k("div", ey, [
      k("ul", ny, [
        z(s.$slots, "default")
      ])
    ])
  ]);
}
const iy = /* @__PURE__ */ rs(Zw, [["render", sy]]), oy = ["data-uk-icon"], ry = {
  key: 2,
  "uk-nav-parent-icon": "",
  "data-test": "caret"
}, ay = {
  class: "uk-nav-sub",
  "data-test": "slot"
}, ly = /* @__PURE__ */ ot({
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
      return R(), dt(U(os), ns({ to: i.to }, i.$props, { custom: "" }), {
        default: gt(({ isActive: u }) => [
          k("li", {
            class: he(["uk-parent", { "uk-open": u }])
          }, [
            k("a", sp(ip(i.$attrs)), [
              i.icon ? (R(), B("span", {
                key: 0,
                "data-uk-icon": i.icon,
                class: "uk-margin-small-right",
                "data-test": "icon"
              }, null, 8, oy)) : Q("", !0),
              i.faIcon ? (R(), dt(a, {
                key: 1,
                class: "uk-margin-small-right",
                icon: i.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : Q("", !0),
              z(i.$slots, "label", {}, () => [
                pt(X(i.label), 1)
              ]),
              i.hideCaret ? Q("", !0) : (R(), B("span", ry))
            ], 16),
            k("ul", ay, [
              z(i.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]);
    };
  }
}), cy = { key: 0 }, uy = ["href"], hy = ["data-uk-icon"], dy = ["href", "onClick"], fy = ["data-uk-icon"], py = /* @__PURE__ */ ot({
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
      return r.value ? (R(), B("li", cy, [
        k("a", {
          href: a.to.toString(),
          target: "_blank"
        }, [
          a.icon ? (R(), B("span", {
            key: 0,
            "data-uk-icon": a.icon,
            class: "uk-margin-small-right",
            "data-test": "icon"
          }, null, 8, hy)) : Q("", !0),
          a.faIcon ? (R(), dt(h, {
            key: 1,
            class: "uk-margin-small-right",
            icon: a.faIcon,
            "data-test": "faIcon"
          }, null, 8, ["icon"])) : Q("", !0),
          z(a.$slots, "default", {}, () => [
            pt(X(a.label), 1)
          ])
        ], 8, uy)
      ])) : (R(), dt(U(os), ns({
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
              }, null, 8, fy)) : Q("", !0),
              a.faIcon ? (R(), dt(h, {
                key: 1,
                class: "uk-margin-small-right",
                icon: a.faIcon,
                "data-test": "faIcon"
              }, null, 8, ["icon"])) : Q("", !0),
              z(a.$slots, "default", {}, () => [
                pt(X(a.label), 1)
              ])
            ], 16, dy)
          ], 2)
        ]),
        _: 3
      }, 16, ["to"]));
    };
  }
}), my = { class: "uk-nav-header" }, gy = /* @__PURE__ */ ot({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(s) {
    return (i, r) => (R(), B("li", my, X(i.label), 1));
  }
}), vy = {};
function by(s, i) {
  return R(), B("td", null, [
    z(s.$slots, "default")
  ]);
}
const wy = /* @__PURE__ */ rs(vy, [["render", by]]), yy = {
  key: 0,
  class: "uk-table-link uk-padding-small"
}, ky = {
  key: 1,
  class: "uk-padding-small"
}, $y = /* @__PURE__ */ ot({
  __name: "SprunjeHeader",
  props: {
    sort: {}
  },
  setup(s) {
    const i = oi("sprunjer"), { sorts: r, toggleSort: a } = i;
    return (u, h) => {
      const f = xt("font-awesome-icon");
      return u.sort ? (R(), B("th", yy, [
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
      ])) : (R(), B("th", ky, [
        z(u.$slots, "default")
      ]));
    };
  }
}), xy = {
  class: "uk-child-width-auto",
  "uk-grid": ""
}, Sy = { class: "uk-text-left uk-text-meta" }, _y = { class: "uk-text-center uk-width-expand" }, Ey = ["value"], Oy = { class: "uk-text-right" }, Ty = { "aria-label": "Pagination" }, Cy = {
  class: "uk-pagination uk-flex-right",
  "uk-margin": ""
}, qc = /* @__PURE__ */ ot({
  __name: "SprunjePaginator",
  props: {
    rowsPerPageOptions: { default: () => [5, 10, 20, 50] }
  },
  setup(s) {
    const i = oi("sprunjer"), { size: r, page: a, totalPages: u, countFiltered: h, first: f, last: g } = i;
    function $(b) {
      a.value = b;
    }
    return (b, v) => {
      const P = xt("font-awesome-icon");
      return R(), B("div", xy, [
        k("div", Sy, [
          k("span", null, "Showing " + X(U(f)) + " - " + X(U(g)) + " of " + X(U(h)), 1)
        ]),
        k("div", _y, [
          jt(k("select", {
            class: "uk-select uk-form-small uk-form-width-small",
            "aria-label": "Select per page",
            "onUpdate:modelValue": v[0] || (v[0] = (S) => qo(r) ? r.value = S : null)
          }, [
            (R(!0), B(Qe, null, es(b.rowsPerPageOptions, (S) => (R(), B("option", {
              key: S,
              value: S
            }, X(S) + " per page ", 9, Ey))), 128))
          ], 512), [
            [Ho, U(r)]
          ])
        ]),
        k("div", Oy, [
          k("nav", Ty, [
            k("ul", Cy, [
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
}), Py = {
  key: 0,
  class: "uk-search uk-search-default"
}, Ay = ["placeholder"], Ry = /* @__PURE__ */ ot({
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
    const i = s, r = oi("sprunjer"), { filters: a } = r, u = ce(() => i.label ? "Search " + i.label + "..." : "Search " + i.column + "...");
    return (h, f) => s.column ? (R(), B("div", Py, [
      jt(k("input", {
        class: "uk-search-input uk-form-small",
        type: "search",
        placeholder: u.value,
        "aria-label": "Search",
        "onUpdate:modelValue": f[0] || (f[0] = (g) => U(a)[s.column] = g)
      }, null, 8, Ay), [
        [Vt, U(a)[s.column]]
      ]),
      f[1] || (f[1] = k("span", {
        class: "uk-search-icon-flip",
        "uk-search-icon": ""
      }, null, -1))
    ])) : Q("", !0);
  }
}), Iy = ["onUpdate:modelValue"], By = ["value"], Fy = ["placeholder", "onUpdate:modelValue"], Ny = /* @__PURE__ */ ot({
  __name: "SprunjeFilters",
  setup(s) {
    const i = oi("sprunjer"), { data: r, filters: a } = i, u = ce(() => r.value.filterable), h = ce(() => r.value.listable), f = () => {
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
              "onUpdate:modelValue": (C) => U(a)[S] = C,
              class: "uk-select"
            }, [
              v[0] || (v[0] = k("option", { value: "" }, null, -1)),
              (R(!0), B(Qe, null, es($(S), (C) => (R(), B("option", {
                key: C.value,
                value: C.value
              }, X(C.text), 9, By))), 128))
            ], 8, Iy)), [
              [Ho, U(a)[S]]
            ]) : jt((R(), B("input", {
              key: 1,
              class: "uk-input",
              type: "text",
              placeholder: S,
              "onUpdate:modelValue": (C) => U(a)[S] = C
            }, null, 8, Fy)), [
              [Vt, U(a)[S]]
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
}), Dy = {
  "uk-grid": "",
  class: "uk-child-width-1-2"
}, jy = { class: "uk-text-left" }, Uy = { class: "uk-text-right" }, My = {
  "uk-grid": "",
  class: "uk-grid-small uk-grid-divider"
}, Ly = { class: "uk-width-expand" }, zy = { class: "uk-table uk-table-striped uk-table-small" }, Hy = {
  key: 0,
  class: "uk-width-1-4"
}, qy = /* @__PURE__ */ ot({
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
    const i = ve(!1), r = rp(() => s.dataUrl, s.defaultSorts, s.defaultFilters, s.defaultSize, s.defaultPage), { rows: a } = r;
    return op("sprunjer", r), (u, h) => {
      const f = xt("font-awesome-icon");
      return R(), B(Qe, null, [
        k("div", Dy, [
          k("div", jy, [
            z(u.$slots, "actions", { sprunjer: U(r) })
          ]),
          k("div", Uy, [
            z(u.$slots, "filters", { sprunjer: U(r) }),
            u.searchColumn ? (R(), dt(Ry, {
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
        k("div", My, [
          k("div", Ly, [
            k("table", zy, [
              k("thead", null, [
                k("tr", null, [
                  z(u.$slots, "header", { sprunjer: U(r) })
                ])
              ]),
              k("tbody", null, [
                (R(!0), B(Qe, null, es(U(a), (g) => (R(), B("tr", {
                  key: g.id
                }, [
                  z(u.$slots, "body", {
                    item: g,
                    sprunjer: U(r)
                  })
                ]))), 128))
              ])
            ])
          ]),
          i.value === !0 ? (R(), B("div", Hy, [
            Ct(Ny),
            z(u.$slots, "filterPanel", { sprunjer: U(r) })
          ])) : Q("", !0)
        ]),
        u.hidePagination ? Q("", !0) : z(u.$slots, "paginator", {
          key: 0,
          sprunjer: U(r)
        }, () => [
          Ct(qc)
        ])
      ], 64);
    };
  }
}), Qy = {
  install: (s) => {
    s.component("UFAlert", up).component("UFLabel", hp).component("UFModal", wp).component("UFModalAlert", $p).component("UFModalConfirmation", _p).component("UFModalPrompt", Cp).component("UFAppLink", Wo).component("UFInfoBox", Up).component("UFCardBox", Wp).component("UFCardBoxBig", Kp).component("UFMainContent", Zp).component("UFHeaderPage", sm).component("UFFooterContent", lm).component("UFFormLogin", Xo).component("UFFormRegister", zc).component("UFFormForgotPassword", Hc).component("UFNavBar", mw).component("UFNavBarDropdown", nr).component("UFNavBarDropdownSeparator", $w).component("UFNavBarItem", Ew).component("UFNavBarLogin", Tw).component("UFNavBarUserCard", Fw).component("UFNavBarUserCardButton", Uw).component("UFPageLogin", zw).component("UFPageRegister", qw).component("UFPageForgotPassword", Ww).component("UFPageResendVerification", Qw).component("UFSideBar", iy).component("UFSideBarDropdown", ly).component("UFSideBarItem", py).component("UFSideBarLabel", gy).component("UFSprunjeColumn", wy).component("UFSprunjeHeader", $y).component("UFSprunjePaginator", qc).component("UFSprunjeTable", qy);
  }
};
export {
  Qw as A,
  ly as B,
  py as C,
  gy as D,
  wy as E,
  lm as F,
  $y as G,
  qc as H,
  qy as I,
  Zp as M,
  $w as N,
  Qy as P,
  iy as S,
  Wl as U,
  rs as _,
  up as a,
  hp as b,
  cm as c,
  wp as d,
  $p as e,
  _p as f,
  um as g,
  Cp as h,
  Wo as i,
  Up as j,
  Wp as k,
  Kp as l,
  sm as m,
  mt as n,
  Xo as o,
  zc as p,
  Hc as q,
  mw as r,
  nr as s,
  Ew as t,
  Tw as u,
  Fw as v,
  Uw as w,
  zw as x,
  qw as y,
  Ww as z
};
