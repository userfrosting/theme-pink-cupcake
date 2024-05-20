import { defineComponent as p, computed as h, openBlock as a, createElementBlock as o, normalizeClass as B, createCommentVNode as c, toDisplayString as u, createElementVNode as s, renderSlot as r, createTextVNode as i, createBlock as k, unref as v, withCtx as _, createVNode as w, mergeProps as m, resolveComponent as N, normalizeProps as I, guardReactiveProps as F } from "vue";
import { AlertStyle as b } from "./types.js";
import { RouterLink as $ } from "vue-router";
const L = { key: 1 }, D = /* @__PURE__ */ p({
  __name: "AlertContainer",
  props: {
    alert: {}
  },
  setup(n) {
    const e = n, l = h(() => {
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
    return (t, d) => (a(), o("div", {
      class: B([l.value, "uk-alert"]),
      "uk-alert": ""
    }, [
      t.alert.closeBtn ? (a(), o("a", {
        key: 0,
        class: "uk-alert-close",
        "uk-close": "",
        onClick: d[0] || (d[0] = (f) => t.$emit("close"))
      })) : c("", !0),
      t.alert.title ? (a(), o("h3", L, u(t.alert.title), 1)) : c("", !0),
      s("p", null, [
        r(t.$slots, "default", {}, () => [
          i(u(t.alert.description), 1)
        ])
      ])
    ], 2));
  }
}), A = ["href"], U = /* @__PURE__ */ p({
  __name: "AppLink",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const e = n, l = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, d) => l.value ? (a(), o("a", {
      key: 0,
      href: t.to,
      target: "_blank"
    }, [
      r(t.$slots, "default", {}, () => [
        i(u(t.label), 1)
      ])
    ], 8, A)) : (a(), k(v($), {
      key: 1,
      to: t.to
    }, {
      default: _(() => [
        r(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["to"]));
  }
}), C = (n, e) => {
  const l = n.__vccOpts || n;
  for (const [t, d] of e)
    l[t] = d;
  return l;
}, E = {}, P = { class: "uf-main uk-section uk-section-default uk-section-muted" }, W = { class: "uk-container" };
function V(n, e) {
  return a(), o("div", P, [
    s("div", W, [
      r(n.$slots, "default")
    ])
  ]);
}
const z = /* @__PURE__ */ C(E, [["render", V]]), M = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, R = { class: "uk-navbar-container" }, O = { class: "uk-container uk-container-expand" }, T = {
  class: "uk-navbar",
  "uk-navbar": ""
}, j = { class: "uk-navbar-left" }, q = { class: "uk-navbar-right" }, G = { class: "uk-navbar-nav" }, H = /* @__PURE__ */ p({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(n) {
    return (e, l) => (a(), o("header", null, [
      s("div", M, [
        s("div", R, [
          s("div", O, [
            s("nav", T, [
              s("div", j, [
                w(U, {
                  to: e.to,
                  class: "uk-navbar-item uk-logo",
                  label: ""
                }, {
                  default: _(() => [
                    r(e.$slots, "title", {}, () => [
                      i(u(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              s("div", q, [
                s("ul", G, [
                  r(e.$slots, "default")
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
}, Q = { class: "uk-nav uk-navbar-dropdown-nav" }, X = /* @__PURE__ */ p({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(n) {
    return (e, l) => (a(), o("li", null, [
      s("a", null, [
        r(e.$slots, "label", {}, () => [
          i(u(e.label), 1)
        ]),
        i(),
        J
      ]),
      s("div", K, [
        s("ul", Q, [
          r(e.$slots, "default")
        ])
      ])
    ]));
  }
}), Y = {}, Z = { class: "uk-nav-divider" };
function x(n, e) {
  return a(), o("li", Z);
}
const ee = /* @__PURE__ */ C(Y, [["render", x]]), te = { key: 0 }, ae = ["href"], se = ["href", "onClick"], ne = /* @__PURE__ */ p({
  __name: "NavBarItem",
  props: {
    to: {},
    label: { default: "" }
  },
  setup(n) {
    const e = n, l = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, d) => l.value ? (a(), o("li", te, [
      s("a", {
        href: t.to,
        target: "_blank"
      }, [
        r(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
        ])
      ], 8, ae)
    ])) : (a(), k(v($), m({ key: 1 }, t.$props, { custom: "" }), {
      default: _(({ isActive: f, href: g, navigate: y }) => [
        s("li", {
          class: B({ "uk-active": f })
        }, [
          s("a", m(t.$attrs, {
            href: g,
            onClick: y
          }), [
            r(t.$slots, "default", {}, () => [
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
  setup(n) {
    return (e, l) => (a(), o("li", oe, [
      s("a", null, [
        i(u(e.username) + " ", 1),
        e.avatar ? (a(), o("img", {
          key: 0,
          src: e.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, re)) : c("", !0)
      ]),
      s("div", le, [
        s("ul", ue, [
          s("div", ie, [
            e.avatar ? (a(), o("img", {
              key: 0,
              src: e.avatar,
              alt: "avatar",
              class: "uk-border-circle",
              "uk-height-match": ""
            }, null, 8, ce)) : c("", !0),
            e.username ? (a(), o("p", de, u(e.username), 1)) : c("", !0),
            e.meta ? (a(), o("p", pe, "(" + u(e.meta) + ")", 1)) : c("", !0)
          ]),
          r(e.$slots, "default")
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
  setup(n) {
    const e = n, l = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, d) => l.value ? (a(), o("li", _e, [
      s("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: t.to,
        target: "_blank"
      }, [
        r(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
        ])
      ], 8, fe)
    ])) : (a(), o("li", me, [
      w(v($), {
        to: t.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: _(() => [
          r(t.$slots, "default", {}, () => [
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
function ge(n, e) {
  return a(), o("aside", $e, [
    s("div", be, [
      s("ul", Be, [
        r(n.$slots, "default")
      ])
    ])
  ]);
}
const ye = /* @__PURE__ */ C(ve, [["render", ge]]), Ce = ["data-uk-icon"], we = {
  key: 2,
  "uk-nav-parent-icon": ""
}, Ne = { class: "uk-nav-sub" }, Ue = /* @__PURE__ */ p({
  __name: "SideBarDropdown",
  props: {
    to: {},
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" },
    hideCaret: { type: Boolean, default: !1 }
  },
  setup(n) {
    return (e, l) => {
      const t = N("font-awesome-icon");
      return a(), k(v($), m(e.$props, { custom: "" }), {
        default: _(({ isActive: d }) => [
          s("li", {
            class: B(["uk-parent", { "uk-open": d }])
          }, [
            s("a", I(F(e.$attrs)), [
              e.icon ? (a(), o("span", {
                key: 0,
                "data-uk-icon": e.icon,
                class: "uk-margin-small-right"
              }, null, 8, Ce)) : c("", !0),
              e.faIcon ? (a(), k(t, {
                key: 1,
                class: "uk-margin-small-right",
                icon: e.faIcon
              }, null, 8, ["icon"])) : c("", !0),
              r(e.$slots, "label", {}, () => [
                i(u(e.label), 1)
              ]),
              e.hideCaret ? c("", !0) : (a(), o("span", we))
            ], 16),
            s("ul", Ne, [
              r(e.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16);
    };
  }
}), Se = { key: 0 }, Ie = ["href"], Fe = ["data-uk-icon"], Le = ["href", "onClick"], De = ["data-uk-icon"], Ae = /* @__PURE__ */ p({
  __name: "SideBarItem",
  props: {
    to: {},
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(n) {
    const e = n, l = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, d) => {
      const f = N("font-awesome-icon");
      return l.value ? (a(), o("li", Se, [
        s("a", {
          href: t.to,
          target: "_blank"
        }, [
          t.icon ? (a(), o("span", {
            key: 0,
            "data-uk-icon": t.icon,
            class: "uk-margin-small-right"
          }, null, 8, Fe)) : c("", !0),
          t.faIcon ? (a(), k(f, {
            key: 1,
            class: "uk-margin-small-right",
            icon: t.faIcon
          }, null, 8, ["icon"])) : c("", !0),
          r(t.$slots, "default", {}, () => [
            i(u(t.label), 1)
          ])
        ], 8, Ie)
      ])) : (a(), k(v($), m({ key: 1 }, t.$props, { custom: "" }), {
        default: _(({ isExactActive: g, href: y, navigate: S }) => [
          s("li", {
            class: B({ "uk-active": g })
          }, [
            s("a", m(t.$attrs, {
              href: y,
              onClick: S
            }), [
              t.icon ? (a(), o("span", {
                key: 0,
                "data-uk-icon": t.icon,
                class: "uk-margin-small-right"
              }, null, 8, De)) : c("", !0),
              t.faIcon ? (a(), k(f, {
                key: 1,
                class: "uk-margin-small-right",
                icon: t.faIcon
              }, null, 8, ["icon"])) : c("", !0),
              r(t.$slots, "default", {}, () => [
                i(u(t.label), 1)
              ])
            ], 16, Le)
          ], 2)
        ]),
        _: 3
      }, 16));
    };
  }
}), Ee = { class: "uk-nav-header" }, Pe = /* @__PURE__ */ p({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(n) {
    return (e, l) => (a(), o("li", Ee, u(e.label), 1));
  }
}), Me = {
  install: (n) => {
    n.component("UFAlertContainer", D).component("UFAppLink", U).component("UFMainContent", z).component("UFNavBar", H).component("UFNavBarDropdown", X).component("UFNavBarDropdownSeparator", ee).component("UFNavBarItem", ne).component("UFNavBarUserCard", ke).component("UFNavBarUserCardButton", he).component("UFSideBar", ye).component("UFSideBarDropdown", Ue).component("UFSideBarItem", Ae).component("UFSideBarLabel", Pe);
  }
};
export {
  D as AlertContainer,
  U as AppLink,
  z as MainContent,
  H as NavBar,
  X as NavBarDropdown,
  ee as NavBarDropdownSeparator,
  ne as NavBarItem,
  ke as NavBarUserCard,
  he as NavBarUserCardButton,
  ye as SideBar,
  Ue as SideBarDropdown,
  Ae as SideBarItem,
  Pe as SideBarLabel,
  Me as default
};
