import { c as create_ssr_component, a as subscribe, e as escape, h as null_to_empty } from "./index2.js";
import { g as globalStore } from "./functionStore.js";
const Tag_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 768px){div.svelte-i06c3d.svelte-i06c3d{margin:0}}div.svelte-i06c3d h3.svelte-i06c3d{display:flex;justify-content:center;align-items:center;text-transform:capitalize;height:2.5rem;border-radius:0.3125rem;width:8.75rem}div.svelte-i06c3d h3.Light.paid.svelte-i06c3d{color:rgb(43, 148, 43);background-color:rgba(24, 109, 28, 0.3)}div.svelte-i06c3d h3.Light.pending.svelte-i06c3d{color:#a58428;background-color:rgba(199, 165, 15, 0.15)}div.svelte-i06c3d h3.Light.draft.svelte-i06c3d{color:#e6e6e6;background-color:rgba(21, 21, 21, 0.6)}div.svelte-i06c3d h3.Dark.paid.svelte-i06c3d{color:#0dc789;background-color:rgba(45, 100, 45, 0.17)}div.svelte-i06c3d h3.Dark.pending.svelte-i06c3d{color:#ca980d;background-color:rgba(221, 182, 6, 0.15)}div.svelte-i06c3d h3.Dark.draft.svelte-i06c3d{color:#e6e6e6;background-color:rgba(56, 56, 56, 0.5)}@media(min-width: 1200px){div.svelte-i06c3d h3.svelte-i06c3d{height:3.4375rem}}@media(min-width: 2000px){div.svelte-i06c3d h3.svelte-i06c3d{width:11.5625rem;height:3.75rem}}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  let { status = "" } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  return `<div class="${escape(null_to_empty(status), true) + " svelte-i06c3d"}"><h3 class="${escape($globalStore.theme, true) + " " + escape(status, true) + " svelte-i06c3d"}">${escape(status)}</h3></div>`;
});
export {
  Tag as T
};
