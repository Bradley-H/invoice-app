<script lang="ts">
    //COMPONENTS //
    import Button from "$lib/Button/Button.svelte";
    import Invoice from "$lib/Invoice/Invoice.svelte";
    import Text from "$lib/Text/Text.svelte";
    import FormField from "$lib/FormField/FormField.svelte";
    // CONSTANTS //
    import { invoiceFilter } from "../constants/InvoiceOptions";
    // STORES //
    import { globalStore } from "../store/globalStore";
    // VARIABLES AND REACTIVE VALUES //
    $: filter = "Filter" 
    $: filteredInvoices = $globalStore.invoices.filter(
        (invoice) => invoice.status === filter || filter === "all" || filter === "Filter"
    );
    
    // FUNCTIONS //
    import { getInvoicesIndex } from "../store/functionStore";
    // SASS FILES //
    import "../scss/styles.scss";
</script>

<div class="container">
    {#await getInvoicesIndex()}
        <div class="loading">
            <Text size="h3" text="Getting invoices, please wait" />
        </div>
    {:then}
        <div class="helperBar">
            <div class="helperBar_invoice">
                <Text size="h2" text="Invoices" />
                <Text size="p" text="{filteredInvoices.length} invoices" />
            </div>
            <div class="settings">
                <FormField
                    form="select"
                    options={invoiceFilter}
                    bind:value={filter}
                    on:toggleInvoice={(e) => filter = e.detail.val.value}
                    activeFormField={filter.slice(0, 1).toUpperCase() + filter.slice(1)}
                    />
                <Button
                    rounded
                    size="small"
                    icon="plus"
                    text="Add Invoice"
                    on:click={() => ($globalStore.modalStatus = "add")}
                />
            </div>
        </div>
        {#if $globalStore.invoices.length > 0}
            <div class="invoices">
                {#each filteredInvoices as { id, paymentDue, total, clientName, status }, i (i)}
                    <Invoice {id} {paymentDue} {total} {clientName} {status} />
                {/each}
            </div>
        {:else}
            <div class="noInvoices">
                <img src="/noInvoice.svg" alt="No invoice" />
                <div>
                    <Text title size="h2" text="No Invoices" />
                    <Text title size="p" text="To Create an Invoice" />
                    <Text
                        title
                        size="p"
                        text="Click 'Add invoice' at the top"
                    />
                </div>
            </div>
        {/if}
    {/await}
</div>

<style lang="scss">
    @import "../scss/util/index";
    .container {
        @extend %flexCol;
        @extend %fullWidth;
        @include large {
            margin-left: $navWidthLarge;
            width: unset;
        }
        div.invoices {
            @extend %flexCol;
            @extend %fullWidth;
            max-width: $containerWidth;
            margin-top: toRem(27);
            @include laptop {
                display: grid;
                place-items: center;
            }
            @include desktop {
                grid-template-columns: 1fr 1fr;
                gap: toRem(7);
                justify-self: center;
                max-width: 100%;            
            }
            @include large{
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
        .helperBar {
            @extend %flex;
            justify-content: space-between;
            &_invoice {
                @extend %flexCol;
                justify-content: center;
                margin-right: toRem(16);
                gap: toRem(5);
                @include large{
                    gap: toRem(15);
                    font-size: toRem(20);
                }
            }
            .settings {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: toRem(10);
                place-items: center;
                @include tablet {
                    gap: toRem(30);
                }
                @include large{
                    width: toRem(420);
                    height: 100%
                }
            }
        }
        .loading {
            @include centered;
            height: 80vh;
        }
    }

    .noInvoices {
        @extend %flexCol;
        justify-content: center;
        align-items: center;
        height: 60vh;
        div {
            text-align: center;
            margin-top: toRem(16);
        }
    }
</style>
