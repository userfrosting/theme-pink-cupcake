import { defineComponent as d, openBlock as o, createElementBlock as r, normalizeClass as $, createCommentVNode as c, toDisplayString as u, createElementVNode as s, renderSlot as l, createTextVNode as i, computed as b, createBlock as _, unref as m, withCtx as f, createVNode as C, mergeProps as k, resolveComponent as N, normalizeProps as I, guardReactiveProps as L } from "vue";
import { AlertStyle as D } from "./types.js";
import { RouterLink as h } from "vue-router";
const A = { key: 1 }, U = /* @__PURE__ */ d({
  __name: "AlertContainer",
  props: {
    title: { default: "" },
    description: { default: "" },
    style: { default: D.Primary },
    closeBtn: { type: Boolean, default: !1 }
  },
  setup(n) {
    return (e, a) => (o(), r("div", {
      class: $(e.style),
      "uk-alert": ""
    }, [
      e.closeBtn ? (o(), r("a", {
        key: 0,
        class: "uk-alert-close",
        "uk-close": "",
        onClick: a[0] || (a[0] = (t) => e.$emit("close"))
      })) : c("", !0),
      e.title ? (o(), r("h3", A, u(e.title), 1)) : c("", !0),
      s("p", null, [
        l(e.$slots, "default", {}, () => [
          i(u(e.description), 1)
        ])
      ])
    ], 2));
  }
}), E = ["href"], w = /* @__PURE__ */ d({
  __name: "AppLink",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const e = n, a = b(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, p) => a.value ? (o(), r("a", {
      key: 0,
      href: t.to,
      target: "_blank"
    }, [
      l(t.$slots, "default", {}, () => [
        i(u(t.label), 1)
      ])
    ], 8, E)) : (o(), _(m(h), {
      key: 1,
      to: t.to
    }, {
      default: f(() => [
        l(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["to"]));
  }
}), g = (n, e) => {
  const a = n.__vccOpts || n;
  for (const [t, p] of e)
    a[t] = p;
  return a;
}, P = {}, V = { class: "uf-main uk-section uk-section-default" }, W = { class: "uk-container" };
function z(n, e) {
  return o(), r("div", V, [
    s("div", W, [
      l(n.$slots, "default")
    ])
  ]);
}
const M = /* @__PURE__ */ g(P, [["render", z]]), R = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, F = { class: "uk-navbar-container" }, O = { class: "uk-container uk-container-expand" }, T = {
  class: "uk-navbar",
  "uk-navbar": ""
}, j = { class: "uk-navbar-left" }, q = { class: "uk-navbar-right" }, G = { class: "uk-navbar-nav" }, H = /* @__PURE__ */ d({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(n) {
    return (e, a) => (o(), r("header", null, [
      s("div", R, [
        s("div", F, [
          s("div", O, [
            s("nav", T, [
              s("div", j, [
                C(w, {
                  to: e.to,
                  class: "uk-navbar-item uk-logo"
                }, {
                  default: f(() => [
                    l(e.$slots, "title", {}, () => [
                      i(u(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              s("div", q, [
                s("ul", G, [
                  l(e.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), J = /* @__PURE__ */ s("span", { "uk-navbar-parent-icon": "" }, null, -1), K = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0"
}, Q = { class: "uk-nav uk-navbar-dropdown-nav" }, X = /* @__PURE__ */ d({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(n) {
    return (e, a) => (o(), r("li", null, [
      s("a", null, [
        l(e.$slots, "label", {}, () => [
          i(u(e.label), 1)
        ]),
        i(),
        J
      ]),
      s("div", K, [
        s("ul", Q, [
          l(e.$slots, "default")
        ])
      ])
    ]));
  }
}), Y = {}, Z = { class: "uk-nav-divider" };
function x(n, e) {
  return o(), r("li", Z);
}
const ee = /* @__PURE__ */ g(Y, [["render", x]]), te = { key: 0 }, ae = ["href"], oe = ["href", "onClick"], se = /* @__PURE__ */ d({
  __name: "NavBarItem",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const e = n, a = b(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, p) => a.value ? (o(), r("li", te, [
      s("a", {
        href: t.to,
        target: "_blank"
      }, [
        l(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
        ])
      ], 8, ae)
    ])) : (o(), _(m(h), k({ key: 1 }, t.$props, { custom: "" }), {
      default: f(({ isActive: v, href: B, navigate: y }) => [
        s("li", {
          class: $({ "uk-active": v })
        }, [
          s("a", k(t.$attrs, {
            href: B,
            onClick: y
          }), [
            l(t.$slots, "default", {}, () => [
              i(u(t.label), 1)
            ])
          ], 16, oe)
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), ne = { class: "uf-nav-user" }, re = ["src"], le = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0"
}, ue = { class: "uk-nav uk-navbar-dropdown-nav" }, ie = { class: "uk-card uk-card-body uk-text-center" }, ce = ["src"], de = { key: 1 }, pe = {
  key: 2,
  class: "uk-text-meta"
}, _e = /* @__PURE__ */ d({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(n) {
    return (e, a) => (o(), r("li", ne, [
      s("a", null, [
        i(u(e.username) + " ", 1),
        e.avatar ? (o(), r("img", {
          key: 0,
          src: e.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, re)) : c("", !0)
      ]),
      s("div", le, [
        s("ul", ue, [
          s("div", ie, [
            e.avatar ? (o(), r("img", {
              key: 0,
              src: e.avatar,
              alt: "avatar",
              class: "uk-border-circle",
              "uk-height-match": ""
            }, null, 8, ce)) : c("", !0),
            e.username ? (o(), r("p", de, u(e.username), 1)) : c("", !0),
            e.meta ? (o(), r("p", pe, "(" + u(e.meta) + ")", 1)) : c("", !0)
          ]),
          l(e.$slots, "default")
        ])
      ])
    ]));
  }
}), fe = { key: 0 }, ke = ["href"], me = { key: 1 }, he = /* @__PURE__ */ d({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const e = n, a = b(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, p) => a.value ? (o(), r("li", fe, [
      s("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: t.to,
        target: "_blank"
      }, [
        l(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
        ])
      ], 8, ke)
    ])) : (o(), r("li", me, [
      C(m(h), {
        to: t.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: f(() => [
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
function ye(n, e) {
  return o(), r("aside", $e, [
    s("div", be, [
      s("ul", Be, [
        l(n.$slots, "default")
      ])
    ])
  ]);
}
const ge = /* @__PURE__ */ g(ve, [["render", ye]]), Ce = ["data-uk-icon"], Ne = {
  key: 2,
  "uk-nav-parent-icon": ""
}, we = { class: "uk-nav-sub" }, Se = /* @__PURE__ */ d({
  __name: "SideBarDropdown",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" },
    hideCaret: { type: Boolean, default: !1 }
  },
  setup(n) {
    return (e, a) => {
      const t = N("font-awesome-icon");
      return o(), _(m(h), k(e.$props, { custom: "" }), {
        default: f(({ isActive: p }) => [
          s("li", {
            class: $(["uk-parent", { "uk-open": p }])
          }, [
            s("a", I(L(e.$attrs)), [
              e.icon ? (o(), r("span", {
                key: 0,
                "data-uk-icon": e.icon,
                class: "uk-margin-small-right"
              }, null, 8, Ce)) : c("", !0),
              e.faIcon ? (o(), _(t, {
                key: 1,
                class: "uk-margin-small-right",
                icon: e.faIcon
              }, null, 8, ["icon"])) : c("", !0),
              l(e.$slots, "label", {}, () => [
                i(u(e.label), 1)
              ]),
              e.hideCaret ? c("", !0) : (o(), r("span", Ne))
            ], 16),
            s("ul", we, [
              l(e.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16);
    };
  }
}), Ie = { key: 0 }, Le = ["href"], De = ["data-uk-icon"], Ae = ["href", "onClick"], Ue = ["data-uk-icon"], Ee = /* @__PURE__ */ d({
  __name: "SideBarItem",
  props: {
    to: { default: "" },
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(n) {
    const e = n, a = b(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, p) => {
      const v = N("font-awesome-icon");
      return a.value ? (o(), r("li", Ie, [
        s("a", {
          href: t.to,
          target: "_blank"
        }, [
          t.icon ? (o(), r("span", {
            key: 0,
            "data-uk-icon": t.icon,
            class: "uk-margin-small-right"
          }, null, 8, De)) : c("", !0),
          t.faIcon ? (o(), _(v, {
            key: 1,
            class: "uk-margin-small-right",
            icon: t.faIcon
          }, null, 8, ["icon"])) : c("", !0),
          l(t.$slots, "default", {}, () => [
            i(u(t.label), 1)
          ])
        ], 8, Le)
      ])) : (o(), _(m(h), k({ key: 1 }, t.$props, { custom: "" }), {
        default: f(({ isExactActive: B, href: y, navigate: S }) => [
          s("li", {
            class: $({ "uk-active": B })
          }, [
            s("a", k(t.$attrs, {
              href: y,
              onClick: S
            }), [
              t.icon ? (o(), r("span", {
                key: 0,
                "data-uk-icon": t.icon,
                class: "uk-margin-small-right"
              }, null, 8, Ue)) : c("", !0),
              t.faIcon ? (o(), _(v, {
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
}), Pe = { class: "uk-nav-header" }, Ve = /* @__PURE__ */ d({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(n) {
    return (e, a) => (o(), r("li", Pe, u(e.label), 1));
  }
}), Re = {
  install: (n, e) => {
    const a = e && e.prefix ? e.prefix : "UF";
    n.component(a + "AlertContainer", U).component(a + "AppLink", w).component(a + "MainContent", M).component(a + "NavBar", H).component(a + "NavBarDropdown", X).component(a + "NavBarDropdownSeparator", ee).component(a + "NavBarItem", se).component(a + "NavBarUserCard", _e).component(a + "NavBarUserCardButton", he).component(a + "SideBar", ge).component(a + "SideBarDropdown", Se).component(a + "SideBarItem", Ee).component(a + "SideBarLabel", Ve);
  }
};
export {
  U as AlertContainer,
  w as AppLink,
  M as MainContent,
  H as NavBar,
  X as NavBarDropdown,
  ee as NavBarDropdownSeparator,
  se as NavBarItem,
  _e as NavBarUserCard,
  he as NavBarUserCardButton,
  ge as SideBar,
  Se as SideBarDropdown,
  Ee as SideBarItem,
  Ve as SideBarLabel,
  Re as default
};
