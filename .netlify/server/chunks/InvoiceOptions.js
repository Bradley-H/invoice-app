import { c as create_ssr_component, a as subscribe, b as createEventDispatcher, g as add_attribute, v as validate_component, e as escape, h as null_to_empty, f as each } from "./index2.js";
import { g as globalStore, T as Text } from "./functionStore.js";
const FormField_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-2m74c1 input.svelte-2m74c1,div.svelte-2m74c1 .filter.svelte-2m74c1,div.svelte-2m74c1.svelte-2m74c1{width:100%}div.svelte-2m74c1.svelte-2m74c1{height:100%}div.title.svelte-2m74c1.svelte-2m74c1{margin-bottom:0.75rem}div.svelte-2m74c1 input.svelte-2m74c1,div.svelte-2m74c1 .filter.svelte-2m74c1{padding:0.8125rem;border-radius:0.3125rem;font-weight:bold;height:3.3rem}@media(min-width: 2000px){div.svelte-2m74c1 input.svelte-2m74c1,div.svelte-2m74c1 .filter.svelte-2m74c1{height:5rem;font-size:1.3rem}}div.svelte-2m74c1 input.invalid.svelte-2m74c1,div.svelte-2m74c1 .filter.invalid.svelte-2m74c1{border:0.0625rem solid #ec5757}div.svelte-2m74c1 input.Dark.svelte-2m74c1,div.svelte-2m74c1 .filter.Dark.svelte-2m74c1{background-color:#21243c;color:#fff}div.svelte-2m74c1 input.svelte-2m74c1:disabled,div.svelte-2m74c1 .filter.svelte-2m74c1:disabled{opacity:0.6}.filter.svelte-2m74c1.svelte-2m74c1{position:relative;width:100%;height:100%;padding:0;z-index:2;cursor:pointer}.filter.svelte-2m74c1 .title.svelte-2m74c1{transform:translateY(0.25rem)}@media(min-width: 2000px){.filter.svelte-2m74c1 .title.svelte-2m74c1{transform:translateY(30%)}}.filter.svelte-2m74c1 ul.svelte-2m74c1{display:flex;flex-direction:column;opacity:0;transition:all 0.5s ease;transform:translateY(-15px);position:absolute;width:100%;left:0;pointer-events:none}.filter.svelte-2m74c1 ul.active.svelte-2m74c1{opacity:1;transform:translateY(0px)}.filter.svelte-2m74c1 ul.active li.svelte-2m74c1{pointer-events:all}.filter.svelte-2m74c1 ul li.svelte-2m74c1{pointer-events:none;padding:0.75rem;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.filter.Dark.svelte-2m74c1 ul.svelte-2m74c1{background-color:#21243c}.filter.Dark.svelte-2m74c1 ul li.svelte-2m74c1:hover{background-color:#262a46}.filter.Light.svelte-2m74c1 ul.svelte-2m74c1{background-color:#e1e1ee}.filter.Light.svelte-2m74c1 ul li.svelte-2m74c1:hover{background-color:#d4d4e7}p.svelte-2m74c1.svelte-2m74c1{display:none;color:#ec5757;margin:0.375rem 0}p.invalid.svelte-2m74c1.svelte-2m74c1{display:block}input[type=number].svelte-2m74c1.svelte-2m74c1{appearance:textfield}",
  map: null
};
const FormField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value2) => $globalStore = value2);
  createEventDispatcher();
  let { form = "text" } = $$props;
  let { title = false } = $$props;
  let { id = "" } = $$props;
  let { text = "" } = $$props;
  let { value } = $$props;
  let { options: options2 = [] } = $$props;
  let { valid = false } = $$props;
  let { disabled = false } = $$props;
  let { placeholder = "" } = $$props;
  let { invalidMessage = "" } = $$props;
  let { activeFormField = "" } = $$props;
  let touched = false;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.options === void 0 && $$bindings.options && options2 !== void 0)
    $$bindings.options(options2);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.invalidMessage === void 0 && $$bindings.invalidMessage && invalidMessage !== void 0)
    $$bindings.invalidMessage(invalidMessage);
  if ($$props.activeFormField === void 0 && $$bindings.activeFormField && activeFormField !== void 0)
    $$bindings.activeFormField(activeFormField);
  $$result.css.add(css);
  theme = $globalStore.theme;
  $$unsubscribe_globalStore();
  return `

<div class="${["svelte-2m74c1", title ? "title" : ""].join(" ").trim()}"><label ${disabled ? "disabled" : ""}${add_attribute("for", id, 0)}>${validate_component(Text, "Text").$$render($$result, { disabled, size: "p", title: true, text }, {}, {})}</label>
    ${form === "text" ? `<input ${disabled ? "disabled" : ""} class="${[
    escape(null_to_empty(theme), true) + " svelte-2m74c1",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${add_attribute("id", id, 0)} type="text"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${form === "number" ? `<input ${disabled ? "disabled" : ""} class="${[
    escape(null_to_empty(theme), true) + " svelte-2m74c1",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${add_attribute("id", id, 0)} type="number"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${form === "date" ? `<input ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)} type="date"${add_attribute("placeholder", placeholder, 0)} class="${["svelte-2m74c1", !valid ? "invalid" : ""].join(" ").trim()}"${add_attribute("value", value, 0)}>` : `${form === "select" ? `<div class="${"filter " + escape(theme, true) + " svelte-2m74c1"}"><div class="option svelte-2m74c1"><div class="title svelte-2m74c1">${validate_component(Text, "Text").$$render(
    $$result,
    {
      size: "h4",
      text: activeFormField
    },
    {},
    {}
  )}</div>
            <ul class="${["svelte-2m74c1", ""].join(" ").trim()}">${each(options2, (val) => {
    return `<li class="svelte-2m74c1">${validate_component(Text, "Text").$$render(
      $$result,
      {
        size: "h4",
        text: val.text
      },
      {},
      {}
    )}
                    </li>`;
  })}</ul></div></div>` : ``}`}`}`}
    ${invalidMessage && !valid && touched ? `<p class="${["svelte-2m74c1", !valid ? "invalid" : ""].join(" ").trim()}">${escape(invalidMessage)}</p>` : ``}
</div>`;
});
const options = [
  // INVOICE OPTIONS (inside invoiceModal.svelte)
  { id: 0, text: "Within 30 Days", value: 30 },
  { id: 1, text: "Within 60 Days", value: 60 },
  { id: 2, text: "Within 90 Days", value: 90 },
  { id: 3, text: "Within 120 Days", value: 120 }
];
const invoiceFilter = [
  // for invoice filter located in the index page
  { id: 0, text: "All", value: "all" },
  { id: 1, text: "Paid", value: "paid" },
  { id: 2, text: "Pending", value: "pending" },
  { id: 3, text: "Draft", value: "draft" }
];
export {
  FormField as F,
  invoiceFilter as i,
  options as o
};
