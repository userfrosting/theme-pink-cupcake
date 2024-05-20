import { defineComponent as d, computed as h, openBlock as s, createElementBlock as o, normalizeClass as B, createCommentVNode as i, toDisplayString as u, createElementVNode as a, renderSlot as r, createTextVNode as c, createBlock as _, unref as v, withCtx as k, createVNode as w, mergeProps as m, resolveComponent as N, normalizeProps as F, guardReactiveProps as I } from "vue";
import { AlertStyle as b } from "./types.js";
import { RouterLink as $ } from "vue-router";
const L = { key: 1 }, D = /* @__PURE__ */ d({
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
    return (t, p) => (s(), o("div", {
      class: B([l.value, "uk-alert"]),
      "uk-alert": ""
    }, [
      t.alert.closeBtn ? (s(), o("a", {
        key: 0,
        class: "uk-alert-close",
        "uk-close": "",
        onClick: p[0] || (p[0] = (f) => t.$emit("close"))
      })) : i("", !0),
      t.alert.title ? (s(), o("h3", L, u(t.alert.title), 1)) : i("", !0),
      a("p", null, [
        r(t.$slots, "default", {}, () => [
          c(u(t.alert.description), 1)
        ])
      ])
    ], 2));
  }
}), A = ["href"], U = /* @__PURE__ */ d({
  __name: "AppLink",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const e = n, l = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, p) => l.value ? (s(), o("a", {
      key: 0,
      href: t.to,
      target: "_blank"
    }, [
      r(t.$slots, "default", {}, () => [
        c(u(t.label), 1)
      ])
    ], 8, A)) : (s(), _(v($), {
      key: 1,
      to: t.to
    }, {
      default: k(() => [
        r(t.$slots, "default", {}, () => [
          c(u(t.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["to"]));
  }
}), E = { class: "uk-card uk-card-default uk-card-small" }, P = {
  key: 0,
  class: "uk-card-header"
}, W = { class: "uk-grid uk-grid-small" }, V = { class: "uk-width-auto" }, z = { class: "uk-card-body" }, M = /* @__PURE__ */ d({
  __name: "CardBox",
  props: {
    title: String
  },
  setup(n) {
    return (e, l) => (s(), o("div", E, [
      n.title ? (s(), o("div", P, [
        a("div", W, [
          a("div", V, [
            a("h4", null, u(n.title), 1)
          ])
        ])
      ])) : i("", !0),
      a("div", z, [
        r(e.$slots, "default")
      ])
    ]));
  }
}), C = (n, e) => {
  const l = n.__vccOpts || n;
  for (const [t, p] of e)
    l[t] = p;
  return l;
}, R = {}, O = { class: "uf-main uk-section uk-section-default uk-section-muted" }, T = { class: "uk-container" };
function j(n, e) {
  return s(), o("div", O, [
    a("div", T, [
      r(n.$slots, "default")
    ])
  ]);
}
const q = /* @__PURE__ */ C(R, [["render", j]]), G = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, H = { class: "uk-navbar-container" }, J = { class: "uk-container uk-container-expand" }, K = {
  class: "uk-navbar",
  "uk-navbar": ""
}, Q = { class: "uk-navbar-left" }, X = { class: "uk-navbar-right" }, Y = { class: "uk-navbar-nav" }, Z = /* @__PURE__ */ d({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(n) {
    return (e, l) => (s(), o("header", null, [
      a("div", G, [
        a("div", H, [
          a("div", J, [
            a("nav", K, [
              a("div", Q, [
                w(U, {
                  to: e.to,
                  class: "uk-navbar-item uk-logo",
                  label: ""
                }, {
                  default: k(() => [
                    r(e.$slots, "title", {}, () => [
                      c(u(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              a("div", X, [
                a("ul", Y, [
                  r(e.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), x = /* @__PURE__ */ a("span", { "uk-navbar-parent-icon": "" }, null, -1), ee = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0"
}, te = { class: "uk-nav uk-navbar-dropdown-nav" }, ae = /* @__PURE__ */ d({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(n) {
    return (e, l) => (s(), o("li", null, [
      a("a", null, [
        r(e.$slots, "label", {}, () => [
          c(u(e.label), 1)
        ]),
        c(),
        x
      ]),
      a("div", ee, [
        a("ul", te, [
          r(e.$slots, "default")
        ])
      ])
    ]));
  }
}), se = {}, ne = { class: "uk-nav-divider" };
function oe(n, e) {
  return s(), o("li", ne);
}
const re = /* @__PURE__ */ C(se, [["render", oe]]), le = { key: 0 }, ue = ["href"], ie = ["href", "onClick"], ce = /* @__PURE__ */ d({
  __name: "NavBarItem",
  props: {
    to: {},
    label: { default: "" }
  },
  setup(n) {
    const e = n, l = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, p) => l.value ? (s(), o("li", le, [
      a("a", {
        href: t.to,
        target: "_blank"
      }, [
        r(t.$slots, "default", {}, () => [
          c(u(t.label), 1)
        ])
      ], 8, ue)
    ])) : (s(), _(v($), m({ key: 1 }, t.$props, { custom: "" }), {
      default: k(({ isActive: f, href: g, navigate: y }) => [
        a("li", {
          class: B({ "uk-active": f })
        }, [
          a("a", m(t.$attrs, {
            href: g,
            onClick: y
          }), [
            r(t.$slots, "default", {}, () => [
              c(u(t.label), 1)
            ])
          ], 16, ie)
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), de = { class: "uf-nav-user" }, pe = ["src"], _e = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0"
}, ke = { class: "uk-nav uk-navbar-dropdown-nav" }, fe = { class: "uk-card uk-card-body uk-text-center" }, me = ["src"], he = { key: 1 }, ve = {
  key: 2,
  class: "uk-text-meta"
}, $e = /* @__PURE__ */ d({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(n) {
    return (e, l) => (s(), o("li", de, [
      a("a", null, [
        c(u(e.username) + " ", 1),
        e.avatar ? (s(), o("img", {
          key: 0,
          src: e.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, pe)) : i("", !0)
      ]),
      a("div", _e, [
        a("ul", ke, [
          a("div", fe, [
            e.avatar ? (s(), o("img", {
              key: 0,
              src: e.avatar,
              alt: "avatar",
              class: "uk-border-circle",
              "uk-height-match": ""
            }, null, 8, me)) : i("", !0),
            e.username ? (s(), o("p", he, u(e.username), 1)) : i("", !0),
            e.meta ? (s(), o("p", ve, "(" + u(e.meta) + ")", 1)) : i("", !0)
          ]),
          r(e.$slots, "default")
        ])
      ])
    ]));
  }
}), be = { key: 0 }, Be = ["href"], ge = { key: 1 }, ye = /* @__PURE__ */ d({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const e = n, l = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, p) => l.value ? (s(), o("li", be, [
      a("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: t.to,
        target: "_blank"
      }, [
        r(t.$slots, "default", {}, () => [
          c(u(t.label), 1)
        ])
      ], 8, Be)
    ])) : (s(), o("li", ge, [
      w(v($), {
        to: t.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: k(() => [
          r(t.$slots, "default", {}, () => [
            c(u(t.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["to"])
    ]));
  }
}), Ce = {}, we = { class: "uf-sidebar-left uk-light uk-visible@m" }, Ne = { class: "left-nav-wrap" }, Ue = {
  class: "uk-nav uk-nav-default",
  "data-uk-nav": ""
};
function Se(n, e) {
  return s(), o("aside", we, [
    a("div", Ne, [
      a("ul", Ue, [
        r(n.$slots, "default")
      ])
    ])
  ]);
}
const Fe = /* @__PURE__ */ C(Ce, [["render", Se]]), Ie = ["data-uk-icon"], Le = {
  key: 2,
  "uk-nav-parent-icon": ""
}, De = { class: "uk-nav-sub" }, Ae = /* @__PURE__ */ d({
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
      return s(), _(v($), m(e.$props, { custom: "" }), {
        default: k(({ isActive: p }) => [
          a("li", {
            class: B(["uk-parent", { "uk-open": p }])
          }, [
            a("a", F(I(e.$attrs)), [
              e.icon ? (s(), o("span", {
                key: 0,
                "data-uk-icon": e.icon,
                class: "uk-margin-small-right"
              }, null, 8, Ie)) : i("", !0),
              e.faIcon ? (s(), _(t, {
                key: 1,
                class: "uk-margin-small-right",
                icon: e.faIcon
              }, null, 8, ["icon"])) : i("", !0),
              r(e.$slots, "label", {}, () => [
                c(u(e.label), 1)
              ]),
              e.hideCaret ? i("", !0) : (s(), o("span", Le))
            ], 16),
            a("ul", De, [
              r(e.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16);
    };
  }
}), Ee = { key: 0 }, Pe = ["href"], We = ["data-uk-icon"], Ve = ["href", "onClick"], ze = ["data-uk-icon"], Me = /* @__PURE__ */ d({
  __name: "SideBarItem",
  props: {
    to: {},
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(n) {
    const e = n, l = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, p) => {
      const f = N("font-awesome-icon");
      return l.value ? (s(), o("li", Ee, [
        a("a", {
          href: t.to,
          target: "_blank"
        }, [
          t.icon ? (s(), o("span", {
            key: 0,
            "data-uk-icon": t.icon,
            class: "uk-margin-small-right"
          }, null, 8, We)) : i("", !0),
          t.faIcon ? (s(), _(f, {
            key: 1,
            class: "uk-margin-small-right",
            icon: t.faIcon
          }, null, 8, ["icon"])) : i("", !0),
          r(t.$slots, "default", {}, () => [
            c(u(t.label), 1)
          ])
        ], 8, Pe)
      ])) : (s(), _(v($), m({ key: 1 }, t.$props, { custom: "" }), {
        default: k(({ isExactActive: g, href: y, navigate: S }) => [
          a("li", {
            class: B({ "uk-active": g })
          }, [
            a("a", m(t.$attrs, {
              href: y,
              onClick: S
            }), [
              t.icon ? (s(), o("span", {
                key: 0,
                "data-uk-icon": t.icon,
                class: "uk-margin-small-right"
              }, null, 8, ze)) : i("", !0),
              t.faIcon ? (s(), _(f, {
                key: 1,
                class: "uk-margin-small-right",
                icon: t.faIcon
              }, null, 8, ["icon"])) : i("", !0),
              r(t.$slots, "default", {}, () => [
                c(u(t.label), 1)
              ])
            ], 16, Ve)
          ], 2)
        ]),
        _: 3
      }, 16));
    };
  }
}), Re = { class: "uk-nav-header" }, Oe = /* @__PURE__ */ d({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(n) {
    return (e, l) => (s(), o("li", Re, u(e.label), 1));
  }
}), Ge = {
  install: (n) => {
    n.component("UFAlertContainer", D).component("UFAppLink", U).component("UFCardBox", M).component("UFMainContent", q).component("UFNavBar", Z).component("UFNavBarDropdown", ae).component("UFNavBarDropdownSeparator", re).component("UFNavBarItem", ce).component("UFNavBarUserCard", $e).component("UFNavBarUserCardButton", ye).component("UFSideBar", Fe).component("UFSideBarDropdown", Ae).component("UFSideBarItem", Me).component("UFSideBarLabel", Oe);
  }
};
export {
  D as AlertContainer,
  U as AppLink,
  M as CardBox,
  q as MainContent,
  Z as NavBar,
  ae as NavBarDropdown,
  re as NavBarDropdownSeparator,
  ce as NavBarItem,
  $e as NavBarUserCard,
  ye as NavBarUserCardButton,
  Fe as SideBar,
  Ae as SideBarDropdown,
  Me as SideBarItem,
  Oe as SideBarLabel,
  Ge as default
};
