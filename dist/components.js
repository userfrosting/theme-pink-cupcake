import { defineComponent as p, computed as h, openBlock as s, createElementBlock as r, normalizeClass as B, createCommentVNode as c, toDisplayString as u, createElementVNode as n, renderSlot as l, createTextVNode as i, createBlock as k, unref as v, withCtx as _, createVNode as w, mergeProps as m, resolveComponent as N, normalizeProps as L, guardReactiveProps as D } from "vue";
import { AlertStyle as b } from "./types.js";
import { RouterLink as $ } from "vue-router";
const A = { key: 1 }, U = /* @__PURE__ */ p({
  __name: "AlertContainer",
  props: {
    alert: {}
  },
  setup(o) {
    const e = o, a = h(() => {
      switch (e.alert.style) {
        case b.Success:
          return "uk-alert-success";
        case b.Warning:
          return "uk-alert-warning";
        case b.Danger:
          return "uk-alert-danger";
        case b.Primary:
        default:
          return "uk-alert-primary";
      }
    });
    return (t, d) => (s(), r("div", {
      class: B([a.value, "uk-alert"]),
      "uk-alert": ""
    }, [
      t.alert.closeBtn ? (s(), r("a", {
        key: 0,
        class: "uk-alert-close",
        "uk-close": "",
        onClick: d[0] || (d[0] = (f) => t.$emit("close"))
      })) : c("", !0),
      t.alert.title ? (s(), r("h3", A, u(t.alert.title), 1)) : c("", !0),
      n("p", null, [
        l(t.$slots, "default", {}, () => [
          i(u(t.alert.description), 1)
        ])
      ])
    ], 2));
  }
}), E = ["href"], S = /* @__PURE__ */ p({
  __name: "AppLink",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(o) {
    const e = o, a = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, d) => a.value ? (s(), r("a", {
      key: 0,
      href: t.to,
      target: "_blank"
    }, [
      l(t.$slots, "default", {}, () => [
        i(u(t.label), 1)
      ])
    ], 8, E)) : (s(), k(v($), {
      key: 1,
      to: t.to
    }, {
      default: _(() => [
        l(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["to"]));
  }
}), C = (o, e) => {
  const a = o.__vccOpts || o;
  for (const [t, d] of e)
    a[t] = d;
  return a;
}, P = {}, W = { class: "uf-main uk-section uk-section-default" }, V = { class: "uk-container" };
function z(o, e) {
  return s(), r("div", W, [
    n("div", V, [
      l(o.$slots, "default")
    ])
  ]);
}
const M = /* @__PURE__ */ C(P, [["render", z]]), R = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, F = { class: "uk-navbar-container" }, O = { class: "uk-container uk-container-expand" }, T = {
  class: "uk-navbar",
  "uk-navbar": ""
}, j = { class: "uk-navbar-left" }, q = { class: "uk-navbar-right" }, G = { class: "uk-navbar-nav" }, H = /* @__PURE__ */ p({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(o) {
    return (e, a) => (s(), r("header", null, [
      n("div", R, [
        n("div", F, [
          n("div", O, [
            n("nav", T, [
              n("div", j, [
                w(S, {
                  to: e.to,
                  class: "uk-navbar-item uk-logo",
                  label: ""
                }, {
                  default: _(() => [
                    l(e.$slots, "title", {}, () => [
                      i(u(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              n("div", q, [
                n("ul", G, [
                  l(e.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), J = /* @__PURE__ */ n("span", { "uk-navbar-parent-icon": "" }, null, -1), K = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0"
}, Q = { class: "uk-nav uk-navbar-dropdown-nav" }, X = /* @__PURE__ */ p({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(o) {
    return (e, a) => (s(), r("li", null, [
      n("a", null, [
        l(e.$slots, "label", {}, () => [
          i(u(e.label), 1)
        ]),
        i(),
        J
      ]),
      n("div", K, [
        n("ul", Q, [
          l(e.$slots, "default")
        ])
      ])
    ]));
  }
}), Y = {}, Z = { class: "uk-nav-divider" };
function x(o, e) {
  return s(), r("li", Z);
}
const ee = /* @__PURE__ */ C(Y, [["render", x]]), te = { key: 0 }, ae = ["href"], se = ["href", "onClick"], ne = /* @__PURE__ */ p({
  __name: "NavBarItem",
  props: {
    to: {},
    label: { default: "" }
  },
  setup(o) {
    const e = o, a = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, d) => a.value ? (s(), r("li", te, [
      n("a", {
        href: t.to,
        target: "_blank"
      }, [
        l(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
        ])
      ], 8, ae)
    ])) : (s(), k(v($), m({ key: 1 }, t.$props, { custom: "" }), {
      default: _(({ isActive: f, href: g, navigate: y }) => [
        n("li", {
          class: B({ "uk-active": f })
        }, [
          n("a", m(t.$attrs, {
            href: g,
            onClick: y
          }), [
            l(t.$slots, "default", {}, () => [
              i(u(t.label), 1)
            ])
          ], 16, se)
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), oe = { class: "uf-nav-user" }, re = ["src"], le = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0"
}, ue = { class: "uk-nav uk-navbar-dropdown-nav" }, ie = { class: "uk-card uk-card-body uk-text-center" }, ce = ["src"], de = { key: 1 }, pe = {
  key: 2,
  class: "uk-text-meta"
}, ke = /* @__PURE__ */ p({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(o) {
    return (e, a) => (s(), r("li", oe, [
      n("a", null, [
        i(u(e.username) + " ", 1),
        e.avatar ? (s(), r("img", {
          key: 0,
          src: e.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, re)) : c("", !0)
      ]),
      n("div", le, [
        n("ul", ue, [
          n("div", ie, [
            e.avatar ? (s(), r("img", {
              key: 0,
              src: e.avatar,
              alt: "avatar",
              class: "uk-border-circle",
              "uk-height-match": ""
            }, null, 8, ce)) : c("", !0),
            e.username ? (s(), r("p", de, u(e.username), 1)) : c("", !0),
            e.meta ? (s(), r("p", pe, "(" + u(e.meta) + ")", 1)) : c("", !0)
          ]),
          l(e.$slots, "default")
        ])
      ])
    ]));
  }
}), _e = { key: 0 }, fe = ["href"], me = { key: 1 }, he = /* @__PURE__ */ p({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(o) {
    const e = o, a = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, d) => a.value ? (s(), r("li", _e, [
      n("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: t.to,
        target: "_blank"
      }, [
        l(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
        ])
      ], 8, fe)
    ])) : (s(), r("li", me, [
      w(v($), {
        to: t.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: _(() => [
          l(t.$slots, "default", {}, () => [
            i(u(t.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["to"])
    ]));
  }
}), ve = {}, $e = { class: "uf-sidebar-left uk-light uk-visible@m" }, be = { class: "left-nav-wrap" }, Be = {
  class: "uk-nav uk-nav-default",
  "data-uk-nav": ""
};
function ge(o, e) {
  return s(), r("aside", $e, [
    n("div", be, [
      n("ul", Be, [
        l(o.$slots, "default")
      ])
    ])
  ]);
}
const ye = /* @__PURE__ */ C(ve, [["render", ge]]), Ce = ["data-uk-icon"], we = {
  key: 2,
  "uk-nav-parent-icon": ""
}, Ne = { class: "uk-nav-sub" }, Se = /* @__PURE__ */ p({
  __name: "SideBarDropdown",
  props: {
    to: {},
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" },
    hideCaret: { type: Boolean, default: !1 }
  },
  setup(o) {
    return (e, a) => {
      const t = N("font-awesome-icon");
      return s(), k(v($), m(e.$props, { custom: "" }), {
        default: _(({ isActive: d }) => [
          n("li", {
            class: B(["uk-parent", { "uk-open": d }])
          }, [
            n("a", L(D(e.$attrs)), [
              e.icon ? (s(), r("span", {
                key: 0,
                "data-uk-icon": e.icon,
                class: "uk-margin-small-right"
              }, null, 8, Ce)) : c("", !0),
              e.faIcon ? (s(), k(t, {
                key: 1,
                class: "uk-margin-small-right",
                icon: e.faIcon
              }, null, 8, ["icon"])) : c("", !0),
              l(e.$slots, "label", {}, () => [
                i(u(e.label), 1)
              ]),
              e.hideCaret ? c("", !0) : (s(), r("span", we))
            ], 16),
            n("ul", Ne, [
              l(e.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16);
    };
  }
}), Ie = { key: 0 }, Le = ["href"], De = ["data-uk-icon"], Ae = ["href", "onClick"], Ue = ["data-uk-icon"], Ee = /* @__PURE__ */ p({
  __name: "SideBarItem",
  props: {
    to: {},
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(o) {
    const e = o, a = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, d) => {
      const f = N("font-awesome-icon");
      return a.value ? (s(), r("li", Ie, [
        n("a", {
          href: t.to,
          target: "_blank"
        }, [
          t.icon ? (s(), r("span", {
            key: 0,
            "data-uk-icon": t.icon,
            class: "uk-margin-small-right"
          }, null, 8, De)) : c("", !0),
          t.faIcon ? (s(), k(f, {
            key: 1,
            class: "uk-margin-small-right",
            icon: t.faIcon
          }, null, 8, ["icon"])) : c("", !0),
          l(t.$slots, "default", {}, () => [
            i(u(t.label), 1)
          ])
        ], 8, Le)
      ])) : (s(), k(v($), m({ key: 1 }, t.$props, { custom: "" }), {
        default: _(({ isExactActive: g, href: y, navigate: I }) => [
          n("li", {
            class: B({ "uk-active": g })
          }, [
            n("a", m(t.$attrs, {
              href: y,
              onClick: I
            }), [
              t.icon ? (s(), r("span", {
                key: 0,
                "data-uk-icon": t.icon,
                class: "uk-margin-small-right"
              }, null, 8, Ue)) : c("", !0),
              t.faIcon ? (s(), k(f, {
                key: 1,
                class: "uk-margin-small-right",
                icon: t.faIcon
              }, null, 8, ["icon"])) : c("", !0),
              l(t.$slots, "default", {}, () => [
                i(u(t.label), 1)
              ])
            ], 16, Ae)
          ], 2)
        ]),
        _: 3
      }, 16));
    };
  }
}), Pe = { class: "uk-nav-header" }, We = /* @__PURE__ */ p({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(o) {
    return (e, a) => (s(), r("li", Pe, u(e.label), 1));
  }
}), Re = {
  install: (o, e) => {
    const a = e && e.prefix ? e.prefix : "UF";
    o.component(a + "AlertContainer", U).component(a + "AppLink", S).component(a + "MainContent", M).component(a + "NavBar", H).component(a + "NavBarDropdown", X).component(a + "NavBarDropdownSeparator", ee).component(a + "NavBarItem", ne).component(a + "NavBarUserCard", ke).component(a + "NavBarUserCardButton", he).component(a + "SideBar", ye).component(a + "SideBarDropdown", Se).component(a + "SideBarItem", Ee).component(a + "SideBarLabel", We);
  }
};
export {
  U as AlertContainer,
  S as AppLink,
  M as MainContent,
  H as NavBar,
  X as NavBarDropdown,
  ee as NavBarDropdownSeparator,
  ne as NavBarItem,
  ke as NavBarUserCard,
  he as NavBarUserCardButton,
  ye as SideBar,
  Se as SideBarDropdown,
  Ee as SideBarItem,
  We as SideBarLabel,
  Re as default
};
