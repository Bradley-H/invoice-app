import { c as create_ssr_component, a as subscribe, v as validate_component, f as each, e as escape, i as is_promise, n as noop } from "../../../chunks/index2.js";
import { g as globalStore, C as Card, T as Text, B as Button, c as convertDate, n as numberWithCommas, b as getInvoicesIndex } from "../../../chunks/functionStore.js";
import { B as BackButton, I as InnerCard } from "../../../chunks/ModalPrompt.svelte_svelte_type_style_lang.js";
import { T as Tag } from "../../../chunks/Tag.js";
import { p as page } from "../../../chunks/stores.js";
const InvoiceInformation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btns.svelte-lswt2h.svelte-lswt2h,.backButton.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-itemList-items-total.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-itemList-items.svelte-lswt2h.svelte-lswt2h,.bottomCard_buttons.svelte-lswt2h.svelte-lswt2h,.topCard.svelte-lswt2h.svelte-lswt2h{display:flex}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-billTo-client.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-billTo-client-information.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-itemList-items-description.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-senderInfo.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-details.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-ID.svelte-lswt2h.svelte-lswt2h,.bottomCard.svelte-lswt2h.svelte-lswt2h,.invoiceContainer.svelte-lswt2h.svelte-lswt2h{display:flex;flex-direction:column}.bottomCard_invoiceInfo-billTo-client.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-billTo.svelte-lswt2h .bottomCard_invoiceInfo-billTo-email.svelte-lswt2h,.bottomCard_invoiceInfo-billTo-invoices.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-billTo.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-itemList.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo.svelte-lswt2h.svelte-lswt2h{display:grid}.btns.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-itemList-items-total.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-itemList.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo.svelte-lswt2h.svelte-lswt2h,.bottomCard_buttons.svelte-lswt2h.svelte-lswt2h,.topCard_buttons.svelte-lswt2h.svelte-lswt2h,.topCard_invoiceStatus.svelte-lswt2h.svelte-lswt2h,.invoiceContainer.svelte-lswt2h.svelte-lswt2h{width:100%}.invoiceContainer.svelte-lswt2h.svelte-lswt2h{max-width:62.5rem;margin:0 auto}@media(min-width: 1200px){.invoiceContainer.svelte-lswt2h.svelte-lswt2h{justify-content:center;max-width:80%}}@media(min-width: 2000px){.invoiceContainer.svelte-lswt2h.svelte-lswt2h{min-width:85%}}.topCard.svelte-lswt2h.svelte-lswt2h{margin-bottom:1rem}@media(min-width: 768px){.topCard.svelte-lswt2h.svelte-lswt2h{justify-content:space-between}}.topCard_invoiceStatus.svelte-lswt2h.svelte-lswt2h{display:flex;justify-content:center;align-items:center;gap:0.9375rem;padding:0.125rem}@media(min-width: 768px){.topCard_invoiceStatus.svelte-lswt2h.svelte-lswt2h{justify-content:center}}.topCard_buttons.svelte-lswt2h.svelte-lswt2h{display:none;justify-content:end;margin-right:1rem;gap:1.5625rem}@media(min-width: 768px){.topCard_buttons.svelte-lswt2h.svelte-lswt2h{display:flex}}@media(min-width: 768px){.bottomCard_buttons.svelte-lswt2h.svelte-lswt2h{display:none}}.bottomCard_invoiceInfo.svelte-lswt2h.svelte-lswt2h{padding:0.5rem}@media(min-width: 2000px){.bottomCard_invoiceInfo.svelte-lswt2h.svelte-lswt2h{gap:1.875rem}}.bottomCard_invoiceInfo-ID.svelte-lswt2h.svelte-lswt2h{gap:0.4375rem}.bottomCard_invoiceInfo-details.svelte-lswt2h.svelte-lswt2h{gap:0.9375rem;margin-bottom:3rem}@media(min-width: 768px){.bottomCard_invoiceInfo-details.svelte-lswt2h.svelte-lswt2h{display:grid;grid-template-columns:1fr 0.3fr}}.bottomCard_invoiceInfo-senderInfo.svelte-lswt2h.svelte-lswt2h{gap:0.375rem;margin:1rem 0.75rem 1rem 0;width:max-content}.bottomCard_invoiceInfo-itemList.svelte-lswt2h.svelte-lswt2h{place-self:center;margin:2rem 0 0 0;max-width:37.5rem}@media(min-width: 2000px){.bottomCard_invoiceInfo-itemList.svelte-lswt2h.svelte-lswt2h{max-width:62.5rem}}.bottomCard_invoiceInfo-itemList-items.svelte-lswt2h.svelte-lswt2h{justify-content:space-between;padding:0.5rem 0;margin-bottom:0.5rem;align-items:center}.bottomCard_invoiceInfo-itemList-items-total.svelte-lswt2h.svelte-lswt2h{justify-content:space-between;background-color:black;padding:1rem;border-bottom-left-radius:0.75rem;border-bottom-right-radius:0.75rem}@media(min-width: 2000px){.bottomCard_invoiceInfo-itemList-items-total.svelte-lswt2h.svelte-lswt2h{padding:2rem}}.bottomCard_invoiceInfo-itemList-items-total.svelte-lswt2h h3.svelte-lswt2h{color:white}.bottomCard_invoiceInfo-itemList-items-description.svelte-lswt2h.svelte-lswt2h{gap:0.3125rem}.bottomCard_invoiceInfo-billTo.svelte-lswt2h.svelte-lswt2h{grid-template-columns:1fr auto;gap:2.1875rem}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-lswt2h.svelte-lswt2h{grid-template-columns:1fr 1fr 1fr}}@media(min-width: 2000px){.bottomCard_invoiceInfo-billTo.svelte-lswt2h.svelte-lswt2h{grid-template-columns:1.2fr 1.2fr 0.75fr;margin:2rem 0}}.bottomCard_invoiceInfo-billTo-invoices.svelte-lswt2h.svelte-lswt2h{gap:20px}.bottomCard_invoiceInfo-billTo.svelte-lswt2h .bottomCard_invoiceInfo-billTo-email.svelte-lswt2h{grid-column:span 2/span 2;gap:0.5625rem}@media(min-width: 768px){.bottomCard_invoiceInfo-billTo.svelte-lswt2h .bottomCard_invoiceInfo-billTo-email.svelte-lswt2h{display:flex;flex-direction:column;grid-column:unset}}.bottomCard_invoiceInfo-billTo-client-information.svelte-lswt2h.svelte-lswt2h{gap:0.4375rem}.bottomCard_invoiceInfo-billTo-invoiceDate.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-billTo-invoiceDue.svelte-lswt2h.svelte-lswt2h,.bottomCard_invoiceInfo-billTo-client.svelte-lswt2h.svelte-lswt2h{gap:0.5625rem}.btns.svelte-lswt2h.svelte-lswt2h{justify-content:space-evenly;align-items:center;gap:0.375rem}",
  map: null
};
const InvoiceInformation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  let $$unsubscribe_page;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { status = "" } = $$props;
  let { id = "" } = $$props;
  let { description = "" } = $$props;
  let { createdAt = "" } = $$props;
  let { paymentDue = "" } = $$props;
  let { clientName = "" } = $$props;
  let { clientAddress } = $$props;
  let { clientEmail = "" } = $$props;
  let { senderAddress } = $$props;
  let { items = [] } = $$props;
  let { total = 0 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.createdAt === void 0 && $$bindings.createdAt && createdAt !== void 0)
    $$bindings.createdAt(createdAt);
  if ($$props.paymentDue === void 0 && $$bindings.paymentDue && paymentDue !== void 0)
    $$bindings.paymentDue(paymentDue);
  if ($$props.clientName === void 0 && $$bindings.clientName && clientName !== void 0)
    $$bindings.clientName(clientName);
  if ($$props.clientAddress === void 0 && $$bindings.clientAddress && clientAddress !== void 0)
    $$bindings.clientAddress(clientAddress);
  if ($$props.clientEmail === void 0 && $$bindings.clientEmail && clientEmail !== void 0)
    $$bindings.clientEmail(clientEmail);
  if ($$props.senderAddress === void 0 && $$bindings.senderAddress && senderAddress !== void 0)
    $$bindings.senderAddress(senderAddress);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  $$result.css.add(css$1);
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  return `<div class="invoiceContainer svelte-lswt2h"><div class="backButton svelte-lswt2h">${validate_component(BackButton, "BackButton").$$render($$result, { href: true }, {}, {})}</div>

    <div class="topCard svelte-lswt2h">${validate_component(Card, "Card").$$render($$result, { round: true }, {}, {
    default: () => {
      return `<div class="topCard_invoiceStatus svelte-lswt2h">${validate_component(Text, "Text").$$render(
        $$result,
        {
          size: innerWidth > 1880 ? "h2" : "p",
          text: "Status:"
        },
        {},
        {}
      )}
                ${validate_component(Tag, "Tag").$$render($$result, { status }, {}, {})}</div>
                <div class="topCard_buttons svelte-lswt2h">${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "large",
          text: "Edit",
          type: "secondary",
          icon: "pen",
          rounded: true
        },
        {},
        {}
      )}
                    ${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "large",
          text: "Delete",
          type: "danger",
          icon: "trash",
          rounded: true
        },
        {},
        {}
      )}
                    ${validate_component(Button, "Button").$$render(
        $$result,
        {
          text: "Mark as Paid",
          size: "large",
          disabled: status === "paid",
          icon: "check",
          rounded: true
        },
        {},
        {}
      )}</div>`;
    }
  })}</div>

    <div class="bottomCard svelte-lswt2h">${validate_component(Card, "Card").$$render($$result, { round: true }, {}, {
    default: () => {
      return `<div class="bottomCard_invoiceInfo svelte-lswt2h"><div class="bottomCard_invoiceInfo-details svelte-lswt2h"><div class="bottomCard_invoiceInfo-ID svelte-lswt2h">${validate_component(Text, "Text").$$render(
        $$result,
        {
          size: innerWidth > 2e3 ? "h2" : "h3",
          text: "#" + id
        },
        {},
        {}
      )}
                        ${validate_component(Text, "Text").$$render(
        $$result,
        {
          size: innerWidth > 2e3 ? "h4" : "p",
          text: description
        },
        {},
        {}
      )}</div>

                    <div class="bottomCard_invoiceInfo-senderInfo svelte-lswt2h">${validate_component(Text, "Text").$$render(
        $$result,
        {
          size: innerWidth > 2e3 ? "h5" : "p",
          text: senderAddress.street
        },
        {},
        {}
      )}
                        ${validate_component(Text, "Text").$$render(
        $$result,
        {
          size: innerWidth > 2e3 ? "h5" : "p",
          text: senderAddress.city
        },
        {},
        {}
      )}
                        ${validate_component(Text, "Text").$$render(
        $$result,
        {
          size: innerWidth > 2e3 ? "h5" : "p",
          text: senderAddress.postCode
        },
        {},
        {}
      )}
                        ${validate_component(Text, "Text").$$render(
        $$result,
        {
          size: innerWidth > 2e3 ? "h5" : "p",
          text: senderAddress.country
        },
        {},
        {}
      )}</div></div>

                <div class="bottomCard_invoiceInfo-billTo svelte-lswt2h"><div class="bottomCard_invoiceInfo-billTo-invoices svelte-lswt2h"><div class="bottomCard_invoiceInfo-billTo-invoiceDate svelte-lswt2h">${validate_component(Text, "Text").$$render($$result, { size: "p", text: "Invoice Date:" }, {}, {})}
                            ${validate_component(Text, "Text").$$render(
        $$result,
        {
          size: innerWidth > 2e3 ? "h3" : "h4",
          text: convertDate(createdAt, 0)
        },
        {},
        {}
      )}</div>

                        <div class="bottomCard_invoiceInfo-billTo-invoiceDue svelte-lswt2h">${validate_component(Text, "Text").$$render($$result, { size: "p", text: "Payment Due:" }, {}, {})}
                            ${validate_component(Text, "Text").$$render(
        $$result,
        {
          size: "h3",
          text: convertDate(paymentDue, 0)
        },
        {},
        {}
      )}</div></div>

                    <div class="bottomCard_invoiceInfo-billTo-client svelte-lswt2h">${validate_component(Text, "Text").$$render($$result, { size: "p", text: "Bill To:" }, {}, {})}
                        <div>${validate_component(Text, "Text").$$render($$result, { size: "h3", text: clientName }, {}, {})}</div>
                        <div class="bottomCard_invoiceInfo-billTo-client-information svelte-lswt2h">${validate_component(Text, "Text").$$render($$result, { size: "p", text: clientAddress.street }, {}, {})}
                            ${validate_component(Text, "Text").$$render($$result, { size: "p", text: clientAddress.city }, {}, {})}
                            ${validate_component(Text, "Text").$$render($$result, { size: "p", text: clientAddress.postCode }, {}, {})}
                            ${validate_component(Text, "Text").$$render($$result, { size: "p", text: clientAddress.country }, {}, {})}</div></div>

                    <div class="bottomCard_invoiceInfo-billTo-email svelte-lswt2h">${validate_component(Text, "Text").$$render($$result, { size: "p", text: "Sent to:" }, {}, {})}
                        ${validate_component(Text, "Text").$$render($$result, { size: "h3", text: clientEmail }, {}, {})}</div></div>

                <div class="bottomCard_invoiceInfo-itemList svelte-lswt2h">${validate_component(InnerCard, "InnerCard").$$render($$result, {}, {}, {
        default: () => {
          return `${each(items, (item, i) => {
            return `<div class="bottomCard_invoiceInfo-itemList-items svelte-lswt2h"><div class="bottomCard_invoiceInfo-itemList-items-description svelte-lswt2h">${validate_component(Text, "Text").$$render($$result, { size: "h3", text: item.name }, {}, {})}
                                    ${validate_component(Text, "Text").$$render(
              $$result,
              {
                size: "p",
                text: "$" + Number(items[i].price).toFixed(2) + " x " + items[i].quantity
              },
              {},
              {}
            )}</div>
                                ${validate_component(Text, "Text").$$render(
              $$result,
              {
                size: "h3",
                text: "$" + numberWithCommas((item.quantity * item.price).toFixed(2))
              },
              {},
              {}
            )}
                            </div>`;
          })}`;
        }
      })}
                    <div class="bottomCard_invoiceInfo-itemList-items-total svelte-lswt2h"><h3 class="svelte-lswt2h">Amount Due</h3>
                        <h3 class="svelte-lswt2h">$${escape(numberWithCommas(total.toFixed(2)))}</h3></div></div></div>`;
    }
  })}</div></div>

<div class="bottomCard_buttons svelte-lswt2h">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="btns svelte-lswt2h">${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "medium",
          fluid: true,
          text: "Edit",
          type: "secondary",
          icon: "pen",
          rounded: true
        },
        {},
        {}
      )}
            ${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "medium",
          fluid: true,
          text: "Delete",
          type: "danger",
          icon: "trash",
          rounded: true
        },
        {},
        {}
      )}
            ${validate_component(Button, "Button").$$render(
        $$result,
        {
          text: "Mark as Paid",
          size: "medium",
          fluid: true,
          icon: "check",
          disabled: status === "paid",
          rounded: true
        },
        {},
        {}
      )}</div>`;
    }
  })}</div>


${``}

${``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loader.svelte-zgwxt6{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:0.625rem;height:100%}",
  map: null
};
let msg = "Getting invoice information, please wait...";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  async function getInvoiceInformation(path) {
    await getInvoicesIndex();
    let invoice = $globalStore.invoices.find((invoice2) => invoice2.id === path);
    if (invoice) {
      return { ...invoice };
    } else {
      const timer = setTimeout(
        () => {
          location.href = "/";
        },
        3e3
      );
      clearTimeout(timer);
      throw new Error("Invoice not found - redirecting you back to the invoice list in 3 seconds...");
    }
  }
  $$result.css.add(css);
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
    <div class="loader svelte-zgwxt6">${validate_component(Text, "Text").$$render($$result, { size: "h2", text: msg }, {}, {})}</div>
`;
    }
    return function(inv) {
      return `
    ${validate_component(InvoiceInformation, "InvoiceInformation").$$render($$result, Object.assign({}, inv), {}, {})}
`;
    }(__value);
  }(getInvoiceInformation($page.params.invoice))}`;
});
export {
  Page as default
};
