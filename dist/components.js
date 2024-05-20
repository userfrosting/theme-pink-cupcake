import { defineComponent as d, computed as h, openBlock as s, createElementBlock as o, normalizeClass as g, createCommentVNode as c, toDisplayString as u, createElementVNode as a, renderSlot as r, createTextVNode as i, createBlock as p, unref as v, withCtx as k, createVNode as w, mergeProps as m, resolveComponent as N, normalizeProps as F, guardReactiveProps as I } from "vue";
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
    return (t, _) => (s(), o("div", {
      class: g([l.value, "uk-alert"]),
      "uk-alert": ""
    }, [
      t.alert.closeBtn ? (s(), o("a", {
        key: 0,
        class: "uk-alert-close",
        "uk-close": "",
        onClick: _[0] || (_[0] = (f) => t.$emit("close"))
      })) : c("", !0),
      t.alert.title ? (s(), o("h3", L, u(t.alert.title), 1)) : c("", !0),
      a("p", null, [
        r(t.$slots, "default", {}, () => [
          i(u(t.alert.description), 1)
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
    return (t, _) => l.value ? (s(), o("a", {
      key: 0,
      href: t.to,
      target: "_blank"
    }, [
      r(t.$slots, "default", {}, () => [
        i(u(t.label), 1)
      ])
    ], 8, A)) : (s(), p(v($), {
      key: 1,
      to: t.to
    }, {
      default: k(() => [
        r(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
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
      ])) : c("", !0),
      a("div", z, [
        r(e.$slots, "default")
      ])
    ]));
  }
}), B = (n, e) => {
  const l = n.__vccOpts || n;
  for (const [t, _] of e)
    l[t] = _;
  return l;
}, R = {}, O = {
  class: "uf-main uk-section uk-section-default uk-section-muted",
  "uk-height-viewport": "expand: true"
}, T = { class: "uk-container" };
function j(n, e) {
  return s(), o("div", O, [
    a("div", T, [
      r(n.$slots, "default")
    ])
  ]);
}
const q = /* @__PURE__ */ B(R, [["render", j]]), G = {}, H = { class: "uf-main uk-section uk-section-small uk-section-muted uk-text-center" }, J = /* @__PURE__ */ a("hr", null, null, -1), K = { class: "uk-text-small uk-text-center" };
function Q(n, e) {
  return s(), o("footer", H, [
    J,
    a("p", K, [
      r(n.$slots, "default")
    ])
  ]);
}
const X = /* @__PURE__ */ B(G, [["render", Q]]), Y = { "uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" }, Z = { class: "uk-navbar-container" }, x = { class: "uk-container uk-container-expand" }, ee = {
  class: "uk-navbar",
  "uk-navbar": ""
}, te = { class: "uk-navbar-left" }, ae = { class: "uk-navbar-right" }, se = { class: "uk-navbar-nav" }, ne = /* @__PURE__ */ d({
  __name: "NavBar",
  props: {
    to: { default: "" },
    title: { default: "" }
  },
  setup(n) {
    return (e, l) => (s(), o("header", null, [
      a("div", Y, [
        a("div", Z, [
          a("div", x, [
            a("nav", ee, [
              a("div", te, [
                w(U, {
                  to: e.to,
                  class: "uk-navbar-item uk-logo",
                  label: ""
                }, {
                  default: k(() => [
                    r(e.$slots, "title", {}, () => [
                      i(u(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              a("div", ae, [
                a("ul", se, [
                  r(e.$slots, "default")
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), oe = /* @__PURE__ */ a("span", { "uk-navbar-parent-icon": "" }, null, -1), re = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0"
}, le = { class: "uk-nav uk-navbar-dropdown-nav" }, ue = /* @__PURE__ */ d({
  __name: "NavBarDropdown",
  props: {
    label: { default: "" }
  },
  setup(n) {
    return (e, l) => (s(), o("li", null, [
      a("a", null, [
        r(e.$slots, "label", {}, () => [
          i(u(e.label), 1)
        ]),
        i(),
        oe
      ]),
      a("div", re, [
        a("ul", le, [
          r(e.$slots, "default")
        ])
      ])
    ]));
  }
}), ce = {}, ie = { class: "uk-nav-divider" };
function de(n, e) {
  return s(), o("li", ie);
}
const _e = /* @__PURE__ */ B(ce, [["render", de]]), pe = { key: 0 }, ke = ["href"], fe = ["href", "onClick"], me = /* @__PURE__ */ d({
  __name: "NavBarItem",
  props: {
    to: {},
    label: { default: "" }
  },
  setup(n) {
    const e = n, l = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, _) => l.value ? (s(), o("li", pe, [
      a("a", {
        href: t.to,
        target: "_blank"
      }, [
        r(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
        ])
      ], 8, ke)
    ])) : (s(), p(v($), m({ key: 1 }, t.$props, { custom: "" }), {
      default: k(({ isActive: f, href: y, navigate: C }) => [
        a("li", {
          class: g({ "uk-active": f })
        }, [
          a("a", m(t.$attrs, {
            href: y,
            onClick: C
          }), [
            r(t.$slots, "default", {}, () => [
              i(u(t.label), 1)
            ])
          ], 16, fe)
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), he = { class: "uf-nav-user" }, ve = ["src"], $e = {
  class: "uk-navbar-dropdown",
  "uk-dropdown": "offset: 0"
}, be = { class: "uk-nav uk-navbar-dropdown-nav" }, ge = { class: "uk-card uk-card-body uk-text-center" }, Be = ["src"], ye = { key: 1 }, Ce = {
  key: 2,
  class: "uk-text-meta"
}, we = /* @__PURE__ */ d({
  __name: "NavBarUserCard",
  props: {
    username: { default: "" },
    avatar: { default: "" },
    meta: { default: "" }
  },
  setup(n) {
    return (e, l) => (s(), o("li", he, [
      a("a", null, [
        i(u(e.username) + " ", 1),
        e.avatar ? (s(), o("img", {
          key: 0,
          src: e.avatar,
          alt: "avatar",
          class: "uk-border-circle"
        }, null, 8, ve)) : c("", !0)
      ]),
      a("div", $e, [
        a("ul", be, [
          a("div", ge, [
            e.avatar ? (s(), o("img", {
              key: 0,
              src: e.avatar,
              alt: "avatar",
              class: "uk-border-circle",
              "uk-height-match": ""
            }, null, 8, Be)) : c("", !0),
            e.username ? (s(), o("p", ye, u(e.username), 1)) : c("", !0),
            e.meta ? (s(), o("p", Ce, "(" + u(e.meta) + ")", 1)) : c("", !0)
          ]),
          r(e.$slots, "default")
        ])
      ])
    ]));
  }
}), Ne = { key: 0 }, Ue = ["href"], Se = { key: 1 }, Fe = /* @__PURE__ */ d({
  __name: "NavBarUserCardButton",
  props: {
    to: { default: "" },
    label: { default: "" }
  },
  setup(n) {
    const e = n, l = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, _) => l.value ? (s(), o("li", Ne, [
      a("a", {
        class: "uk-button uk-button-default uk-button-small uk-text-center",
        href: t.to,
        target: "_blank"
      }, [
        r(t.$slots, "default", {}, () => [
          i(u(t.label), 1)
        ])
      ], 8, Ue)
    ])) : (s(), o("li", Se, [
      w(v($), {
        to: t.to,
        class: "uk-button uk-button-default uk-button-small uk-text-center"
      }, {
        default: k(() => [
          r(t.$slots, "default", {}, () => [
            i(u(t.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["to"])
    ]));
  }
}), Ie = {}, Le = { class: "uf-sidebar-left uk-light uk-visible@m" }, De = { class: "left-nav-wrap" }, Ae = {
  class: "uk-nav uk-nav-default",
  "data-uk-nav": ""
};
function Ee(n, e) {
  return s(), o("aside", Le, [
    a("div", De, [
      a("ul", Ae, [
        r(n.$slots, "default")
      ])
    ])
  ]);
}
const Pe = /* @__PURE__ */ B(Ie, [["render", Ee]]), We = ["data-uk-icon"], Ve = {
  key: 2,
  "uk-nav-parent-icon": ""
}, ze = { class: "uk-nav-sub" }, Me = /* @__PURE__ */ d({
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
      return s(), p(v($), m(e.$props, { custom: "" }), {
        default: k(({ isActive: _ }) => [
          a("li", {
            class: g(["uk-parent", { "uk-open": _ }])
          }, [
            a("a", F(I(e.$attrs)), [
              e.icon ? (s(), o("span", {
                key: 0,
                "data-uk-icon": e.icon,
                class: "uk-margin-small-right"
              }, null, 8, We)) : c("", !0),
              e.faIcon ? (s(), p(t, {
                key: 1,
                class: "uk-margin-small-right",
                icon: e.faIcon
              }, null, 8, ["icon"])) : c("", !0),
              r(e.$slots, "label", {}, () => [
                i(u(e.label), 1)
              ]),
              e.hideCaret ? c("", !0) : (s(), o("span", Ve))
            ], 16),
            a("ul", ze, [
              r(e.$slots, "default")
            ])
          ], 2)
        ]),
        _: 3
      }, 16);
    };
  }
}), Re = { key: 0 }, Oe = ["href"], Te = ["data-uk-icon"], je = ["href", "onClick"], qe = ["data-uk-icon"], Ge = /* @__PURE__ */ d({
  __name: "SideBarItem",
  props: {
    to: {},
    label: { default: "" },
    faIcon: { default: "" },
    icon: { default: "" }
  },
  setup(n) {
    const e = n, l = h(() => typeof e.to == "string" && e.to.startsWith("http"));
    return (t, _) => {
      const f = N("font-awesome-icon");
      return l.value ? (s(), o("li", Re, [
        a("a", {
          href: t.to,
          target: "_blank"
        }, [
          t.icon ? (s(), o("span", {
            key: 0,
            "data-uk-icon": t.icon,
            class: "uk-margin-small-right"
          }, null, 8, Te)) : c("", !0),
          t.faIcon ? (s(), p(f, {
            key: 1,
            class: "uk-margin-small-right",
            icon: t.faIcon
          }, null, 8, ["icon"])) : c("", !0),
          r(t.$slots, "default", {}, () => [
            i(u(t.label), 1)
          ])
        ], 8, Oe)
      ])) : (s(), p(v($), m({ key: 1 }, t.$props, { custom: "" }), {
        default: k(({ isExactActive: y, href: C, navigate: S }) => [
          a("li", {
            class: g({ "uk-active": y })
          }, [
            a("a", m(t.$attrs, {
              href: C,
              onClick: S
            }), [
              t.icon ? (s(), o("span", {
                key: 0,
                "data-uk-icon": t.icon,
                class: "uk-margin-small-right"
              }, null, 8, qe)) : c("", !0),
              t.faIcon ? (s(), p(f, {
                key: 1,
                class: "uk-margin-small-right",
                icon: t.faIcon
              }, null, 8, ["icon"])) : c("", !0),
              r(t.$slots, "default", {}, () => [
                i(u(t.label), 1)
              ])
            ], 16, je)
          ], 2)
        ]),
        _: 3
      }, 16));
    };
  }
}), He = { class: "uk-nav-header" }, Je = /* @__PURE__ */ d({
  __name: "SideBarLabel",
  props: {
    label: {}
  },
  setup(n) {
    return (e, l) => (s(), o("li", He, u(e.label), 1));
  }
}), Ye = {
  install: (n) => {
    n.component("UFAlertContainer", D).component("UFAppLink", U).component("UFCardBox", M).component("UFMainContent", q).component("UFFooterContent", X).component("UFNavBar", ne).component("UFNavBarDropdown", ue).component("UFNavBarDropdownSeparator", _e).component("UFNavBarItem", me).component("UFNavBarUserCard", we).component("UFNavBarUserCardButton", Fe).component("UFSideBar", Pe).component("UFSideBarDropdown", Me).component("UFSideBarItem", Ge).component("UFSideBarLabel", Je);
  }
};
export {
  D as AlertContainer,
  U as AppLink,
  M as CardBox,
  X as FooterContent,
  q as MainContent,
  ne as NavBar,
  ue as NavBarDropdown,
  _e as NavBarDropdownSeparator,
  me as NavBarItem,
  we as NavBarUserCard,
  Fe as NavBarUserCardButton,
  Pe as SideBar,
  Me as SideBarDropdown,
  Ge as SideBarItem,
  Je as SideBarLabel,
  Ye as default
};
