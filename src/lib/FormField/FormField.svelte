<script lang="ts">
    // COMPONENTS //
    import Text from "$lib/Text/Text.svelte";
    // STORES //
    import { globalStore } from "../../store/globalStore";
    // VARIBLES //
    $: theme = $globalStore.theme;
    // CREATE EVENT DISPATCHER //
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    // PROPS //
    export let form: string = "text";
    export let title: boolean = false;
    export let id: string = "";
    export let text: string = "";
    export let value: any;
    export let options = [];
    export let valid: boolean = false;
    export let disabled: boolean = false;
    export let placeholder: string = "";
    export let invalidMessage: string = "";
    export let activeFormField: string = "";
    // varaibles //
    let innerWidth: number = 0
    let active: boolean = false;
    function numField(e) {
        // CHECK IF IT'S A NUMBER //
        if (e.target.value.match(/^[0-9]*$/)) {
            // IF IT IS, SET VALUE //
            value = e.target.value;
            // SEE IF IT'S A STRING WITH A FLOATING POITN NUMBER //
        } else if (e.target.value.match(/^[0-9]*\.[0-9]*$/)) {
            // IF IT IS, SET VALUE //
            value = e.target.value;
            // IF IT'S NOT A NUMBER, SET VALUE TO 0 //
        } else {
            value = 0;
        }
    }
    import "../../scss/styles.scss";
    let touched = false;
    
</script>

<svelte:window bind:innerWidth={innerWidth} />

<div class:title>
    <label for={id}>
        <Text size="p" title {text} /></label>
    {#if form === "text"}
        <input
            {disabled}
            class={theme}
            class:invalid={!valid && touched}
            {id}
            type="text"
            {placeholder}
            bind:value
            on:blur={() => (touched = true)}
        />
    {:else if form === "number"}
        <input
            {disabled}
            class={theme}
            class:invalid={!valid && touched}
            on:keydown={numField}
            {id}
            type="number"
            {placeholder}
            on:blur={() => (touched = true)}
            bind:value
        />
    {:else if form === "date"}
        <input
            {disabled}
            {id}
            type="date"
            {placeholder}
            class:invalid={!valid}
            bind:value
        />
    {:else if form === "select"}
    <div class="filter {theme}" on:click={() => active = !active}
        on:keypress={() => active = !active}>
        <div class="option">
            <div class="title" >
                <Text size="{innerWidth >= 1440 ? "h3" : "h4"}" text={activeFormField} />
                    <i class="fas fa-caret-down" class:active={active}></i>
            </div>
            <ul class:active={active}
                on:click={() => active = !active}
                on:keypress={() => active = !active}>
                {#each options as val(val.id)}
                    <li on:click={() => dispatch("toggleInvoice", {val})}
                        on:click={() => active = !active}
                        on:keypress={() => active = !active}
                        on:keypress={() => dispatch("toggleInvoice", {val})}>
                        <Text size="{innerWidth >= 1440 ? "h3" : "h4"}" text={val.text} />
                    </li>
                {/each}
            </ul>
        </div>
        
    </div>
    {/if}
    {#if invalidMessage && !valid && touched}
        <p class:invalid={!valid}>{invalidMessage}</p>
    {/if}
</div>

<style lang="scss">
    @import "../../scss/util/index.scss";
    div {
        @extend %fullWidth;
        &.title {
            @include tablet{
                transform: translateY(.25rem);
            }
        }
        input,
        .filter {
            padding: toRem(13);
            border-radius: toRem(5);
            font-weight: bold;
            @extend %fullWidth;
            height: 3.3rem;
            @include large{
                height: toRem(80);
                font-size: 1.3rem;
            }
            &.invalid {
                border: toRem(1) solid $colorDanger;
            }
            &.Dark {
                background-color: lighten($color: $bgColorDark, $amount: 7);
                color: #fff;
            }
            &.Light{
                border: 2px solid black;
                color: black;
            }
            &:disabled {
                opacity: 0.6;
            }
            
        }
    }

    .filter{
        position: relative;
        @extend %fullWidth;
        @extend %fullHeight;
        padding: 0;
        z-index: 2;
        cursor: pointer;
        .title{
            display: flex;
            align-items: center;
            gap: 2rem;
            transform: translateY(.25rem);
            @include large{
                transform: translateY(.8rem)
            }
            i{
                margin-left: auto;
                font-size: toRem(20);
                transform-origin: center center;
                transform: rotate(180deg);
                transition: all 0.5s ease;
                @include large{
                    font-size: toRem(30);
                }
                &.active{
                    transform: rotate(0deg);
                }
            }
        }

        ul{
            display: flex;
            flex-direction: column;
            opacity: 0;
            transition: all 0.5s ease;
            transform: translateY(-15px);
            position: absolute;
            @extend %fullWidth;
            left: 0;
            top: 100%;
            pointer-events: none;
            &.active{
                opacity: 1;
                transform: translateY(0px);
                li{
                    pointer-events: all;
                }
            }
            li{
                pointer-events: none;
                padding: .75rem;
                @extend %fullHeight;
                @include centered;
                pointer-events: none;  
            }
        }
        &.Dark{
            ul{
                background-color: lighten($color: $bgColorDark, $amount: 7);
                li:hover{
                    background-color: lighten($color: $bgColorDark, $amount: 10);
                }
            }
        }
        &.Light{
            ul{
                background-color: darken($color: $bgColorLight, $amount: 7);
                li:hover{
                    background-color: darken($color: $bgColorLight, $amount: 11);
                }
            }
        }

        }
        

    p {
        display: none;
        color: $colorDanger;
        margin: toRem(5) 0;
        &.invalid {
            display: block;
            font-weight: bold;
        }
    }

    input[type="number"] {
        appearance: textfield;
    }
</style>
