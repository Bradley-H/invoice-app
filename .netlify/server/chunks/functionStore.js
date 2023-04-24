import { c as create_ssr_component, a as subscribe, e as escape, h as null_to_empty, k as is_void, g as add_attribute } from "./index2.js";
import { w as writable } from "./index.js";
let globalStore = writable({
  theme: "Dark",
  // status of the current theme // Dark or Light
  modalStatus: null,
  // status of modal //
  invoices: []
  // all invoices,
});
const styles = "";
const Card_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.inv.svelte-19wxe38,a.inv.svelte-19wxe38,div.svelte-19wxe38,a.svelte-19wxe38{display:flex}div.modal.svelte-19wxe38,a.modal.svelte-19wxe38{display:flex;flex-direction:column}div.modal.svelte-19wxe38,a.modal.svelte-19wxe38,div.inv.svelte-19wxe38,a.inv.svelte-19wxe38,div.svelte-19wxe38,a.svelte-19wxe38{width:100%}div.svelte-19wxe38,a.svelte-19wxe38{position:relative;padding:0.6rem;margin-top:0.5rem}div.Dark.svelte-19wxe38,a.Dark.svelte-19wxe38{background-color:#242843}div.Light.svelte-19wxe38,a.Light.svelte-19wxe38{background-color:#d4d4e7}div.inv.svelte-19wxe38,a.inv.svelte-19wxe38{border-radius:12px;margin:0.25rem 0;padding:0.75rem}@media(min-width: 1200px){div.inv.svelte-19wxe38,a.inv.svelte-19wxe38{height:6.1875rem}}@media(min-width: 2000px){div.inv.svelte-19wxe38,a.inv.svelte-19wxe38{height:9.375rem}}div.modal.svelte-19wxe38,a.modal.svelte-19wxe38{height:100%;z-index:2;overflow:auto;padding:1.5rem;margin:0}div.modal.Dark.svelte-19wxe38,a.modal.Dark.svelte-19wxe38{background-color:#161828}div.modal.Light.svelte-19wxe38,a.modal.Light.svelte-19wxe38{background-color:#c7c7df}.round.svelte-19wxe38{border-radius:0.5rem}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  let { inv = false } = $$props;
  let { id = "" } = $$props;
  let { modal = false } = $$props;
  let { round = false } = $$props;
  if ($$props.inv === void 0 && $$bindings.inv && inv !== void 0)
    $$bindings.inv(inv);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.modal === void 0 && $$bindings.modal && modal !== void 0)
    $$bindings.modal(modal);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0)
    $$bindings.round(round);
  $$result.css.add(css$2);
  $$unsubscribe_globalStore();
  return `${!inv ? `<div class="${[
    escape(null_to_empty($globalStore.theme), true) + " svelte-19wxe38",
    (round ? "round" : "") + " " + (modal ? "modal" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>` : `<a href="${"/" + escape(id, true)}" class="${[
    escape(null_to_empty($globalStore.theme), true) + " svelte-19wxe38",
    inv ? "inv" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</a>`}`;
});
const Text_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".disabled.svelte-zyf5ro{color:grey}.title.svelte-zyf5ro{margin-bottom:0.3rem}",
  map: null
};
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  let { text = "Hello World" } = $$props;
  let { size = "h1" } = $$props;
  let { title = false } = $$props;
  let { disabled = false } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css$1);
  theme = $globalStore.theme;
  $$unsubscribe_globalStore();
  return `${((tag) => {
    return tag ? `<${size} class="${[
      "txtColor" + escape(theme, true) + " svelte-zyf5ro",
      (disabled ? "disabled" : "") + " " + (title ? "title" : "")
    ].join(" ").trim()}">${is_void(tag) ? "" : `${escape(text)}
    ${slots.default ? slots.default({}) : ``}
`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(size)}`;
});
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-17i4xo5.svelte-17i4xo5,button.svelte-17i4xo5.svelte-17i4xo5{display:flex;justify-content:center;align-items:center;padding:0.75rem;font-size:0.9375rem;height:3.5rem;cursor:pointer;font-weight:bold}@media(min-width: 768px){a.svelte-17i4xo5.svelte-17i4xo5,button.svelte-17i4xo5.svelte-17i4xo5{font-size:1rem;min-width:4rem}}@media(min-width: 2000px){a.svelte-17i4xo5.svelte-17i4xo5,button.svelte-17i4xo5.svelte-17i4xo5{font-size:1.25rem;min-width:4.5rem;height:4.3rem}}@media(min-width: 2600px){a.svelte-17i4xo5.svelte-17i4xo5,button.svelte-17i4xo5.svelte-17i4xo5{font-size:1.5625rem;width:13rem;height:5rem}}a.primary.svelte-17i4xo5.svelte-17i4xo5,button.primary.svelte-17i4xo5.svelte-17i4xo5{background-color:#7c5dfa}a.secondary.svelte-17i4xo5.svelte-17i4xo5,button.secondary.svelte-17i4xo5.svelte-17i4xo5{background-color:#7078b2;color:white}a.accent.svelte-17i4xo5.svelte-17i4xo5,button.accent.svelte-17i4xo5.svelte-17i4xo5{background-color:#7e88C3}a.danger.svelte-17i4xo5.svelte-17i4xo5,button.danger.svelte-17i4xo5.svelte-17i4xo5{background-color:#ec5757}a.fluid.svelte-17i4xo5.svelte-17i4xo5,button.fluid.svelte-17i4xo5.svelte-17i4xo5{width:100% !important}a.svelte-17i4xo5 i.svelte-17i4xo5,button.svelte-17i4xo5 i.svelte-17i4xo5{display:none;margin-right:0.7rem;font-size:1.1rem}@media(min-width: 768px){a.svelte-17i4xo5 i.svelte-17i4xo5,button.svelte-17i4xo5 i.svelte-17i4xo5{display:inline-block}}@media(min-width: 2000px){a.svelte-17i4xo5 i.svelte-17i4xo5,button.svelte-17i4xo5 i.svelte-17i4xo5{font-size:2rem}}a.rounded.svelte-17i4xo5.svelte-17i4xo5,button.rounded.svelte-17i4xo5.svelte-17i4xo5{border-radius:1.25rem}a.small.svelte-17i4xo5.svelte-17i4xo5,button.small.svelte-17i4xo5.svelte-17i4xo5{height:4.5rem;width:6.5rem}@media(min-width: 768px){a.small.svelte-17i4xo5.svelte-17i4xo5,button.small.svelte-17i4xo5.svelte-17i4xo5{width:8rem}}@media(min-width: 1200px){a.small.svelte-17i4xo5.svelte-17i4xo5,button.small.svelte-17i4xo5.svelte-17i4xo5{width:10rem}}@media(min-width: 2000px){a.small.svelte-17i4xo5.svelte-17i4xo5,button.small.svelte-17i4xo5.svelte-17i4xo5{width:12rem;height:5.5rem}}@media(min-width: 2600px){a.small.svelte-17i4xo5.svelte-17i4xo5,button.small.svelte-17i4xo5.svelte-17i4xo5{width:13rem;height:100%}}a.medium.svelte-17i4xo5.svelte-17i4xo5,button.medium.svelte-17i4xo5.svelte-17i4xo5{min-width:3rem;max-width:10rem;height:3rem}a.large.svelte-17i4xo5.svelte-17i4xo5,button.large.svelte-17i4xo5.svelte-17i4xo5{width:11.5rem;height:4.3rem}button[disabled].svelte-17i4xo5.svelte-17i4xo5{opacity:0.5;cursor:not-allowed}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { text = "" } = $$props;
  let { type = "primary" } = $$props;
  let { icon = "" } = $$props;
  let { size = "" } = $$props;
  let { fluid = false } = $$props;
  let { disabled = false } = $$props;
  let { rounded = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  $$result.css.add(css);
  return `${!href ? `<button ${disabled ? "disabled" : ""} class="${[
    escape(type, true) + " " + escape(size, true) + " svelte-17i4xo5",
    (rounded ? "rounded" : "") + " " + (fluid ? "fluid" : "")
  ].join(" ").trim()}"><i class="${"fas fa-" + escape(icon, true) + " svelte-17i4xo5"}"></i>${escape(text)}</button>` : `<a class="${escape(null_to_empty(type), true) + " svelte-17i4xo5"}"${add_attribute("href", href, 0)}><i class="${"fas fa-" + escape(icon, true) + " svelte-17i4xo5"}"></i>${escape(text)}</a>`}`;
});
function convertDate(date, term) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let newDate = new Date(date);
  let month = months[newDate.getMonth() + term / 30];
  let day = newDate.getDate();
  let year = newDate.getFullYear();
  if (newDate.getMonth() + term / 30 > 11) {
    year += 1;
    month = months[newDate.getMonth() + term / 30 - 12];
  }
  return `${month} ${day}, ${year}`;
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function closeModal() {
  globalStore.update(($store) => {
    $store.modalStatus = null;
    return $store;
  });
}
function strValid(str) {
  if (str.length >= 5) {
    return true;
  }
}
function emailValid(str) {
  let REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (REGEX.test(str)) {
    return true;
  }
}
async function getInvoicesIndex() {
  if (localStorage.getItem("invoices"))
    globalStore.update(($store) => {
      $store.invoices = JSON.parse(localStorage.getItem("invoices"));
      return { ...$store };
    });
  else {
    const response = await fetch("./data.json");
    const data = await response.json();
    globalStore.update(($store) => {
      localStorage.setItem("invoices", JSON.stringify(data));
      $store.invoices = JSON.parse(localStorage.getItem("invoices"));
      return { ...$store };
    });
  }
}
export {
  Button as B,
  Card as C,
  Text as T,
  closeModal as a,
  getInvoicesIndex as b,
  convertDate as c,
  emailValid as e,
  globalStore as g,
  numberWithCommas as n,
  strValid as s
};
