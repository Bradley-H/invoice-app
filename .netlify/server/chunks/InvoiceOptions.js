import { c as create_ssr_component, a as subscribe, b as createEventDispatcher, g as add_attribute, v as validate_component, e as escape, h as null_to_empty, f as each } from "./index2.js";
import { g as globalStore, T as Text } from "./functionStore.js";
const FormField_svelte_svelte_type_style_lang = "";
const css = {
  code: ".filter.svelte-dynqjq ul.svelte-dynqjq,.filter.svelte-dynqjq.svelte-dynqjq,div.svelte-dynqjq input.svelte-dynqjq,div.svelte-dynqjq .filter.svelte-dynqjq,div.svelte-dynqjq.svelte-dynqjq{width:100%}.filter.svelte-dynqjq ul li.svelte-dynqjq,.filter.svelte-dynqjq.svelte-dynqjq{height:100%}@media(min-width: 768px){div.title.svelte-dynqjq.svelte-dynqjq{transform:translateY(0.25rem)}}div.svelte-dynqjq input.svelte-dynqjq,div.svelte-dynqjq .filter.svelte-dynqjq{padding:0.8125rem;border-radius:0.3125rem;font-weight:bold;height:3.3rem}@media(min-width: 2000px){div.svelte-dynqjq input.svelte-dynqjq,div.svelte-dynqjq .filter.svelte-dynqjq{height:5rem;font-size:1.3rem}}div.svelte-dynqjq input.invalid.svelte-dynqjq,div.svelte-dynqjq .filter.invalid.svelte-dynqjq{border:0.0625rem solid #ec5757}div.svelte-dynqjq input.Dark.svelte-dynqjq,div.svelte-dynqjq .filter.Dark.svelte-dynqjq{background-color:#21243c;color:#fff}div.svelte-dynqjq input.Light.svelte-dynqjq,div.svelte-dynqjq .filter.Light.svelte-dynqjq{border:2px solid black;color:black}div.svelte-dynqjq input.svelte-dynqjq:disabled,div.svelte-dynqjq .filter.svelte-dynqjq:disabled{opacity:0.6}.filter.svelte-dynqjq.svelte-dynqjq{position:relative;padding:0;z-index:2;cursor:pointer}.filter.svelte-dynqjq .title.svelte-dynqjq{display:flex;align-items:center;gap:2rem;transform:translateY(0.25rem)}@media(min-width: 2000px){.filter.svelte-dynqjq .title.svelte-dynqjq{transform:translateY(0.8rem)}}.filter.svelte-dynqjq .title i.svelte-dynqjq{margin-left:auto;font-size:1.25rem;transform-origin:center center;transform:rotate(180deg);transition:all 0.5s ease}@media(min-width: 2000px){.filter.svelte-dynqjq .title i.svelte-dynqjq{font-size:1.875rem}}.filter.svelte-dynqjq .title i.active.svelte-dynqjq{transform:rotate(0deg)}.filter.svelte-dynqjq ul.svelte-dynqjq{display:flex;flex-direction:column;opacity:0;transition:all 0.5s ease;transform:translateY(-15px);position:absolute;left:0;top:100%;pointer-events:none}.filter.svelte-dynqjq ul.active.svelte-dynqjq{opacity:1;transform:translateY(0px)}.filter.svelte-dynqjq ul.active li.svelte-dynqjq{pointer-events:all}.filter.svelte-dynqjq ul li.svelte-dynqjq{pointer-events:none;padding:0.75rem;display:flex;justify-content:center;align-items:center;pointer-events:none}.filter.Dark.svelte-dynqjq ul.svelte-dynqjq{background-color:#21243c}.filter.Dark.svelte-dynqjq ul li.svelte-dynqjq:hover{background-color:#262a46}.filter.Light.svelte-dynqjq ul.svelte-dynqjq{background-color:#e1e1ee}.filter.Light.svelte-dynqjq ul li.svelte-dynqjq:hover{background-color:#d4d4e7}p.svelte-dynqjq.svelte-dynqjq{display:none;color:#ec5757;margin:0.3125rem 0}p.invalid.svelte-dynqjq.svelte-dynqjq{display:block;font-weight:bold}input[type=number].svelte-dynqjq.svelte-dynqjq{appearance:textfield}",
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

<div class="${["svelte-dynqjq", title ? "title" : ""].join(" ").trim()}"><label${add_attribute("for", id, 0)}>${validate_component(Text, "Text").$$render($$result, { size: "p", title: true, text }, {}, {})}</label>
    ${form === "text" ? `<input ${disabled ? "disabled" : ""} class="${[
    escape(null_to_empty(theme), true) + " svelte-dynqjq",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${add_attribute("id", id, 0)} type="text"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${form === "number" ? `<input ${disabled ? "disabled" : ""} class="${[
    escape(null_to_empty(theme), true) + " svelte-dynqjq",
    !valid && touched ? "invalid" : ""
  ].join(" ").trim()}"${add_attribute("id", id, 0)} type="number"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}>` : `${form === "date" ? `<input ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)} type="date"${add_attribute("placeholder", placeholder, 0)} class="${["svelte-dynqjq", !valid ? "invalid" : ""].join(" ").trim()}"${add_attribute("value", value, 0)}>` : `${form === "select" ? `<div class="${"filter " + escape(theme, true) + " svelte-dynqjq"}"><div class="option svelte-dynqjq"><div class="title svelte-dynqjq">${validate_component(Text, "Text").$$render(
    $$result,
    {
      size: "h4",
      text: activeFormField
    },
    {},
    {}
  )}
                    <i class="${["fas fa-caret-down svelte-dynqjq", ""].join(" ").trim()}"></i></div>
            <ul class="${["svelte-dynqjq", ""].join(" ").trim()}">${each(options2, (val) => {
    return `<li class="svelte-dynqjq">${validate_component(Text, "Text").$$render(
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
    ${invalidMessage && !valid && touched ? `<p class="${["svelte-dynqjq", !valid ? "invalid" : ""].join(" ").trim()}">${escape(invalidMessage)}</p>` : ``}
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
