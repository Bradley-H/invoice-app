<script lang="ts">
    // STORES //
    import { globalStore } from "../../store/globalStore";
    $: theme = $globalStore.theme;
    // PROPS //
    export let text: any = "Hello World";
    export let size = "h1";
    export let title: boolean = false;
    export let disabled: boolean = false;
    // SCSS DEFINITIONS //
    import "../../scss/styles.scss";
</script>

<svelte:element on:click this={size} class:disabled class:title class="txtColor{theme}">
    {text}
    <slot />
</svelte:element>

<style lang="scss">
    @import "../../scss/util/index";

    .disabled {
        color: grey;
    }

    .title {
        margin-bottom: 0.3rem;
    }
</style>
