import { c as create_ssr_component, v as validate_component, a as subscribe, i as is_promise, n as noop, f as each } from "../../chunks/index2.js";
import { C as Card, T as Text, c as convertDate, n as numberWithCommas, b as getInvoicesIndex, g as globalStore, B as Button } from "../../chunks/functionStore.js";
import { T as Tag } from "../../chunks/Tag.js";
import { i as invoiceFilter, F as FormField } from "../../chunks/InvoiceOptions.js";
const Invoice_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container-invoice.svelte-1ryznpo .dueInformation div.svelte-1ryznpo,.container-invoice.svelte-1ryznpo div.svelte-1ryznpo{display:flex;flex-direction:column}.container-invoice.svelte-1ryznpo .paymentInformation.svelte-1ryznpo,.container-invoice.svelte-1ryznpo .dueInformation.svelte-1ryznpo,.container-invoice.svelte-1ryznpo.svelte-1ryznpo{display:grid}.container-invoice.svelte-1ryznpo.svelte-1ryznpo{width:100%}.container-invoice.svelte-1ryznpo.svelte-1ryznpo{grid-template-columns:1fr 0fr}@media(min-width: 992px){.container-invoice.svelte-1ryznpo.svelte-1ryznpo{grid-template-columns:2fr 1fr}}.container-invoice.svelte-1ryznpo div.svelte-1ryznpo{justify-content:end}@media(min-width: 768px){.container-invoice.svelte-1ryznpo div.svelte-1ryznpo{flex-direction:row;align-items:center;padding:1rem}}.container-invoice.svelte-1ryznpo .dueInformation.svelte-1ryznpo{grid-template-columns:1fr;padding:1rem 0 1rem 0.5rem;gap:0.625rem}@media(min-width: 768px){.container-invoice.svelte-1ryznpo .dueInformation.svelte-1ryznpo{grid-template-columns:1fr 2fr;text-align:center;padding:0}}@media(min-width: 992px){.container-invoice.svelte-1ryznpo .dueInformation.svelte-1ryznpo{grid-template-columns:1fr 60%}}@media(min-width: 1200px){.container-invoice.svelte-1ryznpo .dueInformation.svelte-1ryznpo{width:100%}}@media(min-width: 2000px){.container-invoice.svelte-1ryznpo .dueInformation.svelte-1ryznpo{width:31.875rem;place-items:center;margin-right:1.5625rem}}.container-invoice.svelte-1ryznpo .dueInformation div.svelte-1ryznpo{justify-content:space-around;gap:0.5rem}@media(min-width: 768px){.container-invoice.svelte-1ryznpo .dueInformation div.svelte-1ryznpo{display:grid;place-items:center;margin:0;grid-template-columns:1fr 1fr}}@media(min-width: 992px){.container-invoice.svelte-1ryznpo .dueInformation div.svelte-1ryznpo{grid-template-columns:2fr 1fr;align-items:center}}@media(min-width: 1200px){.container-invoice.svelte-1ryznpo .dueInformation div.svelte-1ryznpo{display:flex;flex-direction:column;gap:0.625rem}}@media(min-width: 2000px){.container-invoice.svelte-1ryznpo .dueInformation div.svelte-1ryznpo{width:max-content;text-align:center;display:flex;justify-content:center;align-items:center}}.container-invoice.svelte-1ryznpo .paymentInformation.svelte-1ryznpo{grid-template-columns:1fr;justify-content:center;text-align:center;align-items:center;padding:0.5rem;width:95%;margin-right:-1rem}@media(min-width: 768px){.container-invoice.svelte-1ryznpo .paymentInformation.svelte-1ryznpo{gap:0.25rem}}@media(min-width: 992px){.container-invoice.svelte-1ryznpo .paymentInformation.svelte-1ryznpo{display:flex;flex-direction:column;gap:0.5rem}}@media(min-width: 1200px){.container-invoice.svelte-1ryznpo .paymentInformation.svelte-1ryznpo{padding:0 0.5rem 0 0;width:100%;gap:0.625rem}}",
  map: null
};
const Invoice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { paymentDue = "" } = $$props;
  let { total = 0 } = $$props;
  let { clientName = "" } = $$props;
  let { status = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.paymentDue === void 0 && $$bindings.paymentDue && paymentDue !== void 0)
    $$bindings.paymentDue(paymentDue);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.clientName === void 0 && $$bindings.clientName && clientName !== void 0)
    $$bindings.clientName(clientName);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css$1);
  return `${validate_component(Card, "Card").$$render($$result, { inv: true, id }, {}, {
    default: () => {
      return `<div class="container-invoice svelte-1ryznpo"><div class="dueInformation svelte-1ryznpo">${validate_component(Text, "Text").$$render($$result, { size: "h3", text: "#" + id }, {}, {})}
            <div class="svelte-1ryznpo">${validate_component(Text, "Text").$$render(
        $$result,
        {
          size: "p",
          text: "Due: " + convertDate(paymentDue, 0)
        },
        {},
        {}
      )}
                ${validate_component(Text, "Text").$$render(
        $$result,
        {
          size: "h3",
          text: "$" + numberWithCommas(total.toFixed(2))
        },
        {},
        {}
      )}</div></div>
    <div class="paymentInformation svelte-1ryznpo">${validate_component(Text, "Text").$$render($$result, { size: "p", text: clientName }, {}, {})}
        ${validate_component(Tag, "Tag").$$render($$result, { status }, {}, {})}</div></div>`;
    }
  })}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-nwvo55 .helperBar.svelte-nwvo55{display:flex}.noInvoices.svelte-nwvo55.svelte-nwvo55,.container.svelte-nwvo55 .helperBar_invoice.svelte-nwvo55,.container.svelte-nwvo55 div.invoices.svelte-nwvo55,.container.svelte-nwvo55.svelte-nwvo55{display:flex;flex-direction:column}.container.svelte-nwvo55 div.invoices.svelte-nwvo55,.container.svelte-nwvo55.svelte-nwvo55{width:100%}.container.svelte-nwvo55.svelte-nwvo55{max-width:62.5rem}@media(min-width: 1200px){.container.svelte-nwvo55.svelte-nwvo55{display:grid;grid-template-columns:1fr;max-width:75rem;place-self:center;max-width:clamp(62.5rem, 100%, 156.25rem)}}@media(min-width: 2000px){.container.svelte-nwvo55.svelte-nwvo55{margin-left:9.375rem}}.container.svelte-nwvo55 div.invoices.svelte-nwvo55{max-width:62.5rem;margin-top:1.6875rem}@media(min-width: 992px){.container.svelte-nwvo55 div.invoices.svelte-nwvo55{display:grid;place-items:center}}@media(min-width: 1200px){.container.svelte-nwvo55 div.invoices.svelte-nwvo55{grid-template-columns:1fr 1fr;gap:0.4375rem;justify-self:center;max-width:clamp(62.5rem, 100%, 156.25rem)}}@media(min-width: 2000px){.container.svelte-nwvo55 div.invoices.svelte-nwvo55{grid-template-columns:1fr 1fr 1fr}}.container.svelte-nwvo55 .helperBar.svelte-nwvo55{justify-content:space-between}.container.svelte-nwvo55 .helperBar_invoice.svelte-nwvo55{justify-content:center;margin-right:1rem;gap:0.3125rem}@media(min-width: 2000px){.container.svelte-nwvo55 .helperBar_invoice.svelte-nwvo55{gap:0.9375rem;font-size:1.25rem}}.container.svelte-nwvo55 .helperBar .settings.svelte-nwvo55{display:grid;grid-template-columns:1fr 1fr;gap:0.625rem;place-items:center}@media(min-width: 768px){.container.svelte-nwvo55 .helperBar .settings.svelte-nwvo55{gap:1.875rem}}.container.svelte-nwvo55 .loading.svelte-nwvo55{display:flex;justify-content:center;align-items:center;height:80vh}.noInvoices.svelte-nwvo55.svelte-nwvo55{justify-content:center;align-items:center;height:60vh}.noInvoices.svelte-nwvo55 div.svelte-nwvo55{text-align:center;margin-top:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filter;
  let filteredInvoices;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filter = "Filter";
    filteredInvoices = $globalStore.invoices.filter((invoice) => invoice.status === filter || filter === "all" || filter === "Filter");
    $$rendered = `<div class="container svelte-nwvo55">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
        <div class="loading svelte-nwvo55">${validate_component(Text, "Text").$$render(
          $$result,
          {
            size: "h3",
            text: "Getting invoices, please wait"
          },
          {},
          {}
        )}</div>
    `;
      }
      return function() {
        return `
        <div class="helperBar svelte-nwvo55"><div class="helperBar_invoice svelte-nwvo55">${validate_component(Text, "Text").$$render($$result, { size: "h2", text: "Invoices" }, {}, {})}
                ${validate_component(Text, "Text").$$render(
          $$result,
          {
            size: "p",
            text: filteredInvoices.length + " invoices"
          },
          {},
          {}
        )}</div>
            <div class="settings svelte-nwvo55">${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            form: "select",
            options: invoiceFilter,
            activeFormField: filter.slice(0, 1).toUpperCase() + filter.slice(1),
            value: filter
          },
          {
            value: ($$value) => {
              filter = $$value;
              $$settled = false;
            }
          },
          {}
        )}
                ${validate_component(Button, "Button").$$render(
          $$result,
          {
            rounded: true,
            icon: "plus",
            text: "Add Invoice"
          },
          {},
          {}
        )}</div></div>
        ${$globalStore.invoices.length > 0 ? `<div class="invoices svelte-nwvo55">${each(filteredInvoices, ({ id, paymentDue, total, clientName, status }, i) => {
          return `${validate_component(Invoice, "Invoice").$$render(
            $$result,
            {
              id,
              paymentDue,
              total,
              clientName,
              status
            },
            {},
            {}
          )}`;
        })}</div>` : `<div class="noInvoices svelte-nwvo55"><img src="/noInvoice.svg" alt="No invoice">
                <div class="svelte-nwvo55">${validate_component(Text, "Text").$$render(
          $$result,
          {
            title: true,
            size: "h2",
            text: "No Invoices"
          },
          {},
          {}
        )}
                    ${validate_component(Text, "Text").$$render(
          $$result,
          {
            title: true,
            size: "p",
            text: "To Create an Invoice"
          },
          {},
          {}
        )}
                    ${validate_component(Text, "Text").$$render(
          $$result,
          {
            title: true,
            size: "p",
            text: "Click 'Add invoice' at the top"
          },
          {},
          {}
        )}</div></div>`}
    `;
      }();
    }(getInvoicesIndex())}
</div>`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  return $$rendered;
});
export {
  Page as default
};
