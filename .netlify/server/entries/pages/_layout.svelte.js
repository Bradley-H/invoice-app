import { c as create_ssr_component, a as subscribe, e as escape, b as createEventDispatcher, v as validate_component, o as onDestroy, d as set_store_value, f as each } from "../../chunks/index2.js";
import { g as globalStore, T as Text, B as Button, c as convertDate, a as closeModal, s as strValid, e as emailValid, C as Card, n as numberWithCommas } from "../../chunks/functionStore.js";
import { F as FormField, o as options } from "../../chunks/InvoiceOptions.js";
import { I as InnerCard, B as BackButton } from "../../chunks/ModalPrompt.svelte_svelte_type_style_lang.js";
import { p as page } from "../../chunks/stores.js";
import { uid } from "uid";
const Navigation_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-tscrz4 .settings i.svelte-tscrz4,nav.svelte-tscrz4.svelte-tscrz4{width:100%}nav.svelte-tscrz4 .settings .themeSwitcher.svelte-tscrz4,nav.svelte-tscrz4 .settings i.svelte-tscrz4,nav.svelte-tscrz4 .settings.svelte-tscrz4{height:100%}nav.svelte-tscrz4.svelte-tscrz4{display:flex;height:4.375rem;background-color:#1e2139;z-index:5}@media(min-width: 992px){nav.svelte-tscrz4.svelte-tscrz4{flex-direction:column;height:100%;width:4.6875rem;position:fixed;left:0;top:0;border-top-right-radius:0.9375rem}}@media(min-width: 2000px){nav.svelte-tscrz4.svelte-tscrz4{width:9.375rem}}nav.svelte-tscrz4 .settings.svelte-tscrz4{display:flex;justify-content:center;align-items:center;flex-direction:row;color:white;font-size:1.75rem;margin:0 0 0 auto}@media(min-width: 992px){nav.svelte-tscrz4 .settings.svelte-tscrz4{flex-direction:column;width:4.6875rem;height:100%;margin:auto 0 0 0}}@media(min-width: 2000px){nav.svelte-tscrz4 .settings.svelte-tscrz4{width:9.375rem}}nav.svelte-tscrz4 .settings i.svelte-tscrz4{cursor:pointer;display:flex;justify-content:center;align-items:center}nav.svelte-tscrz4 .settings .themeSwitcher.svelte-tscrz4{border-right:0.125rem solid rgba(128, 128, 128, 0.6);padding:0 1.5625rem 0 1.5625rem}@media(min-width: 992px){nav.svelte-tscrz4 .settings .themeSwitcher.svelte-tscrz4{border-bottom:0.125rem solid rgba(128, 128, 128, 0.6);border-right:none;width:4.6875rem;padding:0 0 2.0625rem 0;margin-top:auto;height:0}}@media(min-width: 2000px){nav.svelte-tscrz4 .settings .themeSwitcher.svelte-tscrz4{width:9.375rem}}nav.svelte-tscrz4 .settings .avatar.svelte-tscrz4{padding:0 1.5625rem}@media(min-width: 992px){nav.svelte-tscrz4 .settings .avatar.svelte-tscrz4{padding:1.25rem 0 0.9375rem 0}}a.svelte-tscrz4.svelte-tscrz4{display:flex;justify-content:center;align-items:center;background-color:#7c5dfa;color:white;width:4.6875rem;height:4.375rem;font-size:1.5625rem;transition:transform 0.4s ease-in-out;border-top-right-radius:0.9375rem}a.svelte-tscrz4.svelte-tscrz4:hover{transform:scale(1.1)}@media(min-width: 2000px){a.svelte-tscrz4.svelte-tscrz4{width:9.375rem;height:8.75rem;font-size:2.1875rem}}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => value);
  let icon = "moon";
  $$result.css.add(css$3);
  $$unsubscribe_globalStore();
  return `<nav class="svelte-tscrz4"><a href="/" class="svelte-tscrz4"><i class="fas fa-home svelte-tscrz4"></i></a>
        
    <div class="settings svelte-tscrz4"><div class="themeSwitcher svelte-tscrz4"><i class="${"fas fa-" + escape(icon, true) + " svelte-tscrz4"}"></i></div>
        <div class="avatar svelte-tscrz4"><i class="fas fa-user-circle svelte-tscrz4"></i></div></div>
</nav>`;
});
const css$2 = {
  code: ".overlay.svelte-1fzlic6,.prompt.svelte-1fzlic6{width:100%}.prompt.svelte-1fzlic6{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-width:37.5rem;z-index:5;padding:1.5625rem;line-height:1.5;text-align:center}.overlay.svelte-1fzlic6{position:fixed;top:0;left:0;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:4}.btns.svelte-1fzlic6{display:flex;justify-content:space-around;margin-top:1.25rem}",
  map: null
};
const ModalPrompt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  return `<div class="prompt svelte-1fzlic6">${validate_component(InnerCard, "InnerCard").$$render($$result, { modal: true }, {}, {
    default: () => {
      return `${validate_component(Text, "Text").$$render($$result, { size: "h3", text }, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}
       <div class="btns svelte-1fzlic6">${validate_component(Button, "Button").$$render(
        $$result,
        {
          type: "danger",
          rounded: true,
          size: "large",
          icon: "check",
          text: "Yes"
        },
        {},
        {}
      )}
           ${validate_component(Button, "Button").$$render(
        $$result,
        {
          type: "primary",
          rounded: true,
          size: "large",
          icon: "times",
          text: "No"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div>

<div class="overlay svelte-1fzlic6"></div>`;
});
const InvoiceModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btns.svelte-hpukue div.svelte-hpukue,.btns.svelte-hpukue.svelte-hpukue{display:flex}form.svelte-hpukue .billFrom.svelte-hpukue{display:flex;flex-direction:column}.attributes.svelte-hpukue.svelte-hpukue,.itemList.svelte-hpukue .nameField.svelte-hpukue,.itemList.svelte-hpukue.svelte-hpukue,form.svelte-hpukue .billTo_information.svelte-hpukue,form.svelte-hpukue .billTo.svelte-hpukue,form.svelte-hpukue .billFrom_information.svelte-hpukue{display:grid}form.svelte-hpukue .billTo_information-city.svelte-hpukue,form.svelte-hpukue .billFrom_information-city.svelte-hpukue{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px}div.overlay.svelte-hpukue.svelte-hpukue,.modal.svelte-hpukue.svelte-hpukue{width:100%}div.overlay.svelte-hpukue.svelte-hpukue,.modal.svelte-hpukue.svelte-hpukue{height:100%}form.svelte-hpukue p.svelte-hpukue{color:#7c5dfa;margin:1rem 0;font-weight:bold}form.svelte-hpukue .items.svelte-hpukue{margin-bottom:5rem}form.svelte-hpukue .title.svelte-hpukue{margin-bottom:0.9375rem}form.svelte-hpukue .billFrom.svelte-hpukue{margin-top:2.1875rem}form.svelte-hpukue .billFrom_information.svelte-hpukue{gap:0.9375rem}@media(min-width: 768px){form.svelte-hpukue .billFrom_information-city.svelte-hpukue{grid-template-columns:1fr 1fr 1fr}}@media(min-width: 2000px){form.svelte-hpukue .billFrom_information-city.svelte-hpukue{margin:2.8125rem 0}}form.svelte-hpukue .billFrom_information-country.svelte-hpukue{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-hpukue .billFrom_information-country.svelte-hpukue{grid-column:unset}}form.svelte-hpukue .billTo.svelte-hpukue{grid-template-columns:1fr;gap:0.9375rem}@media(min-width: 2000px){form.svelte-hpukue .billTo.svelte-hpukue{margin:25px 0}}form.svelte-hpukue .billTo_invoiceInformation.svelte-hpukue{display:grid;gap:0.9375rem}@media(min-width: 768px){form.svelte-hpukue .billTo_invoiceInformation.svelte-hpukue{grid-template-columns:1fr 1fr;gap:0.625rem}}form.svelte-hpukue .billTo_information-city.svelte-hpukue{margin:1rem 0}@media(min-width: 768px){form.svelte-hpukue .billTo_information-city.svelte-hpukue{grid-template-columns:1fr 1fr 1fr}}form.svelte-hpukue .billTo_information-country.svelte-hpukue{grid-column:span 2/span 2}@media(min-width: 768px){form.svelte-hpukue .billTo_information-country.svelte-hpukue{grid-column:unset}}.modal.svelte-hpukue.svelte-hpukue{z-index:4;position:fixed;margin:2rem 0 0 0;max-width:37.5rem;margin:4.375rem 0 0 0;inset:0 0 0 0}@media(min-width: 768px){.modal.svelte-hpukue.svelte-hpukue{max-width:43.75rem}}@media(min-width: 992px){.modal.svelte-hpukue.svelte-hpukue{max-width:35.9375rem;margin:0 0 0 4.6875rem}}@media(min-width: 2000px){.modal.svelte-hpukue.svelte-hpukue{max-width:43.75rem;margin:0 0 0 9.375rem}}@media(min-width: 2600px){.modal.svelte-hpukue.svelte-hpukue{max-width:50rem}}div.overlay.svelte-hpukue.svelte-hpukue{position:absolute;top:0;left:0;background-color:rgba(0, 0, 0, 0.5);z-index:3}.btns.svelte-hpukue.svelte-hpukue{align-items:center;justify-content:center;width:100%;transform:translateY(-2.5rem);position:sticky;margin:2rem 0}@media(min-width: 2000px){.btns.svelte-hpukue.svelte-hpukue{height:5rem}}.btns.svelte-hpukue div.svelte-hpukue{gap:0.5rem;margin-left:0.5rem}@media(min-width: 992px){.btns.svelte-hpukue.svelte-hpukue{transform:translateY(-1rem)}}.itemList.svelte-hpukue.svelte-hpukue{margin-bottom:2rem;grid-template-columns:1fr 2fr}.itemList.svelte-hpukue .nameField.svelte-hpukue{grid-template-columns:1fr}.attributes.svelte-hpukue.svelte-hpukue{grid-template-columns:1fr 1fr 1fr 0.1fr;gap:0.375rem;margin-left:0.625rem}@media(min-width: 768px){.attributes.svelte-hpukue.svelte-hpukue{grid-template-columns:1fr 1fr 1.5fr 0.3fr;gap:0.625rem;margin-left:0.625rem}}i.svelte-hpukue.svelte-hpukue{color:red;font-size:1.125rem}@media(min-width: 992px){i.svelte-hpukue.svelte-hpukue{font-size:1.5625rem;transform:translateY(0.3125rem)}}@media(min-width: 2000px){i.svelte-hpukue.svelte-hpukue{font-size:1.875rem;transform:translateY(0.625rem)}}button.svelte-hpukue.svelte-hpukue{display:grid;cursor:pointer;height:100%;place-items:center;margin-left:0.5rem}button.svelte-hpukue i.svelte-hpukue{margin-top:1rem}",
  map: null
};
const InvoiceModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let senderAddress;
  let clientAddress;
  let items;
  let id;
  let clientName;
  let description;
  let clientEmail;
  let filterItem;
  let saveInvoice;
  let discardInvoice;
  let addItem;
  let calculateTotal;
  let $globalStore, $$unsubscribe_globalStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  onDestroy(() => {
    set_store_value(globalStore, $globalStore.modalStatus = null, $globalStore);
    newInvoice = null;
  });
  let isValid = false;
  let prompt = null;
  let terms = 30;
  let activeFormField = "Within 30 Days";
  let newInvoice = {
    id: $globalStore.modalStatus === "edit" ? $page.params.invoice : uid(6).toUpperCase(),
    senderAddress: {
      street: "",
      city: "",
      country: "",
      postCode: ""
    },
    clientAddress: {
      street: "",
      city: "",
      country: "",
      postCode: ""
    },
    items: [
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0
      }
    ],
    clientName: "",
    clientEmail: "",
    paymentDue: convertDate(/* @__PURE__ */ new Date(), terms),
    // CONVERT TO TODAYS DATE //
    createdAt: convertDate(/* @__PURE__ */ new Date(), 0),
    status: "",
    terms: +terms,
    description: "",
    total: 0,
    addItem() {
      newInvoice.items = [
        ...items,
        {
          name: "",
          quantity: 0,
          price: 0,
          total: 0
        }
      ];
    },
    discardInvoice() {
      prompt = null;
      closeModal();
    },
    calculateTotal() {
      let total = 0;
      items.forEach((item) => {
        total += item.quantity * item.price;
      });
      newInvoice.total = total;
      return total;
    },
    saveInvoice(status) {
      newInvoice.status = status;
      if ($globalStore.modalStatus === "edit") {
        let invoice = $globalStore.invoices.find((invoice2) => invoice2.id === $page.params.invoice);
        calculateTotal();
        invoice.senderAddress = senderAddress;
        invoice.clientAddress = clientAddress;
        invoice.items = items;
        invoice.clientName = newInvoice.clientName;
        invoice.clientEmail = newInvoice.clientEmail;
        invoice.paymentDue = convertDate(/* @__PURE__ */ new Date(), terms);
        invoice.createdAt = newInvoice.createdAt;
        invoice.description = newInvoice.description;
        invoice.total = newInvoice.total;
        invoice.terms = newInvoice.terms;
        invoice.status = status;
        set_store_value(globalStore, $globalStore.invoices = [...$globalStore.invoices], $globalStore);
        localStorage.setItem("invoices", JSON.stringify($globalStore.invoices));
        closeModal();
        location.reload();
      } else {
        closeModal();
        calculateTotal();
        set_store_value(globalStore, $globalStore.invoices = [...$globalStore.invoices, newInvoice], $globalStore);
        localStorage.setItem("invoices", JSON.stringify($globalStore.invoices));
      }
    },
    filterItem(index) {
      items = items.filter((item, i) => i !== index);
    }
  };
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ senderAddress, clientAddress, items, id, clientName, description, clientEmail, filterItem, saveInvoice, discardInvoice, addItem, calculateTotal } = newInvoice);
    {
      if (strValid(senderAddress.street) && strValid(senderAddress.city) && strValid(senderAddress.country) && strValid(senderAddress.postCode) && strValid(clientAddress.street) && strValid(clientAddress.city) && strValid(clientAddress.country) && strValid(clientAddress.postCode) && strValid(newInvoice.clientName) && emailValid(newInvoice.clientEmail) && strValid(newInvoice.description) && items.length > 0 && items.every((item) => strValid(item.name)) && items.every((item) => item.quantity > 0) && items.every((item) => item.price > 0)) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
    $$rendered = `<div class="modal svelte-hpukue">${validate_component(Card, "Card").$$render($$result, { modal: true }, {}, {
      default: () => {
        return `<form class="svelte-hpukue"><div class="title svelte-hpukue">${validate_component(Text, "Text").$$render(
          $$result,
          {
            title: true,
            size: innerWidth > 1880 ? "h1" : "h2",
            text: $globalStore.modalStatus === "add" ? "Add New Invoice" : `Edit Invoice #${id}`
          },
          {},
          {}
        )}

                ${validate_component(BackButton, "BackButton").$$render($$result, {}, {}, {})}</div>

            <div class="billFrom svelte-hpukue"><p class="svelte-hpukue">Bill From</p>
                <div class="billFrom_information svelte-hpukue">${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            title: true,
            text: "Street Address",
            id: "senderStreet",
            placeholder: "Street Address",
            valid: strValid(senderAddress.street),
            invalidMessage: "Please enter a valid street address",
            value: senderAddress.street
          },
          {
            value: ($$value) => {
              senderAddress.street = $$value;
              $$settled = false;
            }
          },
          {}
        )}

                    <div class="billFrom_information-city svelte-hpukue">${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            title: true,
            text: "City",
            id: "senderCity",
            placeholder: "City",
            valid: strValid(senderAddress.city),
            invalidMessage: "Please enter a valid city",
            value: senderAddress.city
          },
          {
            value: ($$value) => {
              senderAddress.city = $$value;
              $$settled = false;
            }
          },
          {}
        )}

                        ${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            title: true,
            text: "Postal Code",
            id: "senderPostCode",
            placeholder: "Postal code",
            valid: strValid(senderAddress.postCode),
            invalidMessage: "Please enter a valid postal code",
            value: senderAddress.postCode
          },
          {
            value: ($$value) => {
              senderAddress.postCode = $$value;
              $$settled = false;
            }
          },
          {}
        )}

                        <div class="billFrom_information-country svelte-hpukue">${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            title: true,
            id: "senderCountry",
            text: "Country",
            placeholder: "Country",
            valid: strValid(senderAddress.country),
            invalidMessage: "Please enter a valid country",
            value: senderAddress.country
          },
          {
            value: ($$value) => {
              senderAddress.country = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div></div></div>

            <div class="billTo svelte-hpukue"><p class="svelte-hpukue">Bill To</p>
                ${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            text: "Client's Name",
            id: "clientName",
            placeholder: "Name",
            valid: strValid(clientName),
            invalidMessage: "Please enter a valid name",
            value: newInvoice.clientName
          },
          {
            value: ($$value) => {
              newInvoice.clientName = $$value;
              $$settled = false;
            }
          },
          {}
        )}

                ${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            text: "Client's Email",
            id: "clientEmail",
            placeholder: "Email",
            valid: emailValid(clientEmail),
            invalidMessage: "Please enter a valid email",
            value: newInvoice.clientEmail
          },
          {
            value: ($$value) => {
              newInvoice.clientEmail = $$value;
              $$settled = false;
            }
          },
          {}
        )}

                ${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            text: "Street Address",
            id: "clientStreet",
            placeholder: "Street Address",
            valid: strValid(clientAddress.street),
            invalidMessage: "Please enter a valid street",
            value: clientAddress.street
          },
          {
            value: ($$value) => {
              clientAddress.street = $$value;
              $$settled = false;
            }
          },
          {}
        )}

                <div class="billTo_information svelte-hpukue"><div class="billTo_information-city svelte-hpukue">${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            text: "City",
            id: "clientCity",
            placeholder: "City",
            valid: strValid(clientAddress.city),
            invalidMessage: "Please enter a valid city",
            value: clientAddress.city
          },
          {
            value: ($$value) => {
              clientAddress.city = $$value;
              $$settled = false;
            }
          },
          {}
        )}

                        ${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            text: "Postal Code",
            id: "clientPostCode",
            placeholder: "Postal code",
            valid: strValid(clientAddress.postCode),
            invalidMessage: "Please enter a valid postal code",
            value: clientAddress.postCode
          },
          {
            value: ($$value) => {
              clientAddress.postCode = $$value;
              $$settled = false;
            }
          },
          {}
        )}

                        <div class="billTo_information-country svelte-hpukue">${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            id: "clientCountry",
            text: "Country",
            placeholder: "Country",
            valid: strValid(clientAddress.country),
            invalidMessage: "Please enter a valid country",
            value: clientAddress.country
          },
          {
            value: ($$value) => {
              clientAddress.country = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div></div>

                <div class="billTo_invoiceInformation svelte-hpukue">${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            text: "Payment Due",
            id: "paymentDue",
            disabled: true,
            value: convertDate(/* @__PURE__ */ new Date(), terms),
            valid: true
          },
          {},
          {}
        )}

                    ${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            form: "select",
            text: "Payment Terms",
            options,
            id: "paymentTerms",
            activeFormField,
            value: terms
          },
          {
            value: ($$value) => {
              terms = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>
                ${validate_component(FormField, "FormField").$$render(
          $$result,
          {
            text: "Project Description",
            id: "description",
            placeholder: "Project Description",
            valid: strValid(description),
            invalidMessage: "Please enter a valid description.",
            value: newInvoice.description
          },
          {
            value: ($$value) => {
              newInvoice.description = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>

            <p class="svelte-hpukue">Item list</p>
            <div class="items svelte-hpukue">${each(items, (item, i) => {
          return `<div class="itemList svelte-hpukue"><div class="nameField svelte-hpukue">${validate_component(FormField, "FormField").$$render(
            $$result,
            {
              title: true,
              id: "Name" + i,
              text: "Name",
              placeholder: "Item",
              valid: strValid(item.name),
              invalidMessage: "Must be greater than 5 characters.",
              value: item.name
            },
            {
              value: ($$value) => {
                item.name = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>
                        <div class="attributes svelte-hpukue">${validate_component(FormField, "FormField").$$render(
            $$result,
            {
              title: true,
              id: "qty" + i,
              form: "number",
              text: "Qty",
              valid: item.quantity >= 1,
              invalidMessage: "Must be greater than 1.",
              value: item.quantity
            },
            {
              value: ($$value) => {
                item.quantity = $$value;
                $$settled = false;
              }
            },
            {}
          )}

                            ${validate_component(FormField, "FormField").$$render(
            $$result,
            {
              title: true,
              id: "price" + i,
              form: "number",
              text: "Price",
              valid: item.price >= 1,
              invalidMessage: "Must be greater than 1.",
              value: item.price
            },
            {
              value: ($$value) => {
                item.price = $$value;
                $$settled = false;
              }
            },
            {}
          )}

                            ${validate_component(FormField, "FormField").$$render(
            $$result,
            {
              title: true,
              value: "$" + numberWithCommas(item.quantity * item.price),
              valid: true,
              id: "total" + i,
              disabled: true,
              text: "Total",
              placeholder: "Total"
            },
            {},
            {}
          )}
                            <button class="svelte-hpukue"><i class="fas fa-trash svelte-hpukue"></i>
                            </button></div>
                    </div>`;
        })}
                ${validate_component(Button, "Button").$$render(
          $$result,
          {
            rounded: true,
            icon: "plus",
            fluid: true,
            text: "Add Item"
          },
          {},
          {}
        )}</div>
            <div class="btns svelte-hpukue">${validate_component(Button, "Button").$$render(
          $$result,
          {
            type: "danger",
            icon: "trash",
            size: "small",
            rounded: true,
            text: "Discard"
          },
          {},
          {}
        )}
                <div class="svelte-hpukue">${validate_component(Button, "Button").$$render(
          $$result,
          {
            type: "secondary",
            icon: "save",
            size: "small",
            disabled: !isValid,
            rounded: true,
            text: "Save as Draft"
          },
          {},
          {}
        )}
                    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            type: "primary",
            size: "small",
            icon: "paper-plane",
            disabled: !isValid,
            rounded: true,
            text: "Save and Send"
          },
          {},
          {}
        )}</div></div></form>`;
      }
    })}</div>

<div class="overlay svelte-hpukue"></div>


${prompt == "discard" ? `${validate_component(ModalPrompt, "ModalPrompt").$$render($$result, { text: "You want to discard the changes?" }, {}, {})}` : ``}

${prompt === "draft" ? `${validate_component(ModalPrompt, "ModalPrompt").$$render(
      $$result,
      {
        text: "You want to save this invoice as draft?"
      },
      {},
      {}
    )}` : ``}

${prompt === "pending" ? `${validate_component(ModalPrompt, "ModalPrompt").$$render(
      $$result,
      {
        text: "You want to save this invoice as pending?"
      },
      {},
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  return $$rendered;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-x8hoqn{display:flex;flex-direction:column}main.svelte-x8hoqn{height:100%;width:100%;padding:1.25rem 1.0625rem;overflow:auto}@media(min-width: 992px){main.svelte-x8hoqn{padding:1rem 2rem 2rem 6.5rem}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theme;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$result.css.add(css);
  theme = $globalStore.theme;
  $$unsubscribe_globalStore();
  return `${$globalStore.modalStatus !== null ? `${validate_component(InvoiceModal, "InvoiceModal").$$render($$result, {}, {}, {})}` : ``}


${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}
<main class="${"bgColor" + escape(theme, true) + " svelte-x8hoqn"}">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
