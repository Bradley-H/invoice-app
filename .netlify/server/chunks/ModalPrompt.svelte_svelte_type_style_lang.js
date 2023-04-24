import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, h as null_to_empty } from "./index2.js";
import { T as Text, g as globalStore } from "./functionStore.js";
const BackButton_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-1q9vvrx,button.svelte-1q9vvrx{display:flex;justify-content:center;align-items:center;font-size:0.8125rem;margin:1.5rem 0;cursor:pointer}@media(min-width: 768px){a.svelte-1q9vvrx,button.svelte-1q9vvrx{font-size:1.875rem}}i.svelte-1q9vvrx{color:#7c5dfa;font-weight:bold;margin-right:0.5rem;font-size:1.4rem}@media(min-width: 1200px){i.svelte-1q9vvrx{font-size:1.6rem}}@media(min-width: 2000px){i.svelte-1q9vvrx{font-size:2rem;margin-right:1rem}}",
  map: null
};
const BackButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$1);
  return `${href ? `<a href="/" class="svelte-1q9vvrx"><i class="fas fa-chevron-left svelte-1q9vvrx"></i>${validate_component(Text, "Text").$$render(
    $$result,
    {
      size: innerWidth > 1880 ? "h2" : "h3",
      text: "Go back"
    },
    {},
    {}
  )}</a>` : `<button class="svelte-1q9vvrx"><i class="fas fa-chevron-left svelte-1q9vvrx"></i>${validate_component(Text, "Text").$$render(
    $$result,
    {
      size: innerWidth > 1880 ? "h2" : "h3",
      text: "Go back"
    },
    {},
    {}
  )}</button>`}`;
});
const InnerCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-14z07mz{display:block;border-top-left-radius:0.75rem;border-top-right-radius:0.75rem;border:0.125rem solid black;padding:0.8125rem;position:relative;width:100%;max-width:62.5rem}div.Dark.svelte-14z07mz{background-color:#2f3457}div.Light.svelte-14z07mz{background-color:#d8d8e8}div.modal.svelte-14z07mz{border-radius:0}div.modal.Dark.svelte-14z07mz{background-color:#242843}div.modal.Light.svelte-14z07mz{background-color:#c7c7df}",
  map: null
};
const InnerCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  let { modal = false } = $$props;
  if ($$props.modal === void 0 && $$bindings.modal && modal !== void 0)
    $$bindings.modal(modal);
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  return `<div class="${[
    escape(null_to_empty($globalStore.theme), true) + " svelte-14z07mz",
    modal ? "modal" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>`;
});
const ModalPrompt_svelte_svelte_type_style_lang = "";
export {
  BackButton as B,
  InnerCard as I
};
